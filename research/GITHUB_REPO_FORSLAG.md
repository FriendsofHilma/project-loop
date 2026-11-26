# Förslag till GitHub-repositorier per intressent

> Status: **[FÖRSLAG]** — dokumentationen nedan är förberedelse i `project-loop/` steg 1. Inga repositories har skapats, förgrenats, pushat eller ändrats.
> Datum: 2026-11-25

## 0. Tvingande villkor [VERIFIERAT 2026-11-25]

1. **Inga externa repos får skapas eller ändras utan uttryckligt mänskligt godkännande.** Detta följer `MASTERPROMPT.md` §7, `WORKFLOW.md` “Arbetsregler” och `DECISIONS.md` D-004.
2. **`gh` (GitHub CLI) finns inte installerat, ingen GitHub-token finns i miljön och webbläsaren är inte inloggad på GitHub.** GitHub-inloggningen visas i webbläsaren. Därför är all publicering blockerad per 2026-11-25.
3. **Masterpromptens publicering är blockerad** enligt `DECISIONS.md` D-004 och backlogpost `B-001`. Målrepo för “friendsofhilma” är inte bekräftat: organisation, befintligt repo eller nytt repo? Se öppen fråga 1 i `DECISIONS.md`.
4. **Inget repo existerar lokalt i detta workspace** (ingen `.git`-katalog hittades; `project-loop/README.md` och `state/progress.json`). All versionshantering hittills är lokal filbaserad med hashar och tidsstämplade rapporter.
5. **`MASTERPROMPT.md` får inte redigeras** (D-003) och får inte publiceras förrän beslut finns (D-004). Eventuell publicering sker ordagrant.
6. **Tyler Kane och Doris Fleur X är fiktiva personas** (D-006). Föreslagna repo-innehåll får inte framställa dem som medlemmar, utredare med auktoritet eller historiska vittnen.
7. Alla repos nedan är **namnförslag** [FÖRSLAG]. Inget namn är reserverat eller kontrollerat mot GitHub.

## 1. Gemensam struktur för alla föreslagna repos [FÖRSLAG]

```text
<repo>/
├── README.md                 # syfte, status, vad som är källa vs deriverat
├── LICENSE                   # föreslagen licens, se respektive intressent
├── NOTICE                    # tredjepartslicenser och rättighetsförbehåll
├── CODE_OF_CONDUCT.md        # [FÖRSLAG] gemensam, låg tröskel
├── CONTRIBUTING.md           # granskningsregler, evidence-taggar, ingen originaländring
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DATA_MODEL.md
│   ├── API.md
│   ├── INSTALL.md
│   ├── EVIDENCE_POLICY.md
│   └── RELEASE_CHECKLIST.md
├── src/                      # endast egen källkod
├── tests/                    # deterministiska tester utan nätverk som standard
├── fixtures/                 # syntetiska eller rättighetsklarerade exempel endast
└── .gitignore                # index, cache, modelvikter, hemligheter, original-PDF:er
```

Gemensam regel [FÖRSLAG]: `original/`, `english-pdf/`, privata översättningar, stora index, modellvikter och token får aldrig committas. `NOTICE` ska hänvisa till `research-project/PROTOCOL.md` och till `project-loop/archive/README.md`.

---

## 2. Sambruk

### 2.1 Reponamn [FÖRSLAG]

`sambruk-hear-interoperabilitet`

Alternativ om Sambruk föredrar engelska: `sambruk-hear-interop`.

### 2.2 Varför [FÖRSLAG]

Sambruk är i `MASTERPROMPT.md` §2.3 kopplat till digital samverkan, rådighet och digital självbestämmanderätt, gemensamma digitala resurser och interoperabilitet. Repot ska vara en *mönster- och kontraktsrepo*, inte en kopia av hela Hilma-korpusen.

### 2.3 Befintliga lokala tillgångar [VERIFIERAT]

- `project-loop/MASTERPROMPT.md` §2.3 och §4.
- `research-project/reports/public-sources/RADIG_KLIRR_HACK_DFRI_ANALYSIS_2026-11-24.md` med öppen licenshållning och interoperabilitetsprinciper.
- `research-project/reports/public-sources/` övriga offentliga källor.
- `research-project/PROTOCOL.md` som bevaranderegler.
- `research-project/evidence/` för hash-/locator-konventionen.

