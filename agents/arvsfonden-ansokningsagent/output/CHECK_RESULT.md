# CHECK_RESULT – teckengränser i första utkastet

> Agent: arvsfonden-ansokningsagent  
> Date: 2026-11-25  
> File checked: `UTKAST_ARVSFONDEN.md`  
> Status: [E] (lokal körning)

## Kommando

```bash
python project-loop/agents/arvsfonden-ansokningsagent/tools/check_draft.py project-loop/agents/arvsfonden-ansokningsagent/output/UTKAST_ARVSFONDEN.md
```

## Resultat

```text
Draft: project-loop\agents\arvsfonden-ansokningsagent\output\UTKAST_ARVSFONDEN.md
KEY             COUNT    MAX  STATUS
q2                228    500  OK
q3                716   1500  OK
q4                804   2000  OK
q5                651   2000  OK
q6a               205    500  OK
q6b               844   2000  OK
q6c               769   2000  OK
q7b               322   1000  OK
q7c               307   1000  OK
q7d               309   1000  OK
q8                234    500  OK
q9                686   1500  OK
q11               741   2000  OK
q12               526   2000  OK
q13               353   1000  OK
q14               463   1500  OK
q16               449   1500  OK
q17               413   1000  OK
q18               498   1000  OK
summary          1078   2000  OK
RESULT: PASS
```

Alla markerade answer blocks ligger under Arvsfondens angivna gränser enligt S-01. Fälten utan teckengräns i e-tjänsten, till exempel fråga 1, 6 D:s ja/nej-val, fråga 7 A, fråga 10 och fråga 15, kontrolleras inte av skriptet och innehåller placeholders eller mänskliga beslut.

**Ingen ansökan har skickats in.**
