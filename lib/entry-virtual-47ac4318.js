var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,r,n){return t(n={path:r,exports:{},require:function(t,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&n.path)}},n.exports),n.exports}var n,e,o=function(t){return t&&t.Math==Math&&t},u=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof t&&t)||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},a=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!c.call({1:2},1)?function(t){var r=f(this,t);return!!r&&r.enumerable}:c},l=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},p={}.toString,y=function(t){return p.call(t).slice(8,-1)},h="".split,d=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==y(t)?h.call(t,""):Object(t)}:Object,b=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return d(b(t))},g=function(t){return"object"==typeof t?null!==t:"function"==typeof t},m=function(t,r){if(!g(t))return t;var n,e;if(r&&"function"==typeof(n=t.toString)&&!g(e=n.call(t)))return e;if("function"==typeof(n=t.valueOf)&&!g(e=n.call(t)))return e;if(!r&&"function"==typeof(n=t.toString)&&!g(e=n.call(t)))return e;throw TypeError("Can't convert object to primitive value")},w={}.hasOwnProperty,S=function(t,r){return w.call(t,r)},j=u.document,O=g(j)&&g(j.createElement),E=function(t){return O?j.createElement(t):{}},P=!a&&!i((function(){return 7!=Object.defineProperty(E("div"),"a",{get:function(){return 7}}).a})),_=Object.getOwnPropertyDescriptor,A={f:a?_:function(t,r){if(t=v(t),r=m(r,!0),P)try{return _(t,r)}catch(t){}if(S(t,r))return l(!s.f.call(t,r),t[r])}},T=/#|\.prototype\./,C=function(t,r){var n=I[x(t)];return n==D||n!=M&&("function"==typeof r?i(r):!!r)},x=C.normalize=function(t){return String(t).replace(T,".").toLowerCase()},I=C.data={},M=C.NATIVE="N",D=C.POLYFILL="P",L=C,k={},z=function(t,r,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===r)return t;switch(n){case 0:return function(){return t.call(r)};case 1:return function(n){return t.call(r,n)};case 2:return function(n,e){return t.call(r,n,e)};case 3:return function(n,e,o){return t.call(r,n,e,o)}}return function(){return t.apply(r,arguments)}},F=function(t){if(!g(t))throw TypeError(String(t)+" is not an object");return t},N=Object.defineProperty,q={f:a?N:function(t,r,n){if(F(t),r=m(r,!0),F(n),P)try{return N(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},B=a?function(t,r,n){return q.f(t,r,l(1,n))}:function(t,r,n){return t[r]=n,t},G=A.f,R=function(t){var r=function(r,n,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,n)}return new t(r,n,e)}return t.apply(this,arguments)};return r.prototype=t.prototype,r},H=function(t,r){var n,e,o,i,a,c,f,s,l=t.target,p=t.global,y=t.stat,h=t.proto,d=p?u:y?u[l]:(u[l]||{}).prototype,b=p?k:k[l]||(k[l]={}),v=b.prototype;for(o in r)n=!L(p?o:l+(y?".":"#")+o,t.forced)&&d&&S(d,o),a=b[o],n&&(c=t.noTargetGet?(s=G(d,o))&&s.value:d[o]),i=n&&c?c:r[o],n&&typeof a==typeof i||(f=t.bind&&n?z(i,u):t.wrap&&n?R(i):h&&"function"==typeof i?z(Function.call,i):i,(t.sham||i&&i.sham||a&&a.sham)&&B(f,"sham",!0),b[o]=f,h&&(S(k,e=l+"Prototype")||B(k,e,{}),k[e][o]=i,t.real&&v&&!v[o]&&B(v,o,i)))},J=Math.ceil,K=Math.floor,V=function(t){return isNaN(t=+t)?0:(t>0?K:J)(t)},Y=Math.min,Q=function(t){return t>0?Y(V(t),9007199254740991):0},U=function(t){return Object(b(t))},W=Array.isArray||function(t){return"Array"==y(t)},X=u["__core-js_shared__"]||function(t,r){try{B(u,t,r)}catch(n){u[t]=r}return r}("__core-js_shared__",{}),Z=r((function(t){(t.exports=function(t,r){return X[t]||(X[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.4",mode:"pure",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),$=0,tt=Math.random(),rt=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++$+tt).toString(36)},nt=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),et=nt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ot=Z("wks"),ut=u.Symbol,it=et?ut:ut&&ut.withoutSetter||rt,at=function(t){return S(ot,t)||(nt&&S(ut,t)?ot[t]=ut[t]:ot[t]=it("Symbol."+t)),ot[t]},ct=function(t){return"function"==typeof t?t:void 0},ft=function(t,r){return arguments.length<2?ct(k[t])||ct(u[t]):k[t]&&k[t][r]||u[t]&&u[t][r]},st=at("species"),lt=function(t,r){var n;return W(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!W(n.prototype)?g(n)&&null===(n=n[st])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===r?0:r)},pt=ft("navigator","userAgent")||"",yt=u.process,ht=yt&&yt.versions,dt=ht&&ht.v8;dt?e=(n=dt.split("."))[0]+n[1]:pt&&(!(n=pt.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=pt.match(/Chrome\/(\d+)/))&&(e=n[1]);var bt=e&&+e,vt=at("species"),gt=function(t){return bt>=51||!i((function(){var r=[];return(r.constructor={})[vt]=function(){return{foo:1}},1!==r[t](Boolean).foo}))},mt=[].push,wt=function(t){var r=1==t,n=2==t,e=3==t,o=4==t,u=6==t,i=5==t||u;return function(a,c,f,s){for(var l,p,y=U(a),h=d(y),b=z(c,f,3),v=Q(h.length),g=0,m=s||lt,w=r?m(a,v):n?m(a,0):void 0;v>g;g++)if((i||g in h)&&(p=b(l=h[g],g,y),t))if(r)w[g]=p;else if(p)switch(t){case 3:return!0;case 5:return l;case 6:return g;case 2:mt.call(w,l)}else if(o)return!1;return u?-1:e||o?o:w}},St={forEach:wt(0),map:wt(1),filter:wt(2),some:wt(3),every:wt(4),find:wt(5),findIndex:wt(6)},jt=Object.defineProperty,Ot={},Et=function(t){throw t},Pt=function(t,r){if(S(Ot,t))return Ot[t];r||(r={});var n=[][t],e=!!S(r,"ACCESSORS")&&r.ACCESSORS,o=S(r,0)?r[0]:Et,u=S(r,1)?r[1]:void 0;return Ot[t]=!!n&&!i((function(){if(e&&!a)return!0;var t={length:-1};e?jt(t,1,{enumerable:!0,get:Et}):t[1]=1,n.call(t,o,u)}))},_t=function(t){return k[t+"Prototype"]};export{Q as A,v as B,u as C,ft as D,Z as E,nt as F,B as G,A as H,et as I,z as J,X as K,E as L,H as _,F as a,g as b,r as c,a as d,q as e,i as f,t as g,S as h,d as i,gt as j,Pt as k,St as l,_t as m,y as n,s as o,k as p,W as q,b as r,V as s,U as t,rt as u,m as v,at as w,l as x,bt as y,lt as z};