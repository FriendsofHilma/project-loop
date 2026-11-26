# Integrationsdomän: Organisation och föreningsliv (membership)

## Syfte

Förbereda ett sätt att hantera medlemsregister, identitet, behörighet, e-legitimation och föreningsadministration för intressenter som DFRI, utan att skapa register eller konton. Motsvarar `project-loop/MASTERPROMPT.md` §4 B.

## Gränssnitt (föreslaget)

- [ANTAGANDE] Maskinläsbart lokalt schema för en *pseudonymiserad* post: `{"member_ref": "opaque-id", "role": "member|board|admin", "consent_ref": "...", "valid_from": "...", "valid_until": "..."}`. Inga namn, e-postadresser eller personnummer i förslaget.
- [ANTAGANDE] Behörighetsfråga: `check_access(member_ref, resource, action)` → `{"allowed": bool, "basis": "...", "expires_at": "..."}`; svar ska kunna loggas utan känsliga data.
- [ANTAGANDE] Identitets-/e-legitimationsflöden ska vara *externa* tjänster med ett godkänt protokoll; projektet lagrar bara en referens, aldrig legitimationsuppgifter eller lösenord.
- Inga befintliga filer eller endpoints för detta har identifierats. Se även `project-loop/stakeholders/dfri/README.md`.

## Beroenden

- Masterprompten §2.3 (DFRI) och §4 B.
- Framtida beslut om rättslig grund, ändamål, registeransvarig och behörighetsmodell.
- `project-loop/integrations/infrastructure/README.md` för lokal körning och åtkomstkontroll.
- `project-loop/integrations/communication/README.md` om medlemskommunikation ska ske; ingen sådan kommunikation sker nu.

## Säkerhetskrav

- Inga personuppgifter utan tydligt ändamål och lämplig rättslig grund (masterprompten §2.4 och §7).
- Ingen e-legitimation, ansökan, inloggning eller externt konto skapas utan mänskligt godkännande (`project-loop/DECISIONS.md`, D-008).
- Minimering, pseudonymisering, krypterad lagring, behörighetsstyrning och raderbarhet måste specificeras före implementation.
- Ingen delning av medlemsdata med Sambruk, DFRI eller andra parter utan uttryckligt godkännande.

## Status

**Undersökt/föreslaget, ej implementerat.** Masterpromptens krav är kartlagda; inget register, ingen identitetskoppling och inget gränssnitt är byggt.

## Öppna frågor

- Finns ett faktiskt behov av ett lokalt register, eller räcker extern föreningsadministration?
- Vem är registeransvarig och vilken rättslig grund gäller?
- Vilken e-legitimationsstandard ska i så fall användas, och vem bär ansvaret?
- Hur hanteras utträde, rättelse och radering av poster?
