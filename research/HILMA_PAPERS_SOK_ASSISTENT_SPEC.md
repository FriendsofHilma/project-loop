# Teknisk specifikation — återanvändbar sök- och assistentmodul för Hilma Papers

> Status: **[FÖRSLAG]** — ingen ny modul, tjänst eller kodfil har skapats. Detta dokument är ett underlag för steg 1 i `project-loop/`.
> Datum: 2026-11-25
> Målgrupp: Safe Trade Media, Friends of Hilma, Sambruk, DFRI och mänsklig granskare.
> Läskonvention: **[FINNS]/[VERIFIERAT]** betecknar något som lästs i lokala filer 2026-11-25. Allt övrigt är **[FÖRSLAG]** och alltså inte implementerat.

## 0. Underlag som faktiskt lästs [VERIFIERAT 2026-11-25]

| Källa | Vad som konstaterats |
|---|---|
| `research-project/sources/hilma-papers/manifest.json` | Uppdaterad `2026-11-23T15:50:22+00:00`. 384 dokumentposter, 7 210 PDF-sidor enligt `pdf_pages`, 126 dokument med minst en `processing.ocr_pages`-sida. Per post finns bl.a. `document_id`, `original_filename`, `url`, `source_page_url`, `title`, `case_number`, `filing_date`, `description`, `status`, `file`, `bytes`, `sha256`, `pdf_pages`, `http_status`, `downloaded_at`, `read_only` och `processing` med `output_dir`, `page_count`, `figure_count`, `ocr_pages`, `chunk_count`, `extracted_chars`. Inställningar: `delay_seconds: 1.2`, `timeout_seconds: 60.0`, `retries: 3`, `resume: true` samt en identifierande `user_agent`. |
| `research-project/sources/hilma-papers/processed/<document_id>/document.md` | Läsbart dokument med huvud, document ID, source URL, ärendenummer, SHA-256, sidantal samt avsnitt `## PDF page N`. OCR-sidor markeras i texten med `> OCR text (swe+eng where available); verify against page render.` Exempel läst: `aktb-2/document.md`, `27063-2025-10/document.md`, `13889-2024-4/document.md`. |
| `research-project/sources/hilma-papers/processed/<document_id>/pages.jsonl` | En rad per PDF-sida med `document_id`, `page`, `text`, `text_sha256`, `native_chars`, `ocr_used`, `source_method` (`native` eller `ocr`), `embedded_images`, `page_render`, `captions`, `footnotes`, `tables`, `extraction_note`. Detta är den starkaste befintliga källmärkningen. |
| `research-project/sources/hilma-papers/processed/<document_id>/chunks.jsonl` | `chunk_id` av formen `<document_id>:0000`, `start_page`, `end_page`, `pages`, `word_start`, `word_end`, `source_url` och chunk-text. |
| `research-project/indexes/hilma-papers/` | `search.sqlite3` byggd med SQLite FTS5 `unicode61` över 4 099 chunks enligt `index-report.json` (`built_at` 2026-11-23). Rapportens policy: “Keyword retrieval is authoritative and citation-first; vector search is optional.” |
| `research-project/tools/hilma_archive.py`, `process_archive.py`, `search_archive.py`, `verify_archive.py` | Befintlig kedja: robots.txt-kontroll, politisk hämtning med fördröjning, SHA-256, native extraktion med PyMuPDF, OCR-fallback via Tesseract `swe+eng`, sidrender, chunkning (600 ord/100 ord överlapp), FTS5-index och verifiering av hashar, sidnummer, chunk-proveniens och indexräknare. |
| `notes-assistant/notes_model.py` och `notes-assistant/README.md` | Lokal, offline, icke-generativ modell över maskinöversatta anteckningar: PyMuPDF → `clean_text` → SQLite FTS5 → TF-IDF + truncated SVD (32 komponenter) → kuraterade `CONCEPTS` och åtta `THEMES`. Sidreferenser `FILE.pdf:PAGE`. Ingen nätverksåtkomst. |
| `research-project/PROTOCOL.md` | Original under `sources/*/original/` är immutable; deduplicera med SHA-256 men bevara alla URL:er; citera document ID, 1-baserad PDF-sida och original-URL; märk `[OCR]`, `[MT]`, `[?]`; hitta inte på citat, datum eller rättsliga avgöranden; respektera robots.txt och rate limits. |
| `research-project/evidence/` | `README.md` och `PILOT_EVIDENCE_RECORDS_v0.1.md` visar en befintlig evidence-record-konvention: hash, exakt sträng, locator, transformationskedja, `premise_status`, review-objekt vs review-beslut. Hash bevisar bytes, inte sanning. |
| `research-project/reports/review/full-corpus-claim-ledger.UNVERIFIED.md` | Befintlig claim-ledger med `[E]`, `[E-secondary]`, `[A]`, `[ARG]`, `[DEC]`, `[I]`, `[M]`, `[MT]`, `[OCR]`, `[?]`. Regeln där: `[OCR]` bara när `pages.jsonl` har `source_method: ocr`; förvrängd native extraktion märks `[?]`. |

