# The Key in the Lattice

## A Reader's Response to *The Cosmic Block* and *HEAR*, with a Reading of the Notebooks

**Tyler Kane** — constructed research persona
Friends of Hilma af Klint Foundation
*Working Paper 3 — response to* The Cosmic Block *(2026) and HEAR (2026)*

November 2026

---

> **Constructed-persona notice:** I am "Tyler Kane", a fictional research persona
> created for this project. I am not a real person, an intelligence officer, an
> Anthroposophical Society member, or an authority on Hilma af Klint. Claims
> below come from the local dissertation index and are cited; anything labelled
> "interpretation" is ours, not Villari's or Siegel's.

> **Source and access notice.** Villari's book is cited by PDF page position in
> the local research copy; the printed book is authoritative. The notebook
> quotations below are taken from a privately produced **machine translation**
> of the transcribed notebooks and are marked as such wherever they appear;
> they are research copies, not a scholarly edition, and the Swedish source
> should be checked before any quotation is reused. The three photographs of
> *The Key* were not inspected by the machine that drafted this paper. What is
> recorded about them is (a) the photographer's description, and (b) a crude
> colour census of the image files. §2 and Appendix C keep those two things
> apart.

---

### Abstract

Two papers have been written about a nine-level integer tensor called the Cosmic
Block: one about the structure and its visualisation, one about the inquiry that
surrounds it. This third paper is a response to both, written from the position
of a reader who is sympathetic to the project and unconvinced by parts of it.

The response makes four moves. First, it treats *The Key* as a **constraint on
the formalisation rather than as evidence for it**, and it separates the
photographer's description of the painting from a colour census of the image
files — a census that does not find the red field the reading depends on, and
that discrepancy is recorded rather than explained away. Second, it argues that
the papers' colour claims **double-book a visual variable**: colour already
encodes cell value, so colour cannot also encode level without ambiguity. Third,
it formalises the claim that memory integration (Level 4) and temporal
integration (Level 8) are independent, proves a small non-determination
proposition, and exhibits two witnesses on a toy block with a runnable script.
Fourth, it gives a reading of the notebooks as a whole, supported by a local
lexical and distributional model built over 4,083 translated pages, and it
states plainly what such a model can and cannot support.

A candidate Hamiltonian is discussed and then refused the name of a model, on
the ground that it has no clock, no state space that anyone has justified, and
no prediction that could fail. Levels 7–9 remain `under_review`.

---

## 1. The brief, and three refusals

I was asked to comment on the two Cosmic Block papers using *The Key* as
inspiration, and to add a summary of a reading of Hilma af Klint's notebooks. A
brief like that invites a fourth paper that agrees with the first three and adds
a level. I have tried to write something less comfortable and more useful.

Three refusals shape what follows, and it is better to state them at the start
than to let them operate as unspoken taste.

**I will not describe the painting as if it had been seen.** The machine that
drafted this paper has no image input. It has three photographs as files, the
photographer's account of what they show, and a colour histogram. That is
enough to reason about *what the reading claims*, and not enough to confirm
*what the painting looks like*. Appendix C records exactly which claims rest on
which of those three supports. This is the same discipline the second paper asks
for in its persona protocol — "no image claims without looking" — applied to the
paper itself.

**I will not merge voices.** Villari writes art history; Siegel supplies a
vocabulary of integration; af Klint's notebooks are primary material in a
machine translation; the Block is a construction by this project. A sentence
that begins in one of those registers and ends in another is the characteristic
failure of this field, and the second paper already knows it. I will mark the
seams: "Villari writes", "Siegel calls", "the notebooks say", "our
interpretation is".

**I will not let the response become a fifth level.** The most tempting move
available to a sympathetic reader is to propose Level 10, or to reinterpret
Level 9 as the reader. I have resisted it, partly because Level 9 already does
the work that a reader-level would do, and partly because the project's most
valuable habit is abstention. A response that cannot abstain is not a response;
it is an annexation.

The method was: read both papers closely; run the local notes model over the
translated corpus; write the two independence witnesses as code and run them;
compute a colour census of the three photographs; and then write only what those
four activities support.

## 2. What *The Key* shows, and what the file contains

### 2.1 Three scales

The three photographs are of one work, at three distances: the whole
composition; a close view of what the photographer calls the **soul surface**;
and a close view of the **cosmic outer rim**. The names are the photographer's,
and they are already an interpretation — a surface does not announce that it is
a soul. I keep them because they describe a structure that matters for the
argument: the work is organised as an interior, a boundary, and an outside.

The reading I was asked to develop is this: the blue–yellow field is **a moment
of absolute time**; the red field is **emotional experience**; Level 5 is the
**conceptualisation of the moment**; Level 8 is **mental reflection in the
present moment**. I will return to that reading in §5 and give it the strongest
form I can. First, the awkward part.

### 2.2 The red field that is not in the file

A crude hue census over the decoded pixels of the three files gives the
following. The classifier is deliberately simple — a pixel is counted as
blue-ish, yellow-ish, or red-ish if its hue falls in a broad band and its
saturation and value clear a low threshold. There is no white balance, no colour
management, no calibration target, and no attempt to segment the painted surface
from the page, the frame, or the room.

| File | View | Blue-ish | Yellow-ish | Red-ish |
|---|---|---:|---:|---:|
| `IMG_0004.jpg` | whole work | 12.1% | 1.8% | 0.0% |
| `IMG_0005.jpg` | soul surface | 12.8% | 0.4% | 0.0% |
| `IMG_0006.jpg` | cosmic outer rim | 6.8% | 0.0% | 0.0% |

A red field that measures 0.0% red pixels is not a refutation of the reading. It
is a signal that at least one of four things is true: the crops do not contain
the region the reading is about; the classifier's red band is wrong for this
photograph's white balance; the "red" in the description names a quality
(warmth, intensity, blood, emotion) rather than a hue; or the description is
remembered from another work. I do not know which. What I know is that **the
reading's colour premise is currently unverified**, and that a paper which
inherits the reading should inherit that sentence with it.

This matters more than it might seem, because the second paper already made a
colour assignment — Level 5 as a blue–yellow fold, Level 6 as a red field — and
marked it as an interpretive proposal pending a human study (PAPER2 §3.4). A
later reader will find two colour readings in the record, differing in what red
is attached to, and no measurement to choose between them. That is exactly the
condition the project's own ontology is designed to make visible.

### 2.3 What a painting can constrain

It is worth saying what role the painting is legitimately playing here, because
"inspiration" is doing too much work in both papers.

A painting cannot be evidence for a tensor. It can be a **constraint**: a source
of requirements that a formalisation must satisfy if it is to count as a
restitution of the work's structure. Constraints are weaker than evidence and
stronger than decoration. A constraint can be violated, and when it is violated
the formalisation is wrong in a way that can be pointed at.

Read that way, *The Key* imposes three requirements on the Block. Neither paper
states them, though the second paper gestures at the third:

