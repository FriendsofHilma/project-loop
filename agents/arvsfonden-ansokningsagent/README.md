# Arvsfonden-ansökningsagent – lokal underlagsagent

**Status:** skapad och tagen i bruk 2026-11-25.  
**Syfte:** skriva och revidera ett *lokalt utkast* till ansökningstext hos Allmänna arvsfonden.  
**Ej:** en ansökan, en signatur, ett konto, en kontakt eller ett steg-4-aktiveringsmoment.

## Filer

| Fil | Innehåll |
|---|---|
| [`AGENT.md`](AGENT.md) | Agentens instruktioner, gränser och definition of done |
| [`SOURCES.md`](SOURCES.md) | Officiella källor, kontroldatum, kriterier, teckengränser och beviljade exempelprojekt |
| [`output/UTKAST_ARVSFONDEN.md`](output/UTKAST_ARVSFONDEN.md) | Första lokala utkastet, kopplat till Arvsfondens frågenummer (historiskt, orört) |
| [`output/PEER_SUPPORT_PATTERNS.md`](output/PEER_SUPPORT_PATTERNS.md) | Mönster från fyra beviljade peer support-projekt |
| [`output/UTKAST_ARVSFONDEN_2026-11-26.md`](output/UTKAST_ARVSFONDEN_2026-11-26.md) | Nytt daterat och fullständigare lokalt utkast med konkreta `[FÖRSLAG][?]`-siffror; arbetsnamn P-01 + P-04 och målgruppen ungdomar 12–25 år som `[FÖRSLAG][?]` |
| [`output/VERSIONSVAL_2026-11-26.md`](output/VERSIONSVAL_2026-11-26.md) | Versionsanalys 6.0 A mot 7.0 A; rekommenderar 7.0 A som `[FÖRSLAG][?]`, intygandet lämnas som placeholder |
| [`output/CHECK_RESULT_2026-11-26.md`](output/CHECK_RESULT_2026-11-26.md) | Resultat av teckengranskningen av det daterade utkastet (RESULT: PASS) |
| [`tools/check_draft.py`](tools/check_draft.py) | Kontroll av teckengränser i utkastet |

Agentdefinitionen finns i `.opencode/agents/arvsfonden-ansokningsagent.md` och behörigheterna i `.opencode/opencode.jsonc`.

## Anrop

Från föräldrasessionen används `subagent`-verktyget med agent-ID:t `arvsfonden-ansokningsagent`. En ny agent kan kräva att sessionen startas om eller laddar om konfigurationen innan den dyker upp i listan över tillgängliga subagenter. I TUI:n kan agenter väljas med `/agents` eller `Ctrl+X`, därefter `A`.

Rensa aldrig befintliga agenter eller deras filer. Denna agent är ett tillägg.

## Gränser

- Inga externa kontakter, e-postmeddelanden, ansökningar, konton, betalningar eller e-legitimationer.
- Inga personuppgifter i utkastet; endast placeholders.
- Ingen aktivering av steg 4 **från denna agent**. Agenten skapades under D-013/D-014 då `step_4_activated` var `false`; senare aktiverades och genomfördes steg 4 separat av användaren enligt D-017. Detta parallella spår är fortfarande pausat.
- Endast skrivrätt till denna katalog.

## Verifiering

Kör:

```bash
python project-loop/agents/arvsfonden-ansokningsagent/tools/check_draft.py project-loop/agents/arvsfonden-ansokningsagent/output/UTKAST_ARVSFONDEN.md
```

Resultatet från första körningen ligger i [`output/CHECK_RESULT.md`](output/CHECK_RESULT.md).

För det daterade utkastet körs:

```bash
python project-loop/agents/arvsfonden-ansokningsagent/tools/check_draft.py project-loop/agents/arvsfonden-ansokningsagent/output/UTKAST_ARVSFONDEN_2026-11-26.md
```

Resultatet ligger i [`output/CHECK_RESULT_2026-11-26.md`](output/CHECK_RESULT_2026-11-26.md).

**Ingen ansökan har skickats in.**
