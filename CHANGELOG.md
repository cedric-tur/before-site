# Journal des modifications

Le dépôt est créé le **23 septembre 2026**. Le travail décrit plus bas lui est antérieur :
il n'existe donc pas de commits pour ces dates. Elles sont reconstituées à partir de la date
de modification des fichiers et du journal de travail, et servent de repère, pas d'historique
versionné. L'historique git réel démarre au premier commit.

---

## 6 octobre 2026

### Structure du site

- **Page Méthode vidée.** Tout le contenu est retiré, il ne reste qu'un bandeau
  « Bientôt disponible ». Partent avec lui Before-Small, Before-Session, le bloc de
  prix à 8 € et le bouton d'abonnement.
- **Espace élève retiré**, le temps que la page Méthode soit écrite : la vue, ses
  27 pistes, son entrée de menu, son lien de pied de page et son routage disparaissent.
  Le site compte désormais 5 vues au lieu de 6. Les 2 blocs restent dans l'historique git.

### Accueil

- La légende « Visualisez Before-S en accéléré » est centrée sous la vidéo.
- « À écouter en PREMIER » et « Dans un SECOND temps » passent en capitales dans les
  2 premières étapes de Before-Start, sur l'accueil comme sur la page Séances.
- Le bouton « Découvrir la méthode » devient « À découvrir bientôt ».
- « Ouvrir le répertoire » quitte le bas de la colonne de droite et passe centré
  au-dessus du texte, dans la colonne de gauche. Les 2 colonnes du bloc se calent
  désormais en haut et non plus en bas, si bien que le bouton se trouve sur la même
  ligne que le haut des vignettes de postures. La marge basse du titre
  « Parcourir les 90 postures » tombe de 1 rem à 0,55 rem.
- **Bloc des plaquettes.** La phrase sur les variantes est raccourcie : « Sur une
  plaquette individuelle, parfois une posture se pratique de différentes manières avec
  la version « niveau confirmé ». » Le décompte des 18 postures et la mention des
  fentes et des extensions disparaissent.

### Le site n'était pas adaptatif sur `before-s.com`

Cédric : *« sur mon ordinateur le responsive fonctionne, mais sur mon téléphone le site
s'affiche sans responsive et c'est moi qui dois agrandir les parties ».*

**`index.html` n'avait ni doctype ni balise `viewport`.** Le fichier était écrit comme un
fragment : il commençait directement par `<title>`, sans `<!doctype html>`, sans `<html>`
ni `<head>`. Sur l'apercu publié chez Claude, l'hébergeur ajoute lui-même cette
enveloppe, ce qui masquait le défaut. Sur `before-s.com`, servi par GitHub Pages, le
fichier part tel quel : un téléphone affiche alors la page sur une largeur fictive de
980 px, la réduit à l'échelle, et **aucune des règles `@media` ne se déclenche**.
D'où l'obligation d'agrandir chaque partie au doigt. L'absence de doctype faisait en
plus basculer le navigateur en mode de compatibilité ancienne.

`index.html` est désormais un document complet : doctype, `<html lang="fr">`,
`<head>` avec `charset` et `viewport`, `<body>` ouvert après la feuille de style.
Les 2 pages légales les avaient déjà. Un commentaire au-dessus de la ligne `viewport`
avertit de ne jamais la retirer.

### Lisibilité sur téléphone

Cédric a testé le site sur son téléphone en mode portrait : le texte y est trop petit,
et l'encadré de Before-Sleep ne rentre pas dans la largeur.

- **La racine passe de 16 à 20 px sous 700 px de large.** 25 px a été essayé dans la
  journée puis écarté : trop gros, et « Boutique » passait à la ligne dans le menu.
- **La largeur du site colle désormais aux bords de l'écran.** La gouttière tombe de
  20 à 11 px et les rembourrages avec elle : cartes à 0,8 rem, vignettes de posture à
  0,5 rem, fiche à 1 rem. Sur un écran de 390 px, la ligne de texte passe de 350 à
  368 px et la colonne utile d'une carte de 308 à 336 px.
- **Les 4 entrées du menu tiennent sur une seule ligne**, à 0,76 rem avec un écart de
  0,45 rem : 319 px pour 368 disponibles, et elles tiennent encore à 360 px d'écran.
  Le repli sur 2 lignes reste autorisé en dessous.