### 2.4 README-outline [FÖRSLAG]

1. Syfte: gemensam interoperabilitetsunderlag för digital samverkan.
2. Icke-mål: inget medlemsregister, inga personuppgifter, ingen Hilma-korpus i repot.
3. Innehåll: datakontrakt, API-exempel, testfixture, länkar till externa underlag.
4. Källa vs deriverat: se §2.7.
5. Install: se §2.6.
6. Licens och förbehåll.
7. Status: förberett, ej publicerat.
8. Beslutspunkt: `DECISIONS.md`.

### 2.5 Licensförslag [FÖRSLAG]

- Kod: **MIT** som standard, för maximal återanvändning i offentlig sektor. Alternativt **EUPL-1.2** om Sambruk kräver europeisk licens; detta måste beslutas, inte antas.
- Dokumentation: **CC BY 4.0**.
- Data: endast syntetiska fixtures med CC0; inga riktiga ärendedata.

### 2.6 Installationsinstruktioner [FÖRSLAG]

```bash
# efter godkännande och kloning
python -m pip install -r requirements.txt     # endast om repot får egen kod
python -m pytest tests/                       # eller motsvarande deterministisk testkommando
python tools/check_contracts.py --fixtures fixtures/
```

Ingen nedladdning av Hilma-PDF:er ingår. Inga token eller nätverksanrop i standardkörningen.

### 2.7 Initial issue-lista [FÖRSLAG]

| # | Title | Accepted när |
|---:|---|---|
| 1 | Bestäm licens: MIT eller EUPL-1.2 | Beslut i `DECISIONS.md` |
| 2 | Definiera minimalt datakontrakt för dokument-ID, sida och hash | Schema + tester finns |
| 3 | Lägg till syntetisk fixture utan verkliga personuppgifter | Ingen känslig data i repot |
| 4 | Dokumentera rådighets- och exitscenario | `docs/ARCHITECTURE.md` granskad |
| 5 | Koppla `PROTOCOL.md`-taggar till API-svar | `[E]`/`[I]`/`[?]` syns i exempelsvar |
| 6 | Granska att inget originalmaterial committats | `git ls-files` + NOTICE kontrollerade |

### 2.8 Källa vs deriverat [FÖRSLAG]

| Källa (bevaras, ändras inte) | Deriverat (kan återskapas) |
|---|---|
| `MASTERPROMPT.md`, `PROTOCOL.md`, offentliga rapporter under `research-project/reports/public-sources/` | `docs/ARCHITECTURE.md`, scheman, syntetiska fixtures, tester, genererade exempelsvar |

---

## 3. DFRI

### 3.1 Reponamn [FÖRSLAG]

`dfri-hear-local-first-assistant`

Alternativ: `dfri-hear-agent-contract`.

### 3.2 Varför [FÖRSLAG]

DFRI är i `MASTERPROMPT.md` §2.3 kopplat till medlemsregister, e-legitimation, föreningsadministration, digitala allmänningar och **lokalt förankrade AI-agenter och tillitsnätverk**. Repot ska visa hur en sökassistent kan köras lokalt utan extern LLM och utan att samla personuppgifter i onödan.

### 3.3 Befintliga lokala tillgångar [VERIFIERAT]

- `research-assistant/README.md`: retrieval core med SQLite FTS5, Chroma, RRF, kontextbundle samt Discord- och Element/Matrix-adaptrar. Observera: original-PDF:en är aldrig modifierad och indexen byggs från processed copy.
- `research-assistant/requirements.txt`: `chromadb==0.4.24`, `posthog<4`, `onnxruntime>=1.16,<1.17`, `numpy<2`, `discord.py>=2.4,<3`, `simplematrixbotlib>=2.13,<3`.
- `research-project/reports/public-sources/RADIG_KLIRR_HACK_DFRI_ANALYSIS_2026-11-24.md` med DFRI-relevans och öppen licenshållning.
- `notes-assistant/notes_model.py`: helt offline FTS5 + LSA-mönster utan extern modell.
- `narration/README.md`: provider-kontrakt (Piper/SAPI/edge) som exempel på utbytbara lokala leverantörer.

