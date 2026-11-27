# Kort introduktion till svensk interoperabilitet – för internationella deltagare

**Datum:** 2026-11-25  
**Läsningstid:** ca 5 minuter  
**Syfte:** Enkel ingång till samma underlag som `INTEROPERABILITET_KLIRRHACK.md`, avsedd för någon som inte följt svensk offentlig förvaltning tidigare. Svenska nyckelord ges med engelska förklaringar.

> **Viktigt:** Tyler Kane och Doris Fleur X är **fiktiva personas** (`project-loop/DECISIONS.md`, D-006, 2026-11-25). De är inte anmälda till Klirrhack 2027, har inte mött arrangörerna och har ingen auktoritet. Inga e-postmeddelanden, konton eller ansökningar har skapats (D-008).

---

## 1. Tre saker att veta

1. **Interoperabilitet** (`interoperability`) betyder att olika organisationers system kan arbeta tillsammans och utbyta information på ett säkert sätt.
2. I Sverige samordnas detta av **Digg** – Myndigheten för digital förvaltning. Digg ansvarar för **Ena**, Sveriges gemensamma digitala infrastruktur. Källa: https://www.digg.se/om-oss/vart-uppdrag (2026-11-25).
3. På EU-nivå gäller **Interoperable Europe Act**, förordning (EU) 2024/903. Den tillämpas från 12 juli 2024 och uppmuntrar gemensamma lösningar, interoperabilitetsbedömningar och delning av källkod. Källa: https://eur-lex.europa.eu/EN/legal-content/summary/interoperable-europe-act.html (2026-11-25).

---

## 2. Hur hänger det ihop?

| Begrepp | Enkel förklaring | Källa (URL, läst) |
|---|---|---|
| **Digg** | Den myndighet som samordnar gemensam digitalisering i offentlig sektor. | https://www.digg.se/om-oss/vart-uppdrag (2026-11-25) |
| **Ena** | Gemensamma byggstenar som myndigheter, kommuner och regioner kan återanvända i stället för att bygga var för sig. | https://www.digg.se/styrning-och-samordning/ena---sveriges-digitala-infrastruktur/om-ena (2026-11-25) |
| **Digitaliseringsstrategi 2025–2030** | Regeringens plan med fem områden: kompetens, näringsliv, förvaltning, välfärd, konnektivitet. | https://www.regeringen.se/regeringens-politik/digitaliseringsstrategin-2025-2030 (2026-11-25) |
| **Ramverk för digital samverkan** | Sveriges nationella anpassning av EU:s interoperabilitetsramverk (EIF). | https://www.digg.se/kunskap-och-stod/svenskt-ramverk-for-digital-samverkan (2026-11-25) |
| **Sweden Connect** | Gemensam ingång för e-legitimation (`eID`), även från andra EU-länder via den svenska eIDAS-noden. | https://www.digg.se/digitala-tjanster/e-legitimering/sweden-connect---diggs-infrastruktur-for-e-legitimering/infor-anslutning-till-sweden-connect (2026-11-25) |
| **REST API-profil** | Rekommenderat sätt att bygga API:er så att data kan delas på samma sätt av olika aktörer. | https://www.digg.se/digitala-tjanster/api-hantering (2026-11-25) |
| **Rådig** | Ett öppet samarbete om digital rådighet (`digital sovereignty/control`) – styrning och analys, inte en produkt. | https://codefloe.com/radig (2026-11-24, via sparad capture i lokal analys) |
| **Klirrhack 2027** | Arrangemang 16–17 februari 2027 i Glashuset, Gislaved, med fiktivt scenario där en leverantör stänger av tjänster inom 72 timmar. | https://konferens.sambruk.se/event/253/ (2026-11-24, via sparad capture); lokalt underlag: `research-project/reports/public-sources/RADIG_KLIRR_HACK_DFRI_ANALYSIS_2026-11-24.md` |

---

## 3. Om Klirrhack – utan att påstå närvaro

