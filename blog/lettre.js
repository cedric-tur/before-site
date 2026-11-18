/* Inscription a la lettre d'information Before-S.
   -------------------------------------------------------------------------
   Le formulaire poste directement chez Brevo, sur l'adresse sibforms.com.
   Le site est statique : il ne doit JAMAIS contenir de cle d'API, sinon
   n'importe qui pourrait lire la liste des contacts.

   Sans ce script, Brevo repond un JSON brut dans un nouvel onglet, ce qui est
   illisible pour le visiteur. Ce script intercepte l'envoi et affiche la
   reponse dans la page.

   Repli : si le navigateur n'a pas fetch, si le reseau coupe ou si Brevo
   refuse la requete, le formulaire repart en envoi classique. L'inscription
   aboutit quand meme, le visiteur voit la page de Brevo. Jamais de perte
   silencieuse.
   ------------------------------------------------------------------------- */
(function () {
  var form = document.querySelector('.lettre__f');
  var etat = document.querySelector('.lettre__etat');
  if (!form || !etat || !window.fetch || !window.FormData) return;

  var bouton = form.querySelector('button[type="submit"]');

  function dire(message, genre) {
    etat.textContent = message;
    etat.className = 'lettre__etat lettre__etat--' + genre;
    etat.hidden = false;
  }

  form.addEventListener('submit', function (evenement) {
    /* Le navigateur affiche lui-meme son message si l'adresse est invalide. */
    if (form.checkValidity && !form.checkValidity()) return;
    evenement.preventDefault();

    var libelle = bouton ? bouton.textContent : '';
    if (bouton) {
      bouton.disabled = true;
      bouton.textContent = 'Envoi...';
    }
    dire('Envoi en cours.', 'attente');

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (reponse) {
        if (!reponse.ok) throw new Error('reponse ' + reponse.status);
        return reponse.json();
      })
      .then(function (donnees) {
        if (!donnees || donnees.success !== true) throw new Error('refus');
        form.hidden = true;
        dire("C'est noté. Ouvrez le courriel que nous venons de vous envoyer "
          + "et cliquez sur le lien pour confirmer votre inscription. Il arrive "
          + "parfois dans les courriers indésirables.", 'ok');
      })
      .catch(function () {
        /* Repli : envoi classique dans l'onglet courant. */
        if (bouton) {
          bouton.disabled = false;
          bouton.textContent = libelle;
        }
        etat.hidden = true;
        form.target = '_self';
        form.submit();
      });
  });
})();
