# Kunskapspaket: svensk interoperabilitet inför Klirrhack 2027

**Datum:** 2026-11-25  
**Syfte:** Underlag till de **fiktiva** personasna Tyler Kane och Doris Fleur X (projektets namnform; masterprompten skriver "Doris Flör", se D-005).  
**Status:** Kunskapspaket/underlag. **Ingen anmälan, närvaro, resa, möte eller kontakt är påstådd eller genomförd.** Personerna är fiktiva enligt `project-loop/DECISIONS.md` D-006; inga externa konton, e-postmeddelanden eller ansökningar har skapats enligt D-008.  
**Taggar:** `[E]` = offentlig källa läst, `[E-secondary][?]` = sparad/mutable webb eller andrahandskälla, `[I]` = tolkning, `[ARG]` = rekommendation, `[ANTAGANDE]` = antagande, `[?]` = osäkert.

> **Läsregel:** Varje faktiskt påstående har en källkod i bracket. Koderna listas med **exakt URL och åtkomstdatum** i §9. Lokala källor listas med filväg och datum.

---

## 1. Kort läge

Klirrhack 2027 är enligt den sparade analysen planerat till **16–17 februari 2027, Glashuset i Gislaved**, kl. 09:00 dag 1 till 15:00 dag 2, med 300 platser och anmälan 1 november–21 december 2026 (eller tidigare vid fullt). Arrangörer på den citerade sidan: Sambruk, Gislaveds kommun och Region Jönköpings län. `[E-secondary][?] [S19][S20]`

Utmaningen beskrivs i samma underlag som ett scenario där en fiktiv offentlig organisation ska fortsätta fungera när en leverantör stänger av tjänster inom 72 timmar. Rådig beskrivs där som ett styrnings- och analysprojekt, inte en produktleverantör. `[E-secondary][?] [S18][S20]`

**Fiktionsram:** Tyler Kane och Doris Fleur X kan använda paketet som *rollunderlag* för en presentation eller ett rollspel. Det är inte deras verkliga erfarenhet, och ingenting här gör dem behöriga, anställda, anmälda eller närvarande. `[I] [S21]`

---

## 2. Svensk digital förvaltning – den nationella ramen

- Digg (Myndigheten för digital förvaltning) har till uppgift att **samordna och stödja den förvaltningsgemensamma digitaliseringen**, ansvara för den förvaltningsgemensamma digitala infrastrukturen och bistå regeringen med underlag, uppföljning och analys. `[E] [S01]`
- Digg ansvarar för **Ena – Sveriges digitala infrastruktur**, som underlättar digitalisering av offentlig förvaltning och förenklar vardagen för medborgare och företag. Digg arbetar nationellt **och internationellt** för ökad användning av gemensamma lösningar. `[E] [S01]`
- Digg ger stöd till andra att **dela och använda data strukturerat** och är en av Sveriges beredskapsmyndigheter inom sektorn Försörjning av grunddata. `[E] [S01]`
- Digg lyder under Finansdepartementet; myndighetens instruktion och det årliga regleringsbrevet styr verksamheten. `[E] [S01]`
- Regeringens **digitaliseringsstrategi 2025–2030** är uppbyggd kring fem områden: digital kompetens, näringsliv, offentlig förvaltning, välfärd och konnektivitet. AI, data och säkerhet löper som horisontella perspektiv. `[E] [S04]`
- Regeringens proposition **prop. 2025/26:244** ("Nya krav på interoperabilitet vid datadelning inom den offentliga förvaltningen") föreslår en ny lag för statliga myndigheter under regeringen, kommuner, regioner och kommunala bolag vid återkommande eller omfattande datadelning. Propositionen anger undantag av hänsyn till Sveriges säkerhet, cybersäkerhet, personuppgiftsskydd och rimlig kostnad i förhållande till samhällsnytta. `[E] [S05]`
- Regeringens sida för dokumentet listar **riksdagsbeslut 10 juni 2026**; propositionen anger **15 augusti 2026** som föreslaget ikraftträdande. `[E] [S05]`
- Diggs färdplanesida säger att arbetet med **styrning av interoperabilitet vid datadelning startar när lagstiftningen träder i kraft**, och att Digg då får mandat att meddela föreskrifter om nationella interoperabilitetslösningar. `[E] [S06]` **Exakt ikraftträdande och föreskriftsstatus bör kontrolleras mot SFS före ett faktiskt påstående i en presentation.** `[?]`