- *Mesure du palier de 20 px :* Le corps du texte était déjà
  à 16 px, mais les 77 libellés secondaires écrits en rem descendaient jusqu'à 11 px :
  descriptions de cartes, noms de postures, effets du carrousel, mention légale.
  Plutôt que de reprendre ces 77 règles une par une, tout ce qui est exprimé en rem
  grandit de 25 %. **C'est la seule valeur à bouger** si la taille doit changer encore.
  À 390 px de large : le corps passe de 16,1 à 20 px, les titres de section de 31,9 à
  39 px, les noms de carte de 19,4 à 24 px, les effets du carrousel de 13,1 à 16,4 px,
  la mention légale de 12,5 à 15,6 px.
- **Les grilles de cartes passent sur une seule colonne.** C'était le minimum de 292 px
  de `.grid` qui empêchait Before-Sleep de rentrer sur les écrans étroits : un encadré
  ne peut désormais plus être plus large que l'écran, quelle que soit la largeur du
  téléphone. Même traitement pour `.cols` et `.simple`.
- **Rembourrages resserrés** pour rendre la place gagnée au texte : gouttière à 1 rem,
  cartes à 1,05 rem, vignettes de posture à 0,6 rem, fiche d'une posture à 1,1 rem.
  Une carte offre ainsi 308 px de texte sur un écran de 390 px.
- **Le grand titre d'ouverture est retenu** à 40 px : il remplissait déjà toute la
  largeur, le laisser grandir de 25 % l'aurait fait déborder.
- **La barre du haut passe sur 2 lignes** : la marque, puis les 4 entrées réparties sur
  toute la largeur. À 20 px elles ne tenaient plus à côté de la marque.
- Plancher de 15,6 px sur les 5 libellés les plus petits, et les vignettes de variantes
  de la fiche passent de 130 à 118 px pour rester 2 par ligne.
- La phrase du pied de page, « Quelques minutes par jour jusqu'à l'autonomie », peut
  passer à la ligne : elle tenait sur une ligne à 16 px, plus à 20.

**Plus rien ne dépasse la largeur de l'écran.** La taille de 20 px étant validée par
Cédric, le site a été repris pour que tout y tienne. Les 23 mises en page basculent
bien en une colonne sous 700 px ; le défaut venait de 5 textes écrits en une ligne
insécable, mesurés ici sur 390, 360 et 320 px de large :

| Ce qui débordait | Largeur | Remède |
|---|---|---|
| Sélecteur sans / avec Sangles | 321 px pour 350 | passe sur 2 lignes, rembourrage réduit |
| Les 4 entrées du menu | 330 px pour 350 | passent sur 2 lignes au besoin |
| Bouton « Initiation SPEED : 13mn » | 270 px pour 238 à 320 px d'écran | le libellé peut se couper |
| Ligne « verbe + muscle + notation » | 300 px pour 274 | se coupe sur téléphone seulement |
| Phrase du pied de page | 431 px pour 350 | peut passer à la ligne |

La ligne « verbe + muscle + notation » reste sur une seule ligne sur écran large,
comme Cédric l'avait demandé le 7 septembre : elle ne se coupe que sous 700 px, où
l'alternative était de faire défiler la fiche latéralement.

S'y ajoutent 2 corrections : les postures très larges (`data-bord`) débordaient de
4 px sur leur voisine, leur marge négative ne suivant pas le rembourrage réduit des
vignettes ; et tout mot plus long que sa colonne se coupe désormais au lieu de la
faire déborder. Vérifié : plus aucun dépassement jusqu'à 320 px de large.

### Postures

- **Fiche d'une posture : plus rien n'est posé au-dessus du dessin.** La notation de
  difficulté, qui était placée au-dessus depuis le 7 septembre 2026, passe sous le nom
  de la posture. Pour les postures hautes, dont la tête touche le haut de la découpe,
  le mot « Difficulté » n'arrivait qu'à 16 px du personnage et semblait posé dessus.
- **Garde-fou sur les 3 cadres de posture** (répertoire, carrousel, florilège) :
  `max-height: 100%` sur l'image, pour qu'aucune posture ne puisse dépasser son cadre
  et recouvrir le texte voisin. Sans effet sur les 120 postures actuelles, l'audit
  ci-dessous le montre.
- Plus d'air entre la posture et son texte : l'écart des vignettes du répertoire passe
  de 0,45 rem à 0,70 rem, et la fiche gagne 0,40 rem sous le dessin.
- **Le nom était collé au bas de presque toutes les postures.** Les 120 découpes ont un
  calage `bl` à 0 et le cadre les aligne par le bas : le pied ou la main la plus basse
  touche donc le bord du cadre, et il ne restait que l'écart de la grille avant le nom.
  Le cadre reçoit une marge basse de 5,5 % de la largeur de la vignette, proportionnelle
  donc, ce qui porte le dégagement à une bonne vingtaine de pixels. Cédric avait relevé
  le défaut sur une soixantaine de postures.
