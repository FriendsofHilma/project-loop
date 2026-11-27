# HEAR: Hilma Engineering Anomalous Research

## A Transdisciplinary Framework for Cosmic Tensor Inquiry

**Friends of Hilma af Klint Foundation**
*Working Paper 2 — companion to* The Cosmic Block: A Hierarchical Integer Tensor
and Its Visualisation *(2026)*

November 2026

---

### Abstract

The first Cosmic Block paper described a nine-level hierarchy of nested integer
arrays and a three-dimensional visualisation inspired by Hilma af Klint. It was
a paper about a structure. This paper is about what happens when a structure is
used: by a research programme, by a community of seekers, by a machine that has
to decide what it is allowed to say.

We describe **HEAR — Hilma Engineering Anomalous Research** — as the institutional
and epistemic frame for Cosmic Block inquiry, and we set out its central
instrument, **Top Ontology 2**, a working ontology that separates four
perspectives (existence, experience, belief, interpretation) and six epistemic
statuses (known, believed, experienced, speculated, amusing, unknown). The
ontology is implemented as a zero-dependency TypeScript package with sixty-three
tests and a deterministic seed of fifty-nine entities, twenty-six claims, and
five open questions. We argue that this apparatus is not bureaucracy but the
minimum equipment for a programme that intends to study anomalous experience
without either debunking it or enthroning it.

Three claims are defended, and one construction is offered. First, that the
Cosmic Block is best understood as a **transformer** — an object that carries
content between levels and perspectives — and that the word remains a hypothesis
until a domain, a codomain, and a preservation condition are specified. Second,
that the **spiritual seeker** can be defined without requiring prior experience
of any common core, and that this is both more honest and more useful than the
alternative. Third, that **intelligent humility** — stating each claim at
exactly the confidence its evidence supports, with humour as a calibration
device — is a methodological virtue rather than a mood, and can be audited in
software. The construction is an `under_review` proposal that Daniel Siegel's
nine domains of integration can be given mathematical form: an *interpersonal*
relation profile for Level 7, a *temporal* incidence path for Level 8, and a
*transpirational* compatibility limit for Level 9. The domains supply vocabulary;
the data types and preservation conditions are this project's, not Siegel's or
Villari's.

The paper is written in the register it recommends: assertoric where the code
runs, speculative where it does not, and occasionally amused, because the
alternative is a programme that cannot see itself.

---

## 1. A second paper, and why

The first paper ended with a caveat. The reference painting was never decoded by
the build agent's image pipeline, so the default dimensions — thirteen, five,
two — were interpretive assumptions rather than measurements. The caveat was
honest, and it was also a small admission of a larger problem: the project had a
mathematical model, a visualisation, and an art-historical rationale, but no
account of how those three things were supposed to relate. They sat next to each
other like instruments in a case that nobody had learned to play.

This paper is an attempt to learn to play them. Its subject is therefore not the
Block but the **inquiry** around the Block: the programme that maintains it, the
vocabulary it uses, the people it admits, and the claims it permits itself to
make. That is a less tidy subject, and it does not reduce to a tensor.

Two documents prompted the shift. The first is the conclusion of Rachel
Villari's 2026 book. There she reads af Klint's trajectory from the *Drawings*
through the Temple and *Tree of Knowledge* to the *Atom* series as crossing
conventional categories and synthesising science and spirituality. She calls for
research that is interdisciplinary and historically specific about The Five and
Anna Cassel; attentive to meditation, esoteric milieus and the notebooks; open
to quantum-physical parallels; and willing to use twenty-first-century
technology and consciousness studies (Villari, PDF pp. 183–187; printed pp.
177–181). The conclusion does not supply a tensor hierarchy, and in the passage
cited it does not say that the investigator's own transformation is data. What
it does is make a compartmentalised inquiry look inadequate: if the object is a
confluence of scientific, spiritual and historical registers, the vocabulary of
the inquiry must be able to hold those registers apart while relating them.
HEAR is an attempt at that vocabulary.

The second document is a long, uneven, frequently very funny dialogue with a
language model about the Princeton Engineering Anomalies Research (PEAR)
laboratory, the Suggested Upper Merged Ontology (SUMO), the figure of the
spiritual seeker, and the proposal that the Cosmic Block might function as a
transformer. That dialogue produced the phrase *intelligent humility*, the
acronym *HEAR*, and a number of errors worth preserving, one of which we discuss
in §2.2.

> **Source note.** Villari citations in this paper refer to PDF page positions in
> the published book, with printed page numbers added where useful. The extracted
> local text is a search aid only; the original PDF is authoritative. The book is
> copyrighted research material, and no paraphrase here is a substitute for
> consulting it.

The result is deliberately hybrid. It contains formal definitions, because the
software needs them; art-historical argument, because the project would otherwise
be a tensor with a decorative painter attached; and a theory of error, because a
programme that studies anomalies should expect to produce a few of its own.

## 2. Lineage: from PEAR to HEAR

### 2.1 What PEAR did

From 1979 to 2007, the Princeton Engineering Anomalies Research laboratory
studied the interaction of human intention with physical randomness, principally
through random event generators (Jahn and Dunne 1987). The reported effects were
tiny — deviations of the order of a fraction of a percent — and the programme
was controversial for the usual reasons: effect sizes near the noise floor,
analyses conducted after the fact, and a theoretical interpretation that ran far
ahead of the data.

It would be easy, and wrong, to treat PEAR as a cautionary tale about credulity.
It is better treated as a cautionary tale about **architecture**. The laboratory
was designed to detect an effect and not to record the state of its own
uncertainty. It therefore accumulated results faster than it accumulated reasons
to believe them. When the controversy arrived, there was no artefact that said:
here is what we knew, here is what we believed, here is what we experienced, here
is what we only speculated, and here is what we do not know. The absence of that
artefact is, in retrospect, the most important thing about the case.

HEAR inherits PEAR's question and not its epistemology. The question is whether
mind and physical randomness are coupled at all, and if so at what scale. The
epistemology is the subject of this paper.

### 2.2 The HERE error

The dialogue that produced this paper initially named the programme **HERE**,
expanded as "Helma Anomalous Research". Both halves were wrong. The painter is
Hilma af Klint, not Helma; and the intended expansion was Hilma **Engineering**
Anomalous Research, which describes a practice — engineering — rather than a
location.

