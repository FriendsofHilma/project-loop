# Konsekvenskontroll – 2026-11-26

Uppdaterad efter varv 32; kompletterad efter varv 35 (2026-11-27). `[E]` = lokalt verifierat, `[E-user]` = användarens regel, `[I]` = tolkning, `[?]` = osäkert.

| Kontroll | Resultat |
|---|---|
| `MASTERPROMPT.md` orörd | Ja, SHA-256 `96B620A08712A79709852E27057FACB58E202B4A02E2B99B100BDB2BC6C8E98B` |
| Ny masterprompt sparad separat | Ja, `MASTERPROMPT_2026-11-26.md` |
| D-001 kataloger oförändrade | Ja, `07-dissemination`, `08-evaluation`, `09-renewal` behållna |
| Steg 1–6 definitioner bevarade | Ja, historiska avsnitt och oförändrade källfiler |
| Steg 7–9 integrerade | Ja, README + huvuddokument + relaterade kartor/planer |
| JSON state-filer | 3/3 parsade och uppdaterade till version 2.1 |
| Varv | 35 st: `cycles/2026-11-26/cycle-01.md` … `cycle-32.md` samt `cycles/2026-11-27/cycle-33.md` … `cycle-35.md` |
| Arvsfondsutkast | Ja, PASS i `CHECK_RESULT_2026-11-26.md`; inte skickat |
| Avhandling | 18 Markdown-filer, 0 trasiga relativa länkar; Villari-kopian orörd |
| Assistent | `step1`…`step9`, 18 checkpoint-omnämnanden, ingen auto-kedja |
| Riemann | Figur 1 deterministisk (`0b188cc2`), `π(10000)=1229`; 18 `not_downloaded`-rader, 0 nedladdningar, inget bevisanspråk |
| Relationsstatusar | `[E]`, `[E-secondary]`, `[I][?]`, `[FÖRSLAG][?]` förekommer |
| Handlingsplan | A01–A13 med `[E]`, `[I][ARG]`, `[ARG]`, `[?]` |
| Primtalsregel `[E-user]` | `isPrime` korrekt för 16 testvärden; svängar vid 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41 |
| Svängriktning | Rättad i D-035: `(heading + 1) mod 4` ger vänster; den gamla `+3` gav höger |
| Enhetstest | `node test-prime.js` → 64 kontroller, inkl. simulator och wrap |
| Självtest | `?selftest=1` → PASS; `window.__primeSpace.selftest()` → `ok=true` |
| Reproducerbarhet | `?seed=N` ger samma stjärnfält; fryst slutbild ritas efter avslut |
| Sju-delad kubruta `[E-user]` | `PARTS = 7` hårdkodat; `part = (part + 1) mod 7`; 3 block i projektion |
| Tretton återhämtningar | Alla 13 nådde `body.finished`; 0 konsolfel; korrekt sekvens i varje session |
| Visuell finslipning | Tydligare drake, högre kontrast på aktiv del, mjukare trail, svängar i varm färg; 0 konsolfel |
| Mänsklig granskning | B-020 öppen för skärmbildsgranskning av färger och sjudelad fläkt |
| GitHub | Lokal commit förberedd och amenderad lokalt; ingen push/merge/publicering |
| Ouroboros `[E]` | Hamilton-cykel, 100 % täckning och `tailBite: true` för 10×10 … 55×44; `node test-dragon.js` → 25 kontroller |
| Ouroboros i webbläsaren | 1 550 rutor, 100 % täckning, 244 primpulser, 0 konsolfel; två perspektiv och fryst bettbild |
| Hemsida `[E]` | 9 klickbara stegbilder, 7 komponentgrupper/48 länkar, 8 figurer, lokal läsare; `node hemsida/test-site.js` → 139 kontroller, 0 saknade filer |
| Hemsidans konst `[I]` | 10 deterministiska SVG:er ritas lokalt av `hemsida/tools/make-art.js`; XML 10/10; 0 externa bilder efter `Invalid credential` (D-042) |
| Mänsklig granskning av hemsidan | B-022 öppen |
| Externa kontakter/personuppgifter | Inga |

Skärmsläckarens historiska buggar är rättade: `Number(null)` gav tidigare 0 sekunder
utan `?seconds`, och throttlad `requestAnimationFrame` gav 0 pixlar i
förhandsvisningen. Defaultpausen är 8 sekunder och stegklockan använder
`setInterval`. Verifieringskroken `restartWith` ändrar bara testfönstret, inte
defaultregeln. Se `steps/09-renewal/RECOVERY_SESSION_2026-11-26.md`.

Kända historiska länkfel (`GITHUB_REPO_README.md -> LICENSE`, `AGENT.md`) kvarstår
oförändrade och räknas inte som nya fel.
