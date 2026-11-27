# Prioriterad projektrapport – steg 3, 2026-11-25

**Steg:** `project-loop/MASTERPROMPT.md` §3, steg 3 – projektformulering och prioritering.  
**Aktivering:** användaren aktiverade steg 3 2026-11-25. Steg 4–9 är **fortfarande inte aktiverade**.  
**Status:** **[FÖRSLAG]** – prioriteringen är ett beslutsunderlag, inte ett beslut om samverkan, ansökan, kontakt eller implementation.  
**Taggar:** `[E]` = verifierat i lokal fil/officiell källa, `[I]` = tolkning, `[ARG]` = rekommendation, `[ANTAGANDE]` = koppling som kräver mänskligt beslut, `[?]` = osäkert eller ej specificerat.

> Tyler Kane och Doris Fleur X är fiktiva personas enligt `DECISIONS.md` D-006. Masterpromptens stavning "Doris Flör" dokumenteras i D-005 men används inte som projektform här. Ingen persona påstås vara sökande, partner, anställd, anmäld eller behörig. Inga externa kontakter, e-postmeddelanden, ansökningar, konton eller transaktioner har gjorts (D-008).

---

## 1. Prioriterad sammanfattning `[ARG][I]`

| Rang | ID | Projekt | Kort behov | Poäng | Rekommenderad nästa åtgärd |
|---:|---|---|---|---:|---|
| 1 | P-01 | Hilma Papers sök- och assistentmodul | Citeringsbar sökning i 384 dokument/7 210 sidor utan att röra original | 4,50 | Gör färdigt beslutsunderlag för lokal prototyp; klargör rättigheter före publicering |
| 2 | P-02 | Klirrhack 2027 – interoperabilitetspaket | Tidskänsligt, begripligt underlag om svensk interoperabilitet | 4,30 | Uppdatera paketet lokalt; besvara öppna källfrågor utan att kontakta arrangören |
| 3 | P-04 | Gemensamt provenans- och evidenskontrakt | Samma regler för original, OCR, tolkning och metadata hos alla intressenter | 4,10 | Enas om minimalt kontrakt och syntetiska fixtures |
| 4 | P-03 | Öppen Cosmic Block-referensimplementation | Reproducerbar, verifierbar modell och byte-lagring | 4,05 | Packa dokumentation/tester för godkänd publicering; inget nytt repo utan beslut |
| 5 | P-07 | Kulturarvskonsortium – ansökningsberedskap | Möjlig VR/Horizon-väg kräver identifierad forskare och värd | 3,35 | Begär endast organisationsnivåuppgifter; ingen ansökan eller kontakt |
| 6 | P-05 | Tillgängliggörande genom offline-narration | Ljud av granskade, rättighetsklarerade utdrag | 3,30 | Vänta på rättighetsbeslut och röstval |
| 7 | P-06 | NOSAD-importpipeline | Återkommande, bevarad omvärldsbevakning saknar lokal källa | 3,15 | Tillhandahåll källa/export eller godkänn public-web-import |

**Startrekommendation `[ARG]`:** P-01 som huvudspår och P-02 som tidskänsligt parallellspår. P-04 bör utformas som gemensamt kontrakt så att P-01 och P-03 inte får egna, oförenliga regler. P-07 får **inte** behandlas som ansökningsbart förrän `RES-04` är specificerad. P-05 och P-06 är beroende av beslut som inte fattats här.

Vid lika poäng gäller tie-break: masterpromptens särskilda uppdrag, antal intressenter och lägst extern gate-risk. Detta är en metodregel, inte ett påstående om verklighet. `[I]`

---

## 2. Bedömningsmodell `[I][ARG]`

Poängskala 1–5 för varje kriterium. Viktad summa redovisas på 5,0-skala.

