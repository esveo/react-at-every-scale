parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ekWz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventContext=exports.useDispatch=exports.useOn=exports.useEventContext=exports.EventBus=void 0;const e=window.React,{createContext:t,useContext:n,useEffect:r,useRef:o}=e;function s(t){const n=o({"new-post":[],"provide-current-user":[],"request-current-user":[]}),r=o({on:(e,t)=>(n.current[e].push(t),function(){n.current[e]=n.current[e].filter(e=>e!==t)}),dispatch:e=>{n.current[e.type].forEach(t=>t(e))}});return e.createElement(exports.EventContext.Provider,{value:r.current},t.children)}function u(){return n(window.EventContext)}function c(e,t){const n=u();r(()=>n.on(e,t),[n,t,e])}function x(){return u().dispatch}exports.EventBus=s,exports.useEventContext=u,exports.useOn=c,exports.useDispatch=x,exports.EventContext=t(null);const p=window;p.EventContext||(p.EventContext=exports.EventContext);
},{}],"Iocf":[function(require,module,exports) {
"use strict";function e(e){document.currentScript.resolveComponent(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.provideComponent=void 0,exports.provideComponent=e;
},{}],"zo2T":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../EventBus"),t=require("../provideComponent"),n=window.React,{useState:l}=n;function r(){const[t,r]=l([]);return e.useOn("new-post",e=>r(t=>[e.content,...t])),n.createElement("div",{style:{padding:"1rem",display:"flex",flexDirection:"column",overflow:"hidden",height:"100%"}},n.createElement("p",{style:{flex:"0 0 auto"}},"Startseite"),n.createElement("hr",null),n.createElement("div",{style:{flex:"1 1 auto",overflow:"auto",height:"100%"}},t.map((e,t)=>n.createElement(n.Fragment,{key:t},n.createElement("div",null,n.createElement("small",null,e)),n.createElement("hr",null)))))}t.provideComponent(r);
},{"../EventBus":"ekWz","../provideComponent":"Iocf"}]},{},["zo2T"], null)
//# sourceMappingURL=index.js.map