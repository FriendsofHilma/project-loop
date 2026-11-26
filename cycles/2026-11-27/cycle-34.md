# Projektloopen – varv 34, 2026-11-27

**Tema:** Hemsidan byggs
**Mål:** Förverkliga startsidan med nio klickbara bilder, komponentkatalog, figurgalleri och lokal läsare.
**Status:** genomfört lokalt; inga externa kontakter, inskickningar, signaturer, betalningar, personuppgifter eller publiceringar.

## Steg 1 – Medvetenskap och ordning
Varv 33:s konst och komponentgrupper lästes före implementationen. Befintliga filer och katalognamn lämnades orörda.

## Steg 2 – Vänner, nätverk, omvärldsbevakning
Inga externa resurser användes: inga webbfonter, inga CDN:er, inga bild-URL:er. AlltServeras av den befintliga lokala `tools/serve.js`.

## Steg 3 – Projektformulering och prioritering
`data.js` blev hemsidans enda innehållskälla. Därigenom kan varje länk kontrolleras mot disken och sidan kan renderas om utan att HTML:en ändras.

## Steg 4 – Estetisk integritet och grafisk profil
`styles.css` följer den godkända profilen: mörk indigo bakgrund, guldiga rubriker, kobolt/rosa accenter, avrundade kort och mjuk hover. `prefers-reduced-motion` respekteras.

## Steg 5 – Narrativ integration
`app.js` renderar nio stegkort där hela illustrationen är en länk, med ytterligare dokument som chips under bilden. `visa.html` gör lokala markdown-, JSON-, CSV- och kodfiler läsbara och visar "I samma sammanhang".

## Steg 6 – State integration
Länkarna pekar på projektets egna filer: PAPER.md–PAPER3.md, C11-implementationen, skärmsläckarna, romanen, narration, Hilmas översättningar, Riemann, avhandlingen och projektloopens styrdokument.

## Steg 7 – Interpersonal integration
Ingen kontakt togs. Sidorna är ett lokalt underlag för en framtida mänsklig granskning, inte ett publicerat utkast.

## Steg 8 – Strategic coordination
Sökfältet filtrerar både steg och komponentgrupper; tangenten `/` fokuserar sökfältet. Nästa åtgärd var slutverifiering i varv 35.

## Steg 9 – Synthesis, consolidation and recovery
Två buggar hittades och rättades under varvet: läsaren använde en odefinierad global (`D`) och tre stegbilder var `lazy`-laddade och hann inte renderas i kontrollen. Efter rättningen laddas alla nio bilder och läsaren visar dokumentens innehåll.

## Artefakter
`hemsida/index.html`, `styles.css`, `app.js`, `data.js`, `visa.html`, `test-site.js`, `README.md`, D-043.

## Verifiering
`node hemsida/test-site.js`: 139 kontroller, 0 saknade filer. Webbläsare: 9 stegkort med 9 laddade bilder (480×480), 7 komponentgrupper med 48 länkar, 8 figurer, 7 nyckeltal, hero-bakgrund aktiv, 0 konsolfel. Läsaren öppnade `steps/01-awareness/README.md` med 9 rubriker och sammanhangslänkar.

## Checkpoint
Inget externa beslut kedjades. B-022 öppnas för mänsklig visuell granskning av startsidan.
