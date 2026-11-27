/*
 * make-art.js — deterministiska SVG-konstverk för hemsidan.
 *
 * Allt ritas lokalt med en liten geometrisk ritdialekt: stjärnfält, cirklar,
 * spiraler, kubgaller och en ouroborosdrake. Ingen bildtjänst, inget nätverk,
 * inga externa tillgångar. Kör: node hemsida/tools/make-art.js
 */
"use strict";

var fs = require("fs");
var path = require("path");

var OUT = path.resolve(__dirname, "..", "assets");
fs.mkdirSync(OUT, { recursive: true });
var ART_ID = ""; // sätts före varje bild så att gradienter och filter matchar

var P = {
  bg: "#060817",
  bg2: "#101637",
  gold: "#e8c46a",
  gold2: "#ffdc8a",
  cobalt: "#6485dd",
  rose: "#d4779e",
  mint: "#79c9b3",
  violet: "#a582c8",
  ink: "#eef1ff",
  dim: "#93a0c8"
};

function rng(seed) {
  var s = seed >>> 0;
  return function () {
    s += 0x6d2b79f5;
    var t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function f(n) { return Math.round(n * 10) / 10; }
function pt(cx, cy, r, a) { return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }
function xy(p) { return f(p[0]) + " " + f(p[1]); }

function defs(id) {
  return [
    "<defs>",
    '<radialGradient id="bg' + id + '" cx="50%" cy="42%" r="75%">',
    '<stop offset="0%" stop-color="' + P.bg2 + '"/>',
    '<stop offset="100%" stop-color="' + P.bg + '"/>',
    "</radialGradient>",
    '<linearGradient id="gold' + id + '" x1="0" y1="0" x2="1" y2="1">',
    '<stop offset="0%" stop-color="' + P.gold2 + '"/>',
    '<stop offset="52%" stop-color="' + P.gold + '"/>',
    '<stop offset="100%" stop-color="' + P.rose + '"/>',
    "</linearGradient>",
    '<filter id="glow' + id + '" x="-50%" y="-50%" width="200%" height="200%">',
    '<feGaussianBlur stdDeviation="7" result="b"/>',
    '<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>',
    "</filter>",
    "</defs>"
  ].join("");
}

function svg(w, h, id, body) {
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + " " + h +
    '" width="' + w + '" height="' + h + '" role="img">\n' +
    defs(id) + "\n" +
    '<rect width="' + w + '" height="' + h + '" fill="url(#bg' + id + ')"/>\n' +
    body.join("\n") + "\n</svg>\n";
}

function stars(rand, w, h, count) {
  var out = ['<g id="stars">'];
  for (var i = 0; i < count; i += 1) {
    var x = rand() * w, y = rand() * h;
    var r = 0.4 + rand() * rand() * 2.1;
    var o = 0.15 + rand() * 0.65;
    out.push('<circle cx="' + f(x) + '" cy="' + f(y) + '" r="' + f(r) +
      '" fill="' + (rand() > 0.82 ? P.gold2 : P.ink) + '" opacity="' + f(o) + '"/>');
  }
  out.push("</g>");
  return out;
}

function rings(cx, cy, radii, color, opacity) {
  return radii.map(function (r) {
    return '<circle cx="' + f(cx) + '" cy="' + f(cy) + '" r="' + f(r) +
      '" fill="none" stroke="' + color + '" stroke-width="1.3" opacity="' + opacity + '"/>';
  });
}

function radialLines(cx, cy, r0, r1, count, color, opacity) {
  var out = ['<g stroke="' + color + '" stroke-width="1" opacity="' + opacity + '">'];
  for (var i = 0; i < count; i += 1) {
    var a = (i / count) * Math.PI * 2;
    var a1 = pt(cx, cy, r0, a), a2 = pt(cx, cy, r1, a);
    out.push('<line x1="' + f(a1[0]) + '" y1="' + f(a1[1]) +
      '" x2="' + f(a2[0]) + '" y2="' + f(a2[1]) + '"/>');
  }
  out.push("</g>");
  return out;
}

function spiral(cx, cy, r, turns, color, opacity) {
  var pts = [], steps = 180;
  for (var i = 0; i <= steps; i += 1) {
    var t = i / steps;
    pts.push(xy(pt(cx, cy, r * t, t * turns * Math.PI * 2)));
  }
  return '<polyline points="' + pts.join(" ") + '" fill="none" stroke="' + color +
    '" stroke-width="2" opacity="' + opacity + '"/>';
}

function cube(cx, cy, s, color, opacity) {
  var dx = s * 0.86, dy = s * 0.5;
  var top = [[cx, cy - s], [cx + dx, cy - s / 2], [cx, cy], [cx - dx, cy - s / 2]];
  var left = [[cx - dx, cy - s / 2], [cx, cy], [cx, cy + s], [cx - dx, cy + s / 2]];
  var right = [[cx + dx, cy - s / 2], [cx, cy], [cx, cy + s], [cx + dx, cy + s / 2]];
  function poly(p, fill, op) {
    return '<polygon points="' + p.map(xy).join(" ") + '" fill="' + fill +
      '" opacity="' + op + '" stroke="' + color + '" stroke-width="1.2"/>';
  }
  return [
    poly(top, P.bg2, (opacity * 1.5).toFixed(2)),
    poly(left, color, (opacity * 0.26).toFixed(2)),
    poly(right, color, (opacity * 0.42).toFixed(2))
  ].join("");
}

function nestedCubes(cx, cy, s, color) {
  var out = [];
  for (var i = 0; i < 4; i += 1) {
    out.push(cube(cx, cy, s - i * s * 0.19, color, 0.8 - i * 0.13));
  }
  return out;
}

function compass(cx, cy, r, color) {
  var out = ['<g opacity="0.9">'];
  for (var i = 0; i < 8; i += 1) {
    var a = i * Math.PI / 4;
    var tip = pt(cx, cy, r, a);
    var l = pt(cx, cy, r * 0.22, a + Math.PI / 2);
    var rr = pt(cx, cy, r * 0.22, a - Math.PI / 2);
    out.push('<polygon points="' + [xy(tip), xy(l), xy(rr)].join(" ") +
      '" fill="' + color + '" opacity="' + (i % 2 ? 0.25 : 0.55) + '"/>');
  }
  out.push('<circle cx="' + f(cx) + '" cy="' + f(cy) + '" r="' + f(r * 0.12) +
    '" fill="' + P.gold2 + '"/>');
  out.push("</g>");
  return out;
}

function constellation(rand, cx, cy, r, n, color) {
  var nodes = [];
  for (var i = 0; i < n; i += 1) {
    var a = rand() * Math.PI * 2, d = Math.sqrt(rand()) * r;
    nodes.push(pt(cx, cy, d, a));
  }
  var out = ['<g stroke="' + color + '" stroke-width="1" opacity="0.42">'];
  for (var j = 0; j < nodes.length; j += 1) {
    var best = -1, bd = 1e9;
    for (var k = 0; k < nodes.length; k += 1) {
      if (j === k) continue;
      var dx = nodes[j][0] - nodes[k][0], dy = nodes[j][1] - nodes[k][1];
      var dd = dx * dx + dy * dy;
      if (dd < bd) { bd = dd; best = k; }
    }
    if (best >= 0) {
      out.push('<line x1="' + f(nodes[j][0]) + '" y1="' + f(nodes[j][1]) +
        '" x2="' + f(nodes[best][0]) + '" y2="' + f(nodes[best][1]) + '"/>');
    }
  }
  out.push("</g>");
  nodes.forEach(function (p) {
    out.push('<circle cx="' + f(p[0]) + '" cy="' + f(p[1]) + '" r="3.4" fill="' +
      P.gold2 + '" opacity="0.9" filter="url(#glow' + ART_ID + ')"/>');
  });
  return out;
}

/*
 * Ouroborosdraken: en avsmalnande både med fjäll, horn, öga och tänder.
 * Enhetsformatet är en ring runt (cx, cy); alla delar är rena SVG-primitiver.
 */
function dragon(cx, cy, r, opt) {
  opt = opt || {};
  var rot = opt.rot || 0;
  var a0 = (opt.a0 === undefined ? -2.5 : opt.a0) + rot;
  var a1 = (opt.a1 === undefined ? 3.7 : opt.a1) + rot;
  var w = opt.width || r * 0.20;
  var color = opt.color || "url(#gold" + ART_ID + ")";
  var steps = 64;
  var outer = [], inner = [];
  for (var i = 0; i <= steps; i += 1) {
    var t = i / steps;
    var a = a0 + (a1 - a0) * t;
    var half = w * (0.10 + 0.90 * Math.pow(t, 0.7)) / 2;
    outer.push(pt(cx, cy, r + half, a));
    inner.push(pt(cx, cy, r - half, a));
  }
  var contour = outer.map(xy).join(" L ") + " L " + inner.reverse().map(xy).join(" L ");
  var out = ['<g id="ouroboros">'];
  out.push('<polygon points="' + contour + '" fill="' + color +
    '" opacity="' + (opt.opacity || 0.95) + '"/>');
  // Längsgående rygglinje.
  var spine = [];
  for (var s = 0; s <= steps; s += 1) {
    spine.push(xy(pt(cx, cy, r, a0 + (a1 - a0) * (s / steps))));
  }
  out.push('<polyline points="' + spine.join(" ") +
    '" fill="none" stroke="' + P.gold2 + '" stroke-width="1" opacity="0.5"/>');
  // Fjäll: sju per synlig kroppsdel, en visuell hyllning till D-032.
  for (var q = 6; q < steps; q += 6) {
    var tq = q / steps;
    var aq = a0 + (a1 - a0) * tq;
    var hw = w * (0.10 + 0.90 * Math.pow(tq, 0.7)) * 0.34;
    var cq = pt(cx, cy, r, aq);
    var deg = (aq + Math.PI / 2) * 180 / Math.PI;
    out.push('<g transform="translate(' + f(cq[0]) + ' ' + f(cq[1]) + ') rotate(' +
      f(deg) + ')"><polygon points="0,' + f(-hw) + ' ' + f(hw) + ',0 0,' + f(hw) +
      ' ' + f(-hw) + ',0" fill="' + P.gold2 + '" opacity="0.42"/></g>');
  }
  // Huvudet i tangentens riktning.
  var h = pt(cx, cy, r, a1);
  var deg2 = (a1 + Math.PI / 2) * 180 / Math.PI;
  var u = w;
  out.push('<g transform="translate(' + f(h[0]) + ' ' + f(h[1]) + ') rotate(' + f(deg2) + ')">');
  out.push('<polygon points="' +
    [f(1.7 * u) + ",0", f(0.9 * u) + "," + f(-0.58 * u), f(-0.1 * u) + "," + f(-0.72 * u),
      f(-0.85 * u) + "," + f(-0.30 * u), f(-0.85 * u) + "," + f(0.30 * u),
      f(-0.1 * u) + "," + f(0.72 * u), f(0.9 * u) + "," + f(0.58 * u)].join(" ") +
    '" fill="' + color + '"/>');
  out.push('<polygon points="' + [f(-0.1 * u) + "," + f(-0.65 * u), f(-0.65 * u) + "," +
    f(-1.45 * u), f(0.15 * u) + "," + f(-0.85 * u)].join(" ") + '" fill="' + P.gold2 + '"/>');
  out.push('<polygon points="' + [f(-0.1 * u) + "," + f(0.65 * u), f(-0.65 * u) + "," +
    f(1.45 * u), f(0.15 * u) + "," + f(0.85 * u)].join(" ") + '" fill="' + P.gold2 + '"/>');
  out.push('<polygon points="' + [f(1.7 * u) + ",0", f(1.15 * u) + "," + f(-0.16 * u),
    f(0.62 * u) + ",0", f(1.15 * u) + "," + f(0.16 * u)].join(" ") +
    '" fill="' + P.bg + '" opacity="0.8"/>');
  out.push('<circle cx="' + f(0.55 * u) + '" cy="' + f(-0.24 * u) + '" r="' +
    f(Math.max(1.6, u * 0.11)) + '" fill="' + P.bg + '"/>');
  out.push('<circle cx="' + f(0.55 * u) + '" cy="' + f(-0.24 * u) + '" r="' +
    f(Math.max(0.7, u * 0.05)) + '" fill="' + P.rose + '"/>');
  out.push("</g></g>");
  return out;
}

function tileBase(id) {
  return [
    '<circle cx="380" cy="230" r="230" fill="' + P.cobalt + '" opacity="0.05"/>',
    '<path d="M0 410 Q 240 350 480 410 L480 480 L0 480 Z" fill="' + P.violet + '" opacity="0.08"/>',
    '<g opacity="0.18">' + rings(240, 240, [86, 132, 178, 224], P.gold, 0.35).join("") + "</g>"
  ];
}

function write(name, content) {
  fs.writeFileSync(path.join(OUT, name), content, "utf8");
  console.log(name + " " + Math.round(content.length / 1024) + " kB");
}

/* ---------- Hero ---------- */
(function () {
  ART_ID = "hero";
  var r = rng(20261127);
  var b = [];
  b.push('<g filter="url(#glowhero)"><circle cx="790" cy="350" r="240" fill="' +
    P.cobalt + '" opacity="0.10"/></g>');
  b = b.concat(stars(r, 1600, 700, 260));
  b = b.concat(rings(800, 350, [110, 180, 260, 350, 430], P.gold, 0.16));
  b = b.concat(radialLines(800, 350, 120, 430, 48, P.cobalt, 0.13));
  b.push(spiral(800, 350, 400, 3.4, P.rose, 0.22));
  b.push('<g opacity="0.55">' + nestedCubes(800, 350, 150, P.cobalt).join("") + "</g>");
  b.push('<g transform="translate(0 -20)">' + dragon(800, 350, 310, {
    width: 78, a0: -2.8, a1: 3.9, color: "url(#goldhero)"
  }).join("") + "</g>");
  // Vänster: af Klint-inspirerade cirklar och lodräta band.
  [140, 190, 240, 290].forEach(function (x, i) {
    b.push('<rect x="' + x + '" y="' + (90 + i * 18) + '" width="16" height="' +
      (520 - i * 36) + '" fill="' + [P.cobalt, P.rose, P.gold, P.mint][i] +
      '" opacity="0.18"/>');
  });
  b.push('<g opacity="0.5">' + rings(250, 360, [52, 92, 138], P.rose, 0.5).join("") + "</g>");
  b.push('<circle cx="250" cy="360" r="16" fill="' + P.gold2 + '" opacity="0.7"/>');
  write("hero.svg", svg(1600, 700, "hero", b));
})();

/* ---------- De nio stegen ---------- */
var tiles = [
  function (r, b) { // 1 — medvetenskap och ordning
    b.push('<g opacity="0.8">' + rings(240, 240, [30, 62, 98, 142, 190], P.gold, 0.55).join("") + "</g>");
    b.push(radialLines(240, 240, 34, 188, 24, P.cobalt, 0.5));
    b.push(compass(240, 240, 46, P.rose));
    b = b.concat(dragon(240, 240, 118, { width: 30, a0: -2.2, a1: 3.9 }));
    b.push('<circle cx="240" cy="240" r="6" fill="' + P.gold2 + '"/>');
  },
  function (r, b) { // 2 — vänner, nätverk, omvärldsbevakning
    b = b.concat(constellation(r, 240, 230, 170, 22, P.cobalt));
    b.push('<g opacity="0.7">' + rings(240, 230, [150, 196], P.mint, 0.5).join("") + "</g>");
    b = b.concat(dragon(240, 230, 150, { width: 26, a0: -1.0, a1: 4.5, color: P.gold2 }));
    b.push('<circle cx="240" cy="230" r="26" fill="' + P.cobalt + '" opacity="0.22"/>');
  },
  function (r, b) { // 3 — projektformulering och prioritering
    b.push(compass(240, 232, 132, P.gold));
    for (var i = 0; i < 7; i += 1) {
      var a = -Math.PI / 2 + i * Math.PI * 2 / 7;
      var p = pt(240, 232, 150, a);
      b.push('<circle cx="' + f(p[0]) + '" cy="' + f(p[1]) + '" r="14" fill="' +
        [P.rose, P.cobalt, P.mint, P.gold, P.violet][i % 5] + '" opacity="0.72"/>');
      b.push('<circle cx="' + f(p[0]) + '" cy="' + f(p[1]) + '" r="4" fill="' + P.ink + '"/>');
    }
    b = b.concat(dragon(240, 232, 76, { width: 20, a0: -2.6, a1: 3.6 }));
  },
  function (r, b) { // 4 — estetisk integritet och grafisk profil
    ["#e8c46a", "#6485dd", "#d4779e", "#79c9b3", "#a582c8"].forEach(function (c, i) {
      b.push('<rect x="' + (38 + i * 84) + '" y="46" width="72" height="72" rx="10" fill="' +
        c + '" opacity="0.8"/>');
    });
    b.push('<g opacity="0.85">' + rings(240, 262, [54, 104, 152], P.gold, 0.6).join("") + "</g>");
    b.push(spiral(240, 262, 172, 2.6, P.rose, 0.55));
    b = b.concat(dragon(240, 262, 104, { width: 24, a0: -1.9, a1: 4.2, color: P.mint }));
    for (var y = 350; y < 460; y += 18) {
      for (var x = 60; x < 430; x += 18) {
        b.push('<circle cx="' + x + '" cy="' + y + '" r="2.6" fill="' + P.gold +
          '" opacity="0.28"/>');
      }
    }
  },
  function (r, b) { // 5 — narrativ integration
    b.push(spiral(240, 240, 190, 3.2, P.cobalt, 0.55));
    b.push('<path d="M30 360 C 170 290 170 160 320 140 S 470 240 450 330" fill="none" stroke="' +
      P.rose + '" stroke-width="7" opacity="0.55"/>');
    b.push('<path d="M20 150 C 180 230 220 350 470 390" fill="none" stroke="' +
      P.mint + '" stroke-width="5" opacity="0.5"/>');
    b = b.concat(dragon(240, 240, 126, { width: 28, a0: -2.4, a1: 3.8 }));
    [112, 168, 224, 280, 336].forEach(function (x, i) {
      b.push('<circle cx="' + x + '" cy="' + (120 + i * 34) + '" r="' + (5 + i) +
        '" fill="' + P.gold2 + '" opacity="0.65"/>');
    });
  },
  function (r, b) { // 6 — state integration
    b.push('<rect x="30" y="40" width="210" height="400" fill="' + P.cobalt + '" opacity="0.11"/>');
    b.push('<rect x="240" y="40" width="210" height="400" fill="' + P.rose + '" opacity="0.11"/>');
    b.push('<line x1="240" y1="30" x2="240" y2="450" stroke="' + P.gold + '" stroke-width="1.5" opacity="0.5"/>');
    b.push('<g opacity="0.6">' + rings(150, 240, [40, 82, 126], P.cobalt, 0.6).join("") + "</g>");
    b.push('<g opacity="0.6">' + rings(330, 240, [40, 82, 126], P.rose, 0.6).join("") + "</g>");
    b = b.concat(dragon(240, 240, 118, { width: 30, a0: -2.0, a1: 4.1, color: P.gold2 }));
    b.push('<circle cx="240" cy="240" r="12" fill="' + P.bg + '"/>');
    b.push('<circle cx="240" cy="240" r="6" fill="' + P.gold2 + '"/>');
  },
  function (r, b) { // 7 — Interpersonal integration
    b.push('<circle cx="170" cy="176" r="26" fill="' + P.gold2 + '" opacity="0.85"/>');
    b.push('<circle cx="310" cy="176" r="26" fill="' + P.gold2 + '" opacity="0.85"/>');
    b.push('<path d="M118 400 Q 120 236 170 214 Q 220 236 222 400 Z" fill="' +
      P.cobalt + '" opacity="0.6"/>');
    b.push('<path d="M258 400 Q 260 236 310 214 Q 360 236 362 400 Z" fill="' +
      P.rose + '" opacity="0.6"/>');
    b.push('<path d="M170 320 L240 300 L310 320 L310 376 L240 356 L170 376 Z" fill="' +
      P.ink + '" opacity="0.9"/>');
    b.push('<line x1="240" y1="300" x2="240" y2="356" stroke="' + P.bg + '" stroke-width="2"/>');
    b = b.concat(dragon(240, 140, 74, { width: 18, a0: -2.4, a1: 3.6, color: P.mint }));
    b.push('<path d="M60 420 Q 240 360 420 420" fill="none" stroke="' +
      P.gold + '" stroke-width="2" opacity="0.5"/>');
  },
  function (r, b) { // 8 — strategisk koordination
    b.push(compass(240, 240, 166, P.gold));
    b = b.concat(constellation(r, 240, 240, 200, 14, P.rose));
    [[80, 380], [150, 300], [240, 240], [340, 330], [410, 130]].forEach(function (p, i) {
      b.push('<path d="M240 240 Q ' + f((p[0] + 240) / 2 + 16) + " " +
        f((p[1] + 240) / 2 - 16) + " " + p[0] + " " + p[1] + '" fill="none" stroke="' +
        [P.cobalt, P.mint, P.gold2][i % 3] + '" stroke-width="2.5" opacity="0.65"/>');
      b.push('<circle cx="' + p[0] + '" cy="' + p[1] + '" r="7" fill="' + P.gold2 + '"/>');
    });
    b = b.concat(dragon(240, 240, 96, { width: 22, a0: -2.2, a1: 3.7 }));
  },
  function (r, b) { // 9 — syntes, konsolidering och återhämtning
    b.push('<circle cx="240" cy="300" r="122" fill="' + P.gold + '" opacity="0.10"/>');
    for (var i = 0; i < 16; i += 1) {
      var a = Math.PI + i * Math.PI / 15;
      var p1 = pt(240, 300, 136, a), p2 = pt(240, 300, 190, a);
      b.push('<line x1="' + f(p1[0]) + '" y1="' + f(p1[1]) + '" x2="' + f(p2[0]) +
        '" y2="' + f(p2[1]) + '" stroke="' + P.gold2 + '" stroke-width="2" opacity="0.32"/>');
    }
    b.push('<g opacity="0.7">' + nestedCubes(240, 230, 78, P.cobalt).join("") + "</g>");
    b = b.concat(dragon(240, 240, 158, { width: 32, a0: -2.7, a1: 3.9 }));
    b.push('<circle cx="240" cy="240" r="6" fill="' + P.rose + '"/>')
  }
];

tiles.forEach(function (draw, i) {
  var n = String(i + 1).padStart(2, "0");
  ART_ID = "t" + n;
  var r = rng(1000 + i);
  var b = tileBase("t" + n);
  b = b.concat(stars(r, 480, 480, 70));
  draw(r, b);
  write("step-" + n + ".svg", svg(480, 480, "t" + n, b));
});