| Kriterium | Vikt | Fråga |
|---|---:|---|
| Befintligt underlag | 20 % | Finns verifierade lokala filer att bygga på? |
| Intressentnytta | 20 % | Hur tydligt svarar projektet mot registerets organisationer? |
| Återanvändning | 20 % | Kan kärnan flyttas mellan Sambruk, DFRI, Friends of Hilma och Safe Trade Media? |
| Tidskänslighet | 15 % | Finns ett datum eller en händelse som påverkar förberedelsebehovet? |
| Resurspassning | 15 % | Räcker nuvarande lokala kompetens/verktyg utan externa konton? |
| Gate-risk (inverterad) | 10 % | Hur liten är risken att projektet stoppas av rättigheter, behörighet eller saknad indata? |

Rå poäng per projekt finns i `PROJEKTPORTFOLJ_STEG3_2026-11-25.json`. Poängen är en **prioriteringshjälp**, inte en affärsmässig eller juridisk bedömning. `[I]`

---

## 3. Projektblad

### P-01 – Hilma Papers sök- och assistentmodul `[FÖRSLAG]`

**Problem/behov `[E][I]`:** Arkivet innehåller 384 dokument och 7 210 PDF-sidor enligt `research-project/sources/hilma-papers/manifest.json`; FTS5-indexet har 4 099 chunks och policyn "keyword retrieval is authoritative and citation-first" enligt `index-report.json`. Samtidigt finns OCR/native-varianter (t.ex. 460/480) och privata maskinöversättningar som inte får bli citat. Forskare och Safe Trade Media behöver svara med dokument-ID, PDF-sida, URL och verifierbar sträng – inte med obestyrkt AI-text.

**Målgrupper `[I]`:** Friends of Hilma (ORG-03), Safe Trade Media (ORG-04), `research-project/` (RES-01), `notes-assistant/` (RES-02). Ackrediterade forskare nämns endast som organisationsnivåresurs `RES-04` och är overifierad enligt D-010.

**Förväntade resultat `[FÖRSLAG]`:**
1. Lokal-first modul med sex separata lager: original, OCR/native, korrigering, AI-tolkning, metadata, forskningsresultat.
2. CLI och APIförslag där varje svar bär `document_id`, PDF-sida, `source_url`, `text_sha256` och evidens-tagg.
3. Append-only diff för korrigeringar; 460/480-varianten bevaras som två vittnen, inte automatiskt rättas.
4. Valfritt LSA-lager återanvänt från `notes-assistant/notes_model.py`; vektorträffar förblir kandidater.
5. Deterministiska tester: hashkontroll, immutable-source-write avvisas, citat ogiltiga vid hash-miss.

**Beroenden/resurser `[E][FÖRSLAG]`:** `research-project/tools/hilma_archive.py`, `process_archive.py`, `search_archive.py`, `verify_archive.py`, `PROTOCOL.md`, `indexes/hilma-papers/`, `notes-assistant/notes_model.py`, `evidence/`. Python, PyMuPDF, Tesseract `swe+eng`, SQLite FTS5, NumPy/SciPy för valfritt LSA-lager. Ingen extern LLM i standardläge.

**Intressentkoppling `[ANTAGANDE]`:** ORG-03, ORG-04, RES-01, RES-02; sekundärt ORG-01 och ORG-02 som mönster för "original immutable + derived index".

**Finansieringskoppling `[ANTAGANDE][?]`:** F02 (VR RCH), F06 (VR humaniora), F07 (Horizon HERITAGE), F05/F08 (forskningsinfrastruktur). Ingen av kopplingarna är ett behörighetsbeslut; se `FINANSIERINGSKARTA.md`.

**Grindar `[?]`:** rättighetsbeslut för publicering av utdrag/PDF:er; mänsklig granskning av korrigeringar; `RES-04` måste specificeras innan någon research-framing används. Ingen kod har exporterats eller publicerats i steg 3.

---

### P-02 – Klirrhack 2027: interoperabilitetspaket `[FÖRSLAG]`

