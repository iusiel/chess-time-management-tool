const version = "1.1";

const addResourcesToCache = async (resources) => {
  const cache = await caches.open("pwa-assets");
  await cache.addAll(resources);
};

// This code executes in its own worker or thread
self.addEventListener("install", (event) => {
  console.log("Service worker installed");
  event.waitUntil(addResourcesToCache(["/", "/index.html", "/icon.png"]));
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  return fetch(request);
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
