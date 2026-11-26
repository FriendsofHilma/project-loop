# Nulägesrapport 2026-11-25

**Steg:** 1 (Medvetenskap och ordning), FAS 1  
**Metod:** läsning av `AGENTS.md` och projektdokumentation, katalog- och filinventering, sökning efter `.git`, samt verifiering av bygge/tester. Inventeringen är **read-only**; inga original har flyttats eller raderats.

## 1. Befintliga regler

- `AGENTS.md` (396 rader, uppdaterad 2026-11-22) är den auktoritativa projektbeskrivningen: Cosmic Block Levels 1–5 implementerade, 7–9 avsiktligt oimplementerade, Level 8 endast kandidatdefinition i `PAPER2.md`.
- `AGENTS.md.new` (196 rader, 2026-11-11) är ett **äldre utkast**, ej en nyare specifikation.
- `.gitignore` finns i rot, `cosmic-block-c/` och `research-assistant/`, men **det finns inget Git-repository** någonstans i workspacet eller i förälderkatalogerna. `git rev-parse` misslyckas. Det finns förberedda `git add`-kommandon i `research-project/rea/handoff/validation-run-2026-11-24/git-add-commands.txt`, men ingen commit/push har gjorts.
- Personregler: `research-assistant/PERSONA-tyler-kane.md` (fiktiv persona, obligatorisk notice) och `research-project/characters/doris-fleur/CHARACTER.md` (fiktiv Doris Fleur X). Masterprompten skriver "Doris Flör"; se `DECISIONS.md` D-005.

## 2. Katalogöversikt

| Katalog | Innehåll |
|---|---|
| `src/`, `tools/`, `dist/` | TypeScript-modell Levels 1–5, visualisering, verktyg, kompilerat output |
| `cosmic-block-c/` | Oberoende C11-implementation med minnesmappad fil som modell |
| `research-project/` | Hilma Papers, HEAR/arkivpipeline, juridisk forskning, personas, finansiering, REA |
| `research-assistant/` | Lokal retrieved-baserad avhandlingsassistent, chattadaptorer |
| `notes-assistant/` | Offline LSA/FTS5-modell över maskinöversatta antecknings-PDF:er |
| `hilma-translation/` | Översättningspipeline och engelska PDF:er (upphovsrättsligt känsliga) |
| `novel/`, `narration/` | Episk romanprojekt respektive offline TTS-narration |
| `refinement/` | Computronium-förslag: falsifierare, Rocq-utkast, kontrollpatch |
| `docs/`, `figures/`, `PAPER*.md/html/pdf` | Dokumentation och genererade publikationsartefakter |
| `knowledge/`, `hilma-translation/english-pdf/` | Källmaterial och bearbetade data |
| `node_modules/` | Installerade npm-beroenden (~113 MB, gitignorerat) |
| `project-loop/` | **Nytt lager** enligt masterprompten; ingen befintlig katalog har ersatts |

## 3. Tekniska komponenter och verifieringsstatus

| Komponent | Språk/ingång | Kommando | Status |
|---|---|---|---|
| `src/` + `tools/` | TS 4.9, Node; `src/index.ts`, `tools/verify.js` | `npm run build`, `npm test`, `npm run figures` | **Verifierat i detta varv:** `tsc --noEmit` ren, `npm run build` ren, `npm test` oförändrad output |
| `cosmic-block-c/` | C11, `src/main.c`, `Makefile`, `tests/test_cosmic.c` | `make`, `make test` (87 kontroller), `make demo` | Dokumenterat pass i README/AGENTS; **ej omkött i detta varv** |
| `notes-assistant/` | Python, `notes_model.py` | `build`, `search`, `similar`, `topics`, `concept`, `themes`, `report` | Byggd artefact finns: 4 083 sidor, 4 065 dokument, 14 560 termer, 32 LSA-komponenter |
| `research-assistant/` | Python, `core.py`, `search.py`, adaptorer | `build_index.py`, `search.py --stats` | Index byggt: 116 chunks, 272 sidor, 84 figurer, 9 claims |
| `research-project/tools/` | Python, arkiv-/bevis-/REA-pipeline | `verify_archive.py`, `validate_pilot.py`, `rea_handoff.py` | Dokumenterat 352/352 manifest, 7 210 sidor, 1 065/1 065 verifieringar, 10/10 pilot |
| `narration/`, `novel/tools/` | Python, TTS respektive sqlite-citatkontroll | `verify_output.py`, `verify_quotes.py` | Dokumenterat: kapitel 1-ljud spelat i webbläsare; 56 citat kontrollerade, 0 fel |
| `refinement/` | Python + Rocq | `check_statements.py`, `coqc rocq/CosmicBlock.v` | Falsifierare: 9 261 celler, inget motexempel. **Rocq-bevis ej maskinkontrollerat** här |
| `hilma-translation/` | Python, översättningspipeline | `translate_pdfs.py`, `verify_batch.py` | Dokumenterat: 115 käll-PDF, 116 utdata, 4 137 sidor, 0 räkningsfel |

## 4. Avvikelser som identifierats

