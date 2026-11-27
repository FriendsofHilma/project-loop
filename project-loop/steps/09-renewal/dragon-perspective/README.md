# Ouroboros – draken i matrisen

Lokal skärmsläckare i två perspektiv: draken sedd utifrån och rymden sedd från drakens egen nos. Alla rutor börjar svarta och får en deterministiskt slumpad färg när draken passerar. När kroppen har vuxit genom hela rymden biter den sig själv i svansen.

**Status:** lokal, testad, inte publicerad. Inga externa tillgångar, inga nätverksanrop.

## Regler

1. Fältet är en torus: kanten lindar runt, så loopen kan fortsätta i det oändliga.
2. Rutten är en **Hamilton-cykel**: varje ruta besöks exakt en gång innan draken är tillbaka vid startrutan. Därigenom blir täckningen 100 % och bettet ett äkta svansbett.
3. Varje ny ruta får en slumpad färg, deterministiskt given av `?seed` och rutans index.
4. Draken växer med en kroppsdel per ny ruta. Varje kroppsdel ritas med sju fjäll – den visuella regeln från D-032.
5. Primtal räknas och ger en vänsterpuls i huvudet, men de **styr inte rutten**. En fri primtalsstyrd gång täckte bara 34–70 % av fältet och kunde därför aldrig nå hela rymden (D-041).

## Varför Hamilton i stället för fri primtalsgång

`buildCycle` använder radserpentin när radantalet är jämnt, kolumnserpentin när raderna är udda och kolumnerna jämna. Om båda är udda minskas radantalet med ett. Slutet ligger alltid granne med början på torusen, så det sista steget är en kant i cykeln. Verifierat för 10×10, 16×16, 20×20, 30×24, 41×31 och 55×44: 100 % täckning och `tailBite: true`.

## Perspektiven

- **Utifrån:** hela matrisen, den växande guldlinjen, ett huvud med käkar och en markerad svans vid bettet.
- **Drakens perspektiv:** en tunnelseende matris framåt i färdriktningen, med nos och tänder i bildens nederkant. Käkarna sluts när rymden är täckt.

## Kontroller

| Åtgärd | Resultat |
| --- | --- |
| `Space` | pausa / fortsätt |
| `R` | starta om loopen |
| `?seed=N` | deterministiska färger |
| `?pace=N` | millisekunder per steg (12–400, default 42) |
| `?cell=N` | rutstorlek i pixlar (default automatiskt, cirka 1 600 rutor) |

Efter bettet visas en kort och tydlig bitttext och sedan börjar en ny loop med nytt frö. `window.__ouroboros` exponerar `state`, `pixels`, `length`, `coverage`, `heading`, `primeTurns`, `bitten`, `tailBite`, `paused`, `step()`, `pause()`, `resume()`, `restart()`, `finishNow()` och `logic`. `finishNow()` kör klart loopen och fryser bettbilden.

## Test

```bash
cd project-loop/steps/09-renewal/dragon-perspective
node test-dragon.js
```

25 kontroller: cykelns unicitet och närliggande steg inklusive stängningen, 100 % täckning, svansbett, tillväxt, färger, primtalssekvensen 2…41, wrap och determinism. Webbläsarkontroll: 1 550 rutor, 100 % täckning, `tailBite: true`, 244 primpulser, 0 konsolfel.

## Gränser

Draken är en visuell och beräkningsmässig modell, inte en ny Cosmic Block-typ. Nivåerna 7 och 9 förblir oimplementerade och nivå 8 `under_review`. Ingen koppling till Riemannhypotesen påstås. Beslut: D-031–D-035 för primtalsrymden, D-041 för denna ouroboros, D-042 för lokalt SVG-ersättningsmaterial till hemsidan.