---

## 3. Interoperabilitetsstrategi och ramverk

- Det svenska **ramverket för digital samverkan** tar utgångspunkt i European Interoperability Framework (EIF), är sektorsoberoende, nationellt anpassat och riktar sig till offentliga organisationer. Det ersätter principerna i "Vägledande principer för digital samverkan". `[E] [S07]`
- DIGG beskriver öppen programvara som ett stöd för interoperabilitet: öppenhet, återanvändning före nyutveckling, öppna format/standarder vid anskaffning och säkerhet under hela livscykeln är principer i myndighetens styrdokument. `[E] [S10]`
- I Diggs äldre riktlinje definieras **öppen standard** utifrån fyra EIF 1.0-kriterier: öppen beslutsprocess i icke-vinstdrivande organisation, publicerad specifikation till kostnadsfritt pris eller självkostnadspris, immateriella rätter tillhandahållna utan ersättning, och inga begränsningar för användning/återanvändning. `[E][?]` – dokumentet är från 2022; kontrollera mot ny EIF-version. `[S10]`
- Diggs vägledning om att tillgängliggöra information säger att **öppenhet ska vara standard**, att information ska publiceras i ursprunglig form, och att öppna, standardiserade, maskinläsbara format, API:er, specifikationer och beständiga identifierare ska eftersträvas. `[E] [S11]`
- Nationell **REST API-profil** och API Playbook finns som rekommendationer för offentliga aktörer; profilen togs fram i samverkan mellan Digg, Bolagsverket, Arbetsförmedlingen, Lantmäteriet och E-hälsomyndigheten. `[E] [S08]`
- Version **2.0.0** av REST API-profilen (17 juni 2026) tillför området spårbarhet/korrelation och en webbtjänst för validering av OpenAPI-specifikationer; det öppna verktyget REST API-Profil Lint Processor vidareutvecklas. `[E] [S09]`

---

## 4. DIGG och myndigheters digitala samverkan

- **Ena** beskrivs av Digg som den förvaltningsgemensamma digitala infrastrukturen; arbetet leds och samordnas av Digg. I en Digg-artikel från 2023 anges tolv myndigheter, fjorton byggblock, fem grunddatadomäner och sex kompetensområden i dåvarande arbete. `[E][?]` – siffrorna är från 2023 och kan ha ändrats. `[S14]`
- Exempel på samverkansaktörer i Ena-artikeln: Arbetsförmedlingen, Bolagsverket, Domstolsverket, E-hälsomyndigheten, Försäkringskassan, Lantmäteriet, MSB, Riksarkivet, Skatteverket, SCB och Trafikverket. `[E][?] [S14]`
- **eSam** beskrivs i Diggs årsredovisning 2024 som ett medlemsdrivet program för samverkan mellan myndigheter; där anges 41 myndigheter. `[E-secondary][?]` – siffran är från 2024. `[S12c]`
- **Säker digital kommunikation (SDK)** beskrivs i ett Digg-underlag som infrastruktur för utbyte av känslig och sekretessklassad information; även privata utförare med offentligt finansierade uppdrag kan ansluta. `[E] [S14b]`
- NOSADs oktobernummer återger att eSam rekommenderar myndigheter att ta fram policyer för öppen källkod och att delta aktivt i open source-communityn. `[E-secondary][?] [S15]`

---

## 5. Informationsutbyte, identitet och behörighet

- Digg ansvarar för den svenska **eIDAS-noden**, som möjliggör elektronisk identifiering mellan svenska e-tjänster och andra länders e-legitimationer. `[E] [S12a]`
- **Sweden Connect** är Diggs infrastruktur för e-legitimering: en koppling mellan organisationer och e-legitimeringsutfärdare, med svenska och utländska e-legitimationer (exempelvis BankID och Freja eID). `[E] [S12a]`
- Sweden Connect består enligt Digg av tekniskt ramverk, metadata/kontaktinformation om anslutna aktörer och Sveriges kontaktpunkt (Single Point of Contact) inom eIDAS. Sidan anger att standarden **SAML 2.0** stöds. `[E] [S12b]`
- Digg granskar och godkänner svenska e-legitimationer enligt **Tillitsramverket för Svensk e-legitimation**; den tekniska driften av Sweden Connect sköts av SUNET på uppdrag av Digg. `[E] [S12a][S12b]`
- En Digg-rapport (december 2025) beskriver ett regeringsuppdrag till Digg och E-hälsomyndigheten att utveckla en **sammanhållen infrastruktur för identitets- och behörighetshantering** inom Ena. Rapporten nämner befintliga federationer: Sweden Connect, **Sambi** (hälso- och sjukvård) och **Skolfederation**. `[E] [S13]`
- **Klirrhack-relevans:** den sparade analysen bedömer identitetssteget som det största rättsrisikosteget och rekommenderar federerad inloggning, minimal loggning, ändamålsbegränsning, tydlig tidsbegränsning och en granskningsbar "break glass"-ordning. Detta är `[ARG]`, inte ett faktum om evenemanget. `[S20]`

