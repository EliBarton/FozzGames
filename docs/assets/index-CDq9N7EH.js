var kI=Object.defineProperty;var NI=(t,e,n)=>e in t?kI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Sa=(t,e,n)=>NI(t,typeof e!="symbol"?e+"":e,n);function xI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Rv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cv={exports:{}},uu={},Pv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),DI=Symbol.for("react.portal"),OI=Symbol.for("react.fragment"),VI=Symbol.for("react.strict_mode"),LI=Symbol.for("react.profiler"),bI=Symbol.for("react.provider"),MI=Symbol.for("react.context"),FI=Symbol.for("react.forward_ref"),UI=Symbol.for("react.suspense"),jI=Symbol.for("react.memo"),zI=Symbol.for("react.lazy"),Em=Symbol.iterator;function BI(t){return t===null||typeof t!="object"?null:(t=Em&&t[Em]||t["@@iterator"],typeof t=="function"?t:null)}var kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nv=Object.assign,xv={};function is(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||kv}is.prototype.isReactComponent={};is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dv(){}Dv.prototype=is.prototype;function Pd(t,e,n){this.props=t,this.context=e,this.refs=xv,this.updater=n||kv}var kd=Pd.prototype=new Dv;kd.constructor=Pd;Nv(kd,is.prototype);kd.isPureReactComponent=!0;var Tm=Array.isArray,Ov=Object.prototype.hasOwnProperty,Nd={current:null},Vv={key:!0,ref:!0,__self:!0,__source:!0};function Lv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ov.call(e,r)&&!Vv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:$o,type:t,key:s,ref:o,props:i,_owner:Nd.current}}function $I(t,e){return{$$typeof:$o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===$o}function WI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Im=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?WI(""+t.key):e.toString(36)}function Ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $o:case DI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+yc(o,0):r,Tm(i)?(n="",t!=null&&(n=t.replace(Im,"$&/")+"/"),Ga(i,e,n,"",function(c){return c})):i!=null&&(xd(i)&&(i=$I(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Im,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Tm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+yc(s,l);o+=Ga(s,e,n,u,i)}else if(u=BI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+yc(s,l++),o+=Ga(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var r=[],i=0;return Ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function HI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Qa={transition:null},qI={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:Nd};function bv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=is;ee.Fragment=OI;ee.Profiler=LI;ee.PureComponent=Pd;ee.StrictMode=VI;ee.Suspense=UI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qI;ee.act=bv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Nv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ov.call(e,u)&&!Vv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:$o,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:MI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bI,_context:t},t.Consumer=t};ee.createElement=Lv;ee.createFactory=function(t){var e=Lv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:FI,render:t}};ee.isValidElement=xd;ee.lazy=function(t){return{$$typeof:zI,_payload:{_status:-1,_result:t},_init:HI}};ee.memo=function(t,e){return{$$typeof:jI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Qa.transition;Qa.transition={};try{t()}finally{Qa.transition=e}};ee.unstable_act=bv;ee.useCallback=function(t,e){return ot.current.useCallback(t,e)};ee.useContext=function(t){return ot.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ot.current.useEffect(t,e)};ee.useId=function(){return ot.current.useId()};ee.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ot.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};ee.useRef=function(t){return ot.current.useRef(t)};ee.useState=function(t){return ot.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ot.current.useTransition()};ee.version="18.3.1";Pv.exports=ee;var z=Pv.exports;const Jn=Rv(z),KI=xI({__proto__:null,default:Jn},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GI=z,QI=Symbol.for("react.element"),YI=Symbol.for("react.fragment"),XI=Object.prototype.hasOwnProperty,JI=GI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZI={key:!0,ref:!0,__self:!0,__source:!0};function Mv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XI.call(e,r)&&!ZI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:QI,type:t,key:s,ref:o,props:i,_owner:JI.current}}uu.Fragment=YI;uu.jsx=Mv;uu.jsxs=Mv;Cv.exports=uu;var x=Cv.exports,ih={},Fv={exports:{}},Et={},Uv={exports:{}},jv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var J=B.length;B.push(Q);e:for(;0<J;){var ge=J-1>>>1,le=B[ge];if(0<i(le,Q))B[ge]=Q,B[J]=le,J=ge;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],J=B.pop();if(J!==Q){B[0]=J;e:for(var ge=0,le=B.length,Se=le>>>1;ge<Se;){var cn=2*(ge+1)-1,hn=B[cn],dn=cn+1,fn=B[dn];if(0>i(hn,J))dn<le&&0>i(fn,hn)?(B[ge]=fn,B[dn]=J,ge=dn):(B[ge]=hn,B[cn]=J,ge=cn);else if(dn<le&&0>i(fn,J))B[ge]=fn,B[dn]=J,ge=dn;else break e}}return Q}function i(B,Q){var J=B.sortIndex-Q.sortIndex;return J!==0?J:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,A=!1,C=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function D(B){if(N=!1,S(B),!C)if(n(u)!==null)C=!0,ms(F);else{var Q=n(c);Q!==null&&un(D,Q.startTime-B)}}function F(B,Q){C=!1,N&&(N=!1,w(y),y=-1),A=!0;var J=m;try{for(S(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||B&&!R());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,m=p.priorityLevel;var le=ge(p.expirationTime<=Q);Q=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),S(Q)}else r(u);p=n(u)}if(p!==null)var Se=!0;else{var cn=n(c);cn!==null&&un(D,cn.startTime-Q),Se=!1}return Se}finally{p=null,m=J,A=!1}}var U=!1,E=null,y=-1,_=5,T=-1;function R(){return!(t.unstable_now()-T<_)}function k(){if(E!==null){var B=t.unstable_now();T=B;var Q=!0;try{Q=E(!0,B)}finally{Q?I():(U=!1,E=null)}}else U=!1}var I;if(typeof v=="function")I=function(){v(k)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,Rr=It.port2;It.port1.onmessage=k,I=function(){Rr.postMessage(null)}}else I=function(){O(k,0)};function ms(B){E=B,U||(U=!0,I())}function un(B,Q){y=O(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){C||A||(C=!0,ms(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return B()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=m;m=B;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function(B,Q,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,B={id:f++,callback:Q,priorityLevel:B,startTime:J,expirationTime:le,sortIndex:-1},J>ge?(B.sortIndex=J,e(c,B),n(u)===null&&B===n(c)&&(N?(w(y),y=-1):N=!0,un(D,J-ge))):(B.sortIndex=le,e(u,B),C||A||(C=!0,ms(F))),B},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(B){var Q=m;return function(){var J=m;m=Q;try{return B.apply(this,arguments)}finally{m=J}}}})(jv);Uv.exports=jv;var eS=Uv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=z,wt=eS;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zv=new Set,co={};function ti(t,e){$i(t,e),$i(t+"Capture",e)}function $i(t,e){for(co[t]=e,t=0;t<e.length;t++)zv.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sh=Object.prototype.hasOwnProperty,nS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sm={},Am={};function rS(t){return sh.call(Am,t)?!0:sh.call(Sm,t)?!1:nS.test(t)?Am[t]=!0:(Sm[t]=!0,!1)}function iS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sS(t,e,n,r){if(e===null||typeof e>"u"||iS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function Od(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dd,Od);Be[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dd,Od);Be[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dd,Od);Be[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vd(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sS(e,n,i,r)&&(n=null),r||i===null?rS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Ei=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),oh=Symbol.for("react.profiler"),Bv=Symbol.for("react.provider"),$v=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),ah=Symbol.for("react.suspense"),lh=Symbol.for("react.suspense_list"),Md=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),Wv=Symbol.for("react.offscreen"),Rm=Symbol.iterator;function ks(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,vc;function Ms(t){if(vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var _c=!1;function wc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ms(t):""}function oS(t){switch(t.tag){case 5:return Ms(t.type);case 16:return Ms("Lazy");case 13:return Ms("Suspense");case 19:return Ms("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function uh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ei:return"Fragment";case wi:return"Portal";case oh:return"Profiler";case Ld:return"StrictMode";case ah:return"Suspense";case lh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $v:return(t.displayName||"Context")+".Consumer";case Bv:return(t._context.displayName||"Context")+".Provider";case bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Md:return e=t.displayName||null,e!==null?e:uh(t.type)||"Memo";case Un:e=t._payload,t=t._init;try{return uh(t(e))}catch{}}return null}function aS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uh(e);case 8:return e===Ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lS(t){var e=Hv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=lS(t))}function qv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Hv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ch(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kv(t,e){e=e.checked,e!=null&&Vd(t,"checked",e,!1)}function hh(t,e){Kv(t,e);var n=dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dh(t,e.type,n):e.hasOwnProperty("defaultValue")&&dh(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dh(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fs=Array.isArray;function Oi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function km(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Fs(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function Gv(t,e){var n=dr(e.value),r=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Nm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ph(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pa,Yv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pa=Pa||document.createElement("div"),Pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uS=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){uS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function Xv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function Jv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cS=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mh(t,e){if(e){if(cS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function gh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yh=null;function Fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vh=null,Vi=null,Li=null;function xm(t){if(t=qo(t)){if(typeof vh!="function")throw Error(M(280));var e=t.stateNode;e&&(e=pu(e),vh(t.stateNode,t.type,e))}}function Zv(t){Vi?Li?Li.push(t):Li=[t]:Vi=t}function e_(){if(Vi){var t=Vi,e=Li;if(Li=Vi=null,xm(t),e)for(t=0;t<e.length;t++)xm(e[t])}}function t_(t,e){return t(e)}function n_(){}var Ec=!1;function r_(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return t_(t,e,n)}finally{Ec=!1,(Vi!==null||Li!==null)&&(n_(),e_())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var r=pu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var _h=!1;if(An)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){_h=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{_h=!1}function hS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Qs=!1,yl=null,vl=!1,wh=null,dS={onError:function(t){Qs=!0,yl=t}};function fS(t,e,n,r,i,s,o,l,u){Qs=!1,yl=null,hS.apply(dS,arguments)}function pS(t,e,n,r,i,s,o,l,u){if(fS.apply(this,arguments),Qs){if(Qs){var c=yl;Qs=!1,yl=null}else throw Error(M(198));vl||(vl=!0,wh=c)}}function ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function i_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dm(t){if(ni(t)!==t)throw Error(M(188))}function mS(t){var e=t.alternate;if(!e){if(e=ni(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dm(i),t;if(s===r)return Dm(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function s_(t){return t=mS(t),t!==null?o_(t):null}function o_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=o_(t);if(e!==null)return e;t=t.sibling}return null}var a_=wt.unstable_scheduleCallback,Om=wt.unstable_cancelCallback,gS=wt.unstable_shouldYield,yS=wt.unstable_requestPaint,Re=wt.unstable_now,vS=wt.unstable_getCurrentPriorityLevel,Ud=wt.unstable_ImmediatePriority,l_=wt.unstable_UserBlockingPriority,_l=wt.unstable_NormalPriority,_S=wt.unstable_LowPriority,u_=wt.unstable_IdlePriority,cu=null,en=null;function wS(t){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(cu,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:IS,ES=Math.log,TS=Math.LN2;function IS(t){return t>>>=0,t===0?32:31-(ES(t)/TS|0)|0}var ka=64,Na=4194304;function Us(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Us(l):(s&=o,s!==0&&(r=Us(s)))}else o=n&~i,o!==0?r=Us(o):s!==0&&(r=Us(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function SS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$t(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=SS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Eh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function c_(){var t=ka;return ka<<=1,!(ka&4194240)&&(ka=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function RS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function h_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var d_,zd,f_,p_,m_,Th=!1,xa=[],Zn=null,er=null,tr=null,po=new Map,mo=new Map,Bn=[],CS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vm(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function xs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qo(e),e!==null&&zd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function PS(t,e,n,r,i){switch(e){case"focusin":return Zn=xs(Zn,t,e,n,r,i),!0;case"dragenter":return er=xs(er,t,e,n,r,i),!0;case"mouseover":return tr=xs(tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return po.set(s,xs(po.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,mo.set(s,xs(mo.get(s)||null,t,e,n,r,i)),!0}return!1}function g_(t){var e=Vr(t.target);if(e!==null){var n=ni(e);if(n!==null){if(e=n.tag,e===13){if(e=i_(n),e!==null){t.blockedOn=e,m_(t.priority,function(){f_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yh=r,n.target.dispatchEvent(r),yh=null}else return e=qo(n),e!==null&&zd(e),t.blockedOn=n,!1;e.shift()}return!0}function Lm(t,e,n){Ya(t)&&n.delete(e)}function kS(){Th=!1,Zn!==null&&Ya(Zn)&&(Zn=null),er!==null&&Ya(er)&&(er=null),tr!==null&&Ya(tr)&&(tr=null),po.forEach(Lm),mo.forEach(Lm)}function Ds(t,e){t.blockedOn===e&&(t.blockedOn=null,Th||(Th=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,kS)))}function go(t){function e(i){return Ds(i,t)}if(0<xa.length){Ds(xa[0],t);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&Ds(Zn,t),er!==null&&Ds(er,t),tr!==null&&Ds(tr,t),po.forEach(e),mo.forEach(e),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)g_(n),n.blockedOn===null&&Bn.shift()}var bi=On.ReactCurrentBatchConfig,El=!0;function NS(t,e,n,r){var i=ae,s=bi.transition;bi.transition=null;try{ae=1,Bd(t,e,n,r)}finally{ae=i,bi.transition=s}}function xS(t,e,n,r){var i=ae,s=bi.transition;bi.transition=null;try{ae=4,Bd(t,e,n,r)}finally{ae=i,bi.transition=s}}function Bd(t,e,n,r){if(El){var i=Ih(t,e,n,r);if(i===null)Dc(t,e,r,Tl,n),Vm(t,r);else if(PS(i,t,e,n,r))r.stopPropagation();else if(Vm(t,r),e&4&&-1<CS.indexOf(t)){for(;i!==null;){var s=qo(i);if(s!==null&&d_(s),s=Ih(t,e,n,r),s===null&&Dc(t,e,r,Tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dc(t,e,r,null,n)}}var Tl=null;function Ih(t,e,n,r){if(Tl=null,t=Fd(r),t=Vr(t),t!==null)if(e=ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=i_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function y_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vS()){case Ud:return 1;case l_:return 4;case _l:case _S:return 16;case u_:return 536870912;default:return 16}default:return 16}}var Gn=null,$d=null,Xa=null;function v_(){if(Xa)return Xa;var t,e=$d,n=e.length,r,i="value"in Gn?Gn.value:Gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xa=i.slice(t,1<r?1-r:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function bm(){return!1}function Tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:bm,this.isPropagationStopped=bm,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=Tt(ss),Ho=_e({},ss,{view:0,detail:0}),DS=Tt(Ho),Ic,Sc,Os,hu=_e({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(Ic=t.screenX-Os.screenX,Sc=t.screenY-Os.screenY):Sc=Ic=0,Os=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),Mm=Tt(hu),OS=_e({},hu,{dataTransfer:0}),VS=Tt(OS),LS=_e({},Ho,{relatedTarget:0}),Ac=Tt(LS),bS=_e({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),MS=Tt(bS),FS=_e({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),US=Tt(FS),jS=_e({},ss,{data:0}),Fm=Tt(jS),zS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$S={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$S[t])?!!e[t]:!1}function Hd(){return WS}var HS=_e({},Ho,{key:function(t){if(t.key){var e=zS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qS=Tt(HS),KS=_e({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Um=Tt(KS),GS=_e({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),QS=Tt(GS),YS=_e({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),XS=Tt(YS),JS=_e({},hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZS=Tt(JS),eA=[9,13,27,32],qd=An&&"CompositionEvent"in window,Ys=null;An&&"documentMode"in document&&(Ys=document.documentMode);var tA=An&&"TextEvent"in window&&!Ys,__=An&&(!qd||Ys&&8<Ys&&11>=Ys),jm=" ",zm=!1;function w_(t,e){switch(t){case"keyup":return eA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ti=!1;function nA(t,e){switch(t){case"compositionend":return E_(e);case"keypress":return e.which!==32?null:(zm=!0,jm);case"textInput":return t=e.data,t===jm&&zm?null:t;default:return null}}function rA(t,e){if(Ti)return t==="compositionend"||!qd&&w_(t,e)?(t=v_(),Xa=$d=Gn=null,Ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return __&&e.locale!=="ko"?null:e.data;default:return null}}var iA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iA[t.type]:e==="textarea"}function T_(t,e,n,r){Zv(r),e=Il(e,"onChange"),0<e.length&&(n=new Wd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xs=null,yo=null;function sA(t){O_(t,0)}function du(t){var e=Ai(t);if(qv(e))return t}function oA(t,e){if(t==="change")return e}var I_=!1;if(An){var Rc;if(An){var Cc="oninput"in document;if(!Cc){var $m=document.createElement("div");$m.setAttribute("oninput","return;"),Cc=typeof $m.oninput=="function"}Rc=Cc}else Rc=!1;I_=Rc&&(!document.documentMode||9<document.documentMode)}function Wm(){Xs&&(Xs.detachEvent("onpropertychange",S_),yo=Xs=null)}function S_(t){if(t.propertyName==="value"&&du(yo)){var e=[];T_(e,yo,t,Fd(t)),r_(sA,e)}}function aA(t,e,n){t==="focusin"?(Wm(),Xs=e,yo=n,Xs.attachEvent("onpropertychange",S_)):t==="focusout"&&Wm()}function lA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return du(yo)}function uA(t,e){if(t==="click")return du(e)}function cA(t,e){if(t==="input"||t==="change")return du(e)}function hA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:hA;function vo(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sh.call(e,i)||!Ht(t[i],e[i]))return!1}return!0}function Hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qm(t,e){var n=Hm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hm(n)}}function A_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R_(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dA(t){var e=R_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A_(n.ownerDocument.documentElement,n)){if(r!==null&&Kd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qm(n,s);var o=qm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fA=An&&"documentMode"in document&&11>=document.documentMode,Ii=null,Sh=null,Js=null,Ah=!1;function Km(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ah||Ii==null||Ii!==gl(r)||(r=Ii,"selectionStart"in r&&Kd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Js&&vo(Js,r)||(Js=r,r=Il(Sh,"onSelect"),0<r.length&&(e=new Wd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ii)))}function Oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Si={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},Pc={},C_={};An&&(C_=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function fu(t){if(Pc[t])return Pc[t];if(!Si[t])return t;var e=Si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C_)return Pc[t]=e[n];return t}var P_=fu("animationend"),k_=fu("animationiteration"),N_=fu("animationstart"),x_=fu("transitionend"),D_=new Map,Gm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){D_.set(t,e),ti(e,[t])}for(var kc=0;kc<Gm.length;kc++){var Nc=Gm[kc],pA=Nc.toLowerCase(),mA=Nc[0].toUpperCase()+Nc.slice(1);wr(pA,"on"+mA)}wr(P_,"onAnimationEnd");wr(k_,"onAnimationIteration");wr(N_,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(x_,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gA=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function Qm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pS(r,e,void 0,t),t.currentTarget=null}function O_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Qm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Qm(i,l,c),s=u}}}if(vl)throw t=wh,vl=!1,wh=null,t}function de(t,e){var n=e[Nh];n===void 0&&(n=e[Nh]=new Set);var r=t+"__bubble";n.has(r)||(V_(e,t,2,!1),n.add(r))}function xc(t,e,n){var r=0;e&&(r|=4),V_(n,t,r,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Va]){t[Va]=!0,zv.forEach(function(n){n!=="selectionchange"&&(gA.has(n)||xc(n,!1,t),xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,xc("selectionchange",!1,e))}}function V_(t,e,n,r){switch(y_(e)){case 1:var i=NS;break;case 4:i=xS;break;default:i=Bd}n=i.bind(null,e,n,t),i=void 0,!_h||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}r_(function(){var c=s,f=Fd(n),p=[];e:{var m=D_.get(t);if(m!==void 0){var A=Wd,C=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":A=qS;break;case"focusin":C="focus",A=Ac;break;case"focusout":C="blur",A=Ac;break;case"beforeblur":case"afterblur":A=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=VS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=QS;break;case P_:case k_:case N_:A=MS;break;case x_:A=XS;break;case"scroll":A=DS;break;case"wheel":A=ZS;break;case"copy":case"cut":case"paste":A=US;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Um}var N=(e&4)!==0,O=!N&&t==="scroll",w=N?m!==null?m+"Capture":null:m;N=[];for(var v=c,S;v!==null;){S=v;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,w!==null&&(D=fo(v,w),D!=null&&N.push(wo(v,D,S)))),O)break;v=v.return}0<N.length&&(m=new A(m,C,null,n,f),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",m&&n!==yh&&(C=n.relatedTarget||n.fromElement)&&(Vr(C)||C[Rn]))break e;if((A||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,A?(C=n.relatedTarget||n.toElement,A=c,C=C?Vr(C):null,C!==null&&(O=ni(C),C!==O||C.tag!==5&&C.tag!==6)&&(C=null)):(A=null,C=c),A!==C)){if(N=Mm,D="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=Um,D="onPointerLeave",w="onPointerEnter",v="pointer"),O=A==null?m:Ai(A),S=C==null?m:Ai(C),m=new N(D,v+"leave",A,n,f),m.target=O,m.relatedTarget=S,D=null,Vr(f)===c&&(N=new N(w,v+"enter",C,n,f),N.target=S,N.relatedTarget=O,D=N),O=D,A&&C)t:{for(N=A,w=C,v=0,S=N;S;S=mi(S))v++;for(S=0,D=w;D;D=mi(D))S++;for(;0<v-S;)N=mi(N),v--;for(;0<S-v;)w=mi(w),S--;for(;v--;){if(N===w||w!==null&&N===w.alternate)break t;N=mi(N),w=mi(w)}N=null}else N=null;A!==null&&Ym(p,m,A,N,!1),C!==null&&O!==null&&Ym(p,O,C,N,!0)}}e:{if(m=c?Ai(c):window,A=m.nodeName&&m.nodeName.toLowerCase(),A==="select"||A==="input"&&m.type==="file")var F=oA;else if(Bm(m))if(I_)F=cA;else{F=lA;var U=aA}else(A=m.nodeName)&&A.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=uA);if(F&&(F=F(t,c))){T_(p,F,n,f);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&dh(m,"number",m.value)}switch(U=c?Ai(c):window,t){case"focusin":(Bm(U)||U.contentEditable==="true")&&(Ii=U,Sh=c,Js=null);break;case"focusout":Js=Sh=Ii=null;break;case"mousedown":Ah=!0;break;case"contextmenu":case"mouseup":case"dragend":Ah=!1,Km(p,n,f);break;case"selectionchange":if(fA)break;case"keydown":case"keyup":Km(p,n,f)}var E;if(qd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ti?w_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(__&&n.locale!=="ko"&&(Ti||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ti&&(E=v_()):(Gn=f,$d="value"in Gn?Gn.value:Gn.textContent,Ti=!0)),U=Il(c,y),0<U.length&&(y=new Fm(y,t,null,n,f),p.push({event:y,listeners:U}),E?y.data=E:(E=E_(n),E!==null&&(y.data=E)))),(E=tA?nA(t,n):rA(t,n))&&(c=Il(c,"onBeforeInput"),0<c.length&&(f=new Fm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=E))}O_(p,e)})}function wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fo(t,n),s!=null&&r.unshift(wo(t,s,i)),s=fo(t,e),s!=null&&r.push(wo(t,s,i))),t=t.return}return r}function mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ym(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=fo(n,s),u!=null&&o.unshift(wo(n,u,l))):i||(u=fo(n,s),u!=null&&o.push(wo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yA=/\r\n?/g,vA=/\u0000|\uFFFD/g;function Xm(t){return(typeof t=="string"?t:""+t).replace(yA,`
`).replace(vA,"")}function La(t,e,n){if(e=Xm(e),Xm(t)!==e&&n)throw Error(M(425))}function Sl(){}var Rh=null,Ch=null;function Ph(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kh=typeof setTimeout=="function"?setTimeout:void 0,_A=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,wA=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(t){return Jm.resolve(null).then(t).catch(EA)}:kh;function EA(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),Zt="__reactFiber$"+os,Eo="__reactProps$"+os,Rn="__reactContainer$"+os,Nh="__reactEvents$"+os,TA="__reactListeners$"+os,IA="__reactHandles$"+os;function Vr(t){var e=t[Zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[Zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zm(t);t!==null;){if(n=t[Zt])return n;t=Zm(t)}return e}t=n,n=t.parentNode}return null}function qo(t){return t=t[Zt]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function pu(t){return t[Eo]||null}var xh=[],Ri=-1;function Er(t){return{current:t}}function pe(t){0>Ri||(t.current=xh[Ri],xh[Ri]=null,Ri--)}function ce(t,e){Ri++,xh[Ri]=t.current,t.current=e}var fr={},Ze=Er(fr),ht=Er(!1),$r=fr;function Wi(t,e){var n=t.type.contextTypes;if(!n)return fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function Al(){pe(ht),pe(Ze)}function eg(t,e,n){if(Ze.current!==fr)throw Error(M(168));ce(Ze,e),ce(ht,n)}function L_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,aS(t)||"Unknown",i));return _e({},n,r)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,$r=Ze.current,ce(Ze,t),ce(ht,ht.current),!0}function tg(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=L_(t,e,$r),r.__reactInternalMemoizedMergedChildContext=t,pe(ht),pe(Ze),ce(Ze,t)):pe(ht),ce(ht,n)}var yn=null,mu=!1,Vc=!1;function b_(t){yn===null?yn=[t]:yn.push(t)}function SA(t){mu=!0,b_(t)}function Tr(){if(!Vc&&yn!==null){Vc=!0;var t=0,e=ae;try{var n=yn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,mu=!1}catch(i){throw yn!==null&&(yn=yn.slice(t+1)),a_(Ud,Tr),i}finally{ae=e,Vc=!1}}return null}var Ci=[],Pi=0,Cl=null,Pl=0,St=[],At=0,Wr=null,vn=1,_n="";function xr(t,e){Ci[Pi++]=Pl,Ci[Pi++]=Cl,Cl=t,Pl=e}function M_(t,e,n){St[At++]=vn,St[At++]=_n,St[At++]=Wr,Wr=t;var r=vn;t=_n;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vn=1<<32-$t(e)+i|n<<i|r,_n=s+t}else vn=1<<s|n<<i|r,_n=t}function Gd(t){t.return!==null&&(xr(t,1),M_(t,1,0))}function Qd(t){for(;t===Cl;)Cl=Ci[--Pi],Ci[Pi]=null,Pl=Ci[--Pi],Ci[Pi]=null;for(;t===Wr;)Wr=St[--At],St[At]=null,_n=St[--At],St[At]=null,vn=St[--At],St[At]=null}var vt=null,yt=null,me=!1,Ut=null;function F_(t,e){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ng(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,yt=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:vn,overflow:_n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,yt=null,!0):!1;default:return!1}}function Dh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Oh(t){if(me){var e=yt;if(e){var n=e;if(!ng(t,e)){if(Dh(t))throw Error(M(418));e=nr(n.nextSibling);var r=vt;e&&ng(t,e)?F_(r,n):(t.flags=t.flags&-4097|2,me=!1,vt=t)}}else{if(Dh(t))throw Error(M(418));t.flags=t.flags&-4097|2,me=!1,vt=t}}}function rg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function ba(t){if(t!==vt)return!1;if(!me)return rg(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ph(t.type,t.memoizedProps)),e&&(e=yt)){if(Dh(t))throw U_(),Error(M(418));for(;e;)F_(t,e),e=nr(e.nextSibling)}if(rg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yt=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yt=null}}else yt=vt?nr(t.stateNode.nextSibling):null;return!0}function U_(){for(var t=yt;t;)t=nr(t.nextSibling)}function Hi(){yt=vt=null,me=!1}function Yd(t){Ut===null?Ut=[t]:Ut.push(t)}var AA=On.ReactCurrentBatchConfig;function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Ma(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ig(t){var e=t._init;return e(t._payload)}function j_(t){function e(w,v){if(t){var S=w.deletions;S===null?(w.deletions=[v],w.flags|=16):S.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=or(w,v),w.index=0,w.sibling=null,w}function s(w,v,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<v?(w.flags|=2,v):S):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,S,D){return v===null||v.tag!==6?(v=zc(S,w.mode,D),v.return=w,v):(v=i(v,S),v.return=w,v)}function u(w,v,S,D){var F=S.type;return F===Ei?f(w,v,S.props.children,D,S.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Un&&ig(F)===v.type)?(D=i(v,S.props),D.ref=Vs(w,v,S),D.return=w,D):(D=sl(S.type,S.key,S.props,null,w.mode,D),D.ref=Vs(w,v,S),D.return=w,D)}function c(w,v,S,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Bc(S,w.mode,D),v.return=w,v):(v=i(v,S.children||[]),v.return=w,v)}function f(w,v,S,D,F){return v===null||v.tag!==7?(v=zr(S,w.mode,D,F),v.return=w,v):(v=i(v,S),v.return=w,v)}function p(w,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=zc(""+v,w.mode,S),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ra:return S=sl(v.type,v.key,v.props,null,w.mode,S),S.ref=Vs(w,null,v),S.return=w,S;case wi:return v=Bc(v,w.mode,S),v.return=w,v;case Un:var D=v._init;return p(w,D(v._payload),S)}if(Fs(v)||ks(v))return v=zr(v,w.mode,S,null),v.return=w,v;Ma(w,v)}return null}function m(w,v,S,D){var F=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return F!==null?null:l(w,v,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ra:return S.key===F?u(w,v,S,D):null;case wi:return S.key===F?c(w,v,S,D):null;case Un:return F=S._init,m(w,v,F(S._payload),D)}if(Fs(S)||ks(S))return F!==null?null:f(w,v,S,D,null);Ma(w,S)}return null}function A(w,v,S,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(S)||null,l(v,w,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ra:return w=w.get(D.key===null?S:D.key)||null,u(v,w,D,F);case wi:return w=w.get(D.key===null?S:D.key)||null,c(v,w,D,F);case Un:var U=D._init;return A(w,v,S,U(D._payload),F)}if(Fs(D)||ks(D))return w=w.get(S)||null,f(v,w,D,F,null);Ma(v,D)}return null}function C(w,v,S,D){for(var F=null,U=null,E=v,y=v=0,_=null;E!==null&&y<S.length;y++){E.index>y?(_=E,E=null):_=E.sibling;var T=m(w,E,S[y],D);if(T===null){E===null&&(E=_);break}t&&E&&T.alternate===null&&e(w,E),v=s(T,v,y),U===null?F=T:U.sibling=T,U=T,E=_}if(y===S.length)return n(w,E),me&&xr(w,y),F;if(E===null){for(;y<S.length;y++)E=p(w,S[y],D),E!==null&&(v=s(E,v,y),U===null?F=E:U.sibling=E,U=E);return me&&xr(w,y),F}for(E=r(w,E);y<S.length;y++)_=A(E,w,y,S[y],D),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?y:_.key),v=s(_,v,y),U===null?F=_:U.sibling=_,U=_);return t&&E.forEach(function(R){return e(w,R)}),me&&xr(w,y),F}function N(w,v,S,D){var F=ks(S);if(typeof F!="function")throw Error(M(150));if(S=F.call(S),S==null)throw Error(M(151));for(var U=F=null,E=v,y=v=0,_=null,T=S.next();E!==null&&!T.done;y++,T=S.next()){E.index>y?(_=E,E=null):_=E.sibling;var R=m(w,E,T.value,D);if(R===null){E===null&&(E=_);break}t&&E&&R.alternate===null&&e(w,E),v=s(R,v,y),U===null?F=R:U.sibling=R,U=R,E=_}if(T.done)return n(w,E),me&&xr(w,y),F;if(E===null){for(;!T.done;y++,T=S.next())T=p(w,T.value,D),T!==null&&(v=s(T,v,y),U===null?F=T:U.sibling=T,U=T);return me&&xr(w,y),F}for(E=r(w,E);!T.done;y++,T=S.next())T=A(E,w,y,T.value,D),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),v=s(T,v,y),U===null?F=T:U.sibling=T,U=T);return t&&E.forEach(function(k){return e(w,k)}),me&&xr(w,y),F}function O(w,v,S,D){if(typeof S=="object"&&S!==null&&S.type===Ei&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ra:e:{for(var F=S.key,U=v;U!==null;){if(U.key===F){if(F=S.type,F===Ei){if(U.tag===7){n(w,U.sibling),v=i(U,S.props.children),v.return=w,w=v;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Un&&ig(F)===U.type){n(w,U.sibling),v=i(U,S.props),v.ref=Vs(w,U,S),v.return=w,w=v;break e}n(w,U);break}else e(w,U);U=U.sibling}S.type===Ei?(v=zr(S.props.children,w.mode,D,S.key),v.return=w,w=v):(D=sl(S.type,S.key,S.props,null,w.mode,D),D.ref=Vs(w,v,S),D.return=w,w=D)}return o(w);case wi:e:{for(U=S.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(w,v.sibling),v=i(v,S.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Bc(S,w.mode,D),v.return=w,w=v}return o(w);case Un:return U=S._init,O(w,v,U(S._payload),D)}if(Fs(S))return C(w,v,S,D);if(ks(S))return N(w,v,S,D);Ma(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,S),v.return=w,w=v):(n(w,v),v=zc(S,w.mode,D),v.return=w,w=v),o(w)):n(w,v)}return O}var qi=j_(!0),z_=j_(!1),kl=Er(null),Nl=null,ki=null,Xd=null;function Jd(){Xd=ki=Nl=null}function Zd(t){var e=kl.current;pe(kl),t._currentValue=e}function Vh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mi(t,e){Nl=t,Xd=ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ct=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},ki===null){if(Nl===null)throw Error(M(308));ki=t,Nl.dependencies={lanes:0,firstContext:t}}else ki=ki.next=t;return e}var Lr=null;function ef(t){Lr===null?Lr=[t]:Lr.push(t)}function B_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ef(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cn(t,r)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jn=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cn(t,n)}return i=r.interleaved,i===null?(e.next=e,ef(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cn(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jd(t,n)}}function sg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,r){var i=t.updateQueue;jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,A=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(m=e,A=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){p=C.call(A,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,m=typeof C=="function"?C.call(A,p,m):C,m==null)break e;p=_e({},p,m);break e;case 2:jn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else A={eventTime:A,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=A,u=p):f=f.next=A,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=p}}function og(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Ko={},tn=Er(Ko),To=Er(Ko),Io=Er(Ko);function br(t){if(t===Ko)throw Error(M(174));return t}function nf(t,e){switch(ce(Io,e),ce(To,t),ce(tn,Ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ph(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ph(e,t)}pe(tn),ce(tn,e)}function Ki(){pe(tn),pe(To),pe(Io)}function W_(t){br(Io.current);var e=br(tn.current),n=ph(e,t.type);e!==n&&(ce(To,t),ce(tn,n))}function rf(t){To.current===t&&(pe(tn),pe(To))}var ye=Er(0);function Dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function sf(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var el=On.ReactCurrentDispatcher,bc=On.ReactCurrentBatchConfig,Hr=0,ve=null,Ne=null,Le=null,Ol=!1,Zs=!1,So=0,RA=0;function Ke(){throw Error(M(321))}function of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ht(t[n],e[n]))return!1;return!0}function af(t,e,n,r,i,s){if(Hr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?NA:xA,t=n(r,i),Zs){s=0;do{if(Zs=!1,So=0,25<=s)throw Error(M(301));s+=1,Le=Ne=null,e.updateQueue=null,el.current=DA,t=n(r,i)}while(Zs)}if(el.current=Vl,e=Ne!==null&&Ne.next!==null,Hr=0,Le=Ne=ve=null,Ol=!1,e)throw Error(M(300));return t}function lf(){var t=So!==0;return So=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ve.memoizedState=Le=t:Le=Le.next=t,Le}function Vt(){if(Ne===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Le===null?ve.memoizedState:Le.next;if(e!==null)Le=e,Ne=t;else{if(t===null)throw Error(M(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Le===null?ve.memoizedState=Le=t:Le=Le.next=t}return Le}function Ao(t,e){return typeof e=="function"?e(t):e}function Mc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Hr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,qr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Ht(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ht(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function H_(){}function q_(t,e){var n=ve,r=Vt(),i=e(),s=!Ht(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,uf(Q_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Ro(9,G_.bind(null,n,r,i,e),void 0,null),be===null)throw Error(M(349));Hr&30||K_(n,e,i)}return i}function K_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G_(t,e,n,r){e.value=n,e.getSnapshot=r,Y_(e)&&X_(t)}function Q_(t,e,n){return n(function(){Y_(e)&&X_(t)})}function Y_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ht(t,n)}catch{return!0}}function X_(t){var e=Cn(t,1);e!==null&&Wt(e,t,1,-1)}function ag(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=kA.bind(null,ve,t),[e.memoizedState,t]}function Ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function J_(){return Vt().memoizedState}function tl(t,e,n,r){var i=Xt();ve.flags|=t,i.memoizedState=Ro(1|e,n,void 0,r===void 0?null:r)}function gu(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&of(r,o.deps)){i.memoizedState=Ro(e,n,s,r);return}}ve.flags|=t,i.memoizedState=Ro(1|e,n,s,r)}function lg(t,e){return tl(8390656,8,t,e)}function uf(t,e){return gu(2048,8,t,e)}function Z_(t,e){return gu(4,2,t,e)}function ew(t,e){return gu(4,4,t,e)}function tw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nw(t,e,n){return n=n!=null?n.concat([t]):null,gu(4,4,tw.bind(null,e,t),n)}function cf(){}function rw(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function iw(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&of(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sw(t,e,n){return Hr&21?(Ht(n,e)||(n=c_(),ve.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=n)}function CA(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=bc.transition;bc.transition={};try{t(!1),e()}finally{ae=n,bc.transition=r}}function ow(){return Vt().memoizedState}function PA(t,e,n){var r=sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},aw(t))lw(e,n);else if(n=B_(t,e,n,r),n!==null){var i=st();Wt(n,t,r,i),uw(n,e,r)}}function kA(t,e,n){var r=sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(aw(t))lw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ht(l,o)){var u=e.interleaved;u===null?(i.next=i,ef(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=B_(t,e,i,r),n!==null&&(i=st(),Wt(n,t,r,i),uw(n,e,r))}}function aw(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function lw(t,e){Zs=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jd(t,n)}}var Vl={readContext:Ot,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},NA={readContext:Ot,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:lg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,tw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PA.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:ag,useDebugValue:cf,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=ag(!1),e=t[0];return t=CA.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Xt();if(me){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),be===null)throw Error(M(349));Hr&30||K_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lg(Q_.bind(null,r,s,t),[t]),r.flags|=2048,Ro(9,G_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=be.identifierPrefix;if(me){var n=_n,r=vn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xA={readContext:Ot,useCallback:rw,useContext:Ot,useEffect:uf,useImperativeHandle:nw,useInsertionEffect:Z_,useLayoutEffect:ew,useMemo:iw,useReducer:Mc,useRef:J_,useState:function(){return Mc(Ao)},useDebugValue:cf,useDeferredValue:function(t){var e=Vt();return sw(e,Ne.memoizedState,t)},useTransition:function(){var t=Mc(Ao)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:H_,useSyncExternalStore:q_,useId:ow,unstable_isNewReconciler:!1},DA={readContext:Ot,useCallback:rw,useContext:Ot,useEffect:uf,useImperativeHandle:nw,useInsertionEffect:Z_,useLayoutEffect:ew,useMemo:iw,useReducer:Fc,useRef:J_,useState:function(){return Fc(Ao)},useDebugValue:cf,useDeferredValue:function(t){var e=Vt();return Ne===null?e.memoizedState=t:sw(e,Ne.memoizedState,t)},useTransition:function(){var t=Fc(Ao)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:H_,useSyncExternalStore:q_,useId:ow,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yu={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=sr(t),s=Tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Wt(e,t,i,r),Za(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=sr(t),s=Tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(Wt(e,t,i,r),Za(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=sr(t),i=Tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=rr(t,i,r),e!==null&&(Wt(e,t,r,n),Za(e,t,r))}};function ug(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,r)||!vo(i,s):!0}function cw(t,e,n){var r=!1,i=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=dt(e)?$r:Ze.current,r=e.contextTypes,s=(r=r!=null)?Wi(t,i):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yu.enqueueReplaceState(e,e.state,null)}function bh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},tf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=dt(e)?$r:Ze.current,i.context=Wi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yu.enqueueReplaceState(i,i.state,null),xl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gi(t,e){try{var n="",r=e;do n+=oS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OA=typeof WeakMap=="function"?WeakMap:Map;function hw(t,e,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){bl||(bl=!0,Kh=r),Mh(t,e)},n}function dw(t,e,n){n=Tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Mh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mh(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KA.bind(null,t,e,n),e.then(t,t))}function dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tn(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var VA=On.ReactCurrentOwner,ct=!1;function it(t,e,n,r){e.child=t===null?z_(e,null,n,r):qi(e,t.child,n,r)}function pg(t,e,n,r,i){n=n.render;var s=e.ref;return Mi(e,i),r=af(t,e,n,r,s,i),n=lf(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(me&&n&&Gd(e),e.flags|=1,it(t,e,r,i),e.child)}function mg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fw(t,e,s,r,i)):(t=sl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,r)&&t.ref===e.ref)return Pn(t,e,i)}return e.flags|=1,t=or(s,r),t.ref=e.ref,t.return=e,e.child=t}function fw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vo(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,Pn(t,e,i)}return Fh(t,e,n,r,i)}function pw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(xi,gt),gt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(xi,gt),gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(xi,gt),gt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(xi,gt),gt|=r;return it(t,e,i,n),e.child}function mw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fh(t,e,n,r,i){var s=dt(n)?$r:Ze.current;return s=Wi(e,s),Mi(e,i),n=af(t,e,n,r,s,i),r=lf(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(me&&r&&Gd(e),e.flags|=1,it(t,e,n,i),e.child)}function gg(t,e,n,r,i){if(dt(n)){var s=!0;Rl(e)}else s=!1;if(Mi(e,i),e.stateNode===null)nl(t,e),cw(e,n,r),bh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=dt(n)?$r:Ze.current,c=Wi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&cg(e,o,r,c),jn=!1;var m=e.memoizedState;o.state=m,xl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||ht.current||jn?(typeof f=="function"&&(Lh(e,n,f,r),u=e.memoizedState),(l=jn||ug(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,$_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Mt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=dt(n)?$r:Ze.current,u=Wi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&cg(e,o,r,u),jn=!1,m=e.memoizedState,o.state=m,xl(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||ht.current||jn?(typeof A=="function"&&(Lh(e,n,A,r),C=e.memoizedState),(c=jn||ug(e,n,c,r,m,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Uh(t,e,n,r,s,i)}function Uh(t,e,n,r,i,s){mw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&tg(e,n,!1),Pn(t,e,s);r=e.stateNode,VA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qi(e,t.child,null,s),e.child=qi(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&tg(e,n,!0),e.child}function gw(t){var e=t.stateNode;e.pendingContext?eg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&eg(t,e.context,!1),nf(t,e.containerInfo)}function yg(t,e,n,r,i){return Hi(),Yd(i),e.flags|=256,it(t,e,n,r),e.child}var jh={dehydrated:null,treeContext:null,retryLane:0};function zh(t){return{baseLanes:t,cachePool:null,transitions:null}}function yw(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return Oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wu(o,r,0,null),t=zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zh(n),e.memoizedState=jh,t):hf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return LA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=or(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=or(l,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jh,r}return s=t.child,t=s.sibling,r=or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hf(t,e){return e=wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fa(t,e,n,r){return r!==null&&Yd(r),qi(e,t.child,null,n),t=hf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Uc(Error(M(422))),Fa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wu({mode:"visible",children:r.children},i,0,null),s=zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&qi(e,t.child,null,o),e.child.memoizedState=zh(o),e.memoizedState=jh,s);if(!(e.mode&1))return Fa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=Uc(s,r,void 0),Fa(t,e,o,r)}if(l=(o&t.childLanes)!==0,ct||l){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cn(t,i),Wt(r,t,i,-1))}return yf(),r=Uc(Error(M(421))),Fa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=GA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,yt=nr(i.nextSibling),vt=e,me=!0,Ut=null,t!==null&&(St[At++]=vn,St[At++]=_n,St[At++]=Wr,vn=t.id,_n=t.overflow,Wr=e),e=hf(e,r.children),e.flags|=4096,e)}function vg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Vh(t.return,e,n)}function jc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,n,e);else if(t.tag===19)vg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jc(e,!0,n,null,s);break;case"together":jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bA(t,e,n){switch(e.tag){case 3:gw(e),Hi();break;case 5:W_(e);break;case 1:dt(e.type)&&Rl(e);break;case 4:nf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(kl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?yw(t,e,n):(ce(ye,ye.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,pw(t,e,n)}return Pn(t,e,n)}var _w,Bh,ww,Ew;_w=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bh=function(){};ww=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,br(tn.current);var s=null;switch(n){case"input":i=ch(t,i),r=ch(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=fh(t,i),r=fh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sl)}mh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(co.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ew=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ls(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MA(t,e,n){var r=e.pendingProps;switch(Qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return dt(e.type)&&Al(),Ge(e),null;case 3:return r=e.stateNode,Ki(),pe(ht),pe(Ze),sf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(Yh(Ut),Ut=null))),Bh(t,e),Ge(e),null;case 5:rf(e);var i=br(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)ww(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Ge(e),null}if(t=br(tn.current),ba(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zt]=e,r[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<js.length;i++)de(js[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Cm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":km(r,s),de("invalid",r)}mh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&La(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&La(r.textContent,l,t),i=["children",""+l]):co.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ca(r),Pm(r,s,!0);break;case"textarea":Ca(r),Nm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zt]=e,t[Eo]=r,_w(t,e,!1,!1),e.stateNode=t;e:{switch(o=gh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<js.length;i++)de(js[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Cm(t,r),i=ch(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),de("invalid",t);break;case"textarea":km(t,r),i=fh(t,r),de("invalid",t);break;default:i=r}mh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Jv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Yv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ho(t,u):typeof u=="number"&&ho(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Vd(t,s,u,o))}switch(n){case"input":Ca(t),Pm(t,r,!1);break;case"textarea":Ca(t),Nm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)Ew(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=br(Io.current),br(tn.current),ba(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:La(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=e,e.stateNode=r}return Ge(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&yt!==null&&e.mode&1&&!(e.flags&128))U_(),Hi(),e.flags|=98560,s=!1;else if(s=ba(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Zt]=e}else Hi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else Ut!==null&&(Yh(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?xe===0&&(xe=3):yf())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Ki(),Bh(t,e),t===null&&_o(e.stateNode.containerInfo),Ge(e),null;case 10:return Zd(e.type._context),Ge(e),null;case 17:return dt(e.type)&&Al(),Ge(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ls(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Dl(t),o!==null){for(e.flags|=128,Ls(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>Qi&&(e.flags|=128,r=!0,Ls(s,!1),e.lanes=4194304)}else{if(!r)if(t=Dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ge(e),null}else 2*Re()-s.renderingStartTime>Qi&&n!==1073741824&&(e.flags|=128,r=!0,Ls(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return gf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?gt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function FA(t,e){switch(Qd(e),e.tag){case 1:return dt(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ki(),pe(ht),pe(Ze),sf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rf(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Ki(),null;case 10:return Zd(e.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var Ua=!1,Xe=!1,UA=typeof WeakSet=="function"?WeakSet:Set,W=null;function Ni(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function $h(t,e,n){try{n()}catch(r){Te(t,e,r)}}var _g=!1;function jA(t,e){if(Rh=El,t=R_(),Kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)m=p,p=A;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ch={focusedElem:t,selectionRange:n},El=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,O=C.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?N:Mt(e.type,N),O);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(D){Te(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return C=_g,_g=!1,C}function eo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$h(e,n,s)}i=i.next}while(i!==r)}}function vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tw(t){var e=t.alternate;e!==null&&(t.alternate=null,Tw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zt],delete e[Eo],delete e[Nh],delete e[TA],delete e[IA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Iw(t){return t.tag===5||t.tag===3||t.tag===4}function wg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(r!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}var Fe=null,Ft=!1;function Mn(t,e,n){for(n=n.child;n!==null;)Sw(t,e,n),n=n.sibling}function Sw(t,e,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(cu,n)}catch{}switch(n.tag){case 5:Xe||Ni(n,e);case 6:var r=Fe,i=Ft;Fe=null,Mn(t,e,n),Fe=r,Ft=i,Fe!==null&&(Ft?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Ft?(t=Fe,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),go(t)):Oc(Fe,n.stateNode));break;case 4:r=Fe,i=Ft,Fe=n.stateNode.containerInfo,Ft=!0,Mn(t,e,n),Fe=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$h(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!Xe&&(Ni(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,Mn(t,e,n),Xe=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function Eg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new UA),e.forEach(function(r){var i=QA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,Ft=!1;break e;case 3:Fe=l.stateNode.containerInfo,Ft=!0;break e;case 4:Fe=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Fe===null)throw Error(M(160));Sw(s,o,i),Fe=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Te(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Aw(e,t),e=e.sibling}function Aw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bt(e,t),Yt(t),r&4){try{eo(3,t,t.return),vu(3,t)}catch(N){Te(t,t.return,N)}try{eo(5,t,t.return)}catch(N){Te(t,t.return,N)}}break;case 1:bt(e,t),Yt(t),r&512&&n!==null&&Ni(n,n.return);break;case 5:if(bt(e,t),Yt(t),r&512&&n!==null&&Ni(n,n.return),t.flags&32){var i=t.stateNode;try{ho(i,"")}catch(N){Te(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Kv(i,s),gh(l,o);var c=gh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Jv(i,p):f==="dangerouslySetInnerHTML"?Yv(i,p):f==="children"?ho(i,p):Vd(i,f,p,c)}switch(l){case"input":hh(i,s);break;case"textarea":Gv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Oi(i,!!s.multiple,A,!1):m!==!!s.multiple&&(s.defaultValue!=null?Oi(i,!!s.multiple,s.defaultValue,!0):Oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Eo]=s}catch(N){Te(t,t.return,N)}}break;case 6:if(bt(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Te(t,t.return,N)}}break;case 3:if(bt(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(N){Te(t,t.return,N)}break;case 4:bt(e,t),Yt(t);break;case 13:bt(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pf=Re())),r&4&&Eg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(c=Xe)||f,bt(e,t),Xe=c):bt(e,t),Yt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(m=W,A=m.child,m.tag){case 0:case 11:case 14:case 15:eo(4,m,m.return);break;case 1:Ni(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Te(r,n,N)}}break;case 5:Ni(m,m.return);break;case 22:if(m.memoizedState!==null){Ig(p);continue}}A!==null?(A.return=m,W=A):Ig(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Xv("display",o))}catch(N){Te(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){Te(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bt(e,t),Yt(t),r&4&&Eg(t);break;case 21:break;default:bt(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Iw(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ho(i,""),r.flags&=-33);var s=wg(t);qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=wg(t);Hh(t,l,o);break;default:throw Error(M(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zA(t,e,n){W=t,Rw(t)}function Rw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ua;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Xe;l=Ua;var c=Xe;if(Ua=o,(Xe=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Sg(i):u!==null?(u.return=o,W=u):Sg(i);for(;s!==null;)W=s,Rw(s),s=s.sibling;W=i,Ua=l,Xe=c}Tg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Tg(t)}}function Tg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||vu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&og(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}og(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&go(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Xe||e.flags&512&&Wh(e)}catch(m){Te(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Ig(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Sg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vu(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{Wh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{Wh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var BA=Math.ceil,Ll=On.ReactCurrentDispatcher,df=On.ReactCurrentOwner,Nt=On.ReactCurrentBatchConfig,ie=0,be=null,Pe=null,ze=0,gt=0,xi=Er(0),xe=0,Co=null,qr=0,_u=0,ff=0,to=null,ut=null,pf=0,Qi=1/0,gn=null,bl=!1,Kh=null,ir=null,ja=!1,Qn=null,Ml=0,no=0,Gh=null,rl=-1,il=0;function st(){return ie&6?Re():rl!==-1?rl:rl=Re()}function sr(t){return t.mode&1?ie&2&&ze!==0?ze&-ze:AA.transition!==null?(il===0&&(il=c_()),il):(t=ae,t!==0||(t=window.event,t=t===void 0?16:y_(t.type)),t):1}function Wt(t,e,n,r){if(50<no)throw no=0,Gh=null,Error(M(185));Wo(t,n,r),(!(ie&2)||t!==be)&&(t===be&&(!(ie&2)&&(_u|=n),xe===4&&$n(t,ze)),ft(t,r),n===1&&ie===0&&!(e.mode&1)&&(Qi=Re()+500,mu&&Tr()))}function ft(t,e){var n=t.callbackNode;AS(t,e);var r=wl(t,t===be?ze:0);if(r===0)n!==null&&Om(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Om(n),e===1)t.tag===0?SA(Ag.bind(null,t)):b_(Ag.bind(null,t)),wA(function(){!(ie&6)&&Tr()}),n=null;else{switch(h_(r)){case 1:n=Ud;break;case 4:n=l_;break;case 16:n=_l;break;case 536870912:n=u_;break;default:n=_l}n=Vw(n,Cw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cw(t,e){if(rl=-1,il=0,ie&6)throw Error(M(327));var n=t.callbackNode;if(Fi()&&t.callbackNode!==n)return null;var r=wl(t,t===be?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fl(t,r);else{e=r;var i=ie;ie|=2;var s=kw();(be!==t||ze!==e)&&(gn=null,Qi=Re()+500,jr(t,e));do try{HA();break}catch(l){Pw(t,l)}while(!0);Jd(),Ll.current=s,ie=i,Pe!==null?e=0:(be=null,ze=0,e=xe)}if(e!==0){if(e===2&&(i=Eh(t),i!==0&&(r=i,e=Qh(t,i))),e===1)throw n=Co,jr(t,0),$n(t,r),ft(t,Re()),n;if(e===6)$n(t,r);else{if(i=t.current.alternate,!(r&30)&&!$A(i)&&(e=Fl(t,r),e===2&&(s=Eh(t),s!==0&&(r=s,e=Qh(t,s))),e===1))throw n=Co,jr(t,0),$n(t,r),ft(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:Dr(t,ut,gn);break;case 3:if($n(t,r),(r&130023424)===r&&(e=pf+500-Re(),10<e)){if(wl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kh(Dr.bind(null,t,ut,gn),e);break}Dr(t,ut,gn);break;case 4:if($n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BA(r/1960))-r,10<r){t.timeoutHandle=kh(Dr.bind(null,t,ut,gn),r);break}Dr(t,ut,gn);break;case 5:Dr(t,ut,gn);break;default:throw Error(M(329))}}}return ft(t,Re()),t.callbackNode===n?Cw.bind(null,t):null}function Qh(t,e){var n=to;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=ut,ut=n,e!==null&&Yh(e)),t}function Yh(t){ut===null?ut=t:ut.push.apply(ut,t)}function $A(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $n(t,e){for(e&=~ff,e&=~_u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function Ag(t){if(ie&6)throw Error(M(327));Fi();var e=wl(t,0);if(!(e&1))return ft(t,Re()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var r=Eh(t);r!==0&&(e=r,n=Qh(t,r))}if(n===1)throw n=Co,jr(t,0),$n(t,e),ft(t,Re()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,ut,gn),ft(t,Re()),null}function mf(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Qi=Re()+500,mu&&Tr())}}function Kr(t){Qn!==null&&Qn.tag===0&&!(ie&6)&&Fi();var e=ie;ie|=1;var n=Nt.transition,r=ae;try{if(Nt.transition=null,ae=1,t)return t()}finally{ae=r,Nt.transition=n,ie=e,!(ie&6)&&Tr()}}function gf(){gt=xi.current,pe(xi)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_A(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Al();break;case 3:Ki(),pe(ht),pe(Ze),sf();break;case 5:rf(r);break;case 4:Ki();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:Zd(r.type._context);break;case 22:case 23:gf()}n=n.return}if(be=t,Pe=t=or(t.current,null),ze=gt=e,xe=0,Co=null,ff=_u=qr=0,ut=to=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function Pw(t,e){do{var n=Pe;try{if(Jd(),el.current=Vl,Ol){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ol=!1}if(Hr=0,Le=Ne=ve=null,Zs=!1,So=0,df.current=null,n===null||n.return===null){xe=1,Co=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=dg(o);if(A!==null){A.flags&=-257,fg(A,o,l,s,e),A.mode&1&&hg(s,c,e),e=A,u=c;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){hg(s,c,e),yf();break e}u=Error(M(426))}}else if(me&&l.mode&1){var O=dg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),fg(O,o,l,s,e),Yd(Gi(u,l));break e}}s=u=Gi(u,l),xe!==4&&(xe=2),to===null?to=[s]:to.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=hw(s,u,e);sg(s,w);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ir===null||!ir.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=dw(s,l,e);sg(s,D);break e}}s=s.return}while(s!==null)}xw(n)}catch(F){e=F,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function kw(){var t=Ll.current;return Ll.current=Vl,t===null?Vl:t}function yf(){(xe===0||xe===3||xe===2)&&(xe=4),be===null||!(qr&268435455)&&!(_u&268435455)||$n(be,ze)}function Fl(t,e){var n=ie;ie|=2;var r=kw();(be!==t||ze!==e)&&(gn=null,jr(t,e));do try{WA();break}catch(i){Pw(t,i)}while(!0);if(Jd(),ie=n,Ll.current=r,Pe!==null)throw Error(M(261));return be=null,ze=0,xe}function WA(){for(;Pe!==null;)Nw(Pe)}function HA(){for(;Pe!==null&&!gS();)Nw(Pe)}function Nw(t){var e=Ow(t.alternate,t,gt);t.memoizedProps=t.pendingProps,e===null?xw(t):Pe=e,df.current=null}function xw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FA(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Pe=null;return}}else if(n=MA(n,e,gt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);xe===0&&(xe=5)}function Dr(t,e,n){var r=ae,i=Nt.transition;try{Nt.transition=null,ae=1,qA(t,e,n,r)}finally{Nt.transition=i,ae=r}return null}function qA(t,e,n,r){do Fi();while(Qn!==null);if(ie&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(RS(t,s),t===be&&(Pe=be=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,Vw(_l,function(){return Fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,df.current=null,jA(t,n),Aw(n,t),dA(Ch),El=!!Rh,Ch=Rh=null,t.current=n,zA(n),yS(),ie=l,ae=o,Nt.transition=s}else t.current=n;if(ja&&(ja=!1,Qn=t,Ml=i),s=t.pendingLanes,s===0&&(ir=null),wS(n.stateNode),ft(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bl)throw bl=!1,t=Kh,Kh=null,t;return Ml&1&&t.tag!==0&&Fi(),s=t.pendingLanes,s&1?t===Gh?no++:(no=0,Gh=t):no=0,Tr(),null}function Fi(){if(Qn!==null){var t=h_(Ml),e=Nt.transition,n=ae;try{if(Nt.transition=null,ae=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,Ml=0,ie&6)throw Error(M(331));var i=ie;for(ie|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:eo(8,f,s)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var m=f.sibling,A=f.return;if(Tw(f),f===c){W=null;break}if(m!==null){m.return=A,W=m;break}W=A}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:eo(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,W=w;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,W=S;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vu(9,l)}}catch(F){Te(l,l.return,F)}if(l===o){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(ie=i,Tr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(cu,t)}catch{}r=!0}return r}finally{ae=n,Nt.transition=e}}return!1}function Rg(t,e,n){e=Gi(n,e),e=hw(t,e,1),t=rr(t,e,1),e=st(),t!==null&&(Wo(t,1,e),ft(t,e))}function Te(t,e,n){if(t.tag===3)Rg(t,t,n);else for(;e!==null;){if(e.tag===3){Rg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=Gi(n,t),t=dw(e,t,1),e=rr(e,t,1),t=st(),e!==null&&(Wo(e,1,t),ft(e,t));break}}e=e.return}}function KA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(ze&n)===n&&(xe===4||xe===3&&(ze&130023424)===ze&&500>Re()-pf?jr(t,0):ff|=n),ft(t,e)}function Dw(t,e){e===0&&(t.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var n=st();t=Cn(t,e),t!==null&&(Wo(t,e,n),ft(t,n))}function GA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dw(t,n)}function QA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),Dw(t,n)}var Ow;Ow=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ht.current)ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ct=!1,bA(t,e,n);ct=!!(t.flags&131072)}else ct=!1,me&&e.flags&1048576&&M_(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;nl(t,e),t=e.pendingProps;var i=Wi(e,Ze.current);Mi(e,n),i=af(null,e,r,t,i,n);var s=lf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,Rl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tf(e),i.updater=yu,e.stateNode=i,i._reactInternals=e,bh(e,r,t,n),e=Uh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Gd(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=XA(r),t=Mt(r,t),i){case 0:e=Fh(null,e,r,t,n);break e;case 1:e=gg(null,e,r,t,n);break e;case 11:e=pg(null,e,r,t,n);break e;case 14:e=mg(null,e,r,Mt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Fh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),gg(t,e,r,i,n);case 3:e:{if(gw(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,$_(t,e),xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gi(Error(M(423)),e),e=yg(t,e,r,n,i);break e}else if(r!==i){i=Gi(Error(M(424)),e),e=yg(t,e,r,n,i);break e}else for(yt=nr(e.stateNode.containerInfo.firstChild),vt=e,me=!0,Ut=null,n=z_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hi(),r===i){e=Pn(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return W_(e),t===null&&Oh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ph(r,i)?o=null:s!==null&&Ph(r,s)&&(e.flags|=32),mw(t,e),it(t,e,o,n),e.child;case 6:return t===null&&Oh(e),null;case 13:return yw(t,e,n);case 4:return nf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qi(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),pg(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(kl,r._currentValue),r._currentValue=o,s!==null)if(Ht(s.value,o)){if(s.children===i.children&&!ht.current){e=Pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Tn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Vh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Vh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mi(e,n),i=Ot(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),mg(t,e,r,i,n);case 15:return fw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),nl(t,e),e.tag=1,dt(r)?(t=!0,Rl(e)):t=!1,Mi(e,n),cw(e,r,i),bh(e,r,i,n),Uh(null,e,r,!0,t,n);case 19:return vw(t,e,n);case 22:return pw(t,e,n)}throw Error(M(156,e.tag))};function Vw(t,e){return a_(t,e)}function YA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,e,n,r){return new YA(t,e,n,r)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function XA(t){if(typeof t=="function")return vf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bd)return 11;if(t===Md)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ei:return zr(n.children,i,s,e);case Ld:o=8,i|=8;break;case oh:return t=kt(12,n,e,i|2),t.elementType=oh,t.lanes=s,t;case ah:return t=kt(13,n,e,i),t.elementType=ah,t.lanes=s,t;case lh:return t=kt(19,n,e,i),t.elementType=lh,t.lanes=s,t;case Wv:return wu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bv:o=10;break e;case $v:o=9;break e;case bd:o=11;break e;case Md:o=14;break e;case Un:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zr(t,e,n,r){return t=kt(7,t,r,e),t.lanes=n,t}function wu(t,e,n,r){return t=kt(22,t,r,e),t.elementType=Wv,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=kt(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _f(t,e,n,r,i,s,o,l,u){return t=new JA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tf(s),t}function ZA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Lw(t){if(!t)return fr;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(dt(n))return L_(t,n,e)}return e}function bw(t,e,n,r,i,s,o,l,u){return t=_f(n,r,!0,t,i,s,o,l,u),t.context=Lw(null),n=t.current,r=st(),i=sr(n),s=Tn(r,i),s.callback=e??null,rr(n,s,i),t.current.lanes=i,Wo(t,i,r),ft(t,r),t}function Eu(t,e,n,r){var i=e.current,s=st(),o=sr(i);return n=Lw(n),e.context===null?e.context=n:e.pendingContext=n,e=Tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(i,e,o),t!==null&&(Wt(t,i,o,s),Za(t,i,o)),o}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wf(t,e){Cg(t,e),(t=t.alternate)&&Cg(t,e)}function eR(){return null}var Mw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ef(t){this._internalRoot=t}Tu.prototype.render=Ef.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Eu(t,e,null,null)};Tu.prototype.unmount=Ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Eu(null,t,null,null)}),e[Rn]=null}};function Tu(t){this._internalRoot=t}Tu.prototype.unstable_scheduleHydration=function(t){if(t){var e=p_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bn.length&&e!==0&&e<Bn[n].priority;n++);Bn.splice(n,0,t),n===0&&g_(t)}};function Tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pg(){}function tR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ul(o);s.call(c)}}var o=bw(e,r,t,0,null,!1,!1,"",Pg);return t._reactRootContainer=o,t[Rn]=o.current,_o(t.nodeType===8?t.parentNode:t),Kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ul(u);l.call(c)}}var u=_f(t,0,!1,null,null,!1,!1,"",Pg);return t._reactRootContainer=u,t[Rn]=u.current,_o(t.nodeType===8?t.parentNode:t),Kr(function(){Eu(e,u,n,r)}),u}function Su(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ul(o);l.call(u)}}Eu(e,o,t,i)}else o=tR(n,e,t,i,r);return Ul(o)}d_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Us(e.pendingLanes);n!==0&&(jd(e,n|1),ft(e,Re()),!(ie&6)&&(Qi=Re()+500,Tr()))}break;case 13:Kr(function(){var r=Cn(t,1);if(r!==null){var i=st();Wt(r,t,1,i)}}),wf(t,1)}};zd=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=st();Wt(e,t,134217728,n)}wf(t,134217728)}};f_=function(t){if(t.tag===13){var e=sr(t),n=Cn(t,e);if(n!==null){var r=st();Wt(n,t,e,r)}wf(t,e)}};p_=function(){return ae};m_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};vh=function(t,e,n){switch(e){case"input":if(hh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=pu(r);if(!i)throw Error(M(90));qv(r),hh(r,i)}}}break;case"textarea":Gv(t,n);break;case"select":e=n.value,e!=null&&Oi(t,!!n.multiple,e,!1)}};t_=mf;n_=Kr;var nR={usingClientEntryPoint:!1,Events:[qo,Ai,pu,Zv,e_,mf]},bs={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rR={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=s_(t),t===null?null:t.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||eR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{cu=za.inject(rR),en=za}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nR;Et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tf(e))throw Error(M(200));return ZA(t,e,null,n)};Et.createRoot=function(t,e){if(!Tf(t))throw Error(M(299));var n=!1,r="",i=Mw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_f(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,_o(t.nodeType===8?t.parentNode:t),new Ef(e)};Et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=s_(e),t=t===null?null:t.stateNode,t};Et.flushSync=function(t){return Kr(t)};Et.hydrate=function(t,e,n){if(!Iu(e))throw Error(M(200));return Su(null,t,e,!0,n)};Et.hydrateRoot=function(t,e,n){if(!Tf(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Mw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bw(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Tu(e)};Et.render=function(t,e,n){if(!Iu(e))throw Error(M(200));return Su(null,t,e,!1,n)};Et.unmountComponentAtNode=function(t){if(!Iu(t))throw Error(M(40));return t._reactRootContainer?(Kr(function(){Su(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};Et.unstable_batchedUpdates=mf;Et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Iu(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Su(t,e,n,!1,r)};Et.version="18.3.1-next-f1338f8080-20240426";function Fw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fw)}catch(t){console.error(t)}}Fw(),Fv.exports=Et;var iR=Fv.exports,kg=iR;ih.createRoot=kg.createRoot,ih.hydrateRoot=kg.hydrateRoot;/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Po.apply(this,arguments)}var Yn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Yn||(Yn={}));const Ng="popstate";function sR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Xh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jl(i)}return aR(e,n,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Uw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oR(){return Math.random().toString(36).substr(2,8)}function xg(t,e){return{usr:t.state,key:t.key,idx:e}}function Xh(t,e,n,r){return n===void 0&&(n=null),Po({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?as(e):e,{state:n,key:e&&e.key||r||oR()})}function jl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function as(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function aR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Yn.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Po({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Yn.Pop;let O=f(),w=O==null?null:O-c;c=O,u&&u({action:l,location:N.location,delta:w})}function m(O,w){l=Yn.Push;let v=Xh(N.location,O,w);c=f()+1;let S=xg(v,c),D=N.createHref(v);try{o.pushState(S,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(D)}s&&u&&u({action:l,location:N.location,delta:1})}function A(O,w){l=Yn.Replace;let v=Xh(N.location,O,w);c=f();let S=xg(v,c),D=N.createHref(v);o.replaceState(S,"",D),s&&u&&u({action:l,location:N.location,delta:0})}function C(O){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof O=="string"?O:jl(O);return v=v.replace(/ $/,"%20"),Ie(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let N={get action(){return l},get location(){return t(i,o)},listen(O){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ng,p),u=O,()=>{i.removeEventListener(Ng,p),u=null}},createHref(O){return e(i,O)},createURL:C,encodeLocation(O){let w=C(O);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:A,go(O){return o.go(O)}};return N}var Dg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dg||(Dg={}));function lR(t,e,n){return n===void 0&&(n="/"),uR(t,e,n)}function uR(t,e,n,r){let i=typeof e=="string"?as(e):e,s=Yi(i.pathname||"/",n);if(s==null)return null;let o=jw(t);cR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=ER(s);l=_R(o[u],c)}return l}function jw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ie(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ar([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),jw(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:yR(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of zw(s.path))i(s,o,u)}),e}function zw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=zw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function cR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hR=/^:[\w-]+$/,dR=3,fR=2,pR=1,mR=10,gR=-2,Og=t=>t==="*";function yR(t,e){let n=t.split("/"),r=n.length;return n.some(Og)&&(r+=gR),e&&(r+=fR),n.filter(i=>!Og(i)).reduce((i,s)=>i+(hR.test(s)?dR:s===""?pR:mR),r)}function vR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _R(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=Jh({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:ar([s,p.pathname]),pathnameBase:AR(ar([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=ar([s,p.pathnameBase]))}return o}function Jh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:m,isOptional:A}=f;if(m==="*"){let N=l[p]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const C=l[p];return A&&!C?c[m]=void 0:c[m]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function wR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Uw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ER(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Uw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Yi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function TR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?as(t):t;return{pathname:n?n.startsWith("/")?n:IR(n,e):e,search:RR(r),hash:CR(i)}}function IR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $c(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function SR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Bw(t,e){let n=SR(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $w(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=as(t):(i=Po({},t),Ie(!i.pathname||!i.pathname.includes("?"),$c("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),$c("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),$c("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=TR(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const ar=t=>t.join("/").replace(/\/\/+/g,"/"),AR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),RR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,CR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function PR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ww=["post","put","patch","delete"];new Set(Ww);const kR=["get",...Ww];new Set(kR);/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ko.apply(this,arguments)}const Au=z.createContext(null),Hw=z.createContext(null),Ir=z.createContext(null),Ru=z.createContext(null),ri=z.createContext({outlet:null,matches:[],isDataRoute:!1}),qw=z.createContext(null);function NR(t,e){let{relative:n}=e===void 0?{}:e;Go()||Ie(!1);let{basename:r,navigator:i}=z.useContext(Ir),{hash:s,pathname:o,search:l}=Cu(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:ar([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Go(){return z.useContext(Ru)!=null}function Qo(){return Go()||Ie(!1),z.useContext(Ru).location}function Kw(t){z.useContext(Ir).static||z.useLayoutEffect(t)}function Gw(){let{isDataRoute:t}=z.useContext(ri);return t?$R():xR()}function xR(){Go()||Ie(!1);let t=z.useContext(Au),{basename:e,future:n,navigator:r}=z.useContext(Ir),{matches:i}=z.useContext(ri),{pathname:s}=Qo(),o=JSON.stringify(Bw(i,n.v7_relativeSplatPath)),l=z.useRef(!1);return Kw(()=>{l.current=!0}),z.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=$w(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ar([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function Cu(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=z.useContext(Ir),{matches:i}=z.useContext(ri),{pathname:s}=Qo(),o=JSON.stringify(Bw(i,r.v7_relativeSplatPath));return z.useMemo(()=>$w(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function DR(t,e){return OR(t,e)}function OR(t,e,n,r){Go()||Ie(!1);let{navigator:i,static:s}=z.useContext(Ir),{matches:o}=z.useContext(ri),l=o[o.length-1],u=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let f=Qo(),p;if(e){var m;let w=typeof e=="string"?as(e):e;c==="/"||(m=w.pathname)!=null&&m.startsWith(c)||Ie(!1),p=w}else p=f;let A=p.pathname||"/",C=A;if(c!=="/"){let w=c.replace(/^\//,"").split("/");C="/"+A.replace(/^\//,"").split("/").slice(w.length).join("/")}let N=lR(t,{pathname:C}),O=FR(N&&N.map(w=>Object.assign({},w,{params:Object.assign({},u,w.params),pathname:ar([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:ar([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return e&&O?z.createElement(Ru.Provider,{value:{location:ko({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Yn.Pop}},O):O}function VR(){let t=BR(),e=PR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),n?z.createElement("pre",{style:i},n):null,null)}const LR=z.createElement(VR,null);class bR extends z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?z.createElement(ri.Provider,{value:this.props.routeContext},z.createElement(qw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function MR(t){let{routeContext:e,match:n,children:r}=t,i=z.useContext(Au);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(ri.Provider,{value:e},r)}function FR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Ie(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:m,errors:A}=n,C=p.route.loader&&m[p.route.id]===void 0&&(!A||A[p.route.id]===void 0);if(p.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let A,C=!1,N=null,O=null;n&&(A=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||LR,u&&(c<0&&m===0?(WR("route-fallback"),C=!0,O=null):c===m&&(C=!0,O=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),v=()=>{let S;return A?S=N:C?S=O:p.route.Component?S=z.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=f,z.createElement(MR,{match:p,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?z.createElement(bR,{location:n.location,revalidation:n.revalidation,component:N,error:A,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var Qw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Qw||{}),zl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(zl||{});function UR(t){let e=z.useContext(Au);return e||Ie(!1),e}function jR(t){let e=z.useContext(Hw);return e||Ie(!1),e}function zR(t){let e=z.useContext(ri);return e||Ie(!1),e}function Yw(t){let e=zR(),n=e.matches[e.matches.length-1];return n.route.id||Ie(!1),n.route.id}function BR(){var t;let e=z.useContext(qw),n=jR(zl.UseRouteError),r=Yw(zl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function $R(){let{router:t}=UR(Qw.UseNavigateStable),e=Yw(zl.UseNavigateStable),n=z.useRef(!1);return Kw(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ko({fromRouteId:e},s)))},[t,e])}const Vg={};function WR(t,e,n){Vg[t]||(Vg[t]=!0)}function HR(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Rt(t){Ie(!1)}function qR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Yn.Pop,navigator:s,static:o=!1,future:l}=t;Go()&&Ie(!1);let u=e.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:u,navigator:s,static:o,future:ko({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=as(r));let{pathname:f="/",search:p="",hash:m="",state:A=null,key:C="default"}=r,N=z.useMemo(()=>{let O=Yi(f,u);return O==null?null:{location:{pathname:O,search:p,hash:m,state:A,key:C},navigationType:i}},[u,f,p,m,A,C,i]);return N==null?null:z.createElement(Ir.Provider,{value:c},z.createElement(Ru.Provider,{children:n,value:N}))}function Xw(t){let{children:e,location:n}=t;return DR(Zh(e),n)}new Promise(()=>{});function Zh(t,e){e===void 0&&(e=[]);let n=[];return z.Children.forEach(t,(r,i)=>{if(!z.isValidElement(r))return;let s=[...e,i];if(r.type===z.Fragment){n.push.apply(n,Zh(r.props.children,s));return}r.type!==Rt&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Zh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bl.apply(this,arguments)}function Jw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function KR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function GR(t,e){return t.button===0&&(!e||e==="_self")&&!KR(t)}const QR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],YR=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],XR="6";try{window.__reactRouterVersion=XR}catch{}const JR=z.createContext({isTransitioning:!1}),ZR="startTransition",Lg=KI[ZR];function eC(t){let{basename:e,children:n,future:r,window:i}=t,s=z.useRef();s.current==null&&(s.current=sR({window:i,v5Compat:!0}));let o=s.current,[l,u]=z.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=z.useCallback(p=>{c&&Lg?Lg(()=>u(p)):u(p)},[u,c]);return z.useLayoutEffect(()=>o.listen(f),[o,f]),z.useEffect(()=>HR(r),[r]),z.createElement(qR,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const tC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zs=z.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:p}=e,m=Jw(e,QR),{basename:A}=z.useContext(Ir),C,N=!1;if(typeof c=="string"&&nC.test(c)&&(C=c,tC))try{let S=new URL(window.location.href),D=c.startsWith("//")?new URL(S.protocol+c):new URL(c),F=Yi(D.pathname,A);D.origin===S.origin&&F!=null?c=F+D.search+D.hash:N=!0}catch{}let O=NR(c,{relative:i}),w=iC(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function v(S){r&&r(S),S.defaultPrevented||w(S)}return z.createElement("a",Bl({},m,{href:C||O,onClick:N||s?r:v,ref:n,target:u}))}),Mr=z.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:f}=e,p=Jw(e,YR),m=Cu(u,{relative:p.relative}),A=Qo(),C=z.useContext(Hw),{navigator:N,basename:O}=z.useContext(Ir),w=C!=null&&sC(m)&&c===!0,v=N.encodeLocation?N.encodeLocation(m).pathname:m.pathname,S=A.pathname,D=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(S=S.toLowerCase(),D=D?D.toLowerCase():null,v=v.toLowerCase()),D&&O&&(D=Yi(D,O)||D);const F=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let U=S===v||!o&&S.startsWith(v)&&S.charAt(F)==="/",E=D!=null&&(D===v||!o&&D.startsWith(v)&&D.charAt(v.length)==="/"),y={isActive:U,isPending:E,isTransitioning:w},_=U?r:void 0,T;typeof s=="function"?T=s(y):T=[s,U?"active":null,E?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(y):l;return z.createElement(zs,Bl({},p,{"aria-current":_,className:T,ref:n,style:R,to:u,viewTransition:c}),typeof f=="function"?f(y):f)});var ed;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ed||(ed={}));var bg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bg||(bg={}));function rC(t){let e=z.useContext(Au);return e||Ie(!1),e}function iC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Gw(),c=Qo(),f=Cu(t,{relative:o});return z.useCallback(p=>{if(GR(p,n)){p.preventDefault();let m=r!==void 0?r:jl(c)===jl(f);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}function sC(t,e){e===void 0&&(e={});let n=z.useContext(JR);n==null&&Ie(!1);let{basename:r}=rC(ed.useViewTransitionState),i=Cu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Yi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Yi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Jh(i.pathname,o)!=null||Jh(i.pathname,s)!=null}var Zw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(s=i(s,r(l)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var l in s)e.call(s,l)&&s[l]&&(o=i(o,l));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Zw);var oC=Zw.exports;const aC=Rv(oC),lC=["as","disabled"];function uC(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function cC(t){return!t||t.trim()==="#"}function eE({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:l=0,type:u}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:u||"button",disabled:e},c];const f=m=>{if((e||t==="a"&&cC(n))&&m.preventDefault(),e){m.stopPropagation();return}o==null||o(m)},p=m=>{m.key===" "&&(m.preventDefault(),f(m))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:l,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:f,onKeyDown:p},c]}const hC=z.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=uC(t,lC);const[s,{tagName:o}]=eE(Object.assign({tagName:n,disabled:r},i));return x.jsx(o,Object.assign({},i,s,{ref:e}))});hC.displayName="Button";const dC=["xxl","xl","lg","md","sm","xs"],fC="xs",tE=z.createContext({prefixes:{},breakpoints:dC,minBreakpoint:fC}),{Consumer:hL,Provider:dL}=tE;function pC(t,e){const{prefixes:n}=z.useContext(tE);return t||n[e]||e}const $l=z.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:o,...l},u)=>{const c=pC(e,"btn"),[f,{tagName:p}]=eE({tagName:t,disabled:s,...l}),m=p;return x.jsx(m,{...f,...l,ref:u,disabled:s,className:aC(o,c,i&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,l.href&&s&&"disabled")})});$l.displayName="Button";const mC=()=>{};var Mg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,A=c&63;u||(A=64,o||(m=64)),r.push(n[f],n[p],n[m],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new yC;const m=s<<2|l>>4;if(r.push(m),c!==64){const A=l<<4&240|c>>2;if(r.push(A),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vC=function(t){const e=nE(t);return rE.encodeByteArray(e,!0)},Wl=function(t){return vC(t).replace(/\./g,"")},iE=function(t){try{return rE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=()=>_C().__FIREBASE_DEFAULTS__,EC=()=>{if(typeof process>"u"||typeof Mg>"u")return;const t=Mg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&iE(t[1]);return e&&JSON.parse(e)},Pu=()=>{try{return mC()||wC()||EC()||TC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sE=t=>{var e,n;return(n=(e=Pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},IC=t=>{const e=sE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},oE=()=>{var t;return(t=Pu())===null||t===void 0?void 0:t.config},aE=t=>{var e;return(e=Pu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wl(JSON.stringify(n)),Wl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function CC(){var t;const e=(t=Pu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NC(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xC(){return!CC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uE(){try{return typeof indexedDB=="object"}catch{return!1}}function cE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function DC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OC,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ii.prototype.create)}}class ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?VC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,l,r)}}function VC(t,e){return t.replace(LC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LC=/\{\$([^}]+)}/g;function bC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Fg(s)&&Fg(o)){if(!Gr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function MC(t,e){const n=new FC(t,e);return n.subscribe.bind(n)}class FC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wc),i.error===void 0&&(i.error=Wc),i.complete===void 0&&(i.complete=Wc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=1e3,zC=2,BC=4*60*60*1e3,$C=.5;function Ug(t,e=jC,n=zC){const r=e*Math.pow(n,t),i=Math.round($C*r*(Math.random()-.5)*2);return Math.min(BC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return t&&t._delegate?t._delegate:t}class qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new SC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qC(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HC(t){return t===Or?void 0:t}function qC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const GC={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},QC=te.INFO,YC={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},XC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ku{constructor(e){this.name=e,this._logLevel=QC,this._logHandler=XC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const JC=(t,e)=>e.some(n=>t instanceof n);let jg,zg;function ZC(){return jg||(jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eP(){return zg||(zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hE=new WeakMap,td=new WeakMap,dE=new WeakMap,Hc=new WeakMap,If=new WeakMap;function tP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hE.set(n,t)}).catch(()=>{}),If.set(e,t),e}function nP(t){if(td.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});td.set(t,e)}let nd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return td.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rP(t){nd=t(nd)}function iP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qc(this),e,...n);return dE.set(r,e.sort?e.sort():[e]),lr(r)}:eP().includes(t)?function(...e){return t.apply(qc(this),e),lr(hE.get(this))}:function(...e){return lr(t.apply(qc(this),e))}}function sP(t){return typeof t=="function"?iP(t):(t instanceof IDBTransaction&&nP(t),JC(t,ZC())?new Proxy(t,nd):t)}function lr(t){if(t instanceof IDBRequest)return tP(t);if(Hc.has(t))return Hc.get(t);const e=sP(t);return e!==t&&(Hc.set(t,e),If.set(e,t)),e}const qc=t=>If.get(t);function fE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(lr(o.result),u.oldVersion,u.newVersion,lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const oP=["get","getKey","getAll","getAllKeys","count"],aP=["put","add","delete","clear"],Kc=new Map;function Bg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kc.get(e))return Kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=aP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Kc.set(e,s),s}rP(t=>({...t,get:(e,n,r)=>Bg(e,n)||t.get(e,n,r),has:(e,n)=>!!Bg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rd="@firebase/app",$g="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new ku("@firebase/app"),cP="@firebase/app-compat",hP="@firebase/analytics-compat",dP="@firebase/analytics",fP="@firebase/app-check-compat",pP="@firebase/app-check",mP="@firebase/auth",gP="@firebase/auth-compat",yP="@firebase/database",vP="@firebase/data-connect",_P="@firebase/database-compat",wP="@firebase/functions",EP="@firebase/functions-compat",TP="@firebase/installations",IP="@firebase/installations-compat",SP="@firebase/messaging",AP="@firebase/messaging-compat",RP="@firebase/performance",CP="@firebase/performance-compat",PP="@firebase/remote-config",kP="@firebase/remote-config-compat",NP="@firebase/storage",xP="@firebase/storage-compat",DP="@firebase/firestore",OP="@firebase/vertexai",VP="@firebase/firestore-compat",LP="firebase",bP="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="[DEFAULT]",MP={[rd]:"fire-core",[cP]:"fire-core-compat",[dP]:"fire-analytics",[hP]:"fire-analytics-compat",[pP]:"fire-app-check",[fP]:"fire-app-check-compat",[mP]:"fire-auth",[gP]:"fire-auth-compat",[yP]:"fire-rtdb",[vP]:"fire-data-connect",[_P]:"fire-rtdb-compat",[wP]:"fire-fn",[EP]:"fire-fn-compat",[TP]:"fire-iid",[IP]:"fire-iid-compat",[SP]:"fire-fcm",[AP]:"fire-fcm-compat",[RP]:"fire-perf",[CP]:"fire-perf-compat",[PP]:"fire-rc",[kP]:"fire-rc-compat",[NP]:"fire-gcs",[xP]:"fire-gcs-compat",[DP]:"fire-fst",[VP]:"fire-fst-compat",[OP]:"fire-vertex","fire-js":"fire-js",[LP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map,FP=new Map,sd=new Map;function Wg(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if(sd.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;sd.set(e,t);for(const n of No.values())Wg(n,t);for(const n of FP.values())Wg(n,t);return!0}function Xo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new ii("app","Firebase",UP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=bP;function pE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:id,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(n||(n=oE()),!n)throw ur.create("no-options");const s=No.get(i);if(s){if(Gr(n,s.options)&&Gr(r,s.config))return s;throw ur.create("duplicate-app",{appName:i})}const o=new KC(i);for(const u of sd.values())o.addComponent(u);const l=new jP(n,r,o);return No.set(i,l),l}function mE(t=id){const e=No.get(t);if(!e&&t===id&&oE())return pE();if(!e)throw ur.create("no-app",{appName:t});return e}function Hg(){return Array.from(No.values())}function xt(t,e,n){var r;let i=(r=MP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(l.join(" "));return}an(new qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="firebase-heartbeat-database",BP=1,xo="firebase-heartbeat-store";let Gc=null;function gE(){return Gc||(Gc=fE(zP,BP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),Gc}async function $P(t){try{const n=(await gE()).transaction(xo),r=await n.objectStore(xo).get(yE(t));return await n.done,r}catch(e){if(e instanceof Qt)kn.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function qg(t,e){try{const r=(await gE()).transaction(xo,"readwrite");await r.objectStore(xo).put(e,yE(t)),await r.done}catch(n){if(n instanceof Qt)kn.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function yE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=1024,HP=30;class qP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Kg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>HP){const o=QP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kg(),{heartbeatsToSend:r,unsentEntries:i}=KP(this._heartbeatsCache.heartbeats),s=Wl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return kn.warn(n),""}}}function Kg(){return new Date().toISOString().substring(0,10)}function KP(t,e=WP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uE()?cE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $P(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gg(t){return Wl(JSON.stringify({version:2,heartbeats:t})).length}function QP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t){an(new qt("platform-logger",e=>new lP(e),"PRIVATE")),an(new qt("heartbeat",e=>new qP(e),"PRIVATE")),xt(rd,$g,t),xt(rd,$g,"esm2017"),xt("fire-js","")}YP("");function Sf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function vE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XP=vE,_E=new ii("auth","Firebase",vE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new ku("@firebase/auth");function JP(t,...e){Hl.logLevel<=te.WARN&&Hl.warn(`Auth (${ls}): ${t}`,...e)}function ol(t,...e){Hl.logLevel<=te.ERROR&&Hl.error(`Auth (${ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw Af(t,...e)}function nn(t,...e){return Af(t,...e)}function wE(t,e,n){const r=Object.assign(Object.assign({},XP()),{[e]:n});return new ii("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return wE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Af(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _E.create(t,...e)}function K(t,e,...n){if(!t)throw Af(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ol(e),new Error(e)}function Nn(t,e){t||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZP(){return Qg()==="http:"||Qg()==="https:"}function Qg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZP()||lE()||"connection"in navigator)?navigator.onLine:!0}function tk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=RC()||kC()}get(){return ek()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ik=new Jo(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ar(t,e,n,r,i={}){return TE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Yo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return PC()||(c.referrerPolicy="no-referrer"),EE.fetch()(await IE(t,t.config.apiHost,n,l),c)})}async function TE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nk),e);try{const i=new ok(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ba(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw wE(t,f,c);Kt(t,f)}}catch(i){if(i instanceof Qt)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function Zo(t,e,n,r,i={}){const s=await Ar(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function IE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Rf(t.config,i):`${t.config.apiScheme}://${i}`;return rk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function sk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ok{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),ik.get())})}}function Ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}function Yg(t){return t!==void 0&&t.enterprise!==void 0}class ak{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function lk(t,e){return Ar(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function ql(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ck(t,e=!1){const n=tt(t),r=await n.getIdToken(e),i=Cf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ro(Qc(i.auth_time)),issuedAtTime:ro(Qc(i.iat)),expirationTime:ro(Qc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qc(t){return Number(t)*1e3}function Cf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=iE(n);return i?JSON.parse(i):(ol("Failed to decode base64 JWT payload"),null)}catch(i){return ol("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xg(t){const e=Cf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&hk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Do(t,ql(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?SE(s.providerUserInfo):[],l=pk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ad(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function fk(t){const e=tt(t);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SE(t){return t.map(e=>{var{providerId:n}=e,r=Sf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e){const n=await TE(t,{},async()=>{const r=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await IE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",EE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gk(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Xg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ui;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Sf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ad(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Do(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ck(this,e)}reload(){return fk(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Do(this,uk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:D,isAnonymous:F,providerData:U,stsTokenManager:E}=n;K(S&&E,e,"internal-error");const y=Ui.fromJSON(this.name,E);K(typeof S=="string",e,"internal-error"),Fn(p,e.name),Fn(m,e.name),K(typeof D=="boolean",e,"internal-error"),K(typeof F=="boolean",e,"internal-error"),Fn(A,e.name),Fn(C,e.name),Fn(N,e.name),Fn(O,e.name),Fn(w,e.name),Fn(v,e.name);const _=new zt({uid:S,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:F,photoURL:C,phoneNumber:A,tenantId:N,stsTokenManager:y,createdAt:w,lastLoginAt:v});return U&&Array.isArray(U)&&(_.providerData=U.map(T=>Object.assign({},T))),O&&(_._redirectEventId=O),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ui;i.updateFromServerResponse(n);const s=new zt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?SE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ui;l.updateFromIdToken(r);const u=new zt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ad(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=new Map;function En(t){Nn(t instanceof Function,"Expected a class definition");let e=Jg.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AE.type="NONE";const Zg=AE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=al(this.userKey,i.apiKey,s),this.fullPersistenceKey=al("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ql(this.auth,{idToken:e}).catch(()=>{});return n?zt._fromGetAccountInfoResponse(this.auth,n,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(En(Zg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||En(Zg);const o=al(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const m=await ql(e,{idToken:f}).catch(()=>{});if(!m)break;p=await zt._fromGetAccountInfoResponse(e,m,f)}else p=zt._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ji(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ji(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xE(e))return"Blackberry";if(DE(e))return"Webos";if(CE(e))return"Safari";if((e.includes("chrome/")||PE(e))&&!e.includes("edge/"))return"Chrome";if(NE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RE(t=et()){return/firefox\//i.test(t)}function CE(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PE(t=et()){return/crios\//i.test(t)}function kE(t=et()){return/iemobile/i.test(t)}function NE(t=et()){return/android/i.test(t)}function xE(t=et()){return/blackberry/i.test(t)}function DE(t=et()){return/webos/i.test(t)}function Pf(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yk(t=et()){var e;return Pf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vk(){return NC()&&document.documentMode===10}function OE(t=et()){return Pf(t)||NE(t)||DE(t)||xE(t)||/windows phone/i.test(t)||kE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e=[]){let n;switch(t){case"Browser":n=ey(et());break;case"Worker":n=`${ey(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=6;class Tk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ek,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ty(this),this.idTokenSubscription=new ty(this),this.beforeStateQueue=new _k(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_E,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ql(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(In(this));const n=e?tt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wk(this),n=new Tk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&JP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function si(t){return tt(t)}class ty{constructor(e){this.auth=e,this.observer=null,this.addObserver=MC(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sk(t){Nu=t}function LE(t){return Nu.loadJS(t)}function Ak(){return Nu.recaptchaEnterpriseScript}function Rk(){return Nu.gapiScript}function Ck(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Pk{constructor(){this.enterprise=new kk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class kk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Nk="recaptcha-enterprise",bE="NO_RECAPTCHA";class xk{constructor(e){this.type=Nk,this.auth=si(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{lk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new ak(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Yg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(bE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Pk().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Yg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Ak();u.length!==0&&(u+=l),LE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function ny(t,e,n,r=!1,i=!1){const s=new xk(t);let o;if(i)o=bE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ld(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ny(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ny(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t,e){const n=Xo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gr(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function Ok(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Vk(t,e,n){const r=si(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ME(e),{host:o,port:l}=Lk(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(Gr(c,r.config.emulator)&&Gr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,bk()}function ME(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Lk(t){const e=ME(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ry(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ry(o)}}}function ry(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function Mk(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t,e){return Zo(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function jk(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends kf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ld(e,n,"signInWithPassword",Fk);case"emailLink":return Uk(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ld(e,r,"signUpPassword",Mk);case"emailLink":return jk(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e){return Zo(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="http://localhost";class Qr extends kf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Sf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:zk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $k(t){const e=Bs($s(t)).link,n=e?Bs($s(e)).deep_link_id:null,r=Bs($s(t)).deep_link_id;return(r?Bs($s(r)).link:null)||r||n||e||t}class Nf{constructor(e){var n,r,i,s,o,l;const u=Bs($s(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=Bk((i=u.mode)!==null&&i!==void 0?i:null);K(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=$k(e);try{return new Nf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,n){return Oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nf.parseLink(n);return K(r,"argument-error"),Oo._fromEmailAndCode(e,r.code,r.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends FE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ea{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends ea{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ea{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){return Zo(t,"POST","/v1/accounts:signUp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zt._fromIdTokenResponse(e,r,i),o=iy(r);return new Yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=iy(r);return new Yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function iy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Qt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gl(e,n,r,i)}}function UE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(t,s,e,r):s})}async function Hk(t,e,n=!1){const r=await Do(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(t,e,n=!1){const{auth:r}=t;if(Ct(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await Do(t,UE(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Cf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e,n=!1){if(Ct(t.app))return Promise.reject(In(t));const r="signIn",i=await UE(t,r,e),s=await Yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Kk(t,e){return jE(si(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(t){const e=si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Gk(t,e,n){if(Ct(t.app))return Promise.reject(In(t));const r=si(t),o=await ld(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wk).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&zE(t),u}),l=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Qk(t,e,n){return Ct(t.app)?Promise.reject(In(t)):Kk(tt(t),us.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zE(t),r})}function Yk(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function Xk(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function Jk(t){return tt(t).signOut()}const Ql="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ql,"1"),this.storage.removeItem(Ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=1e3,e1=10;class $E extends BE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=OE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,e1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Zk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$E.type="LOCAL";const t1=$E;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE extends BE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}WE.type="SESSION";const HE=WE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await n1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=xf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function i1(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function s1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function a1(){return qE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="firebaseLocalStorageDb",l1=1,Yl="firebaseLocalStorage",GE="fbase_key";class ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Du(t,e){return t.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function u1(){const t=indexedDB.deleteDatabase(KE);return new ta(t).toPromise()}function ud(){const t=indexedDB.open(KE,l1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yl,{keyPath:GE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yl)?e(r):(r.close(),await u1(),e(await ud()))})})}async function sy(t,e,n){const r=Du(t,!0).put({[GE]:e,value:n});return new ta(r).toPromise()}async function c1(t,e){const n=Du(t,!1).get(e),r=await new ta(n).toPromise();return r===void 0?null:r.value}function oy(t,e){const n=Du(t,!0).delete(e);return new ta(n).toPromise()}const h1=800,d1=3;class QE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ud(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>d1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xu._getInstance(a1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await s1(),!this.activeServiceWorker)return;this.sender=new r1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||o1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ud();return await sy(e,Ql,"1"),await oy(e,Ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>c1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>oy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Du(i,!1).getAll();return new ta(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}QE.type="LOCAL";const f1=QE;new Jo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t,e){return e?En(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df extends kf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function m1(t){return jE(t.auth,new Df(t),t.bypassAuthState)}function g1(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),qk(n,new Df(t),t.bypassAuthState)}async function y1(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Hk(n,new Df(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return m1;case"linkViaPopup":case"linkViaRedirect":return y1;case"reauthViaPopup":case"reauthViaRedirect":return g1;default:Kt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=new Jo(2e3,1e4);class Di extends YE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Di.currentPopupAction&&Di.currentPopupAction.cancel(),Di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=xf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,v1.get())};e()}}Di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1="pendingRedirect",ll=new Map;class w1 extends YE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ll.get(this.auth._key());if(!e){try{const r=await E1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ll.set(this.auth._key(),e)}return this.bypassAuthState||ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function E1(t,e){const n=S1(e),r=I1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function T1(t,e){ll.set(t._key(),e)}function I1(t){return En(t._redirectPersistence)}function S1(t){return al(_1,t.config.apiKey,t.name)}async function A1(t,e,n=!1){if(Ct(t.app))return Promise.reject(In(t));const r=si(t),i=p1(r,e),o=await new w1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=10*60*1e3;class C1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!P1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!XE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=R1&&this.cachedEventUids.clear(),this.cachedEventUids.has(ay(e))}saveEventToCache(e){this.cachedEventUids.add(ay(e)),this.lastProcessedEventTime=Date.now()}}function ay(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function XE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function P1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return XE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,x1=/^https?/;async function D1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await k1(t);for(const n of e)try{if(O1(n))return}catch{}Kt(t,"unauthorized-domain")}function O1(t){const e=od(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!x1.test(n))return!1;if(N1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=new Jo(3e4,6e4);function ly(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function L1(t){return new Promise((e,n)=>{var r,i,s;function o(){ly(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ly(),n(nn(t,"network-request-failed"))},timeout:V1.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const l=Ck("iframefcb");return rn()[l]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},LE(`${Rk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ul=null,e})}let ul=null;function b1(t){return ul=ul||L1(t),ul}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=new Jo(5e3,15e3),F1="__/auth/iframe",U1="emulator/auth/iframe",j1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B1(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rf(e,U1):`https://${t.config.authDomain}/${F1}`,r={apiKey:e.apiKey,appName:t.name,v:ls},i=z1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yo(r).slice(1)}`}async function $1(t){const e=await b1(t),n=rn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:B1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:j1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),l=rn().setTimeout(()=>{s(o)},M1.get());function u(){rn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},H1=500,q1=600,K1="_blank",G1="http://localhost";class uy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Q1(t,e,n,r=H1,i=q1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},W1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=et().toLowerCase();n&&(l=PE(c)?K1:n),RE(c)&&(e=e||G1,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[A,C])=>`${m}${A}=${C},`,"");if(yk(c)&&l!=="_self")return Y1(e||"",l),new uy(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new uy(p)}function Y1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="__/auth/handler",J1="emulator/auth/handler",Z1=encodeURIComponent("fac");async function cy(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:i};if(e instanceof FE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ea){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${Z1}=${encodeURIComponent(u)}`:"";return`${eN(t)}?${Yo(l).slice(1)}${c}`}function eN({config:t}){return t.emulator?Rf(t,J1):`https://${t.authDomain}/${X1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="webStorageSupport";class tN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=HE,this._completeRedirectFn=A1,this._overrideRedirectResult=T1}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await cy(e,n,r,od(),i);return Q1(e,o,xf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await cy(e,n,r,od(),i);return i1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $1(e),r=new C1(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yc,{type:Yc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yc];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return OE()||CE()||Pf()}}const nN=tN;var hy="@firebase/auth",dy="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sN(t){an(new qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VE(t)},c=new Ik(r,i,s,u);return Ok(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),an(new qt("auth-internal",e=>{const n=si(e.getProvider("auth").getImmediate());return(r=>new rN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(hy,dy,iN(t)),xt(hy,dy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=5*60,aN=aE("authIdTokenMaxAge")||oN;let fy=null;const lN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aN)return;const i=n==null?void 0:n.token;fy!==i&&(fy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Of(t=mE()){const e=Xo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Dk(t,{popupRedirectResolver:nN,persistence:[f1,t1,HE]}),r=aE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=lN(s.toString());Xk(n,o,()=>o(n.currentUser)),Yk(n,l=>o(l))}}const i=sE("auth");return i&&Vk(n,`http://${i}`),n}function uN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Sk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sN("Browser");var cN="firebase",hN="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(cN,hN,"app");var py=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cr,JE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function _(){}_.prototype=y.prototype,E.D=y.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(T,R,k){for(var I=Array(arguments.length-2),It=2;It<arguments.length;It++)I[It-2]=arguments[It];return y.prototype[R].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,_){_||(_=0);var T=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)T[R]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(R=0;16>R;++R)T[R]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=E.g[0],_=E.g[1],R=E.g[2];var k=E.g[3],I=y+(k^_&(R^k))+T[0]+3614090360&4294967295;y=_+(I<<7&4294967295|I>>>25),I=k+(R^y&(_^R))+T[1]+3905402710&4294967295,k=y+(I<<12&4294967295|I>>>20),I=R+(_^k&(y^_))+T[2]+606105819&4294967295,R=k+(I<<17&4294967295|I>>>15),I=_+(y^R&(k^y))+T[3]+3250441966&4294967295,_=R+(I<<22&4294967295|I>>>10),I=y+(k^_&(R^k))+T[4]+4118548399&4294967295,y=_+(I<<7&4294967295|I>>>25),I=k+(R^y&(_^R))+T[5]+1200080426&4294967295,k=y+(I<<12&4294967295|I>>>20),I=R+(_^k&(y^_))+T[6]+2821735955&4294967295,R=k+(I<<17&4294967295|I>>>15),I=_+(y^R&(k^y))+T[7]+4249261313&4294967295,_=R+(I<<22&4294967295|I>>>10),I=y+(k^_&(R^k))+T[8]+1770035416&4294967295,y=_+(I<<7&4294967295|I>>>25),I=k+(R^y&(_^R))+T[9]+2336552879&4294967295,k=y+(I<<12&4294967295|I>>>20),I=R+(_^k&(y^_))+T[10]+4294925233&4294967295,R=k+(I<<17&4294967295|I>>>15),I=_+(y^R&(k^y))+T[11]+2304563134&4294967295,_=R+(I<<22&4294967295|I>>>10),I=y+(k^_&(R^k))+T[12]+1804603682&4294967295,y=_+(I<<7&4294967295|I>>>25),I=k+(R^y&(_^R))+T[13]+4254626195&4294967295,k=y+(I<<12&4294967295|I>>>20),I=R+(_^k&(y^_))+T[14]+2792965006&4294967295,R=k+(I<<17&4294967295|I>>>15),I=_+(y^R&(k^y))+T[15]+1236535329&4294967295,_=R+(I<<22&4294967295|I>>>10),I=y+(R^k&(_^R))+T[1]+4129170786&4294967295,y=_+(I<<5&4294967295|I>>>27),I=k+(_^R&(y^_))+T[6]+3225465664&4294967295,k=y+(I<<9&4294967295|I>>>23),I=R+(y^_&(k^y))+T[11]+643717713&4294967295,R=k+(I<<14&4294967295|I>>>18),I=_+(k^y&(R^k))+T[0]+3921069994&4294967295,_=R+(I<<20&4294967295|I>>>12),I=y+(R^k&(_^R))+T[5]+3593408605&4294967295,y=_+(I<<5&4294967295|I>>>27),I=k+(_^R&(y^_))+T[10]+38016083&4294967295,k=y+(I<<9&4294967295|I>>>23),I=R+(y^_&(k^y))+T[15]+3634488961&4294967295,R=k+(I<<14&4294967295|I>>>18),I=_+(k^y&(R^k))+T[4]+3889429448&4294967295,_=R+(I<<20&4294967295|I>>>12),I=y+(R^k&(_^R))+T[9]+568446438&4294967295,y=_+(I<<5&4294967295|I>>>27),I=k+(_^R&(y^_))+T[14]+3275163606&4294967295,k=y+(I<<9&4294967295|I>>>23),I=R+(y^_&(k^y))+T[3]+4107603335&4294967295,R=k+(I<<14&4294967295|I>>>18),I=_+(k^y&(R^k))+T[8]+1163531501&4294967295,_=R+(I<<20&4294967295|I>>>12),I=y+(R^k&(_^R))+T[13]+2850285829&4294967295,y=_+(I<<5&4294967295|I>>>27),I=k+(_^R&(y^_))+T[2]+4243563512&4294967295,k=y+(I<<9&4294967295|I>>>23),I=R+(y^_&(k^y))+T[7]+1735328473&4294967295,R=k+(I<<14&4294967295|I>>>18),I=_+(k^y&(R^k))+T[12]+2368359562&4294967295,_=R+(I<<20&4294967295|I>>>12),I=y+(_^R^k)+T[5]+4294588738&4294967295,y=_+(I<<4&4294967295|I>>>28),I=k+(y^_^R)+T[8]+2272392833&4294967295,k=y+(I<<11&4294967295|I>>>21),I=R+(k^y^_)+T[11]+1839030562&4294967295,R=k+(I<<16&4294967295|I>>>16),I=_+(R^k^y)+T[14]+4259657740&4294967295,_=R+(I<<23&4294967295|I>>>9),I=y+(_^R^k)+T[1]+2763975236&4294967295,y=_+(I<<4&4294967295|I>>>28),I=k+(y^_^R)+T[4]+1272893353&4294967295,k=y+(I<<11&4294967295|I>>>21),I=R+(k^y^_)+T[7]+4139469664&4294967295,R=k+(I<<16&4294967295|I>>>16),I=_+(R^k^y)+T[10]+3200236656&4294967295,_=R+(I<<23&4294967295|I>>>9),I=y+(_^R^k)+T[13]+681279174&4294967295,y=_+(I<<4&4294967295|I>>>28),I=k+(y^_^R)+T[0]+3936430074&4294967295,k=y+(I<<11&4294967295|I>>>21),I=R+(k^y^_)+T[3]+3572445317&4294967295,R=k+(I<<16&4294967295|I>>>16),I=_+(R^k^y)+T[6]+76029189&4294967295,_=R+(I<<23&4294967295|I>>>9),I=y+(_^R^k)+T[9]+3654602809&4294967295,y=_+(I<<4&4294967295|I>>>28),I=k+(y^_^R)+T[12]+3873151461&4294967295,k=y+(I<<11&4294967295|I>>>21),I=R+(k^y^_)+T[15]+530742520&4294967295,R=k+(I<<16&4294967295|I>>>16),I=_+(R^k^y)+T[2]+3299628645&4294967295,_=R+(I<<23&4294967295|I>>>9),I=y+(R^(_|~k))+T[0]+4096336452&4294967295,y=_+(I<<6&4294967295|I>>>26),I=k+(_^(y|~R))+T[7]+1126891415&4294967295,k=y+(I<<10&4294967295|I>>>22),I=R+(y^(k|~_))+T[14]+2878612391&4294967295,R=k+(I<<15&4294967295|I>>>17),I=_+(k^(R|~y))+T[5]+4237533241&4294967295,_=R+(I<<21&4294967295|I>>>11),I=y+(R^(_|~k))+T[12]+1700485571&4294967295,y=_+(I<<6&4294967295|I>>>26),I=k+(_^(y|~R))+T[3]+2399980690&4294967295,k=y+(I<<10&4294967295|I>>>22),I=R+(y^(k|~_))+T[10]+4293915773&4294967295,R=k+(I<<15&4294967295|I>>>17),I=_+(k^(R|~y))+T[1]+2240044497&4294967295,_=R+(I<<21&4294967295|I>>>11),I=y+(R^(_|~k))+T[8]+1873313359&4294967295,y=_+(I<<6&4294967295|I>>>26),I=k+(_^(y|~R))+T[15]+4264355552&4294967295,k=y+(I<<10&4294967295|I>>>22),I=R+(y^(k|~_))+T[6]+2734768916&4294967295,R=k+(I<<15&4294967295|I>>>17),I=_+(k^(R|~y))+T[13]+1309151649&4294967295,_=R+(I<<21&4294967295|I>>>11),I=y+(R^(_|~k))+T[4]+4149444226&4294967295,y=_+(I<<6&4294967295|I>>>26),I=k+(_^(y|~R))+T[11]+3174756917&4294967295,k=y+(I<<10&4294967295|I>>>22),I=R+(y^(k|~_))+T[2]+718787259&4294967295,R=k+(I<<15&4294967295|I>>>17),I=_+(k^(R|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+k&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var _=y-this.blockSize,T=this.B,R=this.h,k=0;k<y;){if(R==0)for(;k<=_;)i(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<y;)if(T[R++]=E.charCodeAt(k++),R==this.blockSize){i(this,T),R=0;break}}else for(;k<y;)if(T[R++]=E[k++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var _=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=_&255,_/=256;for(this.u(E),E=Array(16),y=_=0;4>y;++y)for(var T=0;32>T;T+=8)E[_++]=this.g[y]>>>T&255;return E};function s(E,y){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=y(E)}function o(E,y){this.h=y;for(var _=[],T=!0,R=E.length-1;0<=R;R--){var k=E[R]|0;T&&k==y||(_[R]=k,T=!1)}this.g=_}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return O(c(-E));for(var y=[],_=1,T=0;E>=_;T++)y[T]=E/_|0,_*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return O(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=c(Math.pow(y,8)),T=p,R=0;R<E.length;R+=8){var k=Math.min(8,E.length-R),I=parseInt(E.substring(R,R+k),y);8>k?(k=c(Math.pow(y,k)),T=T.j(k).add(c(I))):(T=T.j(_),T=T.add(c(I)))}return T}var p=u(0),m=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var E=0,y=1,_=0;_<this.g.length;_++){var T=this.i(_);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(N(this))return"-"+O(this).toString(E);for(var y=c(Math.pow(E,6)),_=this,T="";;){var R=D(_,y).g;_=w(_,R.j(y));var k=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=R,C(_))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=w(this,E),N(E)?-1:C(E)?0:1};function O(E){for(var y=E.g.length,_=[],T=0;T<y;T++)_[T]=~E.g[T];return new o(_,~E.h).add(m)}t.abs=function(){return N(this)?O(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),_=[],T=0,R=0;R<=y;R++){var k=T+(this.i(R)&65535)+(E.i(R)&65535),I=(k>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);T=I>>>16,k&=65535,I&=65535,_[R]=I<<16|k}return new o(_,_[_.length-1]&-2147483648?-1:0)};function w(E,y){return E.add(O(y))}t.j=function(E){if(C(this)||C(E))return p;if(N(this))return N(E)?O(this).j(O(E)):O(O(this).j(E));if(N(E))return O(this.j(O(E)));if(0>this.l(A)&&0>E.l(A))return c(this.m()*E.m());for(var y=this.g.length+E.g.length,_=[],T=0;T<2*y;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<E.g.length;R++){var k=this.i(T)>>>16,I=this.i(T)&65535,It=E.i(R)>>>16,Rr=E.i(R)&65535;_[2*T+2*R]+=I*Rr,v(_,2*T+2*R),_[2*T+2*R+1]+=k*Rr,v(_,2*T+2*R+1),_[2*T+2*R+1]+=I*It,v(_,2*T+2*R+1),_[2*T+2*R+2]+=k*It,v(_,2*T+2*R+2)}for(T=0;T<y;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=y;T<2*y;T++)_[T]=0;return new o(_,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function S(E,y){this.g=E,this.h=y}function D(E,y){if(C(y))throw Error("division by zero");if(C(E))return new S(p,p);if(N(E))return y=D(O(E),y),new S(O(y.g),O(y.h));if(N(y))return y=D(E,O(y)),new S(O(y.g),y.h);if(30<E.g.length){if(N(E)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,T=y;0>=T.l(E);)_=F(_),T=F(T);var R=U(_,1),k=U(T,1);for(T=U(T,2),_=U(_,2);!C(T);){var I=k.add(T);0>=I.l(E)&&(R=R.add(_),k=I),T=U(T,1),_=U(_,1)}return y=w(E,R.j(y)),new S(R,y)}for(R=p;0<=E.l(y);){for(_=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=c(_),I=k.j(y);N(I)||0<I.l(E);)_-=T,k=c(_),I=k.j(y);C(k)&&(k=m),R=R.add(k),E=w(E,I)}return new S(R,E)}t.A=function(E){return D(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)&E.i(T);return new o(_,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)|E.i(T);return new o(_,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)^E.i(T);return new o(_,this.h^E.h)};function F(E){for(var y=E.g.length+1,_=[],T=0;T<y;T++)_[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(_,E.h)}function U(E,y){var _=y>>5;y%=32;for(var T=E.g.length-_,R=[],k=0;k<T;k++)R[k]=0<y?E.i(k+_)>>>y|E.i(k+_+1)<<32-y:E.i(k+_);return new o(R,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,JE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,cr=o}).apply(typeof py<"u"?py:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ZE,Ws,eT,cl,cd,tT,nT,rT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function A(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,V){for(var j=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)j[ue-2]=arguments[ue];return h.prototype[P].apply(g,j)}}function N(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const P=a.length||0,V=g.length||0;a.length=P+V;for(let j=0;j<V;j++)a[P+j]=g[j]}else a.push(g)}}class w{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var F=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function E(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let V=0;V<_.length;V++)d=_[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class It{constructor(){this.h=this.g=null}add(h,d){const g=Rr.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Rr=new w(()=>new ms,a=>a.reset());class ms{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let un,B=!1,Q=new It,J=()=>{const a=l.Promise.resolve(void 0);un=()=>{a.then(ge)}};var ge=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){k(d)}var h=Rr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var cn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function hn(a,h){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{D(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:dn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&hn.aa.h.call(this)}}C(hn,Se);var dn={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var fn="closure_listenable_"+(1e6*Math.random()|0),J0=0;function Z0(a,h,d,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=P,this.key=++J0,this.da=this.fa=!1}function oa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function aa(a){this.src=a,this.g={},this.h=0}aa.prototype.add=function(a,h,d,g,P){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var j=Qu(a,h,g,P);return-1<j?(h=a[j],d||(h.fa=!1)):(h=new Z0(h,this.src,V,!!g,P),h.fa=d,a.push(h)),h};function Gu(a,h){var d=h.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=P)&&Array.prototype.splice.call(g,P,1),V&&(oa(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Qu(a,h,d,g){for(var P=0;P<a.length;++P){var V=a[P];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==g)return P}return-1}var Yu="closure_lm_"+(1e6*Math.random()|0),Xu={};function Tp(a,h,d,g,P){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Tp(a,h[V],d,g,P);return null}return d=Ap(d),a&&a[fn]?a.K(h,d,c(g)?!!g.capture:!1,P):eI(a,h,d,!1,g,P)}function eI(a,h,d,g,P,V){if(!h)throw Error("Invalid event type");var j=c(P)?!!P.capture:!!P,ue=Zu(a);if(ue||(a[Yu]=ue=new aa(a)),d=ue.add(h,d,g,j,V),d.proxy)return d;if(g=tI(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)cn||(P=j),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(Sp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function tI(){function a(d){return h.call(a.src,a.listener,d)}const h=nI;return a}function Ip(a,h,d,g,P){if(Array.isArray(h))for(var V=0;V<h.length;V++)Ip(a,h[V],d,g,P);else g=c(g)?!!g.capture:!!g,d=Ap(d),a&&a[fn]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=Qu(V,d,g,P),-1<d&&(oa(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Zu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Qu(h,d,g,P)),(d=-1<a?h[a]:null)&&Ju(d))}function Ju(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[fn])Gu(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(Sp(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Zu(h))?(Gu(d,a),d.h==0&&(d.src=null,h[Yu]=null)):oa(a)}}}function Sp(a){return a in Xu?Xu[a]:Xu[a]="on"+a}function nI(a,h){if(a.da)a=!0;else{h=new hn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&Ju(a),a=d.call(g,h)}return a}function Zu(a){return a=a[Yu],a instanceof aa?a:null}var ec="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ap(a){return typeof a=="function"?a:(a[ec]||(a[ec]=function(h){return a.handleEvent(h)}),a[ec])}function We(){le.call(this),this.i=new aa(this),this.M=this,this.F=null}C(We,le),We.prototype[fn]=!0,We.prototype.removeEventListener=function(a,h,d,g){Ip(this,a,h,d,g)};function nt(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Se(h,a);else if(h instanceof Se)h.target=h.target||a;else{var P=h;h=new Se(g,a),T(h,P)}if(P=!0,d)for(var V=d.length-1;0<=V;V--){var j=h.g=d[V];P=la(j,g,!0,h)&&P}if(j=h.g=a,P=la(j,g,!0,h)&&P,P=la(j,g,!1,h)&&P,d)for(V=0;V<d.length;V++)j=h.g=d[V],P=la(j,g,!1,h)&&P}We.prototype.N=function(){if(We.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)oa(d[g]);delete a.g[h],a.h--}}this.F=null},We.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},We.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function la(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,V=0;V<h.length;++V){var j=h[V];if(j&&!j.da&&j.capture==d){var ue=j.listener,Me=j.ha||j.src;j.fa&&Gu(a.i,j),P=ue.call(Me,g)!==!1&&P}}return P&&!g.defaultPrevented}function Rp(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Cp(a){a.g=Rp(()=>{a.g=null,a.i&&(a.i=!1,Cp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class rI extends le{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Cp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(a){le.call(this),this.h=a,this.g={}}C(gs,le);var Pp=[];function kp(a){U(a.g,function(h,d){this.g.hasOwnProperty(d)&&Ju(h)},a),a.g={}}gs.prototype.N=function(){gs.aa.N.call(this),kp(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tc=l.JSON.stringify,iI=l.JSON.parse,sI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function nc(){}nc.prototype.h=null;function Np(a){return a.h||(a.h=a.i())}function xp(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rc(){Se.call(this,"d")}C(rc,Se);function ic(){Se.call(this,"c")}C(ic,Se);var Cr={},Dp=null;function ua(){return Dp=Dp||new We}Cr.La="serverreachability";function Op(a){Se.call(this,Cr.La,a)}C(Op,Se);function vs(a){const h=ua();nt(h,new Op(h))}Cr.STAT_EVENT="statevent";function Vp(a,h){Se.call(this,Cr.STAT_EVENT,a),this.stat=h}C(Vp,Se);function rt(a){const h=ua();nt(h,new Vp(h,a))}Cr.Ma="timingevent";function Lp(a,h){Se.call(this,Cr.Ma,a),this.size=h}C(Lp,Se);function _s(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ws(){this.g=!0}ws.prototype.xa=function(){this.g=!1};function oI(a,h,d,g,P,V){a.info(function(){if(a.g)if(V)for(var j="",ue=V.split("&"),Me=0;Me<ue.length;Me++){var se=ue[Me].split("=");if(1<se.length){var He=se[0];se=se[1];var qe=He.split("_");j=2<=qe.length&&qe[1]=="type"?j+(He+"="+se+"&"):j+(He+"=redacted&")}}else j=null;else j=V;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+d+`
`+j})}function aI(a,h,d,g,P,V,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+d+`
`+V+" "+j})}function hi(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+uI(a,d)+(g?" "+g:"")})}function lI(a,h){a.info(function(){return"TIMEOUT: "+h})}ws.prototype.info=function(){};function uI(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var V=P[0];if(V!="noop"&&V!="stop"&&V!="close")for(var j=1;j<P.length;j++)P[j]=""}}}}return tc(d)}catch{return h}}var ca={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sc;function ha(){}C(ha,nc),ha.prototype.g=function(){return new XMLHttpRequest},ha.prototype.i=function(){return{}},sc=new ha;function Vn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new gs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mp}function Mp(){this.i=null,this.g="",this.h=!1}var Fp={},oc={};function ac(a,h,d){a.L=1,a.v=ma(pn(h)),a.m=d,a.P=!0,Up(a,null)}function Up(a,h){a.F=Date.now(),da(a),a.A=pn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Zp(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Mp,a.g=ym(a.j,d?h:null,!a.m),0<a.O&&(a.M=new rI(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Pp[0]=P.toString()),P=Pp);for(var V=0;V<P.length;V++){var j=Tp(d,P[V],g||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),vs(),oI(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const h=this.M;h&&mn(a)==3?h.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const qe=mn(this.g);var h=this.g.Ba();const pi=this.g.Z();if(!(3>qe)&&(qe!=3||this.g&&(this.h.h||this.g.oa()||om(this.g)))){this.J||qe!=4||h==7||(h==8||0>=pi?vs(3):vs(2)),lc(this);var d=this.g.Z();this.X=d;t:if(jp(this)){var g=om(this.g);a="";var P=g.length,V=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),Es(this);var j="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==P-1)});g.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,aI(this.i,this.u,this.A,this.l,this.R,qe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Me=this.g;if((ue=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ue)){var se=ue;break t}}se=null}if(d=se)hi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uc(this,d);else{this.o=!1,this.s=3,rt(12),Pr(this),Es(this);break e}}if(this.P){d=!0;let Lt;for(;!this.J&&this.C<j.length;)if(Lt=cI(this,j),Lt==oc){qe==4&&(this.s=4,rt(14),d=!1),hi(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==Fp){this.s=4,rt(15),hi(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else hi(this.i,this.l,Lt,null),uc(this,Lt);if(jp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qe!=4||j.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)hi(this.i,this.l,j,"[Invalid Chunked Response]"),Pr(this),Es(this);else if(0<j.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),mc(He),He.M=!0,rt(11))}}else hi(this.i,this.l,j,null),uc(this,j);qe==4&&Pr(this),this.o&&!this.J&&(qe==4?fm(this.j,this):(this.o=!1,da(this)))}else CI(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Pr(this),Es(this)}}}catch{}finally{}};function jp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function cI(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?oc:(d=Number(h.substring(d,g)),isNaN(d)?Fp:(g+=1,g+d>h.length?oc:(h=h.slice(g,g+d),a.C=g+d,h)))}Vn.prototype.cancel=function(){this.J=!0,Pr(this)};function da(a){a.S=Date.now()+a.I,zp(a,a.I)}function zp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_s(m(a.ba,a),h)}function lc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(lI(this.i,this.A),this.L!=2&&(vs(),rt(17)),Pr(this),this.s=2,Es(this)):zp(this,this.S-a)};function Es(a){a.j.G==0||a.J||fm(a.j,a)}function Pr(a){lc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,kp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function uc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||cc(d.h,a))){if(!a.K&&cc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ea(d),_a(d);else break e;pc(d),rt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=_s(m(d.Za,d),6e3));if(1>=Wp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Nr(d,11)}else if((a.K||d.g==a)&&Ea(d),!v(h))for(P=d.Da.g.parse(h),h=0;h<P.length;h++){let se=P[h];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const He=se[3];He!=null&&(d.la=He,d.j.info("VER="+d.la));const qe=se[4];qe!=null&&(d.Aa=qe,d.j.info("SVER="+d.Aa));const pi=se[5];pi!=null&&typeof pi=="number"&&0<pi&&(g=1.5*pi,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Lt=a.g;if(Lt){const Ia=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ia){var V=g.h;V.g||Ia.indexOf("spdy")==-1&&Ia.indexOf("quic")==-1&&Ia.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(hc(V,V.h),V.h=null))}if(g.D){const gc=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;gc&&(g.ya=gc,he(g.I,g.D,gc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var j=a;if(g.qa=gm(g,g.J?g.ia:null,g.W),j.K){Hp(g.h,j);var ue=j,Me=g.L;Me&&(ue.I=Me),ue.B&&(lc(ue),da(ue)),g.g=j}else hm(g);0<d.i.length&&wa(d)}else se[0]!="stop"&&se[0]!="close"||Nr(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Nr(d,7):fc(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}vs(4)}catch{}}var hI=class{constructor(a,h){this.g=a,this.map=h}};function Bp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $p(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wp(a){return a.h?1:a.g?a.g.size:0}function cc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function hc(a,h){a.g?a.g.add(h):a.h=h}function Hp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Bp.prototype.cancel=function(){if(this.i=qp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return N(a.i)}function dI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function fI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Kp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=fI(a),g=dI(a),P=g.length,V=0;V<P;V++)h.call(void 0,g[V],d&&d[V],a)}var Gp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pI(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var V=a[d].substring(0,g);P=a[d].substring(g+1)}else V=a[d];h(V,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof kr){this.h=a.h,fa(this,a.j),this.o=a.o,this.g=a.g,pa(this,a.s),this.l=a.l;var h=a.i,d=new Ss;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Qp(this,d),this.m=a.m}else a&&(h=String(a).match(Gp))?(this.h=!1,fa(this,h[1]||"",!0),this.o=Ts(h[2]||""),this.g=Ts(h[3]||"",!0),pa(this,h[4]),this.l=Ts(h[5]||"",!0),Qp(this,h[6]||"",!0),this.m=Ts(h[7]||"")):(this.h=!1,this.i=new Ss(null,this.h))}kr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Is(h,Yp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Is(h,Yp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Is(d,d.charAt(0)=="/"?yI:gI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Is(d,_I)),a.join("")};function pn(a){return new kr(a)}function fa(a,h,d){a.j=d?Ts(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function pa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Qp(a,h,d){h instanceof Ss?(a.i=h,wI(a.i,a.h)):(d||(h=Is(h,vI)),a.i=new Ss(h,a.h))}function he(a,h,d){a.i.set(h,d)}function ma(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ts(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Is(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,mI),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function mI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Yp=/[#\/\?@]/g,gI=/[#\?:]/g,yI=/[#\?]/g,vI=/[#\?@]/g,_I=/#/g;function Ss(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ln(a){a.g||(a.g=new Map,a.h=0,a.i&&pI(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ss.prototype,t.add=function(a,h){Ln(this),this.i=null,a=di(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Xp(a,h){Ln(a),h=di(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Jp(a,h){return Ln(a),h=di(a,h),a.g.has(h)}t.forEach=function(a,h){Ln(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(h,P,g,this)},this)},this)},t.na=function(){Ln(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const P=a[g];for(let V=0;V<P.length;V++)d.push(h[g])}return d},t.V=function(a){Ln(this);let h=[];if(typeof a=="string")Jp(this,a)&&(h=h.concat(this.g.get(di(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Ln(this),this.i=null,a=di(this,a),Jp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Zp(a,h,d){Xp(a,h),0<d.length&&(a.i=null,a.g.set(di(a,h),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const V=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var P=V;j[g]!==""&&(P+="="+encodeURIComponent(String(j[g]))),a.push(P)}}return this.i=a.join("&")};function di(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function wI(a,h){h&&!a.j&&(Ln(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(Xp(this,g),Zp(this,P,d))},a)),a.j=h}function EI(a,h){const d=new ws;if(l.Image){const g=new Image;g.onload=A(bn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=A(bn,d,"TestLoadImage: error",!1,h,g),g.onabort=A(bn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=A(bn,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function TI(a,h){const d=new ws,g=new AbortController,P=setTimeout(()=>{g.abort(),bn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(P),V.ok?bn(d,"TestPingServer: ok",!0,h):bn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),bn(d,"TestPingServer: error",!1,h)})}function bn(a,h,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function II(){this.g=new sI}function SI(a,h,d){const g=d||"";try{Kp(a,function(P,V){let j=P;c(P)&&(j=tc(P)),h.push(g+V+"="+encodeURIComponent(j))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function ga(a){this.l=a.Ub||null,this.j=a.eb||!1}C(ga,nc),ga.prototype.g=function(){return new ya(this.l,this.j)},ga.prototype.i=function(a){return function(){return a}}({});function ya(a,h){We.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ya,We),t=ya.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Rs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,As(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;em(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function em(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?As(this):Rs(this),this.readyState==3&&em(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,As(this))},t.Qa=function(a){this.g&&(this.response=a,As(this))},t.ga=function(){this.g&&As(this)};function As(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Rs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Rs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function tm(a){let h="";return U(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function dc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=tm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,h,d))}function Ee(a){We.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ee,We);var AI=/^https?$/i,RI=["POST","PUT"];t=Ee.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sc.g(),this.v=this.o?Np(this.o):Np(sc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){nm(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(RI,h,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,j]of d)this.g.setRequestHeader(V,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sm(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){nm(this,V)}};function nm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,rm(a),va(a)}function rm(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),va(this,!0)),Ee.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?im(this):this.bb())},t.bb=function(){im(this)};function im(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mn(a)!=4||a.Z()!=2)){if(a.u&&mn(a)==4)Rp(a.Ea,0,a);else if(nt(a,"readystatechange"),mn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=j===0){var P=String(a.D).match(Gp)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!AI.test(P?P.toLowerCase():"")}d=g}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var V=2<mn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",rm(a)}}finally{va(a)}}}}function va(a,h){if(a.g){sm(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||nt(a,"ready");try{d.onreadystatechange=g}catch{}}}function sm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),iI(h)}};function om(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function CI(a){const h={};a=(a.g&&2<=mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var d=R(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[P]||[];h[P]=V,V.push(d)}E(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function am(a){this.Aa=0,this.i=[],this.j=new ws,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cs("baseRetryDelayMs",5e3,a),this.cb=Cs("retryDelaySeedMs",1e4,a),this.Wa=Cs("forwardChannelMaxRetries",2,a),this.wa=Cs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Bp(a&&a.concurrentRequestLimit),this.Da=new II,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=am.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){rt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=gm(this,null,this.W),wa(this)};function fc(a){if(lm(a),a.G==3){var h=a.U++,d=pn(a.I);if(he(d,"SID",a.K),he(d,"RID",h),he(d,"TYPE","terminate"),Ps(a,d),h=new Vn(a,a.j,h),h.L=2,h.v=ma(pn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=ym(h.j,null),h.g.ea(h.v)),h.F=Date.now(),da(h)}mm(a)}function _a(a){a.g&&(mc(a),a.g.cancel(),a.g=null)}function lm(a){_a(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ea(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function wa(a){if(!$p(a.h)&&!a.s){a.s=!0;var h=a.Ga;un||J(),B||(un(),B=!0),Q.add(h,a),a.B=0}}function PI(a,h){return Wp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_s(m(a.Ga,a,h),pm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Vn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(P.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=cm(this,P,h),d=pn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),Ps(this,d),V&&(this.O?h="headers="+encodeURIComponent(String(tm(V)))+"&"+h:this.m&&dc(d,this.m,V)),hc(this.h,P),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",h),he(d,"SID","null"),P.T=!0,ac(P,d,null)):ac(P,d,h),this.G=2}}else this.G==3&&(a?um(this,a):this.i.length==0||$p(this.h)||um(this))};function um(a,h){var d;h?d=h.l:d=a.U++;const g=pn(a.I);he(g,"SID",a.K),he(g,"RID",d),he(g,"AID",a.T),Ps(a,g),a.m&&a.o&&dc(g,a.m,a.o),d=new Vn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=cm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),hc(a.h,d),ac(d,g,h)}function Ps(a,h){a.H&&U(a.H,function(d,g){he(h,g,d)}),a.l&&Kp({},function(d,g){he(h,g,d)})}function cm(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let V=-1;for(;;){const j=["count="+d];V==-1?0<d?(V=P[0].g,j.push("ofs="+V)):V=0:j.push("ofs="+V);let ue=!0;for(let Me=0;Me<d;Me++){let se=P[Me].g;const He=P[Me].map;if(se-=V,0>se)V=Math.max(0,P[Me].g-100),ue=!1;else try{SI(He,j,"req"+se+"_")}catch{g&&g(He)}}if(ue){g=j.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function hm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;un||J(),B||(un(),B=!0),Q.add(h,a),a.v=0}}function pc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_s(m(a.Fa,a),pm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,dm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_s(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),_a(this),dm(this))};function mc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function dm(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=pn(a.qa);he(h,"RID","rpc"),he(h,"SID",a.K),he(h,"AID",a.T),he(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(h,"TO",a.ja),he(h,"TYPE","xmlhttp"),Ps(a,h),a.m&&a.o&&dc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ma(pn(h)),d.m=null,d.P=!0,Up(d,a)}t.Za=function(){this.C!=null&&(this.C=null,_a(this),pc(this),rt(19))};function Ea(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function fm(a,h){var d=null;if(a.g==h){Ea(a),mc(a),a.g=null;var g=2}else if(cc(a.h,h))d=h.D,Hp(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;g=ua(),nt(g,new Lp(g,d)),wa(a)}else hm(a);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&PI(a,h)||g==2&&pc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),P){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function pm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Nr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new kr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||fa(g,"https"),ma(g),P?EI(g.toString(),d):TI(g.toString(),d)}else rt(2);a.G=0,a.l&&a.l.sa(h),mm(a),lm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function mm(a){if(a.G=0,a.ka=[],a.l){const h=qp(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function gm(a,h,d){var g=d instanceof kr?pn(d):new kr(d);if(g.g!="")h&&(g.g=h+"."+g.g),pa(g,g.s);else{var P=l.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var V=new kr(null);g&&fa(V,g),h&&(V.g=h),P&&pa(V,P),d&&(V.l=d),g=V}return d=a.D,h=a.ya,d&&h&&he(g,d,h),he(g,"VER",a.la),Ps(a,g),g}function ym(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ee(new ga({eb:d})):new Ee(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vm(){}t=vm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ta(){}Ta.prototype.g=function(a,h){return new mt(a,h)};function mt(a,h){We.call(this),this.g=new am(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fi(this)}C(mt,We),mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){fc(this.g)},mt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=tc(a),a=d);h.i.push(new hI(h.Ya++,a)),h.G==3&&wa(h)},mt.prototype.N=function(){this.g.l=null,delete this.j,fc(this.g),delete this.g,mt.aa.N.call(this)};function _m(a){rc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(_m,rc);function wm(){ic.call(this),this.status=1}C(wm,ic);function fi(a){this.g=a}C(fi,vm),fi.prototype.ua=function(){nt(this.g,"a")},fi.prototype.ta=function(a){nt(this.g,new _m(a))},fi.prototype.sa=function(a){nt(this.g,new wm)},fi.prototype.ra=function(){nt(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,rT=function(){return new Ta},nT=function(){return ua()},tT=Cr,cd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ca.NO_ERROR=0,ca.TIMEOUT=8,ca.HTTP_ERROR=6,cl=ca,bp.COMPLETE="complete",eT=bp,xp.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",We.prototype.listen=We.prototype.K,Ws=xp,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,ZE=Ee}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});const my="@firebase/firestore",gy="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new ku("@firebase/firestore");function gi(){return Xr.logLevel}function $(t,...e){if(Xr.logLevel<=te.DEBUG){const n=e.map(Vf);Xr.debug(`Firestore (${cs}): ${t}`,...n)}}function xn(t,...e){if(Xr.logLevel<=te.ERROR){const n=e.map(Vf);Xr.error(`Firestore (${cs}): ${t}`,...n)}}function Xi(t,...e){if(Xr.logLevel<=te.WARN){const n=e.map(Vf);Xr.warn(`Firestore (${cs}): ${t}`,...n)}}function Vf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function oe(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class fN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pN{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Br,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new iT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Ye(e)}}class mN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class gN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new mN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yN{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ct(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new yy(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.R=n.token,new yy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=vN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function hd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return Z(r,i);{const s=sT(),o=_N(s.encode(vy(t,n)),s.encode(vy(e,n)));return o!==0?o:Z(r,i)}}n+=r>65535?2:1}return Z(t.length,e.length)}function vy(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function _N(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Z(t[n],e[n]);return Z(t.length,e.length)}function Ji(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=-62135596800,wy=1e6;class De{static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*wy);return new De(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<_y)throw new H(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wy}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-_y;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new De(0,0))}static max(){return new Y(new De(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="__name__";class Jt{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Jt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Z(e.length,n.length)}static compareSegments(e,n){const r=Jt.isNumericId(e),i=Jt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Jt.extractNumericId(e).compare(Jt.extractNumericId(n)):hd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cr.fromString(e.substring(4,e.length-2))}}class fe extends Jt{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const wN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends Jt{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return wN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ey}static keyField(){return new je([Ey])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(fe.fromString(e))}static fromName(e){return new q(fe.fromString(e).popFirst(5))}static empty(){return new q(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new fe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=-1;function EN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new pr(i,q.empty(),e)}function TN(t){return new pr(t.readTime,t.key,Vo)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(Y.min(),q.empty(),Vo)}static max(){return new pr(Y.max(),q.empty(),Vo)}}function IN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==SN)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function RN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ds(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ou.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=-1;function Vu(t){return t==null}function Xl(t){return t===0&&1/t==-1/0}function CN(t){return typeof t=="number"&&Number.isInteger(t)&&!Xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="";function PN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ty(e)),e=kN(t.get(n),e);return Ty(e)}function kN(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case aT:n+="";break;default:n+=s}}return n}function Ty(t){return t+aT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wa(this.root,e,this.comparator,!0)}}class Wa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sy(this.data.getIterator())}getIteratorFrom(e){return new Sy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class Sy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new Oe(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new uT("Invalid base64 string: "+s):s}}(e);return new $e(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const NN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(oe(!!t),typeof t=="string"){let e=0;const n=NN.exec(t);if(oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gr(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="server_timestamp",hT="__type__",dT="__previous_value__",fT="__local_write_time__";function bf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[hT])===null||n===void 0?void 0:n.stringValue)===cT}function Lu(t){const e=t.mapValue.fields[dT];return bf(e)?Lu(e):e}function Lo(t){const e=mr(t.mapValue.fields[fT].timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}const Jl="(default)";class bo{constructor(e,n){this.projectId=e,this.database=n||Jl}static empty(){return new bo("","")}get isDefaultDatabase(){return this.database===Jl}isEqual(e){return e instanceof bo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="__type__",DN="__max__",Ha={mapValue:{}},mT="__vector__",Zl="value";function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bf(t)?4:VN(t)?9007199254740991:ON(t)?10:11:G()}function ln(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lo(t).isEqual(Lo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mr(i.timestampValue),l=mr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return gr(i.bytesValue).isEqual(gr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?Xl(o)===Xl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ji(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Iy(o)!==Iy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!ln(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Mo(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function Zi(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ay(t.timestampValue,e.timestampValue);case 4:return Ay(Lo(t),Lo(e));case 5:return hd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=gr(s),u=gr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=Z(l[c],u[c]);if(f!==0)return f}return Z(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Z(Ae(s.latitude),Ae(o.latitude));return l!==0?l:Z(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ry(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},m=o.fields||{},A=(l=p[Zl])===null||l===void 0?void 0:l.arrayValue,C=(u=m[Zl])===null||u===void 0?void 0:u.arrayValue,N=Z(((c=A==null?void 0:A.values)===null||c===void 0?void 0:c.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Ry(A,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ha.mapValue&&o===Ha.mapValue)return 0;if(s===Ha.mapValue)return 1;if(o===Ha.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=hd(u[p],f[p]);if(m!==0)return m;const A=Zi(l[u[p]],c[f[p]]);if(A!==0)return A}return Z(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function Ay(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=mr(t),r=mr(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Ry(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Zi(n[i],r[i]);if(s)return s}return Z(n.length,r.length)}function es(t){return dd(t)}function dd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dd(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function hl(t){switch(yr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lu(t);return e?16+hl(e):16;case 5:return 2*t.stringValue.length;case 6:return gr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+hl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return oi(r.fields,(s,o)=>{i+=s.length+hl(o)}),i}(t.mapValue);default:throw G()}}function Cy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fd(t){return!!t&&"integerValue"in t}function Mf(t){return!!t&&"arrayValue"in t}function Py(t){return!!t&&"nullValue"in t}function ky(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dl(t){return!!t&&"mapValue"in t}function ON(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[pT])===null||n===void 0?void 0:n.stringValue)===mT}function io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return oi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===DN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(n)}setAll(e){let n=je.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=io(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];dl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){oi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(io(this.value))}}function gT(t){const e=[];return oi(t.fields,(n,r)=>{const i=new je([n]);if(dl(r)){const s=gT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Je(e,0,Y.min(),Y.min(),Y.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new Je(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Je(e,2,n,Y.min(),Y.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,Y.min(),Y.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.position=e,this.inclusive=n}}function Ny(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Zi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function xy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n="asc"){this.field=e,this.dir=n}}function LN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{}class ke extends yT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MN(e,n,r):n==="array-contains"?new jN(e,r):n==="in"?new zN(e,r):n==="not-in"?new BN(e,r):n==="array-contains-any"?new $N(e,r):new ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FN(e,r):new UN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Zi(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(Zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends yT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Gt(e,n)}matches(e){return vT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function vT(t){return t.op==="and"}function _T(t){return bN(t)&&vT(t)}function bN(t){for(const e of t.filters)if(e instanceof Gt)return!1;return!0}function pd(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+es(t.value);if(_T(t))return t.filters.map(e=>pd(e)).join(",");{const e=t.filters.map(n=>pd(n)).join(",");return`${t.op}(${e})`}}function wT(t,e){return t instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&ln(r.value,i.value)}(t,e):t instanceof Gt?function(r,i){return i instanceof Gt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&wT(o,i.filters[l]),!0):!1}(t,e):void G()}function ET(t){return t instanceof ke?function(n){return`${n.field.canonicalString()} ${n.op} ${es(n.value)}`}(t):t instanceof Gt?function(n){return n.op.toString()+" {"+n.getFilters().map(ET).join(" ,")+"}"}(t):"Filter"}class MN extends ke{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class FN extends ke{constructor(e,n){super(e,"in",n),this.keys=TT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UN extends ke{constructor(e,n){super(e,"not-in",n),this.keys=TT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function TT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class jN extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mf(n)&&Mo(n.arrayValue,this.value)}}class zN extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class BN extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mo(this.value.arrayValue,n)}}class $N extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.le=null}}function Dy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WN(t,e,n,r,i,s,o)}function Ff(t){const e=X(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>es(r)).join(",")),e.le=n}return e.le}function Uf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xy(t.startAt,e.startAt)&&xy(t.endAt,e.endAt)}function md(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function HN(t,e,n,r,i,s,o,l){return new fs(t,e,n,r,i,s,o,l)}function jf(t){return new fs(t)}function Oy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function IT(t){return t.collectionGroup!==null}function so(t){const e=X(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Oe(je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new Fo(s,r))}),n.has(je.keyField().canonicalString())||e.he.push(new Fo(je.keyField(),r))}return e.he}function sn(t){const e=X(t);return e.Pe||(e.Pe=qN(e,so(t))),e.Pe}function qN(t,e){if(t.limitType==="F")return Dy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Fo(i.field,s)});const n=t.endAt?new eu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eu(t.startAt.position,t.startAt.inclusive):null;return Dy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gd(t,e){const n=t.filters.concat([e]);return new fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yd(t,e,n){return new fs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bu(t,e){return Uf(sn(t),sn(e))&&t.limitType===e.limitType}function ST(t){return`${Ff(sn(t))}|lt:${t.limitType}`}function yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ET(i)).join(", ")}]`),Vu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>es(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>es(i)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function Mu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of so(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Ny(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,so(r),i)||r.endAt&&!function(o,l,u){const c=Ny(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,so(r),i))}(t,e)}function KN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AT(t){return(e,n)=>{let r=!1;for(const i of so(t)){const s=GN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function GN(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Zi(u,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){oi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=new we(q.comparator);function Dn(){return QN}const RT=new we(q.comparator);function Hs(...t){let e=RT;for(const n of t)e=e.insert(n.key,n);return e}function CT(t){let e=RT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return oo()}function PT(){return oo()}function oo(){return new ai(t=>t.toString(),(t,e)=>t.isEqual(e))}const YN=new we(q.comparator),XN=new Oe(q.comparator);function ne(...t){let e=XN;for(const n of t)e=e.add(n);return e}const JN=new Oe(Z);function ZN(){return JN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xl(e)?"-0":e}}function kT(t){return{integerValue:""+t}}function ex(t,e){return CN(e)?kT(e):zf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this._=void 0}}function tx(t,e,n){return t instanceof Uo?function(i,s){const o={fields:{[hT]:{stringValue:cT},[fT]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&bf(s)&&(s=Lu(s)),s&&(o.fields[dT]=s),{mapValue:o}}(n,e):t instanceof jo?xT(t,e):t instanceof zo?DT(t,e):function(i,s){const o=NT(i,s),l=Vy(o)+Vy(i.Ie);return fd(o)&&fd(i.Ie)?kT(l):zf(i.serializer,l)}(t,e)}function nx(t,e,n){return t instanceof jo?xT(t,e):t instanceof zo?DT(t,e):n}function NT(t,e){return t instanceof tu?function(r){return fd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Uo extends Fu{}class jo extends Fu{constructor(e){super(),this.elements=e}}function xT(t,e){const n=OT(e);for(const r of t.elements)n.some(i=>ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class zo extends Fu{constructor(e){super(),this.elements=e}}function DT(t,e){let n=OT(e);for(const r of t.elements)n=n.filter(i=>!ln(i,r));return{arrayValue:{values:n}}}class tu extends Fu{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Vy(t){return Ae(t.integerValue||t.doubleValue)}function OT(t){return Mf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n){this.field=e,this.transform=n}}function ix(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof jo&&i instanceof jo||r instanceof zo&&i instanceof zo?Ji(r.elements,i.elements,ln):r instanceof tu&&i instanceof tu?ln(r.Ie,i.Ie):r instanceof Uo&&i instanceof Uo}(t.transform,e.transform)}class sx{constructor(e,n){this.version=e,this.transformResults=n}}class Sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uu{}function VT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bT(t.key,Sn.none()):new na(t.key,t.data,Sn.none());{const n=t.data,r=Pt.empty();let i=new Oe(je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new li(t.key,r,new Bt(i.toArray()),Sn.none())}}function ox(t,e,n){t instanceof na?function(i,s,o){const l=i.value.clone(),u=by(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof li?function(i,s,o){if(!fl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=by(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(LT(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ao(t,e,n,r){return t instanceof na?function(s,o,l,u){if(!fl(s.precondition,o))return l;const c=s.value.clone(),f=My(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof li?function(s,o,l,u){if(!fl(s.precondition,o))return l;const c=My(s.fieldTransforms,u,o),f=o.data;return f.setAll(LT(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return fl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ax(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=NT(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function Ly(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ji(r,i,(s,o)=>ix(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class na extends Uu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class li extends Uu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function LT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function by(t,e,n){const r=new Map;oe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,nx(o,l,n[i]))}return r}function My(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tx(s,o,e))}return r}class bT extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lx extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ox(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=PT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=VT(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Ji(this.mutations,e.mutations,(n,r)=>Ly(n,r))&&Ji(this.baseMutations,e.baseMutations,(n,r)=>Ly(n,r))}}class Bf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length);let i=function(){return YN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Bf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,re;function dx(t){switch(t){case b.OK:return G();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return G()}}function MT(t){if(t===void 0)return xn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ce.OK:return b.OK;case Ce.CANCELLED:return b.CANCELLED;case Ce.UNKNOWN:return b.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return b.INTERNAL;case Ce.UNAVAILABLE:return b.UNAVAILABLE;case Ce.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ce.NOT_FOUND:return b.NOT_FOUND;case Ce.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ce.ABORTED:return b.ABORTED;case Ce.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ce.DATA_LOSS:return b.DATA_LOSS;default:return G()}}(re=Ce||(Ce={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=new cr([4294967295,4294967295],0);function Fy(t){const e=sT().encode(t),n=new JE;return n.update(e),new Uint8Array(n.digest())}function Uy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new cr([n,r],0),new cr([i,s],0)]}class $f{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=cr.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(cr.fromNumber(r)));return i.compare(fx)===1&&(i=new cr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=Fy(e),[r,i]=Uy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new $f(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ee===0)return;const n=Fy(e),[r,i]=Uy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ju(Y.min(),i,new we(Z),Dn(),ne())}}class ra{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ra(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class FT{constructor(e,n){this.targetId=e,this.ge=n}}class UT{constructor(e,n,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jy{constructor(){this.pe=0,this.ye=zy(),this.we=$e.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ne(),n=ne(),r=ne();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new ra(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=zy()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,oe(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class px{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Dn(),this.$e=qa(),this.Ue=qa(),this.Ke=new we(Z)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){const n=e.targetId,r=e.ge.count,i=this.Xe(n);if(i){const s=i.target;if(md(s))if(r===0){const o=new q(s.path);this.ze(n,o,Je.newNoDocument(o,Y.min()))}else oe(r===1);else{const o=this.et(n);if(o!==r){const l=this.tt(e),u=l?this.nt(l,e,o):1;if(u!==0){this.Ye(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=gr(r).toUint8Array()}catch(u){if(u instanceof uT)return Xi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new $f(o,i,s)}catch(u){return Xi(u instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ee===0?null:l}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.it(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.ze(n,s,null),i++)}),i}ot(e){const n=new Map;this.qe.forEach((s,o)=>{const l=this.Xe(o);if(l){if(s.current&&md(l.target)){const u=new q(l.target.path);this._t(u).has(o)||this.ut(o,u)||this.ze(o,u,Je.newNoDocument(u,e))}s.ve&&(n.set(o,s.Fe()),s.Me())}});let r=ne();this.Ue.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Xe(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new ju(e,n,this.Ke,this.Qe,r);return this.Qe=Dn(),this.$e=qa(),this.Ue=qa(),this.Ke=new we(Z),i}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,n)?i.xe(n,1):i.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new jy,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Oe(Z),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Oe(Z),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new jy),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function qa(){return new we(q.comparator)}function zy(){return new we(q.comparator)}const mx={asc:"ASCENDING",desc:"DESCENDING"},gx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yx={and:"AND",or:"OR"};class vx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vd(t,e){return t.useProto3Json||Vu(e)?e:{value:e}}function nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _x(t,e){return nu(t,e.toTimestamp())}function on(t){return oe(!!t),Y.fromTimestamp(function(n){const r=mr(n);return new De(r.seconds,r.nanos)}(t))}function Wf(t,e){return _d(t,e).canonicalString()}function _d(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zT(t){const e=fe.fromString(t);return oe(qT(e)),e}function wd(t,e){return Wf(t.databaseId,e.path)}function Xc(t,e){const n=zT(e);if(n.get(1)!==t.databaseId.projectId)throw new H(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q($T(n))}function BT(t,e){return Wf(t.databaseId,e)}function wx(t){const e=zT(t);return e.length===4?fe.emptyPath():$T(e)}function Ed(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $T(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function By(t,e,n){return{name:wd(t,e),fields:n.value.mapValue.fields}}function Ex(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(oe(f===void 0||typeof f=="string"),$e.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),$e.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?b.UNKNOWN:MT(c.code);return new H(f,c.message||"")}(o);n=new UT(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xc(t,r.document.name),s=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):Y.min(),l=new Pt({mapValue:{fields:r.document.fields}}),u=Je.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new pl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Xc(t,r.document),s=r.readTime?on(r.readTime):Y.min(),o=Je.newNoDocument(i,s),l=r.removedTargetIds||[];n=new pl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Xc(t,r.document),s=r.removedTargetIds||[];n=new pl([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hx(i,s),l=r.targetId;n=new FT(l,o)}}return n}function Tx(t,e){let n;if(e instanceof na)n={update:By(t,e.key,e.value)};else if(e instanceof bT)n={delete:wd(t,e.key)};else if(e instanceof li)n={update:By(t,e.key,e.data),updateMask:xx(e.fieldMask)};else{if(!(e instanceof lx))return G();n={verify:wd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tu)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_x(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function Ix(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?on(i.updateTime):on(s);return o.isEqual(Y.min())&&(o=on(s)),new sx(o,i.transformResults||[])}(n,e))):[]}function Sx(t,e){return{documents:[BT(t,e.path)]}}function Ax(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=BT(t,i);const s=function(c){if(c.length!==0)return HT(Gt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:vi(m.field),direction:Px(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=vd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ht:n,parent:i}}function Rx(t){let e=wx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=WT(p);return m instanceof Gt&&_T(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Fo(_i(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Vu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,A=p.values||[];return new eu(A,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,A=p.values||[];return new eu(A,m)}(n.endAt)),HN(e,i,o,s,l,"F",u,c)}function Cx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function WT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_i(n.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_i(n.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(n.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return ke.create(_i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Gt.create(n.compositeFilter.filters.map(r=>WT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function Px(t){return mx[t]}function kx(t){return gx[t]}function Nx(t){return yx[t]}function vi(t){return{fieldPath:t.canonicalString()}}function _i(t){return je.fromServerFormat(t.fieldPath)}function HT(t){return t instanceof ke?function(n){if(n.op==="=="){if(ky(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NAN"}};if(Py(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ky(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NAN"}};if(Py(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vi(n.field),op:kx(n.op),value:n.value}}}(t):t instanceof Gt?function(n){const r=n.getFilters().map(i=>HT(i));return r.length===1?r[0]:{compositeFilter:{op:Nx(n.op),filters:r}}}(t):G()}function xx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function qT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=$e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.Tt=e}}function Ox(t){const e=Rx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(){this.Tn=new Lx}addToCollectionParentIndex(e,n){return this.Tn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(pr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Lx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Oe(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Oe(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},KT=41943040;class lt{static withCacheSize(e){return new lt(e,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt.DEFAULT_COLLECTION_PERCENTILE=10,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lt.DEFAULT=new lt(KT,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lt.DISABLED=new lt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new ts(0)}static Kn(){return new ts(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="LruGarbageCollector",bx=1048576;function Hy([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class Mx{constructor(e){this.Hn=e,this.buffer=new Oe(Hy),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Hy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Fx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){$(Wy,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ds(n)?$(Wy,"Ignoring IndexedDB error during garbage collection: ",n):await hs(n)}await this.er(3e5)})}}class Ux{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Ou.ae);const r=new Mx(n);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve($y)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$y):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),gi()<=te.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function jx(t,e){return new Ux(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(){this.changes=new ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ao(r.mutation,i,Bt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Fr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Hs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Dn();const o=oo(),l=function(){return oo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof li)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),ao(f.mutation,c,f.mutation.getFieldMask(),De.now())):o.set(c.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new Bx(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=oo();let i=new we((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Bt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=PT();f.forEach(m=>{if(!s.has(m)){const A=VT(n.get(m),r.get(m));A!==null&&p.set(m,A),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):IT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Fr());let l=Vo,u=s;return o.next(c=>L.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(f=>({batchId:l,changes:CT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Hs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Hs();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(p,m){return new fs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Je.newInvalidDocument(f)))});let l=Hs();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&ao(f.mutation,c,Bt.empty(),De.now()),Mu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return L.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:on(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(i){return{name:i.name,query:Ox(i.bundledQuery),readTime:on(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(){this.overlays=new we(q.comparator),this.Rr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Et(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Fr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Fr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Fr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return L.resolve(l)}Et(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cx(n,r));let s=this.Rr.get(n);s===void 0&&(s=ne(),this.Rr.set(n,s)),this.Rr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.Vr=new Oe(Ve.mr),this.gr=new Oe(Ve.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Ve(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new q(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.gr.forEachInRange([r,i],o=>{this.wr(o),s.push(o.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new q(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ne();return this.gr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return q.comparator(e.key,n.key)||Z(e.Cr,n.Cr)}static pr(e,n){return Z(e.Cr,n.Cr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Oe(Ve.mr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ux(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Mr=this.Mr.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Nr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Lf:this.Fr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],o=>{const l=this.Or(o.Cr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(Z);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,o],l=>{r=r.add(l.Cr)})}),L.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new q(s),0);let l=new Oe(Z);return this.Mr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Cr)),!0)},o),L.resolve(this.Br(l))}Br(e){const n=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return L.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Ve(n,0),i=this.Mr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.kr=e,this.docs=function(){return new we(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Je.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||IN(TN(f),r)<=0||(i.has(f.key)||Mu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}qr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Qx(this)}getSize(e){return L.resolve(this.size)}}class Qx extends zx{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.persistence=e,this.Qr=new ai(n=>Ff(n),Uf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Hf,this.targetCount=0,this.Kr=ts.Un()}forEachTarget(e,n){return this.Qr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),L.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.zn(n),L.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Qr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Qr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Ou(0),this.zr=!1,this.zr=!0,this.jr=new qx,this.referenceDelegate=e(this),this.Hr=new Yx(this),this.indexManager=new Vx,this.remoteDocumentCache=function(i){return new Gx(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new Dx(n),this.Yr=new Wx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new Kx(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new Xx(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,n){return L.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class Xx extends AN{constructor(e){super(),this.currentSequenceNumber=e}}class qf{constructor(e){this.persistence=e,this.ti=new Hf,this.ni=null}static ri(e){return new qf(e)}get ii(){if(this.ni)return this.ni;throw G()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),L.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.ii,r=>{const i=q.fromPath(r);return this.si(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return L.or([()=>L.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class ru{constructor(e,n){this.persistence=e,this.oi=new ai(r=>PN(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=jx(this,n)}static ri(e,n){return new ru(e,n)}Zr(){}Xr(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return L.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,o=>this.ar(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),L.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=hl(e.data.value)),n}ar(e,n,r){return L.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.oi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=i}static Yi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Kf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return xC()?8:RN(et())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.rs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Jx;return this._s(e,n,o).next(l=>{if(s.result=l,this.Xi)return this.us(e,n,o,l.size)})}).next(()=>s.result)}us(e,n,r,i){return r.documentReadCount<this.es?(gi()<=te.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),L.resolve()):(gi()<=te.DEBUG&&$("QueryEngine","Query:",yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(gi()<=te.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):L.resolve())}rs(e,n){if(Oy(n))return L.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yd(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.ns.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.cs(n,l);return this.ls(n,c,o,u.readTime)?this.rs(e,yd(n,null,"F")):this.hs(e,c,n,u)}))})))}ss(e,n,r,i){return Oy(n)||i.isEqual(Y.min())?L.resolve(null):this.ns.getDocuments(e,r).next(s=>{const o=this.cs(n,s);return this.ls(n,o,r,i)?L.resolve(null):(gi()<=te.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yi(n)),this.hs(e,o,n,EN(i,Vo)).next(l=>l))})}cs(e,n){let r=new Oe(AT(e));return n.forEach((i,s)=>{Mu(e,s)&&(r=r.add(s))}),r}ls(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,n,r){return gi()<=te.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",yi(n)),this.ns.getDocumentsMatchingQuery(e,n,pr.min(),r)}hs(e,n,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="LocalStore",eD=3e8;class tD{constructor(e,n,r,i){this.persistence=e,this.Ps=n,this.serializer=i,this.Ts=new we(Z),this.Is=new ai(s=>Ff(s),Uf),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $x(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function nD(t,e,n,r){return new tD(t,e,n,r)}async function QT(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Rs:c,removedBatchIds:o,addedBatchIds:l}))})})}function rD(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ds.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let A=L.resolve();return m.forEach(C=>{A=A.next(()=>f.getEntry(u,C)).next(N=>{const O=c.docVersions.get(C);oe(O!==null),N.version.compareTo(O)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function YT(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function iD(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Hr.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Hr.addMatchingKeys(s,f.addedDocuments,p)));let A=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken($e.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(N,O,w){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=eD?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,A,f)&&l.push(n.Hr.updateTargetData(s,A))});let u=Dn(),c=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(sD(s,o,e.documentUpdates).next(f=>{u=f.Vs,c=f.fs})),!r.isEqual(Y.min())){const f=n.Hr.getLastRemoteSnapshotVersion(s).next(p=>n.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ts=i,s))}function sD(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(Gf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Vs:o,fs:i}})}function oD(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Lf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aD(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Hr.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Hr.allocateTargetId(r).next(o=>(i=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Td(t,e,n){const r=X(t),i=r.Ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ds(o))throw o;$(Gf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function qy(t,e,n){const r=X(t);let i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=X(u),m=p.Is.get(f);return m!==void 0?L.resolve(p.Ts.get(m)):p.Hr.getTargetData(c,f)}(r,o,sn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Ps.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ne())).next(l=>(lD(r,KN(e),l),{documents:l,gs:s})))}function lD(t,e,n){let r=t.Es.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Es.set(e,r)}class Ky{constructor(){this.activeTargetIds=ZN()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uD{constructor(){this.ho=new Ky,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Ky,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy="ConnectivityMonitor";class Qy{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){$(Gy,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){$(Gy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka=null;function Id(){return Ka===null?Ka=function(){return 268435456+Math.round(2147483648*Math.random())}():Ka++,"0x"+Ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="RestConnection",hD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dD{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===Jl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(e,n,r,i,s){const o=Id(),l=this.bo(e,n.toUriEncodedString());$(Jc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,i,s),this.vo(e,l,u,r).then(c=>($(Jc,`Received RPC '${e}' ${o}: `,c),c),c=>{throw Xi(Jc,`RPC '${e}' ${o} failed with error: `,c,"url: ",l,"request:",r),c})}Co(e,n,r,i,s,o){return this.So(e,n,r,i,s)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}bo(e,n){const r=hD[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class pD extends dD{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Id();return new Promise((o,l)=>{const u=new ZE;u.setWithCredentials(!0),u.listenOnce(eT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case cl.NO_ERROR:const f=u.getResponseJson();$(Qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case cl.TIMEOUT:$(Qe,`RPC '${e}' ${s} timed out`),l(new H(b.DEADLINE_EXCEEDED,"Request time out"));break;case cl.HTTP_ERROR:const p=u.getStatus();if($(Qe,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const A=m==null?void 0:m.error;if(A&&A.status&&A.message){const C=function(O){const w=O.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(w)>=0?w:b.UNKNOWN}(A.status);l(new H(C,A.message))}else l(new H(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(b.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(Qe,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);$(Qe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Wo(e,n,r){const i=Id(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rT(),l=nT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(Qe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,A=!1;const C=new fD({Fo:O=>{A?$(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||($(Qe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),$(Qe,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},Mo:()=>p.close()}),N=(O,w,v)=>{O.listen(w,S=>{try{v(S)}catch(D){setTimeout(()=>{throw D},0)}})};return N(p,Ws.EventType.OPEN,()=>{A||($(Qe,`RPC '${e}' stream ${i} transport opened.`),C.Qo())}),N(p,Ws.EventType.CLOSE,()=>{A||(A=!0,$(Qe,`RPC '${e}' stream ${i} transport closed`),C.Uo())}),N(p,Ws.EventType.ERROR,O=>{A||(A=!0,Xi(Qe,`RPC '${e}' stream ${i} transport errored:`,O),C.Uo(new H(b.UNAVAILABLE,"The operation could not be completed")))}),N(p,Ws.EventType.MESSAGE,O=>{var w;if(!A){const v=O.data[0];oe(!!v);const S=v,D=(S==null?void 0:S.error)||((w=S[0])===null||w===void 0?void 0:w.error);if(D){$(Qe,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let U=function(_){const T=Ce[_];if(T!==void 0)return MT(T)}(F),E=D.message;U===void 0&&(U=b.INTERNAL,E="Unknown error status: "+F+" with message "+D.message),A=!0,C.Uo(new H(U,E)),p.close()}else $(Qe,`RPC '${e}' stream ${i} received:`,v),C.Ko(v)}}),N(l,tT.STAT_EVENT,O=>{O.stat===cd.PROXY?$(Qe,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===cd.NOPROXY&&$(Qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.$o()},0),C}}function Zc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t){return new vx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="PersistentStream";class JT{constructor(e,n,r,i,s,o,l,u){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new XT(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===n&&this.V_(r,i)},r=>{e(()=>{const i=new H(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return $(Yy,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():($(Yy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mD extends JT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=Ex(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?on(o.readTime):Y.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Ed(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=md(u)?{documents:Sx(s,u)}:{query:Ax(s,u).ht},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=jT(s,o.resumeToken);const c=vd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=nu(s,o.snapshotVersion.toTimestamp());const c=vd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Cx(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Ed(this.serializer),n.removeTarget=e,this.I_(n)}}class gD extends JT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return oe(!!e.streamToken),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=Ix(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Ed(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Tx(this.serializer,r))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{}class vD extends yD{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new H(b.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,_d(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(b.UNKNOWN,s.toString())})}Co(e,n,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Co(e,_d(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(b.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class _D{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(xn(n),this.N_=!1):$("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="RemoteStore";class wD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(o=>{r.enqueueAndForget(async()=>{ui(this)&&($(Jr,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.W_.add(4),await ia(c),c.j_.set("Unknown"),c.W_.delete(4),await Bu(c)}(this))})}),this.j_=new _D(r,i)}}async function Bu(t){if(ui(t))for(const e of t.G_)await e(!0)}async function ia(t){for(const e of t.G_)await e(!1)}function ZT(t,e){const n=X(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),Jf(n)?Xf(n):ps(n).c_()&&Yf(n,e))}function Qf(t,e){const n=X(t),r=ps(n);n.K_.delete(e),r.c_()&&e0(n,e),n.K_.size===0&&(r.c_()?r.P_():ui(n)&&n.j_.set("Unknown"))}function Yf(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ps(t).y_(e)}function e0(t,e){t.H_.Ne(e),ps(t).w_(e)}function Xf(t){t.H_=new px({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),ps(t).start(),t.j_.B_()}function Jf(t){return ui(t)&&!ps(t).u_()&&t.K_.size>0}function ui(t){return X(t).W_.size===0}function t0(t){t.H_=void 0}async function ED(t){t.j_.set("Online")}async function TD(t){t.K_.forEach((e,n)=>{Yf(t,e)})}async function ID(t,e){t0(t),Jf(t)?(t.j_.q_(e),Xf(t)):t.j_.set("Unknown")}async function SD(t,e,n){if(t.j_.set("Online"),e instanceof UT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.K_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.K_.delete(l),i.H_.removeTarget(l))}(t,e)}catch(r){$(Jr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await iu(t,r)}else if(e instanceof pl?t.H_.We(e):e instanceof FT?t.H_.Ze(e):t.H_.je(e),!n.isEqual(Y.min()))try{const r=await YT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.H_.ot(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.K_.get(c);f&&s.K_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.K_.get(u);if(!f)return;s.K_.set(u,f.withResumeToken($e.EMPTY_BYTE_STRING,f.snapshotVersion)),e0(s,u);const p=new Xn(f.target,u,c,f.sequenceNumber);Yf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(Jr,"Failed to raise snapshot:",r),await iu(t,r)}}async function iu(t,e,n){if(!ds(e))throw e;t.W_.add(1),await ia(t),t.j_.set("Offline"),n||(n=()=>YT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(Jr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await Bu(t)})}function n0(t,e){return e().catch(n=>iu(t,n,e))}async function $u(t){const e=X(t),n=vr(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:Lf;for(;AD(e);)try{const i=await oD(e.localStore,r);if(i===null){e.U_.length===0&&n.P_();break}r=i.batchId,RD(e,i)}catch(i){await iu(e,i)}r0(e)&&i0(e)}function AD(t){return ui(t)&&t.U_.length<10}function RD(t,e){t.U_.push(e);const n=vr(t);n.c_()&&n.S_&&n.b_(e.mutations)}function r0(t){return ui(t)&&!vr(t).u_()&&t.U_.length>0}function i0(t){vr(t).start()}async function CD(t){vr(t).C_()}async function PD(t){const e=vr(t);for(const n of t.U_)e.b_(n.mutations)}async function kD(t,e,n){const r=t.U_.shift(),i=Bf.from(r,e,n);await n0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $u(t)}async function ND(t,e){e&&vr(t).S_&&await async function(r,i){if(function(o){return dx(o)&&o!==b.ABORTED}(i.code)){const s=r.U_.shift();vr(r).h_(),await n0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $u(r)}}(t,e),r0(t)&&i0(t)}async function Xy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),$(Jr,"RemoteStore received new credentials");const r=ui(n);n.W_.add(3),await ia(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Bu(n)}async function xD(t,e){const n=X(t);e?(n.W_.delete(2),await Bu(n)):e||(n.W_.add(2),await ia(n),n.j_.set("Unknown"))}function ps(t){return t.J_||(t.J_=function(n,r,i){const s=X(n);return s.M_(),new mD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:ED.bind(null,t),No:TD.bind(null,t),Lo:ID.bind(null,t),p_:SD.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),Jf(t)?Xf(t):t.j_.set("Unknown")):(await t.J_.stop(),t0(t))})),t.J_}function vr(t){return t.Y_||(t.Y_=function(n,r,i){const s=X(n);return s.M_(),new gD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:CD.bind(null,t),Lo:ND.bind(null,t),D_:PD.bind(null,t),v_:kD.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await $u(t)):(await t.Y_.stop(),t.U_.length>0&&($(Jr,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Zf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ep(t,e){if(xn("AsyncQueue",`${e}: ${t}`),ds(t))return new H(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{static emptySet(e){return new Bi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.Z_=new we(q.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):G():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ns{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ns(e,n,Bi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class OD{constructor(){this.queries=Zy(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Zy(),s.forEach((o,l)=>{for(const u of l.ta)u.onError(r)})})(this,new H(b.ABORTED,"Firestore shutting down"))}}function Zy(){return new ai(t=>ST(t),bu)}async function VD(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new DD,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ep(o,`Initialization of query '${yi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ta.push(e),e.sa(n.onlineState),s.ea&&e.oa(s.ea)&&tp(n)}async function LD(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ta.indexOf(e);o>=0&&(s.ta.splice(o,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bD(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ta)l.oa(i)&&(r=!0);o.ea=i}}r&&tp(n)}function MD(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(e)}function tp(t){t.ia.forEach(e=>{e.next()})}var Sd,ev;(ev=Sd||(Sd={}))._a="default",ev.Cache="cache";class FD{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Sd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.key=e}}class o0{constructor(e){this.key=e}}class UD{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ne(),this.mutatedKeys=ne(),this.ya=AT(e),this.wa=new Bi(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new Jy,i=n?n.wa:this.wa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),A=Mu(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let O=!1;m&&A?m.data.isEqual(A.data)?C!==N&&(r.track({type:3,doc:A}),O=!0):this.va(m,A)||(r.track({type:2,doc:A}),O=!0,(u&&this.ya(A,u)>0||c&&this.ya(A,c)<0)&&(l=!0)):!m&&A?(r.track({type:0,doc:A}),O=!0):m&&!A&&(r.track({type:1,doc:m}),O=!0,(u||c)&&(l=!0)),O&&(A?(o=o.add(A),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{wa:o,Da:r,ls:l,mutatedKeys:s}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((f,p)=>function(A,C){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return N(A)-N(C)}(f.type,p.type)||this.ya(f.doc,p.doc)),this.Ca(r),i=i!=null&&i;const l=n&&!i?this.Fa():[],u=this.pa.size===0&&this.current&&!i?1:0,c=u!==this.ga;return this.ga=u,o.length!==0||c?{snapshot:new ns(this.query,e.wa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:l}:{Ma:l}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Jy,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ne(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new o0(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new s0(r))}),n}Oa(e){this.fa=e.gs,this.pa=ne();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return ns.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const np="SyncEngine";class jD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zD{constructor(e){this.key=e,this.Ba=!1}}class BD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new ai(l=>ST(l),bu),this.qa=new Map,this.Qa=new Set,this.$a=new we(q.comparator),this.Ua=new Map,this.Ka=new Hf,this.Wa={},this.Ga=new Map,this.za=ts.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function $D(t,e,n=!0){const r=d0(t);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await a0(r,e,n,!0),i}async function WD(t,e){const n=d0(t);await a0(n,e,!0,!1)}async function a0(t,e,n,r){const i=await aD(t.localStore,sn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await HD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&ZT(t.remoteStore,i),l}async function HD(t,e,n,r,i){t.Ha=(p,m,A)=>async function(N,O,w,v){let S=O.view.ba(w);S.ls&&(S=await qy(N.localStore,O.query,!1).then(({documents:E})=>O.view.ba(E,S)));const D=v&&v.targetChanges.get(O.targetId),F=v&&v.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(S,N.isPrimaryClient,D,F);return nv(N,O.targetId,U.Ma),U.snapshot}(t,p,m,A);const s=await qy(t.localStore,e,!0),o=new UD(e,s.gs),l=o.ba(s.documents),u=ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);nv(t,n,c.Ma);const f=new jD(e,n,o);return t.ka.set(e,f),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),c.snapshot}async function qD(t,e,n){const r=X(t),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(o=>!bu(o,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Td(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Qf(r.remoteStore,i.targetId),Ad(r,i.targetId)}).catch(hs)):(Ad(r,i.targetId),await Td(r.localStore,i.targetId,!0))}async function KD(t,e){const n=X(t),r=n.ka.get(e),i=n.qa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Qf(n.remoteStore,r.targetId))}async function GD(t,e,n){const r=tO(t);try{const i=await function(o,l){const u=X(o),c=De.now(),f=l.reduce((A,C)=>A.add(C.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=Dn(),N=ne();return u.ds.getEntries(A,f).next(O=>{C=O,C.forEach((w,v)=>{v.isValidDocument()||(N=N.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,C)).next(O=>{p=O;const w=[];for(const v of l){const S=ax(v,p.get(v.key).overlayedDocument);S!=null&&w.push(new li(v.key,S,gT(S.value.mapValue),Sn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,c,w,l)}).next(O=>{m=O;const w=O.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(A,O.batchId,w)})}).then(()=>({batchId:m.batchId,changes:CT(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Wa[o.currentUser.toKey()];c||(c=new we(Z)),c=c.insert(l,u),o.Wa[o.currentUser.toKey()]=c}(r,i.batchId,n),await sa(r,i.changes),await $u(r.remoteStore)}catch(i){const s=ep(i,"Failed to persist write");n.reject(s)}}async function l0(t,e){const n=X(t);try{const r=await iD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ua.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ba=!0:i.modifiedDocuments.size>0?oe(o.Ba):i.removedDocuments.size>0&&(oe(o.Ba),o.Ba=!1))}),await sa(n,r,e)}catch(r){await hs(r)}}function tv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ka.forEach((s,o)=>{const l=o.view.sa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.ta)m.sa(l)&&(c=!0)}),c&&tp(u)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QD(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ua.get(e),s=i&&i.key;if(s){let o=new we(q.comparator);o=o.insert(s,Je.newNoDocument(s,Y.min()));const l=ne().add(s),u=new ju(Y.min(),new Map,new we(Z),o,l);await l0(r,u),r.$a=r.$a.remove(s),r.Ua.delete(e),rp(r)}else await Td(r.localStore,e,!1).then(()=>Ad(r,e,n)).catch(hs)}async function YD(t,e){const n=X(t),r=e.batch.batchId;try{const i=await rD(n.localStore,e);c0(n,r,null),u0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sa(n,i)}catch(i){await hs(i)}}async function XD(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(oe(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);c0(r,e,n),u0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sa(r,i)}catch(i){await hs(i)}}function u0(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function c0(t,e,n){const r=X(t);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function Ad(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||h0(t,r)})}function h0(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Qf(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),rp(t))}function nv(t,e,n){for(const r of n)r instanceof s0?(t.Ka.addReference(r.key,e),JD(t,r)):r instanceof o0?($(np,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||h0(t,r.key)):G()}function JD(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||($(np,"New document in limbo: "+n),t.Qa.add(r),rp(t))}function rp(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new q(fe.fromString(e)),r=t.za.next();t.Ua.set(r,new zD(n)),t.$a=t.$a.insert(n,r),ZT(t.remoteStore,new Xn(sn(jf(n.path)),r,"TargetPurposeLimboResolution",Ou.ae))}}async function sa(t,e,n){const r=X(t),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach((l,u)=>{o.push(r.Ha(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Kf.Yi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.La.p_(i),await async function(u,c){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,m=>L.forEach(m.Hi,A=>f.persistence.referenceDelegate.addReference(p,m.targetId,A)).next(()=>L.forEach(m.Ji,A=>f.persistence.referenceDelegate.removeReference(p,m.targetId,A)))))}catch(p){if(!ds(p))throw p;$(Gf,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const A=f.Ts.get(m),C=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(C);f.Ts=f.Ts.insert(m,N)}}}(r.localStore,s))}async function ZD(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){$(np,"User change. New user:",e.toKey());const r=await QT(n.localStore,e);n.currentUser=e,function(s,o){s.Ga.forEach(l=>{l.forEach(u=>{u.reject(new H(b.CANCELLED,o))})}),s.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sa(n,r.Rs)}}function eO(t,e){const n=X(t),r=n.Ua.get(e);if(r&&r.Ba)return ne().add(r.key);{let i=ne();const s=n.qa.get(e);if(!s)return i;for(const o of s){const l=n.ka.get(o);i=i.unionWith(l.view.Sa)}return i}}function d0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=l0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QD.bind(null,e),e.La.p_=bD.bind(null,e.eventManager),e.La.Ja=MD.bind(null,e.eventManager),e}function tO(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XD.bind(null,e),e}class su{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zu(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return nD(this.persistence,new Zx,e.initialUser,this.serializer)}Xa(e){return new GT(qf.ri,this.serializer)}Za(e){return new uD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}su.provider={build:()=>new su};class nO extends su{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){oe(this.persistence.referenceDelegate instanceof ru);const r=this.persistence.referenceDelegate.garbageCollector;return new Fx(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?lt.withCacheSize(this.cacheSizeBytes):lt.DEFAULT;return new GT(r=>ru.ri(r,n),this.serializer)}}class Rd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZD.bind(null,this.syncEngine),await xD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OD}()}createDatastore(e){const n=zu(e.databaseInfo.databaseId),r=function(s){return new pD(s)}(e.databaseInfo);return function(s,o,l,u){return new vD(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new wD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>tv(this.syncEngine,n,0),function(){return Qy.D()?new Qy:new cD}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new BD(i,s,o,l,u,c);return f&&(p.ja=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);$(Jr,"RemoteStore shutting down."),s.W_.add(5),await ia(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Rd.provider={build:()=>new Rd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="FirestoreClient";class iO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=oT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(_r,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(_r,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ep(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function eh(t,e){t.asyncQueue.verifyOperationInProgress(),$(_r,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await QT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sO(t);$(_r,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Xy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Xy(e.remoteStore,i)),t._onlineComponents=e}async function sO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(_r,"Using user provided OfflineComponentProvider");try{await eh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Xi("Error using user provided cache. Falling back to memory cache: "+n),await eh(t,new su)}}else $(_r,"Using default OfflineComponentProvider"),await eh(t,new nO(void 0));return t._offlineComponents}async function f0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(_r,"Using user provided OnlineComponentProvider"),await rv(t,t._uninitializedComponentsProvider._online)):($(_r,"Using default OnlineComponentProvider"),await rv(t,new Rd))),t._onlineComponents}function oO(t){return f0(t).then(e=>e.syncEngine)}async function iv(t){const e=await f0(t),n=e.eventManager;return n.onListen=$D.bind(null,e.syncEngine),n.onUnlisten=qD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KD.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t,e,n){if(!n)throw new H(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aO(t,e,n,r){if(e===!0&&r===!0)throw new H(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ov(t){if(!q.isDocumentKey(t))throw new H(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function av(t){if(q.isDocumentKey(t))throw new H(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function lo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wu(t);throw new H(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="firestore.googleapis.com",lv=!0;class uv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=g0,this.ssl=lv}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:lv;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=KT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bx)throw new H(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=p0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dN;switch(r.type){case"firstParty":return new gN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=sv.get(n);r&&($("ComponentProvider","Removing Datastore"),sv.delete(n),r.terminate())}(this),Promise.resolve()}}function lO(t,e,n,r={}){var i;const s=(t=lo(t,Hu))._getSettings(),o=Object.assign(Object.assign({},s),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;s.host!==g0&&s.host!==l&&Xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},s),{host:l,ssl:!1,emulatorOptions:r});if(!Gr(u,o)&&(t._setSettings(u),r.mockUserToken)){let c,f;if(typeof r.mockUserToken=="string")c=r.mockUserToken,f=Ye.MOCK_USER;else{c=AC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new H(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ye(p)}t._authCredentials=new fN(new iT(c,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ci(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class hr extends ci{constructor(e,n,r){super(e,n,jf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new q(e))}withConverter(e){return new hr(this.firestore,e,this._path)}}function cv(t,e,...n){if(t=tt(t),m0("collection","path",e),t instanceof Hu){const r=fe.fromString(e,...n);return av(r),new hr(t,null,r)}{if(!(t instanceof _t||t instanceof hr))throw new H(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return av(r),new hr(t.firestore,null,r)}}function uO(t,e,...n){if(t=tt(t),arguments.length===1&&(e=oT.newId()),m0("doc","path",e),t instanceof Hu){const r=fe.fromString(e,...n);return ov(r),new _t(t,null,new q(r))}{if(!(t instanceof _t||t instanceof hr))throw new H(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return ov(r),new _t(t.firestore,t instanceof hr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv="AsyncQueue";class dv{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new XT(this,"async_queue_retry"),this.Su=()=>{const r=Zc();r&&$(hv,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=Zc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Br;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ds(e))throw e;$(hv,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const i=Zf.createAndSchedule(this,e,n,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&G()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}function fv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ou extends Hu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new dv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dv(e),this._firestoreClient=void 0,await e}}}function cO(t,e){const n=typeof t=="object"?t:mE(),r=typeof t=="string"?t:Jl,i=Xo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=IC("firestore");s&&lO(i,...s)}return i}function y0(t){if(t._terminated)throw new H(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hO(t),t._firestoreClient}function hO(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new xN(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,p0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new iO(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rs($e.fromBase64String(e))}catch(n){throw new H(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new rs($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=/^__.*__$/;class fO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new li(e,this.data,this.fieldMask,n,this.fieldTransforms):new na(e,this.data,n,this.fieldTransforms)}}function v0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class lp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new lp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return au(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(v0(this.Lu)&&dO.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class pO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zu(e)}ju(e,n,r,i=!1){return new lp({Lu:e,methodName:n,zu:r,path:je.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _0(t){const e=t._freezeSettings(),n=zu(t._databaseId);return new pO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mO(t,e,n,r,i,s={}){const o=t.ju(s.merge||s.mergeFields?2:0,e,n,i);T0("Data must be an object, but it was:",o,r);const l=w0(r,o);let u,c;if(s.merge)u=new Bt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=yO(e,p,n);if(!o.contains(m))throw new H(b.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);_O(f,m)||f.push(m)}u=new Bt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new fO(new Pt(l),u,c)}class up extends sp{_toFieldTransform(e){return new rx(e.path,new Uo)}isEqual(e){return e instanceof up}}function gO(t,e,n,r=!1){return cp(n,t.ju(r?4:3,e))}function cp(t,e){if(E0(t=tt(t)))return T0("Unsupported field value:",e,t),w0(t,e);if(t instanceof sp)return function(r,i){if(!v0(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=cp(l,i.Ku(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ex(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:nu(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nu(i.serializer,s)}}if(r instanceof op)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rs)return{bytesValue:jT(i.serializer,r._byteString)};if(r instanceof _t){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ap)return function(o,l){return{mapValue:{fields:{[pT]:{stringValue:mT},[Zl]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Wu("VectorValues must only contain numeric values.");return zf(l.serializer,c)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${Wu(r)}`)}(t,e)}function w0(t,e){const n={};return lT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oi(t,(r,i)=>{const s=cp(i,e.qu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function E0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof op||t instanceof rs||t instanceof _t||t instanceof sp||t instanceof ap)}function T0(t,e,n){if(!E0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Wu(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function yO(t,e,n){if((e=tt(e))instanceof ip)return e._internalPath;if(typeof e=="string")return I0(t,e);throw au("Field path arguments must be of type string or ",t,!1,void 0,n)}const vO=new RegExp("[~\\*/\\[\\]]");function I0(t,e,n){if(e.search(vO)>=0)throw au(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ip(...e.split("."))._internalPath}catch{throw au(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function au(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(b.INVALID_ARGUMENT,l+t+u)}function _O(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wO extends S0{data(){return super.data()}}function hp(t,e){return typeof e=="string"?I0(t,e):e instanceof ip?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dp{}class A0 extends dp{}function TO(t,e,...n){let r=[];e instanceof dp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof pp).length,l=s.filter(u=>u instanceof fp).length;if(o>1||o>0&&l>0)throw new H(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class fp extends A0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fp(e,n,r)}_apply(e){const n=this._parse(e);return R0(e._query,n),new ci(e.firestore,e.converter,gd(e._query,n))}_parse(e){const n=_0(e.firestore);return function(s,o,l,u,c,f,p){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){mv(p,f);const C=[];for(const N of p)C.push(pv(u,s,N));m={arrayValue:{values:C}}}else m=pv(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||mv(p,f),m=gO(l,o,p,f==="in"||f==="not-in");return ke.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class pp extends dp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new pp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Gt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)R0(o,u),o=gd(o,u)}(e._query,n),new ci(e.firestore,e.converter,gd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mp extends A0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new mp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new H(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new H(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fo(s,o)}(e._query,this._field,this._direction);return new ci(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new fs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function IO(t,e="asc"){const n=e,r=hp("orderBy",t);return mp._create(r,n)}function pv(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new H(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!IT(e)&&n.indexOf("/")!==-1)throw new H(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!q.isDocumentKey(r))throw new H(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cy(t,new q(r))}if(n instanceof _t)return Cy(t,n._key);throw new H(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wu(n)}.`)}function mv(t,e){if(!Array.isArray(t)||t.length===0)throw new H(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function R0(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class SO{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return oi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Zl].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new ap(s)}convertGeoPoint(e){return new op(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Lo(e));default:return null}}convertTimestamp(e){const n=mr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);oe(qT(r));const i=new bo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class C0 extends S0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ml extends C0{data(e={}){return super.data(e)}}class RO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ks(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ml(this._firestore,this._userDataWriter,r.key,r,new Ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ks(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ks(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:CO(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class P0 extends SO{constructor(e){super(),this.firestore=e}convertBytes(e){return new rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function PO(t,e){const n=lo(t.firestore,ou),r=uO(t),i=AO(t.converter,e);return NO(n,[mO(_0(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Sn.exists(!1))]).then(()=>r)}function kO(t,...e){var n,r,i;t=tt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||fv(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(fv(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,f;if(t instanceof _t)c=lo(t.firestore,ou),f=jf(t._key.path),u={next:p=>{e[o]&&e[o](xO(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=lo(t,ci);c=lo(p.firestore,ou),f=p._query;const m=new P0(c);u={next:A=>{e[o]&&e[o](new RO(c,m,p,A))},error:e[o+1],complete:e[o+2]},EO(t._query)}return function(m,A,C,N){const O=new rO(N),w=new FD(A,O,C);return m.asyncQueue.enqueueAndForget(async()=>VD(await iv(m),w)),()=>{O.su(),m.asyncQueue.enqueueAndForget(async()=>LD(await iv(m),w))}}(y0(c),f,l,u)}function NO(t,e){return function(r,i){const s=new Br;return r.asyncQueue.enqueueAndForget(async()=>GD(await oO(r),i,s)),s.promise}(y0(t),e)}function xO(t,e,n){const r=n.docs.get(e._key),i=new P0(t);return new C0(t,i,e._key,r,new Ks(n.hasPendingWrites,n.fromCache),e.converter)}function DO(){return new up("serverTimestamp")}(function(e,n=!0){(function(i){cs=i})(ls),an(new qt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ou(new pN(r.getProvider("auth-internal")),new yN(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),xt(my,gy,e),xt(my,gy,"esm2017")})();const k0="@firebase/installations",gp="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=1e4,x0=`w:${gp}`,D0="FIS_v2",OO="https://firebaseinstallations.googleapis.com/v1",VO=60*60*1e3,LO="installations",bO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zr=new ii(LO,bO,MO);function O0(t){return t instanceof Qt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0({projectId:t}){return`${OO}/projects/${t}/installations`}function L0(t){return{token:t.token,requestStatus:2,expiresIn:UO(t.expiresIn),creationTime:Date.now()}}async function b0(t,e){const r=(await e.json()).error;return Zr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function M0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function FO(t,{refreshToken:e}){const n=M0(t);return n.append("Authorization",jO(e)),n}async function F0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function UO(t){return Number(t.replace("s","000"))}function jO(t){return`${D0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=V0(t),i=M0(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:D0,appId:t.appId,sdkVersion:x0},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await F0(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:L0(c.authToken)}}else throw await b0("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=/^[cdef][\w-]{21}$/,Cd="";function WO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=HO(t);return $O.test(n)?n:Cd}catch{return Cd}}function HO(t){return BO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=new Map;function z0(t,e){const n=qu(t);B0(n,e),qO(n,e)}function B0(t,e){const n=j0.get(t);if(n)for(const r of n)r(e)}function qO(t,e){const n=KO();n&&n.postMessage({key:t,fid:e}),GO()}let Ur=null;function KO(){return!Ur&&"BroadcastChannel"in self&&(Ur=new BroadcastChannel("[Firebase] FID Change"),Ur.onmessage=t=>{B0(t.data.key,t.data.fid)}),Ur}function GO(){j0.size===0&&Ur&&(Ur.close(),Ur=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO="firebase-installations-database",YO=1,ei="firebase-installations-store";let th=null;function yp(){return th||(th=fE(QO,YO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}})),th}async function lu(t,e){const n=qu(t),i=(await yp()).transaction(ei,"readwrite"),s=i.objectStore(ei),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&z0(t,e.fid),e}async function $0(t){const e=qu(t),r=(await yp()).transaction(ei,"readwrite");await r.objectStore(ei).delete(e),await r.done}async function Ku(t,e){const n=qu(t),i=(await yp()).transaction(ei,"readwrite"),s=i.objectStore(ei),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&z0(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t){let e;const n=await Ku(t.appConfig,r=>{const i=XO(r),s=JO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Cd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function XO(t){const e=t||{fid:WO(),registrationStatus:0};return W0(e)}function JO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Zr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ZO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eV(t)}:{installationEntry:e}}async function ZO(t,e){try{const n=await zO(t,e);return lu(t.appConfig,n)}catch(n){throw O0(n)&&n.customData.serverCode===409?await $0(t.appConfig):await lu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function eV(t){let e=await gv(t.appConfig);for(;e.registrationStatus===1;)await U0(100),e=await gv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vp(t);return r||n}return e}function gv(t){return Ku(t,e=>{if(!e)throw Zr.create("installation-not-found");return W0(e)})}function W0(t){return tV(t)?{fid:t.fid,registrationStatus:0}:t}function tV(t){return t.registrationStatus===1&&t.registrationTime+N0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nV({appConfig:t,heartbeatServiceProvider:e},n){const r=rV(t,n),i=FO(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:x0,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await F0(()=>fetch(r,l));if(u.ok){const c=await u.json();return L0(c)}else throw await b0("Generate Auth Token",u)}function rV(t,{fid:e}){return`${V0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(t,e=!1){let n;const r=await Ku(t.appConfig,s=>{if(!H0(s))throw Zr.create("not-registered");const o=s.authToken;if(!e&&oV(o))return s;if(o.requestStatus===1)return n=iV(t,e),s;{if(!navigator.onLine)throw Zr.create("app-offline");const l=lV(s);return n=sV(t,l),l}});return n?await n:r.authToken}async function iV(t,e){let n=await yv(t.appConfig);for(;n.authToken.requestStatus===1;)await U0(100),n=await yv(t.appConfig);const r=n.authToken;return r.requestStatus===0?_p(t,e):r}function yv(t){return Ku(t,e=>{if(!H0(e))throw Zr.create("not-registered");const n=e.authToken;return uV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sV(t,e){try{const n=await nV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await lu(t.appConfig,r),n}catch(n){if(O0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await lu(t.appConfig,r)}throw n}}function H0(t){return t!==void 0&&t.registrationStatus===2}function oV(t){return t.requestStatus===2&&!aV(t)}function aV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+VO}function lV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function uV(t){return t.requestStatus===1&&t.requestTime+N0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cV(t){const e=t,{installationEntry:n,registrationPromise:r}=await vp(e);return r?r.catch(console.error):_p(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hV(t,e=!1){const n=t;return await dV(n),(await _p(n,e)).token}async function dV(t){const{registrationPromise:e}=await vp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fV(t){if(!t||!t.options)throw nh("App Configuration");if(!t.name)throw nh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw nh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function nh(t){return Zr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="installations",pV="installations-internal",mV=t=>{const e=t.getProvider("app").getImmediate(),n=fV(e),r=Xo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},gV=t=>{const e=t.getProvider("app").getImmediate(),n=Xo(e,q0).getImmediate();return{getId:()=>cV(n),getToken:i=>hV(n,i)}};function yV(){an(new qt(q0,mV,"PUBLIC")),an(new qt(pV,gV,"PRIVATE"))}yV();xt(k0,gp);xt(k0,gp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="analytics",vV="firebase_id",_V="origin",wV=60*1e3,EV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new ku("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TV={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Dt=new ii("analytics","Analytics",TV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(t){if(!t.startsWith(wp)){const e=Dt.create("invalid-gtag-resource",{gtagURL:t});return pt.warn(e.message),""}return t}function K0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function SV(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function AV(t,e){const n=SV("firebase-js-sdk-policy",{createScriptURL:IV}),r=document.createElement("script"),i=`${wp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function RV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function CV(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await K0(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){pt.error(l)}t("config",i,s)}async function PV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await K0(n);for(const u of o){const c=l.find(p=>p.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){pt.error(s)}}function kV(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await PV(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await CV(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){pt.error(l)}}return i}function NV(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=kV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function xV(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(wp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV=30,OV=1e3;class VV{constructor(e={},n=OV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const G0=new VV;function LV(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function bV(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:LV(r)},s=EV.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Dt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function MV(t,e=G0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Dt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Dt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new jV;return setTimeout(async()=>{l.abort()},wV),Q0({appId:r,apiKey:i,measurementId:s},o,l,e)}async function Q0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=G0){var s;const{appId:o,measurementId:l}=t;try{await FV(r,e)}catch(u){if(l)return pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await bV(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!UV(c)){if(i.deleteThrottleMetadata(o),l)return pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ug(n,i.intervalMillis,DV):Ug(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),pt.debug(`Calling attemptFetch again in ${f} millis`),Q0(t,p,r,i)}}function FV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function UV(t){if(!(t instanceof Qt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zV(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BV(){if(uE())try{await cE()}catch(t){return pt.warn(Dt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return pt.warn(Dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $V(t,e,n,r,i,s,o){var l;const u=MV(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&pt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>pt.error(A)),e.push(u);const c=BV().then(A=>{if(A)return r.getId()}),[f,p]=await Promise.all([u,c]);xV(s)||AV(s,f.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[_V]="firebase",m.update=!0,p!=null&&(m[vV]=p),i("config",f.measurementId,m),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WV{constructor(e){this.app=e}_delete(){return delete uo[this.app.options.appId],Promise.resolve()}}let uo={},_v=[];const wv={};let rh="dataLayer",HV="gtag",Ev,Y0,Tv=!1;function qV(){const t=[];if(lE()&&t.push("This is a browser extension environment."),DC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Dt.create("invalid-analytics-context",{errorInfo:e});pt.warn(n.message)}}function KV(t,e,n){qV();const r=t.options.appId;if(!r)throw Dt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Dt.create("no-api-key");if(uo[r]!=null)throw Dt.create("already-exists",{id:r});if(!Tv){RV(rh);const{wrappedGtag:s,gtagCore:o}=NV(uo,_v,wv,rh,HV);Y0=s,Ev=o,Tv=!0}return uo[r]=$V(t,_v,wv,e,Ev,rh,n),new WV(t)}function GV(t,e,n,r){t=tt(t),zV(Y0,uo[t.app.options.appId],e,n,r).catch(i=>pt.error(i))}const Iv="@firebase/analytics",Sv="0.10.12";function QV(){an(new qt(vv,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return KV(r,i,n)},"PUBLIC")),an(new qt("analytics-internal",t,"PRIVATE")),xt(Iv,Sv),xt(Iv,Sv,"esm2017");function t(e){try{const n=e.getProvider(vv).getImmediate();return{logEvent:(r,i,s)=>GV(n,r,i,s)}}catch(n){throw Dt.create("interop-component-reg-failed",{reason:n})}}}QV();const YV={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0};let Bo;Hg().length?Bo=Hg()[0]:Bo=pE(YV);const Av=cO(Bo);function XV(t){const[e,n]=Jn.useState(t.userName),[r,i]=Jn.useState(""),[s,o]=Jn.useState(null),l=Of(Bo);async function u(){Qk(l,`${e}@fozzgames.com`,r).then(m=>{m.user,localStorage.setItem("userName",e),t.onLogin(e)}).catch(m=>{o(`Error: ${m.message}`)})}async function c(){Gk(l,`${e}@fozzgames.com`,r).then(m=>{m.user,localStorage.setItem("userName",e),t.onLogin(e)}).catch(m=>{o(`Error: ${m.message}`)})}function f(m){n(m.target.value)}function p(m){i(m.target.value)}return x.jsx(x.Fragment,{children:x.jsxs("div",{className:"login_body",children:[x.jsxs("div",{className:"form-group",children:[x.jsx("label",{children:"Username"}),x.jsx("input",{type:"text",id:"username",placeholder:"Enter username",value:e,onChange:f})]}),x.jsxs("div",{className:"form-group",children:[x.jsx("label",{children:"Password"}),x.jsx("input",{type:"password",id:"password",placeholder:"Your password here",value:r,onChange:p})]}),x.jsx($l,{variant:"primary",className:"btn btn-success",onClick:u,children:"Login"}),x.jsx($l,{variant:"secondary",className:"btn btn-success",onClick:c,children:"Create"}),x.jsx("div",{children:s})]})})}const zn=class zn{constructor(e){this.name=e}};Sa(zn,"Unknown",new zn("unknown")),Sa(zn,"Authenticated",new zn("authenticated")),Sa(zn,"Unauthenticated",new zn("unauthenticated"));let jt=zn;function JV(t){const e=Gw(),n=Of(Bo);function r(){Jk(n).then(()=>{t.onLogout(null,jt.Unauthenticated),localStorage.removeItem("userName")}).catch(i=>{console.error(i)}).finally(()=>{e("/login")})}return x.jsxs("div",{id:"playControls",children:[x.jsx("div",{id:"playerName",children:t.userName}),x.jsx($l,{type:"button",className:"btn btn-secondary",onClick:r,children:"Logout"})]})}function ZV({userName:t,authState:e,onAuthChange:n}){return x.jsxs("div",{className:"container-fluid text-center",children:[e!==jt.Unknown&&x.jsx("div",{className:"Welcome",children:"Welcome to FozzGames!"}),x.jsx("p",{className:"login_title",children:"Login"}),x.jsxs("div",{className:"login_body",children:[e===jt.Authenticated&&x.jsx(JV,{userName:t,onLogout:()=>n(t,jt.Unauthenticated)}),e===jt.Unauthenticated&&x.jsx(XV,{userName:t,onLogin:r=>{n(r,jt.Authenticated)}})]})]})}const eL=()=>x.jsxs("div",{className:"container-fluid text-center",children:[x.jsx("div",{className:"contact-bar",children:x.jsx("a",{href:"mailto:elidbarton@gmail.com",children:"Contact us"})}),x.jsx("p",{className:"Welcome"}),x.jsx("p",{children:"Featured game:"}),x.jsx("div",{className:"banner",children:x.jsxs("div",{className:"banner-overlay",children:[x.jsx("p",{className:"Welcome",children:"Lord of the Donuts"}),x.jsx(zs,{type:"button",className:"btn btn-primary btn-lg",to:"games/lordofdonuts",children:"Play"}),x.jsx("p",{children:"Todd must save his donuts, and the world."})]})}),x.jsx("p",{children:"Latest:"}),x.jsxs("div",{className:"item-list",children:[x.jsx("li",{children:x.jsxs(zs,{className:"list-item",to:"games/dogbubbles",children:[x.jsx("img",{src:"/FozzGames//imgs/dogbubbles.png",alt:"Dog Bubbles",height:"100"}),"Dog Bubbles"]})}),x.jsx("li",{children:x.jsxs(zs,{className:"list-item",to:"games/lordofdonuts",children:[x.jsx("img",{src:"/FozzGames//imgs/lordofdonuts.png",alt:"Lord of the Donuts",height:"100"}),"Lord of the Donuts"]})}),x.jsx("li",{children:x.jsxs(zs,{className:"list-item",to:"games/galaga",children:[x.jsx("img",{src:"/FozzGames//imgs/galaga.png",alt:"Galaga Online",height:"100"}),"Galaga Online"]})})]})]});function tL(){const[t,e]=Jn.useState([]);Jn.useEffect(()=>{fetch("/api/scores").then(i=>i.json()).then(i=>{e(i),localStorage.setItem("scores",JSON.stringify(i))}).catch(()=>{const i=localStorage.getItem("scores");i&&e(JSON.parse(i))})},[]);var n=[],r=[];if(t.length){for(const[i,s]of t.entries())r.push({name:s.name,score:s.score});r.sort((i,s)=>-1*(i.score-s.score)),r.forEach((i,s)=>{n.push(x.jsxs("li",{children:[x.jsxs("span",{className:"player-name",children:[s+1,". ",i.name]}),x.jsx("span",{className:"score",children:i.score})]},s))})}else n.push(x.jsxs("li",{children:[x.jsx("span",{className:"player-name",children:"Nobody has scored yet!"}),x.jsx("span",{className:"score",children:"Be the first!"})]})),console.log(n);return x.jsx("div",{className:"container-fluid",children:x.jsxs("div",{className:"Leaderboard",children:[x.jsx("h1",{style:{textAlign:"center"},children:"Leaderboard"}),x.jsx("ol",{children:n})]})})}function nL(){return x.jsxs("div",{children:[x.jsx("div",{className:"alert-container"}),x.jsx("iframe",{src:"src/game/index.html",width:"480px",height:"600px",title:"game window"}),x.jsx("div",{}),x.jsxs("h3",{children:["High Score: ",x.jsx("span",{id:"highscore",children:"0"})]}),x.jsx("h2",{children:"Instructions:"}),x.jsx("p",{style:{marginLeft:"20em",marginRight:"20em"},children:"Press space to shoot and arrow keys or wasd to move. Get points by killing enemies and advancing through the rounds. Get a higher score than your last to save it."}),x.jsx("script",{src:"./rungame.js"})]})}const rL=()=>x.jsxs("div",{className:"container-fluid text-center",children:[x.jsx("p",{className:"Welcome",children:"Games List"}),x.jsx(Mr,{className:"nav-link",to:"dogbubbles",children:"Dog Bubbles"}),x.jsx(Mr,{className:"nav-link",to:"galaga",children:"Galaga Online"}),x.jsx(Mr,{className:"nav-link",to:"lordofdonuts",children:"Lord of the Donuts"})]}),Ep=({gameId:t})=>{const[e,n]=z.useState([]),[r,i]=z.useState(""),s=Of();z.useEffect(()=>{const u=cv(Av,"comments"),c=TO(u,IO("timestamp","asc")),f=kO(c,p=>{const m=[];p.forEach(A=>{const C=A.data();C.gameId===t&&m.push({id:A.id,...C})}),n(m)});return()=>f()},[t]);const o=u=>{i(u.target.value)},l=async u=>{if(u.preventDefault(),!s.currentUser||r.trim()==="")return;const c=localStorage.getItem("userName");if(!c){console.error("no username");return}try{const f=await PO(cv(Av,"comments"),{gameId:t,userId:s.currentUser.uid,userName:c,text:r,timestamp:DO()});i(""),console.log("Comment added with ID: ",f.id)}catch(f){console.error("Error adding comment: ",f)}};return x.jsxs("div",{className:"comments-section container comment-container",children:[x.jsx("h3",{className:"mb-3",children:"Comments"}),s.currentUser&&x.jsxs("form",{onSubmit:l,className:"mb-3",children:[x.jsx("div",{className:"mb-2",children:x.jsx("textarea",{className:"form-control",value:r,onChange:o,placeholder:"Add a comment...",rows:"3"})}),x.jsx("button",{type:"submit",className:"btn btn-primary",children:"Post"})]}),x.jsx("ul",{className:"list-unstyled",children:e.map(u=>x.jsxs("li",{className:"mb-2 p-2 border rounded bg-light",children:[x.jsxs("span",{className:"fw-bold",children:[u.userName,": "]})," ",x.jsx("span",{className:"comment-text",children:u.text})]},u.id))})]})},iL=()=>x.jsxs(x.Fragment,{children:[x.jsx("div",{children:x.jsx("iframe",{src:"/FozzGames/game_files/galaga_online/index.html",width:"480px",height:"600px"})}),x.jsx("div",{children:x.jsx(Ep,{gameId:"galaga"})})]}),sL=()=>x.jsxs(x.Fragment,{children:[x.jsx("div",{children:x.jsx("iframe",{src:"/FozzGames/game_files/lord_of_the_donuts/index.html",width:"864px",height:"486px",title:"Lord of the Donuts"})}),x.jsx("div",{children:x.jsx(Ep,{gameId:"lordofthedonuts"})})]}),oL=()=>x.jsxs(x.Fragment,{children:[x.jsx("div",{children:x.jsx("iframe",{src:"/FozzGames/game_files/dog_bubbles/index.html",width:"270px",height:"600px"})}),x.jsx("div",{children:x.jsx(Ep,{gameId:"dogbubbles"})})]}),aL=()=>x.jsxs("div",{className:"container-fluid text-center",children:[x.jsxs(Xw,{children:[x.jsx(Rt,{path:"dogbubbles",element:x.jsx(oL,{})}),x.jsx(Rt,{path:"galaga",element:x.jsx(iL,{})}),x.jsx(Rt,{path:"lordofdonuts",element:x.jsx(sL,{})}),x.jsx(Rt,{path:"/",element:x.jsx("p",{})}),x.jsx(Rt,{path:"*",element:x.jsx(X0,{})})]}),x.jsx(rL,{})]});function X0(){return x.jsx("main",{className:"container-fluid bg-secondary text-center",children:"404: Return to sender. Address unknown."})}function lL(){const[t,e]=Jn.useState(localStorage.getItem("userName")||""),n=t?jt.Authenticated:jt.Unauthenticated,[r,i]=Jn.useState(n);return z.useEffect(()=>{localStorage.getItem("username")},[]),x.jsx(eC,{basename:"FozzGames",children:x.jsxs("div",{className:"app bg-dark text-light",children:[x.jsx("header",{className:"container-fluid",children:x.jsxs("nav",{className:"navbar navbar-dark",children:[x.jsx("p",{className:"navbar-brand",children:"FozzGames"}),x.jsxs("menu",{className:"navbar-nav",children:[x.jsx("li",{className:"nav-item",children:x.jsx(Mr,{className:"nav-link",to:"",children:"Home"})}),x.jsx("li",{className:"nav-item",children:x.jsx(Mr,{className:"nav-link",to:"games",children:"Games"})}),r===jt.Unauthenticated?x.jsx("li",{className:"nav-item",children:x.jsx(Mr,{className:"nav-link",to:"login",children:"Login"})}):x.jsx("li",{className:"nav-item",children:x.jsx(Mr,{className:"nav-link",to:"login",children:t})})]})]})}),x.jsx("main",{children:x.jsxs(Xw,{children:[x.jsx(Rt,{path:"/",element:x.jsx(eL,{})}),x.jsx(Rt,{path:"/games/*",element:x.jsx(aL,{})}),x.jsx(Rt,{path:"/play",element:x.jsx(nL,{userName:t})}),x.jsx(Rt,{path:"/scores",element:x.jsx(tL,{})}),x.jsx(Rt,{path:"/login",element:x.jsx(ZV,{userName:t,authState:r,onAuthChange:(s,o)=>{i(o),e(s)}}),exact:!0}),x.jsx(Rt,{path:"*",element:x.jsx(X0,{})})]})}),x.jsxs("footer",{children:[x.jsx("span",{children:"Creator: Eli Barton"}),x.jsxs("div",{children:[x.jsx("a",{className:"footer-link",href:"https://github.com/EliBarton",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),x.jsx("a",{className:"footer-link",href:"https://www.youtube.com/@FozzGames",target:"_blank",rel:"noopener noreferrer",children:"YouTube"}),x.jsx("a",{className:"footer-link",href:"https://x.com/Fozz_MK",target:"_blank",rel:"noopener noreferrer",children:"X"}),x.jsx("a",{className:"footer-link",href:"https://fozzgames.itch.io",target:"_blank",rel:"noopener noreferrer",children:"itch.io"})]})]})]})})}const uL=ih.createRoot(document.getElementById("root"));uL.render(x.jsx(lL,{}));