## 1. Mål och icke-mål

### 1.1 Mål [FÖRSLAG]

1. En fristående, lokal-first och återanvändbar modul som kan indexera Hilma Papers och svara citation-first.
2. Indexera både manifestmetadata och sid-/chunk-text med bevarad proveniens.
3. Hantera OCR och korrigeringar utan att någonsin skriva över original eller OCR-bas.
4. Extrahera entiteter, datum, ämnen och källmärkta påståenden som *metadata*, inte som nya fakta.
5. Erbjuda sökning med naturligt språk där varje svarangular har `document_id` + PDF-sida + URL och en verifierbar sträng.
6. Exponera ett stabilt gränssnitt för en forskningsassistent (CLI för människa, REST/API för Safe Trade Media).
7. Kunna köras helt offline med enbart lokala index; nätverksberoende komponenter ska vara valfria och inaktiverade som standard.
8. Kunna återanvändas i ett annat arkiv genom att byta manifest/processed-katalog, utan att ändra kärnan.

### 1.2 Icke-mål [FÖRSLAG]

- Ingen AI-korrigering får skriva över `research-project/sources/hilma-papers/original/`, `manifest.json`, `processed/*/pages.jsonl` eller `document.md`.
- Modulen avgör inte vad ett dokument *betyder*, är inte en domstol, teologisk auktoritet eller juridisk rådgivare.
- Ingen generativ text publiceras som citat. Modulen återger bara verifierade utdrag och märker egna sammanfattningar `[I]`.
- Ingen automatisk publicering, repo-skapande, e-post eller extern API-anslutning.
- Ingen ny rättslig slutsats om äganderätt, upphovsrätt, försäljning eller identitet på grundval av en sökträff.
- Ingen vidaredistribution av original-PDF:er, privata maskinöversättningar eller långa utdrag utan rättighetsbeslut.
- Level 7–9 i Cosmic Block förblir orörda; denna specifikation rör dokumentinfrastruktur, inte den matematiska modellen.

## 2. Datamodell — strikt separation [FÖRSLAG]

Sex lager ska vara separata typer, separata kataloger och separata behörigheter. Inget lager får importeras som om det vore ett annat.

| Lager | Status | Kanoniska fält | Regler |
|---|---|---|---|
| **ORIGINALDOKUMENT** | [FINNS] | `document_id`, `file`, `sha256`, `bytes`, `pdf_pages`, `url`, `source_page_url`, `http_status`, `downloaded_at`, `read_only` | Skrivskyddat. `sha256` verifieras vid varje öppning. `document_id` är stabil nyckel. Källan är alltid PDF:en, inte extraherad text. |
| **OCR-TRANSKRIPTION** | [FINNS] | `document_id`, `page`, `text`, `text_sha256`, `native_chars`, `ocr_used`, `source_method`, `extraction_note`, `page_render` | Maskinell avbildning av en sida. `source_method: ocr` ⇒ `[OCR]`; `native` med förvrängd text ⇒ `[?]`, inte `[OCR]`. Får inte redigeras. |
| **KORRIGERAD TRANSKRIPTION** | [FÖRSLAG] | `correction_id`, `base_page_ref`, `base_text_sha256`, `corrected_text`, `diff`, `rationale`, `reviewer`, `review_status`, `created_at` | Append-only, alltid kopplad till bas-hash. Aldrig ersättare för basen. Får inte citeras som `[E]` före mänsklig granskning. |
| **AI-TOLKNING** | [FÖRSLAG] | `interpretation_id`, `query_id`, `model_id`, `prompt_hash`, `claims[]`, `citations[]`, `confidence`, `review_status` | Innehåller förslag, sammanfattningar och klassificeringar. Måste bära `[I]`. Får aldrig anonymt flyttas in i metadata eller research result. |
| **METADATA** | [FINNS] + [FÖRSLAG] | Manifestfält + `entities[]`, `dates[]`, `topics[]`, `evidence_tags[]`, `source_pointer`, `extractor_version` | Varje fält har en pekare till dokument/sida och en osäkerhetsmarkör. `filing_date: null` förblir null; `"year missing"` förblir olöst. |
| **FORSKNINGSRESULTAT** | [FINNS] | Claim-ledger, dossierer, review-rapporter med PROTOCOL-header | Har egen authoring agent, date, question, sources, findings, uncertainties och evidence-tags. Retrieval result kan *stödja* men inte *bli* ett research result automatiskt. |

### 2.1 Immutable-source-regeln [FÖRSLAG, men härledd ur [FINNS] PROTOCOL]

