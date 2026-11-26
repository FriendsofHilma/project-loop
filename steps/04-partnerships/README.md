# Steg 4 – Estetisk integritet och grafisk profil

**Status: GENOMFÖRD 2026-11-25** enligt D-017. Steget är aktiverat, profilen
v0.1 är godkänd och den första visuella leveransen finns lokalt. Katalognamnet
`04-partnerships` behålls oförändrat enligt D-001; `MASTERPROMPT.md` och det
publicerade repo:t är historiska källor och ändras inte (D-003/D-009).

## Ställningstagande

Kärnan i omskrivningen godtas: masterpromptens gamla steg 4 lämnar inget
explicit kvalitetsfilter mellan prioritet (steg 3) och finansiering/
implementation (steg 5–6). Därför är detta steg nu noggrann formatering,
grafisk profil och trogen visualisering av forskningssamband.

Samverkan är inte borttagen, men enligt användarens förtydligande hör den hemma
i **steg 6 och 7**, inte i steg 4 eller 5. Ingen kontakt eller överenskommelse
har skapats. `[I][D-015][D-016]`

## Syfte

Skapa en lokal, reproducerbar grafisk profil så att saker blir estetiskt
tilltalande för ögat **utan** att sanningen hos underlaget ändras. Visualiserade
mappningar dokumenteras med källa, omfattning, värde → form och osäkerhet.

Nyckelord: **meticulous** (noggrann), **neatness** (prydlighet),
**authentic representation** (trogen återgivning) och **accuracy**
(korrekthet). Se [`GRAFISK_PROFIL.md`](GRAFISK_PROFIL.md).

## Indata

- Godkänd prioritet från steg 3 (D-012).
- `tools/make-figures.js` och de fem befintliga SVG-figurerna i `figures/`.
- `src/visualization/visualization.ts` och `three@0.136.0` för Three.js.
- `research-project/PROTOCOL.md` för evidensmärkning.
- [`SIEGEL_DOMAN_4.md`](SIEGEL_DOMAN_4.md) för den fjärde domänen
  (memory integration) som designheuristik, inte som medicinskt påstående.

## Utfört arbete

1. Design tokens, typografi, tabeller, figurcaptions och statusblock
   fastställdes i `GRAFISK_PROFIL.md` v0.1 och godkändes oförändrade (D-017).
2. Varje visualiseringsmappning dokumenterades med källa, omfattning,
   värde → färg/storlek/form och osäkerhetsmärke.
3. `d3@7.9.2` installerades lokalt efter uttryckligt godkännande; `three@0.136.0`
   och `OrbitControls` återanvändes. Ingen CDN eller extern tjänst används.
4. Siegels fjärde domän används som tidslig trohet: källans dåtid, dagens
   tolkning och nästa granskning framgår av dokumenten.
5. Genereringen körs om deterministiskt och alla SVG:er parse:s som XML.
6. En lokal interaktiv viewer och tre nya figurer levererades.

## Leveranser

| Leverans | Innehåll | Status |
|---|---|---|
| [`GRAFISK_PROFIL.md`](GRAFISK_PROFIL.md) | Godkänd v0.1 med tokens, captionregler, modulregister och kontrollista. | Godkänd D-017 |
| [`SIEGEL_DOMAN_4.md`](SIEGEL_DOMAN_4.md) | Källmärkt överföring från memory integration till formgivning. | `[E-secondary]` / `[I]` |
| [`fig6-profile-board.svg`](../../../figures/fig6-profile-board.svg) | Profilblad med färgskala, typografi, evidensmärken och regel för trogen återgivning. | Genererad, deterministisk |
| [`fig7-complement-chord.svg`](../../../figures/fig7-complement-chord.svg) | Chord-diagram för `n ↦ 9 − n`; fem komplementpar. | Genererad, deterministisk |
| [`fig8-offset-map.svg`](../../../figures/fig8-offset-map.svg) | 13 × 13-byteoffset i planet `z = 0` samt grannstegen `+1`, `+13`, `+169`. | Genererad, deterministisk |
| [`viewer/index.html`](viewer/index.html) | Interaktiv 13³-scen med filter, komplement, rutnät och rotation. | `[I]` demodata, lokalt verifierad |
| `tools/make-step4-figures.mjs` | Generator för figur 6–8 med d3 7.9.2. | `npm run figures:step4` |

