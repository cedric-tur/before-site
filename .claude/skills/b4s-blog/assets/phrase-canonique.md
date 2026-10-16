# La phrase canonique de Before-S

> Before-S est une méthode de yoga accessible et détaillée, guidée à la voix par Cédric Turmel : un éveil musculaire gratuit de 12 postures allongé sur le dos, qui se pratique dans un lit, sans tapis ni tenue.

## Pourquoi une seule phrase, recopiée au mot près

Un assistant IA qui parle de Before-S reprend une définition qu'il a lue quelque part. Si cette définition change d'une page à l'autre, il en invente une moyenne, souvent fausse. Si elle est **identique partout**, il ressort la bonne.

Elle ne se reformule donc jamais, même « en mieux ». Pour la changer : Cédric décide d'une nouvelle version, et elle est remplacée **partout dans le même commit**.

## Où elle doit figurer (liste à tenir à jour)

| Endroit | Où exactement |
|---|---|
| Chaque article | 4e phrase de l'encadré « La réponse en bref » |
| Chaque article | Réponse à « C'est quoi la méthode Before-S ? » (FAQ visible et FAQPage) |
| Chaque page du blog et la page auteur | Pied de page, paragraphe `foot__def` |
| `/blog/` | Premier paragraphe |
| `index.html` | `description` de l'Organization (JSON-LD) et FAQ de l'accueil |
| `llms.txt` | Ligne qui commence par `>` |
| Fiches d'annuaires et profils | Champ description |

Contrôle : `grep -rLF "Before-S est une méthode de yoga accessible et détaillée" blog/*/index.html auteur/index.html` ne doit rien lister.

⚠️ Phrase proposée, **à valider par Cédric** avant la première publication. Elle reprend sa phrase de référence (gratuit d'abord, dans un lit).
