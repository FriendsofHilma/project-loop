#!/usr/bin/env node
// Local AD4M read-only UI bridge.
// Loopback only. No credentials in this repository, no logs, no writes.
'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const net = require('node:net');
const crypto = require('node:crypto');
const { execFile } = require('node:child_process');

const ROOT = __dirname;
const PROJECT = path.resolve(ROOT, '..', '..');
const MCP_CLIENT = path.join(PROJECT, 'poc', 'ad4m-mcp', 'mcp-client.js');
const ACTIVE_CONFIG = path.join(PROJECT, '.opencode', 'opencode.jsonc');
const ENDPOINT = process.env.AD4M_MCP_URL || 'http://127.0.0.1:3001/mcp';
const EXPECTED_CONFIG_SHA = '69CF9697A65AEF5D8ACD18A62FD5E4E69BB6064DD6D7AF46C9171D6962A82ADD';
const PORT = Number(process.env.AD4M_UI_PORT || 8733);
const CREDENTIAL_FILE = '/home/timsan/ad4m-poc-admin-credential';
const PERSPECTIVE_ID = '13da8cc7-fd15-46d0-83c9-f1ffa2ed395e';

// Curated catalogue of exactly the 20 ad4m_* tools allowed by the test config.
// Placeholders ({{P}}, {{URI}}, ...) are filled or edited in the UI.
const TOOL_CATALOG = Object.freeze([
  { name: 'ad4m_get_documentation', label: 'Dokumentation', description: 'Läs AD4M:s guider och referenser', args: { topic: 'overview' } },
  { name: 'ad4m_auth_status', label: 'Auth-status', description: 'Autentisering och capability', args: {} },
  { name: 'ad4m_get_my_did', label: 'Min DID', description: 'Testidentitetens publika DID', args: {} },
  { name: 'ad4m_list_perspectives', label: 'Perspektiv', description: 'Lista lokala perspektiv', args: {} },
  { name: 'ad4m_describe_perspective', label: 'Beskriv perspektiv', description: 'Klasser, properties och flows', args: { perspective_id: '{{P}}' } },
  { name: 'ad4m_instance_query', label: 'Instansfråga', description: 'Lista instanser av en klass', args: { perspective_id: '{{P}}', class_name: 'TextContent', limit: 10 } },
  { name: 'ad4m_instance_get', label: 'Hämta instans', description: 'Hämta en instans via URI', args: { perspective_id: '{{P}}', class_name: 'TextContent', base_uri: '{{URI}}' } },
  { name: 'ad4m_query_links', label: 'Länkar', description: 'Råa RDF-liknande triples', args: { perspective_id: '{{P}}', limit: 20 } },
  { name: 'ad4m_template_read', label: 'Läs template', description: 'Läs WE-template', args: { perspective_id: '{{P}}', base_uri: '{{URI}}' } },
  { name: 'ad4m_get_flows', label: 'Flows', description: 'Flödesdefinitioner i perspektivet', args: { perspective_id: '{{P}}' } },
  { name: 'ad4m_flow_state', label: 'Flow-state', description: 'Aktuellt tillstånd i ett flöde', args: { perspective_id: '{{P}}', flow_name: '{{FLOW}}', expression_address: '{{URI}}' } },
  { name: 'ad4m_flow_actions', label: 'Flow-actions', description: 'Tillgängliga actions i ett flöde', args: { perspective_id: '{{P}}', flow_name: '{{FLOW}}', expression_address: '{{URI}}' } },
  { name: 'ad4m_flow_valid_outputs', label: 'Flow-outputs', description: 'Giltiga outputs från ett tillstånd', args: { perspective_id: '{{P}}', flow_name: '{{FLOW}}' } },
  { name: 'ad4m_get_agent_profile', label: 'Agentprofil', description: 'Agentens profil', args: {} },
  { name: 'ad4m_get_agent_public_perspective', label: 'Publikt perspektiv', description: 'Agentens publika perspektiv', args: {} },
  { name: 'ad4m_language_meta', label: 'Language-meta', description: 'Metadata för ett language address', args: { address: '{{ADDRESS}}' } },
  { name: 'ad4m_list_link_language_templates', label: 'Link-mallar', description: 'Tillgängliga link language-mallar', args: {} },
  { name: 'ad4m_generate_waker_query', label: 'Waker-query', description: 'Bygg en waker-query för en klass', args: { perspective_id: '{{P}}', class_name: 'TextContent' } },
  { name: 'ad4m_get_mention_waker_config', label: 'Mention-waker', description: 'Konfiguration för mention-waker', args: { perspective_id: '{{P}}' } },
  { name: 'ad4m_instance_transcript', label: 'Transkript', description: 'Texttranskript för en nod', args: { perspective_id: '{{P}}', parent: '{{URI}}', limit: 50 } },
]);