1. **Interior, boundary, exterior.** The work has an inside, an edge, and an
   outside, and they are related rather than merely adjacent. A nine-level
   hierarchy that is only a stack of arrays does not yet model a boundary.
2. **Fields, not points.** The composition is organised in coloured regions.
   A visualisation that renders 2,197 independent points has already refused
   the painting's grammar.
3. **A present that is not a duration.** If the blue–yellow field is a moment,
   it is a moment held rather than a moment passing. Nothing in a static tensor
   supplies passage; whatever supplies it must be added, and named.

The third requirement is the one that generates the technical problem in §6 —
what a temporal line is, and what it does not determine — and the speculative
problem in §7, which is what a clock would be. The first two are matters of
rendering, and the first paper's point-cloud phase is honestly described as a
phase.

## 3. The first paper: a structure that knows it is a structure

### 3.1 What it gets right

*The Cosmic Block* does three things that most interdisciplinary artefacts do
not.

It **separates the model from the rendering**. The tensor is TypeScript with
validation; the visualisation consumes it; neither imports the other's
assumptions. This sounds like ordinary software hygiene and is in fact rare in
art-and-science work, where the metaphor usually migrates into the data
structure and is never seen again.

It **validates the primitive**. A cell is an integer in `[0,9]`, and the
constructor refuses anything else. The value alphabet is then a real object —
`Z₁₀` in the paper's notation — not a decorative claim about "ten cosmic
principles". The distinction between an alphabet and a numerology is enforced by
a runtime check, which is the only place such a distinction can be enforced.

It **refuses Levels 7–9**. The refusal is stated in the specification, repeated
in the paper, and honoured in the code. That is more than can be said for most
nine-level schemes.

### 3.2 The caveat is in the wrong place

The first paper's honest caveat is that the reference painting was never decoded
by the build agent's image pipeline, so thirteen, five, and two are interpretive
assumptions rather than measurements (PAPER §1.3 and the closing status note).
The caveat is true and it is also inert, because it lives in prose while the
parameters live in code.

A reader who imports `createConfig()` gets `13 × 13 × 13`; the doc comment
says the defaults are "inspired by" af Klint, which is a different kind of claim
from "measured", and nothing in the type distinguishes the two. A reader who
imports the palette gets ten hex values with an aesthetic rationale in comments
and no record of a source. The paper says "af Klint-inspired"; the type says
nothing. This is the same failure the second paper diagnoses in the first — care
in a footnote is not care in a data model (PAPER2 §3.2) — and the second paper
does not apply the diagnosis to the parameters themselves.

The repair is small and I recommend it in §10: carry provenance on the
parameter, not beside it. A dimension should be able to answer the question
"measured, stipulated, or assumed?" without reference to a PDF.

### 3.3 Two smaller objections

**"Harmonic" is doing two jobs.** The paper calls the defaults a
"golden-ratio-inspired progression" and then lists 13, 5, and 2. Two of those
are Fibonacci numbers, so a Fibonacci reading is available; but the sequence is
non-consecutive, the cubic repetition `13 × 13 × 13` is not a ratio at all, and
nothing in the paper says which progression is meant. I have no quarrel with
choosing primes or Fibonacci numbers. The quarrel is with a phrase that makes
the choice sound measured. If the numbers are a stipulation, say stipulation.

**The address-space remark is stronger than it looks.** The paper observes that
the configuration space of a default Block has `10^21,970` states, and treats
that as an embarrassment for enumeration. It is also the most interesting number
in the paper, because it is the point where the Block stops being a diagram and
becomes a state space — which is what §7 needs and does not have. I would move
that remark out of §5.3 and into the discussion of what would make the Block a
physical model.

### 3.4 What I take from it

The first paper's real achievement is that it made the Block **buildable**, and
therefore criticisable. A tensor that exists only in prose can absorb any
objection. A tensor with a constructor, a validator, and a test suite can fail,
and a thing that can fail can be learned from. Almost everything I say in this
response depends on that.

## 4. The second paper: a grammar for uncertainty

### 4.1 The best idea in the two papers

The second paper's central move is that **abstention is a technical act**
(PAPER2 §3.3). An unresolved level is not a gap to be filled by the next
enthusiastic function; it is a position that must be represented, so that it
cannot be silently filled. This is a genuinely good idea, and it is
under-implemented in the paper's own rhetoric: the paper says the ontology
"records the gap as an open question", but the interesting part is not the
record, it is the **prohibition**. An open question that does not block a
constructor is a comment.

### 4.2 Four perspectives without aggregation rules

The partition into existence, experience, belief, and interpretation (PAPER2 §5)
is the right partition, for the reason the paper gives: the characteristic error
in this field is a silent promotion, and the buckets make promotion visible.

But a partition is not yet a logic. The paper tells us that the perspectives
must not be merged; it does not tell us what inferences *are* allowed between
them. And the project needs those inferences, because its evidential situation
is precisely one of aggregation: many first-person reports, some published art
history, a body of esoteric texts, and a construction. The question "does the
common core exist?" is not answerable inside a single perspective; it is a
question about whether a pattern across experience reports licenses a claim in
the belief or existence register.

As it stands, the ontology makes the promotion visible and then forbids it,
which is safe and sterile. What is missing is a small set of **licensed
cross-perspective moves**, each with its own failure condition. For example:

- *N reports of X* may support a belief that X is reportable, not a claim that X
  exists. The licensed conclusion is about the reports.
- *A text says X* may support a belief that the tradition holds X, not a claim
  that X. The licensed conclusion is about the text.
- *A model reproduces X's structure* may support an interpretation that the
  model captures something of X, not that X is the model. The licensed
  conclusion is about the model.

Each of these is weaker than what a reader wants and stronger than silence. A
grammar of uncertainty needs them, or it becomes a grammar of refusal.

### 4.3 The engineered fit needs an alternatives record

The second paper is commendably explicit that the fit between nine Block levels
and nine Siegel domains is **engineered, not found** (PAPER2 §3.4). That
sentence is the most honest in either paper, and it creates an obligation the
paper does not discharge: if a fit is engineered, the record should say what
else was considered.

There are at least three other nine-item lists available in the neighbourhood —
the nine choirs of angels, the ninefold systems of various theosophical
schemes, and the simple ordinal 1–9 — and the paper does not say why Siegel's
list is the better template. The answer may be good: Siegel's domains are
operationalised in clinical and developmental research, they come with
observable correlates, and they are not primarily cosmological. But the answer
belongs in the paper, because otherwise the reader is entitled to suspect that
the domains were chosen because they are nine.

This is not a demand for a literature review. It is a demand for one paragraph,
and it is the difference between an engineered fit and an arbitrary one.

### 4.4 The colour double-booking

