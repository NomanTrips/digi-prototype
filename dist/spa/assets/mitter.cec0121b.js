import{b as c}from"./index.50d858f9.js";function f(e){e=e||{};function r(o){let t=o.toLowerCase();return e[t]||(e[t]=[])}return{on(o,t){r(o).push(t)},off(o,t){let i=r(o),n=i.indexOf(t);~n&&i.splice(n,1)},emit(o,t){r("*").concat(r(o)).forEach(i=>{i(t)})}}}const s=f();var u=c(async({app:e})=>{console.log("running z booter"),e.config.globalProperties.emitter=s});export{u as default};