The error is worth recording for three reasons. It is a reminder that a language
model will produce a fluent acronym for a programme that does not exist, and that
fluency is not evidence. It is a reminder that a human reader caught it, which is
what readers are for. And it is a small demonstration of the paper's own thesis:
the correction is now part of the record, in the same way that a retired
hypothesis remains in the living core. We could have deleted the mistake and
presented a clean lineage. Keeping it costs one paragraph and buys the reader a
reason to trust the rest.

### 2.3 Naming as a commitment

**HEAR** is a verb before it is an acronym. That is fortunate, because the
programme's first commitment is to listening: to reports, to traditions, to
instruments, and to the possibility that one's own categories are the thing that
needs revising. The acronym then supplies the rest:

- **Hilma** — the painter whose diagrams supply the constructive vocabulary, and
  whose own practice was an inquiry conducted without institutional permission.
- **Engineering** — the insistence on building things that run, with tests, so
  that a claim can be inspected rather than admired.
- **Anomalous** — the willingness to study what does not fit, without assuming
  in advance that it is either signal or noise.
- **Research** — the refusal to conclude before the evidence does.

The name is thus a small ontology in itself: an art-historical anchor, a
methodological commitment, an object of study, and a restraint.

## 3. The Cosmic Block revisited

### 3.1 Structure in brief

The Cosmic Block is a hierarchy of nested arrays of integer cells, each cell
valued 0–9. The levels are defined as follows.

| Level | Structure | Default | Status |
| --- | --- | --- | --- |
| 1 | Line — 1D array of cells | 13 | implemented |
| 2 | Plane — 2D array of lines | 13 × 13 | implemented |
| 3 | Model space — 3D tensor | 13 × 13 × 13 | implemented, visualised |
| 4 | Collection of model spaces | 5 | implemented |
| 5 | Higher-order collection | 2 | implemented |
| 6 | Complementary pair of Level 5 | 2 × [13³ × 5] | documented pattern |
| 7 | Interpersonal complex (candidate in §3.4) | $m\geq 2$ Block instances + relation profile | not implemented; `under_review` |
| 8 | Temporal line (candidate in §3.4) | path $\gamma=(a_i)$ with $\tau_i = B(a_i)$ | not implemented; incidence proposed |
| 9 | Transpirational complex (candidate in §3.4) | limit of eight lower views | not implemented; `under_review` |

The numbers are not arbitrary. Thirteen is prime and sits just above the ten
values a cell can hold; five is prime and matches af Klint's series of five; two
is the complementary pair that structures her dualistic compositions. But — and
this is the point of repeating the caveat — they are *interpretive* choices. A
human study of the painting could replace them, and the software would not care,
because dimensions are configurable and no rendering code assumes them.

### 3.2 What the first paper established

Three things, of unequal strength.

**Established.** The data structures exist, compile under `strict: true`, and
were verified at runtime: create, get, set, zero-check, equality, concatenation,
string rendering, for Levels 1–5. The visualisation maps cell values to an
af Klint-inspired palette and renders a point cloud at (x, y, z). This is
engineering, and it is done.

**Argued.** That a hierarchical integer tensor is a reasonable computational
analogue of af Klint's diagrammatic practice: both use small vocabularies,
repetition, and harmonic proportion to produce large structured wholes.

**Asserted without proof.** That the structure *means* something — that its
levels correspond to anything in the world, or in the person. The first paper
was careful to call this an interpretation, but care in a footnote is not the
same as care in a data model. The second paper's ontology exists to make the
distinction structural.

### 3.3 The unresolved levels as a discipline

It would have been easy to implement Level 8. A line spanning the Level 6 pair
is a drawing instruction; one could write it in an afternoon. The project does
not, and the reason is not laziness but a rule: **do not implement what you
cannot define**.

Until §3.4, Level 8 was described in prose only: "a line associated with and
spanning the two Level 6 components". That sentence contains no incidence
relation. Which cells does the line pass through? Is it a line in the tensor, or
about the tensor? Does it carry values, and if so from where? The next section
proposes answers — an indexed path through the Level 6 address graph, with each
line position reading the cell at the visited address — but a proposal is not an
adopted type. The seed ontology therefore still records the gap as an open
question (`to2:q.level-8`), which is more useful than a function that lies.

This is the first appearance of a pattern that recurs throughout the paper:
**abstention is a technical act**. It has to be represented somewhere, or it will
be filled in by whoever writes the next function. A candidate definition in a
working paper is a step towards filling it, not permission to skip the review.

### 3.4 A nine-domain construction for Levels 7–9 — `under_review`

> **Status: `under_review`.** The mapping below is a hypothesis proposed in this
> working paper. It is not a result of the first paper, not a claim made by
> Villari, and not a claim made by Siegel. It changes no implemented type and
> gives no permission to implement Levels 7–9. The three definitions offered at
> the end of the table are candidate mathematical objects, not adopted project
> types.

A recent proposal suggests reading the nine levels of the Cosmic Block beside
the nine domains of integration in Daniel Siegel's interpersonal-neurobiology
framework. The domain names used here follow the account reproduced from
*The Developing Mind*, 2nd ed. (2012) in "A Framework for Cultivating
Integration" (<https://psychalive.org/framework-cultivating-integration>):
integration of consciousness, bilateral integration, vertical integration,
memory integration, narrative integration, state integration, interpersonal
integration, temporal integration, and transpirational integration. The last
term is Siegel's: transpirational integration is the "breathing across" of the
other domains, an integration of integrations.

The ordinal alignment is suggestive:

| Level | Current structure | Candidate domain | Proposed reading | Status |
|---|---|---|---|---|
| 1 | Line | Integration of consciousness | A single stream of cell values; the minimum tract from which the hierarchy is built | hypothesis |
| 2 | Plane | Bilateral integration | A pair of axes, not literally two sides; the first crossing of lines | weak hypothesis |
| 3 | Model space | Vertical integration | A stacked depth of planes; the first cubic tensor | plausible analogy |
| 4 | Collection of model spaces | Memory integration | Five retained or re-presented model spaces; a series rather than a new physical axis | ordinal fit; geometric reading open |
| 5 | Higher-order collection | Narrative integration | Two collections placed in relation, allowing sequence and pairing | plausible analogy |
| 6 | Complementary pair | State integration | Complementary states under the value involution `n ↦ 9 − n` | plausible analogy |
| 7 | Interpersonal complex (candidate) | Interpersonal integration | A relation profile among several Block contents | `under_review`; type proposed below |
| 8 | Temporal line (candidate) | Temporal integration | An incidence path whose positions read cells from the Level 6 pair | `under_review`; incidence proposed below |
| 9 | Transpirational complex (candidate) | Transpirational integration | A compatibility condition across the eight lower views | `under_review`; type proposed below |