I will develop this in §5.3, but it belongs in the critique of the second paper
because the second paper introduces it. The Block's visual language assigns
colours to **cell values** (PAPER §4.1). The second paper then assigns colours
to **levels**: a blue–yellow fold for Level 5, a red field for Level 6. If both
assignments stand, the same visual variable carries two semantics, and the
rendering can no longer be read. This is not a small inconsistency; it is a
category error inside the design, and it is the kind that a reader who has
actually looked at the output would catch immediately. That nobody caught it is
itself evidence for how much of this project has been conducted in prose.

### 4.5 What I take from it

The second paper gives the project something the first could not: a way to be
wrong on purpose. Its six statuses, its four perspectives, and its insistence
that a transformer is a triple `(D, C, ρ)` are the right instruments. My
objection is that the instruments are calibrated to record, not to test. A
laboratory that can say "we speculated this" is better than one that cannot; a
laboratory that can say "this is what would have made us stop speculating it" is
better still.

## 5. Reading *The Key* through the Block

> **Everything in this section is interpretation.** It is not Villari's, not
> Siegel's, and not a claim about what af Klint intended. It is a reading
> proposed by this project's persona, and it is offered so that it can be
> attacked.

### 5.1 The reading

The reading I was asked to develop has four parts, and they are not of the same
kind. It is worth sorting them before defending any of them.

| Claim | Kind | What would support it | What would refute it |
|---|---|---|---|
| The blue–yellow field is a moment of absolute time | interpretation of the painting | a documented colour programme in the notebooks, or a viewer study | the field is not blue–yellow, or the notebooks attach the pair to something else |
| The red field is emotional experience | interpretation of the painting | the same | the red field is absent, or red is used for a different register |
| Level 5 conceptualises the moment | interpretation of the Block | the Level 5 type is a relation of two collections | Level 5 is a container with no relational structure |
| Level 8 reflects the present | interpretation of the Block | the Level 8 type is an incidence path with a distinguished present position | Level 8 is a line with no incidence or no present |

The first two are claims about a painting; the second two are claims about a
formal object. The interesting thing is that the second two can be **checked
against the project's own types**, and the first two cannot be checked at all
without a human looking at the work. This asymmetry is the reason a paper like
this one should be explicit about which of its sentences are auditable.

### 5.2 Why "a moment of absolute time" is the right phrase to argue with

The phrase is doing real work. A moment of absolute time is not a duration and
not an instant in a series; it is a present that is not defined by its
neighbours. The notebooks have a sentence that is closer to this than anything I
could invent:

> "Eternity and the fleeing moment, the unchangeable the same and the
> ever-changing, spirit, and matter, to equal extent, sing the Lord's lof."
> — `1159DF1.pdf:11`, machine translation

"The fleeing moment" and "the unchangeable the same" are set against each other
as a pair, and the pair is then mapped onto spirit and matter. Whatever else is
going on in that sentence, the notebooks are already thinking in the register
the reading needs: a present defined by contrast with permanence, not by
position in a sequence.

That is a **resonance**, not a source. The notebooks do not say that a
blue–yellow field is absolute time; nobody says that. What the passage supports
is narrower and still useful: the vocabulary of "moment" and "eternity" as a
complementary pair is native to the corpus, so a reading that treats a
complementary colour pair as a moment is at least speaking the local language.

### 5.3 The double-booking objection, and a way out

Here is the difficulty. In the Block's visual language, colour is a function of
**cell value**: ten values, ten colours. If colour is also a function of
**level**, then a red region could mean "cells of value 3" or "Level 6", and the
image cannot tell you which. The second paper's Level 5/6 colour proposal and my
own blue–yellow/red reading are both exposed to this objection.

There are two ways out, and only one of them is good.

*The bad way* is to let colour mean both, with context deciding. That is how
diagrams become decorative, and it is unfalsifiable by construction.

*The good way* is to keep the two semantics on different variables. Colour
encodes value; **position, scale, and opacity** encode level and membership. On
that discipline, the painting's fields are **value configurations** — regions
where the cells take a particular distribution of values — and the levels are
**operations** performed on those configurations, not regions of the painting.

This is a real gain, because it converts the reading from a map between two
kinds of thing (painting regions and levels) into a map between two kinds of
thing that can be related (configurations and operations). It also lets me state
the reading without the double-booking:

- the blue–yellow field is a **configuration** — a distribution of values in a
  region — and the reading calls that configuration *a moment*;
- the red field is an **affective registration** of that configuration, which is
  an experience claim, not a structural one;
- Level 5 is the **conceptualisation** of the configuration as a relation
  between two collections;
- Level 8 is the **reflection** of it as an incidence path whose distinguished
  position is the present.

On this reading, the painting does not illustrate the hierarchy. It supplies a
division of labour: fields are data, the boundary is a level distinction, and
the outside is the limit. The hierarchy is the *reading apparatus*, not the
picture.

### 5.4 The reading as a constraint on the candidates

The reading is not idle. It makes two demands on PAPER2 §3.4, and both are
already half-met by the candidates proposed there.

**Level 5 must be relational.** If Level 5 conceptualises a moment, it cannot be
a container. The candidate type — two collections placed in relation, with
sequence and pairing — is relational, and that is a point in its favour. But the
implemented Level 5 is a collection of collections; its relational structure is
indexical, not semantic. The reading therefore says that the *interpretation* of
Level 5 needs a relation that the *type* does not yet carry. That is a gap worth
recording, not a gap worth filling by fiat.

**Level 8 must have a present.** The candidate type gives the line an incidence
path and a value sequence, but no distinguished position. "Mental reflection in
the present moment" requires a marked index — the `i` at which reflection
occurs. Nothing in the candidate supplies it. This is a genuine defect in the
construction, and it is exactly the kind of defect the reading is good for
finding: it is visible only when you ask what the level is supposed to *mean*,
and it is formal enough to fix.

A minimal repair: add a distinguished index `i*` to the temporal line, so that
`L = (B, γ, τ, i*)`. The preservation condition becomes: `i*` is the position
from which the line is read, and the line's values before and after `i*` are
available to the reading as retention and anticipation. I offer this as a
candidate, not an adopted type, and it changes nothing in the implementation.

### 5.5 What the reading cannot do

It cannot tell us whether the painting is about time. It cannot tell us whether
af Klint would have recognised the Block. It cannot adjudicate between the
second paper's colour assignment and mine, because both rest on the same
unverified premise. And it cannot supply the measurement that would settle the
red-field question in §2.2.

What it can do is keep the formalisation honest about what it is doing. A
reading that generates requirements is useful even when it is false, because the
requirements can be tested. A reading that generates only admiration is not.

## 6. Memory and time are not the same axis

### 6.1 The claim

The second paper's table aligns Level 4 with **memory integration** and Level 8
with **temporal integration** (PAPER2 §3.4). The alignment is ordinal, and the
paper says so. I want to make a stronger claim and then defend it: on the
project's own types, the two views are **independent** — neither determines the
other — and this independence is a design decision with a price, not a discovery
about minds.

