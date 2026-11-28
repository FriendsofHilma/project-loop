# AD4M — lokal läslare (UI)

**Status:** `[PROPOSAL]` Ny, lokal UI byggd ovanpå den avslutade Phase 5-PoC:n. Den ändrar inte PoC:ns slutsatser och öppnar inga nya skrivrättigheter.

## Vad det är

Ett litet lokalt webbgränssnitt för att prova AD4M via de **tjugo read-verktyg** som verifierades i Phase 5. Det är avsiktligt begränsat:

- Endast `127.0.0.1`.
- Endast de 20 `ad4m_*`-verktygen från `poc/ad4m-mcp/test-config/.opencode/opencode.jsonc`.
- Alla skriv-, admin-, inloggnings-, neighbourhood- och betalningsverktyg avvisas av servern **innan** någon credential läses.
- Ingen credential, passphrase, seed phrase eller privat nyckel lagras i repot eller skickas till webbläsaren.
- Inga loggar på disk. Resultat visas i minnet och redacteras.
- Aktiv `.opencode/opencode.jsonc` rörs inte; servern kontrollerar bara dess SHA-256.

## Starta

Förutsättning: executorn är byggd enligt `poc/ad4m-mcp/BUILD_FROM_SOURCE.md` och de lokala hjälpskripten finns i `%TEMP%\opencode`.

```powershell
# 1. Starta executorn (lokalt, loopback, Holochain av, dynamic class tools av)
powershell -ExecutionPolicy Bypass -File poc/ad4m-ui/start.ps1

# 2. Starta UI-servern
node poc/ad4m-ui/server.js

# 3. Öppna http://127.0.0.1:8733/
```

Servern kan flyttas till en annan loopback-port med `AD4M_UI_PORT`. Mot slutet:

```powershell
powershell -ExecutionPolicy Bypass -File poc/ad4m-ui/stop.ps1
```

## Användning

- **Guide** hämtar AD4M:s egna dokumentationsämnen (`overview`, `usage`, `models`, `architecture`, `template`, `flux`) via `get_documentation`.
- **Schema** kör `describe_perspective` och visar klasser, properties och flows i läsbar form.
- **Snabbval** och **Verktygskatalog** fyller i verktyg och startargument. Katalogen täcker alla 20 tillåtna verktyg; `{{P}}` ersätts av testperspektivets ID, medan `{{URI}}`, `{{FLOW}}` och `{{ADDRESS}}` lämnas för dig att fylla i.
- **Kör läsanrop** anropar `poc/ad4m-mcp/mcp-client.js` med samma redakteringslogik som evidence-samlingen.
- **Resultat** visar det innehåll som tool:et returnerade. Kryssa i **Visa rått, redacterat svar** för hela JSON-envelopen. DID:er, långa token och redan kända hemligheter redacteras.

Bra första försök: *Översikt*, *Auth-status*, *Min DID*, *Perspektiv*, *Beskriv perspektiv*, *Länkar*.

`instance_query` med `TextContent` returnerar samma informella fel som i Phase 5: `Unknown subject class 'TextContent'. Registered classes: (none).` Det är förväntat — inga SHACL-klasser har registrerats, och det kräver ett nytt beslut.

## Tester

```bash
node poc/ad4m-ui/test-ui.js
```

14 kontroller: allow-list, verktygskatalog, dokumentationsämnen, avvisning av skrivverktyg, redaction, statisk server, CSP och att källfiler inte exponeras. Ingen executor eller credential behövs.

## Gräns

Detta är **inte** en skriv-UI. För att skapa data krävs ett nytt, explicit mänskligt beslut med minst:

1. vilken SHACL-klass och vilka properties som får registreras;
2. att `ad4m_add_model` + `ad4m_instance_create` får slås på endast i en separat testconfig;
3. expiry och begränsningar;
4. att alla hårda denies förblir.

Ingen sådan decision har fattats. Inget är pushat eller publicerat.
