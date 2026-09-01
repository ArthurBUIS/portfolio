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
    fr: "Ingénieur diplômé de l'École Polytechnique en mathématiques appliquées et informatique, j'entre en M.Sc. Bioinformatics à DTU. Je construis des systèmes d'apprentissage automatique et profond qui tournent en conditions réelles, et je cherche un poste étudiant à temps partiel en IA / data science à partir de septembre 2026.",
    en: "École Polytechnique graduate engineer in applied mathematics and computer science, starting an M.Sc. in Bioinformatics at DTU. I build machine and deep learning systems that run in real conditions, and I'm looking for a part-time student assistant position in AI / data science from September 2026."
  },
  cta1: { fr: "Voir mes projets", en: "See my projects" },
  cta2: { fr: "Télécharger mon CV", en: "Download my CV" },

  stats: [
    { v: "3,91/4",  fr: "CGPA à l'École Polytechnique", en: "CGPA at École Polytechnique" },
    { v: "3",       fr: "expériences en entreprise", en: "professional placements" },
    { v: "5",       fr: "projets de recherche appliquée", en: "applied research projects" }
  ],

  navcards: [
    { icon: "🎓", href: "my-courses-2021-2022.html", cls: "",
      title: {fr:"Mes cours",en:"My Courses"},
      desc: {fr:"Découvrez l'ensemble de mon parcours académique et les compétences techniques acquises",en:"Discover my full academic path and the technical skills I acquired"} },
    { icon: "🔬", href: "my-projects.html", cls: "",
      title: {fr:"Projets académiques",en:"Academic Projects"},
      desc: {fr:"Explorez mes réalisations techniques et mes projets d'études",en:"Explore my technical achievements and study projects"} },
    { icon: "💼", href: "my-pro-projects.html", cls: "pro-card",
      title: {fr:"Projets professionnels",en:"Professional Projects"},
      desc: {fr:"Projets menés au cours de mes expériences professionnelles",en:"Projects carried-out during my professional experiences"} },
    { icon: "📄", href: "my-cv.html", cls: "",
      title: {fr:"Mon CV",en:"My CV"},
      desc: {fr:"Consultez l'intégralité de mon parcours académique et professionnel",en:"View my complete academic and professional history"} }
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
      tags: ["MediaPipe","PyTorch","1D-CNN","PointNet","DTW","Savitzky-Golay","PCA","Signal processing"],
      body: [
        { type:"h2", text:{ fr:"Introduction", en:"Introduction" } },
        { type:"p", text:{
          fr:"Peut-on analyser un mouvement humain à partir d'une simple vidéo, sans matériel spécialisé, et renvoyer un retour pertinent sur la nature de l'exercice et la qualité de son exécution ? Identifier un exercice, compter les répétitions et évaluer leur exécution est un enjeu pour l'entraînement personnel, la prévention des blessures et la rééducation.",
          en:"Can a human movement be analysed from an ordinary video, without specialised equipment, and return useful feedback on what the exercise is and how well it is performed? Identifying an exercise, counting repetitions and assessing their execution matters for personal training, injury prevention and rehabilitation." } },
        { type:"p", text:{
          fr:"Projet en binôme (P41 — Roman Lendormy, Arthur Buis ; cours CSC_51073_EP). Le pipeline complet : extraction des points clés de pose avec MediaPipe, normalisation, classification de l'exercice, détection des répétitions, puis notation de la qualité du mouvement par comparaison à une exécution de référence.",
          en:"A pair project (P41 — Roman Lendormy, Arthur Buis; CSC_51073_EP course). The full pipeline: pose-landmark extraction with MediaPipe, normalisation, exercise classification, repetition detection, then movement-quality scoring by comparison with a reference execution." } },
        { type:"img", src:"img/human-motion-analysis/final-output.jpg",
          caption:{ fr:"Sortie finale du programme : exercice reconnu, nombre de répétitions, score moyen par répétition.", en:"Final program output: recognised exercise, repetition count, average score per repetition." } },

        { type:"h2", text:{ fr:"Jeu de données et estimation de pose", en:"Dataset and pose estimation" } },
        { type:"p", text:{
          fr:"Point de départ : un jeu Kaggle « Gym Workout / Exercise Video » — 980 vidéos, 22 exercices, filmées à l'horizontale ou à la verticale, parfois avec du texte incrusté ou des coupes. Pour simplifier, on se restreint à 4 exercices bien distincts : pompes, squats, leg extension et curl biceps à la barre.",
          en:"Starting point: a Kaggle \"Gym Workout / Exercise Video\" dataset — 980 videos, 22 exercises, filmed horizontally or vertically, sometimes with overlaid text or cuts. To simplify, we restrict to 4 clearly distinct exercises: push-ups, squats, leg extension and barbell biceps curl." } },
        { type:"gallery", items:[
          { src:"img/human-motion-analysis/videos-per-exercise.png", caption:{ fr:"Vidéos par exercice", en:"Videos per exercise" } },
          { src:"img/human-motion-analysis/frames-per-exercise.png", caption:{ fr:"Frames par exercice", en:"Frames per exercise" } }
        ] },
        { type:"p", text:{
          fr:"Les données sont des points clés de pose extraits avec MediaPipe : un premier CNN cadre le corps et l'oriente, puis localise 33 points anatomiques en pseudo-3D — (x, y) relatifs à la taille de la vidéo, z relatif au bassin dans une unité arbitraire (une seule caméra). MediaPipe a été retenu pour sa rapidité sur CPU.",
          en:"The data are pose landmarks extracted with MediaPipe: a first CNN frames and orients the body, then locates 33 anatomical points in pseudo-3D — (x, y) relative to the video size, z relative to the pelvis in an arbitrary unit (a single camera). MediaPipe was kept for its speed on CPU." } },
        { type:"img", src:"img/human-motion-analysis/mediapipe-landmarks.png",
          caption:{ fr:"Les 33 points clés identifiés par MediaPipe.", en:"The 33 landmarks identified by MediaPipe." } },
        { type:"h3", text:{ fr:"Nettoyage et interpolation", en:"Cleaning and interpolation" } },
        { type:"p", text:{
          fr:"Points clés manquants : confiance de détection trop faible (mis à <code>None</code>), occlusions, sortie du cadre. Une fonction d'interpolation linéaire recalcule un point manquant à l'instant <code>t</code> entre ses temps connus les plus proches <code>t1 &lt; t &lt; t2</code> : <code>x(t) = x1 + (x2 − x1)·(t − t1)/(t2 − t1)</code>. Puis un score de qualité par vidéo — <code>0.3·hors_cadre + 0.7·instabilité</code> (instabilité = RMS des vitesses discrètes des points, normalisé) — ne conserve que les vidéos au-dessus de 0,4. Après nettoyage : 4 000 à 11 000 frames par classe.",
          en:"Missing landmarks: detection confidence too low (set to <code>None</code>), occlusions, out of frame. A linear interpolation function recomputes a missing point at time <code>t</code> between its nearest known times <code>t1 &lt; t &lt; t2</code>: <code>x(t) = x1 + (x2 − x1)·(t − t1)/(t2 − t1)</code>. Then a per-video quality score — <code>0.3·out_of_bounds + 0.7·instability</code> (instability = RMS of the landmarks' discrete velocities, normalised) — keeps only videos above 0.4. After cleaning: 4,000 to 11,000 frames per class." } },
        { type:"gallery", items:[
          { src:"img/human-motion-analysis/landmark-errors-1.jpg", caption:{ fr:"Points clés manquants", en:"Missing landmarks" } },
          { src:"img/human-motion-analysis/landmark-errors-2.jpg", caption:{ fr:"L'interpolation peut amplifier certaines erreurs", en:"Interpolation can magnify some errors" } }
        ] },

        { type:"h2", text:{ fr:"Normalisation", en:"Normalisation" } },
        { type:"p", text:{
          fr:"Les coordonnées MediaPipe sont relatives à la vidéo affichée — inexploitables pour une étude fine du mouvement. On construit un repère invariant par translation et par rotation (d'après Vemulapalli et al., 2014) : origine au centre des hanches ; longueur du torse (centre hanches → centre épaules) fixée à 1 ; axe x = épaule droite → épaule gauche ; z = x ∧ axe du torse ; y = x ∧ z ; les signes des axes sont revérifiés pour que y pointe vers la tête et z vers la personne. Les points sont ensuite tournés dans ce repère unifié.",
          en:"MediaPipe coordinates are relative to the displayed video — unusable for a detailed study of movement. We build a translation- and rotation-invariant frame (after Vemulapalli et al., 2014): origin at the hip centre; torso length (hip centre → shoulder centre) set to 1; x-axis = right shoulder → left shoulder; z = x × torso axis; y = x × z; axis signs re-checked so y points to the head and z toward the person. The points are then rotated into this unified frame." } },
        { type:"p", text:{
          fr:"Les erreurs de MediaPipe se propagent dans le repère calculé → coordonnées bruitées. On ajoute donc, par frame, des features supplémentaires : angles entre triplets de points (hanche-genou-cheville…) et distances (tête-épaule, hanche-cheville…).",
          en:"MediaPipe errors propagate into the computed frame → noisy coordinates. So per-frame extra features are added: angles between landmark triplets (hip-knee-ankle…) and distances (head-shoulder, hip-ankle…)." } },

        { type:"h2", text:{ fr:"Classification de l'exercice", en:"Exercise classification" } },
        { type:"p", text:{
          fr:"Classer des frames ou des vidéos entières ? Le faible volume de données a d'abord poussé vers la frame, via PointNet (Qi et al., 2017) : il prend un ensemble non ordonné de points de R³, traite chaque point par des MLP partagés, agrège par un max-pooling symétrique, et ajoute des modules « T-Net » pour un alignement affine appris (invariance rotation / translation).",
          en:"Classify frames or whole videos? The small data volume first pushed toward frames, via PointNet (Qi et al., 2017): it takes an unordered set of points in R³, processes each point with shared MLPs, aggregates with a symmetric max-pooling, and adds \"T-Net\" modules for a learned affine alignment (rotation / translation invariance)." } },
        { type:"img", src:"img/human-motion-analysis/pointnet-architecture.png",
          caption:{ fr:"Architecture du modèle PointNet.", en:"Architecture of the PointNet model." } },
        { type:"p", text:{
          fr:"Mais le nuage de points d'une pose humaine est trop épars et bruité, et les frames de fin de répétition se ressemblent d'un exercice à l'autre. L'entraînement n'a jamais décollé, même en descendant à 4 classes et en empêchant des frames d'une même vidéo d'être à la fois dans le train et le test.",
          en:"But a human pose's point cloud is too sparse and noisy, and end-of-rep frames look alike across exercises. Training never took off, even after dropping to 4 classes and preventing frames from the same video appearing in both train and test." } },
        { type:"p", text:{
          fr:"Bascule vers une classification au niveau vidéo → bien moins de données → modèles plus simples (MLP, CNN-1D). Chaque vidéo : 10 frames échantillonnées à intervalles réguliers ; les points clés et angles de chaque frame réduits à la dimension 3 par PCA (meilleur compromis) → vecteur d'entrée de dimension 30. Un petit MLP (une couche cachée de 100) dépasse 80 % à l'entraînement ; un CNN-1D (deux couches de convolution 10→5→2 frames par max-pooling, puis deux couches denses de 128, 4 classes) atteint plus de 90 % de précision et est conservé.",
          en:"Switch to video-level classification → far less data → simpler models (MLP, 1D-CNN). Each video: 10 frames sampled at regular intervals; each frame's landmarks and angles reduced to dimension 3 by PCA (best compromise) → a 30-dim input vector. A small MLP (one hidden layer of 100) exceeds 80% on training; a 1D-CNN (two convolution layers 10→5→2 frames via max-pooling, then two dense layers of 128, 4 classes) reaches over 90% accuracy and is kept." } },
        { type:"gallery", items:[
          { src:"img/human-motion-analysis/learning-curves.png", caption:{ fr:"Courbes d'apprentissage du CNN-1D final", en:"Learning curves of the final 1D-CNN" } },
          { src:"img/human-motion-analysis/class-split.png", caption:{ fr:"Répartition des classes train / test", en:"Class split, train / test" } }
        ] },
        { type:"p", text:{
          fr:"La classification par clips (vote majoritaire sur des sous-séquences de longueur fixe) n'a pas fait mieux : elle ajoute des données d'entraînement bruitées (les temps morts entre deux répétitions).",
          en:"Clip-level classification (majority vote over fixed-length sub-sequences) did no better: it adds noisy training data (the idle time between two repetitions)." } },
        { type:"gallery", items:[
          { src:"img/human-motion-analysis/tsne-videos.png", caption:{ fr:"t-SNE des données vidéo", en:"t-SNE of the video data" } },
          { src:"img/human-motion-analysis/tsne-sequences.png", caption:{ fr:"t-SNE des séquences", en:"t-SNE of the sequences" } }
        ] },

        { type:"h2", text:{ fr:"Détection des répétitions et notation", en:"Repetition detection and scoring" } },
        { type:"h3", text:{ fr:"Détecter les répétitions", en:"Detecting repetitions" } },
        { type:"p", text:{
          fr:"Pour chaque exercice, un point clé oscille le long d'un axe choisi (pompes : la main sur l'axe z, maximum bras tendus, minimum bras pliés). La classe <code>ExerciseClasses</code> stocke, par exercice, ce point, son axe et l'extremum qui démarre une répétition. Le signal est lissé par un filtre de Savitzky-Golay (passe-bas, préserve amplitude / vitesse / accélération) ; les min/max globaux donnent l'amplitude ; <code>scipy.signal.find_peaks</code> avec un <code>min_dist</code> (une pompe ne peut pas durer moins d'une seconde ≈ 30 frames) trouve les extrema locaux ; on ne garde que ceux à moins de ~35 % de l'amplitude globale.",
          en:"For each exercise, one landmark oscillates along a chosen axis (push-ups: the hand on the z-axis, max when arms are extended, min when bent). The <code>ExerciseClasses</code> class stores, per exercise, that landmark, its axis and the extremum that starts a rep. The signal is smoothed with a Savitzky-Golay filter (low-pass, preserves amplitude / velocity / acceleration); global min/max give the amplitude; <code>scipy.signal.find_peaks</code> with a <code>min_dist</code> (a push-up can't take less than a second ≈ 30 frames) finds local extrema; only those within ~35% of the global amplitude are kept." } },
        { type:"img", src:"img/human-motion-analysis/rep-detection.png",
          caption:{ fr:"Position du point 15 (main gauche) sur l'axe z pendant une série de pompes, signal original et lissé, pics détectés.", en:"Position of landmark 15 (left hand) on the z-axis during a set of push-ups: raw and smoothed signal, detected peaks." } },
        { type:"h3", text:{ fr:"Synchroniser avec une référence", en:"Synchronising with a reference" } },
        { type:"p", text:{
          fr:"On aligne une répétition de référence, exécutée correctement, sur celle de l'utilisateur avec le Dynamic Time Warping (Kapica, 2019) : le DTW aligne deux séries de longueurs différentes en dilatant, compressant ou suspendant le temps, en cherchant le chemin monotone de <code>(0,0)</code> à <code>(N,M)</code> qui minimise <code>Σ ‖s1[i] − s2[j]‖</code>. On compare les vitesses d'exécution des répétitions (plus robuste que les positions).",
          en:"A correctly-performed reference repetition is aligned onto the user's with Dynamic Time Warping (Kapica, 2019): DTW aligns two series of different lengths by dilating, compressing or pausing time, finding the monotone path from <code>(0,0)</code> to <code>(N,M)</code> minimising <code>Σ ‖s1[i] − s2[j]‖</code>. The rep execution speeds are compared (more robust than positions)." } },
        { type:"gallery", items:[
          { src:"img/human-motion-analysis/matching-euclidean.png", caption:{ fr:"Appariement euclidien", en:"Euclidean matching" } },
          { src:"img/human-motion-analysis/matching-dtw.png", caption:{ fr:"Appariement par Dynamic Time Warping", en:"Dynamic Time Warping matching" } }
        ] },
        { type:"gallery", items:[
          { src:"img/human-motion-analysis/sync-video.jpg", caption:{ fr:"Référence et test synchronisés — vidéo", en:"Reference and test synchronised — video" } },
          { src:"img/human-motion-analysis/sync-skeleton.jpg", caption:{ fr:"Référence et test synchronisés — squelette", en:"Reference and test synchronised — skeleton" } }
        ] },
        { type:"h3", text:{ fr:"La métrique de notation", en:"The grading metric" } },
        { type:"p", text:{
          fr:"La similarité cosinus des positions de points s'est révélée trop sensible au bruit de MediaPipe (une petite erreur de normalisation décale tout le squelette) ; pondérer les points par importance n'a pas suffi. Solution retenue : la similarité cosinus d'un ensemble d'angles articulaires (coude, genou, pied…) — assez robuste pour donner des scores voisins au même mouvement filmé sous deux angles. Affinage : angles pondérés par exercice, puis somme des écarts d'angles pondérés au carré dans une exponentielle négative (bonne discrimination bon / mauvais), puis sigmoïde décentrée → score entre 0 et 1.",
          en:"Cosine similarity of landmark positions proved too sensitive to MediaPipe noise (a small normalisation error shifts the whole skeleton); weighting landmarks by importance wasn't enough. The chosen solution: cosine similarity of a set of joint angles (elbow, knee, foot…) — robust enough to give close scores for the same movement filmed from two angles. Refinement: angles weighted per exercise, then the sum of weighted squared angle differences inside a negative exponential (good / poor separation), then an off-centre sigmoid → a 0–1 score." } },

        { type:"h2", text:{ fr:"Résultats et conclusion", en:"Results and conclusion" } },
        { type:"p", text:{
          fr:"Un pipeline fonctionnel de classification et de notation. Classification : le CNN-1D dépasse 90 % sur le test, avec une matrice de confusion propre et quatre classes bien séparées — encourageant vu le peu de données. Détection des répétitions : l'approche par oscillation caractéristique + lissage Savitzky-Golay donne un comptage cohérent sur des vidéos réelles. Notation : DTW + comparaison d'angles articulaires distingue les mouvements corrects des exécutions incomplètes ou fautives.",
          en:"A working classification-and-scoring pipeline. Classification: the 1D-CNN exceeds 90% on the test set, with a clean confusion matrix and four well-separated classes — encouraging given how little data there is. Repetition detection: the characteristic-oscillation approach + Savitzky-Golay smoothing gives consistent counting on real videos. Scoring: DTW + joint-angle comparison distinguishes correct movements from incomplete or faulty ones." } },
        { type:"p", text:{
          fr:"Limites : tout dépend de la qualité des points MediaPipe (erreurs de détection, parties hors champ, z imprécis en vue unique), qui se propage dans la normalisation et le calcul d'angles — c'est en grande partie ce qui a fait échouer PointNet. Peu d'exercices couverts ; les mouvements similaires ou statiques restent difficiles à distinguer. La notation repose sur de nombreux paramètres réglés à la main par exercice, ce qui limite la généricité.",
          en:"Limitations: everything depends on MediaPipe landmark quality (detection errors, out-of-frame parts, imprecise z from a single view), which propagates into normalisation and angle computation — largely what made PointNet fail. Few exercises covered; similar or static movements stay hard to tell apart. Scoring relies on many hand-tuned per-exercise parameters, which limits genericity." } },
        { type:"p", text:{
          fr:"Suite envisagée : un pipeline « live » (séance filmée à la webcam plutôt que des vidéos par série), qui demanderait de détecter les temps morts entre séries, une classification en temps réel avant tout comptage, et un calcul bien plus rapide.",
          en:"Envisaged next step: a \"live\" pipeline (a webcam session rather than per-set videos), which would require detecting the idle time between sets, real-time classification before any counting, and much faster computation." } }
      ] },

    { slug: "social-media-classification", icon: "💬", year: "2025",
      when: { fr: "Sept. — Déc. 2025", en: "Sept. — Dec. 2025" },
      title: { fr: "Classer les utilisateurs de X : influenceurs ou observateurs", en: "Classifying X Users: Influencers vs Observers" },
      summary: { fr: "Data challenge Kaggle : prédire si un compte X est un influenceur ou un observateur, à partir des métadonnées et du texte des tweets.",
                 en: "A Kaggle data challenge: predict whether an X account is an influencer or an observer, from tweet metadata and text." },
      tags: ["PyTorch","BERTweet","CamemBERT","XGBoost","Transformers","Integrated Gradients","TF-IDF","t-SNE"],
      body: [
        { type:"h2", text:{ fr:"Le défi", en:"The challenge" } },
        { type:"p", text:{
          fr:"Data challenge Kaggle : prédire si un compte X est un influenceur (1) ou un observateur (0), à partir de 154 914 tweets d'entraînement au format JSON (192 colonnes) et de 103 380 tweets de validation non étiquetés. La donnée la plus évidente — le nombre de followers — avait été retirée du jeu. Projet en binôme (MP3,5 — Roman Lendormy, Arthur Buis).",
          en:"A Kaggle data challenge: predict whether an X account is an influencer (1) or an observer (0), from 154,914 training tweets in JSON (192 columns) and 103,380 unlabelled validation tweets. The most obvious signal — follower count — had been removed from the data. A pair project (MP3,5 — Roman Lendormy, Arthur Buis)." } },

        { type:"h2", text:{ fr:"Ingénierie des variables", en:"Feature engineering" } },
        { type:"p", text:{
          fr:"Nettoyage : suppression de 48 colonnes constantes ; fusion de chaque champ principal avec son équivalent dans <code>extended_tweet</code> (par ex. <code>full_text</code>). Le champ <code>user</code> porte le signal le plus fort. On retient <code>user.favourites_count</code>, <code>user.listed_count</code> et <code>user.statuses_count</code> — chacun présente deux distributions selon le label, sur des plages très différentes, d'où l'usage de leur logarithme.",
          en:"Cleaning: dropped 48 constant columns; merged each primary field with its <code>extended_tweet</code> counterpart (e.g. <code>full_text</code>). The <code>user</code> field carries the strongest signal. We keep <code>user.favourites_count</code>, <code>user.listed_count</code> and <code>user.statuses_count</code> — each shows two label-dependent distributions over very different ranges, hence taking their logarithm." } },
        { type:"gallery", items:[
          { src:"img/social-media-classification/feat-listed-count.png", caption:{ fr:"user.listed_count par label", en:"user.listed_count by label" } },
          { src:"img/social-media-classification/feat-statuses-count.png", caption:{ fr:"user.statuses_count par label", en:"user.statuses_count by label" } },
          { src:"img/social-media-classification/feat-favourites-count.png", caption:{ fr:"user.favourites_count par label", en:"user.favourites_count by label" } }
        ] },
        { type:"p", text:{
          fr:"Ajout de drapeaux binaires (<code>geo_enabled</code>, <code>profile_use_background_image</code>, <code>default_profile</code>, <code>profile_background_tile</code>) et d'un champ construit <code>all_user_mentions_count</code>.",
          en:"Added binary flags (<code>geo_enabled</code>, <code>profile_use_background_image</code>, <code>default_profile</code>, <code>profile_background_tile</code>) and a built field <code>all_user_mentions_count</code>." } },
        { type:"gallery", items:[
          { src:"img/social-media-classification/feat-geo-enabled.png", caption:{ fr:"geo_enabled", en:"geo_enabled" } },
          { src:"img/social-media-classification/feat-background-image.png", caption:{ fr:"profile_use_background_image", en:"profile_use_background_image" } },
          { src:"img/social-media-classification/feat-default-profile.png", caption:{ fr:"default_profile", en:"default_profile" } },
          { src:"img/social-media-classification/feat-background-tile.png", caption:{ fr:"profile_background_tile", en:"profile_background_tile" } }
        ] },
        { type:"p", text:{
          fr:"<code>quoted_status</code> s'est révélé peu corrélé, mais on garde <code>quoted_status.favorite_count</code> et <code>quoted_status.user.favorites_count</code> (en log). Le champ <code>source</code> → one-hot partiel : encodage complet des clients dominants (iPhone, Android, iPad, TweetDeck, Hootsuite), puis <code>other_1</code> / <code>other_0</code> pour regrouper les sources mineures selon leur label majoritaire. <code>entities.media</code> → <code>has_photo</code> / <code>has_video</code> / <code>has_gif</code> ; <code>entities.hashtags</code> → one-hot des 20 hashtags les plus fréquents.",
          en:"<code>quoted_status</code> turned out weakly correlated, but we keep <code>quoted_status.favorite_count</code> and <code>quoted_status.user.favorites_count</code> (log). The <code>source</code> field → partial one-hot: full encoding of the dominant clients (iPhone, Android, iPad, TweetDeck, Hootsuite), then <code>other_1</code> / <code>other_0</code> to bucket minor sources by their majority label. <code>entities.media</code> → <code>has_photo</code> / <code>has_video</code> / <code>has_gif</code>; <code>entities.hashtags</code> → one-hot of the 20 most frequent hashtags." } },
        { type:"gallery", items:[
          { src:"img/social-media-classification/media-photo.png", caption:{ fr:"Tweet avec photo", en:"Tweet with a photo" } },
          { src:"img/social-media-classification/media-video.png", caption:{ fr:"Tweet avec vidéo", en:"Tweet with a video" } },
          { src:"img/social-media-classification/media-gif.png", caption:{ fr:"Tweet avec GIF animé", en:"Tweet with an animated GIF" } }
        ] },
        { type:"p", text:{
          fr:"Élagage des variables avec Integrated Gradients (on fait varier une variable pour mesurer l'impact sur la prédiction) : on retire les variables redondantes ou sans effet, dont beaucoup d'encodages de hashtags.",
          en:"Feature pruning with Integrated Gradients (perturb a feature to measure its effect on the prediction): redundant or no-effect features are dropped, including many hashtag encodings." } },
        { type:"img", src:"img/social-media-classification/feature-importances.png",
          caption:{ fr:"Importance des variables, estimée par Integrated Gradients sur le modèle transformer.", en:"Feature importances, estimated by Integrated Gradients on the transformer model." } },
        { type:"h3", text:{ fr:"Reconstituer le nombre de followers", en:"Reconstructing follower count" } },
        { type:"p", text:{
          fr:"<code>user.created_at</code> (précision à la milliseconde) fait une clé quasi unique par utilisateur — moins de 1 % de collisions dans le train, aucune avec le label. Une tentative de récupérer le nombre de followers via <code>quoted_status.user.created_at</code> ne couvre qu'environ 1 % du jeu (non utilisée directement). Mais regrouper les tweets par <code>user.created_at</code> identifie les tweets d'un même utilisateur : moyenner leurs prédictions en sortie de modèle gagne +0,05 % avec BERTweet.",
          en:"<code>user.created_at</code> (millisecond precision) makes a near-unique per-user key — under 1% collisions in the training set, none with the label. An attempt to recover follower counts via <code>quoted_status.user.created_at</code> only covers about 1% of the data (not used directly). But grouping tweets by <code>user.created_at</code> identifies a single user's tweets: averaging their predictions at model output gains +0.05% with BERTweet." } },
        { type:"h3", text:{ fr:"Ce que les encodeurs de texte capturent vraiment", en:"What the text encoders actually capture" } },
        { type:"p", text:{
          fr:"PCA et t-SNE sur les embeddings CLS d'un BERTweet affiné, séparément pour <code>user.description</code> et <code>full_text</code>. La description sépare nettement les classes ; le texte du tweet non — d'où le choix de la description pour les modèles textuels.",
          en:"PCA and t-SNE on the CLS embeddings of a fine-tuned BERTweet, separately for <code>user.description</code> and <code>full_text</code>. The description separates the classes cleanly; the tweet text does not — hence choosing the description for the text models." } },
        { type:"gallery", items:[
          { src:"img/social-media-classification/pca-user-description.png", caption:{ fr:"PCA — user.description (nette séparation)", en:"PCA — user.description (clean separation)" } },
          { src:"img/social-media-classification/tsne-user-description.png", caption:{ fr:"t-SNE — user.description", en:"t-SNE — user.description" } },
          { src:"img/social-media-classification/pca-full-text.png", caption:{ fr:"PCA — full_text (pas de séparation)", en:"PCA — full_text (no separation)" } },
          { src:"img/social-media-classification/tsne-full-text.png", caption:{ fr:"t-SNE — full_text", en:"t-SNE — full_text" } }
        ] },

        { type:"h2", text:{ fr:"Modèles de base", en:"Baselines" } },
        { type:"ul", items:[
          { fr:"TF-IDF (unigrammes / bigrammes) + régression logistique : 62,6 % en validation croisée, 53,8 % sur Kaggle — surapprentissage des variables lexicales.",
            en:"TF-IDF (unigrams / bigrams) + logistic regression: 62.6% cross-validation, 53.8% on Kaggle — overfitting the lexical features." },
          { fr:"Régression logistique sur la PCA (50 composantes) des embeddings BERTweet affinés : 0,92 en validation sur <code>user.description</code> mais 66,8 % sur Kaggle — meilleur que TF-IDF, mais toujours du surapprentissage.",
            en:"Logistic regression on the 50-component PCA of fine-tuned BERTweet embeddings: 0.92 validation on <code>user.description</code> but 66.8% on Kaggle — better than TF-IDF, still overfitting." },
          { fr:"CNN texte seul (tokenizer Keras, embeddings 128-d, convolution 1D, dropout 0,5) : 0,65 en validation, 63,8 % sur Kaggle, surapprend en 3 epochs.",
            en:"Text-only CNN (Keras tokenizer, 128-d embeddings, 1D convolution, dropout 0.5): 0.65 validation, 63.8% on Kaggle, overfits in 3 epochs." }
        ] },

        { type:"h2", text:{ fr:"Modèles transformer", en:"Transformer models" } },
        { type:"p", text:{
          fr:"v1 — couche d'embedding + positional encoding + couches encodeur de PyTorch, tokenisation manuelle (mot ou emoji, seuls les plus fréquents). Surapprend au-delà de 2 epochs : 150 000 tweets ne suffisent pas à un vocabulaire représentatif. Une grid search (learning rate, dimensions cachées, têtes d'attention, couches, epochs, taille du vocabulaire) atteint 79,3 % sur Kaggle.",
          en:"v1 — embedding layer + positional encoding + PyTorch encoder layers, manual tokenisation (word or emoji, only the most frequent). Overfits past 2 epochs: 150,000 tweets aren't enough for a representative vocabulary. A grid search (learning rate, hidden dims, attention heads, layers, epochs, vocab size) reaches 79.3% on Kaggle." } },
        { type:"p", text:{
          fr:"v2 — encodeur pré-entraîné. Après BERT et BERTweet, CamemBERT (adapté au français) l'emporte. Architecture : encodeur de texte → embeddings ; sous-réseau (2 couches linéaires + dropout) sur les variables numériques ; concaténation ; classifieur à 3 couches. 111 M de paramètres → entraînement en deux phases : phase 1, BERT gelé (warm-up des couches métadonnées et finale, avec scheduler) ; phase 2, dégel des deux dernières couches de BERT, learning rates différents par groupe. → 83,4 % avec BERTweet, 84,0 % avec CamemBERT (~40 min).",
          en:"v2 — pre-trained encoder. After BERT and BERTweet, CamemBERT (better for French) wins. Architecture: text encoder → embeddings; a subnet (2 linear layers + dropout) on the numeric features; concatenation; a 3-layer classifier. 111M parameters → two-phase training: phase 1, BERT frozen (warm-up of the metadata and final layers, with a scheduler); phase 2, unfreeze BERT's last two layers, different learning rates per group. → 83.4% with BERTweet, 84.0% with CamemBERT (~40 min)." } },
        { type:"p", text:{
          fr:"La phase 2 surapprend au-delà d'un epoch : sur un découpage aléatoire, le modèle surapprend la validation (appariements sur les métadonnées) ; sur un découpage sans utilisateur commun, il surapprend le train et l'accuracy de validation stagne.",
          en:"Phase 2 overfits past one epoch: on a random split, the model overfits validation (matching on metadata); on a user-disjoint split, it overfits the training set and validation accuracy stagnates." } },
        { type:"img", src:"img/social-media-classification/overfitting-phase2.png",
          caption:{ fr:"Surapprentissage en phase 2 : courbes d'apprentissage du transformer v2.", en:"Phase-2 overfitting: learning curves of transformer v2." } },
        { type:"p", text:{
          fr:"v3 — DualBERT : deux encodeurs CamemBERT séparés pour <code>user.description</code> et <code>full_text</code>, sous-réseau métadonnées, tête à 3 couches. 222 M de paramètres, entraînement en trois phases. Jusqu'à 83,9 % sur Kaggle, mais ~3 h d'entraînement et aucun gain réel → on garde la v2 (description seule) pour la soumission finale.",
          en:"v3 — DualBERT: two separate CamemBERT encoders for <code>user.description</code> and <code>full_text</code>, a metadata subnet, a 3-layer head. 222M parameters, three-phase training. Up to 83.9% on Kaggle, but ~3 h of training and no real gain → we keep v2 (description only) for the final submission." } },

        { type:"h2", text:{ fr:"XGBoost", en:"XGBoost" } },
        { type:"p", text:{
          fr:"En parallèle, un modèle de boosting d'arbres — bien adapté au mélange de variables numériques, catégorielles et textuelles. Prise en main sur une version réduite du jeu (texte, date de création du compte, description) avec TF-IDF + grid search → 0,785. Jeu complet sans texte → ~0,83 ; ajouter le texte via BERT / BERTweet n'aide pas (modèles anglais), CamemBERT (768-d pour le texte et la description) gagne quelques millièmes. Même surapprentissage par fuite d'utilisateurs ; le découpage sans utilisateur commun ne relève pas le score Kaggle. Validation croisée à 5 plis : 0,83–0,84 par pli, score global ≤ 0,83.",
          en:"In parallel, a tree-boosting model — well suited to the mix of numeric, categorical and textual features. Warm-up on a stripped-down dataset (text, account creation date, description) with TF-IDF + grid search → 0.785. Full feature set without text → ~0.83; adding text via BERT / BERTweet doesn't help (English models), CamemBERT (768-d for tweet text and description) gains a few thousandths. Same user-leak overfitting; the user-disjoint split doesn't lift the Kaggle score. 5-fold cross-validation: 0.83–0.84 per fold, overall ≤ 0.83." } },

        { type:"h2", text:{ fr:"Assemblage final et résultats", en:"Final blend and results" } },
        { type:"p", text:{
          fr:"Moyenne des probabilités des deux modèles finaux (transformer CamemBERT et XGBoost), puis moyenne par utilisateur (identifié via <code>user.created_at</code>) → score final de 84,2 % sur Kaggle.",
          en:"Averaging the probabilities of the two final models (CamemBERT transformer and XGBoost), then averaging per user (identified via <code>user.created_at</code>) → a final Kaggle score of 84.2%." } },
        { type:"table",
          head:[ { fr:"Approche", en:"Approach" }, { fr:"Validation", en:"Validation" }, "Kaggle" ],
          rows:[
            [ { fr:"TF-IDF + régression logistique", en:"TF-IDF + logistic regression" }, "62,6 %", "53,8 %" ],
            [ { fr:"Régression logistique sur PCA BERTweet (description)", en:"Logistic regression on BERTweet-PCA (description)" }, "0,92", "66,8 %" ],
            [ { fr:"CNN texte seul", en:"Text-only CNN" }, "0,65", "63,8 %" ],
            [ { fr:"Transformer maison + grid search", en:"Custom transformer + grid search" }, "79,5 %", "79,3 %" ],
            [ { fr:"Encodeur BERTweet + métadonnées (2 phases)", en:"BERTweet encoder + metadata (2-phase)" }, "—", "83,4 %" ],
            [ { fr:"Encodeur CamemBERT + métadonnées (2 phases)", en:"CamemBERT encoder + metadata (2-phase)" }, "—", "84,0 %" ],
            [ { fr:"DualBERT (description + full_text)", en:"DualBERT (description + full_text)" }, "—", "83,9 %" ],
            [ { fr:"XGBoost (variables complètes + texte CamemBERT)", en:"XGBoost (full features + CamemBERT text)" }, "0,83–0,84", "≤ 0,83" ],
            [ { fr:"Assemblage (transformer + XGBoost), moyenné par utilisateur", en:"Blend (transformer + XGBoost), per-user averaged" }, "—", "84,2 %" ]
          ] }
      ] },

    { slug: "similarity-graphs", icon: "🕸️", year: "2025",
      when: { fr: "Mars — Mai 2025", en: "Mar. — May 2025" },
      title: { fr: "Construction et analyse de graphes de similarité", en: "Construction and Analysis of Similarity Graphs" },
      summary: { fr: "Cartographier la scène du rap français comme un réseau, puis en étudier la structure.",
                 en: "Mapping the French hip-hop scene as a network, then studying its structure." },
      tags: ["NetworkX","Gephi","MongoDB","Louvain","Word2Vec","NLP","Spotify API","Genius API"],
      body: [
        { type:"h2", text:{ fr:"Introduction", en:"Introduction" } },
        { type:"p", text:{
          fr:"Les plateformes de streaming tracent chacune de nos écoutes pour nourrir des algorithmes de recommandation très fins. Mais peut-on établir des similarités entre artistes sans cette masse de données ? Le rap s'y prête bien : les collaborations (« featurings ») y sont devenues la norme, formant des communautés denses, plus faciles à cartographier que celles du rock ou de la variété.",
          en:"Streaming platforms track every listen to feed very sharp recommendation algorithms. But can artistic similarity be established without that mass of data? Rap lends itself well: collaborations (\"features\") have become the norm, forming dense communities that are easier to map than those of rock or pop." } },
        { type:"p", text:{
          fr:"Projet en binôme (modal CSC_43M02_EP, École Polytechnique). L'objectif : mettre en graphe les collaborations du rap francophone, en extraire des structures pertinentes — communautés, nœuds à forte centralité — puis analyser le contenu lexical des textes via des embeddings NLP. Code : <a href=\"https://github.com/bpmarthur/Modal_Project\" target=\"_blank\" rel=\"noopener\">github.com/bpmarthur/Modal_Project</a>.",
          en:"A pair project (CSC_43M02_EP research module, École Polytechnique). The goal: turn French-speaking rap collaborations into graphs, extract meaningful structure — communities, high-centrality nodes — then analyse the lyrics through NLP embeddings. Code: <a href=\"https://github.com/bpmarthur/Modal_Project\" target=\"_blank\" rel=\"noopener\">github.com/bpmarthur/Modal_Project</a>." } },
        { type:"img", src:"img/similarity-graphs/collaboration-graph.jpg",
          caption:{ fr:"Graphe des collaborations, coloré par communauté (Louvain), taille des nœuds ∝ betweenness centrality.",
                    en:"Collaboration graph, coloured by community (Louvain), node size ∝ betweenness centrality." } },

        { type:"h2", text:{ fr:"Récupération des données", en:"Data collection" } },
        { type:"p", text:{
          fr:"Quatre sources ont été combinées : l'API Spotify (recherche par genre, popularité, nombre de followers), le site Genius (paroles et listes de collaborations quasi exhaustives, via son API), Last.fm (score de similarité fondé sur les écoutes réelles — plus de 300 milliards d'écoutes — pour servir de point de comparaison) et MusicBrainz (pour étendre la liste d'artistes).",
          en:"Four sources were combined: the Spotify API (genre search, popularity, follower counts), Genius (lyrics and near-exhaustive collaboration lists, via its API), Last.fm (a similarity score built from real listens — over 300 billion scrobbles — used as a point of comparison) and MusicBrainz (to extend the artist list)." } },
        { type:"h3", text:{ fr:"Stockage", en:"Storage" } },
        { type:"p", text:{
          fr:"Chaque artiste porte des métadonnées hétérogènes et un embedding de paroles à 300 dimensions. Une base MongoDB (NoSQL) a été retenue pour sa souplesse sur des données hétérogènes et ses requêtes rapides, sans avoir à tout charger en mémoire.",
          en:"Each artist carries heterogeneous metadata plus a 300-dimensional lyrics embedding. A MongoDB (NoSQL) store was chosen for its flexibility with heterogeneous data and fast queries, without loading everything into memory." } },
        { type:"img", src:"img/similarity-graphs/mongodb-document.png",
          caption:{ fr:"Exemple de document artiste : followers et popularity viennent de Spotify, id_mb est l'identifiant MusicBrainz.",
                    en:"Example artist document: followers and popularity come from Spotify, id_mb is the MusicBrainz identifier." } },
        { type:"code", lang:"python", text:"def update_csv_to_mongo(db_name, filename=\"./data/db_artists_clean.csv\"):\n    \"\"\"Reload the artists collection from the cleaned CSV.\"\"\"\n    client = MongoClient(\"mongodb://localhost:27017/\")\n    collection = client[db_name][\"artists\"]\n    collection.delete_many({})                       # wipe existing documents\n    with open(filename, newline=None) as csvfile:\n        for row in csv.DictReader(csvfile):\n            collection.insert_one({\n                \"name\":       row[\"name\"],\n                \"id_spotify\": row[\"id_spotify\"],\n                \"followers\":  int(row[\"followers\"]),\n                \"popularity\": int(row[\"popularity\"]),\n                \"id_genius\":  int(row[\"id_genius\"]),\n                \"url_genius\": row[\"url_genius\"],\n                \"id_mb\":      row.get(\"id_mb\"),\n            })\n    client.close()" },
        { type:"h3", text:{ fr:"Artistes et featurings", en:"Artists and features" } },
        { type:"p", text:{
          fr:"Un premier ensemble d'environ 300 artistes a été constitué par recherche de genre sur Spotify, puis étendu via MusicBrainz (jusqu'à 800 résultats, mais très bruités). Un filtrage — identifiants Spotify et Genius présents, minimum de followers, au moins une collaboration connue — a fait converger la base vers 477 artistes.",
          en:"An initial set of about 300 artists was built by genre search on Spotify, then extended via MusicBrainz (up to 800 results, but very noisy). Filtering — Spotify and Genius IDs present, a minimum follower count, at least one known collaboration — converged the base to 477 artists." } },
        { type:"p", text:{
          fr:"L'appariement des identifiants Genius s'est révélé difficile : l'algorithme de recherche privilégie les artistes populaires proches de la requête et bute sur les apostrophes (Rim'K, Sexion d'Assaut). Un petit outil de désambiguïsation manuelle a été écrit pour ces cas.",
          en:"Matching Genius identifiers proved hard: the search favours popular artists close to the query and trips on apostrophes (Rim'K, Sexion d'Assaut). A small manual disambiguation tool was written for these cases." } },
        { type:"p", text:{
          fr:"Environ 16 700 featurings ont été extraits via l'API Genius ; en ne conservant que ceux reliant deux artistes de la base, dédoublonnés, il en reste 7 822 — largement assez pour un graphe pertinent.",
          en:"About 16,700 features were extracted via the Genius API; keeping only those linking two artists in the base, deduplicated, leaves 7,822 — more than enough for a meaningful graph." } },
        { type:"h3", text:{ fr:"Paroles et embeddings", en:"Lyrics and embeddings" } },
        { type:"p", text:{
          fr:"Les paroles ont été encodées avec Word2Bezbar-large, un modèle Word2Vec entraîné sur des textes de rap français (Rapminerz, 2024), qui projette dans un espace à 300 dimensions en capturant les particularités lexicales et stylistiques du genre. L'idée : relier deux artistes si la similarité cosinus de leurs embeddings dépasse un seuil, avec un poids d'arête proportionnel à cette similarité.",
          en:"Lyrics were encoded with Word2Bezbar-large, a Word2Vec model trained on French rap lyrics (Rapminerz, 2024), projecting into a 300-dimensional space that captures the genre's lexical and stylistic quirks. The idea: link two artists when the cosine similarity of their embeddings exceeds a threshold, with edge weight proportional to that similarity." } },

        { type:"h2", text:{ fr:"Construction des graphes", en:"Building the graphs" } },
        { type:"h3", text:{ fr:"Graphe des collaborations", en:"Collaboration graph" } },
        { type:"p", text:{
          fr:"Un nœud par artiste, une arête pondérée par le nombre de collaborations. Construction et nettoyage avec NetworkX, visualisation avec Gephi.",
          en:"One node per artist, an edge weighted by the number of collaborations. Built and cleaned with NetworkX, visualised with Gephi." } },
        { type:"h3", text:{ fr:"Nettoyage", en:"Cleaning" } },
        { type:"ul", items:[
          { fr:"Supprimer les nœuds isolés : inefficace — laisse les composantes à deux artistes et retire des artistes de périphérie utiles.",
            en:"Remove isolated nodes: ineffective — leaves two-artist components and strips useful peripheral artists." },
          { fr:"Supprimer les nœuds de faible degré : retire aussi des artistes importants ayant peu collaboré avec le cluster principal.",
            en:"Remove low-degree nodes: also removes important artists who collaborated little with the main cluster." },
          { fr:"Supprimer les petites composantes connexes (taille < 10) : méthode retenue — donne un graphe entièrement connexe d'artistes de rap francophone.",
            en:"Remove small connected components (size < 10): the method kept — yields a fully connected graph of French-speaking rap artists." }
        ] },
        { type:"h3", text:{ fr:"Statistiques", en:"Statistics" } },
        { type:"ul", items:[
          { fr:"358 nœuds, 3 955 arêtes", en:"358 nodes, 3,955 edges" },
          { fr:"Degré moyen de 22,09 — une vingtaine de collaborations par artiste", en:"Average degree 22.09 — around twenty collaborations per artist" },
          { fr:"Une seule composante connexe", en:"A single connected component" }
        ] },
        { type:"gallery", items:[
          { src:"img/similarity-graphs/hist-betweenness.png", caption:{ fr:"Betweenness centrality", en:"Betweenness centrality" } },
          { src:"img/similarity-graphs/hist-eigenvector.png", caption:{ fr:"Eigenvector centrality", en:"Eigenvector centrality" } },
          { src:"img/similarity-graphs/hist-degree.png", caption:{ fr:"Répartition des degrés", en:"Degree distribution" } }
        ] },
        { type:"h3", text:{ fr:"Détection de communautés", en:"Community detection" } },
        { type:"p", text:{
          fr:"L'algorithme de Louvain donne la partition la plus juste au regard du genre : six communautés.",
          en:"The Louvain algorithm gives the partition that best matches the genre: six communities." } },
        { type:"table",
          head:[ { fr:"Communauté", en:"Community" }, { fr:"Taille", en:"Size" }, { fr:"Description", en:"Description" }, { fr:"Exemples", en:"Examples" } ],
          rows:[
            [ { fr:"Rap urbain / mainstream", en:"Urban / mainstream rap" }, "110",
              { fr:"Sous-genre central du rap français : « rap mainstream » et « rap de rue ».", en:"The central sub-genre of French rap: \"mainstream\" and \"street\" rap." },
              "Booba, Kaaris, Sofiane, Koba LaD, Leto" ],
            [ { fr:"Scène marseillaise", en:"Marseille scene" }, "49",
              { fr:"Esthétique solaire, rythmée et dansante.", en:"A solar, up-tempo, danceable aesthetic." },
              "Jul, SCH, Naps, Alonzo" ],
            [ { fr:"Rap conscient", en:"Conscious rap" }, "70",
              { fr:"Grande diversité stylistique, attention portée aux textes.", en:"Wide stylistic range, close attention to the writing." },
              "Nekfeu, PLK, Alpha Wann, Vald, Laylow, S.Pri Noir" ],
            [ { fr:"Lyricistes", en:"Lyricists" }, "35",
              { fr:"Artistes attachés avant tout à l'écriture.", en:"Artists focused above all on the writing." },
              "Bigflo & Oli, Hugo TSR, Lucio Bukowski, Swift Guad, Demi Portion" ],
            [ { fr:"Old school (+ transition)", en:"Old school (+ transition)" }, "88",
              { fr:"Scène des années 90-2000, plus des artistes ayant fait le pont avec la nouvelle génération.", en:"The 1990s-2000s scene, plus artists who bridged to the new generation." },
              "Oxmo Puccino, Kery James, Seth Gueko, Rim'K, Orelsan, Gringe" ],
            [ { fr:"Alternatifs", en:"Alternative" }, "6",
              { fr:"Séparés du rap conscient par Louvain ; forte connexion interne (collectif rennais).", en:"Split from conscious rap by Louvain; strong internal connection (a Rennes collective)." },
              "Lorenzo, Lujipeka, Columbine, So La Lune" ]
          ] },
        { type:"gallery", items:[
          { src:"img/similarity-graphs/cluster-urbain.jpg", caption:{ fr:"Rap urbain / mainstream", en:"Urban / mainstream" } },
          { src:"img/similarity-graphs/cluster-marseille.jpg", caption:{ fr:"Scène marseillaise", en:"Marseille scene" } },
          { src:"img/similarity-graphs/cluster-conscient.jpg", caption:{ fr:"Rap conscient", en:"Conscious rap" } },
          { src:"img/similarity-graphs/cluster-lyricists.jpg", caption:{ fr:"Lyricistes", en:"Lyricists" } },
          { src:"img/similarity-graphs/cluster-oldschool.jpg", caption:{ fr:"Old school et transition", en:"Old school and transition" } },
          { src:"img/similarity-graphs/cluster-alternative.jpg", caption:{ fr:"Alternatifs", en:"Alternative" } }
        ] },
        { type:"h3", text:{ fr:"Graphe de similarité Last.fm", en:"Last.fm similarity graph" } },
        { type:"p", text:{
          fr:"Pour comparer avec des données d'écoute réelles : pour chaque artiste, ses 20 plus proches selon le score Last.fm, arête ajoutée si l'artiste similaire est dans la base ; composantes de taille < 5 retirées. On retrouve des versions élargies des clusters « urbain » et « conscient », un cluster proche du « old school », mais la scène marseillaise disparaît — elle se lit dans les collaborations, pas dans les goûts d'écoute.",
          en:"To compare against real listening data: for each artist, its 20 nearest by Last.fm score, an edge added when the similar artist is in the base; components of size < 5 removed. Enlarged versions of the \"urban\" and \"conscious\" clusters appear, plus one close to \"old school\", but the Marseille scene vanishes — it shows up in collaborations, not in listening taste." } },
        { type:"img", src:"img/similarity-graphs/lastfm-graph.jpg",
          caption:{ fr:"Graphe de similarité Last.fm, clusters Louvain, taille ∝ betweenness centrality.", en:"Last.fm similarity graph, Louvain clusters, size ∝ betweenness centrality." } },
        { type:"h3", text:{ fr:"Graphe des embeddings", en:"Embeddings graph" } },
        { type:"p", text:{
          fr:"Une arête si la similarité cosinus dépasse un seuil, avec un poids <code>(similarité − seuil) / (1 − seuil)</code>. Problème : la majorité des similarités dépassent 0,9 — difficile de discriminer les artistes. Le seuil a été monté à 0,98 pour obtenir un graphe lisible ; après retrait des composantes < 5, il ne reste que 275 nœuds (~40 % perdus).",
          en:"An edge when cosine similarity exceeds a threshold, with weight <code>(similarity − threshold) / (1 − threshold)</code>. Problem: most similarities exceed 0.9 — artists are hard to tell apart. The threshold was raised to 0.98 for a readable graph; after removing components < 5, only 275 nodes remain (~40% lost)." } },
        { type:"gallery", items:[
          { src:"img/similarity-graphs/cosine-distribution.png", caption:{ fr:"Similarités cosinus entre artistes", en:"Cosine similarities between artists" } },
          { src:"img/similarity-graphs/edge-weight-distribution.png", caption:{ fr:"Poids des arêtes après seuil à 0,98", en:"Edge weights after the 0.98 threshold" } }
        ] },
        { type:"img", src:"img/similarity-graphs/embeddings-graph.jpg",
          caption:{ fr:"Graphe des embeddings, clusters Louvain, taille ∝ betweenness centrality.", en:"Embeddings graph, Louvain clusters, size ∝ betweenness centrality." } },

        { type:"h2", text:{ fr:"Résultats et interprétation", en:"Results and interpretation" } },
        { type:"h3", text:{ fr:"Les communautés de collaboration", en:"The collaboration communities" } },
        { type:"p", text:{
          fr:"Le graphe des collaborations restitue fidèlement les sous-genres et les six étiquettes tiennent. Une poignée d'artistes tombent dans un cluster qui ne leur correspond pas tout à fait (Bigflo & Oli, Luidji, Krisy) : casser les codes fait partie des valeurs du rap, ce qui se traduit par un graphe très connecté et des frontières floues.",
          en:"The collaboration graph faithfully reproduces the sub-genres and the six labels hold. A handful of artists land in a cluster that doesn't quite fit them (Bigflo & Oli, Luidji, Krisy): breaking genre codes is part of rap's value system, which shows up as a very connected graph with blurred borders." } },
        { type:"h3", text:{ fr:"L'évolution du rap dans le temps", en:"How rap evolved over time" } },
        { type:"p", text:{
          fr:"En dimensionnant les nœuds par le degré plutôt que par la centralité, deux dynamiques apparaissent pour les clusters « old school » et « mainstream ». À gauche du cluster old school, les artistes plus anciens ont un degré plus faible : les collaborations étaient rares il y a vingt ans. À droite (Rim'K, Oxmo Puccino, Orelsan), les artistes ont beaucoup collaboré avec la scène émergente.",
          en:"Sizing nodes by degree rather than centrality reveals two dynamics for the \"old school\" and \"mainstream\" clusters. On the left of the old-school cluster, older artists have lower degree: collaborations were rare twenty years ago. On the right (Rim'K, Oxmo Puccino, Orelsan), artists collaborated heavily with the emerging scene." } },
        { type:"p", text:{
          fr:"Le degré est fortement corrélé à la centralité (Alonzo, Jul, Leto). Mais Booba détient la plus forte betweenness de son cluster avec bien moins de featurings que Leto : occuper une position de pont ne demande pas forcément beaucoup de collaborations.",
          en:"Degree correlates strongly with centrality (Alonzo, Jul, Leto). But Booba holds the highest betweenness in his cluster with far fewer features than Leto: holding a bridge position doesn't necessarily require many collaborations." } },
        { type:"img", src:"img/similarity-graphs/leto-vs-booba.png",
          caption:{ fr:"Booba vs Leto : centralité comparable, nombre de collaborations très différent.", en:"Booba vs Leto: comparable centrality, very different collaboration counts." } },
        { type:"p", text:{
          fr:"Certains artistes apparaissent comme plusieurs nœuds : ils appartiennent à des groupes classés dans d'autres clusters. Orelsan et Gringe sont en « old school », mais leur duo Casseurs Flowteurs est en « rap conscient » ; Booba est en « mainstream », son duo avec Ali en « old school ».",
          en:"Some artists appear as several nodes: they belong to groups placed in other clusters. Orelsan and Gringe sit in \"old school\", but their duo Casseurs Flowteurs is in \"conscious rap\"; Booba is in \"mainstream\", his duo with Ali in \"old school\"." } },
        { type:"h3", text:{ fr:"Last.fm et embeddings, mis en regard", en:"Last.fm and embeddings, compared" } },
        { type:"p", text:{
          fr:"Le graphe Last.fm brouille la frontière urbain / conscient — les auditeurs ne se limitent pas à un sous-genre — et efface la scène marseillaise. Ses nœuds les plus centraux sont les artistes à cheval sur plusieurs générations (Booba, Orelsan, IAM). Le graphe des embeddings, lui, déçoit : quelques clusters rappellent des sous-genres mais restent incomplets et hétérogènes. Deux limites : l'embedding ne repose que sur 5 morceaux par artiste, et moyenner des vecteurs de mots détruit de l'information.",
          en:"The Last.fm graph blurs the urban / conscious border — listeners don't stick to one sub-genre — and erases the Marseille scene. Its most central nodes are the artists straddling several generations (Booba, Orelsan, IAM). The embeddings graph disappoints: a few clusters echo sub-genres but stay incomplete and heterogeneous. Two limits: the embedding rests on only 5 tracks per artist, and averaging word vectors destroys information." } },
        { type:"h3", text:{ fr:"Popularité et followers Spotify", en:"Spotify popularity and followers" } },
        { type:"p", text:{
          fr:"Les valeurs brutes de followers et de popularité sont trop proches d'un artiste à l'autre pour dimensionner les nœuds. Une courbe de spline les étale et rend l'affichage lisible. On retrouve alors grossièrement la dynamique degré / centralité, mais avec un poids moindre pour les rappeurs plus anciens (clusters vert, jaune, orange) — les jeunes générations streament davantage, tandis que le public du rap ancien écoute souvent sur support physique.",
          en:"Raw follower and popularity values are too similar between artists to size the nodes. A spline curve spreads them out and makes the display legible. The degree / centrality dynamic then roughly returns, but with less weight on older rappers (green, yellow, orange clusters) — younger generations stream more, while the audience for older rap often listens on physical media." } },
        { type:"gallery", items:[
          { src:"img/similarity-graphs/followers-raw.jpg", caption:{ fr:"Followers bruts", en:"Raw followers" } },
          { src:"img/similarity-graphs/followers-spline-curve.jpg", caption:{ fr:"Courbe de spline appliquée", en:"Spline curve applied" } },
          { src:"img/similarity-graphs/followers-splined.jpg", caption:{ fr:"Résultat après spline", en:"Result after the spline" } }
        ] },

        { type:"h2", text:{ fr:"Conclusion", en:"Conclusion" } },
        { type:"p", text:{
          fr:"Le projet a permis de concevoir des pipelines d'extraction, de restructuration et d'analyse sur plusieurs sources pour étudier le réseau du rap francophone. Les graphes ont rendu visibles les collaborations, fait émerger des communautés cohérentes, et permis de formuler des hypothèses sur les liens stylistiques entre artistes.",
          en:"The project built extraction, restructuring and analysis pipelines over several sources to study the French-rap network. The graphs made collaborations visible, surfaced coherent communities, and let us form hypotheses about stylistic links between artists." } },
        { type:"p", text:{
          fr:"Pistes non explorées, faute de temps : le BPM des titres, le ratio featurings / morceaux, les dates de sortie (pour dater les époques), du topic modeling NLP, l'ajout des producteurs et des labels (Rec. 118 pousse Ninho, Hamza ou SCH à collaborer), et un algorithme de recommandation fondé sur la structure du graphe.",
          en:"Leads left unexplored for lack of time: track BPM, the feature-to-track ratio, release dates (to date eras), NLP topic modelling, adding producers and labels (Rec. 118 pushes Ninho, Hamza and SCH to collaborate), and a recommendation algorithm based on the graph structure." } }
      ] },

    { slug: "llm-code-generation", icon: "🤖", year: "2024-2025",
      when: { fr: "Sept. 2024 — Mai 2025", en: "Sept. 2024 — May 2025" },
      title: { fr: "Grands modèles de langage pour la génération de code", en: "Large Language Models for Code Generation" },
      summary: { fr: "Faire écrire du code à un LLM dans un langage presque absent de ses données d'entraînement.",
                 en: "Getting an LLM to write code in a language almost absent from its training data." },
      tags: ["LangChain","LangGraph","FAISS","RAG","LLM-as-a-Judge","OpenAI API","Sentence-Transformers","Python"],
      body: [
        { type:"h2", text:{ fr:"Introduction", en:"Introduction" } },
        { type:"p", text:{
          fr:"Lokad, éditeur de logiciels pour la supply chain, veut faciliter l'écriture de code dans son propre langage, Envision — un DSL inspiré de SQL, pensé comme un compromis entre la simplicité d'Excel et la puissance de Python. Problème : un langage spécifique à un domaine est presque absent des données de pré-entraînement des LLM, qui hallucinent alors des constructions plausibles mais invalides. Et même du code syntaxiquement correct peut ne pas faire ce qui est demandé.",
          en:"Lokad, a supply-chain software company, wants to make coding in its own language, Envision, easier — a SQL-inspired DSL designed as a compromise between the simplicity of Excel and the power of Python. The catch: a domain-specific language is almost absent from LLM pre-training data, so models hallucinate plausible-but-invalid constructs. And even syntactically valid code may not do what was asked." } },
        { type:"p", text:{
          fr:"Objectif du PSC (projet scientifique collectif, 5 étudiants, encadré par Lokad) : un système fondé sur un LLM capable de générer et corriger du code Envision à partir de requêtes en langage naturel. Deux approches complémentaires ont été comparées — le Prompt Engineering, comme référence, puis la génération augmentée par récupération (RAG). Code open-source : <a href=\"https://github.com/SaturnTsen/LLM-DSL-Gen\" target=\"_blank\" rel=\"noopener\">LLM-DSL-Gen</a> et <a href=\"https://github.com/VIU-L/LLM-as-judge-for-DSL\" target=\"_blank\" rel=\"noopener\">LLM-as-judge-for-DSL</a>.",
          en:"Goal of the PSC (collective research project, 5 students, tutored by Lokad): an LLM-based system that generates and fixes Envision code from natural-language requests. Two complementary approaches were compared — Prompt Engineering, as a baseline, then Retrieval-Augmented Generation (RAG). Open-source code: <a href=\"https://github.com/SaturnTsen/LLM-DSL-Gen\" target=\"_blank\" rel=\"noopener\">LLM-DSL-Gen</a> and <a href=\"https://github.com/VIU-L/LLM-as-judge-for-DSL\" target=\"_blank\" rel=\"noopener\">LLM-as-judge-for-DSL</a>." } },

        { type:"h2", text:{ fr:"Prompt Engineering — la référence", en:"Prompt Engineering — the baseline" } },
        { type:"p", text:{
          fr:"On donne à un LLM existant un prompt qui fixe son rôle (un codeur), un extrait de documentation Envision (le résumé « Envision brief », ~20 pages) et le challenge à résoudre. Volontairement minimal : le but est de fixer une référence de performance avant d'ajouter de l'information ciblée.",
          en:"An existing LLM is given a prompt that sets its role (a coder), a chunk of Envision documentation (the ~20-page \"Envision brief\" summary) and the challenge to solve. Deliberately minimal: the point is to set a performance reference before adding any targeted information." } },
        { type:"code", lang:"python", text:"docu = read_file(os.path.join(\"docs\", \"envision-brief.md\"))\n\ncoder_personality = (\n    \"You are a proficient coder in a Domain Specific Language called Envision. \"\n    \"Your task is to generate a response to the given challenge. \"\n    \"Some challenges will ask you to generate Envision code, others will ask you \"\n    \"to explain given code or answer questions related to the Envision language. \"\n    \"Do not output any intermediate thinking or explanation, only give the final answer.\\n\"\n    \"### Documentation\\n\" + docu\n)" },
        { type:"h3", text:{ fr:"Évaluation — « LLM as a Judge »", en:"Evaluation — \"LLM as a Judge\"" } },
        { type:"p", text:{
          fr:"Un benchmark de 15 problèmes rédigés à la main en anglais, chacun avec une solution Envision détaillée. L'évaluation est automatisée par un second LLM « juge » qui reçoit le code du codeur, le challenge et la solution de référence, explique son raisonnement point par point, puis rend une note binaire 0 / 1. Un passage par le compilateur Envision est ajouté en amont : un code qui ne compile pas est un échec direct, et le codeur a droit à deux nouvelles tentatives en cas d'erreur de compilation.",
          en:"A benchmark of 15 hand-written English problems, each with a detailed Envision solution. Evaluation is automated by a second \"judge\" LLM that receives the coder's code, the challenge and the reference solution, explains its reasoning point by point, then returns a binary 0 / 1. An Envision compiler pass is added upstream: code that doesn't compile is an outright fail, and the coder gets two more attempts on a compile error." } },
        { type:"img", src:"img/llm-code-generation/pipeline-prompt-engineering.png",
          caption:{ fr:"Pipeline du modèle Prompt Engineering et de son système d'évaluation.", en:"The Prompt Engineering pipeline and its evaluation system." } },
        { type:"p", text:{
          fr:"Le juge n'est pas infaillible : il pénalisait parfois un paramètre d'affichage différent de la référence, ou l'absence de titre sur une figure. Les erreurs récurrentes ont été corrigées en ajoutant des consignes à son prompt de comportement ; l'incertitude résiduelle sur le benchmark de 15 challenges était d'environ ± 1.",
          en:"The judge isn't infallible: it sometimes penalised a display parameter that differed from the reference, or a missing figure title. Recurrent errors were fixed by adding instructions to its behaviour prompt; residual uncertainty on the 15-challenge benchmark was about ± 1." } },
        { type:"h3", text:{ fr:"Résultats", en:"Results" } },
        { type:"p", text:{
          fr:"Avec GPT-3.5 comme codeur : 8,5 / 15 en moyenne. GPT-4o-mini fait moins bien (7,5 / 15) — il ajoute des paramètres et des commentaires optionnels qui s'éloignent de la référence et sont pénalisés à tort par le juge. La vraie limite n'est pas la compréhension de la documentation, mais le manque d'information qu'elle contient — ce qui motive la RAG.",
          en:"With GPT-3.5 as the coder: 8.5 / 15 on average. GPT-4o-mini does worse (7.5 / 15) — it adds optional parameters and comments that drift from the reference and get wrongly penalised by the judge. The real limitation isn't understanding the documentation but the lack of information in it — which motivates RAG." } },

        { type:"h2", text:{ fr:"Génération augmentée par récupération (RAG)", en:"Retrieval-Augmented Generation (RAG)" } },
        { type:"p", text:{
          fr:"Pour chaque requête, récupérer les extraits de documentation pertinents et les injecter dans le prompt. Chaque morceau est encodé en vecteur (embedding) ; on sélectionne ceux dont l'embedding est le plus proche de celui de la requête, au sens de la similarité cosinus.",
          en:"For each query, retrieve the relevant documentation chunks and inject them into the prompt. Each chunk is encoded as a vector (embedding); the ones whose embedding is closest to the query's — by cosine similarity — are selected." } },
        { type:"h3", text:{ fr:"Version « from scratch »", en:"A \"from scratch\" version" } },
        { type:"p", text:{
          fr:"Le découpage naïf en morceaux de longueur égale coupait des exemples de code en deux ; on est passé à un découpage par (sous-)section, avec une pénalité sur les morceaux trop longs. Embeddings via <code>sentence-transformers/multi-qa-mpnet-base-dot-v1</code> ; on retient les 5 meilleurs morceaux de grammaire et les 5 meilleurs de documentation rédigée.",
          en:"Naive equal-length chunking split code examples in two; we moved to chunking by (sub)section, with a penalty on over-long chunks. Embeddings via <code>sentence-transformers/multi-qa-mpnet-base-dot-v1</code>; the top 5 grammar chunks and top 5 written-documentation chunks are kept." } },
        { type:"img", src:"img/llm-code-generation/pipeline-rag.png",
          caption:{ fr:"Pipeline avec le module RAG.", en:"Pipeline with the RAG module." } },
        { type:"p", text:{
          fr:"Résultat : 8-9 codes compilables, 7-8 jugés corrects sur 15 — aucune amélioration, parfois une régression. Les morceaux extraits sont souvent hors sujet : construire un espace d'embeddings pertinent est difficile pour des textes qui mêlent anglais et code Envision.",
          en:"Result: 8-9 compilable, 7-8 judged correct out of 15 — no improvement, sometimes a regression. Retrieved chunks are often off-topic: building a relevant embedding space is hard for text that mixes English and Envision code." } },
        { type:"h3", text:{ fr:"RAG hybride — le « RAG demander »", en:"Hybrid RAG — the \"RAG demander\"" } },
        { type:"p", text:{
          fr:"On ajoute un deuxième LLM qui lit la question et la liste de références, et propose des chapitres de grammaire et des noms de fonctions. La recherche est alors restreinte à ces catégories, plus les morceaux proches des noms de fonctions proposés. On mobilise ainsi la connaissance générale du LLM, et le fait qu'un nom de fonction Envision décrit bien son usage.",
          en:"A second LLM reads the question and the reference list and proposes grammar chapters and function names. Retrieval is then restricted to those categories, plus chunks close to the proposed function names. This leans on the LLM's general knowledge, and on the fact that an Envision function name describes its purpose well." } },
        { type:"code", lang:"python", text:"demander_personality = (\n    \"You are a coder's assistant. The coder will be coding in a Domain Specific \"\n    \"Language called Envision. You are given the BASIC DOCUMENTATION of Envision \"\n    \"and its REFERENCES.\\n\"\n    \"The user will give you a CODING TASK. You shall not code yourself; instead, \"\n    \"propose:\\n\"\n    \"  1. grammar chapters from the '### Grammar Chapters' section;\\n\"\n    \"  2. functions from the '### Aggregators and Functions Available' section\\n\"\n    \"that a coder needs to complete the task. Start each line with '-' for a \"\n    \"grammar chapter and '+' for a function name. Propose at least 5 functions \"\n    \"and 3 grammar chapters.\"\n)" },
        { type:"img", src:"img/llm-code-generation/pipeline-rag-demander.png",
          caption:{ fr:"Pipeline avec le RAG-demander.", en:"Pipeline with the RAG demander." } },
        { type:"p", text:{
          fr:"Vraie amélioration : 11 compilables, 10 acceptés sur 15. Exemple : la fonction <code>argmax</code>, nécessaire à un challenge dont l'énoncé ne mentionne jamais « max » — une simple recherche par similarité d'embeddings l'aurait manquée, le demander la propose depuis sa connaissance générale.",
          en:"A real improvement: 11 compilable, 10 accepted out of 15. Example: the <code>argmax</code> function, needed for a challenge whose text never mentions \"max\" — plain embedding-similarity retrieval would have missed it, the demander proposes it from general knowledge." } },
        { type:"h3", text:{ fr:"Reconstruction sur LangChain", en:"Rebuilding on LangChain" } },
        { type:"p", text:{
          fr:"Réimplémentation sur LangChain / LangGraph (le workflow devient un graphe de nœuds — agents codeur, juge, retriever ; état explicite ; branches conditionnelles et cycles) avec FAISS (bibliothèque de recherche par similarité de Meta) comme base vectorielle, en index plat HNSW.",
          en:"Reimplemented on LangChain / LangGraph (the workflow becomes a graph of nodes — coder, judge and retriever agents; explicit state; conditional branches and cycles) with FAISS (Meta's similarity-search library) as the vector store, using a flat HNSW index." } },
        { type:"img", src:"img/llm-code-generation/langchain-architecture.png",
          caption:{ fr:"Architecture modulaire de l'implémentation LangChain.", en:"Modular architecture of the LangChain implementation." } },
        { type:"p", text:{
          fr:"Le benchmark est étendu : le jeu de test interne de Lokad (57 challenges au format .nvn, migrés en .json) plus les 16 challenges de l'équipe, soit 73 challenges.",
          en:"The benchmark is extended: Lokad's internal test set (57 challenges in .nvn, migrated to .json) plus the team's 16, for 73 challenges." } },
        { type:"img", src:"img/llm-code-generation/benchmark-composition.png",
          caption:{ fr:"Composition des 57 nouveaux challenges du benchmark, par type.", en:"Composition of the 57 new benchmark challenges, by type." } },
        { type:"h3", text:{ fr:"Expériences", en:"Experiments" } },
        { type:"table",
          head:[ { fr:"Variante", en:"Variant" }, { fr:"Petit (/16)", en:"Small (/16)" }, { fr:"Étendu (/73)", en:"Extended (/73)" }, { fr:"Lecture", en:"Takeaway" } ],
          rows:[
            [ { fr:"Base — GPT-3.5, 10 documents RAG, 3 tentatives", en:"Base — GPT-3.5, 10 RAG documents, 3 retries" }, "12", "41",
              { fr:"Dépasse le RAG from scratch grâce à FAISS.", en:"Beats the from-scratch RAG thanks to FAISS." } ],
            [ { fr:"DeepSeek-R1 (chaîne de pensée)", en:"DeepSeek-R1 (chain of thought)" }, "13–15", "< 40",
              { fr:"Le goulot n'est pas le raisonnement mais l'accès à la bonne information.", en:"The bottleneck isn't reasoning but access to the right information." } ],
            [ { fr:"Ajout d'« Envision brief » au prompt du codeur", en:"Adding \"Envision brief\" to the coder prompt" }, "—", { fr:"en baisse", en:"drops" },
              { fr:"Trop d'information peu concise brouille le codeur ; les morceaux RAG suffisent.", en:"Too much unconcise information confuses the coder; the RAG chunks are enough." } ],
            [ { fr:"20 documents RAG au lieu de 10", en:"20 RAG documents instead of 10" }, "—", "45",
              { fr:"Du contexte supplémentaire, s'il est bien choisi, ne nuit pas.", en:"Extra context, if well chosen, doesn't hurt." } ],
            [ { fr:"Réordonnancement dynamique des documents à l'échec", en:"Dynamic reordering of documents on failure" }, "—", "+1–2",
              { fr:"Dans le bruit de génération — non conservé.", en:"Within generation noise — not kept." } ]
          ] },
        { type:"img", src:"img/llm-code-generation/results-viewer.jpg",
          caption:{ fr:"Outil d'analyse construit pour comparer rapidement la réponse du LLM et la correction.", en:"Analysis tool built to quickly compare the LLM's answer against the reference." } },
        { type:"h3", text:{ fr:"Résultats par catégorie", en:"Results by category" } },
        { type:"p", text:{
          fr:"Le codeur réussit mieux sur les mots-clés proches de SQL (le <code>IF</code>) que sur ceux propres à Envision : toutes les stratégies de RAG échouent sur les challenges difficiles du <code>WHERE</code>. Fort sur l'affichage et les opérations logiques, correct sur le regroupement et le tri, plus faible sur l'interaction avec les fichiers et le filtrage de table — une lacune réelle, filtrer étant central pour un langage d'analyse de données. Principale piste : un fine-tuning ciblé sur ces points faibles.",
          en:"The coder does better on SQL-like keywords (<code>IF</code>) than on Envision-specific ones: every RAG strategy fails the hard <code>WHERE</code> challenges. Strong on display and logical operations, decent on grouping and sorting, weaker on file interaction and table filtering — a real gap, since filtering is central to a data-analysis language. Main lead: targeted fine-tuning on those weak spots." } },
        { type:"img", src:"img/llm-code-generation/results-by-category.png",
          caption:{ fr:"Meilleurs résultats (implémentation FAISS, 20 documents), par catégorie de challenge.", en:"Best results (FAISS implementation, 20 documents), by challenge category." } },

        { type:"h2", text:{ fr:"Pistes d'approfondissement", en:"What we'd do next" } },
        { type:"ul", items:[
          { fr:"Un filtre de connaissance : un classifieur entraîné qui ne garde que les morceaux réellement liés à la question.",
            en:"A knowledge filter: a trained classifier that keeps only the chunks genuinely related to the question." },
          { fr:"Un fine-tuning léger du codeur sur un corpus de challenges Envision structuré, concentré sur ses lacunes.",
            en:"A light fine-tuning of the coder on a structured corpus of Envision challenges, focused on its gaps." },
          { fr:"Un benchmark plus équilibré, couvrant plus uniformément les aspects syntaxiques et fonctionnels d'Envision.",
            en:"A more balanced benchmark, covering Envision's syntactic and functional aspects more evenly." },
          { fr:"Une approche par graphe de connaissances (KAG) — étudiée sérieusement, mais trop lourde dans le temps imparti.",
            en:"A knowledge-graph approach (KAG) — seriously considered, but too heavy for the timeframe." }
        ] },

        { type:"h2", text:{ fr:"Conclusion", en:"Conclusion" } },
        { type:"p", text:{
          fr:"Adapter un LLM à la génération de code dans un DSL méconnu s'est révélé complexe et riche d'enseignements. Le Prompt Engineering et la RAG ont été les choix les plus formateurs et les plus productifs ; les itérations infructueuses — le RAG from scratch — ont affûté notre compréhension des conditions dans lesquelles un LLM est réellement utile. Le modèle final résout une large part des tâches de base du langage Envision. Avec plus de temps : un fine-tuning ciblé et un système d'évaluation enrichi.",
          en:"Adapting an LLM to code generation in a niche DSL proved complex and rich in lessons. Prompt Engineering and RAG were the most formative and productive choices; the unsuccessful iterations — the from-scratch RAG — sharpened our understanding of when an LLM is actually useful. The final model resolves a large share of Envision's basic tasks. With more time: targeted fine-tuning and a richer evaluation system." } }
      ] },

    { slug: "urban-trail-optimisation", icon: "🗺️", year: "2022-2023",
      when: { fr: "Sept. 2022 — Juin 2023", en: "Sept. 2022 — June 2023" },
      title: { fr: "Optimisation multi-objectif de parcours d'urban trail", en: "Multi-objective Optimisation of Urban Trail Routes" },
      summary: { fr: "Générer un parcours de trail urbain en boucle satisfaisant une demande de distance et de dénivelé, à partir d'une carte.",
                 en: "Generating a looped urban-trail route that meets a target distance and elevation gain, from a map alone." },
      tags: ["OCaml","Dijkstra","A*","Bhandari","Multi-objective optimisation","Pareto front","OpenStreetMap","Graph theory"],
      body: [
        { type:"h2", text:{ fr:"Le problème", en:"The problem" } },
        { type:"p", text:{
          fr:"En m'installant en ville, j'ai perdu la diversité de parcours à laquelle le trail m'avait habitué. Aucune application ne génère de <em>nouveaux</em> itinéraires en boucle à partir d'une carte, pour une demande de distance et de dénivelé : Strava propose des parcours déjà empruntés, OpenRunner se construit à la main. TIPE de classe préparatoire, présenté à l'oral des concours (ENS).",
          en:"When I moved to a city I lost the route variety that trail running had accustomed me to. No app generates <em>new</em> looped routes from a map for a target distance and elevation gain: Strava suggests already-run routes, OpenRunner is built by hand. A CPGE research project (TIPE), presented at the competitive oral exams (ENS)." } },
        { type:"p", text:{
          fr:"Question : générer un parcours de trail urbain <strong>en boucle</strong> satisfaisant à la fois une demande de distance et de dénivelé, à partir des seules données cartographiques d'une agglomération.",
          en:"Question: generate a <strong>looped</strong> urban-trail route that meets both a target distance and a target elevation gain, from the map data of a city alone." } },

        { type:"h2", text:{ fr:"Modélisation", en:"Modelling" } },
        { type:"p", text:{
          fr:"Un réseau routier est un graphe non orienté <code>G = (S, A, φ)</code> pondéré par un couple (distance, dénivelé). On cherche les cycles simples (arêtes disjointes) passant par un sommet de départ <code>s</code> qui approchent au mieux la distance demandée <code>l</code> et le dénivelé positif <code>d⁺</code>. « Au mieux » est multi-objectif : minimiser <code>F(c) = (|l − l_c|, |d⁺ − d⁺_c|)</code>. Il n'y a pas d'optimum unique mais un <strong>front de Pareto</strong> de meilleurs compromis — les solutions qu'aucune autre ne domine sur les deux critères.",
          en:"A road network is an undirected graph <code>G = (V, E, φ)</code> weighted by a (distance, elevation) pair. We look for simple cycles (edge-disjoint) through a start vertex <code>s</code> that come closest to the requested distance <code>l</code> and positive elevation gain <code>d⁺</code>. \"Closest\" is multi-objective: minimise <code>F(c) = (|l − l_c|, |d⁺ − d⁺_c|)</code>. There is no single optimum but a <strong>Pareto front</strong> of best trade-offs — the solutions no other dominates on both criteria." } },
        { type:"img", src:"img/urban-trail-optimisation/pareto-front-concept.png",
          caption:{ fr:"Front de Pareto pour un problème de minimisation à deux objectifs.", en:"Pareto front for a two-objective minimisation problem." } },

        { type:"h2", text:{ fr:"Algorithme", en:"Algorithm" } },
        { type:"p", text:{
          fr:"La recherche de cycle de longueur fixée est NP-difficile → une heuristique s'impose. Lewis & Corcoran (2022) construisent des cycles simples avec l'<strong>heuristique à double chemin</strong> de Bhandari : une étape de plus courts chemins disjoints, puis une étape de « détricotage ».",
          en:"Fixed-length cycle search is NP-hard → a heuristic is needed. Lewis & Corcoran (2022) build simple cycles with Bhandari's <strong>double-path heuristic</strong>: a disjoint-shortest-paths step, then an \"unknitting\" step." } },
        { type:"h3", text:{ fr:"Plus courts chemins disjoints", en:"Disjoint shortest paths" } },
        { type:"p", text:{
          fr:"Prendre le plus court chemin <code>P₁</code> de <code>s</code> à <code>t</code> (Dijkstra) ; repondérer le graphe — pour chaque arête <code>(u,v)</code> de <code>P₁</code>, ajouter une grande constante à <code>(u,v)</code> et poser <code>(v,u) = −dist(u,v)</code> ; chercher le nouveau plus court chemin <code>P₂</code> avec Bellman-Ford (poids négatifs) ; réinitialiser les poids.",
          en:"Take the shortest path <code>P₁</code> from <code>s</code> to <code>t</code> (Dijkstra); reweight the graph — for each edge <code>(u,v)</code> of <code>P₁</code>, add a large constant to <code>(u,v)</code> and set <code>(v,u) = −dist(u,v)</code>; find the new shortest path <code>P₂</code> with Bellman-Ford (negative weights); reset the weights." } },
        { type:"gallery", items:[
          { src:"img/urban-trail-optimisation/algo1-disjoint-paths.png", caption:{ fr:"Pseudo-code", en:"Pseudo-code" } },
          { src:"img/urban-trail-optimisation/algo1-illustration.png", caption:{ fr:"Exemple pas à pas", en:"Step-by-step example" } }
        ] },
        { type:"p", text:{
          fr:"Bellman-Ford exige l'absence de cycle absorbant. N'ayant pas trouvé de preuve que le graphe repondéré n'en contient pas, je l'ai démontré (en annexe du rapport).",
          en:"Bellman-Ford requires no negative cycle. Having found no proof that the reweighted graph has none, I proved it (in the report's annex)." } },
        { type:"h3", text:{ fr:"Détricotage", en:"Unknitting" } },
        { type:"p", text:{
          fr:"Combiner <code>P₁</code> et <code>P₂</code> en un seul cycle simple : partir de <code>C = P₁</code> ; pour chaque arête <code>(u,v)</code> de <code>P₂</code> — si <code>(v,u) ∈ C</code>, la retirer ; sinon ajouter <code>(u,v)</code>. Les arêtes parcourues en sens opposé s'annulent ; le reste forme un cycle continu.",
          en:"Combine <code>P₁</code> and <code>P₂</code> into one simple cycle: start from <code>C = P₁</code>; for each edge <code>(u,v)</code> of <code>P₂</code> — if <code>(v,u) ∈ C</code>, remove it; otherwise add <code>(u,v)</code>. Edges traversed in opposite directions cancel; the rest forms a continuous cycle." } },
        { type:"gallery", items:[
          { src:"img/urban-trail-optimisation/algo2-unknitting.png", caption:{ fr:"Pseudo-code", en:"Pseudo-code" } },
          { src:"img/urban-trail-optimisation/algo2-illustration.png", caption:{ fr:"Exemple pas à pas", en:"Step-by-step example" } }
        ] },
        { type:"h3", text:{ fr:"Enveloppe multi-objectif", en:"Multi-objective wrapper" } },
        { type:"p", text:{
          fr:"Un seul Dijkstra depuis <code>s</code> ; puis pour chaque sommet <code>t ≠ s</code> jugé intéressant, une exécution de Bhandari donne une boucle passant par <code>s</code> et <code>t</code>, dont la (distance, dénivelé) est confrontée à un front de Pareto tenu à jour. En sortie : un ensemble de boucles Pareto-optimales et leurs caractéristiques.",
          en:"One Dijkstra from <code>s</code>; then for every vertex <code>t ≠ s</code> deemed interesting, one Bhandari run yields a loop through <code>s</code> and <code>t</code>, whose (distance, elevation) is checked against a running Pareto front. Output: a set of Pareto-optimal loops and their characteristics." } },
        { type:"img", src:"img/urban-trail-optimisation/algorithm-schematic.png",
          caption:{ fr:"Représentation schématique de l'algorithme proposé.", en:"Schematic of the proposed algorithm." } },
        { type:"code", lang:"ocaml", text:"let pareto_add (f : paretofront) (sol : parcours) : paretofront =\n  (* dominated -> no effect; non-dominated -> add sol, drop everything it dominates *)\n  let rec aux (l : paretofront) : paretofront =\n    match l with\n    | []                          -> [sol]\n    | hd :: _  when domine hd sol  -> l\n    | hd :: tl when domine sol hd  -> aux tl\n    | hd :: tl                     -> hd :: aux tl\n  in\n  aux f" },
        { type:"h3", text:{ fr:"Rendre le calcul praticable", en:"Making it tractable" } },
        { type:"ul", items:[
          { fr:"Composantes connexes : un extrait de carte de ville n'est pas connexe (des sommets de bord ne sont accessibles que par des points hors carte) → on n'itère que sur les <code>t</code> de la composante connexe de <code>s</code>.",
            en:"Connected components: a city-map extract isn't connected (some border vertices are only reachable via off-map points) → only iterate over <code>t</code> in <code>s</code>'s connected component." },
          { fr:"Couronne d'exclusion : ne considérer que les sommets dans un anneau <code>(r_int, r_ext)</code> autour de <code>s</code> — à une distance plausible vu la demande.",
            en:"Exclusion crown: only consider vertices in an annulus <code>(r_int, r_ext)</code> around <code>s</code> — at a plausible distance given the request." },
          { fr:"Abandon des poids négatifs : la repondération de Bhandari garantit une boucle de poids <em>minimal</em>, dont on n'a pas besoin. En la supprimant, A* remplace Bellman-Ford → complexité pire cas de <code>O(|S|²|A|)</code> à <code>O(|A||S|log|S|)</code>, à résultats identiques.",
            en:"Dropping negative weights: Bhandari's reweighting guarantees a <em>minimum-weight</em> loop, which we don't need. Removing it lets A* replace Bellman-Ford → worst-case complexity from <code>O(|V|²|E|)</code> to <code>O(|E||V|log|V|)</code>, with identical results." }
        ] },
        { type:"code", lang:"ocaml", text:"let double_path_heuristic g coord s dist deniv r_int r_ext =\n  let n = Array.length g in\n  let _, last = dijkstra_tree g s in                     (* one Dijkstra from the start *)\n  let front = ref [ (dist /. 2., 0., []); (0., deniv, []) ] in\n  let cc  = composante_connexe g s in                    (* keep s's connected component *)\n  let cyl = couronne_cylindrique coord s r_int r_ext in  (* exclusion crown *)\n  for x = 0 to n - 1 do\n    if x <> s && cc.(x) && cyl.(x) then begin\n      let path        = shortest_path g x last in\n      let d, dpos, c  = bhandari g path s x coord in     (* build a loop through s and x *)\n      let circuit     = (absol (d -. dist), absol (dpos -. deniv), c) in\n      front := pareto_add !front circuit\n    end\n  done;\n  !front" },

        { type:"h2", text:{ fr:"Implémentation et données", en:"Implementation and data" } },
        { type:"p", text:{
          fr:"Algorithme en OCaml — tableau de listes d'adjacence pour le graphe, tas binaire pour la file de priorité de Dijkstra. La récupération des données et le tracé sont en R (code en quasi-totalité repris). Réseau routier depuis OpenStreetMap, altitudes depuis la mission SRTM de la NASA. Implémentation validée sur un exemple synthétique.",
          en:"Algorithm in OCaml — an array of adjacency lists for the graph, a binary heap for Dijkstra's priority queue. Data retrieval and plotting are in R (mostly reused code). Road network from OpenStreetMap, elevation from NASA's SRTM mission. Implementation validated on a synthetic example." } },
        { type:"img", src:"img/urban-trail-optimisation/program-flowchart.png",
          caption:{ fr:"Logigramme du programme (R en bleu, OCaml en orange).", en:"Program flowchart (R in blue, OCaml in orange)." } },

        { type:"h2", text:{ fr:"Expérience et résultats", en:"Experiment and results" } },
        { type:"p", text:{
          fr:"Une portion d'environ 60 km² de l'agglomération lyonnaise — un graphe de plus de 100 000 sommets et arêtes. Demande : 15 km et 500 m de dénivelé ; couronne d'exclusion de 3 à 6 km.",
          en:"A roughly 60 km² slice of the Lyon area — a graph of over 100,000 vertices and edges. Request: 15 km and 500 m of gain; exclusion crown of 3–6 km." } },
        { type:"gallery", items:[
          { src:"img/urban-trail-optimisation/study-zone.jpg", caption:{ fr:"Zone considérée et couronne d'exclusion (pointillés rouges).", en:"Study zone and exclusion crown (red dashes)." } },
          { src:"img/urban-trail-optimisation/graph-edges.jpg", caption:{ fr:"Toutes les arêtes du graphe extrait.", en:"All edges of the extracted graph." } }
        ] },
        { type:"p", text:{
          fr:"49 959 cycles simples générés ; la couronne a écarté environ 50 000 sommets. Les écarts à la demande vont jusqu'à 8 km et 300 m. Le front de Pareto compte 12 solutions de meilleur compromis — peu, car la recherche est de type force brute (non dirigée par le critère d'optimisation), mais diverses et assez proches de la demande pour être utiles en pratique.",
          en:"49,959 simple cycles generated; the crown removed about 50,000 vertices. Gaps to the request reach up to 8 km and 300 m. The Pareto front holds 12 best-compromise solutions — few, because the search is brute-force (not guided by the objective), but diverse and close enough to the request to be practically useful." } },
        { type:"img", src:"img/urban-trail-optimisation/pareto-results.png",
          caption:{ fr:"Nuage de points (gauche) et front de Pareto (droite) des écarts à la demande.", en:"Scatter (left) and Pareto front (right) of the gaps to the request." } },
        { type:"gallery", items:[
          { src:"img/urban-trail-optimisation/route-1.jpg", caption:{ fr:"Boucle optimale — 14,97 km, +501,5 m (couleur = altitude).", en:"Optimal loop — 14.97 km, +501.5 m (colour = altitude)." } },
          { src:"img/urban-trail-optimisation/route-2.jpg", caption:{ fr:"Boucle optimale — 14,36 km, +499,8 m.", en:"Optimal loop — 14.36 km, +499.8 m." } }
        ] },

        { type:"h2", text:{ fr:"Limites et perspectives", en:"Limits and next steps" } },
        { type:"ul", items:[
          { fr:"Temps de calcul : quelques secondes pour ~10 000 arêtes, mais plus d'une heure pour 100 000. La sélection des sommets pourrait aussi filtrer sur le dénivelé ; un langage plus rapide (C) et des bibliothèques optimisées aideraient.",
            en:"Runtime: seconds for ~10,000 edges, but over an hour for 100,000. Vertex selection could also filter on elevation; a faster language (C) and optimised libraries would help." },
          { fr:"Mieux approcher le front de Pareto : générer les cycles par déformation d'un cycle initial vers la demande plutôt qu'en force brute ; ou partir de figures géométriques de bon périmètre, projetées et pivotées autour de <code>s</code>.",
            en:"Better Pareto approximation: generate cycles by deforming an initial cycle toward the request rather than brute force; or start from geometric shapes of the right perimeter, projected and rotated around <code>s</code>." },
          { fr:"D'autres critères — zones vertes, points de vue — s'ajouteraient par une adaptation assez simple du code.",
            en:"More criteria — green zones, viewpoints — would be a fairly simple code change." }
        ] }
      ] }
  ],

  /* ---------- projets professionnels ---------- */
  /* Chaque projet pro suit la structure : titre · (org · dates · type) ·
     description · outils (tools) · compétences développées (skills) · défis techniques (challenges, optionnel). */
  proProjects: [
    { icon: "🎥",
      title: { fr: "Stitching vidéo temps réel à partir de caméras fixes", en: "Real-time Video Stitching from Fixed Cameras" },
      topics: ["Computer vision", "Real-time", "GPU pipeline", "Image stitching", "Parallax"],
      org: "Noro",
      when: { fr: "Mars — Juillet 2026 • New York", en: "Mar. — July 2026 • New York" },
      kind: { fr: "Stage de fin d'études (R&D)", en: "Final-year internship (R&D)" },
      description: { fr: "Stage de R&D chez Noro, qui relie des espaces distants par des « portails » vidéo. Prototype d'un pipeline qui fusionne en temps réel les flux de deux caméras fixes à champs recouvrants en une seule vidéo à large champ, avec une couture (« seam ») consciente du contenu qui masque la parallaxe des personnes traversant la jonction ; contributions ponctuelles au Portal Agent, l'application de production.",
                     en: "R&D internship at Noro, which connects distant spaces through video \"portals\". Prototyped a pipeline that stitches two fixed overlapping camera streams into one wide field-of-view video in real time, with a content-aware seam that hides the parallax of people moving across the join; plus occasional contributions to the Portal Agent, the production app." },
      figures: [
        { src: "img/pro/videostitcher/pipeline.png",
          caption: { fr: "Architecture en deux phases : les étapes géométriques coûteuses sont calculées une fois à la calibration ; seules les étapes dépendant du contenu sont refaites à chaque frame, la carte de coût étant couplée à la précédente par moyenne mobile exponentielle.",
                     en: "Two-phase architecture: the costly geometric stages run once at calibration; only the content-dependent stages recur per frame, with the cost map coupled to the previous one via an exponential moving average." } },
        { src: "img/pro/videostitcher/seam-debug.jpg",
          caption: { fr: "Débogage du calcul de couture : couture (rouge), masque des personnes (rouge), objets fixes au premier plan (jaune), mouvement détecté (bleu). La couture contourne les zones masquées.",
                     en: "Debug view of the per-frame seam: seam (red), person mask (red), static foreground objects (yellow), detected motion (blue). The seam bends around the masked regions." } },
        { src: "img/pro/videostitcher/seam-photometric.jpg",
          caption: { fr: "Couture photométrique seule : elle traverse la personne et produit un dédoublement (« ghosting »).",
                     en: "Photometric-only seam: it crosses the person and produces doubling (\"ghosting\")." } },
        { src: "img/pro/videostitcher/seam-content-aware.jpg",
          caption: { fr: "Couture consciente du contenu, même image : le chemin de coût minimal contourne la personne, le dédoublement disparaît.",
                     en: "Content-aware seam, same frame: the minimum-cost path routes around the person, the doubling is gone." } }
      ],
      tools: ["Python", "PyTorch", "CUDA", "OpenCV", "NumPy", "YOLOv8 / YOLOE", "ORB + RANSAC", "Dynamic programming", "Multi-threading", "TypeScript", "Electron"],
      skills: { fr: ["Pipeline en deux phases : comme les caméras ne bougent jamais, la détection de points, l'appariement et l'estimation d'homographie (ORB + RANSAC) sont calculés une seule fois à la calibration ; seuls le warping, le placement de la couture et le blending sont refaits à chaque frame",
                     "Couture consciente du contenu et lissée dans le temps : recalculée à chaque frame comme plus court chemin (programmation dynamique) dans une carte de coût combinant un terme photométrique, des pénalités dures écartant la couture des personnes (segmentation YOLOv8 / YOLOE) et des objets déplacés (détecteur de mouvement par soustraction de fond), et un terme temporel (moyenne mobile exponentielle) qui supprime le scintillement",
                     "Blending multi-bandes (pyramide laplacienne) sur une bande étroite autour de la couture ; calibration d'un gain photométrique par canal pour effacer la marche de couleur à la jonction",
                     "Implémentation GPU (PyTorch grid_sample / conv2d) dans un pipeline multi-thread à plusieurs flux CUDA, avec repli CPU transparent — débit 1080p porté d'environ 2,75 im/s (CPU) à environ 32 im/s (GPU), soit ×11,6",
                     "Décomposition du temps par étape pour localiser le budget par frame ; proposition d'un protocole de validation de la qualité de couture (taux de traversée, visibilité de la couture)",
                     "Contributions au Portal Agent (Electron) et à un classifieur de détection de visages (face-api.js / SSD MobileNet) qui oriente les flux des participants Teams vers différents modes de rendu"],
                en: ["Two-phase pipeline: because the cameras never move, feature detection, matching and homography estimation (ORB + RANSAC) run once at calibration; only warping, seam placement and blending recur per frame",
                     "Content-aware, temporally-smoothed seam: recomputed every frame as a minimum-cost dynamic-programming path over a cost map combining a photometric term, hard penalties keeping the seam off people (YOLOv8 / YOLOE segmentation) and displaced objects (baseline-subtraction motion detector), and an exponential-moving-average temporal term that suppresses flicker",
                     "Multi-band Laplacian blending on a narrow strip around the seam; per-channel photometric gain calibration to remove the colour step at the join",
                     "GPU implementation (PyTorch grid_sample / conv2d) inside a multi-threaded, multi-CUDA-stream pipeline with a transparent CPU fallback — raised 1080p throughput from ~2.75 FPS (CPU) to ~32 FPS (GPU), ~11.6×",
                     "Per-stage timing breakdown to locate the per-frame budget; proposed a seam-quality validation protocol (seam-crossing rate, seam-visibility)",
                     "Contributed to the Portal Agent (Electron) and a face-detection classifier (face-api.js / SSD MobileNet) that routes Teams participant streams into rendering modes"] },
      challenges: { fr: "Une homographie fixe unique ne peut pas résoudre la parallaxe — une personne traversant la couture apparaît en double (« ghosting »). La gestion de la parallaxe a donc dû passer du warping géométrique au routage de la couture image par image, qui doit alors être à la fois conscient du contenu et stable dans le temps, et tenir dans un budget temps réel en 1080p sur un GPU modeste (NVIDIA T1000).",
                    en: "A single fixed homography cannot resolve parallax — a person crossing the seam is doubled (\"ghosted\"). Parallax handling therefore had to move from geometric warping into per-frame seam routing, which must then be both content-aware and temporally stable, and fit a real-time budget at 1080p on a modest GPU (NVIDIA T1000)." } },

    { icon: "👥",
      title: { fr: "HeadTracker — un flux, N cadrages verrouillés sur les têtes", en: "HeadTracker — one stream, N head-locked crops" },
      topics: ["Computer vision", "Multi-object tracking", "Re-identification", "Browser / WebGPU"],
      org: "Noro",
      when: { fr: "Juin 2026 • New York", en: "June 2026 • New York" },
      kind: { fr: "Prototype interne (~2 semaines)", en: "Internal prototype (~2 weeks)" },
      description: { fr: "Outil navigateur qui prend une vidéo et en produit N flux 16:9 en direct, un par personne, chacun verrouillé sur sa tête avec une identité stable — un flux qui commence sur une personne ne bascule jamais sur une autre.",
                     en: "A browser tool that takes one video and produces N live 16:9 streams, one per person, each locked onto its head with a stable identity — a stream that starts on one person never switches to another." },
      tools: ["TypeScript", "WebGPU", "ONNX Runtime", "YOLO (head)", "MoveNet", "Hungarian algorithm"],
      skills: { fr: ["Détection toutes les ~1 s (détecteur de têtes YOLO / points clés MoveNet) et, entre deux détections, une moyenne mobile exponentielle par flux qui fait glisser chaque cadrage vers sa cible",
                     "Identité stable par association en 3 phases : assignation hongroise globalement optimale sur la boîte du corps, fusionnée à une similarité de couleur du torse (histogramme HSV) ; rattrapage par apparence en sortie d'occultation ; galerie de ré-identification sur 30 s pour qu'une personne qui part et revient retrouve son numéro et son flux",
                     "Traitement entièrement dans le navigateur — rien n'est téléversé ; un canvas.captureStream() par tête"],
                en: ["Detection every ~1 s (YOLO head detector / MoveNet keypoints); between detections, a per-stream exponential moving average glides each crop toward its target",
                     "Stable identity via 3-phase association: globally-optimal Hungarian assignment on the body box, fused with torso-colour (HSV histogram) similarity; an appearance rescue out of occlusion; and a 30 s re-identification gallery so a person who leaves and returns reclaims their number and their stream",
                     "Runs entirely in the browser — nothing uploaded; one canvas.captureStream() per head"] } },

    { icon: "🏥",
      title: { fr: "Ingénierie NLP sur un assistant médical par IA", en: "NLP Engineering on a Medical AI Assistant" },
      topics: ["NLP", "LLMs", "RAG", "Healthcare AI", "Model deployment"],
      org: "Arkhn",
      when: { fr: "Juin — Sept. 2025 • Paris", en: "June — Sept. 2025 • Paris" },
      kind: { fr: "Stage de 2ᵉ année", en: "Second-year internship" },
      description: { fr: "Ingénieur NLP junior dans l'équipe Assistant, sur Arkhn Assistant — un produit d'IA générative qui rédige des documents administratifs médicaux — pendant la migration des modèles OpenAI (sur Azure) vers des modèles open source hébergés sur une infrastructure française souveraine.",
                     en: "Junior NLP engineer in the Assistant team, working on Arkhn Assistant — a generative-AI product that drafts medical administrative documents — during the migration from OpenAI models (on Azure) to open-source models on sovereign French infrastructure." },
      tools: ["Python", "vLLM", "LLM", "RAG", "OCR", "Llama 3.3", "Mistral", "Qwen3", "GPT-oss", "GPU serving", "Docker", "Kubernetes"],
      skills: { fr: ["Benchmark de plus de 20 modèles (OCR, embedding, LLM) et déploiement des meilleurs pendant la migration OpenAI (Azure) → modèles open source sur infrastructure souveraine : d'abord l'OCR, puis les LLM au cœur du produit",
                     "Service des modèles open source sur GPU avec vLLM (Python), en apprenant le workflow de déploiement auprès de l'équipe infra",
                     "Refonte des quatre outils appelables par l'agent de chat — lister les noms des documents du patient, ouvrir un document par son nom, récupérer des extraits par requête texte (RAG), accéder aux informations de conformité — pour que le LLM ouvre directement le bon document sur les cas simples et ne recoure au RAG qu'en cas de besoin, réduisant le texte lu et le coût par requête (auparavant, l'agent lançait le RAG ou ouvrait plusieurs documents par défaut)",
                     "Code de traitement en flux de la sortie de l'OCR, pour que les agents en aval consomment les pages au fur et à mesure de leur production",
                     "Adaptation du code existant et des classes pour la compatibilité avec les nouveaux modèles — large part de débogage et d'étude de code hérité",
                     "Revue de code systématique par les pairs avant tout passage en préproduction ; méthode agile (sprints, revues d'articles hebdomadaires)",
                     "Exploration initiale (2 semaines) de l'extraction de données patient en temps réel sur l'écran du médecin : OCR pour lire le numéro de patient, et un classifieur GPT-4 détectant si un logiciel de santé est ouvert — donc si le contenu à l'écran peut être lu sans risque ou est privé"],
                en: ["Benchmarked 20+ models (OCR, embedding, LLM) and deployed the winners during the OpenAI (Azure) → open-source, sovereign-infrastructure migration: OCR first, then the LLMs at the core of the product",
                     "Served the open-source models on GPU with vLLM (Python), learning the deployment workflow from the infra team",
                     "Redesigned the four tools the chat agent can call — list patient-document names, open a document by name, retrieve chunks from a text query (RAG), access compliance information — so the LLM opens the right document directly for simple lookups and only falls back to RAG when needed, cutting the text it reads and the cost per query (previously it ran RAG or opened several documents by default)",
                     "Wrote code to stream OCR output so downstream agents consume document pages as they are produced",
                     "Adapted the existing codebase and classes for compatibility with the new models — a large share of debugging and studying legacy code",
                     "Systematic peer code review before any merge to pre-production; Agile workflow (sprints, weekly paper-reading sessions)",
                     "Earlier 2-week exploration of real-time patient-data extraction on the doctor's screen: OCR to read the patient number, and a GPT-4 classifier to detect whether a healthcare application was open — i.e. whether on-screen content could be safely read or was private"] },
      challenges: { fr: "Maintenir un produit d'IA médicale en phase de pré-commercialisation à travers une migration de modèles soudaine et non planifiée — imposée par un différend client et un objectif de souveraineté technologique — alors que toute ressource externe traitant des données de santé doit être certifiée HDS, et que l'équipe NLP était souvent en sous-effectif l'été.",
                    en: "Keeping a pre-commercial medical AI product working through a sudden, unplanned model migration — forced by a client dispute and a technological-sovereignty goal — while every external resource handling health data must be HDS-certified, and the NLP team was often short-staffed over the summer." } },

    { icon: "🎖️",
      title: { fr: "Commandement d'une section à l'instruction", en: "Leading a Platoon Through Initial Training" },
      topics: ["Leadership", "Training", "Field operations"],
      org: { fr: "RSMA — Armée française", en: "RSMA — French Army" },
      when: { fr: "Déc. 2023 — Mars 2024 • Nouvelle-Calédonie", en: "Dec. 2023 — Mar. 2024 • New Caledonia" },
      kind: { fr: "Service militaire — aspirant officier", en: "Military service — officer cadet" },
      description: { fr: "Encadrement d'une section de plus de 30 recrues du Régiment du Service Militaire Adapté pendant leur formation militaire initiale, sur quatre mois, en Nouvelle-Calédonie.",
                     en: "Leading a platoon of 30+ recruits of the Adapted Military Service Regiment through their initial military training, over four months, in New Caledonia." },
      skills: { fr: ["Encadrement d'une section de plus de 30 recrues pendant leur formation militaire initiale",
                     "Participation aux missions de recrutement au sein des communautés tribales de Nouvelle-Calédonie"],
                en: ["Led a platoon of 30+ recruits through their initial military training",
                     "Took part in recruitment missions within tribal communities in New Caledonia"] } }
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
  },

  /* ---------- page "À propos" / About ---------- */
  profile: {
    eyebrow:   { fr: "// À PROPOS", en: "// ABOUT ME" },
    heading:   { fr: "Mon parcours", en: "My Background" },
    tagline:   { fr: "Ingénieur diplômé de l'École Polytechnique • Étudiant en master à DTU • IA pour la santé et les sciences du vivant",
                 en: "École Polytechnique graduate engineer • DTU master's student • AI for healthcare and life sciences" },
    roleShort: { fr: "Ingénieur IA", en: "AI Engineer" },
    facts: [
      { icon: "📍", label: { fr: "Localisation", en: "Location" },  value: { fr: "Copenhague, Danemark", en: "Copenhagen, Denmark" } },
      { icon: "🎓", label: { fr: "Formation", en: "Education" },     value: "Polytechnique · DTU" },
      { icon: "🗣️", label: { fr: "Langues", en: "Languages" },       value: { fr: "Français · Anglais · Espagnol", en: "French · English · Spanish" } },
      { icon: "💼", label: { fr: "Expérience", en: "Experience" },   value: { fr: "IA, NLP & vision par ordinateur", en: "AI, NLP & computer vision" } }
    ],
    story: {
      eyebrow: { fr: "// MON HISTOIRE", en: "// MY STORY" },
      title:   { fr: "Mon parcours", en: "My Background" },
      body:    { fr: "Porté par une passion pour la programmation et les mathématiques, j'ai choisi la voie de l'ingénieur après un baccalauréat scientifique. Deux ans de classe préparatoire à Lyon m'ont mené, sur concours national, à l'École Polytechnique — trois ans de sciences avancées, sur un parcours orienté intelligence artificielle et mathématiques appliquées, complétés par une expérience professionnelle en stage dans le secteur tech.",
                 en: "Driven by a passion for programming and mathematics, I chose an engineering path after my scientific baccalauréat. Two years of classe préparatoire in Lyon led, by competitive national examination, to École Polytechnique — three years of advanced science, on a track focused on artificial intelligence and applied mathematics, alongside professional experience through internships in the tech industry." }
    },
    choices: {
      eyebrow: { fr: "// MES MOTIVATIONS", en: "// MY MOTIVATIONS" },
      title:   { fr: "Mes choix", en: "My Choices" },
      items: [
        { icon: "🏛️",
          title: { fr: "Pourquoi DTU", en: "Why DTU" },
          sub:   { fr: "M.Sc. · Technical University of Denmark", en: "M.Sc. · Technical University of Denmark" },
          body:  { fr: "DTU est la meilleure université d'ingénieurs du Danemark, au cœur d'un écosystème solide en santé et en innovation. Copenhague offre en outre un large réseau de postes étudiants à temps partiel, qui permettent de travailler dans le domaine tout en poursuivant ses études.",
                   en: "DTU is Denmark's leading engineering university, at the heart of a strong healthcare and innovation ecosystem. Copenhagen also offers a dense network of student and part-time roles, making it possible to work in the field while studying." } },
        { icon: "💡",
          title: { fr: "Pourquoi la bioinformatique", en: "Why the Bioinformatics specialisation" },
          sub:   { fr: "M.Sc. Bioinformatics · DTU", en: "M.Sc. in Bioinformatics · DTU" },
          body:  { fr: "Après deux ans consacrés à l'IA et aux mathématiques appliquées à l'École Polytechnique, j'ai voulu ancrer mes études dans le domaine où je souhaite construire ma carrière. Le master en bioinformatique de DTU réunit des projets techniques concrets, un large spectre de sujets en sciences du vivant et un environnement de recherche stimulant — en phase avec mon objectif d'évoluer vers une carrière en IA pour la santé.",
                   en: "After two years focused on AI and applied mathematics at École Polytechnique, I wanted to anchor my studies in the field I want to build my career in. The M.Sc. in Bioinformatics at DTU brings together hands-on technical projects, a broad range of life-science topics, and a stimulating research environment — a close fit with my goal of moving toward a career in AI for healthcare." } }
      ]
    },
    closing: {
      eyebrow: { fr: "// À DTU", en: "// AT DTU" },
      body:    { fr: "Je recherche activement un poste d'assistant étudiant dans la région de Copenhague, en IA / data science pour la santé.",
                 en: "I'm actively looking for a student assistant position in the Copenhagen area, in AI / data science for healthcare." }
    }
  }
};