**Problem/behov `[E-secondary][?][I]`:** `INTEROPERABILITET_KLIRRHACK.md` sammanfattar DIGG, Ena, REST API-profil 2.0.0, Sweden Connect, Interoperable Europe Act och Rådig med exakta källor. Det saknas fortfarande svar på kanonisk forge (Codeberg/Codefloe), bedömningskriterier och exakt status för interoperabilitetslagen mot SFS. Internationella deltagare behöver en kort begriplig introduktion; fiktiva personas behöver rollunderlag, inte verklig auktoritet.

**Målgrupper `[I]`:** Sambruk (ORG-01), DFRI (ORG-02), Rådig (PROJ-01), Klirrhack 2027 (PROJ-02), internationella deltagare `[ANTAGANDE]`.

**Förväntade resultat `[FÖRSLAG]`:**
1. Uppdaterad kunskapspaketsversion med källkod, URL och kontroldatum oförändrade.
2. En-sidig internationell intro på engelska med fem punkter att kunna.
3. Rättighetschecklista: federerad inloggning, minimal loggning, ändamålsbegränsning, reversibilitet, granskningsbar "break glass".
4. Syntetiska fixtures utan personuppgifter för rådighetsscenario.
5. Öppen frågelista som **inte** besvaras med gissningar.

**Beroenden/resurser `[E]`:** `INTEROPERABILITET_KLIRRHACK.md` §§1–10, `INTERNATIONELL_INTRO.md`, `NOSAD_IMPORT.md`, lokal Rådig-analys (S20). Officiella Digg/EU/regeringskällor. Ingen anmälan, resa, närvaro eller kontakt krävs för lokal förberedelse.

**Intressentkoppling `[ANTAGANDE]`:** ORG-01, ORG-02, PROJ-01, PROJ-02, TEK-01, TEK-04, ORG-05/ORG-06 som källaktörer.

**Finansieringskoppling `[ANTAGANDE][?]`:** indirekt F01 (kräver svensk industriaktör), F03 (kräver företag), F04 (civilsamhälle). Inget spår är ansökningsbart i detta underlag.

**Grindar `[?]`:** evenemangsdetaljer är föränderliga; ingen part har gett mandat att kontakta arrangören (D-008); personas får inte framställas som anmälda.

---

### P-04 – Gemensamt provenans- och evidenskontrakt `[FÖRSLAG]`

**Problem/behov `[E][I]`:** `PROTOCOL.md`, `evidence/`, `novel/tools/verify_quotes.py` och Hilma-specifikationen beskriver redan hashar, locators och evidence-taggar, men varje delprojekt har sitt eget uttryck. Utan ett gemensamt minimalt kontrakt riskerar en sökträff eller AI-sammanfattning att flyttas till forskningsresultat utan märkning.

**Målgrupper `[I]`:** alla fyra startintressenter ORG-01–ORG-04 samt RES-01.

**Förväntade resultat `[FÖRSLAG]`:**
1. Versionsmärkt kontrakt med fält `document_id`, `page`, `source_url`, `sha256`, `source_method`, `evidence_tag`, `transform_chain`, `review_status`.
2. Regeln "hash bevisar bytes, inte sanning" dokumenterad och testad.
3. Syntetiska fixtures med CC0; inga riktiga ärendedata eller personuppgifter.
4. Gemensam licensmatris: kod, dokumentation, data, modellvikter, original.
5. Validator som kan köras lokalt av alla fyra organisationer utan nätverk.

**Beroenden/resurser `[E]`:** `research-project/PROTOCOL.md`, `research-project/evidence/`, `novel/tools/verify_quotes.py`, `project-loop/research/GITHUB_REPO_FORSLAG.md`, `ATERANVANDBARA_KOMPONENTER.md`. Python-standardbiblioteket räcker för validatorn.

**Intressentkoppling `[ANTAGANDE]`:** ORG-01, ORG-02, ORG-03, ORG-04, RES-01; TEK-04 som publiceringsmönster.

