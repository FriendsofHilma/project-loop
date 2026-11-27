/**
 * Figure generator for the Cosmic Block paper.
 * Produces deterministic SVG figures in ../figures/
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'figures');
fs.mkdirSync(OUT, { recursive: true });

const INK = '#1b1b1f';
const MUTED = '#6b6b76';
const RULE = '#d8d5cc';
const PAPER = '#faf8f3';

const PALETTE = [
  ['0', '#0a0a0a', 'void / ground'],
  ['1', '#ffd600', 'yellow'],
  ['2', '#219a9d', 'teal'],
  ['3', '#e63946', 'vermilion'],
  ['4', '#2a9d8f', 'green'],
  ['5', '#9c2cbd', 'violet'],
  ['6', '#38bdf8', 'sky'],
  ['7', '#f472b6', 'rose'],
  ['8', '#ff8c42', 'orange'],
  ['9', '#ff5f57', 'coral'],
];

function svg(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" font-family="Georgia, 'Times New Roman', serif">
<rect width="${w}" height="${h}" fill="${PAPER}"/>
${body}
</svg>
`;
}

function caption(x, y, t) {
  return `<text x="${x}" y="${y}" font-size="13" fill="${MUTED}" font-style="italic">${t}</text>`;
}

/* ---------- Figure 1: hierarchy ---------- */
function hierarchy() {
  const W = 980, H = 430;
  let b = '';
  const panels = [
    { x: 20, label: 'L1  Line', sub: '13 cells', n: 'line' },
    { x: 212, label: 'L2  Plane', sub: '13 × 13', n: 'plane' },
    { x: 404, label: 'L3  Model Space', sub: '13 × 13 × 13', n: 'space' },
    { x: 596, label: 'L4  Collection', sub: '5 model spaces', n: 'coll' },
    { x: 788, label: 'L5  Higher order', sub: '2 collections', n: 'ho' },
  ];
  const yTop = 40, yBot = 330;

  panels.forEach((p, idx) => {
    b += `<text x="${p.x + 80}" y="${yTop - 12}" font-size="13" font-weight="bold" text-anchor="middle" fill="${INK}">${p.label}</text>`;
    b += `<rect x="${p.x}" y="${yTop}" width="160" height="${yBot - yTop}" rx="4" fill="#ffffff" stroke="${RULE}"/>`;

    if (p.n === 'line') {
      for (let i = 0; i < 13; i++) {
        b += `<rect x="${p.x + 12 + i * 10.4}" y="180" width="8" height="8" fill="${INK}" opacity="0.75"/>`;
      }
    }
    if (p.n === 'plane') {
      for (let r = 0; r < 9; r++)
        for (let c = 0; c < 9; c++)
          b += `<rect x="${p.x + 36 + c * 10}" y="${110 + r * 10}" width="7" height="7" fill="${INK}" opacity="0.5"/>`;
    }
    if (p.n === 'space') {
      for (let d = 3; d >= 0; d--)
        for (let r = 0; r < 7; r++)
          for (let c = 0; c < 7; c++)
            b += `<rect x="${p.x + 34 + c * 9 + d * 11}" y="${140 + r * 9 - d * 7}" width="6" height="6" fill="${INK}" opacity="${0.15 + d * 0.12}"/>`;
    }
    if (p.n === 'coll') {
      for (let k = 0; k < 5; k++) {
        const x = p.x + 42 + k * 15, y = 128 + k * 8;
        b += `<rect x="${x}" y="${y}" width="58" height="78" fill="none" stroke="${INK}" stroke-width="1.1" opacity="${0.35 + k * 0.13}"/>`;
      }
    }
    if (p.n === 'ho') {
      for (let group = 0; group < 2; group++) {
        for (let k = 0; k < 5; k++) {
          const x = p.x + 22 + group * 72 + k * 7, y = 128 + k * 7 + group * 10;
          b += `<rect x="${x}" y="${y}" width="40" height="62" fill="none" stroke="${INK}" stroke-width="1" opacity="${group === 0 ? 0.7 : 0.35}"/>`;
        }
      }
      b += `<line x1="${p.x + 80}" y1="110" x2="${p.x + 80}" y2="255" stroke="${MUTED}" stroke-dasharray="4 3"/>`;
    }
    b += `<text x="${p.x + 80}" y="${yBot + 22}" font-size="12.5" text-anchor="middle" fill="${MUTED}">${p.sub}</text>`;

    if (idx < panels.length - 1) {
      b += `<path d="M ${p.x + 164} 185 L ${p.x + 186} 185" stroke="${MUTED}" stroke-width="1.2"/>
<path d="M ${p.x + 181} 181 L ${p.x + 187} 185 L ${p.x + 181} 189" fill="none" stroke="${MUTED}" stroke-width="1.2"/>`;
    }
  });

  b += caption(20, 400, 'Figure 1. The realized hierarchy. Each level aggregates the level below; levels 6–9 are not drawn (6 is a pair at the top, 7–9 reserved).');
  b += `<text x="20" y="420" font-size="11.5" fill="${MUTED}">Levels 7, 8 and 9 are intentionally unimplemented; Level 8 (the “complementary line”) is defined only in prose.</text>`;
  return svg(W, H, b);
}

