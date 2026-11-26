# NOSAD som kunskapskälla – importunderlag och återanvändbart arbetsflöde

**Datum:** 2026-11-25  
**Steg:** `project-loop/MASTERPROMPT.md` §3, steg 2.1  
**Status:** Underlag och **föreslagen** process. Ingen import till disk har genomförts i detta varv.  
**Taggar:** `[E-secondary]` för webbsidor, `[I]` för tolkning, `[ARG]` för förslag, `[ANTAGANDE]` för antaganden, `[?]` för osäkert.

> Personerna Tyler Kane och Doris Fleur X är **fiktiva personas** enligt `project-loop/DECISIONS.md` D-006 (lokal fil, 2026-11-25). Ingen närvaro, medlemskap, auktoritet eller möte påstås. Inga externa konton, e-postmeddelanden eller ansökningar har skapats (D-008).

---

## 1. Vad som faktiskt finns – och inte finns

| Fråga | Resultat 2026-11-25 | Källa |
|---|---|---|
| Lokalt NOSAD-material i workspace? | **Nej.** Ingen fil eller katalog med NOSAD i namnet hittades; sökningen gav 0 träffar. Endast *hänvisningar* till NOSAD finns i `project-loop/` (t.ex. `DECISIONS.md`, `README.md`, `CURRENT_STATE.md`). | lokal sökning i `C:\Users\timsa\OneDrive\Dokument\Standardprojekt`, 2026-11-25 |
| NOSAD-abonnemang / e-poståtkomst? | **Inte dokumenterat och inte tillgängligt för denna agent.** `DECISIONS.md` tar upp frågan som öppen punkt 5. | `project-loop/DECISIONS.md` (lokal fil, 2026-11-25) |
| Publicerade nyhetsbrev på webben? | **Ja.** Indexet listar månatliga nyhetsbrev 2022–2026 med fokus på öppen data och öppen källkod. Senast listade: 2026-10. | https://nosad.se/news (åtkomst 2026-11-25) |
| Har ett publicerat nummer lästs? | **Ja, som text i webbläsarverktyget** – oktobernumret. Ingen lokal kopia av sidan eller bifogade filer har sparats. | https://nosad.se/news_oct_2026 (åtkomst 2026-11-25) |
| Har något importerats, skickats eller prenumererats? | **Nej.** Ingen e-post har lästs eller skickats, inget konto skapats, inget abonnemang anslutits. | denna rapport; D-008 |

**Slutsats:** vi har *läst* en offentligt publicerad NOSAD-sida, men vi har **inte** ett NOSAD-arkiv, inte e-poståtkomst och inte ett abonnemang. Allt nedan är därför ett **reproducerbart förslag**, inte en redan genomförd import. `[I]`

### Vad oktobernumret innehöll (läst, men inte lokalt bevarat) `[E-secondary][?]`

- EU:s Open Source Observatory (OSOR) beskrivs som alltmer strategiskt för digital rådighet och säkerhet i europeisk offentlig sektor; OSPO-funktioner lyfts fram. Källa: https://nosad.se/news_oct_2026 (2026-11-25).
- Ena kodsamverkansplattform: proof of concept med Forgejo, Försäkringskassan som teknisk värd och Digg som tjänsteleverantör; ingen migrering av befintliga kodmiljöer ingår. Källa: https://nosad.se/news_oct_2026 och https://github.com/diggsweden/ena-kodsamverkansplattform-poc/wiki (länkad därifrån; åtkomst via NOSAD-sidan 2026-11-25) `[?]` – wiki-innehållet lästes inte direkt.
- eSam rekommenderar policyer för öppen källkod i myndigheter; Offentligkod.se ingår i EU Open Source Solutions Catalogue. Källa: https://nosad.se/news_oct_2026 (2026-11-25).
- Internationella jämförelser: Danmarks SIA Open och Ukrainas öppna källkodsarbete. Källa: https://nosad.se/news_oct_2026 (2026-11-25). De bakomliggande OSOR-sidorna lästes inte direkt `[?]`.
- NOSAD och Svenska OSPO-nätverket annonserade ett seminarium 23 november 2026 hos Internetstiftelsen. Källa: https://nosad.se/news_oct_2026 (2026-11-25). **Ingen anmälan eller närvaro har skett.**

---

## 2. Föreslagen importprocess `[ARG]`

