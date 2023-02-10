import { precacheAndRoute } from "workbox-precaching";
import { CacheFirst } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { registerRoute } from "workbox-routing";

self.__precacheManifest = [].concat(self.__precacheManifest || []);

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "googleapis",
    plugins: [
      new ExpirationPlugin({
        // Only cache 10 requests.
        maxEntries: 10,
      }),
    ],
    method: "GET",
    cacheableResponse: { statuses: [0, 200] },
  })
);

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
