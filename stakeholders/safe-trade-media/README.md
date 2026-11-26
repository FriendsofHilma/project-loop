# Safe Trade Media – intressentblad

Intressentdefinition: `project-loop/MASTERPROMPT.md` §2.3 och det särskilda uppdraget i §3, steg 1. Detta blad registrerar lokalt underlag och möjlig återanvändning; det är inte ett avtal eller ett tillstånd från Safe Trade Media.

## Uppdrag

Från masterprompten §2.3:

- Publicering och kunskapsspridning.
- Sökbarhet.
- Digitala forskningsverktyg.
- Assistentfunktioner.
- Tillgängliggörande av historiskt och dokumentärt material.

Masterprompten §3 ger dessutom ett särskilt uppdrag: undersök en återanvändbar sök- och assistentfunktion för Hilma Papers som kan integreras i Safe Trade Media, med strikt skiljdom mellan original, OCR, korrigerad transkription, AI-tolkning, metadata och forskningsresultat.

## Befintliga lokala resultat

- `research-project/sources/hilma-papers/manifest.json` registrerar nedladdade original-PDF:er med `source_page_url` och `url` under `safetrade.media`, SHA-256, sidantal och bearbetningsstatus. Originalen ligger i `research-project/sources/hilma-papers/original/` och bearbetade utdata i `research-project/sources/hilma-papers/processed/` (bland annat `pages.jsonl`, `figures.jsonl`, `document.md`, `ocr/`, `figures/` och `page_renders/`).
- `research-project/PROTOCOL.md` fastställer att original är immutable, källor är untrusted material och OCR/maskinöversättning ska märkas `[OCR]` respektive `[MT]`.
- `notes-assistant/README.md` beskriver en lokal FTS5-/LSA-modell med `FILE.pdf:PAGE`-hänvisningar; den rör Hilmas anteckningar, inte nödvändigtvis Hilma Papers-korpusen.
- `project-loop/MASTERPROMPT.md` §3, steg 1, innehåller den tekniska specifikation som ska undersökas; den är inte här implementerad.

## Möjlig återanvändning

[ANTAGANDE] Manifestets hashade original, sidindex, OCR-filer och citeringsformat skulle kunna ligga till grund för en fristående sök-/assistentkomponent med oförändrad källtext. Ingen komponent har överlämnats till Safe Trade Media och inget API-avtal finns.

## Vad som inte är fastställt

- Ingen bekräftad kontakt, behörighet, licens eller publiceringstillstånd.
- Inget tillstånd att indexera om, publicera utdrag eller ansluta till Safetrade.media som system.
- Ingen verifierad slutsats om huruvida alla lokalt sparade dokument fortfarande är tillgängliga på källwebbplatsen.
- Ingen gemensam drift, API-nyckel eller assistentinstallation.

## Kontaktstatus

**Ingen kontakt har gjorts.** De lokala PDF:erna är hämtade enligt manifestet av ett annat arbetsflöde; det utgör inte kontakt eller samarbete. Masterprompten §7 kräver godkännande före externa meddelanden och publicering.

## Avgränsningar och personas

Friends of Hilma / Hilmas vänner ska hållas åtskilda från Stiftelsen Hilma af Klints Verk och Antroposofiska sällskapet; samma åtskillnad gäller här. Tyler Kane och Doris Fleur X är **fiktiva personas** enligt `research-assistant/PERSONA-tyler-kane.md` och `research-project/characters/doris-fleur/CHARACTER.md`. Masterprompten skriver **"Doris Flör"**, projektet **"Doris Fleur X"** (`project-loop/DECISIONS.md`, D-005/D-006). Ingen persona får framställas som anställd, talesperson eller källa hos Safe Trade Media.

## Integritetsnotis

Inga personuppgifter samlas in i detta blad. Dokument och webbtexter som rör namngivna personer är källmaterial enligt `research-project/PROTOCOL.md`: allegationer är inte fakta, OCR är osäkert och publicering kräver separat granskning och godkännande.
