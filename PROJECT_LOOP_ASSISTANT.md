# PROJECT_LOOP_ASSISTANT.md

Beskrivning av den första enkla lokala project-loop-assistenten införd
2026-11-26. Assistenten är **en agent**, `project-loop-assistant`, med
implementering i `.opencode/agents/project-loop-assistant.md` och permissions i
`.opencode/opencode.jsonc`.

Detta dokument beskriver gränssnitt och state-schema. **Inga state-filer
ändrades när detta dokument skrevs.** `current_step.json`, `progress.json`,
`backlog.json`, `CURRENT_STATE.md`, `WORKFLOW.md` och `MASTERPROMPT.md` är
oförändrade av denna införandeåtgärd.

## Syfte och gräns

Användaren ska kunna köra loopen upprepade gånger, men **inte** låta agenten
gå igenom alla nio steg automatiskt. Ett kommando per mänsklig tur, och varje
kommando slutar i en checkpoint som väntar på mänskligt svar.

Assistenten:

- använder inga subagenter och gör inga nätverksanrop;
- läser befintliga projekt som källor men ändrar inte dem;
- skriver bara i `project-loop/state/*.json`, `project-loop/DECISIONS.md` och
  `project-loop/reports/**`;
- stoppar alltid före extern kontakt, publicering/push, signatur, betalning,
  personuppgifter, radering/flytt av viktiga filer och stegövergång.

Vid konflikt mellan `WORKFLOW.md` 1.6 och den nya beskrivningen av steg 7–9
(2026-11-26) gäller den senare för steg 7–9 i denna assistent. Konflikten
loggas som ett beslut; historiska dokument skrivs inte om. Steg 4–6 behåller
sina lokala omdefinitioner från D-015/D-017, D-019/D-020 och D-021/D-022.

## Anrop: nio steg med stabila alias

Aliaset är en stabil plats i loopen. Om ett steg omdefinieras senare behålls
anropsnamnet (`step4` … `step9`), medan den nya definitionen skrivs in med
datum och beslut-ID. Ingen definition raderas.

| Anrop | Alias | Källa för nuvarande definition | Output |
|---|---|---|---|
| `step1` | `awareness_and_order` | WORKFLOW 1.6 | Nulägesrapport, inventering, intressentkarta |
| `step2` | `network_and_horizon_scanning` | WORKFLOW 1.6 | Kunskapsunderlag, källmärkt |
| `step3` | `project_formulation_and_prioritization` | D-011/D-012 | Prioriterad rapport + portfölj-JSON |
| `step4` | `aesthetic_integrity` | D-015/D-017 | Grafisk profil, trogen visualisering |
| `step5` | `narrative_integration` | D-019/D-020 | Narrativ integration på alla nivåer |
| `step6` | `state_integration` | D-021/D-022 | Självberättelse mot ordagrann efterfrågan |
| `step7` | `interpersonal_integration` | Masterprompt 2026-11-26 | Stakeholder relationship map, profiler, collaboration/dependency map, kommunikations- och samverkansmöjligheter |
| `step8` | `strategic_coordination` | Masterprompt 2026-11-26 | Tidsbunden strategi med beroenden, milstolpar, ansvariga och uppföljning |
| `step9` | `synthesis_consolidation_recovery` | Masterprompt 2026-11-26 | Syntes, avhandling/appendix, repositoryordning, reflektion, kort drake-skärmsläckarpaus |

Steg 7–9 ligger i nuläget under `prepared_steps`. De körs inte utan explicit
aktivering.

### Taggar per steg

- **Steg 7:** `verified` → `[E]`, `reported` → `[E-secondary]` (eller `[?]` om
  källan inte är läst), `hypothesized` → `[?]`. Relationer mellan intressenter
  beskrivs som observerade mönster, inte som påståenden om avsikter.
- **Steg 8:** `confirmed` → `[E]`, `proposed` → `[I]`, `speculative` → `[?]`.
  Tidshorisont: omedelbart / kort / medellångt / långsiktigt.
- **Steg 9:** reflekterande slutsatser märks `[I]`, verifierade
  konsolideringar `[E]`, osäkra `[?]`. Drake-skärmsläckarpausen är skippbar,
  aldrig blockerande och sker först efter sparad och verifierad state.

## Kommandon och protokoll

| Kommando | Verkan | Stopp |
|---|---|---|
| `status` | Read-only lägesbild ur state-filerna | Ingen skrivning, men avslutas med checkpoint och väntar på nästa kommando |
| `start step N` | Förbereder aktivering av just N; `N` kan vara `step4` eller `aesthetic_integrity` | Checkpoint före skrivning av `active_steps`/`step_N_activated` |
| `resume` | Läser om state och fortsätter inom samma steg | Stannar vid senaste obesvarade checkpoint; går aldrig förbi |
| `repeat step N` | Nytt pass med nytt beslut-ID och ny versionerad fil | Checkpoint före körning; ingen överskrivning av tidigare leverans |
| `redirect` | Ändrar riktning inom aktuellt steg | Loggar gammal/ny riktning + orsak; checkpoint före åtgärd |
| `report` | Skriver ny tidsstämplad rapport i `reports/` | Nytt filnamn, aldrig överskrivning |
| `checkpoint` | Sammanfattar och pausar | Alltid; väntar på explicit mänskligt svar |

`status` är det enda kommandot som inte skriver. **Alla** kommandon, även
`status`, avslutas med checkpoint. Okända kommandon leder till ingen åtgärd och
en fråga om avsikten.

### Checkpointar som implementerats