1. Kärnan öppnar original och processed-filer endast med `read` capability. Ingen write-path pekar in i `sources/*/original/`.
2. En write till `manifest.json`, `original/*.pdf`, `pages.jsonl` eller `document.md` avvisas med felkod `IMMUTABLE_SOURCE_WRITE` och loggas.
3. Alla förslag skrivs till `derived/<version>/corrections/`, `derived/<version>/enrichment/` eller `derived/<version>/interpretations/`.
4. Innan ett utdrag citeras kontrolleras `text_sha256` mot `pages.jsonl`; om hashen inte matchar är citatet ogiltigt.
5. En korrigerad text får aldrig ändra `source_method`; OCR förblir OCR även efter mänsklig korrektur, med tilläggstagg `[korrigerad, granskad]` [FÖRSLAG].
6. Manuell granskning kan *godkänna* en korrigering för visning, men originalet förblir auktoritativt för citat och rättsliga påståenden.

## 3. Indexeringspipeline [FÖRSLAG; steg 0–3 har [FINNS]-motsvarigheter]

```
0. discover/download   [FINNS hilma_archive.py]
1. extract/OCR/render  [FINNS process_archive.py]
2. provenance verify   [FINNS verify_archive.py]
3. lexical index       [FINNS search_archive.py]
4. enrichment          [FÖRSLAG]
5. semantic index      [FÖRSLAG, valfri]
6. query/assistant     [FÖRSLAG]
```

### 3.1 Steg 0 — upptäckt och nedladdning [FINNS]

Befintligt verktyg `research-project/tools/hilma_archive.py` gör `discover`, `download` och `verify`. Det kontrollerar robots.txt, använder fördröjning och retries, verifierar PDF och skriver `manifest.json` med `read_only: true` på nedladdade filer. Inget i denna specifikation ändrar beteendet.

### 3.2 Steg 1 — extraktion [FINNS]

`process_archive.py` läser native text med PyMuPDF (`sort=True`), faller tillbaka till OCR med Tesseract `swe+eng` vid låg textmängd, renderar sidor och skriver `document.md`, `pages.jsonl`, `figures.jsonl` och `chunks.jsonl` under `processed/<document_id>/`, plus `documents.jsonl`, `pages.jsonl`, `chunks.jsonl` under `indexes/hilma-papers/`. Chunkning är 600 ord med 100 ord överlapp. OCR-status lagras per sida.

### 3.3 Steg 2 — proveniens [FINNS]

`verify_archive.py` kontrollerar att varje `status: ok`-dokument finns på disk med rätt SHA-256, att varje sida har ett giltigt sidnummer inom `pdf_pages`, att varje chunk har `source_url` lika med dokumentets `url` samt att databasen har lika många chunks som JSONL-filen. Resultat skrivs till `reports/archive/verification.json`.

### 3.4 Steg 3 — lexikalt index [FINNS]

`search_archive.py build` skapar `chunks_fts` med FTS5 `unicode61`; `search` gör OR-sökning över tokeniserade ord, returnerar `document_id`, `start_page`, `end_page`, `source_url`, snippet och BM25-score. `index-report.json` slår fast att nyckelordssökning är auktoritativ och vektorsökning valfri. **[FÖRSLAG]** utöka indexet med `source_method`, `evidence_tag` och `extraction_version` somfilter, men behåll BM25 som primär rankning.

### 3.5 Steg 4 — berikning [FÖRSLAG]

Kör `entity/date/topic`-extraktion på `pages.jsonl` och skriv resultat till `derived/<version>/enrichment/entities.jsonl`, `dates.jsonl`, `topics.jsonl`. Varje post innehåller `document_id`, `page`, `surface`, `normalized`, `type`, `tag`, `extractor_version`, `confidence` och `text_sha256`. Berikningen får aldrig skriva tillbaka till processed.

### 3.6 Steg 5 — semantiskt index [FÖRSLAG]

Valfritt. Se §6.

### 3.7 Steg 6 — frågelager [FÖRSLAG]

Se §7–10.

### 3.8 Inkrementell ombyggnad [FÖRSLAG]

- Oförändrad `sha256` ⇒ ingen nyinläsning av originalet.
- Ändrad `text_sha256` ⇒ ny sida-version; gamla citat markeras `stale`.
- Ny `document_id` ⇒ ny post; aldrig återanvänd ID.
- Alla derived artefakter är versionsmärkta och kan byggas om från original + manifest + processed.
- Databasbygge sker till `.tmp` och atomic replace, motsvarande mönstret i `notes_model.py build_sqlite`.

## 4. OCR-korrigering med bevarad källtext och diff [FÖRSLAG]

### 4.1 Arbetsflöde [FÖRSLAG]

