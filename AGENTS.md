# AGENTS.md — Cosmic Block Project

## Project Purpose

Develop a computational and visual model called the **Cosmic Block**. The Cosmic Block is a hierarchical mathematical structure composed of nested arrays of integers (0–9). The project provides both a precise computational representation and a three-dimensional geometric visualization inspired by a Hilma af Klint painting.

---

## 1. Fundamental Data Type

### Cell
- **Type**: integer
- **Constraints**: 0 ≤ value ≤ 9
- **Initial value**: 0
- **Validation**: All cell values must be validated to remain in the range [0, 9]

---

## 2. Structural Hierarchy

Inspired by Hilma af Klint's use of harmonic proportions, rhythmic series, and complementary pairing, the default dimensions below reflect a **golden-ratio-inspired progression** that can be adjusted to match the painting's specific relationships.

### Level 1 — Line
- One-dimensional array of Cells
- **Default length: 13** (first prime in the harmonic series; allows 0–9 cell values with buffer)
- Configurable length (not hardcoded)

### Level 2 — Plane
- Array of Lines forming a two-dimensional matrix
- **Default dimensions: 13 × 13** (square matrix; af Klint often used symmetric grids)
- Dimensions: configurable rows × columns

### Level 3 — Model Space
- Array of Planes forming a three-dimensional tensor
- **Default dimensions: 13 × 13 × 13** (cubic tensor; builds on the harmonic base)
- Dimensions: configurable planes × rows × columns

### Level 4 — Collection of Model Spaces
- **Default count: 5** (prime number; af Klint worked in series of 5 in many works)
- Array of Level 3 structures
- *Implemented and runtime-verified — see `src/structures/collection/collection-model-spaces.ts`*

