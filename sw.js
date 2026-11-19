/* Service worker Before-S.
   -------------------------------------------------------------------------
   Il sert 2 choses, et rien d'autre :

   1. Les audios gardes sur le telephone. Un fichier audio ne change jamais :
      s'il est en cache, on le sert de la, sans reseau. C'est ce qui permet de
      pratiquer en mode avion, dans un lit, a 7 h du matin.

   2. Le reste du site hors connexion. Reseau d'abord, cache en secours.
      Ce sens-la est important : la page est servie fraiche tant qu'il y a du
      reseau, et un service worker mal ecrit qui servirait le cache d'abord
      figerait le site sur une vieille version pour tous les visiteurs, sans
      moyen simple de les rattraper.

   Les audios ne sont JAMAIS telecharges tout seuls. Ils pesent une trentaine
   de megaoctets : c'est au visiteur de le demander, par le bouton « Garder
   sur mon telephone » de la page d'accueil, qui remplit le cache AUDIOS.

   Pour forcer tous les visiteurs a reprendre une version neuve du site,
   changer SHELL ci-dessous : l'ancien cache est supprime a l'activation.
   ------------------------------------------------------------------------- */

var SHELL = 'before-s-shell-v1';
var AUDIOS = 'before-s-audios';        /* rempli par la page, pas par ici */
var EST_AUDIO = /\/audio\/[^/]+\.m4a$/;

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (noms) {
      return Promise.all(noms.map(function (n) {
        if (n !== SHELL && n !== AUDIOS) { return caches.delete(n); }
        return null;
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') { return; }

  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) { return; }

  /* Un audio ne change pas : s'il est garde, on le sert sans reseau.
     caches.match sans option cherche dans TOUS les caches, donc il trouve
     aussi ce que la page a mis dans AUDIOS. */
  if (EST_AUDIO.test(url.pathname)) {
    e.respondWith(
      caches.match(req).then(function (r) { return r || fetch(req); })
    );
    return;
  }

  /* Tout le reste : reseau d'abord, cache en secours. */
  e.respondWith(
    fetch(req).then(function (r) {
      if (r && r.ok && r.type === 'basic') {
        var copie = r.clone();
        caches.open(SHELL).then(function (c) { c.put(req, copie); });
      }
      return r;
    }).catch(function () {
      return caches.match(req).then(function (r) {
        return r || caches.match('/index.html');
      });
    })
  );
});