1. `propose`: användaren eller modulen lämnar `corrected_text` för en viss `(document_id, page)` och anger `base_text_sha256`.
2. Systemet beräknar en token- eller teckendiff och sparar både bas och korrigering. Diff får inte vara destruktiv.
3. `review`: mänsklig granskare sätter `review_status` till `approved`, `rejected` eller `needs_visual_check`. Vid visuell kontroll krävs `page_render`-hänvisning.
4. `publish`: endast godkänd korrigering får visas i läsläget, alltid med etiketten “korrigerad från [OCR]/[?]” och länk till bastexten.
5. Citat i forskning använder fortfarande original-PDF:en; korrigeringen är ett hjälpmedel för sökbarhet.

### 4.2 Diff-format [FÖRSLAG]

```json
{
  "correction_id": "corr-2026-11-25-0001",
  "document_id": "27063-2025-10",
  "pdf_page": 2,
  "base_text_sha256": "79b3dcabd2c40c7dacc4683ba175baa04015c6fc3ebd5bf4ca2cb88bab76da59",
  "base_source_method": "native",
  "base_excerpt": "Fran 1920 Inr 480,  481,  482 och 483.",
  "corrected_excerpt": "Från 1920 lnr 460, 481, 482 och 483.",
  "diff": [
    {"op": "replace", "offset": 0, "from": "Fran", "to": "Från"},
    {"op": "replace", "offset": 10, "from": "Inr", "to": "lnr"},
    {"op": "replace", "offset": 15, "from": "480", "to": "460"}
  ],
  "rationale": "Jämförelse med parallellt avtal; ej automatisk korrektur",
  "status": "needs_visual_check",
  "tags": ["[?]", "variant", "korrigerad-förslag"]
}
```

### 4.3 460/480-varianten är inte ett OCR-fel [VERIFIERAT + FÖRSLAG]

Båda läsningarna är `source_method: native`, alltså förvrängd native extraktion, inte pipeline-OCR:

- `27063-2025-10`, PDF s.2: `Fran 1920 Inr 480,  481,  482 och 483.` (`text_sha256` `79b3dcab…`).
- `13889-2024-4`, PDF s.10: `Från 1920 lnr 460, 481, 482 och 483.` (`text_sha256` `f13fd664…`).
- Samma 480-läsning finns i `27063-2025-9`, PDF s.3.

**[FÖRSLAG]** Modulen ska därför *inte* automatiskt ändra 480 till 460. Den ska skapa en `variant_group` med två vittnen, behålla båda strängarna och låta granskaren avgöra. Detta är ett centralt testfall för principen “korrigering raderar inte källa”.

## 5. Entitets-, datum- och ämnesextraktion [FÖRSLAG]

### 5.1 Entiteter [FÖRSLAG]

Typer: `person`, `organisation`, `myndighet`, `ärendenummer`, `dokumenttyp`, `verknummer`, `plats`, `verk`. Varje träff behåller `surface` (exakt sträng), `normalized` (försiktig normalisering), `document_id`, `pdf_page`, `source_method`, `text_sha256`, `tag` och `confidence`. Exempel ur [FINNS] material: `Anna Cassel`, `Stiftelsen Hilma af Klints Verk`, `Ä 2676-25 Exhibit 1`, `Olof Sundström`, `Serie III`.

Regler [FÖRSLAG]:

- En entitet är en *kandidat* tills den är granskad; den får inte skrivas in som faktiskt subjekt i ett påstående.
- Alias föreslås men tillämpas bara i sökningen, aldrig i citatet.
- Namnvarianten “Doris Flör”/“Doris Fleur X” dokumenteras enligt `DECISIONS.md` D-005; ingen av dem görs till historisk person (D-006).

### 5.2 Datum [FÖRSLAG]

- Bevara råsträng och normalisera endast vid entydighet: `2025-02-07` → ISO-datum.
- `filing_date: null` i manifestet förblir null; texten “Date of filing: unknown” får inte bli ett datum.
- “NFT agreement dated October 7, (year missing)” i manifestets `description` lagras som `raw: "October 7, (year missing)"`, `normalized: null`, `tag: "[?]"`.
- “21 jameri 1972” jämfört med “22 januari 1972” lagras som variant, inte som en automatiskt rättad dag.

### 5.3 Ämnen [FÖRSLAG]

Återanvänd principen i `notes-assistant/notes_model.py`: kuraterade termuppsättningar (`CONCEPTS`) och tematiska axlar (`THEMES`) med seed-termkrav, inte en påstådd ontologi. För Hilma Papers föreslås axlar som *stadgar och ändamål*, *försäljning och proveniens*, *arkiv och fövaring*, *digitala rättigheter*, *tillsyn och domstol*. Varje ämne får `source: "reader_chosen"` och `version`, så att det är tydligt att axeln är ett läsprompt, inte dokumentets egen kategori.

## 6. Semantiskt index [FÖRSLAG]

