# Integrationsdomän: Finansiering och projekt (funding)

## Syfte

Samla utlysningar, forskningsfinansiärer, bidragsdatabaser, projektportföljer och ansökningsunderlag i en form som kan kopplas till prioriterade projekt utan att antyda behörighet, beviljning eller kontakt. Motsvarar `project-loop/MASTERPROMPT.md` §4 F och §2.3/§3 steg 2.3.

## Gränssnitt (föreslaget)

- [ANTAGANDE] Maskinläsbar möjlighetspost med fälten från masterprompten: `{"funder": "...", "program": "...", "purpose": "...", "target_group": "...", "eligibility": "...", "funding_level": "...", "deadline": "...", "partners": [...], "project_link": "...", "source_url": "...", "checked_at": "..."}`.
- [ANTAGANDE] Obligatorisk klassifikation: `status: "open|upcoming|historical"` samt `evidence: "official|secondary|[?]"`.
- [ANTAGANDE] Koppling till projekt: `{"project_ref": "...", "opportunity_id": "...", "match_note": "...", "confidence": "low|medium|high"}`, där hög confidence inte ersätter mänskligt beslut.
- Befintligt underlag: `research-project/funding/opportunities/`, `research-project/funding/SOURCE_LOG.md`, `research-project/funding/research-programme/`, `research-project/funding/grant-applications/` och sammanställningen i `research-project/COORDINATOR_STATUS.md` (16 poster från officiella källor, access datum 2026-11-23; ingen direkt åtgärdbar för HEAR).

## Beroenden

- `project-loop/steps/02-network/README.md` för omvärldsbevakning.
- `project-loop/integrations/research/README.md` för verifierbara källor och citering.
- `project-loop/integrations/finance/README.md` för budgetar och medfinansiering.
- `project-loop/stakeholders/` för intressentkoppling; ingen kontakt är etablerad.
- Officiella källor ska prioriteras enligt masterprompten §2.3.

## Säkerhetskrav

- Dokumentera finansiär, utlysning, syfte, målgrupp, behörighetskrav, nivå, deadline, partners, koppling samt **källa och kontrolldatum** för varje post.
- Skilj öppna, kommande och historiska utlysningar. Använd aldrig historiska poster som pågående möjligheter.
- Ingen ansökan, externt konto, e-post eller ekonomisk transaktion utan godkännande (`project-loop/DECISIONS.md`, D-008).
- Anta inte att projektet är behörigt; `"match_note"` är ett underlag, inte en juridisk slutsats.

## Status

**Undersökt/föreslaget, ej implementerat.** Befintliga möjlighetsposter finns i `research-project/funding/`, men ingen ansökningsintegration eller projektloopens egen finansieringsdatabas har byggts här.

## Öppna frågor

- Vilka av de 16 posterna är fortfarande aktuella 2026-11-25, och behöver de kontrolleras om?
- Vilken organisation skulle vara behörig sökande, om någon?
- Ska `funding/` i `research-project/` förbli auktoritativ källa eller speglas till `project-loop/`?
- Hur förhindras att en fiktiv persona framställs som projektledare eller sökande?