1. `AGENTS.md` hänvisar till `tests/structure-tests.ts` och `tests/visualization-tests.ts`, men **katalogen `tests/` finns inte**.
2. `hoConcatDepth` fanns i modulen men exporterades inte från `src/index.ts`, trots att `AGENTS.md` listar den i Level 5-API:t. **Åtgärdat i detta varv** (se `state/progress.json`, P-005); `tsc --noEmit`, build och test är rena efter ändringen.
3. `package.json` (namn `cosmic-block`, MIT) och `package-lock.json` (namn `standardprojekt`, ISC, Puppeteer som dependency, TypeScript som runtime-dependency) har **driftat**. Ingen ändring gjord; kräver beslut.
4. `tools/verify.js` är en utskriftssmoketest utan assertions och förutsätter att `dist/` redan finns.
5. `PAPER.html/pdf` och figurer är äldre än `PAPER.md`; kan vara inaktuella.
6. `AGENTS.md.new`, `PAPER-hilma.*` och `-hilma`-variantverktygen är äldre/alternativa varianter. Inget har raderats.

## 5. Original vs deriverat

**Original/källa:** `src/`, `cosmic-block-c/src/`, `AGENTS.md`, `PAPER*.md`, `novel/08_MANUSCRIPT/`, `research-project/sources/hilma-papers/original/`, `hilma-translation/`-källor, persona-filer.

**Deriverat, kan återskapas:** `dist/`, `node_modules/`, `figures/`, `cosmic-block-c/build*/`, `narration/output/`, `notes-assistant/data/`, `research-assistant/index.sqlite` och `chroma/`, `research-project/indexes/`, `processed/`, `__pycache__/`.

Regeln från masterprompten gäller: ingen AI-korrigering skriver över originalmaterial, särskilt inte Hilma Papers OCR eller maskinöversättningar.

## 6. Inventering i sju kategorier

**Behåll och utveckla:** `src/`, `cosmic-block-c/`, `notes-assistant/notes_model.py`, `research-assistant` retrieval-kärna, `research-project/tools/`, `evidence/tools/`, `rea/tools/`, `narration/`, `refinement/check_statements.py`, `tools/make-figures.js`, `tools/independence_check.py`.

**Arkivera (hänvisning, ingen flytt):** `AGENTS.md.new`, `PAPER.html/pdf`, `PAPER-hilma.html/pdf`, `research-project/rea/handoff/validation-run-2026-11-24/`, `research-project/reports/archive/`.

**Refaktorera:** `package.json`/`package-lock.json`-drift; `tests/` saknas; `ModelSpace.ts`-namngivning; `tools/extract_dissertation.py` vs `research-project/tools/process_archive.py`; HTML/PDF-generatorer; requirements-pinnar för `narration/` och `notes-assistant/`.

**Flytta till annat projekt (förslag, ej utfört):** `research-project/` som eget HEAR-program; `hilma-translation/`; `narration/` tillsammans med `novel/`; chattadaptorer och persona-lager i `research-assistant/`.

**Publicera som öppen källkod (förslag, ej publicerat):** `src/`, `cosmic-block-c/`, figure- och verifieringsverktyg, `refinement/rocq/CosmicBlock.v` efter maskinkontroll. **Ej öppna data:** översatta PDF:er, `notes.sqlite3`, Hilma Papers original/OCR, långa MT-citat.

**Kräver mänskligt beslut:** Git-initiering; Rocq-kontroll och Computronium-bedömning; röstval i `narration/`; publiceringsgodkännande för artikelutkast; omparametrisering av defaults (13, 5, 2) och färgfrågan om *The Key*; Levels 7–9; regenerering av inaktuella publikationsfiler; **GitHub-publicering (D-004)**.

**Kan avslutas:** `AGENTS.md.new` som övergivet utkast; `cosmic-block-c/build-znx/` som avslutat kompilatorexperiment; `-hilma`-konverterare som engångsverktyg. Inget avslutat fysiskt i detta varv.

## 7. Återanvändbara komponenter och intressentkoppling (preliminär)

- `notes-assistant/notes_model.py` + Hilma Papers-index → **Friends of Hilma / Safe Trade Media** (sökbarhet, källhänvisningar).
- `research-project/tools/` (OCR, manifest, verifiering) → **Safe Trade Media** (publicering), **Friends of Hilma** (arkiv).
- `research-assistant` FTS5 + semantiskt lager → **DFRI** (lokala AI-agenter, tillitsnätverk) och **Sambruk** (gemensamma digitala resurser).
- `cosmic-block-c/` (bytes-adresserbar lagring, checksumma) → **Sambruk/DFRI** som referens för interoperabel, verifierbar lagring.
- `narration/` (providerkontrakt, cache, hashad provenans) → **Friends of Hilma** (tillgängliggörande), **Safe Trade Media** (publicering).
- `docs/democratic-commons-infrastructure.md` beskriver redan en ecosystemvision med Friends of Hilma, DFRI, OpenCollect/Stripe och agent-tillitsnätverk; den är ett viktigt befintligt underlag för steg 2–4 och ska inte skrivas om.

## 8. Antaganden och begränsningar

- "Börja om på ny kula" tolkas som ny arbetsstruktur, inte nollställning av historik (masterprompten §2.1).
- Ingen extern kontakt, publicering, e-post eller ansökan har gjorts.
- Inventeringen bygger till stor del på befintliga dokument och README:er; endast TypeScript-bygget/testerna och GitHub-åtkomsten har verifierats direkt i detta varv.
- Fullständig intressent- och omvärldsinventering redovisas i separata filer under `steps/02-network/`, `research/` och `reports/INTERESSENTREGISTER_2026-11-25.md`.
