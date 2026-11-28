#!/usr/bin/env node
// Static and HTTP-boundary tests for the local read-only AD4M UI.
// No executor and no credential are needed.
'use strict';

const assert = require('node:assert/strict');
const { ALLOWED_TOOLS, TOOL_CATALOG, DOC_TOPICS, isAllowedTool, redactText, createServer, PERSPECTIVE_ID } = require('./server.js');

const DENIED = [
  'ad4m_instance_create',
  'ad4m_instance_update',
  'ad4m_instance_remove',
  'ad4m_add_model',
  'ad4m_add_link',
  'ad4m_execute_commands',
  'ad4m_template_update',
  'ad4m_neighbourhood_publish_from_perspective',
  'ad4m_neighbourhood_join_from_url',
  'ad4m_login_email',
  'ad4m_signup',
  'ad4m_request_capability',
];

let checks = 0;
const check = (name, fn) => {
  fn();
  checks += 1;
  console.log(`ok ${checks} - ${name}`);
};

async function request(port, pathname, options = {}) {
  const response = await fetch(`http://127.0.0.1:${port}${pathname}`, options);
  const text = await response.text();
  let json;
  try { json = JSON.parse(text); } catch { /* static file */ }
  return { status: response.status, text, json, headers: response.headers };
}

async function main() {
  check('exactly the 20 Phase 5 read tools are allowed', () => {
    assert.equal(ALLOWED_TOOLS.length, 20);
    assert.equal(new Set(ALLOWED_TOOLS).size, 20);
    assert.ok(ALLOWED_TOOLS.includes('ad4m_get_documentation'));
    assert.ok(ALLOWED_TOOLS.includes('ad4m_instance_query'));
  });

  check('no write/admin/identity tool is in the allow list', () => {
    DENIED.forEach((tool) => assert.equal(ALLOWED_TOOLS.includes(tool), false, tool));
  });

  check('tool validation is exact', () => {
    assert.equal(isAllowedTool('ad4m_auth_status'), true);
    assert.equal(isAllowedTool('auth_status'), false);
    assert.equal(isAllowedTool('ad4m_instance_create'), false);
    assert.equal(isAllowedTool(null), false);
    assert.equal(isAllowedTool(['ad4m_auth_status']), false);
  });

  check('redaction removes secrets, DIDs and long tokens', () => {
    const secret = 'super-secret-value-123';
    const input = `Bearer ${secret} did:key:z6MkExample abcdef0123456789abcdef0123456789`;
    const out = redactText(input, secret);
    assert.equal(out.includes(secret), false);
    assert.equal(out.includes('did:key:z6MkExample'), false);
    assert.ok(out.includes('<redacted>'));
  });

  check('the disposable perspective id is a UUID, not a secret', () => {
    assert.match(PERSPECTIVE_ID, /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  });

  check('catalog covers all 20 tools with names and start arguments', () => {
    assert.equal(TOOL_CATALOG.length, 20);
    assert.deepEqual(TOOL_CATALOG.map((entry) => entry.name), ALLOWED_TOOLS);
    TOOL_CATALOG.forEach((entry) => {
      assert.ok(entry.label, entry.name);
      assert.ok(entry.description, entry.name);
      assert.ok(entry.args && typeof entry.args === 'object', entry.name);
    });
  });

  check('six documentation topics are offered', () => {
    assert.equal(DOC_TOPICS.length, 6);
    assert.ok(DOC_TOPICS.some((item) => item.topic === 'overview'));
    assert.ok(DOC_TOPICS.some((item) => item.topic === 'models'));
  });

  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();

  try {
    const index = await request(port, '/');
    check('index page is served with a restrictive CSP and the new sections', () => {
      assert.equal(index.status, 200);
      assert.ok(index.text.includes('AD4M'));
      assert.ok(index.text.includes('Guide — läs dokumentationen'));
      assert.ok(index.text.includes('Schema i testperspektivet'));
      assert.ok(index.text.includes('Verktygskatalog — alla 20'));
      assert.match(index.headers.get('content-security-policy') || '', /default-src 'self'/);
    });

    const traversal = await request(port, '/server.js');
    check('source files are not served', () => {
      assert.equal(traversal.status, 404);
    });

    const status = await request(port, '/api/status');
    check('status endpoint stays in read-only mode', () => {
      assert.equal(status.status, 200);
      assert.equal(status.json.mode, 'read-only');
      assert.equal(status.json.allowedTools, 20);
      assert.equal(status.json.tools.length, 20);
      assert.equal(status.json.toolCatalog.length, 20);
      assert.equal(status.json.docTopics.length, 6);
      assert.ok(status.json.note.includes('avstängda'));
    });

    for (const tool of ['ad4m_instance_create', 'ad4m_execute_commands', 'ad4m_neighbourhood_join_from_url']) {
      const blocked = await request(port, '/api/call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool, args: {} }),
      });
      check(`${tool} is rejected before any credential is read`, () => {
        assert.equal(blocked.status, 403);
        assert.equal(blocked.json.ok, false);
      });
    }

    const malformed = await request(port, '/api/call', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{',
    });
    check('malformed JSON is rejected', () => {
      assert.equal(malformed.status, 400);
    });
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }

  console.log(`\n${checks} checks passed.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
