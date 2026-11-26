# Katalog — återanvändbara komponenter

> Status: [FINNS] = komponenten finns lokalt och är läst 2026-11-25. [FÖRSLAG] = föreslagen återanvändning, inte beslutad eller exporterad.
> Källor: `AGENTS.md`, `README.md` och respektive delprojekts README. Inga filer har flyttats eller ändrats.

## Snabbtabell

| Komponent | Exakt lokal sökväg | Status | Beroendefotavtryck | Möjlig återanvändare |
|---|---|---|---|---|
| Cosmic Block TypeScript-modell | `src/`, `tests/`, `tools/verify.js`, `tsconfig.json`, `package.json`, `AGENTS.md` | [FINNS] | Node.js; TypeScript `^4.9.5`, `@types/node ^18.19.69`, `three ^0.136.0`, `@types/three ^0.136.1`; `npm test` → `node tools/verify.js` | Sambruk, DFRI, Friends of Hilma |
| 3D-visualisering | `src/visualization/visualization.ts`, `figures/`, `tools/make-figures.js`, `tools/serve.js` | [FINNS] | Three.js; figurgeneratorn är Node-baserad; `tools/serve.js` lyssnar lokalt (port 8731 enligt README/AGENTS) | Friends of Hilma, Safe Trade Media |
| Cosmic Block C11 / mappad fil | `cosmic-block-c/src/`, `cosmic-block-c/tests/`, `cosmic-block-c/README.md` | [FINNS] | C11, `make`, `mmap`/`CreateFileMapping`; 87 tester; alternativt `znx` (scratch-patchad, inte i repot) | Sambruk, DFRI, Friends of Hilma |
| Hilma Papers-arkivkedja | `research-project/tools/hilma_archive.py`, `process_archive.py`, `search_archive.py`, `verify_archive.py`, `research-project/PROTOCOL.md`, `research-project/README.md` | [FINNS] | Python, PyMuPDF, Tesseract `swe+eng`, Pillow, SQLite FTS5; robots.txt och fördröjning inbyggda | Safe Trade Media, Friends of Hilma, Sambruk |
| FTS5-index för Hilma Papers | `research-project/indexes/hilma-papers/search.sqlite3`, `index-report.json`, `chunks.jsonl`, `pages.jsonl`, `documents.jsonl`, `figures.jsonl`, `bibliography.md`, `research-index.md` | [FINNS] | SQLite FTS5 `unicode61`; 4 099 chunks enligt `index-report.json`; nyckelord auktoritativt, vektor valfritt | Safe Trade Media, Friends of Hilma |
| Notes assistant (offline LSA) | `notes-assistant/notes_model.py`, `notes-assistant/README.md`, `notes-assistant/data/` (deriverat) | [FINNS] | Python, PyMuPDF, NumPy, SciPy (`sparse`, `svds`), SQLite FTS5; 32 LSA-komponenter; ingen nätverksanvändning | Safe Trade Media, DFRI, Friends of Hilma |
| Dissertation research assistant | `research-assistant/core.py`, `embeddings.py`, `build_index.py`, `build_figures_index.py`, `build_claims.py`, `layers.py`, `search.py`, `discord_bot.py`, `matrix_bot.py`, `requirements.txt`, `README.md` | [FINNS] | `chromadb==0.4.24`, `posthog<4`, `onnxruntime>=1.16,<1.17`, `numpy<2`; adapters: `discord.py>=2.4,<3`, `simplematrixbotlib>=2.13,<3`; modellnedladdning ~80 MB är valfri | DFRI, Safe Trade Media, Sambruk |
| Evidence-record-pilot | `research-project/evidence/README.md`, `EVIDENCE_RECORD_TEMPLATE_v0.1.md`, `PILOT_EVIDENCE_RECORDS_v0.1.md`, `PILOT_MANIFEST_v0.1.json`, `tools/validate_pilot.py` | [FINNS] | Python-standardbiblioteket; hashar och exakta strängar | Alla fyra |
| Quotation verification | `novel/tools/verify_quotes.py`, `novel/tools/page.py`, `novel/02_HILMA/QUOTATION_REGISTER.md`, `novel/README.md` | [FINNS] | Python + SQLite (`notes-assistant/data/notes.sqlite3`); 56 strängar enligt `novel/README.md` | Friends of Hilma, Safe Trade Media |
| Narration subsystem | `narration/config/`, `narration/src/`, `narration/tools/`, `narration/web/index.html`, `narration/README.md` | [FINNS] | `piper-tts==1.8.0`; modell ~137 MB utanför repo; Windows SAPI-fallback; `edge` avstängd; cache per segment | DFRI, Friends of Hilma, Safe Trade Media |
| Storage refinement | `refinement/PREREGISTRATION.md`, `check_statements.py`, `rocq/CosmicBlock.v`, `refinement/README.md` | [FINNS] | Python-standardbiblioteket för falsifiering; Rocq/Coq **ej maskinkontrollerad här** | Sambruk, DFRI |
| Project-loop ramverk | `project-loop/README.md`, `WORKFLOW.md`, `CURRENT_STATE.md`, `DECISIONS.md`, `state/*.json`, `archive/README.md` | [FINNS] | Inga externa beroenden; ren dokumentation och JSON | Alla fyra |