Ordinality alone proves nothing. To turn a resonance into mathematics we need,
for each level, a domain $D$, a codomain $C$, and a preservation condition
$\rho$: the same furniture used for the transformer in §4. We now supply those
for the three unresolved levels. Levels 1–6 are left exactly as implemented or
documented.

**Common notation.** Let $V=\{0,\dots,9\}$ and let $\kappa:V\to V$ be the
complement involution $\kappa(n)=9-n$. Write $A_5$ for a Level 5 address:

$$
A_5 = C_5 \times C_4 \times Z \times Y \times X,
$$

where $C_5=\{0,1\}$ is the Level 5 collection index, $C_4=\{0,\dots,4\}$ is
the Level 4 model-space index, and $X=Y=Z=\{0,\dots,12\}$ are the tensor
coordinates at their defaults. A Level 6 content is a function

$$
B:\{0,1\}\times A_5\to V,
$$

whose restrictions $B_0(a)=B(0,a)$ and $B_1(a)=B(1,a)$ are its two Level 5
components. The documented complementary pattern is the condition
$B_1=\kappa B_0$; no constructor forces it, so the construction below works
whether or not the pair is complementary. Write $A_6=\{0,1\}\times A_5$.
Incrementing one coordinate is an *index* step, not a claim about physical
space.

**Level 7 — interpersonal complex.** An interpersonal complex is a triple

$$
I=(P,\{B_p\}_{p\in P},\pi),
$$

where $P$ is a finite index set with $|P|\geq 2$ and each $B_p:A_6\to V$ is a
Block content. For each ordered pair $(p,q)$ define the edge profile
$\pi_{pq}:A_6\to\{\mathrm{EQ},\mathrm{COMP},\mathrm{OTHER}\}$ by

$$
\pi_{pq}(a)=
\begin{cases}
\mathrm{EQ} & \text{if } B_p(a)=B_q(a),\\
\mathrm{COMP} & \text{if } B_p(a)=\kappa(B_q(a)),\\
\mathrm{OTHER} & \text{otherwise.}
\end{cases}
$$

The axioms are $\pi_{pp}=\mathrm{EQ}$ everywhere and $\pi_{pq}=\pi_{qp}$.
Here:

- $D_7$ is the family of indexed Block contents $\{B_p\}_{p\in P}$;
- $C_7$ is the labelled complete graph on $P$ whose edge $(p,q)$ carries
  $\pi_{pq}$ and whose nodes carry $B_p$;
- $\rho_7$ requires each edge label to be exactly the profile computed from the
  two node contents, and invariant under any relabelling of $P$.

The construction fails if an edge asserts COMP where the values are OTHER.
Interpretively, $P$ may index people, instruments, archival sources, or
perspectives. The type does **not** identify a Block with a person; it only
makes relations among Block contents explicit.

**Level 8 — temporal line.** Let $G_6=(A_6,E_6)$ be the abstract index graph in
which $\{a,b\}\in E_6$ iff $a$ and $b$ differ by one in exactly one coordinate
and agree in all others. A temporal line is a triple $L=(B,\gamma,\tau)$ where
$\gamma=(a_0,\dots,a_{k-1})$ is a path in $G_6$ with
$\mathrm{comp}(a_0)=0$ and $\mathrm{comp}(a_{k-1})=1$, and

$$
\tau_i = B(a_i), \qquad 0\leq i<k.
$$

Here:

- $D_8$ is a Level 6 content together with a path $\gamma$ spanning the two
  components;
- $C_8$ is the pair $(\gamma,\tau)$, so the line carries its own incidence;
- $\rho_8$ requires $\gamma$ to be a genuine path, its endpoints to lie in
  different Level 6 components, and every $\tau_i$ to equal the cell value at
  $a_i$.

This supplies the incidence relation that the old prose lacked: time-index $i$
is incident with the cell at address $a_i$. The shortest boundary crossing has
$k=2$; a full lexicographic traversal of $A_6$ has $k=|A_6|$. Neither is adopted
as a default — $k$ is chosen by the study protocol. "Temporal" names order
along $\gamma$, not physical time.

**Level 9 — transpirational complex.** For $i=1,\dots,8$, let $\mathcal{C}_i$ be
the content type of the corresponding level or domain, and suppose translation
maps $\varphi_{ij}:\mathcal{C}_i\to\mathcal{C}_j$ are specified whenever a lower
view is projected or included in a higher one. A transpirational complex is the
limit

$$
\Gamma = \left\{(c_1,\dots,c_8)\in\prod_{i=1}^8 \mathcal{C}_i :
\varphi_{ij}(c_i)=c_j \text{ for every specified } i\to j\right\}.
$$

Here:

- $D_9$ is the diagram of lower views and their translation maps;
- $C_9$ is $\Gamma$, the family of mutually compatible readings;
- $\rho_9$ requires composition compatibility,
  $\varphi_{jk}\circ\varphi_{ij}=\varphi_{ik}$, identity maps on each
  $\mathcal{C}_i$,
  recoverability of each $c_i$ by projection, and — wherever values are carried
  — commutation with $\kappa$.

The construction fails if two translation routes from $i$ to $k$ disagree, or
if a local view cannot be glued to the rest. This is a precise sense in which
Level 9 "breathes across" the other eight domains: one moves between views by
the allowed maps without leaving the compatible family. For finite concrete
types, the limit exists; no hidden choice principle is being introduced.

| Level | $D$ | $C$ | $\rho$ |
|---|---|---|---|
| 7 | finite families of Level 6 contents | labelled relation graph | edge profiles computed from contents; subject-permutation invariant |
| 8 | content + spanning path | incidence path + value sequence | path endpoints cross components; $\tau_i=B(a_i)$ |
| 9 | diagram of eight lower views | compatibility limit $\Gamma$ | composition, identity, projection recovery, $\kappa$-commutation |

The semantic fit at Levels 7–9 is therefore stronger than ordinal adjacency:
Level 7 adds *relations among contents*, Level 8 adds *incidence and order*, and
Level 9 adds *coherence across views*. The fit is engineered, not found.
Villari's conclusion motivates an interdisciplinary frame; Siegel supplies the
domain names; the preservation conditions are this project's construction.

