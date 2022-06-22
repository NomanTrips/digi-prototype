import{_ as u,X as c,Y as m,aV as f,a5 as s,K as i,a6 as n,a0 as a,$ as o,ac as p,aW as h,f as d,a2 as g,a3 as _,ad as k,aY as w}from"./index.3c792d01.js";import{Q as b,a as S}from"./QForm.5a5f2d2d.js";import{a as y}from"./index.becf6c0c.js";const v=c({name:"ResetPasswordPage",data:function(){return{email:"",is_failure:!1,err_msg:"",isResetLinkSent:!1,isLoading:!1}},created:function(){},methods:{onSubmit:function(){var e=this;e.is_failure=!1,e.isLoading=!0;const l={"Content-Type":"application/json"};y.post("https://digissist-server.azurewebsites.net/reset-pw-email",{email:e.email},{headers:l}).then(function(t){console.log(t),t.status===200?(console.log(`login resp data:  ${t.data}`),e.isResetLinkSent=!0):(e.is_failure=!0,e.err_msg="Unknown")}).catch(function(t){console.log(t),e.is_failure=!0,e.err_msg="error"}).then(function(){e.isLoading=!1})}}}),L={class:"q-pa-md q-gutter-sm"},R={class:"q-pa-md row justify-center"},Q={style:{width:"100%","max-width":"500px"}},V={class:"row"},$={class:"q-pl-xs"},C={color:"pink"};function q(e,l,t,B,E,P){return m(),f(h,null,[s("div",L,[i(a(b,{"inline-actions":"",rounded:"",class:"bg-orange text-white"},{action:o(()=>[a(d,{flat:"",label:"Dismiss"})]),default:o(()=>[g(" Reset failed: "+_()+" ",1)]),_:1},512),[[n,e.is_failure]])]),s("div",R,[s("div",Q,[a(p,{class:"my-card"},{default:o(()=>[a(k,null,{default:o(()=>[a(S,{onSubmit:e.onSubmit,class:"q-gutter-md"},{default:o(()=>[i(s("p",null,"Enter the email address you used to make the user account and then click send. If we have a user account that matches the email address you provided we'll send you a reset password link.",512),[[n,!e.isResetLinkSent]]),i(a(w,{filled:"",color:"pink",modelValue:e.email,"onUpdate:modelValue":l[0]||(l[0]=r=>e.email=r),label:"Email","lazy-rules":"",rules:[r=>r&&r.length>0||"Please enter your email address"],type:"email",disable:e.isLoading},null,8,["modelValue","rules","disable"]),[[n,!e.isResetLinkSent]]),s("div",V,[s("div",$,[i(a(d,{disable:e.isLoading,outline:"",label:"Send Reset Email",type:"submit",color:"pink"},null,8,["disable"]),[[n,!e.isResetLinkSent]])])])]),_:1},8,["onSubmit"]),i(s("p",C,"Check your email inbox for the reset password link. You can close this page.",512),[[n,e.isResetLinkSent]])]),_:1})]),_:1})])])],64)}var j=u(v,[["render",q]]);export{j as default};
