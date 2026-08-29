/* ============================================================
   COURS / COURSES — une entrée par année scolaire.
   2021-2022 est rempli d'après le programme officiel MP2I.
   Les autres années sont des gabarits : remplace les listes.
   ============================================================ */
const COURSES = {
  years: ["2021-2022","2022-2023","2023-2024","2024-2025","2025-2026"],

  "2021-2022": {
    school: { fr: "Lycée Aux Lazaristes, Lyon", en: "Lycée Aux Lazaristes, Lyon" },
    programme: { fr: "Classe préparatoire MP2I — première année", en: "Classe préparatoire MP2I — first year" },
    blurb: { fr: "Voie Mathématiques, Physique, Ingénierie et Informatique. Contenus d'après le programme officiel du Ministère de l'Enseignement supérieur (2021).",
             en: "Mathematics, Physics, Engineering and Computer Science track. Contents follow the official curriculum of the French Ministry of Higher Education (2021)." },
    semesters: [
      { name: { fr: "Semestre 1", en: "Semester 1" },
        courses: [
          { title: { fr: "Mathématiques", en: "Mathematics" },
            topics: { fr: ["Raisonnement et vocabulaire ensembliste","Compléments de calcul algébrique et de trigonométrie","Nombres complexes","Techniques fondamentales de calcul différentiel et intégral","Nombres réels et suites numériques","Limites, continuité, dérivabilité, convexité","Arithmétique dans l'ensemble des entiers relatifs","Structures algébriques usuelles","Calcul matriciel et systèmes linéaires","Polynômes et fractions rationnelles"],
                      en: ["Reasoning and set-theoretic vocabulary","Further algebraic calculation and trigonometry","Complex numbers","Foundations of differential and integral calculus","Real numbers and numerical sequences","Limits, continuity, differentiability, convexity","Arithmetic in the ring of integers","Standard algebraic structures","Matrix calculus and linear systems","Polynomials and rational fractions"] } },
          { title: { fr: "Informatique", en: "Computer Science" },
            topics: { fr: ["Algorithmes et programmes","Discipline de programmation","Validation et test","Récursivité et induction","Types et abstraction","Structures de données séquentielles","Gestion de la mémoire d'un programme","Gestion des fichiers et entrées-sorties","Langages C et OCaml"],
                      en: ["Algorithms and programs","Programming discipline","Validation and testing","Recursion and induction","Types and abstraction","Sequential data structures","Program memory management","File handling and I/O","C and OCaml"] } },
          { title: { fr: "Physique", en: "Physics" },
            topics: { fr: ["Formation des images","Signaux et composants électriques","Circuits linéaires du premier et du deuxième ordre","Propagation d'un signal","Description et paramétrage du mouvement d'un point","Lois de Newton","Approche énergétique du mouvement","Particules chargées dans des champs électrique et magnétostatique","Gaz parfait et phase condensée","Bilans d'énergie en thermodynamique"],
                      en: ["Image formation","Electrical signals and components","First- and second-order linear circuits","Signal propagation","Kinematics of a point","Newton's laws","Energy approach to motion","Charged particles in electric and magnetostatic fields","Ideal gas and condensed phase models","Energy balances in thermodynamics"] } },
          { title: { fr: "Sciences industrielles de l'ingénieur", en: "Engineering Science" },
            topics: { fr: ["Analyse du besoin et des exigences, ingénierie système (SysML)","Analyse fonctionnelle et structurelle d'un système","Analyse des performances et des écarts","Choix et caractérisation des grandeurs physiques","Modèles de connaissance et de comportement","Résolution analytique et numérique","Mise en œuvre et validation de protocoles expérimentaux","Conception : architecture et solutions techniques"],
                      en: ["Requirements analysis and systems engineering (SysML)","Functional and structural analysis of a system","Performance and deviation analysis","Selecting and characterising physical quantities","Knowledge and behaviour models","Analytical and numerical solving","Designing and running experimental protocols","Design: architecture and technical solutions"] } }
        ] },
      { name: { fr: "Semestre 2", en: "Semester 2" },
        courses: [
          { title: { fr: "Mathématiques", en: "Mathematics" },
            topics: { fr: ["Analyse asymptotique","Espaces vectoriels et applications linéaires","Matrices, changements de bases, similitude","Groupe symétrique et déterminants","Intégration","Dénombrement","Probabilités sur un univers fini, espérance et variance","Espaces préhilbertiens réels","Procédés sommatoires discrets","Fonctions de deux variables"],
                      en: ["Asymptotic analysis","Vector spaces and linear maps","Matrices, change of basis, similarity","Symmetric group and determinants","Integration","Enumerative combinatorics","Probability on finite sample spaces, expectation and variance","Real pre-Hilbert spaces","Discrete summation processes","Functions of two variables"] } },
          { title: { fr: "Informatique", en: "Computer Science" },
            topics: { fr: ["Structures de données hiérarchiques (arbres)","Structures de données relationnelles (graphes)","Exploration exhaustive","Diviser pour régner, programmation dynamique","Algorithmique des textes","Algorithmique des graphes","Syntaxe des formules logiques","Sémantique de vérité du calcul propositionnel","Bases de données"],
                      en: ["Hierarchical data structures (trees)","Relational data structures (graphs)","Exhaustive search","Divide and conquer, dynamic programming","Text algorithms","Graph algorithms","Syntax of logical formulas","Truth semantics of propositional calculus","Databases"] } },
          { title: { fr: "Physique", en: "Physics" },
            topics: { fr: ["Régime sinusoïdal forcé","Filtrage linéaire","Moment cinétique d'un point matériel","Mouvements dans un champ de gravitation newtonien","Mouvement d'un solide","Deuxième principe et bilans d'entropie","Transitions de phases","Machines thermiques","Induction et forces de Laplace","Introduction à la physique quantique"],
                      en: ["Forced sinusoidal regime","Linear filtering","Angular momentum of a point mass","Motion in a Newtonian gravitational field","Rigid body motion","Second law and entropy balances","Phase transitions","Heat engines","Induction and Laplace forces","Introduction to quantum physics"] } }
        ] }
    ],
    note: { fr: "Hypothèse à confirmer : option « sciences informatiques » au second semestre. Si tu as suivi l'option « sciences de l'ingénieur », ajoute le thème « constitution et transformations de la matière » (chimie) et prolonge les SI sur le semestre 2.",
            en: "Assumption to confirm: 'sciences informatiques' option in the second semester. If you took the 'sciences de l'ingénieur' option instead, add the chemistry theme and extend Engineering Science into semester 2." }
  },

  "2022-2023": {
    school: { fr: "Lycée Aux Lazaristes, Lyon", en: "Lycée Aux Lazaristes, Lyon" },
    programme: { fr: "Classe préparatoire MPI — deuxième année", en: "Classe préparatoire MPI — second year" },
    blurb: { fr: "Deuxième année de prépa. À compléter.", en: "Second year of classe préparatoire. To be filled in." },
    semesters: [],
    todo: { fr: "Gabarit à remplir. Le programme officiel MPI couvre notamment : langages formels et automates, décidabilité et classes de complexité, déduction naturelle, algorithmes probabilistes, concurrence et synchronisation — plus le programme de mathématiques et de physique de deuxième année.",
            en: "Template to fill in. The official MPI curriculum notably covers formal languages and automata, decidability and complexity classes, natural deduction, probabilistic algorithms, concurrency and synchronisation — plus the second-year mathematics and physics programmes." }
  },

  "2023-2024": {
    school: { fr: "École Polytechnique, Paris", en: "École Polytechnique, Paris" },
    programme: { fr: "Cycle ingénieur — première année", en: "Engineering degree — first year" },
    blurb: { fr: "À compléter.", en: "To be filled in." },
    semesters: [],
    todo: { fr: "Gabarit à remplir avec les cours suivis cette année-là.", en: "Template to fill in with the courses taken that year." }
  },

  "2024-2025": {
    school: { fr: "École Polytechnique, Paris", en: "École Polytechnique, Paris" },
    programme: { fr: "Cycle ingénieur — deuxième année", en: "Engineering degree — second year" },
    blurb: { fr: "À compléter.", en: "To be filled in." },
    semesters: [],
    todo: { fr: "Gabarit à remplir. D'après ton CV, cette année couvre notamment machine et deep learning, vision par ordinateur, chaînes de Markov, statistiques, optimisation, traitement du signal, calcul parallèle et biologie moléculaire et cellulaire.",
            en: "Template to fill in. From your CV, this year notably covers machine and deep learning, computer vision, Markov chains, statistics, optimisation, signal processing, parallel computing and molecular and cell biology." }
  },

  "2025-2026": {
    school: { fr: "École Polytechnique, Paris", en: "École Polytechnique, Paris" },
    programme: { fr: "Cycle ingénieur — troisième année", en: "Engineering degree — third year" },
    blurb: { fr: "À compléter.", en: "To be filled in." },
    semesters: [],
    todo: { fr: "Gabarit à remplir.", en: "Template to fill in." }
  }
};