Two colour readings accompanied the earlier proposal: the Level 5 pairing as a
blue–yellow fold and Level 6 as a red field. Both are recorded here as
**interpretive proposals only**. The project caveat still applies: the reference
painting was never fully decoded by the build agent's image pipeline, so no
colour-to-level or colour-to-domain assignment should be treated as a
measurement until a human study of the painting confirms it.

What would promote this section from `under_review` to a defended claim?

1. A defence of the preservation conditions as *corresponding* to the domains,
   not merely named after them; the formulae above are candidates, not evidence.
2. Review and adoption of the proposed types — or their replacement by better
   ones — before any code is written. A precise candidate is not an adopted
   constructor.
3. Empirical or structural testing of the transformers: invariance under
   subject relabelling for Level 7, robustness under path choice for Level 8,
   and non-vacuity of the Level 9 limit.
4. A visual measurement from the painting for the blue/yellow/red reading, or
   an explicit decision to keep it as metaphor.
5. A clear separation: Villari supplies the published book's conclusion, Siegel
   supplies the domain vocabulary, and this construction supplies the bridge —
   the bridge is ours.

Until those conditions are met, the mapping and its constructions are a research
prompt. Its value is that it tells us *which* unresolved questions are worth
defining next, and what would falsify the candidates: a contradictory edge
label, a broken incidence path, or an incoherent gluing of views.

## 4. The Block as transformer

### 4.1 Three senses of transformation

The dialogue proposed that the Cosmic Block functions as a **transformer**. The
word is doing at least three jobs, and they should be separated before any of
them is believed.

1. **Rendering.** The visualisation transforms a tensor into a point cloud. This
   is real, implemented, and unremarkable: a function from data to geometry.
2. **Translation between levels.** A Level 3 model space contains planes, which
   contain lines, which contain cells. Reading "up" and "down" the hierarchy is a
   transformation between representations of the same content at different
   granularity. This is also real, and it is what the collection API does.
3. **Translation between perspectives.** A structure that is *known* in one
   register — as a tensor with dimensions — might be *experienced* in another, as
   a sense of ascent; *believed* in a third, as a spiritual anatomy; and
   *interpreted* in a fourth, as a diagram of correspondences. The claim that the
   Block mediates these is the interesting one, and it is the one that is not
   established.

Senses 1 and 2 are engineering. Sense 3 is the hypothesis. The ontology marks it
as `speculated` with confidence 0.5, which is neither a dismissal nor an
endorsement.

### 4.2 A minimal formal reading

If "transformer" is to mean more than "metaphor", it needs the ordinary furniture
of a mapping. Let us say that a transformer is a triple

$$
T = (D, C, \rho)
$$

where $D$ is a domain of structured contents, $C$ a codomain of structured
contents, and $\rho$ a preservation condition: a relation on $D$ that must be
mirrored by a relation on $C$. A rendering is a transformer with $D$ = tensors,
$C$ = point sets, and $\rho$ = adjacency. A level translation is a transformer
with $D$ = Level $n$ structures, $C$ = Level $n+1$ structures, and $\rho$ =
containment.

The perspectival claim would require $D$ and $C$ to be *perspectives* rather than
data types, and $\rho$ to be something like "whatever is structurally salient in
$D$ remains salient in $C$". That is not yet a definition; it is a promissory
note. But it is a promissory note with a due date, which is more than the word
"transformer" usually gets.

The candidates in §3.4 make the Level 7–9 part of that note less promissory:

| Transformer | $D$ | $C$ | $\rho$ |
| --- | --- | --- | --- |
| $T_7$ | indexed families of Level 6 contents | labelled relation graph | edge profiles computed from contents; invariant under relabelling |
| $T_8$ | content + spanning path | incidence path + value sequence | endpoints cross components; $\tau_i=B(a_i)$ |
| $T_9$ | diagram of eight lower views | compatibility limit $\Gamma$ | composition, identity, projection, $\kappa$-commutation |

These are not yet the perspectival claim. They do not show that a *known* tensor
is *experienced* as ascent, or that a *believed* anatomy is *interpreted* as a
diagram. They show something narrower and useful: if Levels 7–9 are to be
mathematical objects at all, they must carry preservation conditions that can
fail. Without such conditions, a line spanning the Level 6 pair is a drawing;
with them, it is a testable incidence claim.

### 4.3 What would make it literal

Three tasks, in order of difficulty:

1. **Specify $D$.** What exactly is a "content" that can be carried from the
   existence perspective to the experience perspective? Candidate: a set of
   relations among cells (adjacency, symmetry, repetition), abstracted from their
   values. §3.4 supplies $D_7$, $D_8$ and $D_9$; the perspectival $D$ is still
   missing.
2. **Specify $\rho$.** Candidate: if two cells are adjacent and equal in $D$,
   then their images are presented as a pair in $C$ — which is testable against
   viewer reports, if anyone collects them systematically. The candidate
   conditions in §3.4 are sharper: agreement/complement profiles for $T_7$,
   value-along-incidence for $T_8$, and gluing compatibility for $T_9$.
3. **Specify failure.** A transformer that cannot fail is a metaphor. $T_7$
   fails on a contradictory edge label; $T_8$ on a broken path or wrong endpoint;
   $T_9$ on two routes disagreeing. The perspectival transformer still fails to
   be literal, and the ontology therefore carries the question in the open list,
   with the living-core hypothesis at `under_review`: *needs a domain, a
   codomain, and a preservation condition before it can be called a transformer
   in earnest.*

Until the perspectival claim is specified, the honest formulation is: the Block
*affords* transformation, and the affordance is the object of study.

## 5. Four perspectives

The central design decision of Top Ontology 2 is that a subject may be described
from four perspectives, and that the descriptions are not merged.

| Perspective | Question | What counts as evidence |
| --- | --- | --- |
| **Existence** | What is structurally the case? | definitions, counts, implementations, measurements |
| **Experience** | What is lived or reported? | first-person accounts, transcripts, observations |
| **Belief** | What does an agent or tradition hold? | texts, correspondence, testimony |
| **Interpretation** | What does a model make of it? | theory, analogy, art, metaphor |

Why four, and not one? Because the commonest failure in this field is a category
error that looks like agreement. A practitioner says "I felt the room become
luminous." A researcher writes "the room became luminous." The second sentence
has silently promoted an experience into an existence claim, and no amount of
later hedging repairs it. Keeping the buckets separate makes the promotion
visible: the sentence belongs in `experience`, and moving it requires a new claim
with a new status and new evidence.

