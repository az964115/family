self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("piggy-cache-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "https://cdn.jsdelivr.net/npm/chart.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
