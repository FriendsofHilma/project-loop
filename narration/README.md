# Narration subsystem — The Voice of the Ancient Storyteller

Offline, reproducible audio narration for `novel/`. The narrator is an original
storyteller voice built from a fixed speaker in an open-licensed multi-speaker model;
there is **no voice cloning and no author recording**. A separate female voice reads
Hilma af Klint's registered quotations.

> **Constructed-persona notice:** "Tyler Kane" is a fictional research persona created
> for this project. He is not a real person, an intelligence officer, an
> Anthroposophical Society member, or an authority on Hilma af Klint.

## Quick start

```bash
# 1. Install the TTS engine (once)
python -m pip install --user piper-tts==1.8.0

# 2. Download the open voice model (~137 MB, stored outside OneDrive)
python narration/tools/fetch_models.py

# 3. Generate the auditions
python narration/tools/narrate.py audition-all

# 4. Generate Chapter 1
python narration/tools/narrate.py chapter \
    --file novel/08_MANUSCRIPT/part_01/ch01_before_the_before.md \
    --voice ancient_sage --name ch01_story --story-only
python narration/tools/narrate.py chapter \
    --file novel/08_MANUSCRIPT/part_01/ch01_before_the_before.md \
    --voice ancient_sage --name ch01_full

# 5. Generate the Hilma quotation samples
python narration/tools/narrate.py sample --voice hilma_quotations \
    --text-file narration/passages/hilma_q01.txt --name hilma_q01
python narration/tools/narrate.py sample --voice hilma_quotations \
    --text-file narration/passages/hilma_q24.txt --name hilma_q24

# 6. Listen
python narration/tools/serve.py
# open http://127.0.0.1:8732/

# 7. While the server is running, verify hashes, WAVs and player assets
python narration/tools/verify_output.py
```

Audio and metadata land in `narration/output/`. Model files are deliberately outside
the repository. Audio WAVs are generated artefacts; they can be deleted and rebuilt.
The local server supports byte-range requests, so long chapter WAVs can be seeked.

## Commands

| Command | Purpose |
|---|---|
| `voices` | List voice profiles with provider and speaker id. |
| `audition --voice NAME` | Render the standard audition passage with one profile. |
| `audition-all` | Render every profile, including the Hilma alternates. |
| `sample --voice NAME --text-file F --name N` | Render any short text (e.g. a registered quotation). |
| `chapter --file F --voice NAME --name N` | Render a chapter. `--story-only` excludes the provenance endnote; `--full` includes it. Prints per-segment progress. |
| `segment --track T --index I` | Force one passage to be re-synthesised and rebuild the track from cache. |
| `verify_output.py` | Check chapter hashes, WAV headers, epigraph routing and all player URLs. |
| `--force` | On generation commands, bypass the segment cache. |

Long chapter renders are safe to run in the background. Every spoken segment is cached
under `narration/output/cache/`, so an interrupted run resumes from the last completed
segment; the stderr lines show whether each segment came `[cache]` or `[synth]`.

## Directory layout

```
narration/
├── config/
│   ├── settings.yaml          # model path, output paths, provider switches
│   ├── voices.yaml            # reusable voice profiles and style maps
│   └── pronunciation.json     # respelling lexicon; synthesis input only
├── passages/
│   ├── audition.txt           # the exact user-supplied audition passage
│   ├── hilma_q01.txt          # exact MT string, 576DAGBO.pdf:2
│   └── hilma_q24.txt          # exact MT string, 1170LIF.pdf:26
├── src/
│   ├── text.py                # segmentation, style inference, markdown stripping, lexicon
│   ├── audio.py               # WAV I/O, pitch shift, room, normalise, silence, join
│   ├── engine.py              # profiles, cache, metadata, rendering
│   └── providers/             # piper, sapi, edge — one contract
├── tools/                     # fetch_models, probe_speakers, narrate, serve, verify_output
├── web/index.html             # the play UI
└── output/                    # generated WAV + JSON (not source text)
```

## How text is handled

1. The chapter file is read as canonical text and SHA-256 hashed into the track
   metadata.
2. Formatting marks are removed **for speech only**; no words are rewritten, reordered
   or dropped.
3. Text is split at sentence or paragraph boundaries into contiguous segments whose
   concatenation is exactly the input (`assert_preserved` enforces this).
4. Each segment is classified as `narration`, `epigraph`, `dialogue`, `declaration`,
   `whisper` or `history`; the profile's style map supplies pace, volume and pause.
5. A segment classified `epigraph` is routed to the companion voice named by
   `quotation_voice` in `settings.yaml`. The track plan records `voice_name` for every
   row, so Chapter 1's Hilma epigraph is audibly a quotation. Structural marks (rules,
   bare Roman numerals) stay in the canonical slice but produce no spoken audio.
6. Pronunciation respelling is applied **only** to the provider input. The canonical
   string and its hash are stored separately.

For a chapter, `--story-only` removes the documentation endnote from the *audio* and
records the omitted character range in the metadata. Use `--full` if you want the
provenance notes read aloud too. Neither mode changes the source file.

## Changing provider

Set `provider:` in a voice profile to `piper`, `sapi` or `edge`. Nothing else in the
pipeline changes: providers implement `available()` and `synthesize()` and return mono
float audio plus a sample rate. `edge` is disabled by default and needs an optional
install plus a decoder; see `VOICE_TECHNOLOGY.md`.

## Regenerating one passage

Every segment is cached separately under `narration/output/cache/`, keyed by a pipeline
version, provider, model, speaker, prosody (including `darkness`) and the spoken text.
A change to the audio pipeline bumps `PIPELINE_VERSION` in `src/engine.py`, so old and
new renders never mix. To redo one passage:

```bash
python narration/tools/narrate.py segment \
  --track narration/output/ch01_story.json --index 2
```

Only that segment is re-synthesised; the track is rebuilt from the other cached WAVs.
This is the unit of revision for the whole project.

## Reproducibility and licensing

- Piper code: MIT. Voice: `en_US-libritts-high`, LibriTTS `train-clean-360`, CC BY 4.0.
- Model download is hashed by size and SHA-256 is printed by `fetch_models.py`.
- No generated audio is a clone of the author or of any historical person.
- Notebook quotations are machine translations, © Stiftelsen Hilma af Klints Verk,
  used here as short, located private research excerpts.

See `VOICE_TECHNOLOGY.md`, `VOICE_CONCEPTS.md` and `IMPLEMENTATION_PLAN.md`.
