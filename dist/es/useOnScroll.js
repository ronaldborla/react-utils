import"./_commonjsHelpers-ecffabcd.js";import{r as n}from"./index-54e46c70.js";import e from"./getScrollValue.js";export default function(o){n.useEffect((function(){var n=null,t=function(t){n&&window.cancelAnimationFrame(n),n=window.requestAnimationFrame((function(){o(e(),t),n=null}))},i=function(n){t(n)},r=function(n){t(n)};return window.addEventListener("scroll",i,!0),window.addEventListener("touchmove",r,!0),t(null),function(){window.removeEventListener("scroll",i,!0),window.removeEventListener("touchmove",r,!0)}}),[o])}
