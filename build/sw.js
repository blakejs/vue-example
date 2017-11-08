importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "app.912257f24fc3f13c39d28d996b13f55d.css",
    "revision": "6de5e48648261c60a20844a2f06d0ac3"
  },
  {
    "url": "fonts/fontawesome-webfont.fee66e7.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "fonts/ionicons.2c159d0.woff",
    "revision": "2c159d0d05473040b53ec79df8797d32"
  },
  {
    "url": "fonts/MaterialIcons-Regular.012cf6a.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "fonts/Roboto-Bold.ad140ff.woff",
    "revision": "ad140ff02a7091257e2b31619106194e"
  },
  {
    "url": "fonts/Roboto-Light.37fbbba.woff",
    "revision": "37fbbbad5577a95bdf058307c717c882"
  },
  {
    "url": "fonts/Roboto-Medium.303ded6.woff",
    "revision": "303ded6436dcf7ea75157e2aeff876ce"
  },
  {
    "url": "fonts/Roboto-Regular.081b11e.woff",
    "revision": "081b11ebaca8ad30fd092e01451015dc"
  },
  {
    "url": "fonts/Roboto-Thin.90d3804.woff",
    "revision": "90d3804f0231704c15ccc5861245e8ce"
  },
  {
    "url": "img/background.0002fec.png",
    "revision": "0002feccf81231064cc5362e63f33b26"
  },
  {
    "url": "index.html",
    "revision": "e5116f6c29723e103405e4e211c5dcac"
  },
  {
    "url": "js/0.2aef7cd07beaeb8f72c2.js",
    "revision": "b14e3217d6bb0ee075a95fbed35d47e5"
  },
  {
    "url": "js/1.a810ebf48ae0c8b869f9.js",
    "revision": "0156f2b7050016c6f622e920ebe5f020"
  },
  {
    "url": "js/2.1134c54f0d2b5b9d2b32.js",
    "revision": "11d0c244d9741fc2b30655e0057df6a5"
  },
  {
    "url": "js/3.77f8eda128eb1819de27.js",
    "revision": "bce646f08569c87ee5b63c5b03f8cb4a"
  },
  {
    "url": "js/4.5a912516158d2af998f5.js",
    "revision": "dd6892fb3880923b388e91bf55754aca"
  },
  {
    "url": "js/5.39db7c2eec017557c38e.js",
    "revision": "8c11a1654180784030641b17dad26ce0"
  },
  {
    "url": "js/6.a8fed38b390fdff4d7dc.js",
    "revision": "0d168eac4419c5668cb9aed1bfcca696"
  },
  {
    "url": "js/app.js",
    "revision": "20a53de49ea900bdbce454ffb8c25bba"
  },
  {
    "url": "js/manifest.js",
    "revision": "d571d4932eed28db3eb81de8393493f7"
  },
  {
    "url": "js/vendor.js",
    "revision": "4175e531f832cd8b20d068e1b66e0a4a"
  },
  {
    "url": "statics/about.jpg",
    "revision": "ce5b49f48f863c3843f789411ba41dc6"
  },
  {
    "url": "statics/background.png",
    "revision": "0002feccf81231064cc5362e63f33b26"
  },
  {
    "url": "statics/contact.png",
    "revision": "961f78007b9c1e2143116d8a70864da4"
  },
  {
    "url": "statics/favicon.png",
    "revision": "a6f07ebdf790cf4e5cfa96f5227cc4b3"
  },
  {
    "url": "statics/person.png",
    "revision": "ed475a647f610f3bcb71d6d09ce5298d"
  },
  {
    "url": "statics/port.png",
    "revision": "189f5b8b6eb3e087c92402ed28853592"
  },
  {
    "url": "statics/sastone.png",
    "revision": "dd645b02abc12831f6570905d48a3f58"
  },
  {
    "url": "statics/sastone2.png",
    "revision": "402e98f4295434e7bc33aabd52e475b3"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