### 3.4 README-outline [FÖRSLAG]

1. Syfte: lokal-first, granskningsbar assistent; ingen moln-LLM som standard.
2. Hotmodell: indata, förtroendegränser, hemligheter, vad som loggas.
3. Gränssnitt: CLI först, Matrix som valfri adapter.
4. Personsuppgifter: inga medlemsdata i fixtures; minimiprincip.
5. Install och offline-läge.
6. Licens och tredjepartskomponenter.
7. Status: förberett, ej publicerat.

### 3.5 Licensförslag [FÖRSLAG]

- Kärna: **MIT** för återanvändning. Om DFRI vill ha copyleft för nätverkstjänsten: **AGPL-3.0-or-later** för adapterlagret, men håll kärnkontraktet MIT för Sambruk/Safe Trade Media.
- Dokumentation: **CC BY 4.0**.
- Modellvikter: distribueras inte; hänvisa till upstream-licens (t.ex. all-MiniLM-L6-v2, Piper/LibriTTS CC BY 4.0).

### 3.6 Installationsinstruktioner [FÖRSLAG]

```bash
python -m pip install -r requirements.txt
python tools/build_index.py --no-semantic          # helt offline, nyckelord endast
python tools/search.py "interoperabilitet" --context
```

Valfritt [FÖRSLAG]: `python tools/fetch_models.py` kräver separat godkänd nedladdning och hashkontroll. Matrix-adaptern kräver konto/token och ska aldrig ha hemligheter i repot.

### 3.7 Initial issue-lista [FÖRSLAG]

| # | Title | Accepted när |
|---:|---|---|
| 1 | Hotmodell för lokal agent och trust network | Threat model granskad |
| 2 | Ingen telemetry / ingen extern LLM i default-läge | Socket-blockerande test grönt |
| 3 | Hemligheter i env-variabler, `.gitignore` verifierad | Ingen token i historiken |
| 4 | Offline-bygge med `--no-semantic` | FTS5 fungerar utan nedladdning |
| 5 | Matrix E2E: krav på libolm och verifiering dokumenterad | `research-assistant/README.md` §Encryption följd |
| 6 | Medlemsdata: minimiprincip och rättslig grund | Inga riktiga medlemsdata i repot |

### 3.8 Källa vs deriverat [FÖRSLAG]

| Källa | Deriverat |
|---|---|
| `research-assistant/core.py`, `embeddings.py`, `layers.py`, `requirements.txt`, `README.md`, offentliga RADIG-rapporter | `index.sqlite`, `chroma/`, `meta.json`, lokala sessioner, loggar, syntetiska fixtures |

---

## 4. Friends of Hilma Foundation / Hilmas vänner

### 4.1 Reponamn [FÖRSLAG]

`friendsofhilma-hear-research`

**Viktigt [VERIFIERAT]:** målet för “friendsofhilma” är inte bekräftat, se `DECISIONS.md` öppen fråga 1. Namnet är ett förslag och får inte skapas förrän organisation/repo bekräftats och D-004 hävts.

### 4.2 Varför [FÖRSLAG]

I `MASTERPROMPT.md` §2.3 är Friends of Hilma kopplade till konstnärligt och dokumentärt arv, Hilma Papers, digital forskning/arkivering, AI-assisterad forskning, sökbarhet och öppen forskningsinfrastruktur.

### 4.3 Befintliga lokala tillgångar [VERIFIERAT]

- `research-project/sources/hilma-papers/manifest.json` + `processed/<id>/document.md`, `pages.jsonl`, `chunks.jsonl`.
- `research-project/PROTOCOL.md` med evidence-taggar och immutable-source-regel.
- `research-project/reports/review/full-corpus-claim-ledger.UNVERIFIED.md` och `evidence/`.
- `notes-assistant/notes_model.py` och `README.md` — men **källtexterna i `hilma-translation/english-pdf/` är privata och får inte publiceras** (`hilma-translation/README.md`, `notes-assistant/README.md`).
- `novel/` med fiktiv persona och `[E]`/`[I]`/`[M]`-märkning; texten får inte framställas som stiftelsens eller personares verklighet.

### 4.4 README-outline [FÖRSLAG]