const ALLOWED_TOOLS = Object.freeze(TOOL_CATALOG.map((entry) => entry.name));

const DOC_TOPICS = Object.freeze([
  { topic: 'overview', label: 'Översikt' },
  { topic: 'usage', label: 'Användarguide' },
  { topic: 'models', label: 'Egna klasser' },
  { topic: 'architecture', label: 'Arkitektur' },
  { topic: 'template', label: 'Templates' },
  { topic: 'flux', label: 'Flux-appen' },
]);

const STATIC = Object.freeze({
  '/': ['index.html', 'text/html; charset=utf-8'],
  '/index.html': ['index.html', 'text/html; charset=utf-8'],
  '/app.js': ['app.js', 'text/javascript; charset=utf-8'],
  '/styles.css': ['styles.css', 'text/css; charset=utf-8'],
});

function isAllowedTool(tool) {
  return typeof tool === 'string' && ALLOWED_TOOLS.includes(tool);
}

function redactText(text, secret) {
  let out = String(text == null ? '' : text);
  if (secret) out = out.split(secret).join('[REDACTED]');
  return out
    .replace(/Bearer\s+[^\s]+/gi, 'Bearer <redacted>')
    .replace(/did:[A-Za-z0-9._:%-]+/g, 'did:<redacted>')
    .replace(/\b[0-9a-f]{32,}\b/gi, '<hex:redacted>')
    .replace(/\b[A-Za-z0-9_-]{40,}\b/g, '<token:redacted>');
}

function readCredential() {
  return new Promise((resolve, reject) => {
    execFile(
      'wsl.exe',
      ['-e', 'bash', '-lc', `cat ${CREDENTIAL_FILE} 2>/dev/null`],
      { encoding: 'utf8', timeout: 10000, windowsHide: true, maxBuffer: 64 * 1024 },
      (error, stdout) => {
        if (error) return reject(new Error('Kunde inte läsa test-credential från WSL.'));
        const value = String(stdout || '').replace(/[\r\n]+$/, '');
        if (!value) return reject(new Error('Test-credential saknas i WSL.'));
        resolve(value);
      },
    );
  });
}

function probeEndpoint() {
  return new Promise((resolve) => {
    const socket = net.connect({ host: '127.0.0.1', port: 3001 });
    let settled = false;
    const done = (value) => {
      if (settled) return;
      settled = true;
      socket.destroy();
      resolve(value);
    };
    socket.setTimeout(1500);
    socket.once('connect', () => done(true));
    socket.once('timeout', () => done(false));
    socket.once('error', () => done(false));
  });
}

function configState() {
  try {
    const actual = crypto.createHash('sha256').update(fs.readFileSync(ACTIVE_CONFIG)).digest('hex').toUpperCase();
    return { sha256: actual, unchanged: actual === EXPECTED_CONFIG_SHA };
  } catch (error) {
    return { sha256: null, unchanged: false, error: 'Kunde inte läsa aktiv config.' };
  }
}

function sendJson(res, status, body) {
  const payload = Buffer.from(JSON.stringify(body, null, 2));
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': payload.length,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer',
  });
  res.end(payload);
}

function sendText(res, status, text, contentType) {
  const payload = Buffer.from(text);
  res.writeHead(status, {
    'Content-Type': contentType,
    'Content-Length': payload.length,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer',
    'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'",
  });
  res.end(payload);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > 16384) {
        reject(new Error('För stor begäran.'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch (error) {
        reject(new Error('Ogiltig JSON.'));
      }
    });
    req.on('error', reject);
  });
}

