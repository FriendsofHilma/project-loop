# Rachel Villari dissertation — local research copy

This folder is a **processed research copy** of the dissertation PDF, produced so
the text and figures can be searched from this project. **The original PDF is
authoritative** for quotations, typography, layout, page references and visual
detail.

## Source and provenance

- **Authoritative source:** `../../HafK_Atom-Tree_Text_PROOF5_6-25-26.pdf` in the
  project root (272 pages, 39,263,862 bytes; PDF 1.4, Adobe InDesign 21.1 /
  Adobe PDF Library 18.0, created 2026-06-25). The PDF was not modified.
- **Processing model:** the public Colab notebook
  <https://github.com/FriendsofHilma/hear-ontology/blob/main/dissertation_to_opencode.ipynb>,
  cells 5, 9, 11 and 15.
- **Local reproduction:** `../../tools/extract_dissertation.py`. Run
  `python tools/extract_dissertation.py` from the project root to regenerate.
- **Generated:** see `created_utc` in `manifest.json`.

## Contents

| File | What it is |
|---|---|
| `dissertation.md` | Page-labelled extracted text (`## PDF page N`), with figure and render references |
| `pages.jsonl` | One record per PDF page: `page`, `text`, `ocr_used`, `embedded_images`, `page_render` |
| `figures.jsonl` | Inventory of the 84 embedded images: page, dimensions, extension, SHA-256 prefix |
| `chunks.jsonl` | 116 overlapping 800-word chunks with source-page metadata |
| `manifest.json` | Source metadata, processing options and deviations |
| `figures/` | 84 embedded images extracted at original resolution |
| `page_renders/` | 76 page images for low-text/image-bearing pages, 110 dpi |

Page numbers are **PDF page positions, starting at 1**, not the book's printed
page numbers unless the two happen to coincide.

## Deliberate differences from the notebook

1. **OCR was run locally**, not in Colab. Tesseract 5.5.3 was installed here
   and Swedish language data added. The 21 original low-text pages split into
   11 fully blank pages (6, 92, 192, 194, 224, 236, 266, 268, 270, 271, 272)
   and 10 inked pages (214–223); exactly those 10 were OCR'd at 150 dpi with
   `eng+swe`. The notebook installed English and Swedish but called
   pytesseract without a `lang` argument (English only), so our OCR text may
   differ slightly from the notebook's.
2. **Page renders are 110 dpi**, not the notebook's 150 dpi, to keep the local
   package small. Embedded images were not downsampled.
3. **No `docling.md`** — the notebook's optional Docling cell ended in an error.
4. **No ZIP archive** — the unpacked folder is the deliverable here.

The result is close to the notebook's run: 116 chunks here and there;
`dissertation.md` is 554,134 bytes here versus 543,519 in the notebook. OCR is
approximate — verify any quotation from pages 214–223 against the page render
or original PDF. Text extracted from layered PDF pages can also be out of
visual reading order (the title page is an example), so never quote from the
processed copy without checking the PDF page.

## Research rules for this project

- Treat the original PDF as authoritative.
- Use `pages.jsonl` and `dissertation.md` to locate relevant passages.
- Cite PDF page numbers in every substantive answer about the dissertation.
- When using `chunks.jsonl`, inspect the corresponding page records before quoting.
- Distinguish the author's claims from our own interpretation.
- Do not invent quotations, page numbers, figure captions, or bibliographic details.
- Refer to extracted images by their filenames and original PDF page numbers.
- For visual interpretation, inspect the image in `figures/` or the page render
  in `page_renders/`; do not rely only on extracted text.
- Preserve the original source and do not silently rewrite extracted text.

The dissertation is copyrighted material. This copy is for local research in
this project, not for redistribution.

## Paper work

Per project instruction, `PAPER.md` and `PAPER2.md` are **not** to be updated
from this source until asked. This folder only makes the dissertation available.
