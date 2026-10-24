/* Fenetres de posture du blog.
   Les donnees viennent des sources du site : les familles de index.html et
   genere/efficiences.tsv. Les images sont servies depuis /photo-posture/.
   Regenerer avec scratchpad/popup_data.py si une famille change. */
(function () {
  "use strict";

  var POSTURES = {"demi-pont":{"n":"demi Pont","f":"Renforcement","e":["renforce QUADRICEPS"]},"baton":{"n":"Bâton","f":"Étirement","e":["étire BRAS & MOLLETS"]},"croissant-de-lune":{"n":"Croissant de lune","f":"Inclinaison","e":["étire FLANCS"]},"pilier-sangle":{"n":"Pilier (sangle)","f":"Étirement","e":["étire ISCHIO-JAMBIERS"]},"croise":{"n":"Croisé","f":"Rotation","e":["stimule la mobilité du DOS"]},"estomac-sangle":{"n":"Estomac (sangle)","f":"Rotation","e":["étire ISCHIO-JAMBIERS"]},"equerre-allongee":{"n":"Equerre allongée","f":"Étirement","e":["étire ISCHIO-JAMBIERS","tonifie ABDOMINAUX"]},"aigle-en-torsion":{"n":"Aigle en torsion","f":"Rotation","e":["étire BRAS"]},"grand-ecart-sangle":{"n":"Grand écart (sangle)","f":"Étirement","e":["étire ADDUCTEURS"]},"expire":{"n":"Expire","f":"Enroulement","e":["comprime les poumons"]},"inspire":{"n":"Inspire","f":"Étirement","e":["déploie la cage thoracique"]},"repos":{"n":"Repos","f":"Étirement","e":["détend ÉPAULES & HANCHES"]},"hamac-sangle":{"n":"Hamac (sangle)","f":"Enroulement","e":["étire ISCHIO-JAMBIERS"]},"sphinx":{"n":"Sphinx","f":"Extension","e":["renforce ÉPAULES","tonifie NUQUE"]},"chandelle":{"n":"Chandelle","f":"Inversion","e":["étire NUQUE"]},"demi-pince":{"n":"demi Pince","f":"Étirement","e":["étire ISCHIO-JAMBIERS"]},"poirier-niveau-confirme":{"n":"Poirier (niveau confirmé)","f":"Inversion","e":["renforce TRICEPS"]},"eleve":{"n":"Élève","f":"Extension","e":["renforce BRAS"]},"voilier":{"n":"Voilier","f":"Renforcement","e":["étire ISCHIO-JAMBIERS","tonifie ABDOMINAUX"]},"papillon":{"n":"Papillon","f":"Enroulement","e":["étire ADDUCTEURS"]},"aigle":{"n":"Aigle","f":"Équilibre","e":["renforce QUADRICEPS"]},"enfant":{"n":"Enfant","f":"Enroulement","e":["détend le bas du DOS"]},"chat":{"n":"Chat","f":"Enroulement","e":[]},"cobra":{"n":"Cobra","f":"Extension","e":["tonifie NUQUE"]},"roi-des-poissons":{"n":"Roi des poissons","f":"Rotation","e":["étire FESSIERS"]},"grand-ecart-incline":{"n":"Grand écart incliné","f":"Inclinaison","e":["tonifie COU"]}};

  var FAMILLES = {"Enroulement":["papillon","expire","foetus","foetus-sangle","hamac-sangle","oreilles-pressees","charrue","chat","enfant"],"Équilibre":["arbre-niveau-confirme","aile-niveau-confirme","grenouille","aigle","danseur","perche","y-majuscule-niveau-confirme","palmier"],"Extension":["arc","sauterelle","barque","cobra","sphinx","eleve","foudre","poisson","pont-niveau-confirme","chien","chameau-niveau-confirme","pigeon-royal","fente-demi-lune","demi-roue","demi-roue-en-rotation-niveau-confirme"],"Inclinaison":["croissant-de-lune","demi-lune-assis","grand-ecart-incline","demi-lune-agenouillee","trepied","loquet","triangle-incline","demi-lune"],"Inversion":["chien","chien-qui-s-etire","chien-qui-s-etire-pointe","demi-chien","poirier","poirier-niveau-confirme","corbeau","rocher","chandelle"],"Renforcement":["cygne-niveau-confirme","demi-lune-laterale","croise-ventral","planche-inversee","table","force","voilier","demi-pont","demi-pont-pointe","bateau","tourniquet","fente-sur-cote-niveau-confirme","tigre","guetteur","fente-sur-orteils","etoile-lune","deesse","chaise"],"Rotation":["croise","aigle-en-torsion","estomac-sangle","roi-des-poissons","pigeon-en-rotation","guetteur-en-rotation","fente-triangle","fente-en-rotation","triangle"],"Étirement":["baton","mains-jointes","virgule","inspire","demi-lotus","repos","grand-ecart-sangle","pilier-sangle","demi-pince","diamant","bambou","heros","guirlande","prosternation","demi-singe","equerre-en-rotation","equerre-debout","pyramide"]};

  /* joli nom a partir du slug, pour les postures des familles
     qui ne sont pas dans POSTURES */
  function nomDe(slug) {
    if (POSTURES[slug]) { return POSTURES[slug].n; }
    return slug.replace(/-/g, " ").replace(/^./, function (c) { return c.toUpperCase(); });
  }

  var boite, corps, titre, dernierDeclencheur;

  function construire() {
    boite = document.createElement("div");
    boite.className = "po-fond";
    boite.setAttribute("hidden", "");
    boite.innerHTML =
      '<div class="po-boite" role="dialog" aria-modal="true" aria-labelledby="po-titre">' +
      '<button class="po-fermer" type="button" aria-label="Fermer">&#10005;</button>' +
      '<h2 id="po-titre"></h2><div class="po-corps"></div></div>';
    document.body.appendChild(boite);
    titre = boite.querySelector("#po-titre");
    corps = boite.querySelector(".po-corps");

    boite.addEventListener("click", function (e) {
      if (e.target === boite || e.target.classList.contains("po-fermer")) { fermer(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !boite.hasAttribute("hidden")) { fermer(); }
    });
  }

  function ouvrir(nom, html, declencheur) {
    if (!boite) { construire(); }
    dernierDeclencheur = declencheur || null;
    titre.textContent = nom;
    corps.innerHTML = html;
    boite.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    boite.querySelector(".po-fermer").focus();
  }

  function fermer() {
    boite.setAttribute("hidden", "");
    document.body.style.overflow = "";
    corps.innerHTML = "";
    if (dernierDeclencheur) { dernierDeclencheur.focus(); }
  }

  function posture(slug, declencheur) {
    var p = POSTURES[slug];
    if (!p) { return; }
    var h = '<img src="/photo-posture/' + slug + '.webp" alt="Posture ' + p.n + '" loading="lazy">';
    h += '<p class="po-fam">Famille ' + p.f + '</p>';
    if (p.e.length) { h += '<p class="po-eff">' + p.e.join(" · ") + "</p>"; }
    h += '<p class="po-lien"><a href="/#postures">Voir les 90 postures du répertoire</a></p>';
    ouvrir(p.n, h, declencheur);
  }

  function famille(nom, declencheur) {
    var lst = FAMILLES[nom];
    if (!lst) { return; }
    var h = '<p class="po-fam">' + lst.length + " postures dans cette famille</p><ul class=\"po-liste\">";
    lst.forEach(function (s) {
      h += "<li>" + nomDe(s) + "</li>";
    });
    /* le repertoire ouvre cette famille de lui-meme, voir index.html */
    h += '</ul><p class="po-lien"><a href="/?famille=' + encodeURIComponent(nom) +
         '#postures">Ouvrir la famille ' + nom + ' dans le répertoire</a></p>';
    ouvrir("Famille " + nom, h, declencheur);
  }

  function video(declencheur) {
    ouvrir("Les 12 postures en 1 minute",
      '<video controls playsinline preload="metadata" poster="/images/eveil-poster.webp">' +
      '<source src="/videos/eveil-accelere.mp4" type="video/mp4"></video>' +
      '<p class="po-eff">L\'éveil musculaire filmé au drone, en accéléré.</p>', declencheur);
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-p],[data-f],[data-video]") : null;
    if (!b) { return; }
    e.preventDefault();
    if (b.hasAttribute("data-p")) { posture(b.getAttribute("data-p"), b); }
    else if (b.hasAttribute("data-f")) { famille(b.getAttribute("data-f"), b); }
    else { video(b); }
  });
}());