Processen ska kunna köras om från början och ge samma resultat. Varje steg skriver ett eget artefaktlager; inget steg skriver över ett tidigare lager.

```
Källa (e-post .eml/.mbox ELLER publicerad webbsida)
   │
   ├─ 1. BEVARA originalet oförändrat → raw/ + MANIFEST.json (SHA-256)
   ├─ 2. NORMALISERA till text → extracted/*.jsonl (oförändrad text + radnummer)
   ├─ 3. EXTRAHERA artiklar och länkar → articles/*.jsonl, links/*.jsonl
   ├─ 4. TAGGA entiteter/ämnen → annotations/*.jsonl (med provenance-tagg)
   ├─ 5. KOPPLA till befintliga projekt → links_to_projects/*.jsonl
   └─ 6. INDEXERA + granska → index/nosad-index.jsonl + reports/*.md
```

### Steg 1 – Bevara originalet

- Spara **exakt** den mottagna filen (t.ex. `news_2026-10.eml`) eller den hämtade HTML-sidan. Ingen rensning, ingen omkodning, ingen "fixning" av tecken.
- Beräkna **SHA-256** och skriv manifest. Fält: `id`, `original_filename`, `source_url`, `source_type` (`email` | `public_web`), `fetched_at_utc`, `fetched_by`, `tool`, `http_status`, `content_type`, `bytes`, `sha256`, `rights_note`, `notes`.
- Manifestet är skrivskyddat efter skapande. En korrigering görs som ny post med `supersedes`, aldrig som överskrivning. `[ARG]`
- Provenance-taggar på varje påstående: `[NOSAD/2026-10/web]`, `[NOSAD/2026-10/email]` osv. Kombinera med projektets taggar `[E-secondary][?]`, `[I]`, `[ARG]`, `[ANTAGANDE]`.

### Steg 2–3 – Extrahera artiklar och länkar

- HTML: behåll rubrik, datum, brödtext och **alla** `href` med ankare-text. E-post: behåll `Message-ID`, `Date`, `From`-domän (inte personuppgifter i register), `Subject` och delar.
- Utdata som JSONL, en rad per artikel/länk: `issue_id`, `item_id`, `title`, `text_span` (start/end i normaliserad text), `url`, `anchor_text`, `sha256_of_span`, `provenance`.
- Länkar klassificeras: `official` | `project` | `news` | `social` | `unknown`. Källa för klassificeringen är domänen + manuel granskning `[?]`.

### Steg 4 – Entiteter och ämnen

- Organisationer/projekt/tekniker tagas som **organisationella entiteter** (t.ex. `Digg`, `eSam`, `Försäkringskassan`, `Forgejo`, `Rådig`, `EU Open Source Solutions Catalogue`).
- **Personer:** som huvudregel sparas *inte* namn i register. Om ett namn måste sparas för spårbarhet: endast offentligt publicerat namn i roll, inga e-postadresser, telefonnummer eller privata uppgifter, och först efter mänskligt beslut. Detta följer masterpromptens §7 och D-008. `[ARG]`
- Ämnesord: `interoperabilitet`, `öppen_källkod`, `digital_rådighet`, `elegitimation`, `datadelning`, `kulturarv`, `AI`, `finansiering`, `civilsamhälle`.

### Steg 5 – Koppla till befintliga projekt `[I][ANTAGANDE]`

| NOSAD-tema (2026-10) | Befintlig lokal yta | Koppling |
|---|---|---|
| Kodsamverkan / Forgejo / OSPO | `project-loop/integrations/infrastructure/README.md`, `research-project/rea/` | Återanvänd mönstret för öppen förvaltning av kod och artefakter |
| eSams policy för öppen källkod | `project-loop/stakeholders/sambruk/README.md`, denna katalogs `INTEROPERABILITET_KLIRRHACK.md` | Underlag till Klirrhack-paketet |
| Rådig / digital rådighet | `research-project/reports/public-sources/RADIG_KLIRR_HACK_DFRI_ANALYSIS_2026-11-24.md` | Direkt koppling till 16–17 feb 2027 |
| Öppna data / kataloger | `notes-assistant/`, `PAPER.md` figurer, `tools/` | Sökbarhet och provenans för publicerade data |
| Kulturarv + klimat | `research-project/funding/opportunities/vr-rch-2027.md`, denna katalogs `FINANSIERINGSKARTA.md` | Finansieringsspår, ej ansökan |