1. Syfte: öppen, granskningsbar forskningsinfrastruktur kring Hilma Papers.
2. Källhierarki: original → OCR/native → korrigering → tolkning → metadata → forskning.
3. Regler: `PROTOCOL.md`, `[OCR]`/`[MT]`/`[?]`, ingen originaländring.
4. Vad som **inte** ingår: privata översättningar, långa citat, opublicerade bilder, påståenden om *The Key*.
5. Install och offline-verifiering.
6. Licens och rättighetsförbehåll.
7. Status: förberett; publicering blockerad av D-004.

### 4.5 Licensförslag [FÖRSLAG]

- Kod: **MIT**.
- Egna texter/dokumentation: **CC BY 4.0**.
- Original-PDF:er, OCR-filer och maskinöversättningar: **ingen omlicensiering**; länkar och hashar endast, tills rättighetsinnehavare beslutat.
- Citat: korta, lokaliserade och verifierade; varje citat behåller sin källtag.

### 4.6 Installationsinstruktioner [FÖRSLAG]

```bash
# efter godkännande; inga original-PDF:er i repot
python -m pip install -r requirements.txt       # PyMuPDF, pytest, evt. Tesseract
python tools/verify_manifest.py --manifest research-project/sources/hilma-papers/manifest.json
python tools/verify_quotes.py                   # mönster från novel/tools/verify_quotes.py
```

För att arbeta med PDF:er krävs en separat, godkänd lokal kopia. Robots.txt, fördröjning och retries följer `hilma_archive.py`.

### 4.7 Initial issue-lista [FÖRSLAG]

| # | Title | Accepted när |
|---:|---|---|
| 1 | Bekräfta GitHub-mål för friendsofhilma | Beslut i `DECISIONS.md`, D-004 hävd |
| 2 | Besluta om masterprompten publiceras och var | Öppen fråga 2 besvarad |
| 3 | Rättighetsgranskning av PDF:er och citat | Skriftligt beslut finns |
| 4 | Publicera inte `hilma-translation/english-pdf/` | `.gitignore` + CI-kontroll |
| 5 | Granska 460/480 och `21 jameri 1972` visuellt | Locator + granskningsanteckning |
| 6 | Standardisera källtags i alla utdrag | `[E]`/`[A]`/`[ARG]`/`[DEC]`/`[I]`/`[M]`/`[MT]`/`[OCR]`/`[?]` |
| 7 | Separera fiktiv persona från dokumentära resultat | D-006 följd i README |

### 4.8 Källa vs deriverat [FÖRSLAG]

| Källa | Deriverat |
|---|---|
| Original-PDF:er i `sources/hilma-papers/original/`, `manifest.json`, `processed/*/pages.jsonl`, `PROTOCOL.md` | `document.md`, `chunks.jsonl`, `indexes/hilma-papers/search.sqlite3`, rapporter, claim-ledger, figurer |

Observera [VERIFIERAT]: även `document.md` och `pages.jsonl` är *deriverade från originalet*, men de är samtidigt **skyddade indata** för sökmodulen och får inte skrivas över av AI.

---

## 5. Safe Trade Media

### 5.1 Reponamn [FÖRSLAG]

`safetrade-media-hilma-search`

Alternativ om Safe Trade Media vill äga namngivningen: `<org>-hilma-search-api`.

### 5.2 Varför [FÖRSLAG]

Safe Trade Media är i `MASTERPROMPT.md` §2.3 kopplat till publicering och kunskapsspridning, sökbarhet, digitala forskningsverktyg och assistentfunktioner. Detta är den mest direkta mottagaren av specifikationen i `HILMA_PAPERS_SOK_ASSISTENT_SPEC.md`.

### 5.3 Befintliga lokala tillgångar [VERIFIERAT]

- `research-project/sources/hilma-papers/manifest.json` med `url` och `source_page_url` till `safetrade.media`.
- `research-project/sources/hilma-papers/processed/*/document.md` med `Source URL` och PDF-sidor.
- `research-project/indexes/hilma-papers/search.sqlite3` byggd med FTS5, 4 099 chunks, `index-report.json`.
- `research-project/tools/search_archive.py` och `verify_archive.py`.
- `project-loop/research/HILMA_PAPERS_SOK_ASSISTENT_SPEC.md` (detta varvs tekniska underlag).