Why not five, or seven? Because four is the smallest set that survives contact
with actual disagreement. A fifth perspective ("the social") is real but can be
analysed as belief plus existence; a sixth ("the aesthetic") collapses into
interpretation plus experience. Four is a working partition, not a metaphysics.

The four perspectives are also, not coincidentally, four of the registers in
which af Klint's paintings ask to be read: as diagrams (existence), as
devotional objects (experience), as products of a spiritualist milieu (belief),
and as art (interpretation). The project did not choose four because af Klint
did; it chose four because the arguments about her work keep splitting along
these lines.

## 6. Six statuses and intelligent humility

### 6.1 Known is scoped

The status `known` means **stipulated or established within this framework**. It
does not mean "true". When the ontology says

> Established within this framework: the Cosmic Block is a hierarchy of nested
> arrays of integer cells valued 0–9, with levels 1–6 implemented.

it is reporting a fact about a repository, not about the universe. The scoping
phrase is not decoration; it is the whole content of the claim.

This is a weaker use of "known" than epistemology usually permits, and that is
deliberate. A research programme that cannot distinguish "our code does this"
from "the world is like this" will eventually confuse the two, and the confusion
will be invisible because both sentences will have the same grammar.

### 6.2 The humour clause

`amusing` is a first-class status. A claim may be entered as a jest, with low
confidence, and it will be rendered with the hedge "Offered in play". Examples
from the seed:

> Offered in play: a theory that explains everything, including this sentence, is
> probably a mirror with a footnote.

> Offered in play: dialogue is the only instrument that can be calibrated by
> being contradicted — which is why it is so unpopular with instruments.

This is not a gimmick. Humour is the fastest available test for over-commitment.
A claim that cannot be stated amusingly is often a claim that has fused with its
author's identity; a claim that can only be stated amusingly is often one that
has no evidence at all. The status sits between those failures and marks the
position explicitly, so that a later reader can see whether the joke was a
resting place or a hiding place.

The rule is enforced in code: `amusing` claims are capped at low confidence in
the seed, and the humility audit flags any provisional claim — including an
amusing one — that asserts confidence ≥ 0.8. You may be funny, but you may not
be certain and funny at the same time.

## 7. Top Ontology 2

### 7.1 Why SUMO

The Suggested Upper Merged Ontology is a first-order upper ontology of roughly
twenty-five thousand terms, developed under the IEEE Standard Upper Ontology
Working Group and freely available (Niles and Pease 2001). It offers what this
project lacked: a tested skeleton of very general categories — Entity, Physical,
Abstract, Process, Attribute, Relation, Proposition, Situation — with a clear
subsumption discipline.

Adopting SUMO wholesale would be a mistake. SUMO is realist in a strong sense: it
carries axioms that assert what exists, and its layer of axiomatisation is
precisely where a programme like HEAR should not follow. We therefore take the
**taxonomy** and refuse the **metaphysics**. This is not a criticism of SUMO; it
is a recognition that an upper ontology designed to support machine reasoning
across many domains has different commitments from a domain ontology designed to
keep a research programme honest about its own uncertainty.

The borrowing is recorded in data. Every entity carries a provenance:

```ts
provenance: { kind: "sumo" | "hear" | "af-klint" | "derived" | "user" }
```

An af Klint metaphor is therefore never silently presented as an upper-ontology
commitment. A reader can ask which parts of the framework are inherited, which
are constructed, and which are merely borrowed for the length of a sentence.

### 7.2 What we borrowed, and what we refused

| Borrowed | Refused |
| --- | --- |
| Entity / Abstract / Physical / Process | SUMO's existence axioms |
| Attribute, Relation, Proposition, Situation | SUMO's arithmetic and units |
| Agent and ConsciousAgent | SUMO's treatment of agency as physical |
| A named, namespaced identifier discipline | SUMO's full term inventory |
| Subsumption as the primary hierarchy | SUMO's axiom set as a reasoning engine |

Two refusals deserve comment. **Arithmetic** is refused because the Cosmic
Block's integers are not quantities; they are cell values in a domain structure,
and importing `Number` would invite exactly the wrong inferences (that a 9 is
"more" than a 1 in some measurable sense). **Agency as physical** is refused
because a tradition can be an agent in this ontology — it holds claims, and
claims are the things we are trying to track — and requiring a body would make
the model unable to represent the objects it studies.

### 7.3 The schema

The ontology has three record types and one graph invariant.

**Entity.** A namespaced identifier (`to2:SpiritualSeeker`), a label, a kind
(`category`, `individual`, `process`, `attribute`, `relation`, `proposition`,
`situation`), a description, a list of parents, an optional HEAR layer (1–5),
optional aliases, provenance, and a creation timestamp.

**Claim.** A subject, a predicate that must be an entity of kind `relation`, and
exactly one of an object reference or an object literal. Plus a perspective, a
status, a human-readable statement, a confidence in [0, 1], evidence strings, an
optional source, and a timestamp.

**Question.** An identifier, a question ending in a question mark, a status
(`open` or `resolved`), related entity identifiers, an optional current position,
and an optional rationale.

The graph invariant is that parents must exist before children and that the
parent relation must be acyclic. Both are enforced at insertion and re-checked
on deserialisation. `validate()` additionally checks that every claim's predicate
is typed as a relation, that every object exists, that confidence is in range,
and that every question's related entities resolve.

Identifiers are constrained by a regular expression,
`^[A-Za-z0-9_.-]+:[^\s]+$`. This is a small thing that prevents a large class of
errors: an unnamespaced identifier is a claim that the term is universal, and
most terms are not.

### 7.4 The seed in numbers

The seed ontology is deterministic: a fixed timestamp, no randomness, identical
JSON on every run. Two runs that differ therefore indicate a real change.

| Quantity | Value |
| --- | --- |
| Entities | 59 |
| Categories | 24 |
| Relations | 13 |
| Claims | 26 |
| Open questions | 5 |
| Living-core hypotheses | 4 |
| Tests | 63 |
| Provisional claims | 69% |

The distribution of claims is itself an argument:

| Status | Count |
| --- | --- |
| known | 8 |
| believed | 3 |
| experienced | 3 |
| speculated | 7 |
| amusing | 3 |
| unknown | 2 |

