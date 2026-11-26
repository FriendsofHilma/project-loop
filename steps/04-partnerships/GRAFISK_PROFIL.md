# Grafisk profil för projektloopen — v0.1, GODKÄND

> Agent: project-loop (lokalt)  
> Datum: 2026-11-25  
> Fråga: Hur ska forskning och projektresultat visas noggrant, prydligt och troget?  
> Källor: `tools/make-figures.js`, `tools/make-step4-figures.mjs`, `figures/*.svg`, `src/visualization/visualization.ts`, `research-project/PROTOCOL.md`  
> Status: godkänd oförändrad 2026-11-25 (D-017/P-016). Designvalen är `[I]`, inte uppmätta sanningar.  
> Beslut: D-015 (definition), D-017 (aktivering och godkännande)

## 1. Syfte och språk

Denna profil är en lokal, godkänd standard för rubriker, figurer, tabeller,
presentationer och gränssnitt som produceras inom projektloopen. Den ändrar
inte den matematiska modellen och gör inga anspråk på att ha läst eller mätt
Hilma af Klints målningar.

Nyckelord, med svensk arbetsöversättning:

| Engelska | Svenska | Operativ betydelse |
|---|---|---|
| meticulous | noggrann | Varje siffra, enhet, källa och märkning kontrolleras före leverans. |
| neatness | prydlighet | Enhetlig typografi, marginal, rubriknivå, figurcaption och filnamn. |
| authentic representation | trogen återgivning | Bilden visar bara det som finns i källan och säger när något är tolkning eller urval. |
| accuracy | korrekthet | Värden, ordningar, formler och hänvisningar stämmer med underlaget. |

Profilen är ett medel för **trogen återgivning**, inte en ny estetisk sanning.
Färg, storlek eller opacitet får aldrig användas som synonym för evidens.

## 2. Design tokens

Värdena nedan är desamma som i den befintliga deterministiska
figurgeneratorn `tools/make-figures.js`. De är dokumenterade som
**implementation-defined** `[I]`, inte som uppmätta färger i ett verk.

| Roll | Hex | Användning |
|---|---|---|
| Paper | `#faf8f3` | Bakgrund i figurer och tryckta underlag. |
| Ink | `#1b1b1f` | Brödtext, linjer, viktiga etiketter. |
| Muted | `#6b6b76` | Captions, sekundära etiketter, streckade hjälplinjer. |
| Rule | `#d8d5cc` | Ramar, tabelllinjer, skalstreck. |
| Surface | `#ffffff` | Paneler och fält ovanpå paper. |

### Cellvärde → färg

| Värde | Hex | Namn i generatorn |
|---:|---|---|
| 0 | `#0a0a0a` | void / ground |
| 1 | `#ffd600` | yellow |
| 2 | `#219a9d` | teal |
| 3 | `#e63946` | vermilion |
| 4 | `#2a9d8f` | green |
| 5 | `#9c2cbd` | violet |
| 6 | `#38bdf8` | sky |
| 7 | `#f472b6` | rose |
| 8 | `#ff8c42` | orange |
| 9 | `#ff5f57` | coral |

Regler:

- Ordningen följer heltalet 0–9, inte spektralfärg. `[I]`
- Samma värde ska ha samma hex i code, figur, tabell och caption.
- Bytet av färg kräver ny versionsrad i denna fil, ändring i generatorn och
  ny verifiering av alla figurer.
- `[?]` Färgreadingen av *The Key* är inte verifierad i detta projekt. Använd
  inte tabellen som påstående om målningens färger.

## 3. Typografi och layout

- Figurer använder `Georgia, 'Times New Roman', serif`, som i generatorn.
- Rubrik i figur: 13–14 px, halvfet, `Ink`.
- Brödtext och etiketter: 12–13 px, `Ink`.
- Caption: 13 px, kursiv, `Muted`.
- Fotnot: 11–11,5 px, `Muted`.
- Marginal i figurer: helst 20–24 px. Captions placeras direkt under figuren,
  aldrig på nästa sida eller slide.
- Rubriknivåer i Markdown: en `#`-rubrik per dokument, därefter `##` för
  avsnitt och `###` för underavsnitt. Inga hoppade nivåer.
- Tabeller har alltid rubrikrad och enhet i kolumnrubriken när värdet är
  numeriskt.

## 4. Evidensmärkning i presentationer

Märkningen följer `research-project/PROTOCOL.md` och kompletteras lokalt med
`[FÖRSLAG]`.

| Märke | Betydelse i en figur eller tabell |
|---|---|
| `[E]` | Värdet kommer direkt från källan eller koden. |
| `[E-secondary]` | Oberoende tryckt eller webbpublicerad källa. |
| `[I]` | Vår tolkning, vårt val av layout eller vår mappning. |
| `[?]` | Tveksamhet, källkonflikt eller obekräftat antagande. |
| `[FÖRSLAG]` | Lokalt förslag som kräver mänskligt godkännande. |

Varje figurcaption ska innehålla: vad som visas, källa, metod/generator och
status. Exempel:

> Figur 3. Cellvärde → färg för alla tio värden. Källa:
> `tools/make-figures.js:16–27`. Metod: deterministisk SVG-generering. Status:
> `[I]`; färgvalen är inte uppmätta från någon målning `[?]`.

## 5. Kontrakt för visualisering

Innan en figur, ett diagram eller en 3D-scen publiceras lokalt ska följande
vara svarat i caption, kodnära kommentar eller figurförteckning:

1. **Källa:** vilket dokument, vilken kodfil eller vilken modell ligger bakom?
2. **Omfattning:** hela strukturen eller ett urval? Figuren över 13³ i
   `figures/fig2-lattice.svg` är uttömmande; figurgeneratorns panel i figur 1 är
   ett urval och ska beskrivas som det.
