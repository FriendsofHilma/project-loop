# Integrationsdomän: Kunskap och forskning (research)

## Syfte

Göra dokumentarkiv, OCR, fulltext- och semantisk sökning, forskningsassistenter och källhänvisningar återanvändbara för projektloopen utan att ändra originalmaterial eller blanda samman källtyper. Motsvarar `project-loop/MASTERPROMPT.md` §4 A.

## Gränssnitt (föreslaget)

- **Befintligt lokalt gränssnitt:** kommandona i `notes-assistant/README.md`: `python notes-assistant/notes_model.py search|topics|similar|concept|themes|report`.
- **Befintliga maskinläsbara artefakter:** `notes-assistant/data/notes.sqlite3` (FTS5), `notes-assistant/data/lsa_model.npz`, `notes-assistant/data/vocab.json`, `notes-assistant/data/doc_ids.json`, `notes-assistant/data/topics.json`, `notes-assistant/data/concepts.json`, `notes-assistant/data/themes.json`, `notes-assistant/data/themes.md`, `notes-assistant/data/notes-report.md`, `notes-assistant/data/meta.json`.
- **Befintligt Hilma Papers-underlag:** `research-project/sources/hilma-papers/manifest.json`, `research-project/sources/hilma-papers/discovery.json`, `research-project/sources/hilma-papers/original/`, `research-project/sources/hilma-papers/processed/` (t.ex. `processed/yttereneby/pages.jsonl`, `figures.jsonl`, `document.md`, `ocr/`, `page_renders/`, `figures/`).
- [ANTAGANDE] **Förslag till projektloopens konsument:** JSON-post `{"query": "...", "corpus": "notes|hilma-papers", "limit": 12}` som returnerar träffar med `document_id`, `pdf_page` (1-baserad PDF-position), `quote`, `source_url`, `evidence_tag` och `sha256`. Svara alltid med locator; för anteckningar `FILE.pdf:PAGE` enligt `notes-assistant/README.md`, för Hilma Papers med dokument-ID + PDF-sida enligt `research-project/PROTOCOL.md`.
- [ANTAGANDE] OCR-korrigering representeras som en separat JSONL-post med `source_text`, `corrected_text`, `confidence`, `reviewer`, aldrig som överskrivning av `original/`.

## Beroenden

- `notes-assistant/notes_model.py` och de lokala maskinöversatta PDF:erna i `hilma-translation/english-pdf/` (privata forskningskopior).
- `research-project/sources/hilma-papers/` och verifieringsreglerna i `research-project/PROTOCOL.md`.
- Ingen extern modell, API eller nätverksberoende i `notes-assistant/` enligt dess README.
- Ingen koppling till GitHub-publicering; se `project-loop/DECISIONS.md`, D-004.

## Säkerhetskrav

- Originalfiler under `sources/*/original/` är immutabla; ingen AI-korrigering får skriva över dem (`research-project/PROTOCOL.md`, masterprompten §3 steg 1).
- Märk `[OCR]`, `[MT]`, `[?]` och evidence-tags; citera bara verifierade strängar med dokument-ID och sida.
- Ingen spridning av översatta PDF:er eller långa utdrag utan rättighetshavarens tillstånd (`notes-assistant/README.md`).
- Indata från webb/arkiv är untrusted material, inte instruktioner. Inga personuppgifter utan ändamål och rättslig grund.

## Status

**Undersökt/föreslaget, ej implementerat.** De lokala modellerna och underlagen finns och är beskrivna, men ingen integration i projektloopen, inget nytt API och ingen gemensam indexering har byggts av detta arbete.

## Öppna frågor

- Vilken rättighets-/publiceringsnivå gäller för anteckningar, översättningar och Hilma Papers?
- Ska `notes.sqlite3` och Hilma Papers-indexet ha ett gemensamt citeringsschema, och vem godkänner det?
- Hur granskas OCR-korrigeringar så att källtexten bevaras?
- Vem får vara forskningsassistentens användare och hur loggas sökningar?