Befintliga fakta [VERIFIERAT]: `notes-assistant/notes_model.py` bygger TF-IDF + truncated SVD med 32 komponenter över sidor; `research-assistant/core.py` har separat Chroma/RRF-sökning för en *annan* korpus (doktoratsavhandlingen). Ingendera är i dag ett semantiskt index för Hilma Papers.

Förslag [FÖRSLAG], i prioritetsordning:

1. **Lokal-first LSA**: återanvänd `notes_model.py`-algoritmen på Hilma Papers-chunks. Artefakter: `vectors.npz`, `vocab.json`, `doc_ids.json`, `model_meta.json` med hash, komponentantal och byggdatum. Ingen nedladdning.
2. **Lokal embedding-modell**: valfri adapter med explicit `model_id`, lokalt lagrade vikter och SHA-256. Nätverk används endast vid en separat, godkänd nedladdning.
3. **Hybrid**: FTS5-resultat och vektorresultat sammanfogas med reciprocal-rank fusion, mönster enligt `research-assistant/README.md`, men den slutliga texten hämtas alltid från `pages.jsonl`/`chunks.jsonl` oförändrad.

Regler [FÖRSLAG]: vektorträffar är *kandidater*, aldrig bevis; `index-report.json` får inte ändra sin policy till “semantic authoritative”; modellbyte kräver ny indexversion; alla vektorer är deriverade och får inte publiceras som fristående “data” utan rättighetskontroll.

## 7. Sökning med naturligt språk [FÖRSLAG]

### 7.1 Frågetolkning [FÖRSLAG]

Frågan delas upp i: filter (`document_id`, `pdf_page`, `date_from`, `date_to`, `entity`, `topic`, `tag`, `source_method`), söktermer och avsikt (`find_passage`, `compare_variants`, `list_documents`, `explain_provenance`). Okända filter avvisas; de gissas inte.

### 7.2 Svarssammansättning [FÖRSLAG]

1. Hämta kandidater från FTS5; valfritt från vektorindex.
2. Filtrera på proveniens och evidence-tag.
3. Verifiera varje utdrag mot `text_sha256` i `pages.jsonl`.
4. Begränsa utdraget till den PDF-sida där strängen faktiskt finns; chunk med `start_page != end_page` måste smalnas av.
5. Returnera `answer` som citation-first: varje mening eller punkt har minst en `citation`.
6. Om inget verifierbart utdrag finns: svara `insufficient_evidence`, inte en gissning.
7. Sammanfattningar märks `[I]`; maskinöversatt text märks `[MT]`; OCR märks `[OCR]`; osäkert märks `[?]`.

### 7.3 Exempel [FÖRSLAG]

Fråga: “Vilket ärende behandlar 1972 års stadgar och vilken sida nämner 460/480?”

```json
{
  "answer": "[I] Två skilda dokumentvittnen finns. [E][?] 27063-2025-10, PDF s.2 läser 480; 13889-2024-4, PDF s.10 läser 460. Inget av dem är pipeline-OCR; båda är native extraktion och behöver visuell kontroll.",
  "citations": [
    {
      "document_id": "27063-2025-10",
      "pdf_page": 2,
      "source_url": "https://safetrade.media/onewebmedia/27063-2025-10.pdf",
      "source_method": "native",
      "text_sha256": "79b3dcabd2c40c7dacc4683ba175baa04015c6fc3ebd5bf4ca2cb88bab76da59",
      "quote": "Fran 1920 Inr 480,  481,  482 och 483.",
      "evidence_tag": "[E][?]"
    }
  ],
  "status": "ok"
}
```

## 8. Citat till document ID + PDF page [FÖRSLAG]

Canonical citation object [FÖRSLAG]:

```json
{
  "document_id": "aktb-2",
  "pdf_page": 2,
  "page_ref": "aktb-2#p2",
  "source_url": "https://safetrade.media/onewebmedia/Aktb%202.pdf",
  "source_method": "ocr",
  "text_sha256": "c716c0258692d2af6dd4c535726ce57e743370c53f304271e25abefa8d6dc45c",
  "quote": "Verket är för niirvarande deponerat hos Stiftelsen Agape",
  "evidence_tag": "[OCR]",
  "verified": true
}
```

Regler [FÖRSLAG]: PDF-sida är alltid 1-baserad PDF-position, aldrig tryckt sidnummer. `page_ref` är ett internt ID och ersätter aldrig `document_id` + `pdf_page`. En citation utan `source_url` får bara användas om manifestet saknar URL; då sätts `url_status: "missing_in_manifest"`. Citat som kommer från en korrigerad text måste ha både `base_citation` och `correction_id`.

## 9. Forskningsassistent-API [FÖRSLAG]

Alla metoder är deterministika i läge `deterministic=true` [FÖRSLAG]. Metodnamn är förslag, inte implementerade.

