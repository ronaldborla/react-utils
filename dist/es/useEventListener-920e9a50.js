import{l as r,m as a,_ as t,n as o,k as n}from"./array-method-has-species-support-1d2e9e4c.js";import{k as e,j as c}from"./array-method-is-strict-bdec5092.js";import{r as f}from"./index-54e46c70.js";var s=a.forEach,i=e("forEach"),p=r("forEach"),u=i&&p?[].forEach:function(r){return s(this,r,arguments.length>1?arguments[1]:void 0)};t({target:"Array",proto:!0,forced:[].forEach!=u},{forEach:u});var h=o("Array").forEach,m=Array.prototype,y={DOMTokenList:!0,NodeList:!0},d=function(r){var a=r.forEach;return r===m||r instanceof Array&&a===m.forEach||y.hasOwnProperty(c(r))?h:a},v=a.map,E=n("map"),A=r("map");t({target:"Array",proto:!0,forced:!E||!A},{map:function(r){return v(this,r,arguments.length>1?arguments[1]:void 0)}});var l=o("Array").map,g=Array.prototype,j=function(r){var a=r.map;return r===g||r instanceof Array&&a===g.map?l:a};function L(r,a,t,o){f.useEffect((function(){if(r){var n=j(a).call(a,(function(a){var n=function(r){return t(r)};return r.addEventListener(a,n,o),n}));return function(){d(a).call(a,(function(a,t){r.removeEventListener(a,n[t],o)}))}}}),[t,r,a,o])}export{d as f,L as u};
