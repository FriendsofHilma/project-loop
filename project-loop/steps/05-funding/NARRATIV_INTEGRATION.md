# Steg 5 – Narrativ integration

**Status:** DEFINIERAT 2026-11-25, **EJ AKTIVERAT**  
**Beslut:** D-019. Tidigare finansieringsdefinition i D-018 är bevarad som historiskt delspår, inte raderad.  
**Källa:** användarens formulering: ”Definera steg fem i projektloopen som narrativ integration generellt på alla nivåer, vilket också kan innebära att man kompilerar om vissa delar med zonix, eller andra verktyg och ser över andra relationer språkligen.”  
**Taggar:** `[E]` verifierad lokal källa, `[E-user]` användarens ord, `[I]` vår tolkning, `[ARG]` rekommendation, `[ANTAGANDE]` koppling som kräver beslut, `[?]` osäkert.

> Katalognamnet `05-funding` behålls enligt D-001. Det är en historisk etikett,
> inte längre en fullständig beskrivning av steget. `MASTERPROMPT.md` är
> ordagrant oförändrad enligt D-003; D-019 är ett lokalt operativt lager ovanpå
> den historiska steglistan.

---

## 1. Definition

**Narrativ integration** är den lokala, reproducerbara praktiken att föra samman projektets olika framställningar — matematiska, datorliga, visuella, textuella, muntliga och finansiella — till en sammanhängande berättelse där varje framställning behåller sin egen auktoritet, sitt eget omfång och sina egna osäkerheter. `[I]`

Det betyder **inte** ”skriv en snygg berättelse”. Det betyder:

- att kunna gå från en cell till ett byte, från ett byte till en figur, från en
  figur till en caption, från en caption till en källa och tillbaka — utan att
  byta föremål under vägen;
- att säga vilket av villkoren som gäller: förankrat `[E]`, tolkat `[I]`,
  påhittat `[M]`, osäkert `[?]` ellerHistoriskt/pausat;
- att låta olika medier vara **olika vittnen**, inte kopior av varandra;
- att integrera utan att sudda ut skillnaden mellan identitet, analogi och
  metafor.

Ordet *narrativ* är här alltså inte en licens för fiction. Tvärtom: det är en
disciplin för att hålla reda på vad som är belagt, vad som är tolkat och vad som
inte finns. I projektet används redan `[E]`, `[I]`, `[M]` och `[?]` i
`novel/`; narrativ integration för den vanan över hela projektloopen.

### 1.1 ”på alla nivåer”

Steg 5 är **inte** en ny matematisk nivå i Cosmic Block. Det inför ingen typ och
ingen struktur. Det är en tvärgående praktik som verkar över:

| Område | Vad som integreras | Gräns |
|---|---|---|
| Cosmic Block L1–L3 | cell, linje, plan, tensor; värde och granngenskap | oförändrad datamodell |
| L4–L5 | samlingar och högre ordning; series och komplementära par | inga nya konstruktörer |
| L6 | involutionen `n ↦ 9 − n` somvärdemässig berättelse | ingen typ tvingar komplement |
| L7 och L9 | tystnad; avsiktligt odefinierat | **skall inte fyllas med berättelse** |
| L8 | kandidatincidens/temporal vy i `PAPER2.md` | förblir `under_review` |
| Projektloopens steg 1–9 | inventering → kunskap → projekt → form → integration → implementation → spridning → lärande → förnyelse | steg 5 är bindningen, inte ersättaren |
| Artefakter | TypeScript-modell, C-fil, Zonix-bygge, figurer 1–8, viewer, artiklar, notebookmodell, roman, narration | varje artefakt behåller sin provenans |

Siegels fjärde domän, *memory integration*, används fortfarande som designheuristik `[I]` enligt D-015 — inte som kliniskt påstående. Narrativ integration är vidare än minnesintegration: den omfattar också verktyg, figurer, språk och beslut. `[I]`

---

## 2. Vad narrativ integration betyder i praktiken

En integration kan vara teknisk. Att kompilera om `cosmic-block-c/` med `znx` är inte bara bygghygien; det är en andra berättelse om samma offsetkarta. Om samma `src/` och `tests/` ger 87/87 även under ett annat verktyg, har påståendet ”lagringen är en kub av byteadresser” fått ett nytt vittne. Det är `[E]` för händelsen och `[I]` för tolkningen att berättelsen blivit starkare. Enligt `AGENTS.md` har detta redan skett: båda binärerna byggdes, `test_cosmic.exe` passerade 87/87, utan ändring i källa eller tester. Här sker **ingen ny kompilering**; det är ett exempel på vad steget kan innehålla efter aktivering. `[E-secondary][I]`

En integration kan vara visuell. Figurerna i `figures/` är inte dekor efter beräkningen; de är argument i en annan grammatik. Steg 4 gav dem en gemensam röst. Steg 5 frågar hur rösterna hänger ihop: vilken figur talar om färg, vilken om relation, vilken om adress, och vilken sätter ihop dem i en interaktiv miljö.