/* ---------- Figure 2: 13^3 lattice ---------- */
function lattice() {
  const W = 760, H = 560;
  const n = 13;
  const cx = W / 2, cy = H / 2 + 20;
  const s = 21;
  const c30 = Math.cos(Math.PI / 6), s30 = 0.5;

  // collect projected points for centring
  const pts = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        const x = (k - j) * c30;
        const y = (k + j) * s30 - i;
        pts.push([x, y, i, j, k]);
      }
    }
  }
  const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const px = x => cx + (x - (minX + maxX) / 2) * s;
  const py = y => cy + (y - (minY + maxY) / 2) * s;

  let b = '';
  // sort back-to-front by (i + j + k) so nearer planes draw last
  pts.sort((a, b2) => (a[3] + a[4] + a[2]) - (b2[3] + b2[4] + b2[2]));
  for (const [x, y] of pts) {
    b += `<circle cx="${px(x).toFixed(2)}" cy="${py(y).toFixed(2)}" r="1.9" fill="${INK}" opacity="0.42"/>`;
  }

  // axes from origin corner
  const o = [0, 0, 0];
  const axes = [
    { v: [0, 0, n - 1], t: 'columns  (c)' },
    { v: [0, n - 1, 0], t: 'rows  (r)' },
    { v: [n - 1, 0, 0], t: 'planes  (p)' },
  ];
  const proj = (i, j, k) => [px((k - j) * c30), py((k + j) * s30 - i)];
  const [ox, oy] = proj(0, 0, 0);
  axes.forEach((a, idx) => {
    const [ax, ay] = proj(a.v[0], a.v[1], a.v[2]);
    b += `<line x1="${ox}" y1="${oy}" x2="${ax}" y2="${ay}" stroke="${MUTED}" stroke-width="1.1" stroke-dasharray="3 3"/>`;
    b += `<text x="${ax + (idx === 0 ? 8 : -6)}" y="${ay + (idx === 1 ? 14 : idx === 0 ? 0 : -6)}" font-size="12" fill="${MUTED}" text-anchor="middle">${a.t}</text>`;
  });

  b += `<text x="24" y="34" font-size="14" font-weight="bold" fill="${INK}">13 × 13 × 13 = 2,197 cells</text>`;
  b += caption(24, 56, 'Isometric projection; every dot is one addressable cell with value 0–9.');
  b += caption(24, H - 12, 'Figure 2. Level-3 Model Space drawn exhaustively: all 2,197 cells, no hidden-line removal.');
  return svg(W, H, b);
}

/* ---------- Figure 3: palette ---------- */
function palette() {
  const W = 900, H = 330;
  let b = '';
  b += `<text x="24" y="34" font-size="14" font-weight="bold" fill="${INK}">Value → colour mapping (implementation-defined, af Klint–inspired)</text>`;
  PALETTE.forEach(([v, hex, name], i) => {
    const x = 30 + i * 85, y = 60;
    b += `<rect x="${x}" y="${y}" width="70" height="110" rx="3" fill="${hex}" stroke="${RULE}"/>`;
    b += `<text x="${x + 35}" y="${y + 145}" font-size="13" text-anchor="middle" fill="${INK}" font-weight="bold">${v}</text>`;
    b += `<text x="${x + 35}" y="${y + 162}" font-size="10.5" text-anchor="middle" fill="${MUTED}">${hex}</text>`;
    b += `<text x="${x + 35}" y="${y + 178}" font-size="10" text-anchor="middle" fill="${MUTED}" font-style="italic">${name}</text>`;
  });
  b += `<text x="24" y="282" font-size="11.5" fill="${MUTED}">Ordering is by digit, not by hue: the palette is a lookup table, chosen for distinguishability and symbolic association.</text>`;
  b += caption(24, 312, 'Figure 3. The ten-value palette and its legend. Value 0 is near-black (ground); 5 is violet (axis); 9 is coral (completion).');
  return svg(W, H, b);
}

