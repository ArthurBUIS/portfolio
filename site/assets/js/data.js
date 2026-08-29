/* ============================================================
   ARTHUR BUIS — TOUT LE CONTENU DU SITE / ALL SITE CONTENT
   Chaque texte a une version fr et en. Édite ce fichier seul.
   Every string has an fr and an en version. Edit this file only.
   ============================================================ */
const DATA = {
  initials: "AB",
  photo: "",                                   /* ex: "img/photo.jpg" */
  name: "Arthur Buis",
  email: "arthur.buis@polytechnique.edu",
  github: "https://github.com/",               /* TODO: URL exacte */
  linkedin: "https://www.linkedin.com/in/",    /* TODO: URL exacte */
  cv: "cv.pdf",

  role: {
    fr: "Ingénieur École Polytechnique • IA, Data Science & Vision par ordinateur",
    en: "École Polytechnique Graduate Engineer • AI, Data Science & Computer Vision"
  },
  lede: {
    fr: "Ingénieur diplômé de l'École Polytechnique en mathématiques appliquées et informatique, j'entre en M.Sc. Bioinformatics à DTU. Je construis des systèmes d'apprentissage qui tournent en conditions réelles, et je cherche un poste étudiant à temps partiel en IA / data science à partir de septembre 2026.",
    en: "École Polytechnique graduate engineer in applied mathematics and computer science, starting an M.Sc. in Bioinformatics at DTU. I build learning systems that run in real conditions, and I'm looking for a part-time student assistant position in AI / data science from September 2026."
  },
  cta1: { fr: "Voir mes projets", en: "See my projects" },
  cta2: { fr: "Télécharger mon CV", en: "Download my CV" },

  stats: [
    { v: "3,91/4",  fr: "CGPA à l'École Polytechnique", en: "CGPA at École Polytechnique" },
    { v: "3",       fr: "expériences en entreprise et en régiment", en: "professional and military placements" },
    { v: "5",       fr: "projets de recherche appliquée", en: "applied research projects" }
  ],

  navcards: [
    { icon: "🎓", href: "my-courses-2021-2022.html", cls: "",
      title: {fr:"Mes cours",en:"My Courses"},
      desc: {fr:"Le détail des programmes suivis, année par année",en:"Every curriculum I followed, year by year"} },
    { icon: "🔬", href: "my-projects.html", cls: "",
      title: {fr:"Projets académiques",en:"Academic Projects"},
      desc: {fr:"Vision, LLM, graphes et optimisation",en:"Vision, LLMs, graphs and optimisation"} },
    { icon: "💼", href: "my-pro-projects.html", cls: "pro-card",
      title: {fr:"Projets professionnels",en:"Professional Projects"},
      desc: {fr:"Ce que j'ai livré en stage et en régiment",en:"What I shipped on placement and in uniform"} },
    { icon: "📄", href: "my-cv.html", cls: "",
      title: {fr:"Mon CV",en:"My CV"},
      desc: {fr:"Le parcours complet en une page",en:"The whole thing on one page"} }
  ],

  experience: [
    { icon: "🎥",
      when: { fr: "Mars — Août 2026 • New York", en: "Mar. — Aug. 2026 • New York" },
      role: { fr: "Stage — Ingénieur vision par ordinateur", en: "Computer Vision Engineer Intern" },
      org: "SharedStudios",
      desc: { fr: "Développement d'un pipeline de stitching panoramique multi-caméras en temps réel pour des portails de visioconférence immersifs. Intégration de la segmentation avec OpenCV et des modèles YOLO pour absorber la parallaxe due aux personnes et aux objets en mouvement. Revue de plus de 10 articles de recherche pour concevoir l'architecture de production.",
              en: "Developed a real-time, multi-camera panorama stitching pipeline for immersive video-conferencing portals. Integrated segmentation with OpenCV and YOLO models to handle parallax from people and moving objects. Reviewed 10+ computer vision papers to design the production pipeline." },
      tags: ["Python","OpenCV","YOLO","GPU","Segmentation"] },
    { icon: "🏥",
      when: { fr: "Juin — Sept. 2025 • Paris", en: "June — Sept. 2025 • Paris" },
      role: { fr: "Stage — Ingénieur NLP", en: "NLP Engineer Intern" },
      org: "Arkhn",
      desc: { fr: "Déploiement de pipelines NLP fondés sur des grands modèles de langage pour la génération et la synthèse de textes médicaux. Mise en production hospitalière avec vLLM, dans le respect de la réglementation sur les données de santé. Affinage d'architectures d'agents conversationnels pour l'extraction de données médicales à partir de comptes rendus cliniques non structurés.",
              en: "Deployed NLP pipelines built on large language models for medical text generation and synthesis. Integrated advanced models into a hospital production environment using vLLM, adhering to healthcare data regulations. Refined conversational agent architectures to optimise medical data extraction from unstructured clinical records." },
      tags: ["LLM","vLLM","NLP","Healthcare data"] },
    { icon: "🎖️",
      when: { fr: "Déc. 2023 — Mars 2024 • Nouvelle-Calédonie", en: "Dec. 2023 — Mar. 2024 • New Caledonia" },
      role: { fr: "Aspirant officier — Chef de section", en: "Officer Cadet — Platoon Leader" },
      org: { fr: "Armée française — Régiment du Service Militaire Adapté", en: "French Army — Adapted Military Service Regiment" },
      desc: { fr: "Encadrement d'une section de plus de 30 recrues pendant leur formation militaire initiale. Participation aux missions de recrutement au sein des communautés tribales de Nouvelle-Calédonie.",
              en: "Led a platoon of 30+ recruits through their initial military training. Took part in recruitment missions within tribal communities in New Caledonia." },
      tags: ["Leadership","Training","Field work"] }
  ],

  education: [
    { icon: "🧬",
      when: { fr: "Sept. 2026 — Août 2028 • Lyngby", en: "Sept. 2026 — Aug. 2028 • Lyngby" },
      role: { fr: "M.Sc. Bioinformatics", en: "M.Sc. in Bioinformatics" },
      org: "Technical University of Denmark",
      desc: { fr: "Parcours spécialisé en IA pour les sciences du vivant, biologie computationnelle et analyse de données génomiques.",
              en: "Specialised track in AI for Life Sciences, Computational Biology and Genomic Data Analysis." },
      tags: ["AI","Computational biology","Genomics"] },
    { icon: "🏛️",
      when: { fr: "Sept. 2023 — Août 2026 • Paris", en: "Sept. 2023 — Aug. 2026 • Paris" },
      role: { fr: "Diplôme d'ingénieur, niveau master", en: "Engineering Degree, Master's level" },
      org: "École Polytechnique",
      desc: { fr: "Première université d'ingénieurs française, admission par concours national. Parcours mathématiques appliquées, informatique et biologie, avec un fort intérêt pour l'intelligence artificielle. Cours suivis : machine et deep learning, vision par ordinateur, chaînes de Markov, statistiques, optimisation, traitement du signal, calcul parallèle, biologie moléculaire et cellulaire. GPA 3,82/4 — CGPA 3,91/4.",
              en: "Top-ranked French engineering university, with admission through nationally competitive examinations. Track focused on applied mathematics, computer science and biology, with a strong interest in artificial intelligence. Coursework: machine and deep learning, computer vision, Markov chains, statistics, optimisation, signal processing, parallel computing, molecular and cell biology. GPA 3.82/4 — CGPA 3.91/4." },
      tags: ["Deep learning","Vision","Optimisation","Parallel computing"] },
    { icon: "📐",
      when: { fr: "Sept. 2021 — Juil. 2023 • Lyon", en: "Sept. 2021 — July 2023 • Lyon" },
      role: { fr: "Classe préparatoire aux grandes écoles (MP2I / MPI)", en: "Classe préparatoire (MP2I / MPI)" },
      org: "Lycée Aux Lazaristes",
      desc: { fr: "Deux ans d'études intensives en mathématiques pures, physique et informatique, en préparation des concours d'entrée aux grandes écoles françaises. GPA 4,0/4.",
              en: "Two years of intensive study in pure mathematics, physics and computer science, preparing for the highly competitive entrance exams to top French universities. GPA 4.0/4." },
      tags: ["Mathematics","Physics","Computer science"] }
  ],

  /* ---------- projets académiques : une page par projet ---------- */
  projects: [
    { slug: "human-motion-analysis", icon: "🏃", year: "2025",
      when: { fr: "Sept. — Déc. 2025", en: "Sept. — Dec. 2025" },
      title: { fr: "Analyse du mouvement humain", en: "Human Motion Analysis" },
      summary: { fr: "Évaluation automatisée de la posture sur des exercices de fitness, à partir de vidéo.",
                 en: "Automated posture assessment for fitness exercises, from video data." },
      context: { fr: "Projet de vision par ordinateur mené à l'École Polytechnique. L'objectif : dire, à partir d'une simple vidéo, si un mouvement est exécuté correctement — un problème où les données sont bruitées et les points clés souvent manquants.",
                 en: "A computer vision project carried out at École Polytechnique. The goal: decide from ordinary video whether a movement is performed correctly — a problem where the data is noisy and keypoints frequently go missing." },
      work: { fr: ["Détection des points clés du corps avec MediaPipe et OpenCV","Méthodes d'interpolation pour gérer les points clés manquants","Entraînement de modèles de classification des exercices","Algorithmes de déformation temporelle (time warping) pour comparer une exécution à une référence"],
              en: ["Body keypoint detection with MediaPipe and OpenCV","Interpolation methods to handle missing keypoints","Training computer vision models for exercise classification","Time-warping algorithms to compare an execution against a reference"] },
      tags: ["MediaPipe","OpenCV","Time warping","Classification"] },

    { slug: "social-media-classification", icon: "💬", year: "2025",
      when: { fr: "Sept. — Déc. 2025", en: "Sept. — Dec. 2025" },
      title: { fr: "Classification supervisée de textes de réseaux sociaux", en: "Supervised Classification of Social Media Texts" },
      summary: { fr: "Classer les utilisateurs de réseaux sociaux selon leur rôle social, à partir de leurs écrits.",
                 en: "Classifying social media users into social roles from what they write." },
      context: { fr: "La question de fond n'est pas seulement d'atteindre une bonne précision, mais de comprendre ce que les représentations apprises capturent réellement des rôles sociaux.",
                 en: "The underlying question is not only reaching good accuracy, but understanding what the learnt representations actually capture about social roles." },
      work: { fr: ["Construction d'un pipeline ML complet, du prétraitement à l'évaluation","Sélection de modèles et réglage des hyperparamètres","Expérimentation approfondie sur les signaux comportementaux","Analyse de ce que les représentations apprises encodent des rôles sous-jacents"],
              en: ["Built a full ML pipeline, from preprocessing to evaluation","Model selection and hyperparameter tuning","Extensive experimentation on behavioural signals","Analysis of what the learnt representations encode about underlying roles"] },
      tags: ["PyTorch","NLP","Deep learning","Representations"] },

    { slug: "similarity-graphs", icon: "🕸️", year: "2025",
      when: { fr: "Mars — Mai 2025", en: "Mar. — May 2025" },
      title: { fr: "Construction et analyse de graphes de similarité", en: "Construction and Analysis of Similarity Graphs" },
      summary: { fr: "Cartographier la scène du rap français comme un réseau, puis en étudier la structure.",
                 en: "Mapping the French hip-hop scene as a network, then studying its structure." },
      context: { fr: "Les données n'existaient pas sous forme exploitable : il a fallu les collecter par web scraping et via des API, puis décider ce que « similaire » veut dire entre deux artistes.",
                 en: "The data did not exist in usable form: it had to be gathered by web scraping and through APIs, and then 'similar' had to be defined between two artists." },
      work: { fr: ["Collecte de données tabulaires et textuelles par web scraping et API","Construction de graphes de similarité entre artistes","Détection de communautés","Identification des nœuds centraux et étude des propriétés globales du graphe"],
              en: ["Collected tabular and textual data by web scraping and via APIs","Built similarity graphs between artists","Community detection","Central node identification and study of global graph properties"] },
      tags: ["Graph theory","Web scraping","Community detection"] },

    { slug: "llm-code-generation", icon: "🤖", year: "2024-2025",
      when: { fr: "Sept. 2024 — Mai 2025", en: "Sept. 2024 — May 2025" },
      title: { fr: "Grands modèles de langage pour la génération de code", en: "Large Language Models for Code Generation" },
      summary: { fr: "Faire écrire du code à un LLM dans un langage presque absent de ses données d'entraînement.",
                 en: "Getting an LLM to write code in a language almost absent from its training data." },
      context: { fr: "Envision est un langage peu documenté : le modèle ne peut pas s'appuyer sur ce qu'il a vu pendant son entraînement. Le problème devient celui de la récupération de contexte et de l'évaluation automatique.",
                 en: "Envision is a poorly documented language: the model cannot lean on what it saw during training. The problem becomes one of context retrieval and automated evaluation." },
      work: { fr: ["Étude et entraînement de LLM pour la compréhension et la génération de code","Conception d'un protocole d'évaluation automatisé de type LLM-as-a-Judge","Implémentation d'un pipeline de génération augmentée par récupération avec LangChain"],
              en: ["Studied and trained large language models for code understanding and generation","Designed an automated evaluation protocol based on an LLM-as-a-Judge framework","Implemented a retrieval-augmented generation pipeline with LangChain"] },
      tags: ["LangChain","RAG","LLM-as-a-Judge","Evaluation"] },

    { slug: "urban-trail-optimisation", icon: "🗺️", year: "2022-2023",
      when: { fr: "Sept. 2022 — Juin 2023", en: "Sept. 2022 — June 2023" },
      title: { fr: "Optimisation multi-objectif de parcours d'urban trail", en: "Multi-objective Optimisation of Urban Trail Routes" },
      summary: { fr: "Tracer un parcours de trail urbain qui satisfait plusieurs critères contradictoires à la fois.",
                 en: "Designing an urban trail route that satisfies several conflicting criteria at once." },
      context: { fr: "Un bon parcours doit être long sans être monotone, dénivelé sans être infaisable, et rester dans la ville. Ces objectifs s'opposent : il n'existe pas une solution unique, mais un front de compromis.",
                 en: "A good route must be long without being monotonous, hilly without being unrunnable, and stay inside the city. These objectives conflict: there is no single solution, only a front of trade-offs." },
      work: { fr: ["Conception d'un algorithme de routage fondé sur la théorie des graphes","Formulation en optimisation multi-objectif","Implémentation complète en OCaml","Évaluation sur un jeu de données réel à l'échelle de la ville de Lyon"],
              en: ["Designed a routing algorithm based on graph theory","Formulated the problem as multi-objective optimisation","Implemented the full algorithm in OCaml","Evaluated on a large real-world dataset for the city of Lyon"] },
      tags: ["OCaml","Optimisation","Graph theory"] }
  ],

  /* ---------- projets professionnels ---------- */
  proProjects: [
    { icon: "🎥", org: "SharedStudios",
      when: { fr: "Mars — Août 2026 • New York", en: "Mar. — Aug. 2026 • New York" },
      title: { fr: "Pipeline de stitching panoramique temps réel", en: "Real-time Panorama Stitching Pipeline" },
      summary: { fr: "Fusionner les flux de plusieurs caméras en une seule image continue, assez vite pour une visioconférence.",
                 en: "Fusing several camera streams into one continuous image, fast enough for live video-conferencing." },
      work: { fr: ["Pipeline de stitching multi-caméras en temps réel pour des portails de visioconférence immersifs","Intégration de la segmentation (OpenCV, modèles YOLO) pour gérer la parallaxe due aux personnes et aux objets en mouvement","Revue de plus de 10 articles de vision par ordinateur pour concevoir l'architecture de production"],
              en: ["Real-time multi-camera stitching pipeline for immersive video-conferencing portals","Integrated segmentation (OpenCV, YOLO models) to handle parallax caused by people and moving objects","Reviewed 10+ computer vision papers to design the production pipeline"] },
      tags: ["Python","OpenCV","YOLO","GPU","Real-time"] },

    { icon: "🏥", org: "Arkhn",
      when: { fr: "Juin — Sept. 2025 • Paris", en: "June — Sept. 2025 • Paris" },
      title: { fr: "Pipelines NLP pour le texte médical", en: "NLP Pipelines for Medical Text" },
      summary: { fr: "Mettre des grands modèles de langage en production dans un environnement hospitalier réglementé.",
                 en: "Putting large language models into production inside a regulated hospital environment." },
      work: { fr: ["Déploiement de pipelines NLP fondés sur des LLM pour la génération et la synthèse de textes médicaux","Intégration en environnement de production hospitalier avec vLLM, conformément à la réglementation sur les données de santé","Affinage d'architectures d'agents conversationnels pour extraire des données médicales de comptes rendus cliniques non structurés"],
              en: ["Deployed LLM-based NLP pipelines for medical text generation and synthesis","Integrated advanced models into a hospital production environment using vLLM, adhering to healthcare data regulations","Refined conversational agent architectures to extract medical data from unstructured clinical records"] },
      tags: ["LLM","vLLM","NLP","Production"] },

    { icon: "🎖️", org: { fr: "RSMA — Armée française", en: "RSMA — French Army" },
      when: { fr: "Déc. 2023 — Mars 2024 • Nouvelle-Calédonie", en: "Dec. 2023 — Mar. 2024 • New Caledonia" },
      title: { fr: "Commandement d'une section à l'instruction", en: "Leading a Platoon Through Initial Training" },
      summary: { fr: "Trente recrues, quatre mois, une formation militaire initiale à mener de bout en bout.",
                 en: "Thirty recruits, four months, an initial military training to run end to end." },
      work: { fr: ["Encadrement d'une section de plus de 30 recrues pendant leur formation militaire initiale","Participation aux missions de recrutement au sein des communautés tribales de Nouvelle-Calédonie"],
              en: ["Led a platoon of 30+ recruits through their initial military training","Took part in recruitment missions within tribal communities in New Caledonia"] },
      tags: ["Leadership","Training","Field work"] }
  ],

  skills: [
    { icon: "🧠", title: {fr:"Apprentissage automatique",en:"Machine learning"}, items: {fr:"PyTorch • TensorFlow • Scikit-learn • Hugging Face",en:"PyTorch • TensorFlow • Scikit-learn • Hugging Face"} },
    { icon: "💬", title: {fr:"LLM & NLP",en:"LLMs & NLP"}, items: {fr:"LangChain • vLLM • RAG • Agents conversationnels",en:"LangChain • vLLM • RAG • Conversational agents"} },
    { icon: "👁️", title: {fr:"Vision par ordinateur",en:"Computer vision"}, items: {fr:"OpenCV • YOLO • MediaPipe • Segmentation • Stitching",en:"OpenCV • YOLO • MediaPipe • Segmentation • Stitching"} },
    { icon: "⌨️", title: {fr:"Langages",en:"Programming languages"}, items: {fr:"Python (avancé) • OCaml • C • Java • JavaScript • SQL • HTML/CSS",en:"Python (advanced) • OCaml • C • Java • JavaScript • SQL • HTML/CSS"} },
    { icon: "⚙️", title: {fr:"Outils & calcul",en:"Tools & computing"}, items: {fr:"Git • GitHub • Docker • Linux (shell) • Slurm • MPI • OpenMP",en:"Git • GitHub • Docker • Linux (shell) • Slurm • MPI • OpenMP"} },
    { icon: "🌍", title: {fr:"Langues",en:"Languages"}, items: {fr:"Français (natif) • Anglais (C1, TOEFL 106/120) • Espagnol (B2)",en:"French (native) • English (fluent, C1 – TOEFL 106/120) • Spanish (B2)"} }
  ],

  outside: [
    { icon: "🥁", title: {fr:"Musique",en:"Music"},
      items: {fr:"Batteur rock/pop, expérience régulière de la scène et des concerts live. Vice-président de l'Atelier Des Ondes, association qui organise les concerts et gère le son des événements de l'École Polytechnique.",
              en:"Rock/pop drummer with regular stage and live concert experience. Vice-president of Atelier Des Ondes, the association running concerts and live sound at École Polytechnique."} },
    { icon: "🏅", title: {fr:"Course à pied",en:"Running"},
      items: {fr:"Course en compétition, plus de 20 trails et courses urbaines au compteur.",
              en:"Competitive running, with 20+ trail and urban races."} },
    { icon: "➗", title: {fr:"Mathématiques",en:"Mathematics"},
      items: {fr:"Deux fois lauréat du concours national Archimède (plus de 1000 participants). Cours particuliers de mathématiques et d'informatique pour lycéens et préparationnaires.",
              en:"Two-time winner of the national Archimède competition (1000+ participants). Private maths and computer science tutoring for high school and preparatory class students."} }
  ],

  contact_lede: {
    fr: "Je cherche un poste étudiant à temps partiel en IA / data science à partir de septembre 2026, dans la région de Copenhague.",
    en: "I'm looking for a part-time student assistant position in AI / data science from September 2026, in the Copenhagen area."
  }
};