function callTool(tool, args, secret) {
  return new Promise((resolve, reject) => {
    const env = { ...process.env };
    env.AD4M_ADMIN_CREDENTIAL = secret;
    delete env.AD4M_ADMIN_CREDENTIAL_FILE;
    env.AD4M_MCP_URL = ENDPOINT;

    // OpenCode exposes <server>_<tool>; the bare MCP server uses the raw name.
    const rawTool = tool.replace(/^ad4m_/, '');

    execFile(
      process.execPath,
      [MCP_CLIENT, 'call', rawTool, '--args', JSON.stringify(args)],
      { encoding: 'utf8', timeout: 45000, windowsHide: true, maxBuffer: 4 * 1024 * 1024, env },
      (error, stdout, stderr) => {
        if (error) {
          const detail = redactText(stderr || error.message, secret);
          return reject(new Error(`Anropet misslyckades: ${detail}`));
        }
        try {
          resolve(JSON.parse(stdout));
        } catch (parseError) {
          reject(new Error('Kunde inte tolka svar från MCP-klienten.'));
        }
      },
    );
  });
}

async function handleApi(req, res) {
  if (req.method === 'GET' && req.url === '/api/status') {
    const cfg = configState();
    return sendJson(res, 200, {
      mode: 'read-only',
      endpoint: ENDPOINT,
      executorReachable: await probeEndpoint(),
      allowedTools: ALLOWED_TOOLS.length,
      tools: ALLOWED_TOOLS,
      toolCatalog: TOOL_CATALOG,
      docTopics: DOC_TOPICS,
      activeConfigUnchanged: cfg.unchanged,
      activeConfigSha256: cfg.sha256,
      defaultPerspectiveId: PERSPECTIVE_ID,
      note: 'Skrivning, inloggning, neighbourhood och betalning är avstängda.',
    });
  }

  if (req.method === 'POST' && req.url === '/api/call') {
    let body;
    try {
      body = await readBody(req);
    } catch (error) {
      return sendJson(res, 400, { ok: false, error: error.message });
    }
    if (!isAllowedTool(body && body.tool)) {
      return sendJson(res, 403, {
        ok: false,
        error: 'Verktyget är inte tillåtet i läsläget. En separat mänsklig decision krävs för skrivning.',
      });
    }
    const args = body.args && typeof body.args === 'object' && !Array.isArray(body.args) ? body.args : {};
    let secret;
    try {
      secret = await readCredential();
      const payload = await callTool(body.tool, args, secret);
      return sendJson(res, 200, { ok: true, tool: body.tool, result: payload });
    } catch (error) {
      return sendJson(res, 502, { ok: false, tool: body.tool, error: redactText(error.message, secret) });
    }
  }

  return sendJson(res, 404, { ok: false, error: 'Okänd väg.' });
}

function createServer() {
  return http.createServer((req, res) => {
    const pathname = (req.url || '').split('?')[0];
    if (pathname.startsWith('/api/')) {
      handleApi(req, res).catch((error) => {
        sendJson(res, 500, { ok: false, error: redactText(error && error.message, null) });
      });
      return;
    }
    const entry = STATIC[pathname];
    if (!entry || req.method !== 'GET') {
      return sendText(res, 404, 'Not found', 'text/plain; charset=utf-8');
    }
    const file = path.join(ROOT, entry[0]);
    fs.readFile(file, (error, data) => {
      if (error) return sendText(res, 404, 'Not found', 'text/plain; charset=utf-8');
      return sendText(res, 200, data, entry[1]);
    });
  });
}

if (require.main === module) {
  createServer().listen(PORT, '127.0.0.1', () => {
    console.log(`AD4M read-only UI: http://127.0.0.1:${PORT}/`);
  });
}

module.exports = { ALLOWED_TOOLS, TOOL_CATALOG, DOC_TOPICS, isAllowedTool, redactText, createServer, PERSPECTIVE_ID };
