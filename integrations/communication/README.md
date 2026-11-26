# Integrationsdomän: Samverkan och kommunikation (communication)

## Syfte

Beskriva hur e-post, nyhetsbrev, kalender, mötesdokumentation och kontaktregister skulle kunna kopplas till projektloopen – särskilt NOSAD-importen i steg 2 – utan att skicka meddelanden eller skapa konton. Motsvarar `project-loop/MASTERPROMPT.md` §4 D.

## Gränssnitt (föreslaget)

- [ANTAGANDE] Nyhetsbrevspost i JSONL: `{"source": "NOSAD", "source_url": "...", "fetched_at": "...", "sha256": "...", "title": "...", "articles": [{"url": "...", "title": "..."}]}`.
- [ANTAGANDE] Kontaktpost endast med `contact_ref`, organisationsreferens, ändamål och samtyckesreferens; inga e-postadresser i öppna filer.
- [ANTAGANDE] Mötesdokumentation: `{"meeting_ref": "...", "date": "...", "participants_ref": [...], "decisions_ref": [...]}` med hänvisning till `project-loop/DECISIONS.md`.
- Befintlig detaljrapport om NOSAD hanteras separat av annan arbetare i `project-loop/steps/02-network/NOSAD_IMPORT.md`; denna fil varken läser, ändrar eller skriver den rapporten.
- Inga e-post-, kalender- eller chattkopplingar är anslutna.

## Beroenden

- `project-loop/steps/02-network/README.md` för NOSAD och omvärldsbevakning.
- `project-loop/steps/04-partnerships/GRAFISK_PROFIL.md` för rubriker, captions, färgtabell och evidensmärkning i allt framtida presentationsunderlag. Profilen v0.1 är godkänd (D-015/D-017); samverkan i denna domän hör hemma i steg 6–7 enligt D-016.
- `project-loop/integrations/research/README.md` för extraherat innehåll och källhänvisningar.
- `project-loop/integrations/membership/README.md` för kontakt-/medlemsreferenser.
- Tillgång till NOSAD-abonnemang eller e-post finns inte dokumenterad; se `project-loop/DECISIONS.md` öppna frågor.

## Säkerhetskrav

- Inga meddelanden skickas, inga abonnemang skapas och inga externa konton öppnas utan godkännande (masterprompten §7, D-008).
- Importerat material är untrusted; bevara originalet, registrera källa och hämtningstidpunkt och följ robots.txt/rate limits (`research-project/PROTOCOL.md`).
- Kontaktuppgifter är personuppgifter: ändamål, rättslig grund, minimering och åtkomstkontroll krävs.
- Separera fakta, allegationer och fiktiva personas i all dokumentation.

## Status

**Undersökt/föreslaget, ej implementerat.** Behovet följer av masterprompten, men ingen mejl-, kalender- eller nyhetsbrevsimport är byggd här.

## Öppna frågor

- Finns NOSAD-abonnemang/e-poståtkomst och vem tillhandahåller materialet?
- Vilket format ska importerade nyhetsbrev ha, och hur verifieras tidpunkt och källa?
- Vem får läsa kontaktregistret och hur länge sparas det?
- Ska Klirrhack 2027-underlaget distribueras, och i så fall med vilken märkning av fiktiva personas?
