(()=>{"use strict";var e,r={918:(e,r,t)=>{function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,i(o.key),o)}}function i(e){var r=function(e,r){if("object"!==o(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(r)?r:String(r)}const l=function(){function e(){var r,t,o;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o="hello-world-button",(t=i(t="buttonCssClass"))in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o}var r,t;return r=e,(t=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello World I'm here",e.classList.add(this.buttonCssClass),e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello World",e.classList.add("hello-world-text"),r.appendChild(e)};var r=document.querySelector("body");r.appendChild(e)}}])&&n(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,r){if("object"!==a(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!==a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===a(n)?n:String(n)),o)}var n}const c=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,t;return r=e,(t=[{key:"render",value:function(e){var r=document.createElement("h1"),t=document.querySelector("body");r.innerHTML="Webpack is Awesome this is '"+e+"'page",t.appendChild(r)}}])&&u(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),e}();t(294),(new c).render("hello world"),(new l).render(),console.log("Production mode")}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,e=[],o.O=(r,t,n,i)=>{if(!t){var l=1/0;for(f=0;f<e.length;f++){for(var[t,n,i]=e[f],a=!0,u=0;u<t.length;u++)(!1&i||l>=i)&&Object.keys(o.O).every((e=>o.O[e](t[u])))?t.splice(u--,1):(a=!1,i<l&&(l=i));if(a){e.splice(f--,1);var c=n();void 0!==c&&(r=c)}}return r}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[t,n,i]},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={689:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,i,[l,a,u]=t,c=0;if(l.some((r=>0!==e[r]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(u)var f=u(o)}for(r&&r(t);c<l.length;c++)i=l[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(f)},t=self.webpackChunkwebpack_tutorial=self.webpackChunkwebpack_tutorial||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[294],(()=>o(918)));n=o.O(n)})();