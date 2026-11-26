# Draken i primtalsrymden – lokal återhämtningsvisualisering

> Del av steg 9. Förbättrad 2026-11-26 efter användarens instruktion: draken ska flyga fram i en **primtalsrymd** och svänga vänster varje gång **pixelantalet är ett primtal**. Kuben får användas flera gånger; varje kubruta delas i **sju** delar. Den ursprungliga kosmos-draken beskrivs i historiskt avsnitt nedan.

## Regler som är fixerade

1. Draken flyger genom en rymd av kosmiska block. Antalet synliga block är 3 som standard (`?blocks=N`, 1–6). Varje block ritas som ett 13×13×13-block i projektion, enligt projektets standardmått.
2. Varje ruta i ett block delas i **exakt sju delar**. Talet 7 är hårdkodat (`PARTS = 7`) och kan inte ändras med en parameter — det är en metodregel från användaren, inte en fri visuell parameter.
3. Pixelantalet ökas med ett för varje besökt delruta. Är antalet ett primtal svänger draken **vänster** omedelbart: `heading = (heading + 1) mod 4`. Första svängen sker vid pixel 2, sedan 3, 5, 7, 11, 13, …
4. Pausen är lokal, tidsbegränsad och kan aldrig blockera. Arbetet sparas före aktivering. Inga externa resurser, nätverksanrop eller personuppgifter.

## Användning

Öppna `index.html` lokalt i en webbläsare.

| Parameter | Default | Intervall | Betydelse |
|---|---|---|---|
| `?seconds=N` | 8 | 0–60 | Pauslängd i sekunder. `0` = ingen automatisk start; knappen startar. |
| `?blocks=N` | 3 | 1–6 | Antal kosmiska block i bakgrunden. |
| `?cell=N` | 46 | 18–140 | Rutstorlek i pixlar. |
| `?pace=N` | 190 | 50–1200 | Millisekunder per delruta. |
| `?seed=N` | 2654435769 | 0–2147483647 | Frö för stjärnfältet. Samma frö ger samma bild; `0` betyder standardfröet. |
| `?selftest=1` | av | — | Kör de rena reglerna i sidan och visar PASS/FAIL i HUD:en utan animation. |

**Tangentbord:** `Space` pausar och fortsätter. Fliken pausar sig själv när den inte syns
(`visibilitychange`), så en paus kan aldrig fortsätta i bakgrunden. När pausen tar slut
fryses den sista bilden kvar på duken i stället för att lämna den tom.

## Test och självkontroll

Reglerna ligger i [`prime.js`](prime.js) (ren logik, inga beroenden) och testas av
[`test-prime.js`](test-prime.js):

```bash
node test-prime.js     # 64 kontroller: primtal, svängar, sju delar, wrap, simulator
```

Sidan kan också kontrollera sig själv: öppna `index.html?selftest=1`. HUD:en visar då
`Självtest: PASS` och `body[data-selftest="pass"]` sätts. `window.__primeSpace.selftest()`
ger samma resultat från konsolen.

HUD:en visar nuvarande pixelantal, antal block, att varje ruta har 7 delar, om nuvarande eller nästa pixel är ett primtal samt de senaste vänstersvängarna. Stjärnor med primtalsindex är gula; det är en visuell märkning, inte ett matematiskt påstående om stjärnorna.

## Vad som är etablerat och vad som är tolkning

- **[E-user]** Användaren har uttryckligen begärt primtalsrymden, vänstersväng vid primtals pixelantal och uppdelning i sju delar.
- **[E]** `isPrime` är en deterministisk trial-division; svängarna infaller vid 2, 3, 5, 7, 11, 13, 17, 19, 23, … och kontrolleras i webbläsaren.
- **[E]** Den första implementationen svängde i själva verket **höger**: med riktningarna 0=höger, 1=upp, 2=vänster, 3=ner är `+3` en högervridning. Felet hittades av `test-prime.js` och rättades till `+1` (D-035).
- **[I]** Att låta en "pixel" motsvara en besökt delruta, och att låta sju delar bilda en radial fläkt i projektionen, är vår visuella tolkning. Det ändrar inte Cosmic Blocks datatyp eller nivåer.
- **[?]** Huruvida denna visualisering har någon betydelse för Riemann-workstreamen är **inte** undersökt och påstås inte.

Se [`PRIMTALSRYMD.md`](PRIMTALSRYMD.md) för specifikationen och [`RECOVERY_SESSION_2026-11-26.md`](../RECOVERY_SESSION_2026-11-26.md) för verifieringen.

## Regler för pausen

- Spara alltid arbetet före aktivering.
- Pausen får aldrig blockera obestämt; den avslutar sig själv och visar ”Pausen är slut — arbetet är sparat.”
- Steget går vidare även om webbläsaren stängs; tidsgränsen är en metodregel, inte ett tekniskt lås.

## Historiskt avsnitt (bevarat enligt D-001/D-024)

Den första versionen visade en drak som flög horisontellt genom ett stjärnfält utan primtalsregel. Den hade en bugg där `Number(null)` tolkades som `0` när `?seconds` saknades, så att defaultpausen på 8 sekunder aldrig aktiverades. Felet rättades innan primtalsrymden infördes. Den gamla filen har inte sparats separat; beskrivningen här är det historiska underlaget.
