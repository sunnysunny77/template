const version = 'v1';

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(version);
  await cache.addAll(resources);
};

self.addEventListener('install', (event) => {
  console.log(`${version} installing...`);
  event.waitUntil(
    addResourcesToCache([
      "./",
      "./index.php",
      "./css/app.min.css",
      "./js/app.min.js",
      "./font/Poppins-Regular.ttf"
    ])
  );
});

async function fetchAndCacheIfOk(event) {
  try {
    const response = await fetch(event.request);

    // don't cache non-ok responses
    if (response.ok) {
      const responseClone = response.clone();
      const cache = await caches.open(version);
      await cache.put(event.request, responseClone);
    }

    return response;
  } catch (e) {
    return e;
  }
}

async function fetchWithCache(event) {
  const cache = await caches.open(version);
  const response = await cache.match(event.request);
  if (!!response) {
    // it is cached but we want to update it so request but not await
    fetchAndCacheIfOk(event);
    // return the cached response
    return response;
  } else {
    // it was not cached yet so request and cache
    return fetchAndCacheIfOk(event);
  }
}

function handleFetch(event) {
  // only intercept the request if there is no no-cache header
  if (event.request.headers.get("cache-control") !== "no-cache") {
    // important: respondWith has to be called sync, otherwise
    // the service worker won't know whats going on.
    // Had to learn this the hard way
    event.respondWith(fetchWithCache(event));
  }
}

self.addEventListener("fetch", handleFetch);