**Finansieringskoppling `[ANTAGANDE][?]`:** F05/F08 (infrastruktur), F12 (nätverk, historiskt mönster), F02 (kulturarv). Ingen ansökan.

**Grindar `[?]`:** licensval per organisation; mänskligt beslut om gemensam forge/repo; ingen externalisering i steg 3.

---

### P-03 – Öppen Cosmic Block-referensimplementation `[FÖRSLAG]`

**Problem/behov `[E][I]`:** TypeScript-modellen (Level 1–5, validering 0–9, nollinitiering, konfigurerbara dimensioner) och C11-implementationen (mappad fil, offset-map, 87 tester, header/checksum) finns redan och är verifierade. Det saknas ett samlat, godkänt publiceringspaket som visar att matematiken är oberoende av renderingen och att lagringen kan kontrolleras på disk.

**Målgrupper `[I]`:** Sambruk (ORG-01), DFRI (ORG-02), Friends of Hilma (ORG-03) som referens för integritet och reproducerbarhet `[ANTAGANDE]`.

**Förväntade resultat `[FÖRSLAG]`:**
1. Dokumentationspaket med arkitektur, API, datamodell, installationsinstruktioner och release-checklista.
2. Verifieringsrapport: `npx tsc --noEmit`, `npm test`, `make test` (87 kontroller), byte 5209 i 28 672-byte-filen.
3. Tydlig avgränsning: Levels 7–9 orörda; Level 8 är endast `under_review` i `PAPER2.md`.
4. Inga visuella påståenden om *The Key* utan mänsklig bildkontroll.

**Beroenden/resurser `[E]`:** `src/`, `src/structures/collection/`, `src/validation/`, `src/visualization/`, `cosmic-block-c/src/`, `cosmic-block-c/tests/`, `refinement/`, `tools/`. Node/TypeScript/Three.js; C11 och `make`; w64devkit på denna maskin.

**Intressentkoppling `[ANTAGANDE]`:** ORG-01, ORG-02, ORG-03; inte Hilma-data utan integritetsmönster.

**Finansieringskoppling `[ANTAGANDE][?]`:** F01/F03 endast vid ny partnerkonstellation; F08 indirekt. Ingen koppling är ansökningsbar här.

**Grindar `[?]`:** licensbeslut (MIT/CC BY föreslaget), externt repo kräver godkännande, Rocq-beviset är inte maskinkontrollerat i denna miljö.

---

### P-07 – Kulturarvskonsortium: ansökningsberedskap `[FÖRSLAG][ANTAGANDE][?]`

**Problem/behov `[E][I]`:** `FINANSIERINGSKARTA.md` F02 anger skisser 2027-01-11/18 och full ansökan 2027-06-16/23, men kräver svensk doktorsexamen, VR-godkänd medelsförvaltare, anställning minst 20 % och internationellt konsortium om 3–7 partner. Användaren uppger att ackrediterade forskare finns i nätverket (D-010, `RES-04`), men uppgiften är overifierad och specificerar inte personer eller institutioner.

**Målgrupper `[I][?]`:** RES-01, RES-04 (organisationsnivå), ORG-03; potentiella internationella partner **ej fastställda**.

**Förväntade resultat `[FÖRSLAG]`:**
1. Forskningsfråga formulerad kring citeringsbarhet, provenans och kulturarv – utan att avgöra tolkningen av Hilmas verk.
2. Partner-/rollmatris med tomma fält tills uppgifter lämnas; inga personuppgifter.
3. Krysslista mot F02, F06 och F07 med deadline och behörighetskrav oförändrade.
4. Beslut under D-008: ingen kontakt, ingen ansökan, inget konto.

**Beroenden/resurser `[E][?]`:** `FINANSIERINGSKARTA.md` §1b/F02–F07, `COORDINATOR_STATUS.md`, `RES-04`. Saknar: institution, VR-godkänd medelsförvaltare, examens-/anställningsuppgifter, samtycke, konsortium.

