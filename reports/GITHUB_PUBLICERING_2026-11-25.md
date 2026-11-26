# GitHub-publicering av masterprompten – 2026-11-25

## Beslut och godkännande

- Användaren bad uttryckligen: *"Jag vill att du publicerar den här master prompten på github för friendsofhilma!"*
- Efter att en fungerande autentiseringsväg hittades bekräftade användaren valet
  **nytt publikt repo `project-loop`** och licensen **CC BY 4.0** via ett
  interaktivt val 2026-11-25.
- Detta ersätter den tidigare blockeringen D-004; se `DECISIONS.md` D-009.

## Autentisering

- `gh` (GitHub CLI) är inte installerat och webbläsaren var inte inloggad
  (`/dashboard` omdirigerade till `/login`).
- Däremot fanns en lagrad legitimation i Windows Credential Manager:
  `LegacyGeneric:target=git:https://github.com`.
- `git credential fill` + GitHub API:t (`GET /user`) bekräftade kontot
  `FriendsofHilma` (typ `User`) med admin-rättigheter på tre befintliga repos.

## Publicerat resultat

| Objekt | Värde |
|---|---|
| Repository | `FriendsofHilma/project-loop` |
| URL | https://github.com/FriendsofHilma/project-loop |
| Synlighet | publik |
| Standardgren | `main` |
| Licens | Creative Commons Attribution 4.0 International (CC BY 4.0) |
| Masterprompt | https://github.com/FriendsofHilma/project-loop/blob/main/MASTERPROMPT.md |

Filer på `main`:

| Fil | Innehåll | Källa |
|---|---|---|
| `MASTERPROMPT.md` | Masterprompten, oförändrad | lokal `project-loop/MASTERPROMPT.md` |
| `README.md` | Kort introduktion, principer, nio steg, licens | lokal `project-loop/GITHUB_REPO_README.md` |
| `LICENSE` | Full CC BY 4.0 legalcode (18 657 byte) | https://creativecommons.org/licenses/by/4.0/legalcode.txt |

## Verifiering

- Uppladdning skedde via GitHub Contents API (`PUT /repos/.../contents/...`).
- Den publicerade `MASTERPROMPT.md` hämtades tillbaka och jämfördes med den
  lokala filen:
  - lokal SHA-256: `96b620a08712a79709852e27057facb58e202b4a02e2b99b100bdb2bc6c8e98b`
  - remote SHA-256: `96b620a08712a79709852e27057facb58e202b4a02e2b99b100bdb2bc6c8e98b`
  - **Byte-identisk: ja**
- Övriga repos under kontot (`hear-ontology`, `membership_system`,
  `friendsofhilma_website`) lämnades orörda.
- Inga e-postmeddelanden, ansökningar, externa konton eller betalningar
  genomfördes (D-008).
- Ingen lokal `git init` eller worktree skapades.

## Återstående

- Avgör om den lokala `project-loop/` katalogen ska knytas till repo:t (B-003).
- Masterprompten innehåller namnvarianten "Doris Flör" medan projektet använder
  "Doris Fleur X" (D-005). Publiceringen är ordagrant, så varianten kvarstår i
  den publicerade texten.