- **7 postures avaient été agrandies** (Palmier, Chaise, Poirier niveau confirmé et les
  4 demi Roue) pour qu'elles paraissent moins petites. Cédric a écarté ce remède :
  l'agrandissement rompait l'échelle humaine commune et ne réglait pas le vrai défaut.
  Les 7 facteurs sont **annulés**, `FACTEUR` retrouve ses 4 entrées d'origine.
- **Le dégagement sous la posture est porté à 13 % de la largeur de la vignette**
  (au lieu de 5,5 %), soit 47 px pour une vignette de 274 px et 57 px pour 350 px.
  Le carrousel de l'accueil, qui n'avait que 5 px entre la posture et son nom, reçoit
  9 %, soit 21 px. La fiche d'une posture passe à 42 px sous le dessin.

**Vérification faite à cette occasion** : les dimensions de `_liste.tsv` correspondent
au pixel près à celles des 120 fichiers WebP, et aucune image ne dépasse son cadre.
Le texte n'était donc jamais recouvert par un débordement, seulement collé : les
découpes sont alignées par le bas avec un calage `bl` à 0, le pied ou la main la plus
basse touche le bord du cadre, et il n'y avait que l'écart de la grille avant le nom.

**Audit des 120 postures**, hauteur de l'image rapportée à la hauteur de son cadre,
facteurs `--k` et attributs `data-bord` / `data-plein` / `data-reduit` compris :

| Contexte | Cadre | Postures qui dépassent |
|---|---|---|
| Répertoire, `.tile` | 1,17 × largeur | **aucune sur 120**, à 274, 350 et 500 px de vignette |
| Carrousel, `.ev` | 0,70 × largeur | aucune des 12 affichées, la plus haute étant Equerre allongée à 89 % |
| Florilège, `.fl` | 0,92 × largeur | aucune des 15 affichées, la plus haute étant Triangle incliné à 99 % |

31 postures dépasseraient le cadre du carrousel et 8 celui du florilège si elles y
étaient placées, Palmier en tête à +60 % et +22 %. Le garde-fou les couvre désormais.

### Boutique

- Le bandeau est réduit à son seul surtitre « Boutique » : le titre
  « L'équipement, et un livre » est d'abord devenu « Le tapis de YOGA et les sangles »,
  puis a été retiré à son tour, comme l'accroche
  « Les seules choses qu'on ne télécharge pas… ».
- **Tapis : 78 €** au lieu de 99 €, descriptif réécrit par Cédric. 5 mm de caoutchouc
  recouverts de 1 mm de liège, 3,2 kg, sangle de transport et petit tapis d'appui portant
  l'épaisseur à 12 mm. Disposition en 2 colonnes : la photo du tapis seul à gauche, le
  texte à droite avec les 2 petites photos sous lui, dans leur format d'origine. Les
  2 colonnes sont calées en bas, le bas de la grande photo tombe donc sur celui des
  2 petites.
- **Sangles : 9 € la paire** au lieu de 39 € le kit, descriptif réécrit. Les planches
  imprimées ne sont plus annoncées avec elles. Les 4 postures qu'elles rendent
  indispensables sont citées sous leur nom de bibliothèque : Foetus, Hamac,
  Pigeon royal, Voilier.
- **Le livre est retiré** de la boutique, ainsi que la note « Aucun matériel n'est
  demandé pour commencer ».

### Pied de page et technique

- Le pied de page légal est centré, sur toutes les pages.
- **Pages légales.** Création de `mentions-legales.html` et `confidentialite.html`, liées
  depuis le pied de page. Les conditions générales de vente restent à écrire avant
  l'ouverture de la boutique. Une adresse de contact y est renseignée.
- Leurs 2 liens passent de chemins absolus (`/mentions-legales.html`) à des chemins
  relatifs. Mon audit de la veille les avait ratés et concluait à tort que tous les
  chemins du site étaient relatifs.
- **Polices hébergées localement.** Archivo et Newsreader sont téléchargées dans `fonts/`,
  sous-ensembles latin et latin-ext, 6 fichiers woff2 pour 516 ko. Les 2 `preconnect` et
  l'appel à `fonts.googleapis.com` disparaissent de `index.html` : le site ne contacte plus
  aucun serveur tiers, et l'adresse IP des visiteurs n'est plus transmise à Google.

## 5 octobre 2026

- **Carrousel de l'éveil.** Le sélecteur sans/avec Sangles de l'accueil ne rafraîchissait
  plus les postures : l'appel à `poserEveil` avait été perdu dans `setMode` lors de la
  refonte de la page. Les 12 postures sanglées reviennent, Pilier, Estomac et Grand écart
  compris.
