# Återhämtningssession – 2026-11-26

> Steg 9, varv 10–22. Status: `[E]` verifierat i webbläsaren. Ingen extern handling. Den tidigare drakpausen från varv 9 beskrivs i det historiska avsnittet längst ned.

| Fält | Värde |
|---|---|
| Visualisering | [`dragon-screensaver/index.html`](dragon-screensaver/index.html) — primtalsrymd |
| Regel | Vänstersväng när pixelantalet är primtal: `heading = (heading + 1) mod 4` |
| Kubgeometri | 3 st `13×13×13`-block (default); varje ruta delas i **exakt 7** delar (`PARTS = 7`) |
| Pauslängd | Default 8 s, max 60 s; tolv korta verifieringssessioner 1–5 s plus en 8 s-kontroll |
| Tillstånd före | Arbetet sparat; 22 varv registrerade; ingen push |
| Tillstånd efter | `body.finished`, texten ”Pausen är slut — arbetet är sparat.” visad i alla sessioner |
| Konsol | 0 fel i samtliga körningar |
| Blockering | Ingen; varje session avslutades automatiskt |
| Externa kontakter/publicering | Inga |

## Verifiering av regeln

`window.__primeSpace.isPrime` gav:

| n | 1 | 2 | 3 | 4 | 5 | 7 | 9 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 97 | 100 |
|---|---|---|---|---|---|---|---|----|----|----|----|----|----|----|----|-----|
| primtal | nej | ja | ja | nej | ja | ja | nej | ja | ja | ja | ja | ja | ja | ja | ja | nej |

Vid en 8-sekunderskontroll nåddes `pixels=42`, `heading=1` och svängarna
`2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41`. HUD:en visade `7 delar per ruta`,
`block 3` och de senaste svängarna. Ett numeriskt canvasprov gav `lit=989` av
9 262 samplede pixlar, `warm=15` och `cool=907`. Skärmbilden sparades men kunde
inte visuellt bedömas av denna agent; B-020 öppnar för mänsklig granskning.

## Tretton korta sessioner

Varje session startades med `window.__primeSpace.restartWith(s)`, vilket nollställde
pixeln, vinkeln och svängloggen och satte en ny tidsgräns.

| Varv | Sekunder | Pixlar vid slut | Heading | Vänstersvängar |
|---:|---:|---:|---:|---|
| 10 | 1 | 5 | 1 | 2, 3, 5 |
| 11 | 1 | 5 | 1 | 2, 3, 5 |
| 12 | 2 | 10 | 0 | 2, 3, 5, 7 |
| 13 | 1 | 5 | 1 | 2, 3, 5 |
| 14 | 3 | 15 | 2 | 2, 3, 5, 7, 11, 13 |
| 15 | 1 | 5 | 1 | 2, 3, 5 |
| 16 | 2 | 10 | 0 | 2, 3, 5, 7 |
| 17 | 1 | 5 | 1 | 2, 3, 5 |
| 18 | 4 | 21 | 0 | 2, 3, 5, 7, 11, 13, 17, 19 |
| 19 | 1 | 5 | 1 | 2, 3, 5 |
| 20 | 2 | 10 | 0 | 2, 3, 5, 7 |
| 21 | 1 | 5 | 1 | 2, 3, 5 |
| 22 | 5 | 26 | 3 | 2, 3, 5, 7, 11, 13, 17, 19, 23 |

Alla 13 avslutades med `finished=true`, uppdaterad HUD-sekund och 0 konsolfel.
`restartWith` är en verifieringskrok; defaultregeln är oförändrad (8 s om inget
anges i URL:en).

## Betydelse

Pausen är en del av metoden, inte dekorationskod: den äger rum **efter** att arbetet
sparats och **före** återgången till steg 1. Den får aldrig tappa ofärdigt arbete
eller vänta på ett mänskligt svar. Primtalsregeln är `[E-user]`; att låta en pixel
motsvara en besökt delruta och de sju delarna bilda en radial fläkt är `[I]`.
Ingen koppling till Riemannhypotesen påstås.

## Historiskt avsnitt – varv 9

Den första versionen visade en drak som flög horisontellt genom ett stjärnfält utan
primtalsregel. Två buggar hittades och rättades innan primtalsrymden infördes:
`Number(null)` tolkades som `0` när `?seconds` saknades, och `requestAnimationFrame`
var så throttlad i förhandsvisningsrutan att inga pixlar hann räknas. Stegklockan
flyttades därför till `setInterval`, och defaultpausen på 8 sekunder bekräftades.
Beskrivningen här är det historiska underlaget; den gamla filen sparades inte separat.
