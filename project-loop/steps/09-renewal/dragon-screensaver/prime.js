/*
 * prime.js — rena regler för primtalsrymden i steg 9.
 *
 * Används av dragon-screensaver/index.html och testas av test-prime.js.
 * Inga beroenden, inga nätverksanrop, inga personuppgifter.
 *
 * Regler (D-031/D-032):
 *   - varje kubruta har exakt sju delar (PARTS = 7)
 *   - pixelantalet ökar för varje besökt delruta
 *   - när pixelantalet är ett primtal svänger draken vänster: (heading + 1) mod 4
 *
 * Rättelse 2026-11-26 (D-035): den tidigare formeln (heading + 3) mod 4
 * svängde höger i skärmkoordinater. Riktningen 0=höger, 1=upp, 2=vänster,
 * 3=ner ger vänster med +1, inte +3.
 */
(function (root) {
  "use strict";

  var PARTS = 7;
  var DIRS = [[1, 0], [0, -1], [-1, 0], [0, 1]]; // höger, upp, vänster, ner
  var LEFT = 1; // steg i DIRS som betyder vänster

  function isPrime(n) {
    if (!Number.isInteger(n) || n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (var d = 3; d * d <= n; d += 2) if (n % d === 0) return false;
    return true;
  }

  function turnHeading(heading, pixels) {
    return isPrime(pixels) ? (heading + LEFT) % 4 : heading;
  }

  function nextPart(part) {
    return (part + 1) % PARTS;
  }

  function advanceCell(cx, cy, cols, rows, heading) {
    return {
      x: (cx + DIRS[heading][0] + cols) % cols,
      y: (cy + DIRS[heading][1] + rows) % rows
    };
  }

  /*
   * simulate(steps) — kör reglerna utan canvas eller klocka.
   * Returnerar exakt det som skärmen ska visa, så att sidan och testet
   * kan jämföra samma sanning. Wrap används så att små fält också fungerar.
   */
  function simulate(steps, cols, rows) {
    var c = Number.isInteger(cols) && cols > 0 ? cols : 13;
    var r = Number.isInteger(rows) && rows > 0 ? rows : 13;
    var heading = 0;
    var part = 0;
    var pixels = 0;
    var turns = [];
    var x = Math.floor(c / 2);
    var y = Math.floor(r / 2);
    var trail = [];
    for (var i = 0; i < steps; i += 1) {
      pixels += 1;
      var next = turnHeading(heading, pixels);
      if (next !== heading) turns.push(pixels);
      heading = next;
      part = nextPart(part);
      if (part === 0) {
        var cell = advanceCell(x, y, c, r, heading);
        x = cell.x;
        y = cell.y;
      }
      trail.push({ x: x, y: y, part: part });
    }
    return {
      pixels: pixels,
      heading: heading,
      part: part,
      turns: turns,
      x: x,
      y: y,
      trail: trail
    };
  }

  var api = {
    PARTS: PARTS,
    DIRS: DIRS,
    LEFT: LEFT,
    EXPECTED_TURNS: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41],
    isPrime: isPrime,
    turnHeading: turnHeading,
    nextPart: nextPart,
    advanceCell: advanceCell,
    simulate: simulate
  };

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.PrimeSpaceLogic = api;
})(typeof window !== "undefined" ? window : globalThis);
