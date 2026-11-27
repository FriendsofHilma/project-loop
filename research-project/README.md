# HEAR Research Project

HEAR — Hilma Engineering Anomalous Research — is a shared knowledge environment connecting archival research, legal scholarship, spiritual philosophy, mythic storytelling, computational research and open-source infrastructure.

This directory is the new shared layer. It **adapts rather than replaces** existing infrastructure:

- `knowledge/dissertation/` and `tools/extract_dissertation.py` — Rachel dissertation extraction pattern.
- `research-assistant/` — SQLite FTS5 + optional Chroma retrieval pattern.
- `notes-assistant/` — page-level corpus model with `FILE.pdf:PAGE` references.
- `novel/` and `research-assistant/PERSONA-tyler-kane.md` — Tyler Kane persona and saga.
- `src/`, `cosmic-block-c/`, `PAPER*.md`, `refinement/` — Cosmic Block implementations and papers.

## Layout

```text
sources/       immutable originals and per-document extraction
knowledge/     interpreted research dossiers and syntheses
characters/    persistent character instructions
narrative/     saga, character interactions, historical timeline
engineering/   Cosmic Block and agent architecture notes
funding/       real opportunities and programme planning
indexes/       structured searchable outputs
reports/       assessments, archive reports, independent review
notebooks/     research notebooks and open questions
tools/         downloader, processor, search, verification
```

## First workflow

```powershell
python research-project/tools/hilma_archive.py discover
python research-project/tools/hilma_archive.py download --limit 3
python research-project/tools/process_archive.py --limit 3
python research-project/tools/search_archive.py build
python research-project/tools/search_archive.py search "statutes"
python research-project/tools/verify_archive.py
```

See `PROTOCOL.md` for evidence rules and agent ownership.