The claim matters because the alternative is quietly assumed all the time. If
memory is just time remembered, then a single ordered series does both jobs, and
Level 8 is redundant. If time is just memory replayed, Level 4 is redundant. The
project needs to know which of those it is doing, and at present it does neither:
it has two levels and no statement about their relation.

### 6.2 The two views, stated precisely

Use the notation of PAPER2 §3.4. Let `V = {0,…,9}`, let `κ(n) = 9 − n`, and let

```
A₅ = C₅ × C₄ × Z × Y × X
```

with `C₅ = {0,1}`, `C₄ = {0,…,4}`, and `X = Y = Z = {0,…,12}` at the defaults. A
Level 6 content is a function `B : {0,1} × A₅ → V`, where the leading `{0,1}` is
the Level 6 component. Write `A₆ = {0,1} × A₅`. At the defaults `A₅` has 21,970
addresses and `A₆` has 43,940, arranged as twenty model spaces in four groups of
five.

**The Level 4 view** is the memory collection. One collection is the multiset of
its five model spaces, with the `C₄` label forgotten:

```
G(c, c₅) = { B(c, c₅, c₄, ·) : c₄ ∈ C₄ }.
```

The whole view is the multiset of the four collections inside the Level 6
content,

```
M(B) = { G(c, c₅) : c ∈ {0,1}, c₅ ∈ C₅ },
```

with braces denoting multisets at both levels. This is the formal content of
"five retained or re-presented model spaces": memory is what is kept, and the
order in which it is filed is not part of the memory claim.

**The Level 8 view** is a temporal line `L = (B, γ, τ)` with `γ = (a₀,…,a_{k−1})`
a path in the index graph `G₆` from component 0 to component 1, and
`τ_i = B(a_i)`. The line's structure is the pair `(γ, τ)`.

Both views are functions of the same object `B`, which is why the question of
independence is not trivial. The claim is that neither view is recoverable from
the other.

### 6.3 A non-determination proposition

**Proposition.** Let `k = |γ| < |A₆|`.

1. The map `B ↦ (γ, τ)` is not injective. Hence the Level 8 view does not
   determine the Level 4 view.
2. The map `B ↦ M(B)` is not injective on the fibre of `B ↦ τ` for fixed `γ`.
   Hence the Level 4 view does not determine the Level 8 view.

*Proof of (1).* The line reads `k` cells. Since `k < |A₆|`, choose an address
`a ∉ γ` and define `B′` to agree with `B` everywhere except at `a`. Then
`τ′ = τ` and `γ′ = γ`. Changing one cell alters exactly one model space, so
`G` changes unless the altered space becomes equal to one of the other nineteen.
Each competitor rules out at most one of the ten values of `a`, so a value that
avoids all of them exists. Hence `M(B′) ≠ M(B)`, and two distinct contents give
the same line. ∎

*Proof of (2).* Let `σ` be the involution of `A₆` that swaps `c₄ ↦ 1 − c₄` and
fixes the other coordinates. Define `B′ = B ∘ σ`. The multiset `M(B′)` equals
`M(B)`, because `σ` permutes the `C₄` index within each collection and each `G`
forgets that index. For a fixed path `γ`, however, `τ′_i = B(σ(a_i))`, which
differs from `B(a_i)` whenever `B` is not constant on the `σ`-orbits visited by
`γ`. Choosing such a `B` (the constants are a measure-zero set among the
`10^|A₆|` contents) gives `M(B′) = M(B)` and `τ′ ≠ τ`. ∎

The second proof is the interesting one, because it isolates the exact price of
independence: **the Level 4 view must forget the `C₄` label.** If memory keeps
its labels — if the five spaces are ordered and addressable — then `B` is
recoverable from `M(B)` and independence fails. Independence is therefore a
statement about how memory is specified, not a fact about memory.

### 6.4 The witnesses, run

The proposition is small enough to exhibit. `tools/independence_check.py`
constructs a toy block with `C₅ = C₄ = 2` and `X = Y = Z = 2`, so `|A₆| = 64`
and there are four collections of two model spaces each, and it searches for
both witnesses.

```
W1: same Level 4 multiset, different Level 8 sequence
    seed = 0
    tau(B)  = (8, 6, 2, 3)
    tau(B') = (1, 3, 3, 2)
    multiset equal: True
    collections in view: 4

W2: same Level 8 sequence, different Level 4 multiset
    changed address (not on the path): (0, 0, 0, 0, 0, 1)
    tau(B)   = (8, 6, 2, 3)
    tau(B'') = (8, 6, 2, 3)
    multiset equal: False
    cells observed by the line: 4 of 64
```

The numbers are deliberately unimpressive: four addresses out of sixty-four, a
handful of values. The point is not the size. The point is that the two views
can be made to disagree in both directions on a block small enough to check by
hand, which means the independence claim is not a slogan — it is a property of
the definitions.

At the defaults the asymmetry is starker: a temporal line with `k = 2` reads two
cells out of 43,940. The line is an observation of the content, and an
observation that sees `2/43,940` of its object cannot determine the object. That
is the quantitative form of the claim that temporal integration is not memory
integration.

### 6.5 What would couple them

Independence is the default only because nothing in the types couples the views.
It is easy to couple them, and the coupling is worth stating because it is
probably what a narrative level would do.

**Narrative ordering.** Define the memory collection to be ordered by first
visit along `γ`:

```
M_γ(B) = ( B(a_i, ·) : i is the first index at which γ enters a model space, in path order ).
```

Now the temporal line determines the order of memory, and the two views are
dependent by construction. This is a perfectly reasonable formalisation of the
idea that memory is organised by the story we tell about it. It is also a
*stronger* claim than the project currently makes, and it should be adopted only
with a test: if narrative integration orders memory, then changing the path
should change the reported order, and that is observable in principle.

The point of offering it is to show that independence is a choice among
defensible alternatives, not a discovery. The second paper aligns Level 5 with
narrative integration. If Level 5 is narrative, and narrative orders the memory
collection, then the dependency runs `L8 → L5 → L4`, and the ordinal table's
flat alignment is misleading. That is the kind of consequence the table should
record.

### 6.6 What the independence buys

Three things, none of them metaphysical.

First, it **licenses two separate measurements**. A study of memory retention can
vary the content while holding the path fixed; a study of temporal reflection can
vary the path while holding the memory multiset fixed. Without independence, the
two designs are confounded by construction.

Second, it **explains why the levels are not redundant**. A nine-level hierarchy
with two levels doing the same job is a numerological hierarchy with extra
steps. Independence is the minimum condition for the levels to be doing
different work.

Third, it **makes the failure conditions explicit**. The independence fails if
the Level 4 view keeps its labels, or if a narrative ordering is imposed. Those
are precise, checkable conditions, and they belong in the specification.

What it does not buy is any claim about brains. Siegel's list separates memory
integration from temporal integration by name; naming is not a proof of
independence, and the proposition above is about a data type, not about a mind.
The most that can be said is that the formalisation is **compatible** with the
distinction, which is more than the project had before.