| Metod | Indata | Utdata | begränsning |
|---|---|---|---|
| `index.build` | `corpus_root`, `version` | `build_report` | Skriver endast derived |
| `index.verify` | `version` | `checks[]` | Återanvänder logiken i `verify_archive.py` |
| `document.get` | `document_id` | manifestpost + processed-paths | Ingen textändring |
| `page.get` | `document_id`, `pdf_page` | `text`, `text_sha256`, `source_method`, render | read-only |
| `search.query` | `q`, filters, `top_k` | `hits[]` med citation | BM25-först |
| `assistant.ask` | `question`, `deterministic`, `top_k` | `answer`, `citations[]`, `status` | `insufficient_evidence` vid brist |
| `entities.extract` | `document_id`, `page?` | `entities[]` | kandidater, `[?]` |
| `dates.extract` | `document_id`, `page?` | `dates[]` | ingen gissning på årtal |
| `topics.classify` | `document_id`, `axis_version` | `topics[]` | läsarprompt, inte ontologi |
| `correction.propose` | `document_id`, `pdf_page`, `corrected_text` | `correction_id`, `diff` | append-only |
| `correction.review` | `correction_id`, `decision`, `reviewer` | uppdaterad post | mänsklig granskare krävs |
| `citation.verify` | citation object | `valid`, `reasons[]` | hash + exakt sträng + sida |
| `audit.list` | `since` | händelser | oföränderlig logg |

## 10. Föreslagen REST- och CLI-yta [FÖRSLAG]

### 10.1 CLI [FÖRSLAG]

```text
python hilma_search.py build --manifest <path> --processed <path> --out derived/v1
python hilma_search.py verify --out derived/v1
python hilma_search.py search "stadgar 1972" --document-id 13889-2024-4 --top-k 5 --json
python hilma_search.py ask "Vad säger 27063-2025-10 om Serie III?" --deterministic --json
python hilma_search.py page 27063-2025-10 2 --json
python hilma_search.py correction propose --document-id 27063-2025-10 --page 2 --text-file fix.txt
python hilma_search.py correction review corr-2026-11-25-0001 --decision needs_visual_check --reviewer <name>
python hilma_search.py stats --json
```

Utgångspunkt för kommandonamn är de befintliga [FINNS] kommandona i `research-project/README.md` och `notes-assistant/README.md`; ovanstående är alltså ett förslag, inte installerade skript.

### 10.2 REST [FÖRSLAG]

```text
GET  /health
GET  /documents/{document_id}
GET  /documents/{document_id}/pages/{pdf_page}
GET  /search?q=...&document_id=...&page=...&tag=...&source_method=...&top_k=8
POST /ask
POST /corrections
POST /corrections/{correction_id}/review
GET  /index/status
GET  /audit?since=2026-11-25T00:00:00Z
```

`GET /search` — exempelsvar [FÖRSLAG]:

```json
{
  "query": "Serie III 480",
  "mode": "keyword",
  "hits": [
    {
      "document_id": "27063-2025-10",
      "pdf_page": 2,
      "source_url": "https://safetrade.media/onewebmedia/27063-2025-10.pdf",
      "source_method": "native",
      "score": 12.41,
      "snippet": "Fran 1920 Inr 480,  481,  482 och 483.",
      "text_sha256": "79b3dcabd2c40c7dacc4683ba175baa04015c6fc3ebd5bf4ca2cb88bab76da59",
      "evidence_tag": "[E][?]"
    }
  ],
  "index_version": "hilma-papers-2026-11-25-v1"
}
```

`POST /ask` — exempelbegäran [FÖRSLAG]:

```json
{
  "question": "Finns det två olika läsningar av Serie III?",
  "deterministic": true,
  "top_k": 5,
  "filters": {"tag": "[?]", "source_method": "native"}
}
```

`POST /ask` — exempelsvar [FÖRSLAG]:

```json
{
  "status": "ok",
  "answer": "[I] Ja, i de två granskade läsningarna skiljer sig ett nummer. [E][?] Se citationerna.",
  "citations": [
    {"document_id": "27063-2025-10", "pdf_page": 2, "quote": "Fran 1920 Inr 480,  481,  482 och 483.", "evidence_tag": "[E][?]"},
    {"document_id": "13889-2024-4", "pdf_page": 10, "quote": "Från 1920 lnr 460, 481, 482 och 483.", "evidence_tag": "[E][?]"}
  ],
  "uncertainties": ["Båda är native extraktion; ingen visuell kontroll är registrerad i detta svar."],
  "model": null
}
```

Fel [FÖRSLAG]:

```json
{
  "error": "IMMUTABLE_SOURCE_WRITE",
  "message": "Writes to research-project/sources/hilma-papers/original are refused.",
  "path": "research-project/sources/hilma-papers/original/27063-2025-10.pdf"
}
```

