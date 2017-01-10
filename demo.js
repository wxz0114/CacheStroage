/*eslint-env browser*/
/*eslint quotes: [2, "single"], strict: [2, "global"]*/

'use strict';

function catchDemo() {
  var ret;
  var s0 = document.createElement("span");
  var s1 = document.createElement("span");

  ret = document.getElementById("cache-ret");
  if (typeof caches == "undefined") {
    s0.innerHTML = "error";
    ret.className = "error";
  } else {
    s0.innerHTML = "ok";
    ret.className = "ok";
  }
  ret.appendChild(s0);


  ret = document.getElementById("cache-storage-ret");
  if (typeof CacheStorage == "undefined") {
    s1.innerHTML = "error";
    ret.className = "error";
  } else {
    s1.innerHTML = "ok";
    ret.className = "ok";
  }
  ret.appendChild(s1);

  caches.open('zz');
}