---

## 1. Cosmic Block TypeScript-modell och visualisering

**Exakta vägar** [FINNS]: `src/`, `src/structures/`, `src/structures/collection/`, `src/validation/`, `src/visualization/`, `tests/`, `tools/verify.js`, `AGENTS.md` §§2–5, `README.md`.

**Vad den gör** [FINNS]: Level 1–5 med cellvalidering 0–9, nollinitiering, konfigurerbara dimensioner, matematik oberoende av rendering. Default 13/13/13, 5 och 2. Level 7–9 är avsiktligt oimplementerade; Level 8 finns bara som kandidatdefinition i `PAPER2.md` enligt AGENTS.md.

**Beroenden** [FINNS]: `npm install`; `npm test` kör `node tools/verify.js`; TypeScript `^4.9.5`, Three.js `^0.136.0` och tillhörande typpaket. Licens MIT i `package.json` och `LICENSE`.

**Återanvändning** [FÖRSLAG]:
- **Sambruk**: mönster för starka typer, validering och modulgränser i gemensamma digitala resurser.
- **DFRI**: ren lokal kod utan externa tjänster; kan packas i offline-bygge.
- **Friends of Hilma**: geometrisk/matematisk modell av motiv, under förutsättning att inga visuella påståenden om *The Key* görs utan bildkontroll (AGENTS.md-caveat).

**Villkor** [FÖRSLAG]: publicering kräver mänskligt beslut; ingen flytt av filer utan godkännande (D-001/D-002).

## 2. Cosmic Block C11

**Exakta vägar** [FINNS]: `cosmic-block-c/src/`, `cosmic-block-c/tests/`, `cosmic-block-c/README.md`.

**Vad den gör** [FINNS]: cellerna lagras i en mappad fil med offset `4096 + (ho*spaces + space)*planes*rows*cols + (z*rows + y)*cols + x`. Header, magic, byteordning och FNV-1a verifieras. Värdet 9 på `(0,0,6,7,8)` ligger på byte 5209 i en 28 672-byte-fil. 87 tester gröna; även byggd med `znx` enligt README, men kompilatorpatchen är scratch work och ingår inte.

**Beroenden** [FINNS]: C11, `make`, `mmap` på Unix / `CreateFileMapping` på Windows. Ingen databasserver.

**Återanvändning** [FÖRSLAG]:
- **Sambruk**: exempel på deterministisk, dokumenterad lagring utan oväntade beroenden.
- **DFRI**: lokal-first infrastruktur och reproducible builds.
- **Friends of Hilma**: integritetsmönster för arkiv (hash/checksum + verificerbar offset).

**Villkor** [FÖRSLAG]: single writer, inget lås, inga multi-cell-transaktioner; inte ett bevis på fysisk tredimensionalitet.

## 3. Hilma Papers-arkivkedja och FTS5-index

**Exakta vägar** [FINNS]: `research-project/tools/*.py`, `research-project/sources/hilma-papers/manifest.json`, `research-project/sources/hilma-papers/original/`, `research-project/sources/hilma-papers/processed/`, `research-project/indexes/hilma-papers/`, `research-project/PROTOCOL.md`, `research-project/README.md`.

**Vad den gör** [FINNS]: 384 dokument, 7 210 PDF-sidor, 126 dokument med OCR-sidor. Robots.txt, 1,2 s fördröjning, 60 s timeout, 3 retries, SHA-256 och `read_only: true`. Extraktion med native text + OCR-fallback (`swe+eng`, 150 dpi), sidrender (110 dpi), chunkning 600/100 ord. `verify_archive.py` kontrollerar hashar, sidnummer, chunk-proveniens och indexräknare.