`POST /corrections` — exempelbegäran [FÖRSLAG]:

```json
{
  "document_id": "27063-2025-10",
  "pdf_page": 2,
  "base_text_sha256": "79b3dcabd2c40c7dacc4683ba175baa04015c6fc3ebd5bf4ca2cb88bab76da59",
  "corrected_text": "Från 1920 lnr 460, 481, 482 och 483.",
  "rationale": "Parallell läsning i 13889-2024-4 p.10; ej automatisk korrektur"
}
```

## 11. Modulgränser och driftsalternativ [FÖRSLAG]

### 11.1 Modulgränser [FÖRSLAG]

| Modul | Ansvar | Får inte göra |
|---|---|---|
| `ingest` | läsa manifest/PDF/processed, verifiera hash | skriva original |
| `extract` | anropa native/OCR-extraktion i separat körning | ändra redan lagrad sida |
| `store` | read-only repo över dokument, sidor, chunks | skapa nya evidence-taggar |
| `enrich` | entiteter, datum, ämnen, variantgrupper | skriva till `store` |
| `index` | FTS5 och valfria vektorer | avgöra sanning |
| `query` | tolka fråga, hämta, verifiera, citera | generera obelagda påståenden |
| `assistant` | sammanställa svar med `[I]`-märkning | publicera eller skicka meddelanden |
| `adapters.cli/rest` | gränssnitt, auth, rate limits | ändra kärnans regler |

### 11.2 Driftsalternativ [FÖRSLAG]

1. **Lokal CLI, offline** — rekommenderad första version. Läser lokala filer, skriver `derived/`, inga nätverksanrop.
2. **Lokal daemon** — samma kärna bakom `127.0.0.1` med REST. Ingen extern åtkomst; auth om flera användare.
3. **Safe Trade Media, kontrollerad drift** — [FÖRSLAG] kräver separat beslut om rättigheter, hosting, loggning och åtkomst. Ingen extern repo eller tjänst skapas av detta dokument.
4. **Offline reproducerbart paket** — [FÖRSLAG] manifest + hashar + utdrag + index, utan PDF:er eller översättningar, för granskning på annan maskin.

Beroenden ska hållas små i kärnan: Python-standardbiblioteket och SQLite räcker för FTS5. PyMuPDF och Tesseract hör till extraktion, NumPy/SciPy till LSA, Chroma/ONNX till valfri vektoradapter.

## 12. Utvärdering och testplan [FÖRSLAG]

### 12.1 Befintliga tester att återanvända [VERIFIERAT]

- `python research-project/tools/verify_archive.py` — hashar, sidnummer, chunk-proveniens, indexräknare.
- `python notes-assistant/notes_model.py build` — kontroll att lokal modell fortfarande bygger utan nätverk.
- `python research-project/evidence/tools/validate_pilot.py` — kontroll av exakta strängar och hashar.
- `python novel/tools/verify_quotes.py` — kontroll av registrerade MT-citat mot sidor (56 strängar, 0 fel enligt `novel/README.md`/`AGENTS.md`).

### 12.2 Nya tester [FÖRSLAG]

| Test | Förväntan |
|---|---|
| `immutable_original_hash` | Försök att skriva till `original/` ger `IMMUTABLE_SOURCE_WRITE`; hash oförändrad. |
| `page_hash_roundtrip` | Varje citation verifieras mot `pages.jsonl`; fel hash ⇒ `verified: false`. |
| `ocr_tag_discipline` | `aktb-2` s.2 får `[OCR]`; 460/480-vittnena får `[?]`, inte `[OCR]`. |
| `variant_not_autocorrected` | Ingen pipeline ändrar 480 till 460 utan `correction_id` och granskning. |
| `citation_page_precision` | Chunk med flera sidor smalnas till den sida där strängen finns. |
| `null_date_preserved` | `filing_date: null` förblir null i svar och metadata. |
| `year_missing_preserved` | “October 7, (year missing)” normaliseras inte till ett årtal. |
| `abstain_on_no_evidence` | Fråga om icke förekommande domstolsavgörande ger `insufficient_evidence`. |
| `reindex_idempotent` | Två byggen med samma indata ger samma `text_sha256` och citationer; bara byggdatum skiljer. |
| `golden_queries` | Minst 20 frågor från claim-ledgern (stadgar §§1–5, 1972, Sundström 1945, SAH-avtalet, 460/480, `21 jameri 1972`) med förväntade document ID + sidor. Mått: recall@5, citation precision, andel abstain. |
| `offline_mode` | Inget nätverksanrop när `offline=true`; blockera socketar i testet. |

### 12.3 Acceptanskriterier [FÖRSLAG]

- 100 % av returnerade citationer har giltigt `document_id`, 1-baserad PDF-sida och verifierad sträng.
- 0 skrivningar till original.
- 0 automatiska korrigeringar som raderar ett vittne.
- Nyckelordssökning fungerar utan vektorindex och utan nätverk.
- Alla fel och granskningsbeslut finns i audit-loggen.
- Inget publiceringsbeslut tas av modulen.

