# Project status

> **Constructed-persona notice:** "Tyler Kane" is a fictional research persona created
> for this project. He is not a real person, not an intelligence officer, not a member
> of the Anthroposophical Society, and not an authority on Hilma af Klint.

**Last updated:** 2026-11-22 · **Session:** first novel session · **Stage reached:** 5 of 6 (drafting begun)

## What is complete

| Stage | State | Artefacts |
|---|---|---|
| 1 Orientation | ✅ | Source inventory, source register, directory structure under `novel/`. Nothing outside `novel/` modified. |
| 2 Research | ✅ first pass | 116-document inventory; 27 registered quotations verified with `novel/tools/page.py`; thematic synthesis with synthesis matrix; eight thematic axes inherited from the local model. |
| 3 Cosmological synthesis | ✅ working version | `04_COSMOLOGY/COSMOLOGY.md`: translation-first model, nine stations, soul mechanics, Temple and spa design, explicit boundary against Cosmic Block Levels 7–9. |
| 4 Story development | ✅ working version | 54-chapter master outline, character bible with five recurring soul-streams and eight Temple collaborators, symbolic vocabulary, continuity notes. |
| 5 Writing | 🟡 begun | Chapters 1 (~2,300 words) and 2 (~1,800 words) drafted. Ch. 1 is a compressed sample; Ch. 2 is the same event from Ukko's side. |
| 6 Revision | ⬜ not begun | `09_REVISIONS/` empty. |

## Files created this session

```
novel/README.md
novel/00_CHARTER/CHARTER.md
novel/01_SOURCES/SOURCE_INVENTORY.md
novel/02_HILMA/RESEARCH_METHODOLOGY.md
novel/02_HILMA/QUOTATION_REGISTER.md
novel/02_HILMA/HILMA_THEMATIC_SYNTHESIS.md
novel/03_STEINER/STEINER_FRAMEWORK.md
novel/04_COSMOLOGY/COSMOLOGY.md
novel/05_WORLD/SYMBOLIC_VOCABULARY.md
novel/06_CHARACTERS/CHARACTER_BIBLE.md
novel/07_OUTLINE/MASTER_OUTLINE.md
novel/07_OUTLINE/CONTINUITY_NOTES.md
novel/08_MANUSCRIPT/part_01/ch01_before_the_before.md
novel/08_MANUSCRIPT/part_01/ch02_the_answer.md
novel/10_REGISTER/SOURCE_REGISTER.md
novel/11_PROGRESS/PROJECT_STATUS.md
novel/11_PROGRESS/OPEN_QUESTIONS.md
novel/11_PROGRESS/NEXT_ACTIONS.md
novel/tools/page.py
novel/tools/verify_quotes.py
```

## Research state

- **Corpus:** 115 source PDFs + one supplementary extraction; 4,083 indexed text
  pages; 14,560 terms; 32 LSA components.
- **Highest-value files verified:** `576DAGBO` (pp. 2, 9, 16, 24), `564DAGBO:2`,
  `556BESKR` (pp. 28, 80), `1156GRE1:26`, `1159DF1:11`, `1043TANK` (pp. 2, 25, 27),
  `1044TANK:7`, `1051TANK:11`, `1072ANT:17`, `1084ANT:23`, `579DAGBO` (pp. 32, 34),
  `581DAGBO:18`, `419 anteckningar:9`, `1170LIF:26`.
- **Working thesis `[I]`:** the notebooks encode a *practice of translation* —
  silence → word/tone → number and colour → diagram → test against body and earth →
  correction — not a fixed nine-level doctrine.
- **Three rival readings retained:** doctrinal/emanative; psychographic; practice.
  Part VII stages them as characters' positions.

## Quality gates

- ✅ Every quotation in the register verified as an exact substring of a whole page.
- ✅ Machine translation flagged on every entry.
- ✅ Secondary quotations separated from notebook quotations.
- ✅ `[E]` / `[I]` / `[M]` tags used throughout the documentation.
- ✅ Persona notice present in every persistent document.
- ✅ Chapter endnote with `[E]/[I]/[M]` tags added to the draft sample; epigraph
  re-verified against `576DAGBO.pdf:2`.
- ✅ `python novel/tools/verify_quotes.py`: 56 primary strings checked against whole
  indexed pages, 0 failures, 3 secondary quotations correctly skipped.
- ⬜ No image inspected; no visual claims made.
- ⚠️ The Ch. 1 sample compresses outline chapters 1–4; the split/renumber decision is
  recorded in `NEXT_ACTIONS.md` and must be made before Ch. 4.

## Word count

Documentation plus two draft chapters: `ch01_before_the_before.md` ≈2,300 words,
`ch02_the_answer.md` ≈1,800 words. Both carry provenance endnotes.
Total novel target ~180,000 words; 54 chapters planned.

## Resume instruction

Read `novel/README.md`, then `11_PROGRESS/NEXT_ACTIONS.md`, then
`02_HILMA/QUOTATION_REGISTER.md`, then the latest manuscript chapter. Do not modify
originals outside `novel/`.

---

## Separate co-authored book — *The Unbroken Whole* (2026-11-24)

**Status:** [I] first draft complete for preparation use. `research-reviewer` returned **PASS FOR PREPARATION USE**; publication clearance withheld. This is a distinct speculative work, not a tenth part of *The Great Journey of the Soul*.

**What was added:** `novel/12_COAUTHORED_BOOK/` with `CHARTER.md`, `OUTLINE.md`, `SOURCE_BRIDGE.md`, `tools/merge_draft.py`, contributor drafts under `MANUSCRIPT/`, and the merged `MANUSCRIPT/THE_UNBROKEN_WHOLE_draft_v0.1.md` (about 10,600 words, ten chapters).

**Voices:** Doris Fleur X wrote Chapters 1, 3, 4, 6, 7 and the ledger coda in Chapter 10. Tyler Kane wrote Chapters 2, 5, 8, 9 and the closing room in Chapter 10. Both personas remain fictional; Tyler's canonical notice is reproduced verbatim at the head and before each of his chapters. The source bridge is the only documentary pipeline.

**Fiction boundary:** [M] all successful fundraising, completed Schedules, paid instalments, fictional dialogue, stone marker and imagined Temple steps. [E]/[DEC]/[?] documentary strings remain tied to the reviewed pledge source pack and legal record. The real pledge is unsigned; the real `förlikning` is settlement plus procedural write-off; no Svea hovrätt or Kammarkollegiet decision was located in this search; the §5 structural risk is `[I][?]`, not intent or prediction. No visual claim about *The Key*; Levels 7–9 unimplemented; Level 8 `under_review`; no HEAR status; no real funders or deadlines. Swedish and American law stay distinct.

**Reviewer outcome:** PASS FOR PREPARATION USE after full-structure, exact-string, persona and boundary check. Non-blocking observations recorded: one compressed paraphrase carries `[E][?]` under house style, and one passage says `reviewed search` rather than `this search`. Neither changes a finding. Publication clearance remains a separate human gate.

**Next:** if the book continues, revise within `12_COAUTHORED_BOOK/`, keep the ten chapters as a literary structure, and return any changed prose or tag to `research-reviewer` before publication use. Do not promote the fictional outcome into the article, the dossiers or the funding record.
