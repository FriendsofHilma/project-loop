# Steg 5 – Narrativ integration

**Status:** DEFINIERAT OCH **AKTIVERAT LOKALT** 2026-11-25; första pass P-07 + F02. Ingen kontakt, ansökan eller inlämning (D-008).  
**Beslut:** D-019 definierade om steget; D-020 aktiverade det. Katalognamnet `05-funding` behålls enligt D-001; det är en historisk etikett, inte en fullständig beskrivning. `MASTERPROMPT.md` förblir ordagrant oförändrad (D-003).  
**Huvuddokument:** [`NARRATIV_INTEGRATION.md`](NARRATIV_INTEGRATION.md)

## Syfte

Knyt samman projektets framställningar — matematiska, datorliga, visuella,
textuella, muntliga och finansiella — till en sammanhängande berättelse där
varje framställning behåller sin egen auktoritet, sitt omfång och sina
osäkerheter. Narrativ integration är inte fiction; det är disciplinen att skilja
 `[E]`, `[I]`, `[M]` och `[?]` samtidigt som man visar hur delarna hör ihop.

## Nuvarande definition

Se [`NARRATIV_INTEGRATION.md`](NARRATIV_INTEGRATION.md) för:

- definitionen och gränsen mot Cosmic Blocks matematiska nivåer;
- analysen av situationen just nu i ord;
- de tre steg-4-figurernas och viewerns inbördes relation i ord;
- arbetsformerna N1–N6 och stoppregler;
- gränsbevakningen enligt D-001, D-003, D-008, D-014, D-016 och D-018.

Kort sagt: **figur 6 ger rösten, figur 7 ger paret, figur 8 ger adressen och
viewern låter dem tala tillsammans.** Steg 5 ser till att den meningen kan
återberättas i kod, figur och språk utan att något vittne byts ut mot ett annat.

## Indata

- Steg 1–4: inventering, kunskapsunderlag, godkänd projektordning P-01–P-07 och
  godkänd grafisk profil v0.1.
- `cosmic-block-c/` med sin mappade fil, offsetkarta och redan verifierade
  Zonix-bygge enligt `AGENTS.md` `[E-secondary]`.
- `figures/fig1–fig8.svg` och `steps/04-partnerships/viewer/index.html`.
- `PAPER.md`, `PAPER2.md`, `PAPER3.md`, `notes-assistant/`, `novel/` och
  `narration/` som språkliga vittnen.
- Det historiska finansieringsunderlaget nedan — ett delspår, inte hela steget.

## Verktyg och språk ingår i definitionen

Användarens formulering `[E-user]` nämner uttryckligen att narrativ integration
”också kan innebära att man kompilerar om vissa delar med zonix, eller andra
verktyg och ser över andra relationer språkligen”. Därför hör följande till
stegets möjliga arbete efter aktivering:

- omkompilering med `znx` eller andra verktyg som **andra vittnen**, inte som
  ersättare för tidigare verifiering;
- genomgång av TypeScript build/test, XML-parse och webbläsaråtergivning;
- språklig kontroll av begrepp, taggar, citationer, personas och
  maskinöversättningar i alla dokumentationslager.

Inget sådant arbete har påbörjats som ett aktiverat steg-5-pass. Zonix-resultatet
som nämns är historiskt dokumenterat i `AGENTS.md`, inte nytt här.

## Historiskt finansieringsspår inom steg 5

D-018 förberedde finansiering och resurser lokalt. D-019 ändrar stegets
definition men raderar inte underlaget. Följande filer kvarstår som ett
pausat delspår:

| Fil | Innehåll | Status |
|---|---|---|
| [`KORNINGSPLAN.md`](KORNINGSPLAN.md) | Grindar G1–G8, WP0–WP7, tidsfönster och stoppregler. | Förberedd, ej aktiverad. |
| [`MATCHNINGSMATRIS.md`](MATCHNINGSMATRIS.md) | P-01–P-07 × F01–F12. | Förberedd bevakning, inte ansökningsbeslut. |
| [`MALL_ANSOKNINGSUNDERLAG.md`](MALL_ANSOKNINGSUNDERLAG.md) | Lokal mall med budgetmarkeringar och provenanskontroll. | Mall, ingen inskickning. |

## Lokalt underlag för första passet (D-020)

| Fil | Innehåll | Status |
|---|---|---|
| [`ANSOKNINGSUNDERLAG_P-07.md`](ANSOKNINGSUNDERLAG_P-07.md) | P-07 mot F02 med grindar, källmärkta F02-fakta och kontrollista. | `[FÖRSLAG][?]`, lokalt, inte inskickat. |
| [`BUDGET_P-07.csv`](BUDGET_P-07.csv) | Budgetmarkeringar och F02:s `[E]`-ramar. | Inga påhittade belopp. |
| [`FINANSIERINGSSTRATEGI.md`](FINANSIERINGSSTRATEGI.md) | N1–N6, grindar G3–G8 och språkliga gränser. | `[FÖRSLAG][?]`, lokal. |

G3–G8 är öppna och samlade i B-012. Arvsfonden är ett separat pausat spår enligt D-014, B-008 och B-009.

## Arbetsformer vid aktivering

N1 frys källor · N2 verktygsvittne · N3 visuell relation · N4 språklig relation
· N5 finansiell berättelse · N6 granskningsberättelse. Detaljer finns i
`NARRATIV_INTEGRATION.md` §5.

## Gränser

- Inga externa konton, e-postmeddelanden, ansökningar, signaturer, betalningar
  eller publiceringar (D-008).
- Samverkan aktiveras först i steg 6–7 (D-016), inte här.
- Inga befintliga filer raderas eller flyttas (D-001).
- Inga nya Cosmic Block-typer: Levels 7 och 9 förblir oimplementerade och Level 8
  förblir `under_review`.

## Beslutspunkt

Steget är aktiverat lokalt genom D-020/B-011 med P-07 + F02 som första
finansiella berättelse (N5). Återstår: G3–G8 (B-012) och separat tillstånd till
extern kontakt eller inlämning (D-008). Inget sådant tillstånd är fattat.

## Verifiering 2026-11-25

| Kontroll | Resultat |
|---|---|
| Steg 5 definierat i `NARRATIV_INTEGRATION.md` och `WORKFLOW.md` | Ja, D-019. |
| Steg 4:s visuella modeller beskrivna i ord | Ja, `NARRATIV_INTEGRATION.md` §4. |
| Finansieringsspåret bevarat men nedgraderat till delspår | Ja, D-018 kvarstår historiskt. |
| Nya externa kontakter, konton eller ansökningar | Inga. |
| Nya personuppgifter | Inga. |
| Nya implementerade Cosmic Block-nivåer | Inga. |

## Status

**DEFINIERAT OCH LOKALT AKTIVERAT.** Definition, helhetsanalys och visuella
relationer är sparade. Första passet P-07/F02 har lokalt underlag, budget och
strategi. Ingenting är kontaktat, signerat eller skickat.
