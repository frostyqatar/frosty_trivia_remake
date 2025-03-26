/*! For license information please see main.d0d18807.js.LICENSE.txt */
(()=>{var e={4:(e,t)=>{"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(){}t.__esModule=!0,t.default=function(e){var t="".concat(e,"Storage");return function(e){if("object"!==("undefined"===typeof self?"undefined":n(self))||!(e in self))return!1;try{var t=self[e],r="redux-persist ".concat(e," test");t.setItem(r,"test"),t.getItem(r),t.removeItem(r)}catch(o){return!1}return!0}(t)?self[t]:o};var o={getItem:r,setItem:r,removeItem:r}},43:(e,t,n)=>{"use strict";e.exports=n(202)},76:e=>{e.exports=class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.symbols=e,this.diagonal=t}get isWon(){const e=this.symbols.find((e=>!e.wildcard));if(!e)return!0;return!this.symbols.filter((t=>!t.wildcard&&t.name!==e.name)).length}get points(){return this.isWon?this.symbols.reduce(((e,t)=>e+t.points),0):0}}},82:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case d:case i:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case c:case p:case g:case m:case l:return e;default:return t}}case o:return t}}}function k(e){return w(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=l,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return k(e)||w(e)===u},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===d||e===s||e===a||e===f||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===v||e.$$typeof===b||e.$$typeof===x||e.$$typeof===y)},t.typeOf=w},86:(e,t,n)=>{"use strict";e.exports=n(82)},148:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r;"undefined"!==typeof window&&("undefined"===typeof window.gtag&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(r=window).gtag.apply(r,t))};t.default=n},153:(e,t,n)=>{"use strict";var r=n(43),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var x=b.prototype=new v;x.constructor=b,m(x,y.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!E.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:S.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===i?"."+P(l,0):i,w(a)?(o="",null!=e&&(o=e.replace(T,"$&/")+"/"),O(a,t,o,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),t.push(a)),1;if(l=0,i=""===i?".":i+":",w(e))for(var c=0;c<e.length;c++){var u=i+P(s=e[c],c);l+=O(s,t,o,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=O(s=s.value,t,o,u=i+P(s,c++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function _(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},M={transition:null},I={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:M,ReactCurrentOwner:S};function z(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:_,forEach:function(e,t,n){_(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return _(e,(function(){t++})),t},toArray:function(e){return _(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=z,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!E.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=z,t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.3.1"},219:(e,t,n)=>{"use strict";var r=n(86),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return r.isMemo(e)?a:s[e.$$typeof]||o}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=a;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var o=f(n);o&&o!==h&&e(t,o,r)}var a=u(n);d&&(a=a.concat(d(n)));for(var s=l(t),m=l(n),g=0;g<a.length;++g){var y=a[g];if(!i[y]&&(!r||!r[y])&&(!m||!m[y])&&(!s||!s[y])){var v=p(n,y);try{c(t,y,v)}catch(b){}}}}return t}},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>i(l,n))c<o&&0>i(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<o&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,y="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,x(e),!m)if(null!==r(c))m=!0,M(k);else{var t=r(u);null!==t&&I(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,v(j),j=-1),h=!0;var i=f;try{for(x(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!O());){var a=p.callback;if("function"===typeof a){p.callback=null,f=p.priorityLevel;var s=a(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&o(c),x(n)}else o(c);p=r(c)}if(null!==p)var l=!0;else{var d=r(u);null!==d&&I(w,d.startTime-n),l=!1}return l}finally{p=null,f=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,E=!1,C=null,j=-1,T=5,P=-1;function O(){return!(t.unstable_now()-P<T)}function _(){if(null!==C){var e=t.unstable_now();P=e;var n=!0;try{n=C(!0,e)}finally{n?S():(E=!1,C=null)}}else E=!1}if("function"===typeof b)S=function(){b(_)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,A=R.port2;R.port1.onmessage=_,S=function(){A.postMessage(null)}}else S=function(){y(_,0)};function M(e){C=e,E||(E=!0,S())}function I(e,n){j=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,M(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(v(j),j=-1):g=!0,I(w,i-a))):(e.sortIndex=s,n(c,e),m||h||(m=!0,M(k))),e},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},279:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ReactGAImplementation=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=a?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(o,s,l):o[s]=e[s]}o.default=e,n&&n.set(e,o);return o}(n(979));function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var a=o.GA4;t.ReactGAImplementation=a;var s=o.default;t.default=s},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},330:(e,t,n)=>{"use strict";var r=n(43);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useState,a=r.useEffect,s=r.useLayoutEffect,l=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,u=r[1];return s((function(){o.value=n,o.getSnapshot=t,c(o)&&u({inst:o})}),[e,n,t]),a((function(){return c(o)&&u({inst:o}),e((function(){c(o)&&u({inst:o})}))}),[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},358:(e,t)=>{"use strict";var n,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function y(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case s:case a:case p:case f:return e;default:switch(e=e&&e.$$typeof){case u:case c:case d:case m:case h:case l:return e;default:return t}}case o:return t}}}n=Symbol.for("react.module.reference")},366:e=>{var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(l=s;0!==l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(l=s;0!==l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=s;0!==l--;)if(!Object.prototype.hasOwnProperty.call(a,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!==l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!i(e[c[l]],a[c[l]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},380:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=e||"";t&&(i=e.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,r){return t>0&&t+e.length!==r.length&&e.search(n)>-1&&":"!==r.charAt(t-2)&&("-"!==r.charAt(t+e.length)||"-"===r.charAt(t-1))&&r.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})));o&&(i=function(e){if(function(e){return"string"===typeof e&&-1!==e.indexOf("@")}(e))return console.warn("This arg looks like an email address, redacting."),r;return e}(i));return i};var n=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;var r="REDACTED (Potential Email Address)"},385:function(e,t){var n,r,o;r=[],n=function e(){var t,n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:{},r=!n.document&&!!n.postMessage,o=n.IS_PAPA_WORKER||!1,i={},a=0,s={};function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){var r=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<r){let t=this._config.newline;t||(i=this._config.quoteChar||'"',t=this._handle.guessLineEndings(e,i)),e=[...e.split(t).slice(r)].join(t)}this.isFirstChunk&&w(this._config.beforeFirstChunk)&&void 0!==(i=this._config.beforeFirstChunk(e))&&(e=i),this.isFirstChunk=!1,this._halted=!1,r=this._partialLine+e;var i=(this._partialLine="",this._handle.parse(r,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=i.meta.cursor,this._finished||(this._partialLine=r.substring(e-this._baseIndex),this._baseIndex=e),i&&i.data&&(this._rowCount+=i.data.length),r=this._finished||this._config.preview&&this._rowCount>=this._config.preview,o)n.postMessage({results:i,workerId:s.WORKER_ID,finished:r});else if(w(this._config.chunk)&&!t){if(this._config.chunk(i,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=i=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(i.data),this._completeResults.errors=this._completeResults.errors.concat(i.errors),this._completeResults.meta=i.meta),this._completed||!r||!w(this._config.complete)||i&&i.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),r||i&&i.meta.paused||this._nextChunk(),i}this._halted=!0},this._sendError=function(e){w(this._config.error)?this._config.error(e):o&&this._config.error&&n.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function c(e){var t;(e=e||{}).chunkSize||(e.chunkSize=s.RemoteChunkSize),l.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=x(this._chunkLoaded,this),t.onerror=x(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e,n=this._config.downloadRequestHeaders;for(e in n)t.setRequestHeader(e,n[e])}var o;this._config.chunkSize&&(o=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+o));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>null!==(e=e.getResponseHeader("Content-Range"))?parseInt(e.substring(e.lastIndexOf("/")+1)):-1)(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(new Error(e))}}function u(e){(e=e||{}).chunkSize||(e.chunkSize=s.LocalChunkSize),l.call(this,e);var t,n,r="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=x(this._chunkLoaded,this),t.onerror=x(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,o=(this._config.chunkSize&&(o=Math.min(this._start+this._config.chunkSize,this._input.size),e=n.call(e,this._start,o)),t.readAsText(e,this._config.encoding));r||this._chunkLoaded({target:{result:o}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function d(e){var t;l.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,n;if(!this._finished)return e=this._config.chunkSize,t=e?(n=t.substring(0,e),t.substring(e)):(n=t,""),this._finished=!t,this.parseChunk(n)}}function p(e){l.call(this,e=e||{});var t=[],n=!0,r=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=x((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=x((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=x((function(){this._streamCleanUp(),r=!0,this._streamData("")}),this),this._streamCleanUp=x((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function f(e){var t,n,r,o,i=Math.pow(2,53),a=-i,l=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,c=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,u=this,d=0,p=0,f=!1,g=!1,y=[],v={data:[],errors:[],meta:{}};function x(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function k(){if(v&&r&&(E("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+s.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines&&(v.data=v.data.filter((function(e){return!x(e)}))),S()){if(v)if(Array.isArray(v.data[0])){for(var t=0;S()&&t<v.data.length;t++)v.data[t].forEach(n);v.data.splice(0,1)}else v.data.forEach(n);function n(t,n){w(e.transformHeader)&&(t=e.transformHeader(t,n)),y.push(t)}}function o(t,n){for(var r=e.header?{}:[],o=0;o<t.length;o++){var s=o,u=t[o];u=((t,n)=>(t=>(e.dynamicTypingFunction&&void 0===e.dynamicTyping[t]&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)))(t)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&((e=>{if(l.test(e)&&(e=parseFloat(e),a<e&&e<i))return 1})(n)?parseFloat(n):c.test(n)?new Date(n):""===n?null:n):n)(s=e.header?o>=y.length?"__parsed_extra":y[o]:s,u=e.transform?e.transform(u,s):u),"__parsed_extra"===s?(r[s]=r[s]||[],r[s].push(u)):r[s]=u}return e.header&&(o>y.length?E("FieldMismatch","TooManyFields","Too many fields: expected "+y.length+" fields but parsed "+o,p+n):o<y.length&&E("FieldMismatch","TooFewFields","Too few fields: expected "+y.length+" fields but parsed "+o,p+n)),r}var u;v&&(e.header||e.dynamicTyping||e.transform)&&(u=1,!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(o),u=v.data.length):v.data=o(v.data,0),e.header&&v.meta&&(v.meta.fields=y),p+=u)}function S(){return e.header&&0===y.length}function E(e,t,n,r){e={type:e,code:t,message:n},void 0!==r&&(e.row=r),v.errors.push(e)}w(e.step)&&(o=e.step,e.step=function(t){v=t,S()?k():(k(),0!==v.data.length&&(d+=t.data.length,e.preview&&d>e.preview?n.abort():(v.data=v.data[0],o(v,u))))}),this.parse=function(o,i,a){var l=e.quoteChar||'"';return e.newline||(e.newline=this.guessLineEndings(o,l)),r=!1,e.delimiter?w(e.delimiter)&&(e.delimiter=e.delimiter(o),v.meta.delimiter=e.delimiter):((l=((t,n,r,o,i)=>{var a,l,c,u;i=i||[",","\t","|",";",s.RECORD_SEP,s.UNIT_SEP];for(var d=0;d<i.length;d++){for(var p,f=i[d],h=0,g=0,y=0,v=(c=void 0,new m({comments:o,delimiter:f,newline:n,preview:10}).parse(t)),b=0;b<v.data.length;b++)r&&x(v.data[b])?y++:(g+=p=v.data[b].length,void 0===c?c=p:0<p&&(h+=Math.abs(p-c),c=p));0<v.data.length&&(g/=v.data.length-y),(void 0===l||h<=l)&&(void 0===u||u<g)&&1.99<g&&(l=h,a=f,u=g)}return{successful:!!(e.delimiter=a),bestDelimiter:a}})(o,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=l.bestDelimiter:(r=!0,e.delimiter=s.DefaultDelimiter),v.meta.delimiter=e.delimiter),l=b(e),e.preview&&e.header&&l.preview++,t=o,n=new m(l),v=n.parse(t,i,a),k(),f?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,n.abort(),t=w(e.chunk)?"":t.substring(n.getCharIndex())},this.resume=function(){u.streamer._halted?(f=!1,u.streamer.parseChunk(t,!0)):setTimeout(u.resume,3)},this.aborted=function(){return g},this.abort=function(){g=!0,n.abort(),v.meta.aborted=!0,w(e.complete)&&e.complete(v),t=""},this.guessLineEndings=function(e,t){e=e.substring(0,1048576),t=new RegExp(h(t)+"([^]*?)"+h(t),"gm");var n=(e=e.replace(t,"")).split("\r");if(e=1<(t=e.split("\n")).length&&t[0].length<n[0].length,1===n.length||e)return"\n";for(var r=0,o=0;o<n.length;o++)"\n"===n[o][0]&&r++;return r>=n.length/2?"\r\n":"\r"}}function h(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t=(e=e||{}).delimiter,n=e.newline,r=e.comments,o=e.step,i=e.preview,a=e.fastMode,l=null,c=!1,u=null==e.quoteChar?'"':e.quoteChar,d=u;if(void 0!==e.escapeChar&&(d=e.escapeChar),("string"!=typeof t||-1<s.BAD_DELIMITERS.indexOf(t))&&(t=","),r===t)throw new Error("Comment character same as delimiter");!0===r?r="#":("string"!=typeof r||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var p=0,f=!1;this.parse=function(s,m,g){if("string"!=typeof s)throw new Error("Input must be a string");var y=s.length,v=t.length,b=n.length,x=r.length,k=w(o),S=[],E=[],C=[],j=p=0;if(!s)return N();if(a||!1!==a&&-1===s.indexOf(u)){for(var T=s.split(n),P=0;P<T.length;P++){if(C=T[P],p+=C.length,P!==T.length-1)p+=n.length;else if(g)return N();if(!r||C.substring(0,x)!==r){if(k){if(S=[],I(C.split(t)),$(),f)return N()}else I(C.split(t));if(i&&i<=P)return S=S.slice(0,i),N(!0)}}return N()}for(var O=s.indexOf(t,p),_=s.indexOf(n,p),R=new RegExp(h(d)+h(u),"g"),A=s.indexOf(u,p);;)if(s[p]===u)for(A=p,p++;;){if(-1===(A=s.indexOf(u,A+1)))return g||E.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:S.length,index:p}),L();if(A===y-1)return L(s.substring(p,A).replace(R,u));if(u===d&&s[A+1]===d)A++;else if(u===d||0===A||s[A-1]!==d){-1!==O&&O<A+1&&(O=s.indexOf(t,A+1));var M=z(-1===(_=-1!==_&&_<A+1?s.indexOf(n,A+1):_)?O:Math.min(O,_));if(s.substr(A+1+M,v)===t){C.push(s.substring(p,A).replace(R,u)),s[p=A+1+M+v]!==u&&(A=s.indexOf(u,p)),O=s.indexOf(t,p),_=s.indexOf(n,p);break}if(M=z(_),s.substring(A+1+M,A+1+M+b)===n){if(C.push(s.substring(p,A).replace(R,u)),D(A+1+M+b),O=s.indexOf(t,p),A=s.indexOf(u,p),k&&($(),f))return N();if(i&&S.length>=i)return N(!0);break}E.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:S.length,index:p}),A++}}else if(r&&0===C.length&&s.substring(p,p+x)===r){if(-1===_)return N();p=_+b,_=s.indexOf(n,p),O=s.indexOf(t,p)}else if(-1!==O&&(O<_||-1===_))C.push(s.substring(p,O)),p=O+v,O=s.indexOf(t,p);else{if(-1===_)break;if(C.push(s.substring(p,_)),D(_+b),k&&($(),f))return N();if(i&&S.length>=i)return N(!0)}return L();function I(e){S.push(e),j=p}function z(e){var t=0;return-1!==e&&(e=s.substring(A+1,e))&&""===e.trim()?e.length:t}function L(e){return g||(void 0===e&&(e=s.substring(p)),C.push(e),p=y,I(C),k&&$()),N()}function D(e){p=e,I(C),C=[],_=s.indexOf(n,p)}function N(r){if(e.header&&!m&&S.length&&!c){var o=S[0],i={},a=new Set(o);let t=!1;for(let n=0;n<o.length;n++){let r=o[n];if(i[r=w(e.transformHeader)?e.transformHeader(r,n):r]){let e,s=i[r];for(;e=r+"_"+s,s++,a.has(e););a.add(e),o[n]=e,i[r]++,t=!0,(l=null===l?{}:l)[e]=r}else i[r]=1,o[n]=r;a.add(r)}t&&console.warn("Duplicate headers found and renamed."),c=!0}return{data:S,errors:E,meta:{delimiter:t,linebreak:n,aborted:f,truncated:!!r,cursor:j+(m||0),renamedHeaders:l}}}function $(){o(N()),S=[],E=[]}},this.abort=function(){f=!0},this.getCharIndex=function(){return p}}function g(e){var t=e.data,n=i[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var o={abort:function(){r=!0,y(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(w(n.userStep)){for(var a=0;a<t.results.data.length&&(n.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},o),!r);a++);delete t.results}else w(n.userChunk)&&(n.userChunk(t.results,o,t.file),delete t.results)}t.finished&&!r&&y(t.workerId,t.results)}function y(e,t){var n=i[e];w(n.userComplete)&&n.userComplete(t),n.terminate(),delete i[e]}function v(){throw new Error("Not implemented.")}function b(e){if("object"!=typeof e||null===e)return e;var t,n=Array.isArray(e)?[]:{};for(t in e)n[t]=b(e[t]);return n}function x(e,t){return function(){e.apply(t,arguments)}}function w(e){return"function"==typeof e}return s.parse=function(t,r){var o=(r=r||{}).dynamicTyping||!1;if(w(o)&&(r.dynamicTypingFunction=o,o={}),r.dynamicTyping=o,r.transform=!!w(r.transform)&&r.transform,!r.worker||!s.WORKERS_SUPPORTED)return o=null,s.NODE_STREAM_INPUT,"string"==typeof t?(t=(e=>65279!==e.charCodeAt(0)?e:e.slice(1))(t),o=new(r.download?c:d)(r)):!0===t.readable&&w(t.read)&&w(t.on)?o=new p(r):(n.File&&t instanceof File||t instanceof Object)&&(o=new u(r)),o.stream(t);(o=(()=>{var t;return!!s.WORKERS_SUPPORTED&&(t=(()=>{var t=n.URL||n.webkitURL||null,r=e.toString();return s.BLOB_URL||(s.BLOB_URL=t.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",r,")();"],{type:"text/javascript"})))})(),(t=new n.Worker(t)).onmessage=g,t.id=a++,i[t.id]=t)})()).userStep=r.step,o.userChunk=r.chunk,o.userComplete=r.complete,o.userError=r.error,r.step=w(r.step),r.chunk=w(r.chunk),r.complete=w(r.complete),r.error=w(r.error),delete r.worker,o.postMessage({input:t,config:r,workerId:o.id})},s.unparse=function(e,t){var n=!1,r=!0,o=",",i="\r\n",a='"',l=a+a,c=!1,u=null,d=!1,p=((()=>{if("object"==typeof t){if("string"!=typeof t.delimiter||s.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(o=t.delimiter),"boolean"!=typeof t.quotes&&"function"!=typeof t.quotes&&!Array.isArray(t.quotes)||(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(c=t.skipEmptyLines),"string"==typeof t.newline&&(i=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");u=t.columns}void 0!==t.escapeChar&&(l=t.escapeChar+a),t.escapeFormulae instanceof RegExp?d=t.escapeFormulae:"boolean"==typeof t.escapeFormulae&&t.escapeFormulae&&(d=/^[=+\-@\t\r].*$/)}})(),new RegExp(h(a),"g"));if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,c);if("object"==typeof e[0])return f(u||Object.keys(e[0]),e,c)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||u),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],c);throw new Error("Unable to serialize unrecognized input");function f(e,t,n){var a="",s=("string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),l=!Array.isArray(t[0]);if(s&&r){for(var c=0;c<e.length;c++)0<c&&(a+=o),a+=m(e[c],c);0<t.length&&(a+=i)}for(var u=0;u<t.length;u++){var d=(s?e:t[u]).length,p=!1,f=s?0===Object.keys(t[u]).length:0===t[u].length;if(n&&!s&&(p="greedy"===n?""===t[u].join("").trim():1===t[u].length&&0===t[u][0].length),"greedy"===n&&s){for(var h=[],g=0;g<d;g++){var y=l?e[g]:g;h.push(t[u][y])}p=""===h.join("").trim()}if(!p){for(var v=0;v<d;v++){0<v&&!f&&(a+=o);var b=s&&l?e[v]:v;a+=m(t[u][b],v)}u<t.length-1&&(!n||0<d&&!f)&&(a+=i)}}return a}function m(e,t){var r,i;return null==e?"":e.constructor===Date?JSON.stringify(e).slice(1,25):(i=!1,d&&"string"==typeof e&&d.test(e)&&(e="'"+e,i=!0),r=e.toString().replace(p,l),(i=i||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||((e,t)=>{for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1})(r,s.BAD_DELIMITERS)||-1<r.indexOf(o)||" "===r.charAt(0)||" "===r.charAt(r.length-1))?a+r+a:r)}},s.RECORD_SEP=String.fromCharCode(30),s.UNIT_SEP=String.fromCharCode(31),s.BYTE_ORDER_MARK="\ufeff",s.BAD_DELIMITERS=["\r","\n",'"',s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!r&&!!n.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=",",s.Parser=m,s.ParserHandle=f,s.NetworkStreamer=c,s.FileStreamer=u,s.StringStreamer=d,s.ReadableStreamStreamer=p,n.jQuery&&((t=n.jQuery).fn.parse=function(e){var r=e.config||{},o=[];return this.each((function(e){if("INPUT"!==t(this).prop("tagName").toUpperCase()||"file"!==t(this).attr("type").toLowerCase()||!n.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)o.push({file:this.files[i],inputElem:this,instanceConfig:t.extend({},r)})})),i(),this;function i(){if(0===o.length)w(e.complete)&&e.complete();else{var n,r,i,l,c=o[0];if(w(e.before)){var u=e.before(c.file,c.inputElem);if("object"==typeof u){if("abort"===u.action)return n="AbortError",r=c.file,i=c.inputElem,l=u.reason,void(w(e.error)&&e.error({name:n},r,i,l));if("skip"===u.action)return void a();"object"==typeof u.config&&(c.instanceConfig=t.extend(c.instanceConfig,u.config))}else if("skip"===u)return void a()}var d=c.instanceConfig.complete;c.instanceConfig.complete=function(e){w(d)&&d(e,c.file,c.inputElem),a()},s.parse(c.file,c.instanceConfig)}}function a(){o.splice(0,1),i()}}),o&&(n.onmessage=function(e){e=e.data,void 0===s.WORKER_ID&&e&&(s.WORKER_ID=e.workerId),"string"==typeof e.input?n.postMessage({workerId:s.WORKER_ID,results:s.parse(e.input,e.config),finished:!0}):(n.File&&e.input instanceof File||e.input instanceof Object)&&(e=s.parse(e.input,e.config))&&n.postMessage({workerId:s.WORKER_ID,results:e,finished:!0})}),(c.prototype=Object.create(l.prototype)).constructor=c,(u.prototype=Object.create(l.prototype)).constructor=u,(d.prototype=Object.create(d.prototype)).constructor=d,(p.prototype=Object.create(l.prototype)).constructor=p,s},void 0===(o="function"===typeof n?n.apply(t,r):n)||(e.exports=o)},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},443:(e,t,n)=>{"use strict";e.exports=n(717)},461:(e,t,n)=>{"use strict";e.exports=n(330)},579:(e,t,n)=>{"use strict";e.exports=n(153)},631:e=>{e.exports=class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.name=e,this.display=t.display||"?",this.points=t.points||1,this.weight=t.weight||1,this.wildcard=!!t.wildcard}toString(){return this.display}}},706:(e,t,n)=>{"use strict";n(358)},717:(e,t,n)=>{"use strict";var r=n(43),o=n(461);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=o.useSyncExternalStore,s=r.useRef,l=r.useEffect,c=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var d=s(null);if(null===d.current){var p={hasValue:!1,value:null};d.current=p}else p=d.current;d=c((function(){function e(e){if(!l){if(l=!0,a=e,e=r(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return s=t}return s=e}if(t=s,i(a,e))return t;var n=r(e);return void 0!==o&&o(t,n)?(a=e,t):(a=e,s=n)}var a,s,l=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]}),[t,n,r,o]);var f=a(e,d[0],d[1]);return l((function(){p.hasValue=!0,p.value=f}),[f]),u(f),f}},730:(e,t,n)=>{"use strict";var r=n(43),o=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function m(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function b(e,t,n,r){var o=g.hasOwnProperty(t)?g[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),T=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),A=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var M=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var I=Symbol.iterator;function z(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=I&&e[I]||e["@@iterator"])?e:null}var L,D=Object.assign;function N(e){if(void 0===L)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var $=!1;function F(e,t){if(!e||$)return"";$=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(1!==a||1!==s)do{if(a--,0>--s||o[a]!==i[s]){var l="\n"+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{$=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function U(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case E:return"StrictMode";case O:return"Suspense";case _:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case T:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case R:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case A:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function V(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function W(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function K(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=q(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function J(e,t){X(e,t);var n=q(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,q(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function ie(e,t){var n=q(t.value),r=q(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(fe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var ye=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,Ee=null;function Ce(e){if(e=xo(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=ko(t),ke(e.stateNode,e.type,t))}}function je(e){Se?Ee?Ee.push(e):Ee=[e]:Se=e}function Te(){if(Se){var e=Se,t=Ee;if(Ee=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Pe(e,t){return e(t)}function Oe(){}var _e=!1;function Re(e,t,n){if(_e)return e(t,n);_e=!0;try{return Pe(e,t,n)}finally{_e=!1,(null!==Se||null!==Ee)&&(Oe(),Te())}}function Ae(e,t){var n=e.stateNode;if(null===n)return null;var r=ko(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Me=!1;if(u)try{var Ie={};Object.defineProperty(Ie,"passive",{get:function(){Me=!0}}),window.addEventListener("test",Ie,Ie),window.removeEventListener("test",Ie,Ie)}catch(ue){Me=!1}function ze(e,t,n,r,o,i,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Le=!1,De=null,Ne=!1,$e=null,Fe={onError:function(e){Le=!0,De=e}};function Ue(e,t,n,r,o,i,a,s,l){Le=!1,De=null,ze.apply(Fe,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ve(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qe(e){if(Be(e)!==e)throw Error(i(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return qe(o),e;if(a===r)return qe(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=a;break}if(l===r){s=!0,r=o,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=o;break}if(l===r){s=!0,r=a,n=o;break}l=l.sibling}if(!s)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?We(e):null}function We(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=We(e);if(null!==t)return t;e=e.sibling}return null}var Qe=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,Ge=o.unstable_shouldYield,Ke=o.unstable_requestPaint,Xe=o.unstable_now,Je=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~o;0!==s?r=dt(s):0!==(i&=a)&&(r=dt(i))}else 0!==(a=n&~o)?r=dt(a):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-at(t)),r|=e[n],t&=~o;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,Et,Ct,jt=!1,Tt=[],Pt=null,Ot=null,_t=null,Rt=new Map,At=new Map,Mt=[],It="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Rt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(t.pointerId)}}function Lt(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Dt(e){var t=bo(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ve(n)))return e.blockedOn=t,void Ct(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Nt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xo(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function $t(e,t,n){Nt(e)&&n.delete(t)}function Ft(){jt=!1,null!==Pt&&Nt(Pt)&&(Pt=null),null!==Ot&&Nt(Ot)&&(Ot=null),null!==_t&&Nt(_t)&&(_t=null),Rt.forEach($t),At.forEach($t)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ft)))}function Bt(e){function t(t){return Ut(t,e)}if(0<Tt.length){Ut(Tt[0],e);for(var n=1;n<Tt.length;n++){var r=Tt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Ut(Pt,e),null!==Ot&&Ut(Ot,e),null!==_t&&Ut(_t,e),Rt.forEach(t),At.forEach(t),n=0;n<Mt.length;n++)(r=Mt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&null===(n=Mt[0]).blockedOn;)Dt(n),null===n.blockedOn&&Mt.shift()}var Vt=x.ReactCurrentBatchConfig,qt=!0;function Ht(e,t,n,r){var o=bt,i=Vt.transition;Vt.transition=null;try{bt=1,Qt(e,t,n,r)}finally{bt=o,Vt.transition=i}}function Wt(e,t,n,r){var o=bt,i=Vt.transition;Vt.transition=null;try{bt=4,Qt(e,t,n,r)}finally{bt=o,Vt.transition=i}}function Qt(e,t,n,r){if(qt){var o=Gt(e,t,n,r);if(null===o)qr(e,t,r,Yt,n),zt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Pt=Lt(Pt,e,t,n,r,o),!0;case"dragenter":return Ot=Lt(Ot,e,t,n,r,o),!0;case"mouseover":return _t=Lt(_t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Rt.set(i,Lt(Rt.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,At.set(i,Lt(At.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(zt(e,r),4&t&&-1<It.indexOf(e)){for(;null!==o;){var i=xo(o);if(null!==i&&wt(i),null===(i=Gt(e,t,n,r))&&qr(e,t,r,Yt,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else qr(e,t,r,null,n)}}var Yt=null;function Gt(e,t,n,r){if(Yt=null,null!==(e=bo(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ve(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Kt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,o="value"in Xt?Xt.value:Xt.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=D({},cn,{view:0,detail:0}),pn=on(dn),fn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),hn=on(fn),mn=on(D({},fn,{dataTransfer:0})),gn=on(D({},dn,{relatedTarget:0})),yn=on(D({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=D({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=on(vn),xn=on(D({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return En}var jn=D({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Tn=on(jn),Pn=on(D({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),On=on(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),_n=on(D({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rn=D({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),An=on(Rn),Mn=[9,13,27,32],In=u&&"CompositionEvent"in window,zn=null;u&&"documentMode"in document&&(zn=document.documentMode);var Ln=u&&"TextEvent"in window&&!zn,Dn=u&&(!In||zn&&8<zn&&11>=zn),Nn=String.fromCharCode(32),$n=!1;function Fn(e,t){switch(e){case"keyup":return-1!==Mn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Vn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Vn[e.type]:"textarea"===t}function Hn(e,t,n,r){je(r),0<(t=Wr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,Qn=null;function Yn(e){Nr(e,0)}function Gn(e){if(Q(wo(e)))return e}function Kn(e,t){if("change"===e)return t}var Xn=!1;if(u){var Jn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Xn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Wn&&(Wn.detachEvent("onpropertychange",nr),Qn=Wn=null)}function nr(e){if("value"===e.propertyName&&Gn(Qn)){var t=[];Hn(t,Qn,e,we(e)),Re(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Qn=n,(Wn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Qn)}function ir(e,t){if("click"===e)return Gn(t)}function ar(e,t){if("input"===e||"change"===e)return Gn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!sr(e[o],t[o]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ur(n,i);var a=ur(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,yr=null,vr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==Y(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&lr(vr,r)||(vr=r,0<(r=Wr(yr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},Er={};function Cr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return Sr[e]=n[t];return e}u&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var jr=Cr("animationend"),Tr=Cr("animationiteration"),Pr=Cr("animationstart"),Or=Cr("transitionend"),_r=new Map,Rr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){_r.set(e,t),l(t,[e])}for(var Mr=0;Mr<Rr.length;Mr++){var Ir=Rr[Mr];Ar(Ir.toLowerCase(),"on"+(Ir[0].toUpperCase()+Ir.slice(1)))}Ar(jr,"onAnimationEnd"),Ar(Tr,"onAnimationIteration"),Ar(Pr,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Or,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lr=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,s,l,c){if(Ue.apply(this,arguments),Le){if(!Le)throw Error(i(198));var u=De;Le=!1,De=null,Ne||(Ne=!0,$e=u)}}(r,t,void 0,e),e.currentTarget=null}function Nr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Dr(o,s,c),i=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Dr(o,s,c),i=l}}}if(Ne)throw e=$e,Ne=!1,$e=null,e}function $r(e,t){var n=t[go];void 0===n&&(n=t[go]=new Set);var r=e+"__bubble";n.has(r)||(Vr(t,e,2,!1),n.add(r))}function Fr(e,t,n){var r=0;t&&(r|=4),Vr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Ur]){e[Ur]=!0,a.forEach((function(t){"selectionchange"!==t&&(Lr.has(t)||Fr(t,!1,e),Fr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Fr("selectionchange",!1,t))}}function Vr(e,t,n,r){switch(Kt(t)){case 1:var o=Ht;break;case 4:o=Wt;break;default:o=Qt}n=o.bind(null,t,n,e),o=void 0,!Me||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function qr(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===o||8===s.nodeType&&s.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===o||8===l.nodeType&&l.parentNode===o))return;a=a.return}for(;null!==s;){if(null===(a=bo(s)))return;if(5===(l=a.tag)||6===l){r=i=a;continue e}s=s.parentNode}}r=r.return}Re((function(){var r=i,o=we(n),a=[];e:{var s=_r.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Tn;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=On;break;case jr:case Tr:case Pr:l=yn;break;case Or:l=_n;break;case"scroll":l=pn;break;case"wheel":l=An;break;case"copy":case"cut":case"paste":l=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Pn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var f,h=r;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=Ae(h,p))&&u.push(Hr(h,m,f)))),d)break;h=h.return}0<u.length&&(s=new l(s,c,null,n,o),a.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===xe||!(c=n.relatedTarget||n.fromElement)||!bo(c)&&!c[mo])&&(l||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?bo(c):null)&&(c!==(d=Be(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=hn,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Pn,m="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==l?s:wo(l),f=null==c?s:wo(c),(s=new u(m,h+"leave",l,n,o)).target=d,s.relatedTarget=f,m=null,bo(o)===r&&((u=new u(p,h+"enter",c,n,o)).target=f,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(p=c,h=0,f=u=l;f;f=Qr(f))h++;for(f=0,m=p;m;m=Qr(m))f++;for(;0<h-f;)u=Qr(u),h--;for(;0<f-h;)p=Qr(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Qr(u),p=Qr(p)}u=null}else u=null;null!==l&&Yr(a,s,l,u,!1),null!==c&&null!==d&&Yr(a,d,c,u,!0)}if("select"===(l=(s=r?wo(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Kn;else if(qn(s))if(Xn)g=ar;else{g=or;var y=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ir);switch(g&&(g=g(e,r))?Hn(a,g,n,o):(y&&y(e,s,r),"focusout"===e&&(y=s._wrapperState)&&y.controlled&&"number"===s.type&&ee(s,"number",s.value)),y=r?wo(r):window,e){case"focusin":(qn(y)||"true"===y.contentEditable)&&(gr=y,yr=r,vr=null);break;case"focusout":vr=yr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(a,n,o);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(a,n,o)}var v;if(In)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Bn?Fn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Dn&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Bn&&(v=en()):(Jt="value"in(Xt=o)?Xt.value:Xt.textContent,Bn=!0)),0<(y=Wr(r,b)).length&&(b=new xn(b,e,null,n,o),a.push({event:b,listeners:y}),v?b.data=v:null!==(v=Un(n))&&(b.data=v))),(v=Ln?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:($n=!0,Nn);case"textInput":return(e=t.data)===Nn&&$n?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!In&&Fn(e,t)?(e=en(),Zt=Jt=Xt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Wr(r,"onBeforeInput")).length&&(o=new xn("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=v))}Nr(a,t)}))}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=Ae(e,n))&&r.unshift(Hr(e,i,o)),null!=(i=Ae(e,t))&&r.push(Hr(e,i,o))),e=e.return}return r}function Qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,o?null!=(l=Ae(n,i))&&a.unshift(Hr(n,l,s)):o||null!=(l=Ae(n,i))&&a.push(Hr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Gr=/\r\n?/g,Kr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(Kr,"")}function Jr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(i(425))}function Zr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,io="function"===typeof Promise?Promise:void 0,ao="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof io?function(e){return io.resolve(null).then(e).catch(so)}:ro;function so(e){setTimeout((function(){throw e}))}function lo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Bt(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),fo="__reactFiber$"+po,ho="__reactProps$"+po,mo="__reactContainer$"+po,go="__reactEvents$"+po,yo="__reactListeners$"+po,vo="__reactHandles$"+po;function bo(e){var t=e[fo];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mo]||n[fo]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=uo(e);null!==e;){if(n=e[fo])return n;e=uo(e)}return t}n=(e=n).parentNode}return null}function xo(e){return!(e=e[fo]||e[mo])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ko(e){return e[ho]||null}var So=[],Eo=-1;function Co(e){return{current:e}}function jo(e){0>Eo||(e.current=So[Eo],So[Eo]=null,Eo--)}function To(e,t){Eo++,So[Eo]=e.current,e.current=t}var Po={},Oo=Co(Po),_o=Co(!1),Ro=Po;function Ao(e,t){var n=e.type.contextTypes;if(!n)return Po;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Mo(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Io(){jo(_o),jo(Oo)}function zo(e,t,n){if(Oo.current!==Po)throw Error(i(168));To(Oo,t),To(_o,n)}function Lo(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(i(108,V(e)||"Unknown",o));return D({},n,r)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Po,Ro=Oo.current,To(Oo,e),To(_o,_o.current),!0}function No(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Lo(e,t,Ro),r.__reactInternalMemoizedMergedChildContext=e,jo(_o),jo(Oo),To(Oo,e)):jo(_o),To(_o,n)}var $o=null,Fo=!1,Uo=!1;function Bo(e){null===$o?$o=[e]:$o.push(e)}function Vo(){if(!Uo&&null!==$o){Uo=!0;var e=0,t=bt;try{var n=$o;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}$o=null,Fo=!1}catch(o){throw null!==$o&&($o=$o.slice(e+1)),Qe(Ze,Vo),o}finally{bt=t,Uo=!1}}return null}var qo=[],Ho=0,Wo=null,Qo=0,Yo=[],Go=0,Ko=null,Xo=1,Jo="";function Zo(e,t){qo[Ho++]=Qo,qo[Ho++]=Wo,Wo=e,Qo=t}function ei(e,t,n){Yo[Go++]=Xo,Yo[Go++]=Jo,Yo[Go++]=Ko,Ko=e;var r=Xo;e=Jo;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Xo=1<<32-at(t)+o|n<<o|r,Jo=i+e}else Xo=1<<i|n<<o|r,Jo=e}function ti(e){null!==e.return&&(Zo(e,1),ei(e,1,0))}function ni(e){for(;e===Wo;)Wo=qo[--Ho],qo[Ho]=null,Qo=qo[--Ho],qo[Ho]=null;for(;e===Ko;)Ko=Yo[--Go],Yo[Go]=null,Jo=Yo[--Go],Yo[Go]=null,Xo=Yo[--Go],Yo[Go]=null}var ri=null,oi=null,ii=!1,ai=null;function si(e,t){var n=Rc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,oi=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ko?{id:Xo,overflow:Jo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Rc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ri=e,oi=null,!0);default:return!1}}function ci(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ui(e){if(ii){var t=oi;if(t){var n=t;if(!li(e,t)){if(ci(e))throw Error(i(418));t=co(n.nextSibling);var r=ri;t&&li(e,t)?si(r,n):(e.flags=-4097&e.flags|2,ii=!1,ri=e)}}else{if(ci(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ri=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function pi(e){if(e!==ri)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oi)){if(ci(e))throw fi(),Error(i(418));for(;t;)si(e,t),t=co(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oi=co(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oi=null}}else oi=ri?co(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=oi;e;)e=co(e.nextSibling)}function hi(){oi=ri=null,ii=!1}function mi(e){null===ai?ai=[e]:ai.push(e)}var gi=x.ReactCurrentBatchConfig;function yi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function vi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bi(e){return(0,e._init)(e._payload)}function xi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Mc(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Dc(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===A&&bi(i)===t.type)?((r=o(t,n.props)).ref=yi(e,t,n),r.return=e,r):((r=Ic(n.type,n.key,n.props,null,e.mode,r)).ref=yi(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Nc(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=zc(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Dc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ic(t.type,t.key,t.props,null,e.mode,n)).ref=yi(e,null,t),n.return=e,n;case k:return(t=Nc(t,e.mode,n)).return=e,t;case A:return p(e,(0,t._init)(t._payload),n)}if(te(t)||z(t))return(t=zc(t,e.mode,n,null)).return=e,t;vi(e,t)}return null}function f(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?c(e,t,n,r):null;case k:return n.key===o?u(e,t,n,r):null;case A:return f(e,t,(o=n._init)(n._payload),r)}if(te(n)||z(n))return null!==o?null:d(e,t,n,r,null);vi(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case A:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||z(r))return d(t,e=e.get(n)||null,r,o,null);vi(t,r)}return null}function m(o,i,s,l){for(var c=null,u=null,d=i,m=i=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=f(o,d,s[m],l);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(o,d),i=a(y,i,m),null===u?c=y:u.sibling=y,u=y,d=g}if(m===s.length)return n(o,d),ii&&Zo(o,m),c;if(null===d){for(;m<s.length;m++)null!==(d=p(o,s[m],l))&&(i=a(d,i,m),null===u?c=d:u.sibling=d,u=d);return ii&&Zo(o,m),c}for(d=r(o,d);m<s.length;m++)null!==(g=h(d,o,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=a(g,i,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(o,e)})),ii&&Zo(o,m),c}function g(o,s,l,c){var u=z(l);if("function"!==typeof u)throw Error(i(150));if(null==(l=u.call(l)))throw Error(i(151));for(var d=u=null,m=s,g=s=0,y=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(y=m,m=null):y=m.sibling;var b=f(o,m,v.value,c);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(o,m),s=a(b,s,g),null===d?u=b:d.sibling=b,d=b,m=y}if(v.done)return n(o,m),ii&&Zo(o,g),u;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=p(o,v.value,c))&&(s=a(v,s,g),null===d?u=v:d.sibling=v,d=v);return ii&&Zo(o,g),u}for(m=r(o,m);!v.done;g++,v=l.next())null!==(v=h(m,o,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),s=a(v,s,g),null===d?u=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(o,e)})),ii&&Zo(o,g),u}return function e(r,i,a,l){if("object"===typeof a&&null!==a&&a.type===S&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=i;null!==u;){if(u.key===c){if((c=a.type)===S){if(7===u.tag){n(r,u.sibling),(i=o(u,a.props.children)).return=r,r=i;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===A&&bi(c)===u.type){n(r,u.sibling),(i=o(u,a.props)).ref=yi(r,u,a),i.return=r,r=i;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===S?((i=zc(a.props.children,r.mode,l,a.key)).return=r,r=i):((l=Ic(a.type,a.key,a.props,null,r.mode,l)).ref=yi(r,i,a),l.return=r,r=l)}return s(r);case k:e:{for(u=a.key;null!==i;){if(i.key===u){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){n(r,i.sibling),(i=o(i,a.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Nc(a,r.mode,l)).return=r,r=i}return s(r);case A:return e(r,i,(u=a._init)(a._payload),l)}if(te(a))return m(r,i,a,l);if(z(a))return g(r,i,a,l);vi(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,a)).return=r,r=i):(n(r,i),(i=Dc(a,r.mode,l)).return=r,r=i),s(r)):n(r,i)}}var wi=xi(!0),ki=xi(!1),Si=Co(null),Ei=null,Ci=null,ji=null;function Ti(){ji=Ci=Ei=null}function Pi(e){var t=Si.current;jo(Si),e._currentValue=t}function Oi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _i(e,t){Ei=e,ji=Ci=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bs=!0),e.firstContext=null)}function Ri(e){var t=e._currentValue;if(ji!==e)if(e={context:e,memoizedValue:t,next:null},null===Ci){if(null===Ei)throw Error(i(308));Ci=e,Ei.dependencies={lanes:0,firstContext:e}}else Ci=Ci.next=e;return t}var Ai=null;function Mi(e){null===Ai?Ai=[e]:Ai.push(e)}function Ii(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Mi(t)):(n.next=o.next,o.next=n),t.interleaved=n,zi(e,r)}function zi(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Li=!1;function Di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ni(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $i(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Pl)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,zi(e,n)}return null===(o=r.interleaved)?(t.next=t,Mi(r)):(t.next=o.next,o.next=t),r.interleaved=t,zi(e,n)}function Ui(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Bi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vi(e,t,n,r){var o=e.updateQueue;Li=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?i=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==i){var d=o.baseState;for(a=0,u=c=l=null,s=i;;){var p=s.lane,f=s.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(p=t,f=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(f,d,p):h)||void 0===p)break e;d=D({},d,p);break e;case 2:Li=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=o.effects)?o.effects=[s]:p.push(s))}else f={eventTime:f,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,a|=p;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(p=s).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}if(null===u&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Ll|=a,e.lanes=a,e.memoizedState=d}}function qi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(i(191,o));o.call(r)}}}var Hi={},Wi=Co(Hi),Qi=Co(Hi),Yi=Co(Hi);function Gi(e){if(e===Hi)throw Error(i(174));return e}function Ki(e,t){switch(To(Yi,t),To(Qi,e),To(Wi,Hi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}jo(Wi),To(Wi,t)}function Xi(){jo(Wi),jo(Qi),jo(Yi)}function Ji(e){Gi(Yi.current);var t=Gi(Wi.current),n=le(t,e.type);t!==n&&(To(Qi,e),To(Wi,n))}function Zi(e){Qi.current===e&&(jo(Wi),jo(Qi))}var ea=Co(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var oa=x.ReactCurrentDispatcher,ia=x.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ca=null,ua=!1,da=!1,pa=0,fa=0;function ha(){throw Error(i(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,o,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=null===e||null===e.memoizedState?Za:es,e=n(r,o),da){a=0;do{if(da=!1,pa=0,25<=a)throw Error(i(301));a+=1,ca=la=null,t.updateQueue=null,oa.current=ts,e=n(r,o)}while(da)}if(oa.current=Ja,t=null!==la&&null!==la.next,aa=0,ca=la=sa=null,ua=!1,t)throw Error(i(300));return e}function ya(){var e=0!==pa;return pa=0,e}function va(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?sa.memoizedState=ca=e:ca=ca.next=e,ca}function ba(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ca?sa.memoizedState:ca.next;if(null!==t)ca=t,la=e;else{if(null===e)throw Error(i(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ca?sa.memoizedState=ca=e:ca=ca.next=e}return ca}function xa(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=ba(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=la,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var s=o.next;o.next=a.next,a.next=s}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var l=s=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,sa.lanes|=d,Ll|=d}u=u.next}while(null!==u&&u!==a);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(bs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{a=o.lane,sa.lanes|=a,Ll|=a,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=ba(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var s=o=o.next;do{a=e(a,s.action),s=s.next}while(s!==o);sr(a,t.memoizedState)||(bs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Sa(){}function Ea(e,t){var n=sa,r=ba(),o=t(),a=!sr(r.memoizedState,o);if(a&&(r.memoizedState=o,bs=!0),r=r.queue,La(Ta.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,Ra(9,ja.bind(null,n,r,o,t),void 0,null),null===Ol)throw Error(i(349));0!==(30&aa)||Ca(n,t,o)}return o}function Ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ja(e,t,n,r){t.value=n,t.getSnapshot=r,Pa(t)&&Oa(e)}function Ta(e,t,n){return n((function(){Pa(t)&&Oa(e)}))}function Pa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function Oa(e){var t=zi(e,1);null!==t&&nc(t,e,1,-1)}function _a(e){var t=va();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t.queue=e,e=e.dispatch=Ya.bind(null,sa,e),[t.memoizedState,e]}function Ra(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Aa(){return ba().memoizedState}function Ma(e,t,n,r){var o=va();sa.flags|=e,o.memoizedState=Ra(1|t,n,void 0,void 0===r?null:r)}function Ia(e,t,n,r){var o=ba();r=void 0===r?null:r;var i=void 0;if(null!==la){var a=la.memoizedState;if(i=a.destroy,null!==r&&ma(r,a.deps))return void(o.memoizedState=Ra(t,n,i,r))}sa.flags|=e,o.memoizedState=Ra(1|t,n,i,r)}function za(e,t){return Ma(8390656,8,e,t)}function La(e,t){return Ia(2048,8,e,t)}function Da(e,t){return Ia(4,2,e,t)}function Na(e,t){return Ia(4,4,e,t)}function $a(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fa(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ia(4,4,$a.bind(null,t,e),n)}function Ua(){}function Ba(e,t){var n=ba();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Va(e,t){var n=ba();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,bs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),sa.lanes|=n,Ll|=n,e.baseState=!0),t)}function Ha(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{bt=n,ia.transition=r}}function Wa(){return ba().memoizedState}function Qa(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ga(e))Ka(t,n);else if(null!==(n=Ii(e,t,n,r))){nc(n,e,r,ec()),Xa(n,t,r)}}function Ya(e,t,n){var r=tc(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ga(e))Ka(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(o.next=o,Mi(t)):(o.next=l.next,l.next=o),void(t.interleaved=o)}}catch(c){}null!==(n=Ii(e,t,o,r))&&(nc(n,e,r,o=ec()),Xa(n,t,r))}}function Ga(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function Ka(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Ja={readContext:Ri,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Za={readContext:Ri,useCallback:function(e,t){return va().memoizedState=[e,void 0===t?null:t],e},useContext:Ri,useEffect:za,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ma(4194308,4,$a.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ma(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ma(4,2,e,t)},useMemo:function(e,t){var n=va();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=va();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qa.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},va().memoizedState=e},useState:_a,useDebugValue:Ua,useDeferredValue:function(e){return va().memoizedState=e},useTransition:function(){var e=_a(!1),t=e[0];return e=Ha.bind(null,e[1]),va().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,o=va();if(ii){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Ol)throw Error(i(349));0!==(30&aa)||Ca(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,za(Ta.bind(null,r,a,e),[e]),r.flags|=2048,Ra(9,ja.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=va(),t=Ol.identifierPrefix;if(ii){var n=Jo;t=":"+t+"R"+(n=(Xo&~(1<<32-at(Xo)-1)).toString(32)+n),0<(n=pa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Ri,useCallback:Ba,useContext:Ri,useEffect:La,useImperativeHandle:Fa,useInsertionEffect:Da,useLayoutEffect:Na,useMemo:Va,useReducer:wa,useRef:Aa,useState:function(){return wa(xa)},useDebugValue:Ua,useDeferredValue:function(e){return qa(ba(),la.memoizedState,e)},useTransition:function(){return[wa(xa)[0],ba().memoizedState]},useMutableSource:Sa,useSyncExternalStore:Ea,useId:Wa,unstable_isNewReconciler:!1},ts={readContext:Ri,useCallback:Ba,useContext:Ri,useEffect:La,useImperativeHandle:Fa,useInsertionEffect:Da,useLayoutEffect:Na,useMemo:Va,useReducer:ka,useRef:Aa,useState:function(){return ka(xa)},useDebugValue:Ua,useDeferredValue:function(e){var t=ba();return null===la?t.memoizedState=e:qa(t,la.memoizedState,e)},useTransition:function(){return[ka(xa)[0],ba().memoizedState]},useMutableSource:Sa,useSyncExternalStore:Ea,useId:Wa,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var os={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),i=$i(r,o);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,o))&&(nc(t,e,o,r),Ui(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),i=$i(r,o);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,o))&&(nc(t,e,o,r),Ui(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),o=$i(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Fi(e,o,r))&&(nc(t,e,r,n),Ui(t,e,r))}};function is(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(o,i))}function as(e,t,n){var r=!1,o=Po,i=t.contextType;return"object"===typeof i&&null!==i?i=Ri(i):(o=Mo(t)?Ro:Oo.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ao(e,o):Po),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=os,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&os.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Di(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Ri(i):(i=Mo(t)?Ro:Oo.current,o.context=Ao(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rs(e,t,i,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&os.enqueueReplaceState(o,o.state,null),Vi(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var o=n}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var ps="function"===typeof WeakMap?WeakMap:Map;function fs(e,t,n){(n=$i(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ql||(ql=!0,Hl=r),ds(0,t)},n}function hs(e,t,n){(n=$i(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ds(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Wl?Wl=new Set([this]):Wl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ps;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ys(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=$i(-1,1)).tag=2,Fi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var vs=x.ReactCurrentOwner,bs=!1;function xs(e,t,n,r){t.child=null===e?ki(t,null,n,r):wi(t,e.child,n,r)}function ws(e,t,n,r,o){n=n.render;var i=t.ref;return _i(t,o),r=ga(e,t,n,r,i,o),n=ya(),null===e||bs?(ii&&n&&ti(t),t.flags|=1,xs(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qs(e,t,o))}function ks(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Ac(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ic(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ss(e,t,i,r,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return qs(e,t,o)}return t.flags|=1,(e=Mc(i,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(lr(i,r)&&e.ref===t.ref){if(bs=!1,t.pendingProps=r=i,0===(e.lanes&o))return t.lanes=e.lanes,qs(e,t,o);0!==(131072&e.flags)&&(bs=!0)}}return js(e,t,n,r,o)}function Es(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},To(Ml,Al),Al|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,To(Ml,Al),Al|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,To(Ml,Al),Al|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,To(Ml,Al),Al|=r;return xs(e,t,o,n),t.child}function Cs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function js(e,t,n,r,o){var i=Mo(n)?Ro:Oo.current;return i=Ao(t,i),_i(t,o),n=ga(e,t,n,r,i,o),r=ya(),null===e||bs?(ii&&r&&ti(t),t.flags|=1,xs(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,qs(e,t,o))}function Ts(e,t,n,r,o){if(Mo(n)){var i=!0;Do(t)}else i=!1;if(_i(t,o),null===t.stateNode)Vs(e,t),as(t,n,r),ls(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=Ri(c):c=Ao(t,c=Mo(n)?Ro:Oo.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,a,r,c),Li=!1;var p=t.memoizedState;a.state=p,Vi(t,r,a,o),l=t.memoizedState,s!==r||p!==l||_o.current||Li?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=Li||is(t,n,s,r,p,l,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ni(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),a.props=c,d=t.pendingProps,p=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=Ri(l):l=Ao(t,l=Mo(n)?Ro:Oo.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||p!==l)&&ss(t,a,r,l),Li=!1,p=t.memoizedState,a.state=p,Vi(t,r,a,o);var h=t.memoizedState;s!==d||p!==h||_o.current||Li?("function"===typeof f&&(rs(t,n,f,r),h=t.memoizedState),(c=Li||is(t,n,c,r,p,h,l)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=c):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ps(e,t,n,r,i,o)}function Ps(e,t,n,r,o,i){Cs(e,t);var a=0!==(128&t.flags);if(!r&&!a)return o&&No(t,n,!1),qs(e,t,i);r=t.stateNode,vs.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,s,i)):xs(e,t,s,i),t.memoizedState=r.state,o&&No(t,n,!0),t.child}function Os(e){var t=e.stateNode;t.pendingContext?zo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&zo(0,t.context,!1),Ki(e,t.containerInfo)}function _s(e,t,n,r,o){return hi(),mi(o),t.flags|=256,xs(e,t,n,r),t.child}var Rs,As,Ms,Is,zs={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ds(e,t,n){var r,o=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),To(ea,1&a),null===e)return ui(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&o)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Lc(l,o,0,null),e=zc(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ls(n),t.memoizedState=zs,e):Ns(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,s){if(n)return 256&t.flags?(t.flags&=-257,$s(e,t,s,r=us(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Lc({mode:"visible",children:r.children},o,0,null),(a=zc(a,o,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wi(t,e.child,null,s),t.child.memoizedState=Ls(s),t.memoizedState=zs,a);if(0===(1&t.mode))return $s(e,t,s,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var l=r.dgst;return r=l,$s(e,t,s,r=us(a=Error(i(419)),r,void 0))}if(l=0!==(s&e.childLanes),bs||l){if(null!==(r=Ol)){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|s))?0:o)&&o!==a.retryLane&&(a.retryLane=o,zi(e,o),nc(r,e,o,-1))}return mc(),$s(e,t,s,r=us(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Tc.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=co(o.nextSibling),ri=t,ii=!0,ai=null,null!==e&&(Yo[Go++]=Xo,Yo[Go++]=Jo,Yo[Go++]=Ko,Xo=e.id,Jo=e.overflow,Ko=t),t=Ns(t,r.children),t.flags|=4096,t)}(e,t,l,o,r,a,n);if(s){s=o.fallback,l=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&l)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=Mc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=Mc(r,s):(s=zc(s,l,n,null)).flags|=2,s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=null===(l=e.child.memoizedState)?Ls(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=zs,o}return e=(s=e.child).sibling,o=Mc(s,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ns(e,t){return(t=Lc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function $s(e,t,n,r){return null!==r&&mi(r),wi(t,e.child,null,n),(e=Ns(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Oi(e.return,t,n)}function Us(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Bs(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fs(e,n,t);else if(19===e.tag)Fs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(To(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Us(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ta(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Us(t,!0,n,null,i);break;case"together":Us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vs(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ll|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Mc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Mc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hs(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ws(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qs(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ws(t),null;case 1:case 17:return Mo(t.type)&&Io(),Ws(t),null;case 3:return r=t.stateNode,Xi(),jo(_o),jo(Oo),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(pi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ai&&(ac(ai),ai=null))),As(e,t),Ws(t),null;case 5:Zi(t);var o=Gi(Yi.current);if(n=t.type,null!==e&&null!=t.stateNode)Ms(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Ws(t),null}if(e=Gi(Wi.current),pi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[fo]=t,r[ho]=a,e=0!==(1&t.mode),n){case"dialog":$r("cancel",r),$r("close",r);break;case"iframe":case"object":case"embed":$r("load",r);break;case"video":case"audio":for(o=0;o<zr.length;o++)$r(zr[o],r);break;case"source":$r("error",r);break;case"img":case"image":case"link":$r("error",r),$r("load",r);break;case"details":$r("toggle",r);break;case"input":K(r,a),$r("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},$r("invalid",r);break;case"textarea":oe(r,a),$r("invalid",r)}for(var l in ve(n,a),o=null,a)if(a.hasOwnProperty(l)){var c=a[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,c,e),o=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,c,e),o=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&$r("scroll",r)}switch(n){case"input":W(r),Z(r,a,!0);break;case"textarea":W(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[fo]=t,e[ho]=r,Rs(e,t,!1,!1),t.stateNode=e;e:{switch(l=be(n,r),n){case"dialog":$r("cancel",e),$r("close",e),o=r;break;case"iframe":case"object":case"embed":$r("load",e),o=r;break;case"video":case"audio":for(o=0;o<zr.length;o++)$r(zr[o],e);o=r;break;case"source":$r("error",e),o=r;break;case"img":case"image":case"link":$r("error",e),$r("load",e),o=r;break;case"details":$r("toggle",e),o=r;break;case"input":K(e,r),o=G(e,r),$r("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=D({},r,{value:void 0}),$r("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),$r("invalid",e)}for(a in ve(n,o),c=o)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?ge(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=u&&"onScroll"===a&&$r("scroll",e):null!=u&&b(e,a,u,l))}switch(n){case"input":W(e),Z(e,r,!1);break;case"textarea":W(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ws(t),null;case 6:if(e&&null!=t.stateNode)Is(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Gi(Yi.current),Gi(Wi.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[fo]=t,(a=r.nodeValue!==n)&&null!==(e=ri))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fo]=t,t.stateNode=r}return Ws(t),null;case 13:if(jo(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!==(1&t.mode)&&0===(128&t.flags))fi(),hi(),t.flags|=98560,a=!1;else if(a=pi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[fo]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ws(t),a=!1}else null!==ai&&(ac(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Il&&(Il=3):mc())),null!==t.updateQueue&&(t.flags|=4),Ws(t),null);case 4:return Xi(),As(e,t),null===e&&Br(t.stateNode.containerInfo),Ws(t),null;case 10:return Pi(t.type._context),Ws(t),null;case 19:if(jo(ea),null===(a=t.memoizedState))return Ws(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Hs(a,!1);else{if(0!==Il||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Hs(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return To(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Xe()>Bl&&(t.flags|=128,r=!0,Hs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!ii)return Ws(t),null}else 2*Xe()-a.renderingStartTime>Bl&&1073741824!==n&&(t.flags|=128,r=!0,Hs(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Xe(),t.sibling=null,n=ea.current,To(ea,r?1&n|2:1&n),t):(Ws(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Al)&&(Ws(t),6&t.subtreeFlags&&(t.flags|=8192)):Ws(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Ys(e,t){switch(ni(t),t.tag){case 1:return Mo(t.type)&&Io(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xi(),jo(_o),jo(Oo),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(jo(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return jo(ea),null;case 4:return Xi(),null;case 10:return Pi(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Rs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},As=function(){},Ms=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Gi(Wi.current);var i,a=null;switch(n){case"input":o=G(e,o),r=G(e,r),a=[];break;case"select":o=D({},o,{value:void 0}),r=D({},r,{value:void 0}),a=[];break;case"textarea":o=re(e,o),r=re(e,r),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in ve(n,r),n=null,o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u])if("style"===u){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=o?o[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&$r("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Is=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gs=!1,Ks=!1,Xs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Ec(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Ec(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&el(t,n,i)}o=o.next}while(o!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ol(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function il(e){var t=e.alternate;null!==t&&(e.alternate=null,il(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fo],delete t[ho],delete t[go],delete t[yo],delete t[vo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function pl(e,t,n){for(n=n.child;null!==n;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,n)}catch(s){}switch(n.tag){case 5:Ks||Zs(n,t);case 6:var r=ul,o=dl;ul=null,pl(e,t,n),dl=o,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?lo(e.parentNode,n):1===e.nodeType&&lo(e,n),Bt(e)):lo(ul,n.stateNode));break;case 4:r=ul,o=dl,ul=n.stateNode.containerInfo,dl=!0,pl(e,t,n),ul=r,dl=o;break;case 0:case 11:case 14:case 15:if(!Ks&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&el(n,t,a),o=o.next}while(o!==r)}pl(e,t,n);break;case 1:if(!Ks&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ec(n,t,s)}pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:1&n.mode?(Ks=(r=Ks)||null!==n.memoizedState,pl(e,t,n),Ks=r):pl(e,t,n);break;default:pl(e,t,n)}}function hl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xs),t.forEach((function(t){var r=Pc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(i(160));fl(a,s,o),ul=null,dl=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(u){Ec(o,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),yl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){Ec(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Ec(e,e.return,g)}}break;case 1:ml(t,e),yl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(ml(t,e),yl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var o=e.stateNode;try{pe(o,"")}catch(g){Ec(e,e.return,g)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===a.type&&null!=a.name&&X(o,a),be(l,s);var u=be(l,a);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?ge(o,p):"dangerouslySetInnerHTML"===d?de(o,p):"children"===d?pe(o,p):b(o,d,p,u)}switch(l){case"input":J(o,a);break;case"textarea":ie(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(o,!!a.multiple,h,!1):f!==!!a.multiple&&(null!=a.defaultValue?ne(o,!!a.multiple,a.defaultValue,!0):ne(o,!!a.multiple,a.multiple?[]:"",!1))}o[ho]=a}catch(g){Ec(e,e.return,g)}}break;case 6:if(ml(t,e),yl(e),4&r){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(g){Ec(e,e.return,g)}}break;case 3:if(ml(t,e),yl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){Ec(e,e.return,g)}break;case 4:default:ml(t,e),yl(e);break;case 13:ml(t,e),yl(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Ul=Xe())),4&r&&hl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Ks=(u=Ks)||d,ml(t,e),Ks=u):ml(t,e),yl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(p=Js=d;null!==Js;){switch(h=(f=Js).child,f.tag){case 0:case 11:case 14:case 15:nl(4,f,f.return);break;case 1:Zs(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Ec(r,n,g)}}break;case 5:Zs(f,f.return);break;case 22:if(null!==f.memoizedState){wl(p);continue}}null!==h?(h.return=f,Js=h):wl(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{o=p.stateNode,u?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){Ec(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){Ec(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ml(t,e),yl(e),4&r&&hl(e);case 21:}}function yl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(pe(o,""),r.flags&=-33),cl(e,sl(e),o);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(i(161))}}catch(s){Ec(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vl(e,t,n){Js=e,bl(e,t,n)}function bl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var o=Js,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||Gs;if(!a){var s=o.alternate,l=null!==s&&null!==s.memoizedState||Ks;s=Gs;var c=Ks;if(Gs=a,(Ks=l)&&!c)for(Js=o;null!==Js;)l=(a=Js).child,22===a.tag&&null!==a.memoizedState?kl(o):null!==l?(l.return=a,Js=l):kl(o);for(;null!==i;)Js=i,bl(i,t,n),i=i.sibling;Js=o,Gs=s,Ks=c}xl(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,Js=i):xl(e)}}function xl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ks||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ks)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&qi(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}qi(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Bt(p)}}}break;default:throw Error(i(163))}Ks||512&t.flags&&ol(t)}catch(f){Ec(t,t.return,f)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Ec(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(l){Ec(t,o,l)}}var i=t.return;try{ol(t)}catch(l){Ec(t,i,l)}break;case 5:var a=t.return;try{ol(t)}catch(l){Ec(t,a,l)}}}catch(l){Ec(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,El=Math.ceil,Cl=x.ReactCurrentDispatcher,jl=x.ReactCurrentOwner,Tl=x.ReactCurrentBatchConfig,Pl=0,Ol=null,_l=null,Rl=0,Al=0,Ml=Co(0),Il=0,zl=null,Ll=0,Dl=0,Nl=0,$l=null,Fl=null,Ul=0,Bl=1/0,Vl=null,ql=!1,Hl=null,Wl=null,Ql=!1,Yl=null,Gl=0,Kl=0,Xl=null,Jl=-1,Zl=0;function ec(){return 0!==(6&Pl)?Xe():-1!==Jl?Jl:Jl=Xe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Pl)&&0!==Rl?Rl&-Rl:null!==gi.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Kt(e.type)}function nc(e,t,n,r){if(50<Kl)throw Kl=0,Xl=null,Error(i(185));yt(e,n,r),0!==(2&Pl)&&e===Ol||(e===Ol&&(0===(2&Pl)&&(Dl|=n),4===Il&&sc(e,Rl)),rc(e,r),1===n&&0===Pl&&0===(1&t.mode)&&(Bl=Xe()+500,Fo&&Vo()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),s=1<<a,l=o[a];-1===l?0!==(s&n)&&0===(s&r)||(o[a]=ft(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}(e,t);var r=pt(e,e===Ol?Rl:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Fo=!0,Bo(e)}(lc.bind(null,e)):Bo(lc.bind(null,e)),ao((function(){0===(6&Pl)&&Vo()})),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Oc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Jl=-1,Zl=0,0!==(6&Pl))throw Error(i(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=pt(e,e===Ol?Rl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var o=Pl;Pl|=2;var a=hc();for(Ol===e&&Rl===t||(Vl=null,Bl=Xe()+500,pc(e,t));;)try{vc();break}catch(l){fc(e,l)}Ti(),Cl.current=a,Pl=o,null!==_l?t=0:(Ol=null,Rl=0,t=Il)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=ic(e,o))),1===t)throw n=zl,pc(e,0),sc(e,r),rc(e,Xe()),n;if(6===t)sc(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!sr(i(),o))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=gc(e,r))&&(0!==(a=ht(e))&&(r=a,t=ic(e,a))),1===t))throw n=zl,pc(e,0),sc(e,r),rc(e,Xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wc(e,Fl,Vl);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Ul+500-Xe())){if(0!==pt(e,0))break;if(((o=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wc.bind(null,e,Fl,Vl),t);break}wc(e,Fl,Vl);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>o&&(o=s),r&=~a}if(r=o,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*El(r/1960))-r)){e.timeoutHandle=ro(wc.bind(null,e,Fl,Vl),r);break}wc(e,Fl,Vl);break;default:throw Error(i(329))}}}return rc(e,Xe()),e.callbackNode===n?oc.bind(null,e):null}function ic(e,t){var n=$l;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Fl,Fl=n,null!==t&&ac(t)),e}function ac(e){null===Fl?Fl=e:Fl.push.apply(Fl,e)}function sc(e,t){for(t&=~Nl,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Pl))throw Error(i(327));kc();var t=pt(e,0);if(0===(1&t))return rc(e,Xe()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=zl,pc(e,0),sc(e,t),rc(e,Xe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Fl,Vl),rc(e,Xe()),null}function cc(e,t){var n=Pl;Pl|=1;try{return e(t)}finally{0===(Pl=n)&&(Bl=Xe()+500,Fo&&Vo())}}function uc(e){null!==Yl&&0===Yl.tag&&0===(6&Pl)&&kc();var t=Pl;Pl|=1;var n=Tl.transition,r=bt;try{if(Tl.transition=null,bt=1,e)return e()}finally{bt=r,Tl.transition=n,0===(6&(Pl=t))&&Vo()}}function dc(){Al=Ml.current,jo(Ml)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==_l)for(n=_l.return;null!==n;){var r=n;switch(ni(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Io();break;case 3:Xi(),jo(_o),jo(Oo),ra();break;case 5:Zi(r);break;case 4:Xi();break;case 13:case 19:jo(ea);break;case 10:Pi(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Ol=e,_l=e=Mc(e.current,null),Rl=Al=t,Il=0,zl=null,Nl=Dl=Ll=0,Fl=$l=null,null!==Ai){for(t=0;t<Ai.length;t++)if(null!==(r=(n=Ai[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}Ai=null}return e}function fc(e,t){for(;;){var n=_l;try{if(Ti(),oa.current=Ja,ua){for(var r=sa.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ua=!1}if(aa=0,ca=la=sa=null,da=!1,pa=0,jl.current=null,null===n||null===n.return){Il=1,zl=t,_l=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=Rl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gs(s);if(null!==h){h.flags&=-257,ys(h,s,l,0,t),1&h.mode&&ms(a,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(a,u,t),mc();break e}c=Error(i(426))}else if(ii&&1&l.mode){var y=gs(s);if(null!==y){0===(65536&y.flags)&&(y.flags|=256),ys(y,s,l,0,t),mi(cs(c,l));break e}}a=c=cs(c,l),4!==Il&&(Il=2),null===$l?$l=[a]:$l.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Bi(a,fs(0,c,t));break e;case 1:l=c;var v=a.type,b=a.stateNode;if(0===(128&a.flags)&&("function"===typeof v.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Wl||!Wl.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t,Bi(a,hs(a,l,t));break e}}a=a.return}while(null!==a)}xc(n)}catch(x){t=x,_l===n&&null!==n&&(_l=n=n.return);continue}break}}function hc(){var e=Cl.current;return Cl.current=Ja,null===e?Ja:e}function mc(){0!==Il&&3!==Il&&2!==Il||(Il=4),null===Ol||0===(268435455&Ll)&&0===(268435455&Dl)||sc(Ol,Rl)}function gc(e,t){var n=Pl;Pl|=2;var r=hc();for(Ol===e&&Rl===t||(Vl=null,pc(e,t));;)try{yc();break}catch(o){fc(e,o)}if(Ti(),Pl=n,Cl.current=r,null!==_l)throw Error(i(261));return Ol=null,Rl=0,Il}function yc(){for(;null!==_l;)bc(_l)}function vc(){for(;null!==_l&&!Ge();)bc(_l)}function bc(e){var t=Sl(e.alternate,e,Al);e.memoizedProps=e.pendingProps,null===t?xc(e):_l=t,jl.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Qs(n,t,Al)))return void(_l=n)}else{if(null!==(n=Ys(n,t)))return n.flags&=32767,void(_l=n);if(null===e)return Il=6,void(_l=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(_l=t);_l=t=e}while(null!==t);0===Il&&(Il=5)}function wc(e,t,n){var r=bt,o=Tl.transition;try{Tl.transition=null,bt=1,function(e,t,n,r){do{kc()}while(null!==Yl);if(0!==(6&Pl))throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,a),e===Ol&&(_l=Ol=null,Rl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ql||(Ql=!0,Oc(tt,(function(){return kc(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Tl.transition,Tl.transition=null;var s=bt;bt=1;var l=Pl;Pl|=4,jl.current=null,function(e,t){if(eo=qt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==o&&3!==p.nodeType||(l=s+o),p!==a||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===o&&(l=s),f===a&&++d===r&&(c=s),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},qt=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(i(163))}}catch(w){Ec(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}m=tl,tl=!1}(e,n),gl(n,e),hr(to),qt=!!eo,to=eo=null,e.current=n,vl(n,e,o),Ke(),Pl=l,bt=s,Tl.transition=a}else e.current=n;if(Ql&&(Ql=!1,Yl=e,Gl=o),a=e.pendingLanes,0===a&&(Wl=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ql)throw ql=!1,e=Hl,Hl=null,e;0!==(1&Gl)&&0!==e.tag&&kc(),a=e.pendingLanes,0!==(1&a)?e===Xl?Kl++:(Kl=0,Xl=e):Kl=0,Vo()}(e,t,n,r)}finally{Tl.transition=o,bt=r}return null}function kc(){if(null!==Yl){var e=xt(Gl),t=Tl.transition,n=bt;try{if(Tl.transition=null,bt=16>e?16:e,null===Yl)var r=!1;else{if(e=Yl,Yl=null,Gl=0,0!==(6&Pl))throw Error(i(331));var o=Pl;for(Pl|=4,Js=e.current;null!==Js;){var a=Js,s=a.child;if(0!==(16&Js.flags)){var l=a.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Js=u;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var p=d.child;if(null!==p)p.return=d,Js=p;else for(;null!==Js;){var f=(d=Js).sibling,h=d.return;if(il(d),d===u){Js=null;break}if(null!==f){f.return=h,Js=f;break}Js=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Js=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Js=s;else e:for(;null!==Js;){if(0!==(2048&(a=Js).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var v=a.sibling;if(null!==v){v.return=a.return,Js=v;break e}Js=a.return}}var b=e.current;for(Js=b;null!==Js;){var x=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==x)x.return=s,Js=x;else e:for(s=b;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){Ec(l,l.return,k)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(Pl=o,Vo(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(k){}r=!0}return r}finally{bt=n,Tl.transition=t}}return!1}function Sc(e,t,n){e=Fi(e,t=fs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(yt(e,1,t),rc(e,t))}function Ec(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Wl||!Wl.has(r))){t=Fi(t,e=hs(t,e=cs(n,e),1),1),e=ec(),null!==t&&(yt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Ol===e&&(Rl&n)===n&&(4===Il||3===Il&&(130023424&Rl)===Rl&&500>Xe()-Ul?pc(e,0):Nl|=n),rc(e,t)}function jc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=zi(e,t))&&(yt(e,t,n),rc(e,n))}function Tc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),jc(e,n)}function Pc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),jc(e,n)}function Oc(e,t){return Qe(e,t)}function _c(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rc(e,t,n,r){return new _c(e,t,n,r)}function Ac(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Mc(e,t){var n=e.alternate;return null===n?((n=Rc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ic(e,t,n,r,o,a){var s=2;if(r=e,"function"===typeof e)Ac(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return zc(n.children,o,a,t);case E:s=8,o|=8;break;case C:return(e=Rc(12,n,t,2|o)).elementType=C,e.lanes=a,e;case O:return(e=Rc(13,n,t,o)).elementType=O,e.lanes=a,e;case _:return(e=Rc(19,n,t,o)).elementType=_,e.lanes=a,e;case M:return Lc(n,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:s=10;break e;case T:s=9;break e;case P:s=11;break e;case R:s=14;break e;case A:s=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Rc(s,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function zc(e,t,n,r){return(e=Rc(7,e,r,t)).lanes=n,e}function Lc(e,t,n,r){return(e=Rc(22,e,r,t)).elementType=M,e.lanes=n,e.stateNode={isHidden:!1},e}function Dc(e,t,n){return(e=Rc(6,e,null,t)).lanes=n,e}function Nc(e,t,n){return(t=Rc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $c(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,r,o,i,a,s,l){return e=new $c(e,t,n,s,l),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Rc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(i),e}function Uc(e){if(!e)return Po;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Mo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Mo(n))return Lo(e,n,t)}return t}function Bc(e,t,n,r,o,i,a,s,l){return(e=Fc(n,r,!0,e,0,i,0,s,l)).context=Uc(null),n=e.current,(i=$i(r=ec(),o=tc(n))).callback=void 0!==t&&null!==t?t:null,Fi(n,i,o),e.current.lanes=o,yt(e,o,r),rc(e,r),e}function Vc(e,t,n,r){var o=t.current,i=ec(),a=tc(o);return n=Uc(n),null===t.context?t.context=n:t.pendingContext=n,(t=$i(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fi(o,t,a))&&(nc(e,o,a,i),Ui(e,o,a)),a}function qc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Wc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||_o.current)bs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bs=!1,function(e,t,n){switch(t.tag){case 3:Os(t),hi();break;case 5:Ji(t);break;case 1:Mo(t.type)&&Do(t);break;case 4:Ki(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;To(Si,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(To(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ds(e,t,n):(To(ea,1&ea.current),null!==(e=qs(e,t,n))?e.sibling:null);To(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bs(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),To(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,Es(e,t,n)}return qs(e,t,n)}(e,t,n);bs=0!==(131072&e.flags)}else bs=!1,ii&&0!==(1048576&t.flags)&&ei(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vs(e,t),e=t.pendingProps;var o=Ao(t,Oo.current);_i(t,n),o=ga(null,t,r,e,o,n);var a=ya();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Mo(r)?(a=!0,Do(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Di(t),o.updater=os,t.stateNode=o,o._reactInternals=t,ls(t,r,e,n),t=Ps(null,t,r,!0,a,n)):(t.tag=0,ii&&a&&ti(t),xs(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vs(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Ac(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===R)return 14}return 2}(r),e=ns(r,e),o){case 0:t=js(null,t,r,e,n);break e;case 1:t=Ts(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,js(e,t,r,o=t.elementType===r?o:ns(r,o),n);case 1:return r=t.type,o=t.pendingProps,Ts(e,t,r,o=t.elementType===r?o:ns(r,o),n);case 3:e:{if(Os(t),null===e)throw Error(i(387));r=t.pendingProps,o=(a=t.memoizedState).element,Ni(e,t),Vi(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=_s(e,t,r,n,o=cs(Error(i(423)),t));break e}if(r!==o){t=_s(e,t,r,n,o=cs(Error(i(424)),t));break e}for(oi=co(t.stateNode.containerInfo.firstChild),ri=t,ii=!0,ai=null,n=ki(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===o){t=qs(e,t,n);break e}xs(e,t,r,n)}t=t.child}return t;case 5:return Ji(t),null===e&&ui(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,s=o.children,no(r,o)?s=null:null!==a&&no(r,a)&&(t.flags|=32),Cs(e,t),xs(e,t,s,n),t.child;case 6:return null===e&&ui(t),null;case 13:return Ds(e,t,n);case 4:return Ki(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wi(t,null,r,n):xs(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,ws(e,t,r,o=t.elementType===r?o:ns(r,o),n);case 7:return xs(e,t,t.pendingProps,n),t.child;case 8:case 12:return xs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,To(Si,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===o.children&&!_o.current){t=qs(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=$i(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),Oi(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(i(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Oi(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}xs(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_i(t,n),r=r(o=Ri(o)),t.flags|=1,xs(e,t,r,n),t.child;case 14:return o=ns(r=t.type,t.pendingProps),ks(e,t,r,o=ns(r.type,o),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ns(r,o),Vs(e,t),t.tag=1,Mo(r)?(e=!0,Do(t)):e=!1,_i(t,n),as(t,r,o),ls(t,r,o,n),Ps(null,t,r,!0,e,n);case 19:return Bs(e,t,n);case 22:return Es(e,t,n)}throw Error(i(156,t.tag))};var Qc="function"===typeof reportError?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function Kc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"===typeof o){var s=o;o=function(){var e=qc(a);s.call(e)}}Vc(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"===typeof r){var i=r;r=function(){var e=qc(a);i.call(e)}}var a=Bc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=a,e[mo]=a.current,Br(8===e.nodeType?e.parentNode:e),uc(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var s=r;r=function(){var e=qc(l);s.call(e)}}var l=Fc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[mo]=l.current,Br(8===e.nodeType?e.parentNode:e),uc((function(){Vc(t,l,n,r)})),l}(n,t,e,o,r);return qc(a)}Gc.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Vc(e,t,null,null)},Gc.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Vc(null,e,null,null)})),t[mo]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&0!==t&&t<Mt[n].priority;n++);Mt.splice(n,0,e),0===n&&Dt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),rc(t,Xe()),0===(6&Pl)&&(Bl=Xe()+500,Vo()))}break;case 13:uc((function(){var t=zi(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Wc(e,1)}},kt=function(e){if(13===e.tag){var t=zi(e,134217728);if(null!==t)nc(t,e,134217728,ec());Wc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=zi(e,t);if(null!==n)nc(n,e,t,ec());Wc(e,t)}},Et=function(){return bt},Ct=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ko(r);if(!o)throw Error(i(90));Q(r),J(r,o)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=cc,Oe=uc;var eu={usingClientEntryPoint:!1,Events:[xo,wo,ko,je,Te,cc]},tu={findFiberByHostInstance:bo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ot=ru.inject(nu),it=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Kc(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Kc(e))throw Error(i(299));var n=!1,r="",o=Qc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Fc(e,1,!1,null,0,n,0,r,o),e[mo]=t.current,Br(8===e.nodeType?e.parentNode:e),new Yc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Xc(t))throw Error(i(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Kc(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",s=Qc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Bc(t,null,e,1,null!=n?n:null,o,0,a,s),e[mo]=t.current,Br(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Gc(t)},t.render=function(e,t,n){if(!Xc(t))throw Error(i(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(i(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[mo]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},738:(e,t,n)=>{const r=n(76),o=n(929);e.exports=class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>Math.random();if(e%2===0||e<3)throw new RangeError("Slot machine size must be an odd number, 3 or higher.");if(!t.length)throw new RangeError("There must be at least one symbol.");this.size=e,this.symbols=t,this.random=n}play(){const e=[],t=this.symbols.reduce(((e,t)=>e+t.weight),0);for(let r=0;r<Math.pow(this.size,2);r++){const n=this.random()*t;let r=0;for(let t=0;t<this.symbols.length;t++)if(r+=this.symbols[t].weight,n<=r){e.push(this.symbols[t]);break}}const n=[];for(let r=0;r<e.length/this.size;r++)n.push(e.slice(r*this.size,(r+1)*this.size));return n.push(e.filter(((e,t)=>(t+this.size+1)%(this.size+1)===0))),n.push(e.slice(this.size-1).filter(((e,t)=>t%(this.size-1)===0)).slice(0,-1)),new o(n.map(((e,t)=>new r(e,t===n.length-1||t===n.length-2))))}chanceOf(e){const t=this.symbols.find((t=>t.name===e)),n=this.symbols.reduce(((e,t)=>e+t.weight),0);return t.weight/n}}},766:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=function(e){var t=(0,o.default)(e);return{getItem:function(e){return new Promise((function(n,r){n(t.getItem(e))}))},setItem:function(e,n){return new Promise((function(r,o){r(t.setItem(e,n))}))},removeItem:function(e){return new Promise((function(n,r){n(t.removeItem(e))}))}}};var r,o=(r=n(4))&&r.__esModule?r:{default:r}},809:(e,t,n)=>{e.exports={Symbol:n(631),SlotSymbol:n(631),SlotMachine:n(738),EvaluatedLine:n(76),Results:n(929)}},853:(e,t,n)=>{"use strict";e.exports=n(234)},901:(e,t,n)=>{"use strict";var r;t.A=void 0;var o=(0,((r=n(766))&&r.__esModule?r:{default:r}).default)("local");t.A=o},929:e=>{e.exports=class{constructor(e){this.lines=e}get totalPoints(){return this.lines.reduce(((e,t)=>e+t.points),0)}get winCount(){return this.lines.filter((e=>e.isWon)).length}visualize(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];let t=this.lines.filter((e=>!e.diagonal)).map((e=>e.symbols.map((e=>e.display)).join(" "))).join("\n");if(e){t+="\n\n",t+=this.lines.filter((e=>e.diagonal)).map((e=>e.symbols.map((e=>e.display)).join(" "))).join("\n")}return t}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},979:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GA4=void 0;var r=l(n(148)),o=l(n(380)),i=["eventCategory","eventAction","eventLabel","eventValue","hitType"],a=["title","location"],s=["page","hitType"];function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function d(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,s=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(u){c=!0,o=u}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function v(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===u(t)?t:String(t)}var x=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"reset",(function(){t.isInitialized=!1,t._testMode=!1,t._currentMeasurementId,t._hasLoadedGA=!1,t._isQueuing=!1,t._queueGtag=[]})),v(this,"_gtag",(function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];t._testMode||t._isQueuing?t._queueGtag.push(n):r.default.apply(void 0,n)})),v(this,"_loadGA",(function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://www.googletagmanager.com/gtag/js";if("undefined"!==typeof window&&"undefined"!==typeof document&&!t._hasLoadedGA){var o=document.createElement("script");o.async=!0,o.src="".concat(r,"?id=").concat(e),n&&o.setAttribute("nonce",n),document.body.appendChild(o),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},t._hasLoadedGA=!0}})),v(this,"_toGtagOptions",(function(e){if(e){var t={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(e).reduce((function(e,n){var r=h(n,2),o=r[0],i=r[1];return t[o]?e[t[o]]=i:e[o]=i,e}),{})}})),v(this,"initialize",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)throw new Error("Require GA_MEASUREMENT_ID");var r="string"===typeof e?[{trackingId:e}]:e;t._currentMeasurementId=r[0].trackingId;var o=n.gaOptions,i=n.gtagOptions,a=n.nonce,s=n.testMode,l=void 0!==s&&s,c=n.gtagUrl;if(t._testMode=l,l||t._loadGA(t._currentMeasurementId,a,c),t.isInitialized||(t._gtag("js",new Date),r.forEach((function(e){var n=f(f(f({},t._toGtagOptions(f(f({},o),e.gaOptions))),i),e.gtagOptions);Object.keys(n).length?t._gtag("config",e.trackingId,n):t._gtag("config",e.trackingId)}))),t.isInitialized=!0,!l){var u=d(t._queueGtag);for(t._queueGtag=[],t._isQueuing=!1;u.length;){var p=u.shift();t._gtag.apply(t,d(p)),"get"===p[0]&&(t._isQueuing=!0)}}})),v(this,"set",(function(e){e?"object"===u(e)?(0===Object.keys(e).length&&console.warn("empty `fieldsObject` given to .set()"),t._gaCommand("set",e)):console.warn("Expected `fieldsObject` arg to be an Object"):console.warn("`fieldsObject` is required in .set()")})),v(this,"_gaCommandSendEvent",(function(e,n,r,o,i){t._gtag("event",n,f(f({event_category:e,event_label:r,value:o},i&&{non_interaction:i.nonInteraction}),t._toGtagOptions(i)))})),v(this,"_gaCommandSendEventParameters",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if("string"===typeof n[0])t._gaCommandSendEvent.apply(t,d(n.slice(1)));else{var o=n[0],a=o.eventCategory,s=o.eventAction,l=o.eventLabel,u=o.eventValue,p=(o.hitType,c(o,i));t._gaCommandSendEvent(a,s,l,u,p)}})),v(this,"_gaCommandSendTiming",(function(e,n,r,o){t._gtag("event","timing_complete",{name:n,value:r,event_category:e,event_label:o})})),v(this,"_gaCommandSendPageview",(function(e,n){if(n&&Object.keys(n).length){var r=t._toGtagOptions(n),o=r.title,i=r.location,s=c(r,a);t._gtag("event","page_view",f(f(f(f({},e&&{page_path:e}),o&&{page_title:o}),i&&{page_location:i}),s))}else e?t._gtag("event","page_view",{page_path:e}):t._gtag("event","page_view")})),v(this,"_gaCommandSendPageviewParameters",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if("string"===typeof n[0])t._gaCommandSendPageview.apply(t,d(n.slice(1)));else{var o=n[0],i=o.page,a=(o.hitType,c(o,s));t._gaCommandSendPageview(i,a)}})),v(this,"_gaCommandSend",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o="string"===typeof n[0]?n[0]:n[0].hitType;switch(o){case"event":t._gaCommandSendEventParameters.apply(t,n);break;case"pageview":t._gaCommandSendPageviewParameters.apply(t,n);break;case"timing":t._gaCommandSendTiming.apply(t,d(n.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(o));break;default:console.warn("Send command doesn't exist: ".concat(o))}})),v(this,"_gaCommandSet",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]=v({},n[0],n[1])),t._gtag("set",t._toGtagOptions(n[0]))})),v(this,"_gaCommand",(function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];switch(e){case"send":t._gaCommandSend.apply(t,r);break;case"set":t._gaCommandSet.apply(t,r);break;default:console.warn("Command doesn't exist: ".concat(e))}})),v(this,"ga",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if("string"===typeof n[0])t._gaCommand.apply(t,n);else{var o=n[0];t._gtag("get",t._currentMeasurementId,"client_id",(function(e){t._isQueuing=!1;var n=t._queueGtag;for(o({get:function(n){return"clientId"===n?e:"trackingId"===n?t._currentMeasurementId:"apiVersion"===n?"1":void 0}});n.length;){var r=n.shift();t._gtag.apply(t,d(r))}})),t._isQueuing=!0}return t.ga})),v(this,"event",(function(e,n){if("string"===typeof e)t._gtag("event",e,t._toGtagOptions(n));else{var r=e.action,i=e.category,a=e.label,s=e.value,l=e.nonInteraction,c=e.transport;if(!i||!r)return void console.warn("args.category AND args.action are required in event()");var u={hitType:"event",eventCategory:(0,o.default)(i),eventAction:(0,o.default)(r)};a&&(u.eventLabel=(0,o.default)(a)),"undefined"!==typeof s&&("number"!==typeof s?console.warn("Expected `args.value` arg to be a Number."):u.eventValue=s),"undefined"!==typeof l&&("boolean"!==typeof l?console.warn("`args.nonInteraction` must be a boolean."):u.nonInteraction=l),"undefined"!==typeof c&&("string"!==typeof c?console.warn("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(c)&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),u.transport=c)),t._gaCommand("send",u)}})),v(this,"send",(function(e){t._gaCommand("send",e)})),this.reset()}var t,n,l;return t=e,n=[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}],n&&y(t.prototype,n),l&&y(t,l),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.GA4=x;var w=new x;t.default=w}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".8fd71efa.chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="frosty-trivia:";n.l=(r,o,i,a)=>{if(e[r])e[r].push(o);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,i,a=r[0],s=r[1],l=r[2],c=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)l(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkfrosty_trivia=self.webpackChunkfrosty_trivia||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>Zb,hasStandardBrowserEnv:()=>tx,hasStandardBrowserWebWorkerEnv:()=>nx,navigator:()=>ex,origin:()=>rx});var t=n(43),r=n(391),o=n(461),i=n(443),a=n(950);let s=function(e){e()};const l=()=>s,c=Symbol.for("react-redux-context"),u="undefined"!==typeof globalThis?globalThis:{};function d(){var e;if(!t.createContext)return{};const n=null!=(e=u[c])?e:u[c]=new Map;let r=n.get(t.createContext);return r||(r=t.createContext(null),n.set(t.createContext,r)),r}const p=d();function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return function(){return(0,t.useContext)(e)}}const h=f();let m=()=>{throw new Error("uSES not initialized!")};const g=(e,t)=>e===t;function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;const n=e===p?h:f(e);return function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{equalityFn:o=g,stabilityCheck:i,noopCheck:a}="function"===typeof r?{equalityFn:r}:r;const{store:s,subscription:l,getServerState:c,stabilityCheck:u,noopCheck:d}=n(),p=((0,t.useRef)(!0),(0,t.useCallback)({[e.name]:t=>e(t)}[e.name],[e,u,i])),f=m(l.addNestedSub,s.getState,c||s.getState,p,o);return(0,t.useDebugValue)(f),f}}const v=y();n(219),n(706);const b={notify(){},get:()=>[]};function x(e,t){let n,r=b,o=0,i=!1;function a(){u.onStateChange&&u.onStateChange()}function s(){o++,n||(n=t?t.addNestedSub(a):e.subscribe(a),r=function(){const e=l();let t=null,n=null;return{clear(){t=null,n=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}function c(){o--,n&&0===o&&(n(),n=void 0,r.clear(),r=b)}const u={addNestedSub:function(e){s();const t=r.subscribe(e);let n=!1;return()=>{n||(n=!0,t(),c())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:a,isSubscribed:function(){return i},trySubscribe:function(){i||(i=!0,s())},tryUnsubscribe:function(){i&&(i=!1,c())},getListeners:()=>r};return u}const w=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement)?t.useLayoutEffect:t.useEffect;let k=null;const S=function(e){let{store:n,context:r,children:o,serverState:i,stabilityCheck:a="once",noopCheck:s="once"}=e;const l=t.useMemo((()=>{const e=x(n);return{store:n,subscription:e,getServerState:i?()=>i:void 0,stabilityCheck:a,noopCheck:s}}),[n,i,a,s]),c=t.useMemo((()=>n.getState()),[n]);w((()=>{const{subscription:e}=l;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),c!==n.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}}),[l,c]);const u=r||p;return t.createElement(u.Provider,{value:l},o)};function E(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;const t=e===p?h:f(e);return function(){const{store:e}=t();return e}}const C=E();function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;const t=e===p?C:E(e);return function(){return t().dispatch}}const T=j();var P;function O(e){return O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){return M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},M(e,t)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(e=>{m=e})(i.useSyncExternalStoreWithSelector),(e=>{k=e})(o.useSyncExternalStore),P=a.unstable_batchedUpdates,s=P;var z=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=function(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?A(e):t}(this,(e=R(t)).call.apply(e,[this].concat(o))),I(A(n),"state",{bootstrapped:!1}),I(A(n),"_unsubscribe",void 0),I(A(n),"handlePersistorState",(function(){n.props.persistor.getState().bootstrapped&&(n.props.onBeforeLift?Promise.resolve(n.props.onBeforeLift()).finally((function(){return n.setState({bootstrapped:!0})})):n.setState({bootstrapped:!0}),n._unsubscribe&&n._unsubscribe())})),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return"function"===typeof this.props.children?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}])&&_(n.prototype,r),o&&_(n,o),t}(t.PureComponent);function L(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function D(e){return!!e&&!!e[Ce]}function N(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===je}(e)||Array.isArray(e)||!!e[Ee]||!!(null===(t=e.constructor)||void 0===t?void 0:t[Ee])||H(e)||W(e))}function $(e,t,n){void 0===n&&(n=!1),0===F(e)?(n?Object.keys:Te)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function F(e){var t=e[Ce];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:H(e)?2:W(e)?3:0}function U(e,t){return 2===F(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function B(e,t){return 2===F(e)?e.get(t):e[t]}function V(e,t,n){var r=F(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function q(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function H(e){return xe&&e instanceof Map}function W(e){return we&&e instanceof Set}function Q(e){return e.o||e.t}function Y(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Pe(e);delete t[Ce];for(var n=Te(t),r=0;r<n.length;r++){var o=n[r],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function G(e,t){return void 0===t&&(t=!1),X(e)||D(e)||!N(e)||(F(e)>1&&(e.set=e.add=e.clear=e.delete=K),Object.freeze(e),t&&$(e,(function(e,t){return G(t,!0)}),!0)),e}function K(){L(2)}function X(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function J(e){var t=Oe[e];return t||L(18,e),t}function Z(e,t){Oe[e]||(Oe[e]=t)}function ee(){return ve}function te(e,t){t&&(J("Patches"),e.u=[],e.s=[],e.v=t)}function ne(e){re(e),e.p.forEach(ie),e.p=null}function re(e){e===ve&&(ve=e.l)}function oe(e){return ve={p:[],l:ve,h:e,m:!0,_:0}}function ie(e){var t=e[Ce];0===t.i||1===t.i?t.j():t.g=!0}function ae(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.O||J("ES5").S(t,e,r),r?(n[Ce].P&&(ne(t),L(4)),N(e)&&(e=se(t,e),t.l||ce(t,e)),t.u&&J("Patches").M(n[Ce].t,e,t.u,t.s)):e=se(t,n,[]),ne(t),t.u&&t.v(t.u,t.s),e!==Se?e:void 0}function se(e,t,n){if(X(t))return t;var r=t[Ce];if(!r)return $(t,(function(o,i){return le(e,r,t,o,i,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return ce(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=Y(r.k):r.o,i=o,a=!1;3===r.i&&(i=new Set(o),o.clear(),a=!0),$(i,(function(t,i){return le(e,r,o,t,i,n,a)})),ce(e,o,!1),n&&e.u&&J("Patches").N(r,n,e.u,e.s)}return r.o}function le(e,t,n,r,o,i,a){if(D(o)){var s=se(e,o,i&&t&&3!==t.i&&!U(t.R,r)?i.concat(r):void 0);if(V(n,r,s),!D(s))return;e.m=!1}else a&&n.add(o);if(N(o)&&!X(o)){if(!e.h.D&&e._<1)return;se(e,o),t&&t.A.l||ce(e,o)}}function ce(e,t,n){void 0===n&&(n=!1),!e.l&&e.h.D&&e.m&&G(t,n)}function ue(e,t){var n=e[Ce];return(n?Q(n):e)[t]}function de(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function pe(e){e.P||(e.P=!0,e.l&&pe(e.l))}function fe(e){e.o||(e.o=Y(e.t))}function he(e,t,n){var r=H(t)?J("MapSet").F(t,n):W(t)?J("MapSet").T(t,n):e.O?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:ee(),P:!1,I:!1,R:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=r,i=_e;n&&(o=[r],i=Re);var a=Proxy.revocable(o,i),s=a.revoke,l=a.proxy;return r.k=l,r.j=s,l}(t,n):J("ES5").J(t,n);return(n?n.A:ee()).p.push(r),r}function me(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Y(e)}function ge(){function e(e,t){var n=o[e];return n?n.enumerable=t:o[e]=n={configurable:!0,enumerable:t,get:function(){var t=this[Ce];return _e.get(t,e)},set:function(t){var n=this[Ce];_e.set(n,e,t)}},n}function t(e){for(var t=e.length-1;t>=0;t--){var o=e[t][Ce];if(!o.P)switch(o.i){case 5:r(o)&&pe(o);break;case 4:n(o)&&pe(o)}}}function n(e){for(var t=e.t,n=e.k,r=Te(n),o=r.length-1;o>=0;o--){var i=r[o];if(i!==Ce){var a=t[i];if(void 0===a&&!U(t,i))return!0;var s=n[i],l=s&&s[Ce];if(l?l.t!==a:!q(s,a))return!0}}var c=!!t[Ce];return r.length!==Te(t).length+(c?0:1)}function r(e){var t=e.k;if(t.length!==e.t.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);if(n&&!n.get)return!0;for(var r=0;r<t.length;r++)if(!t.hasOwnProperty(r))return!0;return!1}var o={};Z("ES5",{J:function(t,n){var r=Array.isArray(t),o=function(t,n){if(t){for(var r=Array(n.length),o=0;o<n.length;o++)Object.defineProperty(r,""+o,e(o,!0));return r}var i=Pe(n);delete i[Ce];for(var a=Te(i),s=0;s<a.length;s++){var l=a[s];i[l]=e(l,t||!!i[l].enumerable)}return Object.create(Object.getPrototypeOf(n),i)}(r,t),i={i:r?5:4,A:n?n.A:ee(),P:!1,I:!1,R:{},l:n,t:t,k:o,o:null,g:!1,C:!1};return Object.defineProperty(o,Ce,{value:i,writable:!0}),o},S:function(e,n,o){o?D(n)&&n[Ce].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var n=t[Ce];if(n){var o=n.t,i=n.k,a=n.R,s=n.i;if(4===s)$(i,(function(t){t!==Ce&&(void 0!==o[t]||U(o,t)?a[t]||e(i[t]):(a[t]=!0,pe(n)))})),$(o,(function(e){void 0!==i[e]||U(i,e)||(a[e]=!1,pe(n))}));else if(5===s){if(r(n)&&(pe(n),a.length=!0),i.length<o.length)for(var l=i.length;l<o.length;l++)a[l]=!1;else for(var c=o.length;c<i.length;c++)a[c]=!0;for(var u=Math.min(i.length,o.length),d=0;d<u;d++)i.hasOwnProperty(d)||(a[d]=!0),void 0===a[d]&&e(i[d])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?n(e):r(e)}})}I(z,"defaultProps",{children:null,loading:null});var ye,ve,be="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),xe="undefined"!=typeof Map,we="undefined"!=typeof Set,ke="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Se=be?Symbol.for("immer-nothing"):((ye={})["immer-nothing"]=!0,ye),Ee=be?Symbol.for("immer-draftable"):"__$immer_draftable",Ce=be?Symbol.for("immer-state"):"__$immer_state",je=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),Te="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Pe=Object.getOwnPropertyDescriptors||function(e){var t={};return Te(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},Oe={},_e={get:function(e,t){if(t===Ce)return e;var n=Q(e);if(!U(n,t))return function(e,t,n){var r,o=de(t,n);return o?"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(e.k):void 0}(e,n,t);var r=n[t];return e.I||!N(r)?r:r===ue(e.t,t)?(fe(e),e.o[t]=he(e.A.h,r,e)):r},has:function(e,t){return t in Q(e)},ownKeys:function(e){return Reflect.ownKeys(Q(e))},set:function(e,t,n){var r=de(Q(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=ue(Q(e),t),i=null==o?void 0:o[Ce];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(q(n,o)&&(void 0!==n||U(e.t,t)))return!0;fe(e),pe(e)}return e.o[t]===n&&(void 0!==n||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==ue(e.t,t)||t in e.t?(e.R[t]=!1,fe(e),pe(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Q(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){L(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){L(12)}},Re={};$(_e,(function(e,t){Re[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Re.deleteProperty=function(e,t){return Re.set.call(this,e,t,void 0)},Re.set=function(e,t,n){return _e.set.call(this,e[0],t,n,e[0])};var Ae=function(){function e(e){var t=this;this.O=ke,this.D=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var o=n;n=e;var i=t;return function(e){var t=this;void 0===e&&(e=o);for(var r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return i.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(a))}))}}var a;if("function"!=typeof n&&L(6),void 0!==r&&"function"!=typeof r&&L(7),N(e)){var s=oe(t),l=he(t,e,void 0),c=!0;try{a=n(l),c=!1}finally{c?ne(s):re(s)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return te(s,r),ae(e,s)}),(function(e){throw ne(s),e})):(te(s,r),ae(a,s))}if(!e||"object"!=typeof e){if(void 0===(a=n(e))&&(a=e),a===Se&&(a=void 0),t.D&&G(a,!0),r){var u=[],d=[];J("Patches").M(e,a,u,d),r(u,d)}return a}L(21,e)},this.produceWithPatches=function(e,n){if("function"==typeof e)return function(n){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(o))}))};var r,o,i=t.produce(e,n,(function(e,t){r=e,o=t}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(e){return[e,r,o]})):[i,r,o]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){N(e)||L(8),D(e)&&(e=function(e){return D(e)||L(22,e),function e(t){if(!N(t))return t;var n,r=t[Ce],o=F(t);if(r){if(!r.P&&(r.i<4||!J("ES5").K(r)))return r.t;r.I=!0,n=me(t,o),r.I=!1}else n=me(t,o);return $(n,(function(t,o){r&&B(r.t,t)===o||V(n,t,e(o))})),3===o?new Set(n):n}(e)}(e));var t=oe(this),n=he(this,e,void 0);return n[Ce].C=!0,re(t),n},t.finishDraft=function(e,t){var n=(e&&e[Ce]).A;return te(n,t),ae(void 0,n)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!ke&&L(20),this.O=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var o=J("Patches").$;return D(e)?o(e,t):this.produce(e,(function(e){return o(e,t)}))},e}(),Me=new Ae,Ie=Me.produce;Me.produceWithPatches.bind(Me),Me.setAutoFreeze.bind(Me),Me.setUseProxies.bind(Me),Me.applyPatches.bind(Me),Me.createDraft.bind(Me),Me.finishDraft.bind(Me);const ze=Ie;function Le(e){return Le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Le(e)}function De(e){var t=function(e,t){if("object"!=Le(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=Le(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==Le(t)?t:t+""}function Ne(e,t,n){return(t=De(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$e(Object(n),!0).forEach((function(t){Ne(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ue(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Be="function"===typeof Symbol&&Symbol.observable||"@@observable",Ve=function(){return Math.random().toString(36).substring(7).split("").join(".")},qe={INIT:"@@redux/INIT"+Ve(),REPLACE:"@@redux/REPLACE"+Ve(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ve()}};function He(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function We(e,t,n){var r;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(Ue(0));if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(Ue(1));return n(We)(e,t)}if("function"!==typeof e)throw new Error(Ue(2));var o=e,i=t,a=[],s=a,l=!1;function c(){s===a&&(s=a.slice())}function u(){if(l)throw new Error(Ue(3));return i}function d(e){if("function"!==typeof e)throw new Error(Ue(4));if(l)throw new Error(Ue(5));var t=!0;return c(),s.push(e),function(){if(t){if(l)throw new Error(Ue(6));t=!1,c();var n=s.indexOf(e);s.splice(n,1),a=null}}}function p(e){if(!He(e))throw new Error(Ue(7));if("undefined"===typeof e.type)throw new Error(Ue(8));if(l)throw new Error(Ue(9));try{l=!0,i=o(i,e)}finally{l=!1}for(var t=a=s,n=0;n<t.length;n++){(0,t[n])()}return e}return p({type:qe.INIT}),(r={dispatch:p,subscribe:d,getState:u,replaceReducer:function(e){if("function"!==typeof e)throw new Error(Ue(10));o=e,p({type:qe.REPLACE})}})[Be]=function(){var e,t=d;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(Ue(11));function n(){e.next&&e.next(u())}return n(),{unsubscribe:t(n)}}})[Be]=function(){return this},e},r}function Qe(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var i,a=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:qe.INIT}))throw new Error(Ue(12));if("undefined"===typeof n(void 0,{type:qe.PROBE_UNKNOWN_ACTION()}))throw new Error(Ue(13))}))}(n)}catch(s){i=s}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var r=!1,o={},s=0;s<a.length;s++){var l=a[s],c=n[l],u=e[l],d=c(u,t);if("undefined"===typeof d){t&&t.type;throw new Error(Ue(14))}o[l]=d,r=r||d!==u}return(r=r||a.length!==Object.keys(e).length)?o:e}}function Ye(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function Ge(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error(Ue(15))},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return r=Ye.apply(void 0,i)(n.dispatch),Fe(Fe({},n),{},{dispatch:r})}}}function Ke(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(n,r,e):t(o)}}}}var Xe=Ke();Xe.withExtraArgument=Ke;const Je=Xe;var Ze=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),et=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},tt=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},nt=Object.defineProperty,rt=Object.defineProperties,ot=Object.getOwnPropertyDescriptors,it=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable,lt=function(e,t,n){return t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},ct=function(e,t){for(var n in t||(t={}))at.call(t,n)&&lt(e,n,t[n]);if(it)for(var r=0,o=it(t);r<o.length;r++){n=o[r];st.call(t,n)&&lt(e,n,t[n])}return e},ut=function(e,t){return rt(e,ot(t))},dt=function(e,t,n){return new Promise((function(r,o){var i=function(e){try{s(n.next(e))}catch(t){o(t)}},a=function(e){try{s(n.throw(e))}catch(t){o(t)}},s=function(e){return e.done?r(e.value):Promise.resolve(e.value).then(i,a)};s((n=n.apply(e,t)).next())}))},pt="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?Ye:Ye.apply(null,arguments)};"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function ft(e){if("object"!==typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return t===n}function ht(e,t){function n(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t){var o=t.apply(void 0,n);if(!o)throw new Error("prepareAction did not return an object");return ct(ct({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:n[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(t){return t.type===e},n}var mt=function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Ze(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,tt([void 0],e[0].concat(this)))):new(t.bind.apply(t,tt([void 0],e.concat(this))))},t}(Array),gt=function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Ze(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,tt([void 0],e[0].concat(this)))):new(t.bind.apply(t,tt([void 0],e.concat(this))))},t}(Array);function yt(e){return N(e)?ze(e,(function(){})):e}function vt(){return function(e){return function(e){void 0===e&&(e={});var t=e.thunk,n=void 0===t||t,r=(e.immutableCheck,e.serializableCheck,e.actionCreatorCheck,new mt);n&&(!function(e){return"boolean"===typeof e}(n)?r.push(Je.withExtraArgument(n.extraArgument)):r.push(Je));0;return r}(e)}}function bt(e){var t,n={},r=[],o={addCase:function(e,t){var r="string"===typeof e?e:e.type;if(!r)throw new Error("`builder.addCase` cannot be called with an empty action type");if(r in n)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return n[r]=t,o},addMatcher:function(e,t){return r.push({matcher:e,reducer:t}),o},addDefaultCase:function(e){return t=e,o}};return e(o),[n,r,t]}var xt=function(e){void 0===e&&(e=21);for(var t="",n=e;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},wt=["name","message","stack","code"],kt=function(e,t){this.payload=e,this.meta=t},St=function(e,t){this.payload=e,this.meta=t},Et=function(e){if("object"===typeof e&&null!==e){for(var t={},n=0,r=wt;n<r.length;n++){var o=r[n];"string"===typeof e[o]&&(t[o]=e[o])}return t}return{message:String(e)}};!function(){function e(e,t,n){var r=ht(e+"/fulfilled",(function(e,t,n,r){return{payload:e,meta:ut(ct({},r||{}),{arg:n,requestId:t,requestStatus:"fulfilled"})}})),o=ht(e+"/pending",(function(e,t,n){return{payload:void 0,meta:ut(ct({},n||{}),{arg:t,requestId:e,requestStatus:"pending"})}})),i=ht(e+"/rejected",(function(e,t,r,o,i){return{payload:o,error:(n&&n.serializeError||Et)(e||"Rejected"),meta:ut(ct({},i||{}),{arg:r,requestId:t,rejectedWithValue:!!o,requestStatus:"rejected",aborted:"AbortError"===(null==e?void 0:e.name),condition:"ConditionError"===(null==e?void 0:e.name)})}})),a="undefined"!==typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){0},e}();return Object.assign((function(e){return function(s,l,c){var u,d=(null==n?void 0:n.idGenerator)?n.idGenerator(e):xt(),p=new a;function f(e){u=e,p.abort()}var h=function(){return dt(this,null,(function(){var a,h,m,g,y,v;return et(this,(function(b){switch(b.label){case 0:return b.trys.push([0,4,,5]),g=null==(a=null==n?void 0:n.condition)?void 0:a.call(n,e,{getState:l,extra:c}),null===(x=g)||"object"!==typeof x||"function"!==typeof x.then?[3,2]:[4,g];case 1:g=b.sent(),b.label=2;case 2:if(!1===g||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return y=new Promise((function(e,t){return p.signal.addEventListener("abort",(function(){return t({name:"AbortError",message:u||"Aborted"})}))})),s(o(d,e,null==(h=null==n?void 0:n.getPendingMeta)?void 0:h.call(n,{requestId:d,arg:e},{getState:l,extra:c}))),[4,Promise.race([y,Promise.resolve(t(e,{dispatch:s,getState:l,extra:c,requestId:d,signal:p.signal,abort:f,rejectWithValue:function(e,t){return new kt(e,t)},fulfillWithValue:function(e,t){return new St(e,t)}})).then((function(t){if(t instanceof kt)throw t;return t instanceof St?r(t.payload,d,e,t.meta):r(t,d,e)}))])];case 3:return m=b.sent(),[3,5];case 4:return v=b.sent(),m=v instanceof kt?i(null,d,e,v.payload,v.meta):i(v,d,e),[3,5];case 5:return n&&!n.dispatchConditionRejection&&i.match(m)&&m.meta.condition||s(m),[2,m]}var x}))}))}();return Object.assign(h,{abort:f,requestId:d,arg:e,unwrap:function(){return h.then(Ct)}})}}),{pending:o,rejected:i,fulfilled:r,typePrefix:e})}e.withTypes=function(){return e}}();function Ct(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}Object.assign;var jt="listenerMiddleware";ht(jt+"/add"),ht(jt+"/removeAll"),ht(jt+"/remove");"function"===typeof queueMicrotask&&queueMicrotask.bind("undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:globalThis);var Tt,Pt=function(e){return function(t){setTimeout(t,e)}};"undefined"!==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:Pt(10);ge();var Ot="persist:",_t="persist/FLUSH",Rt="persist/REHYDRATE",At="persist/PAUSE",Mt="persist/PERSIST",It="persist/PURGE",zt="persist/REGISTER";function Lt(e){return Lt="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lt(e)}function Dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Nt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $t(e,t,n,r){r.debug;var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Dt(n,!0).forEach((function(t){Nt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n);return e&&"object"===Lt(e)&&Object.keys(e).forEach((function(r){"_persist"!==r&&t[r]===n[r]&&(o[r]=e[r])})),o}function Ft(e){var t,n=e.blacklist||null,r=e.whitelist||null,o=e.transforms||[],i=e.throttle||0,a="".concat(void 0!==e.keyPrefix?e.keyPrefix:Ot).concat(e.key),s=e.storage;t=!1===e.serialize?function(e){return e}:"function"===typeof e.serialize?e.serialize:Ut;var l=e.writeFailHandler||null,c={},u={},d=[],p=null,f=null;function h(){if(0===d.length)return p&&clearInterval(p),void(p=null);var e=d.shift(),n=o.reduce((function(t,n){return n.in(t,e,c)}),c[e]);if(void 0!==n)try{u[e]=t(n)}catch(r){console.error("redux-persist/createPersistoid: error serializing state",r)}else delete u[e];0===d.length&&(Object.keys(u).forEach((function(e){void 0===c[e]&&delete u[e]})),f=s.setItem(a,t(u)).catch(g))}function m(e){return(!r||-1!==r.indexOf(e)||"_persist"===e)&&(!n||-1===n.indexOf(e))}function g(e){l&&l(e)}return{update:function(e){Object.keys(e).forEach((function(t){m(t)&&c[t]!==e[t]&&-1===d.indexOf(t)&&d.push(t)})),Object.keys(c).forEach((function(t){void 0===e[t]&&m(t)&&-1===d.indexOf(t)&&void 0!==c[t]&&d.push(t)})),null===p&&(p=setInterval(h,i)),c=e},flush:function(){for(;0!==d.length;)h();return f||Promise.resolve()}}}function Ut(e){return JSON.stringify(e)}function Bt(e){var t,n=e.transforms||[],r="".concat(void 0!==e.keyPrefix?e.keyPrefix:Ot).concat(e.key),o=e.storage;e.debug;return t=!1===e.deserialize?function(e){return e}:"function"===typeof e.deserialize?e.deserialize:Vt,o.getItem(r).then((function(e){if(e)try{var r={},o=t(e);return Object.keys(o).forEach((function(e){r[e]=n.reduceRight((function(t,n){return n.out(t,e,o)}),t(o[e]))})),r}catch(i){throw i}}))}function Vt(e){return JSON.parse(e)}function qt(e){0}function Ht(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Wt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ht(n,!0).forEach((function(t){Qt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ht(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Qt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yt(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Gt(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Kt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Kt(n,!0).forEach((function(t){Jt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Jt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Zt={registry:[],bootstrapped:!1},en=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case zt:return Xt({},e,{registry:[].concat(Gt(e.registry),[t.key])});case Rt:var n=e.registry.indexOf(t.key),r=Gt(e.registry);return r.splice(n,1),Xt({},e,{registry:r,bootstrapped:0===r.length});default:return e}};var tn=n(901);const nn=[{id:"history",name:"\u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0639\u0627\u0644\u0645\u064a",icon:"\ud83d\udcdc",questions:[{value:100,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1},{value:200,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1},{value:300,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1},{value:400,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1},{value:500,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1}]},{id:"history2",name:"\u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0639\u0627\u0644\u0645\u064a",icon:"\ud83d\udcdc",questions:[{value:100,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1},{value:200,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1},{value:300,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1},{value:400,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1},{value:500,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1}]},{id:"history3",name:"\u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0639\u0627\u0644\u0645\u064a",icon:"\ud83d\udcdc",questions:[{value:100,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1},{value:200,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1},{value:300,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1},{value:400,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1},{value:500,question:"\u0645\u0646 \u0647\u0648 \u0623\u0648\u0644 \u0631\u0626\u064a\u0633 \u0644\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629\u061f",answer:"\u062c\u0648\u0631\u062c \u0648\u0627\u0634\u0646\u0637\u0646",answered:!1}]}],rn=()=>[...nn],on={gamePhase:"setup",teams:[],categories:(()=>{try{const e=localStorage.getItem("trivia-game-categories");if(e)return JSON.parse(e)}catch(e){console.error("Error loading categories from localStorage:",e)}return nn})(),selectedCategories:[],currentQuestion:null,timer:{duration:30,remaining:30,isRunning:!1,bothTeamsTimedOut:!1},volume:.7,musicEnabled:!0,effectsEnabled:!0,activeTeamIndex:0,answerRevealed:!1,shockedTeam:null},an=function(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var n,r="function"==typeof e.initialState?e.initialState:yt(e.initialState),o=e.reducers||{},i=Object.keys(o),a={},s={},l={};function c(){var t="function"===typeof e.extraReducers?bt(e.extraReducers):[e.extraReducers],n=t[0],o=void 0===n?{}:n,i=t[1],a=void 0===i?[]:i,l=t[2],c=void 0===l?void 0:l,u=ct(ct({},o),s);return function(e,t,n,r){void 0===n&&(n=[]);var o,i="function"===typeof t?bt(t):[t,n,r],a=i[0],s=i[1],l=i[2];if(function(e){return"function"===typeof e}(e))o=function(){return yt(e())};else{var c=yt(e);o=function(){return c}}function u(e,t){void 0===e&&(e=o());var n=tt([a[t.type]],s.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===n.filter((function(e){return!!e})).length&&(n=[l]),n.reduce((function(e,n){if(n){var r;if(D(e))return void 0===(r=n(e,t))?e:r;if(N(e))return ze(e,(function(e){return n(e,t)}));if(void 0===(r=n(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return e}),e)}return u.getInitialState=o,u}(r,(function(e){for(var t in u)e.addCase(t,u[t]);for(var n=0,r=a;n<r.length;n++){var o=r[n];e.addMatcher(o.matcher,o.reducer)}c&&e.addDefaultCase(c)}))}return i.forEach((function(e){var n,r,i=o[e],c=function(e,t){return e+"/"+t}(t,e);"reducer"in i?(n=i.reducer,r=i.prepare):n=i,a[e]=n,s[c]=n,l[e]=r?ht(c,r):ht(c)})),{name:t,reducer:function(e,t){return n||(n=c()),n(e,t)},actions:l,caseReducers:a,getInitialState:function(){return n||(n=c()),n.getInitialState()}}}({name:"game",initialState:on,reducers:{startGame:(e,t)=>{e.teams=t.payload,e.gamePhase="playing"},selectQuestion:(e,t)=>{e.currentQuestion=t.payload,e.gamePhase="question",e.timer.remaining=30,e.timer.duration=30,e.teams.forEach((e=>{e.blockedFromAnswering=!1}))},awardPoints:(e,t)=>{const{teamIndex:n,points:r}=t.payload,o=e.teams[n],i=o.pointsMultiplier;o.score+=r*i,o.score<0&&(o.score=0),i>1&&(o.pointsMultiplier=1,o.abilities.double.active=!1)},activateAbility:(e,t)=>{const{teamIndex:n,abilityType:r}=t.payload,o=e.teams[n];o&&o.abilities&&o.abilities[r]&&(o.abilities[r].used=!0,"double"===r&&(o.pointsMultiplier=2,o.abilities[r].active=!0))},startCooldown:(e,t)=>{const{teamIndex:n,abilityType:r,duration:o,skipAnimation:i}=t.payload,a=e.teams[n];if(a&&a.abilities&&a.abilities[r]&&(a.abilities[r].cooldown=o,a.abilities[r].cooldownStart=Date.now()),"electric"===r&&!i){const e=new CustomEvent("electricShock",{detail:{teamIndex:n}});window.dispatchEvent(e)}},endCooldown:(e,t)=>{const{teamIndex:n,abilityType:r}=t.payload,o=e.teams[n];o&&o.abilities&&o.abilities[r]&&(o.abilities[r].cooldown=0,o.abilities[r].cooldownStart=0)},setGamePhase:(e,t)=>{e.gamePhase=t.payload},toggleMusic:e=>{e.musicEnabled=!e.musicEnabled},toggleEffects:e=>{e.effectsEnabled=!e.effectsEnabled},setVolume:(e,t)=>{e.volume=t.payload},startTimer:(e,t)=>{t.payload&&(e.timer.duration=t.payload,e.timer.remaining=t.payload),e.timer.isRunning=!0},pauseTimer:e=>{e.timer.isRunning=!1},resetTimer:(e,t)=>{t.payload&&(e.timer.duration=t.payload),e.timer.remaining=e.timer.duration,e.timer.isRunning=!1,e.timer.bothTeamsTimedOut=!1},tickTimer:e=>{e.timer.isRunning&&e.timer.remaining>0&&(e.timer.remaining-=1),e.timer.remaining<=0&&(e.timer.isRunning=!1)},selectCategory:(e,t)=>{!e.selectedCategories.includes(t.payload)&&e.selectedCategories.length<8&&e.selectedCategories.push(t.payload)},deselectCategory:(e,t)=>{e.selectedCategories=e.selectedCategories.filter((e=>e!==t.payload))},revealAnswer:e=>{e.currentQuestion&&(e.answerRevealed=!0)},returnToBoard:(e,t)=>{if(e.currentQuestion){const n=e.categories.findIndex((t=>{var n;return t.id===(null===(n=e.currentQuestion)||void 0===n?void 0:n.categoryId)}));-1!==n&&t.payload.markAsAnswered&&(e.categories[n].questions[e.currentQuestion.questionIndex].answered=!0)}e.currentQuestion=null,e.gamePhase="playing",e.answerRevealed=!1},setPointsMultiplier:(e,t)=>{const{teamIndex:n,multiplier:r}=t.payload;e.teams[n]&&(e.teams[n].pointsMultiplier=r)},setActiveTeam:(e,t)=>{console.log("Setting active team in Redux to:",t.payload),e.activeTeamIndex=t.payload,e.teams=[...e.teams]},setBothTeamsTimedOut:(e,t)=>{e.timer.bothTeamsTimedOut=t.payload},updateCategories:(e,t)=>{const n=JSON.parse(JSON.stringify(t.payload));if(e.categories=n,e.selectedCategories=e.selectedCategories.filter((e=>n.some((t=>t.id===e)))),e.currentQuestion){n.map((e=>e.id)).includes(e.currentQuestion.categoryId)&&(e.currentQuestion=null)}try{localStorage.setItem("trivia-game-categories",JSON.stringify(n))}catch(r){console.error("Failed to save categories to localStorage:",r)}},blockTeamFromAnswering:(e,t)=>{const{teamIndex:n}=t.payload;e.teams[n].blockedFromAnswering=!0},setActiveTeamIndex:(e,t)=>{e.activeTeamIndex=t.payload},setShockedTeam:(e,t)=>{e.shockedTeam=t.payload},applyElectricShock:(e,t)=>{const{teamIndex:n,points:r}=t.payload;e.teams[n]&&(e.teams[n].score+=r,e.teams[n].score<0&&(e.teams[n].score=0))}},extraReducers:e=>{e.addCase(Mn,(e=>{const t=e.volume,n=e.musicEnabled,r=e.effectsEnabled,o=JSON.parse(JSON.stringify(e.categories)).map((e=>{const t=[...e.questions].map((e=>({...e,answered:!1}))).sort((()=>Math.random()-.5));return{...e,questions:t}}));Object.assign(e,on),e.volume=t,e.musicEnabled=n,e.effectsEnabled=r,e.categories=o,e.gamePhase="setup",e.selectedCategories=[];try{localStorage.setItem("trivia-game-categories",JSON.stringify(o))}catch(i){console.error("Failed to save shuffled categories to localStorage:",i)}}))}}),{startGame:sn,selectQuestion:ln,awardPoints:cn,activateAbility:un,startCooldown:dn,endCooldown:pn,setGamePhase:fn,toggleMusic:hn,toggleEffects:mn,setVolume:gn,startTimer:yn,pauseTimer:vn,resetTimer:bn,tickTimer:xn,selectCategory:wn,deselectCategory:kn,revealAnswer:Sn,returnToBoard:En,setPointsMultiplier:Cn,setActiveTeam:jn,setBothTeamsTimedOut:Tn,updateCategories:Pn,blockTeamFromAnswering:On,setActiveTeamIndex:_n,setShockedTeam:Rn,applyElectricShock:An}=an.actions,Mn=ht("game/resetGame"),In=an.reducer,zn=function(e,t){var n=void 0!==e.version?e.version:-1,r=(e.debug,void 0===e.stateReconciler?$t:e.stateReconciler),o=e.getStoredState||Bt,i=void 0!==e.timeout?e.timeout:5e3,a=null,s=!1,l=!0,c=function(e){return e._persist.rehydrated&&a&&!l&&a.update(e),e};return function(u,d){var p=u||{},f=p._persist,h=Yt(p,["_persist"]);if(d.type===Mt){var m=!1,g=function(t,n){m||(d.rehydrate(e.key,t,n),m=!0)};if(i&&setTimeout((function(){!m&&g(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))}),i),l=!1,a||(a=Ft(e)),f)return Wt({},t(h,d),{_persist:f});if("function"!==typeof d.rehydrate||"function"!==typeof d.register)throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),o(e).then((function(t){var r=e.migrate||function(e,t){return Promise.resolve(e)};r(t,n).then((function(e){g(e)}),(function(e){g(void 0,e)}))}),(function(e){g(void 0,e)})),Wt({},t(h,d),{_persist:{version:n,rehydrated:!1}})}if(d.type===It)return s=!0,d.result(function(e){var t=e.storage,n="".concat(void 0!==e.keyPrefix?e.keyPrefix:Ot).concat(e.key);return t.removeItem(n,qt)}(e)),Wt({},t(h,d),{_persist:f});if(d.type===_t)return d.result(a&&a.flush()),Wt({},t(h,d),{_persist:f});if(d.type===At)l=!0;else if(d.type===Rt){if(s)return Wt({},h,{_persist:Wt({},f,{rehydrated:!0})});if(d.key===e.key){var y=t(h,d),v=d.payload,b=Wt({},!1!==r&&void 0!==v?r(v,u,y,e):y,{_persist:Wt({},f,{rehydrated:!0})});return c(b)}}if(!f)return t(u,d);var x=t(h,d);return x===h?u:c(Wt({},x,{_persist:f}))}}({key:"root",storage:tn.A,whitelist:["gamePhase","teams","categories","selectedCategories","currentQuestion","timer","volume","musicEnabled","activeTeamIndex"],stateReconciler:(e,t,n,r)=>JSON.parse(JSON.stringify({...n,...e,categories:e.categories||n.categories}))},In),Ln=function(e){var t,n=vt(),r=e||{},o=r.reducer,i=void 0===o?void 0:o,a=r.middleware,s=void 0===a?n():a,l=r.devTools,c=void 0===l||l,u=r.preloadedState,d=void 0===u?void 0:u,p=r.enhancers,f=void 0===p?void 0:p;if("function"===typeof i)t=i;else{if(!ft(i))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=Qe(i)}var h=s;"function"===typeof h&&(h=h(n));var m=Ge.apply(void 0,h),g=Ye;c&&(g=pt(ct({trace:!1},"object"===typeof c&&c)));var y=new gt(m),v=y;return Array.isArray(f)?v=tt([m],f):"function"===typeof f&&(v=f(y)),We(t,d,g.apply(void 0,v))}({reducer:zn,middleware:e=>e({serializableCheck:{ignoredActions:[_t,Rt,At,Mt,It,zt]}})}),Dn=function(e,t,n){var r=n||!1,o=We(en,Zt,t&&t.enhancer?t.enhancer:void 0),i=function(e){o.dispatch({type:zt,key:e})},a=function(t,n,i){var a={type:Rt,payload:n,err:i,key:t};e.dispatch(a),o.dispatch(a),r&&s.getState().bootstrapped&&(r(),r=!1)},s=Xt({},o,{purge:function(){var t=[];return e.dispatch({type:It,result:function(e){t.push(e)}}),Promise.all(t)},flush:function(){var t=[];return e.dispatch({type:_t,result:function(e){t.push(e)}}),Promise.all(t)},pause:function(){e.dispatch({type:At})},persist:function(){e.dispatch({type:Mt,register:i,rehydrate:a})}});return t&&t.manualPersist||s.persist(),s}(Ln);var Nn=function(){return Nn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Nn.apply(this,arguments)};Object.create;function $n(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Fn=n(324),Un=n.n(Fn),Bn="-ms-",Vn="-moz-",qn="-webkit-",Hn="comm",Wn="rule",Qn="decl",Yn="@keyframes",Gn=Math.abs,Kn=String.fromCharCode,Xn=Object.assign;function Jn(e){return e.trim()}function Zn(e,t){return(e=t.exec(e))?e[0]:e}function er(e,t,n){return e.replace(t,n)}function tr(e,t,n){return e.indexOf(t,n)}function nr(e,t){return 0|e.charCodeAt(t)}function rr(e,t,n){return e.slice(t,n)}function or(e){return e.length}function ir(e){return e.length}function ar(e,t){return t.push(e),e}function sr(e,t){return e.filter((function(e){return!Zn(e,t)}))}var lr=1,cr=1,ur=0,dr=0,pr=0,fr="";function hr(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:lr,column:cr,length:a,return:"",siblings:s}}function mr(e,t){return Xn(hr("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function gr(e){for(;e.root;)e=mr(e.root,{children:[e]});ar(e,e.siblings)}function yr(){return pr=dr>0?nr(fr,--dr):0,cr--,10===pr&&(cr=1,lr--),pr}function vr(){return pr=dr<ur?nr(fr,dr++):0,cr++,10===pr&&(cr=1,lr++),pr}function br(){return nr(fr,dr)}function xr(){return dr}function wr(e,t){return rr(fr,e,t)}function kr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sr(e){return lr=cr=1,ur=or(fr=e),dr=0,[]}function Er(e){return fr="",e}function Cr(e){return Jn(wr(dr-1,Pr(91===e?e+2:40===e?e+1:e)))}function jr(e){for(;(pr=br())&&pr<33;)vr();return kr(e)>2||kr(pr)>3?"":" "}function Tr(e,t){for(;--t&&vr()&&!(pr<48||pr>102||pr>57&&pr<65||pr>70&&pr<97););return wr(e,xr()+(t<6&&32==br()&&32==vr()))}function Pr(e){for(;vr();)switch(pr){case e:return dr;case 34:case 39:34!==e&&39!==e&&Pr(pr);break;case 40:41===e&&Pr(e);break;case 92:vr()}return dr}function Or(e,t){for(;vr()&&e+pr!==57&&(e+pr!==84||47!==br()););return"/*"+wr(t,dr-1)+"*"+Kn(47===e?e:vr())}function _r(e){for(;!kr(br());)vr();return wr(e,dr)}function Rr(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ar(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Qn:return e.return=e.return||e.value;case Hn:return"";case Yn:return e.return=e.value+"{"+Rr(e.children,r)+"}";case Wn:if(!or(e.value=e.props.join(",")))return""}return or(n=Rr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Mr(e,t,n){switch(function(e,t){return 45^nr(e,0)?(((t<<2^nr(e,0))<<2^nr(e,1))<<2^nr(e,2))<<2^nr(e,3):0}(e,t)){case 5103:return qn+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return qn+e+e;case 4789:return Vn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return qn+e+Vn+e+Bn+e+e;case 5936:switch(nr(e,t+11)){case 114:return qn+e+Bn+er(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return qn+e+Bn+er(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return qn+e+Bn+er(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return qn+e+Bn+e+e;case 6165:return qn+e+Bn+"flex-"+e+e;case 5187:return qn+e+er(e,/(\w+).+(:[^]+)/,qn+"box-$1$2"+Bn+"flex-$1$2")+e;case 5443:return qn+e+Bn+"flex-item-"+er(e,/flex-|-self/g,"")+(Zn(e,/flex-|baseline/)?"":Bn+"grid-row-"+er(e,/flex-|-self/g,""))+e;case 4675:return qn+e+Bn+"flex-line-pack"+er(e,/align-content|flex-|-self/g,"")+e;case 5548:return qn+e+Bn+er(e,"shrink","negative")+e;case 5292:return qn+e+Bn+er(e,"basis","preferred-size")+e;case 6060:return qn+"box-"+er(e,"-grow","")+qn+e+Bn+er(e,"grow","positive")+e;case 4554:return qn+er(e,/([^-])(transform)/g,"$1"+qn+"$2")+e;case 6187:return er(er(er(e,/(zoom-|grab)/,qn+"$1"),/(image-set)/,qn+"$1"),e,"")+e;case 5495:case 3959:return er(e,/(image-set\([^]*)/,qn+"$1$`$1");case 4968:return er(er(e,/(.+:)(flex-)?(.*)/,qn+"box-pack:$3"+Bn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+qn+e+e;case 4200:if(!Zn(e,/flex-|baseline/))return Bn+"grid-column-align"+rr(e,t)+e;break;case 2592:case 3360:return Bn+er(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Zn(e.props,/grid-\w+-end/)}))?~tr(e+(n=n[t].value),"span",0)?e:Bn+er(e,"-start","")+e+Bn+"grid-row-span:"+(~tr(n,"span",0)?Zn(n,/\d+/):+Zn(n,/\d+/)-+Zn(e,/\d+/))+";":Bn+er(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Zn(e.props,/grid-\w+-start/)}))?e:Bn+er(er(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return er(e,/(.+)-inline(.+)/,qn+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(or(e)-1-t>6)switch(nr(e,t+1)){case 109:if(45!==nr(e,t+4))break;case 102:return er(e,/(.+:)(.+)-([^]+)/,"$1"+qn+"$2-$3$1"+Vn+(108==nr(e,t+3)?"$3":"$2-$3"))+e;case 115:return~tr(e,"stretch",0)?Mr(er(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return er(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,s){return Bn+n+":"+r+s+(o?Bn+n+"-span:"+(i?a:+a-+r)+s:"")+e}));case 4949:if(121===nr(e,t+6))return er(e,":",":"+qn)+e;break;case 6444:switch(nr(e,45===nr(e,14)?18:11)){case 120:return er(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+qn+(45===nr(e,14)?"inline-":"")+"box$3$1"+qn+"$2$3$1"+Bn+"$2box$3")+e;case 100:return er(e,":",":"+Bn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return er(e,"scroll-","scroll-snap-")+e}return e}function Ir(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Qn:return void(e.return=Mr(e.value,e.length,n));case Yn:return Rr([mr(e,{value:er(e.value,"@","@"+qn)})],r);case Wn:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Zn(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gr(mr(e,{props:[er(t,/:(read-\w+)/,":-moz-$1")]})),gr(mr(e,{props:[t]})),Xn(e,{props:sr(n,r)});break;case"::placeholder":gr(mr(e,{props:[er(t,/:(plac\w+)/,":"+qn+"input-$1")]})),gr(mr(e,{props:[er(t,/:(plac\w+)/,":-moz-$1")]})),gr(mr(e,{props:[er(t,/:(plac\w+)/,Bn+"input-$1")]})),gr(mr(e,{props:[t]})),Xn(e,{props:sr(n,r)})}return""}))}}function zr(e){return Er(Lr("",null,null,null,[""],e=Sr(e),0,[0],e))}function Lr(e,t,n,r,o,i,a,s,l){for(var c=0,u=0,d=a,p=0,f=0,h=0,m=1,g=1,y=1,v=0,b="",x=o,w=i,k=r,S=b;g;)switch(h=v,v=vr()){case 40:if(108!=h&&58==nr(S,d-1)){-1!=tr(S+=er(Cr(v),"&","&\f"),"&\f",Gn(c?s[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:S+=Cr(v);break;case 9:case 10:case 13:case 32:S+=jr(h);break;case 92:S+=Tr(xr()-1,7);continue;case 47:switch(br()){case 42:case 47:ar(Nr(Or(vr(),xr()),t,n,l),l);break;default:S+="/"}break;case 123*m:s[c++]=or(S)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==y&&(S=er(S,/\f/g,"")),f>0&&or(S)-d&&ar(f>32?$r(S+";",r,n,d-1,l):$r(er(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(ar(k=Dr(S,t,n,c,u,o,s,b,x=[],w=[],d,i),i),123===v)if(0===u)Lr(S,t,k,k,x,i,d,s,w);else switch(99===p&&110===nr(S,3)?100:p){case 100:case 108:case 109:case 115:Lr(e,k,k,r&&ar(Dr(e,k,k,0,0,o,s,b,o,x=[],d,w),w),o,w,d,s,r?x:w);break;default:Lr(S,k,k,k,[""],w,0,s,w)}}c=u=f=0,m=y=1,b=S="",d=a;break;case 58:d=1+or(S),f=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==yr())continue;switch(S+=Kn(v),v*m){case 38:y=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(or(S)-1)*y,y=1;break;case 64:45===br()&&(S+=Cr(vr())),p=br(),u=d=or(b=S+=_r(xr())),v++;break;case 45:45===h&&2==or(S)&&(m=0)}}return i}function Dr(e,t,n,r,o,i,a,s,l,c,u,d){for(var p=o-1,f=0===o?i:[""],h=ir(f),m=0,g=0,y=0;m<r;++m)for(var v=0,b=rr(e,p+1,p=Gn(g=a[m])),x=e;v<h;++v)(x=Jn(g>0?f[v]+" "+b:er(b,/&\f/g,f[v])))&&(l[y++]=x);return hr(e,t,n,0===o?Wn:s,l,c,u,d)}function Nr(e,t,n,r){return hr(e,t,n,Hn,Kn(pr),rr(e,2,-2),0,r)}function $r(e,t,n,r,o){return hr(e,t,n,Qn,rr(e,0,r),rr(e,r+1,-1),r,o)}var Fr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ur="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Br="active",Vr="data-styled-version",qr="6.1.15",Hr="/*!sc*/\n",Wr="undefined"!=typeof window&&"HTMLElement"in window,Qr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Yr={},Gr=(new Set,Object.freeze([])),Kr=Object.freeze({});function Xr(e,t,n){return void 0===n&&(n=Kr),e.theme!==n.theme&&e.theme||t||n.theme}var Jr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Zr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eo=/(^-|-$)/g;function to(e){return e.replace(Zr,"-").replace(eo,"")}var no=/(a)(d)/gi,ro=function(e){return String.fromCharCode(e+(e>25?39:97))};function oo(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ro(t%52)+n;return(ro(t%52)+n).replace(no,"$1-$2")}var io,ao=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},so=function(e){return ao(5381,e)};function lo(e){return oo(so(e)>>>0)}function co(e){return e.displayName||e.name||"Component"}function uo(e){return"string"==typeof e&&!0}var po="function"==typeof Symbol&&Symbol.for,fo=po?Symbol.for("react.memo"):60115,ho=po?Symbol.for("react.forward_ref"):60112,mo={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},go={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vo=((io={})[ho]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},io[fo]=yo,io);function bo(e){return("type"in(t=e)&&t.type.$$typeof)===fo?yo:"$$typeof"in e?vo[e.$$typeof]:mo;var t}var xo=Object.defineProperty,wo=Object.getOwnPropertyNames,ko=Object.getOwnPropertySymbols,So=Object.getOwnPropertyDescriptor,Eo=Object.getPrototypeOf,Co=Object.prototype;function jo(e,t,n){if("string"!=typeof t){if(Co){var r=Eo(t);r&&r!==Co&&jo(e,r,n)}var o=wo(t);ko&&(o=o.concat(ko(t)));for(var i=bo(e),a=bo(t),s=0;s<o.length;++s){var l=o[s];if(!(l in go||n&&n[l]||a&&l in a||i&&l in i)){var c=So(t,l);try{xo(e,l,c)}catch(e){}}}}return e}function To(e){return"function"==typeof e}function Po(e){return"object"==typeof e&&"styledComponentId"in e}function Oo(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function _o(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ro(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ao(e,t,n){if(void 0===n&&(n=!1),!n&&!Ro(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ao(e[r],t[r]);else if(Ro(t))for(var r in t)e[r]=Ao(e[r],t[r]);return e}function Mo(e,t){Object.defineProperty(e,"toString",{value:t})}function Io(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zo=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Io(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(Hr);return t},e}(),Lo=new Map,Do=new Map,No=1,$o=function(e){if(Lo.has(e))return Lo.get(e);for(;Do.has(No);)No++;var t=No++;return Lo.set(e,t),Do.set(t,e),t},Fo=function(e,t){No=t+1,Lo.set(e,t),Do.set(t,e)},Uo="style[".concat(Ur,"][").concat(Vr,'="').concat(qr,'"]'),Bo=new RegExp("^".concat(Ur,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Vo=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},qo=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Hr),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(Bo);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(Fo(u,c),Vo(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},Ho=function(e){for(var t=document.querySelectorAll(Uo),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Ur)!==Br&&(qo(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Wo(){return n.nc}var Qo=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Ur,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(Ur,Br),r.setAttribute(Vr,qr);var a=Wo();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},Yo=function(){function e(e){this.element=Qo(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Io(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Go=function(){function e(e){this.element=Qo(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Ko=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Xo=Wr,Jo={isServer:!Wr,useCSSOMInjection:!Qr},Zo=function(){function e(e,t,n){void 0===e&&(e=Kr),void 0===t&&(t={});var r=this;this.options=Nn(Nn({},Jo),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Wr&&Xo&&(Xo=!1,Ho(this)),Mo(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Do.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var s="".concat(Ur,".g").concat(n,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(Hr)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return $o(e)},e.prototype.rehydrate=function(){!this.server&&Wr&&Ho(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Nn(Nn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Ko(n):t?new Yo(n):new Go(n)}(this.options),new zo(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if($o(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules($o(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup($o(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ei=/&/g,ti=/^\s*\/\/.*$/gm;function ni(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=ni(e.children,t)),e}))}function ri(e){var t,n,r,o=void 0===e?Kr:e,i=o.options,a=void 0===i?Kr:i,s=o.plugins,l=void 0===s?Gr:s,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===Wn&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(ei,n).replace(r,c))})),a.prefix&&u.push(Ir),u.push(Ar);var d=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(ti,""),c=zr(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(c=ni(c,a.namespace));var d,p=[];return Rr(c,function(e){var t=ir(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||Io(15),ao(e,t.name)}),5381).toString():"",d}var oi=new Zo,ii=ri(),ai=t.createContext({shouldForwardProp:void 0,styleSheet:oi,stylis:ii}),si=(ai.Consumer,t.createContext(void 0));function li(){return(0,t.useContext)(ai)}function ci(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],o=n[1],i=li().styleSheet,a=(0,t.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),s=(0,t.useMemo)((function(){return ri({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){Un()(r,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}}),[e.shouldForwardProp,a,s]);return t.createElement(ai.Provider,{value:l},t.createElement(si.Provider,{value:s},e.children))}var ui=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ii);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Mo(this,(function(){throw Io(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=ii),this.name+e.hash},e}(),di=function(e){return e>="A"&&e<="Z"};function pi(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;di(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var fi=function(e){return null==e||!1===e||""===e},hi=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!fi(i)&&(Array.isArray(i)&&i.isCss||To(i)?r.push("".concat(pi(o),":"),i,";"):Ro(i)?r.push.apply(r,$n($n(["".concat(o," {")],hi(i),!1),["}"],!1)):r.push("".concat(pi(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Fr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function mi(e,t,n,r){return fi(e)?[]:Po(e)?[".".concat(e.styledComponentId)]:To(e)?!To(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:mi(e(t),t,n,r):e instanceof ui?n?(e.inject(n,r),[e.getName(r)]):[e]:Ro(e)?hi(e):Array.isArray(e)?Array.prototype.concat.apply(Gr,e.map((function(e){return mi(e,t,n,r)}))):[e.toString()];var o}function gi(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(To(n)&&!Po(n))return!1}return!0}var yi=so(qr),vi=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&gi(e),this.componentId=t,this.baseHash=ao(yi,t),this.baseStyle=n,Zo.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Oo(r,this.staticRulesId);else{var o=_o(mi(this.rules,e,t,n)),i=oo(ao(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=Oo(r,i),this.staticRulesId=i}else{for(var s=ao(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=_o(mi(u,e,t,n));s=ao(s,d+c),l+=d}}if(l){var p=oo(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=Oo(r,p)}}return r},e}(),bi=t.createContext(void 0);bi.Consumer;var xi={};new Set;function wi(e,n,r){var o=Po(e),i=e,a=!uo(e),s=n.attrs,l=void 0===s?Gr:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":to(e);xi[n]=(xi[n]||0)+1;var r="".concat(n,"-").concat(lo(qr+n+xi[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return uo(e)?"styled.".concat(e):"Styled(".concat(co(e),")")}(e):d,f=n.displayName&&n.componentId?"".concat(to(n.displayName),"-").concat(n.componentId):n.componentId||u,h=o&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;m=function(e,t){return g(e,t)&&y(e,t)}}else m=g}var v=new vi(r,f,o?i.componentStyle:void 0);function b(e,n){return function(e,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,c=e.target,u=t.useContext(bi),d=li(),p=e.shouldForwardProp||d.shouldForwardProp,f=Xr(n,u,a)||Kr,h=function(e,t,n){for(var r,o=Nn(Nn({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=To(r=e[i])?r(o):r;for(var s in a)o[s]="className"===s?Oo(o[s],a[s]):"style"===s?Nn(Nn({},o[s]),a[s]):a[s]}return t.className&&(o.className=Oo(o.className,t.className)),o}(o,n,f),m=h.as||c,g={};for(var y in h)void 0===h[y]||"$"===y[0]||"as"===y||"theme"===y&&h.theme===f||("forwardedAs"===y?g.as=h.forwardedAs:p&&!p(y,m)||(g[y]=h[y]));var v=function(e,t){var n=li();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),b=Oo(s,l);return v&&(b+=" "+v),h.className&&(b+=" "+h.className),g[uo(m)&&!Jr.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,t.createElement)(m,g)}(x,e,n)}b.displayName=p;var x=t.forwardRef(b);return x.attrs=h,x.componentStyle=v,x.displayName=p,x.shouldForwardProp=m,x.foldedComponentIds=o?Oo(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=f,x.target=o?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Ao(e,o[r],!0);return e}({},i.defaultProps,e):e}}),Mo(x,(function(){return".".concat(x.styledComponentId)})),a&&jo(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function ki(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Si=function(e){return Object.assign(e,{isCss:!0})};function Ei(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(To(e)||Ro(e))return Si(mi(ki(Gr,$n([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?mi(r):Si(mi(ki(r,t)))}function Ci(e,t,n){if(void 0===n&&(n=Kr),!t)throw Io(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Ei.apply(void 0,$n([r],o,!1)))};return r.attrs=function(r){return Ci(e,t,Nn(Nn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Ci(e,t,Nn(Nn({},n),r))},r}var ji=function(e){return Ci(wi,e)},Ti=ji;Jr.forEach((function(e){Ti[e]=ji(e)}));var Pi=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=gi(e),Zo.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(_o(mi(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Zo.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Oi(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=Ei.apply(void 0,$n([e],n,!1)),i="sc-global-".concat(lo(JSON.stringify(o))),a=new Pi(o,i),s=function(e){var n=li(),r=t.useContext(bi),o=t.useRef(n.styleSheet.allocateGSInstance(i)).current;return n.styleSheet.server&&l(o,e,n.styleSheet,r,n.stylis),t.useLayoutEffect((function(){if(!n.styleSheet.server)return l(o,e,n.styleSheet,r,n.stylis),function(){return a.removeStyles(o,n.styleSheet)}}),[o,e,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,o){if(a.isStatic)a.renderStyles(e,Yr,n,o);else{var i=Nn(Nn({},t),{theme:Xr(t,r,s.defaultProps)});a.renderStyles(e,i,n,o)}}return t.memo(s)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Wo(),r=_o([n&&'nonce="'.concat(n,'"'),"".concat(Ur,'="true"'),"".concat(Vr,'="').concat(qr,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Io(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Io(2);var r=e.instance.toString();if(!r)return[];var o=((n={})[Ur]="",n[Vr]=qr,n.dangerouslySetInnerHTML={__html:r},n),i=Wo();return i&&(o.nonce=i),[t.createElement("style",Nn({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Zo({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Io(2);return t.createElement(ci,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Io(3)}})(),"__sc-".concat(Ur,"__");const _i=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ri=(0,t.createContext)({}),Ai=(0,t.createContext)(null),Mi="undefined"!==typeof document,Ii=Mi?t.useLayoutEffect:t.useEffect,zi=(0,t.createContext)({strict:!1}),Li=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Di="data-"+Li("framerAppearId");function Ni(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function $i(e){return"string"===typeof e||Array.isArray(e)}function Fi(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const Ui=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Bi=["initial",...Ui];function Vi(e){return Fi(e.animate)||Bi.some((t=>$i(e[t])))}function qi(e){return Boolean(Vi(e)||e.variants)}function Hi(e){const{initial:n,animate:r}=function(e,t){if(Vi(e)){const{initial:t,animate:n}=e;return{initial:!1===t||$i(t)?t:void 0,animate:$i(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(Ri));return(0,t.useMemo)((()=>({initial:n,animate:r})),[Wi(n),Wi(r)])}function Wi(e){return Array.isArray(e)?e.join(" "):e}const Qi={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Yi={};for(const n in Qi)Yi[n]={isEnabled:e=>Qi[n].some((t=>!!e[t]))};const Gi=(0,t.createContext)({}),Ki=(0,t.createContext)({}),Xi=Symbol.for("motionComponentSymbol");function Ji(e){let{preloadedFeatures:n,createVisualElement:r,useRender:o,useVisualState:i,Component:a}=e;n&&function(e){for(const t in e)Yi[t]={...Yi[t],...e[t]}}(n);const s=(0,t.forwardRef)((function(e,s){let l;const c={...(0,t.useContext)(_i),...e,layoutId:Zi(e)},{isStatic:u}=c,d=Hi(e),p=i(e,u);if(!u&&Mi){d.visualElement=function(e,n,r,o){const{visualElement:i}=(0,t.useContext)(Ri),a=(0,t.useContext)(zi),s=(0,t.useContext)(Ai),l=(0,t.useContext)(_i).reducedMotion,c=(0,t.useRef)();o=o||a.renderer,!c.current&&o&&(c.current=o(e,{visualState:n,parent:i,props:r,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const u=c.current;(0,t.useInsertionEffect)((()=>{u&&u.update(r,s)}));const d=(0,t.useRef)(Boolean(r[Di]&&!window.HandoffComplete));return Ii((()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())})),(0,t.useEffect)((()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))})),u}(a,p,c,r);const e=(0,t.useContext)(Ki),o=(0,t.useContext)(zi).strict;d.visualElement&&(l=d.visualElement.loadFeatures(c,o,n,e))}return t.createElement(Ri.Provider,{value:d},l&&d.visualElement?t.createElement(l,{visualElement:d.visualElement,...c}):null,o(a,e,function(e,n,r){return(0,t.useCallback)((t=>{t&&e.mount&&e.mount(t),n&&(t?n.mount(t):n.unmount()),r&&("function"===typeof r?r(t):Ni(r)&&(r.current=t))}),[n])}(p,d.visualElement,s),p,u,d.visualElement))}));return s[Xi]=a,s}function Zi(e){let{layoutId:n}=e;const r=(0,t.useContext)(Gi).id;return r&&void 0!==n?r+"-"+n:n}function ea(e){function t(t){return Ji(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const ta=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function na(e){return"string"===typeof e&&!e.includes("-")&&!!(ta.indexOf(e)>-1||/[A-Z]/.test(e))}const ra={};const oa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ia=new Set(oa);function aa(e,t){let{layout:n,layoutId:r}=t;return ia.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!ra[e]||"opacity"===e)}const sa=e=>Boolean(e&&e.getVelocity),la={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ca=oa.length;const ua=e=>t=>"string"===typeof t&&t.startsWith(e),da=ua("--"),pa=ua("var(--"),fa=(e,t)=>t&&"number"===typeof e?t.transform(e):e,ha=(e,t,n)=>Math.min(Math.max(n,e),t),ma={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},ga={...ma,transform:e=>ha(0,1,e)},ya={...ma,default:1},va=e=>Math.round(1e5*e)/1e5,ba=/(-)?([\d]*\.?[\d])+/g,xa=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,wa=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ka(e){return"string"===typeof e}const Sa=e=>({test:t=>ka(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Ea=Sa("deg"),Ca=Sa("%"),ja=Sa("px"),Ta=Sa("vh"),Pa=Sa("vw"),Oa={...Ca,parse:e=>Ca.parse(e)/100,transform:e=>Ca.transform(100*e)},_a={...ma,transform:Math.round},Ra={borderWidth:ja,borderTopWidth:ja,borderRightWidth:ja,borderBottomWidth:ja,borderLeftWidth:ja,borderRadius:ja,radius:ja,borderTopLeftRadius:ja,borderTopRightRadius:ja,borderBottomRightRadius:ja,borderBottomLeftRadius:ja,width:ja,maxWidth:ja,height:ja,maxHeight:ja,size:ja,top:ja,right:ja,bottom:ja,left:ja,padding:ja,paddingTop:ja,paddingRight:ja,paddingBottom:ja,paddingLeft:ja,margin:ja,marginTop:ja,marginRight:ja,marginBottom:ja,marginLeft:ja,rotate:Ea,rotateX:Ea,rotateY:Ea,rotateZ:Ea,scale:ya,scaleX:ya,scaleY:ya,scaleZ:ya,skew:Ea,skewX:Ea,skewY:Ea,distance:ja,translateX:ja,translateY:ja,translateZ:ja,x:ja,y:ja,z:ja,perspective:ja,transformPerspective:ja,opacity:ga,originX:Oa,originY:Oa,originZ:ja,zIndex:_a,fillOpacity:ga,strokeOpacity:ga,numOctaves:_a};function Aa(e,t,n,r){const{style:o,vars:i,transform:a,transformOrigin:s}=e;let l=!1,c=!1,u=!0;for(const d in t){const e=t[d];if(da(d)){i[d]=e;continue}const n=Ra[d],r=fa(e,n);if(ia.has(d)){if(l=!0,a[d]=r,!u)continue;e!==(n.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,s[d]=r):o[d]=r}if(t.transform||(l||r?o.transform=function(e,t,n,r){let{enableHardwareAcceleration:o=!0,allowTransformNone:i=!0}=t,a="";for(let s=0;s<ca;s++){const t=oa[s];void 0!==e[t]&&(a+=`${la[t]||t}(${e[t]}) `)}return o&&!e.z&&(a+="translateZ(0)"),a=a.trim(),r?a=r(e,n?"":a):i&&n&&(a="none"),a}(e.transform,n,u,r):o.transform&&(o.transform="none")),c){const{originX:e="50%",originY:t="50%",originZ:n=0}=s;o.transformOrigin=`${e} ${t} ${n}`}}const Ma=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ia(e,t,n){for(const r in t)sa(t[r])||aa(r,n)||(e[r]=t[r])}function za(e,n,r){const o={};return Ia(o,e.style||{},e),Object.assign(o,function(e,n,r){let{transformTemplate:o}=e;return(0,t.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return Aa(e,n,{enableHardwareAcceleration:!r},o),Object.assign({},e.vars,e.style)}),[n])}(e,n,r)),e.transformValues?e.transformValues(o):o}function La(e,t,n){const r={},o=za(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const Da=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Na(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Da.has(e)}let $a=e=>!Na(e);try{(Fa=require("@emotion/is-prop-valid").default)&&($a=e=>e.startsWith("on")?!Na(e):Fa(e))}catch(OC){}var Fa;function Ua(e,t,n){return"string"===typeof e?e:ja.transform(t+n*e)}const Ba={offset:"stroke-dashoffset",array:"stroke-dasharray"},Va={offset:"strokeDashoffset",array:"strokeDasharray"};function qa(e,t,n,r,o){let{attrX:i,attrY:a,attrScale:s,originX:l,originY:c,pathLength:u,pathSpacing:d=1,pathOffset:p=0,...f}=t;if(Aa(e,f,n,o),r)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:h,style:m,dimensions:g}=e;h.transform&&(g&&(m.transform=h.transform),delete h.transform),g&&(void 0!==l||void 0!==c||m.transform)&&(m.transformOrigin=function(e,t,n){return`${Ua(t,e.x,e.width)} ${Ua(n,e.y,e.height)}`}(g,void 0!==l?l:.5,void 0!==c?c:.5)),void 0!==i&&(h.x=i),void 0!==a&&(h.y=a),void 0!==s&&(h.scale=s),void 0!==u&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const i=o?Ba:Va;e[i.offset]=ja.transform(-r);const a=ja.transform(t),s=ja.transform(n);e[i.array]=`${a} ${s}`}(h,u,d,p,!1)}const Ha=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Wa=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Qa(e,n,r,o){const i=(0,t.useMemo)((()=>{const t={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return qa(t,n,{enableHardwareAcceleration:!1},Wa(o),e.transformTemplate),{...t.attrs,style:{...t.style}}}),[n]);if(e.style){const t={};Ia(t,e.style,e),i.style={...t,...i.style}}return i}function Ya(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,o,i,a)=>{let{latestValues:s}=i;const l=(na(n)?Qa:La)(r,s,a,n),c=function(e,t,n){const r={};for(const o in e)"values"===o&&"object"===typeof e.values||($a(o)||!0===n&&Na(o)||!t&&!Na(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}(r,"string"===typeof n,e),u={...c,...l,ref:o},{children:d}=r,p=(0,t.useMemo)((()=>sa(d)?d.get():d),[d]);return(0,t.createElement)(n,{...u,children:p})}}function Ga(e,t,n,r){let{style:o,vars:i}=t;Object.assign(e.style,o,r&&r.getProjectionStyles(n));for(const a in i)e.style.setProperty(a,i[a])}const Ka=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Xa(e,t,n,r){Ga(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(Ka.has(o)?o:Li(o),t.attrs[o])}function Ja(e,t){const{style:n}=e,r={};for(const o in n)(sa(n[o])||t.style&&sa(t.style[o])||aa(o,e))&&(r[o]=n[o]);return r}function Za(e,t){const n=Ja(e,t);for(const r in e)if(sa(e[r])||sa(t[r])){n[-1!==oa.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return n}function es(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,o)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,o)),t}function ts(e){const n=(0,t.useRef)(null);return null===n.current&&(n.current=e()),n.current}const ns=e=>Array.isArray(e),rs=e=>ns(e)?e[e.length-1]||0:e;function os(e){const t=sa(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const is=e=>(n,r)=>{const o=(0,t.useContext)(Ri),i=(0,t.useContext)(Ai),a=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:o,createRenderState:i,onMount:a}=e;const s={latestValues:as(t,n,r,o),renderState:i()};return a&&(s.mount=e=>a(t,e,s)),s}(e,n,o,i);return r?a():ts(a)};function as(e,t,n,r){const o={},i=r(e,{});for(const p in i)o[p]=os(i[p]);let{initial:a,animate:s}=e;const l=Vi(e),c=qi(e);t&&c&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===a;const d=u?s:a;if(d&&"boolean"!==typeof d&&!Fi(d)){(Array.isArray(d)?d:[d]).forEach((t=>{const n=es(e,t);if(!n)return;const{transitionEnd:r,transition:i,...a}=n;for(const e in a){let t=a[e];if(Array.isArray(t)){t=t[u?t.length-1:0]}null!==t&&(o[e]=t)}for(const e in r)o[e]=r[e]}))}return o}const ss=e=>e;class ls{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const cs=["prepare","read","update","preRender","render","postRender"];const{schedule:us,cancel:ds,state:ps,steps:fs}=function(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=cs.reduce(((e,t)=>(e[t]=function(e){let t=new ls,n=new ls,r=0,o=!1,i=!1;const a=new WeakSet,s={schedule:function(e){const i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&o,s=i?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),s.add(e)&&i&&o&&(r=t.order.length),e},cancel:e=>{n.remove(e),a.delete(e)},process:l=>{if(o)i=!0;else{if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let n=0;n<r;n++){const r=t.order[n];r(l),a.has(r)&&(s.schedule(r),e())}o=!1,i&&(i=!1,s.process(l))}}};return s}((()=>n=!0)),e)),{}),a=e=>i[e].process(o),s=()=>{const i=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(i-o.timestamp,40),1),o.timestamp=i,o.isProcessing=!0,cs.forEach(a),o.isProcessing=!1,n&&t&&(r=!1,e(s))},l=cs.reduce(((t,a)=>{const l=i[a];return t[a]=function(t){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,o.isProcessing||e(s)),l.schedule(t,i,a)},t}),{});return{schedule:l,cancel:e=>cs.forEach((t=>i[t].cancel(e))),state:o,steps:i}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:ss,!0),hs={useVisualState:is({scrapeMotionValuesFromProps:Za,createRenderState:Ha,onMount:(e,t,n)=>{let{renderState:r,latestValues:o}=n;us.read((()=>{try{r.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(e){r.dimensions={x:0,y:0,width:0,height:0}}})),us.render((()=>{qa(r,o,{enableHardwareAcceleration:!1},Wa(t.tagName),e.transformTemplate),Xa(t,r)}))}})},ms={useVisualState:is({scrapeMotionValuesFromProps:Ja,createRenderState:Ma})};function gs(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const ys=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function vs(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function bs(e,t,n,r){return gs(e,t,(e=>t=>ys(t)&&e(t,vs(t)))(n),r)}const xs=(e,t)=>n=>t(e(n)),ws=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(xs)};function ks(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const Ss=ks("dragHorizontal"),Es=ks("dragVertical");function Cs(e){let t=!1;if("y"===e)t=Es();else if("x"===e)t=Ss();else{const e=Ss(),n=Es();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function js(){const e=Cs(!0);return!e||(e(),!1)}class Ts{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Ps(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End");return bs(e.current,n,((n,o)=>{if("touch"===n.pointerType||js())return;const i=e.getProps();e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",t),i[r]&&us.update((()=>i[r](n,o)))}),{passive:!e.getProps()[r]})}const Os=(e,t)=>!!t&&(e===t||Os(e,t.parentElement));function _s(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,vs(n))}const Rs=new WeakMap,As=new WeakMap,Ms=e=>{const t=Rs.get(e.target);t&&t(e)},Is=e=>{e.forEach(Ms)};function zs(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;As.has(r)||As.set(r,{});const o=As.get(r),i=JSON.stringify(n);return o[i]||(o[i]=new IntersectionObserver(Is,{root:t,...n})),o[i]}(t);return Rs.set(e,n),r.observe(e),()=>{Rs.delete(e),r.unobserve(e)}}const Ls={some:0,all:1};const Ds={inView:{Feature:class extends Ts{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:o}=e,i={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Ls[r]};return zs(this.node.current,i,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,o&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),i=t?n:r;i&&i(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Ts{constructor(){super(...arguments),this.removeStartListeners=ss,this.removeEndListeners=ss,this.removeAccessibleListeners=ss,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),r=bs(window,"pointerup",((e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:r,globalTapTarget:o}=this.node.getProps();us.update((()=>{o||Os(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)}))}),{passive:!(n.onTap||n.onPointerUp)}),o=bs(window,"pointercancel",((e,t)=>this.cancelPress(e,t)),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=ws(r,o),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=gs(this.node.current,"keydown",(e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=gs(this.node.current,"keyup",(e=>{"Enter"===e.key&&this.checkPressEnd()&&_s("up",((e,t)=>{const{onTap:n}=this.node.getProps();n&&us.update((()=>n(e,t)))}))})),_s("down",((e,t)=>{this.startPress(e,t)}))})),t=gs(this.node.current,"blur",(()=>{this.isPressing&&_s("cancel",((e,t)=>this.cancelPress(e,t)))}));this.removeAccessibleListeners=ws(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&us.update((()=>n(e,t)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!js()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&us.update((()=>n(e,t)))}mount(){const e=this.node.getProps(),t=bs(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=gs(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ws(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends Ts{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ws(gs(this.node.current,"focus",(()=>this.onFocus())),gs(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends Ts{mount(){this.unmount=ws(Ps(this.node,!0),Ps(this.node,!1))}unmount(){}}}};function Ns(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function $s(e,t,n){const r=e.getProps();return es(r,t,void 0!==n?n:r.custom,function(e){const t={};return e.values.forEach(((e,n)=>t[n]=e.get())),t}(e),function(e){const t={};return e.values.forEach(((e,n)=>t[n]=e.getVelocity())),t}(e))}let Fs=ss,Us=ss;const Bs=e=>1e3*e,Vs=e=>e/1e3,qs=!1,Hs=e=>Array.isArray(e)&&"number"===typeof e[0];function Ws(e){return Boolean(!e||"string"===typeof e&&Ys[e]||Hs(e)||Array.isArray(e)&&e.every(Ws))}const Qs=e=>{let[t,n,r,o]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${o})`},Ys={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Qs([0,.65,.55,1]),circOut:Qs([.55,0,1,.45]),backIn:Qs([.31,.01,.66,-.59]),backOut:Qs([.33,1.53,.69,.99])};function Gs(e){if(e)return Hs(e)?Qs(e):Array.isArray(e)?e.map(Gs):Ys[e]}const Ks=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Xs(e,t,n,r){if(e===t&&n===r)return ss;const o=t=>function(e,t,n,r,o){let i,a,s=0;do{a=t+(n-t)/2,i=Ks(a,r,o)-e,i>0?n=a:t=a}while(Math.abs(i)>1e-7&&++s<12);return a}(t,0,1,e,n);return e=>0===e||1===e?e:Ks(o(e),t,r)}const Js=Xs(.42,0,1,1),Zs=Xs(0,0,.58,1),el=Xs(.42,0,.58,1),tl=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,nl=e=>t=>1-e(1-t),rl=e=>1-Math.sin(Math.acos(e)),ol=nl(rl),il=tl(rl),al=Xs(.33,1.53,.69,.99),sl=nl(al),ll=tl(sl),cl={linear:ss,easeIn:Js,easeInOut:el,easeOut:Zs,circIn:rl,circInOut:il,circOut:ol,backIn:sl,backInOut:ll,backOut:al,anticipate:e=>(e*=2)<1?.5*sl(e):.5*(2-Math.pow(2,-10*(e-1)))},ul=e=>{if(Array.isArray(e)){Us(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,o]=e;return Xs(t,n,r,o)}return"string"===typeof e?(Us(void 0!==cl[e],`Invalid easing type '${e}'`),cl[e]):e},dl=(e,t)=>n=>Boolean(ka(n)&&wa.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),pl=(e,t,n)=>r=>{if(!ka(r))return r;const[o,i,a,s]=r.match(ba);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},fl={...ma,transform:e=>Math.round((e=>ha(0,255,e))(e))},hl={test:dl("rgb","red"),parse:pl("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:o=1}=e;return"rgba("+fl.transform(t)+", "+fl.transform(n)+", "+fl.transform(r)+", "+va(ga.transform(o))+")"}};const ml={test:dl("#"),parse:function(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}},transform:hl.transform},gl={test:dl("hsl","hue"),parse:pl("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:o=1}=e;return"hsla("+Math.round(t)+", "+Ca.transform(va(n))+", "+Ca.transform(va(r))+", "+va(ga.transform(o))+")"}},yl={test:e=>hl.test(e)||ml.test(e)||gl.test(e),parse:e=>hl.test(e)?hl.parse(e):gl.test(e)?gl.parse(e):ml.parse(e),transform:e=>ka(e)?e:e.hasOwnProperty("red")?hl.transform(e):gl.transform(e)},vl=(e,t,n)=>-n*e+n*t+e;function bl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}const xl=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},wl=[ml,hl,gl];function kl(e){const t=(e=>wl.find((t=>t.test(e))))(e);Us(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===gl&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:o}=e;t/=360,n/=100,r/=100;let i=0,a=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,o=2*r-e;i=bl(o,e,t+1/3),a=bl(o,e,t),s=bl(o,e,t-1/3)}else i=a=s=r;return{red:Math.round(255*i),green:Math.round(255*a),blue:Math.round(255*s),alpha:o}}(n)),n}const Sl=(e,t)=>{const n=kl(e),r=kl(t),o={...n};return e=>(o.red=xl(n.red,r.red,e),o.green=xl(n.green,r.green,e),o.blue=xl(n.blue,r.blue,e),o.alpha=vl(n.alpha,r.alpha,e),hl.transform(o))};const El={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:ss},Cl={regex:xa,countKey:"Colors",token:"${c}",parse:yl.parse},jl={regex:ba,countKey:"Numbers",token:"${n}",parse:ma.parse};function Tl(e,t){let{regex:n,countKey:r,token:o,parse:i}=t;const a=e.tokenised.match(n);a&&(e["num"+r]=a.length,e.tokenised=e.tokenised.replace(n,o),e.values.push(...a.map(i)))}function Pl(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Tl(n,El),Tl(n,Cl),Tl(n,jl),n}function Ol(e){return Pl(e).values}function _l(e){const{values:t,numColors:n,numVars:r,tokenised:o}=Pl(e),i=t.length;return e=>{let t=o;for(let o=0;o<i;o++)t=o<r?t.replace(El.token,e[o]):o<r+n?t.replace(Cl.token,yl.transform(e[o])):t.replace(jl.token,va(e[o]));return t}}const Rl=e=>"number"===typeof e?0:e;const Al={test:function(e){var t,n;return isNaN(e)&&ka(e)&&((null===(t=e.match(ba))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(xa))||void 0===n?void 0:n.length)||0)>0},parse:Ol,createTransformer:_l,getAnimatableNone:function(e){const t=Ol(e);return _l(e)(t.map(Rl))}},Ml=(e,t)=>n=>`${n>0?t:e}`;function Il(e,t){return"number"===typeof e?n=>vl(e,t,n):yl.test(e)?Sl(e,t):e.startsWith("var(")?Ml(e,t):Dl(e,t)}const zl=(e,t)=>{const n=[...e],r=n.length,o=e.map(((e,n)=>Il(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=o[t](e);return n}},Ll=(e,t)=>{const n={...e,...t},r={};for(const o in n)void 0!==e[o]&&void 0!==t[o]&&(r[o]=Il(e[o],t[o]));return e=>{for(const t in r)n[t]=r[t](e);return n}},Dl=(e,t)=>{const n=Al.createTransformer(t),r=Pl(e),o=Pl(t);return r.numVars===o.numVars&&r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?ws(zl(r.values,o.values),n):(Fs(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),Ml(e,t))},Nl=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},$l=(e,t)=>n=>vl(e,t,n);function Fl(e,t,n){const r=[],o=n||function(e){return"number"===typeof e?$l:"string"===typeof e?yl.test(e)?Sl:Dl:Array.isArray(e)?zl:"object"===typeof e?Ll:$l}(e[0]),i=e.length-1;for(let a=0;a<i;a++){let n=o(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||ss:t;n=ws(e,n)}r.push(n)}return r}function Ul(e,t){let{clamp:n=!0,ease:r,mixer:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=e.length;if(Us(i===t.length,"Both input and output ranges must be the same length"),1===i)return()=>t[0];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Fl(t,r,o),s=a.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const r=Nl(e[n],e[n+1],t);return a[n](r)};return n?t=>l(ha(e[0],e[i-1],t)):l}function Bl(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=Nl(0,t,r);e.push(vl(n,1,o))}}(t,e.length-1),t}function Vl(e){let{duration:t=300,keyframes:n,times:r,ease:o="easeInOut"}=e;const i=(e=>Array.isArray(e)&&"number"!==typeof e[0])(o)?o.map(ul):ul(o),a={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:Bl(n),t),l=Ul(s,n,{ease:Array.isArray(i)?i:(c=n,u=i,c.map((()=>u||el)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}function ql(e,t){return t?e*(1e3/t):0}function Hl(e,t,n){const r=Math.max(t-5,0);return ql(n-e(r),t-r)}const Wl=.001;function Ql(e){let t,n,{duration:r=800,bounce:o=.25,velocity:i=0,mass:a=1}=e;Fs(r<=Bs(10),"Spring duration must be 10 seconds or less");let s=1-o;s=ha(.05,1,s),r=ha(.01,10,Vs(r)),s<1?(t=e=>{const t=e*s,n=t*r,o=t-i,a=Gl(e,s),l=Math.exp(-n);return Wl-o/a*l},n=e=>{const n=e*s*r,o=n*i+i,a=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=Gl(Math.pow(e,2),s);return(-t(e)+Wl>0?-1:1)*((o-a)*l)/c}):(t=e=>Math.exp(-e*r)*((e-i)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(i-e)));const l=function(e,t,n){let r=n;for(let o=1;o<Yl;o++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=Bs(r),isNaN(l))return{stiffness:100,damping:10,duration:r};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:r}}}const Yl=12;function Gl(e,t){return e*Math.sqrt(1-t*t)}const Kl=["duration","bounce"],Xl=["stiffness","damping","mass"];function Jl(e,t){return t.some((t=>void 0!==e[t]))}function Zl(e){let{keyframes:t,restDelta:n,restSpeed:r,...o}=e;const i=t[0],a=t[t.length-1],s={done:!1,value:i},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:f}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Jl(e,Xl)&&Jl(e,Kl)){const n=Ql(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...o,velocity:-Vs(o.velocity||0)}),h=p||0,m=c/(2*Math.sqrt(l*u)),g=a-i,y=Vs(Math.sqrt(l/u)),v=Math.abs(g)<5;let b;if(r||(r=v?.01:2),n||(n=v?.005:.5),m<1){const e=Gl(y,m);b=t=>{const n=Math.exp(-m*y*t);return a-n*((h+m*y*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)b=e=>a-Math.exp(-y*e)*(g+(h+y*g)*e);else{const e=y*Math.sqrt(m*m-1);b=t=>{const n=Math.exp(-m*y*t),r=Math.min(e*t,300);return a-n*((h+m*y*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:f&&d||null,next:e=>{const t=b(e);if(f)s.done=e>=d;else{let o=h;0!==e&&(o=m<1?Hl(b,e,t):0);const i=Math.abs(o)<=r,l=Math.abs(a-t)<=n;s.done=i&&l}return s.value=s.done?a:t,s}}}function ec(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:o=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const p=t[0],f={done:!1,value:p},h=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=p+m,y=void 0===s?g:s(g);y!==g&&(m=y-p);const v=e=>-m*Math.exp(-e/o),b=e=>y+v(e),x=e=>{const t=v(e),n=b(e);f.done=Math.abs(t)<=u,f.value=f.done?y:n};let w,k;const S=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(f.value)&&(w=e,k=Zl({keyframes:[f.value,h(f.value)],velocity:Hl(b,e,f.value),damping:i,stiffness:a,restDelta:u,restSpeed:d}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return k||void 0!==w||(t=!0,x(e),S(e)),void 0!==w&&e>w?k.next(e-w):(!t&&x(e),f)}}}const tc=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>us.update(t,!0),stop:()=>ds(t),now:()=>ps.isProcessing?ps.timestamp:performance.now()}};function nc(e){let t=0;let n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const rc={decay:ec,inertia:ec,tween:Vl,keyframes:Vl,spring:Zl};function oc(e){let t,n,{autoplay:r=!0,delay:o=0,driver:i=tc,keyframes:a,type:s="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:u="loop",onPlay:d,onStop:p,onComplete:f,onUpdate:h,...m}=e,g=1,y=!1;const v=()=>{n=new Promise((e=>{t=e}))};let b;v();const x=rc[s]||Vl;let w;x!==Vl&&"number"!==typeof a[0]&&(w=Ul([0,100],a,{clamp:!1}),a=[0,100]);const k=x({...m,keyframes:a});let S;"mirror"===u&&(S=x({...m,keyframes:[...a].reverse(),velocity:-(m.velocity||0)}));let E="idle",C=null,j=null,T=null;null===k.calculatedDuration&&l&&(k.calculatedDuration=nc(k));const{calculatedDuration:P}=k;let O=1/0,_=1/0;null!==P&&(O=P+c,_=O*(l+1)-c);let R=0;const A=e=>{if(null===j)return;g>0&&(j=Math.min(j,e)),g<0&&(j=Math.min(e-_/g,j)),R=null!==C?C:Math.round(e-j)*g;const t=R-o*(g>=0?1:-1),n=g>=0?t<0:t>_;R=Math.max(t,0),"finished"===E&&null===C&&(R=_);let r=R,i=k;if(l){const e=Math.min(R,_)/O;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===u?(n=1-n,c&&(n-=c/O)):"mirror"===u&&(i=S)),r=ha(0,1,n)*O}const s=n?{done:!1,value:a[0]}:i.next(r);w&&(s.value=w(s.value));let{done:d}=s;n||null===P||(d=g>=0?R>=_:R<=0);const p=null===C&&("finished"===E||"running"===E&&d);return h&&h(s.value),p&&z(),s},M=()=>{b&&b.stop(),b=void 0},I=()=>{E="idle",M(),t(),v(),j=T=null},z=()=>{E="finished",f&&f(),M(),t()},L=()=>{if(y)return;b||(b=i(A));const e=b.now();d&&d(),null!==C?j=e-C:j&&"finished"!==E||(j=e),"finished"===E&&v(),T=j,C=null,E="running",b.start()};r&&L();const D={then:(e,t)=>n.then(e,t),get time(){return Vs(R)},set time(e){e=Bs(e),R=e,null===C&&b&&0!==g?j=b.now()-e/g:C=e},get duration(){const e=null===k.calculatedDuration?nc(k):k.calculatedDuration;return Vs(e)},get speed(){return g},set speed(e){e!==g&&b&&(g=e,D.time=Vs(R))},get state(){return E},play:L,pause:()=>{E="paused",C=R},stop:()=>{y=!0,"idle"!==E&&(E="idle",p&&p(),I())},cancel:()=>{null!==T&&A(T),I()},complete:()=>{E="finished"},sample:e=>(j=0,A(e))};return D}const ic=function(e){let t;return()=>(void 0===t&&(t=e()),t)}((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),ac=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function sc(e,t,n){let{onUpdate:r,onComplete:o,...i}=n;if(!(ic()&&ac.has(t)&&!i.repeatDelay&&"mirror"!==i.repeatType&&0!==i.damping&&"inertia"!==i.type))return!1;let a,s,l=!1,c=!1;const u=()=>{s=new Promise((e=>{a=e}))};u();let{keyframes:d,duration:p=300,ease:f,times:h}=i;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!Ws(t.ease))(t,i)){const e=oc({...i,repeat:0,delay:0});let t={done:!1,value:d[0]};const n=[];let r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;h=void 0,d=n,p=r-10,f="linear"}const m=function(e,t,n){let{delay:r=0,duration:o,repeat:i=0,repeatType:a="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:n};l&&(c.offset=l);const u=Gs(s);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:r,duration:o,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:i+1,direction:"reverse"===a?"alternate":"normal"})}(e.owner.current,t,d,{...i,duration:p,ease:f,times:h}),g=()=>{c=!1,m.cancel()},y=()=>{c=!0,us.update(g),a(),u()};m.onfinish=()=>{c||(e.set(function(e,t){let{repeat:n,repeatType:r="loop"}=t;return e[n&&"loop"!==r&&n%2===1?0:e.length-1]}(d,i)),o&&o(),y())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(m.timeline=e,m.onfinish=null,ss),get time(){return Vs(m.currentTime||0)},set time(e){m.currentTime=Bs(e)},get speed(){return m.playbackRate},set speed(e){m.playbackRate=e},get duration(){return Vs(p)},play:()=>{l||(m.play(),ds(g))},pause:()=>m.pause(),stop:()=>{if(l=!0,"idle"===m.playState)return;const{currentTime:t}=m;if(t){const n=oc({...i,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}y()},complete:()=>{c||m.finish()},cancel:y}}const lc={type:"spring",stiffness:500,damping:25,restSpeed:10},cc={type:"keyframes",duration:.8},uc={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},dc=(e,t)=>{let{keyframes:n}=t;return n.length>2?cc:ia.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:lc:uc},pc=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!Al.test(t)&&"0"!==t||t.startsWith("url("))),fc=new Set(["brightness","contrast","saturate","opacity"]);function hc(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(ba)||[];if(!r)return e;const o=n.replace(r,"");let i=fc.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const mc=/([a-z-]*)\(.*?\)/g,gc={...Al,getAnimatableNone:e=>{const t=e.match(mc);return t?t.map(hc).join(" "):e}},yc={...Ra,color:yl,backgroundColor:yl,outlineColor:yl,fill:yl,stroke:yl,borderColor:yl,borderTopColor:yl,borderRightColor:yl,borderBottomColor:yl,borderLeftColor:yl,filter:gc,WebkitFilter:gc},vc=e=>yc[e];function bc(e,t){let n=vc(e);return n!==gc&&(n=Al),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const xc=e=>/^0[^.\s]+$/.test(e);function wc(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||xc(e):void 0}function kc(e,t){return e[t]||e.default||e}const Sc=!1,Ec=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return o=>{const i=kc(r,e)||{},a=i.delay||r.delay||0;let{elapsed:s=0}=r;s-=Bs(a);const l=function(e,t,n,r){const o=pc(t,n);let i;i=Array.isArray(n)?[...n]:[null,n];const a=void 0!==r.from?r.from:e.get();let s;const l=[];for(let c=0;c<i.length;c++)null===i[c]&&(i[c]=0===c?a:i[c-1]),wc(i[c])&&l.push(c),"string"===typeof i[c]&&"none"!==i[c]&&"0"!==i[c]&&(s=i[c]);if(o&&l.length&&s)for(let c=0;c<l.length;c++)i[l[c]]=bc(t,s);return i}(t,e,n,i),c=l[0],u=l[l.length-1],d=pc(e,c),p=pc(e,u);Fs(d===p,`You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);let f={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...i,delay:-s,onUpdate:e=>{t.set(e),i.onUpdate&&i.onUpdate(e)},onComplete:()=>{o(),i.onComplete&&i.onComplete()}};if(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:o,staggerDirection:i,repeat:a,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length}(i)||(f={...f,...dc(e,f)}),f.duration&&(f.duration=Bs(f.duration)),f.repeatDelay&&(f.repeatDelay=Bs(f.repeatDelay)),!d||!p||qs||!1===i.type||Sc)return function(e){let{keyframes:t,delay:n,onUpdate:r,onComplete:o}=e;const i=()=>(r&&r(t[t.length-1]),o&&o(),{time:0,speed:1,duration:0,play:ss,pause:ss,stop:ss,then:e=>(e(),Promise.resolve()),cancel:ss,complete:ss});return n?oc({keyframes:[0,1],duration:0,delay:n,onComplete:i}):i()}(qs?{...f,delay:0}:f);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const n=sc(t,e,f);if(n)return n}return oc(f)}};function Cc(e){return Boolean(sa(e)&&e.add)}const jc=e=>/^\-?\d*\.?\d+$/.test(e);function Tc(e,t){-1===e.indexOf(t)&&e.push(t)}function Pc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Oc{constructor(){this.subscriptions=[]}add(e){return Tc(this.subscriptions,e),()=>Pc(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let o=0;o<r;o++){const r=this.subscriptions[o];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const _c={current:void 0};class Rc{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:r,timestamp:o}=ps;t.lastUpdated!==o&&(t.timeDelta=r,t.lastUpdated=o,us.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>us.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(r=this.current,!isNaN(parseFloat(r))),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Oc);const n=this.events[e].add(t);return"change"===e?()=>{n(),us.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return _c.current&&_c.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ql(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ac(e,t){return new Rc(e,t)}const Mc=e=>t=>t.test(e),Ic=[ma,ja,Ca,Ea,Pa,Ta,{test:e=>"auto"===e,parse:e=>e}],zc=e=>Ic.find(Mc(e)),Lc=[...Ic,yl,Al],Dc=e=>Lc.find(Mc(e));function Nc(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ac(n))}function $c(e,t){const n=$s(e,t);let{transitionEnd:r={},transition:o={},...i}=n?e.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const a in i){Nc(e,a,rs(i[a]))}}function Fc(e,t){if(!t)return;return(t[e]||t.default||t).from}function Uc(e,t){let{protectedKeys:n,needsAnimating:r}=e;const o=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,o}function Bc(e,t){const n=e.get();if(!Array.isArray(t))return n!==t;for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}function Vc(e,t){let{delay:n=0,transitionOverride:r,type:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:i=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(i=r);const c=[],u=o&&e.animationState&&e.animationState.getState()[o];for(const d in s){const t=e.getValue(d),r=s[d];if(!t||void 0===r||u&&Uc(u,d))continue;const o={delay:n,elapsed:0,...kc(i||{},d)};if(window.HandoffAppearAnimations){const n=e.getProps()[Di];if(n){const e=window.HandoffAppearAnimations(n,d,t,us);null!==e&&(o.elapsed=e,o.isHandoff=!0)}}let a=!o.isHandoff&&!Bc(t,r);if("spring"===o.type&&(t.getVelocity()||o.velocity)&&(a=!1),t.animation&&(a=!1),a)continue;t.start(Ec(d,t,r,e.shouldReduceMotion&&ia.has(d)?{type:!1}:o));const p=t.animation;Cc(l)&&(l.add(d),p.then((()=>l.remove(d)))),c.push(p)}return a&&Promise.all(c).then((()=>{a&&$c(e,a)})),c}function qc(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=$s(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const i=r?()=>Promise.all(Vc(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:i=0,staggerChildren:a,staggerDirection:s}=o;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=arguments.length>5?arguments[5]:void 0;const a=[],s=(e.variantChildren.size-1)*r,l=1===o?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(Hc).forEach(((e,r)=>{e.notify("AnimationStart",t),a.push(qc(e,t,{...i,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(a)}(e,t,i+r,a,s,n)}:()=>Promise.resolve(),{when:s}=o;if(s){const[e,t]="beforeChildren"===s?[i,a]:[a,i];return e().then((()=>t()))}return Promise.all([i(),a(n.delay)])}function Hc(e,t){return e.sortNodePosition(t)}const Wc=[...Ui].reverse(),Qc=Ui.length;function Yc(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const o=t.map((t=>qc(e,t,r)));n=Promise.all(o)}else if("string"===typeof t)n=qc(e,t,r);else{const o="function"===typeof t?$s(e,t,r.custom):t;n=Promise.all(Vc(e,o,r))}return n.then((()=>e.notify("AnimationComplete",t)))}(e,n,r)})))}function Gc(e){let t=Yc(e);const n={animate:Xc(!0),whileInView:Xc(),whileHover:Xc(),whileTap:Xc(),whileDrag:Xc(),whileFocus:Xc(),exit:Xc()};let r=!0;const o=(t,n)=>{const r=$s(e,n);if(r){const{transition:e,transitionEnd:n,...o}=r;t={...t,...o,...n}}return t};function i(i,a){const s=e.getProps(),l=e.getVariantContext(!0)||{},c=[],u=new Set;let d={},p=1/0;for(let t=0;t<Qc;t++){const f=Wc[t],h=n[f],m=void 0!==s[f]?s[f]:l[f],g=$i(m),y=f===a?h.isActive:null;!1===y&&(p=t);let v=m===l[f]&&m!==s[f]&&g;if(v&&r&&e.manuallyAnimateOnMount&&(v=!1),h.protectedKeys={...d},!h.isActive&&null===y||!m&&!h.prevProp||Fi(m)||"boolean"===typeof m)continue;let b=Kc(h.prevProp,m)||f===a&&h.isActive&&!v&&g||t>p&&g,x=!1;const w=Array.isArray(m)?m:[m];let k=w.reduce(o,{});!1===y&&(k={});const{prevResolvedValues:S={}}=h,E={...S,...k},C=e=>{b=!0,u.has(e)&&(x=!0,u.delete(e)),h.needsAnimating[e]=!0};for(const e in E){const t=k[e],n=S[e];if(d.hasOwnProperty(e))continue;let r=!1;r=ns(t)&&ns(n)?!Ns(t,n):t!==n,r?void 0!==t?C(e):u.add(e):void 0!==t&&u.has(e)?C(e):h.protectedKeys[e]=!0}h.prevProp=m,h.prevResolvedValues=k,h.isActive&&(d={...d,...k}),r&&e.blockInitialAnimation&&(b=!1),!b||v&&!x||c.push(...w.map((e=>({animation:e,options:{type:f,...i}}))))}if(u.size){const t={};u.forEach((n=>{const r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)})),c.push({animation:t})}let f=Boolean(c.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(f=!1),r=!1,f?t(c):Promise.resolve()}return{animateChanges:i,setActive:function(t,r,o){var a;if(n[t].isActive===r)return Promise.resolve();null===(a=e.variantChildren)||void 0===a||a.forEach((e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)})),n[t].isActive=r;const s=i(o,t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n}}function Kc(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Ns(t,e)}function Xc(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let Jc=0;const Zc={animation:{Feature:class extends Ts{constructor(e){super(e),e.animationState||(e.animationState=Gc(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Fi(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends Ts{constructor(){super(...arguments),this.id=Jc++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e,{custom:null!==n&&void 0!==n?n:this.node.getProps().custom});t&&!e&&o.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},eu=(e,t)=>Math.abs(e-t);class tu{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=ou(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=eu(e.x,t.x),r=eu(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:o}=ps;this.history.push({...r,timestamp:o});const{onStart:i,onMove:a}=this.handlers;t||(i&&i(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=nu(t,this.transformPagePoint),us.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:o}=this.handlers;if(this.dragSnapToOrigin&&o&&o(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const i=ou("pointercancel"===e.type?this.lastMoveEventInfo:nu(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,i),r&&r(e,i)},!ys(e))return;this.dragSnapToOrigin=o,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const i=nu(vs(e),this.transformPagePoint),{point:a}=i,{timestamp:s}=ps;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,ou(i,this.history)),this.removeListeners=ws(bs(this.contextWindow,"pointermove",this.handlePointerMove),bs(this.contextWindow,"pointerup",this.handlePointerUp),bs(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ds(this.updatePoint)}}function nu(e,t){return t?{point:t(e.point)}:e}function ru(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ou(e,t){let{point:n}=e;return{point:n,delta:ru(n,au(t)),offset:ru(n,iu(t)),velocity:su(t,.1)}}function iu(e){return e[0]}function au(e){return e[e.length-1]}function su(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=au(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Bs(t)));)n--;if(!r)return{x:0,y:0};const i=Vs(o.timestamp-r.timestamp);if(0===i)return{x:0,y:0};const a={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function lu(e){return e.max-e.min}function cu(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=n}function uu(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=vl(t.min,t.max,e.origin),e.scale=lu(n)/lu(t),(cu(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=vl(n.min,n.max,e.origin)-e.originPoint,(cu(e.translate)||isNaN(e.translate))&&(e.translate=0)}function du(e,t,n,r){uu(e.x,t.x,n.x,r?r.originX:void 0),uu(e.y,t.y,n.y,r?r.originY:void 0)}function pu(e,t,n){e.min=n.min+t.min,e.max=e.min+lu(t)}function fu(e,t,n){e.min=t.min-n.min,e.max=e.min+lu(t)}function hu(e,t,n){fu(e.x,t.x,n.x),fu(e.y,t.y,n.y)}function mu(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function gu(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const yu=.35;function vu(e,t,n){return{min:bu(e,t),max:bu(e,n)}}function bu(e,t){return"number"===typeof e?e:e[t]||0}function xu(e){return[e("x"),e("y")]}function wu(e){let{top:t,left:n,right:r,bottom:o}=e;return{x:{min:n,max:r},y:{min:t,max:o}}}function ku(e){return void 0===e||1===e}function Su(e){let{scale:t,scaleX:n,scaleY:r}=e;return!ku(t)||!ku(n)||!ku(r)}function Eu(e){return Su(e)||Cu(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Cu(e){return ju(e.x)||ju(e.y)}function ju(e){return e&&"0%"!==e}function Tu(e,t,n){return n+t*(e-n)}function Pu(e,t,n,r,o){return void 0!==o&&(e=Tu(e,o,r)),Tu(e,n,r)+t}function Ou(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;e.min=Pu(e.min,t,n,r,o),e.max=Pu(e.max,t,n,r,o)}function _u(e,t){let{x:n,y:r}=t;Ou(e.x,n.translate,n.scale,n.originPoint),Ou(e.y,r.translate,r.scale,r.originPoint)}function Ru(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Au(e,t){e.min=e.min+t,e.max=e.max+t}function Mu(e,t,n){let[r,o,i]=n;const a=void 0!==t[i]?t[i]:.5,s=vl(e.min,e.max,a);Ou(e,t[r],t[o],s,t.scale)}const Iu=["x","scaleX","originX"],zu=["y","scaleY","originY"];function Lu(e,t){Mu(e.x,t,Iu),Mu(e.y,t,zu)}function Du(e,t){return wu(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const Nu=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},$u=new WeakMap;class Fu{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new tu(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(vs(e,"page").point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:o}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Cs(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),xu((e=>{let t=this.getAxisMotionValue(e).get()||0;if(Ca.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=lu(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),o&&us.update((()=>o(e,t)),!1,!0);const{animationState:i}=this.visualElement;i&&i.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:o,onDrag:i}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:a}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(a),void(null!==this.currentDirection&&o&&o(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),i&&i(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>xu((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:Nu(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:o}=this.getProps();o&&us.update((()=>o(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!Uu(e,r,this.currentDirection))return;const o=this.getAxisMotionValue(e);let i=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(i=function(e,t,n){let{min:r,max:o}=t;return void 0!==r&&e<r?e=n?vl(r,e,n.min):Math.max(e,r):void 0!==o&&e>o&&(e=n?vl(o,e,n.max):Math.min(e,o)),e}(i,this.constraints[e],this.elastic[e])),o.set(i)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,o=this.constraints;t&&Ni(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:o,right:i}=t;return{x:mu(e.x,r,i),y:mu(e.y,n,o)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yu;return!1===e?e=0:!0===e&&(e=yu),{x:vu(e,"left","right"),y:vu(e,"top","bottom")}}(n),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&xu((e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ni(e))return!1;const n=e.current;Us(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const o=function(e,t,n){const r=Du(e,n),{scroll:o}=t;return o&&(Au(r.x,o.offset.x),Au(r.y,o.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let i=function(e,t){return{x:gu(e.x,t.x),y:gu(e.y,t.y)}}(r.layout.layoutBox,o);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(i));this.hasMutatedConstraints=!!e,e&&(i=wu(e))}return i}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:o,dragSnapToOrigin:i,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=xu((a=>{if(!Uu(a,t,this.currentDirection))return;let l=s&&s[a]||{};i&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[a]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...o,...l};return this.startAxisValueAnimation(a,d)}));return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return n.start(Ec(e,n,0,t))}stopAnimation(){xu((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){xu((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){xu((t=>{const{drag:n}=this.getProps();if(!Uu(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,o=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:i}=r.layout.layoutBox[t];o.set(e[t]-vl(n,i,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Ni(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};xu((e=>{const t=this.getAxisMotionValue(e);if(t){const n=t.get();r[e]=function(e,t){let n=.5;const r=lu(e),o=lu(t);return o>r?n=Nl(t.min,t.max-r,e.min):r>o&&(n=Nl(e.min,e.max-o,t.min)),ha(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),xu((t=>{if(!Uu(t,e,null))return;const n=this.getAxisMotionValue(t),{min:o,max:i}=this.constraints[t];n.set(vl(o,i,r[t]))}))}addListeners(){if(!this.visualElement.current)return;$u.set(this.visualElement,this);const e=bs(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Ni(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),t();const o=gs(window,"resize",(()=>this.scalePositionWithinConstraints())),i=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(xu((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{o(),e(),r(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:o=!1,dragElastic:i=yu,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:o,dragElastic:i,dragMomentum:a}}}function Uu(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const Bu=e=>(t,n)=>{e&&us.update((()=>e(t,n)))};const Vu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function qu(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Hu={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!ja.test(e))return e;e=parseFloat(e)}return`${qu(e,t.target.x)}% ${qu(e,t.target.y)}%`}},Wu={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const o=e,i=Al.parse(e);if(i.length>5)return o;const a=Al.createTransformer(e),s="number"!==typeof i[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;i[0+s]/=l,i[1+s]/=c;const u=vl(l,c,.5);return"number"===typeof i[2+s]&&(i[2+s]/=u),"number"===typeof i[3+s]&&(i[3+s]/=u),a(i)}};class Qu extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:o}=e;var i;i=Gu,Object.assign(ra,i),o&&(t.group&&t.group.add(o),n&&n.register&&r&&n.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",(()=>{this.safeToRemove()})),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Vu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:o}=this.props,i=n.projection;return i?(i.isPresent=o,r||e.layoutDependency!==t||void 0===t?i.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?i.promote():i.relegate()||us.postRender((()=>{const e=i.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Yu(e){const[n,r]=function(){const e=(0,t.useContext)(Ai);if(null===e)return[!0,null];const{isPresent:n,onExitComplete:r,register:o}=e,i=(0,t.useId)();return(0,t.useEffect)((()=>o(i)),[]),!n&&r?[!1,()=>r&&r(i)]:[!0]}(),o=(0,t.useContext)(Gi);return t.createElement(Qu,{...e,layoutGroup:o,switchLayoutGroup:(0,t.useContext)(Ki),isPresent:n,safeToRemove:r})}const Gu={borderRadius:{...Hu,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Hu,borderTopRightRadius:Hu,borderBottomLeftRadius:Hu,borderBottomRightRadius:Hu,boxShadow:Wu},Ku=["TopLeft","TopRight","BottomLeft","BottomRight"],Xu=Ku.length,Ju=e=>"string"===typeof e?parseFloat(e):e,Zu=e=>"number"===typeof e||ja.test(e);function ed(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const td=rd(0,.5,ol),nd=rd(.5,.95,ss);function rd(e,t,n){return r=>r<e?0:r>t?1:n(Nl(e,t,r))}function od(e,t){e.min=t.min,e.max=t.max}function id(e,t){od(e.x,t.x),od(e.y,t.y)}function ad(e,t,n,r,o){return e=Tu(e-=t,1/n,r),void 0!==o&&(e=Tu(e,1/o,r)),e}function sd(e,t,n,r,o){let[i,a,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Ca.test(t)&&(t=parseFloat(t),t=vl(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=vl(i.min,i.max,r);e===i&&(s-=t),e.min=ad(e.min,t,n,s,o),e.max=ad(e.max,t,n,s,o)}(e,t[i],t[a],t[s],t.scale,r,o)}const ld=["x","scaleX","originX"],cd=["y","scaleY","originY"];function ud(e,t,n,r){sd(e.x,t,ld,n?n.x:void 0,r?r.x:void 0),sd(e.y,t,cd,n?n.y:void 0,r?r.y:void 0)}function dd(e){return 0===e.translate&&1===e.scale}function pd(e){return dd(e.x)&&dd(e.y)}function fd(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function hd(e){return lu(e.x)/lu(e.y)}class md{constructor(){this.members=[]}add(e){Tc(this.members,e),e.scheduleRender()}remove(e){if(Pc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function gd(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y;if((o||i)&&(r=`translate3d(${o}px, ${i}px, 0) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:e,rotateX:t,rotateY:o}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),o&&(r+=`rotateY(${o}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return 1===a&&1===s||(r+=`scale(${a}, ${s})`),r||"none"}const yd=(e,t)=>e.depth-t.depth;class vd{constructor(){this.children=[],this.isDirty=!1}add(e){Tc(this.children,e),this.isDirty=!0}remove(e){Pc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(yd),this.isDirty=!1,this.children.forEach(e)}}const bd=["","X","Y","Z"],xd={visibility:"hidden"};let wd=0;const kd={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Sd(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:o,resetTransform:i}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=wd++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{var e;this.projectionUpdateScheduled=!1,kd.totalNodes=kd.resolvedTargetDeltas=kd.recalculatedProjection=0,this.nodes.forEach(jd),this.nodes.forEach(Md),this.nodes.forEach(Id),this.nodes.forEach(Td),e=kd,window.MotionDebug&&window.MotionDebug.record(e)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new vd)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Oc),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:o,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(i||o)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=performance.now(),r=o=>{let{timestamp:i}=o;const a=i-n;a>=t&&(ds(r),e(a-t))};return us.read(r,!0),()=>ds(r)}(r,250),Vu.hasAnimatedSinceResize&&(Vu.hasAnimatedSinceResize=!1,this.nodes.forEach(Ad))}))}o&&this.root.registerSharedNode(o,this),!1!==this.options.animate&&a&&(o||i)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:r,layout:o}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const i=this.options.transition||a.getDefaultTransition()||Fd,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),c=!this.targetLayout||!fd(this.targetLayout,o)||r,u=!n&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...kc(i,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||Ad(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=o}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ds(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(zd),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let o=0;o<this.path.length;o++){const e=this.path[o];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Od);this.isUpdating||this.nodes.forEach(_d),this.isUpdating=!1,this.nodes.forEach(Rd),this.nodes.forEach(Ed),this.nodes.forEach(Cd),this.clearAllSnapshots();const e=performance.now();ps.delta=ha(0,1e3/60,e-ps.timestamp),ps.timestamp=e,ps.isProcessing=!0,fs.update.process(ps),fs.preRender.process(ps),fs.render.process(ps),ps.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask((()=>this.update())))}clearAllSnapshots(){this.nodes.forEach(Pd),this.sharedNodes.forEach(Ld)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,us.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){us.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:o(this.instance),offset:r(this.instance)})}resetTransform(){if(!i)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!pd(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,o=r!==this.prevTransformTemplateValue;e&&(t||Eu(this.latestValues)||o)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),Vd((r=n).x),Vd(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(Au(t.x,n.offset.x),Au(t.y,n.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};id(t,e);for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:o,options:i}=r;if(r!==this.root&&o&&i.layoutScroll){if(o.isRoot){id(t,e);const{scroll:n}=this.root;n&&(Au(t.x,-n.offset.x),Au(t.y,-n.offset.y))}Au(t.x,o.offset.x),Au(t.y,o.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};id(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Lu(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Eu(e.latestValues)&&Lu(n,e.latestValues)}return Eu(this.latestValues)&&Lu(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};id(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Eu(e.latestValues))continue;Su(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};id(r,e.measurePageBox()),ud(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Eu(this.latestValues)&&ud(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ps.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:o,layoutId:i}=this.options;if(this.layout&&(o||i)){if(this.resolvedRelativeTargetAt=ps.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},hu(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),id(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,s=this.relativeTarget,l=this.relativeParent.target,pu(a.x,s.x,l.x),pu(a.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):id(this.target,this.layout.layoutBox),_u(this.target,this.targetDelta)):id(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},hu(this.relativeTargetOrigin,this.target,e.target),id(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}kd.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Su(this.parent.latestValues)&&!Cu(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===ps.timestamp&&(r=!1),r)return;const{layout:o,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!o&&!i)return;id(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const o=n.length;if(!o)return;let i,a;t.x=t.y=1;for(let s=0;s<o;s++){i=n[s],a=i.projectionDelta;const o=i.instance;o&&o.style&&"contents"===o.style.display||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Lu(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,_u(e,a)),r&&Eu(i.latestValues)&&Lu(e,i.latestValues))}t.x=Ru(t.x),t.y=Ru(t.y)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const c=this.projectionTransform;du(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=gd(this.projectionDelta,this.treeScale),this.projectionTransform===c&&this.treeScale.x===a&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),kd.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},o={...this.latestValues},i={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some($d));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;Dd(i.x,e.x,n),Dd(i.y,e.y,n),this.setTargetDelta(i),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(hu(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){Nd(e.x,t.x,n.x,r),Nd(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,a,n),d&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),id(d,this.relativeTarget)),s&&(this.animationValues=o,function(e,t,n,r,o,i){o?(e.opacity=vl(0,void 0!==n.opacity?n.opacity:1,td(r)),e.opacityExit=vl(void 0!==t.opacity?t.opacity:1,0,nd(r))):i&&(e.opacity=vl(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let a=0;a<Xu;a++){const o=`border${Ku[a]}Radius`;let i=ed(t,o),s=ed(n,o);void 0===i&&void 0===s||(i||(i=0),s||(s=0),0===i||0===s||Zu(i)===Zu(s)?(e[o]=Math.max(vl(Ju(i),Ju(s),r),0),(Ca.test(s)||Ca.test(i))&&(e[o]+="%")):e[o]=s)}(t.rotate||n.rotate)&&(e.rotate=vl(t.rotate||0,n.rotate||0,r))}(o,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ds(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=us.update((()=>{Vu.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const r=sa(e)?e:Ac(e);return r.start(Ec("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:o}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&qd(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=lu(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=lu(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}id(t,n),Lu(t,o),du(this.projectionDeltaWithTransform,this.layoutCorrected,t,o)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new md);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;const r={};for(let o=0;o<bd.length;o++){const t="rotate"+bd[o];n[t]&&(r[t]=n[t],e.setStaticValue(t,0))}e.render();for(const o in r)e.setStaticValue(o,r[o]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return xd;const r={visibility:""},o=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=os(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=o?o(this.latestValues,""):"none",r;const i=this.getLead();if(!this.projectionDelta||!this.layout||!i.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=os(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!Eu(this.latestValues)&&(t.transform=o?o({},""):"none",this.hasProjected=!1),t}const a=i.animationValues||i.latestValues;this.applyTransformsToTarget(),r.transform=gd(this.projectionDeltaWithTransform,this.treeScale,a),o&&(r.transform=o(a,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,i.animationValues?r.opacity=i===this?null!==(n=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:r.opacity=i===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0;for(const c in ra){if(void 0===a[c])continue;const{correct:e,applyTo:t}=ra[c],n="none"===r.transform?a[c]:e(a[c],i);if(t){const e=t.length;for(let o=0;o<e;o++)r[t[o]]=n}else r[c]=n}return this.options.layoutId&&(r.pointerEvents=i===this?os(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(Od),this.root.sharedNodes.clear()}}}function Ed(e){e.updateLayout()}function Cd(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:o}=e.options,i=n.source!==e.layout.source;"size"===o?xu((e=>{const r=i?n.measuredBox[e]:n.layoutBox[e],o=lu(r);r.min=t[e].min,r.max=r.min+o})):qd(o,n.layoutBox,t)&&xu((r=>{const o=i?n.measuredBox[r]:n.layoutBox[r],a=lu(t[r]);o.max=o.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)}));const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};du(a,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};i?du(s,e.applyTransform(r,!0),n.measuredBox):du(s,t,n.layoutBox);const l=!pd(a);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:o,layout:i}=r;if(o&&i){const a={x:{min:0,max:0},y:{min:0,max:0}};hu(a,n.layoutBox,o.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};hu(s,t,i.layoutBox),fd(a,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function jd(e){kd.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Td(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Pd(e){e.clearSnapshot()}function Od(e){e.clearMeasurements()}function _d(e){e.isLayoutDirty=!1}function Rd(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ad(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Md(e){e.resolveTargetDelta()}function Id(e){e.calcProjection()}function zd(e){e.resetRotation()}function Ld(e){e.removeLeadSnapshot()}function Dd(e,t,n){e.translate=vl(t.translate,0,n),e.scale=vl(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Nd(e,t,n,r){e.min=vl(t.min,n.min,r),e.max=vl(t.max,n.max,r)}function $d(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Fd={duration:.45,ease:[.4,0,.1,1]},Ud=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),Bd=Ud("applewebkit/")&&!Ud("chrome/")?Math.round:ss;function Vd(e){e.min=Bd(e.min),e.max=Bd(e.max)}function qd(e,t,n){return"position"===e||"preserve-aspect"===e&&!cu(hd(t),hd(n),.2)}const Hd=Sd({attachResizeListener:(e,t)=>gs(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Wd={current:void 0},Qd=Sd({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Wd.current){const e=new Hd({});e.mount(window),e.setOptions({layoutScroll:!0}),Wd.current=e}return Wd.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Yd={pan:{Feature:class extends Ts{constructor(){super(...arguments),this.removePointerDownListener=ss}onPointerDown(e){this.session=new tu(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Nu(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Bu(e),onStart:Bu(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&us.update((()=>r(e,t)))}}}mount(){this.removePointerDownListener=bs(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Ts{constructor(e){super(e),this.removeGroupControls=ss,this.removeListeners=ss,this.controls=new Fu(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ss}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Qd,MeasureLayout:Yu}},Gd=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Kd(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Us(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,o]=function(e){const t=Gd.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const e=i.trim();return jc(e)?parseFloat(e):e}return pa(o)?Kd(o,t,n+1):o}const Xd=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Jd=e=>Xd.has(e),Zd=e=>e===ma||e===ja,ep=(e,t)=>parseFloat(e.split(", ")[t]),tp=(e,t)=>(n,r)=>{let{transform:o}=r;if("none"===o||!o)return 0;const i=o.match(/^matrix3d\((.+)\)$/);if(i)return ep(i[1],t);{const t=o.match(/^matrix\((.+)\)$/);return t?ep(t[1],e):0}},np=new Set(["x","y","z"]),rp=oa.filter((e=>!np.has(e)));const op={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:o="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(o)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:o="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(o)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:tp(4,13),y:tp(5,14)};op.translateX=op.x,op.translateY=op.y;const ip=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},r={...r};const o=Object.keys(t).filter(Jd);let i=[],a=!1;const s=[];if(o.forEach((o=>{const l=e.getValue(o);if(!e.hasValue(o))return;let c=n[o],u=zc(c);const d=t[o];let p;if(ns(d)){const e=d.length,t=null===d[0]?1:0;c=d[t],u=zc(c);for(let n=t;n<e&&null!==d[n];n++)p?Us(zc(d[n])===p,"All keyframes must be of the same type"):(p=zc(d[n]),Us(p===u||Zd(u)&&Zd(p),"Keyframes must be of the same dimension as the current value"))}else p=zc(d);if(u!==p)if(Zd(u)&&Zd(p)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof d?t[o]=parseFloat(d):Array.isArray(d)&&p===ja&&(t[o]=d.map(parseFloat))}else(null===u||void 0===u?void 0:u.transform)&&(null===p||void 0===p?void 0:p.transform)&&(0===c||0===d)?0===c?l.set(p.transform(c)):t[o]=u.transform(d):(a||(i=function(e){const t=[];return rp.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t.length&&e.render(),t}(e),a=!0),s.push(o),r[o]=void 0!==r[o]?r[o]:t[o],l.jump(d))})),s.length){const n=s.indexOf("height")>=0?window.pageYOffset:null,o=((e,t,n)=>{const r=t.measureViewportBox(),o=t.current,i=getComputedStyle(o),{display:a}=i,s={};"none"===a&&t.setStaticValue("display",e.display||"block"),n.forEach((e=>{s[e]=op[e](r,i)})),t.render();const l=t.measureViewportBox();return n.forEach((n=>{const r=t.getValue(n);r&&r.jump(s[n]),e[n]=op[n](l,i)})),e})(t,e,s);return i.length&&i.forEach((t=>{let[n,r]=t;e.getValue(n).set(r)})),e.render(),Mi&&null!==n&&window.scrollTo({top:n}),{target:o,transitionEnd:r}}return{target:t,transitionEnd:r}};function ap(e,t,n,r){return(e=>Object.keys(e).some(Jd))(t)?ip(e,t,n,r):{target:t,transitionEnd:r}}const sp=(e,t,n,r)=>{const o=function(e,t,n){let{...r}=t;const o=e.current;if(!(o instanceof Element))return{target:r,transitionEnd:n};n&&(n={...n}),e.values.forEach((e=>{const t=e.get();if(!pa(t))return;const n=Kd(t,o);n&&e.set(n)}));for(const i in r){const e=r[i];if(!pa(e))continue;const t=Kd(e,o);t&&(r[i]=t,n||(n={}),void 0===n[i]&&(n[i]=e))}return{target:r,transitionEnd:n}}(e,t,r);return ap(e,t=o.target,n,r=o.transitionEnd)},lp={current:null},cp={current:!1};const up=new WeakMap,dp=Object.keys(Yi),pp=dp.length,fp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],hp=Bi.length;class mp{constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:o,visualState:i}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>us.render(this.render,!1,!0);const{latestValues:s,renderState:l}=i;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=a,this.isControllingVariants=Vi(n),this.isVariantNode=qi(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const d in u){const e=u[d];void 0!==s[d]&&sa(e)&&(e.set(s[d],!1),Cc(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,up.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),cp.current||function(){if(cp.current=!0,Mi)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>lp.current=e.matches;e.addListener(t),t()}else lp.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||lp.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){up.delete(this.current),this.projection&&this.projection.unmount(),ds(this.notifyUpdate),ds(this.render),this.valueSubscriptions.forEach((e=>e())),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const n=ia.has(e),r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&us.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)})),o=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,(()=>{r(),o()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,n,r){let o,i,{children:a,...s}=e;for(let l=0;l<pp;l++){const e=dp[l],{isEnabled:t,Feature:n,ProjectionNode:r,MeasureLayout:a}=Yi[e];r&&(o=r),t(s)&&(!this.features[e]&&n&&(this.features[e]=new n(this)),a&&(i=a))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:n,dragConstraints:i,layoutScroll:a,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(n)||i&&Ni(i),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:r,layoutScroll:a,layoutRoot:l})}return i}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<fp.length;n++){const t=fp[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){const{willChange:r}=t;for(const o in t){const i=t[o],a=n[o];if(sa(i))e.addValue(o,i),Cc(r)&&r.add(o);else if(sa(a))e.addValue(o,Ac(i,{owner:e})),Cc(r)&&r.remove(o);else if(a!==i)if(e.hasValue(o)){const t=e.getValue(o);!t.hasAnimated&&t.set(i)}else{const t=e.getStaticValue(o);e.addValue(o,Ac(void 0!==t?t:i,{owner:e}))}}for(const o in n)void 0===t[o]&&e.removeValue(o);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<hp;t++){const n=Bi[t],r=this.props[n];($i(r)||!1===r)&&(e[n]=r)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=Ac(t,{owner:this}),this.addValue(e,n)),n}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props,r="string"===typeof n||"object"===typeof n?null===(t=es(this.props,n))||void 0===t?void 0:t[e]:void 0;if(n&&void 0!==r)return r;const o=this.getBaseTargetFromProps(this.props,e);return void 0===o||sa(o)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:o}on(e,t){return this.events[e]||(this.events[e]=new Oc),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class gp extends mp{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}makeTargetAnimatableFromInstance(e,t,n){let{transition:r,transitionEnd:o,...i}=e,{transformValues:a}=t,s=function(e,t,n){const r={};for(const o in e){const e=Fc(o,t);if(void 0!==e)r[o]=e;else{const e=n.getValue(o);e&&(r[o]=e.get())}}return r}(i,r||{},this);if(a&&(o&&(o=a(o)),i&&(i=a(i)),s&&(s=a(s))),n){!function(e,t,n){var r,o;const i=Object.keys(t).filter((t=>!e.hasValue(t))),a=i.length;if(a)for(let s=0;s<a;s++){const a=i[s],l=t[a];let c=null;Array.isArray(l)&&(c=l[0]),null===c&&(c=null!==(o=null!==(r=n[a])&&void 0!==r?r:e.readValue(a))&&void 0!==o?o:t[a]),void 0!==c&&null!==c&&("string"===typeof c&&(jc(c)||xc(c))?c=parseFloat(c):!Dc(c)&&Al.test(l)&&(c=bc(a,l)),e.addValue(a,Ac(c,{owner:e})),void 0===n[a]&&(n[a]=c),null!==c&&e.setBaseTarget(a,c))}}(this,i,s);const e=sp(this,i,s,o);o=e.transitionEnd,i=e.target}return{transition:r,transitionEnd:o,...i}}}class yp extends gp{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(ia.has(t)){const e=vc(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),o=(da(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof o?o.trim():o}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Du(e,n)}build(e,t,n,r){Aa(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return Ja(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;sa(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}renderInstance(e,t,n,r){Ga(e,t,n,r)}}class vp extends gp{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ia.has(t)){const e=vc(t);return e&&e.default||0}return t=Ka.has(t)?t:Li(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return Za(e,t)}build(e,t,n,r){qa(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){Xa(e,t,0,r)}mount(e){this.isSVGTag=Wa(e.tagName),super.mount(e)}}const bp=(e,t)=>na(e)?new vp(t,{enableHardwareAcceleration:!1}):new yp(t,{enableHardwareAcceleration:!0}),xp={...Zc,...Ds,...Yd,...{layout:{ProjectionNode:Qd,MeasureLayout:Yu}}},wp=ea(((e,t)=>function(e,t,n,r){let{forwardMotionProps:o=!1}=t;return{...na(e)?hs:ms,preloadedFeatures:n,useRender:Ya(o),createVisualElement:r,Component:e}}(e,t,xp,bp)));function kp(){const e=(0,t.useRef)(!1);return Ii((()=>(e.current=!0,()=>{e.current=!1})),[]),e}class Sp extends t.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ep(e){let{children:n,isPresent:r}=e;const o=(0,t.useId)(),i=(0,t.useRef)(null),a=(0,t.useRef)({width:0,height:0,top:0,left:0});return(0,t.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:s}=a.current;if(r||!i.current||!e||!t)return;i.current.dataset.motionPopId=o;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${o}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${n}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}}),[r]),t.createElement(Sp,{isPresent:r,childRef:i,sizeRef:a},t.cloneElement(n,{ref:i}))}const Cp=e=>{let{children:n,initial:r,isPresent:o,onExitComplete:i,custom:a,presenceAffectsLayout:s,mode:l}=e;const c=ts(jp),u=(0,t.useId)(),d=(0,t.useMemo)((()=>({id:u,initial:r,isPresent:o,custom:a,onExitComplete:e=>{c.set(e,!0);for(const t of c.values())if(!t)return;i&&i()},register:e=>(c.set(e,!1),()=>c.delete(e))})),s?void 0:[o]);return(0,t.useMemo)((()=>{c.forEach(((e,t)=>c.set(t,!1)))}),[o]),t.useEffect((()=>{!o&&!c.size&&i&&i()}),[o]),"popLayout"===l&&(n=t.createElement(Ep,{isPresent:o},n)),t.createElement(Ai.Provider,{value:d},n)};function jp(){return new Map}const Tp=e=>e.key||"";const Pp=e=>{let{children:n,custom:r,initial:o=!0,onExitComplete:i,exitBeforeEnter:a,presenceAffectsLayout:s=!0,mode:l="sync"}=e;Us(!a,"Replace exitBeforeEnter with mode='wait'");const c=(0,t.useContext)(Gi).forceRender||function(){const e=kp(),[n,r]=(0,t.useState)(0),o=(0,t.useCallback)((()=>{e.current&&r(n+1)}),[n]);return[(0,t.useCallback)((()=>us.postRender(o)),[o]),n]}()[0],u=kp(),d=function(e){const n=[];return t.Children.forEach(e,(e=>{(0,t.isValidElement)(e)&&n.push(e)})),n}(n);let p=d;const f=(0,t.useRef)(new Map).current,h=(0,t.useRef)(p),m=(0,t.useRef)(new Map).current,g=(0,t.useRef)(!0);var y;if(Ii((()=>{g.current=!1,function(e,t){e.forEach((e=>{const n=Tp(e);t.set(n,e)}))}(d,m),h.current=p})),y=()=>{g.current=!0,m.clear(),f.clear()},(0,t.useEffect)((()=>()=>y()),[]),g.current)return t.createElement(t.Fragment,null,p.map((e=>t.createElement(Cp,{key:Tp(e),isPresent:!0,initial:!!o&&void 0,presenceAffectsLayout:s,mode:l},e))));p=[...p];const v=h.current.map(Tp),b=d.map(Tp),x=v.length;for(let t=0;t<x;t++){const e=v[t];-1!==b.indexOf(e)||f.has(e)||f.set(e,void 0)}return"wait"===l&&f.size&&(p=[]),f.forEach(((e,n)=>{if(-1!==b.indexOf(n))return;const o=m.get(n);if(!o)return;const a=v.indexOf(n);let g=e;if(!g){const e=()=>{f.delete(n);const e=Array.from(m.keys()).filter((e=>!b.includes(e)));if(e.forEach((e=>m.delete(e))),h.current=d.filter((t=>{const r=Tp(t);return r===n||e.includes(r)})),!f.size){if(!1===u.current)return;c(),i&&i()}};g=t.createElement(Cp,{key:Tp(o),isPresent:!1,onExitComplete:e,custom:r,presenceAffectsLayout:s,mode:l},o),f.set(n,g)}p.splice(a,0,g)})),p=p.map((e=>{const n=e.key;return f.has(n)?e:t.createElement(Cp,{key:Tp(e),isPresent:!0,presenceAffectsLayout:s,mode:l},e)})),t.createElement(t.Fragment,null,f.size?p:p.map((e=>(0,t.cloneElement)(e))))};var Op=n(366);function _p(e,t){const n=Math.random()*(t-e+1)+e;return Number.isInteger(e)&&Number.isInteger(t)?Math.floor(n):n}function Rp(e,t,n){return(1-n)*e+n*t}function Ap(e){return e?{height:e.offsetHeight,width:e.offsetWidth}:{height:0,width:0}}const Mp=2*Math.PI,Ip={color:"#dee4fd",radius:[.5,3],speed:[1,3],wind:[-.5,2],changeFrequency:200,rotationSpeed:[-1,1],opacity:[1,1]};class zp{static createSnowflakes(e,t,n){if(!e)return[];const r=[];for(let o=0;o<t;o++)r.push(new zp(e,n));return r}constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.updateConfig(t);const{radius:n,wind:r,speed:o,rotationSpeed:i,opacity:a}=this.config;this.params={x:_p(0,e.offsetWidth),y:_p(-e.offsetHeight,0),rotation:_p(0,360),radius:_p(...n),speed:_p(...o),wind:_p(...r),rotationSpeed:_p(...i),nextSpeed:_p(...o),nextWind:_p(...r),nextRotationSpeed:_p(...i),opacity:_p(...a)},this.framesSinceLastUpdate=0}selectImage(){var e;this.config.images&&this.config.images.length>0?this.image=(e=this.config.images)[Math.floor(Math.random()*e.length)]:this.image=void 0}updateConfig(e){const t=this.config;this.config={...Ip,...e},this.config.changeFrequency=_p(this.config.changeFrequency,1.5*this.config.changeFrequency),this.params&&!Op(this.config.radius,null===t||void 0===t?void 0:t.radius)&&(this.params.radius=_p(...this.config.radius)),Op(this.config.images,null===t||void 0===t?void 0:t.images)||this.selectImage()}updateTargetParams(){this.params.nextSpeed=_p(...this.config.speed),this.params.nextWind=_p(...this.config.wind),this.image&&(this.params.nextRotationSpeed=_p(...this.config.rotationSpeed))}update(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const{x:r,y:o,rotation:i,rotationSpeed:a,nextRotationSpeed:s,wind:l,speed:c,nextWind:u,nextSpeed:d,radius:p}=this.params;this.params.x=(r+l*n)%(e+2*p),this.params.x>e+p&&(this.params.x=-p),this.params.y=(o+c*n)%(t+2*p),this.params.y>t+p&&(this.params.y=-p),this.image&&(this.params.rotation=(i+a)%360),this.params.speed=Rp(c,d,.01),this.params.wind=Rp(l,u,.01),this.params.rotationSpeed=Rp(a,s,.01),this.framesSinceLastUpdate++>this.config.changeFrequency&&(this.updateTargetParams(),this.framesSinceLastUpdate=0)}getImageOffscreenCanvas(e,t){var n,r;if(e instanceof HTMLImageElement&&e.loading)return e;let o=zp.offscreenCanvases.get(e);if(o||(o={},zp.offscreenCanvases.set(e,o)),!(t in o)){const r=document.createElement("canvas");r.width=t,r.height=t,null===(n=r.getContext("2d"))||void 0===n||n.drawImage(e,0,0,t,t),o[t]=r}return null!==(r=o[t])&&void 0!==r?r:e}drawCircle(e){e.moveTo(this.params.x,this.params.y),e.arc(this.params.x,this.params.y,this.params.radius,0,Mp)}drawImage(e){const{x:t,y:n,rotation:r,radius:o}=this.params,i=r*Math.PI/180,a=Math.cos(i),s=Math.sin(i);1!==this.params.opacity&&(e.save(),e.globalAlpha=this.params.opacity),e.setTransform(a,s,-s,a,t,n);const l=this.getImageOffscreenCanvas(this.image,o);e.drawImage(l,-o/2,-o/2,o,o),1!==this.params.opacity&&e.restore()}}zp.offscreenCanvases=new WeakMap;const Lp=zp,Dp={pointerEvents:"none",backgroundColor:"transparent",position:"absolute",top:0,left:0,width:"100%",height:"100%"},Np=1e3/60;var $p,Fp,Up=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)},Bp=function(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n};class Vp{get ctx(){return Up(this,$p,"f")}get canvas(){return Up(this,Fp,"f")}set canvas(e){Bp(this,Fp,e,"f"),Bp(this,$p,e.getContext("2d"),"f")}constructor(e,t){this.lastUpdate=Date.now(),this.snowflakes=[],$p.set(this,void 0),Fp.set(this,void 0),Bp(this,Fp,e,"f"),Bp(this,$p,e.getContext("2d"),"f"),this.config={snowflakeCount:150,...Ip,...t},this.snowflakes=[],this.snowflakes=Lp.createSnowflakes(e,t.snowflakeCount||150,t),this.play()}updateConfig(e){this.config={...this.config,...e};const t=this.config.snowflakeCount-this.snowflakes.length;t>0&&(this.snowflakes=[...this.snowflakes,...Lp.createSnowflakes(this.canvas,t,e)]),t<0&&(this.snowflakes=this.snowflakes.slice(0,this.config.snowflakeCount));for(const n of this.snowflakes)n.updateConfig(this.config)}render(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;const{ctx:t,canvas:n,snowflakes:r}=this;if(!t||!n)return;const{offsetWidth:o,offsetHeight:i}=n;for(const a of r)a.update(o,i,e);if(t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,o,i),this.config.images&&this.config.images.length>0)for(const a of r)a.drawImage(t);else{t.beginPath();for(const e of r)e.drawCircle(t);t.fillStyle=this.config.color,t.fill()}}loop(){const e=Date.now(),t=Date.now()-this.lastUpdate;this.lastUpdate=e;const n=t/Np;this.render(n),this.animationFrame=requestAnimationFrame((()=>this.loop()))}play(){this.loop()}pause(){this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0)}}$p=new WeakMap,Fp=new WeakMap;function qp(e){const[n,r]=(0,t.useState)(e);return function(e,n){const r=(0,t.useRef)(n);Op(n,r.current)||(r.current=n),(0,t.useEffect)(e,r.current)}((()=>r(e)),[e]),n}const Hp=function(){let{color:e=Ip.color,changeFrequency:n=Ip.changeFrequency,radius:r=Ip.radius,speed:o=Ip.speed,wind:i=Ip.wind,rotationSpeed:a=Ip.rotationSpeed,opacity:s=Ip.opacity,snowflakeCount:l=150,images:c,style:u}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const d=(p=u,(0,t.useMemo)((()=>({...Dp,...p||{}})),[p]));var p;const f=(0,t.useRef)(null),h=(e=>{const[n,r]=(0,t.useState)(Ap(e.current)),o=(0,t.useCallback)((()=>{e.current&&r(Ap(e.current))}),[e]);return(0,t.useEffect)((()=>{const{ResizeObserver:t}=window;if(e.current){if(o(),"function"===typeof t){const n=new t(o);return n.observe(e.current),()=>n.disconnect()}return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)}}),[e,o]),n})(f),m=qp({color:e,changeFrequency:n,radius:r,speed:o,wind:i,rotationSpeed:a,images:c,snowflakeCount:l,opacity:s}),g=(0,t.useRef)(m),y=(0,t.useRef)();return(0,t.useEffect)((()=>(!y.current&&f.current&&(y.current=new Vp(f.current,g.current)),()=>{var e;null===(e=y.current)||void 0===e||e.pause(),y.current=void 0})),[]),(0,t.useEffect)((()=>{y.current&&y.current.updateConfig(m)}),[m]),t.createElement("canvas",{ref:f,height:h.height,width:h.width,style:d,"data-testid":"SnowfallCanvas"})};let Wp=!1,Qp=!1;const Yp={"button-click":"https://cdn.pixabay.com/download/audio/2021/08/04/audio_bf3620f48d.mp3?filename=yay-6120.mp3","question-reveal":"https://cdn.pixabay.com/download/audio/2023/03/18/audio_fec1635076.mp3?filename=particles-143023.mp3","answer-reveal":"https://cdn.pixabay.com/download/audio/2023/03/18/audio_fec1635076.mp3?filename=particles-143023.mp3","ability-chatgpt":"https://cdn.pixabay.com/download/audio/2022/03/15/audio_a6c8d04aa5.mp3?filename=classcified-android-88675.mp3","ability-double":"https://cdn.pixabay.com/download/audio/2024/08/07/audio_42938daf19.mp3?filename=sweet-game-over-sound-effect-230470.mp3","ability-google":"https://cdn.pixabay.com/download/audio/2022/03/15/audio_e8b2fa25cf.mp3?filename=goodresult-82807.mp3","ability-dismiss":"https://cdn.pixabay.com/download/audio/2022/03/15/audio_e8b2fa25cf.mp3?filename=goodresult-82807.mp3","ability-electric":"https://cdn.pixabay.com/download/audio/2022/03/25/audio_1d3757234d.mp3?filename=electrical-shock-zap-106412.mp3","timer-tick":"https://cdn.pixabay.com/download/audio/2022/03/14/audio_3308d39191.mp3?filename=ticking-timer-65220.mp3",victory:"https://cdn.pixabay.com/download/audio/2024/08/07/audio_c11dea5bd4.mp3?filename=victorymale-version-230553.mp3","winner-celebration":"https://cdn.pixabay.com/download/audio/2022/03/10/audio_2564010374.mp3?filename=tadaa-47995.mp3","team-award":"https://cdn.pixabay.com/download/audio/2022/03/15/audio_e8b2fa25cf.mp3?filename=goodresult-82807.mp3","background-music":"https://cdn.pixabay.com/download/audio/2025/02/27/audio_9c5363b7af.mp3?filename=funny-cartoon-comedy-background-music-306997.mp3"},Gp={},Kp={},Xp={},Jp=new Audio(Yp["background-music"]);Jp.loop=!0,Jp.volume=.5;let Zp=!1;if("undefined"!==typeof window){const e=["click","touchstart","keydown"],t=()=>{Wp||(Wp=!0,console.log("User has interacted with the page, audio can now play"),Qp&&!Zp&&ef(),nf(),e.forEach((e=>{document.removeEventListener(e,t)})))};e.forEach((e=>{document.addEventListener(e,t)}))}function ef(){if(!Zp&&Wp)try{Jp.play().then((()=>{Zp=!0,console.log("Background music initialized successfully")})).catch((e=>{console.error("Error initializing background music:",e),setTimeout(ef,1e3)}))}catch(e){console.error("Exception initializing background music:",e)}}function tf(e){if(!(e in Yp))return console.error(`Sound URL not found for type: ${e}`),null;try{const t=new Audio(Yp[e]);return t.preload="auto",Xp[e]=!1,t.addEventListener("canplaythrough",(()=>{Xp[e]=!0,console.log(`Sound "${e}" loaded successfully`)})),t.load(),t}catch(t){return console.error(`Error creating audio element for ${e}:`,t),null}}function nf(){Qp||(Object.keys(Yp).forEach((e=>{if("background-music"!==e)try{const t="button-click"===e?5:["question-reveal","answer-reveal","team-award"].includes(e)?3:2;Kp[e]=[];for(let n=0;n<t;n++){const t=tf(e);t&&(["button-click","question-reveal","answer-reveal"].includes(e)&&t.load(),Kp[e].push(t))}}catch(t){console.error(`Error preloading ${e}:`,t)}})),Qp=!0,console.log("All sounds preloaded"))}["button-click","question-reveal","answer-reveal"].forEach((e=>{try{const t=tf(e);t&&(Kp[e]||(Kp[e]=[]),Kp[e].push(t))}catch(t){console.error(`Error preloading critical sound ${e}:`,t)}})),Wp&&nf();const rf=()=>{const e=(0,t.useRef)({}),[n,r]=(0,t.useState)(!1),{volume:o,musicEnabled:i,effectsEnabled:a}=v((e=>({volume:e.volume,musicEnabled:e.musicEnabled,effectsEnabled:e.effectsEnabled})));(0,t.useEffect)((()=>{try{const t=(()=>{const e={};return Object.keys(Yp).forEach((t=>{if("background-music"!==t)try{if(Kp[t]&&Kp[t].length>0)e[t]=Kp[t][0];else{const n=tf(t);n&&(e[t]=n)}}catch(n){console.error(`Error creating sound ${t} for sound map:`,n)}})),e})();e.current=t,Object.values(e.current).forEach((e=>{e&&(e.volume=o)})),e.current["background-music"]=Jp,r(!0),Wp&&i&&!Zp&&ef()}catch(t){console.error("Error initializing sounds:",t)}}),[]),(0,t.useEffect)((()=>{try{Jp.volume=o,Jp.muted=!i,Object.entries(e.current).forEach((e=>{let[t,n]=e;n&&(n.volume=o,n.muted="background-music"===t?!i:!a)})),Object.entries(Kp).forEach((e=>{let[t,n]=e;n.forEach((e=>{e&&(e.volume=o,e.muted="background-music"===t?!i:!a)}))}))}catch(t){console.error("Error updating sound settings:",t)}}),[o,i,a]),(0,t.useEffect)((()=>{try{i?Wp&&!Zp?ef():Wp&&Jp.paused&&Jp.play().catch((e=>{console.error("Error resuming background music:",e)})):Jp.pause()}catch(e){console.error("Error toggling music:",e)}}),[i]);return{playSound:(0,t.useCallback)((t=>{if(n&&Wp&&(a||"background-music"===t)&&(i||"background-music"!==t))if("background-music"!==t){if("question-reveal"!==t||!window.location.search.includes("noreveal"))try{let n=null;if(Kp[t]&&Kp[t].length>0&&(n=Kp[t].find((e=>e.paused||e.ended))||null,!n&&Kp[t][0]&&(n=Kp[t][0].cloneNode(!0))),!n){const r=e.current[t];if(!r)return;n=r.cloneNode(!0)}n&&(n.volume=o,n.muted="background-music"===t?!i:!a,n.play().catch((e=>{console.error(`Error playing sound ${t}:`,e)})),Gp[t]||(Gp[t]=[]),Gp[t].push(n),n.onended=()=>{var e;const r=null===(e=Gp[t])||void 0===e?void 0:e.indexOf(n);-1!==r&&Gp[t].splice(r,1)})}catch(r){console.error(`Error playing sound ${t}:`,r)}}else i&&Wp&&(Zp?Jp.paused&&Jp.play().catch((()=>{})):ef())}),[o,i,a,n])}};var of=n(579);const af=Ti(wp.div)`
  position: fixed;
  top: 402px;
  left: 487px;
  width: 898px;
  height: 148px;
  /* Redundant but included for clarity */
  bottom: 550px;
  right: 1385px;
  
  /* Remove transform as we're using absolute positioning */
  transform: none;
  
  /* Ensure dimensions are strictly enforced */
  min-width: 898px;
  max-width: 898px;
  min-height: 148px;
  max-height: 148px;
  
  /* Keep styling */
  background-color: #34495e;
  color: white;
  padding: 20px 30px;
  border-radius: 12px;
  z-index: 1000;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  border: 2px solid #2ecc71;
  margin: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  overflow: hidden;
  
  /* Display settings for content */
  display: flex;
  align-items: center;
  justify-content: center;
  
`,sf=function(e){const t=new CustomEvent("game-notification",{detail:{message:e,duration:arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e3}});window.dispatchEvent(t)},lf=()=>{const[e,n]=(0,t.useState)(null),[r,o]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e=e=>{const{message:t,duration:r}=e.detail;n(t),o(!0),setTimeout((()=>{o(!1)}),r)};return window.addEventListener("game-notification",e),()=>{window.removeEventListener("game-notification",e)}}),[]),(0,of.jsx)(Pp,{children:r&&e&&(0,of.jsx)(af,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.4},children:e})})};let cf=null;const uf=(e,t)=>{const n=new CustomEvent("google-search-timer",{detail:{isActive:e,teamName:t}});window.dispatchEvent(n),!e&&cf&&(clearTimeout(cf),cf=null)},df=()=>{const e=T(),n=v((e=>e)),r=v((e=>e.gamePhase)),{playSound:o}=rf(),i=(0,t.useCallback)((()=>{e(dn({teamIndex:0,abilityType:"electric",duration:2e5,skipAnimation:!0})),e(dn({teamIndex:1,abilityType:"electric",duration:2e5,skipAnimation:!0})),setTimeout((()=>{e(pn({teamIndex:0,abilityType:"electric"})),e(pn({teamIndex:1,abilityType:"electric"}))}),2e5)}),[e]),a=(0,t.useCallback)(((t,i)=>{const a=n.teams[t];if("electric"===i){if(!a||!a.abilities||!a.abilities[i])return sf("Ability not available"),!1;if(a.abilities[i].used)return sf("Electric shock already used this game"),!1;o(`ability-${i}`),e(un({teamIndex:t,abilityType:i}));const r=0===t?1:0,s=n.teams[r],l=Math.floor(201*Math.random())+300;console.log("Electric shock triggered!"),console.log("Opposing team:",r),console.log("Points reduction:",l),console.log("Current opposing team score:",s.score),console.log("Current multiplier:",s.pointsMultiplier);const c=s.pointsMultiplier;e(Cn({teamIndex:r,multiplier:1})),e(cn({teamIndex:r,points:-l})),c>1&&e(Cn({teamIndex:r,multiplier:c})),setTimeout((()=>{console.log("Score after electric shock:",n.teams[r].score),console.log("Multiplier after electric shock:",n.teams[r].pointsMultiplier)}),0),sf(`\u26a1 ${a.name} used Electric Shock! ${n.teams[r].name} lost ${l} points!`);const u=new CustomEvent("electricShock",{detail:{teamIndex:r}});return window.dispatchEvent(u),!0}if("question"!==r)return sf("Abilities can only be used during questions"),!1;if(!a||!a.abilities||a.abilities[i]&&a.abilities[i].used)return sf("Ability already used"),!1;switch(e(un({teamIndex:t,abilityType:i})),o(`ability-${i}`),i){case"chatgpt":if(n.currentQuestion&&n.currentQuestion.question){const e=n.currentQuestion.question.answer;sf(`\ud83e\udd16 ChatGPT hint: The answer starts with "${e.substring(0,3)}..."`)}break;case"double":e(Cn({teamIndex:t,multiplier:2})),sf(`2\ufe0f\u20e3 ${a.name} activated Double Points! Next correct answer will be worth double points!`);break;case"google":sf(`\ud83d\udd0d ${a.name} is using Google search!`),uf(!0,a.name),cf&&clearTimeout(cf),cf=window.setTimeout((()=>{sf("\u23f1\ufe0f Google search time is over!"),cf=null}),25e3);break;case"dismiss":if("question"!==r)return o("button-click"),sf("Block ability can only be used during a question!"),!1;if(a.abilities.dismiss.used)return o("button-click"),sf("Block ability already used!"),!1;e(un({teamIndex:t,abilityType:"dismiss"})),o("ability-dismiss");const i=0===t?1:0,s=n.teams[i];e({type:"game/blockTeamFromAnswering",payload:{teamIndex:i}}),sf(`\ud83d\udeab ${s.name} has been blocked from answering this question!`)}return!0}),[e,n,o]),s=(0,t.useCallback)((()=>{const t=0===(n.activeTeamIndex||0)?1:0;return o("button-click"),e(jn(t)),sf(`\ud83d\udd01 Switching to ${n.teams[t].name}'s turn`),!0}),[e,n,o]);return{activateAbility:a,useDirectAbility:(0,t.useCallback)(((t,r)=>{const i=n.teams[t];switch(o(`ability-${r}`),r){case"electric":const r=0===t?1:0,o=n.teams[r],a=Math.floor(201*Math.random())+300;e(cn({teamIndex:r,points:-a})),sf(`\u26a1 ${i.name} used Electric Shock! ${o.name} lost ${a} points!`);const s=new CustomEvent("electricShock",{detail:{teamIndex:r}});window.dispatchEvent(s);break;case"chatgpt":if(n.currentQuestion&&n.currentQuestion.question){const e=n.currentQuestion.question.answer;sf(`\ud83e\udd16 ChatGPT hint: The answer starts with "${e.substring(0,3)}..."`)}break;case"double":e(Cn({teamIndex:t,multiplier:2})),sf(`2\ufe0f\u20e3 ${i.name} activated Double Points! Next correct answer will be worth double points!`);break;case"google":sf(`\ud83d\udd0d ${i.name} is using Google search!`),uf(!0,i.name);break;case"dismiss":const l=0===t?1:0,c=n.teams[l];e({type:"game/blockTeamFromAnswering",payload:{teamIndex:l}}),sf(`\ud83d\udeab ${c.name} has been blocked from answering this question!`)}return!0}),[e,n,o]),initializeElectricCooldown:i,switchTeam:s}},pf=Ti.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
  overflow: hidden;
`,ff=Ti.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,hf=Ti.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  filter: blur(8px);
  background: rgba(0,0,0,0);
`,mf={team0:{x:0,y:0,width:0,height:0},team1:{x:0,y:0,width:0,height:0},avatars:{team0:{x:0,y:0,width:0,height:0},team1:{x:0,y:0,width:0,height:0}}},gf=(e,t)=>{mf[`team${e}`]=t};class yf{constructor(e,t,n){this.ang=void 0,this.x=void 0,this.y=void 0,this.num=void 0,this.points=void 0,this.drift=void 0,this.timer=void 0,this.timerRate=void 0,this.width=void 0,this.fadeRate=void 0,this.angVel=void 0,this.phase=void 0,this.phaseDiff=void 0,this.amp=void 0,this.hue=void 0,this.ang=t,this.x=e.x,this.y=e.y,this.num=12,this.points=[];for(let r=0;r<this.num;r++)this.points.push({x:this.x+r/(this.num-1)*600*Math.cos(this.ang),y:this.y+r/(this.num-1)*600*Math.sin(this.ang)});this.drift=.06*Math.random()-.03,this.timer=1,this.timerRate=.02,this.width=5,this.fadeRate=Math.random()*(.15-.05)+.05,this.angVel=.08,this.phase=0,this.phaseDiff=Math.random()*(2.2-1.8)+1.8,this.amp=30,this.hue=n}draw(e,t){e.lineWidth=1.5*this.width,e.strokeStyle=`hsl(${this.hue}, 100%, 60%)`,e.save(),e.beginPath(),e.moveTo(this.points[0].x,this.points[0].y);for(let n=1;n<this.num;n++)e.lineTo(this.points[n].x,this.points[n].y);e.stroke(),e.restore(),t.lineWidth=5*this.width,t.strokeStyle=`hsl(${this.hue}, 100%, 70%)`,t.save(),t.beginPath(),t.moveTo(this.points[0].x,this.points[0].y);for(let n=1;n<this.num;n++)t.lineTo(this.points[n].x,this.points[n].y);t.stroke(),t.beginPath(),t.arc(this.points[this.num-1].x,this.points[this.num-1].y,6*this.width+15*Math.random(),0,2*Math.PI),t.fillStyle=`hsl(${this.hue}, 100%, 70%)`,t.fill(),t.restore()}update(){this.ang+=this.drift,this.width-=this.fadeRate,this.timer-=this.timerRate,this.width<=0&&(this.ang=2*Math.random()*Math.PI,this.width=5,this.phaseDiff=Math.random()*(2.2-1.8)+1.8,this.fadeRate=Math.random()*(.15-.05)+.05,this.timerRate=.13*Math.random()+.02),this.timer<=0&&(this.phase=2*Math.random()*Math.PI,this.amp=20*Math.random()+15,this.angVel=Math.random()*(.12-.05)+.05,this.timer=1);const e=this.x,t=this.y;for(let n=0;n<this.num;n++){this.phase-=this.angVel;const r=n/(this.num-1)*600,o=e+r*Math.cos(this.ang),i=t+r*Math.sin(this.ang),a=this.ang+Math.PI/2,s=this.amp*(n-0)*(this.num-1-n)*.15*Math.sin(this.phase+n*this.phaseDiff);this.points[n]={x:o+s*Math.cos(a),y:i+s*Math.sin(a)}}}}const vf=e=>{let{active:n,fromTeam:r,toTeam:o,sourceTeamIndex:i=0,targetTeamIndex:a=1}=e;const s=(0,t.useRef)(null),l=(0,t.useRef)(null),c=(0,t.useRef)(),u=(0,t.useRef)([]),d=(0,t.useRef)(null),[p,f]=(0,t.useState)(210),[h,m]=(0,t.useState)({x:0,y:0});return(0,t.useEffect)((()=>{f(Math.floor(40*Math.random())+190)}),[]),(0,t.useEffect)((()=>{if(!n)return;const e=setInterval((()=>{Math.random()>.7&&(m({x:10*(Math.random()-.5),y:10*(Math.random()-.5)}),setTimeout((()=>{m({x:0,y:0})}),100))}),200);return()=>clearInterval(e)}),[n]),(0,t.useEffect)((()=>{if(!n)return void(c.current&&cancelAnimationFrame(c.current));const e=s.current,t=l.current;if(!e||!t)return;const r=e.getContext("2d"),o=t.getContext("2d");if(!r||!o)return;const i=()=>{e.width=window.innerWidth,e.height=window.innerHeight,t.width=window.innerWidth,t.height=window.innerHeight};i(),window.addEventListener("resize",i);const d=mf[`team${a}`];if(!d)return;u.current=[];for(let n=0;n<12;n++){let e=d.x,t=d.y;if(n<6){switch(Math.floor(n%4)){case 0:e=d.x+Math.random()*d.width,t=d.y;break;case 1:e=d.x+d.width,t=d.y+Math.random()*d.height;break;case 2:e=d.x+Math.random()*d.width,t=d.y+d.height;break;case 3:e=d.x,t=d.y+Math.random()*d.height}}else e=d.x+Math.random()*d.width,t=d.y+Math.random()*d.height;let r=2*Math.random()*Math.PI;if(n<6){const n=d.x+d.width/2,o=d.y+d.height/2;r=Math.atan2(o-t,n-e)}u.current.push(new yf({x:e,y:t},r,p))}const f=()=>{r.clearRect(0,0,e.width,e.height),o.clearRect(0,0,t.width,t.height),r.fillStyle=`hsla(${p}, 100%, 50%, 0.05)`,r.fillRect(d.x,d.y,d.width,d.height);const n=d.x+d.width/2,i=d.y+d.height/2,a=Math.min(d.width,d.height)/5;if(r.fillStyle="rgba(50,50,50,0.4)",r.strokeStyle=`hsl(${p}, 100%, 60%)`,r.lineWidth=5*Math.random()+5,r.beginPath(),r.arc(n,i,a,0,2*Math.PI),r.fill(),r.stroke(),r.fillStyle=`hsl(${p}, 100%, 70%)`,r.beginPath(),r.arc(n,i,a/2.5,0,2*Math.PI),r.fill(),o.strokeStyle=`hsl(${p}, 100%, 60%)`,o.lineWidth=3*r.lineWidth,o.beginPath(),o.arc(n,i,a,0,2*Math.PI),o.stroke(),o.fillStyle=`hsl(${p}, 100%, 70%)`,o.beginPath(),o.arc(n,i,a/2.5,0,2*Math.PI),o.fill(),o.strokeStyle=`hsla(${p}, 100%, 80%, 0.3)`,o.lineWidth=20,o.beginPath(),o.arc(n,i,1.5*a,0,2*Math.PI),o.stroke(),u.current.forEach((e=>{if(Math.random()>.15&&e.draw(r,o),e.update(),Math.random()<.08)if(Math.random()>.5){switch(Math.floor(4*Math.random())){case 0:e.x=d.x+Math.random()*d.width,e.y=d.y,e.ang=Math.PI/2;break;case 1:e.x=d.x+d.width,e.y=d.y+Math.random()*d.height,e.ang=Math.PI;break;case 2:e.x=d.x+Math.random()*d.width,e.y=d.y+d.height,e.ang=-Math.PI/2;break;case 3:e.x=d.x,e.y=d.y+Math.random()*d.height,e.ang=0}e.ang+=(Math.random()-.5)*Math.PI/2}else e.x=d.x+Math.random()*d.width,e.y=d.y+Math.random()*d.height,e.ang=2*Math.random()*Math.PI})),Math.random()<.4)for(let e=0;e<2;e++){const e=d.x+Math.random()*d.width,t=d.y+Math.random()*d.height,n=d.x+Math.random()*d.width,i=d.y+Math.random()*d.height;r.strokeStyle=`hsl(${p}, 100%, 60%)`,r.lineWidth=3,r.beginPath(),r.moveTo(e,t);const a=8;for(let o=1;o<a;o++){const s=o/a,l=e+s*(n-e)+50*(Math.random()-.5),c=t+s*(i-t)+50*(Math.random()-.5);r.lineTo(l,c)}r.lineTo(n,i),r.stroke(),o.strokeStyle=`hsl(${p}, 100%, 70%)`,o.lineWidth=10,o.beginPath(),o.moveTo(e,t);for(let r=1;r<a;r++){const s=r/a,l=e+s*(n-e)+50*(Math.random()-.5),c=t+s*(i-t)+50*(Math.random()-.5);o.lineTo(l,c)}o.lineTo(n,i),o.stroke()}Math.random()<.05&&(r.fillStyle=`hsla(${p}, 100%, 80%, ${.2*Math.random()+.1})`,r.fillRect(d.x,d.y,d.width,d.height),o.fillStyle=`hsla(${p}, 100%, 90%, ${.3*Math.random()+.1})`,o.fillRect(d.x,d.y,d.width,d.height)),c.current=requestAnimationFrame(f)};return f(),()=>{window.removeEventListener("resize",i),c.current&&cancelAnimationFrame(c.current)}}),[n,p,i,a]),n?(0,of.jsxs)(pf,{ref:d,style:{transform:`translate(${h.x}px, ${h.y}px)`},children:[(0,of.jsx)(ff,{ref:s}),(0,of.jsx)(hf,{ref:l})]}):null},bf=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=_o(Ei.apply(void 0,$n([e],t,!1))),o=lo(r);return new ui(o,r)})`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,xf=Ti.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
`,wf=Ti.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid #8c52ff;
  border-radius: 50%;
  animation: ${bf} 1.5s linear infinite;
`,kf=Ti(wf)`
  width: 85%;
  height: 85%;
  top: 7.5%;
  left: 7.5%;
  border-top-color: #ff9900;
  animation-duration: 2.5s;
  animation-direction: reverse;
`,Sf=e=>{let{active:t=!0,size:n=1}=e;return t?(0,of.jsxs)(xf,{style:{transform:`translate(-50%, -50%) scale(${n})`},children:[(0,of.jsx)(wf,{}),(0,of.jsx)(kf,{})]}):null};var Ef=n(809);const Cf=Ti(wp.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`,jf=Ti(wp.div)`
  background-color: var(--card-background, #fff);
  border-radius: 16px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: visible;
  max-height: 90vh;
  overflow-y: auto;
`,Tf=Ti.h2`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: var(--text-color);
`,Pf=Ti.div`
  background: linear-gradient(135deg, #333, #1a1a1a);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  border: 3px solid gold;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 215, 0, 0.5);
`,Of=Ti.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 40px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 10px;
  border: 2px solid #666;
`,_f=Ti.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  min-height: 60px;
  font-size: 40px;
`,Rf=Ti(wp.button)`
  background: linear-gradient(135deg, #ffcc00, #ff9900);
  color: #000;
  border: none;
  border-radius: 30px;
  padding: 12px 30px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  margin-top: 10px;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Af=Ti(wp.button)`
  background: linear-gradient(135deg, #0099cc, #66d4ff);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  margin-top: 10px;
`,Mf=Ti.div`
  font-size: 22px;
  margin-top: 20px;
  text-align: center;
  color: var(--text-color);
  font-weight: bold;
`,If=(Ti.div`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
  color: var(--text-color);
  opacity: 0.8;
`,e=>{let{isOpen:n,onClose:r,onAbilitySelected:o}=e;const[i,a]=(0,t.useState)(!1),[s,l]=(0,t.useState)(null),[c,u]=(0,t.useState)(["\u2753","\u2753","\u2753"]),{playSound:d}=rf(),p=new Ef.SlotSymbol("electric",{display:"\u26a1",points:10,weight:50}),f=new Ef.SlotSymbol("google",{display:"\ud83d\udd0d",points:10,weight:60}),h=new Ef.SlotSymbol("double",{display:"2\ufe0f\u20e3",points:10,weight:60}),m=new Ef.SlotSymbol("chatgpt",{display:"\ud83e\udd16",points:10,weight:60}),g=new Ef.SlotSymbol("dismiss",{display:"\u26d4",points:10,weight:60}),y=new Ef.SlotMachine(3,[p,f,h,m,g]);return(0,t.useEffect)((()=>{n&&(a(!1),l(null),u(["\u2753","\u2753","\u2753"]))}),[n]),(0,of.jsx)(Pp,{children:n&&(0,of.jsx)(Cf,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,of.jsxs)(jf,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:50,opacity:0},children:[(0,of.jsx)(Tf,{children:"Ability Slot Machine"}),(0,of.jsx)(Pf,{children:(0,of.jsx)(Of,{children:c.map(((e,t)=>(0,of.jsx)(_f,{children:e},t)))})}),s?(0,of.jsxs)(of.Fragment,{children:[(0,of.jsxs)(Mf,{children:["You got: ","electric"===s?"\u26a1 Electric Shock":"google"===s?"\ud83d\udd0d Google Search":"double"===s?"2\ufe0f\u20e3 Double Points":"dismiss"===s?"\u26d4 Block Team":"\ud83e\udd16 ChatGPT Hint"]}),(0,of.jsx)(Af,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{s&&o(s),r()},children:"Use Ability"})]}):(0,of.jsx)(Rf,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{if(i)return;a(!0),d("button-click");const e=setInterval((()=>{const e=["\u26a1","\ud83d\udd0d","2\ufe0f\u20e3","\ud83e\udd16","\u26d4"];u([e[Math.floor(Math.random()*e.length)],e[Math.floor(Math.random()*e.length)],e[Math.floor(Math.random()*e.length)]])}),100);d("ability-electric"),setTimeout((()=>{clearInterval(e);const t=y.play().lines[0].symbols[0].name;l(t);const n={electric:"\u26a1",google:"\ud83d\udd0d",double:"2\ufe0f\u20e3",chatgpt:"\ud83e\udd16",dismiss:"\u26d4"}[t];u([n,n,n]),d("ability-electric"),a(!1)}),2e3)},disabled:i,children:i?"Spinning...":"Spin!"})]})})})}),zf=Ti(wp.div)`
  display: flex;
  flex-direction: column;
  background-color: var(--card-background, rgba(255, 255, 255, 0.9));
  backdrop-filter: blur(8px);
  border-radius: var(--border-radius, 24px);
  padding: 50px;
  box-shadow: var(--card-shadow, 0 12px 25px rgba(0, 153, 204, 0.15));
  transition: all 0.3s ease;
  border: ${e=>e.isActive?"4px solid var(--primary-color, #0099cc)":"2px solid var(--secondary-color, rgba(102, 212, 255, 0.3))"};
  position: relative;
  overflow: hidden;
  min-width: px;
  flex: 1;
  
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 153, 204, 0.2);
  }
`,Lf=Ti.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: var(--primary-gradient, linear-gradient(90deg, #0099cc 0%, #66d4ff 100%));
`,Df=Ti.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 16px;
`,Nf=Ti.div`
  position: relative;
  font-size: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(102, 212, 255, 0.15);
  box-shadow: 0 4px 15px rgba(0, 153, 204, 0.1);
`,$f=Ti.div`
  display: flex;
  flex-direction: column;
`,Ff=Ti.h2`
  margin: 0;
  font-size: 45px;
  font-weight: 800;
  font-family: 'Arial', sans-serif;
  color: var(--text-color, white);
  margin-bottom: 10px;
  font-weight: 600;
`,Uf=Ti.div`
  font-size: 56px;
  font-weight: bold;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color, #0099cc);
  text-shadow: 0px 3px 4px rgba(0, 153, 204, 0.25);
`,Bf=Ti(wp.button)`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  padding: 0 10px;
  opacity: 0.7;
  transition: opacity 0.2s ease, transform 0.2s ease;
  color: #0099cc;
  
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`,Vf=Ti.div`
  margin-top: 16px;
`,qf=Ti.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
`,Hf=Ti(wp.button)`
  font-size: 18px;
  padding: 8px;
  border-radius: 8px;
  border: none;
  cursor: ${e=>e.isUsed?"not-allowed":"pointer"};
  opacity: ${e=>e.isUsed?.8:1};
  background-color: ${e=>e.isUsed?"#ff5252":e.isActive?"#66d4ff":e.isCooldown?"#ff9e80":"#0099cc"};
  color: ${e=>(e.isUsed,"white")};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: ${e=>e.isUsed?"none":"translateY(-2px)"};
    box-shadow: ${e=>e.isUsed?"0 4px 10px rgba(0, 0, 0, 0.1)":"0 6px 15px rgba(0, 0, 0, 0.15)"};
  }
`,Wf=(Ti.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${e=>e.cooldownProgress}%;
  background-color: rgba(0, 0, 0, 0.15);
  transition: height 1s linear;
`,Ti.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ti.div`
  padding: 8px 12px;
  background-color: ${e=>e.isDismissed?"rgba(241, 241, 241, 0.1)":"rgba(102, 212, 255, 0.15)"};
  border-radius: 8px;
  color: ${e=>e.isDismissed?"var(--text-color-secondary, #999)":"var(--text-color, white)"};
  text-decoration: ${e=>e.isDismissed?"line-through":"none"};
  font-weight: 500;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,{initial:{x:0},animate:{x:[-3,3,-2,2,-1,1,0],transition:{duration:.4}}}),Qf=e=>{let{team:n,teamIndex:r,isActive:o,isShocked:i}=e;const a=T(),{activateAbility:s,useDirectAbility:l}=df(),{playSound:c}=rf(),u=v((e=>e.gamePhase)),[d,p]=(v((e=>e.teams)),v((e=>{var t;return null===(t=e.currentQuestion)||void 0===t?void 0:t.question})),(0,t.useState)(!1)),[f,h]=(0,t.useState)(null),m=(0,t.useRef)(null),g=(0,t.useRef)(null);(0,t.useEffect)((()=>{if(m.current){const e=m.current.getBoundingClientRect();gf(r,{x:e.left,y:e.top,width:e.width,height:e.height})}if(g.current){const e=g.current.getBoundingClientRect();gf(r,{x:e.left,y:e.top,width:e.width,height:e.height})}const e=()=>{if(m.current){const e=m.current.getBoundingClientRect();gf(r,{x:e.left,y:e.top,width:e.width,height:e.height})}if(g.current){const e=g.current.getBoundingClientRect();gf(r,{x:e.left,y:e.top,width:e.width,height:e.height})}};return window.addEventListener("resize",e),window.addEventListener("scroll",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e)}}),[r]);const y=l,b=(0,t.useCallback)((e=>{"question"===u&&y(r,e)}),[u,r,y]),x=e=>{if("electric"===e)return p(!0),void c("button-click");c("button-click"),s(r,"double"!==e?e:"double")},w=e=>{a(cn({teamIndex:r,points:e}))};return n?(0,of.jsxs)(zf,{ref:m,isActive:o,isShocked:i,variants:Wf,animate:i?"animate":"initial",className:`team-panel ${o?"active":""} ${i?"shocked":""}`,style:{transform:o?"scale(1.05)":"scale(1)",boxShadow:o?"0 15px 30px rgba(0, 153, 204, 0.3)":"0 5px 15px rgba(0, 153, 204, 0.2)",transition:"all 0.3s ease"},children:[i&&(0,of.jsx)(vf,{active:!0}),o&&(0,of.jsx)(Lf,{}),(0,of.jsxs)(Df,{children:[(0,of.jsxs)(Nf,{ref:g,children:[n.avatar,(0,of.jsx)(Sf,{active:!0,size:1.2})]}),(0,of.jsxs)($f,{children:[(0,of.jsx)(Ff,{className:"team-name",children:n.name}),(0,of.jsxs)(Uf,{children:[(0,of.jsx)(Bf,{onClick:()=>w(-10),whileHover:{scale:1.2},whileTap:{scale:.9},children:"\u2796"}),n.score,(0,of.jsx)(Bf,{onClick:()=>w(10),whileHover:{scale:1.2},whileTap:{scale:.9},children:"\u2795"})]})]})]}),(0,of.jsx)(Vf,{children:(0,of.jsxs)(qf,{children:[(0,of.jsx)(Hf,{className:"ability-button",isUsed:n.abilities.chatgpt.used,disabled:"question"!==u||n.abilities.chatgpt.used,whileHover:n.abilities.chatgpt.used?{}:{scale:1.05},whileTap:n.abilities.chatgpt.used?{}:{scale:.95},onClick:()=>!n.abilities.chatgpt.used&&x("chatgpt"),children:"\ud83e\udd16"}),(0,of.jsx)(Hf,{className:"ability-button",isUsed:n.abilities.double.used,disabled:"question"!==u||n.abilities.double.used,whileHover:n.abilities.double.used?{}:{scale:1.05},whileTap:n.abilities.double.used?{}:{scale:.95},onClick:()=>!n.abilities.double.used&&x("double"),children:"2\ufe0f\u20e3"}),(0,of.jsx)(Hf,{className:"ability-button",isUsed:n.abilities.google.used,disabled:"question"!==u||n.abilities.google.used,whileHover:n.abilities.google.used?{}:{scale:1.05},whileTap:n.abilities.google.used?{}:{scale:.95},onClick:()=>!n.abilities.google.used&&x("google"),children:"\ud83d\udd0d"}),(0,of.jsx)(Hf,{className:"ability-button",isUsed:n.abilities.dismiss.used,disabled:"question"!==u||n.abilities.dismiss.used,whileHover:n.abilities.dismiss.used?{}:{scale:1.05},whileTap:n.abilities.dismiss.used?{}:{scale:.95},onClick:()=>!n.abilities.dismiss.used&&x("dismiss"),children:"\u26d4"}),(0,of.jsx)(Hf,{className:"ability-button",isUsed:null===f&&n.abilities.electric.used,disabled:null===f&&n.abilities.electric.used||null!==f&&"question"!==u,whileHover:null===f&&n.abilities.electric.used||"question"!==u?{}:{scale:1.05},whileTap:null===f&&n.abilities.electric.used||"question"!==u?{}:{scale:.95},onClick:()=>{n.abilities.electric.used?null!==f&&"question"===u&&f&&"question"===u&&(b(f),h(null)):x("electric")},style:{background:null===f&&n.abilities.electric.used?"rgba(241, 241, 241, 0.9)":"linear-gradient(135deg, #ff9900, #ffcc00)",color:null===f&&n.abilities.electric.used?"#999":"white"},children:null!==f?(()=>{switch(f){case"electric":return"\u26a1";case"google":return"\ud83d\udd0d";case"double":return"2\ufe0f\u20e3";case"chatgpt":return"\ud83e\udd16";case"dismiss":return"\u26d4";default:return"\ud83c\udfb0"}})():"\ud83c\udfb0"})]})}),(0,of.jsx)(If,{isOpen:d,onClose:()=>p(!1),onAbilitySelected:e=>{h(e),a(un({teamIndex:r,abilityType:"electric"}))}})]}):(0,of.jsx)("div",{children:"Loading team data..."})},Yf=e=>{let{text:t,className:n="",style:r={}}=e;return(0,of.jsx)("span",{className:n,style:r,children:t})},Gf=Ti.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
  margin: 0;
  padding: 0 16px;
  justify-content: flex-start;
  align-self: flex-start;
`,Kf=Ti.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 40px;
  width: 100%;
  
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Xf=Ti(wp.div)`
  background-color: var(--card-background, rgba(255, 255, 255, 0.9));
  backdrop-filter: blur(8px);
  border-radius: var(--border-radius, 12px);
  box-shadow: var(--card-shadow, 0 6px 20px rgba(0, 153, 204, 0.15));
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding-bottom: 12px;
  border: var(--card-border, 2px solid rgba(102, 212, 255, 0.3));
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 153, 204, 0.25);
  }
`,Jf=Ti.div`
  background: linear-gradient(135deg, #0099cc 0%, #66d4ff 100%);
  color: white;
  padding: 16px 8px;
  text-align: center;
  width: 100%;
  font-weight: 600;
  font-size: 35px;
  font-weight: bold;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
`,Zf=Ti.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,eh=Ti.div`
  font-size: 36px;
  margin: 15px 0;
`,th=Ti.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  margin-top: 10px;
  padding: 0 10px 10px 10px;
  
`,nh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},rh={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.4}}},oh=Ti.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  border: 3px solid rgba(0, 153, 204, 0.3);
  border-radius: 12px;
  padding: 12px 20px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  box-shadow: 0 6px 20px rgba(0, 153, 204, 0.15);
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  color: #0f5e87;
`,ih=Ti(wp.button)`
  background: linear-gradient(135deg, #0099cc 0%, #66d4ff 100%);
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 153, 204, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 153, 204, 0.3);
  }
  
  &:active {
    transform: translateY(1px);
  }
`,ah=Ti(wp.div)`
  background: ${e=>e.answered?"rgba(241, 241, 241, 0.9)":"linear-gradient(135deg, #0099cc 0%, #66d4ff 100%)"};
  color: ${e=>e.answered?"#999":"white"};
  border-radius: 8px;
  padding: 14px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 800;
  cursor: ${e=>e.answered?"default":"pointer"};
  transition: all 0.2s ease;
  min-height: 50px;
  box-shadow: ${e=>e.answered?"none":"0 4px 8px rgba(0, 153, 204, 0.15)"};
  
  &:hover {
    transform: ${e=>e.answered?"none":"translateY(-5px)"};
    box-shadow: ${e=>e.answered?"none":"0 8px 16px rgba(0, 153, 204, 0.3)"};
  }
`,sh=()=>{var e;const n=T(),{categories:r,selectedCategories:o,teams:i,activeTeamIndex:a}=v((e=>({categories:e.categories,selectedCategories:e.selectedCategories,teams:e.teams,activeTeamIndex:e.activeTeamIndex||0}))),{playSound:s}=rf(),{switchTeam:l}=df(),c=r.filter((e=>o.includes(e.id))),u=5*c.length,d=c.reduce(((e,t)=>e+t.questions.filter((e=>e.answered)).length),0),p=u>0?d/u*100:0;(0,t.useEffect)((()=>{const e=()=>{setTimeout((()=>{o.length>0&&c.every((e=>e.questions.every((e=>e.answered))))&&(s("winner-celebration"),n(fn("end")))}),100)};return window.addEventListener("returnToBoard",e),100===p&&setTimeout((()=>{s("winner-celebration"),n(fn("end"))}),300),()=>{window.removeEventListener("returnToBoard",e)}}),[c,o]);const f=e=>{const t={};e.questions.forEach(((e,n)=>{t[e.value]||(t[e.value]=[]),t[e.value].push({question:e,index:n})}));return[[100,200],[300,400],[500]].flatMap((o=>o.map((o=>{const i=t[o];if(!i||0===i.length)return(0,of.jsx)(h,{children:o},`${e.id}-${o}`);const a=i.every((e=>e.question.answered));return(0,of.jsx)(ah,{categoryId:e.id,questionIndex:-1,question:i[0].question,answered:a,onClick:()=>{if(!a){const t=i.filter((e=>!e.question.answered));if(t.length>0){const o=t[Math.floor(Math.random()*t.length)];((e,t)=>{const o=r.find((t=>t.id===e));if(o&&t>=0&&t<o.questions.length){const r=o.questions[t];if(r.answered)return;s("question-reveal"),n({type:"game/selectQuestion",payload:{categoryId:e,questionIndex:t,question:r}})}})(e.id,o.index)}}},className:"question-card","data-answered":a,children:o},`${e.id}-${o}`)}))))},h=Ti.div`
    background-color: #f1f1f1;
    color: #aaa;
    border-radius: 8px;
    padding: 14px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 700;
  `;return(0,of.jsxs)(Gf,{as:wp.div,variants:nh,initial:"hidden",animate:"visible",children:[(0,of.jsxs)(oh,{children:["Current Team Turn: ",(null===(e=i[a])||void 0===e?void 0:e.name)||`Team ${a+1}`,(0,of.jsx)(ih,{onClick:l,whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"Switch team turn",children:"\u0628\u062f\u0644 \u0627\u0644\u062f\u0648\u0631"})]}),(0,of.jsx)(Kf,{children:c.map((e=>(0,of.jsxs)(Xf,{variants:rh,children:[(0,of.jsx)(Jf,{className:"category-header",children:(0,of.jsx)(Zf,{className:"category-name",children:(0,of.jsx)(Yf,{text:e.name})})}),(0,of.jsx)(eh,{children:e.icon}),(0,of.jsx)(th,{children:f(e)})]},e.id)))})]})},lh=Ti.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(140, 82, 255, 0.15);
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`,ch=Ti(wp.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #8c52ff 0%, #5e17eb 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  font-weight: bold;
  z-index: 10;
`,uh=Ti.div`
  font-size: 24px;
  color: #666;
  margin-bottom: 32px;
  text-align: center;
  width: 100%;
  background-color: #f8f5ff;
  padding: 24px;
  border-radius: 16px;
  border-left: 5px solid #8c52ff;
`,dh=Ti(wp.div)`
  font-size: 80px;
  font-weight: 1000;
  color: #2c3e50;
  margin: 32px 0;
  text-align: center;
  padding: 24px;
  border-radius: 16px;
  background-color: #f0ebff;
  width: 100%;
  box-shadow: 0 4px 12px rgba(140, 82, 255, 0.1);
  border-left: 5px solid #8c52ff;
`,ph=Ti.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 16px;
  width: 100%;
  margin-top: 40px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
`,fh=Ti(wp.button)`
  padding: 24px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-height: 160px;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    min-height: 120px;
  }
`,hh=Ti(fh)`
  background: linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%);
`,mh=Ti(fh)`
  background: linear-gradient(135deg, #ff9966 0%, #ff5e62 100%);
`,gh=Ti.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  font-weight: 600;
  font-size: 18px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    width: 2px;
    height: 40px;
    background-color: #ddd;
    margin: 8px 0;
  }
  
  @media (max-width: 768px) {
    margin: 8px 0;
    
    &::before,
    &::after {
      display: none;
    }
  }
`,yh=Ti(wp.button)`
  background: linear-gradient(135deg, #8c52ff 0%, #5e17eb 100%);
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 24px;
  box-shadow: 0 4px 12px rgba(140, 82, 255, 0.3);
  
  &:hover {
    box-shadow: 0 6px 16px rgba(140, 82, 255, 0.4);
  }
`,vh=Ti.span`
  font-size: 32px;
`,bh=Ti.span`
  font-size: 20px;
  text-align: center;
`,xh=Ti.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 18px;
`,wh=()=>{const e=T(),[n,r]=(0,t.useState)(!0),{currentQuestion:o,teams:i,activeTeamIndex:a}=v((e=>({currentQuestion:e.currentQuestion,teams:e.teams,activeTeamIndex:e.activeTeamIndex||0}))),{playSound:s}=rf();if((0,t.useEffect)((()=>{const e=setTimeout((()=>{r(!1)}),2e3);return()=>clearTimeout(e)}),[]),(0,t.useEffect)((()=>{console.log("AnswerReveal mounted, current active team:",a)}),[]),!o)return(0,of.jsx)("div",{children:"No question selected"});const{question:l}=o,c=t=>{s("team-award"),e(cn({teamIndex:t,points:l.value})),console.log(`Awarding points to team ${t}, active team remains: ${a}`),e(En({markAsAnswered:!0}))};return(0,of.jsxs)(lh,{children:[n&&(0,of.jsx)(ch,{initial:{opacity:1},animate:{opacity:[1,.8,1,.8,1],scale:[1,1.05,1,1.05,1]},transition:{duration:2,times:[0,.25,.5,.75,1]},children:"\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0625\u062c\u0627\u0628\u0629..."}),(0,of.jsx)(uh,{children:(0,of.jsx)(Yf,{text:l.question})}),(0,of.jsx)(dh,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3,duration:.6},children:(0,of.jsx)(Yf,{text:l.answer})}),(0,of.jsxs)(ph,{children:[(0,of.jsxs)(hh,{onClick:()=>c(0),whileHover:{scale:1.03},whileTap:{scale:.97},children:[(0,of.jsx)(vh,{children:"\ud83c\udfc6"}),(0,of.jsx)(bh,{children:i[0].name}),(0,of.jsxs)(xh,{children:["+",l.value," points"]})]}),(0,of.jsx)(gh,{children:"\u0623\u0648"}),(0,of.jsxs)(mh,{onClick:()=>c(1),whileHover:{scale:1.03},whileTap:{scale:.97},children:[(0,of.jsx)(vh,{children:"\ud83c\udfc6"}),(0,of.jsx)(bh,{children:i[1].name}),(0,of.jsxs)(xh,{children:["+",l.value," points"]})]})]}),(0,of.jsx)(yh,{onClick:()=>{s("button-click"),e(En({markAsAnswered:!0}))},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\ud83d\udeab \u0644\u0627 \u062a\u0648\u062c\u062f \u0646\u0642\u0627\u0637 - \u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0648\u062d\u0629 \u0627\u0644\u0644\u0639\u0628\u0629"})]})},kh=Ei`
  background: var(--card-background, white);
  border-radius: var(--border-radius, 16px);
  box-shadow: var(--card-shadow, 0 10px 25px rgba(0, 0, 0, 0.1));
`,Sh=Ti(wp.div)`
  display: flex;
  flex-direction: column;
  ${kh}
  width: 100%;
  max-width: 1000px;
  
  margin: 0 auto;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid var(--border-color, rgba(0, 0, 0, 0.1));
`,Eh=Ti.div`
  width: 100%;
  background: var(--primary-gradient, linear-gradient(135deg, var(--primary-color), var(--primary-dark)));
  color: white;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
`,Ch=(Ti.div`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
  backdrop-filter: blur(4px);
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`,Ti.div`
  font-weight: 700;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    font-family: var(--header-font);
  }
  
  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`),jh=Ti.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "question"
    "media"
    "timer"
    "buttons";
  gap: 1.5rem;
  padding: 1.75rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    gap: 1.25rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1rem;
  }
`,Th=Ti(wp.div)`
  grid-area: question;
  display: flex;
  justify-content: center;
  width: 100%;
`,Ph=Ti.div`
  font-size: 3rem;
  line-height: 1.4;
  text-align: center;
  color: var(--text-color);
  font-weight: 600;
  padding: 1rem;
  border-radius: var(--border-radius);
  background: var(--card-background);
  box-shadow: var(--card-shadow, 0 4px 20px rgba(0, 0, 0, 0.06));
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    padding: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0.75rem;
  }
`,Oh=Ti.div`
  display: flex;
  flex-direction: column;
  grid-area: timer;
  border-radius: var(--border-radius);
  padding: 1.25rem;
  background: var(--card-background);
  box-shadow: var(--card-shadow, 0 4px 20px rgba(0, 0, 0, 0.06));
`,_h=(Ti.div`
  width: 100%;
`,Ti.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`),Rh=Ti.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,Ah=Ti.div`
  color: ${e=>e.$isTimeUp?"var(--danger-color)":"var(--text-color)"};
  font-weight: 700;
  font-size: 1.25rem;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`,Mh=Ti.div`
  width: 100%;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
`,Ih=Ti.div`
  height: 100%;
  width: ${e=>e.$percent}%;
  background: ${e=>e.$isTimeUp?"var(--danger-color)":"var(--primary-color)"};
  border-radius: 6px;
  transition: width 0.3s linear;
`,zh=Ti.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Lh=Ti.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background: rgba(var(--primary-color-rgb, 58, 134, 255), 0.1);
`,Dh=Ti.div`
  display: flex;
  gap: 0.5rem;
`,Nh=Ti.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  grid-area: buttons;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,$h=Ti(wp.button)`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(var(--primary-color-rgb, 58, 134, 255), 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 6px 20px rgba(var(--primary-color-rgb, 58, 134, 255), 0.4);
  }
  
  &:disabled {
    background: #d1d1d1;
    cursor: not-allowed;
    box-shadow: none;
  }
`,Fh=Ti($h)`
  background: var(--secondary-color);
  box-shadow: 0 4px 15px rgba(var(--secondary-color-rgb, 131, 56, 236), 0.3);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(var(--secondary-color-rgb, 131, 56, 236), 0.4);
  }
`,Uh=Ti(wp.div)`
  grid-area: media;
  border-radius: var(--border-radius);
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Bh=Ti.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--card-shadow, 0 8px 30px rgba(0, 0, 0, 0.1));
`,Vh=Ti.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--border-radius);
`,qh=Ti.div`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: var(--border-radius);
`,Hh=Ti(wp.button)`
  background-color: var(--card-background);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  color: var(--text-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: rgba(var(--primary-color-rgb, 58, 134, 255), 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Wh=(Ti.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 1.1em;
  margin: 0 2px;
`,Ti(wp.button)`
  background-color: var(--primary-color, #3498db);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 20px auto;
  display: block;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`),Qh=Ti.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Yh=Ti(wp.button)`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
  }
`,Gh=()=>{var e,n,r;const o=T(),{playSound:i}=rf(),[a,s]=(0,t.useState)(null),[l,c]=(0,t.useState)(!1),[u,d]=(0,t.useState)(!1),[p,f]=((0,t.useRef)(null),(0,t.useState)(null)),{switchTeam:h}=((0,t.useRef)(null),df()),[m,g]=(0,t.useState)(!0),[y,b]=(0,t.useState)(!0),x=(0,t.useRef)(null),{currentQuestion:w,timer:k,teams:S,activeTeamIndex:E,answerRevealed:C,gamePhase:j}=v((e=>({currentQuestion:e.currentQuestion,timer:e.timer,teams:e.teams,activeTeamIndex:e.activeTeamIndex||0,answerRevealed:e.answerRevealed,gamePhase:e.gamePhase})));(0,t.useEffect)((()=>{if(x.current){const e=x.current.getBoundingClientRect(),t=window.scrollY+e.top-10;window.scrollTo({top:t,behavior:"smooth"})}}),[]),(0,t.useEffect)((()=>{null===a&&s(E)}),[E,a]),(0,t.useEffect)((()=>{if(null!==a){o(bn()),o(yn(60));const e=setInterval((()=>{o(xn())}),1e3);return()=>{clearInterval(e),o(vn())}}}),[o,a]),(0,t.useEffect)((()=>{if(k.remaining<=0&&!1===k.isRunning&&null!==a&&!u){const e=0===a?1:0;l?(d(!0),o(Tn(!0))):(s(e),c(!0))}}),[k.remaining,k.isRunning,a,u,l,o]);const P=(0,t.useCallback)((()=>{}),[]);if((0,t.useEffect)((()=>{w||o(En({markAsAnswered:!1}))}),[w,o]),(0,t.useEffect)((()=>{var e;let t=null;return null!==w&&void 0!==w&&null!==(e=w.question)&&void 0!==e&&e.audio?(t=new Audio(w.question.audio),f(t),t.addEventListener("ended",P),()=>{t&&(t.pause(),t.src="",t.removeEventListener("ended",P))}):()=>{p&&(p.pause(),p.src="")}}),[null===w||void 0===w||null===(e=w.question)||void 0===e?void 0:e.audio,P]),(0,t.useEffect)((()=>{p&&w&&(p.volume=.5)}),[p,w]),(0,t.useEffect)((()=>{const e=()=>{o(gn(0))},t=()=>{o(gn(1))},n=document.querySelectorAll("audio, video");return n.forEach((n=>{n.addEventListener("play",e),n.addEventListener("pause",t),n.addEventListener("ended",t)})),()=>{n.forEach((n=>{n.removeEventListener("play",e),n.removeEventListener("pause",t),n.removeEventListener("ended",t)}))}}),[o,w]),(0,t.useEffect)((()=>{var e;null!==w&&void 0!==w&&null!==(e=w.question)&&void 0!==e&&e.hideQuestion?g(!0):g(!1)}),[w]),(0,t.useEffect)((()=>{b(!0)}),[w]),C&&w)return(0,of.jsx)(wh,{});if(!w)return null;const{categoryId:O,questionIndex:_,question:R}=w,A=k.remaining/k.duration*100;null!==a&&S[a];function M(e){const t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?t[2]:""}const I=()=>{b(!1),i("button-click")};return(0,of.jsx)(Pp,{children:(0,of.jsxs)(Sh,{ref:x,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3,ease:"easeOut"},children:[(0,of.jsx)(Eh,{children:(0,of.jsxs)(Ch,{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"40px",fontWeight:"bold",margin:"0 auto"},children:[(0,of.jsx)("span",{children:R.value})," points"]})}),(0,of.jsxs)(jh,{children:[(0,of.jsx)(Th,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:.1,duration:.3},children:null!==w&&void 0!==w&&null!==(n=w.question)&&void 0!==n&&n.hideQuestion&&m?(0,of.jsx)(Wh,{onClick:()=>{g(!1)},whileHover:{scale:1.02},whileTap:{scale:.98},children:"\ud83d\udd0d Reveal Question"}):(0,of.jsx)(Ph,{children:(0,of.jsx)(Yf,{text:R.question})})}),(()=>{return R.image||R.video||R.audio?(0,of.jsx)(Uh,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.3,duration:.4},children:(0,of.jsxs)(Bh,{children:[R.image&&(0,of.jsxs)(Qh,{children:[(0,of.jsx)(Vh,{src:R.image,alt:"Question illustration",style:{filter:R.imageBlur&&y?`blur(${R.imageBlur}px)`:"none"},onError:e=>{e.currentTarget.style.display="none"}}),R.imageBlur&&y&&(0,of.jsx)(Yh,{onClick:I,whileHover:{scale:1.05},whileTap:{scale:.95},children:"\ud83d\udd0d Unblur Image"})]}),R.video&&(0,of.jsx)("iframe",{width:"100%",height:"400",src:(e=R.video,e.includes("youtube.com")||e.includes("youtu.be")?`https://www.youtube.com/embed/${M(R.video)}?autoplay=1&enablejsapi=1`:R.video),title:"Video content",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),R.audio&&(0,of.jsx)(qh,{children:(0,of.jsxs)("audio",{controls:!0,preload:"none",style:{width:"100%"},onError:e=>{e.currentTarget.style.display="none"},children:[(0,of.jsx)("source",{src:R.audio}),"Your browser does not support the audio element."]})})]})}):null;var e})(),(0,of.jsxs)(Oh,{children:[(0,of.jsxs)(_h,{children:[(0,of.jsxs)(Rh,{children:[(0,of.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,of.jsx)("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,of.jsx)("path",{d:"M12 6V12L16 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Time Remaining"]}),(0,of.jsx)(Ah,{$isTimeUp:k.remaining<=0,children:k.remaining>0?`${Math.floor(k.remaining/60)}:${(k.remaining%60).toString().padStart(2,"0")}`:"0:00"})]}),(0,of.jsx)(Mh,{children:(0,of.jsx)(Ih,{$percent:A,$isTimeUp:k.remaining<=0})}),(0,of.jsxs)(zh,{children:[(0,of.jsx)(Lh,{children:u||null===a?(0,of.jsx)(of.Fragment,{children:"Time expired"}):(0,of.jsxs)(of.Fragment,{children:["Team: ",null===(r=S[a])||void 0===r?void 0:r.name]})}),(0,of.jsxs)(Dh,{children:[(0,of.jsx)(Hh,{onClick:()=>{i("button-click"),k.isRunning?o(vn()):k.remaining>0&&o(yn(k.remaining))},whileHover:{scale:1.1},whileTap:{scale:.9},disabled:k.remaining<=0||u,"aria-label":k.isRunning?"Pause timer":"Resume timer",children:k.isRunning?(0,of.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,of.jsx)("path",{d:"M10 4H6V20H10V4Z",fill:"currentColor"}),(0,of.jsx)("path",{d:"M18 4H14V20H18V4Z",fill:"currentColor"})]}):(0,of.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,of.jsx)("path",{d:"M6 4L18 12L6 20V4Z",fill:"currentColor"})})}),(0,of.jsx)(Hh,{onClick:()=>{if(i("button-click"),!u)if(l||null===a)d(!0),o(Tn(!0)),o(vn());else{s(0===a?1:0),c(!0),o(bn())}},whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"Skip timer",children:(0,of.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,of.jsx)("path",{d:"M13 5L21 12L13 19V5Z",fill:"currentColor"}),(0,of.jsx)("path",{d:"M3 5L11 12L3 19V5Z",fill:"currentColor"})]})}),(0,of.jsx)(Hh,{onClick:()=>{i("button-click"),s(E),c(!1),d(!1),o(bn()),o(yn(60)),o(Tn(!1))},whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"Restart timer",children:(0,of.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,of.jsx)("path",{d:"M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C9.26349 20 6.85738 18.6778 5.42035 16.5698",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,of.jsx)("path",{d:"M8 4L4 8L8 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})]})]}),(0,of.jsxs)(Nh,{children:[(0,of.jsx)(Fh,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>{i("answer-reveal"),o(jn(0===E?1:0)),o(fn("answer")),o(Sn()),o(vn()),uf(!1,"")},children:"\ud83d\udd0d \u0643\u0634\u0641 \u0627\u0644\u0625\u062c\u0627\u0628\u0629"}),(0,of.jsx)($h,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>{i("button-click"),o(En({markAsAnswered:!1})),uf(!1,"")},children:"\ud83c\udfe0 \u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0648\u062d\u0629"})]})]})]})})},Kh=Ti.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1;
`,Xh=Ti.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
`,Jh=Ti.h2`
  color: var(--text-color, white);
  font-size: 24px;
  font-weight: 700;
  position: relative;
  margin-right: 16px;
`,Zh=Ti.div`
  margin-bottom: 16px;
  font-size: 18px;
  color: var(--text-color, white);
  text-align: center;
  position: relative;
  z-index: 1;
`,em=Ti.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  width: 100%;
  position: relative;
  z-index: 1;
`,tm=document.createElement("style");tm.type="text/css",tm.appendChild(document.createTextNode("\n  @keyframes bounceAnimation {\n    0%, 100% { transform: translateY(0); }\n    50% { transform: translateY(-15px); }\n  }\n")),document.head.appendChild(tm);const nm=Ti.span`
  font-size: 36px;
  margin-bottom: 8px;
  display: block;
  transition: all 0.3s ease;
  animation: ${e=>e.$selected?"bounceAnimation 1.5s infinite ease-in-out":"none"};
  transform-origin: center;
  
  ${e=>!e.$selected&&"\n    &:hover {\n      transform: scale(1.2);\n    }\n  "}
`,rm=Ti.div`
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  min-height: 40px;
  color: currentColor;
`,om=Ti(wp.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.selected?"var(--primary-color, #0099cc)":"#333"};
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  color: white;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    background-color: ${e=>e.selected?"var(--primary-color, #0099cc)":"#444"};
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom right, 
      rgba(255, 255, 255, 0.05), 
      transparent
    );
    pointer-events: none;
  }

  /* Add NES.css styling for retro theme */
  [data-theme="retro"] & {
    image-rendering: pixelated;
    background-color: #000;
    color: #fff;
    border-radius: 0;
    border: 4px solid ${e=>e.selected?"#92cc41":"#209cee"};
    box-shadow: 0 4px 0 ${e=>e.selected?"#4aa52e":"#006bb3"};
    padding: 8px;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 3px 0 ${e=>e.selected?"#4aa52e":"#006bb3"};
    }
    
    &:active {
      transform: translateY(2px);
      box-shadow: 0 0 0 ${e=>e.selected?"#4aa52e":"#006bb3"};
    }
  }
`,im=Ti.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 1000;
  gap: 15px;
`,am=Ti.button`
  background: linear-gradient(135deg, #ff6464 0%, #ff5252 100%);
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 82, 82, 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 82, 82, 0.4);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  /* Add NES.css styling for retro theme */
  [data-theme="retro"] & {
    background: #e76e55;
    image-rendering: pixelated;
    border-radius: 0;
    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
    padding: 6px 8px;
    margin: 4px;
    font-weight: normal;
    box-shadow: 0 4px 0 #c3533e;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 0 #c3533e;
    }
    
    &:active {
      transform: translateY(4px);
      box-shadow: 0 0 0 #c3533e;
    }
  }
`,sm=Ti.div`
  text-align: center;
  color: #666;
  font-size: 18px;
  padding: 20px;
  
  [data-theme="retro"] & {
    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
    color: #fff;
    padding: 10px;
  }
`,lm=()=>{const e=T(),n=v((e=>e.categories||[])),r=v((e=>e.selectedCategories||[])),{playSound:o}=rf();(0,t.useEffect)((()=>{console.log("Redux categories state:",n),console.log("Selected categories:",r)}),[n,r]);return(0,of.jsxs)(Kh,{children:[(0,of.jsx)(Xh,{children:(0,of.jsx)(Jh,{className:"halloween-drip",children:"\ud83d\udcda \u0627\u062e\u062a\u0631 \u0627\u0644\u0641\u0626\u0627\u062a (\u0661-\u0668)"})}),(0,of.jsxs)(Zh,{children:["\u0627\u062e\u062a\u0631 \u0627\u0644\u0641\u0626\u0627\u062a: ",r.length,"/8"]}),(0,of.jsx)(im,{children:(0,of.jsx)(am,{onClick:()=>{sf("This will reset the game state."),setTimeout((()=>{(()=>{try{localStorage.removeItem("frosty-trivia-state"),localStorage.removeItem("persist:frosty-trivia"),window.location.reload()}catch(e){console.error("Error clearing game state:",e)}})(),localStorage.clear(),window.location.reload()}),2e3)},children:"Emergency Reset"})}),(0,of.jsx)(em,{children:n&&n.length>0?n.map((t=>{const n=r.includes(t.id);return(0,of.jsxs)(om,{selected:n,onClick:()=>{return n=t.id,o("button-click"),console.log("Current selected categories:",r),console.log("Attempting to select/deselect category:",n),void(r.includes(n)?(e(kn(n)),console.log("Deselected category:",n)):r.length<8?(e(wn(n)),console.log("Selected category:",n)):console.warn("Cannot select more categories - max limit reached"));var n},whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[(0,of.jsx)(nm,{$selected:n,children:t.icon||"\ud83d\udcda"}),(0,of.jsx)(rm,{children:(0,of.jsx)(Yf,{text:t.name||"Unnamed Category"})}),n&&(0,of.jsx)(wp.div,{initial:{scale:0},animate:{scale:1},style:{position:"absolute",top:"5px",right:"5px",color:"#0099cc",fontSize:"20px"},children:"\u2713"})]},t.id)})):(0,of.jsx)(sm,{children:"No categories available. Please add some in Question Management."})})]})};function cm(e){if("string"!==typeof e||!e)throw new Error("expected a non-empty string, got: "+e)}function um(e){if("number"!==typeof e)throw new Error("expected a number, got: "+e)}const dm="emoji",pm="keyvalue",fm="favorites",hm="tokens",mm="count",gm="group-order",ym="eTag",vm="url",bm="skinTone",xm="readonly",wm="readwrite",km="skinUnicodes",Sm="https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",Em="en";function Cm(e){return function(e,t){const n=new Set,r=[];for(const o of e){const e=t(o);n.has(e)||(n.add(e),r.push(o))}return r}(e,(e=>e.unicode))}const jm={},Tm={},Pm={};function Om(e,t,n){n.onerror=()=>t(n.error),n.onblocked=()=>t(new Error("IDB blocked")),n.onsuccess=()=>e(n.result)}async function _m(e){const t=await new Promise(((t,n)=>{const r=indexedDB.open(e,1);jm[e]=r,r.onupgradeneeded=e=>{e.oldVersion<1&&function(e){function t(t,n,r){const o=n?e.createObjectStore(t,{keyPath:n}):e.createObjectStore(t);if(r)for(const[e,[i,a]]of Object.entries(r))o.createIndex(e,i,{multiEntry:a});return o}t(pm),t(dm,"unicode",{[hm]:["tokens",!0],[gm]:[["group","order"]],[km]:["skinUnicodes",!0]}),t(fm,void 0,{[mm]:[""]})}(r.result)},Om(t,n,r)}));return t.onclose=()=>Am(e),t}function Rm(e,t,n,r){return new Promise(((o,i)=>{const a=e.transaction(t,n,{durability:"relaxed"}),s="string"===typeof t?a.objectStore(t):t.map((e=>a.objectStore(e)));let l;r(s,a,(e=>{l=e})),a.oncomplete=()=>o(l),a.onerror=()=>i(a.error)}))}function Am(e){const t=jm[e],n=t&&t.result;if(n){n.close();const t=Pm[e];if(t)for(const e of t)e()}delete jm[e],delete Tm[e],delete Pm[e]}const Mm=new Set([":D","XD",":'D","O:)",":X",":P",";P","XP",":L",":Z",":j","8D","XO","8)",":B",":O",":S",":'o","Dx","X(","D:",":C",">0)",":3","</3","<3","\\M/",":E","8#"]);function Im(e){return e.split(/[\s_]+/).map((e=>!e.match(/\w/)||Mm.has(e)?e.toLowerCase():e.replace(/[)(:,]/g,"").replace(/\u2019/g,"'").toLowerCase())).filter(Boolean)}function zm(e){return e.filter(Boolean).map((e=>e.toLowerCase())).filter((e=>e.length>=2))}function Lm(e,t,n,r){e[t](n).onsuccess=e=>r&&r(e.target.result)}function Dm(e,t,n){Lm(e,"get",t,n)}function Nm(e,t,n){Lm(e,"getAll",t,n)}function $m(e){e.commit&&e.commit()}function Fm(e,t){const n=function(e,t){let n=e[0];for(let r=1;r<e.length;r++){const o=e[r];t(n)>t(o)&&(n=o)}return n}(e,(e=>e.length)),r=[];for(const o of n)e.some((e=>-1===e.findIndex((e=>t(e)===t(o)))))||r.push(o);return r}async function Um(e,t,n,r){try{const o=function(e){return e.map((e=>{let{annotation:t,emoticon:n,group:r,order:o,shortcodes:i,skins:a,tags:s,emoji:l,version:c}=e;const u={annotation:t,group:r,order:o,tags:s,tokens:[...new Set(zm([...(i||[]).map(Im).flat(),...(s||[]).map(Im).flat(),...Im(t),n]))].sort(),unicode:l,version:c};if(n&&(u.emoticon=n),i&&(u.shortcodes=i),a){u.skinTones=[],u.skinUnicodes=[],u.skinVersions=[];for(const{tone:e,emoji:t,version:n}of a)u.skinTones.push(e),u.skinUnicodes.push(t),u.skinVersions.push(n)}return u}))}(t);await Rm(e,[dm,pm],wm,((e,t)=>{let i,a,[s,l]=e,c=0;function u(){2===++c&&function(){if(i===r&&a===n)return;s.clear();for(const e of o)s.put(e);l.put(r,ym),l.put(n,vm),$m(t)}()}Dm(l,ym,(e=>{i=e,u()})),Dm(l,vm,(e=>{a=e,u()}))}))}finally{}}async function Bm(e,t){const n=zm(Im(t));return n.length?Rm(e,dm,xm,((e,t,r)=>{const o=[],i=()=>{const e=Fm(o,(e=>e.unicode));r(e.sort(((e,t)=>e.order<t.order?-1:1)))};for(let a=0;a<n.length;a++){const t=n[a],r=a===n.length-1?IDBKeyRange.bound(t,t+"\uffff",!1,!0):IDBKeyRange.only(t);Nm(e.index(hm),r,(e=>{o.push(e),o.length===n.length&&i()}))}})):[]}async function Vm(e,t){const n=await Bm(e,t);if(!n.length){const n=e=>(e.shortcodes||[]).includes(t.toLowerCase());return await async function(e,t){return Rm(e,dm,xm,((e,n,r)=>{let o;const i=()=>{e.getAll(o&&IDBKeyRange.lowerBound(o,!0),50).onsuccess=e=>{const n=e.target.result;for(const i of n)if(o=i.unicode,t(i))return r(i);if(n.length<50)return r();i()}};i()}))}(e,n)||null}return n.filter((e=>{const n=(e.shortcodes||[]).map((e=>e.toLowerCase()));return n.includes(t.toLowerCase())}))[0]||null}function qm(e,t,n){return Rm(e,t,xm,((e,t,r)=>Dm(e,n,r)))}const Hm=["name","url"];function Wm(e){!function(e){const t=e&&Array.isArray(e),n=t&&e.length&&(!e[0]||Hm.some((t=>!(t in e[0]))));if(!t||n)throw new Error("Custom emojis are in the wrong format")}(e);const t=(e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1,n=e.sort(t),r=function(e,t){const n=new Map;for(const r of e){const e=t(r);for(const t of e){let e=n;for(let n=0;n<t.length;n++){const r=t.charAt(n);let o=e.get(r);o||(o=new Map,e.set(r,o)),e=o}let o=e.get("");o||(o=[],e.set("",o)),o.push(r)}}return(e,t)=>{let r=n;for(let n=0;n<e.length;n++){const t=e.charAt(n),o=r.get(t);if(!o)return[];r=o}if(t)return r.get("")||[];const o=[],i=[r];for(;i.length;){const e=[...i.shift().entries()].sort(((e,t)=>e[0]<t[0]?-1:1));for(const[t,n]of e)""===t?o.push(...n):i.push(n)}return o}}(e,(e=>{const t=new Set;if(e.shortcodes)for(const n of e.shortcodes)for(const e of Im(n))t.add(e);return t})),o=e=>r(e,!0),i=e=>r(e,!1),a=new Map,s=new Map;for(const l of e){s.set(l.name.toLowerCase(),l);for(const e of l.shortcodes||[])a.set(e.toLowerCase(),l)}return{all:n,search:e=>{const n=Im(e),r=n.map(((e,t)=>(t<n.length-1?o:i)(e)));return Fm(r,(e=>e.name)).sort(t)},byShortcode:e=>a.get(e.toLowerCase()),byName:e=>s.get(e.toLowerCase())}}const Qm="undefined"!==typeof wrappedJSObject;function Ym(e){if(!e)return e;if(Qm&&(e=structuredClone(e)),delete e.tokens,e.skinTones){const t=e.skinTones.length;e.skins=Array(t);for(let n=0;n<t;n++)e.skins[n]={tone:e.skinTones[n],unicode:e.skinUnicodes[n],version:e.skinVersions[n]};delete e.skinTones,delete e.skinUnicodes,delete e.skinVersions}return e}function Gm(e){e||console.warn("emoji-picker-element is more efficient if the dataSource server exposes an ETag header.")}const Km=["annotation","emoji","group","order","version"];function Xm(e,t){if(2!==Math.floor(e.status/100))throw new Error("Failed to fetch: "+t+":  "+e.status)}async function Jm(e){const t=await fetch(e);Xm(t,e);const n=t.headers.get("etag");Gm(n);const r=await t.json();return function(e){if(!e||!Array.isArray(e)||!e[0]||"object"!==typeof e[0]||Km.some((t=>!(t in e[0]))))throw new Error("Emoji data is in the wrong format")}(r),[n,r]}async function Zm(e){let t=function(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=-1;++o<t;)r[o]=e.charCodeAt(o);return n}(JSON.stringify(e));const n=function(e){for(var t="",n=new Uint8Array(e),r=n.byteLength,o=-1;++o<r;)t+=String.fromCharCode(n[o]);return t}(await crypto.subtle.digest("SHA-1",t));return btoa(n)}async function eg(e,t){let n,r=await async function(e){const t=await fetch(e,{method:"HEAD"});Xm(t,e);const n=t.headers.get("etag");return Gm(n),n}(t);if(!r){const e=await Jm(t);r=e[0],n=e[1],r||(r=await Zm(n))}if(await async function(e,t,n){const[r,o]=await Promise.all([ym,vm].map((t=>qm(e,pm,t))));return r===n&&o===t}(e,t,r));else{if(!n){n=(await Jm(t))[1]}await Um(e,n,t,r)}}class tg{constructor(){let{dataSource:e=Sm,locale:t=Em,customEmoji:n=[]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dataSource=e,this.locale=t,this._dbName=`emoji-picker-element-${this.locale}`,this._db=void 0,this._lazyUpdate=void 0,this._custom=Wm(n),this._clear=this._clear.bind(this),this._ready=this._init()}async _init(){const e=this._db=await(t=this._dbName,Tm[t]||(Tm[t]=_m(t)),Tm[t]);var t;!function(e,t){let n=Pm[e];n||(n=Pm[e]=[]),n.push(t)}(this._dbName,this._clear);const n=this.dataSource,r=await async function(e){return!await qm(e,pm,vm)}(e);r?await async function(e,t){let[n,r]=await Jm(t);n||(n=await Zm(r)),await Um(e,r,t,n)}(e,n):this._lazyUpdate=eg(e,n)}async ready(){const e=async()=>(this._ready||(this._ready=this._init()),this._ready);await e(),this._db||await e()}async getEmojiByGroup(e){return um(e),await this.ready(),Cm(await async function(e,t){return Rm(e,dm,xm,((e,n,r)=>{const o=IDBKeyRange.bound([t,0],[t+1,0],!1,!0);Nm(e.index(gm),o,r)}))}(this._db,e)).map(Ym)}async getEmojiBySearchQuery(e){cm(e),await this.ready();return[...this._custom.search(e),...Cm(await Bm(this._db,e)).map(Ym)]}async getEmojiByShortcode(e){cm(e),await this.ready();const t=this._custom.byShortcode(e);return t||Ym(await Vm(this._db,e))}async getEmojiByUnicodeOrName(e){cm(e),await this.ready();const t=this._custom.byName(e);return t||Ym(await async function(e,t){return Rm(e,dm,xm,((e,n,r)=>Dm(e,t,(n=>{if(n)return r(n);Dm(e.index(km),t,(e=>r(e||null)))}))))}(this._db,e))}async getPreferredSkinTone(){return await this.ready(),await qm(this._db,pm,bm)||0}async setPreferredSkinTone(e){return um(e),await this.ready(),t=this._db,n=bm,r=e,Rm(t,pm,wm,((e,t)=>{e.put(r,n),$m(t)}));var t,n,r}async incrementFavoriteEmojiCount(e){return cm(e),await this.ready(),t=this._db,n=e,Rm(t,fm,wm,((e,t)=>Dm(e,n,(r=>{e.put((r||0)+1,n),$m(t)}))));var t,n}async getTopFavoriteEmoji(e){return um(e),await this.ready(),(await function(e,t,n){return 0===n?[]:Rm(e,[fm,dm],xm,((e,r,o)=>{let[i,a]=e;const s=[];i.index(mm).openCursor(void 0,"prev").onsuccess=e=>{const r=e.target.result;if(!r)return o(s);function i(e){if(s.push(e),s.length===n)return o(s);r.continue()}const l=r.primaryKey,c=t.byName(l);if(c)return i(c);Dm(a,l,(e=>{if(e)return i(e);r.continue()}))}}))}(this._db,this._custom,e)).map(Ym)}set customEmoji(e){this._custom=Wm(e)}get customEmoji(){return this._custom.all}async _shutdown(){await this.ready();try{await this._lazyUpdate}catch(e){}}_clear(){this._db=this._ready=this._lazyUpdate=void 0}async close(){await this._shutdown(),await Am(this._dbName)}async delete(){var e;await this._shutdown(),await(e=this._dbName,new Promise(((t,n)=>{Am(e),Om(t,n,indexedDB.deleteDatabase(e))})))}}const ng=[[-1,"\u2728","custom"],[0,"\ud83d\ude00","smileys-emotion"],[1,"\ud83d\udc4b","people-body"],[3,"\ud83d\udc31","animals-nature"],[4,"\ud83c\udf4e","food-drink"],[5,"\ud83c\udfe0\ufe0f","travel-places"],[6,"\u26bd","activities"],[7,"\ud83d\udcdd","objects"],[8,"\u26d4\ufe0f","symbols"],[9,"\ud83c\udfc1","flags"]].map((e=>{let[t,n,r]=e;return{id:t,emoji:n,name:r}})),rg=ng.slice(1),og="function"===typeof requestIdleCallback?requestIdleCallback:setTimeout;function ig(e){return e.unicode.includes("\u200d")}const ag={"\ud83e\udee9":16,"\ud83e\udee8":15.1,"\ud83e\udee0":14,"\ud83e\udd72":13.1,"\ud83e\udd7b":12.1,"\ud83e\udd70":11,"\ud83e\udd29":5,"\ud83d\udc71\u200d\u2640\ufe0f":4,"\ud83e\udd23":3,"\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f":2,"\ud83d\ude00":1,"\ud83d\ude10\ufe0f":.7,"\ud83d\ude03":.6},sg=["\ud83d\ude0a","\ud83d\ude12","\u2764\ufe0f","\ud83d\udc4d\ufe0f","\ud83d\ude0d","\ud83d\ude02","\ud83d\ude2d","\u263a\ufe0f","\ud83d\ude14","\ud83d\ude29","\ud83d\ude0f","\ud83d\udc95","\ud83d\ude4c","\ud83d\ude18"],lg='"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif',cg=(e,t)=>e<t?-1:e>t?1:0,ug=(e,t)=>{const n=document.createElement("canvas");n.width=n.height=1;const r=n.getContext("2d",{willReadFrequently:!0});return r.textBaseline="top",r.font=`100px ${lg}`,r.fillStyle=t,r.scale(.01,.01),r.fillText(e,0,0),r.getImageData(0,0,1,1).data};function dg(e){const t=ug(e,"#000"),n=ug(e,"#fff");return t&&n&&((e,t)=>{const n=[...e].join(",");return n===[...t].join(",")&&!n.startsWith("0,0,0,")})(t,n)}let pg;const fg=()=>(pg||(pg=new Promise((e=>og((()=>e(function(){const e=Object.entries(ag);try{for(const[t,n]of e)if(dg(t))return n}catch(t){}return e[0][1]}())))))),pg),hg=new Map;function mg(e){e.preventDefault(),e.stopPropagation()}function gg(e,t,n){return(t+=e?-1:1)<0?t=n.length-1:t>=n.length&&(t=0),t}function yg(e,t){const n=new Set,r=[];for(const o of e){const e=t(o);n.has(e)||(n.add(e),r.push(o))}return r}const vg=requestAnimationFrame;let bg,xg="function"===typeof ResizeObserver;function wg(e){{const t=document.createRange();return t.selectNode(e.firstChild),t.getBoundingClientRect().width}}function kg(e,t,n){let r=e.get(t);return r||(r=n(),e.set(t,r)),r}function Sg(e){return""+e}const Eg=new WeakMap,Cg=new WeakMap,jg=Symbol("un-keyed"),Tg="replaceChildren"in Element.prototype;function Pg(e,t){const{targetNode:n}=t;let{targetParentNode:r}=t,o=!1;r?o=function(e,t){let n=e.firstChild,r=0;for(;n;){if(t[r]!==n)return!0;n=n.nextSibling,r++}return r!==t.length}(r,e):(o=!0,t.targetNode=void 0,t.targetParentNode=r=n.parentNode),o&&function(e,t){Tg?e.replaceChildren(...t):(e.innerHTML="",e.append(...t))}(r,e)}function Og(e){let t="",n=!1,r=!1,o=-1;const i=new Map,a=[];for(let l=0,c=e.length;l<c;l++){const s=e[l];if(t+=s,l===c-1)break;for(let e=0;e<s.length;e++){switch(s.charAt(e)){case"<":"/"===s.charAt(e+1)?a.pop():(n=!0,a.push(++o));break;case">":n=!1,r=!1;break;case"=":r=!0}}const u=kg(i,a[a.length-1],(()=>[]));let d,p,f;if(r){const t=/(\S+)="?([^"=]*)$/.exec(s);d=t[1],p=t[2],f=/^[^">]*/.exec(e[l+1])[0]}const h={attributeName:d,attributeValuePre:p,attributeValuePost:f,expressionIndex:l};u.push(h),n||r||(t+=" ")}const s=function(e){const t=document.createElement("template");return t.innerHTML=e,t}(t);return{template:s,elementsToBindings:i}}function _g(e,t,n){for(let r=0;r<e.length;r++){const o=e[r],i={binding:o,targetNode:o.attributeName?t:t.firstChild,targetParentNode:void 0,currentExpression:void 0};n.push(i)}}function Rg(e){const{template:t,elementsToBindings:n}=kg(Eg,e,(()=>Og(e))),r=t.cloneNode(!0).content.firstElementChild,o=function(e,t){const n=[];let r;if(1===t.size&&(r=t.get(0)))_g(r,e,n);else{const r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT);let o=e,i=-1;do{const e=t.get(++i);e&&_g(e,o,n)}while(o=r.nextNode())}return n}(r,n);return function(e){return function(e,t){for(const n of t){const{targetNode:t,currentExpression:r,binding:{expressionIndex:o,attributeName:i,attributeValuePre:a,attributeValuePost:s}}=n,l=e[o];if(r!==l)if(n.currentExpression=l,i)t.setAttribute(i,a+Sg(l)+s);else{let e;Array.isArray(l)?Pg(l,n):l instanceof Element?(e=l,t.replaceWith(e)):t.nodeValue=Sg(l),e&&(n.targetNode=e)}}}(e,o),r}}function Ag(e,t,n,r,o,i,a,s,l){const{labelWithSkin:c,titleForEmoji:u,unicodeWithSkin:d}=n,{html:p,map:f}=function(e){const t=kg(Cg,e,(()=>new Map));let n=jg;return{map:function(e,t,r){return e.map(((e,o)=>{const i=n;n=r(e);try{return t(e,o)}finally{n=i}}))},html:function(e){const r=kg(t,e,(()=>new Map)),o=kg(r,n,(()=>Rg(e)));for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];return o(a)}}}(t);function h(e,n,r){return f(e,((e,o)=>p`<button role="${n?"option":"menuitem"}" aria-selected="${n?o===t.activeSearchItem:""}" aria-label="${c(e,t.currentSkinTone)}" title="${u(e)}" class="${"emoji"+(n&&o===t.activeSearchItem?" active":"")+(e.unicode?"":" custom-emoji")}" id="${`${r}-${e.id}`}" style="${e.unicode?"":`--custom-emoji-background: url(${JSON.stringify(e.url)})`}">${e.unicode?d(e,t.currentSkinTone):""}</button>`),(e=>`${r}-${e.id}`))}const m=p`<section data-ref="rootElement" class="picker" aria-label="${t.i18n.regionLabel}" style="${t.pickerStyle||""}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${t.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!(!t.searchMode||!t.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${t.activeSearchItemId?`emo-${t.activeSearchItemId}`:""}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${t.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${t.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${t.skinTonePickerExpandedAfterAnimation?"expanded":""}"><button id="skintone-button" class="emoji ${t.skinTonePickerExpanded?"hide-focus":""}" aria-label="${t.skinToneButtonLabel}" title="${t.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${t.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${t.skinToneButtonText||""}</button></div><span id="skintone-description" class="sr-only">${t.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${t.skinTonePickerExpanded?"":"hidden no-animate"}" style="transform:translateY(${t.skinTonePickerExpanded?0:"calc(-1 * var(--num-skintones) * var(--total-emoji-size))"})" role="listbox" aria-label="${t.i18n.skinTonesLabel}" aria-activedescendant="skintone-${t.activeSkinTone}" aria-hidden="${!t.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${f(t.skinTones,((e,n)=>p`<div id="skintone-${n}" class="emoji ${n===t.activeSkinTone?"active":""}" aria-selected="${n===t.activeSkinTone}" role="option" title="${t.i18n.skinTones[n]}" aria-label="${t.i18n.skinTones[n]}">${e}</div>`),(e=>e))}</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${t.groups.length},1fr)" aria-label="${t.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${f(t.groups,(e=>p`<button role="tab" class="nav-button" aria-controls="tab-${e.id}" aria-label="${t.i18n.categories[e.name]}" aria-selected="${!t.searchMode&&t.currentGroup.id===e.id}" title="${t.i18n.categories[e.name]}" data-group-id="${e.id}"><div class="nav-emoji emoji">${e.emoji}</div></button>`),(e=>e.id))}</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${(t.isRtl?-1:1)*t.currentGroupIndex*100}%)"></div></div><div class="message ${t.message?"":"gone"}" role="alert" aria-live="polite">${t.message||""}</div><div data-ref="tabpanelElement" class="tabpanel ${!t.databaseLoaded||t.message?"gone":""}" role="${t.searchMode?"region":"tabpanel"}" aria-label="${t.searchMode?t.i18n.searchResultsLabel:t.i18n.categories[t.currentGroup.name]}" id="${t.searchMode?"":`tab-${t.currentGroup.id}`}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${f(t.currentEmojisWithCategories,((e,n)=>p`<div><div id="menu-label-${n}" class="category ${1===t.currentEmojisWithCategories.length&&""===t.currentEmojisWithCategories[0].category?"gone":""}" aria-hidden="true">${t.searchMode?t.i18n.searchResultsLabel:e.category?e.category:t.currentEmojisWithCategories.length>1?t.i18n.categories.custom:t.i18n.categories[t.currentGroup.name]}</div><div class="emoji-menu ${0===n||t.searchMode||-1!==t.currentGroup.id?"":"visibility-auto"}" style="${`--num-rows: ${Math.ceil(e.emojis.length/t.numColumns)}`}" data-action="updateOnIntersection" role="${t.searchMode?"listbox":"menu"}" aria-labelledby="menu-label-${n}" id="${t.searchMode?"search-results":""}">${h(e.emojis,t.searchMode,"emo")}</div></div>`),(e=>e.category))}</div></div><div class="favorites onscreen emoji-menu ${t.message?"gone":""}" role="menu" aria-label="${t.i18n.favoritesLabel}" data-on-click="onEmojiClick">${h(t.currentFavorites,!1,"fav")}</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`,g=(t,n)=>{for(const r of e.querySelectorAll(`[${t}]`))n(r,r.getAttribute(t))};if(l){e.appendChild(m);for(const e of["click","focusout","input","keydown","keyup"])g(`data-on-${e}`,((t,n)=>{t.addEventListener(e,r[n])}));g("data-ref",((e,t)=>{i[t]=e})),a.addEventListener("abort",(()=>{e.removeChild(m)}))}g("data-action",((e,t)=>{let n=s.get(t);n||s.set(t,n=new WeakSet),n.has(e)||(n.add(e),o[t](e))}))}const Mg="function"===typeof queueMicrotask?queueMicrotask:e=>Promise.resolve().then(e);function Ig(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}const zg=new WeakMap;const Lg=[],{assign:Dg}=Object;function Ng(e,t){const n={},r=new AbortController,o=r.signal,{state:i,createEffect:a}=function(e){let t,n=!1;const r=new Map,o=new Set;let i;const a=()=>{if(n)return;const e=[...o];o.clear();try{for(const t of e)t()}finally{i=!1,o.size&&(i=!0,Mg(a))}},s=new Proxy({},{get(e,n){if(t){let e=r.get(n);e||(e=new Set,r.set(n,e)),e.add(t)}return e[n]},set(e,t,n){if(e[t]!==n){e[t]=n;const s=r.get(t);if(s){for(const e of s)o.add(e);i||(i=!0,Mg(a))}}return!0}});return e.addEventListener("abort",(()=>{n=!0})),{state:s,createEffect:e=>{const n=()=>{const r=t;t=n;try{return e()}finally{t=r}};return n()}}}(o),s=new Map;Dg(i,{skinToneEmoji:void 0,i18n:void 0,database:void 0,customEmoji:void 0,customCategorySorting:void 0,emojiVersion:void 0}),Dg(i,t),Dg(i,{initialLoad:!0,currentEmojis:[],currentEmojisWithCategories:[],rawSearchText:"",searchText:"",searchMode:!1,activeSearchItem:-1,message:void 0,skinTonePickerExpanded:!1,skinTonePickerExpandedAfterAnimation:!1,currentSkinTone:0,activeSkinTone:0,skinToneButtonText:void 0,pickerStyle:void 0,skinToneButtonLabel:"",skinTones:[],currentFavorites:[],defaultFavoriteEmojis:void 0,numColumns:8,isRtl:!1,currentGroupIndex:0,groups:rg,databaseLoaded:!1,activeSearchItemId:void 0}),a((()=>{i.currentGroup!==i.groups[i.currentGroupIndex]&&(i.currentGroup=i.groups[i.currentGroupIndex])}));const l=t=>{e.getElementById(t).focus()},c=t=>e.getElementById(`emo-${t.id}`),u=(e,t)=>{n.rootElement.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))},d=(e,t)=>e.id===t.id,p=(e,t)=>{const{category:n,emojis:r}=e,{category:o,emojis:i}=t;return n===o&&Ig(r,i,d)},f=e=>{Ig(i.currentEmojis,e,d)||(i.currentEmojis=e)},h=e=>{i.searchMode!==e&&(i.searchMode=e)},m=(e,t)=>t&&e.skins&&e.skins[t]||e.unicode,g={labelWithSkin:(e,t)=>{return(n=[e.name||m(e,t),e.annotation,...e.shortcodes||Lg].filter(Boolean),yg(n,(e=>e))).join(", ");var n},titleForEmoji:e=>e.annotation||(e.shortcodes||Lg).join(", "),unicodeWithSkin:m},y={onClickSkinToneButton:function(e){i.skinTonePickerExpanded=!i.skinTonePickerExpanded,i.activeSkinTone=i.currentSkinTone,i.skinTonePickerExpanded&&(mg(e),vg((()=>l("skintone-list"))))},onEmojiClick:async function(e){const{target:t}=e;if(!t.classList.contains("emoji"))return;mg(e);const n=t.id.substring(4);C(n)},onNavClick:function(e){const{target:t}=e,r=t.closest(".nav-button");if(!r)return;const o=parseInt(r.dataset.groupId,10);n.searchElement.value="",i.rawSearchText="",i.searchText="",i.activeSearchItem=-1,i.currentGroupIndex=i.groups.findIndex((e=>e.id===o))},onNavKeydown:function(e){const{target:t,key:n}=e,r=t=>{t&&(mg(e),t.focus())};switch(n){case"ArrowLeft":return r(t.previousElementSibling);case"ArrowRight":return r(t.nextElementSibling);case"Home":return r(t.parentElement.firstElementChild);case"End":return r(t.parentElement.lastElementChild)}},onSearchKeydown:function(e){if(!i.searchMode||!i.currentEmojis.length)return;const t=t=>{mg(e),i.activeSearchItem=gg(t,i.activeSearchItem,i.currentEmojis)};switch(e.key){case"ArrowDown":return t(!1);case"ArrowUp":return t(!0);case"Enter":if(-1!==i.activeSearchItem)return mg(e),C(i.currentEmojis[i.activeSearchItem].id);i.activeSearchItem=0}},onSkinToneOptionsClick:function(e){const{target:{id:t}}=e,n=t&&t.match(/^skintone-(\d)/);if(!n)return;mg(e);const r=parseInt(n[1],10);j(r)},onSkinToneOptionsFocusOut:async function(e){const{relatedTarget:t}=e;t&&"skintone-list"===t.id||(i.skinTonePickerExpanded=!1)},onSkinToneOptionsKeydown:function(e){if(!i.skinTonePickerExpanded)return;const t=async t=>{mg(e),i.activeSkinTone=t};switch(e.key){case"ArrowUp":return t(gg(!0,i.activeSkinTone,i.skinTones));case"ArrowDown":return t(gg(!1,i.activeSkinTone,i.skinTones));case"Home":return t(0);case"End":return t(i.skinTones.length-1);case"Enter":return mg(e),j(i.activeSkinTone);case"Escape":return mg(e),i.skinTonePickerExpanded=!1,l("skintone-button")}},onSkinToneOptionsKeyup:function(e){if(!i.skinTonePickerExpanded)return;if(" "===e.key)return mg(e),j(i.activeSkinTone)},onSearchInput:function(e){i.rawSearchText=e.target.value}},v={calculateEmojiGridStyle:function(e){!function(e,t,n){let r;xg?(r=new ResizeObserver(n),r.observe(e)):vg(n),t.addEventListener("abort",(()=>{r&&r.disconnect()}))}(e,o,(()=>{{const e=getComputedStyle(n.rootElement),t=parseInt(e.getPropertyValue("--num-columns"),10),r="rtl"===e.getPropertyValue("direction");i.numColumns=t,i.isRtl=r}}))},updateOnIntersection:function(e){!function(e,t,n){{const r=e.closest(".tabpanel");let o=zg.get(r);o||(o=new IntersectionObserver(n,{root:r,rootMargin:"50% 0px 50% 0px",threshold:0}),zg.set(r,o),t.addEventListener("abort",(()=>{o.disconnect()}))),o.observe(e)}}(e,o,(e=>{for(const{target:t,isIntersecting:n}of e)t.classList.toggle("onscreen",n)}))}};let b=!0;function x(){const{customEmoji:e,database:t}=i,n=e||Lg;t.customEmoji!==n&&(t.customEmoji=n)}a((()=>{Ag(e,i,g,y,v,n,o,s,b),b=!1})),i.emojiVersion||fg().then((e=>{e||(i.message=i.i18n.emojiUnsupportedMessage)})),a((()=>{i.database&&async function(){let e=!1;const t=setTimeout((()=>{e=!0,i.message=i.i18n.loadingMessage}),1e3);try{await i.database.ready(),i.databaseLoaded=!0}catch(n){console.error(n),i.message=i.i18n.networkErrorMessage}finally{clearTimeout(t),e&&(e=!1,i.message="")}}()})),a((()=>{i.pickerStyle=`\n      --num-groups: ${i.groups.length}; \n      --indicator-opacity: ${i.searchMode?0:1}; \n      --num-skintones: 6;`})),a((()=>{i.customEmoji&&i.database&&x()})),a((()=>{i.customEmoji&&i.customEmoji.length?i.groups!==ng&&(i.groups=ng):i.groups!==rg&&(i.currentGroupIndex&&i.currentGroupIndex--,i.groups=rg)})),a((()=>{!async function(){i.databaseLoaded&&(i.currentSkinTone=await i.database.getPreferredSkinTone())}()})),a((()=>{i.skinTones=Array(6).fill().map(((e,t)=>function(e,t){if(0===t)return e;const n=e.indexOf("\u200d");return-1!==n?e.substring(0,n)+String.fromCodePoint(127995+t-1)+e.substring(n):(e.endsWith("\ufe0f")&&(e=e.substring(0,e.length-1)),e+"\ud83c"+String.fromCodePoint(57339+t-1))}(i.skinToneEmoji,t)))})),a((()=>{i.skinToneButtonText=i.skinTones[i.currentSkinTone]})),a((()=>{i.skinToneButtonLabel=i.i18n.skinToneLabel.replace("{skinTone}",i.i18n.skinTones[i.currentSkinTone])})),a((()=>{i.databaseLoaded&&async function(){const{database:e}=i,t=(await Promise.all(sg.map((t=>e.getEmojiByUnicodeOrName(t))))).filter(Boolean);i.defaultFavoriteEmojis=t}()})),a((()=>{i.databaseLoaded&&i.defaultFavoriteEmojis&&async function(){x();const{database:e,defaultFavoriteEmojis:t,numColumns:n}=i,r=await e.getTopFavoriteEmoji(n),o=await E(yg([...r,...t],(e=>e.unicode||e.name)).slice(0,n));i.currentFavorites=o}()})),a((()=>{!async function(){const{searchText:e,currentGroup:t,databaseLoaded:n,customEmoji:r}=i;if(n)if(e.length>=2){const t=await async function(e){return E(await S(await i.database.getEmojiBySearchQuery(e)))}(e);i.searchText===e&&(f(t),h(!0))}else{const{id:e}=t;if(-1!==e||r&&r.length){const t=await async function(e){const t=-1===e?i.customEmoji:await i.database.getEmojiByGroup(e);return E(await S(t))}(e);i.currentGroup.id===e&&(f(t),h(!1))}}else i.currentEmojis=[],i.searchMode=!1}()}));const w=()=>{vg((()=>{var e;(e=n.tabpanelElement)&&(e.scrollTop=0)}))};function k(e){return!e.unicode||!ig(e)||hg.get(e.unicode)}async function S(e){const t=i.emojiVersion||await fg();return e.filter((e=>{let{version:n}=e;return!n||n<=t}))}async function E(e){return function(e,t){const n=e=>{const n={};for(const r of e)"number"===typeof r.tone&&r.version<=t&&(n[r.tone]=r.unicode);return n};return e.map((e=>{let{unicode:t,skins:r,shortcodes:o,url:i,name:a,category:s,annotation:l}=e;return{unicode:t,name:a,shortcodes:o,url:i,category:s,annotation:l,id:t||a,skins:r&&n(r)}}))}(e,i.emojiVersion||await fg())}async function C(e){const t=await i.database.getEmojiByUnicodeOrName(e),n=[...i.currentEmojis,...i.currentFavorites].find((t=>t.id===e)),r=n.unicode&&m(n,i.currentSkinTone);await i.database.incrementFavoriteEmojiCount(e),u("emoji-click",{emoji:t,skinTone:i.currentSkinTone,...r&&{unicode:r},...n.name&&{name:n.name}})}function j(e){i.currentSkinTone=e,i.skinTonePickerExpanded=!1,l("skintone-button"),u("skin-tone-change",{skinTone:e}),i.database.setPreferredSkinTone(e)}return a((()=>{const{currentEmojis:e,emojiVersion:t}=i,r=e.filter((e=>e.unicode)).filter((e=>ig(e)&&!hg.has(e.unicode)));if(!t&&r.length)f(e),vg((()=>function(e){const t=function(e,t,n){let r=!0;for(const o of e){const e=wg(n(o));"undefined"===typeof bg&&(bg=wg(t));const i=e/1.8<bg;hg.set(o.unicode,i),i||(r=!1)}return r}(e,n.baselineEmoji,c);t?w():i.currentEmojis=[...i.currentEmojis]}(r)));else{const n=t?e:e.filter(k);f(n),w()}})),a((()=>{})),a((()=>{const e=function(){const{searchMode:e,currentEmojis:t}=i;if(e)return[{category:"",emojis:t}];const n=new Map;for(const r of t){const e=r.category||"";let t=n.get(e);t||(t=[],n.set(e,t)),t.push(r)}return[...n.entries()].map((e=>{let[t,n]=e;return{category:t,emojis:n}})).sort(((e,t)=>i.customCategorySorting(e.category,t.category)))}();(e=>{Ig(i.currentEmojisWithCategories,e,p)||(i.currentEmojisWithCategories=e)})(e)})),a((()=>{i.activeSearchItemId=-1!==i.activeSearchItem&&i.currentEmojis[i.activeSearchItem].id})),a((()=>{const{rawSearchText:e}=i;og((()=>{i.searchText=(e||"").trim(),i.activeSearchItem=-1}))})),a((()=>{i.skinTonePickerExpanded?n.skinToneDropdown.addEventListener("transitionend",(()=>{i.skinTonePickerExpandedAfterAnimation=!0}),{once:!0}):i.skinTonePickerExpandedAfterAnimation=!1})),{$set(e){Dg(i,e)},$destroy(){r.abort()}}}var $g={categoriesLabel:"Categories",emojiUnsupportedMessage:"Your browser does not support color emoji.",favoritesLabel:"Favorites",loadingMessage:"Loading\u2026",networkErrorMessage:"Could not load emoji.",regionLabel:"Emoji picker",searchDescription:"When search results are available, press up or down to select and enter to choose.",searchLabel:"Search",searchResultsLabel:"Search results",skinToneDescription:"When expanded, press up or down to select and enter to choose.",skinToneLabel:"Choose a skin tone (currently {skinTone})",skinTonesLabel:"Skin tones",skinTones:["Default","Light","Medium-Light","Medium","Medium-Dark","Dark"],categories:{custom:"Custom","smileys-emotion":"Smileys and emoticons","people-body":"People and body","animals-nature":"Animals and nature","food-drink":"Food and drink","travel-places":"Travel and places",activities:"Activities",objects:"Objects",symbols:"Symbols",flags:"Flags"}};const Fg=["customEmoji","customCategorySorting","database","dataSource","i18n","locale","skinToneEmoji","emojiVersion"],Ug=`:host{--emoji-font-family:${lg}}`;class Bg extends HTMLElement{constructor(e){super(),this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=':host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--border-radius:0;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);border-radius:var(--border-radius);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;scrollbar-gutter:stable;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.emoji-menu.visibility-auto{content-visibility:auto;contain-intrinsic-size:calc(var(--num-columns)*var(--total-emoji-size)) calc(var(--num-rows)*var(--total-emoji-size))}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;height:var(--total-emoji-size);width:var(--total-emoji-size);line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.onscreen .custom-emoji::after{content:"";width:var(--emoji-size);height:var(--emoji-size);background-repeat:no-repeat;background-position:center center;background-size:contain;background-image:var(--custom-emoji-background)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{overflow-y:auto;scrollbar-gutter:stable;display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}'+Ug,this.shadowRoot.appendChild(t),this._ctx={locale:"en",dataSource:"https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",skinToneEmoji:"\ud83d\udd90\ufe0f",customCategorySorting:cg,customEmoji:null,i18n:$g,emojiVersion:null,...e};for(const n of Fg)"database"!==n&&Object.prototype.hasOwnProperty.call(this,n)&&(this._ctx[n]=this[n],delete this[n]);this._dbFlush()}connectedCallback(){this._cmp||(this._cmp=Ng(this.shadowRoot,this._ctx))}disconnectedCallback(){Mg((()=>{if(!this.isConnected&&this._cmp){this._cmp.$destroy(),this._cmp=void 0;const{database:e}=this._ctx;e.close().catch((e=>console.error(e)))}}))}static get observedAttributes(){return["locale","data-source","skin-tone-emoji","emoji-version"]}attributeChangedCallback(e,t,n){this._set(e.replace(/-([a-z])/g,((e,t)=>t.toUpperCase())),"emoji-version"===e?parseFloat(n):n)}_set(e,t){this._ctx[e]=t,this._cmp&&this._cmp.$set({[e]:t}),["locale","dataSource"].includes(e)&&this._dbFlush()}_dbCreate(){const{locale:e,dataSource:t,database:n}=this._ctx;n&&n.locale===e&&n.dataSource===t||this._set("database",new tg({locale:e,dataSource:t}))}_dbFlush(){Mg((()=>this._dbCreate()))}}const Vg={};for(const n of Fg)Vg[n]={get(){return"database"===n&&this._dbCreate(),this._ctx[n]},set(e){if("database"===n)throw new Error("database is read-only");this._set(n,e)}};Object.defineProperties(Bg.prototype,Vg),customElements.get("emoji-picker")||customElements.define("emoji-picker",Bg);const qg=Ti.div`
  position: relative;
  display: inline-block;
`,Hg=Ti.button`
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e8e8e8;
    transform: translateY(-2px);
  }
`,Wg=Ti(wp.div)`
  position: absolute;
  z-index: 10000;
  right: calc(100% + 10px);
  top: 0;
  
  @media (max-width: 360px) {
    right: auto;
    left: 0;
    top: calc(100% + 10px);
  }
  
  .drag-handle {
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid #eee;
    color: #888;
    font-size: 12px;
    cursor: grab;
    background-color: white;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    
    &:active {
      cursor: grabbing;
    }
  }
  
  emoji-picker {
    height: 350px;
    --emoji-size: 1.5rem;
    --background: white;
    --border-color: #e0e0e0;
    --border-size: 1px;
    --input-border-color: #e0e0e0;
    --input-font-color: #333;
    --input-placeholder-color: #999;
    --category-font-color: #111;
    --indicator-color: #385ac1;
    --num-columns: 8;
  }
`,Qg=e=>{let{onEmojiSelected:n,currentEmoji:r="\u2753",label:o="Select Emoji",buttonStyle:i={},className:a}=e;const[s,l]=(0,t.useState)(!1),[c,u]=(0,t.useState)(!1),d=(0,t.useRef)(null),p=(0,t.useRef)(null);(0,t.useEffect)((()=>{const e=e=>{n(e.detail.unicode),l(!1)},t=e=>{!d.current||d.current.contains(e.target)||!p.current||p.current.contains(e.target)||c||l(!1)},r=p.current;return r&&r.addEventListener("emoji-click",e),s&&document.addEventListener("mousedown",t),()=>{r&&r.removeEventListener("emoji-click",e),document.removeEventListener("mousedown",t)}}),[s,n,c]);return(0,of.jsxs)(qg,{ref:d,className:a,children:[(0,of.jsxs)(Hg,{onClick:()=>{l(!s)},style:i,children:[(0,of.jsx)("span",{children:r}),o&&(0,of.jsx)("span",{children:o})]}),s&&(0,of.jsxs)(Wg,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0},drag:!0,dragConstraints:{left:-500,right:500,top:-300,bottom:300},dragElastic:.1,dragMomentum:!1,onDragStart:()=>u(!0),onDragEnd:()=>u(!1),"data-dragging":c,children:[(0,of.jsx)("div",{className:"drag-handle",children:"Drag to move"}),(0,of.jsx)("emoji-picker",{ref:p,class:"emoji-picker"})]})]})},Yg=Ti.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 6px 20px rgba(0, 153, 204, 0.15);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(102, 212, 255, 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 153, 204, 0.25);
    border-color: rgba(102, 212, 255, 0.5);
  }
`,Gg=Ti.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  position: relative;
  z-index: 5;
`,Kg=Ti(Qg)`
  background: none;
  border: none;
  font-size: 36px;
  cursor: pointer;
  padding: 0;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span:first-child {
    font-size: 36px;
  }
  
  &:hover {
    transform: scale(1.1);
    background: none;
  }
  
  input {
    font-size: 36px;
    width: 80px;
    height: 60px;
  }
  
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Styling for emoji-picker-element */
  emoji-picker {
    height: 350px;
    --emoji-size: 1.5rem;
    --background: white;
    --border-color: #e0e0e0;
    --border-size: 1px;
    --input-border-color: #e0e0e0;
    --input-font-color: #333;
    --input-placeholder-color: #999;
    --category-font-color: #111;
  }
  
  /* Custom positioning for the emoji picker */
  div[class*='PickerWrapper'] {
    position: absolute;
    z-index: 10000;
    right: calc(100% + 10px);
    top: 0;
    
    /* Reset position when being dragged */
    &[data-dragging="true"] {
      position: fixed;
    }
  }
`,Xg=Ti.input`
  flex: 1;
  padding: 8px 12px;
  border: 2px solid rgba(102, 212, 255, 0.3);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.8);
  color: #0f5e87;
  transition: all 0.2s ease;
  max-width: 200px;
  height: 36px;
  text-align: center;
  direction: rtl; /* For proper Arabic text display */
  
  &:focus {
    border-color: #0099cc;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 153, 204, 0.2);
  }
`,Jg=Ti(wp.button)`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-left: 8px;
  color: #0099cc;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  
  &:hover {
    color: #66d4ff;
  }
`,Zg=["\ud83d\ude0e","\ud83e\udd8a","\ud83d\udc31","\ud83d\udc36","\ud83e\udd81","\ud83d\udc2f","\ud83d\udc3a","\ud83e\udd9d","\ud83d\udc2e","\ud83d\ude0f","\ud83d\udc38","\ud83d\udc35","\ud83d\udc14","\ud83d\udc27","\ud83d\udc22","\ud83e\udd84","\ud83d\udc32","\ud83d\udc7d","\ud83e\udd16","\ud83d\udc7b","\ud83e\udd89","\ud83e\udd87","\ud83d\udc19","\ud83e\udd88","\ud83d\udc2c","\ud83e\udd9a","\ud83e\udd9c","\ud83e\udd96","\ud83d\udc18","\ud83e\udd93","\ud83e\udd92","\ud83e\udd9b","\ud83d\udc3c","\ud83d\udc28","\ud83e\udd94","\ud83e\udda1","\ud83d\udc30","\ud83d\udc3b","\ud83d\udc39","\ud83d\udc1d","\ud83e\udd8b","\ud83d\udc0c","\ud83d\udc1e","\ud83e\udd82","\ud83e\udd95","\ud83d\udc0a","\ud83d\udc05","\ud83e\udd8d","\ud83e\udda7","\ud83e\uddae"],ey=()=>{const e=Math.floor(Math.random()*Zg.length);return Zg[e]},ty=e=>{let{teamNumber:n,onChange:r,teamData:o}=e;const{playSound:i}=rf();(0,t.useEffect)((()=>{o.name||o.avatar||r({name:`Team ${n}`,avatar:ey(),abilities:{chatgpt:{type:"chatgpt",used:!1},double:{type:"double",used:!1},google:{type:"google",used:!1},dismiss:{type:"dismiss",used:!1},electric:{type:"electric",used:!1}}})}),[o,n,r]);return(0,of.jsx)(Yg,{children:(0,of.jsxs)(Gg,{children:[(0,of.jsx)(Kg,{onEmojiSelected:e=>{i("button-click"),r({...o,avatar:e})},currentEmoji:o.avatar||"\ud83d\ude0e",label:"",buttonStyle:{background:"none"}}),(0,of.jsx)(Xg,{value:o.name||"",onChange:e=>{r({...o,name:e.target.value})},placeholder:`Team ${n} Name`}),(0,of.jsx)(Jg,{onClick:()=>{i("button-click"),r({...o,avatar:ey()})},whileHover:{rotate:180},whileTap:{scale:.9},children:"\ud83d\udd04"})]})})};var ny=n(279);const ry=(e,t,n,r)=>{ny.default.event({category:e,action:t,label:n,value:r})},oy=()=>ry("Game","Start Game"),iy=(e,t)=>ry("Game","End Game",e,t),ay=e=>ry("Admin","Import Questions",void 0,e),sy=e=>ry("Admin","Export Questions",void 0,e),ly=Ti(wp.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`,cy=Ti(wp.div)`
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  height: 90vh;
  max-height: 700px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
`,uy=Ti.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8c52ff;
  color: white;
`,dy=Ti.h2`
  margin: 0;
  font-size: 20px;
`,py=Ti(wp.button)`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`,fy=Ti.div`
  flex: 1;
  overflow: hidden;
`,hy=Ti.iframe`
  width: 100%;
  height: 100%;
  border: none;
`,my=e=>{let{isOpen:t,onClose:n}=e;return(0,of.jsx)(Pp,{children:t&&(0,of.jsx)(ly,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:(0,of.jsxs)(cy,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},transition:{type:"spring",damping:20},onClick:e=>e.stopPropagation(),children:[(0,of.jsxs)(uy,{children:[(0,of.jsx)(dy,{children:"\u0639\u0637\u0646\u0627 \u0631\u0627\u064a\u0643"}),(0,of.jsx)(py,{onClick:n,whileHover:{scale:1.1},whileTap:{scale:.9},children:"\u2715"})]}),(0,of.jsx)(fy,{children:(0,of.jsx)(hy,{src:"https://docs.google.com/forms/d/e/1FAIpQLSe84FITNwzxxuqJwPvbrxKrIbX-ZZKMR2GRTWmIkGU5qZkNqQ/viewform?embedded=true",title:"Feedback Form",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})})]})})})},gy=Ti.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,yy=Ti.button`
  background: none;
  border: none;
  color: var(--button-text-color, white);
  font-size: 24px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`,vy=Ti.div`
  position: relative;
  display: flex;
  align-items: center;
`,by=Ti.input`
  position: absolute;
  top: 100%;
  left: 0;
  width: 120px;
  height: 8px;
  margin-top: 8px;
  background-color: var(--card-background, #f1f0fe);
  border-radius: var(--border-radius, 4px);
  outline: none;
  z-index: 10;
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  
  &:hover {
    opacity: 1;
    visibility: visible;
  }
`,xy=e=>{let{isMusicEnabled:n,volume:r,onToggleMusic:o,onVolumeChange:i}=e;const[a,s]=(0,t.useState)(!1);return(0,of.jsxs)(gy,{children:[(0,of.jsx)(yy,{onClick:o,children:n?"\ud83d\udd0a":"\ud83d\udd07"}),(0,of.jsxs)(vy,{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[(0,of.jsx)(yy,{children:"\ud83c\udfb5"}),(0,of.jsx)(by,{type:"range",min:"0",max:"100",value:100*r,onChange:i,style:{opacity:a?1:0,visibility:a?"visible":"hidden"}})]})]})},wy=Ti.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
  background: transparent;
`,ky=Ti.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: transparent;
`;Ti.div`
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 5px rgba(100, 200, 255, 0.9);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  transition: width 0.1s, height 0.1s, box-shadow 0.1s;
  opacity: 0.9;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,240,255,1) 100%);
`,Ti.div`
  position: fixed;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  opacity: 0.5;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9998;
`;class Sy{constructor(){this.x=0,this.y=0,this.size=3,this.speedX=0,this.speedY=0,this.life=1,this.color="rgba(255, 255, 255, 0.8)"}init(e,t){this.x=e,this.y=t,this.size=3*Math.random()+1;const n=Math.random()*Math.PI*2,r=4*Math.random()+1;return this.speedX=Math.cos(n)*r,this.speedY=Math.sin(n)*r,this.life=1,this}update(){return this.x+=this.speedX,this.y+=this.speedY,this.life-=.02,this.life>0}draw(e){e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI),e.fillStyle=`rgba(255, 255, 255, ${this.life})`,e.fill()}}const Ey=e=>{let{active:n=!0,hideDefaultCursor:r=!1}=e;const o=(0,t.useRef)(null),i=(0,t.useRef)([]),a=(0,t.useRef)([]),s=(0,t.useRef)({x:0,y:0}),l=(0,t.useRef)(0);(0,t.useEffect)((()=>{if(!n)return;r&&(document.body.style.cursor="none");const e=e=>{s.current.x=e.clientX,s.current.y=e.clientY;for(let t=0;t<3;t++)c(e.clientX,e.clientY)},t=e=>{if(e.touches.length>0){s.current.x=e.touches[0].clientX,s.current.y=e.touches[0].clientY;for(let t=0;t<3;t++)c(e.touches[0].clientX,e.touches[0].clientY)}};return window.addEventListener("mousemove",e),window.addEventListener("touchmove",t),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("touchmove",t),r&&(document.body.style.cursor=""),l.current&&cancelAnimationFrame(l.current)}}),[n,r]),(0,t.useEffect)((()=>{if(!n||!o.current)return;const e=o.current,t=e.getContext("2d");if(!t)return;const r=()=>{e.width=window.innerWidth,e.height=window.innerHeight};r(),window.addEventListener("resize",r);const s=()=>{t.clearRect(0,0,e.width,e.height);for(let e=i.current.length-1;e>=0;e--){const n=i.current[e];n.update()?n.draw(t):(a.current.push(n),i.current.splice(e,1))}l.current=requestAnimationFrame(s)};return s(),()=>{window.removeEventListener("resize",r),cancelAnimationFrame(l.current)}}),[n]);const c=(e,t)=>{let n;n=a.current.length>0?a.current.pop():new Sy,n&&(n.init(e,t),i.current.push(n))};return n?(0,of.jsx)(wy,{children:(0,of.jsx)(ky,{ref:o})}):null},Cy=(0,t.createContext)({currentTheme:"default",setTheme:()=>{}}),jy=()=>(0,t.useContext)(Cy),Ty=e=>{let{children:n}=e;const[r,o]=(0,t.useState)((()=>localStorage.getItem("app-theme")||"default"));(0,t.useEffect)((()=>{localStorage.setItem("app-theme",r)}),[r]);return(0,of.jsx)(Cy.Provider,{value:{currentTheme:r,setTheme:e=>{o(e)}},children:n})},Py=Ti(wp.button)`
  background: var(--card-background);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: var(--card-shadow);
  cursor: pointer;
  z-index: 100;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
  }
`,Oy=Ti(wp.div)`
  position: absolute;
  top: 50px;
  left: 0;
  background: var(--card-background);
  border: 2px solid var(--border-color);
  border-radius: 15px;
  padding: 15px;
  width: 200px;
  box-shadow: var(--card-shadow);
  z-index: 9999;
`,_y=Ti.div`
  position: relative;
  margin: 0 10px;
`,Ry=Ti(wp.div)`
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 10px;
  background: ${e=>e.isActive?"var(--primary-color)":"transparent"};
  color: ${e=>e.isActive?"white":"var(--text-color)"};
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${e=>e.isActive?"var(--primary-color)":"rgba(0, 0, 0, 0.05)"};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ay=Ti.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`,My=Ti.span`
  font-weight: 500;
  flex-grow: 1;
`,Iy=[{name:"default",icon:"\ud83c\udfae",displayName:"Default"},{name:"fun",icon:"\ud83c\udfa8",displayName:"Fun"},{name:"halloween",icon:"\ud83c\udf83",displayName:"Halloween"},{name:"retro",icon:"\ud83d\udc7e",displayName:"Retro"},{name:"dark",icon:"\ud83c\udf19",displayName:"Dark"}],zy=()=>{var e;const[n,r]=(0,t.useState)(!1),{currentTheme:o,setTheme:i}=jy(),{playSound:a}=rf(),s=(null===(e=Iy.find((e=>e.name===o)))||void 0===e?void 0:e.icon)||"\ud83c\udfae";return(0,of.jsxs)(_y,{children:[(0,of.jsx)(Py,{onClick:()=>{a("button-click"),r(!n)},whileTap:{scale:.9},children:s}),(0,of.jsx)(Pp,{children:n&&(0,of.jsx)(Oy,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:Iy.map((e=>(0,of.jsxs)(Ry,{isActive:o===e.name,onClick:()=>{return t=e.name,a("button-click"),i(t),void r(!1);var t},whileHover:{x:5},whileTap:{scale:.95},children:[(0,of.jsx)(Ay,{children:e.icon}),(0,of.jsx)(My,{children:e.displayName})]},e.name)))})})]})},Ly="#0099cc",Dy="#66d4ff",Ny="rgba(102, 212, 255, 0.4)",$y="#FF7E5F",Fy="#FF6347",Uy="rgba(255, 126, 95, 0.4)",By="#00354d",Vy="#3a7ca5",qy="rgba(255, 255, 255, 0.25)",Hy="rgba(255, 255, 255, 0.35)",Wy=Ti.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  overflow: hidden;
  background-color: transparent;
  font-family: 'Poppins', 'Noto Sans Arabic', 'Roboto', sans-serif;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`,Qy=Ti.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
  padding: 30px;
  border-radius: 24px;
  background: ${qy};
  backdrop-filter: blur(10px);
  box-shadow: 
    0 10px 30px rgba(31, 38, 135, 0.1),
    0 1px 2px rgba(255, 255, 255, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 
      0 15px 35px rgba(31, 38, 135, 0.15),
      0 1px 2px rgba(255, 255, 255, 0.3),
      inset 0 1px 2px rgba(255, 255, 255, 0.5);
  }
`,Yy=Ti.h1`
  font-size: 64px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 15px;
  color: ${By};
  text-shadow: 
    2px 2px 4px rgba(255, 255, 255, 0.5),
    0 0 20px ${Ny},
    0 0 40px rgba(255, 255, 255, 0.2);
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  position: relative;
  
  &::before {
    content: '❄️';
    margin-right: 20px;
    font-size: 52px;
    animation: pulse 4s infinite ease-in-out alternate;
  }
  
  &::after {
    content: '❄️';
    margin-left: 20px;
    font-size: 52px;
    animation: pulse 4s infinite ease-in-out alternate-reverse;
  }
  
  @keyframes pulse {
    0% { transform: scale(1) rotate(0deg); opacity: 0.9; }
    50% { transform: scale(1.1) rotate(10deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 0.9; }
  }
  
  @media (max-width: 768px) {
    font-size: 42px;
    
    &::before, &::after {
      font-size: 36px;
    }
  }
`,Gy=Ti.div`
  font-size: 42px;
  font-weight: 800;
  color: ${By};
  text-shadow: 
    1px 1px 2px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.2);
  margin-top: 15px;
  position: relative;
  padding-bottom: 10px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, 
      transparent, 
      ${$y}50, 
      ${$y}, 
      ${$y}50, 
      transparent
    );
    border-radius: 4px;
    box-shadow: 0 0 10px ${Uy};
  }
  
  @media (max-width: 768px) {
    font-size: 30px;
  }
`,Ky=Ti.p`
  font-size: 22px;
  color: ${Vy};
  margin-top: 20px;
  text-align: center;
  max-width: 800px;
  line-height: 1.7;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
  }
`,Xy=Ti(wp.button)`
  position: absolute;
  right: 20px;
  top: 20px;
  background: ${Hy};
  border: none;
  font-size: 28px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 
    0 4px 10px rgba(0, 0, 0, 0.1),
    0 0 20px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: ${Hy};
    transform: rotate(15deg);
    box-shadow: 
      0 6px 15px rgba(0, 0, 0, 0.15),
      0 0 30px rgba(255, 255, 255, 0.3);
  }
`,Jy=Ti.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
  z-index: 1;
  position: relative;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Zy=Ti(wp.button)`
  padding: 18px 50px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, ${$y} 0%, ${Fy} 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 
    0 10px 25px ${Uy},
    0 0 15px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    transition: all 0.5s ease;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${$y}88 0%, ${Fy}88 100%);
    opacity: 0;
    border-radius: 50px;
    transition: opacity 0.3s ease;
    z-index: -2;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 
      0 15px 30px ${Uy},
      0 0 20px rgba(255, 255, 255, 0.3);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 5px 15px ${Uy};
  }
  
  &:disabled {
    background: linear-gradient(135deg, #cccccc 0%, #dddddd 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    
    &::before {
      display: none;
    }
  }
`,ev=Ti(wp.button)`
  background: linear-gradient(135deg, ${Ly} 0%, ${Dy} 100%);
  color: white;
  border: none;
  border-radius: 14px;
  padding: 14px 28px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 
    0 8px 15px rgba(0, 153, 204, 0.2),
    0 0 10px rgba(102, 212, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    transition: all 0.5s ease;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${Ly}88 0%, ${Dy}88 100%);
    opacity: 0;
    border-radius: 14px;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 
      0 10px 20px rgba(0, 153, 204, 0.3),
      0 0 15px rgba(102, 212, 255, 0.3);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 3px 10px rgba(0, 153, 204, 0.2);
  }
  
  &:disabled {
    background: linear-gradient(135deg, #cccccc 0%, #dddddd 100%);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,tv=Ti(ev)`
  background: linear-gradient(135deg, ${Ly} 0%, ${Dy} 100%);
  position: relative;
  
  &::before {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  }
`,nv=Ti.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  z-index: 2;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
`,rv=Ti.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 50px;
  z-index: 2;
  position: relative;
`,ov=Ti(wp.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`,iv=Ti(wp.div)`
  position: absolute;
  font-size: ${e=>e.size||"32px"};
  color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
  z-index: 1;
  top: ${e=>e.top||"10%"};
  left: ${e=>e.left||"10%"};
  opacity: 0.9;
`,av=Ti.footer`
  margin-top: auto;
  text-align: center;
  padding: 20px;
  color: ${Vy};
  font-size: 16px;
  font-weight: 500;
  background: ${qy};
  backdrop-filter: blur(10px);
  border-radius: 16px;
  margin: 20px 0;
  z-index: 2;
  box-shadow: 
    0 4px 12px rgba(31, 38, 135, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.18);
`,sv=Ti(wp.div)`
  margin: 25px 0;
  padding: 35px;
  background: ${qy};
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 
    0 8px 32px rgba(31, 38, 135, 0.1),
    0 1px 2px rgba(255, 255, 255, 0.3);
  z-index: 2;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 
      0 12px 32px rgba(31, 38, 135, 0.15),
      0 1px 2px rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%);
    z-index: -1;
    backdrop-filter: blur(5px);
    border-radius: 24px;
  }
  
  @media (max-width: 768px) {
    padding: 25px;
  }
`,lv=Ti.h2`
  font-size: 32px;
  color: ${By};
  margin-bottom: 25px;
  text-align: center;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${$y};
    border-radius: 4px;
    box-shadow: 0 0 10px ${Uy};
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`,cv=Ti.div`
  position: relative;
  z-index: 9999;
  background: ${qy};
  padding: 10px;
  border-radius: 12px;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`,uv=Ti.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 15px 0;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,dv=Ti.div`
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border-radius: 26px;
  background: linear-gradient(45deg, 
    ${Dy}50, 
    transparent, 
    ${$y}50, 
    transparent,
    ${Dy}50
  );
  z-index: -1;
  filter: blur(2px);
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${sv}:hover & {
    opacity: 1;
    animation: borderRotate 6s linear infinite;
  }
  
  @keyframes borderRotate {
    0% { background-position: 0% 0%; }
    100% { background-position: 300% 0%; }
  }
`,pv=Ti(wp.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${Ly};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 153, 204, 0.3);
  cursor: pointer;
  z-index: 1000;
`,fv=Ti.div`
  position: relative;
  z-index: 9999;
  background: ${qy};
  padding: 10px;
  border-radius: 12px;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`,hv=Ti.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: skewX(-20deg);
  animation: shimmer 3s infinite;
  pointer-events: none;
  
  @keyframes shimmer {
    0% { transform: translateX(-150%) skewX(-20deg); }
    50% { transform: translateX(-60%) skewX(-20deg); }
    100% { transform: translateX(150%) skewX(-20deg); }
  }
`,mv=Ti.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  pointer-events: none;
  overflow: hidden;
  z-index: -1;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 80%
    );
    opacity: 0.5;
  }
`,gv=document.createElement("style");gv.type="text/css",gv.appendChild(document.createTextNode("\n  @keyframes spin {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n  }\n  \n  @keyframes borderRotate {\n    0% { background-position: 0% 0%; }\n    100% { background-position: 300% 0%; }\n  }\n  \n  @keyframes shimmer {\n    0% { transform: translateX(-150%) skewX(-20deg); }\n    50% { transform: translateX(-60%) skewX(-20deg); }\n    100% { transform: translateX(150%) skewX(-20deg); }\n  }\n  \n  @keyframes pulse {\n    0% { transform: scale(1) rotate(0deg); opacity: 0.9; }\n    50% { transform: scale(1.1) rotate(10deg); opacity: 1; }\n    100% { transform: scale(1) rotate(0deg); opacity: 0.9; }\n  }\n")),document.head.appendChild(gv);const yv=()=>{const e=T(),n=v((e=>e.selectedCategories)),{playSound:r}=rf(),{musicEnabled:o,volume:i}=v((e=>({musicEnabled:e.musicEnabled,volume:e.volume}))),[a,s]=(0,t.useState)([{},{}]),[l,c]=(0,t.useState)(!1),[u,d]=(0,t.useState)(!1),[p,f]=(0,t.useState)(!0);(0,t.useRef)(null);(0,t.useEffect)((()=>{f(!0);try{null!==localStorage.getItem("showSnow")&&localStorage.removeItem("showSnow")}catch(e){console.error("Error accessing localStorage:",e)}}),[]),(0,t.useEffect)((()=>{const[e,t]=a,r=e.name&&""!==e.name.trim()&&t.name&&""!==t.name.trim(),o=n.length>=3;c(Boolean(r&&o))}),[a,n]);const h=(e,t)=>{const n=[...a];n[e]=t,s(n)},m={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:80,damping:12}}},g={animate:e=>({y:[0,15,0],rotate:[0,10,0],scale:[1,1.05,1],transition:{duration:e,repeat:1/0,ease:"easeInOut"}})};return(0,of.jsxs)(Wy,{as:wp.div,initial:"hidden",animate:"visible",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.2,duration:.6}}},children:[(0,of.jsx)(Hp,{snowflakeCount:300,speed:[.5,2],wind:[-.5,.5],radius:[1,3],color:"rgba(255, 255, 255, 0.9)",style:{position:"fixed",width:"100vw",height:"100vh",zIndex:1,pointerEvents:"none",opacity:p?1:0,transition:"opacity 0.5s ease"}}),(0,of.jsx)(Ey,{active:!0,hideDefaultCursor:!1}),(0,of.jsx)(iv,{size:"42px",top:"15%",left:"5%",variants:g,custom:10,animate:"animate",children:"\u2744\ufe0f"}),(0,of.jsx)(iv,{size:"36px",top:"25%",left:"85%",variants:g,custom:12,animate:"animate",children:"\u2744\ufe0f"}),(0,of.jsx)(iv,{size:"28px",top:"65%",left:"8%",variants:g,custom:15,animate:"animate",children:"\u2744\ufe0f"}),(0,of.jsx)(iv,{size:"32px",top:"70%",left:"90%",variants:g,custom:9,animate:"animate",children:"\u2744\ufe0f"}),(0,of.jsx)(iv,{size:"24px",top:"40%",left:"92%",variants:g,custom:11,animate:"animate",children:"\u2744\ufe0f"}),(0,of.jsx)(iv,{size:"38px",top:"55%",left:"22%",variants:g,custom:13,animate:"animate",children:"\u2744\ufe0f"}),(0,of.jsx)(iv,{size:"30px",top:"32%",left:"75%",variants:g,custom:8,animate:"animate",children:"\u2744\ufe0f"}),(0,of.jsx)(ov,{animate:{y:[0,10,0],transition:{repeat:1/0,duration:20,ease:"easeInOut"}},children:(0,of.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 1440 690",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",children:[(0,of.jsx)("defs",{children:(0,of.jsxs)("linearGradient",{id:"waveGradient",x1:"0%",y1:"50%",x2:"100%",y2:"50%",children:[(0,of.jsx)("stop",{offset:"5%",stopColor:"#66d4ff",stopOpacity:"0.15"}),(0,of.jsx)("stop",{offset:"95%",stopColor:"#0099cc",stopOpacity:"0.15"})]})}),(0,of.jsx)("path",{d:"M 0,700 L 0,105 C 57.931295087598755,126.16935760906905 115.86259017519751,147.3387152181381 195,141 C 274.1374098248025,134.6612847818619 374.4809343868087,100.81449673651665 446,102 C 517.5190656131913,103.18550326348335 560.2136722775678,139.40329783579529 625,130 C 689.7863277224322,120.59670216420473 776.6643765029202,65.5723119203023 852,62 C 927.3356234970798,58.42768807969771 991.1288217107522,106.30745448299555 1047,128 C 1102.8711782892478,149.69254551700445 1150.8203366540708,145.19787014771558 1215,137 C 1279.1796633459292,128.80212985228442 1359.5898316729645,116.90106492614221 1440,105 L 1440,700 L 0,700 Z",fill:"url(#waveGradient)"}),(0,of.jsx)("path",{d:"M 0,700 L 0,245 C 51.778770182068016,233.00824458948816 103.55754036413603,221.01648917897631 172,216 C 240.44245963586397,210.98351082102369 325.5486087255239,212.94228787358296 393,208 C 460.4513912744761,203.05771212641704 510.2480247337686,191.21435932669186 586,194 C 661.7519752662314,196.78564067330814 763.4592923394022,214.20027481964962 844,237 C 924.5407076605978,259.7997251803504 983.9148059086224,287.9845413947097 1043,280 C 1102.0851940913776,272.0154586052903 1160.881484026108,227.86155960151152 1227,216 C 1293.118515973892,204.13844039848848 1366.559257986946,224.56922019924423 1440,245 L 1440,700 L 0,700 Z",fill:"url(#waveGradient)",fillOpacity:"0.3"}),(0,of.jsx)("path",{d:"M 0,700 L 0,385 C 72.97148746135349,385.92133287530055 145.94297492270698,386.84266575060116 208,397 C 270.057025077293,407.15733424939884 321.1995877705256,426.55066987289587 382,417 C 442.8004122294744,407.44933012710413 513.2586739951905,368.95465475781515 592,354 C 670.7413260048095,339.04534524218485 757.7657162487119,347.63071109584337 830,348 C 902.2342837512881,348.36928890415663 959.6784610099623,340.5225008588114 1031,337 C 1102.3215389900377,333.4774991411886 1187.5204397114394,334.27928546891104 1258,343 C 1328.4795602885606,351.72071453108896 1384.2397801442803,368.3603572655445 1440,385 L 1440,700 L 0,700 Z",fill:"url(#waveGradient)",fillOpacity:"0.4"}),(0,of.jsx)("path",{d:"M 0,700 L 0,525 C 56.53452421848161,538.7059429749227 113.06904843696321,552.4118859498454 181,548 C 248.93095156303679,543.5881140501546 328.2583304706287,521.0583991755411 403,505 C 477.7416695293713,488.94160082445893 547.8976296805223,479.35451734799045 616,492 C 684.1023703194777,504.64548265200955 750.1511508072829,539.5235314324974 825,543 C 899.8488491927171,546.4764685675026 983.4977670903468,518.55135692202 1052,524 C 1120.5022329096532,529.44864307798 1173.8577808313294,568.2710408794229 1236,574 C 1298.1422191686706,579.7289591205771 1369.0711095843353,552.3644795602886 1440,525 L 1440,700 L 0,700 Z",fill:"url(#waveGradient)",fillOpacity:"0.5"})]})}),(0,of.jsxs)(Qy,{as:wp.header,variants:m,children:[(0,of.jsx)(Yy,{className:"halloween-drip",children:"Frosty Trivia"}),(0,of.jsx)(Gy,{children:"\u0628\u0631\u0645\u062c\u0629 \u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0627\u0644\u0634\u0627\u0639\u0631 "}),(0,of.jsx)(Ky,{children:"\u0627\u0633\u062a\u0639\u062f \u0644\u062a\u062c\u0631\u0628\u0629 \u0644\u0639\u0628\u0629 \u0633\u0624\u0627\u0644 \u0648\u062c\u0648\u0627\u0628 \u0631\u0627\u0626\u0639\u0629 \u0648\u0645\u0633\u0644\u064a\u0629! \u0627\u062e\u062a\u0628\u0631 \u0645\u0639\u0644\u0648\u0645\u0627\u062a\u0643 \u0648\u062a\u0646\u0627\u0641\u0633 \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0644\u0639\u0628\u0629 \u0627\u0644\u062c\u0645\u0627\u0639\u064a\u0629 "}),(0,of.jsxs)(uv,{children:[(0,of.jsxs)(cv,{children:[(0,of.jsx)(xy,{isMusicEnabled:o,volume:i,onToggleMusic:()=>{e(hn())},onVolumeChange:t=>{e(gn(Number(t.target.value)/100))}}),(0,of.jsx)(hv,{})]}),(0,of.jsxs)(fv,{children:[(0,of.jsx)(zy,{}),(0,of.jsx)(hv,{})]})]}),(0,of.jsx)(Xy,{onClick:()=>{f(!p),r("button-click")},whileHover:{scale:1.1,rotate:15},whileTap:{scale:.9},initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:1,duration:.5},children:p?"\u2744\ufe0f":"\u2600\ufe0f"})]}),(0,of.jsxs)(nv,{as:wp.div,variants:m,children:[(0,of.jsx)(tv,{onClick:()=>d(!0),whileHover:{scale:1.05,y:-5},whileTap:{scale:.95,y:2},initial:{boxShadow:"0 8px 15px rgba(0, 153, 204, 0.2)"},animate:{boxShadow:["0 8px 15px rgba(0, 153, 204, 0.2)","0 12px 20px rgba(0, 153, 204, 0.3)","0 8px 15px rgba(0, 153, 204, 0.2)"],transition:{duration:2,repeat:1/0,ease:"easeInOut"}},children:"\u0639\u0637\u0646\u0627 \u0631\u0627\u064a\u0643 \ud83d\udcdd"}),(0,of.jsx)(ev,{onClick:()=>e(fn("questionManagement")),whileHover:{scale:1.05,y:-5},whileTap:{scale:.95,y:2},initial:{boxShadow:"0 8px 15px rgba(0, 153, 204, 0.2)"},animate:{boxShadow:["0 8px 15px rgba(0, 153, 204, 0.2)","0 12px 20px rgba(0, 153, 204, 0.3)","0 8px 15px rgba(0, 153, 204, 0.2)"],transition:{duration:2,repeat:1/0,ease:"easeInOut",delay:.5}},children:"\ud83d\udcdd \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0623\u0633\u0626\u0644\u0629"})]}),(0,of.jsx)(my,{isOpen:u,onClose:()=>d(!1)}),(0,of.jsxs)(sv,{as:wp.div,variants:m,children:[(0,of.jsx)(dv,{}),(0,of.jsx)(mv,{}),(0,of.jsx)(lv,{className:"halloween-drip",children:"\u0627\u062e\u062a\u0631 \u0627\u0644\u0641\u0626\u0627\u062a"}),(0,of.jsx)("div",{style:{width:"100%",position:"relative",zIndex:1},children:(0,of.jsx)(lm,{})})]}),(0,of.jsxs)(sv,{as:wp.div,variants:m,children:[(0,of.jsx)(dv,{}),(0,of.jsx)(mv,{}),(0,of.jsx)(lv,{className:"halloween-drip",children:"\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0641\u0631\u0642"}),(0,of.jsxs)(Jy,{children:[(0,of.jsx)(ty,{teamNumber:1,onChange:e=>h(0,e),teamData:a[0]}),(0,of.jsx)(ty,{teamNumber:2,onChange:e=>h(1,e),teamData:a[1]})]})]}),(0,of.jsx)(rv,{as:wp.div,variants:m,children:(0,of.jsxs)(Zy,{disabled:!l,onClick:()=>{if(!l)return;r("button-click");const t=a.map(((e,t)=>({id:`team-${t+1}`,name:e.name||`Team ${t+1}`,avatar:e.avatar||"\ud83d\ude0e",score:0,abilities:{chatgpt:{type:"chatgpt",used:!1},double:{type:"double",used:!1,active:!1},google:{type:"google",used:!1},dismiss:{type:"dismiss",used:!1},electric:{type:"electric",used:!1,cooldown:0,cooldownStart:0}},pointsMultiplier:1})));console.log("Starting game with teams:",t),oy(),e(sn(t))},whileHover:{scale:1.08,y:-5},whileTap:{scale:.95,y:2},animate:l?{boxShadow:["0 10px 25px rgba(255, 126, 95, 0.4)","0 15px 35px rgba(255, 126, 95, 0.7)","0 10px 25px rgba(255, 126, 95, 0.4)"],y:[0,-5,0],scale:[1,1.05,1],transition:{boxShadow:{duration:2,repeat:1/0,ease:"easeInOut"},y:{duration:1.5,repeat:1/0,ease:"easeInOut",repeatType:"reverse"},scale:{duration:1.5,repeat:1/0,ease:"easeInOut",repeatType:"reverse"}}}:{},children:[l&&(0,of.jsx)(wp.span,{style:{position:"absolute",top:"-15px",left:"-15px",fontSize:"28px"},animate:{rotate:360},transition:{duration:4,repeat:1/0,ease:"linear"},children:"\u2728"}),"\u0627\u0628\u062f\u0623 \u0627\u0644\u0644\u0639\u0628\u0629",l&&(0,of.jsx)(wp.span,{style:{position:"absolute",bottom:"-15px",right:"-15px",fontSize:"28px"},animate:{rotate:360},transition:{duration:4,repeat:1/0,ease:"linear"},children:"\u2728"})]})}),(0,of.jsx)(av,{as:wp.footer,variants:m,children:(0,of.jsx)(wp.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},children:"Frosty Trivia - \u0635\u0646\u0639 \u0641\u064a \u0642\u0637\u0631 - \u0625\u0635\u062f\u0627\u0631 1.0"})}),(0,of.jsx)(pv,{whileHover:{scale:1.1,rotate:5},whileTap:{scale:.9},initial:{opacity:0,y:50},animate:{opacity:1,y:0,transition:{delay:1.5,type:"spring"}},onClick:()=>d(!0),children:"\u2754"})]})};var vv={};!function e(t,n,r,o){var i=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),a="function"===typeof Path2D&&"function"===typeof DOMMatrix,s=function(){if(!t.OffscreenCanvas)return!1;var e=new OffscreenCanvas(1,1),n=e.getContext("2d");n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();try{n.createPattern(r,"no-repeat")}catch(o){return!1}return!0}();function l(){}function c(e){var r=n.exports.Promise,o=void 0!==r?r:t.Promise;return"function"===typeof o?new o(e):(e(l,l),null)}var u,d,p,f=(u=s,d=new Map,{transform:function(e){if(u)return e;if(d.has(e))return d.get(e);var t=new OffscreenCanvas(e.width,e.height);return t.getContext("2d").drawImage(e,0,0),d.set(e,t),t},clear:function(){d.clear()}}),h=function(){var e,t,n=Math.floor(1e3/60),r={},o=0;return"function"===typeof requestAnimationFrame&&"function"===typeof cancelAnimationFrame?(e=function(e){var t=Math.random();return r[t]=requestAnimationFrame((function i(a){o===a||o+n-1<a?(o=a,delete r[t],e()):r[t]=requestAnimationFrame(i)})),t},t=function(e){r[e]&&cancelAnimationFrame(r[e])}):(e=function(e){return setTimeout(e,n)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),m=function(){var t,n,o={};return function(){if(t)return t;if(!r&&i){var a=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{t=new Worker(URL.createObjectURL(new Blob([a])))}catch(s){return void 0!==typeof console&&"function"===typeof console.warn&&console.warn("\ud83c\udf8a Could not load worker",s),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,i,a){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=c((function(i){function l(t){t.data.callback===s&&(delete o[s],e.removeEventListener("message",l),n=null,f.clear(),a(),i())}e.addEventListener("message",l),t(r,s),o[s]=l.bind(null,{data:{callback:s}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),o)o[t](),delete o[t]}}(t)}return t}}(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(e,t,n){return function(e,t){return t?t(e):e}(e&&(null!==(r=e[t])&&void 0!==r)?e[t]:g[t],n);var r}function v(e){return e<0?0:Math.floor(e)}function b(e){return parseInt(e,16)}function x(e){return e.map(w)}function w(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:b(t.substring(0,2)),g:b(t.substring(2,4)),b:b(t.substring(4,6))}}function k(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function S(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function E(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function C(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,o=t.y+t.random*t.tiltSin,i=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),a&&"path"===t.shape.type&&"string"===typeof t.shape.path&&Array.isArray(t.shape.matrix))e.fill(function(e,t,n,r,o,i,a){var s=new Path2D(e),l=new Path2D;l.addPath(s,new DOMMatrix(t));var c=new Path2D;return c.addPath(l,new DOMMatrix([Math.cos(a)*o,Math.sin(a)*o,-Math.sin(a)*i,Math.cos(a)*i,n,r])),c}(t.shape.path,t.shape.matrix,t.x,t.y,.1*Math.abs(i-r),.1*Math.abs(s-o),Math.PI/10*t.wobble));else if("bitmap"===t.shape.type){var l=Math.PI/10*t.wobble,c=.1*Math.abs(i-r),u=.1*Math.abs(s-o),d=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,h=new DOMMatrix([Math.cos(l)*c,Math.sin(l)*c,-Math.sin(l)*u,Math.cos(l)*u,t.x,t.y]);h.multiplySelf(new DOMMatrix(t.shape.matrix));var m=e.createPattern(f.transform(t.shape.bitmap),"no-repeat");m.setTransform(h),e.globalAlpha=1-n,e.fillStyle=m,e.fillRect(t.x-d/2,t.y-p/2,d,p),e.globalAlpha=1}else if("circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(i-r)*t.ovalScalar,Math.abs(s-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,o,i,a,s,l){e.save(),e.translate(t,n),e.rotate(i),e.scale(r,o),e.arc(0,0,1,a,s,l),e.restore()}(e,t.x,t.y,Math.abs(i-r)*t.ovalScalar,Math.abs(s-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var g=Math.PI/2*3,y=4*t.scalar,v=8*t.scalar,b=t.x,x=t.y,w=5,k=Math.PI/w;w--;)b=t.x+Math.cos(g)*v,x=t.y+Math.sin(g)*v,e.lineTo(b,x),g+=k,b=t.x+Math.cos(g)*y,x=t.y+Math.sin(g)*y,e.lineTo(b,x),g+=k;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(o)),e.lineTo(Math.floor(i),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function j(e,n){var a,s=!e,l=!!y(n||{},"resize"),u=!1,d=y(n,"disableForReducedMotion",Boolean),p=i&&!!y(n||{},"useWorker")?m():null,g=s?k:S,b=!(!e||!p)&&!!e.__confetti_initialized,w="function"===typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function j(t,n,i){for(var s,l,u=y(t,"particleCount",v),d=y(t,"angle",Number),p=y(t,"spread",Number),m=y(t,"startVelocity",Number),b=y(t,"decay",Number),w=y(t,"gravity",Number),k=y(t,"drift",Number),S=y(t,"colors",x),j=y(t,"ticks",Number),T=y(t,"shapes"),P=y(t,"scalar"),O=!!y(t,"flat"),_=function(e){var t=y(e,"origin",Object);return t.x=y(t,"x",Number),t.y=y(t,"y",Number),t}(t),R=u,A=[],M=e.width*_.x,I=e.height*_.y;R--;)A.push(E({x:M,y:I,angle:d,spread:p,startVelocity:m,color:S[R%S.length],shape:T[(s=0,l=T.length,Math.floor(Math.random()*(l-s))+s)],ticks:j,decay:b,gravity:w,drift:k,scalar:P,flat:O}));return a?a.addFettis(A):(a=function(e,t,n,i,a){var s,l,u=t.slice(),d=e.getContext("2d"),p=c((function(t){function c(){s=l=null,d.clearRect(0,0,i.width,i.height),f.clear(),a(),t()}s=h.frame((function t(){!r||i.width===o.width&&i.height===o.height||(i.width=e.width=o.width,i.height=e.height=o.height),i.width||i.height||(n(e),i.width=e.width,i.height=e.height),d.clearRect(0,0,i.width,i.height),(u=u.filter((function(e){return C(d,e)}))).length?s=h.frame(t):c()})),l=c}));return{addFettis:function(e){return u=u.concat(e),p},canvas:e,promise:p,reset:function(){s&&h.cancel(s),l&&l()}}}(e,A,g,n,i),a.promise)}function T(n){var r=d||y(n,"disableForReducedMotion",Boolean),o=y(n,"zIndex",Number);if(r&&w)return c((function(e){e()}));s&&a?e=a.canvas:s&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(o),document.body.appendChild(e)),l&&!b&&g(e);var i={width:e.width,height:e.height};function f(){if(p){var t={getBoundingClientRect:function(){if(!s)return e.getBoundingClientRect()}};return g(t),void p.postMessage({resize:{width:t.width,height:t.height}})}i.width=i.height=null}function h(){a=null,l&&(u=!1,t.removeEventListener("resize",f)),s&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,b=!1)}return p&&!b&&p.init(e),b=!0,p&&(e.__confetti_initialized=!0),l&&!u&&(u=!0,t.addEventListener("resize",f,!1)),p?p.fire(n,i,h):j(n,i,h)}return T.reset=function(){p&&p.reset(),a&&a.reset()},T}function T(){return p||(p=j(null,{useWorker:!0,resize:!0})),p}n.exports=function(){return T().apply(this,arguments)},n.exports.reset=function(){T().reset()},n.exports.create=j,n.exports.shapeFromPath=function(e){if(!a)throw new Error("path confetti are not supported in this browser");var t,n;"string"===typeof e?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),o=document.createElement("canvas").getContext("2d");if(!n){for(var i,s,l=1e3,c=l,u=l,d=0,p=0,f=0;f<l;f+=2)for(var h=0;h<l;h+=2)o.isPointInPath(r,f,h,"nonzero")&&(c=Math.min(c,f),u=Math.min(u,h),d=Math.max(d,f),p=Math.max(p,h));i=d-c,s=p-u;var m=Math.min(10/i,10/s);n=[m,0,0,m,-Math.round(i/2+c)*m,-Math.round(s/2+u)*m]}return{type:"path",path:t,matrix:n}},n.exports.shapeFromText=function(e){var t,n=1,r="#000000",o='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"===typeof e?t=e:(t=e.text,n="scalar"in e?e.scalar:n,o="fontFamily"in e?e.fontFamily:o,r="color"in e?e.color:r);var i=10*n,a=i+"px "+o,s=new OffscreenCanvas(i,i),l=s.getContext("2d");l.font=a;var c=l.measureText(t),u=Math.ceil(c.actualBoundingBoxRight+c.actualBoundingBoxLeft),d=Math.ceil(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent),p=c.actualBoundingBoxLeft+2,f=c.actualBoundingBoxAscent+2;u+=4,d+=4,(l=(s=new OffscreenCanvas(u,d)).getContext("2d")).font=a,l.fillStyle=r,l.fillText(t,p,f);var h=1/n;return{type:"bitmap",bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}}(function(){return"undefined"!==typeof window?window:"undefined"!==typeof self?self:this||{}}(),vv,!1);const bv=vv.exports;vv.exports.create;const xv="rgba(255, 255, 255, 0.85)",wv="#68b8e8",kv="#a8d5ff",Sv="linear-gradient(135deg, #ffe259 0%, #ffa751 100%)",Ev="linear-gradient(135deg, #e6e6e6 0%, #b3b3b3 100%)",Cv="#2c3e50",jv="#7a96b2",Tv="#5bd3a2",Pv="0 0 20px rgba(91, 211, 162, 0.5)",Ov="0 10px 30px rgba(166, 218, 255, 0.4)",_v=Ti(wp.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  background: ${xv};
  backdrop-filter: blur(15px);
  border-radius: 30px;
  box-shadow: ${Ov};
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  color: ${Cv};
  overflow: hidden;
  position: relative;
  border: 2px solid rgba(166, 218, 255, 0.6);
  
  /* Frost effect on the edges */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(166, 218, 255, 0.3));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`,Rv=Ti.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 5;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
      radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.8) 3px, transparent 3px),
      radial-gradient(circle at 60% 20%, rgba(255, 255, 255, 0.8) 1px, transparent 1px),
      radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.8) 2px, transparent 2px);
    background-size: 250px 250px;
    animation: snowfall 8s linear infinite;
  }
  
  @keyframes snowfall {
    0% { background-position: 0 0; }
    100% { background-position: 250px 250px; }
  }
`,Av=Ti(wp.div)`
  font-size: 80px;
  margin-bottom: 10px;
  filter: drop-shadow(0 5px 15px rgba(255, 215, 0, 0.4));
`,Mv=Ti(wp.div)`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  background: ${Sv};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`,Iv=Ti(wp.div)`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  background: ${Ev};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`,zv=Ti(wp.div)`
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: ${Tv};
  text-shadow: ${Pv};
  
  @media (max-width: 768px) {
    font-size: 54px;
  }
`,Lv=Ti(wp.div)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 30px 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`,Dv=Ti(wp.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  border-radius: 20px;
  background-color: ${e=>e.isWinner?"rgba(91, 211, 162, 0.15)":"rgba(166, 218, 255, 0.15)"};
  border: ${e=>e.isWinner?"3px solid rgba(91, 211, 162, 0.6)":"2px solid rgba(166, 218, 255, 0.3)"};
  box-shadow: ${e=>e.isWinner?"0 8px 25px rgba(91, 211, 162, 0.25)":"0 8px 25px rgba(166, 218, 255, 0.2)"};
  transform: ${e=>e.isWinner?"scale(1.05)":"scale(1)"};
  position: relative;
  overflow: hidden;
  
  /* Shimmer effect for winner */
  ${e=>e.isWinner&&"\n    &:after {\n      content: '';\n      position: absolute;\n      top: -50%;\n      left: -50%;\n      right: -50%;\n      bottom: -50%;\n      background: linear-gradient(\n        45deg,\n        rgba(255,255,255,0) 0%,\n        rgba(255,255,255,0.1) 50%,\n        rgba(255,255,255,0) 100%\n      );\n      transform: rotate(45deg);\n      animation: shimmer 3s infinite;\n    }\n    \n    @keyframes shimmer {\n      0% { transform: translateX(-100%) rotate(45deg); }\n      100% { transform: translateX(100%) rotate(45deg); }\n    }\n  "}
  
  @media (max-width: 768px) {
    padding: 20px 40px;
    width: 80%;
  }
`,Nv=Ti.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`,$v=Ti.div`
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${e=>e.isWinner?"rgba(91, 211, 162, 0.2)":"rgba(166, 218, 255, 0.2)"};
  box-shadow: 0 4px 15px ${e=>e.isWinner?"rgba(91, 211, 162, 0.3)":"rgba(166, 218, 255, 0.3)"};
  border: 2px solid ${e=>e.isWinner?"rgba(91, 211, 162, 0.6)":"rgba(166, 218, 255, 0.3)"};
`,Fv=Ti(wp.div)`
  position: absolute;
  top: -15px;
  right: -15px;
  background: ${Sv};
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.3);
`,Uv=Ti.div`
  font-size: 28px;
  font-weight: 600;
  color: ${jv};
`,Bv=Ti.div`
  font-size: 78px;
  font-weight: bold;
  color: ${e=>e.isWinner?Tv:wv};
  text-shadow: ${e=>e.isWinner?"0 2px 10px rgba(91, 211, 162, 0.3)":"0 2px 10px rgba(166, 218, 255, 0.3)"};
  
  @media (max-width: 768px) {
    font-size: 66px;
  }
`,Vv=Ti(wp.button)`
  background: linear-gradient(135deg, ${wv} 0%, ${kv} 100%);
  color: white;
  border: none;
  padding: 20px 40px;
  font-size: 28px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 40px;
  box-shadow: 0 10px 20px rgba(104, 184, 232, 0.4);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  /* Frost effect */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent);
    pointer-events: none;
  }
  
  &:hover {
    box-shadow: 0 15px 30px rgba(104, 184, 232, 0.6);
  }
  
  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 24px;
  }
`,qv=Ti(wp.div)`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`,Hv=Ti.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(166, 218, 255, 0.1);
  padding: 15px 25px;
  border-radius: 15px;
  border: 1px solid rgba(166, 218, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`,Wv=Ti.div`
  font-size: 36px;
  font-weight: bold;
  color: ${wv};
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`,Qv=Ti.div`
  font-size: 16px;
  color: ${jv};
  margin-top: 5px;
`,Yv=()=>{var e,n,r,o,i,a;const s=T(),[l,c]=(0,t.useState)(!0),{teams:u,questionsPlayed:d,roundsPlayed:p}=v((e=>({teams:e.teams,questionsPlayed:e.questionsPlayed||0,roundsPlayed:e.currentRound||0}))),{playSound:f}=rf(),h=(null===(e=u[0])||void 0===e?void 0:e.score)||0,m=(null===(n=u[1])||void 0===n?void 0:n.score)||0,g=h>m?u[0]:u[1],y=h===m,b=Math.abs(h-m);(0,t.useEffect)((()=>{const e=(null===g||void 0===g?void 0:g.name)||(y?"Tie":"Unknown"),t=Math.max(h,m);if(iy(e,t),f("victory"),!l)return;const n=Date.now()+6e3,r=(e,t)=>Math.random()*(t-e)+e;bv({particleCount:150,spread:70,origin:{y:.6}});const o=setInterval((()=>{n-Date.now()<=0?clearInterval(o):(bv({particleCount:3,angle:r(55,125),spread:r(50,70),origin:{x:r(.1,.3),y:Math.random()-.2},colors:["#5bd3a2","#68b8e8","#a8d5ff","#ffd700","#9cddff"],shapes:["circle","square"],gravity:.8,scalar:1.2}),bv({particleCount:3,angle:r(55,125),spread:r(50,70),origin:{x:r(.7,.9),y:Math.random()-.2},colors:["#5bd3a2","#68b8e8","#a8d5ff","#ffd700","#9cddff"],shapes:["circle","square"],gravity:.8,scalar:1.2}))}),250);return()=>clearInterval(o)}),[f,l]);return(0,of.jsx)(Pp,{children:(0,of.jsxs)(_v,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.8},children:[(0,of.jsx)(Rv,{}),!y&&(0,of.jsx)(Av,{initial:{scale:0,rotate:-20},animate:{scale:1,rotate:0},transition:{delay:.3,type:"spring",stiffness:200},children:"\ud83c\udfc6"}),y?(0,of.jsx)(Iv,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3,duration:.8},children:"!\u062a\u0639\u0627\u062f\u0644 \u0627\u0644\u0641\u0631\u064a\u0642\u0627\u0646"}):(0,of.jsx)(Mv,{initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3,duration:.8},children:"!\u0627\u0644\u0641\u0631\u064a\u0642 \u0627\u0644\u0641\u0627\u0626\u0632"}),!y&&(0,of.jsx)(zv,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.8,duration:.5},children:(0,of.jsx)(Yf,{text:(null===g||void 0===g?void 0:g.name)||""})}),(0,of.jsxs)(Lv,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.3,duration:.5},children:[(0,of.jsxs)(Dv,{isWinner:h>m,whileHover:{y:-5},transition:{type:"spring",stiffness:300},children:[h>m&&(0,of.jsx)(Fv,{initial:{scale:0,rotate:-30},animate:{scale:1,rotate:0},transition:{delay:1.6,type:"spring"},children:"\ud83e\udd47"}),(0,of.jsxs)(Nv,{children:[(0,of.jsx)($v,{isWinner:h>m,children:(null===(r=u[0])||void 0===r?void 0:r.avatar)||"\ud83d\udc65"}),(0,of.jsx)(Uv,{children:(0,of.jsx)(Yf,{text:(null===(o=u[0])||void 0===o?void 0:o.name)||"\u0627\u0644\u0641\u0631\u064a\u0642 1"})})]}),(0,of.jsx)(Bv,{isWinner:h>m,children:h})]}),(0,of.jsxs)(Dv,{isWinner:m>h,whileHover:{y:-5},transition:{type:"spring",stiffness:300},children:[m>h&&(0,of.jsx)(Fv,{initial:{scale:0,rotate:-30},animate:{scale:1,rotate:0},transition:{delay:1.6,type:"spring"},children:"\ud83e\udd47"}),(0,of.jsxs)(Nv,{children:[(0,of.jsx)($v,{isWinner:m>h,children:(null===(i=u[1])||void 0===i?void 0:i.avatar)||"\ud83d\udc65"}),(0,of.jsx)(Uv,{children:(0,of.jsx)(Yf,{text:(null===(a=u[1])||void 0===a?void 0:a.name)||"\u0627\u0644\u0641\u0631\u064a\u0642 2"})})]}),(0,of.jsx)(Bv,{isWinner:m>h,children:m})]})]}),(0,of.jsx)(qv,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.5,duration:.5},children:(0,of.jsxs)(Hv,{children:[(0,of.jsx)(Wv,{children:b}),(0,of.jsx)(Qv,{children:"\u0641\u0631\u0642 \u0627\u0644\u0646\u0642\u0627\u0637"})]})}),(0,of.jsx)(Vv,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{f("button-click"),s(Mn())},initial:{y:100,opacity:0},animate:{y:0,opacity:1},transition:{delay:1.8,duration:.5},children:"\u0644\u0639\u0628 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649"}),(0,of.jsx)(wp.button,{style:{position:"absolute",bottom:"20px",right:"20px",background:"none",border:"none",fontSize:"24px",cursor:"pointer",opacity:l?1:.5},whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>{c(!l),l||bv({particleCount:100,spread:70,origin:{y:.6}})},title:l?"\u0625\u064a\u0642\u0627\u0641 \u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0644":"\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0644",children:"\ud83c\udf89"})]})})};function Gv(e,t){return function(){return e.apply(t,arguments)}}const{toString:Kv}=Object.prototype,{getPrototypeOf:Xv}=Object,Jv=(Zv=Object.create(null),e=>{const t=Kv.call(e);return Zv[t]||(Zv[t]=t.slice(8,-1).toLowerCase())});var Zv;const eb=e=>(e=e.toLowerCase(),t=>Jv(t)===e),tb=e=>t=>typeof t===e,{isArray:nb}=Array,rb=tb("undefined");const ob=eb("ArrayBuffer");const ib=tb("string"),ab=tb("function"),sb=tb("number"),lb=e=>null!==e&&"object"===typeof e,cb=e=>{if("object"!==Jv(e))return!1;const t=Xv(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ub=eb("Date"),db=eb("File"),pb=eb("Blob"),fb=eb("FileList"),hb=eb("URLSearchParams"),[mb,gb,yb,vb]=["ReadableStream","Request","Response","Headers"].map(eb);function bb(e,t){let n,r,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),nb(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=o?Object.getOwnPropertyNames(e):Object.keys(e),i=r.length;let a;for(n=0;n<i;n++)a=r[n],t.call(null,e[a],a,e)}}function xb(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const wb="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,kb=e=>!rb(e)&&e!==wb;const Sb=(Eb="undefined"!==typeof Uint8Array&&Xv(Uint8Array),e=>Eb&&e instanceof Eb);var Eb;const Cb=eb("HTMLFormElement"),jb=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),Tb=eb("RegExp"),Pb=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};bb(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)};const Ob=eb("AsyncFunction"),_b=(Rb="function"===typeof setImmediate,Ab=ab(wb.postMessage),Rb?setImmediate:Ab?((e,t)=>(wb.addEventListener("message",(n=>{let{source:r,data:o}=n;r===wb&&o===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),wb.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var Rb,Ab;const Mb="undefined"!==typeof queueMicrotask?queueMicrotask.bind(wb):"undefined"!==typeof process&&process.nextTick||_b,Ib={isArray:nb,isArrayBuffer:ob,isBuffer:function(e){return null!==e&&!rb(e)&&null!==e.constructor&&!rb(e.constructor)&&ab(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||ab(e.append)&&("formdata"===(t=Jv(e))||"object"===t&&ab(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ob(e.buffer),t},isString:ib,isNumber:sb,isBoolean:e=>!0===e||!1===e,isObject:lb,isPlainObject:cb,isReadableStream:mb,isRequest:gb,isResponse:yb,isHeaders:vb,isUndefined:rb,isDate:ub,isFile:db,isBlob:pb,isRegExp:Tb,isFunction:ab,isStream:e=>lb(e)&&ab(e.pipe),isURLSearchParams:hb,isTypedArray:Sb,isFileList:fb,forEach:bb,merge:function e(){const{caseless:t}=kb(this)&&this||{},n={},r=(r,o)=>{const i=t&&xb(n,o)||o;cb(n[i])&&cb(r)?n[i]=e(n[i],r):cb(r)?n[i]=e({},r):nb(r)?n[i]=r.slice():n[i]=r};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&bb(arguments[o],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return bb(t,((t,r)=>{n&&ab(t)?e[r]=Gv(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==n&&Xv(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Jv,kindOfTest:eb,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(nb(e))return e;let t=e.length;if(!sb(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Cb,hasOwnProperty:jb,hasOwnProp:jb,reduceDescriptors:Pb,freezeMethods:e=>{Pb(e,((t,n)=>{if(ab(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];ab(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return nb(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:xb,global:wb,isContextDefined:kb,isSpecCompliantForm:function(e){return!!(e&&ab(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(lb(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=nb(e)?[]:{};return bb(e,((e,t)=>{const i=n(e,r+1);!rb(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:Ob,isThenable:e=>e&&(lb(e)||ab(e))&&ab(e.then)&&ab(e.catch),setImmediate:_b,asap:Mb};function zb(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}Ib.inherits(zb,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Ib.toJSONObject(this.config),code:this.code,status:this.status}}});const Lb=zb.prototype,Db={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Db[e]={value:e}})),Object.defineProperties(zb,Db),Object.defineProperty(Lb,"isAxiosError",{value:!0}),zb.from=(e,t,n,r,o,i)=>{const a=Object.create(Lb);return Ib.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),zb.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const Nb=zb;function $b(e){return Ib.isPlainObject(e)||Ib.isArray(e)}function Fb(e){return Ib.endsWith(e,"[]")?e.slice(0,-2):e}function Ub(e,t,n){return e?e.concat(t).map((function(e,t){return e=Fb(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Bb=Ib.toFlatObject(Ib,{},null,(function(e){return/^is[A-Z]/.test(e)}));const Vb=function(e,t,n){if(!Ib.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Ib.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Ib.isUndefined(t[e])}))).metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,s=(n.Blob||"undefined"!==typeof Blob&&Blob)&&Ib.isSpecCompliantForm(t);if(!Ib.isFunction(o))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(Ib.isDate(e))return e.toISOString();if(!s&&Ib.isBlob(e))throw new Nb("Blob is not supported. Use a Buffer instead.");return Ib.isArrayBuffer(e)||Ib.isTypedArray(e)?s&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,o){let s=e;if(e&&!o&&"object"===typeof e)if(Ib.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Ib.isArray(e)&&function(e){return Ib.isArray(e)&&!e.some($b)}(e)||(Ib.isFileList(e)||Ib.endsWith(n,"[]"))&&(s=Ib.toArray(e)))return n=Fb(n),s.forEach((function(e,r){!Ib.isUndefined(e)&&null!==e&&t.append(!0===a?Ub([n],r,i):null===a?n:n+"[]",l(e))})),!1;return!!$b(e)||(t.append(Ub(o,n,i),l(e)),!1)}const u=[],d=Object.assign(Bb,{defaultVisitor:c,convertValue:l,isVisitable:$b});if(!Ib.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Ib.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),Ib.forEach(n,(function(n,i){!0===(!(Ib.isUndefined(n)||null===n)&&o.call(t,n,Ib.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])})),u.pop()}}(e),t};function qb(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Hb(e,t){this._pairs=[],e&&Vb(e,this,t)}const Wb=Hb.prototype;Wb.append=function(e,t){this._pairs.push([e,t])},Wb.toString=function(e){const t=e?function(t){return e.call(this,t,qb)}:qb;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const Qb=Hb;function Yb(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Gb(e,t,n){if(!t)return e;const r=n&&n.encode||Yb;Ib.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let i;if(i=o?o(t,n):Ib.isURLSearchParams(t)?t.toString():new Qb(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const Kb=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Ib.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Xb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Jb={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:Qb,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Zb="undefined"!==typeof window&&"undefined"!==typeof document,ex="object"===typeof navigator&&navigator||void 0,tx=Zb&&(!ex||["ReactNative","NativeScript","NS"].indexOf(ex.product)<0),nx="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,rx=Zb&&window.location.href||"http://localhost",ox={...e,...Jb};const ix=function(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),s=o>=e.length;if(i=!i&&Ib.isArray(r)?r.length:i,s)return Ib.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!a;r[i]&&Ib.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],o)&&Ib.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!a}if(Ib.isFormData(e)&&Ib.isFunction(e.entries)){const n={};return Ib.forEachEntry(e,((e,r)=>{t(function(e){return Ib.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const ax={transitional:Xb,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=Ib.isObject(e);o&&Ib.isHTMLForm(e)&&(e=new FormData(e));if(Ib.isFormData(e))return r?JSON.stringify(ix(e)):e;if(Ib.isArrayBuffer(e)||Ib.isBuffer(e)||Ib.isStream(e)||Ib.isFile(e)||Ib.isBlob(e)||Ib.isReadableStream(e))return e;if(Ib.isArrayBufferView(e))return e.buffer;if(Ib.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Vb(e,new ox.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ox.isNode&&Ib.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=Ib.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Vb(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(Ib.isString(e))try{return(t||JSON.parse)(e),Ib.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ax.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(Ib.isResponse(e)||Ib.isReadableStream(e))return e;if(e&&Ib.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw Nb.from(o,Nb.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ox.classes.FormData,Blob:ox.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Ib.forEach(["delete","get","head","post","put","patch"],(e=>{ax.headers[e]={}}));const sx=ax,lx=Ib.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cx=Symbol("internals");function ux(e){return e&&String(e).trim().toLowerCase()}function dx(e){return!1===e||null==e?e:Ib.isArray(e)?e.map(dx):String(e)}function px(e,t,n,r,o){return Ib.isFunction(r)?r.call(this,t,n):(o&&(t=n),Ib.isString(t)?Ib.isString(r)?-1!==t.indexOf(r):Ib.isRegExp(r)?r.test(t):void 0:void 0)}class fx{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ux(t);if(!o)throw new Error("header name must be a non-empty string");const i=Ib.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=dx(e))}const i=(e,t)=>Ib.forEach(e,((e,n)=>o(e,n,t)));if(Ib.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(Ib.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&lx[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(Ib.isHeaders(e))for(const[a,s]of e.entries())o(s,a,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=ux(e)){const n=Ib.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Ib.isFunction(t))return t.call(this,e,n);if(Ib.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ux(e)){const n=Ib.findKey(this,e);return!(!n||void 0===this[n]||t&&!px(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ux(e)){const o=Ib.findKey(n,e);!o||t&&!px(0,n[o],o,t)||(delete n[o],r=!0)}}return Ib.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!px(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return Ib.forEach(this,((r,o)=>{const i=Ib.findKey(n,o);if(i)return t[i]=dx(r),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();a!==o&&delete t[o],t[a]=dx(r),n[a]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return Ib.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Ib.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[cx]=this[cx]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ux(e);t[r]||(!function(e,t){const n=Ib.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return Ib.isArray(e)?e.forEach(r):r(e),this}}fx.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Ib.reduceDescriptors(fx.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),Ib.freezeMethods(fx);const hx=fx;function mx(e,t){const n=this||sx,r=t||n,o=hx.from(r.headers);let i=r.data;return Ib.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function gx(e){return!(!e||!e.__CANCEL__)}function yx(e,t,n){Nb.call(this,null==e?"canceled":e,Nb.ERR_CANCELED,t,n),this.name="CanceledError"}Ib.inherits(yx,Nb,{__CANCEL__:!0});const vx=yx;function bx(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Nb("Request failed with status code "+n.status,[Nb.ERR_BAD_REQUEST,Nb.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const xx=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(s){const l=Date.now(),c=r[a];o||(o=l),n[i]=s,r[i]=l;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),l-o<t)return;const p=c&&l-c;return p?Math.round(1e3*d/p):void 0}};const wx=function(e,t){let n,r,o=0,i=1e3/t;const a=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=i,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-o;for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];t>=i?a(l,e):(n=l,r||(r=setTimeout((()=>{r=null,a(n)}),i-t)))},()=>n&&a(n)]},kx=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const o=xx(50,250);return wx((n=>{const i=n.loaded,a=n.lengthComputable?n.total:void 0,s=i-r,l=o(s);r=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&i<=a?(a-i)/l:void 0,event:n,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),n)},Sx=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ex=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Ib.asap((()=>e(...n)))},Cx=ox.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ox.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ox.origin),ox.navigator&&/(msie|trident)/i.test(ox.navigator.userAgent)):()=>!0,jx=ox.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];Ib.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),Ib.isString(r)&&a.push("path="+r),Ib.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Tx(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&r||0==n?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Px=e=>e instanceof hx?{...e}:e;function Ox(e,t){t=t||{};const n={};function r(e,t,n,r){return Ib.isPlainObject(e)&&Ib.isPlainObject(t)?Ib.merge.call({caseless:r},e,t):Ib.isPlainObject(t)?Ib.merge({},t):Ib.isArray(t)?t.slice():t}function o(e,t,n,o){return Ib.isUndefined(t)?Ib.isUndefined(e)?void 0:r(void 0,e,0,o):r(e,t,0,o)}function i(e,t){if(!Ib.isUndefined(t))return r(void 0,t)}function a(e,t){return Ib.isUndefined(t)?Ib.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const l={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t,n)=>o(Px(e),Px(t),0,!0)};return Ib.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=l[r]||o,a=i(e[r],t[r],r);Ib.isUndefined(a)&&i!==s||(n[r]=a)})),n}const _x=e=>{const t=Ox({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:s,auth:l}=t;if(t.headers=s=hx.from(s),t.url=Gb(Tx(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),Ib.isFormData(r))if(ox.hasStandardBrowserEnv||ox.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(!1!==(n=s.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];s.setContentType([e||"multipart/form-data",...t].join("; "))}if(ox.hasStandardBrowserEnv&&(o&&Ib.isFunction(o)&&(o=o(t)),o||!1!==o&&Cx(t.url))){const e=i&&a&&jx.read(a);e&&s.set(i,e)}return t},Rx="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=_x(e);let o=r.data;const i=hx.from(r.headers).normalize();let a,s,l,c,u,{responseType:d,onUploadProgress:p,onDownloadProgress:f}=r;function h(){c&&c(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(a),r.signal&&r.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=hx.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());bx((function(e){t(e),h()}),(function(e){n(e),h()}),{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new Nb("Request aborted",Nb.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new Nb("Network Error",Nb.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||Xb;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new Nb(t,o.clarifyTimeoutError?Nb.ETIMEDOUT:Nb.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&Ib.forEach(i.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),Ib.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),f&&([l,u]=kx(f,!0),m.addEventListener("progress",l)),p&&m.upload&&([s,c]=kx(p),m.upload.addEventListener("progress",s),m.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(a=t=>{m&&(n(!t||t.type?new vx(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(a),r.signal&&(r.signal.aborted?a():r.signal.addEventListener("abort",a)));const y=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);y&&-1===ox.protocols.indexOf(y)?n(new Nb("Unsupported protocol "+y+":",Nb.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Ax=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,a();const t=e instanceof Error?e:this.reason;r.abort(t instanceof Nb?t:new vx(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new Nb(`timeout ${t} of ms exceeded`,Nb.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:s}=r;return s.unsubscribe=()=>Ib.asap(a),s}},Mx=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Ix=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},zx=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of Ix(e))yield*Mx(n,t)}(e,t);let i,a=0,s=e=>{i||(i=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return s(),void e.close();let i=r.byteLength;if(n){let e=a+=i;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw s(t),t}},cancel:e=>(s(e),o.return())},{highWaterMark:2})},Lx="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Dx=Lx&&"function"===typeof ReadableStream,Nx=Lx&&("function"===typeof TextEncoder?($x=new TextEncoder,e=>$x.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var $x;const Fx=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(o){return!1}},Ux=Dx&&Fx((()=>{let e=!1;const t=new Request(ox.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Bx=Dx&&Fx((()=>Ib.isReadableStream(new Response("").body))),Vx={stream:Bx&&(e=>e.body)};var qx;Lx&&(qx=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Vx[e]&&(Vx[e]=Ib.isFunction(qx[e])?t=>t[e]():(t,n)=>{throw new Nb(`Response type '${e}' is not supported`,Nb.ERR_NOT_SUPPORT,n)})})));const Hx=async(e,t)=>{const n=Ib.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(Ib.isBlob(e))return e.size;if(Ib.isSpecCompliantForm(e)){const t=new Request(ox.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Ib.isArrayBufferView(e)||Ib.isArrayBuffer(e)?e.byteLength:(Ib.isURLSearchParams(e)&&(e+=""),Ib.isString(e)?(await Nx(e)).byteLength:void 0)})(t):n},Wx={http:null,xhr:Rx,fetch:Lx&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:p}=_x(e);c=c?(c+"").toLowerCase():"text";let f,h=Ax([o,i&&i.toAbortSignal()],a);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(l&&Ux&&"get"!==n&&"head"!==n&&0!==(g=await Hx(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(Ib.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=Sx(g,kx(Ex(l)));r=zx(n.body,65536,e,t)}}Ib.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;f=new Request(t,{...p,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:o?d:void 0});let i=await fetch(f);const a=Bx&&("stream"===c||"response"===c);if(Bx&&(s||a&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=Ib.toFiniteNumber(i.headers.get("content-length")),[n,r]=s&&Sx(t,kx(Ex(s),!0))||[];i=new Response(zx(i.body,65536,n,(()=>{r&&r(),m&&m()})),e)}c=c||"text";let y=await Vx[Ib.findKey(Vx,c)||"text"](i,e);return!a&&m&&m(),await new Promise(((t,n)=>{bx(t,n,{data:y,headers:hx.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:f})}))}catch(y){if(m&&m(),y&&"TypeError"===y.name&&/fetch/i.test(y.message))throw Object.assign(new Nb("Network Error",Nb.ERR_NETWORK,e,f),{cause:y.cause||y});throw Nb.from(y,y&&y.code,e,f)}})};Ib.forEach(Wx,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Qx=e=>`- ${e}`,Yx=e=>Ib.isFunction(e)||null===e||!1===e,Gx=e=>{e=Ib.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!Yx(n)&&(r=Wx[(t=String(n)).toLowerCase()],void 0===r))throw new Nb(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map(Qx).join("\n"):" "+Qx(e[0]):"as no adapter specified";throw new Nb("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function Kx(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new vx(null,e)}function Xx(e){Kx(e),e.headers=hx.from(e.headers),e.data=mx.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Gx(e.adapter||sx.adapter)(e).then((function(t){return Kx(e),t.data=mx.call(e,e.transformResponse,t),t.headers=hx.from(t.headers),t}),(function(t){return gx(t)||(Kx(e),t&&t.response&&(t.response.data=mx.call(e,e.transformResponse,t.response),t.response.headers=hx.from(t.response.headers))),Promise.reject(t)}))}const Jx="1.8.2",Zx={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Zx[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ew={};Zx.transitional=function(e,t,n){function r(e,t){return"[Axios v1.8.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new Nb(r(o," has been removed"+(t?" in "+t:"")),Nb.ERR_DEPRECATED);return t&&!ew[o]&&(ew[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}},Zx.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const tw={assertOptions:function(e,t,n){if("object"!==typeof e)throw new Nb("options must be an object",Nb.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const t=e[i],n=void 0===t||a(t,i,e);if(!0!==n)throw new Nb("option "+i+" must be "+n,Nb.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Nb("Unknown option "+i,Nb.ERR_BAD_OPTION)}},validators:Zx},nw=tw.validators;class rw{constructor(e){this.defaults=e,this.interceptors={request:new Kb,response:new Kb}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Ox(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&tw.assertOptions(n,{silentJSONParsing:nw.transitional(nw.boolean),forcedJSONParsing:nw.transitional(nw.boolean),clarifyTimeoutError:nw.transitional(nw.boolean)},!1),null!=r&&(Ib.isFunction(r)?t.paramsSerializer={serialize:r}:tw.assertOptions(r,{encode:nw.function,serialize:nw.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),tw.assertOptions(t,{baseUrl:nw.spelling("baseURL"),withXsrfToken:nw.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&Ib.merge(o.common,o[t.method]);o&&Ib.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=hx.concat(i,o);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!s){const e=[Xx.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=a.length;let p=t;for(d=0;d<u;){const e=a[d++],t=a[d++];try{p=e(p)}catch(f){t.call(this,f);break}}try{c=Xx.call(this,p)}catch(f){return Promise.reject(f)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return Gb(Tx((e=Ox(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Ib.forEach(["delete","get","head","options"],(function(e){rw.prototype[e]=function(t,n){return this.request(Ox(n||{},{method:e,url:t,data:(n||{}).data}))}})),Ib.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ox(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}rw.prototype[e]=t(),rw.prototype[e+"Form"]=t(!0)}));const ow=rw;class iw{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new vx(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new iw((function(t){e=t})),cancel:e}}}const aw=iw;const sw={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(sw).forEach((e=>{let[t,n]=e;sw[n]=t}));const lw=sw;const cw=function e(t){const n=new ow(t),r=Gv(ow.prototype.request,n);return Ib.extend(r,ow.prototype,n,{allOwnKeys:!0}),Ib.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ox(t,n))},r}(sx);cw.Axios=ow,cw.CanceledError=vx,cw.CancelToken=aw,cw.isCancel=gx,cw.VERSION=Jx,cw.toFormData=Vb,cw.AxiosError=Nb,cw.Cancel=cw.CanceledError,cw.all=function(e){return Promise.all(e)},cw.spread=function(e){return function(t){return e.apply(null,t)}},cw.isAxiosError=function(e){return Ib.isObject(e)&&!0===e.isAxiosError},cw.mergeConfig=Ox,cw.AxiosHeaders=hx,cw.formToJSON=e=>ix(Ib.isHTMLForm(e)?new FormData(e):e),cw.getAdapter=Gx,cw.HttpStatusCode=lw,cw.default=cw;const uw=cw;var dw=n(385),pw=n.n(dw);const fw={x:0,y:0,width:0,height:0,unit:"px"},hw=(e,t,n)=>Math.min(Math.max(e,t),n),mw=(e,t)=>e===t||e.width===t.width&&e.height===t.height&&e.x===t.x&&e.y===t.y&&e.unit===t.unit;function gw(e,t,n){return"%"===e.unit?{...fw,...e,unit:"%"}:{unit:"%",x:e.x?e.x/t*100:0,y:e.y?e.y/n*100:0,width:e.width?e.width/t*100:0,height:e.height?e.height/n*100:0}}function yw(e,t,n){return e.unit?"px"===e.unit?{...fw,...e,unit:"px"}:{unit:"px",x:e.x?e.x*t/100:0,y:e.y?e.y*n/100:0,width:e.width?e.width*t/100:0,height:e.height?e.height*n/100:0}:{...fw,...e,unit:"px"}}function vw(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:r,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:o;const c={...e};let u=Math.min(i,r),d=Math.min(a,o),p=Math.min(s,r),f=Math.min(l,o);t&&(t>1?(u=a?a*t:u,d=u/t,p=s*t):(d=i?i/t:d,u=d*t,f=l/t)),c.y<0&&(c.height=Math.max(c.height+c.y,d),c.y=0),c.x<0&&(c.width=Math.max(c.width+c.x,u),c.x=0);const h=r-(c.x+c.width);h<0&&(c.x=Math.min(c.x,r-u),c.width+=h);const m=o-(c.y+c.height);if(m<0&&(c.y=Math.min(c.y,o-d),c.height+=m),c.width<u&&(("sw"===n||"nw"==n)&&(c.x-=u-c.width),c.width=u),c.height<d&&(("nw"===n||"ne"==n)&&(c.y-=d-c.height),c.height=d),c.width>p&&(("sw"===n||"nw"==n)&&(c.x-=p-c.width),c.width=p),c.height>f&&(("nw"===n||"ne"==n)&&(c.y-=f-c.height),c.height=f),t){const e=c.width/c.height;if(e<t){const e=Math.max(c.width/t,d);("nw"===n||"ne"==n)&&(c.y-=e-c.height),c.height=e}else if(e>t){const e=Math.max(c.height*t,u);("sw"===n||"nw"==n)&&(c.x-=e-c.width),c.width=e}}return c}const bw={capture:!0,passive:!1};let xw=0;const ww=class e extends t.PureComponent{constructor(){super(...arguments),this.docMoveBound=!1,this.mouseDownOnCrop=!1,this.dragStarted=!1,this.evData={startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0},this.componentRef=(0,t.createRef)(),this.mediaRef=(0,t.createRef)(),this.initChangeCalled=!1,this.instanceId="rc-"+xw++,this.state={cropIsActive:!1,newCropIsBeingDrawn:!1},this.onCropPointerDown=e=>{const{crop:t,disabled:n}=this.props,r=this.getBox();if(!t)return;const o=yw(t,r.width,r.height);if(n)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});const i=e.target.dataset.ord,a=!!i;let s=e.clientX,l=e.clientY,c=o.x,u=o.y;if(i){const t=e.clientX-r.x,n=e.clientY-r.y;let a=0,d=0;"ne"===i||"e"==i?(a=t-(o.x+o.width),d=n-o.y,c=o.x,u=o.y+o.height):"se"===i||"s"===i?(a=t-(o.x+o.width),d=n-(o.y+o.height),c=o.x,u=o.y):"sw"===i||"w"==i?(a=t-o.x,d=n-(o.y+o.height),c=o.x+o.width,u=o.y):("nw"===i||"n"==i)&&(a=t-o.x,d=n-o.y,c=o.x+o.width,u=o.y+o.height),s=c+r.x+a,l=u+r.y+d}this.evData={startClientX:s,startClientY:l,startCropX:c,startCropY:u,clientX:e.clientX,clientY:e.clientY,isResize:a,ord:i},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})},this.onComponentPointerDown=e=>{const{crop:t,disabled:n,locked:r,keepSelection:o,onChange:i}=this.props,a=this.getBox();if(n||r||o&&t)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});const s=e.clientX-a.x,l=e.clientY-a.y,c={unit:"px",x:s,y:l,width:0,height:0};this.evData={startClientX:e.clientX,startClientY:e.clientY,startCropX:s,startCropY:l,clientX:e.clientX,clientY:e.clientY,isResize:!0},this.mouseDownOnCrop=!0,i(yw(c,a.width,a.height),gw(c,a.width,a.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})},this.onDocPointerMove=e=>{const{crop:t,disabled:n,onChange:r,onDragStart:o}=this.props,i=this.getBox();if(n||!t||!this.mouseDownOnCrop)return;e.cancelable&&e.preventDefault(),this.dragStarted||(this.dragStarted=!0,o&&o(e));const{evData:a}=this;let s;a.clientX=e.clientX,a.clientY=e.clientY,s=a.isResize?this.resizeCrop():this.dragCrop(),mw(t,s)||r(yw(s,i.width,i.height),gw(s,i.width,i.height))},this.onComponentKeyDown=t=>{const{crop:n,disabled:r,onChange:o,onComplete:i}=this.props;if(r)return;const a=t.key;let s=!1;if(!n)return;const l=this.getBox(),c=this.makePixelCrop(l),u=(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)?e.nudgeStepLarge:t.shiftKey?e.nudgeStepMedium:e.nudgeStep;if("ArrowLeft"===a?(c.x-=u,s=!0):"ArrowRight"===a?(c.x+=u,s=!0):"ArrowUp"===a?(c.y-=u,s=!0):"ArrowDown"===a&&(c.y+=u,s=!0),s){t.cancelable&&t.preventDefault(),c.x=hw(c.x,0,l.width-c.width),c.y=hw(c.y,0,l.height-c.height);const e=yw(c,l.width,l.height),n=gw(c,l.width,l.height);o(e,n),i&&i(e,n)}},this.onHandlerKeyDown=(t,n)=>{const{aspect:r=0,crop:o,disabled:i,minWidth:a=0,minHeight:s=0,maxWidth:l,maxHeight:c,onChange:u,onComplete:d}=this.props,p=this.getBox();if(i||!o)return;if("ArrowUp"!==t.key&&"ArrowDown"!==t.key&&"ArrowLeft"!==t.key&&"ArrowRight"!==t.key)return;t.stopPropagation(),t.preventDefault();const f=(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)?e.nudgeStepLarge:t.shiftKey?e.nudgeStepMedium:e.nudgeStep,h=function(e,t,n,r){const o={...e};return"ArrowLeft"===t?"nw"===r?(o.x-=n,o.y-=n,o.width+=n,o.height+=n):"w"===r?(o.x-=n,o.width+=n):"sw"===r?(o.x-=n,o.width+=n,o.height+=n):"ne"===r?(o.y+=n,o.width-=n,o.height-=n):"e"===r?o.width-=n:"se"===r&&(o.width-=n,o.height-=n):"ArrowRight"===t&&("nw"===r?(o.x+=n,o.y+=n,o.width-=n,o.height-=n):"w"===r?(o.x+=n,o.width-=n):"sw"===r?(o.x+=n,o.width-=n,o.height-=n):"ne"===r?(o.y-=n,o.width+=n,o.height+=n):"e"===r?o.width+=n:"se"===r&&(o.width+=n,o.height+=n)),"ArrowUp"===t?"nw"===r?(o.x-=n,o.y-=n,o.width+=n,o.height+=n):"n"===r?(o.y-=n,o.height+=n):"ne"===r?(o.y-=n,o.width+=n,o.height+=n):"sw"===r?(o.x+=n,o.width-=n,o.height-=n):"s"===r?o.height-=n:"se"===r&&(o.width-=n,o.height-=n):"ArrowDown"===t&&("nw"===r?(o.x+=n,o.y+=n,o.width-=n,o.height-=n):"n"===r?(o.y+=n,o.height-=n):"ne"===r?(o.y+=n,o.width-=n,o.height-=n):"sw"===r?(o.x-=n,o.width+=n,o.height+=n):"s"===r?o.height+=n:"se"===r&&(o.width+=n,o.height+=n)),o}(yw(o,p.width,p.height),t.key,f,n),m=vw(h,r,n,p.width,p.height,a,s,l,c);if(!mw(o,m)){const e=gw(m,p.width,p.height);u(m,e),d&&d(m,e)}},this.onDocPointerDone=e=>{const{crop:t,disabled:n,onComplete:r,onDragEnd:o}=this.props,i=this.getBox();this.unbindDocMove(),!n&&t&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,o&&o(e),r&&r(yw(t,i.width,i.height),gw(t,i.width,i.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))},this.onDragFocus=()=>{var e;null==(e=this.componentRef.current)||e.scrollTo(0,0)}}get document(){return document}getBox(){const e=this.mediaRef.current;if(!e)return{x:0,y:0,width:0,height:0};const{x:t,y:n,width:r,height:o}=e.getBoundingClientRect();return{x:t,y:n,width:r,height:o}}componentDidUpdate(e){const{crop:t,onComplete:n}=this.props;if(n&&!e.crop&&t){const{width:e,height:r}=this.getBox();e&&r&&n(yw(t,e,r),gw(t,e,r))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect(),this.unbindDocMove()}bindDocMove(){this.docMoveBound||(this.document.addEventListener("pointermove",this.onDocPointerMove,bw),this.document.addEventListener("pointerup",this.onDocPointerDone,bw),this.document.addEventListener("pointercancel",this.onDocPointerDone,bw),this.docMoveBound=!0)}unbindDocMove(){this.docMoveBound&&(this.document.removeEventListener("pointermove",this.onDocPointerMove,bw),this.document.removeEventListener("pointerup",this.onDocPointerDone,bw),this.document.removeEventListener("pointercancel",this.onDocPointerDone,bw),this.docMoveBound=!1)}getCropStyle(){const{crop:e}=this.props;if(e)return{top:`${e.y}${e.unit}`,left:`${e.x}${e.unit}`,width:`${e.width}${e.unit}`,height:`${e.height}${e.unit}`}}dragCrop(){const{evData:e}=this,t=this.getBox(),n=this.makePixelCrop(t),r=e.clientX-e.startClientX,o=e.clientY-e.startClientY;return n.x=hw(e.startCropX+r,0,t.width-n.width),n.y=hw(e.startCropY+o,0,t.height-n.height),n}getPointRegion(e,t,n,r){const{evData:o}=this,i=o.clientX-e.x,a=o.clientY-e.y;let s,l;return s=r&&t?"nw"===t||"n"===t||"ne"===t:a<o.startCropY,l=n&&t?"nw"===t||"w"===t||"sw"===t:i<o.startCropX,l?s?"nw":"sw":s?"ne":"se"}resolveMinDimensions(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const o=Math.min(n,e.width),i=Math.min(r,e.height);return t&&(o||i)?t>1?o?[o,o/t]:[i*t,i]:i?[i*t,i]:[o,o/t]:[o,i]}resizeCrop(){const{evData:t}=this,{aspect:n=0,maxWidth:r,maxHeight:o}=this.props,i=this.getBox(),[a,s]=this.resolveMinDimensions(i,n,this.props.minWidth,this.props.minHeight);let l=this.makePixelCrop(i);const c=this.getPointRegion(i,t.ord,a,s),u=t.ord||c;let d=t.clientX-t.startClientX,p=t.clientY-t.startClientY;(a&&"nw"===u||"w"===u||"sw"===u)&&(d=Math.min(d,-a)),(s&&"nw"===u||"n"===u||"ne"===u)&&(p=Math.min(p,-s));const f={unit:"px",x:0,y:0,width:0,height:0};"ne"===c?(f.x=t.startCropX,f.width=d,n?(f.height=f.width/n,f.y=t.startCropY-f.height):(f.height=Math.abs(p),f.y=t.startCropY-f.height)):"se"===c?(f.x=t.startCropX,f.y=t.startCropY,f.width=d,f.height=n?f.width/n:p):"sw"===c?(f.x=t.startCropX+d,f.y=t.startCropY,f.width=Math.abs(d),f.height=n?f.width/n:p):"nw"===c&&(f.x=t.startCropX+d,f.width=Math.abs(d),n?(f.height=f.width/n,f.y=t.startCropY-f.height):(f.height=Math.abs(p),f.y=t.startCropY+p));const h=vw(f,n,c,i.width,i.height,a,s,r,o);return n||e.xyOrds.indexOf(u)>-1?l=h:e.xOrds.indexOf(u)>-1?(l.x=h.x,l.width=h.width):e.yOrds.indexOf(u)>-1&&(l.y=h.y,l.height=h.height),l.x=hw(l.x,0,i.width-l.width),l.y=hw(l.y,0,i.height-l.height),l}renderCropSelection(){const{ariaLabels:n=e.defaultProps.ariaLabels,disabled:r,locked:o,renderSelectionAddon:i,ruleOfThirds:a,crop:s}=this.props,l=this.getCropStyle();if(s)return t.createElement("div",{style:l,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":n.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,role:"group"},!r&&!o&&t.createElement("div",{className:"ReactCrop__drag-elements",onFocus:this.onDragFocus},t.createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),t.createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),t.createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),t.createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),t.createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":n.nwDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"nw"),role:"button"}),t.createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":n.nDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"n"),role:"button"}),t.createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":n.neDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"ne"),role:"button"}),t.createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":n.eDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"e"),role:"button"}),t.createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":n.seDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"se"),role:"button"}),t.createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":n.sDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"s"),role:"button"}),t.createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":n.swDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"sw"),role:"button"}),t.createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":n.wDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"w"),role:"button"})),i&&t.createElement("div",{className:"ReactCrop__selection-addon",onPointerDown:e=>e.stopPropagation()},i(this.state)),a&&t.createElement(t.Fragment,null,t.createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),t.createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}makePixelCrop(e){return yw({...fw,...this.props.crop||{}},e.width,e.height)}render(){const{aspect:e,children:n,circularCrop:r,className:o,crop:i,disabled:a,locked:s,style:l,ruleOfThirds:c}=this.props,{cropIsActive:u,newCropIsBeingDrawn:d}=this.state,p=i?this.renderCropSelection():null,f=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e=>e&&"string"==typeof e)).join(" ")}("ReactCrop",o,u&&"ReactCrop--active",a&&"ReactCrop--disabled",s&&"ReactCrop--locked",d&&"ReactCrop--new-crop",i&&e&&"ReactCrop--fixed-aspect",i&&r&&"ReactCrop--circular-crop",i&&c&&"ReactCrop--rule-of-thirds",!this.dragStarted&&i&&!i.width&&!i.height&&"ReactCrop--invisible-crop",r&&"ReactCrop--no-animate");return t.createElement("div",{ref:this.componentRef,className:f,style:l},t.createElement("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown},n),i?t.createElement("svg",{className:"ReactCrop__crop-mask",width:"100%",height:"100%"},t.createElement("defs",null,t.createElement("mask",{id:`hole-${this.instanceId}`},t.createElement("rect",{width:"100%",height:"100%",fill:"white"}),r?t.createElement("ellipse",{cx:`${i.x+i.width/2}${i.unit}`,cy:`${i.y+i.height/2}${i.unit}`,rx:`${i.width/2}${i.unit}`,ry:`${i.height/2}${i.unit}`,fill:"black"}):t.createElement("rect",{x:`${i.x}${i.unit}`,y:`${i.y}${i.unit}`,width:`${i.width}${i.unit}`,height:`${i.height}${i.unit}`,fill:"black"}))),t.createElement("rect",{fill:"black",fillOpacity:.5,width:"100%",height:"100%",mask:`url(#hole-${this.instanceId})`})):void 0,p)}};ww.xOrds=["e","w"],ww.yOrds=["n","s"],ww.xyOrds=["nw","ne","se","sw"],ww.nudgeStep=1,ww.nudgeStepMedium=10,ww.nudgeStepLarge=100,ww.defaultProps={ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}};let kw=ww;const Sw=Ti.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  max-width: 100%;
  max-height: 500px;
  overflow: auto;
`,Ew=Ti.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`,Cw=Ti(wp.button)`
  background-color: #8c52ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  
  &:disabled {
    background-color: #d1d1d1;
    cursor: not-allowed;
  }
`,jw=e=>{let{imageUrl:n,onCropComplete:r,onCancel:o}=e;const[i,a]=(0,t.useState)({unit:"%",width:80,height:80,x:10,y:10}),[s,l]=(0,t.useState)(null),c=(0,t.useRef)(null);return(0,of.jsxs)(Sw,{children:[(0,of.jsx)(kw,{crop:i,onChange:e=>a(e),onComplete:e=>l(e),children:(0,of.jsx)("img",{ref:c,src:n,alt:"Crop me",crossOrigin:"anonymous",style:{maxWidth:"100%",maxHeight:"400px"},onLoad:e=>{const{width:t,height:n}=e.currentTarget;a({unit:"%",width:80,height:80,x:10,y:10})},onError:e=>{console.error("Could not load image with CORS enabled",e),o(),alert("This image cannot be cropped due to security restrictions. Try downloading it first and then uploading it locally.")}})}),(0,of.jsxs)(Ew,{children:[(0,of.jsx)(Cw,{onClick:o,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Cancel"}),(0,of.jsx)(Cw,{onClick:()=>{if(c.current&&s)try{const e=document.createElement("canvas"),t=c.current.naturalWidth/c.current.width,n=c.current.naturalHeight/c.current.height;e.width=s.width,e.height=s.height;const o=e.getContext("2d");if(!o)return;o.drawImage(c.current,s.x*t,s.y*n,s.width*t,s.height*n,0,0,s.width,s.height);const i=e.toDataURL("image/jpeg");r(i)}catch(e){console.error("Error generating cropped image:",e),alert("Unable to crop this image due to security restrictions. Try uploading a local file instead of using a URL."),o()}},whileHover:{scale:1.05},whileTap:{scale:.95},disabled:!s,children:"Apply Crop"})]})]})},Tw=e=>new Promise(((t,n)=>{if(!e.name.toLowerCase().endsWith(".csv"))return n(new Error("Please upload a valid CSV file"));if(e.size>10485760)return n(new Error("File size exceeds 10MB limit"));const r=new FileReader;r.onload=e=>{if(!e.target||"string"!==typeof e.target.result)return n(new Error("Failed to read the CSV file"));const r=(e=>(65279===e.charCodeAt(0)&&(console.log("Removing UTF-8 BOM marker"),e=e.substring(1)),e.includes("\ufffd")&&console.warn("CSV contains replacement characters, possibly due to encoding issues"),e))(e.target.result);pw().parse(r,{header:!0,skipEmptyLines:!0,transformHeader:e=>e.trim().toLowerCase(),complete:e=>{if(e.errors&&e.errors.length>0){const t=e.errors.map((e=>`Line ${e.row}: ${e.message}`)).join("; ");return n(new Error(`CSV parsing errors: ${t}`))}if(!e.data||0===e.data.length)return n(new Error("No data found in CSV file"));const r=e.data[0],o=Object.keys(r),i=["category","question","answer"].filter((e=>!o.includes(e)));if(i.length>0)return n(new Error(`Missing required columns: ${i.join(", ")}`));console.log("Raw CSV data:",e.data);const a=e.data.map(((e,t)=>{var n,r,o,i,a,s,l,c;e.category&&e.question&&e.answer||console.warn(`Row ${t+2} has missing required fields. Row data:`,e);const u=(null===(n=e.category)||void 0===n?void 0:n.trim())||"";return console.log(`Processing row ${t}:`,{originalCategory:e.category,normalizedCategory:u,question:(null===(r=e.question)||void 0===r?void 0:r.substring(0,30))+"..."}),{category:u,question:(null===(o=e.question)||void 0===o?void 0:o.trim())||"",answer:(null===(i=e.answer)||void 0===i?void 0:i.trim())||"",value:parseInt(e.value)||100,image:(null===(a=e.image)||void 0===a?void 0:a.trim())||"",audio:(null===(s=e.audio)||void 0===s?void 0:s.trim())||"",video:(null===(l=e.video)||void 0===l?void 0:l.trim())||"",batch:(null===(c=e.batch)||void 0===c?void 0:c.trim())||"default"}})).filter((e=>e.question&&e.category));if(0===a.length)return n(new Error("No valid questions found in CSV file. Ensure all required fields (category, question, answer) are filled"));t(a)},error:e=>{n(new Error(`Failed to parse CSV: ${e.message}`))}})},r.onerror=()=>{n(new Error("Failed to read the CSV file"))},r.readAsText(e,"UTF-8")}));var Pw,Ow=Object.defineProperty,_w=Object.getOwnPropertySymbols,Rw=Object.prototype.hasOwnProperty,Aw=Object.prototype.propertyIsEnumerable,Mw=(e,t,n)=>t in e?Ow(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Iw=(e,t)=>{for(var n in t||(t={}))Rw.call(t,n)&&Mw(e,n,t[n]);if(_w)for(var n of _w(t))Aw.call(t,n)&&Mw(e,n,t[n]);return e},zw=(e,t)=>{var n={};for(var r in e)Rw.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&_w)for(var r of _w(e))t.indexOf(r)<0&&Aw.call(e,r)&&(n[r]=e[r]);return n};(e=>{const t=class t{constructor(e,n,r,i){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(i<-1||i>7)throw new RangeError("Mask value out of range");this.size=4*e+17;let a=[];for(let t=0;t<this.size;t++)a.push(!1);for(let t=0;t<this.size;t++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();const s=this.addEccAndInterleave(r);if(this.drawCodewords(s),-1==i){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);const n=this.getPenaltyScore();n<e&&(i=t,e=n),this.applyMask(t)}}o(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}static encodeText(n,r){const o=e.QrSegment.makeSegments(n);return t.encodeSegments(o,r)}static encodeBinary(n,r){const o=e.QrSegment.makeBytes(n);return t.encodeSegments([o],r)}static encodeSegments(e,r){let i,s,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,d=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(!(t.MIN_VERSION<=l&&l<=c&&c<=t.MAX_VERSION)||u<-1||u>7)throw new RangeError("Invalid value");for(i=l;;i++){const n=8*t.getNumDataCodewords(i,r),o=a.getTotalBits(e,i);if(o<=n){s=o;break}if(i>=c)throw new RangeError("Data too long")}for(const n of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])d&&s<=8*t.getNumDataCodewords(i,n)&&(r=n);let p=[];for(const t of e){n(t.mode.modeBits,4,p),n(t.numChars,t.mode.numCharCountBits(i),p);for(const e of t.getData())p.push(e)}o(p.length==s);const f=8*t.getNumDataCodewords(i,r);o(p.length<=f),n(0,Math.min(4,f-p.length),p),n(0,(8-p.length%8)%8,p),o(p.length%8==0);for(let t=236;p.length<f;t^=253)n(t,8,p);let h=[];for(;8*h.length<p.length;)h.push(0);return p.forEach(((e,t)=>h[t>>>3]|=e<<7-(7&t))),new t(i,r,h,u)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)0==n&&0==r||0==n&&r==t-1||n==t-1&&0==r||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let r=0;r<10;r++)n=n<<1^1335*(n>>>9);const i=21522^(t<<10|n);o(i>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,r(i,o));this.setFunctionModule(8,7,r(i,6)),this.setFunctionModule(8,8,r(i,7)),this.setFunctionModule(7,8,r(i,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,r(i,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,r(i,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,r(i,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let n=0;n<12;n++)e=e<<1^7973*(e>>>11);const t=this.version<<12|e;o(t>>>18==0);for(let n=0;n<18;n++){const e=r(t,n),o=this.size-11+n%3,i=Math.floor(n/3);this.setFunctionModule(o,i,e),this.setFunctionModule(i,o,e)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){const o=Math.max(Math.abs(r),Math.abs(n)),i=e+r,a=t+n;0<=i&&i<this.size&&0<=a&&a<this.size&&this.setFunctionModule(i,a,2!=o&&4!=o)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,1!=Math.max(Math.abs(r),Math.abs(n)))}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const n=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,r))throw new RangeError("Invalid argument");const i=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],a=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],s=Math.floor(t.getNumRawDataModules(n)/8),l=i-s%i,c=Math.floor(s/i);let u=[];const d=t.reedSolomonComputeDivisor(a);for(let o=0,f=0;o<i;o++){let n=e.slice(f,f+c-a+(o<l?0:1));f+=n.length;const r=t.reedSolomonComputeRemainder(n,d);o<l&&n.push(0),u.push(n.concat(r))}let p=[];for(let t=0;t<u[0].length;t++)u.forEach(((e,n)=>{(t!=c-a||n>=l)&&p.push(e[t])}));return o(p.length==s),p}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let n=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let o=0;o<this.size;o++)for(let i=0;i<2;i++){const a=t-i,s=0==(t+1&2)?this.size-1-o:o;!this.isFunction[s][a]&&n<8*e.length&&(this.modules[s][a]=r(e[n>>>3],7-(7&n)),n++)}}o(n==8*e.length)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let o=0;o<this.size;o++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[o][a]==n?(r++,5==r?e+=t.PENALTY_N1:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),n=this.modules[o][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*t.PENALTY_N3}for(let o=0;o<this.size;o++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][o]==n?(r++,5==r?e+=t.PENALTY_N1:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*t.PENALTY_N3),n=this.modules[a][o],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*t.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let n=0;n<this.size-1;n++){const r=this.modules[o][n];r==this.modules[o][n+1]&&r==this.modules[o+1][n]&&r==this.modules[o+1][n+1]&&(e+=t.PENALTY_N2)}let n=0;for(const t of this.modules)n=t.reduce(((e,t)=>e+(t?1:0)),n);const r=this.size*this.size,i=Math.ceil(Math.abs(20*n-10*r)/r)-1;return o(0<=i&&i<=9),e+=i*t.PENALTY_N4,o(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{const e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2));let n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");let n=(16*e+128)*e+64;if(e>=2){const t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return o(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let n=[];for(let t=0;t<e-1;t++)n.push(0);n.push(1);let r=1;for(let o=0;o<e;o++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],r),e+1<n.length&&(n[e]^=n[e+1]);r=t.reedSolomonMultiply(r,2)}return n}static reedSolomonComputeRemainder(e,n){let r=n.map((e=>0));for(const o of e){const e=o^r.shift();r.push(0),n.forEach(((n,o)=>r[o]^=t.reedSolomonMultiply(n,e)))}return r}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");let n=0;for(let r=7;r>=0;r--)n=n<<1^285*(n>>>7),n^=(t>>>r&1)*e;return o(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];o(t<=3*this.size);const n=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(n&&e[0]>=4*t&&e[6]>=t?1:0)+(n&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]];function n(e,t,n){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function r(e,t){return 0!=(e>>>t&1)}function o(e){if(!e)throw new Error("Assertion error")}e.QrCode=t;const i=class e{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(t){let r=[];for(const e of t)n(e,8,r);return new e(e.Mode.BYTE,t.length,r)}static makeNumeric(t){if(!e.isNumeric(t))throw new RangeError("String contains non-numeric characters");let r=[];for(let e=0;e<t.length;){const o=Math.min(t.length-e,3);n(parseInt(t.substring(e,e+o),10),3*o+1,r),e+=o}return new e(e.Mode.NUMERIC,t.length,r)}static makeAlphanumeric(t){if(!e.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let r,o=[];for(r=0;r+2<=t.length;r+=2){let i=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r));i+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r+1)),n(i,11,o)}return r<t.length&&n(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)),6,o),new e(e.Mode.ALPHANUMERIC,t.length,o)}static makeSegments(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let r=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)n(t,8,r);else if(t<16384)n(2,2,r),n(t,14,r);else{if(!(t<1e6))throw new RangeError("ECI assignment value out of range");n(6,3,r),n(t,21,r)}return new e(e.Mode.ECI,0,r)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const r of e){const e=r.mode.numCharCountBits(t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)"%"!=e.charAt(n)?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substring(n+1,n+3),16)),n+=2);return t}};i.NUMERIC_REGEX=/^[0-9]*$/,i.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,i.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let a=i;e.QrSegment=i})(Pw||(Pw={})),(e=>{let t;(e=>{const t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2);e.Ecc=t})(t=e.QrCode||(e.QrCode={}))})(Pw||(Pw={})),(e=>{let t;(e=>{const t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]);e.Mode=t})(t=e.QrSegment||(e.QrSegment={}))})(Pw||(Pw={}));var Lw=Pw,Dw={L:Lw.QrCode.Ecc.LOW,M:Lw.QrCode.Ecc.MEDIUM,Q:Lw.QrCode.Ecc.QUARTILE,H:Lw.QrCode.Ecc.HIGH},Nw=128,$w="L",Fw="#FFFFFF",Uw="#000000",Bw=!1,Vw=1;function qw(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=[];return e.forEach((function(e,r){let o=null;e.forEach((function(i,a){if(!i&&null!==o)return n.push(`M${o+t} ${r+t}h${a-o}v1H${o+t}z`),void(o=null);if(a!==e.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?n.push(`M${a+t},${r+t} h1v1H${a+t}z`):n.push(`M${o+t},${r+t} h${a+1-o}v1H${o+t}z`)}}))})),n.join("")}function Hw(e,t){return e.slice().map(((e,n)=>n<t.y||n>=t.y+t.h?e:e.map(((e,n)=>(n<t.x||n>=t.x+t.w)&&e))))}function Ww(e){let{value:n,level:r,minVersion:o,includeMargin:i,marginSize:a,imageSettings:s,size:l,boostLevel:c}=e,u=t.useMemo((()=>{const e=(Array.isArray(n)?n:[n]).reduce(((e,t)=>(e.push(...Lw.QrSegment.makeSegments(t)),e)),[]);return Lw.QrCode.encodeSegments(e,Dw[r],o,void 0,void 0,c)}),[n,r,o,c]);const{cells:d,margin:p,numCells:f,calculatedImageSettings:h}=t.useMemo((()=>{let e=u.getModules();const t=function(e,t){return null!=t?Math.max(Math.floor(t),0):e?4:0}(i,a),n=e.length+2*t,r=function(e,t,n,r){if(null==r)return null;const o=e.length+2*n,i=Math.floor(.1*t),a=o/t,s=(r.width||i)*a,l=(r.height||i)*a,c=null==r.x?e.length/2-s/2:r.x*a,u=null==r.y?e.length/2-l/2:r.y*a,d=null==r.opacity?1:r.opacity;let p=null;if(r.excavate){let e=Math.floor(c),t=Math.floor(u);p={x:e,y:t,w:Math.ceil(s+c-e),h:Math.ceil(l+u-t)}}return{x:c,y:u,h:l,w:s,excavation:p,opacity:d,crossOrigin:r.crossOrigin}}(e,l,t,s);return{cells:e,margin:t,numCells:n,calculatedImageSettings:r}}),[u,l,s,i,a]);return{qrcode:u,margin:p,cells:d,numCells:f,calculatedImageSettings:h}}var Qw=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}(),Yw=t.forwardRef((function(e,n){const r=e,{value:o,size:i=Nw,level:a=$w,bgColor:s=Fw,fgColor:l=Uw,includeMargin:c=Bw,minVersion:u=Vw,boostLevel:d,marginSize:p,imageSettings:f}=r,h=zw(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:m}=h,g=zw(h,["style"]),y=null==f?void 0:f.src,v=t.useRef(null),b=t.useRef(null),x=t.useCallback((e=>{v.current=e,"function"===typeof n?n(e):n&&(n.current=e)}),[n]),[w,k]=t.useState(!1),{margin:S,cells:E,numCells:C,calculatedImageSettings:j}=Ww({value:o,level:a,minVersion:u,boostLevel:d,includeMargin:c,marginSize:p,imageSettings:f,size:i});t.useEffect((()=>{if(null!=v.current){const e=v.current,t=e.getContext("2d");if(!t)return;let n=E;const r=b.current,o=null!=j&&null!==r&&r.complete&&0!==r.naturalHeight&&0!==r.naturalWidth;o&&null!=j.excavation&&(n=Hw(E,j.excavation));const a=window.devicePixelRatio||1;e.height=e.width=i*a;const c=i/C*a;t.scale(c,c),t.fillStyle=s,t.fillRect(0,0,C,C),t.fillStyle=l,Qw?t.fill(new Path2D(qw(n,S))):E.forEach((function(e,n){e.forEach((function(e,r){e&&t.fillRect(r+S,n+S,1,1)}))})),j&&(t.globalAlpha=j.opacity),o&&t.drawImage(r,j.x+S,j.y+S,j.w,j.h)}})),t.useEffect((()=>{k(!1)}),[y]);const T=Iw({height:i,width:i},m);let P=null;return null!=y&&(P=t.createElement("img",{src:y,key:y,style:{display:"none"},onLoad:()=>{k(!0)},ref:b,crossOrigin:null==j?void 0:j.crossOrigin})),t.createElement(t.Fragment,null,t.createElement("canvas",Iw({style:T,height:i,width:i,ref:x,role:"img"},g)),P)}));Yw.displayName="QRCodeCanvas",t.forwardRef((function(e,n){const r=e,{value:o,size:i=Nw,level:a=$w,bgColor:s=Fw,fgColor:l=Uw,includeMargin:c=Bw,minVersion:u=Vw,boostLevel:d,title:p,marginSize:f,imageSettings:h}=r,m=zw(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:g,cells:y,numCells:v,calculatedImageSettings:b}=Ww({value:o,level:a,minVersion:u,boostLevel:d,includeMargin:c,marginSize:f,imageSettings:h,size:i});let x=y,w=null;null!=h&&null!=b&&(null!=b.excavation&&(x=Hw(y,b.excavation)),w=t.createElement("image",{href:h.src,height:b.h,width:b.w,x:b.x+g,y:b.y+g,preserveAspectRatio:"none",opacity:b.opacity,crossOrigin:b.crossOrigin}));const k=qw(x,g);return t.createElement("svg",Iw({height:i,width:i,viewBox:`0 0 ${v} ${v}`,ref:n,role:"img"},m),!!p&&t.createElement("title",null,p),t.createElement("path",{fill:s,d:`M0,0 h${v}v${v}H0z`,shapeRendering:"crispEdges"}),t.createElement("path",{fill:l,d:k,shapeRendering:"crispEdges"}),w)})).displayName="QRCodeSVG";const Gw=Ti.div`
  width: 100%;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
`,Kw=Ti.div`
  width: 100%;
  margin-bottom: 15px;
`,Xw=Ti.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,Jw=Ti.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.9rem;
  margin-bottom: 10px;
`,Zw=Ti(wp.button)`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0069d9;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`,ek=Ti(Zw)`
  width: 80px;
`,tk=Ti.span`
  font-family: monospace;
  font-size: 0.9rem;
`,nk=Ti.input`
  width: 100%;
  margin: 10px 0;
`,rk=Ti.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0;
`,ok=Ti.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.8rem;
  color: #6c757d;
`,ik=e=>`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`,ak=e=>{let{audioUrl:n,onTrimComplete:r,onCancel:o}=e;const i=(0,t.useRef)(null),[a,s]=(0,t.useState)(!1),[l,c]=(0,t.useState)(0),[u,d]=(0,t.useState)(0),[p,f]=(0,t.useState)(100),[h,m]=(0,t.useState)(!0),[g,y]=(0,t.useState)(!1),[v,b]=(0,t.useState)(0),x=e=>!e.startsWith("http")||e.includes("localhost")||e.includes("127.0.0.1")?e:`https://corsproxy.io/?${encodeURIComponent(e)}`;(0,t.useEffect)((()=>{const e=i.current;if(!e)return;const t=()=>{c(e.duration),f(e.duration),m(!1)},n=()=>{b(e.currentTime),e.currentTime>=p&&(e.currentTime=u)},r=()=>s(!0),o=()=>s(!1),a=()=>{s(!1),e.currentTime=u};return e.addEventListener("loadedmetadata",t),e.addEventListener("timeupdate",n),e.addEventListener("play",r),e.addEventListener("pause",o),e.addEventListener("ended",a),()=>{e.removeEventListener("loadedmetadata",t),e.removeEventListener("timeupdate",n),e.removeEventListener("play",r),e.removeEventListener("pause",o),e.removeEventListener("ended",a)}}),[p,u]),(0,t.useEffect)((()=>{const e=i.current;if(!e)return;const t=e=>{console.error("Error loading audio:",e),m(!1),alert("There was an error loading the audio. This might be due to CORS restrictions.")};return e.addEventListener("error",t),()=>{e.removeEventListener("error",t)}}),[]);const w=(e,t)=>{const n=e.numberOfChannels,r=e.sampleRate,o=2*n,i=r*o,a=t*o,s=new ArrayBuffer(44+a),l=new DataView(s);k(l,0,"RIFF"),l.setUint32(4,36+a,!0),k(l,8,"WAVE"),k(l,12,"fmt "),l.setUint32(16,16,!0),l.setUint16(20,1,!0),l.setUint16(22,n,!0),l.setUint32(24,r,!0),l.setUint32(28,i,!0),l.setUint16(32,o,!0),l.setUint16(34,16,!0),k(l,36,"data"),l.setUint32(40,a,!0);new Float32Array(t);let c,u,d=44;for(let p=0;p<t;p++)for(c=0;c<n;c++)u=e.getChannelData(c)[p],u=Math.max(-1,Math.min(1,u)),u=u<0?32768*u:32767*u,l.setInt16(d,u,!0),d+=2;return s},k=(e,t,n)=>{for(let r=0;r<n.length;r++)e.setUint8(t+r,n.charCodeAt(r))};return(0,of.jsxs)(Gw,{children:[(0,of.jsx)("h3",{children:"Trim Audio"}),(0,of.jsxs)(Jw,{children:[(0,of.jsxs)(tk,{children:["Start: ",ik(u)]}),(0,of.jsxs)(tk,{children:["Current: ",ik(v)]}),(0,of.jsxs)(tk,{children:["End: ",ik(p)]}),(0,of.jsxs)(tk,{children:["Duration: ",ik(p-u)]})]}),(0,of.jsx)(Kw,{children:(0,of.jsx)("audio",{ref:i,src:x(n),controls:!1,preload:"metadata",style:{width:"100%"},crossOrigin:"anonymous"})}),(0,of.jsxs)(rk,{children:[(0,of.jsx)("label",{children:"Start Time:"}),(0,of.jsx)(nk,{type:"range",min:0,max:l,step:.01,value:u,onChange:e=>{const t=parseFloat(e.target.value);d(t),i.current&&i.current.currentTime<t&&(i.current.currentTime=t)},disabled:h}),(0,of.jsxs)(ok,{children:[(0,of.jsx)("span",{children:"0:00"}),(0,of.jsx)("span",{children:ik(l)})]})]}),(0,of.jsxs)(rk,{children:[(0,of.jsx)("label",{children:"End Time:"}),(0,of.jsx)(nk,{type:"range",min:0,max:l,step:.01,value:p,onChange:e=>{const t=parseFloat(e.target.value);f(t)},disabled:h}),(0,of.jsxs)(ok,{children:[(0,of.jsx)("span",{children:"0:00"}),(0,of.jsx)("span",{children:ik(l)})]})]}),(0,of.jsxs)(Xw,{children:[(0,of.jsx)(ek,{onClick:()=>{const e=i.current;e&&(a?e.pause():((e.currentTime<u||e.currentTime>p)&&(e.currentTime=u),e.play()))},disabled:h,whileHover:{scale:1.05},whileTap:{scale:.95},children:a?"Pause":"Play"}),(0,of.jsxs)("div",{children:[(0,of.jsx)(Zw,{onClick:async()=>{if(i.current)try{y(!0);const e=x(n),t=await fetch(e),o=await t.arrayBuffer(),i=new(window.AudioContext||window.webkitAudioContext),a=await i.decodeAudioData(o),s=a.sampleRate,l=a.numberOfChannels,c=Math.floor(u*s),d=Math.floor(p*s)-c,f=i.createBuffer(l,d,s);for(let n=0;n<l;n++){const e=a.getChannelData(n),t=f.getChannelData(n);for(let n=0;n<d;n++)t[n]=e[c+n]}const h=w(f,d),m=new Blob([h],{type:"audio/wav"}),g=URL.createObjectURL(m);r(g)}catch(e){console.error("Error trimming audio:",e),alert("There was an error trimming the audio. Please try again.")}finally{y(!1)}},disabled:h||g||u>=p,whileHover:{scale:1.05},whileTap:{scale:.95},style:{marginRight:"10px"},children:g?"Trimming...":"Apply Trim"}),(0,of.jsx)(Zw,{onClick:o,disabled:g,whileHover:{scale:1.05},whileTap:{scale:.95},style:{backgroundColor:"#6c757d"},children:"Cancel"})]})]}),(0,of.jsx)("p",{style:{fontSize:"0.8rem",color:"#6c757d"},children:"Use the sliders to select the portion of audio you want to keep."})]})},sk=Ti.div`
  width: 100%;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
`,lk=Ti.div`
  width: 100%;
  margin-bottom: 15px;
  position: relative;

  video {
    width: 100%;
    border-radius: 4px;
    background-color: #000;
  }
`,ck=Ti.div`
  width: 100%;
  position: relative;
  height: 60px;
  background-color: #e9ecef;
  border-radius: 4px;
  margin: 15px 0;
  overflow: hidden;
`,uk=Ti.div`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #e9ecef;
`,dk=Ti.div`
  position: absolute;
  height: 100%;
  background-color: rgba(0, 123, 255, 0.2);
  border-left: 2px solid #007bff;
  border-right: 2px solid #007bff;
  top: 0;
  cursor: move;
  left: ${e=>e.left}%;
  width: ${e=>e.width}%;
`,pk=Ti.div`
  position: absolute;
  top: 0;
  width: 10px;
  height: 100%;
  background-color: #007bff;
  cursor: ${e=>e.isLeft?"w-resize":"e-resize"};
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`,fk=Ti.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`,hk=Ti.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.9rem;
  margin-bottom: 10px;
`,mk=Ti(wp.button)`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0069d9;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`,gk=Ti(mk)`
  width: 80px;
`,yk=Ti.span`
  font-family: monospace;
  font-size: 0.9rem;
`,vk=e=>`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,"0")}`,bk=e=>{let{videoUrl:n,onTrimComplete:r,onCancel:o}=e;const i=(0,t.useRef)(null),a=(0,t.useRef)(null),[s,l]=(0,t.useState)(!1),[c,u]=(0,t.useState)(0),[d,p]=(0,t.useState)(0),[f,h]=(0,t.useState)(0),[m,g]=(0,t.useState)(0),[y,v]=(0,t.useState)(!0),[b,x]=(0,t.useState)(!1),[w,k]=(0,t.useState)(null),[S,E]=(0,t.useState)(0),[C,j]=(0,t.useState)(100),[T,P]=(0,t.useState)(null),[O,_]=(0,t.useState)(null),[R,A]=(0,t.useState)([]);(0,t.useEffect)((()=>{const e=i.current;if(!e)return;const t=()=>{const t=e.duration;u(t),g(t),v(!1)},n=()=>{p(e.currentTime)};return e.addEventListener("loadedmetadata",t),e.addEventListener("timeupdate",n),e.addEventListener("play",(()=>l(!0))),e.addEventListener("pause",(()=>l(!1))),()=>{e.removeEventListener("loadedmetadata",t),e.removeEventListener("timeupdate",n),e.removeEventListener("play",(()=>l(!0))),e.removeEventListener("pause",(()=>l(!1)))}}),[]),(0,t.useEffect)((()=>{const e=i.current;if(!e)return;const t=e=>{console.error("Error loading video:",e),v(!1),alert("There was an error loading the video. This might be due to CORS restrictions.")};return e.addEventListener("error",t),()=>{e.removeEventListener("error",t)}}),[]),(0,t.useEffect)((()=>{const e=a.current;if(!e)return;let t=0;const n=n=>{if(y)return;const r=e.getBoundingClientRect(),o=(n.clientX-r.left)/r.width*100;t=n.clientX;const i=S,a=i+C;Math.abs(o-i)<3?k("start"):Math.abs(o-a)<3?k("end"):o>i&&o<a&&k("selection")},r=n=>{if(!w||y)return;const r=e.getBoundingClientRect(),o=(n.clientX-t)/r.width*100;if(t=n.clientX,"start"===w){const e=Math.max(0,Math.min(S+o,S+C-5)),t=S+C-e;E(e),j(t),h(e/100*c)}else if("end"===w){const e=Math.max(5,Math.min(C+o,100-S));j(e),g((S+e)/100*c)}else if("selection"===w){const e=Math.max(0,Math.min(S+o,100-C));E(e),h(e/100*c),g((e+C)/100*c)}},o=()=>{k(null)};return e.addEventListener("mousedown",n),document.addEventListener("mousemove",r),document.addEventListener("mouseup",o),()=>{e.removeEventListener("mousedown",n),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",o)}}),[w,S,C,c,y]);return(0,t.useEffect)((()=>()=>{if(document.removeEventListener("mousemove",(()=>{})),document.removeEventListener("mouseup",(()=>{})),i.current&&(i.current.pause(),i.current.src="",i.current.load()),T)try{T.getTracks&&T.getTracks().forEach((e=>e.stop()))}catch(e){console.error("Error stopping media stream:",e)}}),[T]),(0,of.jsxs)(sk,{children:[(0,of.jsx)("h3",{children:"Trim Video"}),(0,of.jsx)(lk,{children:(0,of.jsx)("video",{ref:i,src:(M=n,!M.startsWith("http")||M.includes("localhost")||M.includes("127.0.0.1")?M:`https://corsproxy.io/?${encodeURIComponent(M)}`),preload:"metadata",controls:!1,crossOrigin:"anonymous"})}),(0,of.jsxs)(hk,{children:[(0,of.jsxs)(yk,{children:["Start: ",vk(f)]}),(0,of.jsxs)(yk,{children:["End: ",vk(m)]}),(0,of.jsxs)(yk,{children:["Duration: ",vk(m-f)]})]}),(0,of.jsx)(ck,{ref:a,children:(0,of.jsx)(uk,{children:(0,of.jsxs)(dk,{left:S,width:C,children:[(0,of.jsx)(pk,{isLeft:!0,style:{left:0}}),(0,of.jsx)(pk,{style:{right:0}})]})})}),(0,of.jsxs)(fk,{children:[(0,of.jsx)(gk,{onClick:()=>{const e=i.current;e&&(s?e.pause():((e.currentTime<f||e.currentTime>m)&&(e.currentTime=f),e.play()))},disabled:y,whileHover:{scale:1.05},whileTap:{scale:.95},children:s?"Pause":"Play"}),(0,of.jsxs)("div",{children:[(0,of.jsx)(mk,{onClick:()=>{if(!y)try{x(!0);const e=`#t=${f.toFixed(2)},${m.toFixed(2)}`;let t=n;t.includes("#t=")&&(t=t.split("#")[0]);r(`${t}${e}`)}catch(e){console.error("Error creating trim information:",e),alert("There was an error processing the video. Please try again.")}finally{x(!1)}},disabled:y||b||f===m,whileHover:{scale:1.05},whileTap:{scale:.95},style:{marginRight:"10px"},children:b?"Processing...":"Apply Trim"}),(0,of.jsx)(mk,{onClick:o,disabled:b,whileHover:{scale:1.05},whileTap:{scale:.95},style:{backgroundColor:"#6c757d"},children:"Cancel"})]})]}),(0,of.jsxs)("p",{style:{fontSize:"0.8rem",color:"#6c757d"},children:["Drag the blue handles to select the portion of video you want to keep.",(0,of.jsx)("br",{}),"Note: For best results with downloaded videos, we recommend using shorter clips."]})]});var M},xk=Ti.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(140, 82, 255, 0.15);
  overflow: hidden;
  margin-top: 32px;
  margin-bottom: 32px;
`,wk=Ti.div`
  background: linear-gradient(135deg, #8c52ff 0%, #5e17eb 100%);
  color: white;
  padding: 32px;
  text-align: center;
`,kk=Ti.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--text-color, #333);
  text-align: center;
  font-family: var(--title-font-family, var(--heading-font-family));
`,Sk=Ti.p`
  margin: 12px 0 0;
  font-size: 18px;
  opacity: 0.9;
  line-height: 1.5;
`,Ek=Ti.div`
  padding: 40px;
  max-height: 75vh;
  overflow-y: auto;
  
  & > * + * {
    margin-top: 36px;
  }
`,Ck=Ti.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 28px;
  background-color: #f9f7ff;
  padding: 24px;
  border-radius: 16px;
`,jk=Ti.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`,Tk=Ti(wp.button)`
  background-color: #8c52ff;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px rgba(140, 82, 255, 0.2);
  
  &:hover {
    background-color: #7b45e8;
    box-shadow: 0 6px 8px rgba(140, 82, 255, 0.3);
  }
  
  &:disabled {
    background-color: #d1d1d1;
    cursor: not-allowed;
    box-shadow: none;
  }
`,Pk=Ti(Tk)`
  background-color: #ff5252;
  box-shadow: 0 4px 6px rgba(255, 82, 82, 0.2);
  
  &:hover {
    background-color: #e04747;
    box-shadow: 0 6px 8px rgba(255, 82, 82, 0.3);
  }
`,Ok=Ti(Tk)`
  background-color: #4caf50;
  box-shadow: 0 4px 6px rgba(76, 175, 80, 0.2);
  
  &:hover {
    background-color: #43a047;
    box-shadow: 0 6px 8px rgba(76, 175, 80, 0.3);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(76, 175, 80, 0.2);
  }
`,_k=Ti.input`
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  width: 100%;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`,Rk=Ti.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 24px;
  table-layout: fixed;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`,Ak=(Ti.th`
  text-align: left;
  padding: 16px 20px;
  background-color: #f5f5f5;
  font-weight: 600;
  border-bottom: 2px solid #e0e0e0;
  color: #333;
  font-size: 15px;
`,Ti.tr`
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f0f7ff;
  }
  
  &:last-child td {
    border-bottom: none;
  }
`),Mk=Ti.td`
  padding: 16px 20px;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px solid #eaeaea;
  color: #444;
  font-size: 15px;
`,Ik=(Ti.td`
  padding: 16px 20px;
  display: flex;
  gap: 12px;
  border-bottom: 1px solid #eaeaea;
`,Ti(wp.button)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #666;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #8c52ff;
    background-color: rgba(140, 82, 255, 0.1);
  }
`),zk=Ti(Ik)`
  &:hover {
    color: #ff5252;
    background-color: rgba(255, 82, 82, 0.1);
  }
`,Lk=Ti.div`
  text-align: center;
  padding: 48px;
  color: #666;
  font-size: 20px;
  background-color: #f9f9f9;
  border-radius: 16px;
  margin: 32px 0;
`,Dk=Ti(wp.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,Nk=Ti(wp.div)`
  background-color: white;
  border-radius: 20px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  position: relative;
`,$k=Ti.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: var(--text-color, #333);
  font-family: var(--heading-font-family);
  text-align: center;
`,Fk=Ti.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`,Uk=Ti.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #444;
  font-size: 16px;
`,Bk=Ti.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s ease;
  background-color: #fafafa;
  
  &:focus {
    border-color: #8c52ff;
    outline: none;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`,Vk=Ti.textarea`
  width: 100%;
  padding: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;
  background-color: #fafafa;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`,qk=Ti.select`
  width: 100%;
  padding: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s ease;
  background-color: #fafafa;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`,Hk=Ti.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`,Wk=Ti(wp.button)`
  padding: 10px 15px;
  border-radius: 8px;
  border: 2px solid ${e=>e.selected?"#8c52ff":"#e0e0e0"};
  background-color: ${e=>e.selected?"rgba(140, 82, 255, 0.1)":"white"};
  color: ${e=>e.selected?"#8c52ff":"#666"};
  font-weight: ${e=>e.selected?"600":"normal"};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.selected?"rgba(140, 82, 255, 0.15)":"#f5f5f5"};
    transform: translateY(-2px);
  }
`,Qk=Ti(wp.button)`
  background-color: #ff5252;
  color: white;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`,Yk=Ti.button`
  background: none;
  border: none;
  color: #8c52ff;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 8px;
  text-align: right;
  padding: 5px;
  
  &:hover {
    color: #7b45e8;
  }
`,Gk=Ti.div`
  position: relative;
  display: block;
  margin-top: 10px;
  width: 100%;
`,Kk=(Ti.p`
  margin: 0 0 8px;
  font-size: 14px;
  color: #555;
`,Ti.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
`),Xk=Ti.input`
  display: none;
`,Jk=Ti.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  gap: 10px;
  padding: 16px;
`,Zk=Ti(wp.button)`
  padding: 10px 16px;
  border-radius: 10px;
  background-color: ${e=>e.$active?"#8c52ff":"#f5f5f5"};
  color: ${e=>e.$active?"white":"#333"};
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: ${e=>e.$active?"0 4px 8px rgba(140, 82, 255, 0.3)":"none"};
  
  &:hover {
    background-color: ${e=>e.$active?"#7b45e8":"#e9e9e9"};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,eS=Ti(Zk)`
  padding: 10px 16px;
  border-radius: 10px;
  background-color: ${e=>e.$active?"#8c52ff":"transparent"};
  color: ${e=>e.$active?"white":"#333"};
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: ${e=>e.$active?"0 4px 8px rgba(140, 82, 255, 0.3)":"none"};
  
  &:hover {
    background-color: ${e=>e.$active?"#7b45e8":"#e9e9e9"};
  }
`,tS=Ti.span`
  padding: 10px 16px;
  border-radius: 10px;
  background-color: transparent;
  color: #666;
  font-weight: 600;
`,nS=Ti.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,rS=Ti.input`
  width: 50px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`,oS=Ti.div`
  margin-bottom: 24px;
  background-color: #f9f7ff;
  padding: 16px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
`,iS=(Ti.label`
  margin-right: 12px;
  font-weight: 600;
  color: #444;
`,Ti.select`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: white;
  font-size: 15px;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.1);
  }
`,Ti.div`
  display: flex;
  gap: 12px;
`),aS=Ti.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0f0f0;
  }
`,sS=Ti.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`,lS=Ti(wp.button)`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: #333;
  }
`,cS=Ti.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #8c52ff;
  
  &:checked {
    accent-color: #8c52ff;
  }
`,uS=Ti.div`
  display: flex;
  gap: 12px;
  margin-left: auto;
`,dS=Ti.th`
  padding: 16px 20px;
  text-align: left;
  font-weight: 600;
  background-color: #f7f9fc;
  border-bottom: 2px solid #e9ecef;
  color: #333;
  font-size: 15px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #eef2f7;
  }
  
  &:first-child {
    border-top-left-radius: 12px;
  }
  
  &:last-child {
    border-top-right-radius: 12px;
  }
`,pS=(e,t)=>e.length<=t?e:e.slice(0,t)+"...",fS=e=>{let{type:t,src:n,blur:r}=e;return console.log(`MediaPreview - type: ${t}, src: ${n}`),n?"audio"===t?(console.log("MediaPreview - Rendering audio element"),(0,of.jsx)("div",{style:{marginTop:"12px",padding:"8px",backgroundColor:"#f9f9f9",borderRadius:"8px"},children:(0,of.jsx)("audio",{controls:!0,style:{width:"100%",display:"block"},src:n,preload:"metadata",autoPlay:!1,children:"Your browser does not support audio playback."})})):"image"===t?(0,of.jsx)("div",{style:{marginTop:"12px",padding:"8px",backgroundColor:"#f9f9f9",borderRadius:"8px"},children:(0,of.jsx)("img",{src:n,alt:"Preview",style:{maxWidth:"100%",maxHeight:"200px",borderRadius:"8px",display:"block",margin:"0 auto",filter:r&&r>0?`blur(${r}px)`:"none"}})}):"video"===t?(0,of.jsx)("div",{style:{marginTop:"12px",padding:"8px",backgroundColor:"#f9f9f9",borderRadius:"8px"},children:(0,of.jsx)("video",{controls:!0,style:{maxWidth:"100%",maxHeight:"200px",borderRadius:"8px",display:"block",margin:"0 auto"},src:n,children:"Your browser does not support video playback."})}):null:(console.log("MediaPreview - No src provided"),null)},hS=Ti.div`
  margin-top: 48px;
  background-color: #f8f9fa;
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,mS=Ti.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--text-color, #333);
  display: flex;
  align-items: center;
  font-family: var(--heading-font-family);
`,gS=Ti.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 28px;
  margin-top: 28px;
`,yS=Ti.div`
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  &:hover::after {
    content: "Click to view questions";
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #0099cc;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 4px 8px;
    border-radius: 4px;
  }
`,vS=Ti.div`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 12px;
  color: #333;
`,bS=Ti.div`
  font-size: 32px;
  margin-bottom: 16px;
  background-color: #f9f7ff;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`,xS=Ti.div`
  font-size: 15px;
  color: #666;
  background-color: #f9f7ff;
  padding: 8px 12px;
  border-radius: 8px;
  display: inline-block;
`,wS=Ti(zk)`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(255, 82, 82, 0.1);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(255, 82, 82, 0.2);
  }
`,kS=Ti(wp.button)`
  position: absolute;
  top: 16px;
  right: 60px;
  background: rgba(52, 152, 219, 0.1);
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #3498db;
  z-index: 2;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(52, 152, 219, 0.2);
  }
`,SS=(Ti.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  margin-top: 20px;
  max-height: 220px;
  overflow-y: auto;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 12px;
`,Ti(wp.button)`
  background-color: ${e=>e.selected?"#3498db":"white"};
  color: ${e=>e.selected?"white":"inherit"};
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.selected?"#2980b9":"#f0f0f0"};
    transform: scale(1.05);
  }
`,Ti.div`
  font-size: 36px;
  margin: 20px 0;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`),ES=(Ti.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 28px;
  border: 1px dashed #ddd;
`,Ti.textarea`
  width: 100%;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
  margin-bottom: 20px;
  background-color: white;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`),CS=Ti(wp.button)`
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px 20px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #1d4ed8;
    box-shadow: 0 6px 8px rgba(37, 99, 235, 0.3);
  }
  
  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
    box-shadow: none;
  }
`,jS=Ti.div`
  color: #ef4444;
  font-size: 15px;
  margin-top: 12px;
  padding: 12px;
  background-color: #fee2e2;
  border-radius: 8px;
`,TS=Ti.div`
  font-size: 14px;
  color: #666;
  margin-top: 12px;
  line-height: 1.5;
  background-color: #f0f9ff;
  padding: 12px;
  border-radius: 8px;
  border-left: 3px solid #3b82f6;
`,PS=(Ti.div`
  height: 1px;
  background-color: #e5e7eb;
  margin: 40px 0;
`,Ti.h3`
  font-size: 18px;
  margin-bottom: 16px;
  color: var(--text-color, #555);
  font-family: var(--accent-font-family, var(--heading-font-family));
`,Ti.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`),OS=Ti.label`
  font-weight: 600;
  color: #333;
`,_S=Ti.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background-color: white;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #8c52ff;
    box-shadow: 0 0 0 3px rgba(140, 82, 255, 0.2);
  }
`,RS=(Ti.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`,Ti.input`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 100%;
  font-size: 14px;
`),AS=Ti.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`,MS=(Ti.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 18px;
  color: #666;
  cursor: pointer;
`,Ti.span`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`),IS=Ti.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  input {
    font-size: 20px;
    width: 70px;
    text-align: center;
  }
  
  div {
    margin-top: 5px;
  }
  
  /* Styling for the emoji picker */
  div[class*='PickerWrapper'] {
    bottom: calc(100% + 10px);
    top: auto;
    right: auto;
    left: 50%;
    transform: translateX(-50%) !important;
    
    /* Reset position when being dragged */
    &[data-dragging="true"] {
      bottom: auto;
      left: auto;
      transform: none !important;
    }
  }
`,zS=Ti(wp.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 16px 20px;
  border-radius: 12px;
  background-color: ${e=>{let{type:t}=e;return"success"===t?"#4caf50":"error"===t?"#f44336":"warning"===t?"#ff9800":"#2196f3"}};
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  z-index: 1100;
  white-space: pre-line;
`,LS=()=>{const e=T(),{playSound:r}=rf(),{categories:o}=v((e=>e)),[i,s]=(0,t.useState)([]),l={id:"",categoryId:"",question:"",answer:"",value:100,image:"",audio:"",video:"",imageBlur:0,hideQuestion:!1},[c,u]=(0,t.useState)(""),[d,p]=(0,t.useState)(1),[f,h]=(0,t.useState)(20),[m,g]=(0,t.useState)(!1),[y,b]=(0,t.useState)("add"),[x,w]=(0,t.useState)(null),[k,S]=(0,t.useState)(20),[E,C]=(0,t.useState)([]),[j,P]=(0,t.useState)(!1),[O,_]=(0,t.useState)(""),[R,A]=(0,t.useState)("\u2753"),[M,I]=(0,t.useState)({id:"",categoryId:"",question:"",answer:"",value:100,image:"",audio:"",video:"",imageBlur:0,hideQuestion:!1}),z=(0,t.useRef)(null),[L,D]=(0,t.useState)([]),[N,$]=(0,t.useState)(!1),[F,U]=(0,t.useState)("categoryName"),[B,V]=(0,t.useState)("asc"),[q,H]=(0,t.useState)(Date.now()),[W,Q]=(0,t.useState)(!1),[Y,G]=(0,t.useState)(null),[K,X]=(0,t.useState)(""),[J,Z]=(0,t.useState)(""),[ee,te]=(0,t.useState)(""),[ne,re]=(0,t.useState)(!1),[oe,ie]=(0,t.useState)(""),[ae,se]=(0,t.useState)(""),[le,ce]=(0,t.useState)(!1),[ue,de]=(0,t.useState)(!1),[pe,fe]=(0,t.useState)(""),[he,me]=(0,t.useState)(!1),[ge,ye]=(0,t.useState)(!1),[ve,be]=(0,t.useState)(""),[xe,we]=(0,t.useState)(""),[ke,Se]=(0,t.useState)(null),[Ee,Ce]=(0,t.useState)(null),[je,Te]=(0,t.useState)(null),[Pe,Oe]=(0,t.useState)({message:"",type:"info",visible:!1}),[_e,Re]=(0,t.useState)(!1),[Ae,Me]=(0,t.useState)(!1),[Ie,ze]=(0,t.useState)(0),[Le,De]=(0,t.useState)(!1),Ne=()=>{if(!M.categoryId||""===M.question.trim()||""===M.answer.trim())return void alert("Category, question and answer are required.");const t=JSON.parse(JSON.stringify(o));if(console.log("Submitting form data:",M),"add"===y){const r=t.findIndex((e=>e.id===M.categoryId));if(-1!==r){const o={question:M.question,answer:M.answer,value:parseInt(M.value.toString(),10),answered:!1,image:M.image||"",audio:M.audio||"",video:M.video||"",imageBlur:Ie,hideQuestion:M.hideQuestion};console.log("Adding new question:",o),t[r].questions.push(o),e(Pn(t)),I({...l,imageBlur:0}),g(!1),Ye(""),Ke("");try{localStorage.setItem("trivia-game-categories",JSON.stringify(t))}catch(n){console.error("Error saving to localStorage:",n)}console.log("Categories after add:",t)}}else if("edit"===y&&x){const{categoryId:r,questionIndex:o}=x,i=t.findIndex((e=>e.id===r));if(-1!==i){const a={question:M.question,answer:M.answer,value:parseInt(M.value.toString(),10),answered:t[i].questions[o].answered,image:M.image||"",audio:M.audio||"",video:M.video||"",imageBlur:Ie,hideQuestion:M.hideQuestion};if(console.log("Updating question:",a),M.categoryId!==r){console.log("Category changed from",r,"to",M.categoryId);const e=t.findIndex((e=>e.id===M.categoryId));if(-1===e)return console.error("New category not found"),void alert("Error: Could not find the selected category. Please try again.");t[e].questions.push(a),t[i].questions.splice(o,1),console.log("Question moved to new category")}else t[i].questions[o]=a;e(Pn(t));try{localStorage.setItem("trivia-game-categories",JSON.stringify(t))}catch(n){console.error("Error saving to localStorage:",n)}console.log("Categories after edit:",t),I({...l,imageBlur:0}),w(null),g(!1),Ye(""),Ke("")}}H(Date.now())},$e=(e,t)=>{if(b(e),Me(!1),"add"===e)I({id:"",categoryId:"",question:"",answer:"",value:100,image:"",audio:"",video:"",imageBlur:0,hideQuestion:!1}),w(null),Ye(""),Ke("");else if("edit"===e&&t){const{categoryId:e,questionIndex:n}=t,r=o.find((t=>t.id===e));if(r){const t=r.questions[n];I({id:t.id||"",categoryId:e,question:t.question,answer:t.answer,value:t.value,image:t.image||"",audio:t.audio||"",video:t.video||"",imageBlur:t.imageBlur||0,hideQuestion:t.hideQuestion||!1}),w({categoryId:e,questionIndex:n})}}g(!0)},Fe=()=>{""!==M.question.trim()||""!==M.answer.trim()||""!==M.image||""!==M.audio||""!==M.video?window.confirm("Are you sure you want to close? All unsaved changes will be lost.")&&(g(!1),I({...l,imageBlur:0}),w(null)):(g(!1),I({...l,imageBlur:0}),w(null))},Ue=e=>{const{name:t,value:n}=e.target;if("image"===t&&""!==n){fe(n);const e=new Image;e.onload=()=>{de(!0)},e.onerror=()=>{I({...M,[t]:n})},e.src=n}else I({...M,[t]:n})},Be=()=>{e(fn("setup"))},Ve=e=>{F===e?V((e=>"asc"===e?"desc":"asc")):(U(e),V("asc"))};(0,t.useEffect)((()=>{console.log("Categories changed:",o)}),[o]);const qe=async()=>{if(ee.trim())if(ae){re(!0),ie("");try{const e=(await uw.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${ae}`,{contents:[{parts:[{text:`You are a trivia question generator. Create a trivia question with its answer based on the following prompt: ${ee}. Format your response exactly like this: "Question: [your question] Answer: [your answer]"`}]}]},{headers:{"Content-Type":"application/json"}})).data.candidates[0].content.parts[0].text,t=e.match(/Question:([\s\S]+?)(?=Answer:)/),n=e.match(/Answer:([\s\S]+)/),r=t?t[1].trim():"",o=n?n[1].trim():"";I({...M,question:r,answer:o}),te("")}catch(e){console.error("Error generating content:",e),ie(`Failed to generate content: ${e instanceof Error?e.message:"Unknown error"}`)}finally{re(!1)}}else ce(!0);else ie("Please enter a prompt")};(0,t.useEffect)((()=>{const e=e=>{if("Escape"===e.key&&m)if(e.stopPropagation(),t()){window.confirm("Are you sure you want to close? All unsaved changes will be lost.")&&Fe()}else Fe()},t=()=>""!==M.question.trim()||""!==M.answer.trim()||""!==M.image||""!==M.audio||""!==M.video;return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[m,M]);const He=(0,t.useCallback)((()=>{const e=[];return o.forEach((t=>{t.questions&&Array.isArray(t.questions)&&t.questions.forEach(((n,r)=>{e.push({categoryId:t.id,categoryName:t.name,questionIndex:r,...n})}))})),e}),[o]),We=()=>{let e=He();if(c){const t=c.toLowerCase();if(t.startsWith("category:")){const n=t.substring(9).trim().toLowerCase();e=e.filter((e=>e.categoryName.toLowerCase().includes(n)))}else e=e.filter((e=>e.question.toLowerCase().includes(t)||e.answer.toLowerCase().includes(t)||e.categoryName.toLowerCase().includes(t)))}var t;t=e,e=[...t].sort(((e,t)=>{let n,r;return"value"===F?(n=e[F],r=t[F]):(n=String(e[F]||"").toLowerCase(),r=String(t[F]||"").toLowerCase()),n<r?"asc"===B?-1:1:n>r?"asc"===B?1:-1:0}));const n=e.length,r=Math.ceil(n/f),o=d*f,i=o-f,a=e.slice(i,o);return{totalPages:r,filteredQuestions:e,paginatedQuestions:a}};(0,t.useEffect)((()=>{const{totalPages:e,paginatedQuestions:t}=We();d>e&&e>0?p(1):C(t)}),[d,c,f,o,F,B]);const[Qe,Ye]=(0,t.useState)(""),[Ge,Ke]=(0,t.useState)(""),Xe=e=>{I({...M,[e]:""}),"image"===e&&(de(!1),fe("")),"audio"===e&&(Ye(""),me(!1)),"video"===e&&(Ke(""),ye(!1)),r("button-click")},Je=e=>{(e.ctrlKey||e.metaKey)&&"Enter"===e.key&&(e.preventDefault(),m&&M.question&&M.answer&&(Ne(),r("button-click")))};return(0,of.jsxs)(xk,{as:wp.div,initial:{opacity:0},animate:{opacity:1},children:[(0,of.jsxs)(wk,{children:[(0,of.jsx)(kk,{className:"halloween-drip",children:"Question Management"}),(0,of.jsx)(Sk,{children:"Review, add, update, or delete questions before starting the game"})]}),(0,of.jsxs)(Ek,{children:[(0,of.jsxs)(Ck,{children:[(0,of.jsxs)(jk,{children:[(0,of.jsx)(Tk,{onClick:Be,whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2190 \u0631\u062c\u0648\u0639"}),(0,of.jsx)(Ok,{onClick:()=>{z.current&&z.current.click()},whileHover:{scale:1.05},whileTap:{scale:.95},disabled:Le,title:"CSV must include 'category', 'question', and 'answer' columns. Optional columns: 'value', 'image', 'audio', 'video', 'batch'",children:Le?"\u23f3 Importing...":"\ud83d\udce5 Import CSV"}),(0,of.jsx)(Xk,{type:"file",ref:z,accept:".csv",onChange:async t=>{if(!t.target.files||0===t.target.files.length)return;const n=t.target;De(!0),Oe({message:"Importing CSV file...",type:"info",visible:!0});try{const n=t.target.files[0];try{const t=await Tw(n);if(t.length>0){const n=JSON.parse(JSON.stringify(o)),r=new Set,i=new Set;t.forEach((e=>{const t=e.category;let o=n.find((e=>e.name.toLowerCase().trim()===t.toLowerCase().trim()));o?r.add(o.name):(o={id:`category-${Date.now()}-${Math.random().toString(36).substring(2,9)}`,name:t,icon:"\u2753",questions:[]},n.push(o),i.add(t)),o.questions.push({...e,id:`question-${Date.now()}-${Math.random().toString(36).substring(2,9)}`})})),e(Pn(n)),ay(t.length);let a=`Successfully imported ${t.length} questions`;i.size>0&&(a+=`\n\u2705 Created ${i.size} new categories: ${Array.from(i).join(", ")}`),r.size>0&&(a+=`\n\u2705 Updated ${r.size} existing categories: ${Array.from(r).join(", ")}`),Oe({message:a,type:"success",visible:!0})}else Oe({message:"No valid questions found in the CSV file.",type:"warning",visible:!0})}catch(r){console.error("Error parsing CSV:",r),Oe({message:`Error parsing CSV: ${r instanceof Error?r.message:String(r)}`,type:"error",visible:!0})}}catch(r){console.error("Error importing CSV:",r),Oe({message:`Error importing CSV: ${r instanceof Error?r.message:String(r)}`,type:"error",visible:!0})}finally{n&&(n.value=""),De(!1)}}}),(0,of.jsx)(Tk,{onClick:()=>{const e=new Blob(['category,question,answer,value,image,audio,video,batch\nScience,What is the chemical symbol for water?,H2O,100,,,,"default"\nHistory,Who was the first President of the United States?,George Washington,200,,,,"default"\nEntertainment,Who directed the movie "Jurassic Park"?,Steven Spielberg,300,,,,"default"'],{type:"text/csv;charset=utf-8;"}),t=URL.createObjectURL(e),n=document.createElement("a");n.setAttribute("href",t),n.setAttribute("download","sample_questions_template.csv"),n.style.visibility="hidden",document.body.appendChild(n),n.click(),document.body.removeChild(n),Oe({message:"Sample CSV template downloaded",type:"success",visible:!0})},whileHover:{scale:1.05},whileTap:{scale:.95},style:{backgroundColor:"#8338ec"},title:"Download a CSV template with example questions",children:"\ud83d\udccb CSV Template"}),(0,of.jsx)(Tk,{onClick:()=>{if("LcCxMx"!==prompt("Enter the export password:"))return void alert("Incorrect password. Export cancelled.");const e=He().map((e=>({category:e.categoryName,question:e.question,answer:e.answer,value:e.value,image:e.image||"",audio:e.audio||"",video:e.video||""}))),t=pw().unparse(e),n=new Blob([t],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(n),o=document.createElement("a");o.setAttribute("href",r),o.setAttribute("download","game_questions_with_media.csv"),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o)},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\ud83d\udce4 Export CSV"}),(0,of.jsx)(Tk,{onClick:()=>$e("add"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2795 Add Question"}),(0,of.jsx)(Tk,{onClick:()=>{g(!0),b("add"),Me(!0),I({id:"",categoryId:"",question:"",answer:"",value:100,image:"",audio:"",video:"",imageBlur:0,hideQuestion:!1}),w(null)},whileHover:{scale:1.05},whileTap:{scale:.95},style:{backgroundColor:"#43a047"},children:"\u2728 Add Simple Question"}),(0,of.jsx)(Tk,{onClick:()=>{try{localStorage.setItem("trivia-game-categories",JSON.stringify(o)),alert("Questions saved to browser storage successfully! Note that clearing your browser cache will remove these saved edits.")}catch(e){console.error("Error saving to localStorage:",e),alert("Failed to save questions to browser storage. Your browser may have insufficient storage space or has restrictions on localStorage.")}},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\ud83d\udcbe Save Edits to Browser"}),(0,of.jsx)(Tk,{onClick:()=>{$(!N),N&&D([])},whileHover:{scale:1.05},whileTap:{scale:.95},style:{backgroundColor:N?"#e67e22":"#8c52ff"},children:N?"\u274c Cancel Selection":"\u2713 Select Questions"}),(0,of.jsx)(Tk,{onClick:()=>{localStorage.setItem("trivia-game-categories-backup",JSON.stringify(o)),e(Pn([])),setTimeout((()=>{try{const t=localStorage.getItem("trivia-game-categories");if(t){const n=JSON.parse(t);e(Pn(n)),alert("Categories have been force reloaded from storage.")}else{const t=localStorage.getItem("trivia-game-categories-backup");t&&(e(Pn(JSON.parse(t))),alert("Categories have been restored from backup."))}}catch(t){console.error("Error reloading categories:",t),alert("Failed to reload categories. See console for details.")}}),300)},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\ud83d\udd04 Force Reload Questions"}),(0,of.jsx)(Tk,{onClick:()=>{try{const e=JSON.stringify(o,null,2),t="data:application/json;charset=utf-8,"+encodeURIComponent(e),n=`trivia-categories-backup-${(new Date).toISOString().split("T")[0]}.json`,r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("download",n),r.click(),document.body.removeChild(r)}catch(e){console.error("Error exporting data:",e),alert("Error exporting data. See console for details.")}},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\ud83d\udcbe Export All Data"}),(0,of.jsx)(Tk,{onClick:()=>{if("LcCxMx"===prompt("Enter the export password:"))try{const e=o.map((e=>({id:e.id,name:e.name,icon:e.icon,questions:e.questions.map((e=>({value:e.value,question:e.question,answer:e.answer,image:e.image||void 0,audio:e.audio||void 0,video:e.video||void 0})))}))),t=`import { Category } from '../types/game.types';\n\nexport const categories: Category[] = ${JSON.stringify(e,null,2)};\n\nexport const getInitialCategories = (): Category[] => {\n  return JSON.parse(JSON.stringify(categories));\n};\n\nexport const resetToDefaultCategories = (): Category[] => {\n  return JSON.parse(JSON.stringify(categories));\n};\n`,n="data:text/typescript;charset=utf-8,"+encodeURIComponent(t),r=`questions-${(new Date).toISOString().split("T")[0]}.ts`,i=document.createElement("a");i.setAttribute("href",n),i.setAttribute("download",r),i.click(),sy(e.reduce(((e,t)=>e+t.questions.length),0))}catch(e){console.error("Error exporting as TypeScript:",e),alert("Error exporting as TypeScript. See console for details.")}else alert("Incorrect password. Export cancelled.")},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\ud83d\udccb Export as TypeScript"})]}),(0,of.jsxs)(uS,{children:[N&&(0,of.jsxs)(of.Fragment,{children:[L.length>0&&(0,of.jsxs)(Pk,{onClick:()=>{if(0!==L.length&&window.confirm(`Are you sure you want to delete ${L.length} selected questions? This action cannot be undone.`)){const t=JSON.parse(JSON.stringify(o)),n=[...L].sort(((e,t)=>e.categoryId===t.categoryId?t.questionIndex-e.questionIndex:e.categoryId.localeCompare(t.categoryId)));n.forEach((e=>{let{categoryId:n,questionIndex:r}=e;const o=t.findIndex((e=>e.id===n));if(-1!==o){const e=[...t[o].questions];e.splice(r,1),t[o].questions=e}})),e(Pn(t)),D([])}},whileHover:{scale:1.05},whileTap:{scale:.95},children:["\ud83d\uddd1\ufe0f Delete Selected (",L.length,")"]}),L.length>0&&(0,of.jsxs)(Tk,{onClick:async()=>{if(0===L.length)return void alert("Please select at least one question to generate QR codes for.");if(!window.confirm(`Generate QR codes for ${L.length} selected questions? This may take a moment.`))return;let t=0,n=0;const i=JSON.parse(JSON.stringify(o));sf(`Starting QR code generation for ${L.length} questions...`);for(const{categoryId:e,questionIndex:r}of L)try{const o=i.findIndex((t=>t.id===e));if(-1===o)continue;const s=i[o].questions[r];if(!s)continue;if(!s.answer||""===s.answer.trim()){n++;continue}const l=document.createElement("canvas");l.width=500,l.height=500;const c=l.getContext("2d");if(!c)throw new Error("Could not get canvas context");c.fillStyle="white",c.fillRect(0,0,l.width,l.height);const u=document.createElement("div");document.body.appendChild(u),a.render((0,of.jsx)(Yw,{value:s.answer,size:440,level:"H",includeMargin:!0,bgColor:"#FFFFFF",fgColor:"#000000"}),u),await new Promise((e=>{setTimeout((()=>{try{const n=u.querySelector("canvas");if(n){c.drawImage(n,(l.width-n.width)/2,(l.height-n.height)/2),c.font="14px Arial",c.fillStyle="black",c.textAlign="center",c.fillText("no cheating!",l.width/2,l.height-20);const e=l.toDataURL("image/png");i[o].questions[r].image=e,s.question.includes("Do not scan the qr code")||(i[o].questions[r].question=`${s.question||""} Do not scan the qr code`.trim()),t++}a.unmountComponentAtNode(u),document.body.removeChild(u),e()}catch(d){console.error("Error processing QR code:",d),n++,document.body.contains(u)&&(a.unmountComponentAtNode(u),document.body.removeChild(u)),e()}}),100)}))}catch(s){console.error("Error generating QR code:",s),n++}e(Pn(i)),sf(`QR code generation complete: ${t} successful, ${n} failed.`),r("button-click")},style:{marginLeft:"8px",backgroundColor:"#5bc0de"},children:["\ud83d\udcf1 Generate QR Codes (",L.length,")"]})]}),(0,of.jsx)(Pk,{onClick:()=>{if(window.confirm("WARNING: Are you sure you want to delete ALL questions from ALL categories? This action cannot be undone.")){const t=o.map((e=>({...e,questions:[]})));e(Pn(t))}},whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u26a0\ufe0f Delete All Questions"})]})]}),(0,of.jsx)(AS,{children:(0,of.jsx)(_k,{type:"text",placeholder:"Search questions, answers, or categories...",value:c,onChange:e=>{u(e.target.value),p(1)}})}),(0,of.jsxs)(PS,{children:[(0,of.jsx)(OS,{children:"Questions per page:"}),(0,of.jsxs)(_S,{value:"number"===typeof k&&k>1e3?"all":k,onChange:e=>{const t=e.target.value;if("all"===t){const e=He().length;S(e),h(e>0?e:1e6)}else{const e=parseInt(t);S(e),h(e)}p(1)},children:[(0,of.jsx)("option",{value:10,children:"10"}),(0,of.jsx)("option",{value:20,children:"20"}),(0,of.jsx)("option",{value:50,children:"50"}),(0,of.jsx)("option",{value:100,children:"100"}),(0,of.jsx)("option",{value:200,children:"200"}),(0,of.jsx)("option",{value:500,children:"500"}),(0,of.jsx)("option",{value:1e3,children:"1000"}),(0,of.jsx)("option",{value:"all",children:"All"})]})]}),E.length>0?(0,of.jsxs)(of.Fragment,{children:[(0,of.jsxs)(Rk,{className:"question-table",children:[(0,of.jsx)("thead",{children:(0,of.jsxs)(Ak,{children:[N&&(0,of.jsx)(dS,{style:{width:"50px"},children:(0,of.jsx)("input",{type:"checkbox",checked:L.length===He().length,onChange:e=>{if(e.target.checked){const e=He().map((e=>({categoryId:e.categoryId,questionIndex:e.questionIndex})));D(e)}else D([])}})}),(0,of.jsxs)(dS,{onClick:()=>Ve("categoryName"),style:{cursor:"pointer",width:"20%"},children:["Category ","categoryName"===F&&("asc"===B?"\u25b2":"\u25bc")]}),(0,of.jsxs)(dS,{onClick:()=>Ve("value"),style:{cursor:"pointer",width:"10%"},children:["Value ","value"===F&&("asc"===B?"\u25b2":"\u25bc")]}),(0,of.jsxs)(dS,{onClick:()=>Ve("question"),style:{cursor:"pointer",width:"30%"},children:["Question ","question"===F&&("asc"===B?"\u25b2":"\u25bc")]}),(0,of.jsxs)(dS,{onClick:()=>Ve("answer"),style:{cursor:"pointer",width:"30%"},children:["Answer ","answer"===F&&("asc"===B?"\u25b2":"\u25bc")]}),(0,of.jsx)(dS,{style:{width:"10%"},children:"Actions"})]})}),(0,of.jsx)("tbody",{children:E.map(((t,n)=>(0,of.jsxs)(Ak,{children:[N&&(0,of.jsx)(Mk,{style:{width:"40px"},children:(0,of.jsx)(cS,{type:"checkbox",checked:L.some((e=>e.categoryId===t.categoryId&&e.questionIndex===t.questionIndex)),onChange:e=>{return n=t.categoryId,r=t.questionIndex,o=e.target.checked,void D(o?[...L,{categoryId:n,questionIndex:r}]:L.filter((e=>!(e.categoryId===n&&e.questionIndex===r))));var n,r,o}})}),(0,of.jsx)(Mk,{children:t.categoryName}),(0,of.jsx)(Mk,{children:t.value}),(0,of.jsx)(Mk,{children:(0,of.jsx)(Yf,{text:pS(t.question,100)})}),(0,of.jsx)(Mk,{children:(0,of.jsx)(Yf,{text:pS(t.answer,100)})}),(0,of.jsx)(Mk,{children:(0,of.jsxs)(iS,{children:[(0,of.jsx)(aS,{onClick:()=>((e,t)=>{const n=o.find((t=>t.id===e));n&&(n.questions[t],$e("edit",{categoryId:e,questionIndex:t}))})(t.categoryId,t.questionIndex),children:"\u270f\ufe0f"}),(0,of.jsx)(aS,{onClick:()=>((t,n)=>{if(window.confirm("Are you sure you want to delete this question?")){const r=JSON.parse(JSON.stringify(o)),i=r.findIndex((e=>e.id===t));if(-1!==i){const t=[...r[i].questions];t.splice(n,1),r[i].questions=t,e(Pn(r))}}})(t.categoryId,t.questionIndex),children:"\ud83d\uddd1\ufe0f"})]})})]},n)))})]}),(()=>{const{totalPages:e}=We();if(e<=1)return null;return(0,of.jsxs)(Jk,{children:[(0,of.jsx)(Zk,{onClick:()=>p((e=>Math.max(1,e-1))),disabled:1===d,children:"\xab Previous"}),(()=>{const t=[];if(e<=7)for(let n=1;n<=e;n++)t.push(n);else{t.push(1),d>3&&t.push("ellipsis-start");const n=Math.max(2,d-1),r=Math.min(e-1,d+1);for(let e=n;e<=r;e++)t.push(e);d<e-2&&t.push("ellipsis-end"),t.push(e)}return t})().map(((e,t)=>"number"===typeof e?(0,of.jsx)(eS,{$active:e===d,onClick:()=>p(e),children:e},t):(0,of.jsx)(tS,{children:"..."},e))),(0,of.jsx)(Zk,{onClick:()=>p((t=>Math.min(e,t+1))),disabled:d===e,children:"Next \xbb"}),(0,of.jsxs)(nS,{children:[(0,of.jsx)("span",{children:"Go to:"}),(0,of.jsx)(rS,{type:"number",min:"1",max:e,value:d,onChange:t=>{const n=parseInt(t.target.value);!isNaN(n)&&n>=1&&n<=e&&p(n)}}),(0,of.jsxs)("span",{children:["of ",e]})]}),(0,of.jsxs)(oS,{children:[(0,of.jsx)("span",{children:"Items per page:"}),(0,of.jsxs)("select",{value:f,onChange:e=>h(Number(e.target.value)),children:[(0,of.jsx)("option",{value:10,children:"10"}),(0,of.jsx)("option",{value:20,children:"20"}),(0,of.jsx)("option",{value:50,children:"50"}),(0,of.jsx)("option",{value:100,children:"100"})]})]})]})})()]}):(0,of.jsx)(Lk,{children:c?"No questions match your search":"No questions found. Add some questions to get started!"})]}),(0,of.jsx)(Pp,{children:m&&(0,of.jsx)(Dk,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e=>{e.stopPropagation()},children:(0,of.jsxs)(Nk,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},onClick:e=>e.stopPropagation(),children:[(0,of.jsxs)(sS,{children:[(0,of.jsx)($k,{className:"halloween-drip",children:"add"===y?Ae?"Add Simple Question":"Add New Question":"Edit Question"}),(0,of.jsx)(lS,{onClick:Fe,whileHover:{scale:1.1},whileTap:{scale:.9},children:"\u2715"})]}),(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Category"}),(0,of.jsx)(qk,{name:"categoryId",value:M.categoryId,onChange:Ue,children:o.map((e=>(0,of.jsx)("option",{value:e.id,children:e.name},e.id)))}),(0,of.jsx)(Yk,{onClick:()=>{P(!0)},children:"+ Create New Category"})]}),(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Generate Question with AI"}),(0,of.jsx)(ES,{placeholder:"Describe what kind of trivia question you want (e.g., 'A question about astronomy' or 'Rewrite this: What is the capital of France?')",value:ee,onChange:e=>te(e.target.value)}),(0,of.jsx)(CS,{onClick:qe,disabled:ne||!ee.trim(),whileHover:{scale:1.03},whileTap:{scale:.97},children:ne?"\u23f3 Generating...":"\u2728 Generate with Gemini"}),oe&&(0,of.jsx)(jS,{children:oe})]}),(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Question"}),(0,of.jsx)(Vk,{name:"question",value:M.question,onChange:Ue,onKeyDown:Je,placeholder:"Enter question text"}),(0,of.jsxs)("div",{style:{marginTop:"8px",display:"flex",alignItems:"center"},children:[(0,of.jsx)("input",{type:"checkbox",id:"hideQuestion",checked:M.hideQuestion,onChange:e=>I({...M,hideQuestion:e.target.checked}),style:{marginRight:"8px"}}),(0,of.jsxs)("label",{htmlFor:"hideQuestion",style:{cursor:"pointer"},children:["Hide question? ",(0,of.jsx)("span",{style:{color:"#777",fontSize:"0.9em"},children:'(A "Reveal Question" button will be shown instead)'})]})]})]}),(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Answer"}),(0,of.jsx)(Vk,{name:"answer",value:M.answer,onChange:Ue,onKeyDown:Je,placeholder:"Enter answer text"}),(0,of.jsx)(Tk,{onClick:()=>{if(M.answer.trim()){Re(!0);try{const e=document.createElement("canvas");e.width=500,e.height=500;const t=e.getContext("2d");if(!t)throw new Error("Could not get canvas context");t.fillStyle="white",t.fillRect(0,0,e.width,e.height);const n=document.createElement("div");document.body.appendChild(n);let o=M.answer;const i=300;o.length>i&&(console.log(`Warning: QR code content is very long (${o.length} chars). This may affect scannability.`),sf(`Warning: Long answer (${o.length} chars) may affect QR code scannability.`)),a.render((0,of.jsx)(Yw,{value:o,size:440,level:"H",includeMargin:!0,bgColor:"#FFFFFF",fgColor:"#000000"}),n),setTimeout((()=>{const o=n.querySelector("canvas");if(!o)throw new Error("QR code canvas not found");{t.drawImage(o,(e.width-o.width)/2,(e.height-o.height)/2);const i=e.toDataURL("image/png");I({...M,image:i,question:M.question.includes("Do not scan the qr code")?M.question:`${M.question||""} Do not scan the qr code`.trim()}),a.unmountComponentAtNode(n),document.body.removeChild(n),r("button-click")}Re(!1)}),100)}catch(e){console.error("Error generating QR code:",e),alert("Failed to generate QR code. Please try again."),Re(!1)}}else alert("Please enter an answer text before generating a QR code.")},disabled:_e||!M.answer.trim(),whileHover:{scale:1.05},whileTap:{scale:.95},children:_e?"\u23f3 Generating QR...":"\ud83d\udcf1 Generate QR Code \u062d\u0642 \u0644\u0639\u0628\u0629 \u0648\u0644\u0627 \u0643\u0644\u0645\u0629 \u0641\u0642\u0637!"})]}),(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Point Value"}),(0,of.jsx)(Hk,{children:[100,200,300,400,500].map((e=>(0,of.jsx)(Wk,{selected:M.value===e,onClick:()=>(e=>{I({...M,value:e}),r("button-click")})(e),whileHover:{scale:1.05},whileTap:{scale:.95},children:e},e)))})]}),!Ae&&(0,of.jsxs)(of.Fragment,{children:[(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Image (optional)"}),(0,of.jsx)(Bk,{name:"image",value:M.image||"",onChange:Ue,placeholder:"https://example.com/image.jpg"}),M.image&&(0,of.jsxs)("div",{style:{margin:"10px 0"},children:[(0,of.jsxs)(Uk,{children:["Image Blur Level: ",Ie,"px"]}),(0,of.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,of.jsx)("input",{type:"range",min:"0",max:"50",value:Ie,onChange:e=>ze(parseInt(e.target.value))}),(0,of.jsx)("button",{onClick:()=>ze(0),children:"Reset"})]})]}),(0,of.jsxs)("div",{style:{marginTop:"8px"},children:[(0,of.jsx)("label",{htmlFor:"file-upload",style:{cursor:"pointer",background:"#f0f0f0",padding:"8px 12px",borderRadius:"4px",display:"inline-block"},children:"Or upload image file"}),(0,of.jsx)("input",{id:"file-upload",type:"file",accept:"image/*",style:{display:"none"},onChange:e=>{if(e.target.files&&e.target.files[0]){const t=e.target.files[0];Se(t);const n=URL.createObjectURL(t);fe(n),de(!0)}}})]}),M.image&&!ue&&(0,of.jsxs)(Gk,{children:[(0,of.jsx)(fS,{type:"image",src:M.image,blur:Ie}),(0,of.jsx)(Qk,{onClick:()=>Xe("image"),whileHover:{scale:1.1},whileTap:{scale:.9},children:"\u2716"})]}),ue&&(0,of.jsx)(jw,{imageUrl:pe,onCropComplete:e=>{I({...M,image:e}),de(!1)},onCancel:()=>{de(!1),I({...M,image:pe})}})]}),(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Audio URL (optional)"}),(0,of.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,of.jsxs)("div",{children:[(0,of.jsx)(MS,{children:"Upload from your device:"}),(0,of.jsx)(RS,{type:"file",accept:"audio/*",onChange:e=>{if(e.target.files&&e.target.files[0]){const t=e.target.files[0];console.log("Audio file selected:",t.name,t.type),Ce(t);const n=URL.createObjectURL(t);console.log("Created audio URL:",n),be(n),I({...M,audio:n}),console.log("Updated formData with audio:",n),r("button-click")}else console.log("No audio file selected")}})]}),(0,of.jsxs)("div",{children:[(0,of.jsx)(MS,{children:"Or use a direct URL:"}),(0,of.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,of.jsx)(RS,{type:"text",placeholder:"Enter audio URL",value:Qe,onChange:e=>Ye(e.target.value),style:{flex:1}}),(0,of.jsx)(Tk,{onClick:()=>{""!==Qe.trim()&&(I({...M,audio:Qe}),r("button-click"))},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Use URL"})]})]})]}),he&&M.audio&&(0,of.jsx)(ak,{audioUrl:M.audio,onTrimComplete:e=>{I({...M,audio:e}),me(!1),r("button-click")},onCancel:()=>{me(!1)}}),M.audio&&!he&&(0,of.jsxs)("div",{style:{marginTop:"15px"},children:[(0,of.jsxs)(Gk,{children:[(0,of.jsx)(fS,{type:"audio",src:M.audio}),(0,of.jsx)(Qk,{onClick:()=>Xe("audio"),whileHover:{scale:1.1},whileTap:{scale:.9},children:"\u2716"})]}),(0,of.jsx)(Tk,{onClick:()=>me(!0),whileHover:{scale:1.05},whileTap:{scale:.95},style:{marginTop:"10px",backgroundColor:"#6c757d"},children:"\u2702\ufe0f Trim Audio"})]})]}),(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Video URL (optional)"}),(0,of.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,of.jsxs)("div",{children:[(0,of.jsx)(MS,{children:"Upload from your device:"}),(0,of.jsx)(RS,{type:"file",accept:"video/*",onChange:e=>{if(e.target.files&&e.target.files[0]){const t=e.target.files[0];Te(t);const n=URL.createObjectURL(t);we(n),I({...M,video:n}),r("button-click")}}})]}),(0,of.jsxs)("div",{children:[(0,of.jsx)(MS,{children:"Or use a direct URL:"}),(0,of.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,of.jsx)(RS,{type:"text",placeholder:"Enter video URL",value:Ge,onChange:e=>Ke(e.target.value),style:{flex:1}}),(0,of.jsx)(Tk,{onClick:()=>{""!==Ge.trim()&&(I({...M,video:Ge}),r("button-click"))},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Use URL"})]})]})]}),ge&&M.video&&(0,of.jsx)(bk,{videoUrl:M.video,onTrimComplete:e=>{I({...M,video:e}),ye(!1),r("button-click")},onCancel:()=>{ye(!1)}}),M.video&&!ge&&(0,of.jsxs)("div",{children:[(0,of.jsxs)(Gk,{children:[(0,of.jsx)(fS,{type:"video",src:M.video}),(0,of.jsx)(Qk,{onClick:()=>Xe("video"),whileHover:{scale:1.1},whileTap:{scale:.9},children:"\u2716"})]}),(0,of.jsx)(Tk,{onClick:()=>ye(!0),whileHover:{scale:1.05},whileTap:{scale:.95},style:{marginTop:"10px",backgroundColor:"#6c757d"},children:"\u2702\ufe0f Trim Video"})]})]})]}),(0,of.jsxs)(Kk,{children:[(0,of.jsx)(Tk,{onClick:Fe,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Cancel"}),(0,of.jsx)(Tk,{onClick:Ne,whileHover:{scale:1.05},whileTap:{scale:.95},children:"add"===y?"Add Question":"Save Changes"})]})]})})}),j&&(0,of.jsx)(Dk,{onClick:e=>e.stopPropagation(),children:(0,of.jsxs)(Nk,{children:[(0,of.jsxs)(sS,{children:[(0,of.jsx)($k,{className:"halloween-drip",children:"Add New Category"}),(0,of.jsx)(lS,{onClick:()=>P(!1),children:"\xd7"})]}),(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Category Name"}),(0,of.jsx)(Bk,{value:O,onChange:e=>_(e.target.value),placeholder:"Enter category name"})]}),(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Select Category Icon:"}),(0,of.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"15px"},children:[(0,of.jsx)(SS,{children:R}),(0,of.jsxs)("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[(0,of.jsx)(IS,{children:(0,of.jsx)(Qg,{onEmojiSelected:e=>A(e),currentEmoji:R,label:"Choose Emoji",buttonStyle:{backgroundColor:"#f5f5f5"}})}),(0,of.jsx)(Tk,{onClick:()=>A("\u2753"),whileHover:{scale:1.05},whileTap:{scale:.95},style:{backgroundColor:"#6c757d"},children:"Reset"})]})]})]}),(0,of.jsxs)(Kk,{children:[(0,of.jsx)(Tk,{onClick:()=>P(!1),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Cancel"}),(0,of.jsx)(Tk,{onClick:()=>{if(!O||""===O.trim())return void alert("Please enter a category name");const t=JSON.parse(JSON.stringify(o)),n=`category-${Date.now()}-${Math.random().toString(36).substring(2,9)}`;t.push({id:n,name:O,icon:R,questions:[]}),e(Pn(t)),P(!1),_(""),A("\u2753")},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Add Category"})]})]})}),W&&(0,of.jsx)(Dk,{onClick:e=>e.stopPropagation(),children:(0,of.jsxs)(Nk,{children:[(0,of.jsxs)(sS,{children:[(0,of.jsx)($k,{className:"halloween-drip",children:"Edit Category"}),(0,of.jsx)(lS,{onClick:()=>Q(!1),children:"\xd7"})]}),(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Category Name"}),(0,of.jsx)(Bk,{value:K,onChange:e=>X(e.target.value),placeholder:"Enter category name"})]}),(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Select Category Icon"}),(0,of.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"15px"},children:[(0,of.jsx)(SS,{children:J}),(0,of.jsxs)("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[(0,of.jsx)(IS,{children:(0,of.jsx)(Qg,{onEmojiSelected:e=>Z(e),currentEmoji:J,label:"Choose Emoji",buttonStyle:{backgroundColor:"#f5f5f5"}})}),(0,of.jsx)(Tk,{onClick:()=>Z("\u2753"),whileHover:{scale:1.05},whileTap:{scale:.95},style:{backgroundColor:"#6c757d"},children:"Reset"})]})]})]}),(0,of.jsxs)(jk,{children:[(0,of.jsx)(Tk,{onClick:()=>Q(!1),children:"Cancel"}),(0,of.jsx)(Tk,{onClick:()=>{if(!Y||""===K.trim())return void alert("Category name is required.");const t=JSON.parse(JSON.stringify(o)),n=t.findIndex((e=>e.id===Y.id));if(-1!==n){t[n].name=K,t[n].icon=J,e(Pn(t));try{localStorage.setItem("trivia-game-categories",JSON.stringify(t))}catch(r){console.error("Error saving to localStorage:",r)}Q(!1),G(null),X(""),Z("")}},children:"Save Changes"})]})]})}),le&&(0,of.jsxs)(Dk,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:50,opacity:0},children:[(0,of.jsxs)(sS,{children:[(0,of.jsx)("h2",{children:"Enter Gemini API Key"}),(0,of.jsx)(lS,{onClick:()=>ce(!1),whileHover:{scale:1.05},whileTap:{scale:.9},children:"\u2715"})]}),(0,of.jsx)(Nk,{children:(0,of.jsxs)(Fk,{children:[(0,of.jsx)(Uk,{children:"Gemini API Key"}),(0,of.jsx)(Bk,{type:"text",value:ae,onChange:e=>se(e.target.value),placeholder:"Enter your Gemini API key here"}),(0,of.jsx)(TS,{children:"You can get a Gemini API key from the Google AI Studio. This key will only be used in your browser."})]})}),(0,of.jsxs)(jk,{style:{justifyContent:"flex-end",padding:"20px"},children:[(0,of.jsx)(Tk,{onClick:()=>{ae.trim()?(ce(!1),qe()):ie("Please enter a valid API key")},whileHover:{scale:1.05},whileTap:{scale:.95},children:"Submit"}),(0,of.jsx)(Tk,{onClick:()=>ce(!1),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Cancel"})]})]}),(0,of.jsxs)(hS,{children:[(0,of.jsx)(mS,{className:"halloween-drip",children:"Category Management"}),(0,of.jsxs)("div",{style:{display:"flex",gap:"10px",marginBottom:"10px"},children:[(0,of.jsx)(Tk,{onClick:Be,whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2190 \u0631\u062c\u0648\u0639"}),(0,of.jsx)(Tk,{onClick:()=>P(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:"\u2795 Add Category"})]}),(0,of.jsx)(gS,{children:o.map((t=>(0,of.jsxs)(yS,{onClick:e=>{e.target.closest("button")||(e=>{var t,n;const r=(null===(t=o.find((t=>t.id===e)))||void 0===t?void 0:t.name)||"";u(`category:${r}`),p(1),null===(n=document.querySelector(".question-table"))||void 0===n||n.scrollIntoView({behavior:"smooth"})})(t.id)},children:[(0,of.jsx)(bS,{children:t.icon||"\u2753"}),(0,of.jsx)(vS,{children:t.name}),(0,of.jsxs)(xS,{children:[t.questions.length," questions"]}),(0,of.jsx)(kS,{onClick:e=>{e.stopPropagation(),(e=>{G(e),X(e.name),Z(e.icon),Q(!0)})(t)},whileHover:{scale:1.1},whileTap:{scale:.9},children:"\u270f\ufe0f"}),(0,of.jsx)(wS,{onClick:n=>{n.stopPropagation(),(t=>{const r=o.find((e=>e.id===t));if(r&&window.confirm(`Are you sure you want to delete the category "${r.name}" and all its questions? This action cannot be undone.`)){const i=o.filter((e=>e.id!==t));e(Pn(i));try{localStorage.setItem("trivia-game-categories",JSON.stringify(i))}catch(n){console.error("Error saving to localStorage:",n)}alert(`Category "${r.name}" has been deleted.`)}})(t.id)},whileHover:{scale:1.1},whileTap:{scale:.9},children:"\ud83d\uddd1\ufe0f"})]},t.id)))})]}),(0,of.jsx)(Tk,{onClick:()=>{if(window.confirm("\u26a0\ufe0f EMERGENCY RESET: This will restore all original questions and discard all your changes. Are you absolutely sure?")){const t=rn();e(Pn(t)),localStorage.removeItem("trivia-game-categories"),((e,t,r,o)=>{console.log("Analytics event:",{category:e,action:t,label:r,value:o});try{n(279).event({category:e,action:t,label:r,value:o})}catch(i){console.warn("Analytics not available:",i)}})("Admin","Reset Questions"),alert("All questions have been reset to factory defaults."),r("button-click")}},whileHover:{scale:1.05},whileTap:{scale:.95},style:{backgroundColor:"#d00000",color:"white"},children:"\ud83d\udd04 Emergency Reset"}),Pe.visible&&(0,of.jsx)(zS,{type:Pe.type,initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},children:Pe.message})]})},DS=Ti(wp.button)`
  position: fixed;
  right: ${e=>e.$isOpen?"295px":"0"};
  left: auto;
  top: 450px;
  transform: none;
  background-color: #0a4d73;
  color: white;
  border: none;
  padding: 15px 10px;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease;
  
  &:hover {
    background-color: #0b5d8a;
  }
  
  &:focus {
    outline: none;
    box-shadow: -2px 0 15px rgba(0, 0, 0, 0.3);
  }
`,NS=Ti.span`
  font-size: 24px;
  transform: rotate(${e=>e.$isOpen?"180deg":"0deg"});
  transition: transform 0.3s ease;
`,$S=Ti(wp.div)`
  position: fixed;
  right: 0;
  left: auto;
  top: 180px;
  width: 295px;
  height: 541px;
  transform: none;
  z-index: 1000;
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 12px 0 0 12px;
  padding: 20px;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  direction: rtl;
  border: 2px solid rgba(15, 94, 135, 0.3);
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,FS=Ti.h3`
  font-size: 24px;
  color: #0a4d73;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 700;
  text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.8);
`,US=Ti.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,BS=Ti.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background-color: rgba(242, 249, 255, 0.8);
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
`,VS=Ti.span`
  font-size: 24px;
  flex-shrink: 0;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
`,qS=Ti.p`
  font-size: 16px;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
  text-shadow: 0px 0.5px 1px rgba(255, 255, 255, 0.8);
`,HS={open:{x:0,transition:{type:"spring",stiffness:300,damping:30}},closed:{x:295,transition:{type:"spring",stiffness:300,damping:30}}},WS=()=>{const[e,n]=(0,t.useState)(!1);return(0,of.jsxs)(of.Fragment,{children:[(0,of.jsx)(DS,{$isOpen:e,onClick:()=>n(!e),whileHover:{scale:1.05},whileTap:{scale:.95},children:(0,of.jsx)(NS,{$isOpen:e,children:"\u25c0"})}),(0,of.jsx)(Pp,{children:e&&(0,of.jsxs)($S,{initial:"closed",animate:"open",exit:"closed",variants:HS,children:[(0,of.jsx)(FS,{children:"\u0627\u0644\u0645\u064a\u0632\u0627\u062a \u0627\u0644\u062e\u0627\u0635\u0629:"}),(0,of.jsxs)(US,{children:[(0,of.jsxs)(BS,{children:[(0,of.jsx)(VS,{children:"\ud83e\udd16"}),(0,of.jsx)(qS,{children:"\u064a\u0639\u0637\u064a\u0643 \u0623\u0648\u0644 \u062b\u0644\u0627\u062b \u062d\u0631\u0648\u0641 \u0645\u0646 \u0627\u0644\u0625\u062c\u0627\u0628\u0629"})]}),(0,of.jsxs)(BS,{children:[(0,of.jsx)(VS,{children:"2\ufe0f\u20e3"}),(0,of.jsx)(qS,{children:"\u062f\u0628\u0644 \u0646\u0642\u0627\u0637 \u0627\u0644\u0625\u062c\u0627\u0628\u0629.. "})]}),(0,of.jsxs)(BS,{children:[(0,of.jsx)(VS,{children:"\ud83d\udd0d"}),(0,of.jsx)(qS,{children:"\u0627\u0644\u0625\u062a\u0635\u0627\u0644 \u0628\u0635\u062f\u064a\u0642 \u0645\u0636\u064a\u0639\u0629 \u0648\u0642\u062a... \u0623\u0646\u062a \u062f\u0648\u0631 \u0628\u0642\u0648\u0642\u0644 \u0628\u0646\u0641\u0633\u0643... \u0641\u0642\u0637 \u062d\u0642 \u0646\u0642\u0627\u0637 100 \u0648200"})]}),(0,of.jsxs)(BS,{children:[(0,of.jsx)(VS,{children:"\u26d4"}),(0,of.jsx)(qS,{children:"\u0627\u0645\u0646\u0639 \u0627\u0644\u0641\u0631\u064a\u0642 \u0627\u0644\u0622\u062e\u0631 \u0645\u0646 \u0627\u0644\u0625\u062c\u0627\u0628\u0629"})]}),(0,of.jsxs)(BS,{children:[(0,of.jsx)(VS,{children:"\u26a1"}),(0,of.jsx)(qS,{children:"\u062e\u0644\u0647\u0627 \u062a\u0628\u0631\u0642 \u0648\u062a\u0631\u0639\u062f... \u0627\u062d\u062a\u0645\u0627\u0644 \u064a\u062e\u0633\u0631 \u0627\u0644\u0641\u0631\u064a\u0642 \u0628\u064a\u0646 300 \u0648500 \u0646\u0642\u0637\u0629"})]})]})]})})]})},QS=Ti.button`
  background: ${e=>{switch(e.$variant){case"secondary":return"linear-gradient(135deg, #6c757d 0%, #495057 100%)";case"danger":return"linear-gradient(135deg, #ff4d4d 0%, #cc0000 100%)";default:return"var(--primary-gradient, linear-gradient(135deg, #0099cc 0%, #66d4ff 100%))"}}};
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,YS=[{id:"fail",name:"Fail Trumpet",src:"/cartoon-fail-trumpet-278822.mp3"},{id:"applause",name:"Applause",src:"/applause-crowd-242638.mp3"},{id:"rimshot",name:"Rimshot",src:"/rimshot-joke-funny-80325.mp3"},{id:"whip",name:"Whip Sound",src:"/whip-123738.mp3"}],GS=Ti.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  padding: 20px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`,KS=Ti.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`,XS=Ti.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`,JS=Ti.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
`,ZS=Ti.button`
  background: ${e=>e.$isCustom?"linear-gradient(45deg, #7928CA, #FF0080)":"linear-gradient(45deg, #2563EB, #3B82F6)"};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,eE=Ti.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  margin-left: 8px;
  
  &:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
  }
`,tE=Ti.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px dashed #ddd;
`,nE=Ti((e=>{let{children:t,variant:n="primary",...r}=e;return(0,of.jsx)(QS,{$variant:n,...r,children:t})}))`
  background-color: #10B981;
  width: 100%;
  margin-top: 10px;
`,rE=Ti.input`
  width: 100%;
  padding: 12px;
  border: 2px dashed #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: all 0.2s ease;
  margin-bottom: 10px;
  
  &:hover {
    border-color: #10B981;
  }
`,oE=Ti.div`
  color: #EF4444;
  margin-top: 8px;
  font-size: 14px;
`,iE=()=>{const[e,n]=(0,t.useState)([]),[r,o]=(0,t.useState)(""),[i,a]=(0,t.useState)(""),[s,l]=(0,t.useState)(!1),c=(0,t.useRef)(null);(0,t.useEffect)((()=>{const e=localStorage.getItem("trivia-custom-sounds");if(e)try{const t=JSON.parse(e).map((e=>{if(!e.blobData)return e;const t=atob(e.blobData),n=new Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const r=new Uint8Array(n),o=new Blob([r],{type:e.blobType});return{...e,src:URL.createObjectURL(o)}}));n(t)}catch(t){console.error("Failed to load custom sounds:",t)}}),[]),(0,t.useEffect)((()=>{if(e.length>0)try{localStorage.setItem("trivia-custom-sounds",JSON.stringify(e))}catch(t){console.error("Failed to save custom sounds:",t)}}),[e]);const u=e=>{new Audio(e).play()};return(0,of.jsxs)(GS,{children:[(0,of.jsx)(KS,{children:(0,of.jsx)(XS,{children:"Soundboard"})}),(0,of.jsx)("h3",{children:"Built-in Sounds"}),(0,of.jsx)(JS,{children:YS.map((e=>(0,of.jsx)(ZS,{onClick:()=>u(e.src),children:e.name},e.id)))}),e.length>0&&(0,of.jsxs)(of.Fragment,{children:[(0,of.jsx)("h3",{children:"Custom Sounds"}),(0,of.jsx)(JS,{children:e.map((t=>(0,of.jsxs)(ZS,{$isCustom:!0,onClick:()=>u(t.src),children:[t.name,(0,of.jsx)(eE,{onClick:r=>{r.stopPropagation(),(t=>{const r=e.filter((e=>e.id!==t));n(r),r.length>0?localStorage.setItem("trivia-custom-sounds",JSON.stringify(r)):localStorage.removeItem("trivia-custom-sounds")})(t.id)},children:"\u2715"})]},t.id)))})]}),(0,of.jsxs)(tE,{children:[(0,of.jsx)("h3",{children:"Add Custom Sound"}),(0,of.jsx)("input",{type:"text",placeholder:"Sound name",value:r,onChange:e=>o(e.target.value),style:{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid #ddd",marginBottom:"10px"}}),(0,of.jsx)(rE,{type:"file",accept:"audio/*",ref:c,onChange:e=>{if(!e.target.files||0===e.target.files.length)return;const t=e.target.files[0];t.type.includes("audio")?t.size>5242880?a("File size exceeds 5MB limit."):a(""):a("Please select an audio file.")}}),(0,of.jsx)(nE,{onClick:async()=>{var t;if(null===(t=c.current)||void 0===t||!t.files||0===c.current.files.length)return void a("Please select a file first.");if(!r.trim())return void a("Please enter a name for the sound.");const s=c.current.files[0];l(!0);try{const t=URL.createObjectURL(s),i=new FileReader;i.readAsDataURL(s),i.onload=()=>{const l=i.result.split(",")[1],u={id:`custom-${Date.now()}`,name:r.trim(),src:t,blobData:l,blobType:s.type};n([...e,u]),o(""),c.current&&(c.current.value=""),a("")},i.onerror=()=>{a("Failed to read audio file.")}}catch(i){a("Failed to process audio file."),console.error("Error processing audio:",i)}finally{l(!1)}},disabled:s,children:s?"Uploading...":"Add Sound"}),i&&(0,of.jsx)(oE,{children:i})]})]})},aE="#4a90e2",sE="linear-gradient(135deg, #4a90e2, #68b8e8)",lE="#f8fafc",cE="linear-gradient(135deg, #4a90e2, #3a7bd5)",uE="#fff",dE="#2c3e50",pE="#94a3b8",fE="#e2e8f0",hE="#10b981",mE="rgba(0, 0, 0, 0.1)",gE="#fff",yE=Ti.div`
  position: fixed;
  right: ${e=>e.theme.visible?"0":"-420px"};
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  height: 600px;
  max-height: 80vh;
  background: ${lE};
  border-radius: 16px 0 0 16px;
  box-shadow: 0 10px 25px ${mE};
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: right 0.3s ease-in-out;
  border: 1px solid ${fE};
  border-right: none;
  overflow: hidden;
`,vE=Ti.button`
  position: fixed;
  right: ${e=>e.theme.visible?"410px":"10px"};
  top: 80%;
  transform: translateY(-50%);
  background-color:rgb(11, 150, 231);
  color: white;
  border: none;
  padding: 15px 10px;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  
  &:hover {
    background-color: #0b5d8a;
  }
  
  &:focus {
    outline: none;
    box-shadow: -2px 0 15px rgba(0, 0, 0, 0.3);
  }
`,bE=Ti.span`
  font-size: 24px;
  transform: rotate(${e=>e.$isOpen?"180deg":"0deg"});
  transition: transform 0.3s ease;
`,xE=Ti.div`
  padding: 16px;
  background: ${sE};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,wE=Ti.h3`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:before {
    content: '🤖';
    font-size: 20px;
  }
`,kE=Ti.div`
  padding: 16px;
  background: white;
  border-bottom: 1px solid ${fE};
`,SE=Ti.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid ${fE};
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: ${aE};
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
`,EE=Ti.button`
  width: 100%;
  padding: 12px;
  background: ${sE};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
  }
`,CE=Ti.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 5px;
  }
`,jE=Ti.div`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 16px;
  position: relative;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  ${e=>"user"===e.theme.role?`\n    align-self: flex-end;\n    background: ${cE};\n    color: white;\n    border-bottom-right-radius: 4px;\n  `:"assistant"===e.theme.role?`\n    align-self: flex-start;\n    background: ${uE};\n    color: ${dE};\n    border: 1px solid ${fE};\n    border-bottom-left-radius: 4px;\n  `:`\n    align-self: center;\n    background: #f1f5f9;\n    color: ${pE};\n    font-style: italic;\n    font-size: 13px;\n    max-width: 90%;\n  `}
  
  p {
    margin: 0;
    white-space: pre-wrap;
    line-height: 1.5;
  }
  
  strong {
    font-weight: bold;
  }
  
  .time {
    font-size: 10px;
    opacity: 0.7;
    margin-top: 4px;
    text-align: right;
  }
`,TE=Ti.form`
  display: flex;
  padding: 12px;
  border-top: 1px solid ${fE};
  background: white;
`,PE=Ti.input`
  flex: 1;
  padding: 12px;
  border: 1px solid ${fE};
  border-radius: 8px;
  font-size: 14px;
  background: ${gE};
  
  &:focus {
    outline: none;
    border-color: ${aE};
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
  
  &::placeholder {
    color: ${pE};
  }
  
  &:disabled {
    background: #f1f5f9;
  }
`,OE=Ti.button`
  background: ${sE};
  color: white;
  border: none;
  border-radius: 8px;
  width: 40px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
  }
`,_E=Ti.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;

  ${e=>"connected"===e.theme.status?`\n    color: ${hE};\n    &:before {\n      content: '';\n      display: inline-block;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: ${hE};\n    }\n  `:"connecting"===e.theme.status?"\n    color: #f59e0b;\n    &:before {\n      content: '';\n      display: inline-block;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #f59e0b;\n      animation: pulse 1.5s infinite;\n    }\n    \n    @keyframes pulse {\n      0%, 100% { opacity: 1; }\n      50% { opacity: 0.5; }\n    }\n  ":`\n    color: ${pE};\n    &:before {\n      content: '';\n      display: inline-block;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: ${pE};\n    }\n  `}
`,RE=Ti.div`
  display: flex;
  gap: 4px;
  padding: 8px 12px;
  align-self: flex-start;
  background: ${uE};
  border-radius: 16px;
  border-bottom-left-radius: 4px;
  border: 1px solid ${fE};
  
  .dot {
    width: 8px;
    height: 8px;
    background: ${aE};
    border-radius: 50%;
    opacity: 0.7;
    animation: bounce 1.4s infinite ease-in-out both;
  }
  
  .dot:nth-child(1) { animation-delay: 0s; }
  .dot:nth-child(2) { animation-delay: 0.2s; }
  .dot:nth-child(3) { animation-delay: 0.4s; }
  
  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0.6); }
    40% { transform: scale(1); }
  }
`,AE=Ti.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
  color: ${pE};
  
  .icon {
    font-size: 40px;
    margin-bottom: 16px;
  }
  
  .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${aE};
  }
  
  .desc {
    font-size: 14px;
    max-width: 250px;
  }
`,ME=Ti.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`,IE=Ti.div`
  display: flex;
  gap: 6px;
  position: absolute;
  right: 12px;
  bottom: 70px;
  background: white;
  border: 1px solid ${fE};
  border-radius: 6px;
  padding: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,zE=Ti.button`
  background: none;
  border: none;
  color: ${dE};
  font-size: 14px;
  padding: 4px 6px;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background: #f1f5f9;
  }
`,LE=e=>{let{isVisible:n,toggleVisibility:r}=e;const[o,i]=(0,t.useState)(""),[a,s]=(0,t.useState)([]),[l,c]=(0,t.useState)(""),[u,d]=(0,t.useState)(!1),[p,f]=(0,t.useState)(!1),[h,m]=(0,t.useState)(!1),[g,y]=(0,t.useState)(16),v=(0,t.useRef)(null),b=(0,t.useRef)(null);(0,t.useEffect)((()=>{const e=localStorage.getItem("gemini-api-key");e&&(i(e),x(e))}),[]),(0,t.useEffect)((()=>{v.current&&(v.current.scrollTop=v.current.scrollHeight)}),[a]),(0,t.useEffect)((()=>{u&&b.current&&setTimeout((()=>{var e;return null===(e=b.current)||void 0===e?void 0:e.focus()}),300)}),[u]);const x=async e=>{if(e.trim()){f(!0);try{var t,n,r,o;const i=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"Hello! You are a trivia assistant. Say hi briefly."}]}]})});if(!i.ok)throw new Error(`API error: ${i.status}`);const a=await i.json();if(!a.candidates||null===(t=a.candidates[0])||void 0===t||null===(n=t.content)||void 0===n||null===(r=n.parts)||void 0===r||null===(o=r[0])||void 0===o||!o.text)throw new Error("Invalid response format");{localStorage.setItem("gemini-api-key",e);const t=a.candidates[0].content.parts[0].text;s([{id:Date.now().toString(),role:"assistant",content:t,timestamp:new Date}]),d(!0)}}catch(i){console.error("API key verification failed:",i),s([{id:Date.now().toString(),role:"system",content:"Failed to connect. Please check your API key and try again.",timestamp:new Date}]),d(!1)}finally{f(!1)}}},w=e=>{y((t=>Math.max(12,Math.min(24,t+e))))};return(0,of.jsxs)(of.Fragment,{children:[(0,of.jsx)(vE,{onClick:r,theme:{visible:n},children:(0,of.jsx)(bE,{$isOpen:n,children:"\u25c0"})}),(0,of.jsxs)(yE,{theme:{visible:n},children:[(0,of.jsxs)(xE,{children:[(0,of.jsx)(wE,{children:"\u0627\u0644\u0645\u0633\u0627\u0639\u062f \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a "}),(0,of.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,of.jsx)(_E,{theme:{status:p?"connecting":u?"connected":"disconnected"},children:p?"Connecting...":u?"Connected":"Disconnected"}),u&&(0,of.jsx)(ME,{onClick:()=>{localStorage.removeItem("gemini-api-key"),i(""),d(!1),s([])},children:"Reset Key"})]})]}),!u&&(0,of.jsx)(kE,{children:(0,of.jsxs)("form",{onSubmit:e=>{e&&e.preventDefault(),x(o)},children:[(0,of.jsx)(SE,{type:"password",placeholder:"Enter your Gemini API key",value:o,onChange:e=>i(e.target.value),disabled:p}),(0,of.jsx)(EE,{type:"submit",disabled:!o.trim()||p,children:p?"Connecting...":"Connect"})]})}),(0,of.jsxs)(CE,{ref:v,children:[0===a.length?(0,of.jsxs)(AE,{children:[(0,of.jsx)("div",{className:"icon",children:"\ud83e\udd16"}),(0,of.jsx)("div",{className:"title",children:"Gemini AI Assistant"}),(0,of.jsx)("div",{className:"desc",children:u?"Start chatting to get help with trivia questions!":"Enter your Gemini API key to start chatting."})]}):a.map((e=>{return(0,of.jsxs)(jE,{theme:{role:e.role},children:[(0,of.jsx)("p",{style:{fontSize:`${g}px`},dangerouslySetInnerHTML:{__html:(n=e.content,n.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"))}}),(0,of.jsx)("div",{className:"time",children:(t=e.timestamp,t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))})]},e.id);var t,n})),h&&(0,of.jsxs)(RE,{children:[(0,of.jsx)("div",{className:"dot"}),(0,of.jsx)("div",{className:"dot"}),(0,of.jsx)("div",{className:"dot"})]})]}),(0,of.jsxs)(IE,{children:[(0,of.jsx)(zE,{onClick:()=>w(-2),children:"A-"}),(0,of.jsx)(zE,{onClick:()=>w(2),children:"A+"})]}),(0,of.jsxs)(TE,{onSubmit:async e=>{if(e&&e.preventDefault(),!l.trim()||!u||h)return;const t=l.trim();c(""),m(!0);const n={id:Date.now().toString(),role:"user",content:t,timestamp:new Date};s((e=>[...e,n]));try{var r,i,p,f;const e=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[...a.filter((e=>"system"!==e.role)).map((e=>({role:"assistant"===e.role?"model":"user",parts:[{text:e.content}]}))),{role:"user",parts:[{text:t}]}],generationConfig:{temperature:.7,maxOutputTokens:800}})});if(!e.ok)throw new Error(`API error: ${e.status}`);const n=await e.json();if(!n.candidates||null===(r=n.candidates[0])||void 0===r||null===(i=r.content)||void 0===i||null===(p=i.parts)||void 0===p||null===(f=p[0])||void 0===f||!f.text)throw new Error("Invalid response format");{const e={id:Date.now().toString(),role:"assistant",content:n.candidates[0].content.parts[0].text,timestamp:new Date};s((t=>[...t,e]))}}catch(g){console.error("Error sending message:",g);const e={id:Date.now().toString(),role:"system",content:"Error: Failed to get response. Please check your connection.",timestamp:new Date};s((t=>[...t,e])),g instanceof Error&&g.message.includes("401")&&(d(!1),localStorage.removeItem("gemini-api-key"))}finally{m(!1),setTimeout((()=>{var e;return null===(e=b.current)||void 0===e?void 0:e.focus()}),100)}},children:[(0,of.jsx)(PE,{ref:b,type:"text",placeholder:u?"Type a message...":"Enter API key to chat",value:l,onChange:e=>c(e.target.value),disabled:!u}),(0,of.jsx)(OE,{type:"submit",disabled:!u||!l.trim()||h,children:"\u2191"})]})]})]})},DE=Ti.button`
  background: ${e=>{switch(e.$variant){case"secondary":return"linear-gradient(135deg, #6c757d 0%, #495057 100%)";case"danger":return"linear-gradient(135deg, #ff4d4d 0%, #cc0000 100%)";default:return"var(--primary-gradient, linear-gradient(135deg, #0099cc 0%, #66d4ff 100%))"}}};
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,NE=e=>{let{children:t,variant:n="primary",...r}=e;return(0,of.jsx)(DE,{$variant:n,...r,children:t})},$E=Ti.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  background-color: var(--background-color, #e6f7ff);
  background-image: var(--background-image, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpattern id='pattern-waves' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Cpath d='M0,10 Q5,5 10,10 T20,10' stroke='%2366d4ff20' fill='none' /%3E%3Cpath d='M0,15 Q5,10 10,15 T20,15' stroke='%2366d4ff20' fill='none' /%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' stroke='%2366d4ff20' fill='none' /%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern-waves)' /%3E%3C/svg%3E"));
  font-family: var(--font-family, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif);
`,FE=Ti.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  flex-grow: 1;
  max-width: 1800px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`,UE=Ti.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  gap: 45px;
  margin-left: 15px;
  margin-top: 50px;
  
  @media (max-width: 1100px) {
    flex-direction: row;
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`,BE=Ti(wp.div)`
  flex: 1;
  max-width: calc(100% - 300px);
  
  @media (max-width: 1100px) {
    max-width: 100%;
  }
`,VE=Ti.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: var(--primary-gradient, linear-gradient(135deg, #0099cc 0%, #66d4ff 100%));
  color: var(--button-text-color, white);
  box-shadow: var(--box-shadow, 0 4px 15px rgba(0, 153, 204, 0.3));
  position: relative;
`,qE=Ti.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  z-index: 2;
`,HE=Ti.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`,WE=Ti.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  justify-content: flex-end;
  z-index: 2;
`,QE=Ti.button`
  background: none;
  border: none;
  color: var(--button-text-color, white);
  font-size: 24px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
`,YE=(Ti.div`
  position: relative;
  display: flex;
  align-items: center;
`,Ti.input`
  position: absolute;
  top: 100%;
  left: 0;
  width: 120px;
  height: 8px;
  margin-top: 8px;
  background-color: var(--card-background, #f1f0fe);
  border-radius: var(--border-radius, 4px);
  outline: none;
  z-index: 10;
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  
  transition-delay: 0s;
  
  &:hover {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }
`,Ti.div`
  font-size: 18px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
`,Ti.span`
  font-size: 20px;
`,Ti.span`
  font-weight: bold;
`,Ti.span`
  color: #fff;
  font-weight: bold;
`,Ti.div`
  display: flex;
  align-items: center;
  gap: 10px;
`),GE=Ti.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 490px;
  
  @media (max-width: 1100px) {
    width: 100%;
    margin-top: 0;
  }
`,KE=Ti.button`
  background: linear-gradient(135deg, #ff6464 0%, #ff5252 100%);
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  width: 30%;
  box-shadow: 0 4px 15px rgba(255, 82, 82, 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 82, 82, 0.4);
  }
  
  &:active {
    transform: translateY(1px);
  }
`,XE=Ti.div`
  font-size: 28px;
  font-weight: bold;
  color: white;
  text-align: center;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`,JE=()=>{const{gamePhase:e,teams:n,musicEnabled:r,volume:o,activeTeamIndex:i}=v((e=>({gamePhase:e.gamePhase,teams:e.teams,musicEnabled:e.musicEnabled,volume:e.volume,activeTeamIndex:e.activeTeamIndex}))),a=T(),{playSound:s}=rf(),{initializeElectricCooldown:l}=df(),[c,u]=(0,t.useState)(!1),[d,p]=(0,t.useState)(null),[f,h]=(0,t.useState)(!0),[m,g]=(0,t.useState)(!1),[y,b]=(0,t.useState)(!1),{categories:x,selectedCategories:w}=v((e=>({categories:e.categories||[],selectedCategories:e.selectedCategories||[]})));(0,t.useEffect)((()=>{const e=e=>{!e.detail||0!==e.detail.teamIndex&&1!==e.detail.teamIndex||(p(e.detail.teamIndex),setTimeout((()=>{p(null)}),2e3))};return window.addEventListener("electricShock",e),()=>{window.removeEventListener("electricShock",e)}}),[]),(0,t.useEffect)((()=>{if("board"===e){"true"===localStorage.getItem("electricInitialized")||(l(),localStorage.setItem("electricInitialized","true"))}}),[e,l]),(0,t.useEffect)((()=>{"setup"===e&&localStorage.removeItem("electricInitialized")}),[e]);const k=()=>{a(hn()),s("button-click")},S=e=>{a(gn(Number(e.target.value)/100))};if((0,t.useEffect)((()=>{if(console.log("Current game phase:",e),"playing"===e){const e=x.filter((e=>w.includes(e.id)));let t=0,n=0;e.forEach((e=>{n+=e.questions.length,t+=e.questions.filter((e=>e.answered)).length})),console.log(`Questions answered: ${t}/${n}`),t===n&&n>0&&console.warn("All questions are already marked as answered!")}}),[e,x,w]),"setup"===e)return(0,of.jsx)(yv,{});let E;switch(e){case"setup":default:E=(0,of.jsx)(yv,{});break;case"playing":E=(0,of.jsx)(sh,{});break;case"question":E=(0,of.jsx)(Gh,{});break;case"answer":E=(0,of.jsx)(wh,{});break;case"end":E=(0,of.jsx)(Yv,{});break;case"questionManagement":E=(0,of.jsx)(LS,{})}return(0,of.jsxs)($E,{children:[f&&(0,of.jsx)(Hp,{snowflakeCount:200,style:{zIndex:5}}),(0,of.jsx)(Ey,{}),(0,of.jsxs)(VE,{children:[(0,of.jsx)(qE,{children:(0,of.jsxs)(YE,{children:[(0,of.jsx)(xy,{isMusicEnabled:r,volume:o,onToggleMusic:k,onVolumeChange:S}),(0,of.jsx)(NE,{onClick:()=>g(!m),style:{marginLeft:"10px"},children:"\ud83d\udd0a Soundboard"}),(0,of.jsx)(NE,{onClick:()=>b(!y),style:{marginLeft:"10px"},children:"\u0627\u0644\u0645\u0633\u0627\u0639\u062f \u0627\u0644\u0631\u0648\u0628\u0648\u062a\u064a \ud83e\udd16"}),(0,of.jsx)(zy,{})]})}),(0,of.jsx)(HE,{children:(0,of.jsx)(XE,{className:"game-title",children:"Frosty Trivia \u2603\ufe0f"})}),(0,of.jsx)(WE,{children:(0,of.jsx)(QE,{onClick:()=>h(!f),children:f?"\u2744\ufe0f":"\u2600\ufe0f"})})]}),(0,of.jsxs)(FE,{children:[(0,of.jsx)(BE,{children:(0,of.jsx)(Pp,{mode:"wait",children:(0,of.jsx)(wp.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},style:{width:"100%"},children:E},e)})}),(0,of.jsxs)(UE,{children:[(0,of.jsx)(Qf,{team:n[0],teamIndex:0,isActive:0===i,isShocked:0===d}),(0,of.jsx)(Qf,{team:n[1],teamIndex:1,isActive:1===i,isShocked:1===d}),"playing"===e&&(0,of.jsx)(GE,{children:(0,of.jsx)(KE,{onClick:()=>a(fn("end")),children:"\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0644\u0639\u0628\u0629"})})]})]}),(0,of.jsx)(WS,{}),"setup"===e&&(0,of.jsx)(Hp,{speed:[.5,1.5],wind:[-.5,.5],radius:[.5,1.5],snowflakeCount:200}),m&&(0,of.jsxs)("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:1e3,width:"90%",maxWidth:"500px"},children:[(0,of.jsx)(iE,{}),(0,of.jsx)(NE,{onClick:()=>g(!1),style:{position:"absolute",top:"-15px",right:"-15px",borderRadius:"50%",width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",padding:0},children:"\u2715"})]}),(0,of.jsx)(LE,{isVisible:y,toggleVisibility:()=>b(!y)})]})},ZE=Ti(wp.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`,eC=Ti(wp.div)`
  background: linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%);
  max-width: 600px;
  width: 90%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  margin: auto;
`,tC=Ti.div`
  background: linear-gradient(135deg, #0693e3 0%, #004c8c 100%);
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nC=Ti.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1100;
`,rC=Ti.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,oC=Ti.div`
  font-size: 1.1rem;
  line-height: 1.6;
  direction: rtl;
  text-align: right;
  color: #333;
  background-color: rgba(6, 147, 227, 0.05);
  padding: 15px;
  border-radius: 10px;
  border-right: 4px solid #0693e3;
`,iC=Ti.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  background-color: rgba(0, 0, 0, 0.02);
  padding: 15px;
  border-radius: 10px;
  border-left: 4px solid #ccc;
`,aC=Ti(wp.button)`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  z-index: 10;
  
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`,sC=Ti.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`,lC=Ti(wp.button)`
  background: linear-gradient(135deg, #0693e3 0%, #004c8c 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`,cC=()=>{const[e,n]=(0,t.useState)(!0),r=()=>{n(!1)};return(0,of.jsx)(Pp,{children:e&&(0,of.jsxs)(ZE,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,of.jsx)(nC,{children:(0,of.jsx)(zy,{})}),(0,of.jsxs)(eC,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{type:"spring",damping:25},children:[(0,of.jsxs)(tC,{children:["Frosty Trivia - Welcome Message",(0,of.jsx)(aC,{onClick:r,whileHover:{scale:1.1},whileTap:{scale:.9},children:"\u2715"})]}),(0,of.jsxs)(rC,{children:[(0,of.jsxs)(oC,{children:["\u0647\u0630\u064a \u0644\u0639\u0628\u0629 \u0635\u0646\u0627\u0639\u0629 \u0642\u0637\u0631\u064a\u0629\u060c \u0645\u0628\u0631\u0645\u062d\u0629 \u0645\u0646 \u0645\u0628\u0631\u0645\u062c\u064a\u0646 \u0642\u0637\u0631\u064a\u0646.",(0,of.jsx)("br",{}),"\u0647\u0630\u0647 \u0647\u064a \u0627\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u0623\u0644\u0641\u0627...",(0,of.jsx)("br",{}),"\u0627\u0644\u0627\u0633\u0626\u0644\u0629 \u0648\u0627\u0644\u0644\u0639\u0628\u0629 \u062a\u062d\u062a \u0627\u0644\u0635\u064a\u0627\u0646\u0629\u060c \u0641\u0631\u0627\u062d \u062a\u062d\u062a\u0627\u062c \u0623\u0646\u062a \u062a\u0633\u0648\u064a \u0627\u0644\u0623\u0633\u0626\u0644\u0629..",(0,of.jsx)("br",{}),"\u0645\u064a\u0632\u0629 \u0627\u0644\u0644\u0639\u0628\u0629 \u0625\u0646\u0643 \u062a\u0642\u062f\u0631 \u062a\u0633\u0648\u064a \u0627\u0633\u0626\u0644\u0629 \u062d\u0642 \u0627\u0644\u0634\u0628\u0627\u0628 \u0628\u0646\u0641\u0633\u0643",(0,of.jsx)("br",{}),"\u0639\u0634\u0627\u0646 \u0645\u0627 \u062a\u0643\u0648\u0646 \u0641\u064a \u0627\u0633\u0626\u0644\u0629 \u0633\u0647\u0644\u0629 \u0648\u0635\u0639\u0628\u0629 \u0639\u0644\u0649 \u0627\u0644\u0641\u0627\u0636\u064a",(0,of.jsx)("br",{}),"\u0627\u0644\u0644\u0639\u0628\u0629 \u0645\u062c\u0627\u0646\u064a\u0629 \u062d\u0627\u0644\u064a\u0627\u064e"]}),(0,of.jsxs)(iC,{children:["This is a Qatari-made game, programmed by Qatari programmers.",(0,of.jsx)("br",{}),"This is the alpha version...",(0,of.jsx)("br",{}),"The questions and the game are under maintenance, so you'll need to create the questions yourself.",(0,of.jsx)("br",{}),"The advantage of the game is that you can create questions for the players yourself,",(0,of.jsx)("br",{}),"so there won't be unnecessarily easy or difficult questions.",(0,of.jsx)("br",{}),"The game is currently free."]}),(0,of.jsx)(sC,{children:(0,of.jsx)(lC,{onClick:r,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Got It"})})]})]})]})})},uC=Oi`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow-y: scroll;
    scrollbar-gutter: stable;
  }

  body {
    font-family: var(--font-family, 'Noto Sans Arabic', 'Roboto', sans-serif);
    background-color: var(--background-color, #edf2f7);
    color: var(--text-color, #2d3748);
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  button {
    font-family: var(--font-family, 'Noto Sans Arabic', 'Roboto', sans-serif);
  }
  
  input {
    font-family: var(--font-family, 'Noto Sans Arabic', 'Roboto', sans-serif);
  }

  /* Card styles */
  .card {
    background-color: var(--card-background, white);
    border-radius: var(--border-radius, 8px);
    box-shadow: var(--card-shadow, 0 4px 6px rgba(0, 0, 0, 0.1));
  }
  
  /* Button styles */
  .btn-primary {
    background-color: var(--primary-color, #3498db);
    color: var(--button-text-color, white);
  }

  /* Support for Arabic text */
  .arabic {
    font-family: var(--font-family, 'Noto Sans Arabic', 'Roboto', sans-serif);
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`,dC=Ti(wp.div)`
  position: fixed;
  top: 402px;
  left: 487px;
  width: 898px;
  height: 148px;
  z-index: 1001;
  background-color: #34495e;
  color: white;
  padding: 15px 25px;
  border-radius: 12px;
  border: 2px solid #2ecc71;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: none;
  
  /* Ensure dimensions are strictly enforced */
  min-width: 898px;
  max-width: 898px;
  min-height: 148px;
  max-height: 148px;
`,pC=Ti.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: -8px;
`,fC=Ti.div`
  font-size: 54px;
  font-weight: bold;
  color: ${e=>e.$timeRunningOut?"#ff5252":"#2ecc71"};
  line-height: 1;
  margin-bottom: 15px;
`,hC=Ti.div`
  width: 80%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  margin-top: 0px;
  overflow: hidden;
`,mC=Ti.div`
  height: 100%;
  width: ${e=>e.$percent}%;
  background-color: ${e=>e.$timeRunningOut?"#ff5252":"#2ecc71"};
  border-radius: 5px;
  transition: width 1s linear;
`,gC=e=>{let{duration:n=25,onTimeUp:r}=e;const[o,i]=(0,t.useState)(n),[a,s]=(0,t.useState)(!0);(0,t.useEffect)((()=>{if(o>0){const e=setTimeout((()=>{i(o-1)}),1e3);return()=>clearTimeout(e)}r&&r(),setTimeout((()=>{s(!1)}),2e3)}),[o,r]);const l=o/n*100,c=o<=5;return(0,of.jsx)(Pp,{children:a&&(0,of.jsxs)(dC,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.4},children:[(0,of.jsx)(pC,{children:"\ud83d\udd0d Google Search Time"}),(0,of.jsxs)(fC,{$timeRunningOut:c,children:[o,"s"]}),(0,of.jsx)(hC,{children:(0,of.jsx)(mC,{$percent:l,$timeRunningOut:c})})]})})},yC=()=>{const[e,n]=(0,t.useState)(!1),[r,o]=(0,t.useState)("");(0,t.useEffect)((()=>{const e=e=>{const{isActive:t,teamName:r}=e.detail;n(t),o(r)};return window.addEventListener("google-search-timer",e),()=>{window.removeEventListener("google-search-timer",e)}}),[]);return e?(0,of.jsx)(gC,{onTimeUp:()=>{sf(`\u23f1\ufe0f ${r}'s Google search time is over!`),n(!1)}}):null},vC=Ei`
  --primary-color: #3a86ff;
  --primary-light: #83b7ff;
  --primary-dark: #0057e7;
  --secondary-color: #8338ec;
  --background-color: #f8fafc;
  --card-background: rgba(255, 255, 255, 0.95);
  --text-color: #1e293b;
  --border-color: rgba(58, 134, 255, 0.2);
  --header-font: 'Inter', 'Poppins', sans-serif;
  --body-font: 'Inter', 'Roboto', sans-serif;
  --card-shadow: 0 10px 25px -5px rgba(58, 134, 255, 0.1);
  --button-gradient: linear-gradient(135deg, #3a86ff, #0057e7);
  --background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233a86ff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  --border-radius: 8px;
  --success-color: #22c55e;
  --danger-color: #ef4444;
`,bC=Ei`
  --primary-color: #00bbf9;
  --primary-light: #72efdd;
  --primary-dark: #0096c7;
  --secondary-color: #ff9f1c;
  --background-color: #fdfffc;
  --card-background: rgba(255, 255, 255, 0.9);
  --text-color: #2b2d42;
  --border-color: rgba(0, 187, 249, 0.2);
  --header-font: 'Quicksand', 'Poppins', sans-serif;
  --body-font: 'Quicksand', 'Roboto', sans-serif;
  --card-shadow: 0 8px 20px rgba(0, 187, 249, 0.15);
  --button-gradient: linear-gradient(135deg, #00bbf9, #72efdd);
  --background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bbf9' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  --background-size: 250px;
  --primary-gradient: linear-gradient(135deg, #00bbf9, #72efdd);
  --secondary-gradient: linear-gradient(135deg, #ff9f1c, #ffbf69);
  --card-text-color: #2b2d42;
  --card-border: 2px solid rgba(0, 187, 249, 0.1);
  --border-radius: 16px;
  --button-background: #00bbf9;
  --button-text-color: white;
  --button-border: none;
  --button-shadow: 0 4px 10px rgba(0, 187, 249, 0.3);
  --animation-speed: 0.3s;
  --box-shadow: 0 6px 20px rgba(0, 187, 249, 0.2);
  --letter-spacing: 0.5px;
  --text-shadow: none;
  --hover-effect: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent);
  --hover-content: '';
  --title-animation: bounce 3s infinite ease-in-out;
  --hover-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --heading-hover-color: #00bbf9;
  --heading-underline: linear-gradient(90deg, #00bbf9, #72efdd);
  --success-color: #06d6a0;
  --danger-color: #ef476f;
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`,xC=Ei`
  --background-color: #13151a;
  --text-color: #ff9e58;
  --primary-color: #ff6d00;
  --secondary-color: #7e00fc;
  --accent-color: #00ff66;
  --success-color: #38ef7d;
  --danger-color: #ff416c;
  --card-background: rgba(31, 31, 35, 0.85);
  --border-color: rgba(255, 109, 0, 0.5);
  --box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  --button-text-color: #ffffff;
  --primary-gradient: linear-gradient(135deg, #ff6d00 0%, #ff9e58 100%);
  --secondary-gradient: linear-gradient(135deg, #7e00fc 0%, #9b51e0 100%);
  --card-border: 2px solid rgba(255, 109, 0, 0.18);
  --font-family: 'Eater', cursive;
  --background-image: url('/halloweenbg.webp');
  --background-size: cover;
  --background-position: center;
  --background-repeat: no-repeat;
  --background-attachment: fixed;
  --background-blend-mode: multiply;
  --enable-bat-snowfall: true;
`,wC=Ei`
  --primary-color: #ff0044;
  --primary-light: #ff6b6b;
  --primary-dark: #c80035;
  --secondary-color: #ffd166;
  --background-color: #0d2b45;
  --card-background: #203c56;
  --text-color:rgb(253, 253, 253);
  --border-color: #ff0044;
  --header-font: 'Press Start 2P', cursive;
  --body-font: 'Press Start 2P', cursive;
  --card-shadow: 0 4px 0 #000;
  --button-gradient: none;
  --background-image: url('/retrobg.webp');
  --background-size: cover;
  --background-position: center;
  --primary-gradient: none;
  --secondary-gradient: none;
  --card-text-color: #eef7ff;
  --card-border: 4px solid #ff0044;
  --border-radius: 0;
  --button-background: #ffd166;
  --button-text-color:rgb(254, 255, 255);
  --button-border: 4px solid #ffd166;
  --button-shadow: 0 4px 0 #c79a31;
  --pixel-effect: pixelated;
  --animation-speed: 0.1s;
  --box-shadow: 0 4px 0 #000;
  --letter-spacing: 1px;
  --text-shadow: 2px 2px 0 #000;
  --hover-effect: none;
  --hover-content: '';
  --title-animation: blink 1s steps(2) infinite;
  --hover-transition: all 0.1s steps(2);
  --heading-hover-color: #ffd166;
  --heading-underline: #ffd166;
  --font-weight: normal;
  --success-color: #06d6a0;
  --danger-color: #ff0044;
  --team-name-color: #ffffff;
 
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`,kC=Ei`
--team-name-color: #ffffff;
  --primary-color: var(--clr-primary-a0, #6a59f4);
  --primary-light: var(--clr-primary-a20, #927cf8);
  --primary-dark: var(--clr-primary-a0, #6a59f4);
  --secondary-color: var(--clr-primary-a30, #a48ef9);
  --background-color: var(--clr-surface-a0, #121212);
  --card-background: var(--clr-surface-a10, #282828);
  --text-color: var(--clr-light-a0, #ffffff);
  --border-color: var(--clr-surface-a20, #3f3f3f);
  --header-font: 'Inter', 'Poppins', sans-serif;
  --body-font: 'Inter', 'Roboto', sans-serif;
  --card-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  --button-gradient: linear-gradient(135deg, var(--clr-primary-a0, #6a59f4), var(--clr-primary-a20, #927cf8));
  --background-image: none;
  --border-radius: 8px;
  --success-color: #22c55e;
  --danger-color: #ef4444;
  --primary-gradient: linear-gradient(135deg, var(--clr-primary-a0, #6a59f4), var(--clr-primary-a20, #927cf8));
  --secondary-gradient: linear-gradient(135deg, var(--clr-primary-a30, #a48ef9), var(--clr-primary-a40, #b5a0fb));
  --card-text-color: var(--clr-light-a0, #ffffff);
  --card-border: 1px solid var(--clr-surface-a20, #3f3f3f);
  --button-background: var(--clr-primary-a0, #6a59f4);
  --button-text-color: var(--clr-light-a0, #ffffff);
  --button-border: none;
  --button-shadow: 0 4px 10px rgba(106, 89, 244, 0.3);
  --animation-speed: 0.3s;
  --box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  --letter-spacing: 0.5px;
  --text-shadow: none;
  --hover-effect: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent);
  --hover-content: '';
  --title-animation: none;
  --hover-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --heading-hover-color: var(--clr-primary-a20, #927cf8);
  --heading-underline: linear-gradient(90deg, var(--clr-primary-a0, #6a59f4), var(--clr-primary-a20, #927cf8));
`,SC=Ei`
  .snowflakes {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1000;
    overflow: hidden;
  }

  .snowflake {
    color: #fff;
    font-size: 1em;
    font-family: Serif;
    text-shadow: 0 0 1px #000;
    position: fixed;
    top: -10%;
    z-index: 9999;
    user-select: none;
    cursor: default;
    animation-name: snowflakes-fall, snowflakes-shake;
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running;
  }

  .snowflake img {
    height: 40px;
    display: block;
  }

  .snowflake:nth-of-type(0) {
    left: 1%;
    animation-delay: 0s, 0s;
  }
  .snowflake:nth-of-type(1) {
    left: 10%;
    animation-delay: 1s, 1s;
  }
  .snowflake:nth-of-type(2) {
    left: 20%;
    animation-delay: 6s, 0.5s;
  }
  .snowflake:nth-of-type(3) {
    left: 30%;
    animation-delay: 4s, 2s;
  }
  .snowflake:nth-of-type(4) {
    left: 40%;
    animation-delay: 2s, 2s;
  }
  .snowflake:nth-of-type(5) {
    left: 50%;
    animation-delay: 8s, 3s;
  }
  .snowflake:nth-of-type(6) {
    left: 60%;
    animation-delay: 6s, 2s;
  }
  .snowflake:nth-of-type(7) {
    left: 70%;
    animation-delay: 2s, 1s;
  }
  .snowflake:nth-of-type(8) {
    left: 80%;
    animation-delay: 1s, 0s;
  }
  .snowflake:nth-of-type(9) {
    left: 90%;
    animation-delay: 3s, 1s;
  }

  @keyframes snowflakes-fall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @keyframes snowflakes-shake {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(80px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`,EC=Ti.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  background: var(--background-image);
  background-size: var(--background-size, cover);
  background-position: var(--background-position, center);
  background-repeat: var(--background-repeat, no-repeat);
  background-attachment: var(--background-attachment, fixed);
  background-blend-mode: var(--background-blend-mode, normal);
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    z-index: -1;
  }
`,CC=Oi`
  :root {
    ${e=>e.themeStyles}
  }
  
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    overflow-x: hidden;
    background: var(--background-image);
    background-size: var(--background-size, cover);
    color: var(--text-color);
    font-family: var(--font-family, var(--body-font));
    font-weight: var(--font-weight, normal);
    transition: background 0.5s ease, color 0.3s ease;
    letter-spacing: var(--letter-spacing, normal);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font-family, var(--header-font));
    font-weight: var(--font-weight, bold);
    color: var(--text-color);
    text-shadow: var(--text-shadow, none);
    transition: color 0.3s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0;
      height: 2px;
      background: var(--heading-underline, transparent);
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: var(--heading-hover-color, var(--text-color));
      
      &::after {
        width: 100%;
      }
    }
  }
  
  h1 {
    font-family: var(--title-font-family, var(--heading-font-family));
  }
  
  .accent-text {
    font-family: var(--accent-font-family, var(--heading-font-family));
  }
  
  button {
    font-family: var(--font-family, var(--body-font));
    font-weight: var(--font-weight, normal);
    background-color: var(--button-background, var(--primary-color));
    color: var(--button-text-color, white);
    border: var(--button-border, none);
    box-shadow: var(--button-shadow, var(--card-shadow));
    transition: all var(--animation-speed, 0.3s) ease;
    position: relative;
    overflow: hidden;
    
    &:hover::after {
      content: var(--hover-content, '');
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--hover-effect, none);
      opacity: 0.1;
      pointer-events: none;
    }
  }
  
  /* Game title specific styling */
  .game-title {
    font-family: var(--title-font-family, var(--heading-font-family));
    letter-spacing: var(--letter-spacing, normal);
    text-shadow: var(--text-shadow, none);
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      50% { transform: translateX(5px); }
      75% { transform: translateX(-5px); }
      100% { transform: translateX(0); }
    }
    
    animation: var(--title-animation, none);
  }
  
  /* Additional theme-specific styles */
  .theme-card {
    background-color: var(--card-background);
    border: var(--card-border, 2px solid var(--border-color));
    box-shadow: var(--card-shadow);
    border-radius: var(--border-radius, 8px);
  }
  
  .theme-button {
    background: var(--primary-gradient, var(--button-gradient));
    color: var(--button-text-color, white);
    border: var(--button-border, none);
    box-shadow: var(--button-shadow, var(--card-shadow));
    border-radius: var(--border-radius, 30px);
  }
  
  /* Style for modal content */
  .modal-content {
    background-color: var(--card-background);
    color: var(--text-color);
    border: var(--card-border, 2px solid var(--border-color));
    box-shadow: var(--card-shadow);
    border-radius: var(--border-radius, 8px);
  }
  
  /* Style for inputs */
  input, textarea, select {
    background-color: var(--card-background);
    color: var(--text-color);
    font-weight: var(--font-weight, normal);
    border: var(--card-border, 1px solid var(--border-color));
    border-radius: var(--border-radius, 4px);
    font-family: var(--font-family, var(--body-font));
  }
  
  /* Add more theme overrides as needed */
  .btn-primary {
    background-color: var(--primary-color);
    color: var(--button-text-color);
  }
  
  .btn-secondary {
    background-color: var(--secondary-color);
    color: var(--button-text-color);
  }
  
  .btn-danger {
    background-color: var(--danger-color);
    color: var(--button-text-color);
  }
  
  .btn-success {
    background-color: var(--success-color);
    color: var(--button-text-color);
  }
  
  /* Halloween drip animation */
  @keyframes drip {
    0% { transform: scaleY(0); transform-origin: top; }
    100% { transform: scaleY(1); transform-origin: top; }
  }

  .halloween-drip {
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      width: 2px;
      height: 15px;
      background: var(--primary-color);
      opacity: 0;
      transform-origin: top;
      transition: opacity 0.3s ease;
    }
    
    &:hover::before {
      opacity: 1;
      animation: drip 0.5s ease-in;
    }
  }
  
  /* Retro NES theme specific styles */
  .retro-container {
    padding: 8px;
    border: 4px solid #fff;
    border-radius: 0;
    position: relative;
  }
  
  .retro-button {
    margin: 0 6px;
  }
  
  /* Lalezar font */
  .lalezar-regular {
    font-family: "Lalezar", system-ui;
    font-weight: 400;
    font-style: normal;
  }
  
  /* Apply NES.css styling when retro theme is active */
  [data-theme="retro"] {
    .nes-btn {
      margin: 4px;
    }
    
    input, select, textarea {
      border-image-repeat: stretch;
      border-image-slice: 2;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
      border-image-width: 2;
      border-style: solid;
      padding: 6px 8px;
    }
    
    button:not(.nes-btn) {
      position: relative;
      display: inline-block;
      padding: 6px 8px;
      margin: 4px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      border-style: solid;
      border-width: 4px;
      border-image-slice: 2;
      border-image-width: 2;
      border-image-repeat: stretch;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="#92cc41" /></svg>');
      color: var(--text-color);
      background-color: var(--button-background);
      image-rendering: pixelated;
    }
    
    .nes-container {
      border-style: solid;
      border-width: 4px;
      border-color: #92cc41;
      border-image-slice: 2;
      border-image-width: 2;
      border-image-repeat: stretch;
      border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="#92cc41" /></svg>');
      padding: 1rem 1.5rem;
      margin: 8px 0;
    }
  }

  ${e=>{let{themeName:t}=e;return"fun"===t&&Ei`
    &:root {
      --background-image: url('/fun-bg.svg');
      --background-size: cover;
      --background-position: center;
    }
    
    .card {
      background: rgba(255, 255, 255, 0.85);
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.18);
      transition: transform 0.3s, box-shadow 0.3s;
    }
    
    .card:hover {
      transform: scale(1.02);
      box-shadow: 0 12px 32px rgba(31, 38, 135, 0.3);
    }
    
    button {
      background: linear-gradient(45deg, #5271ff, #ff5ebd);
      border-radius: 12px;
      color: white;
      font-weight: bold;
      border: none;
      transition: transform 0.2s, box-shadow 0.2s;
      animation: bounce 0.5s ease-in-out;
    }
    
    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      background: linear-gradient(45deg, #3f5bf0, #ff3aaf);
    }
    
    /* Answered question tiles styling */
    .question-card[data-answered="true"] {
      background: #000000 !important;
      color: rgba(255, 255, 255, 0.7) !important;
      border: 2px solid rgba(255, 255, 255, 0.1) !important;
    }

    /* Used abilities styling */
    .ability-button[disabled] {
      background: #f44336 !important;
      color: white !important;
      opacity: 0.9 !important;
      border: 1px solid rgba(255, 255, 255, 0.2) !important;
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
  `}}

  ${e=>{let{themeName:t}=e;return"halloween"===t&&Ei`
    /* Team name styles */
    .team-name {
      color: var(--team-name-color, #ffffff) !important;
      font-size: var(--team-name-font-size, 2.1rem) !important;
      font-weight: var(--team-name-font-weight, 900) !important;
      text-shadow: var(--team-name-text-shadow, 2px 2px 4px rgba(0, 0, 0, 0.7)) !important;
    }

    /* Category styles */
    .category-name, .category-header {
      font-size: var(--category-font-size, 2.1rem) !important;
      text-shadow: var(--category-text-shadow, 2px 2px 3px rgba(0, 0, 0, 0.8)) !important;
      font-weight: bold !important;
      color: var(--text-color, #ff9e58) !important;
    }

    /* Abilities button styles */
    .ability-button {
      background: var(--ability-button-background, linear-gradient(135deg, #7e00fc 0%, #aa53ff 100%)) !important;
      border: var(--ability-button-border, 2px solid #aa53ff) !important;
      box-shadow: var(--ability-button-shadow, 0 4px 0 #4b0094, 0 6px 10px rgba(0, 0, 0, 0.5)) !important;
      color: var(--ability-button-color, #ffffff) !important;
      transform: none !important;
    }

    .ability-button:hover {
      transform: translateY(-2px) !important;
    }

    /* Used abilities styling */
    .ability-button[disabled] {
      background: #f44336 !important;
      color: white !important;
      opacity: 0.9 !important;
      border: 2px solid rgba(255, 255, 255, 0.2) !important;
      box-shadow: 0 4px 0 #8b0000, 0 6px 10px rgba(0, 0, 0, 0.5) !important;
    }

    /* Question tile styles */
    .question-card {
      background: var(--question-tile-background, linear-gradient(135deg, #2c1b30 0%, #451c47 100%)) !important;
      border: var(--question-tile-border, 2px solid #ff6d00) !important;
      box-shadow: var(--question-tile-shadow, 0 4px 0 #000000, 0 6px 10px rgba(255, 109, 0, 0.3)) !important;
      color: var(--question-tile-color, #ff9e58) !important;
      font-size: var(--question-tile-font-size, 1.9rem) !important;
    }

    .question-card:hover {
      background: var(--question-tile-hover-background, linear-gradient(135deg, #451c47 0%, #2c1b30 100%)) !important;
      transform: translateY(-5px) !important;
    }

    /* Answered question tiles styling */
    .question-card[data-answered="true"] {
      background: #000000 !important;
      color: rgba(255, 255, 255, 0.5) !important;
      border: 2px solid rgba(255, 109, 0, 0.3) !important;
      box-shadow: 0 2px 0 #000000, 0 3px 5px rgba(0, 0, 0, 0.3) !important;
    }
    
    ${SC}
  `}}
  
  ${e=>{let{themeName:t}=e;return"retro"===t&&Ei`
    /* Font settings */
    body, button, input, select, textarea {
      font-family: "Lalezar", system-ui;
      font-weight: 400;
      letter-spacing: 1px;
    }
    
    /* Game title */
    .game-title {
      font-family: "Lalezar", system-ui;
      font-size: 3rem;
      color: #f8d800;
      text-shadow: 4px 4px 0 #ff004d;
      animation: pulse 2s infinite;
    }
    
    /* Team name styles */
    .team-name {
      color: #29adff !important;
      font-size: 2.1rem !important;
      font-weight: 400 !important;
      text-shadow: 3px 3px 0 #ff004d !important;
      font-family: "Lalezar", system-ui !important;
    }

    /* Category styles */
    .category-name, .category-header {
      font-size: 2.1rem !important;
      text-shadow: 2px 2px 0 #ff004d !important;
      font-weight: 400 !important;
      color: #f8d800 !important;
      font-family: "Lalezar", system-ui !important;
    }
    
    /* Question tile styles */
    .question-card {
      background: #1d2b53 !important;
      border: 4px solid #ff004d !important;
      box-shadow: 4px 4px 0 #000000 !important;
      color: #f8d800 !important;
      font-size: 1.9rem !important;
      font-family: "Lalezar", system-ui !important;
      image-rendering: pixelated;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .question-card:hover {
      transform: translateY(-5px) !important;
      box-shadow: 6px 6px 0 #000000 !important;
    }

    /* Answered question tiles styling */
    .question-card[data-answered="true"] {
      background: #000000 !important;
      color: rgba(255, 255, 255, 0.7) !important;
      border-color: #666666 !important;
      image-rendering: pixelated;
      box-shadow: 2px 2px 0 #333333 !important;
    }
    
    /* Abilities button styles */
    .ability-button {
      background: #7e2553 !important;
      border: 4px solid #ff77a8 !important;
      box-shadow: 4px 4px 0 #000000 !important;
      color: #ffffff !important;
      font-family: "Lalezar", system-ui !important;
      font-size: 1.2rem !important;
      image-rendering: pixelated;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .ability-button:hover {
      transform: translateY(-3px) !important;
      box-shadow: 6px 6px 0 #000000 !important;
    }

    /* Used abilities styling */
    .ability-button[disabled] {
      background: #83769c !important;
      color: #ffffff !important;
      border: 4px solid #5f574e !important;
      box-shadow: 2px 2px 0 #000000 !important;
      opacity: 0.8 !important;
      image-rendering: pixelated;
    }
    
    /* Modal content */
    .modal-content {
      background: #1d2b53 !important;
      border: 4px solid #ff004d !important;
      box-shadow: 8px 8px 0 #000000 !important;
      color: #fff1e8 !important;
      font-family: "Lalezar", system-ui !important;
    }
    
    /* Buttons */
    button {
      background: #00e436 !important;
      color: #fff !important;
      border: 4px solid #008751 !important;
      box-shadow: 4px 4px 0 #000000 !important;
      font-family: "Lalezar", system-ui !important;
      font-size: 1.2rem !important;
      padding: 8px 16px !important;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    button:hover {
      transform: translateY(-3px) !important;
      box-shadow: 6px 6px 0 #000000 !important;
    }
    
    /* Inputs */
    input, select, textarea {
      background: #c2c3c7 !important;
      color: #000000 !important;
      border: 4px solid #5f574e !important;
      box-shadow: 4px 4px 0 #000000 !important;
      font-family: "Lalezar", system-ui !important;
      padding: 8px !important;
    }
    
    /* Card styling */
    .theme-card, .card {
      background: #1d2b53 !important;
      border: 4px solid #ff004d !important;
      box-shadow: 6px 6px 0 #000000 !important;
      color: #fff1e8 !important;
      padding: 16px !important;
    }
    
    /* Animation for game elements */
    @keyframes pixel-pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    /* Pixelated background effect */
    body, .container {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVQYlWNgYGD4z4AGGBkZSVIAAM9TA99mU+9GAAAAAElFTkSuQmCC') !important;
      background-repeat: repeat !important;
      background-size: 8px 8px !important;
      background-color: #1d2b53 !important;
    }
    
    /* Special effects for retro theme */
    .retro-effect {
      position: relative;
      overflow: hidden;
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: rgba(255, 255, 255, 0.3);
        animation: scan-line 4s linear infinite;
      }
    }
    
    @keyframes scan-line {
      0% { top: -10%; }
      100% { top: 100%; }
    }
    
    /* Pixelated icons */
    .retro-icon {
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
    }
    
    /* Floating pixel effect */
    ${SC}
    
    .snowflake img {
      image-rendering: pixelated;
      height: 16px;
    }
  `}}
`,jC=e=>{let{children:n}=e;const{currentTheme:r}=jy(),o=(e=>{switch(e){case"halloween":return xC;case"fun":return bC;case"retro":return wC;case"dark":return kC;default:return vC}})(r),[i,a]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e=("halloween"===r||"retro"===r)&&"true"===getComputedStyle(document.documentElement).getPropertyValue("--enable-snowflakes").trim();a(e)}),[r]),(0,of.jsxs)(of.Fragment,{children:[(0,of.jsx)(CC,{themeStyles:o,themeName:r}),(0,of.jsxs)(EC,{children:[i&&("halloween"===r||"retro"===r)&&(0,of.jsxs)("div",{className:"snowflakes",children:[(0,of.jsx)("div",{className:"snowflake",children:(0,of.jsx)("img",{src:"retro"===r?"/pixel-star.png":"https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif"})}),(0,of.jsx)("div",{className:"snowflake",children:(0,of.jsx)("img",{src:"https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif"})}),(0,of.jsx)("div",{className:"snowflake",children:(0,of.jsx)("img",{src:"https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif"})}),(0,of.jsx)("div",{className:"snowflake",children:(0,of.jsx)("img",{src:"https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif"})}),(0,of.jsx)("div",{className:"snowflake",children:(0,of.jsx)("img",{src:"https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif"})}),(0,of.jsx)("div",{className:"snowflake",children:(0,of.jsx)("img",{src:"https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif"})}),(0,of.jsx)("div",{className:"snowflake",children:(0,of.jsx)("img",{src:"https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif"})}),(0,of.jsx)("div",{className:"snowflake",children:(0,of.jsx)("img",{src:"https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif"})}),(0,of.jsx)("div",{className:"snowflake",children:(0,of.jsx)("img",{src:"https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif"})}),(0,of.jsx)("div",{className:"snowflake",children:(0,of.jsx)("img",{src:"https://media1.giphy.com/media/0xR7MUO0hJfWtco7C6/giphy.gif"})})]}),n]})]})},TC=()=>((0,t.useEffect)((()=>{var e;ny.default.initialize("G-JYL04258QT"),e=window.location.pathname,ny.default.send({hitType:"pageview",page:e})}),[]),(0,of.jsx)(S,{store:Ln,children:(0,of.jsx)(z,{loading:null,persistor:Dn,children:(0,of.jsx)(Ty,{children:(0,of.jsxs)(jC,{children:[(0,of.jsx)(uC,{}),(0,of.jsx)(JE,{}),(0,of.jsx)(lf,{}),(0,of.jsx)(yC,{}),(0,of.jsx)(cC,{})]})})})})),PC=e=>{e&&"function"===typeof e&&n.e(488).then(n.bind(n,488)).then((t=>{let{onCLS:n,onFID:r,onFCP:o,onLCP:i,onTTFB:a}=t;n(e),r(e),o(e),i(e),a(e)}))};r.createRoot(document.getElementById("root")).render((0,of.jsx)(t.StrictMode,{children:(0,of.jsx)(TC,{})})),PC()})()})();
//# sourceMappingURL=main.d0d18807.js.map