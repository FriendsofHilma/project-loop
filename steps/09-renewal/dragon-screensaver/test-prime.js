/*
 * test-prime.js — nollberoende test för prime.js.
 * Kör: node test-prime.js
 */
"use strict";

var assert = require("assert");
var L = require("./prime.js");

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 97];
var nonPrimes = [0, 1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24,
  25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 100];

var checks = 0;

primes.forEach(function (n) {
  assert.strictEqual(L.isPrime(n), true, n + " ska vara primtal");
  checks += 1;
});
nonPrimes.forEach(function (n) {
  assert.strictEqual(L.isPrime(n), false, n + " ska inte vara primtal");
  checks += 1;
});

// Svängsekvensen måste vara exakt primtalen upp till 41.
var heading = 0;
var turns = [];
for (var p = 1; p <= 41; p += 1) {
  var next = L.turnHeading(heading, p);
  if (next !== heading) turns.push(p);
  heading = next;
}
assert.deepStrictEqual(turns, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41],
  "svängarna ska följa primtalen");
checks += 1;

// Sju delar per ruta, sedan nästa cell.
var part = 0;
var partSeq = [];
for (var i = 0; i < 14; i += 1) {
  partSeq.push(part);
  part = L.nextPart(part);
}
assert.deepStrictEqual(partSeq, [0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6],
  "delarna ska cykla 0..6");
checks += 1;

// Positionsrökning med wrap.
assert.deepStrictEqual(L.advanceCell(0, 0, 10, 10, 0), { x: 1, y: 0 });
assert.deepStrictEqual(L.advanceCell(0, 0, 10, 10, 1), { x: 0, y: 9 });
assert.deepStrictEqual(L.advanceCell(0, 0, 10, 10, 2), { x: 9, y: 0 });
assert.deepStrictEqual(L.advanceCell(0, 0, 10, 10, 3), { x: 0, y: 1 });
checks += 4;

// Vänstersväng: höger (0) -> upp (1) -> vänster (2) -> ner (3) -> höger (0).
assert.strictEqual(L.turnHeading(0, 2), 1);
assert.strictEqual(L.turnHeading(1, 3), 2);
assert.strictEqual(L.turnHeading(2, 5), 3);
assert.strictEqual(L.turnHeading(3, 7), 0);
checks += 4;

// Simulatorn måste ge samma sekvens som den gamla webbläsarkontrollen.
var sim = L.simulate(41, 13, 13);
assert.strictEqual(sim.pixels, 41);
assert.strictEqual(sim.heading, 1, "13 vänstersvängar från heading 0 ger heading 1");
assert.deepStrictEqual(sim.turns, L.EXPECTED_TURNS);
assert.strictEqual(sim.trail.length, 41);
checks += 4;

// Simulatorn är deterministisk och oberoende av fältstorlek.
var a = L.simulate(100, 13, 13);
var b = L.simulate(100, 13, 13);
assert.deepStrictEqual(a, b);
checks += 1;
var small = L.simulate(50, 3, 3);
assert.ok(small.x >= 0 && small.x < 3 && small.y >= 0 && small.y < 3, "wrap ska hålla sig inom fältet");
checks += 1;

// Varje kubruta bidrar med exakt sju delsteg innan nästa cell.
var s7 = L.simulate(7, 13, 13);
assert.deepStrictEqual(s7.trail.map(function (t) { return t.part; }), [1, 2, 3, 4, 5, 6, 0]);
checks += 1;

console.log("test-prime: " + checks + " checks passed");
console.log("turns: " + turns.join(", "));
