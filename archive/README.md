# Arkiv – policy

I detta varv **flyttas eller raderas inga original**. Arkivet är ett register över
var äldre arbete finns kvar och varför det bevaras.

| Material | Plats | Status | Anledning att bevara |
|---|---|---|---|
| Äldre AGENTS.md-utkast | `AGENTS.md.new` | Kräver mänskligt beslut | Äldre version av projektregler; aktualitet ej granskad |
| Byggda TypeScript-filer | `dist/` | Deriverad, kan återskapas | `npm run build`; inget original |
| Genererade figurer | `figures/` | Deriverad, deterministisk | `npm run figures` |
| Genererad ljuddata | `narration/output/` | Deriverad | Kan återskapas via narration-verktyg |
| Notebook-modell | `notes-assistant/data/` | Deriverad | `notes_model.py build`; källtexter i `hilma-translation/` |
| Hilma Papers original och OCR | `research-project/sources/hilma-papers/` | Original + OCR, skrivskyddade i praktiken | Ingen AI-korrigering får skriva över originalet |

Regel: om ett original behöver flyttas krävs uttryckligt godkännande och en
post i `DECISIONS.md` med före/efter-sökväg.
