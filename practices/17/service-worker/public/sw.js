const STATIC_CACHE = "static-v1";
const API_CACHE = "api-v1";

const STATIC_ASSETS = ["/", "/index.html", "/app.js"];

self.addEventListener("install", (event) => {
  console.log("[SW] Install");

  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activate");
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== STATIC_CACHE && k !== API_CACHE)
            .map((k) => caches.delete(k)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        return (
          cached ||
          fetch(event.request).then((res) => {
            return caches.open(STATIC_CACHE).then((cache) => {
              cache.put(event.request, res.clone());
              return res;
            });
          })
        );
      }),
    );
    return;
  }

  if (url.pathname.startsWith("/api/")) {
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          return caches.open(API_CACHE).then((cache) => {
            cache.put(event.request, res.clone());
            return res;
          });
        })
        .catch(() => {
          return caches.match(event.request);
        }),
    );
    return;
  }

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request)),
  );
});