**Beroenden** [FINNS]: Python, PyMuPDF, pytesseract, Pillow, SQLite FTS5 `unicode61`; Tesseract-språkdata. Ingen extern LLM.

**Återanvändning** [FÖRSLAG]:
- **Safe Trade Media**: direkt kärna för sök- och assistentmodulen, se `project-loop/research/HILMA_PAPERS_SOK_ASSISTENT_SPEC.md`.
- **Friends of Hilma**: citation-first forskning och granskning av OCR/native-varianter.
- **Sambruk**: generellt mönster för “original immutable + derived index”.

**Villkor** [FÖRSLAG]: respektera robots.txt/rate limits; ingen AI-skrivning i `original/` eller `processed/`; `[OCR]` endast när `source_method: ocr`.

## 4. Notes assistant

**Exakta vägar** [FINNS]: `notes-assistant/notes_model.py`, `notes-assistant/README.md`, `notes-assistant/data/` (deriverat).

**Vad den gör** [FINNS]: PyMuPDF → FTS5 → tokenisering/stopplista → TF-IDF + truncated SVD (32 komponenter) → kuraterade `CONCEPTS` och åtta `THEMES`; kommandona `build`, `stats`, `search`, `similar`, `topics`, `concept`, `themes`, `report`. Sidreferens `FILE.pdf:PAGE`. Inte generativ.

**Beroenden** [FINNS]: Python, PyMuPDF, NumPy, SciPy, SQLite. Ingen nätverksanslutning. Artefakter i `notes-assistant/data/` kan återskapas med `python notes-assistant/notes_model.py build`.

**Återanvändning** [FÖRSLAG]:
- **Safe Trade Media**: LSA-mönster för valfritt vektorlager ovanpå Hilma Papers.
- **DFRI**: bevis på att användbar sökning går att köra lokalt utan molntjänst.
- **Friends of Hilma**: tematiska läsningar av anteckningar — men bara lokalt.

**Villkor** [FÖRSLAG]: källtexterna i `hilma-translation/english-pdf/` är privata, maskinöversatta och © Stiftelsen Hilma af Klints Verk; publicera inte PDF:er eller långa utdrag. Bär `[MT]`.

## 5. Dissertation research assistant

**Exakta vägar** [FINNS]: `research-assistant/core.py`, `embeddings.py`, `build_index.py`, `build_figures_index.py`, `build_claims.py`, `layers.py`, `search.py`, `discord_bot.py`, `matrix_bot.py`, `PERSONA-tyler-kane.md`, `requirements.txt`, `README.md`.

**Vad den gör** [FINNS]: retrieval-only assistant med FTS5, Chroma, RRF-hybrid, figurer, claim-ledger och citation-first `--context`. Discord `/ask` och Matrix `!ask` använder samma `core.py`. Original-PDF:en modifieras aldrig.

**Beroenden** [FINNS]: enligt `requirements.txt`: `chromadb==0.4.24`, `posthog<4`, `onnxruntime>=1.16,<1.17`, `numpy<2`, `discord.py>=2.4,<3`, `simplematrixbotlib>=2.13,<3`. Första semantiska bygget laddar ner ~80 MB ONNX-modell; `--no-semantic` fungerar offline. Pinningarna är dokumenterade som nödvändiga för den lokala Windows/Python 3.10-miljön.

**Återanvändning** [FÖRSLAG]:
- **DFRI**: mönster för lokalt AI-agent-gränssnitt och Matrix/E2E-adapter.
- **Safe Trade Media**: RRF- och kontextbundle-mönster, men ersätt källkorpusen med Hilma Papers.
- **Sambruk**: separera retrieval core från chatadapter.

**Villkor** [FÖRSLAG]: doktoratsavhandlingen är upphovsrättsskyddad; persona “Tyler Kane” är fiktiv (D-006); inga hemligheter i repot.

## 6. Evidence, citat och rättighetskontroll

**Exakta vägar** [FINNS]: `research-project/evidence/`, `research-project/reports/review/full-corpus-claim-ledger.UNVERIFIED.md`, `research-project/PROTOCOL.md`, `novel/tools/page.py`, `novel/tools/verify_quotes.py`, `novel/02_HILMA/QUOTATION_REGISTER.md`, `novel/README.md`.

