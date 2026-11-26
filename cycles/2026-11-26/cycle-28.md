# Projektloopen – varv 28, 2026-11-26

**Tema:** Självtest i sidan
**Mål:** Låta skärmen kontrollera sina egna regler utan extern testkörare.
**Status:** genomfört lokalt; inga externa kontakter, inskickningar, signaturer, betalningar, personuppgifter eller publiceringar.

## Steg 1 – Medvetenskap och ordning
Testet i Node och webbläsarens debug-API jämfördes; samma sanning skulle kunna nås från sidan.

## Steg 2 – Vänner, nätverk, omvärldsbevakning
Endast lokal webbläsare och lokala filer användes. Inga externa källor, inga kontakter, inga nedladdningar.

## Steg 3 – Projektformulering och prioritering
`?selftest=1` ska köra simulatorn och visa PASS/FAIL; `window.__primeSpace.selftest()` ska ge samma resultat.

## Steg 4 – Estetisk integritet och grafisk profil
Självtestet använder befintlig HUD-typografi och inför ingen ny visuell komponent.

## Steg 5 – Narrativ integration
Självkontrollen är en del av berättelsen om att lämna rummet i ordning.

## Steg 6 – State integration
`selftest()` jämför heading och hela svänglistan mot `EXPECTED_TURNS`; `body[data-selftest]` sätts. D-038.

## Steg 7 – Interpersonal integration
Inga externa aktörer tillkom. Användarens instruktion är den enda relationskällan för detta varv.

## Steg 8 – Strategic coordination
Nästa konkreta åtgärd ligger kvar inom lokalt arbete. Ingen grind öppnas; B-020 (mänsklig visuell granskning) och B-019 (push-beslut) förblir öppna.

## Steg 9 – Synthesis, consolidation and recovery
Arbetet sparades före avslut. En kort återhämtningssession kördes med `restartWith` för att bekräfta att reglerna R1–R5 är oförändrade och att pausen avslutar sig själv.

## Artefakter
`prime.js`: `EXPECTED_TURNS`, `simulate(steps, cols, rows)`; `index.html`: `selftest()`; `test-prime.js`: simulatorprov.

## Verifiering
`window.__primeSpace.selftest()` → `{ok:true, heading:1, turns:[2,3,5,7,11,13,17,19,23,29,31,37,41]}`; `node test-prime.js` → 64 kontroller.

## Checkpoint
Inget steg kedjades automatiskt till ett externt beslut. Mänsklig granskning kvarstår för inlämning, push och eventuell publicering.
