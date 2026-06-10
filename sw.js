self.addEventListener('install', (event) => {
  // Skip waiting so the SW activates immediately on install
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claim clients so it starts controlling pages ASAP
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through: do nothing, just let network handle it
});
