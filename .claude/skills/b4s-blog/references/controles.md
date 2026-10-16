# Contrôles avant de montrer un brouillon à Cédric

Remplacer `F` par le chemin de l'article (`blog/<slug>/index.html`). Lancer chaque commande, noter le résultat.

## Bloquants : un seul en échec, on corrige avant de montrer quoi que ce soit

| # | Contrôle | Commande ou geste | Attendu |
|---|---|---|---|
| B1 | Aucun tiret cadratin ni demi-cadratin | commande 1 ci-dessous | rien |
| B2 | Aucun champ du modèle oublié | `grep -c '{{' F` | 0 |
| B3 | Aucune promesse médicale | commande 2 ci-dessous | rien, ou chaque occurrence justifiée (ex. « demandez conseil à votre médecin ») |
| B4 | Slug unique | `ls blog/` | aucun dossier du même nom avant celui-ci |
| B5 | Longueur | commande 3 ci-dessous | 1 000 mots au moins (texte visible) |
| B6 | JSON-LD lisible | ouvrir le bloc `application/ld+json`, le coller dans https://validator.schema.org | aucune erreur |
| B7 | Aucun prix de l'offre payante | `grep -nE '[0-9]+ ?€' F` | rien, sauf accord de Cédric |
| B8 | Liens externes vivants | pour chaque lien : `curl -sL -o /dev/null -w '%{http_code}' -A 'Mozilla/5.0' URL` | 200 |

Les trois commandes, à copier telles quelles :

```bash
# 1. tirets interdits (U+2014 et U+2013)
grep -nP '\x{2014}|\x{2013}' F
# 2. vocabulaire médical interdit
grep -niE 'soign|guéri|guerir|traite|thérapeut|soulag|corrig' F
# 3. nombre de mots du texte visible
sed 's/<[^>]*>//g' F | wc -w
```

Si `grep -P` n'existe pas sur la machine (certains Mac, Windows) : dans VS Code, recherche globale (Ctrl+Maj+F), bouton « expression régulière » activé, motif `\u2014|\u2013`. Zéro résultat attendu.

## Signalés : on les montre à Cédric, il tranche

| # | Contrôle | Attendu |
|---|---|---|
| S1 | Encadré « La réponse en bref » présent, avant le sommaire | oui |
| S2 | 6 à 8 sections h2 | oui |
| S3 | FAQ en dernière section, 4 à 7 questions, la 1re « C'est quoi la méthode Before-S ? » | oui |
| S4 | Phrase canonique au mot près, dans l'encadré, la FAQ et le pied de page | `grep -c "Before-S est une méthode de yoga accessible et détaillée" F` = 3 au moins |
| S5 | FAQ visible et FAQPage identiques | même nombre de questions, même texte |
| S6 | 3 à 5 liens externes, 2 à 4 liens internes, aucun vers une page qui n'existe pas | compter |
| S7 | Tout chiffre extérieur porte son lien | relire chaque nombre |
| S8 | Titre SEO de 60 caractères au plus, description de 140 à 160 | compter |
| S9 | Le mot yoga toujours qualifié, vouvoiement, nombres en chiffres | relire |
| S10 | Nom de séance toujours suivi de son sous-titre français | relire |
| S11 | Lecture à voix haute : aucune phrase qui sonne « écrite par une machine » | relire |

## Vérification à l'écran

Ouvrir le fichier dans le navigateur avec un petit serveur local, depuis la racine du dépôt :

```bash
python3 -m http.server 8000
```

puis http://localhost:8000/blog/<slug>/ : regarder en largeur ordinateur et en largeur téléphone (outils du navigateur, 390 px). Rien ne doit déborder, la police doit être celle du site.
