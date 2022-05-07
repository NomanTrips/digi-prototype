var dt=Object.defineProperty,vt=Object.defineProperties;var ft=Object.getOwnPropertyDescriptors;var ze=Object.getOwnPropertySymbols;var ht=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable;var Te=(e,i,o)=>i in e?dt(e,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[i]=o,M=(e,i)=>{for(var o in i||(i={}))ht.call(i,o)&&Te(e,o,i[o]);if(ze)for(var o of ze(i))mt.call(i,o)&&Te(e,o,i[o]);return e},I=(e,i)=>vt(e,ft(i));import{c as z,a as v,h as q,b as H,r as S,i as Ae,o as K,n as ee,d as X,e as qe,g as F,l as me,f as ke,j as te,w as k,k as Ne,u as Ce,m as _e,P as bt,p as gt,q as j,s as yt,t as G,v as se,x as Ee,y as ce,z as be,A as de,B as Ie,C as pt,D as wt,E as qt,F as kt,G as Ct,H as J,I as _t,J as Oe,K as St,L as je,M as xt,N as Lt,O as Bt,Q as $t,R as ve,S as Z,T as zt,U as Tt,V as Et,W as Ot,X as Pt,Y as Ke,_ as Xe,Z as ge,$ as ye,a0 as O,a1 as E,a2 as Dt,a3 as Ue,a4 as pe,a5 as Pe,a6 as De,a7 as Qt,a8 as Rt}from"./index.1cce1aaa.js";var Mt=z({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const o=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:o.value},H(i.default))}}),Ft=z({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const o=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:o.value},H(i.default))}});function Vt(){const e=S(!Ae.value);return e.value===!1&&K(()=>{e.value=!0}),e}const Ye=typeof ResizeObserver!="undefined",Qe=Ye===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var we=z({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let o=null,r,t={width:-1,height:-1};function n(d){d===!0||e.debounce===0||e.debounce==="0"?u():o===null&&(o=setTimeout(u,e.debounce))}function u(){if(clearTimeout(o),o=null,r){const{offsetWidth:d,offsetHeight:a}=r;(d!==t.width||a!==t.height)&&(t={width:d,height:a},i("resize",t))}}const h=F();if(Object.assign(h.proxy,{trigger:n}),Ye===!0){let d;return K(()=>{ee(()=>{r=h.proxy.$el.parentNode,r&&(d=new ResizeObserver(n),d.observe(r),u())})}),X(()=>{clearTimeout(o),d!==void 0&&(d.disconnect!==void 0?d.disconnect():r&&d.unobserve(r))}),qe}else{let C=function(){clearTimeout(o),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",n,me.passive),a=void 0)},b=function(){C(),r&&r.contentDocument&&(a=r.contentDocument.defaultView,a.addEventListener("resize",n,me.passive),u())};const d=Vt();let a;return K(()=>{ee(()=>{r=h.proxy.$el,r&&b()})}),X(C),()=>{if(d.value===!0)return q("object",{style:Qe.style,tabindex:-1,type:"text/html",data:Qe.url,"aria-hidden":"true",onLoad:b})}}}}),Ht=z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:o}){const{proxy:{$q:r}}=F(),t=ke(te,()=>{console.error("QHeader needs to be child of QLayout")}),n=S(parseInt(e.heightHint,10)),u=S(!0),h=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?n.value:0;const f=n.value-t.scroll.value.position;return f>0?f:0}),a=v(()=>e.modelValue!==!0||h.value===!0&&u.value!==!0),C=v(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),b=v(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),g=v(()=>{const f=t.rows.value.top,x={};return f[0]==="l"&&t.left.space===!0&&(x[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(x[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),x});function c(f,x){t.update("header",f,x)}function y(f,x){f.value!==x&&(f.value=x)}function _({height:f}){y(n,f),c("size",f)}function p(f){C.value===!0&&y(u,!0),o("focusin",f)}k(()=>e.modelValue,f=>{c("space",f),y(u,!0),t.animate()}),k(d,f=>{c("offset",f)}),k(()=>e.reveal,f=>{f===!1&&y(u,e.modelValue)}),k(u,f=>{t.animate(),o("reveal",f)}),k(t.scroll,f=>{e.reveal===!0&&y(u,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const T={};return t.instances.header=T,e.modelValue===!0&&c("size",n.value),c("space",e.modelValue),c("offset",d.value),X(()=>{t.instances.header===T&&(t.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const f=Ne(i.default,[]);return e.elevated===!0&&f.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(q(we,{debounce:0,onResize:_})),q("header",{class:b.value,style:g.value,onFocusin:p},f)}}}),Re=z({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:i}){const o=v(()=>parseInt(e.lines,10)),r=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>q("div",{style:t.value,class:r.value},H(i.default))}});z({name:"QList",props:I(M({},Ce),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:i}){const o=F(),r=_e(e,o.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>q("div",{class:t.value},H(i.default))}});const Se={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Wt=Object.keys(Se);Se.all=!0;function Me(e){const i={};for(const o of Wt)e[o]===!0&&(i[o]=!0);return Object.keys(i).length===0?Se:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}function Fe(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}function At(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),bt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function fe(e,i,o){const r=be(e);let t,n=r.left-i.event.x,u=r.top-i.event.y,h=Math.abs(n),d=Math.abs(u);const a=i.direction;a.horizontal===!0&&a.vertical!==!0?t=n<0?"left":"right":a.horizontal!==!0&&a.vertical===!0?t=u<0?"up":"down":a.up===!0&&u<0?(t="up",h>d&&(a.left===!0&&n<0?t="left":a.right===!0&&n>0&&(t="right"))):a.down===!0&&u>0?(t="down",h>d&&(a.left===!0&&n<0?t="left":a.right===!0&&n>0&&(t="right"))):a.left===!0&&n<0?(t="left",h<d&&(a.up===!0&&u<0?t="up":a.down===!0&&u>0&&(t="down"))):a.right===!0&&n>0&&(t="right",h<d&&(a.up===!0&&u<0?t="up":a.down===!0&&u>0&&(t="down")));let C=!1;if(t===void 0&&o===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,C=!0,t==="left"||t==="right"?(r.left-=n,h=0,n=0):(r.top-=u,d=0,u=0)}return{synthetic:C,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:r,direction:t,isFirst:i.event.isFirst,isFinal:o===!0,duration:Date.now()-i.event.time,distance:{x:h,y:d},offset:{x:n,y:u},delta:{x:r.left-i.event.lastX,y:r.top-i.event.lastY}}}}let Nt=0;var he=gt({name:"touch-pan",beforeMount(e,{value:i,modifiers:o}){if(o.mouse!==!0&&j.has.touch!==!0)return;function r(n,u){o.mouse===!0&&u===!0?Ie(n):(o.stop===!0&&ce(n),o.prevent===!0&&Ee(n))}const t={uid:"qvtp_"+Nt++,handler:i,modifiers:o,direction:Me(o),noop:qe,mouseStart(n){Fe(n,t)&&yt(n)&&(G(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Fe(n,t)){const u=n.target;G(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,u){if(j.is.firefox===!0&&se(e,!0),t.lastEvt=n,u===!0||o.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0)){const a=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&Ee(a),n.cancelBubble===!0&&ce(a),Object.assign(a,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:a}}ce(n)}const{left:h,top:d}=be(n);t.event={x:h,y:d,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:d}},move(n){if(t.event===void 0)return;const u=be(n),h=u.left-t.event.x,d=u.top-t.event.y;if(h===0&&d===0)return;t.lastEvt=n;const a=t.event.mouse===!0,C=()=>{r(n,a),o.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),a===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),At(),t.styleCleanup=c=>{if(t.styleCleanup=void 0,o.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),a===!0){const y=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{y(),c()},50):y()}else c!==void 0&&c()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(n,t.event.mouse);const{payload:c,synthetic:y}=fe(n,t,!1);c!==void 0&&(t.handler(c)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&C(),t.event.lastX=c.position.left,t.event.lastY=c.position.top,t.event.lastDir=y===!0?void 0:c.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||a===!0&&t.modifiers.mouseAllDir===!0){C(),t.event.detected=!0,t.move(n);return}const b=Math.abs(h),g=Math.abs(d);b!==g&&(t.direction.horizontal===!0&&b>g||t.direction.vertical===!0&&b<g||t.direction.up===!0&&b<g&&d<0||t.direction.down===!0&&b<g&&d>0||t.direction.left===!0&&b>g&&h<0||t.direction.right===!0&&b>g&&h>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,u){if(t.event!==void 0){if(de(t,"temp"),j.is.firefox===!0&&se(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(fe(n===void 0?t.lastEvt:n,t).payload);const{payload:h}=fe(n===void 0?t.lastEvt:n,t,!0),d=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,o.mouse===!0&&G(t,"main",[[e,"mousedown","mouseStart",`passive${o.mouseCapture===!0?"Capture":""}`]]),j.has.touch===!0&&G(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const o=e.__qtouchpan;o!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&o.end(),o.handler=i.value),o.direction=Me(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),de(i,"main"),de(i,"temp"),j.is.firefox===!0&&se(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}});const Ve=150;z({name:"QDrawer",inheritAttrs:!1,props:I(M(M({},pt),Ce),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...wt,"on-layout","mini-state"],setup(e,{slots:i,emit:o,attrs:r}){const t=F(),{proxy:{$q:n}}=t,u=_e(e,n),{preventBodyScroll:h}=St(),{registerTimeout:d}=qt(),a=ke(te,()=>{console.error("QDrawer needs to be child of QLayout")});let C,b,g;const c=S(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),y=v(()=>e.mini===!0&&c.value!==!0),_=v(()=>y.value===!0?e.miniWidth:e.width),p=S(e.showIfAbove===!0&&c.value===!1?!0:e.modelValue===!0),T=v(()=>e.persistent!==!0&&(c.value===!0||Ge.value===!0));function f(l,m){if(P(),l!==!1&&a.animate(),$(0),c.value===!0){const L=a.instances[U.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),Q(1),a.isContainer.value!==!0&&h(!0)}else Q(0),l!==!1&&le(!1);d(()=>{l!==!1&&le(!0),m!==!0&&o("show",l)},Ve)}function x(l,m){V(),l!==!1&&a.animate(),Q(0),$(W.value*_.value),re(),m!==!0&&d(()=>{o("hide",l)},Ve)}const{show:s,hide:w}=kt({showing:p,hideOnRouteChange:T,handleShow:f,handleHide:x}),{addToHistory:P,removeFromHistory:V}=Ct(p,w,T),D={belowBreakpoint:c,hide:w},B=v(()=>e.side==="right"),W=v(()=>(n.lang.rtl===!0?-1:1)*(B.value===!0?1:-1)),xe=S(0),A=S(!1),ae=S(!1),Le=S(_.value*W.value),U=v(()=>B.value===!0?"left":"right"),ne=v(()=>p.value===!0&&c.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),ie=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(B.value?"R":"L")>-1||n.platform.is.ios===!0&&a.isContainer.value===!0),N=v(()=>e.overlay===!1&&p.value===!0&&c.value===!1),Ge=v(()=>e.overlay===!0&&p.value===!0&&c.value===!1),Je=v(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&A.value===!1?" hidden":"")),Ze=v(()=>({backgroundColor:`rgba(0,0,0,${xe.value*.4})`})),Be=v(()=>B.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),et=v(()=>B.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),tt=v(()=>{const l={};return a.header.space===!0&&Be.value===!1&&(ie.value===!0?l.top=`${a.header.offset}px`:a.header.space===!0&&(l.top=`${a.header.size}px`)),a.footer.space===!0&&et.value===!1&&(ie.value===!0?l.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(l.bottom=`${a.footer.size}px`)),l}),at=v(()=>{const l={width:`${_.value}px`,transform:`translateX(${Le.value}px)`};return c.value===!0?l:Object.assign(l,tt.value)}),nt=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),it=v(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${y.value===!0?"mini":"standard"}`+(ie.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Be.value===!0?" q-drawer--top-padding":""))),ot=v(()=>{const l=n.lang.rtl===!0?e.side:U.value;return[[he,st,void 0,{[l]:!0,mouse:!0}]]}),lt=v(()=>{const l=n.lang.rtl===!0?U.value:e.side;return[[he,$e,void 0,{[l]:!0,mouse:!0}]]}),rt=v(()=>{const l=n.lang.rtl===!0?U.value:e.side;return[[he,$e,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function oe(){ct(c,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}k(c,l=>{l===!0?(C=p.value,p.value===!0&&w(!1)):e.overlay===!1&&e.behavior!=="mobile"&&C!==!1&&(p.value===!0?($(0),Q(0),re()):s(!1))}),k(()=>e.side,(l,m)=>{a.instances[m]===D&&(a.instances[m]=void 0,a[m].space=!1,a[m].offset=0),a.instances[l]=D,a[l].size=_.value,a[l].space=N.value,a[l].offset=ne.value}),k(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&oe()}),k(()=>e.behavior+e.breakpoint,oe),k(a.isContainer,l=>{p.value===!0&&h(l!==!0),l===!0&&oe()}),k(a.scrollbarWidth,()=>{$(p.value===!0?0:void 0)}),k(ne,l=>{R("offset",l)}),k(N,l=>{o("on-layout",l),R("space",l)}),k(B,()=>{$()}),k(_,l=>{$(),ue(e.miniToOverlay,l)}),k(()=>e.miniToOverlay,l=>{ue(l,_.value)}),k(()=>n.lang.rtl,()=>{$()}),k(()=>e.mini,()=>{e.modelValue===!0&&(ut(),a.animate())}),k(y,l=>{o("mini-state",l)});function $(l){l===void 0?ee(()=>{l=p.value===!0?0:_.value,$(W.value*l)}):(a.isContainer.value===!0&&B.value===!0&&(c.value===!0||Math.abs(l)===_.value)&&(l+=W.value*a.scrollbarWidth.value),Le.value=l)}function Q(l){xe.value=l}function le(l){const m=l===!0?"remove":a.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function ut(){clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,b=setTimeout(()=>{ae.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function st(l){if(p.value!==!1)return;const m=_.value,L=J(l.distance.x,0,m);if(l.isFinal===!0){L>=Math.min(75,m)===!0?s():(a.animate(),Q(0),$(W.value*m)),A.value=!1;return}$((n.lang.rtl===!0?B.value!==!0:B.value)?Math.max(m-L,0):Math.min(0,L-m)),Q(J(L/m,0,1)),l.isFirst===!0&&(A.value=!0)}function $e(l){if(p.value!==!0)return;const m=_.value,L=l.direction===e.side,Y=(n.lang.rtl===!0?L!==!0:L)?J(l.distance.x,0,m):0;if(l.isFinal===!0){Math.abs(Y)<Math.min(75,m)===!0?(a.animate(),Q(1),$(0)):w(),A.value=!1;return}$(W.value*Y),Q(J(1-Y/m,0,1)),l.isFirst===!0&&(A.value=!0)}function re(){h(!1),le(!0)}function R(l,m){a.update(e.side,l,m)}function ct(l,m){l.value!==m&&(l.value=m)}function ue(l,m){R("size",l===!0?e.miniWidth:m)}return a.instances[e.side]=D,ue(e.miniToOverlay,_.value),R("space",N.value),R("offset",ne.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),K(()=>{o("on-layout",N.value),o("mini-state",y.value),C=e.showIfAbove===!0;const l=()=>{(p.value===!0?f:x)(!1,!0)};if(a.totalWidth.value!==0){ee(l);return}g=k(a.totalWidth,()=>{g(),g=void 0,p.value===!1&&e.showIfAbove===!0&&c.value===!1?s(!1):l()})}),X(()=>{g!==void 0&&g(),clearTimeout(b),p.value===!0&&re(),a.instances[e.side]===D&&(a.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const l=[];c.value===!0&&(e.noSwipeOpen===!1&&l.push(_t(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ot.value)),l.push(Oe("div",{ref:"backdrop",class:Je.value,style:Ze.value,"aria-hidden":"true",onClick:w},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>rt.value)));const m=y.value===!0&&i.mini!==void 0,L=[q("div",I(M({},r),{key:""+m,class:[nt.value,r.class]}),m===!0?i.mini():H(i.default))];return e.elevated===!0&&p.value===!0&&L.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Oe("aside",{ref:"content",class:it.value,style:at.value},L,"contentclose",e.noSwipeClose!==!0&&c.value===!0,()=>lt.value)),q("div",{class:"q-drawer-container"},l)}}});var It=z({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:o}}=F(),r=ke(te,()=>{console.error("QPageContainer needs to be child of QLayout")});je(xt,!0);const t=v(()=>{const n={};return r.header.space===!0&&(n.paddingTop=`${r.header.size}px`),r.right.space===!0&&(n[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(n.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(n[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),n});return()=>q("div",{class:"q-page-container",style:t.value},H(i.default))}});const{passive:He}=me,jt=["both","horizontal","vertical"];var Kt=z({name:"QScrollObserver",props:{axis:{type:String,validator:e=>jt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:i}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,n;k(()=>e.scrollTarget,()=>{d(),h()});function u(){r!==null&&r();const b=Math.max(0,Bt(t)),g=$t(t),c={top:b-o.position.top,left:g-o.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const y=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";o.position={top:b,left:g},o.directionChanged=o.direction!==y,o.delta=c,o.directionChanged===!0&&(o.direction=y,o.inflectionPoint=o.position),i("scroll",M({},o))}function h(){t=Lt(n,e.scrollTarget),t.addEventListener("scroll",a,He),a(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",a,He),t=void 0)}function a(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(r===null){const[g,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];r=()=>{c(g),r=null}}}const C=F();return K(()=>{n=C.proxy.$el.parentNode,h()}),X(()=>{r!==null&&r(),d()}),Object.assign(C.proxy,{trigger:a,getPosition:()=>o}),qe}}),Xt=z({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:o}){const{proxy:{$q:r}}=F(),t=S(null),n=S(r.screen.height),u=S(e.container===!0?0:r.screen.width),h=S({position:0,direction:"down",inflectionPoint:0}),d=S(0),a=S(Ae.value===!0?0:ve()),C=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=v(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),g=v(()=>a.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),c=v(()=>a.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function y(s){if(e.container===!0||document.qScrollPrevented!==!0){const w={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};h.value=w,e.onScroll!==void 0&&o("scroll",w)}}function _(s){const{height:w,width:P}=s;let V=!1;n.value!==w&&(V=!0,n.value=w,e.onScrollHeight!==void 0&&o("scroll-height",w),T()),u.value!==P&&(V=!0,u.value=P),V===!0&&e.onResize!==void 0&&o("resize",s)}function p({height:s}){d.value!==s&&(d.value=s,T())}function T(){if(e.container===!0){const s=n.value>d.value?ve():0;a.value!==s&&(a.value=s)}}let f;const x={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:n,containerHeight:d,scrollbarWidth:a,totalWidth:v(()=>u.value+a.value),rows:v(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:h,animate(){f!==void 0?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),f=void 0},155)},update(s,w,P){x[s][w]=P}};if(je(te,x),ve()>0){let P=function(){s=null,w.classList.remove("hide-scrollbar")},V=function(){if(s===null){if(w.scrollHeight>r.screen.height)return;w.classList.add("hide-scrollbar")}else clearTimeout(s);s=setTimeout(P,300)},D=function(B){s!==null&&B==="remove"&&(clearTimeout(s),P()),window[`${B}EventListener`]("resize",V)},s=null;const w=document.body;k(()=>e.container!==!0?"add":"remove",D),e.container!==!0&&D("add"),zt(()=>{D("remove")})}return()=>{const s=Tt(i.default,[q(Kt,{onScroll:y}),q(we,{onResize:_})]),w=q("div",{class:C.value,style:b.value,ref:e.container===!0?void 0:t},s);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:t},[q(we,{onResize:p}),q("div",{class:"absolute-full",style:g.value},[q("div",{class:"scroll",style:c.value},[w])])]):w}}}),We=z({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:i}){const o=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>q("div",{class:o.value},H(i.default))}}),Ut=z({name:"QItem",props:I(M(M({},Ce),Et),{tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:i,emit:o}){const{proxy:{$q:r}}=F(),t=_e(e,r),{hasRouterLink:n,hasLink:u,linkProps:h,linkClass:d,linkTag:a,navigateToRouterLink:C}=Ot(),b=S(null),g=S(null),c=v(()=>e.clickable===!0||u.value===!0||e.tag==="label"),y=v(()=>e.disable!==!0&&c.value===!0),_=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(u.value===!0?d.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(y.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),p=v(()=>{if(e.insetLevel===void 0)return null;const s=r.lang.rtl===!0?"Right":"Left";return{["padding"+s]:16+e.insetLevel*56+"px"}});function T(s){y.value===!0&&(g.value!==null&&(s.qKeyEvent!==!0&&document.activeElement===b.value?g.value.focus():document.activeElement===g.value&&b.value.focus()),n.value===!0&&C(s),o("click",s))}function f(s){if(y.value===!0&&Pt(s,13)===!0){Ie(s),s.qKeyEvent=!0;const w=new MouseEvent("click",s);w.qKeyEvent=!0,b.value.dispatchEvent(w)}o("keyup",s)}function x(){const s=Ne(i.default,[]);return y.value===!0&&s.unshift(q("div",{class:"q-focus-helper",tabindex:-1,ref:g})),s}return()=>{const s={ref:b,class:_.value,style:p.value,onClick:T,onKeyup:f};return y.value===!0?(s.tabindex=e.tabindex||"0",Object.assign(s,h.value)):c.value===!0&&(s["aria-disabled"]="true"),q(a.value,s,x())}}});const Yt=Ke({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Gt(e,i,o,r,t,n){return ge(),ye(Ut,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:O(()=>[e.icon?(ge(),ye(We,{key:0,avatar:""},{default:O(()=>[E(Dt,{name:e.icon},null,8,["name"])]),_:1})):Ue("",!0),E(We,null,{default:O(()=>[E(Re,null,{default:O(()=>[pe(Pe(e.title),1)]),_:1}),E(Re,{caption:""},{default:O(()=>[pe(Pe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Jt=Xe(Yt,[["render",Gt]]);const Zt=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],ea=Ke({name:"MainLayout",components:{EssentialLink:Jt},setup(){const e=S(!1);return{essentialLinks:Zt,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),ta=pe(" Digissist "),aa=Rt("div",null,"version .1",-1);function na(e,i,o,r,t,n){De("EssentialLink");const u=De("router-view");return ge(),ye(Xt,{view:"lHh Lpr lFf"},{default:O(()=>[E(Ht,{elevated:""},{default:O(()=>[E(Ft,{class:"bg-pink"},{default:O(()=>[E(Qt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),E(Mt,null,{default:O(()=>[ta]),_:1}),aa]),_:1})]),_:1}),Ue("",!0),E(It,null,{default:O(()=>[E(u)]),_:1})]),_:1})}var ra=Xe(ea,[["render",na]]);export{ra as default};
