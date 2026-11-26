# Steg 5 – körningsplan

**Status:** HISTORISKT DELSPÅR FÖR FINANSIERING, **EJ AKTIVERAT**. Steg 5 är omdefinierat till narrativ integration enligt D-019; se [`NARRATIV_INTEGRATION.md`](NARRATIV_INTEGRATION.md).  
**Datum:** 2026-11-25  
**Beslut:** D-018 (förberedelse); aktivering kräver separat mänskligt beslut, B-011  
**Taggar:** `[E]` verifierad lokal källa, `[I]` vår tolkning, `[ARG]` rekommendation, `[ANTAGANDE]` koppling som kräver beslut, `[?]` ej specificerat.

> Detta är projektloopens steg 5 — finansiering och resurser — inte Cosmic Blocks
> matematiska nivå 5. Ingen ansökan, kontakt, e-post, extern konto, signatur,
> betalning eller publicering sker genom denna plan (D-008). Arvsfonden-spåret
> är pausat enligt D-014.

## 1. Vad finns redan?

| Indata | Fil | Status |
|---|---|---|
| Godkänd projektordning P-01 → P-06 | `steps/03-project-formulation/PROJEKTPORTFÖLJ_STEG3_2026-11-25.md` | `[ARG]` godkänd utan ändring, D-012 |
| Finansieringskarta F01–F12 med källor och datum | `steps/02-network/FINANSIERINGSKARTA.md` | `[E]` / `[E-secondary][?]` per post |
| Godkänd grafisk profil v0.1 | `steps/04-partnerships/GRAFISK_PROFIL.md` | Godkänd D-017 |
| Evidens- och provenansregler | `research-project/PROTOCOL.md` | Befintlig lokal regel |
| Intressentregister | `reports/INTERESSENTREGISTER_2026-11-25.md` | Bakgrund; inga nya kontakter |
| Påbörjad projekt–finansieringsmatchning | `steps/05-funding/MATCHNINGSMATRIS.md` | Förberedd här, `[ANTAGANDE][?]` |
| Lokalt Arvsfonden-utkast | `agents/arvsfonden-ansokningsagent/output/UTKAST_ARVSFONDEN.md` | Pausat; B-008/B-009 öppna |
| Ansökningsmall | `steps/05-funding/MALL_ANSOKNINGSUNDERLAG.md` | Förberedd här, ingen inlämning |

## 2. Mål med körningen

Vid aktivering: förvandla **ett eller flera godkända projekt** till lokala,
citeringsbara ansökningsunderlag med budgetskal och finansieringsstrategi —
utan att lämna in något. Varje underlag ska kunna granskas mot profilens
regler: samma färg, caption och evidensmärke som i figurerna.

Ej mål: att kontakta finansiärer, skapa konton, skaffa partner, intyga villkor,
skriva på, betala eller publicera.

## 3. Startvillkor — grindar före varje underlag

Ingen av grindarna är öppen i detta underlag. De måste besvaras av en människa
innan ett projekt får gå från bevakning till underlag. `[ANTAGANDE][?]`

| Grind | Fråga | Blockerat i nuläget |
|---|---|---|
| G1 Projektval | Vilket av P-01–P-07 ska ha första underlaget? | Rangordningen är godkänd, men inget projekt är valt för ansökan. |
| G2 Spår | Vilken av F01–F12 eller Arvsfonden ska användas? | Matchningsmatrisen är förslag, inte val. |
| G3 Sökande/värd | Vilken juridisk person eller VR-godkänd medelsförvaltare ansöker? | `research-project/COORDINATOR_STATUS.md`: ingen egen juridisk person. |
| G4 Behörighet | Finns behörig forskare, anställningsgrad och examen för F02/F05/F06? | `RES-04` är användarlämnad och overifierad (D-010). |
| G5 Partner | Finns svensk industriaktör (F01), företag (F03), konsortium (F02/F07/F08) eller förmedlare (F04)? | Inga partner är registrerade. |
| G6 Rättigheter | Får utdrag, PDF:er, översättningar eller röster användas i underlaget? | För P-01/P-05 krävs separata beslut. |
| G7 Villkor | Vilken villkorsversion gäller för Arvsfonden, och vilken call text för F04/F07/F08? | B-009; dynamiska sidor ej fulltextlästa. |
| G8 Kontakt | Har någon gett tillstånd att kontakta finansiär eller partner? | Nej; D-008 gäller. |