En integration kan vara språklig. Ord som *komplement*, *involution*, *granngenskap*, *offset*, *serie*, *samling*, *minne*, *tystnad* och *under_review* bär struktur. Att ”se över andra relationer språkligen” `[E-user]` betyder att kontrollera att samma ord inte betyder olika saker i `PAPER.md`, `PAPER2.md`, `PAPER3.md`, `novel/`, `narration/` och projektloopens dokument. Det gäller också personas: Tyler Kane och Doris Fleur X är fiktiva enligt D-006, medan masterpromptens ”Doris Flör” citeras ordagrant enligt D-005. Översättningar ur `hilma-translation/` är maskinöversatta och får inte citeras som primärkälla utan kontroll mot svenskan.

En integration kan vara finansiell — men då som **en** berättelse bland flera. `KORNINGSPLAN.md`, `MATCHNINGSMATRIS.md` och `MALL_ANSOKNINGSUNDERLAG.md` förblir lokalt underlag. Ingen ansökan, kontakt, signatur eller betalning ingår i narrativ integration (D-008). Arvsfonden är pausad enligt D-014.

---

## 3. Situationen just nu, sedd som helhet

Just nu är projektet inte en rak kedja. Det är snarare ett rum där samma underliggande struktur berättas på flera sätt, med olika grader av auktoritet. `[I]`

I kärnan finns en medvetet liten matematik: en cell är ett heltal 0–9, och dimensionerna är konfigurerbara. Den är inte stor, men den är stringent. Levels 1–5 är implementerade och verifierade i TypeScript; Level 6 är dokumenterad som ett komplementärt mönster; Levels 7 och 9 är tysta; Level 8 har en kandidatrelation i `PAPER2.md` men är inte antagen som typ. Denna tystnad är en del av berättelsen, inte ett hål att fylla. `[E]`

Vid sidan av kärnan finns en andra berättelse om **lagring**. I `cosmic-block-c/` är filen inte en serialiserad kopia av en minnesstruktur; varje cell nås direkt på ett beräknat byteoffset. Zonix-bygget visar att den berättelsen inte är bunden till en enda compiler. Det är en ovanligt konkret form av integration: samma tal, samma grannskap, men ett annat verktyg måste ändå hitta rätt byte. `[E-secondary][I]`

Ovanpå detta ligger en visuell berättelse. Figurerna 1–5 hör till artiklarnas argument. Figurerna 6–8 och viewern hör till steg 4:s grafiska profil. De är inte ännu en matematisk nivå; de är sättet matematiken får synlig form på. Här finns en viktig försiktighet: referensmålningen aldrig avkodades av byggagentens bildpipeline, och färgläsningen av *The Key* är overifierad. En pixelundersökning fann inget rött i de tre fotografierna. Den osäkerheten måste bäras med i varje visuell berättelse. `[E]`

Vidare finns en språklig berättelse. `PAPER.md`, `PAPER2.md` och `PAPER3.md` skriver om samma objekt i olika register. `notes-assistant/` hämtar och räknar ur de engelska maskinöversättningarna. `novel/` gör en annan sak: den läser anteckningarna som en praktik av översättning, inte som en fix lära — och märker `[E]`, `[I]` och `[M]` hela vägen. `narration/` ger texten röst men gör inte anspråk på röstkloning. Dessa lager är inte motsägelser; de är olika sätt att lyssna på samma material. `[E]`

Projektloopen själv har hittills gått ordnat: steg 1 bevarade, steg 2 kartlade, steg 3 rangordnade, steg 4 formgav. Men just där uppstår spänningen. Ju fler representationer vi har, desto större är risken att de börjar leva separata liv: en figur utan caption, ett bygge utan tolkning, ett citat utan sida, en röst utan rättighetsbeslut. Narrativ integration är motmedlet. Den låter mångfalden finnas men kräver att varje del kan peka tillbaka på något. `[I]`

Det som saknas just nu är därför inte mer kod i första hand. Det är mänskliga beslut om vad som ska knytas ihop först: ett verktyg, en figur, ett språkligt begrepp eller ett finansieringsspår. D-008 och D-016 sätter gränsen: integrationen är intern och lokal; samverkan med andra kommer i steg 6–7, och kontakt kräver separat godkännande. `[E]`

---

## 4. Hur steg 4:s nya visuella modeller förhåller sig till varandra

**`fig6-profile-board.svg` är rösten.** Den visar inte tensor-data i första hand. Den visar reglerna för hur data får visas: färg, typografi, caption, taggar och prydlighet. Den är närmast en liten konstitution eller partitur. Utan den skulle de andra figurerna vara vackra men oansvariga. Den talar om *hur* något får sägas visuellt. `[E][I]`

**`fig7-complement-chord.svg` är relationen.** Den tar värdemässig komplementaritet — `n ↦ 9 − n`, till exempel 7 och 2 — och gör den om till en båge mellan två lägen. Den handlar inte om var en cell ligger i rummet utan om hur två värden hör ihop i alfabetet 0–9. Den lånar sin färg från figur 6, men säger något eget: varje tal har en partner. Det är af Klint-inspirerad dualitet översatt till strikt aritmetik, utan att påstå att involutionen är en typ. `[E][I]`