**Intressentkoppling `[ANTAGANDE]`:** ORG-03, RES-01, RES-04; sekundärt ORG-04 för publiceringsverktyg.

**Finansieringskoppling `[ANTAGANDE][?]`:** F02 (närmast i tid), F06, F07. Ingen av dem är i detta underlag mer än bevakning.

**Grindar `[?]`:** alla behörighetsvillkor är öppna. Projektet får inte kallas "ansökan" eller "konsortium" i extern text före mänskligt beslut.

---

### P-05 – Tillgängliggörande genom offline-narration `[FÖRSLAG]`

**Problem/behov `[E][I]`:** `narration/` har Piper/SAPI-providerkontrakt, segmentcache, hashad kanonisk text och separat röst för registrerade Hilma-citat. `AGENTS.md` och `notes-assistant/README.md` varnar för privata maskinöversättningar och rättigheter. Utan rättighetsbeslut får varken långa utdrag, översättningar eller röstimitering publiceras.

**Målgrupper `[I]`:** Friends of Hilma (ORG-03), Safe Trade Media (ORG-04), DFRI (ORG-02) som offline-teknikreferens.

**Förväntade resultat `[FÖRSLAG]`:**
1. Arbetsflöde där endast korta, källmärkta och granskade utdrag får narreras.
2. Metadata med kanonisk text-hash, `review_status`, röstprofil och utelämnat provenansintervall (`--story-only`).
3. Dokumenterat val av talekonstnärligt uttryck – inget påstående om röstkloning eller författarröst.
4. Lokal spelare oförändrad; inget extern publiceringssteg.

**Beroenden/resurser `[E]`:** `narration/config/`, `narration/src/`, `narration/tools/`, `narration/web/index.html`, P-01:s evidensregler. Piper-modell ~137 MB lagrad utanför repo; Windows SAPI-fallback.

**Intressentkoppling `[ANTAGANDE]`:** ORG-02, ORG-03, ORG-04.

**Finansieringskoppling `[ANTAGANDE][?]`:** F02/F07 kulturarv; F04 civilsamhälle. Ingen ansökan.

**Grindar `[?]`:** rättighetsbeslut, mänskligt röstval, MT-citat måste kontrolleras mot svensk källa före återanvändning.

---

### P-06 – NOSAD-importpipeline `[FÖRSLAG][?]`

**Problem/behov `[E][I]`:** `NOSAD_IMPORT.md` konstaterar att ett publicerat nummer lästs som webbtext men att inget NOSAD-material, abonnemang eller e-poståtkomst finns lokalt. Omvärldsbevakningen är därför engångsläsning, inte ett reproducerbart arkiv.

**Målgrupper `[I]`:** projektloopen, Sambruk (ORG-01), DFRI (ORG-02).

**Förväntade resultat `[FÖRSLAG]`:**
1. `raw/` med exakt original och SHA-256-manifest; `extracted/`, `articles/`, `links/`, `annotations/`, `index/` som separata lager.
2. Provenance-tagg `[NOSAD/ÅÅÅÅ-MM/web|email]` kombinerad med `[E-secondary][?]`.
3. Organisationella entiteter som standard; personnamn sparas inte utan särskilt beslut.
4. `review_status: auto` kan aldrig bli `human_reviewed` automatiskt.

**Beroenden/resurser `[E][?]`:** NOSAD-abonnemang/e-postexport **eller** skriftligt godkännande för public-web-import. Ingen lokal källa finns i dag. Python-standardbiblioteket räcker för pipeline.

**Intressentkoppling `[ANTAGANDE]`:** ORG-01, ORG-02, ORG-08 (NOSAD som källa), ORG-05/ORG-06/ORG-07 som ämnen.

**Finansieringskoppling `[ANTAGANDE][?]`:** indirekt F04; ingen direkt utlysning är kopplad till nyhetsbrevsimport.

