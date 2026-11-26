# CHECK_RESULT_2026-11-26 — teckengränser i det daterade utkastet

> Agent: arvsfonden-ansokningsagent
> Date: 2026-11-26
> File checked: `UTKAST_ARVSFONDEN_2026-11-26.md`
> Tool: `tools/check_draft.py`
> Status: [E] (lokal körning)

## Kommando

```bash
python project-loop/agents/arvsfonden-ansokningsagent/tools/check_draft.py project-loop/agents/arvsfonden-ansokningsagent/output/UTKAST_ARVSFONDEN_2026-11-26.md
```

## Resultat

```text
Draft: project-loop\agents\arvsfonden-ansokningsagent\output\UTKAST_ARVSFONDEN_2026-11-26.md
KEY             COUNT    MAX  STATUS
q2                375    500  OK
q3               1004   1500  OK
q4               1102   2000  OK
q5               1122   2000  OK
q6a               205    500  OK
q6b               793   2000  OK
q6c               784   2000  OK
q7b               405   1000  OK
q7c               366   1000  OK
q7d               366   1000  OK
q8                277    500  OK
q9               769   1500  OK
q11               928   2000  OK
q12               731   2000  OK
q13               435   1000  OK
q14               571   1500  OK
q16               447   1500  OK
q17               451   1000  OK
q18               573   1000  OK
summary          1170   2000  OK
RESULT: PASS
```

## Tolkning

Alla 20 markerade `ANSWER_START`/`ANSWER_END`-block ligger under Arvsfondens angivna gränser enligt S-01 [E]. Inget block behövde kortas. Fält utan teckengräns i e-tjänsten (fråga 1, 6 D:s ja/nej-val, fråga 7 A, fråga 10 och fråga 15) kontrolleras inte av skriptet och innehåller placeholders eller mänskliga beslut.

Kontrollen avser endast teckenantal. Den är inte en granskning av saklighet, källor, delaktighet, budget eller versionsval.

**Ingen ansökan har skickats in.**
