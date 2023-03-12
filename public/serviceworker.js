const CASH_NAME = 'version-1';
const urlToCache = ['index.html', 'offline.html'];

const self = this;
///instal serviceworker
self.addEventListener('install', (event) => {
     event.waitUntil(caches.open(CASH_NAME).then((cashe) => {
          console.log("open-cashed");
          return cashe.addAll(urlToCache);
     }))
});


///listen for request

self.addEventListener('fetch', (event) => {
     event.respondWith(caches.match(event.request).then(() => {
          return fetch(event.request).catch(() => cashes.match('offline.html'))
     }))
});


///active serviceworker

self.addEventListener('activate', (event) => {
const cacheWhitelist=[];
cacheWhitelist.push(CASH_NAME);
event.waitUntil(caches.keys().then((cacheNames)=>Promise.all(cacheNames.map((cacheName) =>{
     if(!cacheWhitelist.includes(cacheName)){
          return caches.delete(cacheName);
     }
}))))
});