---

## 6. Civilsamhällets roll

- Masterprompten anger Sambruk, DFRI, Friends of Hilma Foundation / Hilmas vänner och Safe Trade Media som startintressenter och efterlyser digital samverkan, digital självbestämmanderätt, medlemsregister, e-legitimation, digitala allmänningar och lokal AI-agenter. `[I – projektinternt] [S21]`
- EU:s **CERV-2026-CITIZENS-VALUES** är en utlysning för civila samhällsorganisationer som arbetar med att skydda och främja unionens värden, utformad som ett anrop till **förmedlare** med finansiellt stöd till tredje parter. `[E] [S22]` Detta visar en institutionell form för civilsamhällets roll, men utgör **inte** en ansökan eller ett partnerskap. `[I]`
- NOSAD beskriver sig som bevakning av öppen data och öppen källkod och publicerar månatliga nyhetsbrev; webbplatsen driftas av Arbetsförmedlingen enligt sidan. `[E-secondary] [S16]`
- Rådig-analysen ser DFRI:s bidrag som rättighetskrav på kontinuitetslösningar: lawful activation, minimal och granskningsbar identitetsbindning, öppna standarder, reversibilitet och ingen permanent undantagsövervakning. `[ARG/I] [S20]`

---

## 7. Internationella jämförelser och öppen källkod

**EU-nivå**

- Förordning **(EU) 2024/903**, Interoperable Europe Act, syftar till hög interoperabilitet i offentlig sektor i unionen och underlättar gränsöverskridande dataflöden. Den är i kraft, tillämpas från **12 juli 2024**, med vissa bestämmelser (art. 3.1–3.4 och art. 17) från **12 januari 2025**, och är bindande och direkt tillämplig i medlemsstaterna. `[E] [S02]`
- Förordningen inför **interoperabilitetsbedömningar** för nya eller ändrade digitala system, identifiering av berörda intressenter och delning av interoperabilitetslösningar – inklusive ramverk, specifikationer, standarder, tjänster, applikationer och **källkod**. Kommissionen driver **Interoperable Europe Portal**, där EIF och lösningar publiceras. `[E] [S03]`

**Nationella exempel (via NOSADs sammanfattning)**

- Danmark: Statens IT utvecklar **SIA Open**, en arbetsplatsmiljö baserad på öppen källkod; NOSAD anger att Færdselsstyrelsen testat lösningen sedan december 2025 och att målet är att alla 166 organisationer som använder Statens IT ska kunna beställa den från februari 2027. `[E-secondary][?] [S15]` Bakomliggande OSOR-sida lästes inte direkt.
- Ukraina: NOSAD sammanfattar en OSOR-landsrapport där öppen källkod används inom digital myndighetsservice, gemensam infrastruktur och offentlig upphandling, trots att landet enligt sammanfattningen saknar en sammanhållen nationell öppen källkodsstrategi. `[E-secondary][?] [S15]`

**Relevanta öppna projekt / komponenter**

| Initiativ | Vad källan säger | Källa |
|---|---|---|
| **Rådig** (`Radig/radig`) | Öppet samarbete initierat av Sambruk. Edition 2026.09 med faktiskt cutoff 9 september 2026; text CC BY 4.0, data CC0 1.0, kod EUPL-1.2. | `[E-secondary][?] [S18][S20]` |
| **Forgejo PoC / Ena kodsamverkansplattform** | Testas öppet med Forgejo, Försäkringskassan som teknisk värd och Digg som tjänsteleverantör; dokumentation i öppen wiki. | `[E-secondary][?] [S15]` |
| **REST API-Profil Lint Processor / RAP-LP** | Öppet källkodsverktyg respektive valideringstjänst för OpenAPI mot nationell profil. | `[E] [S09]` |
| **Sweden Connect referenstjänst** | Testtjänst vars källkod enligt Digg är öppen och finns på GitHub. | `[E] [S12a]` |
| **Offentligkod.se / EU Open Source Solutions Catalogue** | NOSAD anger att katalogen ingår i EU:s katalog. | `[E-secondary][?] [S15]` |

