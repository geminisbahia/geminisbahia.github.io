// Calculadora Géminis: service worker mínimo para que se pueda instalar como aplicación.
// No guarda nada: los precios siempre vienen en vivo de la planilla.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(function () {
    return new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="background:#000;color:#fff;font-family:sans-serif;display:grid;place-items:center;height:100vh;margin:0;text-align:center;padding:24px"><p>Sin conexión a internet.<br>La calculadora necesita internet para leer los precios.</p></body>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }));
});
