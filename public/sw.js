self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/photos/')) {
    event.respondWith(
      caches.open('la45-static').then(cache =>
        cache.match(event.request).then(res => {
          const fetchPromise = fetch(event.request).then(networkRes => {
            cache.put(event.request, networkRes.clone());
            return networkRes;
          });
          return res || fetchPromise;
        })
      )
    );
  }
});
