# Slutrapport – projektloopens första varv, 2026-11-25

**Status:** uppdaterad efter publicering 2026-11-25; steg 2-underlag granskas.  
**Aktiva steg:** 1 och 2. **Förberedda men ej genomförda:** 3–9.

## 1. Vad som har genomförts

- **FAS 1:** befintliga regler lästa (`AGENTS.md`, persona-filer), kataloger och repositories inventerade, tidigare arbetsflöden identifierade (`research-project/rea/`, `COORDINATOR_STATUS.md`, `docs/democratic-commons-infrastructure.md`). Nulägesrapport: `NULAGESRAPPORT_2026-11-25.md`.
- **FAS 2:** `WORKFLOW.md`, `CURRENT_STATE.md`, `DECISIONS.md`, `state/*.json`, nio stegdokument, fyra intressentdokument och sex integrationsdokument skapade.
- **FAS 3:** inventering i sju kategorier, arkivpolicy, säker refaktorering (`hoConcatDepth` exporterad), teknisk specifikation för Hilma Papers sök-/assistentfunktion, GitHub-repo-förslag.
- **FAS 4:** NOSAD-import under undersökning, interoperabilitetspaket inför Klirrhack 2027, finansieringskarta, intressentregister. Se `steps/02-network/` och `INTERESSENTREGISTER_2026-11-25.md` (när filen finns).

## 2. Vad som har arkiverats

Inget original har flyttats eller raderats. `archive/README.md` registrerar var äldre arbete finns kvar: `AGENTS.md.new`, `PAPER*.html/pdf`, `research-project/rea/handoff/validation-run-2026-11-24/` och `research-project/reports/archive/`.

## 3. Vad som har refaktorerats

Endast en säker lokal ändring: `src/index.ts` exporterar nu `hoConcatDepth`, som redan fanns i modulen och listas i `AGENTS.md` men saknades i det publika API:t. Verifiering: `npx tsc --noEmit`, `npm run build` och `npm test` (oförändrad utskrift). Övriga refaktoreringar är **förslag** i nulägesrapporten och har inte genomförts.

## 4. Nya komponenter

- Arbetsflödesstrukturen i `project-loop/` (dokumentation + tillståndssystem).
- `MASTERPROMPT.md` – oförändrad källtext.
- `research/HILMA_PAPERS_SOK_ASSISTENT_SPEC.md` – [FÖRSLAG], ej implementerad kod.
- `research/GITHUB_REPO_FORSLAG.md` – [FÖRSLAG], inga externa repos skapade.
- `research/ATERANVANDBARA_KOMPONENTER.md` – katalog över befintliga komponenter.

## 5. GitHub-projekt som föreslås och publicerats

Se `research/GITHUB_REPO_FORSLAG.md` för förslag per intressent.

**Genomfört 2026-11-25:** masterprompten publicerades i det nya publika repo:t
`FriendsofHilma/project-loop` under licensen CC BY 4.0, efter uttryckligt
användarval av mål och licens. Repot innehåller `MASTERPROMPT.md`, en kort
`README.md` och full CC BY 4.0-licenstext i `LICENSE`. Den publicerade
masterprompten verifierades byte-identisk med den lokala filen via SHA-256
(`96b620a08712a79709852e27057facb58e202b4a02e2b99b100bdb2bc6c8e98b`). Se
`DECISIONS.md` D-009 och `state/progress.json` P-009. Övriga tre befintliga
FriendsofHilma-repos (`hear-ontology`, `membership_system`,
`friendsofhilma_website`) är **inte** ändrade. Ingen lokal `git init` har gjorts.

## 6. Finansieringsmöjligheter

Se `steps/02-network/FINANSIERINGSKARTA.md`. Endast officiella källor är
använda; ej verifierade fält är märkta "ej verifierat" eller `[?]`. Klassen
**ÖPPNA** per 2026-11-25: Vinnova "Cybersäkerhet, AI och resiliens" (deadline
2027-01-19), VR RCH kulturarv/klimat (skisser januari 2027, full ansökan juni
2027), Nordic Innovation "Nordic Tech in Action" (löpande intag till
2027-05-05) och EU CERV-2026-CITIZENS-VALUES (deadline 2027-02-24, detaljer ej
verifierade). **KOMMANDE:** VR forskningsinfrastruktur (fönster från
2026-12-02). **HISTORISKA:** bland annat NordForsk/NOS-HS och COST OC-2026.
Alla projektkopplingar är `[ANTAGANDE]`; projektloopen saknar egen juridisk
person och kan inte ansöka direkt. Användaren uppger 2026-11-25 att nätverket
har tillgång till ackrediterade forskare (D-010, RES-04), vilket ändrar
bedömningen för VR RCH men ännu inte gör spåret ansökningsbart: institution,
VR-godkänd medelsförvaltare, examens-/anställningsvillkor och samtycke är ej
specificerade. **Inga ansökningar har lämnats.**

