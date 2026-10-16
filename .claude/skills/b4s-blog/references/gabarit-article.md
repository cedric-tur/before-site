# Le gabarit d'un article Before-S

Un seul gabarit : `assets/modele-article.html`. Un article apporte du contenu, jamais sa propre structure. Copier le modèle, ne pas le réécrire.

## Emplacement et adresse

- Fichier : `blog/<slug>/index.html` → adresse `https://before-s.com/blog/<slug>/`.
- `slug` : la requête cible, en minuscules, sans accents, mots séparés par des tirets simples (`yoga-au-lit-le-matin`). Il ne change plus jamais après publication.

## L'ordre, qui ne bouge pas

| # | Bloc | Contenu |
|---|---|---|
| 1 | En-tête | Catégorie, titre (h1), « Par Cédric TURMEL », date, durée de lecture |
| 2 | **La réponse en bref** | 4 à 6 phrases autonomes : la réponse, une idée reçue corrigée, le vrai enjeu, la phrase canonique, le lien avec Before-S sans vendre |
| 3 | Introduction | 2 à 4 paragraphes : la gêne de départ, à qui s'adresse l'article, ce qu'il va traiter |
| 4 | Sommaire | Colonne de gauche, fixe pendant la lecture, effet doré au survol (sous 900 px, il repasse au-dessus du texte). Une ligne par section, ancres identiques aux `id`. Dans le HTML, il est placé avant le texte, dans `.article__grille` |
| 5 | 6 à 8 sections h2 | Chacune ouvre sur sa réponse. Une citation attribuée au moins. Chiffres sourcés. |
| 6 | Mise en garde | « Les séances proposées ne remplacent pas un avis médical... » |
| 7 | **FAQ, dernière section** | 4 à 7 questions, la 1re est « C'est quoi la méthode Before-S ? » |
| 8 | Appel à l'action | Reprend la promesse de l'article, mène à une séance gratuite, lien avec `?utm_source=blog-<slug>` |
| 9 | Auteur | Photo, 2 lignes, lien vers `/auteur/` |

## Les catégories (liste fermée)

`Au lit` · `Sans matériel` · `Mobilité` · `Avant le sport` · `Débuter`

Une nouvelle catégorie est une décision de Cédric, pas une initiative.

## Le JSON-LD de l'article

Trois blocs dans le `@graph` du modèle :
- `Article` : titre, description, dates, `author` vers `https://before-s.com/auteur/#person`, `publisher` vers `https://before-s.com/#organisation`.
- `BreadcrumbList` : Accueil, Blog, l'article.
- `FAQPage` : les mêmes questions et les mêmes réponses que la FAQ visible, au mot près.

Pas d'avis ni de note étoilée auto-déclarés : c'est interdit par Google et c'est ce qui fait perdre la confiance des moteurs.
