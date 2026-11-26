# Integrationsdomän: Ekonomi och resurser (finance)

## Syfte

Förbereda dokumenterad ekonomihantering för medlemsavgifter, budgetar, medfinansiering och resursfördelning, inklusive möjlig framtida användning av OpenCollect eller Stripe. Motsvarar `project-loop/MASTERPROMPT.md` §4 C. Ingen ekonomi får utföras i detta varv.

## Gränssnitt (föreslaget)

- [ANTAGANDE] Maskinläsbara poster: `{"budget_line_id": "...", "project_ref": "...", "amount": 0, "currency": "SEK", "source_ref": "...", "status": "planned|approved|booked"}`.
- [ANTAGANDE] Medlemsavgift representeras som en avsikt `{"member_ref": "...", "fee_ref": "...", "period": "...", "state": "planned"}`, inte som en betalning.
- [ANTAGANDE] Externa betalleverantörer (OpenCollect, Stripe) ska ha ett separat adaptergränssnitt med `webhook`- och `reconciliation`-händelser; ingen adapter, nyckel eller webhook är skapad.
- [ANTAGANDE] Alla belopp kopplas till `project-loop/integrations/funding/README.md` och `project-loop/steps/05-funding/README.md`, men inga ansökningar eller transaktioner är aktiva.

## Beroenden

- `project-loop/integrations/membership/README.md` för pseudonymiserad medlemsreferens.
- `project-loop/integrations/funding/README.md` för finansiär och villkor.
- Godkänt bokföringssystem, konto och ansvarig person – finns inte i nuläget.
- Masterprompten §7: ekonomiska transaktioner kräver godkännande.

## Säkerhetskrav

- Inga kortuppgifter, bankuppgifter, API-nycklar eller tokens i projektfiler.
- Inga betalningar, återbetalningar, fakturor eller konton skapas utan uttryckligt mänskligt godkännande.
- Separera planerade belopp från verkliga bokföringsposter; spara auditspår med vem som godkände vad och när.
- Minsta möjliga personuppgifter; samma integritetsregler som i `project-loop/integrations/membership/README.md`.

## Status

**Undersökt/föreslaget, ej implementerat.** Ingen budget, faktura, betalning, OpenCollect- eller Stripe-integration finns i projektloopen.

## Öppna frågor

- Vilken organisation ska vara ekonomiskt ansvarig, om någon?
- Ska OpenCollect, Stripe, båda eller ingen användas?
- Vilken valuta, bokföringsstandard och beslutströskel gäller?
- Hur kopplas en framtida budgetpost till en specifik utlysning utan att antyda beviljad finansiering?
