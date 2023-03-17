(()=>{var V=Object.defineProperty;var d=(e,t)=>{for(var n in t)V(e,n,{get:t[n],enumerable:!0})};var h={};d(h,{SetText:()=>$,Text:()=>ee});var Z=window.location.origin+"/wails/runtime";function O(e,t){let n=new URL(Z);return n.searchParams.append("method",e),t&&n.searchParams.append("args",JSON.stringify(t)),new Promise((r,i)=>{fetch(n).then(o=>{if(o.ok)return o.headers.get("Content-Type")&&o.headers.get("Content-Type").indexOf("application/json")!==-1?o.json():o.text();i(Error(o.statusText))}).then(o=>r(o)).catch(o=>i(o))})}function l(e,t){return!t||t===-1?function(n,r){return O(e+"."+n,r)}:function(n,r){return r=r||{},r.windowID=t,O(e+"."+n,r)}}var k=l("clipboard");function $(e){return k("SetText",{text:e})}function ee(){return k("Text")}var S={};d(S,{Hide:()=>te,Quit:()=>re,Show:()=>ne});var C=l("application");function te(){return C("Hide")}function ne(){return C("Show")}function re(){return C("Quit")}var M={};d(M,{Log:()=>oe});var ie=l("log");function oe(e){return ie("Log",e)}var v={};d(v,{GetAll:()=>le,GetCurrent:()=>ue,GetPrimary:()=>ae});var b=l("screens");function le(){return b("GetAll")}function ae(){return b("GetPrimary")}function ue(){return b("GetCurrent")}var ce="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var p=(e=21)=>{let t="",n=e;for(;n--;)t+=ce[Math.random()*64|0];return t};var se=l("call"),u=new Map;function fe(){let e;do e=p();while(u.has(e));return e}function A(e,t,n){let r=u.get(e);r&&(n?r.resolve(JSON.parse(t)):r.resolve(t),u.delete(e))}function R(e,t){let n=u.get(e);n&&(n.reject(t),u.delete(e))}function T(e,t){return new Promise((n,r)=>{let i=fe();t=t||{},t["call-id"]=i,u.set(i,{resolve:n,reject:r}),se(e,t).catch(o=>{r(o),u.delete(i)})})}function W(e){return T("Call",e)}function P(e){return T("Call",{packageName:"wails-plugins",structName:e.plugin,methodName:e.methodName,args:e.args})}function N(e){let t=l("window",e);return{Center:()=>t("Center"),SetTitle:n=>t("SetTitle",{title:n}),Fullscreen:()=>t("Fullscreen"),UnFullscreen:()=>t("UnFullscreen"),SetSize:(n,r)=>t("SetSize",{width:n,height:r}),Size:()=>t("Size"),SetMaxSize:(n,r)=>t("SetMaxSize",{width:n,height:r}),SetMinSize:(n,r)=>t("SetMinSize",{width:n,height:r}),SetAlwaysOnTop:n=>t("SetAlwaysOnTop",{alwaysOnTop:n}),SetPosition:(n,r)=>t("SetPosition",{x:n,y:r}),Position:()=>t("Position"),Screen:()=>t("Screen"),Hide:()=>t("Hide"),Maximise:()=>t("Maximise"),Show:()=>t("Show"),Close:()=>t("Close"),ToggleMaximise:()=>t("ToggleMaximise"),UnMaximise:()=>t("UnMaximise"),Minimise:()=>t("Minimise"),UnMinimise:()=>t("UnMinimise"),SetBackgroundColour:(n,r,i,o)=>t("SetBackgroundColour",{r:n,g:r,b:i,a:o})}}var me=l("events"),E=class{constructor(t,n,r){this.eventName=t,this.maxCallbacks=r||-1,this.Callback=i=>(n(i),this.maxCallbacks===-1?!1:(this.maxCallbacks-=1,this.maxCallbacks===0))}};var a=new Map;function w(e,t,n){let r=a.get(e)||[],i=new E(e,t,n);return r.push(i),a.set(e,r),()=>de(i)}function y(e,t){return w(e,t,-1)}function D(e,t){return w(e,t,1)}function de(e){let t=e.eventName,n=a.get(t).filter(r=>r!==e);n.length===0?a.delete(t):a.set(t,n)}function F(e){console.log("dispatching event: ",{event:e});let t=a.get(e.name);if(t){let n=[];t.forEach(r=>{r.Callback(e)&&n.push(r)}),n.length>0&&(t=t.filter(r=>!n.includes(r)),t.length===0?a.delete(e.name):a.set(e.name,t))}}function U(e,...t){[e,...t].forEach(r=>{a.delete(r)})}function z(){a.clear()}function g(e){return me("Emit",e)}var pe=l("dialog"),c=new Map;function we(){let e;do e=p();while(c.has(e));return e}function I(e,t,n){let r=c.get(e);r&&(n?r.resolve(JSON.parse(t)):r.resolve(t),c.delete(e))}function G(e,t){let n=c.get(e);n&&(n.reject(t),c.delete(e))}function s(e,t){return new Promise((n,r)=>{let i=we();t=t||{},t["dialog-id"]=i,c.set(i,{resolve:n,reject:r}),pe(e,t).catch(o=>{r(o),c.delete(i)})})}function B(e){return s("Info",e)}function Q(e){return s("Warning",e)}function H(e){return s("Error",e)}function m(e){return s("Question",e)}function J(e){return s("OpenFile",e)}function Y(e){return s("SaveFile",e)}var ge=l("contextmenu");function xe(e,t,n,r){return ge("OpenContextMenu",{id:e,x:t,y:n,data:r})}function _(e){e?window.addEventListener("contextmenu",q):window.removeEventListener("contextmenu",q)}function q(e){X(e.target,e)}function X(e,t){let n=e.getAttribute("data-contextmenu");if(n)t.preventDefault(),xe(n,t.clientX,t.clientY,e.getAttribute("data-contextmenu-data"));else{let r=e.parentElement;r&&X(r,t)}}function j(e){let t=g({name:e})}function he(){let e=document.querySelectorAll("[data-wml-event]");for(let t=0;t<e.length;t++){let n=e[t],r=n.getAttribute("data-wml-event"),i=n.getAttribute("data-wml-confirm"),o=n.getAttribute("data-wml-trigger")||"click",f=function(){if(i){m({Title:"Confirm",Message:i,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(x){x!=="No"&&j(r)});return}j(r)};n.removeEventListener(o,f),n.addEventListener(o,f)}}function K(e){wails.Window[e]===void 0&&console.log("Window method "+e+" not found"),wails.Window[e]()}function Ce(){let e=document.querySelectorAll("[data-wml-window]");for(let t=0;t<e.length;t++){let n=e[t],r=n.getAttribute("data-wml-window"),i=n.getAttribute("data-wml-confirm"),o=n.getAttribute("data-wml-trigger")||"click",f=function(){if(i){m({Title:"Confirm",Message:i,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(x){x!=="No"&&K(r)});return}K(r)};n.removeEventListener(o,f),n.addEventListener(o,f)}}function L(){he(),Ce()}window.wails={...Se(-1)};window._wails={dialogCallback:I,dialogErrorCallback:G,dispatchCustomEvent:F,callCallback:A,callErrorCallback:R};function Se(e){return{Clipboard:{...h},Application:{...S},Log:M,Screens:v,Call:W,Plugin:P,WML:{Reload:L},Dialog:{Info:B,Warning:Q,Error:H,Question:m,OpenFile:J,SaveFile:Y},Events:{Emit:g,On:y,Once:D,OnMultiple:w,Off:U,OffAll:z},Window:N(e)}}console.log("Wails v3.0.0 Debug Mode Enabled");_(!0);document.addEventListener("DOMContentLoaded",function(e){L()});})();
