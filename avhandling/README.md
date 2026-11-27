# Avhandling — *Cosmic Block* som gränsobjekt (arbetstitel)

**Status: `[FÖRSLAG][?]`** · Skapad 2026-11-26 · Skriven på svenska · Lokalt, ej publicerat

## Syfte

`avhandling/` är ett **nytt projekt** i workspaceets rot. Det samlar det befintliga
Cosmic Block-materialet i en disposition för en svensk akademisk avhandling. Den
centrala idén är att modellen — ett hierarkiskt heltalsfält där varje cell har värdet
0–9 — fungerar som ett *gränsobjekt* mellan matematik, fysik, konsthistoria och
metodlära `[I]`.

Uppgiften är inte att skriva om källtexterna, utan att:

1. ge dem ett kapitel- och bilageregister;
2. skilja etablerad teori, beräkningsresultat, egna experiment, hypoteser och
   overifyrade tolkningar åt;
3. formulera frågor som kan prövas eller falsifieras;
4. hålla varje påstående kopplat till en källa med angiven status.

Detta är ett **förslag**, inte en inlämnad avhandling, inte ett examinationsärende
och inte en publicering `[?]`.

## Statusmarkeringar

| Markering | Betydelse |
|---|---|
| `[E]` | Belägg. Typen anges alltid: *etablerad teori* (med källa), *beräkningsresultat* (rapporterat och reproducerbart) eller *eget lokalt experiment*. Om ett resultat bara är hämtat från en annan fil och inte omkört här skrivs `[E, rapporterat, ej omkört här]`. |
| `[I]` | Tolkning eller hypotes som vi står för men inte har bevisat. |
| `[?]` | Öppen, overifyrad eller ej antagen fråga/påstående. |

Markeringarna ersätter inte källhänvisningen; de kompletterar den.

## Relation till befintliga texter

Följande lästes vid starten och **ändras inte** av detta projekt:

- [`../AGENTS.md`](../AGENTS.md) — levande specifikation och status för nivåerna 1–9.
- [`../PAPER.md`](../PAPER.md) — det formella objektet, implementationen, de fyra
  disciplinära läsningarna och den metodologiska bilagan.
- [`../PAPER2.md`](../PAPER2.md) — HEAR, Top Ontology 2 och kandidaterna för nivå
  7–9, alla märkta `under_review`.
- [`../PAPER3.md`](../PAPER3.md) — läsarens svar: *The Key* som constraint,
  färg-dubbelbokning, oberoendet mellan nivå 4 och 8, anteckningsläsningen och
  Hamiltonskandidaten som avvisas som modell.

Avhandlingen är en **sekundär ordning**: den citerar, sammanställer och ställer
frågor. Den gör inte anspråk på att korrigera eller ersätta originalen `[I]`.

## Relation till projektloopen

[`../project-loop/README.md`](../project-loop/README.md) beskriver en iterativ
arbetsmodell ovanpå befintliga projekt, med regeln **bevara före förändring**.
`avhandling/` följer den regeln:

- inga original flyttas, raderas eller skrivs om;
- projektloopens steg aktiveras inte här, och inga beslut i `DECISIONS.md` skrivs om;
- avhandlingen är i dagsläget ett *möjligt utdrag* som projektloopen kan arkivera
  eller prioritera senare — det beslutet tas inte i detta projekt `[?]`;
- personas, finansiering och samverkan behandlas som dokumentation, inte som
  kontaktunderlag (se [kapitel 6](kapitel/kapitel-06-samverkan.md)).

## Relation till Villari-kopian

[`../knowledge/dissertation/README.md`](../knowledge/dissertation/README.md)
beskriver en **bearbetad forskningskopia**. Den auktoritativa källan är den
originala PDF:en i roten,
[`../HafK_Atom-Tree_Text_PROOF5_6-25-26.pdf`](../HafK_Atom-Tree_Text_PROOF5_6-25-26.pdf).
Kopian används för sökning, aldrig som auktoritet för citat, pagination eller
bildtolkning `[E: regel i Villari-README]`.

I detta projekt gäller:

- sidhänvisningar anges som **PDF-positioner från 1**, med tryckt sidnummer när
  det är känt;
- OCR-sidorna 214–223 och all text ur den bearbetade kopian måste kontrolleras mot
  original-PDF:en före citering `[?]`;
- materialet är upphovsrättsskyddat och får inte distribueras;
- inga citat har hämtats direkt ur kopian i denna omgång — historiska uppgifter
  återges som *rapporterade i* `PAPER.md`–`PAPER3.md` `[E, rapporterat, ej omkört här]`.

Se [BILAGA_C_kallor_och_provenans.md](bilagor/BILAGA_C_kallor_och_provenans.md) och
[provenans.md](provenans.md).

## Avgränsningar

- **Inga externa kontakter, publiceringar eller nedladdningar.** Inga personuppgifter
  samlas in, lagras eller publiceras.
- **Ingen bild har inspects.** Dimensionerna 13, 5 och 2 är tolkande antaganden,
  inte mätningar från målningen `[E: PAPER.md §1.3]`.
- **Riemann är inte löst.** Inget material i projektet påstår att
  Riemannhypotesen är bevisad, och denna avhandling gör inte det heller `[?]`.
  Se [kapitel 3](kapitel/kapitel-03-riemann.md).
- **Nivå 7–9 förblir oimplementerade** respektive `under_review` `[E: AGENTS.md,
  PAPER2.md §3.4]`.
- **Inga experiment har körts i `avhandling/`.** Alla tal och tester är hämtade från
  andra filer och märkta som rapporterade `[E, rapporterat, ej omkört här]`.

## Navigering

| Dokument | Innehåll |
|---|---|
| [`00_STRUKTUR.md`](00_STRUKTUR.md) | Disposition: 9 kapitel och bilagor A–F |
| [`forskningsfragor.md`](forskningsfragor.md) | Frågeställningar med status och falsifierare |
| [`bibliografi.md`](bibliografi.md) | Källor: befintliga, auktoritativa och planerade |
| [`provenans.md`](provenans.md) | Regler för ursprung, auktoritet och spårbarhet |
| [`kapitel/`](kapitel/kapitel-01-inledning.md) | Kapitel 1–7 |
| [`bilagor/`](bilagor/BILAGA_A_definitioner.md) | Bilagor A–F |

## Läget 2026-11-26

Skapad struktur med en skriven inledning och sex meningsfulla stubbar. Allt är
`[FÖRSLAG][?]` i väntan på mänskligt ställningstagande om examinationsform,
urval av källor och vilka av de rapporterade experimenten som ska omköras `[?]`.