- **Carrousel, version sans sangles.** L'effet d'Estomac devient « tonifie l'arrière des
  cuisses », celui que portait Pilier (sangle), retiré de cette version.
- **Bandeau d'accueil.** « sans même sortir du LIT » repasse en « sans même sortir du lit ».
- **Page Séances.** La carte Before-Start portait encore « 15 min » et l'ancienne
  description. Elle reprend les 3 étapes de l'accueil, Découverte, Initiation et
  Initiation SPEED, dont les durées suivent le sélecteur de sangles.
- **Origine du tapis.** Fabrication en Chine confirmée par Cédric. La page Boutique
  n'annonce aucune origine de fabrication pour l'instant, le texte de la fiche sera revu.
  La contradiction entre « Chine » et le « Portugal » d'un ancien texte est levée :
  l'ancien texte a disparu, et `CLAUDE.md` interdit désormais de remplacer la mention
  sans justificatif du fournisseur.
- **Aigle en rotation.** Il n'y a qu'un nom de plaquette. « Aile en rotation » n'existe
  pas, c'était une mauvaise lecture de `etirement BRAS`, corrigée dans le relevé.
  **Aile** est une posture d'équilibre, sans rapport. Le nom d'usage reste
  **Aigle en torsion**, celui du site : « Aigle en rotation » datait des débuts du
  projet et n'a survécu que sur les plaquettes. Question close, rien à renommer.

## 23 septembre 2026

- **Témoignages.** La section « 3 autres séances GRATUITES » cède la place à
  « Ce que disent ceux qui ont essayé », avec 3 emplacements vides : vidéo, audio, texte.
  Cadres en pointillés et étiquette « à venir » tant qu'ils ne sont pas remplis.
- **Portrait.** Photo de Cédric ajoutée à la section « Qui je suis », avec un fondu à
  l'apparition au défilement. L'état masqué est posé par le script : sans JavaScript,
  l'image reste visible.
- **Mise en page du portrait.** Réduit de moitié, à 220 px. Sur mobile il passe à droite
  du titre de section, le texte descriptif occupant toute la largeur en dessous.
- **Rangement.** Les images sont réparties entre `photo-moi/` et `photo-posture/`.
  L'ancien dossier `web-postures/` disparaît, 38 découpes remplacées sont mises de côté
  dans `photo-posture/_anciennes/`.

## 15 septembre 2026

- **Carrousel de l'éveil.** La barre de défilement laisse place à 2 flèches rondes posées
  sur les bords de la bande. Elles s'estompent en butée de début et de fin.
- **Textes.** Les textes descriptifs des 5 pages sont raccourcis et simplifiés de 53 %,
  de 9 816 à 4 567 caractères. Les titres, durées, noms de séances et la mention légale
  obligatoire sont conservés tels quels.
- **Vidéo.** L'aperçu de l'éveil quitte sa section et rejoint le bandeau d'ouverture,
  à droite du texte, sous le titre.

## 11 et 12 septembre 2026

- **Page Postures.** 5 entrées : glossaire, difficulté, les 8 familles, « quelles postures
  étirent ? » et « quelles postures renforcent ? ». Une seule thématique ouverte à la fois.
- **Efficiences musculaires.** Lecture des 90 fiches individuelles, 144 lignes relevées avec
  le verbe, le muscle et la notation sur 4. Affichées sur la fiche de chaque posture.
- **Thématiques.** Les 8 familles et les 11 questions relevées sur les plaquettes, dans leur
  ordre de lecture. 222 noms cités, tous résolus vers une posture existante.
- **Éveil musculaire sur l'accueil.** Les 12 postures de la séance avec leur effet, et le
  basculement entre les versions avec et sans sangles.
- **Échelle des vignettes.** L'échelle se calcule à partir de la largeur réelle de la
  vignette, ce qui supprime les écarts de taille au redimensionnement.

## 6 et 7 septembre 2026

- Redécoupes des postures signalées comme fautives, dont Cygne, Perche, demi Roue en
  rotation, Grand écart et Loquet.
- Normalisation de l'échelle des personnages et alignement de toutes les postures sur une
  même ligne de sol.

## 5 septembre 2026

- Découpe des 90 postures à partir des planches de glossaire, puis appariement de chaque
  visuel avec son nom.

## 4 septembre 2026

- Structure du site en 4 pages, routage par ancre, palette « Sable ».
- Première série de silhouettes, abandonnée ensuite au profit des découpes en couleur.
