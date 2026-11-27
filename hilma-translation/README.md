# Hilma notes — local English translation

Private research workflow. The source notes are copyrighted by Stiftelsen Hilma
af Klints Verk; translations are for local study, not redistribution.

Completed batch results and verification are in `TRANSLATION-REPORT.md`.

## Pipeline

1. Read each source PDF with PyMuPDF.
2. Group transcribed text lines into visual paragraphs while keeping the
   original page geometry.
3. Translate locally with Argos Translate's Swedish→English and German→English
   CTranslate2 models. No external LLM or translation API is used.
4. Apply a small glossary so key terms retain their Swedish form on first use
   in each document.
5. Remove only the original text spans, keeping images and vector line art,
   then write the English text back into the same rectangles.

## Pilot

```powershell
$py = "C:\Users\timsa\AppData\Local\Temp\opencode\translate-venv\Scripts\python.exe"
& $py hilma-translation\translate_pdfs.py --file 1043TANK.pdf --pages 1-2 --overwrite
```

## Batch

```powershell
cmd /c "hilma-translation\run_batch.cmd" > "hilma-translation\batch-run.log" 2>&1
```

This processes all 115 source PDFs. `translate_pdfs.py` takes a `.batch.lock`
so only one batch can write the output directory at a time; remove
`.batch.lock` only after confirming no translator process is running.

Outputs go to `hilma-translation/english-pdf/`. A SQLite cache avoids
retranslating repeated transcription boilerplate. `translation-log.jsonl`
records per-file group counts and overflow warnings.

The legacy `418SYMB.PPT` is PowerPoint 4.0 (`PP40`). Its image-preserving
counterpart is `418 Symboler.pdf`, which is included in the PDF batch.
`translate_ppt.py` additionally extracts the CP1252 text runs from the PPT and
writes `418SYMB-PPT-English.pdf` as a text-only supplementary copy.

## Known limitations

- Machine translation is a first pass; it should be post-edited by a reader
  familiar with af Klint's vocabulary.
- Reflow uses the original text rectangles. English is often longer, so some
  passages are automatically shrunk; `overflow` in the log marks cases where
  the minimum font size was still too large.
- Mixed inline bold/italic styling within one visual paragraph is collapsed to
  the dominant style.
- The supplementary `418SYMB-PPT-English.pdf` is text-only and rougher than
  the PDF export; use `418 Symboler.pdf` for layout and images.
