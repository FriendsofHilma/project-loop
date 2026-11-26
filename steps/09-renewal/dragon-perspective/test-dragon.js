/*
 * test-dragon.js — nollberoende test för dragon.js.
 * Kör: node test-dragon.js
 */
"use strict";

var assert = require("assert");
var L = require("./dragon.js");

var checks = 0;

function key(p) { return p.x + "," + p.y; }

function assertCycle(cols, rows) {
  var cycle = L.buildCycle(cols, rows);
  var effRows = 0, effCols = 0;
  for (var k = 0; k < cycle.length; k += 1) {
    if (cycle[k].y + 1 > effRows) effRows = cycle[k].y + 1;
    if (cycle[k].x + 1 > effCols) effCols = cycle[k].x + 1;
  }
  var seen = new Set();
  for (var i = 0; i < cycle.length; i += 1) {
    var key = cycle[i].x + "," + cycle[i].y;
    assert.ok(!seen.has(key), "ruta besökt två gånger: " + key);
    seen.add(key);
  }
  assert.strictEqual(seen.size, cycle.length, "cykeln ska vara unik");
  // Varje steg, inklusive stängningen, måste vara en granne på torusen.
  for (var j = 0; j < cycle.length; j += 1) {
    var a = cycle[j];
    var b = cycle[(j + 1) % cycle.length];
    var dx = Math.abs(a.x - b.x);
    var dy = Math.abs(a.y - b.y);
    var adjacent = (dx === 1 && dy === 0) || (dx === 0 && dy === 1) ||
      (dx === effCols - 1 && dy === 0) || (dx === 0 && dy === effRows - 1);
    assert.ok(adjacent, "icke-närliggande steg " + key + " -> " + b.x + "," + b.y);
  }
  checks += 2;
  return cycle;
}

// Radserpentin, kolumnserpentin och udda×udda.
assertCycle(10, 10);
assertCycle(11, 10);
assertCycle(11, 11);
assert.strictEqual(L.buildCycle(11, 11).length, 11 * 10, "udda×udda minskar raderna med ett");
checks += 1;

// Full täckning och svansbett.
var played = L.play(12, 12, 12345);
assert.strictEqual(played.length, 144);
assert.strictEqual(played.state.total, 144);
assert.ok(played.coverage === 1, "hela fältet ska vara täckt");
assert.ok(played.bitten, "draken ska bita sig själv");
assert.ok(played.tailBite, "sista steget ska vara ett svansbett");
assert.strictEqual(played.pixels, 144);
checks += 5;

// Tillväxt: en ny kroppsdel per ruta, utan dubbletter före bettet.
var sim = L.simulate(30, 10, 10, 7);
assert.strictEqual(sim.length, 31);
assert.strictEqual(sim.visitedCount, 31);
assert.strictEqual(sim.state.order.length, 31);
var uniq = new Set(sim.state.order.map(key));
assert.strictEqual(uniq.size, 31, "ingen kroppsdel får upprepas före bettet");
checks += 4;

// Färger: alla besökta rutor har en färg, och färgen är deterministisk.
var allColored = sim.state.order.every(function (p) {
  return typeof sim.state.colors[p.y * sim.state.cols + p.x] === "string";
});
assert.ok(allColored, "varje besökt ruta ska ha en färg");
assert.strictEqual(L.colorFor(5, 99), L.colorFor(5, 99));
assert.notStrictEqual(L.colorFor(5, 99), L.colorFor(5, 100));
checks += 3;

// Primtalen räknas och pulsar, men rutten är Hamilton-cykeln.
var h = 0;
var turns = [];
for (var p = 1; p <= 41; p += 1) {
  if (L.isPrime(p)) turns.push(p);
}
assert.deepStrictEqual(turns, L.EXPECTED_TURNS);
checks += 1;
var sim41 = L.simulate(41, 10, 10, 3);
assert.strictEqual(sim41.primeTurns, 13, "13 primtal till och med 41");
checks += 1;

// Wrap.
assert.strictEqual(L.wrap(-1, 10), 9);
assert.strictEqual(L.wrap(10, 10), 0);
checks += 2;

// Simuleringen är deterministisk.
var a = L.simulate(80, 14, 14, 42);
var b = L.simulate(80, 14, 14, 42);
assert.deepStrictEqual(a.state.order, b.state.order);
assert.deepStrictEqual(a.state.colors, b.state.colors);
checks += 2;

console.log("test-dragon: " + checks + " checks passed");
console.log("coverage 12x12: " + Math.round(played.coverage * 100) + " % · svansbett: " + played.tailBite);
