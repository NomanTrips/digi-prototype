import{_ as d,X as u,Y as p,aS as m,a5 as t,K as c,a6 as f,a0 as a,$ as i,aT as g,aV as w,f as n,a2 as _,a3 as b,aU as h,aX as r,Q as y,a$ as v}from"./index.b5827133.js";import{Q as V,a as S}from"./QForm.619ad9a1.js";import{a as P}from"./index.becf6c0c.js";const Q=u({name:"LoginPage",data:function(){return{username:"",password:"",accept:!0,is_failure:!1,err_msg:"",isPwd:!0}},created:function(){},methods:{onSubmit:function(){var e=this;e.is_failure=!1;const o={"Content-Type":"application/json"};P.post("https://digissist-server.azurewebsites.net/users/login",{username:e.username,password:e.password},{headers:o}).then(function(l){console.log(l),l.status===200?(console.log(`login resp data:  ${l.data}`),localStorage.user_id=l.data.user_id,e.$router.push("/")):(e.is_failure=!0,e.err_msg="Unknown")}).catch(function(l){console.log(l),e.is_failure=!0,e.err_msg="error"})}}}),$={class:"q-pa-md q-gutter-sm"},k={class:"q-pa-md row justify-center"},q={style:{width:"100%","max-width":"500px"}},C={class:"row"},U={class:"q-pl-xs"},B={class:"q-pl-xs"};function T(e,o,l,z,D,I){return p(),m(w,null,[t("div",$,[c(a(V,{"inline-actions":"",rounded:"",class:"bg-orange text-white"},{action:i(()=>[a(n,{flat:"",label:"Dismiss"})]),default:i(()=>[_(" Sign in failed: "+b()+" ",1)]),_:1},512),[[f,e.is_failure]])]),t("div",k,[t("div",q,[a(g,{class:"my-card"},{default:i(()=>[a(h,null,{default:i(()=>[a(S,{onSubmit:e.onSubmit,class:"q-gutter-md"},{default:i(()=>[a(r,{filled:"",color:"pink",modelValue:e.username,"onUpdate:modelValue":o[0]||(o[0]=s=>e.username=s),label:"Username","lazy-rules":"",rules:[s=>s&&s.length>0||"Please enter your username"]},null,8,["modelValue","rules"]),a(r,{filled:"",type:e.isPwd?"password":"text",color:"pink",modelValue:e.password,"onUpdate:modelValue":o[2]||(o[2]=s=>e.password=s),label:"Password","lazy-rules":"",rules:[s=>s!==null&&s!==""||"Please type your password"]},{append:i(()=>[a(y,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[1]||(o[1]=s=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["type","modelValue","rules"]),a(v,{color:"pink",modelValue:e.accept,"onUpdate:modelValue":o[3]||(o[3]=s=>e.accept=s),label:"I agree to the ai pledge"},null,8,["modelValue"]),t("div",C,[t("div",U,[a(n,{outline:"",label:"Login",type:"submit",color:"pink"})]),t("div",B,[a(n,{outline:"",label:"Signup",color:"pink",to:"/signup"})])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})])])],64)}var F=d(Q,[["render",T]]);export{F as default};