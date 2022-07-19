import{_ as m,X as _,a4 as p,Y as f,aF as g,a5 as o,K as w,a6 as h,a0 as a,$ as n,ad as v,aG as b,d as r,a2 as d,a3 as S,ae as y,aI as l,Q as k}from"./index.13a4cd04.js";import{Q as $}from"./QBanner.3817c1ee.js";import{Q as P}from"./QForm.70ba4089.js";import{a as u}from"./index.becf6c0c.js";const Q=_({name:"LoginPage",data:function(){return{username:"",password:"",is_failure:!1,err_msg:"",isPwd:!0,stripe_customer_id:null,subscription_status:null,is_signed_in:!1}},created:function(){var e=this;localStorage.user_id&&(e.is_signed_in=!0)},mounted:function(){var e=this;e.is_signed_in&&e.$router.push("/")},methods:{get_billing_details:function(e){var t=this;localStorage.user_id!==void 0&&u.get(`https://digissist-server.azurewebsites.net/users/${localStorage.user_id}/billing`).then(function(s){t.stripe_customer_id=s.data.stripe_customer_id,t.subscription_status=s.data.subscription_status,t.subscription_status==="active"?localStorage.premium_tf=!0:localStorage.premium_tf=!1}).catch(function(s){console.log(s),t.is_failure=!0,t.err_msg=s}).then(function(){e()})},onSubmit:function(){var e=this;e.is_failure=!1;const t={"Content-Type":"application/json"};u.post("https://digissist-server.azurewebsites.net/users/login",{username:e.username,password:e.password},{headers:t}).then(function(s){console.log(s),s.status===200?(console.log(`login resp data:  ${s.data}`),localStorage.user_id=s.data.user_id,localStorage.token=s.data.token,localStorage.username=s.data.username,e.is_signed_in=!0,e.get_billing_details(function(){window.location.reload()})):(e.is_failure=!0,e.err_msg="Unknown")}).catch(function(s){console.log(s),e.is_failure=!0,e.err_msg="error"})}}}),V={class:"q-pa-md q-gutter-sm"},q={class:"q-pa-md row justify-center"},C={style:{width:"100%","max-width":"500px"}},B={class:"row"},z={class:"q-pl-xs"},F={class:"q-pl-xs"},U={class:"row"},D={class:"q-pa-sm"},I=d("Forgot password?");function L(e,t,s,N,j,x){const c=p("router-link");return f(),g(b,null,[o("div",V,[w(a($,{"inline-actions":"",rounded:"",class:"bg-orange text-white"},{action:n(()=>[a(r,{flat:"",label:"Dismiss"})]),default:n(()=>[d(" Sign in failed: "+S()+" ",1)]),_:1},512),[[h,e.is_failure]])]),o("div",q,[o("div",C,[a(v,{class:"my-card"},{default:n(()=>[a(y,null,{default:n(()=>[a(P,{onSubmit:e.onSubmit,class:"q-gutter-md"},{default:n(()=>[a(l,{filled:"",color:"pink",modelValue:e.username,"onUpdate:modelValue":t[0]||(t[0]=i=>e.username=i),label:"Username","lazy-rules":"",rules:[i=>i&&i.length>0||"Please enter your username"]},null,8,["modelValue","rules"]),a(l,{filled:"",type:e.isPwd?"password":"text",color:"pink",modelValue:e.password,"onUpdate:modelValue":t[2]||(t[2]=i=>e.password=i),label:"Password","lazy-rules":"",rules:[i=>i!==null&&i!==""||"Please type your password"]},{append:n(()=>[a(k,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[1]||(t[1]=i=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["type","modelValue","rules"]),o("div",B,[o("div",z,[a(r,{outline:"",label:"Login",type:"submit",color:"pink"})]),o("div",F,[a(r,{outline:"",label:"Signup",color:"pink",to:"/signup"})])])]),_:1},8,["onSubmit"]),o("div",U,[o("div",D,[a(c,{to:"/resetpassword"},{default:n(()=>[I]),_:1})])])]),_:1})]),_:1})])])],64)}var X=m(Q,[["render",L]]);export{X as default};
