'use strict';

const el = (id) => document.getElementById(id);
const toolSelect = el('tool');
const argsBox = el('args');
const perspectiveInput = el('perspectiveId');
const resultBox = el('result');
const resultMeta = el('resultMeta');
const runButton = el('runButton');
const rawToggle = el('rawToggle');

let catalog = [];
let docTopics = [];
let lastPayload = null;
let lastOk = false;

const QUICK_NAMES = [
  'ad4m_get_documentation',
  'ad4m_auth_status',
  'ad4m_get_my_did',
  'ad4m_list_perspectives',
  'ad4m_describe_perspective',
  'ad4m_instance_query',
  'ad4m_query_links',
  'ad4m_instance_transcript',
  'ad4m_get_flows',
];

function showResult(text, kind = '') {
  resultBox.textContent = text;
  resultBox.className = kind;
}

async function getJson(url, options) {
  const response = await fetch(url, options);
  const data = await response.json().catch(() => ({ ok: false, error: 'Ogiltigt svar från servern.' }));
  if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
  return data;
}

function fillPlaceholders(value) {
  const id = perspectiveInput.value.trim();
  if (typeof value === 'string') return value.replace(/\{\{P\}\}/g, id);
  if (Array.isArray(value)) return value.map(fillPlaceholders);
  if (value && typeof value === 'object') {
    const out = {};
    Object.entries(value).forEach(([key, val]) => { out[key] = fillPlaceholders(val); });
    return out;
  }
  return value;
}

function labelFor(tool) {
  const entry = catalog.find((item) => item.name === tool);
  return entry ? entry.label : tool;
}

function setTool(tool, args) {
  toolSelect.value = tool;
  argsBox.value = JSON.stringify(fillPlaceholders(args), null, 2);
  resultMeta.textContent = `— ${labelFor(tool)}`;
  showResult('Argument ifyllda. Tryck på ”Kör läsanrop”.', 'pending');
}

function payloadBody(data) {
  if (data && data.result && data.result.result) return data.result;
  return data;
}

function extractText(data) {
  const body = payloadBody(data);
  const text = body && body.result && body.result.content && body.result.content[0]
    ? body.result.content[0].text
    : null;
  if (typeof text !== 'string') return JSON.stringify(data, null, 2);
  try {
    return JSON.stringify(JSON.parse(text), null, 2);
  } catch (error) {
    return text;
  }
}

function renderResult() {
  if (!lastPayload) return;
  const text = rawToggle.checked ? JSON.stringify(lastPayload, null, 2) : extractText(lastPayload);
  showResult(text, lastOk ? 'ok' : 'error');
}

function isPayloadError(payload) {
  const body = payloadBody(payload);
  return Boolean(body && (body.error || (body.result && body.result.isError)));
}

async function callTool(tool, args) {
  return getJson('/api/call', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tool, args }),
  });
}

async function refreshStatus() {
  const state = el('executorState');
  state.textContent = 'kontrollerar …';
  state.className = 'pending';
  try {
    const data = await getJson('/api/status');
    el('endpoint').textContent = data.endpoint;
    el('toolCount').textContent = String(data.allowedTools);
    el('configState').textContent = data.activeConfigUnchanged ? 'oförändrad' : 'ÄNDRAD — kontrollera!';
    el('configState').className = data.activeConfigUnchanged ? 'ok' : 'error';
    state.textContent = data.executorReachable ? 'nås på 127.0.0.1:3001' : 'ej tillgänglig — starta executorn';
    state.className = data.executorReachable ? 'ok' : 'error';

    catalog = data.toolCatalog || [];
    docTopics = data.docTopics || [];

    if (data.tools && data.tools.length) {
      const previous = toolSelect.value;
      toolSelect.replaceChildren();
      data.tools.forEach((tool) => {
        const option = document.createElement('option');
        option.value = tool;
        option.textContent = tool;
        toolSelect.append(option);
      });
      if (previous && data.tools.includes(previous)) toolSelect.value = previous;
    }
    if (data.defaultPerspectiveId && !perspectiveInput.value) {
      perspectiveInput.value = data.defaultPerspectiveId;
    }

    buildQuickActions();
    buildCatalog();
    buildDocTopics();
  } catch (error) {
    state.textContent = error.message;
    state.className = 'error';
  }
}