| Perspective | Count |
| --- | --- |
| existence | 9 |
| experience | 3 |
| belief | 3 |
| interpretation | 11 |

A framework in which most claims are `known` would be a framework that has
mistaken its own definitions for discoveries. A framework with no `amusing`
claims would be one that cannot see its own solemnity. The seed is calibrated to
sit between those failures, and the humility audit reports the balance rather
than congratulating the authors.

### 7.5 Implementation as argument

The package is a standalone TypeScript library with no runtime dependencies,
ESM only, compiled under `strict: true` with `noUncheckedIndexedAccess`. It
exports the `Ontology` graph, the `LivingCore`, the seeker assessment, the
humility report and response composer, the vocabulary constants, and the seed.

Three implementation choices are arguments in disguise.

1. **Validation over repair.** `addClaim` throws rather than guessing whether the
   author meant `objectId` or `objectLiteral`. Silent repair is how ontologies
   acquire beliefs nobody holds.
2. **Copies on read.** Every getter returns a deep copy, so a caller cannot
   mutate the graph by editing a returned array. The same discipline applies to
   the parent lists and evidence strings.
3. **Build before test.** `npm test` compiles first. A type error cannot hide
   behind a passing JavaScript test, which is exactly how a claim can hide behind
   a confident sentence.

The tests are not a formality. Sixty-three assertions cover creation,
hierarchy, claim typing, perspective separation, every status, question
integrity, cycle detection, round-trip stability, malformed input, seeker
qualification, append-only revision, overconfidence detection, monologue
detection, seed determinism, and root reachability. Several of them exist
because the first implementation was wrong. The `descendantsOf` traversal, for
instance, originally contained a loop over parents that did nothing; it was
found by a test that asked a simple question the code could not answer.

## 8. The spiritual seeker

### 8.1 The criteria

The ontology defines the spiritual seeker as an agent meeting three required
characteristics and at least two of four supporting ones:

| Required (all three) | Supporting (at least two of four) |
| --- | --- |
| Experiential curiosity — wants to find out, not only to be told | Openness to traditions — willing to learn from forms not one's own |
| Interest in a common source — asks whether traditions converge | Recognition of living knowledge — treats knowledge as revisable |
| Commitment to inquiry — practises, not merely reads | Self-examination — turns the instrument on itself |
| | Orientation toward sharing — expects to give as well as take |

Orientation is recorded separately: `seeking`, `encountered`, `integrating`, or
`sharing`.

### 8.2 Why prior experience is not required

The obvious definition of a spiritual seeker would require some encounter with
the thing sought: an experience of unity, a moment of insight, a contact with
the common core. That definition is excluded here, for two reasons.

**Epistemically**, it makes the category unverifiable from outside. If the
qualifying experience is ineffable, then the assessor must either take the
claimant's word for it or rely on behavioural proxies that are easy to fake. A
category that cannot be assessed is not a category; it is an honour.

**Ethically**, it turns inquiry into a membership test. If only those who have
already encountered the core may be called seekers, then the category rewards
agreement and excludes the curious. The people most likely to be excluded are
exactly the people an open inquiry needs: the sceptic who is nevertheless
fascinated, the member of a tradition that does not use the vocabulary, the
beginner who has had no experience but has the right orientation.

The implemented rule is therefore: all three required characteristics, at least
two of four supporting, and *any* orientation, including `seeking`. The
assessment function returns a rationale that says so in words:

> All 3 core characteristics are present, with 2 supporting characteristic(s).
> Orientation "seeking" is sufficient; prior experience is not required.

This is a stipulation, and it is published as code so that it can be contested.
A reader who disagrees can point at `src/seeker.ts`, change the threshold, and
watch which tests fail. That is what it means for a definition to be
arguable rather than merely asserted.

### 8.3 The constructivist objection

The strongest objection to any talk of a "common core" is constructivist: that
mystical experience is shaped, perhaps constituted, by the concepts and practices
of the tradition in which it occurs (Katz 1978). On that view there is no pure
experience to compare, only tradition-specific experiences that later observers
mistake for the same thing because they share a vocabulary.

The ontology is designed to survive this objection rather than to refute it. It
does not claim that a common content exists; it records that claim as `unknown`
with confidence 0.1, and records the reports of unity as `experienced`, and
records the perennialist reading as `believed`, and the silence-on-different-
instruments image as `amusing`. The seeker definition does not require the
common core at all — it requires an *interest* in whether there is one. A
constructivist can therefore qualify as a spiritual seeker, which seems right.

What the ontology refuses is the move from "reports are tradition-shaped" to
"therefore nothing is reported". That inference is as unjustified as its
opposite, and the four-perspective structure keeps both the reports and the
shaping visible at once.

## 9. The living core

The spiritual core of HEAR is not a doctrine. It is a set of hypotheses with
append-only revision histories.

Each hypothesis carries a statement, a status (`proposed`, `under_review`,
`supported`, `contested`, `retired`), one or more perspectives, evidence strings,
and a list of revisions. Revising a hypothesis updates its current statement and
status and *appends* a revision; it never removes one.

The seed contains four hypotheses, deliberately spread across statuses:

| Hypothesis | Status | Why |
| --- | --- | --- |
| A common source is hypothesised | proposed | Reports are widespread; the vocabulary is tradition-shaped |
| The Block is a transformer | under_review | Perspectival domain still missing; §3.4 gives candidates for Levels 7–9 |
| Humility is methodological | supported | Adopted as a working commitment |
| Anomalies require independent reproduction | contested | Some experiences are unrepeatable by construction |

The fourth is the interesting one. It is contested not because anyone doubts the
general principle, but because applying it to experience is not straightforward:
if an experience is unrepeatable by construction, demanding reproduction may be
a category error rather than a standard. The ontology records that objection
instead of resolving it, because resolving it by fiat would be exactly the kind
of premature synthesis the framework exists to prevent.

Append-only revision has an institutional purpose beyond bookkeeping. A
programme that studies anomalies will change its mind, and the temptation will be
to present the change as a clarification. The revision log makes that
presentation expensive: the earlier statement is still there, with a timestamp.
The HERE error of §2.2 is preserved in this paper for the same reason. Institutions
that cannot remember their errors will repeat them with more confidence.

## 10. Five interconnected layers

HEAR organises inquiry into five layers. They are not stages, and they are not a
ladder; they are five places to stand, and each can correct the others.

