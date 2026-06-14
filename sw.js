// ═══════════════════════════════════════════════════════════
// MyStudyBuddy Service Worker  v5.4
// Strategy: Network-first with cache fallback.
//   • Online  → fetch from network, update cache in background.
//   • Offline → serve from cache; AI calls fail gracefully.
// ═══════════════════════════════════════════════════════════

const CACHE_NAME = 'studybuddy-v5.4';

// Files to pre-cache on install.
// Only local assets — the app shell that must work offline.
// The Anthropic API is NOT cached (requires live auth).
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './data/quiz-pack.json',
  './data/vocab-pack.json',
  './data/language-pack.json'
];

// External origins that should always go network-only.
// Never cache API calls or auth tokens.
const NETWORK_ONLY_ORIGINS = [
  'api.anthropic.com',      // AI API — never cache auth'd requests
  'fonts.googleapis.com',   // Google Fonts CSS
  'fonts.gstatic.com'       // Google Fonts files
];

// ── Install: pre-cache the app shell ──────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())  // activate immediately
  );
});

// ── Activate: delete stale caches from old versions ───────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())  // take control of all pages
  );
});

// ── Fetch: network-first, cache fallback ──────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 1. Skip non-GET requests (POST to Anthropic API, etc.)
  if (event.request.method !== 'GET') return;

  // 2. Skip network-only external origins (API, fonts CDN)
  if (NETWORK_ONLY_ORIGINS.some(origin => url.hostname.includes(origin))) return;

  // 3. Skip chrome-extension and non-http(s) schemes
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(networkFirstWithCacheFallback(event.request));
});

// Network-first strategy:
//   Try network → on success, update cache and return response.
//   On failure  → serve from cache.
//   If neither  → return offline page.
async function networkFirstWithCacheFallback(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    // Attempt network fetch with a timeout safety net
    const networkResponse = await fetchWithTimeout(request, 8000);

    // Cache successful same-origin responses (not opaque cross-origin)
    if (networkResponse.ok && networkResponse.type !== 'opaque') {
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (_networkError) {
    // Network unavailable — try the cache
    const cached = await cache.match(request);
    if (cached) return cached;

    // Final fallback: if the request is for a page navigation,
    // return the cached index.html so the app still loads.
    if (request.mode === 'navigate') {
      const indexFallback = await cache.match('./index.html');
      if (indexFallback) return indexFallback;
    }

    // Nothing available — return a minimal offline response
    return new Response(
      JSON.stringify({ offline: true, error: 'No network and no cache available.' }),
      {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Fetch with a configurable timeout (prevents hanging on slow connections)
function fetchWithTimeout(request, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Network timeout')), ms);
    fetch(request)
      .then(response => { clearTimeout(timer); resolve(response); })
      .catch(err => { clearTimeout(timer); reject(err); });
  });
}

// ── Message handler: let the page force a cache update ────
// Usage from index.html: navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' })
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  // Respond to cache-status queries from the app UI
  if (event.data && event.data.type === 'GET_CACHE_STATUS') {
    caches.open(CACHE_NAME).then(cache => {
      cache.keys().then(keys => {
        event.source.postMessage({
          type: 'CACHE_STATUS',
          cachedUrls: keys.map(r => r.url),
          cacheName: CACHE_NAME
        });
      });
    });
  }
});
