# Hemsida — hela projektet på en sida

Ett lokalt utkast till en grafisk översikt över allt som byggts hittills. Första sidan visar projektloopens nio steg som **klickbara illustrerade bilder**; därefter följer komponentkatalog, figurgalleri och en lokal läsare för textfiler. Sidan finns på **svenska och engelska**.

**Status:** lokalt utkast, genomfört i tre varv i projektloopen (33–35). Ingen publicering, push, extern kontakt eller inlämning.

## Starta

Från projektroten:

```bash
node tools/serve.js
```

Öppna sedan <http://localhost:8731/hemsida/>. Servern är den befintliga statiska servern på port 8731; den läser bara lokala filer. Hemsidan fungerar inte direkt via `file://` eftersom webbläsaren då blockerar `fetch` i `visa.html`.

## Språk

Språkväxlaren ligger längst till höger i topmenyn (`English` / `Svenska`). Valet sparas i `localStorage` under `cb-lang` och kan också styras med `?lang=sv` eller `?lang=en` i adressen. `?lang=` följer med när man klickar vidare till andra sidor och in i läsaren.

| Fil | Roll |
| --- | --- |
| `data.js` | innehållsförteckning på båda språken (`locales.sv`, `locales.en`) + UI-strängar |
| `i18n.js` | sätter språk, etiketter och språkväxlarens länk |
| `app.js` | renderar den aktiva språkversionen; sök/filtrering |
| `visa.html` | lokal markdown-/textläsare, översatt och med språkbevarade länkar |

Avhandlingen (18 Markdown-filer: 7 kapitel, 6 bilagor, 5 översiktsdokument) har en egen länk **Avhandling** i topmenyn och en egen komponentgrupp **Avhandlingen och källan** / **The dissertation and its source** först i katalogen. Villaris bearbetade researchkopia ligger i samma grupp och under **Källor, läsning och research**.

## Struktur

| Fil | Roll |
| --- | --- |
| `index.html` | startsida med hero, steg, komponenter och figurer |
| `styles.css` | mörk kosmisk grafisk profil med guld, kobolt och rosa |
| `app.js` | renderar sidan ur `data.js`; sök/filtrering |
| `data.js` | innehållsförteckning med alla länkar, svenska och engelska |
| `i18n.js` | språkväxling och översatta UI-strängar |
| `visa.html` | lokal markdown-/textläsare med sammanhangslänkar |
| `assets/*.svg` | tio deterministiska konstverk (hero + nio steg) |
| `tools/make-art.js` | generatorn som ritar konstverken |
| `tools/make-publish.js` | bygger en fristående statisk kopia för GitHub Pages |
| `test-site.js` | kontrollerar att varje länk och bild finns på disk, på båda språken |

## Konsten

Bildtjänsten svarade `Invalid credential` när illustrationerna beställdes, så inga externa bilder används. I stället ritas alla bilder lokalt av `tools/make-art.js` med stjärnfält, koncentriska cirklar, spiraler, kubgaller, kompasser och en ouroborosdrake med fjäll, horn och öga. Samma ritdialekt används i alla tio bilder; varje steg har ett eget motiv men delar paletten med projektets grafiska profil.

Generera om med:

```bash
node hemsida/tools/make-art.js
python -c "import glob,xml.etree.ElementTree as E; [E.parse(f) for f in glob.glob('hemsida/assets/*.svg')]"
```

## Kontroll

```bash
node hemsida/test-site.js
```

Testet räknar länkar och kontrollerar att varje fil finns på båda språken. I webbläsaren kontrolleras dessutom att sidan laddar utan konsolfel, att alla nio stegbilder visas, att språkväxlaren fungerar och att läsaren öppnar en godtycklig lokal markdown-fil.

## Publicering på GitHub

**Ja – hemsidan kan visas på GitHub utan en separat webbhost.** GitHub Pages är gratis för offentliga repon (eller privat med ett betalt abonnemang). Det finns två vägar:

### 1. Publicera hela projektet (enklast)

Sätt i GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `/ (root)`**. Efter push ligger sidan på `https://<användare>.github.io/<repo>/hemsida/`. Eftersom alla länkar i `data.js` är relativa till projektroten (`../project-loop/`, `../figures/`, `../avhandling/` …) fungerar de direkt när hela trädet publiceras. Nackdelen är att hela repot blir läsbart på nätet – kontrollera därför först att inget känsligt finns där.

### 2. Egen mapp för enbart hemsidan

Om du vill publicera bara hemsidan och dess länkade filer, bygg en lokal export:

```bash
node hemsida/tools/make-publish.js             # full kopia, ca 86 MB (ljudfiler ingår)
node hemsida/tools/make-publish.js --check     # bara rapport, kopierar inget
node hemsida/tools/make-publish.js --no-media  # mindre kopia utan WAV/PDF
node hemsida/tools/make-publish.js --out C:\temp\cb-pages
```

Verktyget kopierar `hemsida/`, alla länkade filer från båda språken och lokala tillgångar som hittas i HTML/JS/CSS (bland annat Three.js till viewer:n och ljudfilerna till narrationsspelaren). Sökvägarna behålls relativa till projektroten, så `hemsida/index.html` ligger kvar i exportens `hemsida/`-mapp. `PUBLISH_MANIFEST.json` listar filer, storlek och varningar. Mappen `hemsida/export/` är gitignored.

Lägg exportens innehåll i ett eget repo (eller en `gh-pages`-gren) och sätt Pages-källan till den roten. Adressen blir då `https://<användare>.github.io/<repo>/hemsida/`.

**Wikimedia-sidan** (om avhandlingens källa) är en annan tjänst och kan inte visa hela denna statiska app; github.com fungerar däremot med GitHub Pages som ovan.

**Wikimedia eller extern värd är inte nödvändigt.** Ingen push, commit till fjärr, approv eller publicering görs av detta utkast – det krävs ett separat mänskligt beslut (D-008). Innan publicering: granska B-022 (visuell granskning) och bestäm vilken av de två vägarna som ska användas.

## Gränser

Allt är lokalt. Inga personuppgifter, inga externa konton, inga nedladdningar, inga inskickningar, inga signaturer och ingen publicering. Illustrationerna är [I] – tolkningar av projektets teman, inte dokumentära bilder av Hilma af Klints målningar.