**Stoppregel:** om någon grind saknar svar skrivs underlaget som
`[FÖRSLAG][?]` och får inte kallas ansökningsbart.

## 4. Arbetsförpackningar vid aktivering

1. **WP0 — Frys underlag.** Registrera hashar för vald projektrapport,
   finansieringskarta och profil. Inga källor skrivs över.
2. **WP1 — Välj projekt och spår.** Fyll G1–G2 i `DECISIONS.md` och `backlog.json`.
3. **WP2 — Öppna grindar.** Fyll G3–G7 på organisationsnivå; inga
   personuppgifter registreras utan ändamål och samtycke.
4. **WP3 — Skriv underlag lokalt.** Använd `MALL_ANSOKNINGSUNDERLAG.md` och
   godkänd v0.1-profil. Alla siffror får `document_id`, fil:rad eller
   finansieringskod.
5. **WP4 — Budgetskal.** Använd `[BELOPP]`, `[ANTAL]` och `[PARTNER]` tills
   belopp och roller är verifierade. Inga påhittade siffror.
6. **WP5 — Kontroll.** Kör samma kontrolllista som i den grafiska profilen:
   källa, omfattning, mappning, enhet, osäkerhet, reproducering och
   tillgänglighet.
7. **WP6 — Beslutspaket.** Leverera underlag + budget + matchningsmatris +
   grindlista till mänskligt granskningsbeslut.
8. **WP7 — Handoff, ej inskickning.** Först efter separat godkännande får
   någon människa besluta om kontakt eller inlämning. Agenten gör det inte.

## 5. Tidsfönster att bevaka

Datumen kommer från `FINANSIERINGSKARTA.md` och är inte omverifierade här. `[E]` / `[E-secondary][?]`

| Datum | Spår | Åtgärd i förberedelsen |
|---|---|---|
| 2026-12-02 – 2027-02-16 | F05 VR infrastruktur | Bevakning; ingen direkt ansökningsväg. |
| 2027-01-05 – 2027-02-09 | F06 VR humaniora | Kräver G4. |
| 2027-01-11 / 2027-01-18 | F02 VR RCH, skiss | Kräver G4–G5; tidigaste skiss. |
| 2027-01-19 | F01 Vinnova | Kräver svensk industriaktör. |
| 2027-02-24 | F04 CERV | Kräver full call text och förmedlare. |
| 2027-03-08 – 2027-06-15 | F08 Horizon Infra `[?]` | Datum behöver bekräftas. |
| till 2027-05-05 | F03 Nordic Innovation | Löpande; kräver företag. |
| 2027-05-13 – 2027-09-23 | F07 Horizon HERITAGE `[?]` | Kräver konsortium och full ämnestext. |

## 6. Definition av klar för aktivering

Körningen är redo att **aktiveras** när:

- [x] körningsplan, matchningsmatris och mall finns lokalt;
- [x] profil v0.1 är godkänd;
- [x] inga externa kontakter har gjorts;
- [ ] G1–G8 är besvarade av en människa för valt projekt/spår;
- [ ] ett ansökningsunderlag och ett budgetskal finns i `steps/05-funding/`;
- [ ] ett separat beslut om aktivering är fattat (B-011).

## 7. Verifiering

Vid varje leverans kontrolleras: JSON i `state/` parses, alla hänvisningar
finns, belopp är antingen verifierade eller markeringar, inga personuppgifter
förekommer, och profilens färg-/captionregler följs. Resultatet skrivs i
`state/progress.json`.