| Layer | Question | Characteristic failure |
| --- | --- | --- |
| **1. Existence** | What is structurally the case? | Mistaking a definition for a discovery |
| **2. Experience** | What is lived and reported? | Mistaking a report for its cause |
| **3. Evidence** | What can be measured, reproduced, or failed to reproduce? | Mistaking a null result for nothing |
| **4. Interpretation** | What does it mean? | Mistaking a good story for a finding |
| **5. Conduct** | How is the inquiry carried out? | Mistaking manners for ethics |

The layers are interconnected in a specific way: **each layer supplies the
correction the neighbouring layer is tempted to skip**. Experience corrects
existence by reminding it that a tensor is not a feeling. Evidence corrects
experience by asking whether the report would survive a protocol. Interpretation
corrects evidence by asking what the protocol presupposed. Conduct corrects
interpretation by asking who bears the cost of the story. And existence corrects
conduct by asking whether the rules can actually be implemented — which is why
the rules in this paper are in TypeScript.

Layer 5 is the one most often omitted from research programmes, and the one most
likely to be reduced to a code of conduct PDF. In HEAR it has a technical
meaning: humility, humour, consent, attribution, and the refusal to coerce a
conclusion are *constraints on what may be entered into the ontology and how*.
The `amusing` status, the confidence cap, the overconfidence audit, and the
append-only core are all Layer 5 artefacts.

## 11. Method: poetic investigation

### 11.1 The poem and the protocol

The dialogue that prompted this paper used the phrase **poetic investigation**,
and it is worth defending against the suspicion that it means "vague". A poetic
investigation is one in which the choice of figure is treated as a hypothesis:
the metaphor is not decoration added after the finding, but a candidate
structure that the finding must either support or embarrass.

The Cosmic Block is itself such a figure. It proposes that spiritual and
mathematical order share a shape: nested, harmonic, complementary, small-
vocabulary, large-whole. The protocol that tests the figure is the ontology. If
the figure were empty, the ontology would have nothing to record; if the ontology
were empty, the figure would have nothing to constrain. The two are held together
by the requirement that every claim be typed, sourced, and dated.

### 11.2 Falsifiability without cruelty

Popper's criterion is often applied as a weapon: a claim that cannot be falsified
is dismissed (Popper 1959). That is too quick for a programme that studies
experience. Some claims are not falsifiable but are still informative — "this
practice reliably produces a sense of presence in these subjects" is testable
even if "presence is real" is not.

The ontology implements a gentler version of the criterion. Every speculative
claim carries a route to disconfirmation in its evidence or its guidance, and the
humility report flags claims whose confidence outruns their status. The framework
does not demand that every sentence be falsifiable; it demands that every
sentence declare what kind of sentence it is. That is a lower bar and a more
useful one.

### 11.3 Humour as calibration

Humour is the only register that can expose the gap between a claim and its
evidence without requiring the claimant to lose face. A joke about the common
core — "the same silence played on different instruments, which explains why
every transcription produces a different score" — states the constructivist
objection, the perennialist hope, and the gap between them in one sentence, and
it does so without asking anyone to abandon a commitment.

This is why `amusing` is a status and not a footnote. It marks a claim as
*entertained but not held*, which is precisely the attitude a research programme
should have toward most of its own best ideas.

## 12. Objections and replies

**"This is just taxonomy."** Taxonomy is the least glamorous part of any science
and the part that most often determines what can be seen. The difference here is
that the taxonomy is executable: it refuses malformed claims, detects
single-perspective subjects, and audits confidence. A taxonomy that can tell you
that you are monologuing is not just a taxonomy.

**"Four perspectives is relativism."** No: relativism would let every perspective
count equally as *knowledge*. The statuses constrain. A claim can be `unknown`;
it cannot be `true`. The framework has no truth predicate, by design, because it
is not in the business of adjudicating metaphysics. It is in the business of
making the difference between measurement and metaphor visible.

**"The seeker definition is arbitrary."** It is stipulated, which is not the
same thing. The thresholds are chosen for inclusivity, justified in §8.2, and
implemented in a file that anyone can edit. An arbitrary definition is one whose
reasons are unavailable; this one's reasons are in the tests.

**"SUMO is the wrong foundation."** Possibly. SUMO is large, realist, and not
designed for this purpose. But the alternative is to invent an upper ontology
from scratch, which is a well-known way to spend a decade rediscovering
`Entity` and `Process`. We take the skeleton, label the provenance, and refuse
the axioms. If a better skeleton appears, the seed is data and can be migrated.

**"Humour has no place in research."** Humour has a place in research; it simply
does not have authority. The `amusing` status gives it a place with a ceiling.
The alternative is not seriousness; it is unmarked seriousness, which is the
condition in which a programme cannot tell its jokes from its findings.

**"You are building a machine to police speech."** The audit flags; it does not
forbid. Nothing in the package prevents a claim from being entered. What the
package does is make the claim's standing explicit, so that a reader can weigh
it. A framework that cannot be embarrassed by its own record is not safer; it is
merely less corrigible.

## 13. Ethics and the limits of fiction

Three boundaries have been observed in this work and should be stated.

**Financial and organisational data are fictional in development.** The
membership system that will host this research uses test fixtures. The approved
price is 200 HOT for twelve months; monthly and lifetime tiers exist as inactive
drafts. No real payment, balance, or member record has been invented in the
ontology, and policy questions — refunds, transferability, jurisdictional
treatment — are documented as open rather than answered by the code.

**Experience reports require consent and minimisation.** The ontology stores
claims, not dossiers. A report may be recorded as `experienced` with a source
label; it should not carry identifying detail that the reporter did not intend to
publish. The seed contains no personal reports at all, only aggregate
descriptions, which is the correct default for a public repository.

**The ontology must not certify spiritual attainment.** The seeker assessment
answers a narrow question — does this profile meet the published criteria? — and
returns a rationale. It is not a credential, and using it as one would convert a
research instrument into a gate. The code cannot prevent that misuse, but the
documentation can refuse it in advance, which is the most a documentation can do.

## 14. Conclusion

What has been established?

That a hierarchical integer tensor can be implemented, tested, and visualised;
that its unresolved levels can be represented as open questions rather than
silently filled; that a four-perspective, six-status ontology can be built with
no runtime dependencies and a deterministic seed; that a spiritual seeker can be
defined without requiring prior experience of a common core; that a living core
can preserve its own changes of mind; and that humility can be audited in
software without being reduced to a lint rule.