### 5.4 README-outline [FÖRSLAG]

1. Syfte: sök- och citerings-API för det egna dokumentarkivet.
2. Driftslägen: lokal CLI, lokal daemon, kontrollerad server — alla kräver beslut.
3. API: `GET /search`, `POST /ask`, `GET /documents/{id}/pages/{page}` enligt specifikationen.
4. Citatpolicy: alltid document ID + PDF-sida + URL; aldrig obelagd generativ text.
5. Säkerhet: ingen telemetry som standard, rate limits, audit-logg.
6. Rättigheter: original och OCR får inte licensieras om automatiskt.
7. Install och verifiering.

### 5.5 Licensförslag [FÖRSLAG]

- Kod: **MIT** för klientbibliotek och CLI.
- Serverintegration hos Safe Trade Media: **internt val**; om den distribueras föreslås AGPL-3.0-or-later för att hindra privat förgrening av förbättringar.
- API-dokumentation: **CC BY 4.0**.
- Index och utdrag: ingen omlicensiering utan skriftligt rättighetsbeslut.

### 5.6 Installationsinstruktioner [FÖRSLAG]

```bash
# lokal, offline första omgången
python -m pip install -r requirements.txt
python hilma_search.py build --manifest <lokal-manifest> --processed <lokal-processed> --out derived/v1
python hilma_search.py verify --out derived/v1
python hilma_search.py search "stadgar 1972" --json
```

Drift [FÖRSLAG]: lyssna endast på `127.0.0.1` tills auth, rate limits, loggning och rättighetsgranskning är beslutade. Ingen extern token eller hemlighet i repot.

### 5.7 Initial issue-lista [FÖRSLAG]

| # | Title | Accepted när |
|---:|---|---|
| 1 | Bekräfta vem som äger repo och API | Skriftligt beslut |
| 2 | Rättighetsklarera publicering av utdrag/index | Skriftligt beslut |
| 3 | Implementera citation-first `POST /ask` | Alla svar har verifierade citationer |
| 4 | OCR-korrigeringsflöde med diff och granskare | `needs_visual_check` fungerar |
| 5 | Ingen telemetry / offline-läge | Test grönt |
| 6 | Auth och rate limits före extern exponering | Checklista i `docs/RELEASE_CHECKLIST.md` |
| 7 | Återkoppling från forskare utan att ändra original | Append-only audit |

### 5.8 Källa vs deriverat [FÖRSLAG]

| Källa | Deriverat |
|---|---|
| Safe Trade Media-PDF:er, `manifest.json`, `processed/*/pages.jsonl`, `PROTOCOL.md` | `search.sqlite3`, vektorindex, korrigeringsförslag, entiteter/ämnen, svar med citationer |

---

## 6. Gemensam release-checklista [FÖRSLAG]

Inget repo går från “förberett” till “publicerat” förrän alla punkter är uppfyllda:

1. Mänskligt beslut i `DECISIONS.md` med målrepo och licens.
2. `gh` installerad och inloggad, **eller** token med repo-rättighet, **eller** användaren inloggad i webbläsaren. D-004 måste vara hävd.
3. `git status` ren; inga original-PDF:er, modellvikter, token eller privata översättningar i historiken.
4. `NOTICE` innehåller tredjepartslicenser.
5. `verify_archive.py` eller motsvarande grönt.
6. Alla citat har document ID, 1-baserad PDF-sida och URL.
7. Ingen `[M]`- eller personastext framställd som dokumentär fakta.
8. Ingen masterprompt-publicering förrän beslut enligt D-003/D-004.

## 7. Rekommenderad ordning [FÖRSLAG]

1. **Safe Trade Media** först: tydligaste behovet och befintligt FTS5-index.
2. **Friends of Hilma** därefter: samma kärna, men striktare rättighets- och citatgranskning.
3. **DFRI** parallellt: lokal-first och Matrix-adapter från `research-assistant/`.
4. **Sambruk** sist: abstrahera kontrakten till interoperabilitetsmönster utan Hilma-data.

Denna ordning ändrar inte `DECISIONS.md`; den är bara ett förslag till när mänskliga beslut bör tas.