1. **Före utförande** – plan och berörda filer visas innan första skrivning.
2. **Vid steggräns** – aktivering, stegövergång och grindar (G1–G8, S1–S8).
3. **Vid extern handling** – e-post/meddelande/webbpost/API utåt, GitHub
   issue/PR/push, publicering eller delning.
4. **Vid signatur/ekonomi** – intygande, ansökan, betalning, transaktion.
5. **Vid personuppgifter** – insamling, lagring, ändring eller delning.
6. **Vid destruktiv/strukturell ändring** – radering, flytt, överskrivning av
   original, `MASTERPROMPT.md`, figurer, state-filer eller repo-struktur.
7. **Efter utförande** – verifiering, loggning och paus; ingen fortsättning.
8. **Före `repeat`/`redirect`** – nytt pass eller ny riktning kräver eget
   godkännande.

## State-schema (beskrivning, inte skrivet nu)

### `project-loop/state/current_step.json`

Befintliga nycklar behålls. Relevanta fält:

```jsonc
{
  "workflow": "project-loop",
  "version": "1.6",
  "current_step": 6,
  "active_steps": [1, 2, 3, 4, 5, 6],
  "prepared_steps": [7, 8, 9],
  "step_4_definition": "aesthetic_integrity_and_graphic_profile",
  "step_5_definition": "narrative_integration_all_levels",
  "step_6_definition": "state_integration_all_partner_relations",
  "status": "...",
  "last_completed_task": "...",
  "next_action": "...",
  "requires_human_approval": true,
  "blockers": [],
  "updated": "2026-11-25"
}
```

Assistenten får **additivt** lägga till ett eget block (först vid godkänt
kommando, aldrig vid införandet):

```jsonc
"assistant_loop": {
  "assistant": "project-loop-assistant",
  "last_command": "status | start step N | resume | repeat step N | redirect | report | checkpoint",
  "step_aliases": {
    "step4": "aesthetic_integrity",
    "step5": "narrative_integration",
    "step6": "state_integration",
    "step7": "interpersonal_integration",
    "step8": "strategic_coordination",
    "step9": "synthesis_consolidation_recovery"
  },
  "last_checkpoint": {
    "id": "CP-NNN",
    "timestamp": "YYYY-MM-DDTHH:MM:SS±HH:MM",
    "decision": "D-NNN",
    "step": 7,
    "alias": "interpersonal_integration",
    "status": "awaiting_human"
  }
}
```

Regler: `active_steps` och `prepared_steps` ändras bara efter mänskligt
godkännande; `*_activated`-flaggor sätts aldrig av enbart en omdefinition;
`current_step` flyttas bara vid godkänd stegövergång.

### `project-loop/state/progress.json`

Append-only. Ny post:

```jsonc
{
  "id": "P-NNN",
  "date": "YYYY-MM-DDTHH:MM:SS±HH:MM",
  "phase": "STEG N – alias",
  "task": "kort beskrivning av kommandot",
  "status": "done | prepared | awaiting_human | blocked",
  "evidence": "filväg(er), verifieringssätt, beslut-ID, källhänvisning, [E]/[I]/[?]"
}
```

Befintliga poster `P-001`–`P-022` lämnas orörda; nästa nummer tas från filen
(för närvarande förslagsvis `P-023`, men kontrollera alltid).

### `project-loop/state/backlog.json`

Append-only för nya godkännanden/blockers. Ny post:

```jsonc
{
  "id": "B-NNN",
  "step": 7,
  "title": "beslut som kräver människa",
  "status": "needs_human_decision | needs_input | activated_awaiting_...",
  "evidence": "D-NNN; källhänvisning; tagg",
  "priority": "high | medium | low"
}
```

Befintliga poster `B-001`–`B-014` lämnas orörda utan dokumenterat beslut;
nästa nummer kontrolleras i filen (för närvarande förslagsvis `B-015`).

### `project-loop/DECISIONS.md`

Append-only. Varje ny post innehåller:

- `D-NNN` (nästa lediga; senast känd är D-022)
- tidsstämpel ISO 8601 med tidszon
- kommando, stegnummer och alias
- mänsklig instruktion, citerad ordagrant när den finns
- lästa och skrivna filer
- källhänvisning: sökväg + rad/sida, eller URL med åtkomstdatum
- minst en tagg: `[E]`, `[I]`, `[?]` (`[E-secondary]` för läst sekundärkälla)
- verifiering och checkpoint-ID (`CP-NNN`) med status `awaiting_human`

### `project-loop/reports/**

Rapporter skrivs med nytt filnamn, t.ex.
`reports/PROJECT_LOOP_ASSISTANT_2026-11-26_01.md`. Innehåll: lägesbild,
kommando, steg/alias, källor, beslut-ID, taggar, verifiering, öppna
checkpointar, nästa rekommenderade åtgärd och vilka projekt som påverkas.

## Reproducerbarhet

Varje skriven rad ska kunna spåras: **tidsstämpel → beslut-ID → kommando →
källhänvisning → tagg → checkpoint**. Om en källa inte kan anges, skriv `[?]`
och begär mänskligt indata i stället för att gissa. Efter varje skrivning
kontrolleras att JSON-filerna parser och att tidigare poster är byte-identiska.

## Status för denna införandeåtgärd

- Skapade: denna fil och `.opencode/agents/project-loop-assistant.md`.
- Ändrad additivt: `.opencode/opencode.jsonc` (ny agent + permissions).
- Ej ändrad: alla state-filer, `DECISIONS.md`, `WORKFLOW.md`,
  `CURRENT_STATE.md`, `MASTERPROMPT.md` och befintliga projekt.
- Inga checkpointar är öppna från införandet; första kommando från användaren
  avgör vilken checkpoint som öppnas.
