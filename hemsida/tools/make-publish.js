#!/usr/bin/env node
/*
 * make-publish.js — bygg en fristående, statisk kopia av hemsidan.
 *
 * Användning (från projektroten):
 *   node hemsida/tools/make-publish.js
 *   node hemsida/tools/make-publish.js --out C:\temp\cb-pages
 *   node hemsida/tools/make-publish.js --no-media --check
 *
 * Kopierar hemsidan och alla lokalt länkade filer till <out>/ och behåller
 * sökvägarna relativa till projektroten. Därefter följs lokala referenser i
 * kopierade HTML-, JS- och CSS-filer (src, href, url(), fetch, import) så att
 * t.ex. skärmsläckarna och narrationsspelaren får med sig sina tillgångar.
 * Inget skickas någonstans: detta är bara en lokal mapp. Publicering kräver
 * ett separat mänskligt beslut (D-008).
 */
"use strict";

var fs = require("fs");
var path = require("path");
var D = require("../data.js");

var projectRoot = path.resolve(__dirname, "../..");
var args = process.argv.slice(2);

function arg(name, fallback) {
  var i = args.indexOf(name);
  if (i !== -1 && args[i + 1]) return args[i + 1];
  return fallback;
}

var out = path.resolve(projectRoot, arg("--out", "hemsida/export"));
var checkOnly = args.indexOf("--check") !== -1;
var noMedia = args.indexOf("--no-media") !== -1;
var maxDepth = 5;
var maxScanBytes = 2 * 1024 * 1024;

var copied = Object.create(null);   // projektrelativ sökväg -> true
var skipped = Object.create(null);  // medvetet hoppade sökvägar
var warnings = [];
var bytes = 0;

var MEDIA = /\.(wav|mp3|m4a|ogg|mp4|webm|pdf)$/i;
var TEXT = /\.(html?|js|mjs|css|json|md|csv|txt|svg|py|ts)$/i;
var BLOCK = /(^|\/)(node_modules\/(?!three\/)|\.git\/|\.opencode\/|dist\/|hilma-translation\/english-pdf\/|research-project\/hilma-papers\/|narration\/output\/cache\/|notes-assistant\/data\/)/i;

function rel(abs) {
  var r = path.relative(projectRoot, path.resolve(abs)).split(path.sep).join("/");
  if (r.charAt(0) === "/" || /^[a-z]:/i.test(r) || r.indexOf("..") === 0) return null;
  return r;
}

function queue(seeds) {
  var todo = [];
  seeds.forEach(function (raw) {
    var r = rel(path.resolve(projectRoot, raw));
    if (!r) { warnings.push("Utanför projektroten: " + raw); return; }
    todo.push({ r: r, depth: 0 });
  });
  return todo;
}

/* Samla alla länkar ur båda språken plus hemsidans egna filer. */
function seeds() {
  var list = ["hemsida/index.html", "hemsida/visa.html", "hemsida/styles.css",
    "hemsida/app.js", "hemsida/i18n.js", "hemsida/data.js", "hemsida/README.md",
    "hemsida/tools/make-art.js", "hemsida/tools/make-publish.js",
    "hemsida/assets/hero.svg"];
  ["sv", "en"].forEach(function (lang) {
    var L = D.locales[lang];
    L.steps.forEach(function (s) {
      list.push(path.posix.join("hemsida", s.art));
      s.links.forEach(function (l) { list.push(path.posix.join("hemsida", l.path)); });
    });
    L.groups.forEach(function (g) {
      g.links.forEach(function (l) { list.push(path.posix.join("hemsida", l.path)); });
    });
    L.figures.forEach(function (fig) { list.push("figures/" + fig.file); });
  });
  fs.readdirSync(path.join(projectRoot, "hemsida", "assets")).forEach(function (f) {
    if (/\.svg$/i.test(f)) list.push("hemsida/assets/" + f);
  });
  return list;
}

