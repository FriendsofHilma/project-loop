# Voice concepts and audition notes

> **Constructed-persona notice:** "Tyler Kane" is a fictional research persona created
> for this project. He is not a real person, an intelligence officer, an
> Anthroposophical Society member, or an authority on Hilma af Klint.

All three narrator concepts are **original**. The Gandalf archetype — wise wanderer,
philosopher, magician, storyteller — is a broad cultural reference, not a voice to
imitate. No actor, no existing character, and no author recording is copied.

## Selection method

The `en_US-libritts-high` model has 904 speakers and **no gender labels**. We
synthesised the same sentence with speakers 0–23, estimated mean F0 by autocorrelation,
and kept the WAVs in `narration/output/auditions/speaker_probe/` for inspection.

```
22  94.6 Hz   5  103.0 Hz   3  106.3 Hz   7  108.6 Hz
 6 110.2 Hz   8  110.8 Hz  20  112.8 Hz  16  114.2 Hz
```

Low-F0 speakers became the male narrator candidates; higher-F0 speakers became the
Hilma quotation candidates (1 ≈174 Hz, 2 ≈162 Hz, 9 ≈225 Hz). Pitch is only a coarse
filter — **the final choice must be made by listening**, which is why all six auditions
are in the player.

## 1. The Ancient Sage — `ancient_sage`

**Speaker 22 · pace 1.28 · pitch 0.91 · pause 0.68 · room 0.07 · darkness 0.55**

A deep, weathered voice with the slow confidence of someone who has watched several
civilisations pack up and leave. The current setting is slower and lower than the first
pass, with a gentle low-pass filter taking the brightness out of the consonants: a voice
that has gone down into the earth rather than one addressing a hall. He does not hurry a
sentence, because he has already heard the end of it. Subtle humour arrives as a slight
drop in volume on the last clause.

- **Best for:** the creation myth, philosophical reflection, the grand declarations,
  the final chapter.
- **Risk:** can become funereal if a chapter is all silence and no movement. The
  Wandering Storyteller exists to check that. If it sounds too subterranean, reduce
  `darkness` before raising `pitch`.
- **Audition line to listen for:** "Or perhaps... it is simply ourselves, finally
  listening." The ellipsis should feel like a room, not a glitch.

## 2. The Wandering Storyteller — `wandering_storyteller`

**Speaker 5 · pace 0.98 · pitch 1.02 · pause 0.30 · room 0.02**

Closer and warmer. This is the voice at the fire after the great hall has gone quiet,
telling the same story to one person who is allowed to interrupt. Slightly quicker,
almost nothing in the way of reverb, and a small, mischievous lift on the odd sentence.

- **Best for:** dialogue, humorous passages, the human-scale chapters of Parts IV and VI.
- **Risk:** too intimate for the cosmological opening if used alone.
- **Audition line to listen for:** "Come closer, traveller." It should sound like an
  invitation, not an instruction.

## 3. The Cosmic Narrator — `cosmic_narrator`

**Speaker 3 · pace 1.06 · pitch 0.94 · pause 0.72 · room 0.14**

Majestic and mysterious, with noticeable space around every word. The reflections are
long enough to suggest a very large interior without becoming a sound effect. He is
the voice of the spiral, the temple and the far end of the universe.

- **Best for:** Part II, Part VIII, the cosmic spa.
- **Risk:** grandeur on every page flattens the story. Use as a second colour, not the
  default, unless the author prefers it.
- **Audition line to listen for:** "There are doors that open only when we have
  forgotten that we were searching for them."

## 4. Hilma Quotations — `hilma_quotations` (companion voice)

**Speaker 1 · pace 1.08 · pitch 1.00 · pause 0.62 · room 0.06**

A distinct female presence used **only** for registered notebook quotations. She reads
the exact machine-translated string without acting it, without paraphrase and without
claiming to be af Klint. The contrast with the narrator makes the provenance audible:
one voice tells the myth, another voice reads the document.

- **Samples:** Q01 (`576DAGBO.pdf:2`, the silence and the word) and Q24
  (`1170LIF.pdf:26`, the song of life). Both are exact strings from
  `novel/02_HILMA/QUOTATION_REGISTER.md`.
- **Alternates:** speaker 9 (brighter) and speaker 2 (lower), rendered on the same
  audition passage for a fair comparison.
- **Rule:** this voice never speaks invented words and never says "I am Hilma". It is a
  reader of quotations, not a reconstruction of a person.
- **In chapter tracks:** `settings.yaml` routes every segment classified `epigraph` to
  this profile. The blockquote is kept whole by the segmenter, so the registered
  quotation and its locator are read as one quoted unit while the rest of the chapter
  stays in the narrator's voice.

## Style map shared by the profiles

| Style | Trigger | Delivery |
|---|---|---|
| `epigraph` | blockquote / `>` | slower, quieter, longer pause after |
| `dialogue` | quoted speech | slightly quicker, more volume, shorter pause |
| `declaration` | heading or grand line | fuller volume, wider spacing |
| `whisper` | ellipsis | quietest, slowest, longest pause |
| `history` | century, empire, Lemuria, dates | measured, documentary |
| `narration` | everything else | the profile's centre |

## How to choose

1. Listen to the three narrator auditions in one sitting, without reading the text.
2. Write down which one you would want to hear at 2 a.m. in chapter 40, not which one
   sounds most impressive for thirty seconds.
3. Do the same for the three Hilma quotation voices.
4. Tell me the winner and one adjective you want changed (e.g. "warmer", "slower",
   "less room"). I will adjust `voices.yaml` and regenerate only the affected segments.
5. The chosen profile becomes the reusable identity for all nine parts; the others stay
   in the config as alternates and as a record of the decision.
