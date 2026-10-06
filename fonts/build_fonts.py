# -*- coding: utf-8 -*-
"""Telecharge les polices Google utilisees par le site et reecrit un CSS local.
Ne garde que les sous-ensembles latin et latin-ext.
"""
import io, os, re, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
SRC_CSS = os.path.join(HERE, "google.css")
OUT_CSS = os.path.join(HERE, "fonts.css")
KEEP = ("latin", "latin-ext")

css = io.open(SRC_CSS, encoding="utf-8").read()

blocs = re.findall(r"/\*\s*([a-z-]+)\s*\*/\s*(@font-face\s*\{.*?\})", css, re.S)
print("blocs trouves :", len(blocs))

gardes = [(sub, b) for sub, b in blocs if sub in KEEP]
print("blocs gardes  :", len(gardes))

urls = {}
for sub, b in gardes:
    m = re.search(r"url\((https://fonts\.gstatic\.com/[^)]+)\)", b)
    fam = re.search(r"font-family:\s*'([^']+)'", b).group(1).lower()
    ital = "italic" in re.search(r"font-style:\s*([a-z]+)", b).group(1)
    url = m.group(1)
    if url not in urls:
        nom = f"{fam}-{sub}{'-italic' if ital else ''}.woff2"
        urls[url] = nom

print("fichiers uniques :", len(urls))

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36")

total = 0
for url, nom in urls.items():
    dest = os.path.join(HERE, nom)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        data = r.read()
    with open(dest, "wb") as f:
        f.write(data)
    total += len(data)
    print(f"  {nom:38s} {len(data)/1024:7.1f} ko")

sortie = ["/* Polices hebergees localement, aucune requete vers des serveurs tiers.",
          "   Archivo et Newsreader, licence SIL Open Font License 1.1.",
          "   Sous-ensembles latin et latin-ext uniquement. */", ""]
for sub, b in gardes:
    url = re.search(r"url\((https://fonts\.gstatic\.com/[^)]+)\)", b).group(1)
    bloc = b.replace(url, urls[url])
    bloc = re.sub(r"\n\s*\n", "\n", bloc)
    sortie.append(f"/* {sub} */")
    sortie.append(bloc)
    sortie.append("")

io.open(OUT_CSS, "w", encoding="utf-8").write("\n".join(sortie))
print(f"\nTotal telecharge : {total/1024:.0f} ko")
print("CSS ecrit :", OUT_CSS)
