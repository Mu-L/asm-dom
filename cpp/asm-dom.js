!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.asmDom=t():e.asmDom=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";t.__esModule=!0;var o=t.nodes={0:null},r=0,u=[],i=function(e){if(null===e)return 0;var t=u.pop();return void 0===t&&(t=++r),o[t]=e,e.asmDomPtr=t,t},c=function e(t){t.childNodes.forEach(e),u.push(t.asmDomPtr)};t.default={addNode:function(e){return i(e.parentNode),i(e.nextSibling),i(e)},createElement:function(e){return i(document.createElement(e))},createElementNS:function(e,t){return i(document.createElementNS(e,t))},createTextNode:function(e){return i(document.createTextNode(e))},createComment:function(e){return i(document.createComment(e))},insertBefore:function(e,t,n){o[e].insertBefore(o[t],o[n])},removeChild:function(e){null!==o[e]&&(c(o[e]),o[e].remove())},appendChild:function(e,t){o[e].appendChild(o[t])},removeAttribute:function(e,t){o[e].removeAttribute(t)},setAttribute:function(e,t,n){120!==t.charCodeAt(0)?o[e].setAttribute(t,n):58===t.charCodeAt(3)?o[e].setAttributeNS("http://www.w3.org/XML/1998/namespace",t,n):58===t.charCodeAt(5)?o[e].setAttributeNS("http://www.w3.org/1999/xlink",t,n):o[e].setAttribute(t,n)},parentNode:function(e){return null!==o[e]&&void 0!==o[e]&&null!==o[e].parentNode?o[e].parentNode.asmDomPtr:0},nextSibling:function(e){return null!==o[e]&&void 0!==o[e]&&null!==o[e].nextSibling?o[e].nextSibling.asmDomPtr:0},setTextContent:function(e,t){o[e].textContent=t}}},function(e,t,n){"use strict";var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o);void 0===window&&void 0!==global&&(global.window={}),void 0===window.asmDomHelpers&&(window.asmDomHelpers={}),window.asmDomHelpers.domApi=r.default,window.asmDomHelpers.nodes=o.nodes}])});