# Synthesis, Consolidation and Recovery – steg 9

> 2026-11-26, uppdaterad efter varv 22. Källa: `MASTERPROMPT_2026-11-26.md` §2 STEP 9.  
> Taggar: `[E]` lokalt verifierat, `[I]` tolkning, `[ARG]` rekommendation, `[?]` osäkert, `[E-user]` användarens instruktion.

## A. Konsoliderad kunskap

**Nya beslut:** D-023 (Arvsfonden återupptagen lokalt), D-024 (steg 7–9 integrerade), D-025 (GitHub-commit förberedd), D-026 (avhandlingsprojekt), D-027 (projektloop-assistent), D-028 (Riemann-workstream), D-029 (nio varv), D-030 (tretton varv till), D-031 (primtalsrymd i pausdraken), D-032 (exakt sju delar per kubruta). `[E]`

**Nya artefakter:** daterat Arvsfondsutkast med versionsanalys och PASS-kontroll; steg 7–9-dokumentation; svenskt avhandlingsprojekt; Riemann-plan och första figur; projektloop-assistent; lokal GitHub-commit; 22 cycle-rapporter; primtalsrymdsskärmsläckare med specifikation och 13 verifierade återhämtningar. `[E]`

**Nya relationer:** Arvsfondens publicerade villkor är första state-integrationsrelationen; DFRI/Klirrhack/Hilma Research Network är outforskade hypoteser, inte relationer. Användarens regler för pausdraken är `[E-user]`, inte ett påstående om konstnärlig avsikt. `[E][?]`

**Öppna frågor:** B-004 NOSAD, B-007 RES-04, B-012 G3–G8, B-009 versionsval (rekommendation finns men intygande saknas), faktiskt behovsunderlag från målgruppen och B-020 mänsklig visuell granskning av skärmbilden. `[E]`

**Outstanding technical tasks:** verifiera licenser för Riemann-dataset, låta en människa granska skärmbilden av primtalsflygten, och håll GitHub-commiten lokal tills push godkänns. `[ARG]`

## B. Avhandlingen som helhet

Det nya projektet `avhandling/` är avsedd att bli den löpande forskningsloggen. Steg 9 har fört över: definitionsregister, experimentregister, provenans, terminologiindex och öppna frågor. `PAPER.md`–`PAPER3.md` förblir artiklar och citeras som källor; Villari-kopian i `knowledge/dissertation/` förblir en research copy med original-PDF:en auktoritativ. `[E]`

Vi har **inte** fört in Arvsfondsutkastet som ett faktiskt projekt eller Riemann-kopplingen som ett resultat. Båda ligger i bilagor med status `[FÖRSLAG][?]`. Inte heller primtalsflygten har gjorts till en matematisk nivå. `[E]`

## C. Miljökonsolidering

- Inga kataloger från steg 1–6 har flyttats eller raderats (D-001). `[E]`
- `MASTERPROMPT.md` är orörd; den nya prompten ligger som eget daterat underlag. `[E]`
- GitHub-repo:t är opublicerat i denna reviderade form; lokal commit är förberedd och kommer att amenderas lokalt med de nya varven. Ingen push. `[E]`
- Känd historisk snedvridning: gamla README:er i vissa kataloger beskriver ännu ”steg 1–2 aktiverade” på GitHub; detta är källhistoria, inte aktuellt tillstånd. `[E][?]`

## D. Reflektion

**Vad blev klarare?** Steg 6 och 7 gör olika saker: state integration jämför vår berättelse med en efterfrågan; interpersonal integration förstår hur aktörerna förstår varandra. Steg 8 gör översättningen handlingsbar utan att kontakta någon. Steg 9 får nu ett eget, reproducerbart uttryck där rörelsen följer primtalen i stället för en godtycklig animationsrytm. `[I]`

**Vad är osäkert?** DFRI:s och Hilma Research Network mandat 2027; Arvsfondens versionskonflikt; om en Cosmic Block-representation av zeta-nollställen är meningsfull alls. `[?]`

**Vad ska prioriteras nästa cycle?** Verifiera externa mandat (A07–A08), komplettera avhandlingens kapitel med källor, och låta en människa bedöma om primtalsrymdens färg- och formval känns trogna. `[ARG]`

**Vad ska vi sluta göra?** Att kalla Arvsfondsutkastet en ansökan innan den är signerad; att kalla föreslagna samverkansmöten för bekräftade; att påstå att primtalsflygten bevisar något om Riemannhypotesen. `[E]`

## E. Återhämtning — draken i primtalsrymden

Arbetet sparas först. Därefter visas `dragon-screensaver/index.html` i ett tidsfönster som default är 8 sekunder och kan sättas med `?seconds=N`. Draken flyger genom flera 13³-block (default 3) och **varje kubruta delas i exakt sju delar** (`PARTS = 7`). För varje besökt delruta ökas pixelantalet; när antalet är ett primtal svänger draken vänster: `heading = (heading + 1) mod 4`. `[E-user][E]`

Visualiseringen är lokal, innehåller inga externa resurser, gör inga nätverksanrop och avslutar sig själv. Den är en del av metoden: en paus där perspektivet får vidgas innan nästa varv börjar. Den ändrar inte Cell-typen (0–9), nivåerna 1–9 eller den C-implementerade byte-karten. `[E][I]`

Tretton korta sessioner kördes via `window.__primeSpace.restartWith(s)` med 1–5 sekunders längd. Alla nådde `body.finished`, loggade korrekta primtalsvändningar (2, 3, 5, 7, 11, 13, 17, 19, 23, …) och gav 0 konsolfel. Detaljerna ligger i [`RECOVERY_SESSION_2026-11-26.md`](RECOVERY_SESSION_2026-11-26.md) och reglerna i [`dragon-screensaver/PRIMTALSRYMD.md`](dragon-screensaver/PRIMTALSRYMD.md). `[E]`

## Status

Syntesen är lagrad med 32 varv och en verifierad primtalsrymdspaus. Nästa varv börjar vid steg 1 med denna fil som indata.
