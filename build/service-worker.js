"use strict";var precacheConfig=[["/index.html","8c452cec5d35b63dd922219a185f1786"],["/static/css/main.89e911b3.css","aa51aeb2e44aff8b60404b5ceccbca3d"],["/static/js/main.3ab4ad15.js","3fcf833dbdbd69e212b0adef4507f5bf"],["/static/media/ExcelMergeTool.2c957ab9.png","2c957ab9a6d4ab4893c45371eea1f0c4"],["/static/media/HeyHeyMovie.6d5191a7.png","6d5191a7607644deff9738e18414965e"],["/static/media/IMG_0835.16d454f4.jpg","16d454f439fc73fd3a66b707dd7b97c6"],["/static/media/IMG_0836.1503ba6d.jpg","1503ba6d13f46e3099439ce7524ca4f4"],["/static/media/IMG_0977.7945c558.JPG","7945c5583249d6f439e79aab680e718f"],["/static/media/IMG_2014.71158a3b.JPG","71158a3bc298a0976cc7fc1c2269b461"],["/static/media/IMG_6889.5ff210fc.JPG","5ff210fc682f1ce548fc1d390363f1d3"],["/static/media/JavaLogo.c4342418.png","c43424186b9c089b9aa1d64c7f1989c1"],["/static/media/Ming_Chuan_University_LOGO.8704b06a.svg","8704b06a9ea552bdb0f1c74541139805"],["/static/media/ReactLogo.c54d9129.png","c54d9129f652da1fcd40f93087e81cd8"],["/static/media/dynamicSearch.985d3308.gif","985d3308bba02ed55f9a80f2a37fd77c"],["/static/media/freezeTable.4c3da5cd.gif","4c3da5cd0a355b1b703c4098f76229ea"],["/static/media/fubon.274535d9.png","274535d9517c1628b45e7f4c448922be"],["/static/media/gitLogo.25d23aa8.png","25d23aa8eb76c387ed31332a85a51556"],["/static/media/github_logo.119484c6.svg","119484c66e2971df9460244656175923"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/static/media/obank.403894ce.png","403894ce606fb8293a58868b243866c0"],["/static/media/ski.b25522ca.jpg","b25522ca6fb921b493eec5cd65085e0e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});