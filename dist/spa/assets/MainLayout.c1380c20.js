var yt=Object.defineProperty,At=Object.defineProperties;var Ct=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var kt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;var Ie=(e,a,o)=>a in e?yt(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,I=(e,a)=>{for(var o in a||(a={}))kt.call(a,o)&&Ie(e,o,a[o]);if(Fe)for(var o of Fe(a))St.call(a,o)&&Ie(e,o,a[o]);return e},K=(e,a)=>At(e,Ct(a));import{c as H,a as m,h as y,b as ae,u as qt,r as Q,w as C,o as te,Q as et,d as J,g as Z,s as fe,i as tt,n as ve,e as ie,f as Te,l as De,j as Le,k as me,m as Bt,p as Dt,q as le,t as Et,v as ue,x as Ae,y as Ue,z as Ee,A as Ce,B as Qt,C as zt,D as Tt,E as Lt,F as Mt,G as Pt,H as Rt,I as Vt,J as de,K as z,L as xe,M as Ot,N as at,O as Ft,P as It,R as Ut,S as xt,T as ke,U as ce,V as Ht,W as $t,X as nt,_ as lt,Y as M,Z as P,$ as s,a0 as r,a1 as ot,a2 as x,a3 as Qe,a4 as He,a5 as D,a6 as Se,a7 as Nt,a8 as oe,a9 as U,aa as $e,ab as Wt,ac as Yt,ad as Ne,ae as Kt}from"./index.0357c8b5.js";import{Q as jt,c as Xt,a as S,b as X,d as F,e as We,f as O,g as Jt,C as Ye}from"./ClosePopup.dcbb3387.js";import{a as Ke}from"./index.becf6c0c.js";var Zt=H({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const o=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:o.value},ae(a.default))}}),Gt=H({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:a}){const o=m(()=>{const u=["unelevated","outline","flat","rounded","push","stretch","glossy"].filter(t=>e[t]===!0).map(t=>`q-btn-group--${t}`).join(" ");return`q-btn-group row no-wrap${u.length>0?" "+u:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>y("div",{class:o.value},ae(a.default))}}),ea=H({name:"QBtnDropdown",props:K(I({},qt),{modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean}),emits:["update:modelValue","click","before-show","show","before-hide","hide"],setup(e,{slots:a,emit:o}){const{proxy:u}=Z(),t=Q(e.modelValue),l=Q(null),d=m(()=>{const g={"aria-expanded":t.value===!0?"true":"false","aria-haspopup":"true"};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(g["aria-disabled"]="true"),g}),c=m(()=>"q-btn-dropdown__arrow"+(t.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":""));C(()=>e.modelValue,g=>{l.value!==null&&l.value[g?"show":"hide"]()}),C(()=>e.split,w);function v(g){t.value=!0,o("before-show",g)}function n(g){o("show",g),o("update:modelValue",!0)}function q(g){t.value=!1,o("before-hide",g)}function _(g){o("hide",g),o("update:modelValue",!1)}function A(g){o("click",g)}function f(g){fe(g),w(),o("click",g)}function k(g){l.value!==null&&l.value.toggle(g)}function E(g){l.value!==null&&l.value.show(g)}function w(g){l.value!==null&&l.value.hide(g)}return Object.assign(u,{show:E,hide:w,toggle:k}),te(()=>{e.modelValue===!0&&E()}),()=>{const g=[y(et,{class:c.value,name:e.dropdownIcon||u.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&g.push(y(jt,{ref:l,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,onBeforeShow:v,onShow:n,onBeforeHide:q,onHide:_},a.default)),e.split===!1?y(J,K(I(K(I({class:"q-btn-dropdown q-btn-dropdown--simple"},e),{disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1}),d.value),{onClick:A}),()=>ae(a.label,[]).concat(g)):y(Gt,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,unelevated:e.unelevated,glossy:e.glossy,stretch:e.stretch},()=>[y(J,K(I({class:"q-btn-dropdown--current"},e),{disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,iconRight:e.iconRight,round:!1,onClick:f}),a.label),y(J,K(I({class:"q-btn-dropdown__arrow-container q-anchor--skip"},d.value),{disable:e.disable===!0||e.disableDropdown===!0,outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,size:e.size,color:e.color,textColor:e.textColor,dense:e.dense,ripple:e.ripple}),()=>g)])}}}),ta=H({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const o=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:o.value},ae(a.default))}});function aa(){const e=Q(!tt.value);return e.value===!1&&te(()=>{e.value=!0}),e}const it=typeof ResizeObserver!="undefined",je=it===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ze=H({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let o=null,u,t={width:-1,height:-1};function l(v){v===!0||e.debounce===0||e.debounce==="0"?d():o===null&&(o=setTimeout(d,e.debounce))}function d(){if(clearTimeout(o),o=null,u){const{offsetWidth:v,offsetHeight:n}=u;(v!==t.width||n!==t.height)&&(t={width:v,height:n},a("resize",t))}}const c=Z();if(Object.assign(c.proxy,{trigger:l}),it===!0){let v;return te(()=>{ve(()=>{u=c.proxy.$el.parentNode,u&&(v=new ResizeObserver(l),v.observe(u),d())})}),ie(()=>{clearTimeout(o),v!==void 0&&(v.disconnect!==void 0?v.disconnect():u&&v.unobserve(u))}),Te}else{let q=function(){clearTimeout(o),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",l,De.passive),n=void 0)},_=function(){q(),u&&u.contentDocument&&(n=u.contentDocument.defaultView,n.addEventListener("resize",l,De.passive),d())};const v=aa();let n;return te(()=>{ve(()=>{u=c.proxy.$el,u&&_()})}),ie(q),()=>{if(v.value===!0)return y("object",{style:je.style,tabindex:-1,type:"text/html",data:je.url,"aria-hidden":"true",onLoad:_})}}}}),na=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:o}){const{proxy:{$q:u}}=Z(),t=Le(me,()=>{console.error("QHeader needs to be child of QLayout")}),l=Q(parseInt(e.heightHint,10)),d=Q(!0),c=m(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||u.platform.is.ios&&t.isContainer.value===!0),v=m(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return d.value===!0?l.value:0;const h=l.value-t.scroll.value.position;return h>0?h:0}),n=m(()=>e.modelValue!==!0||c.value===!0&&d.value!==!0),q=m(()=>e.modelValue===!0&&n.value===!0&&e.reveal===!0),_=m(()=>"q-header q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(n.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),A=m(()=>{const h=t.rows.value.top,T={};return h[0]==="l"&&t.left.space===!0&&(T[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&(T[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function f(h,T){t.update("header",h,T)}function k(h,T){h.value!==T&&(h.value=T)}function E({height:h}){k(l,h),f("size",h)}function w(h){q.value===!0&&k(d,!0),o("focusin",h)}C(()=>e.modelValue,h=>{f("space",h),k(d,!0),t.animate()}),C(v,h=>{f("offset",h)}),C(()=>e.reveal,h=>{h===!1&&k(d,e.modelValue)}),C(d,h=>{t.animate(),o("reveal",h)}),C(t.scroll,h=>{e.reveal===!0&&k(d,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&f("size",l.value),f("space",e.modelValue),f("offset",v.value),ie(()=>{t.instances.header===g&&(t.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const h=Bt(a.default,[]);return e.elevated===!0&&h.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(y(ze,{debounce:0,onResize:E})),y("header",{class:_.value,style:A.value,onFocusin:w},h)}}});const Me={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},la=Object.keys(Me);Me.all=!0;function Xe(e){const a={};for(const o of la)e[o]===!0&&(a[o]=!0);return Object.keys(a).length===0?Me:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}function Je(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function qe(e,a,o){const u=Ee(e);let t,l=u.left-a.event.x,d=u.top-a.event.y,c=Math.abs(l),v=Math.abs(d);const n=a.direction;n.horizontal===!0&&n.vertical!==!0?t=l<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?t=d<0?"up":"down":n.up===!0&&d<0?(t="up",c>v&&(n.left===!0&&l<0?t="left":n.right===!0&&l>0&&(t="right"))):n.down===!0&&d>0?(t="down",c>v&&(n.left===!0&&l<0?t="left":n.right===!0&&l>0&&(t="right"))):n.left===!0&&l<0?(t="left",c<v&&(n.up===!0&&d<0?t="up":n.down===!0&&d>0&&(t="down"))):n.right===!0&&l>0&&(t="right",c<v&&(n.up===!0&&d<0?t="up":n.down===!0&&d>0&&(t="down")));let q=!1;if(t===void 0&&o===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};t=a.event.lastDir,q=!0,t==="left"||t==="right"?(u.left-=l,c=0,l=0):(u.top-=d,v=0,d=0)}return{synthetic:q,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:u,direction:t,isFirst:a.event.isFirst,isFinal:o===!0,duration:Date.now()-a.event.time,distance:{x:c,y:v},offset:{x:l,y:d},delta:{x:u.left-a.event.lastX,y:u.top-a.event.lastY}}}}let oa=0;var Be=Dt({name:"touch-pan",beforeMount(e,{value:a,modifiers:o}){if(o.mouse!==!0&&le.has.touch!==!0)return;function u(l,d){o.mouse===!0&&d===!0?Qt(l):(o.stop===!0&&fe(l),o.prevent===!0&&Ue(l))}const t={uid:"qvtp_"+oa++,handler:a,modifiers:o,direction:Xe(o),noop:Te,mouseStart(l){Je(l,t)&&Et(l)&&(ue(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(Je(l,t)){const d=l.target;ue(t,"temp",[[d,"touchmove","move","notPassiveCapture"],[d,"touchcancel","end","passiveCapture"],[d,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,d){if(le.is.firefox===!0&&Ae(e,!0),t.lastEvt=l,d===!0||o.stop===!0){if(t.direction.all!==!0&&(d!==!0||t.modifiers.mouseAllDir!==!0)){const n=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Ue(n),l.cancelBubble===!0&&fe(n),Object.assign(n,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:n}}fe(l)}const{left:c,top:v}=Ee(l);t.event={x:c,y:v,time:Date.now(),mouse:d===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:c,lastY:v}},move(l){if(t.event===void 0)return;const d=Ee(l),c=d.left-t.event.x,v=d.top-t.event.y;if(c===0&&v===0)return;t.lastEvt=l;const n=t.event.mouse===!0,q=()=>{u(l,n),o.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Xt(),t.styleCleanup=f=>{if(t.styleCleanup=void 0,o.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),n===!0){const k=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{k(),f()},50):k()}else f!==void 0&&f()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(l,t.event.mouse);const{payload:f,synthetic:k}=qe(l,t,!1);f!==void 0&&(t.handler(f)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&q(),t.event.lastX=f.position.left,t.event.lastY=f.position.top,t.event.lastDir=k===!0?void 0:f.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||n===!0&&t.modifiers.mouseAllDir===!0){q(),t.event.detected=!0,t.move(l);return}const _=Math.abs(c),A=Math.abs(v);_!==A&&(t.direction.horizontal===!0&&_>A||t.direction.vertical===!0&&_<A||t.direction.up===!0&&_<A&&v<0||t.direction.down===!0&&_<A&&v>0||t.direction.left===!0&&_>A&&c<0||t.direction.right===!0&&_>A&&c>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,d){if(t.event!==void 0){if(Ce(t,"temp"),le.is.firefox===!0&&Ae(e,!1),d===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(qe(l===void 0?t.lastEvt:l,t).payload);const{payload:c}=qe(l===void 0?t.lastEvt:l,t,!0),v=()=>{t.handler(c)};t.styleCleanup!==void 0?t.styleCleanup(v):v()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,o.mouse===!0&&ue(t,"main",[[e,"mousedown","mouseStart",`passive${o.mouseCapture===!0?"Capture":""}`]]),le.has.touch===!0&&ue(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const o=e.__qtouchpan;o!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&o.end(),o.handler=a.value),o.direction=Xe(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),Ce(a,"main"),Ce(a,"temp"),le.is.firefox===!0&&Ae(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}});const Ze=150;H({name:"QDrawer",inheritAttrs:!1,props:K(I(I({},zt),Tt),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...Lt,"on-layout","mini-state"],setup(e,{slots:a,emit:o,attrs:u}){const t=Z(),{proxy:{$q:l}}=t,d=Mt(e,l),{preventBodyScroll:c}=Ot(),{registerTimeout:v}=Pt(),n=Le(me,()=>{console.error("QDrawer needs to be child of QLayout")});let q,_,A;const f=Q(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),k=m(()=>e.mini===!0&&f.value!==!0),E=m(()=>k.value===!0?e.miniWidth:e.width),w=Q(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),g=m(()=>e.persistent!==!0&&(f.value===!0||rt.value===!0));function h(i,p){if($(),i!==!1&&n.animate(),V(0),f.value===!0){const L=n.instances[re.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),W(1),n.isContainer.value!==!0&&c(!0)}else W(0),i!==!1&&we(!1);v(()=>{i!==!1&&we(!0),p!==!0&&o("show",i)},Ze)}function T(i,p){j(),i!==!1&&n.animate(),W(0),V(G.value*E.value),_e(),p!==!0&&v(()=>{o("hide",i)},Ze)}const{show:b,hide:B}=Rt({showing:w,hideOnRouteChange:g,handleShow:h,handleHide:T}),{addToHistory:$,removeFromHistory:j}=Vt(w,B,g),N={belowBreakpoint:f,hide:B},R=m(()=>e.side==="right"),G=m(()=>(l.lang.rtl===!0?-1:1)*(R.value===!0?1:-1)),Pe=Q(0),ee=Q(!1),he=Q(!1),Re=Q(E.value*G.value),re=m(()=>R.value===!0?"left":"right"),ge=m(()=>w.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:E.value:0),be=m(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(R.value?"R":"L")>-1||l.platform.is.ios===!0&&n.isContainer.value===!0),ne=m(()=>e.overlay===!1&&w.value===!0&&f.value===!1),rt=m(()=>e.overlay===!0&&w.value===!0&&f.value===!1),st=m(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&ee.value===!1?" hidden":"")),ut=m(()=>({backgroundColor:`rgba(0,0,0,${Pe.value*.4})`})),Ve=m(()=>R.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),dt=m(()=>R.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),ct=m(()=>{const i={};return n.header.space===!0&&Ve.value===!1&&(be.value===!0?i.top=`${n.header.offset}px`:n.header.space===!0&&(i.top=`${n.header.size}px`)),n.footer.space===!0&&dt.value===!1&&(be.value===!0?i.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(i.bottom=`${n.footer.size}px`)),i}),ft=m(()=>{const i={width:`${E.value}px`,transform:`translateX(${Re.value}px)`};return f.value===!0?i:Object.assign(i,ct.value)}),vt=m(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),mt=m(()=>`q-drawer q-drawer--${e.side}`+(he.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(d.value===!0?" q-drawer--dark q-dark":"")+(ee.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${k.value===!0?"mini":"standard"}`+(be.value===!0||ne.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ve.value===!0?" q-drawer--top-padding":""))),ht=m(()=>{const i=l.lang.rtl===!0?e.side:re.value;return[[Be,wt,void 0,{[i]:!0,mouse:!0}]]}),gt=m(()=>{const i=l.lang.rtl===!0?re.value:e.side;return[[Be,Oe,void 0,{[i]:!0,mouse:!0}]]}),bt=m(()=>{const i=l.lang.rtl===!0?re.value:e.side;return[[Be,Oe,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function pe(){_t(f,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}C(f,i=>{i===!0?(q=w.value,w.value===!0&&B(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(w.value===!0?(V(0),W(0),_e()):b(!1))}),C(()=>e.side,(i,p)=>{n.instances[p]===N&&(n.instances[p]=void 0,n[p].space=!1,n[p].offset=0),n.instances[i]=N,n[i].size=E.value,n[i].space=ne.value,n[i].offset=ge.value}),C(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&pe()}),C(()=>e.behavior+e.breakpoint,pe),C(n.isContainer,i=>{w.value===!0&&c(i!==!0),i===!0&&pe()}),C(n.scrollbarWidth,()=>{V(w.value===!0?0:void 0)}),C(ge,i=>{Y("offset",i)}),C(ne,i=>{o("on-layout",i),Y("space",i)}),C(R,()=>{V()}),C(E,i=>{V(),ye(e.miniToOverlay,i)}),C(()=>e.miniToOverlay,i=>{ye(i,E.value)}),C(()=>l.lang.rtl,()=>{V()}),C(()=>e.mini,()=>{e.modelValue===!0&&(pt(),n.animate())}),C(k,i=>{o("mini-state",i)});function V(i){i===void 0?ve(()=>{i=w.value===!0?0:E.value,V(G.value*i)}):(n.isContainer.value===!0&&R.value===!0&&(f.value===!0||Math.abs(i)===E.value)&&(i+=G.value*n.scrollbarWidth.value),Re.value=i)}function W(i){Pe.value=i}function we(i){const p=i===!0?"remove":n.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function pt(){clearTimeout(_),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),he.value=!0,_=setTimeout(()=>{he.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function wt(i){if(w.value!==!1)return;const p=E.value,L=de(i.distance.x,0,p);if(i.isFinal===!0){L>=Math.min(75,p)===!0?b():(n.animate(),W(0),V(G.value*p)),ee.value=!1;return}V((l.lang.rtl===!0?R.value!==!0:R.value)?Math.max(p-L,0):Math.min(0,L-p)),W(de(L/p,0,1)),i.isFirst===!0&&(ee.value=!0)}function Oe(i){if(w.value!==!0)return;const p=E.value,L=i.direction===e.side,se=(l.lang.rtl===!0?L!==!0:L)?de(i.distance.x,0,p):0;if(i.isFinal===!0){Math.abs(se)<Math.min(75,p)===!0?(n.animate(),W(1),V(0)):B(),ee.value=!1;return}V(G.value*se),W(de(1-se/p,0,1)),i.isFirst===!0&&(ee.value=!0)}function _e(){c(!1),we(!0)}function Y(i,p){n.update(e.side,i,p)}function _t(i,p){i.value!==p&&(i.value=p)}function ye(i,p){Y("size",i===!0?e.miniWidth:p)}return n.instances[e.side]=N,ye(e.miniToOverlay,E.value),Y("space",ne.value),Y("offset",ge.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),te(()=>{o("on-layout",ne.value),o("mini-state",k.value),q=e.showIfAbove===!0;const i=()=>{(w.value===!0?h:T)(!1,!0)};if(n.totalWidth.value!==0){ve(i);return}A=C(n.totalWidth,()=>{A(),A=void 0,w.value===!1&&e.showIfAbove===!0&&f.value===!1?b(!1):i()})}),ie(()=>{A!==void 0&&A(),clearTimeout(_),w.value===!0&&_e(),n.instances[e.side]===N&&(n.instances[e.side]=void 0,Y("size",0),Y("offset",0),Y("space",!1))}),()=>{const i=[];f.value===!0&&(e.noSwipeOpen===!1&&i.push(z(y("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ht.value)),i.push(xe("div",{ref:"backdrop",class:st.value,style:ut.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>bt.value)));const p=k.value===!0&&a.mini!==void 0,L=[y("div",K(I({},u),{key:""+p,class:[vt.value,u.class]}),p===!0?a.mini():ae(a.default))];return e.elevated===!0&&w.value===!0&&L.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(xe("aside",{ref:"content",class:mt.value,style:ft.value},L,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>gt.value)),y("div",{class:"q-drawer-container"},i)}}});var ia=H({name:"QPageContainer",setup(e,{slots:a}){const{proxy:{$q:o}}=Z(),u=Le(me,()=>{console.error("QPageContainer needs to be child of QLayout")});at(Ft,!0);const t=m(()=>{const l={};return u.header.space===!0&&(l.paddingTop=`${u.header.size}px`),u.right.space===!0&&(l[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(l.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(l[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),l});return()=>y("div",{class:"q-page-container",style:t.value},ae(a.default))}});const{passive:Ge}=De,ra=["both","horizontal","vertical"];var sa=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ra.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:a}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,t,l;C(()=>e.scrollTarget,()=>{v(),c()});function d(){u!==null&&u();const _=Math.max(0,Ut(t)),A=xt(t),f={top:_-o.position.top,left:A-o.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const k=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";o.position={top:_,left:A},o.directionChanged=o.direction!==k,o.delta=f,o.directionChanged===!0&&(o.direction=k,o.inflectionPoint=o.position),a("scroll",I({},o))}function c(){t=It(l,e.scrollTarget),t.addEventListener("scroll",n,Ge),n(!0)}function v(){t!==void 0&&(t.removeEventListener("scroll",n,Ge),t=void 0)}function n(_){if(_===!0||e.debounce===0||e.debounce==="0")d();else if(u===null){const[A,f]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];u=()=>{f(A),u=null}}}const q=Z();return te(()=>{l=q.proxy.$el.parentNode,c()}),ie(()=>{u!==null&&u(),v()}),Object.assign(q.proxy,{trigger:n,getPosition:()=>o}),Te}}),ua=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:a,emit:o}){const{proxy:{$q:u}}=Z(),t=Q(null),l=Q(u.screen.height),d=Q(e.container===!0?0:u.screen.width),c=Q({position:0,direction:"down",inflectionPoint:0}),v=Q(0),n=Q(tt.value===!0?0:ke()),q=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),_=m(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),A=m(()=>n.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${n.value}px`}:null),f=m(()=>n.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${n.value}px`,width:`calc(100% + ${n.value}px)`}:null);function k(b){if(e.container===!0||document.qScrollPrevented!==!0){const B={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};c.value=B,e.onScroll!==void 0&&o("scroll",B)}}function E(b){const{height:B,width:$}=b;let j=!1;l.value!==B&&(j=!0,l.value=B,e.onScrollHeight!==void 0&&o("scroll-height",B),g()),d.value!==$&&(j=!0,d.value=$),j===!0&&e.onResize!==void 0&&o("resize",b)}function w({height:b}){v.value!==b&&(v.value=b,g())}function g(){if(e.container===!0){const b=l.value>v.value?ke():0;n.value!==b&&(n.value=b)}}let h;const T={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:l,containerHeight:v,scrollbarWidth:n,totalWidth:m(()=>d.value+n.value),rows:m(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:ce({size:0,offset:0,space:!1}),right:ce({size:300,offset:0,space:!1}),footer:ce({size:0,offset:0,space:!1}),left:ce({size:300,offset:0,space:!1}),scroll:c,animate(){h!==void 0?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),h=void 0},155)},update(b,B,$){T[b][B]=$}};if(at(me,T),ke()>0){let $=function(){b=null,B.classList.remove("hide-scrollbar")},j=function(){if(b===null){if(B.scrollHeight>u.screen.height)return;B.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout($,300)},N=function(R){b!==null&&R==="remove"&&(clearTimeout(b),$()),window[`${R}EventListener`]("resize",j)},b=null;const B=document.body;C(()=>e.container!==!0?"add":"remove",N),e.container!==!0&&N("add"),Ht(()=>{N("remove")})}return()=>{const b=$t(a.default,[y(sa,{onScroll:k}),y(ze,{onResize:E})]),B=y("div",{class:q.value,style:_.value,ref:e.container===!0?void 0:t},b);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:t},[y(ze,{onResize:w}),y("div",{class:"absolute-full",style:A.value},[y("div",{class:"scroll",style:f.value},[B])])]):B}}});const da=nt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function ca(e,a,o,u,t,l){return M(),P(F,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:s(()=>[e.icon?(M(),P(S,{key:0,avatar:""},{default:s(()=>[r(et,{name:e.icon},null,8,["name"])]),_:1})):ot("",!0),r(S,null,{default:s(()=>[r(X,null,{default:s(()=>[x(Qe(e.title),1)]),_:1}),r(X,{caption:""},{default:s(()=>[x(Qe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var fa=lt(da,[["render",ca]]),va="data:image/png;base64,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",ma="/assets/green_spark.1e31d5fb.png",ha="/assets/penguin.bdb70ba5.png",ga="/assets/owley.5cee2afa.png",ba="/assets/diaspora.eba1ec88.png",pa="/assets/human_1.8cdaaa46.png",wa="/assets/human_2.d5471ce3.png",_a="/assets/human_3.020d7643.png",ya="/assets/human_4.575f80af.png",Aa="/assets/human_5.cc4cadb4.png";const Ca=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],ka=nt({name:"MainLayout",components:{EssentialLink:fa},data:function(){return{username:null,user_id:null,avatar:"human_1",bot_avatar:"default",is_updating:!1,err_msg:"",is_failure:!1,is_signed_in:!1,is_loading:!1}},computed:{getHumanAvatarPath(){var e=this;return e.is_loading?"/icons/white_square.png":e.avatar==="human_2"?"/icons/human_2.png":e.avatar==="human_3"?"/icons/human_3.png":e.avatar==="human_4"?"/icons/human_4.png":e.avatar==="human_5"?"/icons/human_5.png":"/icons/human_1.png"}},created:function(){var e=this;localStorage.user_id&&(e.user_id=localStorage.user_id,e.is_signed_in=!0,e.username=localStorage.username)},mounted(){},updated(){var e=this;localStorage.user_id?(e.user_id=localStorage.user_id,e.is_signed_in=!0):e.is_signed_in=!1},watch:{bot_avatar(e,a){var o=this;o.is_loading===!1&&a!=e&&o.updateSettings()},name(e){localStorage.user_id=e}},methods:{set_avatar:function(e){console.log(e);var a=this;a.avatar=e,a.show_avatars=!1,a.updateSettings()},logout:function(){var e=this;localStorage.removeItem("user_id"),localStorage.removeItem("token"),localStorage.removeItem("username"),e.is_signed_in=!1},updateSettings:function(){var e=this;e.is_failure=!1,e.is_updating=!0;const a={"Content-Type":"application/json",Authorization:"Bearer "+localStorage.token};Ke.post(`https://digissist-server.azurewebsites.net/users/${localStorage.user_id}/settings`,{bot_avatar:e.bot_avatar,avatar:e.avatar},{headers:a}).then(function(o){console.log(o),o.status===200?e.$router.go():(e.is_failure=!0,e.err_msg="Failed to update setting")}).catch(function(o){console.log(o),e.is_failure=!0,e.err_msg=o,o.response.status==403&&(localStorage.removeItem("user_id"),localStorage.removeItem("token"),e.is_signed_in=!1,e.$router.push("/login"))}).then(function(){e.is_updating=!1})},getSettings:function(){var e=this;e.is_loading=!0,e.is_signed_in&&Ke.get(`https://digissist-server.azurewebsites.net/users/${localStorage.user_id}/settings`,{headers:{Authorization:"Bearer "+localStorage.token}}).then(function(a){e.bot_avatar=a.data.bot_avatar,e.avatar=a.data.avatar}).catch(function(a){console.log(a),a.response.status==403&&(localStorage.removeItem("user_id"),localStorage.removeItem("token"),e.is_signed_in=!1,e.$router.push("/login"))}).then(function(){e.is_loading=!1})}},setup(){const e=Q(!1);return{essentialLinks:Ca,leftDrawerOpen:e,show_avatars:Q(!1),toggleLeftDrawer(){e.value=!e.value}}}}),Sa=x(" Digissist "),qa={class:"row no-wrap q-pa-md",style:{width:"375px"}},Ba={class:"col-8"},Da=D("div",{class:"text-h6 q-mb-md"},"Choose AI skin:",-1),Ea=x(" Saving... "),Qa=x("default"),za=D("img",{src:va},null,-1),Ta=x("green spark"),La=D("img",{src:ma},null,-1),Ma=x("penguin"),Pa=D("img",{src:ha},null,-1),Ra=x("owley"),Va=D("img",{src:ga},null,-1),Oa=x("diaspora"),Fa=D("img",{src:ba},null,-1),Ia={class:"column items-center"},Ua=["src"],xa=x(" Pick an Avatar "),Ha={class:"text-subtitle1 q-mt-md q-mb-xs"},$a=D("div",{class:"text-h6"},"Pick your avatar:",-1),Na={class:"q-pa-md"},Wa=D("img",{src:pa},null,-1),Ya=D("img",{src:wa},null,-1),Ka=D("img",{src:_a},null,-1),ja=D("img",{src:ya},null,-1),Xa=D("img",{src:Aa},null,-1);function Ja(e,a,o,u,t,l){He("EssentialLink");const d=He("router-view");return M(),P(ua,{view:"lHh Lpr lFf"},{default:s(()=>[r(na,{elevated:""},{default:s(()=>[r(ta,{class:"bg-pink"},{default:s(()=>[r(Zt,null,{default:s(()=>[Sa]),_:1}),D("div",null,[z(r(J,{icon:"login","aria-label":"login",to:"/login",label:"Sign in",outline:"",color:"white"},null,512),[[Se,e.is_signed_in===!1]]),z(r(ea,{outline:"",color:"white","fab-mini":"",icon:"account_circle",onClick:e.getSettings},{default:s(()=>[D("div",qa,[D("div",Ba,[Da,z(D("div",null,[Ea,r(Nt,{color:"pink",size:"2em"})],512),[[Se,e.is_updating]]),r(We,null,{default:s(()=>[z((M(),P(F,{disable:e.is_updating,tag:"label"},{default:s(()=>[r(S,{avatar:""},{default:s(()=>[r(oe,{modelValue:e.bot_avatar,"onUpdate:modelValue":a[0]||(a[0]=c=>e.bot_avatar=c),val:"default",color:"pink"},null,8,["modelValue"])]),_:1}),r(S,null,{default:s(()=>[r(X,null,{default:s(()=>[Qa]),_:1})]),_:1}),r(S,null,{default:s(()=>[r(O,null,{default:s(()=>[za]),_:1})]),_:1})]),_:1},8,["disable"])),[[U]]),z((M(),P(F,{disable:e.is_updating,tag:"label"},{default:s(()=>[r(S,{avatar:""},{default:s(()=>[r(oe,{modelValue:e.bot_avatar,"onUpdate:modelValue":a[1]||(a[1]=c=>e.bot_avatar=c),val:"green_spark",color:"pink"},null,8,["modelValue"])]),_:1}),r(S,null,{default:s(()=>[r(X,null,{default:s(()=>[Ta]),_:1})]),_:1}),r(S,null,{default:s(()=>[r(O,null,{default:s(()=>[La]),_:1})]),_:1})]),_:1},8,["disable"])),[[U]]),z((M(),P(F,{disable:e.is_updating,tag:"label"},{default:s(()=>[r(S,{avatar:""},{default:s(()=>[r(oe,{modelValue:e.bot_avatar,"onUpdate:modelValue":a[2]||(a[2]=c=>e.bot_avatar=c),val:"penguin",color:"pink"},null,8,["modelValue"])]),_:1}),r(S,null,{default:s(()=>[r(X,null,{default:s(()=>[Ma]),_:1})]),_:1}),r(S,null,{default:s(()=>[r(O,null,{default:s(()=>[Pa]),_:1})]),_:1})]),_:1},8,["disable"])),[[U]]),z((M(),P(F,{disable:e.is_updating,tag:"label"},{default:s(()=>[r(S,{avatar:""},{default:s(()=>[r(oe,{modelValue:e.bot_avatar,"onUpdate:modelValue":a[3]||(a[3]=c=>e.bot_avatar=c),val:"owley",color:"pink"},null,8,["modelValue"])]),_:1}),r(S,null,{default:s(()=>[r(X,null,{default:s(()=>[Ra]),_:1})]),_:1}),r(S,null,{default:s(()=>[r(O,null,{default:s(()=>[Va]),_:1})]),_:1})]),_:1},8,["disable"])),[[U]]),z((M(),P(F,{disable:e.is_updating,tag:"label"},{default:s(()=>[r(S,{avatar:""},{default:s(()=>[r(oe,{modelValue:e.bot_avatar,"onUpdate:modelValue":a[4]||(a[4]=c=>e.bot_avatar=c),val:"diaspora",color:"pink"},null,8,["modelValue"])]),_:1}),r(S,null,{default:s(()=>[r(X,null,{default:s(()=>[Oa]),_:1})]),_:1}),r(S,null,{default:s(()=>[r(O,null,{default:s(()=>[Fa]),_:1})]),_:1})]),_:1},8,["disable"])),[[U]])]),_:1})]),r($e,{vertical:"",inset:"",class:"q-mx-lg"}),D("div",Ia,[r(J,{round:"",onClick:a[5]||(a[5]=c=>e.show_avatars=!0)},{default:s(()=>[r(O,{size:"64px"},{default:s(()=>[D("img",{src:e.getHumanAvatarPath},null,8,Ua)]),_:1}),r(Jt,null,{default:s(()=>[xa]),_:1})]),_:1}),D("div",null,[D("div",Ha,Qe(e.username),1),z(r(J,{color:"pink",label:"Logout",push:"",size:"sm",onClick:e.logout},null,8,["onClick"]),[[Ye]])])])])]),_:1},8,["onClick"]),[[Se,e.is_signed_in===!0]]),r(Wt,{modelValue:e.show_avatars,"onUpdate:modelValue":a[11]||(a[11]=c=>e.show_avatars=c)},{default:s(()=>[r(Yt,{class:"my-card",style:{width:"400px"}},{default:s(()=>[r(Ne,null,{default:s(()=>[$a]),_:1}),r(Ne,null,{default:s(()=>[D("div",Na,[r(We,{bordered:"",separator:""},{default:s(()=>[z((M(),P(F,{clickable:"",onClick:a[6]||(a[6]=c=>e.set_avatar("human_1"))},{default:s(()=>[r(S,null,{default:s(()=>[r(O,null,{default:s(()=>[Wa]),_:1})]),_:1})]),_:1})),[[U]]),z((M(),P(F,{clickable:"",onClick:a[7]||(a[7]=c=>e.set_avatar("human_2"))},{default:s(()=>[r(S,null,{default:s(()=>[r(O,null,{default:s(()=>[Ya]),_:1})]),_:1})]),_:1})),[[U]]),z((M(),P(F,{clickable:"",onClick:a[8]||(a[8]=c=>e.set_avatar("human_3"))},{default:s(()=>[r(S,null,{default:s(()=>[r(O,null,{default:s(()=>[Ka]),_:1})]),_:1})]),_:1})),[[U]]),z((M(),P(F,{clickable:"",onClick:a[9]||(a[9]=c=>e.set_avatar("human_4"))},{default:s(()=>[r(S,null,{default:s(()=>[r(O,null,{default:s(()=>[ja]),_:1})]),_:1})]),_:1})),[[U]]),z((M(),P(F,{clickable:"",onClick:a[10]||(a[10]=c=>e.set_avatar("human_5"))},{default:s(()=>[r(S,null,{default:s(()=>[r(O,null,{default:s(()=>[Xa]),_:1})]),_:1})]),_:1})),[[U]])]),_:1})])]),_:1}),r($e),r(Kt,{align:"right"},{default:s(()=>[z(r(J,{outline:"",color:"pink",label:"Okay"},null,512),[[Ye]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),_:1})]),_:1}),ot("",!0),r(ia,null,{default:s(()=>[r(d)]),_:1})]),_:1})}var nn=lt(ka,[["render",Ja]]);export{nn as default};
