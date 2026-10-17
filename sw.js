/* Service worker Havre : l’app fonctionne hors ligne une fois visitée. */
const CACHE = "havre-v1";
const SCOPE = self.registration.scope;
const SHELL = new URL("./", SCOPE).href;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll([SHELL, new URL("manifest.webmanifest", SCOPE).href, new URL("pwa/icon-192.png", SCOPE).href]))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || !req.url.startsWith(SCOPE)) return;
  if (req.mode === "navigate") {
    // Réseau d’abord pour les pages, l’app en cache si hors ligne.
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match(SHELL))),
    );
    return;
  }
  // Fichiers versionnés (assets/…) : cache d’abord.
  event.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
