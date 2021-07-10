(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\n    box-sizing: border-box;\n}\nbody {\n    background-color: aliceblue;\n    margin: 0;\n    padding: 0;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n}\nh1 {\n    text-align: center;\n}\nimg {\n    display: block;\n    margin: 0 auto;\n    width: 50%;\n}\nsection {\n    text-align: center;\n    max-width: 25em;\n    justify-content: center;\n    align-self: center;\n}\n.lists {\n    list-style: none; \n}\n.tabs {\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n}\n.tabs > * {\n    padding: 5px;\n    background: teal;\n    color: whitesmoke;\n    border-radius: 5px;\n    margin-right: 5px;\n}",""]);const c=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(o[a]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},695:e=>{var t={};e.exports=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],d=c[u]||0,l="".concat(u," ").concat(d);c[u]=d+1;var m=n(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(t[m].references++,t[m].updater(p)):t.push({identifier:l,updater:o(p,r),references:1}),a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=r(e,o),u=0;u<c.length;u++){var d=n(c[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}c=s}}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,c=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},674:(e,t,n)=>{e.exports=n.p+"fe80bdca9e66767d9562.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(674),t=n(379),r=n.n(t),o=n(795),c=n.n(o),a=n(695),i=n.n(a),s=n(216),u=n.n(s),d=n(426),l={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=i()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};l.domAPI=c(),l.insertStyleElement=u(),r()(d.Z,l),d.Z&&d.Z.locals&&d.Z.locals;const m=function(){const t=document.querySelector("#content"),n=document.createElement("ul"),r=document.createElement("li"),o=document.createElement("li"),c=document.createElement("li");n.classList.add("tabs","lists"),r.setAttribute("id","home"),o.setAttribute("id","menu"),c.setAttribute("id","contact"),r.textContent="Home",o.textContent="Menu",c.textContent="Contact",n.append(r,o,c);const a=document.createElement("h1");a.textContent="Invisible Afro Cuisines";const i=new Image;i.src=e;const s=document.createElement("section"),u=document.createElement("p");u.textContent="Invisible's has the best african dishes! The atmosphere \n    and customer services makes you feel like you are back \n    home in Nigerian, eating you native soups. We promise to \n    keep you coming back for more.",s.appendChild(u);const d=document.createElement("section"),l=document.createElement("h2");l.textContent="Hours";const m=document.createElement("pre");m.textContent="\n    Sunday: 8am - 10pm\n    Monday: 7am - 7pm\n    Tuesday: 7am - 7pm\n    Wednesday: 7am - 7pm\n    Thursday: 7am - 10pm\n    Friday: 7am - 10pm\n    Saturday: 8am - 10pm",d.append(l,m);const p=document.createElement("section"),f=document.createElement("h2");f.textContent="Location";const h=document.createElement("p");h.textContent="12, Trafford Road, Salford, Greater Manchester.",p.append(f,h),t.append(n,a,i,s,d,p)};m();const p=document.querySelector("#content");function f(e){!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(p),"home"===e.srcElement.id&&m(),"menu"===e.srcElement.id&&function(){const e=document.querySelector("#content"),t=document.createElement("ul"),n=document.createElement("li"),r=document.createElement("li"),o=document.createElement("li");t.classList.add("tabs","lists"),n.setAttribute("id","home"),r.setAttribute("id","menu"),o.setAttribute("id","contact"),n.textContent="Home",r.textContent="Menu",o.textContent="Contact",t.append(n,r,o);const c=document.createElement("p");c.textContent="This is the menu, Lorem Ipsum",e.append(t,c)}(),"contact"===e.srcElement.id&&function(){const e=document.querySelector("#content"),t=document.createElement("ul"),n=document.createElement("li"),r=document.createElement("li"),o=document.createElement("li");t.classList.add("tabs","lists"),n.setAttribute("id","home"),r.setAttribute("id","menu"),o.setAttribute("id","contact"),n.textContent="Home",r.textContent="Menu",o.textContent="Contact",t.append(n,r,o);const c=document.createElement("p");c.textContent="This is the Contact, Lorem Ipsum",e.append(t,c)}(),document.querySelectorAll(".tabs").forEach((e=>e.addEventListener("click",f)))}document.querySelectorAll(".tabs").forEach((e=>e.addEventListener("click",f)))})()})();