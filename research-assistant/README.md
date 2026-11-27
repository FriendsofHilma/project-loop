# Dissertation research assistant

A **local, retrieval-only** research assistant over the processed copy of Rachel
Villari's dissertation. It finds passages, gives exact **PDF page numbers**, and
points to figures and page renders. It does **not** generate answers or invent
quotations, and it needs no external LLM key.

The retrieval core is platform-independent. The CLI is the primary front-end;
Discord is the first chat adapter. A future OpenCode/Matrix/other adapter can
call the same `core.py`.

## Files

| File | Purpose |
|---|---|
| `core.py` | Shared retrieval: SQLite FTS5 keyword search, Chroma semantic search, RRF hybrid fusion, visual pointers, context bundle |
| `embeddings.py` | Cached ONNX embedder (all-MiniLM-L6-v2); embeddings are computed here and passed explicitly to Chroma |
| `build_index.py` | Builds `index.sqlite`, `chroma/`, `meta.json`, the figure index and the claim ledger from `knowledge/dissertation/` |
| `build_figures_index.py` | Builds `figures_index.jsonl`: body/list captions joined to page renders and candidate images |
| `build_claims.py` | Builds `claims.jsonl`: curated claims whose quotes are verified against PDF pages |
| `layers.py` | CLI for figure index, claim ledger, and the constructed Tyler Kane persona layer |
| `PERSONA-tyler-kane.md` | Fictional persona, mandatory disclaimer, and citation-and-uncertainty protocol |
| `search.py` | CLI: query by keyword/semantic/hybrid, print citations or a context block |
| `discord_bot.py` | Discord slash commands `/ask` and `/status` over the same core |
| `matrix_bot.py` | Element/Matrix adapter: `!ask` and `!status` in rooms, over the same core |
| `requirements.txt` | Python dependencies |

Build artefacts are gitignored: `index.sqlite`, `chroma/`, `meta.json` is tracked
as small provenance info (safe either way).

## Install and build

From the repository root:

```powershell
python -m pip install -r research-assistant/requirements.txt
python research-assistant/build_index.py
python research-assistant/search.py --stats
```

The first semantic build downloads Chroma's default all-MiniLM-L6-v2 ONNX model
(~80 MB) into `~/.cache/chroma`. If that download fails, the build still
succeeds with keyword search; `meta.json` records `semantic_index: false` and
the reason. Rebuild with `--no-semantic` to skip the download entirely.

`requirements.txt` pins `chromadb==0.4.24`, `posthog<4`,
`onnxruntime>=1.16,<1.17` and `numpy<2`: Chroma 1.5.9's Rust `add` path crashes
natively on the Windows / Python 3.10 setup used here, newer onnxruntime wheels
fail to load or need NumPy 2, and posthog 8 breaks Chroma 0.4.x's telemetry
signature (harmless but noisy). Embeddings are computed in `embeddings.py` and
passed explicitly to Chroma so indexing and queries do not depend on Chroma's
internal embedder.

The original PDF is never modified. Indexing reads only the processed package
in `knowledge/dissertation/`.

## CLI usage

```powershell
python research-assistant/search.py "atom tree of knowledge"
python research-assistant/search.py "temperature and radiation" --mode semantic
python research-assistant/search.py "färg och form" --top-k 5 --context
python research-assistant/search.py --stats
```

`--context` prints a citation-first block intended for pasting into OpenCode as
context, or for a human reader. Every excerpt carries its chunk ID, PDF page
range, and figure/page-render paths.

## Figure index, claim ledger, and persona

`build_index.py` now also generates two structured layers inside
`knowledge/dissertation/`:

- `figures_index.jsonl` — one record per `Figure N`, with body caption,
  list-of-figures caption, PDF page, page render, and candidate image files.
  A single image on the caption page is only a *candidate*; several images are
  listed as ambiguous. Inspect the render or the PDF before making visual claims.
- `claims.jsonl` — curated claims with status, perspectives, verbatim evidence,
  PDF pages, chunk IDs, figure numbers/files, page renders, confidence, and
  revisions. The generator refuses to write a claim whose quote cannot be
  verified on the stated PDF page.

