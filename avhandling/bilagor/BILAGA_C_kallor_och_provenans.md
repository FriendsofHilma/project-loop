# Bilaga C — Källor och provenans

**Status: `[FÖRSLAG]`** · Hör till [`provenans.md`](../provenans.md)

## Källhierarki

| Nivå | Källa | Användning | Begränsning |
|---|---|---|---|
| 1 | Original-PDF:en av Villaris avhandling i workspaceets rot | Auktoritet för citat, typografi, sidhänvisningar och bilddetaljer | Upphovsrättsskyddad; endast lokal forskning |
| 2 | [`../../knowledge/dissertation/README.md`](../../knowledge/dissertation/README.md) och dess utdrag | Sökning och lokalisering av passager | Bearbetad kopia; OCR på sidorna 214–223 är ungefärlig; text kan vara ur visuell läsriktning |
| 3 | Transkriberade antecknings-PDF:er | Primärt material för historiska påståenden | © Stiftelsen Hilma af Klints Verk; svenska källan ska kontrolleras |
| 4 | Maskinöversatta anteckningar och [`notes-assistant/`](../../notes-assistant/README.md) | Sökning, räkning, tematisk läsning | Arbetstranslation; inga påståenden om avsikt; lexikal modell, inte generativ |
| 5 | [`../../PAPER.md`](../../PAPER.md)–[`PAPER3.md`](../../PAPER3.md), [`../../AGENTS.md`](../../AGENTS.md) | Sekundära projektkällor för definitioner, resultat och kritik | Många resultat är rapporterade men inte omkörda i detta projekt |
| 6 | [`../../project-loop/README.md`](../../project-loop/README.md) | Regler för arbetsform, beslut och arkivering | Beslut D-xxx tillhör parent-sessionen |

## Regler som gäller här

1. **Originalet före kopian.** Vid motsägelse gäller PDF:en, inte
   `dissertation.md`, `pages.jsonl` eller OCR-texten `[E: källregel]`.
2. **PDF-positioner från 1.** Tryckta sidnummer anges bara när de är kända och
   då vid sidan av PDF-numret `[E: PAPER.md Appendix A.5]`.
3. **Inga påhittade citat, sidnummer, figurer eller bibliografiska uppgifter**
   `[E: källregel i Villari-README]`.
4. **Maskinöversättning märks i meningen**, inte bara i en not; citat är korta
   och lokaliserade med `FIL.pdf:SIDA` `[E: PAPER3.md Appendix A; förslag i §10]`.
5. **Skilda röster hålls isär.** "Villari skriver", "Siegel kallar", "anteckningarna
   säger", "vår tolkning är" — aldrig en enda sats som byter register obemärkt
   `[I: metod i PAPER3.md §1]`.
6. **Ingen distribution, ingen extern kontakt.** Inga nedladdningar, inga
   personuppgifter, inga inskickade ansökningar `[E: projektregel]`.

## Vad som inte får tas ur kopian utan kontroll

- Citat och OCR från sidorna 214–223 `[?]`.
- Påståenden om bilder enbart från extraherad text — kontrollera
  `figures/` eller `page_renders/` eller originalet `[E: källregel]`.
- Slutsatser om konstnärlig avsikt ur anteckningarna; det är tolkning `[I]`.

## Koppling till avhandlingens kapitel

- Kapitel 2–3 använder nivå 5 och 6 i källhierarkin (projektinterna texter).
- Kapitel 4–5 använder nivå 4–6 och kräver omkörning innan `[E]` kan stå utan
  kvalificering `[?]`.
- Kapitel 6 använder nivå 6 och reglerna om fiktiva personas.
- [`bibliografi.md`](../bibliografi.md) listar både lästa och ännu ej lästa källor;
  de senare är märkta `[?]`.
