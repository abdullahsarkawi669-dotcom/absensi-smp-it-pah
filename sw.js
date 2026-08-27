const CACHE_NAME = 'absensi-guru-offline-v1';

const APP_FILES = [
    './',
    './index.html'
];

// Saat Service Worker dipasang
self.addEventListener('install', event => {
    console.log('[SW] Installing...');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(APP_FILES);
            })
            .then(() => {
                console.log('[SW] Cache berhasil dibuat');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('[SW] Gagal membuat cache:', error);
            })
    );
});

// Aktifkan Service Worker baru
self.addEventListener('activate', event => {
    console.log('[SW] Activated');

    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name !== CACHE_NAME)
                        .map(name => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});

// Intersep request
self.addEventListener('fetch', event => {

    // Jangan intercept request POST/API
    if (event.request.method !== 'GET') {
        return;
    }

    const requestURL = new URL(event.request.url);

    // Jangan cache Google Apps Script / API
    if (
        requestURL.hostname.includes('script.google.com') ||
        requestURL.hostname.includes('googleusercontent.com') ||
        requestURL.pathname.includes('/macros/')
    ) {
        return;
    }

    event.respondWith(

        caches.match(event.request)
            .then(cachedResponse => {

                // Kalau ada di cache, gunakan cache
                if (cachedResponse) {
                    return cachedResponse;
                }

                // Kalau tidak ada, ambil dari internet
                return fetch(event.request)
                    .then(networkResponse => {

                        // Hanya cache response yang valid
                        if (
                            networkResponse &&
                            networkResponse.status === 200 &&
                            networkResponse.type === 'basic'
                        ) {
                            const responseClone = networkResponse.clone();

                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseClone);
                                });
                        }

                        return networkResponse;
                    })
                    .catch(() => {

                        // Jika offline dan halaman tidak tersedia,
                        // kembalikan index.html
                        return caches.match('./index.html');
                    });
            })
    );
});