Steg 2-underlag i övrigt: `NOSAD_IMPORT.md` (ingen lokal import; förslag på
reproducerbar process med SHA-256-manifest), `INTEROPERABILITET_KLIRRHACK.md`
(officiella källor med URL och datum; fiktiva personas), `INTERNATIONELL_INTRO.md`
och `reports/INTERESSENTREGISTER_2026-11-25.md` (25 poster, `personal_data:
false`, inga kontakter).

## 7. Integrationsmöjligheter som identifierats

- `notes-assistant/` + Hilma Papers-index → Friends of Hilma / Safe Trade Media.
- `research-assistant/` retrieval-lager → DFRI (lokala agenter, tillitsnätverk) och Sambruk (gemensamma resurser).
- `cosmic-block-c/` verifierbar byte-lagring → Sambruk/DFRI som referens.
- `narration/` provenans och segmentcache → Friends of Hilma / Safe Trade Media.
- `docs/democratic-commons-infrastructure.md` ger redan en gemensam ram för organisationer, ekonomi och agenter.

## 7b. Forskningssidesinventering och kvarvarande grindar

Den separata inventeringen av forskningssidan bekräftar att mycket redan är
utfört och **inte** ska göras om:

- `research-project/PROTOCOL.md` anger evidensmärkning (`[E]`, `[E-secondary]`,
  `[MT]`, `[OCR]`, `[?]` m.fl.), oföränderliga original under `sources/*/original/`
  och krav på dokument-ID + PDF-sida + käll-URL vid substantiva påståenden.
- Arkivet är verifierat: 352 original-PDF:er, 32 SHA-256-dubbletter, manifest
  352/352, 7 210 sidor, 4 099 chunks, arkivverifiering 1 065/1 065.
- Juridiskt register: 57 påståenden, varav 48 CONFIRMED, 8 PARTIAL, 1 OVERSTATED;
  nio korrigeringar tillämpade.
- Evidence-piloten: 10 poster, validatorn `validate_pilot.py` ger 10/10.
- REA-registret: 21 poster, 0 fel; ingen reward, betalning, remote, commit eller
  push har skapats eller auktoriserats.
- `notes-assistant/`: 4 083 sidor, 4 065 dokument, 14 560 termer, 32
  LSA-komponenter; sökningar är lexikala/distributionella och ärver
  maskinöversättningsfel.
- `novel/tools/verify_quotes.py`: 56 primära citatsträngar kontrollerade, 0 fel.

**Kvarvarande grindar (ej öppnade av detta varv):** publiceringsgodkännande för
artikelutkast, pledge-artikeln och den gemensamma boken är fortfarande
innehavet hos användaren; visuell granskning av skadade namn/siffror, bilaga
§4/§5 och `Aktbil 43` återstår; inga visuella påståenden om *The Key* tillåts
från maskinell inspection; MT-citat måste kontrolleras mot svensk källa före
återanvändning; Rocq-beviset är inte maskinkontrollerat; Levels 7–9 förblir
oimplementerade och Level 8 är `under_review`.

## 8. Frågor som kräver användarens beslut

1. ~~GitHub-åtkomst och målrepo~~ **Löst** (D-009, B-001, P-009). Kvar: om lokal
   `project-loop/` ska kopplas till det publicerade repo:t via `git init`.
2. Om `git init` ska göras lokalt (B-003).
3. Om `AGENTS.md.new` och inaktuella `PAPER*.pdf/html` ska arkiveras fysiskt (B-002).
4. NOSAD-källa/abonnemang (B-004).
5. Licensval för publicerad text och kod.
6. Om befintliga delprojekt ska flyttas till egna repos (förslag, ej utfört).

## 9. Rekommendation för nästa arbetscykel

När steg 1 och 2 är granskade och besluten ovan är fattade: aktivera steg 3 (projektformulering och prioritering) med utgångspunkt i finansieringskartan och de återanvändbara komponenterna. Steg 3–9 förblir oförändrade strukturer tills dess.