### Steg 6 – Index och granskning

- `index/nosad-index.jsonl`: en rad per källa med `issue_id`, `sha256`, `item_count`, `entity_count`, `review_status` (`auto` | `human_reviewed` | `rejected`).
- Auto-taggar får **aldrig** status `human_reviewed`. Publicering kräver mänsklig granskning enligt masterprompten §7. `[ARG]`

---

## 3. Konkret katalog- och filkonvention (föreslagen, ej skapad)

```
project-loop/steps/02-network/nosad/
├── raw/
│   ├── 2026-10_web_news_oct_2026.html
│   └── 2026-10_web_news_oct_2026.MANIFEST.json
├── extracted/
│   └── 2026-10_normalized.jsonl
├── articles/
│   └── 2026-10_articles.jsonl
├── links/
│   └── 2026-10_links.jsonl
├── annotations/
│   └── 2026-10_entities_topics.jsonl
├── links_to_projects/
│   └── 2026-10_project_map.jsonl
├── index/
│   └── nosad-index.jsonl
└── reports/
    └── IMPORT_REPORT_2026-10.md
```

Namnregel: `<ÅÅÅÅ-MM>_<källtyp>_<slug>.<format>`. Datumet är **publiceringsdatum** när känt, annars hämtningsdatum; båda skrivs i manifestet. `[ANTAGANDE]`

Exempelmanifest (illustrativt, **inte** skapat):

```json
{
  "id": "NOSAD-2026-10-web",
  "original_filename": "news_oct_2026.html",
  "source_url": "https://nosad.se/news_oct_2026",
  "source_type": "public_web",
  "fetched_at_utc": "2026-11-25T00:00:00Z",
  "tool": "webfetch",
  "http_status": 200,
  "content_type": "text/html",
  "bytes": null,
  "sha256": "<beräknas vid faktisk import>",
  "rights_note": "Offentligt publicerad sida; återpublicering av heltext kräver mänskligt beslut",
  "notes": "Läst som text; ingen lokal kopia sparad i detta varv"
}
```

---

## 4. Vad som kräver mänskligt input

1. **Tillhandahåll källan:** antingen NOSAD-abonnemang/e-poståtkomst, eller export av `.eml`/`.mbox`, eller ett skriftligt godkännande att importera enbart de **publika** webbsidorna. `[?]` – ingen access finns i nuläget.
2. **Rättigheter:** beslut om heltext får citeras/lagras/publiceras, eller endast rubrik + länk + kort sammanfattning.
3. **Personuppgifter:** beslut om personnamn från nyhetsbrev över huvudtaget får lagras. Rekommendation: nej som standard. `[ARG]`
4. **Källförtroende:** vem som får sätta `human_reviewed`; auto-taggar ska inte kunna bli publiceringsklara utan granskning.
5. **Kopplingar:** bekräfta att föreslagna projektlänkar i §2 är önskade; de är `[ANTAGANDE]`.
6. **Extern kontakt:** all kontakt med NOSAD, eSam, Digg eller andra (t.ex. för att begära material) kräver uttryckligt godkännande enligt D-008. Denna fil innehåller **ingen** sådan kontakt.
7. **Canonical forge / eventdetaljer:** om materialet rör Rådig och Klirrhack, se `INTEROPERABILITET_KLIRRHACK.md` §7; där finns öppna frågor som inte får besvaras gissningsvis.

---

## 5. Källor

- `project-loop/DECISIONS.md`, D-005, D-006, D-008 och öppen fråga 5 (lokal fil, 2026-11-25).
- `project-loop/MASTERPROMPT.md` §2.1, §2.2, §7 (lokal fil, 2026-11-25).
- `project-loop/steps/02-network/README.md` (lokal fil, 2026-11-25).
- `research-project/reports/public-sources/RADIG_KLIRR_HACK_DFRI_ANALYSIS_2026-11-24.md` (lokal fil, 2026-11-24).
- https://nosad.se/news (åtkomst 2026-11-25).
- https://nosad.se/news_oct_2026 (åtkomst 2026-11-25).
- https://github.com/diggsweden/ena-kodsamverkansplattform-poc/wiki (länkad från NOSAD-sidan; åtkomst via denna 2026-11-25) `[?]`.

**Inga filer utöver denna rapport har skapats eller ändrats av detta arbetssteg.**