Use the layer CLI:

```powershell
python research-assistant/layers.py stats
python research-assistant/layers.py figures "Tree of Knowledge"
python research-assistant/layers.py claims "new temple"
python research-assistant/layers.py persona "What does Villari say about De Fem?"
```

`layers.py persona` prints the mandatory constructed-persona notice and the
retrieval protocol, then cited passages and claim records. It does **not**
generate a seamless answer in character and does not claim that Tyler Kane is a
real person, officer, Society member, or witness to events.

The two structured layers can also be rebuilt independently:

```powershell
python research-assistant/build_figures_index.py
python research-assistant/build_claims.py
```

## Discord setup

1. Create an application and bot in the Discord Developer Portal.
2. Reset/copy the bot token. Invite with the `bot` and `applications.commands`
   scopes. No privileged intents are required.
3. Set environment variables:

```powershell
$env:DISCORD_BOT_TOKEN = "..."                       # never commit
$env:DISCORD_ALLOWED_CHANNELS = "123456789012345678" # optional; comma-separated IDs
$env:ASSISTANT_TOP_K = "3"                           # optional, 1–5
python research-assistant/discord_bot.py
```

`/ask <question>` returns up to three cited excerpts with figure pointers.
`/status` reports index counts, whether semantic search is active, build time,
and source PDF. Both commands are restricted to allowed channels if configured;
`/status` is ephemeral. Answers are truncated to Discord's message limit — use
the CLI `--context` output for the full passage.

## Element / Matrix setup

Element is a Matrix client; Matrix is the self-hostable, end-to-end-encrypted
alternative to Discord. The adapter uses `simplematrixbotlib` (built on
`matrix-nio`) and shares the same retrieval core.

1. Create a Matrix account for the bot on your homeserver (e.g. a self-hosted
   Synapse/Dendrite/Conduwuit, or matrix.org).
2. Invite it to the research room. `MATRIX_JOIN_ON_INVITE=1` accepts invites
   automatically; otherwise join the room from Element first.
3. Set environment variables:

```powershell
$env:MATRIX_HOMESERVER = "https://matrix.example.org"
$env:MATRIX_USERNAME = "researchbot"
$env:MATRIX_PASSWORD = "..."                        # or MATRIX_ACCESS_TOKEN
$env:MATRIX_ROOM_IDS = "!abc:example.org"            # optional allowlist
$env:MATRIX_ALLOWED_USERS = "@alice:example.org"     # optional regex allowlist
python research-assistant/matrix_bot.py
```

`!ask <question>` and `!status` work in allowed rooms. Replies are sent as
`m.notice` so they don't look like human messages. The session token is cached
in `matrix_session.txt` (gitignored).

**Encryption:** the default setup is for unencrypted rooms and needs no libolm.
For encrypted rooms, install `libolm` and `matrix-nio[e2e]`, then set
`MATRIX_ENCRYPTION=1`; verify the bot's session from Element (the library prints
a session ID and fingerprint at startup). `config.ignore_unverified_devices` is
left false, so verification is required before it will send into an encrypted
room.

**Why Element/Matrix over Holochain Elemental Chat?** Holochain Elemental Chat
is a basic P2P chat DNA — interesting technology, but experimental, with no
mature bot library. Matrix is mature, self-hostable, and has working Python bot
SDKs, so it is the practical private-chat target for this project.

## Research rules (unchanged)

- The **original PDF is authoritative**. Page numbers are PDF positions from 1.
- Excerpts come from the processed copy; extraction order can differ from visual
  reading order, and OCR on pages 214–223 is approximate.
- Never quote from the index without checking the PDF page. Never invent a
  quotation, page number, figure caption, or bibliographic detail.
- Distinguish the dissertation author's claims from our interpretation.
- The dissertation is copyrighted; the local copy is for research only.

## Design notes

Hybrid search uses reciprocal-rank fusion: keyword results from FTS5 and
semantic results from Chroma are merged by rank, then the full chunk is fetched
from SQLite so the returned text is always the stored, unmodified excerpt.
This keeps every front-end consistent and prevents a chat UI from paraphrasing
source material.
