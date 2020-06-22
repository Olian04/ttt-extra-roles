// Install the ServiceWorker
self.addEventListener('install', function(event) {
  event.waitUntil(

    // Open a cache
    caches.open('v1').then(function(cache) {

      // Define what we want to cache
      return cache.addAll([
        '/',
        'index.html',
        'icon-384.png',
        'manifest.json',
        'resources/innocent.jpg',
        'resources/detective.jpg',
        'resources/mercenary.jpg',
        'resources/phantom.jpg',
        'resources/glitch.jpg',
        'resources/traitor.jpg',
        'resources/assassin.jpg',
        'resources/hypnosist.jpg',
        'resources/vampire.jpg',
        'resources/zombie.jpg',
        'resources/jester.jpg',
        'resources/swapper.jpg',
        'resources/killer.jpg',
      ]);
    })
  );
});

// Use ServiceWorker (or not) to fetch data
self.addEventListener('fetch', function(event) {

  event.respondWith(

    // Look for something in the cache that matches the request
    caches.match(event.request).then(function(response) {

      // If we find something, return it
      // Otherwise, use the network instead
      return response || fetch(event.request);
    })
  );
});