---

## 8. Sammanställning för rollpersonerna `[I][ARG]`

**Fem punkter att kunna:**

1. Sverige har en nationell strategi (2025–2030) och ett förvaltningsgemensamt ramverk som bygger på EU:s EIF. `[S04][S07]`
2. Digg samordnar Ena, ansvarar för eIDAS-noden och Sweden Connect och får (enligt färdplanen) mandat kring interoperabilitetskrav när lagstiftningen trätt i kraft. `[S01][S06][S12b]` `[?]`
3. Öppna standarder, öppna API:er och återanvändning är uttryckliga principer i Diggs styrdokument och vägledningar. `[S08][S09][S10][S11]`
4. EU-regeln (2024/903) gör interoperabilitetsbedömning och delning av lösningar – inklusive källkod – till en del av offentlig digitalisering. `[S02][S03]`
5. Civilsamhällets roll kan vara att ställa rättighetskrav på tekniken, inte bara att leverera kod. `[S20][S22]`

**Föreslagen ram för Klirrhack (fiktivt rollunderlag):** *"Rådighet utan nya centrala maktkoncentrationer – kontinuitet som går att granska, avsluta och bestrida."* Ordagrant från den lokala Rådig-analysen som DFRI-förslag. `[S20]`

**Frågor att ställa arrangören (ej ställda):**

1. Vilken forge är kanonisk för bidrag – Codeberg eller Codefloe? Analysen visar att båda förekommer och att ingen synkronisering är dokumenterad i sparade källor. `[E-secondary][?] [S18][S20]`
2. Var är bedömningskriterierna ("kommer" i sparad text)? `[E-secondary][?] [S19]`
3. Kan en rättighetschecklista tas in i Rådigs mallkatalog? `[ARG]`

---

## 9. Källförteckning – exakta URL:er och åtkomstdatum

