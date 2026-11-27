/**
 * Deterministic step-4 figures for the Cosmic Block graphic profile.
 * Uses d3 7.9.2 (ISC). Writes figures/fig6–fig8.svg without touching fig1–fig5.
 */
import fs from 'node:fs';
import path from 'node:path';
import {
  arc,
  chord,
  ribbon,
  scaleLinear,
  scaleSequential,
  interpolateRgbBasis,
  interpolateRgb,
  range,
} from 'd3';

const OUT = path.join(process.cwd(), 'figures');
fs.mkdirSync(OUT, { recursive: true });

const INK = '#1b1b1f';
const MUTED = '#6b6b76';
const RULE = '#d8d5cc';
const PAPER = '#faf8f3';
const SURFACE = '#ffffff';

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

function svg(w, h, title, desc, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" font-family="Georgia, 'Times New Roman', serif">
<title>${title}</title>
<desc>${desc}</desc>
<rect width="${w}" height="${h}" fill="${PAPER}"/>
${body}
</svg>
`;
}

function caption(x, y, text) {
  return `<text x="${x}" y="${y}" font-size="12.5" fill="${MUTED}" font-style="italic">${text}</text>`;
}

function luminance(hex) {
  const rgb = hex.replace('#', '').match(/../g).map((h) => parseInt(h, 16) / 255);
  const lin = rgb.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

function textOn(hex) {
  return luminance(hex) > 0.42 ? INK : PAPER;
}

/* ---------- Figure 6: approved graphic profile board ---------- */
function profileBoard() {
  const W = 1000;
  const H = 620;
  let b = '';
  b += `<text x="30" y="38" font-size="15" font-weight="bold" fill="${INK}">Grafisk profil v0.1 — godkänd 2026-11-25 (D-017)</text>`;
  b += caption(30, 60, 'Tokens, cellvärde → färg, typografi och evidensmärkning i ett enda översiktsblad.');

  const x = scaleLinear().domain([0, 9]).range([30, W - 30 - 84]);
  PALETTE.forEach(([v, hex, name], i) => {
    const px = x(i);
    const py = 88;
    b += `<rect x="${px}" y="${py}" width="84" height="92" rx="3" fill="${hex}" stroke="${RULE}"/>`;
    b += `<text x="${px + 42}" y="${py + 55}" font-size="24" font-weight="bold" text-anchor="middle" fill="${textOn(hex)}">${v}</text>`;
    b += `<text x="${px + 42}" y="204" font-size="13" font-weight="bold" text-anchor="middle" fill="${INK}">${v}</text>`;
    b += `<text x="${px + 42}" y="220" font-size="10" text-anchor="middle" fill="${MUTED}">${hex}</text>`;
    b += `<text x="${px + 42}" y="236" font-size="9" text-anchor="middle" fill="${MUTED}" font-style="italic">${name}</text>`;
  });

  b += `<rect x="30" y="262" width="940" height="104" rx="4" fill="${SURFACE}" stroke="${RULE}"/>`;
  b += `<text x="48" y="292" font-size="14" font-weight="bold" fill="${INK}">Georgia, 'Times New Roman', serif</text>`;
  b += `<text x="48" y="316" font-size="13" fill="${INK}">Rubrik 14 · brödtext 12–13 · caption 13 kursiv · fotnot 11,5</text>`;
  b += `<text x="48" y="342" font-size="12.5" fill="${MUTED}" font-style="italic">Figur N. Vad som visas. Källa: fil:rad. Metod: generator. Status: [E] | [I] | [?].</text>`;

  const marks = [
    ['[E]', 'primär källa / kod'],
    ['[E-secondary]', 'tryckt eller webbkälla'],
    ['[I]', 'tolkning eller val'],
    ['[?]', 'osäkerhet'],
    ['[FÖRSLAG]', 'kräver godkännande'],
  ];
  marks.forEach(([tag, meaning], i) => {
    const px = 30 + i * 190;
    b += `<rect x="${px}" y="386" width="178" height="56" rx="3" fill="${SURFACE}" stroke="${RULE}"/>`;
    b += `<text x="${px + 12}" y="409" font-size="12" font-weight="bold" fill="${INK}">${tag}</text>`;
    b += `<text x="${px + 12}" y="429" font-size="10.5" fill="${MUTED}">${meaning}</text>`;
  });

  b += `<rect x="30" y="466" width="940" height="104" rx="4" fill="${SURFACE}" stroke="${RULE}"/>`;
  b += `<text x="48" y="494" font-size="13" font-weight="bold" fill="${INK}">Regel för trogen återgivning</text>`;
  b += `<text x="48" y="518" font-size="12" fill="${INK}">Samma värde → samma hex i kod, figur, tabell och caption. Färg är aldrig evidens.</text>`;
  b += `<text x="48" y="542" font-size="12" fill="${MUTED}" font-style="italic">Urval kallas urval; helhet kallas helhet. Osäkerhet märks [?] nära påståendet.</text>`;

  b += caption(30, 600, 'Figur 6. Grafisk profil i ett blad. Källa: tools/make-figures.js:11–27 och GRAFISK_PROFIL.md. Metod: d3.scaleLinear. Status: [I]; färgerna är inte uppmätta ur The Key [?].');
  return svg(W, H, 'Grafisk profil v0.1', 'Token board with ten value colours, typography, evidence tags and caption grammar.', b);
}

/* ---------- Figure 7: complement involution ---------- */
function complementChord() {
  const W = 900;
  const H = 720;
  const cx = 450;
  const cy = 348;
  const n = 10;
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  for (const i of range(n)) {
    const j = 9 - i;
    if (i !== j) {
      matrix[i][j] = 1;
    }
  }
  const chords = chord().padAngle(0.06)(matrix);
  const groupArc = arc().innerRadius(206).outerRadius(214).cornerRadius(3);
  const ribbonGen = ribbon().radius(200).padAngle(0.06);
  const mid = (d) => (d.startAngle + d.endAngle) / 2 - Math.PI / 2;
  const point = (r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];

  let defs = '<defs>';
  chords.forEach((c, i) => {
    const [x1, y1] = point(200, mid(c.source));
    const [x2, y2] = point(200, mid(c.target));
    const a = PALETTE[c.source.index][1];
    const z = PALETTE[c.target.index][1];
    defs += `<linearGradient id="comp-${i}" gradientUnits="userSpaceOnUse" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"><stop offset="0%" stop-color="${a}"/><stop offset="100%" stop-color="${z}"/></linearGradient>`;
  });
  defs += '</defs>';

  let b = defs;
  b += `<text x="30" y="38" font-size="15" font-weight="bold" fill="${INK}">Komplementinvolutionen n ↦ 9 − n</text>`;
  b += caption(30, 60, 'Numerisk egenskap hos värdetalfabetet [E]; layouten är vår tolkning [I].');

  chords.forEach((c, i) => {
    b += `<path d="${ribbonGen(c)}" fill="url(#comp-${i})" opacity="0.82" stroke="${INK}" stroke-width="0.7"/>`;
  });
  chords.groups.forEach((g) => {
    b += `<path d="${groupArc(g)}" fill="${PALETTE[g.index][1]}" stroke="${INK}" stroke-width="0.8"/>`;
    const a = mid(g);
    const [lx, ly] = point(242, a);
    const anchor = Math.cos(a) > 0.25 ? 'start' : Math.cos(a) < -0.25 ? 'end' : 'middle';
    b += `<text x="${lx.toFixed(2)}" y="${(ly + 4).toFixed(2)}" font-size="15" font-weight="bold" text-anchor="${anchor}" fill="${INK}">${g.index}</text>`;
  });

  b += `<text x="${cx}" y="${cy - 6}" font-size="16" font-weight="bold" text-anchor="middle" fill="${INK}">5 par</text>`;
  b += `<text x="${cx}" y="${cy + 20}" font-size="12" text-anchor="middle" fill="${MUTED}">0↔9 · 1↔8 · 2↔7 · 3↔6 · 4↔5</text>`;
  b += caption(30, 668, 'Figur 7. Komplementparens fem ribbons. Källa: AGENTS.md §2 och src/structures/collection/. Metod: d3.chord + d3.ribbon, d3 7.9.2. Status: [E] för involutionen, [I] för formen.');
  b += caption(30, 694, 'Ingen påstås om färgpsykologi, af Klints avsikt eller terapeutisk betydelse.');
  return svg(W, H, 'Komplementinvolutionen n to 9 minus n', 'Chord diagram of the five complement pairs in the Cosmic Block value alphabet.', b);
}

