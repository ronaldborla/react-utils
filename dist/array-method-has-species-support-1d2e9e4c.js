import{a as t,c as r}from"./_commonjsHelpers-ecffabcd.js";var n,e,o=function(t){return t&&t.Math==Math&&t},u=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof t&&t)||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},c=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!a.call({1:2},1)?function(t){var r=f(this,t);return!!r&&r.enumerable}:a},l=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},p={}.toString,y=function(t){return p.call(t).slice(8,-1)},h="".split,b=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==y(t)?h.call(t,""):Object(t)}:Object,v=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},m=function(t){return b(v(t))},d=function(t){return"object"==typeof t?null!==t:"function"==typeof t},g=function(t,r){if(!d(t))return t;var n,e;if(r&&"function"==typeof(n=t.toString)&&!d(e=n.call(t)))return e;if("function"==typeof(n=t.valueOf)&&!d(e=n.call(t)))return e;if(!r&&"function"==typeof(n=t.toString)&&!d(e=n.call(t)))return e;throw TypeError("Can't convert object to primitive value")},w={}.hasOwnProperty,S=function(t,r){return w.call(t,r)},j=u.document,O=d(j)&&d(j.createElement),E=function(t){return O?j.createElement(t):{}},P=!c&&!i((function(){return 7!=Object.defineProperty(E("div"),"a",{get:function(){return 7}}).a})),_=Object.getOwnPropertyDescriptor,A={f:c?_:function(t,r){if(t=m(t),r=g(r,!0),P)try{return _(t,r)}catch(t){}if(S(t,r))return l(!s.f.call(t,r),t[r])}},C=/#|\.prototype\./,T=function(t,r){var n=M[I(t)];return n==x||n!=k&&("function"==typeof r?i(r):!!r)},I=T.normalize=function(t){return String(t).replace(C,".").toLowerCase()},M=T.data={},k=T.NATIVE="N",x=T.POLYFILL="P",z=T,D={},F=function(t,r,n){if(function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(t),void 0===r)return t;switch(n){case 0:return function(){return t.call(r)};case 1:return function(n){return t.call(r,n)};case 2:return function(n,e){return t.call(r,n,e)};case 3:return function(n,e,o){return t.call(r,n,e,o)}}return function(){return t.apply(r,arguments)}},L=function(t){if(!d(t))throw TypeError(String(t)+" is not an object");return t},N=Object.defineProperty,B={f:c?N:function(t,r,n){if(L(t),r=g(r,!0),L(n),P)try{return N(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},G=c?function(t,r,n){return B.f(t,r,l(1,n))}:function(t,r,n){return t[r]=n,t},H=A.f,R=function(t){var r=function(r,n,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,n)}return new t(r,n,e)}return t.apply(this,arguments)};return r.prototype=t.prototype,r},q=function(t,r){var n,e,o,i,c,a,f,s,l=t.target,p=t.global,y=t.stat,h=t.proto,b=p?u:y?u[l]:(u[l]||{}).prototype,v=p?D:D[l]||(D[l]={}),m=v.prototype;for(o in r)n=!z(p?o:l+(y?".":"#")+o,t.forced)&&b&&S(b,o),c=v[o],n&&(a=t.noTargetGet?(s=H(b,o))&&s.value:b[o]),i=n&&a?a:r[o],n&&typeof c==typeof i||(f=t.bind&&n?F(i,u):t.wrap&&n?R(i):h&&"function"==typeof i?F(Function.call,i):i,(t.sham||i&&i.sham||c&&c.sham)&&G(f,"sham",!0),v[o]=f,h&&(S(D,e=l+"Prototype")||G(D,e,{}),D[e][o]=i,t.real&&m&&!m[o]&&G(m,o,i)))},J=Math.ceil,V=Math.floor,Y=function(t){return isNaN(t=+t)?0:(t>0?V:J)(t)},K=Math.min,Q=function(t){return t>0?K(Y(t),9007199254740991):0},U=function(t){return"function"==typeof t?t:void 0},W=function(t,r){return arguments.length<2?U(D[t])||U(u[t]):D[t]&&D[t][r]||u[t]&&u[t][r]},X=u["__core-js_shared__"]||function(t,r){try{G(u,t,r)}catch(n){u[t]=r}return r}("__core-js_shared__",{}),Z=r((function(t){(t.exports=function(t,r){return X[t]||(X[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.4",mode:"pure",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),$=0,tt=Math.random(),rt=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++$+tt).toString(36)},nt=function(t){return Object(v(t))},et=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),ot=et&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ut=Z("wks"),it=u.Symbol,ct=ot?it:it&&it.withoutSetter||rt,at=function(t){return S(ut,t)||(et&&S(it,t)?ut[t]=it[t]:ut[t]=ct("Symbol."+t)),ut[t]},ft=Array.isArray||function(t){return"Array"==y(t)},st=at("species"),lt=function(t,r){var n;return ft(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!ft(n.prototype)?d(n)&&null===(n=n[st])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===r?0:r)},pt=[].push,yt=function(t){var r=1==t,n=2==t,e=3==t,o=4==t,u=6==t,i=5==t||u;return function(c,a,f,s){for(var l,p,y=nt(c),h=b(y),v=F(a,f,3),m=Q(h.length),d=0,g=s||lt,w=r?g(c,m):n?g(c,0):void 0;m>d;d++)if((i||d in h)&&(p=v(l=h[d],d,y),t))if(r)w[d]=p;else if(p)switch(t){case 3:return!0;case 5:return l;case 6:return d;case 2:pt.call(w,l)}else if(o)return!1;return u?-1:e||o?o:w}},ht={forEach:yt(0),map:yt(1),filter:yt(2),some:yt(3),every:yt(4),find:yt(5),findIndex:yt(6)},bt=Object.defineProperty,vt={},mt=function(t){throw t},dt=function(t,r){if(S(vt,t))return vt[t];r||(r={});var n=[][t],e=!!S(r,"ACCESSORS")&&r.ACCESSORS,o=S(r,0)?r[0]:mt,u=S(r,1)?r[1]:void 0;return vt[t]=!!n&&!i((function(){if(e&&!c)return!0;var t={length:-1};e?bt(t,1,{enumerable:!0,get:mt}):t[1]=1,n.call(t,o,u)}))},gt=function(t){return D[t+"Prototype"]},wt=W("navigator","userAgent")||"",St=u.process,jt=St&&St.versions,Ot=jt&&jt.v8;Ot?e=(n=Ot.split("."))[0]+n[1]:wt&&(!(n=wt.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=wt.match(/Chrome\/(\d+)/))&&(e=n[1]);var Et=e&&+e,Pt=at("species"),_t=function(t){return Et>=51||!i((function(){var r=[];return(r.constructor={})[Pt]=function(){return{foo:1}},1!==r[t](Boolean).foo}))};export{G as A,ft as B,ot as C,Y as D,Et as E,lt as F,Q as G,F as H,X as I,E as J,q as _,L as a,A as b,nt as c,c as d,s as e,i as f,W as g,d as h,b as i,S as j,_t as k,dt as l,ht as m,gt as n,B as o,D as p,y as q,v as r,g as s,m as t,rt as u,l as v,at as w,u as x,Z as y,et as z};