What has been proposed, but not established?

That the nine domains of integration can be given mathematical form at the
unresolved levels: an interpersonal relation profile (Level 7), a temporal
incidence path with cell-valued positions (Level 8), and a transpirational
compatibility limit across the eight lower views (Level 9). Each proposal has a
domain, a codomain and a preservation condition; none has an implementation,
review, or empirical test. The bridge from Siegel's vocabulary to these types is
ours, not his and not Villari's.

What remains speculation?

That the Cosmic Block functions as a transformer in the strong sense — that it
carries content between perspectives under a preservation condition. That the
three proposed types are the right types for Levels 7–9. That a common core
exists. That the PEAR effect reproduces. That humour is a reliable calibration
device rather than a pleasant side effect of intelligence.

What is unknown?

Whether the five layers are the right five. Whether four perspectives are
exhaustive. Whether the proposed Level 8 incidence is the line the original
prose had in mind, or whether a different one is needed. Whether the Level 9
limit is non-vacuous for the views we actually care about. Whether a programme
can remain open to anomalous experience while maintaining the standards that
make its findings worth having. Whether anyone will read the revision history.

The first paper ended with a caveat about a painting that had not been decoded.
This paper ends with a different kind of caveat: the ontology is a machine for
saying "I don't know" in a way that can be inspected. That is a modest
achievement. It is also, for a programme that intends to study anomalies without
either debunking them or enthroning them, close to the minimum equipment
required.

The next document should be a protocol, not a paper: a pre-registered study of
what viewers actually report when they look at the Block, with the four
perspectives as coding categories and the humility audit applied to the
conclusions. Until then, the framework's most defensible claim is the one it
makes about itself — that it is a living hypothesis, with its revisions on the
record.

---

## Appendix A: the seed ontology

**Upper skeleton (layer 1).** Entity; Abstract (Attribute, CosmicBlock,
CosmicCell, HearLayer, Perspective, Proposition, Relation, Situation); Agent
(ConsciousAgent); Physical (Instrument); Process (AnomalousExperience, Dialogue,
Measurement, Report, Reproduction, Transformer).

**Research vocabulary (layers 2–3).** Anomaly, AnomalousExperience, Report,
CommonCore, Dialogue, Measurement, Instrument, Reproduction, NullResult, Artefact,
MindMatterExperiment.

**Perspectives and statuses (layer 4).** Four perspective individuals under
`to2:Perspective`; six status individuals under `to2:EpistemicStatus`.

**Conduct (layer 5).** Five layer individuals under `to2:HearLayer`;
IntelligentHumility; LivingCore; ResearchProgramme; SpiritualSeeker.

**Relations (13).** hasPart, precedes, expresses, studies, grounds, contradicts,
supports, transforms, reports, measures, interprets, requires,
isCompatibleWith.

**Claims (26).** Nine existence, three experience, three belief, eleven
interpretation. Eight known, three believed, three experienced, seven speculated,
three amusing, two unknown.

**Open questions (5).** The common core; PEAR replication; whether the Block is
a transformer; whether humour can be a methodological constraint; what the Level
8 line is. §3.4 proposes a candidate incidence for the last question, but the
seed is unchanged: the question remains open in code until a type is reviewed
and adopted.

**Living core (4).** Common source (proposed); Block as transformer
(under_review); humility as methodological (supported); independent reproduction
(contested). The Level 7–9 candidates belong to the transformer hypothesis; they
are not a fifth living-core item.

## Appendix B: reproducing the results

```bash
# Node 20 or later
cd hear-ontology
npm install
npm run build      # tsc, strict, NodeNext
npm run typecheck
npm test           # 63 tests, all passing
npm run demo       # guided tour of the seed
```

The seed is deterministic, so `node examples/demo.mjs` produces identical output
on every run except the living-core timestamps, which are drawn from the system
clock in the demo and fixed in the seed.

## Acknowledgements

To Rachel Villari, whose book's conclusion supplied the provocation (PDF pp.
183–187); to the long dialogue with a language model that supplied the acronym,
the errors, and the phrase *intelligent humility*; to the PEAR laboratory, which
supplied the question and the caution; to Daniel Siegel, whose domain vocabulary
made the Level 7–9 construction articulate, without implying that he proposed
it; and to Hilma af Klint, who supplied the diagrams and the permission.

## References

Bashkoff, T. (ed.) (2018). *Hilma af Klint: Paintings for the Future*. New York:
Guggenheim Museum.

Forman, R. K. C. (ed.) (1990). *The Problem of Pure Consciousness: Mysticism and
Philosophy*. New York: Oxford University Press.

James, W. (1902). *The Varieties of Religious Experience*. London: Longmans,
Green.

Jahn, R. G., and Dunne, B. J. (1987). *Margins of Reality: The Role of
Consciousness in the Physical World*. San Diego: Harcourt Brace Jovanovich.

Katz, S. T. (ed.) (1978). *Mysticism and Philosophical Analysis*. New York:
Oxford University Press.

Kuhn, T. S. (1962). *The Structure of Scientific Revolutions*. Chicago:
University of Chicago Press.

Niles, I., and Pease, A. (2001). "Towards a Standard Upper Ontology." In
*Proceedings of the 2nd International Conference on Formal Ontology in
Information Systems (FOIS 2001)*, 2–9.

Popper, K. R. (1959). *The Logic of Scientific Discovery*. London: Hutchinson.

PsychAlive (n.d.). "A Framework for Cultivating Integration." Reproduces material
from Daniel J. Siegel, *The Developing Mind*, 2nd ed. (2012).
<https://psychalive.org/framework-cultivating-integration>.

Villari, Rachel. 2026. *Hilma af Klint's Atom & the Tree of Knowledge*. Afterword
by Johan af Klint. Middletown, RI: Stone Tower Press. Conclusion: PDF pp.
183–187 (printed pp. 177–181).

Friends of Hilma af Klint Foundation (2026). *The Cosmic Block: A Hierarchical
Integer Tensor and Its Visualisation* (`PAPER.md`).

Friends of Hilma af Klint Foundation (2026). *AGENTS.md: Cosmic Block Project
Specification*.

*Source note: Villari page references are PDF positions in the local research
copy of the published book; the original PDF is authoritative and the extracted
text is a search aid only. The book is copyrighted and is used here for research
only. Siegel's domain names are taken from the linked web account; the Level 7–9
mathematical construction is this project's proposal.*