## 7. A Hamiltonian, if there is one

### 7.1 The temptation

The notebooks speak of forces, waves, atoms, and ether; the papers speak of a
lattice, a state space, and a value alphabet; and it is natural to ask whether
the Block has a Hamiltonian. I understand the temptation and I have felt it. The
question is not whether the analogy is attractive — it is — but whether there is
an operator with a state space, a clock, and a prediction.

At present there is not. What follows is the most honest version I can construct,
and it ends in a refusal.

### 7.2 Three candidate state spaces

A Hamiltonian needs a Hilbert space before it needs an operator. Three
candidates are available, and they are not equivalent.

1. **The address space** `H_A = ℂ^{A₆}`. Basis vectors are addresses; a state is
   a complex amplitude on addresses. Dimension 43,940 at the defaults. This is
   the space in which the graph Laplacian lives, and it is the only one that is
   computationally tame.
2. **The configuration space** `H_C = ℂ^{V^{A₆}}`. Basis vectors are complete
   value assignments; dimension `10^43,940`, against `10^21,970` for the stored
   Levels 1–5. This is the space the first paper's information remark points at.
   Nothing can be diagonalised here, and almost nothing can be written down.
3. **The quotient space** `H_C / ~`, where `~` identifies configurations that
   differ by a symmetry of the construction — for example the complement
   involution, or address relabelling. This is the only candidate that could be
   finite *and* semantically rich, and nobody has specified the quotient.

A paper that says "the Block might have a Hamiltonian" without choosing among
these has not said anything yet. The choice is the model.

### 7.3 A candidate operator

Take `H_A` and let `A` be the adjacency operator of the index graph `G₆`. A
minimal candidate is

```
H = −J·A + Σ_a U(a) |a⟩⟨a|,
```

with `J > 0` a hopping scale and `U` an on-site potential. The adjacency term
couples addresses that differ in one coordinate; the potential term breaks the
translation symmetry that the adjacency term preserves.

Two things follow immediately, and they are worth having.

**The path sector is solvable in a limiting case.** If the line were isolated —
no edge from `γ` to the rest of `G₆` — the adjacency part would be the adjacency
matrix of a path on `k` vertices, with eigenvalues

```
μ_j = −2J cos(πj/(k+1)),  j = 1,…,k.
```

The corresponding Laplacian gap is `2J(1 − cos(π/k))`, which behaves as `Jπ²/k²`
for large `k`. This is a real spectrum, and it is a clock of a kind: the gap
shrinks as the line lengthens. But `γ` is not isolated in `G₆`, so the
restriction is an approximation; and the clock is the index, not a time. The
formula describes a standing wave on a line of `k` addresses; it does not
describe anything happening.

**The value involution is not a symmetry of `H_A`.** The complement `κ` acts on
values, and `H_A` has no values in it. On `H_C`, by contrast, the operator
`Kψ(B) = ψ(κ ∘ B)` is well defined, and any `H` built from `κ`-invariant local
terms — potentials depending on values only through `κ`-invariant functions, and
couplings invariant under simultaneous complementation — commutes with `K`. The
spectrum then splits into `K = ±1` sectors, and the ground state can be chosen in
either. This is the honest translation of "complementary pair" into quantum
language — and it is a statement about `H_C`, not about `H_A`, which is why the
project's habit of speaking of complementarity as a property of the *levels* is a
category slip.

### 7.4 The clock problem

The deeper difficulty is time. A Hamiltonian generates a flow
`ψ(t) = e^{−iHt} ψ(0)`, and `t` is an external parameter. The Block has no `t`.
Level 8 supplies an index `i` along a path, and the tempting move is to identify
`i` with `t`.

That identification is the whole model, and it is an assumption, not a
derivation. If `i` is time, then the Hamiltonian is a representation of the
path, and the path was chosen by the study protocol — which means the dynamics
is chosen by the study protocol. If `i` is not time, then `e^{−iHt}` has no
argument, and the operator is a bookkeeping device whose spectrum labels modes
rather than moments.

There is a third option, and it is the one the notes' vocabulary almost invites:
treat `H` as a **constraint**, `Hψ = 0`, so that the state is a zero mode and
the path index is gauge. This is the Wheeler–DeWitt move, and it has a
consequence the project should notice: if the index is gauge, then Level 8's
"temporal" content evaporates, and the level becomes a description of
correlation rather than of time. That may be the right answer. It is certainly
not the answer the second paper assumes when it aligns Level 8 with temporal
integration.

So there is a real tension between the two proposals, and it should be recorded
rather than smoothed: **the incidence reading of Level 8 and the Hamiltonian
reading of Level 8 cannot both be literal at once.** One of them has to give.

### 7.5 What would make it a model

I would accept the following as a model, and nothing weaker:

1. A named state space, with an argument for why that space rather than the
   other two.
2. An operator, specified up to the symmetries that are claimed.
3. A clock, or an explicit statement that there is none and the operator is a
   constraint.
4. A preservation condition connecting the operator to the Block's types —
   what does the flow preserve, and what does it fail to preserve?
5. At least one consequence that could be false: a gap that should not vanish, a
   degeneracy that should appear, a commutation that should hold.

The candidate above satisfies (2) on `H_A`, and the symmetry remark in §7.3
supplies a candidate for part of (4) on `H_C`. It fails (1), (3), and (5). That
is why it is a `speculated` item and not a result, and I would enter it in the
ontology with exactly that list attached, so that the next reader can see what
is missing instead of inferring that something is present.

I would also enter a warning, because the temptation is strong: **"quantum" is
not a synonym for "holistic"**. The notes' ether is not a wavefunction, the
Block's values are not amplitudes, and a lattice is not a lattice gauge theory
until a gauge group and a connection are specified. The first paper is careful
about this in §6.4 ("where the physics stops"). The second paper's enthusiasm
for a Hamiltonian should inherit that care.

## 8. Reading the notebooks as a whole

### 8.1 What was read, and how

The corpus is the transcribed material published as PDFs by the Hilma af Klint
Foundation: 115 source PDFs — notebooks, catalogues, and indexes — plus one
legacy PowerPoint text extraction, 4,137 pages, and about 11.8 million
transcribed characters. A local Swedish→English machine translation produced 116
English PDFs; of these, 4,083 pages contain at least forty characters of
extractable text, and 4,065 pages were modelled.

The reading below was produced with a local model described in §9: a SQLite
full-text index, a TF–IDF/LSA topic model with 32 components over a 14,560-term
vocabulary, curated concept counts, and eight thematic axes. It is a **lexical
and distributional** instrument. It finds recurrence, neighbours, and concept
clusters. It does not understand, and it inherits every error of the translation.

Three cautions apply to everything in this section. The translation is machine
output; odd phrases are artifacts, not evidence of af Klint's style. Page
references are PDF positions, not printed page numbers. And a concept count
measures how often a *translation* renders a term, not how often the underlying
Swedish word occurs.

