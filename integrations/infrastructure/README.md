# Integrationsdomän: Programvara och infrastruktur (infrastructure)

## Syfte

Beskriva den lokala körnings- och publiceringsmiljön: OpenCode, lokala AI-agenter, API:er, öppna standarder, distribuerade tillitsnätverk och eventuell framtida Git/GitHub-användning. Motsvarar `project-loop/MASTERPROMPT.md` §4 E.

## Gränssnitt (föreslaget)

- [ANTAGANDE] Tillståndsfiler enligt `project-loop/WORKFLOW.md` och `project-loop/README.md`: `project-loop/state/current_step.json`, `project-loop/state/progress.json`, `project-loop/state/backlog.json`, med fälten `workflow`, `version`, `current_step`, `active_steps`, `prepared_steps`, `status`, `last_completed_task`, `next_action`, `requires_human_approval`. Dessa filer hänvisas till av befintlig dokumentation; denna README ändrar dem inte.
- [ANTAGANDE] Intern integration mellan domäner sker via små JSON-kontrakt (se `research`, `membership`, `finance`, `communication`, `funding`) och dokumenterade kommandon, inte via direkt skrivning till andra agents filer.
- [ANTAGANDE] Framtida repository-förslag: README, licens, arkitektur, installationsinstruktioner och issue-listor enligt masterprompten §3 steg 1. Inget repo är skapat eller pushat.
- Ingen ny tjänst, server, webhook eller distribuerad nod är startad.

## Beroenden

- OpenCode-sessionen och lokala agenter; befintliga projekt enligt `AGENTS.md` §7.
- **Inga `.git`-repositorier finns i workspacet** (kontrollerat 2026-11-25 enligt `project-loop/README.md`; även `research-project/PROTOCOL.md` §Change tracking).
- **`gh` (GitHub CLI) finns inte** i miljön; `Get-Command gh` gav ingen träff 2026-11-25. Ingen token och ingen inloggad GitHub-session finns enligt `project-loop/README.md` och `project-loop/DECISIONS.md` D-004.
- Därför: ingen `git init`, commit, push, remote eller extern repo-ändring är genomförd.

## Säkerhetskrav

- Inga externa repositories, konton eller publiceringar utan mänskligt godkännande (masterprompten §7, D-004).
- Inga hemligheter, tokens eller personuppgifter i projektfiler; minsta behörighet för lokala agenter.
- Respektera agentägarskap enligt `research-project/PROTOCOL.md`; skriv aldrig över andra agents filer.
- Ändringar ska vara reversibla och verifieras mot befintlig funktionalitet (`project-loop/WORKFLOW.md`).

## Status

**Undersökt/föreslaget, ej implementerat.** Miljön är inventerad på dokumentationsnivå; integrationen i projektloopen är inte byggd. GitHub-publicering är blockerad.

## Öppna frågor

- Ska Git initieras lokalt, och i så fall i vilken katalog?
- Vilket GitHub-mål avses med "friendsofhilma", och vem ger åtkomst?
- Ska masterprompten publiceras som fil, issue eller README?
- Vilken licens gäller för text respektive kod?
- Vilka lokala AI-agenter får skriva i framtida state-filer, och hur loggas det?