**`fig8-offset-map.svg` är adressen.** Den svarar på en annan fråga än figur 7: inte ”vilket värde hör ihop med detta?” utan ”var finns den här cellen?” Den visar hur `(x, y, z)` blir en position i en sammanhängande byteföljd, och hur granngenskap blir `+1`, `+13` och `+169` i standardfallet. Den är bron mellan den matematiska kuben och C-implementationens mappade fil. När `(0,0,6,7,8)` med värdet 9 återfinns på byte 5209 är det figur 8:s berättelse som blir fysisk. `[E][I]`

**`viewer/index.html` är mötet.** Den tar figur 6:s färger, figur 7:s komplementoperation och figur 8:s koordinatlogik och sätter ihop dem i ett 13³-punktsmoln som kan roteras, filtreras och vändas. När filtret `v=7` visar 217 celler och komplementet `9−7=2` visar 223, ser vi något instruktivt: operationen är symmetrisk, men demodatan `(x + y + z) mod 10` behöver inte vara det. Viewern är alltså inte en ny modell av Cosmic Block. Den är en interaktiv läsning av samma modell där tre tidigare figurer får tala samtidigt. `[E][I]`

I en enda mening: **figur 6 ger rösten, figur 7 ger paret, figur 8 ger adressen, och viewern låter dem tala tillsammans.** Figurerna 1–5 står kvar som artiklarnas äldre vittnen; figurerna 6–8 är inte ersättare utan en andra ordning av vittnen — de visar hur vi visar. `[I]`

Det är just denna relation narrativ integration ska vårda: inte att göra figurerna lika, utan att göra olikheten begriplig. `[I]`

---

## 5. Arbetsformer vid aktivering

Ingen av dessa är igångsatt här.

| Id | Arbetsform | Vad som kontrolleras |
|---|---|---|
| N1 | Frys källor | hashar för vald källtext, figur, kod och körningslogg |
| N2 | Verktygsvittne | TypeScript build/test, Zonix eller annat verktyg, XML-parse, webbläsare — vad bekräftar varandra? |
| N3 | Visuell relation | figur 6 → 7 → 8 → viewer; caption och färg följer godkänd v0.1 |
| N4 | Språklig relation | samma begrepp i artiklar, anteckningar, roman och narration; `[E]/[I]/[M]/[?]` sitter nära påståendet |
| N5 | Finansiell berättelse | D-018-materialet läses som ett delspår, aldrig som inlämning |
| N6 | Granskningsberättelse | kort lokal text: vad integrationspasset band samman, vad det lämnade öppet |

Stoppregel: om en koppling bara är analogi skrivs den som `[I]` eller `[ANTAGANDE]`; om den rör L7/L9 skrivs den inte alls som implementerad. `[ARG]`

## 6. Gränsbevakning

- Inga externa konton, e-postmeddelanden, ansökningar, signaturer, betalningar eller publiceringar (D-008).
- Ingen samverkan aktiveras i detta steg; den hör hemma i steg 6–7 (D-016).
- Inga befintliga filer raderas eller flyttas (D-001).
- `MASTERPROMPT.md` och den publicerade repon förblir historiska (D-003/D-009).
- Cosmic Block Levels 7 och 9 förblir oimplementerade; Level 8 förblir under granskning.
- Arvsfonden förblir pausad tills användaren väljer annat (D-014/B-008/B-009).

## 7. Definition av klart för ett integrationspass

Ett pass är klart när:

- [x] step 5 är definierat som narrativ integration i denna fil och i `WORKFLOW.md`;
- [x] situationen är analyserad i ord, inte bara i tabeller;
- [x] figurernas inbördes relation är beskriven i ord;
- [x] inget nytt Cosmic Block-level förklarats vara implementerat;
- [x] ett första integrationspass är valt av en människa: P-07 + F02 som
  finansiell berättelse (N5), enligt D-020;
- [x] steget är aktiverat lokalt genom ett separat beslut (D-020/B-011).

## 8. Godkännande och aktivering 2026-11-25

Användaren bekräftade analysen med orden: ”Jättebra skrivet om situationen just
nu. Se till att spara det ordentligt.” Dokumentet är sparat här oförändrat i
sin redaktionella form; fristående kontrollsumma förs i `DECISIONS.md` D-020 och
`state/progress.json` P-020.

Därefter aktiverades steg 5 lokalt med orden ”Aktivera steg 5 med P-07 och F02”.
Tolkningen är avsiktligt snäv: P-07 och F02 blir **första finansiella
berättelsen** inom narrativ integration (N5), inte en inlämning. Ingen kontakt,
behörighetsintyg, signatur eller ansökan följer av aktiveringen (D-008). Om
frasen endast var avsedd som sparad text kan aktiveringen supersederas genom ett
nytt beslut utan att något externt behöver återkallas.

**Status:** definition och analys godkända och sparade; steg 5 lokalt aktiverat;
första pass P-07/F02 levereras som lokalt underlag.