### 8.2 The shape of the vocabulary

The corpus is dominated by a small set of terms, and the dominance is stable
across decades and notebooks. The sixteen most frequent curated concepts are:

| Concept | Occurrences | Concept | Occurrences |
|---|---:|---|---:|
| light | 4,697 | Christ | 2,144 |
| spirit | 4,517 | white | 1,951 |
| astral | 3,428 | nature | 1,767 |
| ether | 2,803 | ether body | 1,583 |
| soul | 2,674 | blue | 1,363 |
| darkness | 2,402 | temple | 1,087 |
| colour | 2,237 | elemental spirits | 1,078 |
| red | 2,174 | rose | 1,004 |

A first observation: **this is not a mystical vocabulary in the sense of the
indeterminate**. It is technical. Light and darkness, ether and astral, blue and
red, rose and cross are terms with positions in a system, used repeatedly and
consistently, in the way a workshop uses the names of materials. The model's
fourth latent topic is almost purely the colour lexicon — `red, blue, yellow,
white, black, color, cross, green, light, violet, rose, gold, flower, pink` —
which suggests that colour is not incidental description but a vocabulary with
its own coherence.

A second observation: the corpus has **two registers that the model separates
cleanly**. Topic 2 is the transcription apparatus itself: `text, number, print,
listed, handwritten, original, distinguished, hard-to, cases, bottom`. The
model is picking up the edition's own metadata — the notes about illegible
words, the lists, the page furniture. This is a useful warning: a topic model
over a scholarly edition will find the edition. Any claim about af Klint's
preoccupations has to exclude the apparatus, and a lexical model cannot do that
without being told.

### 8.3 Six axes

The model ranks pages along eight thematic axes. Six of them carry the reading
that follows; the passages below are the ones I checked, and they are quoted as
the machine translation renders them.

**Time and the fleeing moment.** The pair of eternity and the moment recurs, and
it is usually paired with a third pair — spirit and matter, or the unchanging
and the changing:

> "Eternity and the fleeing moment, the unchangeable the same and the
> ever-changing, spirit, and matter, to equal extent, sing the Lord's lof."
> — `1159DF1.pdf:11`

> "The Five." — `1156GRE1.pdf:26`, the line immediately preceding the quotation
> below

> "I honor you in His name, whose loyalty ever sings, as well as the moment that
> flees." — `1156GRE1.pdf:26`

The second passage is striking because it attaches the phrase to **The Five**,
the group of five women around the early work. The moment is not an abstraction
here; it is the thing the group is addressed in relation to.

**Colour and number.** Colour appears as a specification, not a mood. Pages list
colours as one lists materials, and the lists are attached to forms and numbers:

> "The rose has the vortex in its middle, is twelve-blade, the vortex is yellow
> and blue, yellow to the right down." — `581DAGBO.pdf:18`

> "The blue color that surrounds the circle is space." — `556BESKR.pdf:80`

> "The light contains 7 colours, the Ariman and The Five (De fem)…"
> — `419 anteckningar.pdf:9`

The third passage is the most compressed statement of the project's problem that
the corpus contains: a number (seven), a colour claim, a cosmic figure (Ariman),
and a social fact (The Five) in a single sentence. If one wanted a reason why a
nine-level tensor is an attractive object for this material, that sentence is
better than any argument in the papers.

**Ether body and elemental spirits.** This is the densest technical thread in the
corpus, and it is where the notes are most clearly a working cosmology rather
than a set of aphorisms:

> "Certain elemental spirits (elementarandar) that do not belong to the sphere
> of plants are eager to arrive at the flower body and open it…"
> — `1043TANK.pdf:2`

> "When the whole force of the woman is to liberate the man's ether body from
> Ahriman and the whole force of the man is to free the woman from Lucifer, then
> it can regain each one's ether body in purified condition."
> — `1043TANK.pdf:27`

> "The Atom is at once bounded and developed. As the atom expands on the ether
> planet, glow occurs in the physical part…" — `579DAGBO.pdf:34`

Three things are happening here. Elemental spirits are **agents with interests**
(eager, fearful) organised by kingdom. The ether body is **liberated by a
relation between two people**, not by an individual practice — a structural point
that the Block's Level 6 pair is oddly well placed to represent. And the atom is
**bounded and developed at once**, which is a cosmological claim of exactly the
kind the first paper's finite-lattice reading formalises, and exactly the kind it
should not claim to have derived.

**Temple and building.** The temple is the corpus's most concrete image and its
most obviously double:

> "He intends to build a temple in the outer." — `556BESKR.pdf:28`

> "the time and the interior of the temple building is a great work."
> — `1084ANT.pdf:23`

> "This is called the white temple." — `1072ANT.pdf:17`

> "It was in the walls of the temple disharmony." — `1051TANK.pdf:11`

The temple is a building, a body, and a community, and the notes move between
these without marking the transition. That is not vagueness; it is the ordinary
grammar of a tradition in which the sanctuary is also the person. The Block's
architecture metaphor inherits this ambiguity whether or not it wants to, which
is why the first paper's §8.3 warning — "levels as planes, a metaphor with a
trap" — is well placed.

**Lucifer, Ariman, and duality.** The two figures are not good and evil. They are
a pair of one-sided forces, and the human task is to hold them:

> "When the whole force of the woman is to liberate the man's ether body from
> Ahriman and the whole force of the man is to free the woman from Lucifer…"
> — `1043TANK.pdf:27`

> "During the Egyptian period, I received through one of its inaugurated priests
> the teaching of the life of man in the womb and therefore on the ether planet."
> — `1044TANK.pdf:7`

The pairing is structural, not moral: each figure supplies what the other lacks,
and the relation between two beings is what makes the liberation possible. This
is the closest the corpus comes to a native justification for a Level 6 that is
a *pair* rather than a stack, and it is stronger than the complement involution
`n ↦ 9 − n`, which is a property of the alphabet and not of the cosmology.

**Nature and plant forces.** Plants are the corpus's model system. They have
group souls, elemental inhabitants, and stages:

> "Rosenx, with his many leaves and with his pre-crunched seed possibilities, is
> a picture of man's further development from bodily to ether-body, but not
> before he has arrived at the white rose…" — `1043TANK.pdf:25`

> "There are many kinds, but the pure white lily is the greatest, it has been
> designed by a very bright spirit that concentrated its qualities in the beauty
> and well-smell of the white lily." — `579DAGBO.pdf:32`

The translation mangles `Rosenx` (almost certainly a name, not a plant), and the
passage is still legible: the rose is a **stage**, the white rose a later one,
and the lily a type. This is a developmental series, not a floral decoration,
and it is the clearest native analogue in the corpus for a hierarchy whose levels
are stages of the same process.

### 8.4 The whole, in one paragraph