3. **Mappning:** vilket värde blir vilken färg, storlek, opacitet eller form?
4. **Enhet och ordning:** index, rad, kolumn, plan och värde ska ha samma
   beteckning som i modellen.
5. **Osäkerhet:** tolkningar märks `[I]`, oförverifierade kopplingar `[?]`.
6. **Reproducerbarhet:** generator, beroenden och hashing anges. Ingen figur
   ska vara resultatet av en ospårbar manuell justering.
7. **Tillgänglighet:** färg är inte enda informationsbärare; textetikett,
   mönster eller numerisk etikett kompletterar alltid färgen.

Särskilda regler för Cosmic Block:

- Komplementinvolutionen `n ↦ 9 − n` är en numerisk egenskap `[E]`; den är inte
  ett påstående om färgpsykologi eller om af Klints avsikt. `[I]`
- Defaultmåtten 13, 5 och 2 är tolkande antaganden `[?]`, inte uppmätta ur
  målningen.
- `src/visualization/visualization.ts` är en renderer och får inte skriva
  tillbaka värden till modellen.

## 6. Modulpolicy och registrerade beroenden

Vid omformuleringen räckte befintliga medel. Efter användarens uttryckliga
godkännande (D-017) installerades **d3 7.9.2** lokalt för deterministiska
diagram; **three 0.136.0** och dess `OrbitControls` återanvändes från
befintlig installation. Ingen modul publicerades och ingen extern tjänst
anropades.

| Behov | Lösning | Version / licens | Registrering |
|---|---|---|---|
| Deterministiska grundfigurer | `tools/make-figures.js` | Node, befintlig | `[E]` 5 SVG:er, oförändrade hashar |
| Grafikprofilsblad, chord-diagram, offsetkarta | `tools/make-step4-figures.mjs` med d3 | `d3@7.9.2`, ISC | shasum `(local hash scrubbed)`; integritet `sha512-ZKb/mONPVKzaO5UlcWcwN8bS4ezvQaYu+bsou+XgNABdGC800kwH651ADTbbTxMPHW13UlvbQafdmJQDk1w7Mg==`; hem `https://d3js.org` |
| Interaktiv 3D | `project-loop/steps/04-partnerships/viewer/index.html` med Three.js + OrbitControls | `three@0.136.0`, MIT | `[I]` demodata `(x + y + z) mod 10`; lokala importar via `/node_modules/`; ingen CDN |
| Lokal visning | `tools/serve.js` | Node, befintlig | `[E]` serverar `.svg`, `.html`, `.md`, `.css`, `.js`, `.mjs` och `.json` med rätt MIME-typ |

`npm install d3@7.9.2 --save-exact` rapporterade 0 sårbarheter vid installationen
(44 paket granskade). `npm ls --depth=0` visar d3 7.9.2, three 0.136.0,
@types/three 0.136.1, @types/node 18.19.69 och typescript 4.9.5. Ytterligare
moduler kräver dokumenterat behov, licens, version, hash, skäl och separat
mänskligt godkännande i denna fil innan installation. Installationen är inte
publicering och inte kontakt.

## 7. Leveransformat och godkända leveranser

- Figurer: `figures/figN-kort-namn.svg`. Figur 1–5 genereras från
  `tools/make-figures.js`; figur 6–8 från `tools/make-step4-figures.mjs`.
- Godkända nya figurer 2026-11-25: `fig6-profile-board.svg` (profilbladet),
  `fig7-complement-chord.svg` (komplementinvolutionen) och
  `fig8-offset-map.svg` (byteadresser och grannsteg).
- Interaktiv scen: `steps/04-partnerships/viewer/index.html`. Den visar hela
  13³ med filter, komplement, rutnät och rotation. Demodatan är `[I]` och
  varken forskningsresultat eller avläsning av en målning.
- Rapporter: Markdown med statusblock högst upp och figurforteckning sist.
- Presentationer: samma tokens, samma captiongrammatik, samma evidensmärkning.
- 3D-scener: samma färgtabell som figurerna; kamera och ljus dokumenteras som
  `[I]`, inte som del av modellen.

## 8. Kontrolllista före leverans

- [ ] Rubrik, syfte, källa, metod och status finns.
- [ ] Alla siffror kan spåras till källa eller kod.
- [ ] `[E]`, `[I]` och `[?]` sitter nära påståendet de gäller.
- [ ] Figurcaption följer mallen i §4.
- [ ] Färg, storlek och opacitet har dokumenterad mappning.
- [ ] Urval kallas urval; helhet kallas helhet.
- [ ] Filnamn och rubriknivåer följer §3 och §7.
- [x] `node tools/make-figures.js` ger oförändrade SHA-256-hashar för figurer 1–5.
- [x] `node tools/make-step4-figures.mjs` ger oförändrade SHA-256-hashar för figurer 6–8 vid omkörning.
- [x] Alla 8 SVG:er kan parse:s som XML; viewer och figurer svarar HTTP 200 utan konsolvarningar.
- [ ] Inga personuppgifter, externa kontakter eller publiceringar ingår.

## 9. Ändringar

Ändring av denna profil skrivs som ny versionsrad med datum, skäl och hänvisning
till ett beslut i `project-loop/DECISIONS.md`. Tidigare versioner raderas inte.

- **v0.1 — 2026-11-25:** första versionen. Design tokens, typografi,
  evidensmärkning och visualiseringskontrakt fastställdes som `[FÖRSLAG]` i
  D-015. Samma version godkändes oförändrad i D-017 efter användarens ”Ok, det
  låter bra!”, tillsammans med lokal installation av d3 7.9.2, figurerna 6–8
  och viewern. Ingen färg, typografi eller captionmall har ändrats.
