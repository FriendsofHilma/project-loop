/*
 * data.js — innehållsförteckning för hemsidan, på svenska och engelska.
 *
 * Båda språken ligger i samma fil. `SITE_DATA` pekar på det aktiva språket,
 * valt med ?lang=sv|en eller det sparade språket i localStorage. `locales`
 * innehåller båda uppsättningarna så att hemsidans test kan kontrollera dem.
 *
 * Alla sökvägar är relativa till hemsida/. Textfiler öppnas i visa.html;
 * HTML, SVG med mera öppnas direkt. Filen kan också krävas från Node.
 */
(function (root) {
  "use strict";

  var L = "../project-loop/";
  var R = "../";

  /* ----------------------------- Svenska ----------------------------- */
  var sv = {
    steps: [
      {
        n: 1,
        title: "Medvetenskap och ordning",
        definition: "att se helheten innan man börjar",
        blurb: "Ursprungsprompten, principsamlingen och regeln om att aldrig röra externa relationer utan mänskligt beslut.",
        art: "assets/step-01.svg",
        links: [
          { label: "Stegets README", path: L + "steps/01-awareness/README.md" },
          { label: "Arbetsregler (AGENTS.md)", path: R + "AGENTS.md" },
          { label: "Nuvarande tillstånd", path: L + "CURRENT_STATE.md" }
        ]
      },
      {
        n: 2,
        title: "Vänner, nätverk och omvärldsbevakning",
        definition: "att känna fältet omkring sig",
        blurb: "Finansieringskarta, internationell introduktion, NOSAD-import och interoperabilitet med Klirrhack.",
        art: "assets/step-02.svg",
        links: [
          { label: "Stegets README", path: L + "steps/02-network/README.md" },
          { label: "Finansieringskarta", path: L + "steps/02-network/FINANSIERINGSKARTA.md" },
          { label: "Internationell introduktion", path: L + "steps/02-network/INTERNATIONELL_INTRO.md" },
          { label: "Klirrhack-interoperabilitet", path: L + "steps/02-network/INTEROPERABILITET_KLIRRHACK.md" },
          { label: "NOSAD-import", path: L + "steps/02-network/NOSAD_IMPORT.md" }
        ]
      },
      {
        n: 3,
        title: "Projektformulering och prioritering",
        definition: "att välja vad som ska få växa",
        blurb: "Sju prioriterade projekt P-01–P-07 med bedömningsmodell, beroenden och grindar. Rangordningen är mänskligt godkänd.",
        art: "assets/step-03.svg",
        links: [
          { label: "Stegets README", path: L + "steps/03-project-formulation/README.md" },
          { label: "Projektportfölj (md)", path: L + "steps/03-project-formulation/PROJEKTPORTFÖLJ_STEG3_2026-11-25.md" },
          { label: "Projektportfölj (json)", path: L + "steps/03-project-formulation/PROJEKTPORTFOLJ_STEG3_2026-11-25.json" }
        ]
      },
      {
        n: 4,
        title: "Estetisk integritet och grafisk profil",
        definition: "att göra det vackert och sant",
        blurb: "Grafisk profil v0.1, Siegels fjärde domän och de deterministiska figurerna fig6–fig8 med lokal viewer.",
        art: "assets/step-04.svg",
        links: [
          { label: "Stegets README", path: L + "steps/04-partnerships/README.md" },
          { label: "Grafisk profil v0.1", path: L + "steps/04-partnerships/GRAFISK_PROFIL.md" },
          { label: "Siegels fjärde domän", path: L + "steps/04-partnerships/SIEGEL_DOMAN_4.md" },
          { label: "Interaktiv viewer", path: L + "steps/04-partnerships/viewer/index.html" },
          { label: "Profilbrädet (SVG)", path: R + "figures/fig6-profile-board.svg" }
        ]
      },
      {
        n: 5,
        title: "Narrativ integration",
        definition: "att berätta om alla nivåer på en gång",
        blurb: "N1–N6, helhetsanalysen i ord och det lokala P-07/F02-spåret med underlag, budget och strategi.",
        art: "assets/step-05.svg",
        links: [
          { label: "Stegets README", path: L + "steps/05-funding/README.md" },
          { label: "Narrativ integration", path: L + "steps/05-funding/NARRATIV_INTEGRATION.md" },
          { label: "Ansökningsunderlag P-07", path: L + "steps/05-funding/ANSOKNINGSUNDERLAG_P-07.md" },
          { label: "Finansieringsstrategi", path: L + "steps/05-funding/FINANSIERINGSSTRATEGI.md" },
          { label: "Budget (csv)", path: L + "steps/05-funding/BUDGET_P-07.csv" }
        ]
      },
      {
        n: 6,
        title: "State integration",
        definition: "att möta andras berättelser med vår egen",
        blurb: "Den sjätte integrationsdomänen: vad vi kan erbjuda i relation till vad andra efterfrågar, med Arvsfondens villkor som lokalt första relation.",
        art: "assets/step-06.svg",
        links: [
          { label: "Stegets README", path: L + "steps/06-implementation/README.md" },
          { label: "State integration", path: L + "steps/06-implementation/STATE_INTEGRATION.md" },
          { label: "Erbjudande mot efterfrågan", path: L + "steps/06-implementation/ERBJUDANDE_MOT_EFTERFRAGAN.md" },
          { label: "Siegels sjätte domän", path: L + "steps/06-implementation/SIEGEL_DOMAN_6.md" }
        ]
      },
      {
        n: 7,
        title: "Interpersonal integration",
        definition: "att bära berättelsen tillsammans",
        blurb: "Relationskarta, intressentregister och kommunikationsformer – utan att någon kontakt tas utan separat tillstånd.",
        art: "assets/step-07.svg",
        links: [
          { label: "Stegets README", path: L + "steps/07-dissemination/README.md" },
          { label: "Interpersonal integration", path: L + "steps/07-dissemination/INTERPERSONAL_INTEGRATION.md" },
          { label: "Relationskarta", path: L + "steps/07-dissemination/STAKEHOLDER_RELATIONSHIP_MAP.md" },
          { label: "Relationsmatris (csv)", path: L + "steps/07-dissemination/RELATIONS.matris.csv" }
        ]
      },
      {
        n: 8,
        title: "Strategic coordination",
        definition: "att samordna utan att brådska",
        blurb: "Handlingsplan, kommunikationsutkast och öppna verifieringar A07–A08. Ingen grind öppnas automatiskt.",
        art: "assets/step-08.svg",
        links: [
          { label: "Stegets README", path: L + "steps/08-evaluation/README.md" },
          { label: "Strategic coordination", path: L + "steps/08-evaluation/STRATEGIC_COORDINATION.md" },
          { label: "Handlingsplan", path: L + "steps/08-evaluation/HANDLINGSPLAN.md" },
          { label: "Kommunikationsutkast", path: L + "steps/08-evaluation/KOMMUNIKATIONSUTKAST.md" }
        ]
      },
      {
        n: 9,
        title: "Syntes, konsolidering och återhämtning",
        definition: "att vila och börja om – i loop",
        blurb: "Reflektion, återhämtningssessioner och skärmsläckarna: primtalsrymden och den bitande ouroborosdraken i två perspektiv.",
        art: "assets/step-09.svg",
        links: [
          { label: "Stegets README", path: L + "steps/09-renewal/README.md" },
          { label: "Syntes och återhämtning", path: L + "steps/09-renewal/SYNTHESIS_CONSOLIDATION_RECOVERY.md" },
          { label: "Reflektion 2026-11-26", path: L + "steps/09-renewal/REFLEKTION_2026-11-26.md" },
          { label: "Primtalsrymd (skärmsläckare)", path: L + "steps/09-renewal/dragon-screensaver/index.html" },
          { label: "Ouroboros, två perspektiv", path: L + "steps/09-renewal/dragon-perspective/index.html" },
          { label: "Ouroboros (README)", path: L + "steps/09-renewal/dragon-perspective/README.md" }
        ]
      }
    ],
    groups: [
      {
        title: "Avhandlingen och källan",
        icon: "§",
        desc: "Vår svenska avhandlingsplan: 18 Markdown-filer – 7 skrivna kapitel, 6 bilagor och 5 översiktsdokument. Därtill Villaris bearbetade researchkopia.",
        links: [
          { label: "Avhandlingens README", path: R + "avhandling/README.md" },
          { label: "Disposition: 9 kapitel + bilagor A–F", path: R + "avhandling/00_STRUKTUR.md" },
          { label: "Kapitel 1 — Inledning", path: R + "avhandling/kapitel/kapitel-01-inledning.md" },
          { label: "Bilaga C — Källor och provenans", path: R + "avhandling/bilagor/BILAGA_C_kallor_och_provenans.md" },
          { label: "Villari-källkopia (README)", path: R + "knowledge/dissertation/README.md" },
          { label: "Villari: extraherad text", path: R + "knowledge/dissertation/dissertation.md" }
        ]
      },
      {
        title: "Kärna och texter",
        icon: "✦",
        desc: "Projektets grunddokument, artiklar och formella regler.",
        links: [
          { label: "PAPER.md — tvärvetenskaplig artikel", path: R + "PAPER.md" },
          { label: "PAPER2.md — ontologi", path: R + "PAPER2.md" },
          { label: "PAPER3.md — nyckeln, L4/L8 och anteckningarna", path: R + "PAPER3.md" },
          { label: "AGENTS.md — projektets konstitution", path: R + "AGENTS.md" },
          { label: "README.md — snabbstart", path: R + "README.md" },
          { label: "PAPER.html — läsbar artikel", path: R + "PAPER.html" },
          { label: "PAPER-hilma.html — Hilma-läsning", path: R + "PAPER-hilma.html" }
        ]
      },
      {
        title: "Matematik och implementationer",
        icon: "▦",
        desc: "Nivåerna 1–9 i TypeScript, i C11 och som minnesavbildad kub.",
        links: [
          { label: "TypeScript-källa", path: R + "src/index.ts" },
          { label: "C11-implementation", path: R + "cosmic-block-c/README.md" },
          { label: "Verifieringsverktyg", path: R + "tools/verify.js" },
          { label: "Lagringsraffinemang (Rocq)", path: R + "refinement/README.md" },
          { label: "Oberoendehetskontroll L4/L8", path: R + "tools/independence_check.py" }
        ]
      },
      {
        title: "Figurer och konstverk",
        icon: "◎",
        desc: "Deterministiskt genererade SVG:er och deras generatorskript.",
        links: [
          { label: "Figurgenerator", path: R + "tools/make-figures.js" },
          { label: "Steg 4-figurer", path: R + "tools/make-step4-figures.mjs" },
          { label: "Hemsidans konstgenerator", path: "tools/make-art.js" },
          { label: "Hemsidans README", path: "README.md" }
        ]
      },
      {
        title: "Rörelse och skärmsläckare",
        icon: "∞",
        desc: "Draken i primtalsrymden och ouroborosdraken sedd både inifrån och utifrån.",
        links: [
          { label: "Primtalsrymd", path: L + "steps/09-renewal/dragon-screensaver/index.html" },
          { label: "Primtalsrymd — specifikation", path: L + "steps/09-renewal/dragon-screensaver/PRIMTALSRYMD.md" },
          { label: "Drakens logik (js)", path: L + "steps/09-renewal/dragon-screensaver/prime.js" },
          { label: "Ouroboros, två perspektiv", path: L + "steps/09-renewal/dragon-perspective/index.html" },
          { label: "Ouroboros-logik (js)", path: L + "steps/09-renewal/dragon-perspective/dragon.js" },
          { label: "Ouroboros-tester (js)", path: L + "steps/09-renewal/dragon-perspective/test-dragon.js" },
          { label: "Steg 4-viewer", path: L + "steps/04-partnerships/viewer/index.html" }
        ]
      },
      {
        title: "Berättelser och röster",
        icon: "✒",
        desc: "Den episka romanen, röstprofilerna och Hilmas egna ord i översättning.",
        links: [
          { label: "Romanens README", path: R + "novel/README.md" },
          { label: "Romanens status", path: R + "novel/11_PROGRESS/PROJECT_STATUS.md" },
          { label: "Citatregister", path: R + "novel/02_HILMA/QUOTATION_REGISTER.md" },
          { label: "Narration README", path: R + "narration/README.md" },
          { label: "Röstkoncept", path: R + "narration/VOICE_CONCEPTS.md" },
          { label: "Lokal ljudspelare", path: R + "narration/web/index.html" },
          { label: "Avhandling (svenska)", path: R + "avhandling/README.md" }
        ]
      },
      {
        title: "Källor, läsning och research",
        icon: "❋",
        desc: "Anteckningar, översättningar, index och forskningsassistenter – allt lokalt.",
        links: [
          { label: "Hilma-översättningar", path: R + "hilma-translation/README.md" },
          { label: "Anteckningsmodell", path: R + "notes-assistant/README.md" },
          { label: "Research-assistant", path: R + "research-assistant/README.md" },
          { label: "Research-projekt", path: R + "research-project/README.md" },
          { label: "Villari-källkopia", path: R + "knowledge/dissertation/README.md" },
          { label: "Riemann-workstream", path: R + "riemann/README.md" }
        ]
      },
      {
        title: "Projektloopens styrning",
        icon: "⌘",
        desc: "Masterprompter, beslut, state, varvsrapporter och lokal agent.",
        links: [
          { label: "Projektloopens README", path: L + "README.md" },
          { label: "WORKFLOW 2.1", path: L + "WORKFLOW.md" },
          { label: "CURRENT_STATE", path: L + "CURRENT_STATE.md" },
          { label: "DECISIONS", path: L + "DECISIONS.md" },
          { label: "Historisk masterprompt", path: L + "MASTERPROMPT.md" },
          { label: "Daterad masterprompt 2026-11-26", path: L + "MASTERPROMPT_2026-11-26.md" },
          { label: "Lokal agent", path: L + "PROJECT_LOOP_ASSISTANT.md" },
          { label: "State: current_step.json", path: L + "state/current_step.json" },
          { label: "State: progress.json", path: L + "state/progress.json" },
          { label: "State: backlog.json", path: L + "state/backlog.json" },
          { label: "Konsekvenskontroll", path: L + "reports/KONSEKVENSKONTROLL_2026-11-26.md" },
          { label: "Lokal commit-rapport", path: L + "reports/GITHUB_COMMIT_LOCAL_2026-11-26.md" }
        ]
      }
    ],
    figures: [
      { file: "fig1-hierarchy.svg", title: "Hierarkin nivå 1–9" },
      { file: "fig2-lattice.svg", title: "Gittret" },
      { file: "fig3-palette.svg", title: "Färgpaletten" },
      { file: "fig4-complement.svg", title: "Komplementparet" },
      { file: "fig5-cardinality.svg", title: "Kardinalitet" },
      { file: "fig6-profile-board.svg", title: "Grafisk profil" },
      { file: "fig7-complement-chord.svg", title: "Komplementackord" },
      { file: "fig8-offset-map.svg", title: "Offset-karta" }
    ]
  };

  /* ----------------------------- English ----------------------------- */
  var en = {
    steps: [
      {
        n: 1,
        title: "Awareness and order",
        definition: "seeing the whole before you begin",
        blurb: "The original prompt, the collection of principles, and the rule never to touch external relations without a human decision.",
        art: "assets/step-01.svg",
        links: [
          { label: "Step README", path: L + "steps/01-awareness/README.md" },
          { label: "Working rules (AGENTS.md)", path: R + "AGENTS.md" },
          { label: "Current state", path: L + "CURRENT_STATE.md" }
        ]
      },
      {
        n: 2,
        title: "Friends, networks and horizon scanning",
        definition: "knowing the field around you",
        blurb: "Funding map, international introduction, NOSAD import and interoperability with Klirrhack.",
        art: "assets/step-02.svg",
        links: [
          { label: "Step README", path: L + "steps/02-network/README.md" },
          { label: "Funding map", path: L + "steps/02-network/FINANSIERINGSKARTA.md" },
          { label: "International introduction", path: L + "steps/02-network/INTERNATIONELL_INTRO.md" },
          { label: "Klirrhack interoperability", path: L + "steps/02-network/INTEROPERABILITET_KLIRRHACK.md" },
          { label: "NOSAD import", path: L + "steps/02-network/NOSAD_IMPORT.md" }
        ]
      },
      {
        n: 3,
        title: "Project formulation and prioritisation",
        definition: "choosing what gets to grow",
        blurb: "Seven prioritised projects P-01–P-07 with an assessment model, dependencies and gates. The ranking has been approved by a human.",
        art: "assets/step-03.svg",
        links: [
          { label: "Step README", path: L + "steps/03-project-formulation/README.md" },
          { label: "Project portfolio (md)", path: L + "steps/03-project-formulation/PROJEKTPORTFÖLJ_STEG3_2026-11-25.md" },
          { label: "Project portfolio (json)", path: L + "steps/03-project-formulation/PROJEKTPORTFOLJ_STEG3_2026-11-25.json" }
        ]
      },
      {
        n: 4,
        title: "Aesthetic integrity and graphic profile",
        definition: "making it beautiful and true",
        blurb: "Graphic profile v0.1, Siegel's fourth domain and the deterministic figures fig6–fig8 with a local viewer.",
        art: "assets/step-04.svg",
        links: [
          { label: "Step README", path: L + "steps/04-partnerships/README.md" },
          { label: "Graphic profile v0.1", path: L + "steps/04-partnerships/GRAFISK_PROFIL.md" },
          { label: "Siegel's fourth domain", path: L + "steps/04-partnerships/SIEGEL_DOMAN_4.md" },
          { label: "Interactive viewer", path: L + "steps/04-partnerships/viewer/index.html" },
          { label: "Profile board (SVG)", path: R + "figures/fig6-profile-board.svg" }
        ]
      },
      {
        n: 5,
        title: "Narrative integration",
        definition: "telling every level at once",
        blurb: "N1–N6, the whole analysed in words, and the local P-07/F02 track with dossier, budget and strategy.",
        art: "assets/step-05.svg",
        links: [
          { label: "Step README", path: L + "steps/05-funding/README.md" },
          { label: "Narrative integration", path: L + "steps/05-funding/NARRATIV_INTEGRATION.md" },
          { label: "P-07 application dossier", path: L + "steps/05-funding/ANSOKNINGSUNDERLAG_P-07.md" },
          { label: "Funding strategy", path: L + "steps/05-funding/FINANSIERINGSSTRATEGI.md" },
          { label: "Budget (csv)", path: L + "steps/05-funding/BUDGET_P-07.csv" }
        ]
      },
      {
        n: 6,
        title: "State integration",
        definition: "meeting other people's stories with our own",
        blurb: "The sixth integration domain: what we can offer in relation to what others ask for, with the Heritage Fund's published terms as the first local relation.",
        art: "assets/step-06.svg",
        links: [
          { label: "Step README", path: L + "steps/06-implementation/README.md" },
          { label: "State integration", path: L + "steps/06-implementation/STATE_INTEGRATION.md" },
          { label: "Offer against demand", path: L + "steps/06-implementation/ERBJUDANDE_MOT_EFTERFRAGAN.md" },
          { label: "Siegel's sixth domain", path: L + "steps/06-implementation/SIEGEL_DOMAN_6.md" }
        ]
      },
      {
        n: 7,
        title: "Interpersonal integration",
        definition: "carrying the story together",
        blurb: "Relationship map, stakeholder register and forms of communication – without contacting anyone without separate permission.",
        art: "assets/step-07.svg",
        links: [
          { label: "Step README", path: L + "steps/07-dissemination/README.md" },
          { label: "Interpersonal integration", path: L + "steps/07-dissemination/INTERPERSONAL_INTEGRATION.md" },
          { label: "Relationship map", path: L + "steps/07-dissemination/STAKEHOLDER_RELATIONSHIP_MAP.md" },
          { label: "Relationship matrix (csv)", path: L + "steps/07-dissemination/RELATIONS.matris.csv" }
        ]
      },
      {
        n: 8,
        title: "Strategic coordination",
        definition: "coordinating without rushing",
        blurb: "Action plan, communication draft and open verifications A07–A08. No gate opens automatically.",
        art: "assets/step-08.svg",
        links: [
          { label: "Step README", path: L + "steps/08-evaluation/README.md" },
          { label: "Strategic coordination", path: L + "steps/08-evaluation/STRATEGIC_COORDINATION.md" },
          { label: "Action plan", path: L + "steps/08-evaluation/HANDLINGSPLAN.md" },
          { label: "Communication draft", path: L + "steps/08-evaluation/KOMMUNIKATIONSUTKAST.md" }
        ]
      },
      {
        n: 9,
        title: "Synthesis, consolidation and recovery",
        definition: "resting and beginning again — in a loop",
        blurb: "Reflection, recovery sessions and the screensavers: prime space and the biting ouroboros dragon in two perspectives.",
        art: "assets/step-09.svg",
        links: [
          { label: "Step README", path: L + "steps/09-renewal/README.md" },
          { label: "Synthesis and recovery", path: L + "steps/09-renewal/SYNTHESIS_CONSOLIDATION_RECOVERY.md" },
          { label: "Reflection 2026-11-26", path: L + "steps/09-renewal/REFLEKTION_2026-11-26.md" },
          { label: "Prime space (screensaver)", path: L + "steps/09-renewal/dragon-screensaver/index.html" },
          { label: "Ouroboros, two perspectives", path: L + "steps/09-renewal/dragon-perspective/index.html" },
          { label: "Ouroboros (README)", path: L + "steps/09-renewal/dragon-perspective/README.md" }
        ]
      }
    ],
    groups: [
      {
        title: "The dissertation and its source",
        icon: "§",
        desc: "Our Swedish dissertation plan: 18 Markdown files — 7 written chapters, 6 appendices and 5 overview documents. Plus Villari's processed research copy.",
        links: [
          { label: "Dissertation README", path: R + "avhandling/README.md" },
          { label: "Structure: 9 chapters + appendices A–F", path: R + "avhandling/00_STRUKTUR.md" },
          { label: "Chapter 1 — Introduction", path: R + "avhandling/kapitel/kapitel-01-inledning.md" },
          { label: "Appendix C — Sources and provenance", path: R + "avhandling/bilagor/BILAGA_C_kallor_och_provenans.md" },
          { label: "Villari research copy (README)", path: R + "knowledge/dissertation/README.md" },
          { label: "Villari: extracted text", path: R + "knowledge/dissertation/dissertation.md" }
        ]
      },
      {
        title: "Core and texts",
        icon: "✦",
        desc: "The project's foundational documents, papers and formal rules.",
        links: [
          { label: "PAPER.md — interdisciplinary paper", path: R + "PAPER.md" },
          { label: "PAPER2.md — ontology", path: R + "PAPER2.md" },
          { label: "PAPER3.md — the key, L4/L8 and the notebooks", path: R + "PAPER3.md" },
          { label: "AGENTS.md — the project constitution", path: R + "AGENTS.md" },
          { label: "README.md — quick start", path: R + "README.md" },
          { label: "PAPER.html — readable paper", path: R + "PAPER.html" },
          { label: "PAPER-hilma.html — reading Hilma", path: R + "PAPER-hilma.html" }
        ]
      },
      {
        title: "Mathematics and implementations",
        icon: "▦",
        desc: "Levels 1–9 in TypeScript, in C11 and as a memory-mapped cube.",
        links: [
          { label: "TypeScript source", path: R + "src/index.ts" },
          { label: "C11 implementation", path: R + "cosmic-block-c/README.md" },
          { label: "Verification tool", path: R + "tools/verify.js" },
          { label: "Storage refinement (Rocq)", path: R + "refinement/README.md" },
          { label: "L4/L8 independence check", path: R + "tools/independence_check.py" }
        ]
      },
      {
        title: "Figures and artworks",
        icon: "◎",
        desc: "Deterministically generated SVGs and their generator scripts.",
        links: [
          { label: "Figure generator", path: R + "tools/make-figures.js" },
          { label: "Step 4 figures", path: R + "tools/make-step4-figures.mjs" },
          { label: "Website art generator", path: "tools/make-art.js" },
          { label: "Website README", path: "README.md" }
        ]
      },
      {
        title: "Motion and screensavers",
        icon: "∞",
        desc: "The dragon in prime space and the ouroboros seen from outside and from its own perspective.",
        links: [
          { label: "Prime space", path: L + "steps/09-renewal/dragon-screensaver/index.html" },
          { label: "Prime space — specification", path: L + "steps/09-renewal/dragon-screensaver/PRIMTALSRYMD.md" },
          { label: "Dragon logic (js)", path: L + "steps/09-renewal/dragon-screensaver/prime.js" },
          { label: "Ouroboros, two perspectives", path: L + "steps/09-renewal/dragon-perspective/index.html" },
          { label: "Ouroboros logic (js)", path: L + "steps/09-renewal/dragon-perspective/dragon.js" },
          { label: "Ouroboros tests (js)", path: L + "steps/09-renewal/dragon-perspective/test-dragon.js" },
          { label: "Step 4 viewer", path: L + "steps/04-partnerships/viewer/index.html" }
        ]
      },
      {
        title: "Stories and voices",
        icon: "✒",
        desc: "The epic novel, the voice profiles and Hilma's own words in translation.",
        links: [
          { label: "Novel README", path: R + "novel/README.md" },
          { label: "Novel status", path: R + "novel/11_PROGRESS/PROJECT_STATUS.md" },
          { label: "Quotation register", path: R + "novel/02_HILMA/QUOTATION_REGISTER.md" },
          { label: "Narration README", path: R + "narration/README.md" },
          { label: "Voice concepts", path: R + "narration/VOICE_CONCEPTS.md" },
          { label: "Local audio player", path: R + "narration/web/index.html" },
          { label: "Dissertation (Swedish)", path: R + "avhandling/README.md" }
        ]
      },
      {
        title: "Sources, reading and research",
        icon: "❋",
        desc: "Notebooks, translations, indexes and research assistants – all local.",
        links: [
          { label: "Hilma translations", path: R + "hilma-translation/README.md" },
          { label: "Notebook model", path: R + "notes-assistant/README.md" },
          { label: "Research assistant", path: R + "research-assistant/README.md" },
          { label: "Research project", path: R + "research-project/README.md" },
          { label: "Villari source copy", path: R + "knowledge/dissertation/README.md" },
          { label: "Riemann workstream", path: R + "riemann/README.md" }
        ]
      },
      {
        title: "Project-loop governance",
        icon: "⌘",
        desc: "Master prompts, decisions, state, cycle reports and the local agent.",
        links: [
          { label: "Project-loop README", path: L + "README.md" },
          { label: "WORKFLOW 2.1", path: L + "WORKFLOW.md" },
          { label: "CURRENT_STATE", path: L + "CURRENT_STATE.md" },
          { label: "DECISIONS", path: L + "DECISIONS.md" },
          { label: "Historical master prompt", path: L + "MASTERPROMPT.md" },
          { label: "Dated master prompt 2026-11-26", path: L + "MASTERPROMPT_2026-11-26.md" },
          { label: "Local agent", path: L + "PROJECT_LOOP_ASSISTANT.md" },
          { label: "State: current_step.json", path: L + "state/current_step.json" },
          { label: "State: progress.json", path: L + "state/progress.json" },
          { label: "State: backlog.json", path: L + "state/backlog.json" },
          { label: "Consequence check", path: L + "reports/KONSEKVENSKONTROLL_2026-11-26.md" },
          { label: "Local commit report", path: L + "reports/GITHUB_COMMIT_LOCAL_2026-11-26.md" }
        ]
      }
    ],
    figures: [
      { file: "fig1-hierarchy.svg", title: "Hierarchy, levels 1–9" },
      { file: "fig2-lattice.svg", title: "The lattice" },
      { file: "fig3-palette.svg", title: "The colour palette" },
      { file: "fig4-complement.svg", title: "The complementary pair" },
      { file: "fig5-cardinality.svg", title: "Cardinality" },
      { file: "fig6-profile-board.svg", title: "Graphic profile" },
      { file: "fig7-complement-chord.svg", title: "Complement chord" },
      { file: "fig8-offset-map.svg", title: "Offset map" }
    ]
  };

  /* --------------------------- UI strings ---------------------------- */
  var ui = {
    sv: {
      title: "Cosmic Block — hela projektet på en sida",
      metaDescription: "Lokal översikt över Cosmic Block: matematik, konst, drakar, roman, avhandling, Riemann och projektloopens nio steg.",
      navMain: "Huvudmeny",
      navSteps: "De nio stegen",
      navComponents: "Komponenter",
      navFigures: "Figurer",
      navAbout: "Om sidan",
      navReadme: "README",
      navDissertation: "Avhandling",
      langLabel: "Byt språk",
      langToEn: "English",
      langToSv: "Svenska",
      heroKicker: "Lokal översikt · 27 november 2026",
      heroTitleHtml: "Cosmic <em>Block</em>",
      heroIntro: "En värld av heltal, geometri och berättelser. Här finns matematiken, konstverken, drakarna, romanen, anteckningarna och projektloopens nio steg — samlade på ett ställe.",
      heroCta1: "UTFORSKA DE NIO STEGEN →",
      heroCta2: "SE ALLA KOMPONENTER",
      statsLabel: "Nyckeltal",
      stats: [
        ["35", "varv i projektloopen"],
        ["1–9", "Cosmic Block-nivåer"],
        ["5", "nivåer implementerade"],
        ["87", "C11-kontroller"],
        ["64", "primtalskontroller"],
        ["25", "ouroboroskontroller"],
        ["3", "skärmsläckare & viewers"]
      ],
      stepsKicker: "Projektloopen",
      stepsTitle: "Nio steg, nio bilder, nio dörrar",
      stepsIntro: "Varje bild är en länk. Klicka på illustrationen för att läsa stegets egen README, eller välj ett av de mindre dokumenten under bilden.",
      componentsKicker: "Allt hittills",
      componentsTitle: "Hela projektet, komponent för komponent",
      componentsIntro: "Från C11-minneskuben till röstdirigenten, från avhandlingens 18 Markdown-filer till ouroborosdraken. Sök för att filtrera.",
      searchPlaceholder: "Sök bland dokument, verktyg och skärmsläckare …",
      searchAria: "Filtrera komponenter",
      resultCount: "{n} träffar",
      aboutHtml: 'Allt är lokalt. Inga externa kontakter, inskickningar, signaturer, betalningar, personuppgifter eller publiceringar görs utan ett separat mänskligt beslut (D-008). Illustrationerna är deterministiska SVG:er som ritas av <a href="visa.html?f=tools/make-art.js">hemsida/tools/make-art.js</a> — inga externa bildtjänster används.',
      figuresKicker: "Genererad konst",
      figuresTitle: "Figurerna 1–8",
      figuresIntroHtml: "De deterministiska figurerna från <code>tools/make-figures.js</code> och steg 4:s grafiska profil.",
      footerHtml: 'Cosmic Block · lokal hemsida · uppdaterad <span id="updated"></span> · ingen data lämnar datorn',
      stepAria: "Öppna steg {n}: {title}",
      stepImgAlt: "Illustration för steg {n}: {title}",
      readerTitle: "Läser lokala filer — Cosmic Block",
      back: "← Tillbaka till hemsidan",
      raw: "Öppna råfilen",
      loading: "Läser fil …",
      failTitle: "Filen kunde inte läsas",
      failEmpty: "Sökvägen är tom eller inte lokal.",
      failHtml: "Starta servern från projektroten med <code>node tools/serve.js</code> och öppna sedan <code>http://localhost:8731/hemsida/</code>. Läsaren fungerar inte direkt via <code>file://</code> eftersom webbläsaren blockerar lokala fetch-anrop.",
      relatedLabel: "I samma sammanhang:"
    },
    en: {
      title: "Cosmic Block — the whole project on one page",
      metaDescription: "Local overview of Cosmic Block: mathematics, art, dragons, the novel, the dissertation, Riemann and the nine steps of the project loop.",
      navMain: "Main menu",
      navSteps: "The nine steps",
      navComponents: "Components",
      navFigures: "Figures",
      navAbout: "About",
      navReadme: "README",
      navDissertation: "Dissertation",
      langLabel: "Change language",
      langToEn: "English",
      langToSv: "Svenska",
      heroKicker: "Local overview · 27 November 2026",
      heroTitleHtml: "Cosmic <em>Block</em>",
      heroIntro: "A world of integers, geometry and stories. The mathematics, the artworks, the dragons, the novel, the notebooks and the nine steps of the project loop — gathered in one place.",
      heroCta1: "EXPLORE THE NINE STEPS →",
      heroCta2: "SEE ALL COMPONENTS",
      statsLabel: "Key figures",
      stats: [
        ["35", "project-loop cycles"],
        ["1–9", "Cosmic Block levels"],
        ["5", "levels implemented"],
        ["87", "C11 checks"],
        ["64", "prime-number checks"],
        ["25", "ouroboros checks"],
        ["3", "screensavers & viewers"]
      ],
      stepsKicker: "The project loop",
      stepsTitle: "Nine steps, nine images, nine doors",
      stepsIntro: "Every image is a link. Click the illustration to read that step's own README, or choose one of the smaller documents beneath it.",
      componentsKicker: "Everything so far",
      componentsTitle: "The whole project, component by component",
      componentsIntro: "From the C11 memory-mapped cube to the voice profiles, from the dissertation's 18 Markdown files to the ouroboros dragon. Search to filter.",
      searchPlaceholder: "Search documents, tools and screensavers …",
      searchAria: "Filter components",
      resultCount: "{n} results",
      aboutHtml: 'Everything is local. No external contacts, submissions, signatures, payments, personal data or publications happen without a separate human decision (D-008). The illustrations are deterministic SVGs drawn by <a href="visa.html?f=tools/make-art.js">hemsida/tools/make-art.js</a> — no external image service is used.',
      figuresKicker: "Generated art",
      figuresTitle: "Figures 1–8",
      figuresIntroHtml: "The deterministic figures from <code>tools/make-figures.js</code> and the step 4 graphic profile.",
      footerHtml: 'Cosmic Block · local website · updated <span id="updated"></span> · no data leaves your computer',
      stepAria: "Open step {n}: {title}",
      stepImgAlt: "Illustration for step {n}: {title}",
      readerTitle: "Reading local files — Cosmic Block",
      back: "← Back to the website",
      raw: "Open raw file",
      loading: "Loading file …",
      failTitle: "The file could not be read",
      failEmpty: "The path is empty or not local.",
      failHtml: "Start the server from the project root with <code>node tools/serve.js</code>, then open <code>http://localhost:8731/hemsida/</code>. The reader does not work directly from <code>file://</code> because the browser blocks local fetch requests.",
      relatedLabel: "In the same context:"
    }
  };

  /* ------------------------- Language choice ------------------------- */
  function valid(l) { return l === "sv" || l === "en" ? l : null; }

  function selectedLang() {
    try {
      if (typeof location !== "undefined") {
        var fromUrl = valid(new URLSearchParams(location.search).get("lang"));
        if (fromUrl) return fromUrl;
      }
      if (typeof localStorage !== "undefined") {
        var stored = valid(localStorage.getItem("cb-lang"));
        if (stored) return stored;
      }
    } catch (err) { /* privat läge eller gammal webbläsare */ }
    return "sv";
  }

  var lang = selectedLang();
  var active = lang === "en" ? en : sv;

  var api = {
    lang: lang,
    updated: "2026-11-27",
    cycles: 35,
    steps: active.steps,
    groups: active.groups,
    figures: active.figures,
    hero: "assets/hero.svg",
    locales: { sv: sv, en: en },
    ui: ui,
    setLang: function (l) {
      try { if (typeof localStorage !== "undefined") localStorage.setItem("cb-lang", valid(l) || "sv"); }
      catch (err) { /* språket ligger kvar i URL:en */ }
    }
  };

  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.SITE_DATA = api;
})(typeof window !== "undefined" ? window : globalThis);
