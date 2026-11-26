# Steg 6 – körningsplan för state integration

**Status:** AKTIVERAD LOKALT, **VÄNTAR PARTNER/EFTERFRÅGAN**  
**Datum:** 2026-11-25  
**Beslut:** D-021 förberedde; D-022 aktiverade lokalt. B-013 väntar partner/efterfrågan och B-014 klargör Arvsfonden. Steg 5 är aktivt lokalt med P-07/F02 enligt D-020 och ersätts inte av denna plan.  
**Taggar:** `[E]` lokal källa, `[I]` tolkning, `[ARG]` rekommendation, `[?]` ej specificerat.

> Detta är projektloopens steg 6 i dess operativa mening enligt D-021:
> **state integration**, inte bara implementation. Samverkan hör hemma här och i
> steg 7 enligt D-016, men ingen kontakt sker utan separat beslut (D-008).

## 1. Indata som redan finns

| Indata | Fil | Status |
|---|---|---|
| Steg 5 lokalt aktiverat, P-07/F02 | `../05-funding/NARRATIV_INTEGRATION.md`, `ANSOKNINGSUNDERLAG_P-07.md` | `[E]` D-020 |
| Godkänd grafisk profil v0.1 | `../04-partnerships/GRAFISK_PROFIL.md` | `[E]` D-017 |
| Intressentbakgrund | `../../stakeholders/`, `../../reports/INTERESSENTREGISTER_2026-11-25.md` | `[E]`, inga kontakter |
| Domänförslag | `../../integrations/` | förslag, ej implementation |
| F02-efterfrågan | `../02-network/FINANSIERINGSKARTA.md:59-70` | `[E]` |
| Siegel domän 6 | `SIEGEL_DOMAN_6.md` | `[E-secondary][I]` |

## 2. Mål med körningen

Vid körning av det nu aktiverade steget: göra en citeringsbar jämförelse mellan **vår självberättelse**
och **en partners efterfrågan**, och formulera skillnaden som erbjudanden och
blockader — inte som påstådd behörighet. Resultatet ska kunna granskas av en
människa innan någon kontakt eller inlämning övervägs. `[I][ARG]`

Ej mål: att skaffa partner, skicka e-post, skriva under, ansöka, betala eller
publicera.

## 3. Grindar före varje relationsunderlag

Ingen grind är öppen i detta underlag. `[ANTAGANDE][?]`

| Grind | Fråga | blockerad i nuläget |
|---|---|---|
| S1 Partner | Vilken organisation eller vilket consortium avses? | Inga partner är registrerade; `stakeholders/` är bakgrund. |
| S2 Efterfrågan | Finns en ordagrann text från den andre? | Endast F02:s villkor finns; övriga rader i matrisen är `[?]`/`tystnad`. |
| S3 Självberättelse | Är vår berättelse fryst och citeringsbar? | Ja i `STATE_INTEGRATION.md` §3, men inte godkänd som extern text. |
| S4 Erbjudande | Vad kan vi ge utan att överlova? | förberett i `ERBJUDANDE_MOT_EFTERFRAGAN.md`; inget beslut om extern formulering. |
| S5 Förskjutning | Är avståndet namngett? | förberett med fem ord i `STATE_INTEGRATION.md` §6. |
| S6 Rättigheter | Får utdrag, översättningar, bilder eller röster delas? | Inga rättighetsbeslut (G6/D-006). |
| S7 Kontakt | Har någon gett tillstånd att kontakta partnern? | **Nej**; D-008. |
| S8 Publicering | Vilken text/fil får bli offentlig och under vilken licens? | Inget publiceringsbeslut (D-008/D-016). |

**Stoppregel:** om S1–S8 saknar svar skrivs underlaget som `[FÖRSLAG][?]` och
får inte kallas samverkan, ansökan eller överenskommelse. `[ARG]`

## 4. Arbetsförpackningar vid körning

1. **WP0 — Frys.** Registrera hashar för `STATE_INTEGRATION.md`,
   `ERBJUDANDE_MOT_EFTERFRAGAN.md` och vald partnertext. Inga källor skrivs över.
2. **WP1 — Välj relation.** Fyll S1–S2 i `DECISIONS.md` och `backlog.json`.
3. **WP2 — Skriv självberättelsen kort.** Använd §3 i `STATE_INTEGRATION.md` som
   intern källa; ändringar kräver ny versionsrad.
4. **WP3 — Läs efterfrågan.** Citera ordagrann text med fil:rad eller
   dokument:datum. Saknas text: skriv `tystnad`.
5. **WP4 — Jämför.** Fyll `ERBJUDANDE_MOT_EFTERFRAGAN.md` med erbjudanden och
   tillståndsord.
6. **WP5 — Språklig relation.** Kontrollera att ”vi kan ge” inte blivit ”vi är”,
   att personas förblir fiktiva och att MT-texter inte citeras som primärkälla.
7. **WP6 — Beslutspaket.** Leverera matris, grindlista och en kort
   granskningsberättelse till mänskligt beslut.
8. **WP7 — Handoff, ej kontakt.** Först efter separat godkännande får en människa
   besluta om kontakt, publicering eller inlämning. Agenten gör det inte.

## 5. Tidsfönster att bevaka

Dessa datum hör till det aktiva P-07/F02-spåret och flyttas inte hit. `[E]`

- 2027-01-11 / 2027-01-18: F02-skisser till RCH och Prisma.
- 2027-06-16 / 2027-06-23: fulla ansökningar.
- Steg 6 kan förberedas nu, men ett relationsunderlag bör inte formuleras som
  externt erbjudande före S1–S8. `[ARG]`

## 6. Definition av klar för körning

- [x] definition, källmärkning, matris, plan och mall finns lokalt;
- [x] steget är tydligt skilt från steg 5 och från D-008/D-016;
- [x] inga externa kontakter har gjorts;
- [x] separat aktiveringsbeslut är fattat lokalt (D-022/P-022);
- [ ] S1–S8 är besvarade för en vald relation (B-013);
- [ ] Arvsfondsfrågan är klargjord (B-014);
- [ ] ett relationsunderlag finns i `steps/06-implementation/`.

## 7. Verifiering

Vid leverans kontrolleras: JSON i `state/` parses, hänvisningar finns, ordet
”erbjudande” används i stället för identitetspåståenden, inga personuppgifter
förekommer, och D-008/D-016 respekteras. Resultatet skrivs i
`state/progress.json`.