Viewerns demodata är `(x + y + z) mod 10`. De är en demonstration av
adress- och värderelationer, **inte** ett forskningsresultat, inte en avläsning
av *The Key* och inte en ny matematisk regel i modellen.

## Modulregister

| Modul | Version | Licens | Skäl | Identitet |
|---|---|---|---|---|
| d3 | 7.9.2 | ISC | Deterministiska 2D-diagram i figur 6–8 | shasum `(local hash scrubbed)`; integritet `sha512-ZKb/mONPVKzaO5UlcWcwN8bS4ezvQaYu+bsou+XgNABdGC800kwH651ADTbbTxMPHW13UlvbQafdmJQDk1w7Mg==` |
| three | 0.136.0 | MIT | Befintlig lokal 3D-renderer och OrbitControls | redan installerad; inga nätverksanrop i viewern |
| @types/three | 0.136.1 | MIT | TypeScript-typer för befintlig renderer | `npm ls --depth=0` |
| @types/node, typescript | 18.19.69 / 4.9.5 | MIT / Apache-2.0 | Befintlig byggkedja | `npm ls --depth=0` |

## Verifiering 2026-11-25

| Kontroll | Resultat |
|---|---|
| `npm install d3@7.9.2 --save-exact` | 38 tillagda, 78 borttagna, 44 granskade, 0 sårbarheter. |
| `npm ls --depth=0` | d3 7.9.2, three 0.136.0, @types/three 0.136.1, @types/node 18.19.69, typescript 4.9.5. |
| `npm run build` | Ren körning under `strict: true`. |
| `npm test` | Grön; L4/L5 och färgkontroller oförändrade. |
| `node tools/make-figures.js` | Figur 1–5 oförändrade. |
| `npm run figures:step4` | Figur 6–8 skrevs om; SHA-256 identiska vid andra körningen. |
| SHA-256 figur 6 | `1C9576EB389DAF6BAFCCB1057426D86D2C06D1D144D4238517E0A23A31955992` |
| SHA-256 figur 7 | `267EF700845C0AA8ECF65AED76176ED5CDF0E7A74F0CB750526B53B896442026` |
| SHA-256 figur 8 | `9E56CAB5231FB7776CBD1B418A8595AEA201E9283588BDFFB895650F6A3642C9` |
| XML-parse av `figures/*.svg` | 8/8 lyckades. |
| `npm run serve` + webbläsare | Viewer och figurer HTTP 200; `three.module.js` och `OrbitControls.js` HTTP 200; inga konsolvarningar eller fel. |
| Viewerinteraktion | Filter `v = 7` visade 217/2 197 celler; komplement `9 − 7 = 2` visade 223/2 197; rutnät/rotation kunde slås av och till utan fel; återställning visade 2 197/2 197. |
| `tools/serve.js` | MIME-typer för `.js`, `.mjs` och `.json` tillagda för lokala ES-moduler. |
| `MASTERPROMPT.md` SHA-256 | `96B620A08712A79709852E27057FACB58E202B4A02E2B99B100BDB2BC6C8E98B` — oförändrad. |
| `package.json` / `package-lock.json` SHA-256 | `78C310E3847AE95F3AECB4D0F26C383825041DBE594A6C6DC182B36933ED78A2` / `D616E20678D5EC0E5896EE56204D6E80DD4A9C84E09320646BA0CD717A8A8645`. |
| Extern kontakt, publicering, ansökan eller signatur | Ingen. Inga personuppgifter registrerade. |

## Beslutspunkt

Steg 4:s estetiska beslut är fattade (D-017). Nästa beslut är om steg 5
(finansiering och resurser) ska aktiveras (B-011). Det är inte ett kontaktbeslut:
D-008 kvarstår.

## Övergång till nästa steg

Steg 5 kan använda den godkända profilen för ansökningsunderlag, budgettabeller
och finansieringsdiagram efter separat aktivering. Samverkan aktiveras först i
steg 6 (gemensam implementation/integration) och steg 7
(spridning/utbildning) enligt D-016, alltid utan egenmäktig kontakt (D-008).