Read as a whole, the notebooks are **a workshop manual for producing and reading
images**, with a cosmology in the background and a discipline in the foreground.
They are procedural (you shall, try to, place this here), iterative (the same
figure returns with variations across years), diagrammatic (colour lists that
specify rather than describe), and devotional (addressed to masters, to The Five,
to Christ). The cosmology is not systematic: it is invoked when a procedure needs
a warrant. The recurring pairs — light/darkness, spirit/matter, Lucifer/Ariman,
rose/lily, inner/outer — are the *operators* of the workshop, and the numbers
(five, seven, twelve) are the *parameters*.

That is a different object from the one the papers sometimes describe. It is not
a doctrine with nine levels; it is a practice with a vocabulary, and the
vocabulary is remarkably stable over three decades. If the Block is to be a
restitution of anything in this material, the thing to restitute is the
**workshop**: a set of operations on configurations, with named parameters, that
can be performed and repeated. That is closer to what the first paper's tensor
actually is than the "spiritual anatomy" language suggests, and it is a better
justification for building it.

### 8.5 What the model cannot support

It cannot support claims about intention. It cannot distinguish a theme af Klint
cared about from a word the translation overuses. It cannot date a passage
reliably, because the notebook numbering and the PDF pagination are different
systems and the model indexes the latter. And it cannot adjudicate the reading in
§5, because the reading is about a painting the model has never seen.

What it can do is make the summary **checkable**. Every claim in §8.3 has a page
reference, and every page reference can be opened. That is a low bar, and it is
higher than the one the earlier papers set for their art-historical claims.

## 9. The local instrument

### 9.1 What was built

`notes-assistant/` is a self-contained, offline reading system. It uses no
network, no external model, and no API. It builds:

| Artefact | What it is |
|---|---|
| `data/notes.sqlite3` | SQLite FTS5 index, one row per PDF page |
| `data/lsa_model.npz` | TF–IDF matrix reduced by truncated SVD (32 components) |
| `data/topics.json` | top terms per latent topic |
| `data/concepts.json` | curated concept counts, sample pages, co-occurrence |
| `data/themes.json` | ranked pages per thematic axis |
| `data/themes.md` | rendered thematic reading aid with citations |
| `data/notes-report.md` | generated corpus overview |

The pipeline is: extract page text with PyMuPDF; tokenise with a stop-word list;
build TF–IDF; reduce with `scipy.sparse.linalg.svds`; index with FTS5; count
concepts by curated regular expressions; and rank pages along eight thematic
axes by requiring lexical seed matches and then ordering by seed-term density and
LSA cosine.

### 9.2 What it is not

It is not a language model in the generative sense, and it should not be
described as one. It has no parameters learned from text beyond term frequencies,
no attention, and no ability to produce a sentence that is not a quotation. When
it "finds a theme", it has found pages containing words the reader nominated in
advance. That is a retrieval aid with a vector-space ranking, and calling it a
model of the notes would be the same category error the second paper warns about.

It is also not neutral. The stop-word list, the concept patterns, and the eight
axes are all choices made by the person who wrote them. The axes in particular
encode a hypothesis about what matters — time, colour, ether, temple, light,
duality, soul, nature — and a different reader would have chosen differently. The
model makes that hypothesis executable, which is useful, and it does not make it
true.

### 9.3 What it found that I did not expect

Three things.

**The edition is a topic.** As noted in §8.2, one of the 32 latent topics is the
transcription apparatus. A model of a scholarly edition will model the edition.
This is obvious in retrospect and easy to forget in practice, and it is a good
argument for keeping the apparatus out of the corpus before modelling it.

**The colour lexicon is coherent enough to be a topic.** Topic 4 is almost pure
colour and form vocabulary. That does not prove that colour is a system, but it
does show that colour words co-occur with each other rather than being scattered
through unrelated passages — which is what one would expect if colour were a
specification language, and not what one would expect if it were decorative.

**Retrieval produces confident false positives.** The first version of the
thematic ranking placed a catalogue of plant names at the top of "ether body and
elemental spirits", because the page contains many plant terms and the LSA
projection rewarded the general botanical vocabulary. The fix was to require
lexical seed matches before ranking. The episode is worth recording because it is
the characteristic failure of this kind of instrument: it is not random, it is
plausible, and it is wrong.

### 9.4 Reproducing it

```powershell
python notes-assistant/notes_model.py build
python notes-assistant/notes_model.py stats
python notes-assistant/notes_model.py search "ether body"
python notes-assistant/notes_model.py concept "elemental spirits"
python notes-assistant/notes_model.py themes --limit 6
python tools/independence_check.py
```

The build takes a few minutes over 116 PDFs and produces the counts reported in
§8.1. The independence check is instant.

## 10. Seven revisions I would make

These are addressed to the papers, not to the reader, and each names the
artefact it would change.

1. **Carry provenance on parameters.** A dimension or palette entry should
   record whether it is measured, stipulated, or assumed, and the constructor
   should expose that record. This moves the first paper's caveat from prose into
   the type system, where it can be queried. *(PAPER §2.5, §4.1.)*

2. **Add a falsifier field to every claim.** Status and confidence record the
   current position; a falsifier records what would move it. Without that field
   the humility audit audits the wording, not the warrant. *(PAPER2 §6–7.)*

3. **Specify licensed cross-perspective moves.** The four perspectives prevent
   silent promotion but also prevent aggregation. A short table of allowed
   inferences — reports support reportability, texts support tradition, models
   support interpretation — would make the ontology usable without making it
   credulous. *(PAPER2 §5.)*

4. **Resolve the colour double-booking.** Keep colour for value, and put level
   and membership on position, scale, or opacity. Withdraw the Level 5/6 colour
   assignment or restate it in the value vocabulary. *(PAPER2 §3.4, end.)*

5. **State the Level 4 / Level 8 independence condition.** Add it to the
   specification with its two witnesses and its price (the forgotten `C₄` label),
   and record the narrative coupling as the alternative. *(PAPER2 §3.4, rows 4
   and 8.)*

6. **Give Level 8 a present.** Add a distinguished index `i*` to the candidate
   temporal line, or state that reflection is not modelled at that level. As it
   stands the level's name promises something the type does not carry. *(PAPER2
   §3.4.)*

7. **Enter the Hamiltonian as an open item with required fields.** State space,
   operator, clock, preservation condition, and a failing consequence. Until all
   five exist, the word should appear only in the open-question list. *(PAPER2
   §4.)*

Two further recommendations are editorial. Cite the notebooks by `Lnr` as well
as by PDF page, so that a reader can find the passage in the Swedish source; and
mark every quotation from the machine translation as such, in the sentence
rather than in a note, because a translated quotation that looks like a
quotation is the easiest way to manufacture a source.

## 11. Conclusion

The Cosmic Block is a better object than its papers sometimes admit. It is a
finite, validated, buildable structure with an honest refusal at the top of its
hierarchy, and it has the rare property of being able to fail. The first paper
built it; the second gave it a grammar for saying what it does not know. Both
are worth the trouble, and neither is finished.

