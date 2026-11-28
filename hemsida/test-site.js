/*
 * test-site.js — nollberoende kontroll av hemsidans innehållsförteckning.
 * Kontrollerar båda språken, alla länkar och publiceringsverktyget.
 * Kör: node hemsida/test-site.js
 */
"use strict";

var assert = require("assert");
var fs = require("fs");
var path = require("path");
var D = require("./data.js");

var root = __dirname;
var checks = 0;
var missing = [];

function exists(rel) {
  var p = path.resolve(root, rel);
  if (!fs.existsSync(p)) missing.push(rel);
  return fs.existsSync(p);
}

function locale(label, L) {
  assert.strictEqual(L.steps.length, 9, label + ": nio steg");
  assert.strictEqual(L.groups.length, 8, label + ": åtta komponentgrupper");
  assert.strictEqual(L.figures.length, 8, label + ": åtta figurer");
  checks += 3;

  L.steps.forEach(function (s, i) {
    assert.strictEqual(s.n, i + 1, label + ": stegens ordning");
    assert.ok(s.links.length > 0, label + ": varje steg har minst en länk");
    assert.ok(exists(s.art), label + ": stegbild saknas: " + s.art);
    s.links.forEach(function (l) { assert.ok(exists(l.path), label + ": länk saknas: " + l.path); });
    checks += 3 + s.links.length;
  });

  L.groups.forEach(function (g) {
    assert.ok(g.links.length > 0, label + ": varje grupp har länkar");
    g.links.forEach(function (l) { assert.ok(exists(l.path), label + ": länk saknas: " + l.path); });
    checks += 1 + g.links.length;
  });

  L.figures.forEach(function (fig) {
    assert.ok(exists("../figures/" + fig.file), label + ": figur saknas: " + fig.file);
    checks += 1;
  });

  var groupLinks = L.groups.reduce(function (sum, g) { return sum + g.links.length; }, 0);
  var stepLinks = L.steps.reduce(function (sum, s) { return sum + s.links.length; }, 0);
  assert.strictEqual(groupLinks, 54, label + ": 54 komponentlänkar");
  assert.strictEqual(stepLinks, 39, label + ": 39 steglänkar");
  checks += 2;
}

assert.deepStrictEqual(Object.keys(D.locales).sort(), ["en", "sv"], "båda språken finns");
assert.strictEqual(D.lang, "sv", "svenska är standard");
assert.ok(exists(D.hero), "hero-bild saknas");
["index.html", "styles.css", "app.js", "i18n.js", "visa.html", "README.md",
 "tools/make-art.js", "tools/make-publish.js"].forEach(function (f) {
  assert.ok(exists(f), "hemsidans fil saknas: " + f);
  checks += 1;
});
["sv", "en"].forEach(function (l) {
  var u = D.ui[l];
  ["title", "navDissertation", "langToEn", "langToSv", "heroIntro", "heroCta3",
   "heroLocalNote", "stepsTitle", "componentsTitle", "figuresTitle", "readerTitle",
   "back", "raw", "loading", "failTitle", "failEmpty", "failHtml", "resultCount"].forEach(function (key) {
    assert.ok(u[key] && typeof u[key] === "string", l + ": UI-sträng saknas: " + key);
    checks += 1;
  });
  assert.strictEqual(u.stats.length, 7, l + ": sju nyckeltal");
  checks += 1;
});
checks += 4;
locale("sv", D.locales.sv);
locale("en", D.locales.en);

var html = fs.readFileSync(path.join(root, "index.html"), "utf8");
["data.js", "i18n.js", "app.js", "lang-toggle", "navDissertation",
 "http://127.0.0.1:8733/", "heroCta3", "heroLocalNote",
 "visa.html?f=../avhandling/README.md"].forEach(function (needle) {
  assert.ok(html.indexOf(needle) !== -1, "index.html saknar: " + needle);
  checks += 1;
});
var i18n = fs.readFileSync(path.join(root, "i18n.js"), "utf8");
["langLink", "addLang", "data-i18n", "localStorage"].forEach(function (needle) {
  assert.ok(i18n.indexOf(needle) !== -1, "i18n.js saknar: " + needle);
  checks += 1;
});

if (missing.length) {
  console.error("Saknade filer:\n" + missing.map(function (m) { return "  " + m; }).join("\n"));
  process.exit(1);
}
console.log("test-site: " + checks + " checks passed · " + missing.length + " saknade filer · sv + en");
