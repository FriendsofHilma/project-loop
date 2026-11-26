# Projektloopen – varv 25, 2026-11-26

**Tema:** Utbrytning av reglerna och enhetstest
**Mål:** Flytta primtalslogiken till en testbar modul och kontrollera svängriktningen utan webbläsare.
**Status:** genomfört lokalt; inga externa kontakter, inskickningar, signaturer, betalningar, personuppgifter eller publiceringar.

## Steg 1 – Medvetenskap och ordning
Den befintliga `index.html` lästes rad för rad. Reglerna R1–R5 i `PRIMTALSRYMD.md` och D-031/D-032 bekräftades.

## Steg 2 – Vänner, nätverk, omvärldsbevakning
Endast lokal webbläsare och lokala filer användes. Inga externa källor, inga kontakter, inga nedladdningar.

## Steg 3 – Projektformulering och prioritering
Tre avgränsade uppgifter: (a) ren logikmodul, (b) nollberoende test, (c) koppla sidan till modulen utan att ändra reglerna.

## Steg 4 – Estetisk integritet och grafisk profil
Ingen visuell ändring i detta varv; färger och former är oförändrade.

## Steg 5 – Narrativ integration
Utbrytningen beskrivs som en kontroll av berättelsens regel, inte som ett nytt narrativ.

## Steg 6 – State integration
Första testkörningen fällde den gamla formeln: `(heading + 3) mod 4` svängde höger. Rättat till `(heading + 1) mod 4` och dokumenterat som D-035.

## Steg 7 – Interpersonal integration
Inga externa aktörer tillkom. Användarens instruktion är den enda relationskällan för detta varv.

## Steg 8 – Strategic coordination
Nästa konkreta åtgärd ligger kvar inom lokalt arbete. Ingen grind öppnas; B-020 (mänsklig visuell granskning) och B-019 (push-beslut) förblir öppna.

## Steg 9 – Synthesis, consolidation and recovery
Arbetet sparades före avslut. En kort återhämtningssession kördes med `restartWith` för att bekräfta att reglerna R1–R5 är oförändrade och att pausen avslutar sig själv.

## Artefakter
`prime.js` (ny), `test-prime.js` (ny), `index.html` (använder `window.PrimeSpaceLogic`).

## Verifiering
`node test-prime.js` → 57 kontroller gröna; svängarna 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41; 13 svängar från heading 0 ger heading 1.

## Checkpoint
Inget steg kedjades automatiskt till ett externt beslut. Mänsklig granskning kvarstår för inlämning, push och eventuell publicering.
