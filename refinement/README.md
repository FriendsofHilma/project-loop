# Storage refinement — a candidate deposit for Computronium F16

This folder holds a small, deliberately narrow artifact: a draft
pre-registration and a Rocq skeleton for the claim that the Cosmic Block's
three-index box maps onto a contiguous byte range as an **exact refinement** —
a bijection that preserves adjacency on all three axes, with no per-cell
encoding overhead.

It exists because the Cosmic Block is *not* a learning system and cannot be
filed as a coordinate in Computronium's six-axis ontology. It has no state
dynamics, no plasticity, no credit assignment and no update. What it does have
is a checkable representation claim, which is what F16 ("complexity of
simulation and execution") and F13.5 ("resource-aware refinement") are about.

```
refinement/
├── PREREGISTRATION.md      # what is being claimed, and what would falsify it
├── check_statements.py     # brute-force falsifier — finds counterexamples, proves nothing
└── rocq/
    └── CosmicBlock.v       # the proof of record (draft)
```

## Status

**The statements are checked; the proofs are not, yet.**

- `python check_statements.py` scans every cell of every geometry with extents
  1–6 (9261 cells) and finds no counterexample to injectivity, range, round
  trip or the three adjacency deltas. It also confirms the recorded disk fact
  (byte 5209) and the complement involution. This is a falsifier, not a proof:
  passing it means the statements are not obviously wrong, nothing more.
- `rocq/CosmicBlock.v` is written but has **not been machine-checked in this
  environment**. The Coq Platform installer available here requires elevation
  and the UAC prompt cannot be answered from this session (winget reported
  `0x800704c7`, `ERROR_CANCELLED`). Treat the file as a draft until someone runs
  it.

Line count, for the feasibility question that prompted this: 249 lines
including comments, of which about 55 are proof script. It is an evening's work
for someone with a working Rocq, not a week's.

## Checking it

```bash
coqc rocq/CosmicBlock.v      # expect: no output, exit 0
```

Rocq 9 / Coq 8.16+ should both work. The development deliberately rests on
`Nat.div_unique` and `Nat.mod_unique` with explicit witnesses rather than on the
library's many division lemmas, whose names move between versions; the lemmas it
does name by hand are `Nat.mul_cancel_r`, `Nat.add_cancel_r` and `Nat.ltb_lt`.
If a name has moved, the failure will be at that line, not in the mathematics.

If a proof fails, the honest outcome is to weaken the *claim* in
`PREREGISTRATION.md` and record it, not to add an axiom.

## What maps to what

| Theorem | Claim | Computronium hook |
| --- | --- | --- |
| `offset_injective` | no two cells share an address | F16.2 space bounds |
| `offset_in_range` | no address outside the payload | F16.2 |
| `decode_offset` | `decode (offset i) = i`, so the map is onto the range | F16.2/F16.3 encoding overhead = 0 |
| `offset_east` / `offset_south` / `offset_up` | `+1`, `+cols`, `+rows·cols` | F16.4 restricted-access overhead |
| `disk_proof` | cell `(6,7,8)` at file byte 5209, by `reflexivity` | provenance: the C artifact's recorded fact |
| `complement_involution` | `n → 9−n → n` on 0–9 | appendix only; **not** part of the F16 claim |

`file_offset` adds a fixed 4096-byte header; the header itself (magic, version,
checksum, byte-order refusal) is out of scope and is not assumed correct.

## Why this is not an identity card

Computronium's identity cards require a reference, declared deviations, an
**objective** and a **pseudo-gradient**. This artifact has no objective and no
gradient: it is a data structure. Filing it as a mechanism would be the
"oversell the ontology as physics" failure the programme warns against. The
deposit is offered against the proof development (Phase E, F16), not the
comparison pipeline.

## Relation to `cosmic-block-c/`

The C implementation is the source of truth; this model must agree with it. The
model is *smaller* than the implementation: it omits the header, the 4096
alignment, the collection layers (Levels 4–5 offsets) and endianness. That is a
declared deviation, not a claim that those parts are correct.

The empirical half of the claim is already recorded elsewhere and is not
re-argued here: 87 checks in the C suite, the same 87 in a znx-built binary, and
an external read of byte 5209 with plain `fopen`/`fseek`/`fgetc` and with
PowerShell `ReadAllBytes`, outside both implementations. Because the artifact
has zero variance, any disagreement between those is a defect by construction —
which is what makes it usable as a control fixture for reproducibility tooling.

## Next, in order

1. Run `coqc` once a Rocq environment exists; fix names, not claims.
2. Extend the model to the collection layers: `ho`, `space`, and the
   4096 + `(ho·spaces + space)·planes·rows·cols` term.
3. Only then decide whether to submit. If F16's "machine model" framing is
   rejected, withdraw the relevance claim and keep the theorems as a statement
   about this data structure.
4. The same artefact has a second role, already drafted in
   `computronium-patch/`: a control rather than a theorem. It does not depend on
   F16 being accepted — the byte is true either way.
