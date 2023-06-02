self.addEventListener('fetch', (event) => {
    event.respondWith(
      // Realiza la solicitud de precarga
      fetch(event.request).catch(() => {
        // En caso de error, puedes manejarlo aquí
        // y responder con una página o recurso alternativo
        return new Response('Offline Page');
      })
    );
  
    event.waitUntil(
      // Espera a que se resuelva la promesa de precarga
      caches.open('your-cache-name').then((cache) => {
        return cache.add(event.request);
      })
    );
  });
  