*The Key* does not settle anything. It supplies constraints — an interior, a
boundary, an outside; fields rather than points; a present that is not a duration
— and it supplies them at the level of requirements rather than evidence. The
reading that treats its fields as configurations and its levels as operations is,
I think, the strongest form of the reading, because it removes the double-booking
of colour and leaves the hierarchy doing something a painting cannot do: being
executed.

The notebooks are a workshop. They are procedural, iterative, diagrammatic, and
devotional, and their vocabulary is stable enough that a lexical model can see
its shape across three decades. Read as a doctrine they are incoherent; read as
a practice they are precise. The Block is closer to the practice than to the
doctrine, which is the best argument for it that I can find.

The independence of memory and time is a small result, and it is a result about
a data type. It says that the project has chosen to keep two views apart, that
the choice has a price, and that the choice can be reversed by a narrative
ordering. That is what a formalisation is for: not to prove that the world is
like the model, but to make the model's commitments visible enough to argue with.

And the Hamiltonian is not yet a model. It has an operator and no clock, a state
space and no argument, a spectrum and no prediction. Recording that plainly is
more useful than another analogy, and it is the same discipline that made the
first two papers worth answering.

---

## Appendix A: Notebook citation ledger

All quotations in this paper are from the local machine translation. `Lnr` is
given only where the passage states it or the notebook is identified by its
filename; page numbers are PDF positions from 1. The Swedish source should be
checked before reuse.

The table identifies the passages by opening words; it is an index, not a set of
quotations. Full quotations appear in §8.3.

| Passage | Notebook / page | Theme | Note |
|---|---|---|---|
| "Eternity and the fleeing moment…" | `1159DF1.pdf:11` | time | translation of a dialogue text |
| "The Five… the moment that flees" | `1156GRE1.pdf:26` | time, The Five | dated 9 Nov 1897 in the text |
| "The rose… twelve-blade, the vortex is yellow and blue" | `581DAGBO.pdf:18` | colour, number, form | description of a painted form |
| "The blue color that surrounds the circle is space" | `556BESKR.pdf:80` | colour | description of a work |
| "The light contains 7 colours, the Ariman and The Five" | `419 anteckningar.pdf:9` | colour, number, duality | diary entry, 1914 in the text |
| "Certain elemental spirits (elementarandar)…" | `1043TANK.pdf:2` | elemental spirits | notebook headed "Invisible Forces", 1922–1926 |
| "…liberate the man's ether body from Ahriman…" | `1043TANK.pdf:27` | ether body, duality | dated 30/5 in the text |
| "The Atom is at once bounded and developed…" | `579DAGBO.pdf:34` | atom, ether | dated 13.1.1917 in the text |
| "He intends to build a temple in the outer" | `556BESKR.pdf:28` | temple | description text |
| "…the interior of the temple building is a great work" | `1084ANT.pdf:23` | temple | 1941 notebook |
| "This is called the white temple" | `1072ANT.pdf:17` | temple, astral | astral-world description |
| "It was in the walls of the temple disharmony" | `1051TANK.pdf:11` | temple | 1932 notebook |
| "During the Egyptian period…" | `1044TANK.pdf:7` | duality, ether | dated 20/11 in the text |
| "Rosenx… a picture of man's further development…" | `1043TANK.pdf:25` | nature, ether body | proper name mangled by translation |
| "…the pure white lily is the greatest…" | `579DAGBO.pdf:32` | nature, lily | description of a plant type |

## Appendix B: Reproducing the local model and the check

```powershell
# Requires Python 3.10+, numpy, scipy, pymupdf
python notes-assistant/notes_model.py build     # ~4,083 pages, 32 topics
python notes-assistant/notes_model.py stats     # corpus counts
python notes-assistant/notes_model.py themes    # eight thematic axes
python tools/independence_check.py              # W1 and W2 witnesses
```

Expected build summary: 4,083 pages extracted, 4,065 modelled, 14,560 terms, 32
components. The build writes only inside `notes-assistant/data/` and uses no
network.

## Appendix C: Image access record

**Files.** `cosmic-block-c/images/IMG_0004.jpg` (whole work), `IMG_0005.jpg`
(soul surface), `IMG_0006.jpg` (cosmic outer rim).

**What was available.** The photographer's description of the three views and a
crude hue census computed from the decoded pixels. No visual inspection was
performed by the drafting model, and no colour-managed measurement exists.

**What is therefore asserted, and on what basis.**

| Claim | Basis | Status |
|---|---|---|
| The work has an interior, a boundary, and an outside | photographer's description | testimony |
| The interior is called the "soul surface" | photographer's description | testimony |
| A blue–yellow field is present | description; 6.8–12.8% blue-ish pixels across the three files | testimony + weak measurement |
| A red field is present | description only; 0.0% red-ish pixels in all three files | **discrepancy, unresolved** |
| The outer rim is cosmic in character | photographer's description | testimony |
| The painting is a single work photographed at three scales | file naming and description | testimony |

**What a human study should do.** Establish a colour-managed capture; segment the
painted surface; measure the areas of the principal fields; and record whether
the red field exists in the work, in a different work, or only in the reading.
Until then, the red field is a hypothesis about the painting, and the papers
should say so where they use it.

---

## References

Friends of Hilma af Klint Foundation (2026). *The Cosmic Block: A Hierarchical
Integer Tensor and Its Visualisation* (`PAPER.md`).

Friends of Hilma af Klint Foundation (2026). *HEAR: Hilma Engineering Anomalous
Research* (`PAPER2.md`).

Hilma af Klint Foundation (n.d.). *Transcribed notebooks* (`Lnr` 1043–1167 and
related volumes), transcribed PDFs. Private research copy; © Stiftelsen Hilma af
Klints Verk. English machine translation produced locally with Argos
Translate/CTranslate2; see `hilma-translation/TRANSLATION-REPORT.md`.

PsychAlive (n.d.). "A Framework for Cultivating Integration." Reproduces material
from Daniel J. Siegel, *The Developing Mind*, 2nd ed. (2012).
<https://psychalive.org/framework-cultivating-integration>.

Siegel, D. J. (2012). *The Developing Mind: How Relationships and the Brain
Interact to Shape Who We Are*, 2nd ed. New York: Guilford Press.

Villari, R. (2026). *Hilma af Klint's Atom & the Tree of Knowledge*. Afterword by
Johan af Klint. Middletown, RI: Stone Tower Press. Conclusion: PDF pp. 183–187
(printed pp. 177–181).

*Source note: Villari page references are PDF positions in the local research
copy of the published book; the printed book is authoritative. The notebook
quotations are machine translations of copyrighted transcriptions and are used
here for private research only; they are not a scholarly edition and should not
be redistributed. Siegel's domain names are taken from the linked web account;
the formal constructions in §§6–7 are this project's, not his.*
