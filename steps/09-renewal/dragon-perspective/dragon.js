/*
 * dragon.js — ouroboros-draken i en torusformad matris.
 *
 * Ren logik utan canvas, klocka eller nätverk. Används av index.html och
 * testas av test-dragon.js.
 *
 * Regler:
 *   - fältet är en torus (kanten lindar runt), så draken kan fortsätta i en
 *     oändlig loop utan att någonsin lämna rymden
 *   - rutten är en Hamilton-cykel: varje ruta besöks exakt en gång innan
 *     draken är tillbaka vid startrutan. Det garanterar att kroppen till slut
 *     sträcker sig genom hela rymden och att nästa steg är ett svansbett.
 *   - alla rutor är svarta från början; en ruta får en slumpad färg första
 *     gången draken går in i den
 *   - draken växer med en kroppsdel för varje ny ruta
 *   - primtalen räknas och ger en vänsterpuls i huvudet/jämmarna, men de
 *     styr inte rutten. En fri primtalsstyrd gång fastnade vid 34–70 %
 *     täckning och kunde då aldrig nå hela rymden (D-041).
 *
 * Sju delar per kubruta (D-032) är en visuell regel och används här som antal
 * fjäll per kroppsdel; den påverkar inte logiken.
 */
(function (root) {
  "use strict";

  var PARTS = 7;
  var DIRS = [[1, 0], [0, -1], [-1, 0], [0, 1]]; // höger, upp, vänster, ner

  function isPrime(n) {
    if (!Number.isInteger(n) || n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (var d = 3; d * d <= n; d += 2) if (n % d === 0) return false;
    return true;
  }

  function wrap(v, n) { return ((v % n) + n) % n; }

  /* Deterministisk färg per ruta: samma frö och index ger samma färg. */
  function colorFor(index, seed) {
    var h = (index * 2654435761 + (seed >>> 0) * 2246822519) >>> 0;
    var hue = h % 360;
    var sat = 60 + ((h >>> 9) % 28);
    var light = 42 + ((h >>> 17) % 22);
    return "hsl(" + hue + " " + sat + "% " + light + "%)";
  }

  /*
   * buildCycle(cols, rows) — serpentin som täcker varje ruta och slutar
   * intill startrutan. Radserpentin kräver jämnt antal rader; i annat fall
   * används kolumnserpentin (kräver jämnt antal kolumner). Om båda är udda
   * minskas raderna med ett, eftersom en torus med udda×udda inte kan bäras
   * av den här enkla serpentinen.
   */
  function buildCycle(cols, rows) {
    cols = Math.max(4, cols | 0);
    rows = Math.max(4, rows | 0);
    if (rows % 2 !== 0) {
      if (cols % 2 === 0) {
        var cellsC = [];
        for (var x = 0; x < cols; x += 1) {
          if (x % 2 === 0) {
            for (var y = 0; y < rows; y += 1) cellsC.push({ x: x, y: y });
          } else {
            for (var y2 = rows - 1; y2 >= 0; y2 -= 1) cellsC.push({ x: x, y: y2 });
          }
        }
        return cellsC;
      }
      rows -= 1;
    }
    var cells = [];
    for (var r = 0; r < rows; r += 1) {
      if (r % 2 === 0) {
        for (var c = 0; c < cols; c += 1) cells.push({ x: c, y: r });
      } else {
        for (var c2 = cols - 1; c2 >= 0; c2 -= 1) cells.push({ x: c2, y: r });
      }
    }
    return cells;
  }

  function dirBetween(a, b, cols, rows) {
    if (b.x === wrap(a.x + 1, cols) && b.y === a.y) return 0;
    if (b.x === a.x && b.y === wrap(a.y - 1, rows)) return 1;
    if (b.x === wrap(a.x - 1, cols) && b.y === a.y) return 2;
    return 3;
  }

  function createState(cols, rows, seed) {
    var cycle = buildCycle(cols, rows);
    var effectiveRows = 0;
    for (var i = 0; i < cycle.length; i += 1) {
      if (cycle[i].y + 1 > effectiveRows) effectiveRows = cycle[i].y + 1;
    }
    var total = cycle.length;
    seed = (seed >>> 0) || 0x9e3779b9;
    var start = cycle[0];
    var s = {
      cols: cols,
      rows: effectiveRows,
      total: total,
      seed: seed,
      cycle: cycle,
      cyclePos: 0,
      head: { x: start.x, y: start.y },
      heading: dirBetween(start, cycle[1] || start, cols, effectiveRows),
      pixels: 0,
      visited: new Uint8Array(total),
      colors: new Array(total),
      order: [{ x: start.x, y: start.y }],
      primeTurns: 0,
      pulse: 0,
      bitten: false,
      biteIndex: -1,
      tailBite: false,
      lastColor: "#ffd479"
    };
    var startIdx = start.y * cols + start.x;
    s.visited[startIdx] = 1;
    s.colors[startIdx] = colorFor(startIdx, seed);
    return s;
  }

  function step(s) {
    if (s.bitten) return { moved: false, bitten: true, prime: false };
    s.pixels += 1;
    var prime = isPrime(s.pixels);
    if (prime) {
      s.primeTurns += 1;
      s.pulse = 1; // visuell vänsterpuls; rutten ligger kvar på Hamilton-cykeln
    } else if (s.pulse > 0) {
      s.pulse = Math.max(0, s.pulse - 0.12);
    }

    s.cyclePos = (s.cyclePos + 1) % s.total;
    var next = s.cycle[s.cyclePos];
    s.heading = dirBetween(s.head, next, s.cols, s.rows);
    s.head = { x: next.x, y: next.y };
    var target = next.y * s.cols + next.x;
    var wasVisited = s.visited[target] === 1;

    if (wasVisited) {
      s.bitten = true;
      s.biteIndex = target;
      s.tailBite = target === s.order[0].y * s.cols + s.order[0].x;
      return { moved: true, bitten: true, prime: prime, tailBite: s.tailBite };
    }

    s.visited[target] = 1;
    s.lastColor = colorFor(target, s.seed);
    s.colors[target] = s.lastColor;
    s.order.push({ x: next.x, y: next.y });
    return { moved: true, bitten: false, prime: prime, color: s.lastColor };
  }

  function coverage(s) {
    return s.order.length / s.total;
  }

  /*
   * simulate(steps, cols, rows, seed) kör utan canvas. Används av testet och
   * av sidans självkontroll.
   */
  function simulate(steps, cols, rows, seed) {
    var s = createState(cols, rows, seed);
    for (var i = 0; i < steps; i += 1) {
      var e = step(s);
      if (e.bitten) break;
    }
    return {
      state: s,
      pixels: s.pixels,
      length: s.order.length,
      visitedCount: s.order.length,
      coverage: coverage(s),
      primeTurns: s.primeTurns,
      bitten: s.bitten,
      tailBite: s.tailBite
    };
  }

  /* Bekvämlighet: kör till bettet och returnera sammanfattningen. */
  function play(cols, rows, seed) {
    var s = createState(cols, rows, seed);
    while (!s.bitten) step(s);
    return simulate(s.pixels, cols, rows, seed);
  }

  var api = {
    PARTS: PARTS,
    DIRS: DIRS,
    EXPECTED_TURNS: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41],
    isPrime: isPrime,
    wrap: wrap,
    colorFor: colorFor,
    buildCycle: buildCycle,
    dirBetween: dirBetween,
    createState: createState,
    step: step,
    coverage: coverage,
    simulate: simulate,
    play: play
  };

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.DragonLogic = api;
})(typeof window !== "undefined" ? window : globalThis);
