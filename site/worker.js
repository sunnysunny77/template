const version = 1;
const cacheName = `template-v${version}`;

const cacheAssets = [
  "./",
  "./index.php",
  "./favicon.ico",
  "./manifest.json",
  "./css/app.min.css",
  "./js/app.min.js",
  "./js/preload.js",
  "./images/pwa-logo-small.webp",
  "./images/pwa-logo.webp"
];

self.addEventListener("install", (event) => {

  console.log("Service worker is installed");

  event.waitUntil(caches.open(cacheName).then((cache) => {

    console.log("Caching assets");
    cache.addAll(cacheAssets);
  }).then(() => {

    self.skipWaiting();
  }));
});

self.addEventListener("fetch", event => {

  console.log("Fetching via Service worker");
  
  event.respondWith(caches.match(event.request).then(cachedResponse => {

    const networkUpdate = fetch(event.request).then(networkResponse => {

      caches.open(cacheName).then(cache => cache.put(event.request, networkResponse));
      return networkResponse.clone();
    }).catch(() => {

      return false;
    });

    return cachedResponse || networkUpdate;
  }));
});