# Steg 1 – Medvetenskap och ordning

Källa: `project-loop/MASTERPROMPT.md` §3. Denna README beskriver steget; den utför ingen ytterligare inventering, refaktorering eller publicering.

## Syfte

Skapa ordning i den befintliga utvecklingsmiljön utan att radera historik. Steget ska förstå vad som redan finns, vad som behöver bevaras, vad som kan refaktoreras och vilka resultat som hör hemma hos respektive intressent. Masterpromptens princip är **bevara före förändring**.

## Indata

- Befintliga kataloger, filer, kod, dokumentation och eventuella Git-repositorier i workspacet.
- `AGENTS.md` och andra befintliga projektregler.
- Befintliga projektets README:er, särskilt `research-project/README.md` och `notes-assistant/README.md`.
- `project-loop/MASTERPROMPT.md`, `project-loop/README.md`, `project-loop/WORKFLOW.md`, `project-loop/CURRENT_STATE.md` och `project-loop/DECISIONS.md`.
- Befintligt underlag om Hilma Papers och Safe Trade Media enligt masterpromptens särskilda uppdrag.

## Arbetsuppgifter (från MASTERPROMPT.md)

1. Inventera hela det befintliga projektet.
2. Undersöka katalogstruktur, filer, kod, dokumentation och befintliga Git-repositorier.
3. Identifiera gamla experiment, prototyper och fungerande komponenter.
4. Identifiera dubbletter, övergivna filer och tillfälliga arbetsprodukter.
5. Identifiera vad som behöver arkiveras.
6. Identifiera vad som behöver refaktoreras.
7. Identifiera kod som kan återanvändas.
8. Dokumentera projektets befintliga arkitektur.
9. Identifiera vilka resultat som hör hemma hos respektive intressent.
10. Förbereda lämpliga GitHub-repositorier.

Inventeringen ska använda kategorierna: **Behåll och utveckla**, **Arkivera**, **Refaktorera**, **Flytta till annat projekt**, **Publicera som öppen källkod**, **Kräver mänskligt beslut**, **Kan avslutas**.

**Särskilt uppdrag – Hilma Papers och Safe Trade Media:** undersök en återanvändbar sök- och assistentfunktion som kan indexera dokument, hantera OCR-text, korrigera OCR-fel med bevarad källtext, skapa metadata, identifiera personer/begrepp/datum/ämnen, skapa semantiska sökindex, möjliggöra sökning med naturligt språk, ge svar med hänvisning till ursprungsdokument och sidnummer, hjälpa en forskningsassistent och återanvändas i Safe Trade Media. Undersök befintlig teknik först. Skilj originaldokument, OCR-transkription, korrigerad transkription, AI-genererade tolkningar, metadata och forskningsresultat. AI-genererad korrigering får aldrig skriva över originalmaterialet.

**Kodstädning och refaktorering:** identifiera oanvänd kod, ta bort onödig komplexitet där det är säkert, förbättra namngivning och struktur, skapa tester där det behövs, dokumentera beroenden och kontrollera att funktionaliteten fortfarande fungerar – i små, verifierbara steg.

**GitHub-strategi:** identifiera resultat för respektive organisation/repository och förbereda repository-förslag, README, licensförslag, dokumentation, teknisk arkitektur, installationsinstruktioner och issue-listor. Externa repositories får inte ändras utan godkännande.

## Förväntade resultat

En städad och dokumenterad utvecklingsmiljö, ett arkiv över tidigare arbete, en intressentkarta och förslag på GitHub-struktur. `project-loop/README.md` hänvisar till en nulägesrapport under `project-loop/reports/`; denna README påstår inte att rapporten är färdig eller har granskats här.

## Dokumentation

- Källtext: `project-loop/MASTERPROMPT.md` §3, steg 1.
- Arbetsflöde och tillstånd: `project-loop/WORKFLOW.md`, `project-loop/CURRENT_STATE.md`, `project-loop/DECISIONS.md`.
- Befintliga projekt: `AGENTS.md`, `research-project/README.md`, `notes-assistant/README.md`.
- Detaljrapporter kan produceras separat av andra arbetare; denna fil ändrar inga sådana rapporter.

## Beslutspunkt

Mänskligt godkännande krävs för radering, fysisk flytt, extern GitHub-publicering och val av målrepo/licens. Publicering till friendsofhilma är blockerad enligt `project-loop/DECISIONS.md`, D-004. Inget sådant beslut har fattats i denna fil.

## Övergång till nästa steg

När inventering och arkiv är verifierade går arbetet vidare till steg 2, som redan är aktiverat. Övergången innebär inte att steg 1 är stängt utan att kunskapsunderlaget används i omvärldsbevakningen.

## Status

**AKTIVERAT.** Endast beskrivande dokumentation har gjorts här. Inga kompletterande inventeringar, kodändringar, raderingar, flyttar eller publiceringar har utförts genom denna fil.