/* Hitsamma men försiktiga lokala referenser i textfiler. */
function references(text, fileRel) {
  var found = [];
  var patterns = [
    /(?:src|href)\s*=\s*["']([^"'#>?]+)["']/gi,
    /url\(\s*(?:"([^"]+)"|'([^']+)'|([^)'",\s]+))\s*\)/g,
    /(?:fetch|open)\(\s*["']([^"']+)["']/gi,
    /(?:^|\n)\s*(?:import|export)[^\n;]*?\bfrom\s+["']([^"']+)["']/g,
    /data-src\s*=\s*["']([^"']+)["']/gi
  ];
  patterns.forEach(function (re) {
    var m;
    while ((m = re.exec(text)) !== null) found.push(m[1] || m[2] || m[3]);
  });
  /* Importkartor i viewer/index.html pekar på /node_modules/three/. */
  if (/node_modules\/three|\bfrom\s+["']three/.test(text)) {
    found.push("node_modules/three/build/three.module.js");
    found.push("node_modules/three/examples/jsm/");
  }
  return found.map(function (value) {
    value = value.split("#")[0].trim();
    if (!value || /^(https?:|data:|mailto:|javascript:|\/|#)/i.test(value)) return null;
    if (/[{}<>$`]/.test(value)) return null;          // mallsträng, inte ett filnamn
    /* Bare import-specifierare (three, three/addons/…) löses av importkartan. */
    if (value === "three" || value.indexOf("three/") === 0) return null;
    /* Bara specifierare som faktiskt är sökvägar: ./ ../ / node_modules/ eller filändelse. */
    if (!/^(\.\.?\/|node_modules\/)/.test(value) && !/\.[a-z0-9]+$/i.test(value)) return null;
    if (value.indexOf("node_modules/") === 0) return { r: value, fromRoot: true };
    var base = path.dirname(path.join(projectRoot, fileRel));
    var resolved = rel(path.resolve(base, value));
    if (!resolved) return null;
    /* TS-import utan filändelse. */
    if (!fs.existsSync(path.join(projectRoot, resolved)) &&
        fs.existsSync(path.join(projectRoot, resolved + ".ts"))) resolved += ".ts";
    /* Narration-webben serverar ljud från systermappen output/. */
    if (!fs.existsSync(path.join(projectRoot, resolved)) && resolved.indexOf("narration/web/output/") === 0) {
      var alt = resolved.replace("narration/web/output/", "narration/output/");
      if (fs.existsSync(path.join(projectRoot, alt))) resolved = alt;
    }
    return { r: resolved, fromRoot: false };
  }).filter(Boolean);
}

function copyFile(r) {
  if (copied[r] || skipped[r]) return false;
  var src = path.join(projectRoot, r);
  var st;
  try { st = fs.statSync(src); }
  catch (err) { warnings.push("Saknas: " + r); skipped[r] = true; return false; }
  if (!st.isFile()) { skipped[r] = true; return false; }
  if (noMedia && MEDIA.test(r)) { warnings.push("Hoppas över media (--no-media): " + r); skipped[r] = true; return false; }
  if (BLOCK.test(r)) { warnings.push("Hoppas över undantagen katalog: " + r); skipped[r] = true; return false; }
  if (st.size > maxScanBytes * 8) { warnings.push("Stor fil kopieras: " + r + " (" + Math.round(st.size / 1048576) + " MB)"); }

  if (!checkOnly) {
    var dest = path.join(out, r);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
  copied[r] = true;
  bytes += st.size;
  return TEXT.test(r) && st.size <= maxScanBytes;
}

function run() {
  var todo = queue(seeds());
  var scanned = 0;
  while (todo.length) {
    var item = todo.shift();
    if (copied[item.r] || skipped[item.r]) continue;
    var scannable = copyFile(item.r);
    if (!scannable || item.depth >= maxDepth) continue;
    var text;
    try { text = fs.readFileSync(path.join(projectRoot, item.r), "utf8"); }
    catch (err) { continue; }
    scanned += 1;
    references(text, item.r).forEach(function (ref) {
      var r = ref.r;
      if (!r) { warnings.push("Kunde inte lösa referens i " + item.r); return; }
      if (ref.fromRoot || item.r === "project-loop/steps/04-partnerships/viewer/index.html") {
        /* Importkartans sökväg börjar med / och är rotrelativ i webbläsaren. */
        if (r.indexOf("node_modules/three/") === 0) {
          var threeRoot = path.posix.dirname(path.posix.dirname(r)); // build/ eller examples/jsm/
          var dir = path.join(projectRoot, r);
          var stat;
          try { stat = fs.statSync(dir); } catch (err) { stat = null; }
          if (stat && stat.isDirectory()) {
            var stack = [r];
            while (stack.length) {
              var d = stack.pop();
              fs.readdirSync(path.join(projectRoot, d)).forEach(function (name) {
                var child = path.posix.join(d, name);
                var s = fs.statSync(path.join(projectRoot, child));
                if (s.isDirectory()) stack.push(child);
                else todo.push({ r: child, depth: item.depth + 1 });
              });
            }
          } else {
            todo.push({ r: r, depth: item.depth + 1 });
          }
          return;
        }
        /* Andra rotrelativa referenser: prova som projektrelativ sökväg. */
        if (rel(path.join(projectRoot, r))) { todo.push({ r: r, depth: item.depth + 1 }); return; }
      }
      if (r) todo.push({ r: r, depth: item.depth + 1 });
    });
  }

  var manifest = {
    generated: new Date().toISOString(),
    source: "hemsida",
    output: rel(out) || out,
    mode: checkOnly ? "check" : (noMedia ? "no-media" : "full"),
    files: Object.keys(copied).sort(),
    fileCount: Object.keys(copied).length,
    skippedCount: Object.keys(skipped).length,
    bytes: bytes,
    scannedTextFiles: scanned,
    warnings: warnings
  };
  if (!checkOnly) {
    fs.mkdirSync(out, { recursive: true });
    fs.writeFileSync(path.join(out, "PUBLISH_MANIFEST.json"), JSON.stringify(manifest, null, 2) + "\n");
  }
  console.log("make-publish: " + manifest.fileCount + " filer, " +
    (bytes / 1048576).toFixed(1) + " MB, " + scanned + " textfiler skannade" +
    (checkOnly ? " (--check, inget kopierat)" : " -> " + out));
  if (warnings.length) {
    console.log("Varningar (" + warnings.length + "):");
    warnings.slice(0, 20).forEach(function (w) { console.log("  " + w); });
    if (warnings.length > 20) console.log("  … och " + (warnings.length - 20) + " till (se manifestet)");
  }
  if (warnings.some(function (w) { return w.indexOf("Saknas:") === 0; })) process.exitCode = 1;
}

run();
