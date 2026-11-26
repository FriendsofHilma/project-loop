# Projektloopen

Iterativ arbetsmodell för forskning, utveckling, arkivering, trogen
visualisering och samverkan i detta workspace. Regeln är **bevara före
förändring**: ingen radering, inget överskrivet originalmaterial och inga
externa publiceringar utan uttryckligt mänskligt godkännande.

Masterprompten är bevarad ordagrant i [`MASTERPROMPT.md`](MASTERPROMPT.md) och
publicerad under CC BY 4.0 på
[github.com/FriendsofHilma/project-loop](https://github.com/FriendsofHilma/project-loop)
(verifierad byte-identisk 2026-11-25). Den nya prompten från 26 november ligger
som [`MASTERPROMPT_2026-11-26.md`](MASTERPROMPT_2026-11-26.md) — den skriver inte
över originalet. `WORKFLOW.md` 2.1 och `DECISIONS.md` gäller för den lokala
operativa tolkningen; den publicerade `GITHUB_REPO_README.md` är historisk.

## Startpunkter

| Fråga | Fil |
|---|---|
| Var är vi? | [`CURRENT_STATE.md`](CURRENT_STATE.md), [`state/current_step.json`](state/current_step.json) |
| Vad har vi gjort? | [`state/progress.json`](state/progress.json), [`reports/`](reports/) |
| Vad återstår? | [`state/backlog.json`](state/backlog.json) |
| Vad väntar på beslut? | [`DECISIONS.md`](DECISIONS.md) |
| Hur fungerar loopen? | [`WORKFLOW.md`](WORKFLOW.md) |
| Hittar jag allt på en gång? | [`../hemsida/index.html`](../hemsida/index.html) — lokal grafisk översikt med nio klickbara stegbilder |
| Vad betyder steg 4 nu? | [`steps/04-partnerships/README.md`](steps/04-partnerships/README.md) — **genomfört 2026-11-25** |
| Grafisk profil v0.1, godkänd | [`steps/04-partnerships/GRAFISK_PROFIL.md`](steps/04-partnerships/GRAFISK_PROFIL.md) |
| Interaktiv lokal viewer | [`steps/04-partnerships/viewer/index.html`](steps/04-partnerships/viewer/index.html) |
| Vad betyder steg 5 nu? | [`steps/05-funding/NARRATIV_INTEGRATION.md`](steps/05-funding/NARRATIV_INTEGRATION.md) — narrativ integration, lokalt aktiverad med P-07/F02 (D-019/D-020) |
| P-07/F02-lokalt underlag | [`ANSOKNINGSUNDERLAG_P-07.md`](steps/05-funding/ANSOKNINGSUNDERLAG_P-07.md), [`BUDGET_P-07.csv`](steps/05-funding/BUDGET_P-07.csv), [`FINANSIERINGSSTRATEGI.md`](steps/05-funding/FINANSIERINGSSTRATEGI.md) — inte inskickat |
| Vad betyder steg 6 nu? | [`steps/06-implementation/README.md`](steps/06-implementation/README.md) — state integration, aktiverad lokalt men väntar partner/efterfrågan (D-021/D-022/B-013) |
| Steg 6-analys och körning | [`STATE_INTEGRATION.md`](steps/06-implementation/STATE_INTEGRATION.md), [`ERBJUDANDE_MOT_EFTERFRAGAN.md`](steps/06-implementation/ERBJUDANDE_MOT_EFTERFRAGAN.md), [`KORNINGSPLAN_STEG6.md`](steps/06-implementation/KORNINGSPLAN_STEG6.md), [`MALL_TILLSTANDSJAMFORELSE.md`](steps/06-implementation/MALL_TILLSTANDSJAMFORELSE.md) |
| Siegel och state integration | [`steps/06-implementation/SIEGEL_DOMAN_6.md`](steps/06-implementation/SIEGEL_DOMAN_6.md) — domän 6 som designheuristik, inte terapi |
| Historiskt finansieringsspår | [`steps/05-funding/KORNINGSPLAN.md`](steps/05-funding/KORNINGSPLAN.md) och [`MATCHNINGSMATRIS.md`](steps/05-funding/MATCHNINGSMATRIS.md) — bevarat delspår |
| Siegel och formatering | [`steps/04-partnerships/SIEGEL_DOMAN_4.md`](steps/04-partnerships/SIEGEL_DOMAN_4.md) |
| Nulägesinventering | [`reports/NULAGESRAPPORT_2026-11-25.md`](reports/NULAGESRAPPORT_2026-11-25.md) |
| Prioriterad projektrapport | [`steps/03-project-formulation/PROJEKTPORTFÖLJ_STEG3_2026-11-25.md`](steps/03-project-formulation/PROJEKTPORTFÖLJ_STEG3_2026-11-25.md) |
| Lokalt Arvsfonden-underlag | [`agents/arvsfonden-ansokningsagent/README.md`](agents/arvsfonden-ansokningsagent/README.md) — återupptaget lokalt 2026-11-26 (D-023); inte skickat |
| Arvsfondsutkast 2026-11-26 | [`UTKAST_ARVSFONDEN_2026-11-26.md`](agents/arvsfonden-ansokningsagent/output/UTKAST_ARVSFONDEN_2026-11-26.md), [`VERSIONSVAL_2026-11-26.md`](agents/arvsfonden-ansokningsagent/output/VERSIONSVAL_2026-11-26.md) |
| Vad betyder steg 7 nu? | [`steps/07-dissemination/README.md`](steps/07-dissemination/README.md) — Interpersonal Integration (D-024) |
| Vad betyder steg 8 nu? | [`steps/08-evaluation/README.md`](steps/08-evaluation/README.md) — Strategic Coordination (D-024) |
| Vad betyder steg 9 nu? | [`steps/09-renewal/README.md`](steps/09-renewal/README.md) — Synthesis, Consolidation and Recovery (D-024) |
| Primtalsrymden i pausdraken | [`steps/09-renewal/dragon-screensaver/PRIMTALSRYMD.md`](steps/09-renewal/dragon-screensaver/PRIMTALSRYMD.md) — vänstersväng vid primtals pixelantal och exakt 7 delar per kubruta (D-031/D-032) |
| Projektloop-assistenten | [`PROJECT_LOOP_ASSISTANT.md`](PROJECT_LOOP_ASSISTANT.md) — nio anrop och checkpointar (D-027) |
| 32 varv 2026-11-26 | [`cycles/2026-11-26/`](cycles/2026-11-26/) och [`reports/KONSEKVENSKONTROLL_2026-11-26.md`](reports/KONSEKVENSKONTROLL_2026-11-26.md) |
| Lokal GitHub-commit | [`reports/GITHUB_COMMIT_LOCAL_2026-11-26.md`](reports/GITHUB_COMMIT_LOCAL_2026-11-26.md) — lokalt committerad, ingen push |

## Struktur

- `steps/01…09` – ett dokument per steg. Alla nio steg är lokalt aktiverade.
  Steg 1–4 är genomförda; steg 5–9 är körda lokalt i 32 varv den 26 november.
  Steg 5 är narrativ integration med P-07 + F02 (D-019/D-020); finansierings-
  materialet från D-018 är historiskt delspår. Steg 6 är state integration
  (D-021/D-022) med Arvsfondens publicerade villkor som första lokala relation
  (D-023). Steg 7 är Interpersonal Integration, steg 8 Strategic Coordination
  och steg 9 Synthesis, Consolidation and Recovery (D-024/D-029). Gamla
  definitioner bevaras i respektive README och i den historiska masterprompten;
  katalognamnen är oförändrade enligt D-001.
- `stakeholders/` – Sambruk, DFRI, Friends of Hilma, Safe Trade Media. Samverkan
  finns här som bakgrund och aktiveras först i steg 6–7 enligt D-016; den är inte
  steg 4:s syfte.
- `integrations/` – research, membership, finance, communication,
  infrastructure, funding. Varje domän dokumenterar syfte, gränssnitt,
  beroenden och säkerhetskrav. Communication hänvisar nu till steg 4:s profil
  för allt framtida presentationsunderlag.
- `research/` – underlag från steg 1 och 2.
- `archive/` – hänvisningar till befintligt material som ska bevaras på plats;
  inga original flyttas utan godkännande.
- `reports/` – nulägesrapport, slutrapport och löpande rapporter.
- `agents/arvsfonden-ansokningsagent/` – lokalt underlag för ett
  Arvsfonden-utkast; parallellt spår som inte aktiverar steg 4 och som inte
  skickar, signerar eller kontaktar någon (D-013).

## Viktiga antaganden

1. `project-loop/` är ett **nytt lager ovanpå** befintliga projekt, inte en
   ersättning för dem. Befintliga kataloger lämnas orörda.
2. Workspacet hade inga Git-repositorier 2026-11-25. Den 26 november
   förbereddes en lokal GitHub-commit i en separat arbetskatalog; ingen push,
   merge eller publicering av den revisionen har gjorts (D-025).
3. `gh` saknas, men en lagrad `git`-legitimation för `FriendsofHilma` finns.
   Masterprompten publicerades 2026-11-25 via GitHub API:t under CC BY 4.0
   (D-009). Den reviderade dokumentationen är endast lokalt committad (D-025).
4. Tyler Kane och Doris Fleur X är **fiktiva personas**. I masterprompten står
   "Doris Flör"; projektet använder stavningen "Doris Fleur X". Båda formerna
   dokumenteras i `DECISIONS.md`.
5. Inga personuppgifter samlas in utan ändamål och rättslig grund.
6. `MASTERPROMPT.md` är och förblir ordagrant oförändrad (SHA-256
   `96B620A08712A79709852E27057FACB58E202B4A02E2B99B100BDB2BC6C8E98B`).
   D-015/D-017 ändrar bara den lokala operativa tolkningen och genomförandet av
   steg 4; en framtida publicering av den reviderade workflowen kräver separat
   beslut. D-021 ändrar endast den lokala tolkningen av steg 6; D-022 aktiverade
   steget lokalt. Även en framtida publicering av den reviderade definitionen
   kräver separat beslut.
7. Siegels fjärde domän tolkas som *memory integration* `[E-secondary]` och
   används som designheuristik `[I]` — inte som terapi, diagnos eller bevis om
   konstnärliga avsikter. Siegels sjätte domän tolkas på samma sätt som *state
   integration* i [`SIEGEL_DOMAN_6.md`](steps/06-implementation/SIEGEL_DOMAN_6.md),
   utan psykologiska påståenden om personer (D-021).
