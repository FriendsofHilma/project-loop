# Erbjudande mot efterfrågan – relationsmatris för steg 6

**Status:** förberedd lokal mall, **inte ett samverkansbeslut**  
**Datum:** 2026-11-25  
**Beslut:** D-021 förberedde steget; D-022 aktiverade det lokalt; B-013 väntar partner/efterfrågan och B-014 klargör Arvsfonden; D-008 förbjuder kontakt utan separat godkännande.  
**Källor:** [`STATE_INTEGRATION.md`](STATE_INTEGRATION.md), [`SIEGEL_DOMAN_6.md`](SIEGEL_DOMAN_6.md), `../05-funding/ANSOKNINGSUNDERLAG_P-07.md`, `../02-network/FINANSIERINGSKARTA.md:59-70`, `../../DECISIONS.md`.

## 1. Läsningsregler

- Kolumnen **Efterfrågan** är alltid någon annans text. Saknas text skrivs
  `tystnad`, inte ett gissat behov. `[I]`
- Kolumnen **Vår berättelse** är intern och källmärkt. Den är inte ett intyg.
- Kolumnen **Erbjudande** börjar med ”vi kan ge …”, aldrig ”vi är …”. `[ARG]`
- Kolumnen **Tillstånd** använder orden match, delvis match, förskjutning,
  blockad eller tystnad.
- Ingen rad får innehålla personuppgifter, e-postadresser eller påståenden om
  fiktiva personas som verkliga aktörer (D-006).

## 2. Kända rader från det lokala underlaget

| Id | Efterfrågan `[E]` | Källa | Vår berättelse `[E][I]` | Vi kan ge `[I]` | Tillstånd | Gate |
|---|---|---|---|---|---|---|
| R-01 | Svensk doktorsexamen, VR-godkänd medelsförvaltare, anställning minst 20 % | kartan :65 | `RES-04` är användarlämnad och overifierad (D-010) | källmärkt beredskap, krysslista | **blockad** | G4 |
| R-02 | Internationellt konsortium, 3–7 partner från minst tre länder, högst två svenska | kartan :64,:68 | inga fastställda partner | partner-/rollmatris med tomma fält | **blockad** | G5 |
| R-03 | Parallell skiss i RCH och Prisma 2027-01-11 / 2027-01-18 | kartan :67 | P-07/F02-dossier är lokal | underlag, budgetmarkeringar, strategi | **blockad** | G3–G8, D-008 |
| R-04 | Full ansökan 2027-06-16 / 2027-06-23 | kartan :67 | samma som R-03 | samma som R-03 | **blockad** | G3–G8, D-008 |
| R-05 | Kulturarvsforskning, citeringsbarhet och provenans | portföljen :142,:147 | Hilma Papers, `notes-assistant/`, PROTOCOL.md | forskningsfråga med `[E]/[I]/[?]`, provenansregler | **delvis match** | G6 |
| R-06 | Öppna gränssnitt och interoperabilitet | `AGENTS.md` §7, `INTEROPERABILITET_KLIRRHACK.md` | TypeScript + C-mappad fil, Zonix-vittne | referensimplementation, offsetkarta, tester | **delvis match** | publiceringsbeslut |
| R-07 | Estetiskt troget illustrationsunderlag | `GRAFISK_PROFIL.md` v0.1 | figurer 6–8, viewer, captionregler | figurer, färg-/taggmappning | **match** | färgläsning `[?]` |
| R-08 | Rättigheter till utdrag, översättningar eller röster | PROTOCOL.md, D-006 | MT-caveat, fiktiva personas, val oklar | provenanskontroll, markeringar | **blockad** | G6 |
| R-09 | Spridning, utbildning, offline-narration | `narration/`, `PAPER.md`–`PAPER3.md` | lokala texter och ljud, inga publiceringsbeslut | lokala texter, offline-röster, sökbar modell | **blockad** | publiceringsbeslut |
| R-10 | Okänd partnerfråga | `[PARTNER]` | — | — | **tystnad** | S1/S2 |

## 3. Tom mall för en verklig partnertext

| Id | Efterfrågan | Ordagrann källa | Vår berättelse | Vi kan ge | Tillstånd | Gate | Beslut som krävs |
|---|---|---|---|---|---|---|---|
| R-[N] | `[CITAT ELLER SIDHÄNVISNING]` | `[FIL:RAD / DOKUMENT:DATUM]` | `[KÄLLMÄRKT PÅSTÅENDE]` | `[ERBJUDANDE]` | `[match/delvis/förskjutning/blockad/tystnad]` | `[S-NR]` | `[MÄNSKLIGT BESLUT]` |

## 4. Kontroll

| Kontroll | Resultat |
|---|---|
| Kända rader har källa | 9/9 med lokal hänvisning; R-10 är avsiktligt tystnad. |
| Erbjudanden skrivs som handling, inte identitet | Ja. |
| Personuppgifter | Inga. |
| Externa kontakter | Inga. |
| Ansökningar eller inskickningar | Inga. |
| Steg 6 aktiverat | Ja, lokalt genom D-022; B-013 väntar partner/efterfrågan och B-014 klargör Arvsfonden. |