Det lokala underlaget säger att utmaningen handlar om tre steg: **aktivering** (vem beslutar och med vilket mandat), **identitet** (hur en person kan identifieras när vanlig inloggning inte fungerar) och **teknik** (vilka lösningar som aktiveras). Rådig beskrivs som ett öppet styrnings- och analysmaterial med principer som "bygg utgången innan du behöver den". Källa: lokal analys, 2026-11-24; Rådigsida https://codefloe.com/radig (2026-11-24, via sparad capture).

En rimlig, **fiktiv** infallsvinkel för de två rollpersonerna är:

> **"Break glass, not surveillance"** – kontinuitet som går att granska, avsluta och bestrida.

Det är ett förslag i underlaget, inte ett yttrande från DFRI eller ett officiellt evenemangsmål. `[ARG]` Källa: samma lokala analys (2026-11-24).

---

## 4. Fyra principer som är lätta att återanvända

1. **Öppenhet som standard** – information ska vara öppen och maskinläsbar om den inte behöver skyddas. Källa: https://www.digg.se/kunskap-och-stod/oppna-och-delade-data/vagledning-for-att-tillgangliggora-information (2026-11-25).
2. **Återanvänd före nyutveckling** – Diggs styrdokument prioriterar återanvändning av öppen programvara. Källa: https://www.digg.se/download/18.7069295d19e7ac21c04747/1780485334476/Policy%20f%C3%B6r%20%C3%B6ppen%20programvara.pdf (2026-11-25).
3. **Öppna standarder** – standarder med öppen beslutsprocess och fritt tillgänglig specifikation minskar inlåsning. Källa: https://www.digg.se/download/18.129a4fef1939e2e1c1f113d8/1664286148293/riktlinjer-for-utveckling-och-publicering-av-oppen-programvara.pdf (2026-11-25).
4. **Rättigheter före teknik** – nödåtgärder ska vara tidsbegränsade, sparsamma med loggar och möjliga att granska. Detta är en rekommendation i underlaget `[ARG]`, inte svensk lagtext. Källa: lokal analys (2026-11-24).

---

## 5. Internationella exempel som nämns i underlaget

- **Danmark:** Statens IT utvecklar en öppen arbetsplatsmiljö kallad SIA Open. Källa: NOSADs oktobernummer, https://nosad.se/news_oct_2026 (2026-11-25) `[E-secondary][?]` – den bakomliggande OSOR-sidan lästes inte direkt.
- **Ukraina:** öppen källkod används för digital rådighet och offentliga tjänster enligt en OSOR-sammanfattning. Källa: https://nosad.se/news_oct_2026 (2026-11-25) `[E-secondary][?]`.
- **EU:** Interoperable Europe Portal samlar lösningar och EIF. Källa: https://eur-lex.europa.eu/EN/legal-content/summary/interoperable-europe-act.html (2026-11-25).

---

## 6. Vad vi **inte** påstår

- Ingen närvaro, anmälan, resa eller möte vid Klirrhack 2027. `[?]`
- Ingen kontakt med Sambruk, DIGG, DFRI, eSam eller andra organisationer från detta underlag.
- Ingen svensk myndighet har godkänt eller stött de fiktiva rollpersonerna.
- Inga uppgifter om enskilda personer samlas in här.

---

## 7. Var finns mer?

- Fullt kunskapspaket med källkoder: `project-loop/steps/02-network/INTEROPERABILITET_KLIRRHACK.md`
- NOSAD-importunderlag (ingen import gjord): `project-loop/steps/02-network/NOSAD_IMPORT.md`
- Finansiering: `project-loop/steps/02-network/FINANSIERINGSKARTA.md`
- Register över organisationer: `project-loop/reports/INTERESSENTREGISTER_2026-11-25.md`
- Underlag om Rådig och evenemanget: `research-project/reports/public-sources/RADIG_KLIRR_HACK_DFRI_ANALYSIS_2026-11-24.md`
