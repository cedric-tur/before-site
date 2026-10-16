# Publier un article, après « je valide » de Cédric

Le site est statique, hébergé par GitHub Pages : publier, c'est ajouter des fichiers au dépôt puis pousser. Il n'y a ni compilation ni serveur.

## Les gestes, dans l'ordre

1. **Retirer le statut brouillon** dans `blog/<slug>/index.html` : supprimer `<meta name="robots" content="noindex">` et la ligne `STATUT : brouillon`. Poser `datePublished` et `dateModified` à la date du jour.
2. **Ajouter la carte** en tête de la liste de `blog/index.html`, ajouter l'article au `blogPost` du JSON-LD, mettre à jour `dateModified`.
3. **Sitemap** : ajouter l'entrée `<url>` de l'article dans `sitemap.xml`, avec `lastmod` = date de publication. Mettre à jour le `lastmod` de `/blog/`. Ne toucher à aucune autre date.
4. **llms.txt** : ajouter l'article sous `## Articles` (`- [Titre](adresse): description`) et, si l'article répond à une question nouvelle, une ligne sous `## Questions et la page qui y répond`.
5. **Pied de page** : si l'article vise une requête importante, ajouter son lien dans la colonne « Ressources » de toutes les pages du blog et de `/auteur/`, avec pour ancre la requête telle qu'on la tape (« Yoga sans tapis »), jamais le titre éditorial.
6. **Lien retour** : ajouter, dans un article déjà publié qui parle d'un sujet voisin, une phrase avec un lien vers le nouvel article. Cédric choisit la phrase. Un article sans aucun lien entrant est indexé mais rarement montré.
7. **Contrôle final** : relancer B1, B2 et S4 de `controles.md` sur tous les fichiers modifiés.
8. **Résumé à Cédric** : la liste des fichiers modifiés, en une ligne chacun. **Demander l'accord** pour le commit.
9. **Commit** avec un message simple : `Blog : <titre de l'article>`. **Pousser seulement si Cédric le dit en toutes lettres**, sinon lui laisser la commande `git push`.
10. **Après la mise en ligne** (1 à 2 minutes) : ouvrir `https://before-s.com/blog/<slug>/` et vérifier que la page s'affiche. Puis prévenir Bing par IndexNow (commande dans `indexnow/LISEZMOI.md` du kit, ou ci-dessous), avec l'article, `/blog/` et `/sitemap.xml`.
11. **Search Console** : Cédric peut demander l'indexation de la nouvelle adresse (Inspection de l'URL, « Demander une indexation »).

## Commande IndexNow

```bash
curl -s -o /dev/null -w "%{http_code}\n" -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{"host":"before-s.com","key":"<CLÉ>","keyLocation":"https://before-s.com/<CLÉ>.txt","urlList":["https://before-s.com/blog/<slug>/","https://before-s.com/blog/","https://before-s.com/sitemap.xml"]}'
```

`200` ou `202` = reçu. Reçu ne veut pas dire indexé.

## Retoucher un article déjà publié

Une retouche de fond (nouvelle section, chiffre mis à jour) : changer `dateModified` dans le JSON-LD, le `lastmod` du sitemap, puis IndexNow pour cette seule adresse. Une faute corrigée : rien à dater. Le `slug` ne change jamais.
