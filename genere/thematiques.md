# Thématiques Before-S

Relevé des plaquettes source, dans l'ordre de lecture de chaque plaquette
(de gauche à droite jusqu'au bout de la ligne, puis ligne suivante).

Source : `POSTURES\CLAUDE\famille *.png` et `POSTURES\CLAUDE\etirement *.png` / `renforcement *.png`.

## Les 8 familles

### Enroulement (8)
Papillon, Expire, Foetus, Hamac, Oreilles pressées, Charrue, Chat, Enfant

### Équilibre (8)
Arbre, Aile, Grenouille, Aigle, Danseur, Perche, Y majuscule, Palmier

### Extension (16)
Arc, Sauterelle, Barque, Cobra, Sphinx, Élève,
Foudre, Poisson, demi Pont, Pont,
Chien, Chameau, Pigeon royal, Fente demi Lune, demi Roue, demi Roue en rotation

### Inclinaison (8)
Croissant de Lune, demi Lune assis, Grand écart incliné,
demi Lune agenouillée, Pilier, Loquet, Triangle incliné, demi Lune

### Inversion (8)
Chien, Chien qui s'étire, demi Chien,
Poirier, Poirier (niveau confirmé), Corbeau, Rocher, Chandelle

### Renforcement (17)
Cygne, demi Lune latérale, Croisé ventral, Planche inversée, Table,
Force, Voilier, demi Pont pointé, Bateau, Tourniquet,
Fente sur côté, Tigre, Guetteur, Fente sur orteils, Étoile, Déesse, Chaise

### Rotation (9)
Croisé, Aigle en rotation, Estomac,
Triangle, Roi des poissons, Pigeon en rotation,
Guetteur en rotation, Fente triangle, Fente en rotation

### Étirement (18)
Bâton, Mains jointes, Virgule, Inspire, demi Lotus, Repos,
Grand écart, Pilier, demi Pince, Diamant, Bambou, Héros,
Guirlande, Prosternation, demi Singe, Equerre en rotation, Equerre, Pyramide

## Les 11 questions

### 5 étirements

**Adducteurs (9)**
Grand écart, demi Lotus, Corbeau, demi Guirlande,
Loquet, Trépied, Arbre, Fente sur côté, Déesse

**Bras (13)**
Bâton, Virgule, Aigle en rotation, Mains jointes, Sauterelle, Arc,
Cygne, Pigeon royal, Fente sur côté, demi Lune, demi Roue, Palmier, Danseur

**Ischio-jambiers (14)**
Estomac, Voilier, Pilier, Hamac, demi Pince, demi Singe,
Poirier, Charrue, Triangle, Pyramide, Equerre, Perche, Danseur, Equerre en rotation

**Nuque (8)**
Oreilles pressées, Oreilles pressées (2), Charrue,
Poisson, Force,
Foetus, Chandelle, Rocher

**Quadriceps (9)**
Héros, Héros (2), Diamant, Bambou, Chameau,
Virgule, demi Lune assis, Pigeon royal, demi Roue

### 6 renforcements

**Abdominaux (8)**
Foetus, Bateau, Tourniquet, Bambou,
demi Lune latérale, Voilier, Equerre, demi Roue en rotation

**Bras (18)**
Cygne, Barque, Poisson, Force, Foudre,
demi Singe, Equerre, Guetteur en rotation, Chien qui s'étire, Planche inversée, Table, Pont,
Sphinx, Guetteur, Élève, demi Chien, Corbeau, Poirier

**Cou (7)**
demi Lune latérale, Mains jointes,
Loquet, Grand écart incliné,
Triangle incliné, Fente triangle, Triangle

**Ischio-jambiers (7)**
Croisé ventral, Planche inversée,
Barque, Sauterelle,
demi Chien, Chien qui s'étire, Perche

**Nuque (10)**
Arc, Sauterelle, Barque,
Héros, Foudre, Bambou, demi Roue,
Planche inversée, Table, Chameau

**Mollets (2)**
Chaise, Chien qui s'étire

Ajouté par Cédric en octobre 2026, sans plaquette source. Les 2 postures portent
déjà un mollet sur leur fiche : Chaise renforce MOLLETS 3, Chien qui s'étire
tonifie MOLLETS 4.

**Quadriceps (13)**
Arc, Bateau, Table, Pont, demi Pont pointé, Fente sur côté,
Tigre, Fente sur orteils, Perche, Danseur, Aigle, Chaise, Déesse

## 3 thèmes supplémentaires

Plaquette `etirement 2 fessiers - 2 mollet - 3 psoas`, complétée par la dictée de Cédric.

**Étire fessiers**
Roi des poissons, Pigeon en rotation, Cygne (la première posture de sa plaque)

**Étire psoas**
Toutes les fentes sauf Fente sur côté : Fente demi Lune, Fente triangle,
Fente en rotation, Fente sur orteils, plus Pigeon royal

**Étire mollets**
Guetteur, Guetteur en rotation, Poirier

## À construire

**Renforce triceps** (dicté par Cédric, sans plaquette source)
Planche inversée, Table, Pont, Corbeau, Poirier.
Ces 5 postures restent également dans « renforce bras ».

Les fiches individuelles confirment déjà 4 des 5 : Corbeau « renforce TRICEPS 3 »,
Planche inversée « fortifie TRICEPS 3 », Pont « renforce TRICEPS 4 »,
Table « fortifie TRICEPS & QUADRICEPS 2 ». Seul Poirier ne porte pas de mention
triceps sur sa fiche (uniquement « étire MOLLETS 2 ») : c'est un ajout de Cédric.

## Ordre d'affichage des thématiques

Deux rangements coexistent. **L'ordre de lecture des plaquettes ci-dessus reste la
source** : il est écrit en dur dans `FAMILLES`, `ETIREMENTS` et `RENFORCEMENTS`
et n'est jamais modifié. Le classement se fait uniquement au moment de l'affichage.

Le drapeau `TRI_PAR_NOTE` dans `index.html` commande le rangement :

- `false` : ordre de lecture de la plaquette, celui du tableau ci-dessus.
  **Réglage actuel, choisi par Cédric le 7 septembre 2026.**
- `true` : les postures d'une question d'étirement ou de renforcement sont classées
  par notation croissante, 1 puis 2 puis 3 puis 4. Celles dont la fiche ne porte pas
  ce muscle n'ont pas de note et ferment la marche. Essayé puis écarté, le code est
  conservé pour pouvoir y revenir d'un mot.

Les familles ne sont jamais triées, elles ne portent pas de muscle.

## Points à trancher

1. **Pilier / Trépied** : tranché par les fiches individuelles.
   `Pilier` = allongé avec sangle, jambes vers le haut, famille ÉTIREMENT,
   difficulté 1, étire ischio-jambiers 1.
   `Trépied` = flexion latérale à genoux, famille INCLINAISON, difficulté 1,
   étire adducteurs 1.
   La plaquette `famille inclinaison` étiquette donc Trépied sous le nom « Pilier ».
   Erreur de plaquette à corriger, ou renommage à confirmer.

2. **Aigle en rotation** : tranché par Cédric le 5 octobre 2026. Il n'y a qu'une posture
   et qu'un nom de plaquette, **Aigle en rotation**, cité à l'identique par
   `famille rotation` et `etirement bras`. « Aile en rotation » n'existe pas : c'était
   une mauvaise lecture de la plaquette `etirement BRAS`, corrigée ci-dessus.
   **Aile** et **Aile (niveau confirmé)** sont de tout autres postures, de la famille
   Équilibre.

   Reste un écart de nom entre la plaquette et la bibliothèque : le site, `_liste.tsv`
   et le carrousel de l'éveil l'appellent **Aigle en torsion**. À trancher avec Cédric,
   un renommage toucherait le nom affiché, le slug `aigle-en-torsion`, le fichier WebP,
   le carrousel de l'accueil et les 2 questions qui la citent.

3. **demi Guirlande** figure dans `etirement adducteur` mais pas dans le glossaire
   des 118 entrées.

4. **Grand écart incliné** : le fichier s'appelle `grand écart incliné.png` et les
   plaquettes `famille inclinaison` et `renforcement COU` le nomment ainsi, mais le
   titre de sa propre fiche est « Grand écart assis ». Quel nom garder sur le site ?

5. **Croissant de Lune** porte « étire FLANCS » sans aucune notation sur sa fiche,
   contrairement à toutes les autres. Volontaire ou notation oubliée ?