function buildQuickActions() {
  const host = el('quickActions');
  host.replaceChildren();
  QUICK_NAMES.forEach((name) => {
    const entry = catalog.find((item) => item.name === name);
    if (!entry) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = entry.label;
    const note = document.createElement('small');
    note.textContent = entry.description;
    button.append(note);
    button.addEventListener('click', () => setTool(entry.name, entry.args));
    host.append(button);
  });
}

function buildCatalog() {
  const host = el('toolCatalog');
  host.replaceChildren();
  catalog.forEach((entry) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = entry.label;
    const note = document.createElement('small');
    note.textContent = entry.description;
    const name = document.createElement('code');
    name.textContent = entry.name;
    note.append(document.createElement('br'), name);
    button.append(note);
    button.addEventListener('click', () => setTool(entry.name, entry.args));
    host.append(button);
  });
}

function buildDocTopics() {
  const host = el('docTopics');
  host.replaceChildren();
  docTopics.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = item.label;
    button.addEventListener('click', () => loadDoc(item.topic, item.label));
    host.append(button);
  });
}

async function loadDoc(topic, label) {
  const view = el('docView');
  view.textContent = `Läser ${label} …`;
  view.className = 'doc-view pending';
  try {
    const data = await callTool('ad4m_get_documentation', { topic });
    view.textContent = extractText(data);
    view.className = isPayloadError(data) ? 'doc-view error' : 'doc-view';
  } catch (error) {
    view.textContent = error.message;
    view.className = 'doc-view error';
  }
}

async function loadSchema() {
  const view = el('schemaView');
  view.textContent = 'Läser schema …';
  view.className = 'doc-view pending';
  try {
    const data = await callTool('ad4m_describe_perspective', { perspective_id: perspectiveInput.value.trim() });
    const parsed = JSON.parse(extractText(data));
    const lines = [];
    lines.push(`Perspektiv: ${parsed.name || '(namnlöst)'}`);
    lines.push(`ID: ${parsed.perspective_id || '(okänt)'}`);
    lines.push(`Neighbourhood: ${parsed.is_neighbourhood ? 'ja' : 'nej'}`);
    const classes = parsed.classes || [];
    lines.push('', `Klasser (${classes.length}):`);
    if (!classes.length) lines.push('  (inga registrerade klasser)');
    classes.forEach((entry) => {
      lines.push(`  - ${entry.name || JSON.stringify(entry)}`);
      (entry.properties || []).forEach((prop) => {
        lines.push(`      ${prop.name}: ${prop.type || '?'}${prop.required ? ' [required]' : ''}`);
      });
      (entry.collections || []).forEach((col) => {
        lines.push(`      collection: ${col.name || JSON.stringify(col)}`);
      });
    });
    const flows = parsed.flows || [];
    lines.push('', `Flöden (${flows.length}):`);
    if (!flows.length) lines.push('  (inga registrerade flöden)');
    flows.forEach((flow) => lines.push(`  - ${flow.name || JSON.stringify(flow)}`));
    if (parsed.usage) lines.push('', 'Användning:', parsed.usage);
    view.textContent = lines.join('\n');
    view.className = 'doc-view';
  } catch (error) {
    view.textContent = error.message;
    view.className = 'doc-view error';
  }
}

el('callForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  let args;
  try {
    args = JSON.parse(argsBox.value || '{}');
  } catch (error) {
    showResult(`Ogiltig JSON i argument: ${error.message}`, 'error');
    return;
  }
  if (!args || typeof args !== 'object' || Array.isArray(args)) {
    showResult('Argument måste vara ett JSON-objekt.', 'error');
    return;
  }

  runButton.disabled = true;
  showResult('Kör lokalt läsanrop …', 'pending');
  try {
    const data = await callTool(toolSelect.value, args);
    lastPayload = data;
    lastOk = data.ok && !isPayloadError(data);
    resultMeta.textContent = `— ${labelFor(data.tool || toolSelect.value)}`;
    renderResult();
  } catch (error) {
    lastPayload = null;
    resultMeta.textContent = `— ${labelFor(toolSelect.value)}`;
    showResult(error.message, 'error');
  } finally {
    runButton.disabled = false;
  }
});

rawToggle.addEventListener('change', renderResult);
el('loadSchema').addEventListener('click', loadSchema);
el('clearButton').addEventListener('click', () => {
  lastPayload = null;
  resultMeta.textContent = '';
  showResult('Inget anrop ännu.');
});
el('refreshStatus').addEventListener('click', refreshStatus);

refreshStatus();
