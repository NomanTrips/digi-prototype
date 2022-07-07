var V=Object.defineProperty,w=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var S=(t,n,o)=>n in t?V(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,k=(t,n)=>{for(var o in n||(n={}))$.call(n,o)&&S(t,o,n[o]);if(C)for(var o of C(n))j.call(n,o)&&S(t,o,n[o]);return t},_=(t,n)=>w(t,I(n));import{c as Q,D as K,F as O,a as D,h as v,b as y,g as E,r as L,N as M,aK as N,aL as T,o as z,B as P,n as G,ax as H,a$ as J}from"./index.be88c086.js";var X=Q({name:"QBanner",props:_(k({},K),{inlineActions:Boolean,dense:Boolean,rounded:Boolean}),setup(t,{slots:n}){const o=E(),g=O(t,o.proxy.$q),l=D(()=>"q-banner row items-center"+(t.dense===!0?" q-banner--dense":"")+(g.value===!0?" q-banner--dark q-dark":"")+(t.rounded===!0?" rounded-borders":"")),i=D(()=>`q-banner__actions row items-center justify-end col-${t.inlineActions===!0?"auto":"all"}`);return()=>{const s=[v("div",{class:"q-banner__avatar col-auto row items-center self-start"},y(n.avatar)),v("div",{class:"q-banner__content col text-body2"},y(n.default))],d=y(n.action);return d!==void 0&&s.push(v("div",{class:i.value},d)),v("div",{class:l.value+(t.inlineActions===!1&&d!==void 0?" q-banner--top-padding":""),role:"alert"},s)}}}),Y=Q({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(t,{slots:n,emit:o}){const g=E(),l=L(null);let i=0;const s=[];function d(e){const r=[],b=typeof e=="boolean"?e:t.noErrorFocus!==!0,F=++i,p=(u,a)=>{o("validation-"+(u===!0?"success":"error"),a)};for(let u=0;u<s.length;u++){const a=s[u],f=a.validate();if(typeof f.then=="function")r.push(f.then(c=>({valid:c,comp:a}),c=>({valid:!1,comp:a,err:c})));else if(f!==!0){if(t.greedy===!1)return p(!1,a),b===!0&&typeof a.focus=="function"&&a.focus(),Promise.resolve(!1);r.push({valid:!1,comp:a})}}return r.length===0?(p(!0),Promise.resolve(!0)):Promise.all(r).then(u=>{const a=u.filter(R=>R.valid!==!0);if(a.length===0)return F===i&&p(!0),!0;const{valid:f,comp:c,err:A}=a[0];return F===i&&(A!==void 0&&console.error(A),p(!1,c),b===!0&&f!==!0&&typeof c.focus=="function"&&c.focus()),!1})}function h(){i++,s.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function x(e){e!==void 0&&P(e);const r=i+1;d().then(b=>{r===i&&b===!0&&(t.onSubmit!==void 0?o("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function q(e){e!==void 0&&P(e),o("reset"),G(()=>{h(),t.autofocus===!0&&t.noResetFocus!==!0&&m()})}function m(){H(()=>{if(l.value===null)return;const e=l.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(l.value.querySelectorAll("[tabindex]"),r=>r.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}M(J,{bindComponent(e){s.push(e)},unbindComponent(e){const r=s.indexOf(e);r>-1&&s.splice(r,1)}});let B=!1;return N(()=>{B=!0}),T(()=>{B===!0&&t.autofocus===!0&&m()}),z(()=>{t.autofocus===!0&&m()}),Object.assign(g.proxy,{validate:d,resetValidation:h,submit:x,reset:q,focus:m,getValidationComponents:()=>s}),()=>v("form",{class:"q-form",ref:l,onSubmit:x,onReset:q},y(n.default))}});export{X as Q,Y as a};