## 10. Tillägg 2026-11-25 – steg 3 aktiverat och genomfört

Användaren aktiverade steg 3 samma dag. Rapporten ovan beskriver fortfarande läget före aktiveringen; detta tillägg uppdaterar statusen utan att skriva över historiken.

- **Genomfört:** sju projektidéer med problem/behov, målgrupper, förväntade resultat, beroenden, resurser och intressentkopplingar. Rangordning: P-01, P-02, P-04, P-03, P-07, P-05, P-06.
- **Leveranser:** `steps/03-project-formulation/PROJEKTPORTFÖLJ_STEG3_2026-11-25.md` och `PROJEKTPORTFOLJ_STEG3_2026-11-25.json`.
- **Beslut:** D-011 genomförde steget; **D-012 godkände rangordningen utan ändring** 2026-11-25. Godkännandet gäller inte samverkan, ansökan, kontakt eller implementation. Steg 4–9 förblir ej aktiverade.
- **Oförändrat:** inga externa konton/meddelanden/ansökningar, inga repo-ändringar utöver den redan verifierade publiceringen i D-009, inga personuppgifter och inga flyttade eller raderade original. `RES-04` förblir `user_reported_unverified`.

Den tidigare rekommendationen i §9 är därmed uppfylld för steg 3. Nästa rekommendation är beslut om steg 4 aktiveras **i dess nya mening enligt D-015** och vilka av de godkända projekten som får en första visuell leverans (B-006b, B-010).

## 11. Tillägg 2026-11-25 – steg 4 aktiverat och genomfört

Historiken ovan behålls. D-017 supersederar endast den del av §10 som sa att
steg 4 förblev ej aktiverat.

- **Aktivering:** användaren sa ”Då tycker jag att det är dags att köra nivå 4.”
  Steg 4 genomfördes i dess operativa mening: estetisk integritet och grafisk
  profil, inte samverkan (D-015/D-016).
- **Godkännande:** grafisk profil v0.1 godkändes oförändrad med ”Ok, det låter
  bra!” (B-010 stängd).
- **Leveranser:** `steps/04-partnerships/GRAFISK_PROFIL.md`, `SIEGEL_DOMAN_4.md`,
  `figures/fig6-profile-board.svg`, `fig7-complement-chord.svg`,
  `fig8-offset-map.svg` och `steps/04-partnerships/viewer/index.html`.
- **Moduler:** `d3@7.9.2` installerades lokalt efter godkännande;
  `three@0.136.0` återanvändes. Licens, version och hashar står i profilen.
- **Verifiering:** `npm run build`, `npm test`, deterministisk figurgenerering,
  XML-parse 8/8 och webbläsarkontroll med HTTP 200 och inga konsolvarningar.
- **Oförändrat:** inga externa konton, e-postmeddelanden, ansökningar,
  signaturer, personuppgifter eller publiceringar. Nästa beslut gäller steg 5
  (B-011); samverkan aktiveras först i steg 6–7 enligt D-016.

## 12. Tillägg 2026-11-25 – steg 5 förberett men inte aktiverat

Användaren frågade ”Vad har du som nivå fem? Förbered körningen!” och bad om
lokal beredskap, inte om inlämning. Här avses projektloopens steg 5, inte
Cosmic Blocks matematiska nivå 5.

- **Leveranser:** `steps/05-funding/KORNINGSPLAN.md`, `MATCHNINGSMATRIS.md` och
  `MALL_ANSOKNINGSUNDERLAG.md`; `README.md` visar status förberedd/ej aktiverad.
- **Grindar:** G1–G8 (projektval, spår, sökande, behörighet, partner,
  rättigheter, villkor och kontakt) är dokumenterade men inte öppnade.
- **Tillstånd:** `current_step.json` har `step_5_prepared: true` och
  `step_5_activated: false`; B-011 är `prepared_awaiting_human_decision`.
- **Oförändrat:** inget projekt eller spår är valt, inga belopp fastställda,
  inga personuppgifter registrerade och inga externa konton, kontakter,
  ansökningar, signaturer eller publiceringar.

## 13. Tillägg 2026-11-25 – steg 5 omdefinierat till narrativ integration

