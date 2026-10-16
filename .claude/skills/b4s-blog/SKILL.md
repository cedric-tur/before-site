---
name: b4s-blog
description: Propose, rédige et prépare la publication d'un article du blog de before-s.com (méthode Before-S de Cédric Turmel, yoga accessible au lit et sans tapis). À utiliser dès que Cédric parle d'article, de blog, de sujet à écrire, de référencement, de Google, de ChatGPT ou de « être cité par les IA », ou demande une veille de ses concurrents. Il fait la veille, propose 3 sujets, rédige un brouillon au gabarit fixe, lance les contrôles, et ne publie qu'après la validation écrite de Cédric. Ne jamais commiter ni pousser sans son accord.
---

# b4s-blog : le blog de before-s.com

Un article Before-S a un seul but : **être la meilleure réponse à une question précise**, assez claire pour qu'un moteur de recherche la classe et qu'un assistant IA (ChatGPT, Perplexity, Claude, Gemini) la cite.

Avant toute rédaction, lire `CLAUDE.md` à la racine du dépôt : ses règles éditoriales priment sur tout. Puis lire les fichiers de `references/` au moment indiqué ci-dessous.

## Le circuit, en 6 étapes, toujours dans cet ordre

**Rien ne saute une étape. Rien n'est publié sans le mot de Cédric.**

### 1. Veille (lire `references/veille.md`)
Chercher sur le web ce qui ressort en tête pour les requêtes visées et ce que publient les concurrents (Le Tigre Yoga, Clarisse Ernoux, The Last Yogi, et les pages santé qui occupent les requêtes). Noter : qui est en tête, quel format domine (liste, guide, vidéo), ce qui manque à leurs réponses.

### 2. Croisement avec la méthode
Garder seulement les requêtes où Before-S a quelque chose de vrai et de différent à dire : au lit, sans tapis, sans tenue, à l'oreille, gratuit, corps raide accueilli. Écarter une requête qu'on ne peut traiter qu'en promettant un effet sur la santé.

### 3. Proposer 3 sujets
Présenter 3 sujets à Cédric, chacun sur 5 lignes : titre, requête cible, intention (ce que la personne veut savoir), séance Before-S reliée, pourquoi on peut gagner. Mettre à jour `.claude/skills/b4s-blog/sujets.md` (les dossiers qui commencent par un point ne sont jamais publiés par GitHub Pages). **Attendre son choix.** Ne jamais en choisir un à sa place.

### 4. Rédiger le brouillon (lire `references/regles-redaction.md` et `references/gabarit-article.md`)
Copier `.claude/skills/b4s-blog/assets/modele-article.html` dans `blog/<slug>/index.html`. Garder `noindex` et `STATUT : brouillon`. Remplir chaque `{{...}}`. Vérifier chaque lien externe (`curl` en 200). Ajouter en tête du fichier la liste « À VÉRIFIER PAR CÉDRIC » : chaque affirmation sur la méthode, chaque chiffre et sa source.

### 5. Contrôles (lire `references/controles.md`)
Lancer les contrôles bloquants puis signalés. Un contrôle bloquant en échec = on corrige avant de montrer quoi que ce soit. Puis montrer à Cédric : le chemin du fichier, comment l'ouvrir dans le navigateur, la liste « À VÉRIFIER », les contrôles signalés.

### 6. Publier, seulement après « je valide » (lire `references/publication.md`)
Retirer `noindex` et le statut, mettre à jour `/blog/`, le sitemap, `llms.txt` et le pied de page, poser un lien depuis un ancien article. Montrer le résumé des changements, **demander l'accord avant le commit**, et laisser Cédric pousser (ou pousser seulement s'il le dit en toutes lettres). Après la mise en ligne, prévenir Bing par IndexNow et vérifier l'adresse publique.

## Le rythme
Un article par semaine, validé par Cédric. Mieux vaut un article par semaine pendant 6 mois que 10 articles en une semaine puis plus rien.

## Ce qui ne se fait jamais
- Publier un brouillon sans validation écrite de Cédric.
- Inventer un chiffre, une étude, une citation ou une adresse web.
- Promettre un effet sur la santé (soigner, guérir, traiter, soulager une douleur, corriger).
- Annoncer un prix de l'offre payante tant qu'elle n'est pas en vente.
- Reformuler la phrase canonique (`assets/phrase-canonique.md`) : elle se recopie au mot près.
- Utiliser un tiret cadratin ou demi-cadratin, y compris dans « 12 à 14 min ».
- Lier vers une page qui n'existe pas encore.
