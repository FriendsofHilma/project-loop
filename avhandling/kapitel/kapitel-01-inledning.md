# Kapitel 1 — Inledning

**Status: `[FÖRSLAG]`** · Hör till [`00_STRUKTUR.md`](../00_STRUKTUR.md)

## 1.1 Ämnet

*Cosmic Block* är ett hierarkiskt heltalsfält byggt på ett enda primitiv: en cell
med ett heltal mellan 0 och 9, initialt 0 `[E: etablerad definition,
AGENTS.md §1; PAPER.md §2.1]`. Cellerna staplas till linje, plan, modellrum,
samling och högre ordningens samling; med standardmåtten blir det sistnämnda
`2 × [5 × (13 × 13 × 13)]`, alltså 21 970 celler `[E: beräkningsresultat,
PAPER.md §2.2–2.3, §5.2]`. Strukturen är alltså liten nog att skriva ner och
stor nog att vara intressant.

Det ovanliga är inte själva staplingen utan dess motivation. Måtten togs som ett
tolkande svar på en målning av Hilma af Klint, inte som en mätning av den
`[E: PAPER.md §1.3, Caveat 1]`. Den som byggde modellen kunde inte läsa bilden;
därför är 13, 5 och 2 antaganden som kan ersättas, inte resultat som ska försvaras.
Detta är den första av flera punkter där projektets egen metod kräver att vi säger
vilket slags påstående vi gör.

Tre texter ligger redan före denna avhandling: [`PAPER.md`](../../PAPER.md) om
objektet och fyra disciplinära läsningar, [`PAPER2.md`](../../PAPER2.md) om
forskningsprogrammet HEAR och ontologin kring nivå 7–9, samt
[`PAPER3.md`](../../PAPER3.md), en readers respons med källkritik, anteckningsläsning
och ett litet oberoendebevis. De är working papers. Den här avhandlingen är ett
*förslag till hur de kan bli en monografi* — inte en fjärde paper och inte en
redaktionell överskrivning `[I]`.

## 1.2 Syfte och frågeställning

Syftet är att pröva om det formella objektet bär en akademisk argumentation som är
strengare än den enskilda textens. Tre frågegrupper styr arbetet; den fullständiga
listan med status och falsifierare finns i
[`forskningsfragor.md`](../forskningsfragor.md).

1. **Vad är objektet?** Vilka nivåer är definitioner, vilka är beräkningsresultat
   och vilka är tomma platser? (Kapitel 2.)
2. **Vad tillåter analogin?** Kan talteoretiska och spektrala bilder användas som
   *villkor* på formaliseringen utan att bli påståenden om världen? (Kapitel 3.)
3. **Hur vet vi det vi säger oss veta?** Vilka källor är auktoritativa, vilka är
   bearbetade kopior, och vilka experiment är omkörda? (Kapitel 4–5.)

Svarsformen är medvetet asymmetrisk `[I]`. Matematiska påståenden får vara
skarpa; historiska påståenden får vara källbundna; tolkningar får finnas, men ska
inte låtsas vara bevis. Det är samma uppdelning som `PAPER2.md` kallar *intelligent
humility*, men här tillämpad på dispositionen snarare än på ontologin.

## 1.3 Avgränsning

Fyra avgränsningar bör sägas innan något annat läses:

- **Ingen lösning av Riemann.** Inget av de lästa dokumenten påstår att
  Riemannhypotesen är löst, och denna avhandling gör inte det heller `[?]`.
  Kapitel 3 handlar om *analogins gräns*, inte om ett bevis. Literaturen om
  zetafunktionen är ännu inte genomgången i detta projekt `[?]`.
- **Ingen fysik i dag.** Modellen har inget tidsparameter, ingen energi och ingen
  rörelse; den är ett konfigurationsutrymme, inte en dynamisk teori
  `[E: PAPER.md §1.3 Caveat 2 och §6.4]`.
- **Ingen bild har inspects.** Färgläsningar av *The Key* vilar på fotografens
  beskrivning och en grov färgräkning där det påstådda röda fältet mätte 0,0 %
  röda pixlar i alla tre filer `[E: beräkningsresultat, PAPER3.md §2.2 och
  Appendix C]`. Diskrepansen registreras, inte förklaras bort.
- **Nivå 7–9 är inte antagna.** De är antingen oimplementerade eller `under_review`
  `[E: AGENTS.md §2; PAPER2.md §3.4]`. Projektets vana att avstå från att fylla
  odefinierade nivåer tillämpas även här.

Dessutom gäller för detta nya projekt: inga externa kontakter, inga
publiceringar, inga nedladdningar och inga personuppgifter `[E: projektregel i
uppdraget]`.

## 1.4 Material ochstatus

Materialet har tre olika auktoritetsnivåer, samlade i
[`provenans.md`](../provenans.md) och [`bibliografi.md`](../bibliografi.md):

- **Primärt och auktoritativt:** original-PDF:en av Villaris avhandling i
  workspaceets rot samt de transkriberade antecknings-PDF:erna. Den bearbetade
  kopian i [`knowledge/dissertation/`](../../knowledge/dissertation/README.md) är
  ett sökverktyg, inte en citatkälla `[E: källregel]`.
- **Sekundärt och projektinternt:** `PAPER.md`–`PAPER3.md`, `AGENTS.md` och
  projektloopens dokument. Härifrån kommer de flesta siffror i denna avhandling,
  och de märks därför `[E, rapporterat, ej omkört här]` tills någon kör om dem.
- **Eget i detta projekt:** endast dispositionen, statusmarkeringarna och
  frågeformuleringarna. Inga mätningar eller tester har gjorts här `[?]`.

Anteckningscitat är, där de förekommer i underlaget, maskinöversättningar och ska
kontrolleras mot svenska källan före återanvändning `[E: PAPER.md Caveat 5;
PAPER3.md Appendix A]`. Den lokala modellen i `notes-assistant/` är ett
sökinstrument, inte en generativ modell och inte en auktoritet om avsikt
`[E: PAPER3.md §9]`.

## 1.5 Disposition

[`00_STRUKTUR.md`](../00_STRUKTUR.md) ger det fullständiga registret. Kort:
kapitel 2 beskriver objektet, kapitel 3 prövar den Riemann-analoga gränsen,
kapitel 4 och 5 behandlar metod och implementation, kapitel 6 samverkan och etik,
och kapitel 7 är en provisorisk syntes. Kapitel 8–9 står tomma tills syftet är
klart. Sex bilagor (A–F) innehåller definitioner, experimentinventarium,
provenans, terminologi, öppna frågor och uppdateringslogg.

## 1.6 Arbetsform

Projektet ligger ovanpå befintliga kataloger och följer projektloopens regel
**bevara före förändring** `[E: project-loop/README.md]`. Det innebär konkret att
`PAPER.md`–`PAPER3.md`, `knowledge/dissertation/` och `project-loop/` lämnas
orörda och att avhandlingen hänvisar till dem med relativa länkar. Personer som
nämns i underlaget — Villari, Siegel, af Klint — nämns som källor eller som
föremål för historiska påståenden, inte som kontakter. De fiktiva personaerna i
`PAPER3.md` och projektloopen behandlas som dokumentära deviseer `[I]`.

Det som ännu saknas är ett mänskligt beslut om examinationsform, om vilka
rapporterade tester som ska omköras och om målningen ska mätas av en person med
bilden i sikte `[?]`. Tills dess förblir hela arbetet ett förslag.