Användaren bad därefter: ”Definera steg fem i projektloopen som narrativ
integration generellt på alla nivåer, vilket också kan innebära att man
kompilerar om vissa delar med zonix, eller andra verktyg och ser över andra
relationer språkligen. Analysera situation just nu som helhet med hjälp av ord.
Fundera på vad som menas men narrativ integration. Beskriv med ord hur nya
visuella modeller som skapades i steg fyra förhåller sig till varandra!”

- **Beslut:** D-019. Steg 5 är nu **narrativ integration på alla nivåer**, inte
  längre finansiering och resurser i första hand. D-018 raderas inte;
  finansieringsmaterialet blir ett historiskt delspår. Masterprompten och den
  publicerade repon är oförändrade (D-003/D-009).
- **Definition:** narrativ integration är att föra samman matematiska, datorliga,
  visuella, textuella, muntliga och finansiella framställningar till en
  sammanhängande berättelse där varje vittne behåller sin auktoritet och sina
  osäkerheter. Det är inte fiction; det är disciplinen att hålla `[E]`, `[I]`,
  `[M]` och `[?]` åtskilda samtidigt som relationerna visas.
- **Helhetsanalys:** läget beskrivs i ord i `NARRATIV_INTEGRATION.md` §3 — en
  stringent liten matematik, en andra lagringsberättelse med Zonix som vittne,
  en visuell berättelse med känd färgosäkerhet, en språklig berättelse med
  maskinöversatta källor, och ett projektloop-lager där risken är att
  representationerna börjar leva separata liv.
- **Figurrelationer:** figur 6 ger rösten, figur 7 paret, figur 8 adressen och
  viewern låter dem tala tillsammans. Figurerna 1–5 står kvar som äldre
  argumentbilder; 6–8 är en andra ordning av vittnen som visar hur vi visar.
- **Gränser:** ingen ny kompilering gjordes här; Zonix nämns som möjligt verktyg
  och historiskt vittne enligt `AGENTS.md`. Inga externa kontakter, konton,
  ansökningar, signaturer, betalningar, personuppgifter eller publiceringar.
  Inga nya Cosmic Block-typer; Levels 7/9 förblir oimplementerade och Level 8
  `under_review`.
- **Tillstånd:** `WORKFLOW.md` är 1.3, `current_step.json` har
  `step_5_definition: narrative_integration_all_levels` och
  `step_5_activated: false`; B-011 är
  `definition_complete_awaiting_human_decision`; P-019 loggar leveransen.

## 14. Tillägg 2026-11-25 – analysen sparad och steg 5 aktiverat lokalt

Användaren skrev därefter: ”Jättebra skrivet om situationen just nu. Se till att
spara det ordentligt. : ”Aktivera steg 5 med P-07 och F02””.

- **Tolkning:** godkännande och permanent lokal lagring av analysen samt lokal
  aktivering av steg 5 i dess D-019-betydelse. P-07 + F02 är första finansiella
  berättelse (N5), inte en inlämning. Om frasen endast var avsedd att sparas kan
  aktiveringen supersederas; inget externt behöver återkallas (D-020).
- **Sparat:** `steps/05-funding/NARRATIV_INTEGRATION.md` §8 registrerar
  godkännandet. Kontrollsumman förs i D-020 och P-020:
  SHA-256 `E508491A8743E01D8906B28A1865BF31A3F6306CC2925443C0D41DD603B1469F`.
- **Leveranser:** `ANSOKNINGSUNDERLAG_P-07.md`, `BUDGET_P-07.csv` och
  `FINANSIERINGSSTRATEGI.md`, alla märkta `[FÖRSLAG][?]`, med F02-fakta `[E]`
  från `FINANSIERINGSKARTA.md:59-70` och `[BELOPP]`-markeringar i stället för
  påhittade siffror.
- **Tillstånd:** `WORKFLOW.md` är 1.4; `current_step.json` har
  `current_step: 5`, `active_steps: [1,2,3,4,5]`, `step_5_activated: true` och
  `step_5_first_pass` med P-07/F02 och `external_submission: false`. B-011 är
  `done`; B-012 samlar G3–G8; P-020 loggar aktiveringen.
- **Oförändrat:** inga externa konton, kontakter, ansökningar, signaturer,
  betalningar, personuppgifter eller publiceringar. Inga nya Cosmic
  Block-typer; Levels 7/9 förblir oimplementerade och Level 8 `under_review`.

## 15. Tillägg 2026-11-25 – steg 6 förberett som state integration

