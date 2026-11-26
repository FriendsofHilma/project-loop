# Specifikation – primtalsrymden i steg 9

> 2026-11-26. Status: `[E-user]` för användarens regler, `[I]` för vår implementation, `[?]` för ej undersökt. Deterministisk, lokal och utan externa beroenden.

## 1. Indata från användaren

Citat: *”Förbättra pausdraken så att skärmsläckaren istället visar hur vi flyger fram i en primtalsrymd. Draken flyger genom kosmos och svänger vänster varje gång pixelantalet är ett primtal. Om det behövs så använd flera kosmiska block, alternativ gör varje ruta i kuben uppdelad! När du delar upp kuben så använd talet sju så att varje kubdel delas upp i sju delar!!!!!!!”* `[E-user]`

## 2. Formella regler

| ID | Reglering | Implementation |
|---|---|---|
| R1 | Flera kosmiska block får användas | `CFG.blocks`, default 3, intervall 1–6. Varje block ritas som 13×13×13 i projektion. |
| R2 | Varje kubdel delas i sju delar | `PARTS = 7`, konstant. Delruta `p ∈ {0,…,6}`; vinkeln är `(p + 0.5) · 2π/7 − π/2`. |
| R3 | Pixelantalet räknas | `pixels += 1` vid varje besökt delruta; `part = (part + 1) mod 7`; ny cell först när `part` nollställs. |
| R4 | Vänstersväng vid primtal | Om `isPrime(pixels)` då `heading = (heading + 1) mod 4` och svängen loggas i `turns`. |
| R5 | Ingen blockering | `?seconds=N`, default 8, max 60; `finish()` stoppar animationen och visar avslutningstexten. |

`isPrime(n)` är trial division: false för `n < 2`, true för 2, false för jämna tal, i övrigt test av udda delare `d` med `d·d ≤ n`. `[E]`

## 3. Förväntad sekvens

De första vänstersvängarna infaller vid pixel:

`2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, …`

Detta är en kontrollpunkt för webbläsarverifieringen; sekvensen är ett räkneresultat av R4, inte ett nytt matematiskt påstående. `[E]`

## 4. Gränser

- Uppdelningen i sju är **visuell**. Den ändrar inte Cell-typen (0–9), nivåerna 1–9 eller C-implementationens byte-offset. `[I]`
- Ingen koppling mellan primtalsflygten och Riemannhypotesen påstås. Riemann-workstreamen är fortfarande `under_review`. `[?]`
- Inga data laddas ner, inga nätverksanrop görs, inga personuppgifter skrivs.

## 5. Verifiering

Reglerna är utbrutna till `prime.js` och testas utan webbläsare av `test-prime.js`
(64 kontroller: primtal, svängsekvens, sju delar, wrap och deterministisk simulator).
Sidan har också ett eget självtest via `?selftest=1`.

Webbläsarkontrollen ligger i [`RECOVERY_SESSION_2026-11-26.md`](../RECOVERY_SESSION_2026-11-26.md). Debug-API:t `window.__primeSpace` exponerar `isPrime`, `pixels`, `heading`, `turns`, `parts`, `blocks`, `paused`, `seed`, `simulate`, `selftest`, `pause`, `resume`, `togglePause` och `freeze` för reproducerbar kontroll.

## 6. Rättelser och robusthet

| Datum | Ändring |
|---|---|
| 2026-11-26 (D-035) | Svängformeln `(heading + 3) mod 4` gav högersväng; rättad till `(heading + 1) mod 4`. |
| 2026-11-26 (D-036) | `?seed=N` gör stjärnfältet reproducerbart; sista bilden fryses vid avslut; omritning efter storleksändring när loopen står stilla. |
| 2026-11-26 (D-037) | `Space` och knappen pausar/fortsätter; fliken pausar sig själv när den inte syns. |
| 2026-11-26 (D-038) | `?selftest=1` och `window.__primeSpace.selftest()` kontrollerar reglerna i sidan. |
| 2026-11-26 (D-039) | Kantvinklarna för de sju delarna förberäknas en gång; `prefers-reduced-motion` stänger av den kontinuerliga animationsloopen. |