/* ---------- Figure 4: complementary pair ---------- */
function complement() {
  const W = 840, H = 420;
  let b = '';
  const left = 150, right = 560, top = 86, step = 58;

  b += `<text x="${left + 50}" y="${top - 24}" font-size="13" font-weight="bold" text-anchor="middle" fill="${INK}">A  (w)</text>`;
  b += `<text x="${right + 50}" y="${top - 24}" font-size="13" font-weight="bold" text-anchor="middle" fill="${INK}">B  (9 − w)</text>`;

  for (let k = 0; k < 5; k++) {
    const y = top + k * step;
    const cA = PALETTE[(k * 2) % 10][1];
    const cB = PALETTE[9 - ((k * 2) % 10)][1];
    b += `<rect x="${left}" y="${y}" width="100" height="42" fill="${cA}" stroke="${RULE}"/>`;
    b += `<rect x="${right}" y="${y}" width="100" height="42" fill="${cB}" stroke="${RULE}"/>`;
    b += `<text x="${left + 50}" y="${y + 27}" font-size="12" text-anchor="middle" fill="${k === 0 ? '#f2f0ea' : INK}">ms ${k}</text>`;
    b += `<text x="${right + 50}" y="${y + 27}" font-size="12" text-anchor="middle" fill="${9 - ((k * 2) % 10) === 0 ? '#f2f0ea' : INK}">ms ${k}</text>`;
    b += `<line x1="${left + 108}" y1="${y + 21}" x2="${right - 8}" y2="${y + 21}" stroke="${MUTED}" stroke-width="1" stroke-dasharray="4 3"/>`;
    b += `<path d="M ${right - 14} ${y + 17} L ${right - 7} ${y + 21} L ${right - 14} ${y + 25}" fill="none" stroke="${MUTED}" stroke-width="1"/>`;
    b += `<text x="${(left + right) / 2 + 50}" y="${y + 14}" font-size="10.5" text-anchor="middle" fill="${MUTED}">w ↔ 9 − w</text>`;
  }

  b += `<text x="24" y="32" font-size="13" font-weight="bold" fill="${INK}">Level 6: two Level-5 structures held as complements</text>`;
  b += caption(24, 392, 'Figure 4. The code guarantees only a numerical involution, n ↦ 9 − n.');
  return svg(W, H, b);
}

/* ---------- Figure 5: cardinality ---------- */
function cardinality() {
  const W = 860, H = 400;
  let b = '';
  const data = [
    ['L1', 13],
    ['L2', 169],
    ['L3', 2197],
    ['L4', 10985],
    ['L5', 21970],
    ['L6', 43940],
  ];
  const left = 90, bottom = 300, top = 70, maxH = bottom - top;
  const logMax = Math.log10(50000);
  const bw = 76;
  b += `<line x1="${left - 10}" y1="${bottom}" x2="${left + data.length * 105}" y2="${bottom}" stroke="${RULE}"/>`;

  data.forEach(([label, v], i) => {
    const h = (Math.log10(v) / logMax) * maxH;
    const x = left + i * 105 + 10;
    const y = bottom - h;
    b += `<rect x="${x}" y="${y}" width="${bw}" height="${h}" fill="${INK}" opacity="${0.25 + i * 0.11}"/>`;
    b += `<text x="${x + bw / 2}" y="${y - 8}" font-size="12" text-anchor="middle" fill="${INK}">${v.toLocaleString('en-US')}</text>`;
    b += `<text x="${x + bw / 2}" y="${bottom + 20}" font-size="12.5" text-anchor="middle" fill="${INK}" font-weight="bold">${label}</text>`;
  });

  // log ticks
  for (let e = 1; e <= 4; e++) {
    const y = bottom - (e / logMax) * maxH;
    b += `<line x1="${left - 10}" y1="${y}" x2="${left + data.length * 105}" y2="${y}" stroke="${RULE}" stroke-dasharray="2 4" opacity="0.7"/>`;
    b += `<text x="${left - 18}" y="${y + 4}" font-size="10.5" text-anchor="end" fill="${MUTED}">10^${e}</text>`;
  }

  b += `<text x="24" y="36" font-size="14" font-weight="bold" fill="${INK}">Cell count by level (logarithmic height)</text>`;
  b += caption(24, 56, 'Each level multiplies the previous count by 13, 13, 5, 2, 2 — factors drawn from 13, 5 and 2 (alternating Fibonacci numbers).');
  b += caption(24, 378, 'Figure 5. Cardinality growth. Level 5 holds 21,970 cells; its state space has 10^21,970 elements.');
  return svg(W, H, b);
}

const figures = {
  'fig1-hierarchy.svg': hierarchy(),
  'fig2-lattice.svg': lattice(),
  'fig3-palette.svg': palette(),
  'fig4-complement.svg': complement(),
  'fig5-cardinality.svg': cardinality(),
};

for (const [name, content] of Object.entries(figures)) {
  fs.writeFileSync(path.join(OUT, name), content, 'utf8');
  console.log('wrote', name);
}