| Kod | Källa | URL / lokal fil | Åtkomst |
|---|---|---|---|
| S01 | Digg, "Vårt uppdrag" | https://www.digg.se/om-oss/vart-uppdrag | 2026-11-25 |
| S02 | EUR-Lex, Regulation (EU) 2024/903 (ELI) | https://eur-lex.europa.eu/eli/reg/2024/903 | 2026-11-25 (direkt textutdrag gav tomt; innehåll verifierat via officiell EUR-Lex-sökning) `[?]` |
| S03 | EUR-Lex, sammanfattning Interoperable Europe Act | https://eur-lex.europa.eu/EN/legal-content/summary/interoperable-europe-act.html | 2026-11-25 |
| S04 | Regeringen, Digitaliseringsstrategin 2025–2030 | https://www.regeringen.se/regeringens-politik/digitaliseringsstrategin-2025-2030 | 2026-11-25 |
| S05 | Regeringen, prop. 2025/26:244 | https://www.regeringen.se/rattsliga-dokument/proposition/2026/04/prop.-202526244 | 2026-11-25 |
| S06 | Digg, Styrning av interoperabilitet vid datadelning | https://www.digg.se/styrning-och-samordning/ena---sveriges-digitala-infrastruktur/strategisk-fardplan-ena-2030/styrning-av-interoperabilitet-vid-datadelning | 2026-11-25 |
| S07 | Digg, Svenskt ramverk för digital samverkan | https://www.digg.se/kunskap-och-stod/svenskt-ramverk-for-digital-samverkan | 2026-11-25 |
| S08 | Digg, API-hantering | https://www.digg.se/digitala-tjanster/api-hantering | 2026-11-25 |
| S09 | Digg, nyhet REST API-profil 2.0.0 | https://www.digg.se/om-oss/nyheter/oppna-och-delade-data/nyheter/2026-06-17-digg-starker-rest-api-profilen-med-stod-for-sparbarhet-och-ny-valideringstjanst | 2026-11-25 |
| S10 | Digg, Policy för öppen programvara / Riktlinje för öppen programvara | https://www.digg.se/download/18.7069295d19e7ac21c04747/1780485334476/Policy%20f%C3%B6r%20%C3%B6ppen%20programvara.pdf ; https://www.digg.se/download/18.7069295d19e7ac21c04747/1780485362831/Riktlinje%20f%C3%B6r%20%C3%B6ppen%20programvara.pdf | 2026-11-25 (via officiell sökning) |
| S11 | Digg, Vägledning för att tillgängliggöra information | https://www.digg.se/kunskap-och-stod/oppna-och-delade-data/vagledning-for-att-tillgangliggora-information | 2026-11-25 |
| S12a | Digg, Inför anslutning till Sweden Connect | https://www.digg.se/digitala-tjanster/e-legitimering/sweden-connect---diggs-infrastruktur-for-e-legitimering/infor-anslutning-till-sweden-connect | 2026-11-25 |
| S12b | Digg, Diggs infrastruktur för e-legitimering | https://www.digg.se/digitala-tjanster/e-legitimering/om-diggs-avtal-och-infrastruktur-inom-elektronisk-identifiering/sweden-connect---diggs-infrastruktur-for-e-legitimering/diggs-infrastruktur-for-e-legitimering | 2026-11-25 |
| S12c | Digg, Årsredovisning 2024 | https://www.digg.se/download/18.25d25777194e27ce366961/1740146368103/A%CC%8Arsredovisning%202024%20Myndigheten%20fo%CC%88r%20digital%20fo%CC%88rvaltning.pdf | 2026-11-25 (via officiell sökning) |
| S13 | Digg, En sammanhållen infrastruktur för identitet och behörighetshantering | https://www.digg.se/download/18.2627275e19af07e5bf02e5/1765541864510/En%20sammanh%C3%A5llen%20infrastruktur%20f%C3%B6r%20identitet%20och%20beho%CC%88righetshantering.pdf | 2026-11-25 |
| S14 | Digg, Ena – digital infrastruktur som byggs gemensamt | https://www.digg.se/om-oss/nyheter/ena---sveriges-digitala-infrastruktur/nyheter/2023-08-02-ena---digital-infrastruktur-som-byggs-gemensamt | 2026-11-25 |
| S14b | Digg, Bilaga – Lösningar i Ena | https://www.digg.se/download/18.41bb5ce61939e3df6684131/1738330308588/Bilaga_Lo%CC%88sningar%20i%20Ena.pdf | 2026-11-25 |
| S15 | NOSAD, Nyhetsbrev oktober 2026 | https://nosad.se/news_oct_2026 | 2026-11-25 |
| S16 | NOSAD, nyhetsbrevsindex | https://nosad.se/news | 2026-11-25 |
| S18 | Rådig på Codefloe | https://codefloe.com/radig ; läsplats https://radig.codefloe.page/radig/ | 2026-11-24, via sparade captures enligt S20 |
| S19 | Sambruk Indico, KLIRR-hack 2027 | https://konferens.sambruk.se/event/253/ | 2026-11-24, via sparad capture enligt S20 |
| S20 | Lokal analys: Rådig / KLIRR-hack 2027 | `research-project/reports/public-sources/RADIG_KLIRR_HACK_DFRI_ANALYSIS_2026-11-24.md` | 2026-11-24 |
| S21 | Lokala beslut och masterprompt | `project-loop/DECISIONS.md` (D-005, D-006, D-008), `project-loop/MASTERPROMPT.md` | 2026-11-25 |
| S22 | EU Funding & Tenders Portal, CERV-2026-CITIZENS-VALUES | https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/CERV-2026-CITIZENS-VALUES | 2026-11-25 (dynamisk sida; verifierat via officiell sökresultat) `[?]` |

---

## 10. Osäkerheter `[?]`

- Evenemangsdetaljer är föränderliga; bedömningskriterier, startpaket och den fiktiva organisationsbeskrivningen var inte publicerade i de sparade sidorna.
- Det är inte fastställt om Codefloe är formell efterföljare eller bara förvaltarens spegel; hackningssidan länkade fortfarande Codeberg i sparad text.
- Exakt status för den nya interoperabilitetslagen bör kontrolleras mot SFS innan den används som påstående i en offentlig presentation.
- Siffror om antal myndigheter och Ena-byggblock är daterade 2023–2024.
- De flesta NOSAD-punkter är sammanfattningar av andra källor, inte direktlästa originaldokument.
- DFRI:s interna mandat och prioriteringar har inte tillhandahållits; lämplighetsbedömningen är `[I]`/`[ARG]`.
- Ingen person i detta paket är kontaktad. Ingen anmälan till Klirrhack har gjorts.
