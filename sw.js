self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("piggy-cache-v2")  // 👈 改這個版本號
      .then(cache => cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "https://cdn.jsdelivr.net/npm/chart.js"
      ]))
  );
});


self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