/* ---------- Figure 8: byte-offset address map ---------- */
function offsetMap() {
  const W = 1000;
  const H = 640;
  const cell = 28;
  const ox = 80;
  const oy = 104;
  const xScale = scaleLinear().domain([0, 12]).range([0, 12 * cell]);
  const yScale = scaleLinear().domain([0, 12]).range([0, 12 * cell]);
  const fill = scaleSequential(interpolateRgbBasis(['#eef3f2', '#219a9d', '#0a0a0a'])).domain([4096, 4264]);

  let b = '';
  b += `<text x="30" y="38" font-size="15" font-weight="bold" fill="${INK}">Adresskartan för en modellrymd — offset är matematisk, inte fysisk 3D</text>`;
  b += caption(30, 60, 'Planet z = 0 i första modellrymden: 13 × 13 = 169 byteadresser.');

  for (const yy of range(13)) {
    for (const xx of range(13)) {
      const offset = 4096 + (0 * 13 + yy) * 13 + xx;
      b += `<rect x="${(ox + xScale(xx)).toFixed(1)}" y="${(oy + yScale(yy)).toFixed(1)}" width="${cell - 1}" height="${cell - 1}" fill="${fill(offset)}" stroke="${PAPER}" stroke-width="0.6"/>`;
    }
  }
  b += `<rect x="${ox}" y="${oy}" width="${12 * cell}" height="${12 * cell}" fill="none" stroke="${INK}" stroke-width="1.2"/>`;
  for (const i of range(0, 13, 3)) {
    b += `<text x="${(ox + xScale(i) + cell / 2).toFixed(1)}" y="${oy + 12 * cell + 20}" font-size="11" text-anchor="middle" fill="${MUTED}">${i}</text>`;
    b += `<text x="${ox - 10}" y="${(oy + yScale(i) + cell / 2 + 4).toFixed(1)}" font-size="11" text-anchor="end" fill="${MUTED}">${i}</text>`;
  }
  b += `<text x="${ox + 12 * cell}" y="${oy + 12 * cell + 42}" font-size="12" text-anchor="end" fill="${INK}">x →</text>`;
  b += `<text x="${ox - 10}" y="${oy - 12}" font-size="12" text-anchor="end" fill="${INK}">y ↓</text>`;
  b += `<text x="${ox}" y="${oy + 12 * cell + 62}" font-size="11.5" fill="${MUTED}">4096 vid (0,0,0)</text>`;
  b += `<text x="${ox + 12 * cell}" y="${oy + 12 * cell + 62}" font-size="11.5" text-anchor="end" fill="${MUTED}">4264 vid (0,12,12)</text>`;

  b += `<rect x="500" y="94" width="470" height="330" rx="4" fill="${SURFACE}" stroke="${RULE}"/>`;
  b += `<text x="520" y="124" font-size="13" font-weight="bold" fill="${INK}">Headers, payload och tre grannsteg</text>`;
  b += `<text x="520" y="153" font-size="11.5" fill="${INK}">offset = 4096 + (ho·5 + space)·2197 + (z·13 + y)·13 + x</text>`;
  b += `<text x="520" y="175" font-size="11.5" fill="${MUTED}" font-style="italic">här: ho = 0, space = 0, z = 0 → 4096 + y·13 + x</text>`;

  const cellBox = (px, py, label, color) => {
    b += `<rect x="${px}" y="${py}" width="30" height="30" rx="2" fill="${color}" stroke="${INK}" stroke-width="0.8"/>`;
    b += `<text x="${px + 15}" y="${py + 20}" font-size="10" text-anchor="middle" fill="${textOn(color)}">${label}</text>`;
  };
  const arrowH = (x1, x2, y, label, color) => {
    b += `<line x1="${x1}" y1="${y}" x2="${x2 - 6}" y2="${y}" stroke="${color}" stroke-width="2"/>`;
    b += `<path d="M ${x2 - 8} ${y - 4} L ${x2} ${y} L ${x2 - 8} ${y + 4} Z" fill="${color}"/>`;
    b += `<text x="${(x1 + x2) / 2}" y="${y - 10}" font-size="10.5" text-anchor="middle" fill="${color}">${label}</text>`;
  };
  const arrowV = (x, y1, y2, label, color) => {
    b += `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2 - 6}" stroke="${color}" stroke-width="2"/>`;
    b += `<path d="M ${x - 4} ${y2 - 8} L ${x} ${y2} L ${x + 4} ${y2 - 8} Z" fill="${color}"/>`;
    b += `<text x="${x + 10}" y="${(y1 + y2) / 2}" font-size="10.5" fill="${color}">${label}</text>`;
  };

  cellBox(540, 210, 'x', '#219a9d');
  cellBox(590, 210, 'x+1', '#219a9d');
  arrowH(572, 588, 225, '+1', '#219a9d');
  b += `<text x="650" y="231" font-size="11" fill="${MUTED}">radväg</text>`;

  cellBox(540, 270, 'y', '#9c2cbd');
  cellBox(540, 320, 'y+1', '#9c2cbd');
  arrowV(555, 302, 318, '+13', '#9c2cbd');
  b += `<text x="590" y="300" font-size="11" fill="${MUTED}">radväg till nästa rad</text>`;

  cellBox(700, 210, 'z', '#ff5f57');
  cellBox(700, 270, 'z+1', '#ff5f57');
  arrowV(715, 242, 268, '+169', '#ff5f57');
  b += `<text x="745" y="244" font-size="11" fill="${MUTED}">nästa plan</text>`;

  b += `<text x="520" y="390" font-size="11.5" fill="${MUTED}" font-style="italic">Varje cell är en byte. Ingen per-cell-encoding; kuben ligger i offsetmappen.</text>`;

  b += caption(30, 566, 'Figur 8. 13 × 13-planet z = 0. Källa: AGENTS.md §C-implementation och cosmic-block-c/README.md. Metod: d3.scaleSequential. Status: [E].');
  b += caption(30, 592, 'Figur 8 b. Grannsteg +1, +13 och +169 är pointeraritmetik [E]; färgvalen är [I].');
  b += caption(30, 618, 'Ingen fysisk tredje dimension antyds: det är adressrelationen som är kubisk.');
  return svg(W, H, 'Byte-offset address map for one model space', 'Heatmap of the 13 by 13 byte offsets in plane z=0, with adjacency steps +1, +13 and +169.', b);
}

const figures = {
  'fig6-profile-board.svg': profileBoard(),
  'fig7-complement-chord.svg': complementChord(),
  'fig8-offset-map.svg': offsetMap(),
};

for (const [name, content] of Object.entries(figures)) {
  fs.writeFileSync(path.join(OUT, name), content, 'utf8');
  console.log('wrote', name);
}