### Level 5 — Higher-order Collection
- **Default count: 2** (complementary pair; central to af Klint's dualistic themes)
- Array of Level 4 structures
- *Implemented and runtime-verified — see `src/structures/collection/collection-higher-order.ts`*
- API: `createHigherOrder`, `fromHigherOrderCollections`, `getHoCountCollection`,
  `getPlanesPerHoCollection`, `getRowsPerHoCollection`, `getColsPerHoCollection`,
  `getAtHoCollection`, `getCellValueHo`, `setCellValueHo`, `hoIsZero`, `hoEquals`,
  `hoConcatDepth`, `hoToString` — full parity with Level 4 API

### Level 6 — Complementary Pair
- Two instances of Level 5 structures (default: 2 × [13 × 13 × 13 × 5])
- Treated as complementary components of a larger system
- *Documented pattern only — the complement involution n ↦ 9 − n is a property of the
  value alphabet, not a type, so no constructor forces it*

### Level 7 — Unspecified
- **NOT IMPLEMENTED**: Do not implement until mathematical meaning is clarified

### Level 8 — Complementary Line
- **NOT IMPLEMENTED**: A line associated with and spanning the two Level 6 components
- When implemented: likely length related to the combined dimensions of the Level 6 pair

### Level 9 — Unspecified
- **NOT IMPLEMENTED**: Leave unimplemented

---

## 3. Implementation Principles

- **Strongly defined data types**: Use TypeScript interfaces/types for all structures
- **Conceptually distinct levels**: Keep each structural level clearly separated
- **Zero initialization**: All structures initially contain zero-valued cells
- **Value validation**: Validate all cell values to ensure 0 ≤ value ≤ 9
- **Configurable dimensions**: Make dimensions configurable rather than hardcoding
- **No implicit spatial correspondence**: Avoid assuming higher-order arrays correspond to physical spatial dimensions
- **Math-independent rendering**: Keep the mathematical model independent of the visualization/rendering implementation

---

## 4. Visualization

### Current Focus: Level 3 Model Space — 3D Visualization 🎨
- Three-dimensional visualization of the Model Space tensor using Three.js
- Visual language inspired by Hilma af Klint painting (reference provided)
- Each cell value (0–9) mapped to visual properties: color, size, opacity, shape
- Default harmonic dimensions: 13 × 13 × 13 tensor

### Visual Design Principles (af Klint-inspired)
- **Geometric forms**: Circles, squares, spirals, grids — typical of af Klint's abstract language
- **Complementary pairs**: Dualistic color/themes matching her series work
- **Harmonic progression**: Golden-ratio-based spacing and sizing (13³ default)
- **Symmetrical balance**: Mirroring and rhythmic patterns
- **Bright, symbolic color**: Energetic palette representing integer values 0–9

### Future Extensions
- Higher-order structures (Levels 4–6) as additional canvases
- Complementary pairs visualization (Level 6 + Level 8)
- Full hierarchical visualization across all levels
- Interactive rotation, scaling, and exploration

### Development Guidelines
- **Do not invent the final visual style before examining the reference painting** ✅ (reference provided)
- Map integer values (0–9) to visual properties in a principled, consistent way
- Keep rendering pipeline independent of mathematical model (already separated)
- Support incremental development: start with simple point cloud → lines → surfaces
- Document color-value mappings for future reference

### Visualization Pipeline (planned)
1. **Phase 2a**: ✅ Basic 3D point cloud — each cell is a point at (x,y,z) with value-dependent color
2. **Phase 2b**: Add connecting lines between adjacent cells to show tensor structure
3. **Phase 2c**: Surface rendering — colored faces or spheres for each cell
4. **Phase 2d**: Interactive controls (rotate, zoom, toggle cell values)
5. **Phase 2e**: Color palette refinement based on af Klint painting analysis

---

## 5. Development Approach

### Phase 1: Fundamental Data Structures ✅ Complete
- [x] Define Cell type with validation (`src/validation/cell-validator.ts`)
- [x] Implement Line (1D array of Cells) (`src/structures/line.ts`)
- [x] Implement Plane (2D array of Lines) (`src/structures/plane.ts`)
- [x] Implement Model Space (3D array of Planes) (`src/structures/ModelSpace.ts`)
- [x] Test all structures with zero initialization (verified via node tests)

### Phase 2: Model Space Visualization 🎨 Complete
- [x] Create 3D visualization module (`src/visualization/visualization.ts`) with Three.js integration
- [x] Map cell values (0–9) to af Klint-inspired color palette (hex colors for each value)
- [x] Keep rendering pipeline independent of mathematical model ✅
- [x] Point cloud visualization implemented and tested
- [ ] Create interactive 3D scene with orbit controls (pending)
- [ ] Add connecting lines between adjacent cells (pending)
- [ ] Surface rendering with colored faces (pending)
- [ ] Refine color palette based on detailed af Klint painting analysis (pending)

### Phase 3: Higher-order Structures ✅ Complete
- [x] Implement Level 4 — Collection of Model Spaces (5 instances, af Klint series) — `src/structures/collection/collection-model-spaces.ts`
- [x] Implement Level 5 — Higher-order Collection (2 instances, complementary pair) — `src/structures/collection/collection-higher-order.ts`
- [x] Resolve TypeScript module resolution for collection imports
- [x] Build green under `strict: true`; Level 4–5 create/get/set/zero/equals verified at runtime

### Phase 4: Unresolved Levels 📝 Documented
- [x] **Levels 7 and 9**: Explicitly leave unimplemented until mathematical meaning is clarified
- [x] Document any assumptions made in AGENTS.md
- [ ] Wait for clarification on mathematical meanings before proceeding

### Phase 5: Academic Write-up ✅ Complete
- [x] `PAPER.md` — interdisciplinary paper (mathematics, physics, art history, spiritual science)
- [x] `tools/make-figures.js` — deterministic generator for Figures 1–5 in `figures/`
- [x] `tools/serve.js` — static server for inspecting figures locally (port 8731)

---

## 6. How Agents Can Help

### Data Structure Implementation
- Define TypeScript interfaces/types for each level
- Implement validation logic for cell values
- Create constructor functions with zero initialization
- Implement configurable dimension sizes

### Visualization Development
- Map integer values (0–9) to color schemes
- Create 3D rendering using Three.js or similar
- Develop color palette inspired by Hilma af Klint painting
- Implement interactive rotation/exploration

### Testing & Validation
- Write tests for all structural levels
- Verify value validation (0–9 range)
- Test zero initialization across all levels
- Validate configurable dimensions

### Documentation
- Update AGENTS.md as levels are implemented
- Document assumptions and decisions
- Record unresolved questions (Levels 7, 8, 9)
- Track progress through development phases

---

## 7. Project Structure

```
cosmic-block/
├── src/
│   ├── types.ts          # Type definitions for all levels
│   ├── structures/       # Line, Plane, ModelSpace implementations
│   │   └── collection/   # Level 4 and Level 5 collections
│   ├── validation.ts     # Cell value validation
│   └── visualization/    # 3D rendering code
├── figures/              # Generated SVG figures (Figures 1–5)
├── tools/                # make-figures.js, serve.js, verify.js, independence_check.py
├── tests/
│   ├── structure-tests.ts
│   └── visualization-tests.ts
├── PAPER.md              # Academic paper
├── PAPER2.md             # HEAR / ontology companion paper
├── PAPER3.md             # Tyler Kane response: The Key, L4/L8, notebook reading
├── novel/                # epic novel project (Tyler Kane persona), see §7.3
│   ├── 00_CHARTER … 11_PROGRESS/   # persistent project documentation
│   ├── 08_MANUSCRIPT/    # draft chapters by part
│   ├── tools/page.py     # print an exact indexed notebook page
│   └── README.md         # index, persona notice, category key
├── notes-assistant/      # local index/LSA/concept model of the translated notebooks
│   ├── notes_model.py    # build, stats, search, similar, topics, concept, themes
│   ├── README.md
│   └── data/             # generated: sqlite3, npz, topics, concepts, themes, report
├── AGENTS.md             # This file
├── README.md
├── refinement/           # draft storage-refinement deposit (Rocq), see §7.1
│   ├── PREREGISTRATION.md
│   ├── check_statements.py
│   ├── NOTE-TO-COMPUTRONIUM.md
│   ├── computronium-patch/   # one commit for the friend's repo + its README
│   └── rocq/CosmicBlock.v
├── narration/            # narration subsystem for the novel, see §7.4
│   ├── config/           # settings, voice profiles, pronunciation lexicon
│   ├── src/              # text, audio, engine, provider adapters
│   ├── tools/            # fetch_models, probe_speakers, narrate, serve
│   ├── web/index.html    # playback UI (play Chapter 1)
│   └── output/           # generated WAV + JSON metadata (derived artefacts)
├── project-loop/         # nine-step methodology, dated masterprompts, state, cycles
├── hemsida/              # local graphic overview of every project component, see §7.6
│   ├── index.html        # hero, nine clickable illustrated steps, component catalogue
│   ├── data.js           # single source of truth for all links
│   ├── visa.html         # local markdown/text reader
│   ├── assets/           # ten deterministic SVG artworks
│   └── tools/make-art.js # offline art generator
├── avhandling/           # new Swedish dissertation project, see §7.5
├── riemann/              # Riemann workstream: foundations, datasets, plan, figures
└── cosmic-block-c/       # C11 implementation, cells stored in a mapped file
    ├── src/              # status, arena, cube (L1-3), cosmic (L4-5), main
    ├── tests/            # 87 checks, no framework
    └── README.md         # layout, pointer arithmetic, disk proof
```

### 7.1 Storage refinement (`refinement/`)

A *candidate* deposit for Computronium's F16 programme, not a submission. The
claim is narrow: the box → contiguous-byte map `(z·rows + y)·cols + x` is a
bijection that preserves adjacency (`+1`, `+cols`, `+rows·cols`) with zero
per-cell encoding overhead. The Cosmic Block is **not** a learning system and is
not filed as a six-axis coordinate; there is no objective and no pseudo-gradient
here, so an identity card is impossible and was not attempted.

- `check_statements.py` is a falsifier, not a proof: extents 1–6, 9261 cells, no
  counterexample. It also confirms byte 5209 and the `n → 9−n` involution.
- `rocq/CosmicBlock.v` is a draft. **Not machine-checked here** — the Coq
  Platform installer needs elevation and UAC cannot be answered from this
  session (`0x800704c7`). `coqc rocq/CosmicBlock.v` is the check to run.
- Scope exclusions are stated, not assumed: header/checksum/alignment, Levels 4–9,
  the value semantics, the θ/ψ analogy, the af Klint parameters, and all
  art-historical framing.
- Rules: fix a failed proof by weakening the claim in `PREREGISTRATION.md` and
  recording it; never by adding an axiom.
- `computronium-patch/` offers the same artefact as a *control* instead of a
  theorem: a byte whose value is known before the run (one commit, four files,
  applying to `756a107`), plus `"upheld"` in the correction ledger so a log of
  audits has a denominator. Applied to a clean checkout and the probe ran 10/10
  on CPython 3.10.11; the target repo's pytest, 3.14 and ruff were not
  available here, so it is a patch to review, not a merge.

### 7.2 Notes model (`notes-assistant/`)

A local, offline reading model over the English machine translations in
`hilma-translation/english-pdf/`. It exists so that claims about the notebooks
can be located and checked rather than recalled.

- **Not a generative model.** No network, no API, no learned parameters beyond
  term frequencies. It retrieves, ranks, and counts.
- **Build:** `python notes-assistant/notes_model.py build` — 4,083 pages
  extracted, 4,065 modelled, 14,560 terms, 32 LSA components.
- **Commands:** `stats`, `search`, `similar`, `topics`, `concept`, `themes`,
  `report`.
- **Artefacts:** `data/notes.sqlite3` (FTS5, one row per page),
  `data/lsa_model.npz`, `topics.json`, `concepts.json`, `themes.json`,
  `themes.md`, `notes-report.md`.
- **Thematic axes:** eight reader-chosen axes (time; colour and number; ether
  body and elemental spirits; temple; light and darkness; Lucifer/Ariman; soul
  and astral; nature and plant forces). Candidates must contain at least two
  seed terms, then rank by seed-term density and LSA cosine.
- **Limits.** Lexical and distributional, page-level, and it inherits every
  machine-translation error. The stop list, concept patterns, and axes are
  choices, not discoveries. Quotations in `PAPER3.md` are machine translation
  and must be checked against the Swedish source before reuse.

`tools/independence_check.py` is the companion check for `PAPER3.md` §6: it
exhibits the two witnesses showing that the Level 4 memory view and the Level 8
temporal view do not determine one another on the project's own types.

### 7.3 Epic novel (`novel/`)

A nine-part cosmological novel written in the fictional Tyler Kane persona. Its
foundation is the same translated notebook corpus; its first-pass research finding
is that the notes read as a *practice of translation* (silence → word/tone → number
and colour → diagram → test against body and earth → correction) rather than a fixed
nine-level doctrine. The novel's nine parts are an authorial structure and are **not**
the Cosmic Block Levels 1–9.

- **Entry point:** `novel/README.md`; then `novel/11_PROGRESS/PROJECT_STATUS.md`,
  `NEXT_ACTIONS.md`, `OPEN_QUESTIONS.md`.
- **Integrity:** `[E]` evidence, `[I]` interpretation, `[M]` invention are tagged
  throughout. Every quotation is MT, short, and located by `FILE.pdf:PAGE` in
  `novel/02_HILMA/QUOTATION_REGISTER.md`; secondary quotations are separated.
- **Exact-page tool:** `python novel/tools/page.py 576DAGBO.pdf:2` prints the stored
  translation of one page from `notes-assistant/data/notes.sqlite3`.
  `python novel/tools/verify_quotes.py` rechecks every registered primary quotation
  against its page (56 strings checked, 0 failures).
- **Current state:** research and outline complete; two Part I chapters drafted
  (`novel/08_MANUSCRIPT/part_01/ch01_before_the_before.md` and `ch02_the_answer.md`);
  no image inspected; no visual claim about *The Key*.
- **Rule:** do not modify original research documents when working on the novel.

### 7.4 Narration subsystem (`narration/`)

Offline audio narration for the novel. Three original male storyteller profiles and a
distinct female companion voice for Hilma's registered quotations. **No author
recording was supplied and no voice cloning is claimed.** Providers are behind a
single contract so the engine does not depend on Piper.

- **Entry point:** `narration/README.md`; concepts in `VOICE_CONCEPTS.md`, technology
  comparison in `VOICE_TECHNOLOGY.md`, status in `IMPLEMENTATION_PLAN.md`.
- **Primary provider:** Piper 1.8.0 (code MIT) with `en_US-libritts-high` (LibriTTS
  dataset CC BY 4.0). Model is downloaded outside OneDrive by
  `python narration/tools/fetch_models.py`; Windows SAPI is an offline fallback;
  edge-tts is optional and disabled because redistribution rights are unclear.
- **Commands:** `python narration/tools/narrate.py voices|audition-all|chapter|segment`;
  `python narration/tools/serve.py` then open `http://127.0.0.1:8732/` to play;
  `python narration/tools/verify_output.py` checks the generated tracks and player URLs.
- **Integrity:** canonical text is hashed into each track's JSON metadata;
  pronunciation respelling affects TTS input only; `--story-only` records the omitted
  provenance-endnote range rather than silently dropping it. Per-segment cache allows
  one passage to be regenerated without re-rendering a chapter.
- **Status:** auditions for all six profiles generated; Chapter 1 story (12:23) and full
  (14:14) tracks generated and browser-verified with the slower, deeper, darker
  Ancient Sage profile; `epigraph` segments route to the companion quotation voice.
  Author still chooses the final voices by ear.

### C implementation (`cosmic-block-c/`)

A second, independent implementation of Levels 1–5 in C11, written to answer a
narrower question than the TypeScript one: can the integers be *stored* as a
cube rather than merely represented as one? See `cosmic-block-c/README.md`.

- **Storage is the model.** The file is mapped with `mmap` / `CreateFileMapping`
  and every cell access is a pointer dereference at a computed file offset.
  There is no in-memory cube that gets saved at the end.
- **Layout.** 256-byte header, payload at 4096, one byte per cell:
  `offset = 4096 + (ho * spaces + space) * planes * rows * cols
  + (z * rows + y) * cols + x`. Default: 2197 bytes per model space, 21970 bytes
  of payload, 28672-byte file.
- **Levels as pointer views of one run of bytes.** L1 `cb_cube_line` (13 bytes),
  L2 `cb_cube_plane` (169 bytes), L3 `cb_cube_cell`, L4 `cb_cosmic_cube(b, ho,
  space)`, L5 the file. Adjacency is pointer arithmetic: +1, +13, +169 bytes.
- **Integrity.** Header magic, version, byte-order marker and FNV-1a checksum are
  validated on open; values are refused above 9 on write and rechecked by
  `cosmic verify`.
- **Build and test.** `make`, `make test` (87 checks), `make demo`. Clean under
  `-Wall -Wextra -Wpedantic -Wshadow -Wconversion -Wstrict-prototypes
  -Wmissing-prototypes`. On this machine the toolchain is portable w64devkit at
  `%LOCALAPPDATA%\Programs\w64devkit\bin`; there is no system C compiler.
- **Verified on disk, not just in memory.** After writing through the mapping and
  closing it, the byte at the computed offset is read back with plain
  `fopen`/`fseek`/`fgetc` (in the tests) and with PowerShell
  `ReadAllBytes` (by hand). Value 9 at `(0,0,6,7,8)` was found at byte 5209 of
  the 28672-byte file, between zeros.
- **Zonix build (`znx`).** The project also compiles and links with `znx` from
  [Zonix](https://codeberg.org/nordlow/zonix), a small self-hosting C compiler.
  Both binaries build and `test_cosmic.exe` passes 87/87 — no changes to `src/`
  or `tests/`, no suppressed warnings. Commands and output are in
  `cosmic-block-c/README.md` under "Building with Zonix"; `build-znx/` is
  gitignored. Getting `znx.exe` working on Windows is scratch work outside this
  repo: five local patches to the compiler (const-qualified parameters, a missing
  `znx_tool_impdef` prototype, `pe_check_linkage` needing `ST_FUNC`, a PE TLS
  assignment to a `const` parameter, and a `znxrepl.c` stub), built with
  `-mno-ms-bitfields` (MinGW's MSVC bitfield packing breaks znx's own
  `sizeof(CType)/Sym/SVal` asserts) and `-O0` (gcc-16 `-O2` builds of znx crash in
  `sym_pop`), plus a `crt1.o`-only `libznx1.a`. Those patches are fixes znx
  itself needs; they are not upstream and are not shipped here.
- **Limits.** Single writer, no locking, no multi-cell transactions, no
  endianness conversion (foreign files are refused, not converted). The file is
  not physically three-dimensional; what is cubic is the offset map, which
  preserves adjacency along all three axes.

---

### 7.5 New 2026-11-26 workstreams

Three additions were made locally on 2026-11-26. None has been published or submitted.

- **`project-loop/`** — the nine-step methodology. `MASTERPROMPT.md` is the
  verbatim historical source (D-003); `MASTERPROMPT_2026-11-26.md` is a separate
  dated source defining steps 7–9 as Interpersonal Integration, Strategic
  Coordination and Synthesis/Consolidation/Recovery. The operative state is
  `WORKFLOW.md` 2.1 plus `state/*.json`; 32 cycle records are in
  `cycles/2026-11-26/` and three more in `cycles/2026-11-27/`. The step-9 recovery
  screensaver now shows a visually polished local prime-space flight with exactly
  seven parts per cube cell and a left turn whenever the pixel count is prime
  (`project-loop/steps/09-renewal/dragon-screensaver/PRIMTALSRYMD.md`).
  The rules live in `prime.js` and are checked by `test-prime.js` (64 checks); the first
  implementation turned right instead of left and was corrected in D-035.
  A second screensaver, `dragon-perspective/`, follows a Hamilton cycle so the dragon
  covers 100 % of the field and bites its tail, seen both from outside and from its
  own perspective (`dragon.js`, `test-dragon.js`, 25 checks). Human visual reviews are
  open as B-020 (prime space) and B-022 (website). A local agent definition is in `.opencode/agents/project-loop-assistant.md`.
- **`avhandling/`** — a *new* Swedish dissertation project. It is not a rewrite of
  `PAPER.md`–`PAPER3.md` and not a replacement for the Rachel Villari research copy
  in `knowledge/dissertation/`. All material is tagged `[E]`/`[I]`/`[?]`; the
  chapter/appendix structure is in `avhandling/00_STRUKTUR.md`.
- **`riemann/`** — a dedicated Riemann workstream. It separates established theory,
  existing computational results, our experiments, new conjectures and unverified
  interpretations. No connection to the Cosmic Block is established, no dataset has
  been downloaded and no proof claim is made. Start at `riemann/README.md`.

Rules from D-008 still apply: no external contact, application, signature, payment,
personal data or publication without a separate human decision. A local Git commit
was prepared for the revised project-loop documentation (D-025); it was **not**
pushed. The Arvsfonden draft is a local, placeholder-only underlag, not a submitted
application.

### 7.6 Local website (`hemsida/`) — added 2026-11-27

A local draft website showing every component built so far. The first page has a
cinematic hero and the nine project-loop steps as **clickable illustrated images**;
below it are a searchable component catalogue (seven groups, 48 links), the eight
generated figures and a local reader for Markdown/JSON/CSV/code files. Serve it from
the project root with `node tools/serve.js` and open `http://localhost:8731/hemsida/`;
`file://` does not work because the reader uses `fetch`.

The image service returned `Invalid credential`, so no external image was used.
Ten SVG artworks are drawn offline by `hemsida/tools/make-art.js` using the same
palette as the approved graphic profile (D-042). `hemsida/test-site.js` checks that
every link and image exists (139 checks). Three cycles (33–35) were run for the
website; state is version 2.1 with `cycle: 35`. Nothing was pushed or published, and
a human visual review is open as B-022.

## 8. Quick Start (once set up)

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start development
npm run dev
```

*Status: The core mathematical model (Levels 1–3), the collection levels (4–5), and the visualization module are fully functional, compile under `strict: true`, and were verified at runtime. All module resolution issues are fixed. Levels 7–9 remain intentionally unimplemented; Level 8 now has a candidate incidence definition in `PAPER2.md` §3.4, still `under_review` and not adopted as a type. The interdisciplinary write-up is `PAPER.md`, the ontology companion is `PAPER2.md`, and the response paper — with a reading of the notebooks and the Level 4/8 independence check — is `PAPER3.md`. Figures are generated by `tools/make-figures.js`; the notebook reading is supported by the local model in `notes-assistant/`. The epic novel project lives in `novel/` (§7.3); its documentation and opening chapters are drafted, but the manuscript is not complete. The offline narration subsystem in `narration/` (§7.4) produces auditions and Chapter 1 audio with a browser play UI; no voice cloning or author reference is used.*

*Caveat recorded in the papers: the reference painting was never decoded by the build agent's image pipeline, so the default dimensions (13, 5, 2) are interpretive assumptions rather than measurements, and the colour reading of *The Key* is unverified (a pixel census finds no red in the three supplied photographs). A human study of the painting should re-parameterise the defaults and settle the colour question.*