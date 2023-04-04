import { precacheAndRoute } from "workbox-precaching";
import { NetworkFirst } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { registerRoute } from "workbox-routing";

/*
import { BackgroundSyncPlugin } from "workbox-background-sync"; 

const BackgroundSyncPlugin = new BackgroundSyncPlugin('myQueueName',{
  maxReentionTime:24*60,
}); */
 

self.__precacheManifest = [].concat(self.__precacheManifest || []);

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.destination === "image",
  new NetworkFirst({
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

/*
let networkFirstHandler = workbox.strategies.networkFirst({
  cacheName: 'default-cache',});
  workbox.router.registerRoute(
    funktion(args),{
      return :handdle(args).then(function(response){
        if(typeof response=='undefined'){
          return caches.match('offline');
        }
        return response;
      })
    }
  ); */

self.addEventListener("push", function(event) {
    let push_message = event.data.text();

    const options = {
      body: push_message.body,
      icon: "./img/icons/32x32.png"
    };
    event.waitUntil(
      self.registration.showNotification("my notification", options)
    );
  }); 

self.addEventListener('notificationclick', function(event) {
    console.log('test', event)
    event.notification.close();
    const url = 'home';
    event.waitUntil(
        self.clients.matchAll({type: 'window'}).then( windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            if (self.clients.openWindow) {
                console.log("open window")
            }
        })
    )
  }, false);


self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

/*
self.addEventListener("sync", function (event) {
  if(event.tag == 'unique-tag-name'){

  } 
}); */
