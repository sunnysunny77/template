self.addEventListener("install", (event) => {
  
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "./",
          "./index.php",
          "./css/app.min.css",
          "./js/app.min.js",
          "/font/Poppins-Regular.ttf"
        ])
      )
  );
});

self.addEventListener("fetch", (event) => {

  if (event.request.method !== "GET") return;

  event.respondWith(
    (async () => {

      const cache = await caches.open("v1");
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {

        if (navigator.onLine) event.waitUntil(cache.add(event.request));
        return cachedResponse;
      }

      return fetch(event.request);
    })()
  );
});
