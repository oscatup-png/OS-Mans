const CACHE_NAME = 'perbras-os-v1';
const urlsToCache = [
  '/OS-Mans/',
  '/OS-Mans/index.html',
  '/OS-Mans/manifest.json'
];

// Instalar service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache).catch(err => {
          console.log('Erro ao adicionar URLs ao cache:', err);
        });
      })
      .then(() => self.skipWaiting())
  );
});

// Ativar service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estratégia: Network First com fallback para Cache
self.addEventListener('fetch', event => {
  // Ignorar requisições não-GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Se recebeu resposta válida, cachear e retornar
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      })
      .catch(() => {
        // Se falhar, tentar cache
        return caches.match(event.request)
          .then(response => {
            return response || new Response(
              '<h1>Sem conexão</h1><p>Este app requer conexão com a internet</p>',
              {
                status: 503,
                statusText: 'Service Unavailable',
                headers: new Headers({
                  'Content-Type': 'text/html'
                })
              }
            );
          });
      })
  );
});

// Sincronização em background (salvar dados quando voltar online)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  try {
    // Aqui você pode implementar lógica para sincronizar dados salvos localmente
    console.log('Sincronizando dados...');
  } catch (error) {
    console.error('Erro ao sincronizar:', error);
    throw error;
  }
}