## 13. Risker och begränsningar [VERIFIERAT där markerat; övrigt FÖRSLAG]

1. **Maskinöversättning** [VERIFIERAT]: `hilma-translation/README.md` säger att översättningarna är Argos/CTranslate2, en första pass och inte för redistribution; `notes-assistant/README.md` säger att proper names, OCR-fel och svenska sammansättningar överlever. `[MT]` måste bäras genom hela kedjan.
2. **Förvrängd native text** [VERIFIERAT]: `aktb-2` innehåller `iodamötor ioke`, `f¥rvaras`, `$3`, `Aish ÅD`. Det är inte OCR enligt `source_method: native`; märk `[?]`.
3. **460/480** [VERIFIERAT]: två native vittnen skiljer sig på en siffra. Dessutom skiljer sig `nummer 194-1193` mot `numbered 194-1191` och `21 jameri 1972` mot `22 januari 1972`. Ingen av dessa får “lösas” av modulen.
4. **OCR-kvalitet** [VERIFIERAT]: `ocr_pages` finns i 126 dokument; OCR är approximativ och `extraction_note` säger att textordningen följer PyMuPDF `sort=True`, inte nödvändigtvis visuell läsningsordning.
5. **Metadata-brus** [VERIFIERAT]: `description` i manifestet innehåller ibland CSS/JavaScript-rester från webbsidan; `filing_date` är ofta null; `case_number` kan avvika från den beskrivning som följer (t.ex. posten `27063-2025-34`). Metadata är hjälp, inte bevis.
6. **Sidnivå, inte stycke-/meningsnivå** [VERIFIERAT för notes-modellen]; en PDF-sida kan innehålla flera ämnen. Chunkning hjälper men måste alltid återgå till sidan.
7. **Vektorer är distributionella** [FÖRSLAG]: de hittar liknande ordförråd, inte avsikt, kausalitet eller sanning.
8. **Rättigheter** [VERIFIERAT]: källor är © Stiftelsen Hilma af Klints Verk respektive Safe Trade Media; upphovsrättsläget är omtvistat i materialet och får inte avgöras av modulen. `[E][ARG]` i `27063-2025-95` påstår att upphovsrätten löpt ut; det är ett partspåstående i ett mejl, inte ett av modulen fastställt faktum.
9. **Extern åtkomst** [FÖRSLAG]: robots.txt, rate limits och växlande webbsidor gör omhämtning ofullständig; bevara därför gamla hashar och URL:er.
10. **Ingen repo-publicering** [VERIFIERAT]: se `DECISIONS.md` D-004. `gh`, token och inloggad webbsession saknas per 2026-11-25.

## 14. Licensförslag [FÖRSLAG]

| Del | Förslag | Villkor |
|---|---|---|
| Egen källkod och CLI/REST-kärna | MIT, i linje med `LICENSE` och `package.json` | Kräver mänskligt publiceringsbeslut. |
| Egen dokumentation och API-beskrivning | CC BY 4.0 | Motsvarar öppen fråga 3 i `DECISIONS.md`; att bekräfta. |
| Genererade index, hashar, utdrag | **Ingen egen licens** — källrättigheter följer originalen | Får inte publiceras som fristående datamängd utan rättighetskontroll. |
| Original-PDF:er, OCR, maskinöversättningar | Exkluderas från all omlicensiering | Privata forskningskopior; se `hilma-translation/README.md` och `notes-assistant/README.md`. |
| Tredjeparts modellvikter och verktyg | Respektera respektive licens (t.ex. Piper MIT, LibriTTS CC BY 4.0 i `narration/README.md`) | Ingen modell distribueras i detta repo. |

[FÖRSLAG] Alternativt CC0 för *metadata utan utdrag* (document_id, hash, sidantal, URL) om rättighetsinnehavare godkänner. Tills dess: ingen publicering.

## 15. Öppna beslut som kräver människa [FÖRSLAG]

1. Får ett nytt repo skapas, och i så fall hos vilken organisation? `DECISIONS.md` D-004 är blockerad.
2. Ska masterprompten publiceras, och i så fall var? Öppen fråga 2 i `DECISIONS.md`.
3. Vilken licens fastställs för text/kod? Öppen fråga 3.
4. Får Safe Trade Media ta emot index eller bara API:et?
5. Vem granskar 460/480 och `21 jameri 1972` visuellt?
6. Får privata översättningar någonsin ingå i ett publikt sökindex? Rekommendation [FÖRSLAG]: nej i första omgången.

---

Detta dokument har inte skapat någon kodfil, index, databas, external repo eller publicering. Det beskriver endast vad som finns och vad som föreslås.