**Vad de gör** [FINNS]: evidence-record-piloten lagrar hash, exakt sträng, locator, transformationskedja, `premise_status` och review-objekt. `verify_quotes.py` kontrollerar 56 registrerade citat mot sidor. PROTOCOL kräver document ID + PDF-sida + URL och evidence-taggar `[E]`, `[E-secondary]`, `[A]`, `[ARG]`, `[DEC]`, `[I]`, `[M]`, `[MT]`, `[OCR]`, `[?]`.

**Beroenden** [FINNS]: Python-standardbiblioteket och SQLite.

**Återanvändning** [FÖRSLAG]: alla fyra intressenter kan använda samma kontroll för att hindra att sökträffar eller AI-sammanfattningar blir “bevis”.

**Villkor** [FÖRSLAG]: en hash bevisar bytes, inte äkthet eller sanning; `premise_status` är inte en ny evidence-tagg; inget record klarar publicering automatiskt.

## 7. Narration

**Exakta vägar** [FINNS]: `narration/config/settings.yaml`, `narration/config/voices.yaml`, `narration/config/pronunciation.json`, `narration/src/text.py`, `audio.py`, `engine.py`, `narration/src/providers/`, `narration/tools/`, `narration/web/index.html`, `narration/README.md`.

**Vad den gör** [FINNS]: offline TTS med utbytbara providers (Piper/SAPI/edge, edge avstängd), segmentcache, hashad kanonisk text, separat röst för registrerade Hilma-citat, lokal spelare på port 8732. Ingen röstkloning.

**Beroenden** [FINNS]: `piper-tts==1.8.0`, modell `en_US-libritts-high` (~137 MB, lagrad utanför repo/OneDrive), Windows SAPI-fallback, YAML-konfiguration.

**Återanvändning** [FÖRSLAG]:
- **DFRI**: provider-kontrakt och offline-first TTS.
- **Friends of Hilma / Safe Trade Media**: tillgängliggörande av granskade, korta dokumentutdrag som ljud — först efter rättighetsbeslut.

**Villkor** [FÖRSLAG]: MT-citat är © Stiftelsen Hilma af Klints Verk; ingen kloning av författare eller historisk person; slutlig röst väljs av människa.

## 8. Refinement och project-loop-ramverket

**Exakta vägar** [FINNS]: `refinement/PREREGISTRATION.md`, `refinement/check_statements.py`, `refinement/rocq/CosmicBlock.v`, `refinement/README.md`; `project-loop/README.md`, `WORKFLOW.md`, `CURRENT_STATE.md`, `DECISIONS.md`, `state/`, `archive/README.md`.

**Vad de gör** [FINNS]: `check_statements.py` är en falsifierare över extents 1–6 (9 261 celler) utan motexempel. Rocq-filen är ett utkast och **inte maskinkontrollerad här** (UAC blockerade installationen, `0x800704c7`). Project-loop ger bevara-före-förändring, tillståndsmaskin och beslutspunkter.

**Beroenden** [FINNS]: Python-standardbiblioteket; Rocq/Coq om någon vill köra `coqc`. Project-loop: inga.

**Återanvändning** [FÖRSLAG]:
- **Sambruk**: preregistrering och öppen granskningskultur.
- **DFRI**: “weaken the claim, never add an axiom”-regeln som kvalitetsprincip.
- **Alla**: `DECISIONS.md` som mänsklig kontrollpunkt före publicering.

**Villkor** [FÖRSLAG]: ingen publicering av masterprompten förrän D-004 är hävd; inga externa konton eller repos skapas automatiskt.

---

## Prioriterad återanvändningsordning [FÖRSLAG]

1. `research-project/tools/*` + `indexes/hilma-papers/` → Safe Trade Media.
2. `notes-assistant/notes_model.py` → valfritt vektorlager i samma modul.
3. `research-assistant/core.py` → DFRI:s lokala agent/Matrix-adapter.
4. `research-project/evidence/` + `novel/tools/verify_quotes.py` → gemensam citatgranskning för alla.
5. `cosmic-block-c/` och `refinement/` → Sambruk/DFRI som integritetsmönster, inte som Hilma-data.

Ingen av punkterna har exporterats, packats eller publicerats 2026-11-25.