**Grindar `[?]`:** källåtkomst, rättigheter för heltext, personuppgiftspolicy, mänsklig granskare. Ingen extern kontakt har gjorts.

---

## 4. Beroendekarta `[I][ARG]`

| Projekt | Bygger på | Ger underlag till | Blockeras av |
|---|---|---|---|
| P-01 | Arkivkedja, FTS5, notes-assistant, PROTOCOL | P-04, P-05, P-07, P-06 | Rättighetsbeslut; granskningskapacitet |
| P-02 | Interop-paket, NOSAD-läsning, Rådig-analys | P-04, P-06 | Källosäkerhet `[?]`; ingen kontaktgiven |
| P-04 | PROTOCOL, evidence, citatverifiering | P-01, P-03, P-05 | Licens- och forgeval |
| P-03 | TypeScript + C11 + refinement | P-04 som mönster | Publicerings-/licensbeslut |
| P-07 |Finansieringskarta, RES-04 | P-01 som forskningsfråga | Behörighet, medelsförvaltare, konsortium, samtycke |
| P-05 | P-01, narration | Publicering/tillgängliggörande | Rättigheter, röstval |
| P-06 | Användarlevererad källa | P-02, bevakning | Källåtkomst, granskare |

**Resursläge `[E][I]`:** lokal kompetens och verktyg räcker för P-01–P-04 och för lokal del av P-02/P-05. P-06 och P-07 kräver indata utifrån. Inget projekt kräver nytt konto, betalning eller extern kontakt **för att formulera underlaget i steg 3**.

---

## 5. Beslutspunkter och öppna frågor `[?]`

1. ~~**Prioriteringsbeslut:** godkänns rangordningen P-01 → P-02 → P-04 → P-03 → P-07 → P-05 → P-06, eller ska P-02 flyttas först på grund av Klirrhack-datumet?~~ **Löst 2026-11-25** genom D-012: rangordningen godkändes utan ändring, inklusive P-02 på plats 2. `[ARG]`
2. **Steg 4 aktivering:** ingen visuell leverans, samverkan, partnerkontakt eller mötesunderlag ska påbörjas utan ny aktivering och separat kontaktbeslut. Steg 4 är omdefinierat enligt D-015.
3. **Rättigheter:** vilka utdrag, OCR-filer och maskinöversättningar får lagras, visas eller publiceras? `[?]`
4. **RES-04:** vilka institutioner avses, vilken VR-godkänd medelsförvaltare gäller, och har berörda personer samtyckt till att roll/affiliering registreras? Inga personuppgifter förs in före svar. `[?]`
5. **Licenser/forge:** MIT eller EUPL för kod, CC BY för text, och vilken forge ska vara kanonisk? `[?]`
6. **NOSAD:** abonnemang/e-postexport eller godkännande av enbart publika webbsidor? `[?]`
7. ** personas:** rollunderlaget för Tyler Kane/Doris Fleur X förblir fiktivt; beslut om något rollspel ska göras separat.

---

## 6. Verifiering och avgränsning

- Samtliga projekt-ID:n är kopplade till ID:n i `reports/INTERESSENTREGISTER_2026-11-25.md` (26 poster, `personal_data: false`, inga dubbletter) och till spår i `steps/02-network/FINANSIERINGSKARTA.md`.
- Inga befintliga filer utanför `project-loop/` har ändrats av steg 3. Inga original raderade, flyttade eller överskrivna (D-001).
- Inga externa repo-ändringar, e-postmeddelanden, ansökningar, konton eller transaktioner har gjorts (D-008). Masterprompten i `FriendsofHilma/project-loop` är oförändrad (D-009).
- Maskinläsbar motsvarighet: `PROJEKTPORTFOLJ_STEG3_2026-11-25.json`. Den är ett underlag för senare steg, inte ett verkställbart beslut.
- Steg 4–9 är **ej genomförda**. Denna rapport är projektformulering och prioritering endast.
