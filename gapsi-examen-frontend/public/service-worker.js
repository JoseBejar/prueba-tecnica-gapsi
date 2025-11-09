// Service worker muy simple para cumplir una feature PWA
self.addEventListener('install', (event) => {
  console.log('[SW] Instalado');
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activado');
});
