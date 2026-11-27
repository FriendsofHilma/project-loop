# Notes assistant — local model of the translated Hilma notebooks

This directory contains a **local, offline reading model** over the English
machine translations of Hilma af Klint's transcribed notebooks. It is not a
generative chatbot and it does not call an external model or API.

The source translations are private research copies in
`../hilma-translation/english-pdf/`. The source notes are © Stiftelsen Hilma af
Klints Verk. Machine translation is a first pass, not a scholarly edition.

## Build

```powershell
python notes-assistant/notes_model.py build
```

This creates `notes-assistant/data/`:

| File | Purpose |
|---|---|
| `notes.sqlite3` | SQLite FTS5 index, one row per PDF page |
| `lsa_model.npz` | TF-IDF matrix reduced by truncated SVD (LSA) |
| `vocab.json` | vocabulary used by the model |
| `doc_ids.json` | page identifiers in model order |
| `topics.json` | top terms per latent topic |
| `concepts.json` | curated concept counts and page co-occurrence |
| `themes.json` | ranked pages per thematic axis |
| `themes.md` | rendered thematic reading aid with citations |
| `notes-report.md` | generated reading aid / corpus overview |
| `meta.json` | build summary |

No network access is used.

## Query

```powershell
# Full-text search
python notes-assistant/notes_model.py search "ether body"

# Latent topics
python notes-assistant/notes_model.py topics --limit 12

# Pages distributionally similar to one page
python notes-assistant/notes_model.py similar 1043TANK.pdf:3

# Curated concept counts and sample passages
python notes-assistant/notes_model.py concept "elemental spirits"
python notes-assistant/notes_model.py concept "The Five"

# Curated thematic axes: ranked pages and snippets
python notes-assistant/notes_model.py themes --limit 6

# Generated overview
python notes-assistant/notes_model.py report
```

Page references use `FILE.pdf:PAGE`, where `PAGE` is the PDF page position from
1.

## What the model does

1. Extracts page text from every translated PDF with PyMuPDF.
2. Builds a SQLite FTS5 index for exact lexical retrieval.
3. Tokenises the corpus, strips a stop-word list, and builds a TF-IDF matrix.
4. Reduces the matrix with truncated SVD (latent semantic analysis). Each page
   becomes a 32-dimensional vector; nearby vectors point to pages with related
   vocabulary.
5. Counts a curated set of af Klint / anthroposophical concepts and records
   which concepts co-occur on the same page.
6. Ranks pages along eight curated thematic axes (time, colour and number,
   ether body, temple, light/darkness, Lucifer/Ariman, soul/spirit, plant
   forces), requiring lexical seed matches and then ordering by seed-term
   density and LSA cosine. Output: `themes.json` plus `themes.md`.
7. Writes a Markdown overview of topics, concept counts and strongest pairs.

## Limits

- **Lexical, not semantic in the LLM sense.** The model finds recurring words
  and distributional neighbours. It will miss a theme expressed in unexpected
  vocabulary.
- **Translation noise is inherited.** The translations were produced locally
  with Argos/CTranslate2; proper names, OCR errors and Swedish compounds survive
  in places. Verify every quotation against the source PDF.
- **Page-level, not paragraph-level.** A page can contain several unrelated
  passages. Use `search` or `concept` to inspect the actual text.
- **No truth claims.** Co-occurrence is not causation or authorial intention.
- **No redistribution.** Do not publish the translated PDFs or long extracts
  without permission from the rights holder.