Användaren sa: ”Ok, förbered körning för steg 6 i projektloopen. Där jämför vi
vad vi har i vår egen individuella berättelse i relation till vad som
efterfrågas av våra projektpartners. Detta är den sjätte integrationsnivån —
the sixth domain of integration, alltså ’state integration’. Jämför detta med
hur vi känner oss i relation till andra baserat på vilken berättelse vi har om
oss själva — vad kan vi erbjuda i förhållande till vad andra efterfrågar?”

- **Tolkning:** D-021 definierar och förbereder projektloopens steg 6 som
  **state integration**, den sjätte integrationsdomänen. Steg 5 förblir aktivt
  lokalt med P-07/F02 enligt D-020. Masterpromptens steg 6 förblir ordagrant
  oförändrad enligt D-003; samverkan hör hemma i steg 6–7 enligt D-016 men
  kontakt kräver separat beslut enligt D-008.
- **Analys i ord:** `steps/06-implementation/STATE_INTEGRATION.md` håller isär
  vår självberättelse, den dokumentbaserade hållningen i relation till andra,
  och erbjudandet. Relationen skrivs som ”vi kan ge”, aldrig som identitet eller
  intyg. Förskjutningen namnges med orden match, delvis match, förskjutning,
  blockad och tystnad.
- **Källmärkning:** `SIEGEL_DOMAN_6.md` beskriver Siegels sjätte domän som
  `[E-secondary]` och vår tillämpning som `[I]`; inga terapeutiska eller
  psykologiska påståenden om personer görs.
- **Leveranser:** `ERBJUDANDE_MOT_EFTERFRAGAN.md` har nio källmärkta rader och
  en tom mall; `KORNINGSPLAN_STEG6.md` har grindar S1–S8 och WP0–WP7;
  `MALL_TILLSTANDSJAMFORELSE.md` är lokal mall per partner/efterfrågan;
  katalogens `README.md` är omskriven.
- **Tillstånd:** `WORKFLOW.md` är 1.5; `current_step.json` har
  `step_6_definition: state_integration_all_partner_relations`,
  `step_6_prepared: true` och `step_6_activated: false`; P-021 loggar
  förberedelsen; B-013 är öppen för aktivering. Inga partner är valda och inga
  grindar S1–S8 är öppna.
- **Oförändrat:** inga externa konton, kontakter, ansökningar, signaturer,
  betalningar, personuppgifter eller publiceringar. Inga nya Cosmic
  Block-typer; Levels 7/9 förblir oimplementerade och Level 8 `under_review`.
  Steg 6 är förberett för körning men **inte aktiverat**.

## 16. Tillägg 2026-11-25 – steg 6 aktiverat lokalt

Användaren sa: ”Ok, aktivera steg 6! Sedan kan du köra B-013 - alltså skriva
arvsfondsansökan!”

- **Tolkning:** D-022 registrerar ett explicit lokalt aktiveringsbeslut för steg
  6 i dess D-021-betydelse. **B-013 är inte Arvsfonden:** det är punkten för att
  aktivera steget *och* välja första partner/efterfrågan. Arvsfonden hör till det
  parallella lokala spåret D-013/P-014 med B-008 (projekt/målgrupp) och B-009
  (villkorsversion), pausat genom D-014. D-008 kvarstår: aktiveringen ger inget
  tillstånd till kontakt, ansökan, signatur eller publicering.
- **Tillstånd:** `WORKFLOW.md` är 1.6; `current_step.json` har
  `current_step: 6`, `active_steps: [1,2,3,4,5,6]`, `prepared_steps: [7,8,9]`,
  `step_6_activated: true`, `step_6_activation_decision: D-022` och
  `step_6_first_pass.status: awaiting_human_selection`. P-022 loggar
  aktiveringen. B-013 är `activated_awaiting_partner_selection`; B-014 är öppen
  för Arvsfondsfrågan.
- **Ej gjort:** ingen partner eller ordagrann efterfrågan är vald, inga grindar
  S1–S8 är öppna, inget relationsunderlag är skrivet och **ingen
  Arvsfondsansökan har skrivits eller skickats** i detta varv.
- **Oförändrat:** inga externa konton, kontakter, ansökningar, signaturer,
  betalningar, personuppgifter eller publiceringar. Inga nya Cosmic
  Block-typer; Levels 7/9 förblir oimplementerade och Level 8 `under_review`.
  Steg 5 förblir aktivt lokalt med P-07/F02 enligt D-020.
