import{_,Y as m,a5 as p,Z as f,aH as g,a7 as o,L as w,a8 as b,a1 as t,a0 as n,af as h,aI as v,e as l,a3 as d,a4 as S,ag as y,aK as r,Q as k}from"./index.800e447d.js";import{Q as P}from"./QBanner.1e05d6dc.js";import{Q}from"./QForm.07522613.js";import{a as u}from"./index.becf6c0c.js";const $=m({name:"LoginPage",data:function(){return{username:"",password:"",is_failure:!1,err_msg:"",isPwd:!0,stripe_customer_id:null,subscription_status:null,is_signed_in:!1,is_loading:!1}},created:function(){var e=this;localStorage.user_id&&(e.is_signed_in=!0)},mounted:function(){},methods:{get_billing_details:function(e){var a=this;localStorage.user_id!==void 0&&u.get(`https://digissist-server.azurewebsites.net/users/${localStorage.user_id}/billing`).then(function(s){a.stripe_customer_id=s.data.stripe_customer_id,a.subscription_status=s.data.subscription_status,a.subscription_status==="active"?localStorage.premium_tf=!0:localStorage.premium_tf=!1}).catch(function(s){console.log(s),a.is_failure=!0,a.err_msg=s}).then(function(){e()})},onSubmit:function(){var e=this;e.is_failure=!1,e.is_loading=!0;const a={"Content-Type":"application/json"};u.post("https://digissist-server.azurewebsites.net/users/login",{username:e.username,password:e.password},{headers:a}).then(function(s){console.log(s),s.status===200?(console.log(`login resp data:  ${s.data}`),localStorage.user_id=s.data.user_id,localStorage.token=s.data.token,localStorage.username=s.data.username,localStorage.temp_account_tf=!1,e.is_signed_in=!0,e.get_billing_details(function(){window.location.reload()}),e.$router.push("/")):(e.is_failure=!0,e.err_msg="Unknown")}).catch(function(s){console.log(s),e.is_failure=!0,e.err_msg="error"}).then(function(){e.is_loading=!1})}}}),V={class:"q-pa-md q-gutter-sm"},q={class:"q-pa-md row justify-center"},C={style:{width:"100%","max-width":"500px"}},B={class:"row"},z={class:"q-pl-xs"},L={class:"q-pl-xs"},U={class:"row"},D={class:"q-pa-sm"},F=d("Forgot password?");function I(e,a,s,N,j,T){const c=p("router-link");return f(),g(v,null,[o("div",V,[w(t(P,{"inline-actions":"",rounded:"",class:"bg-orange text-white"},{action:n(()=>[t(l,{flat:"",label:"Dismiss"})]),default:n(()=>[d(" Sign in failed: "+S()+" ",1)]),_:1},512),[[b,e.is_failure]])]),o("div",q,[o("div",C,[t(h,{class:"my-card"},{default:n(()=>[t(y,null,{default:n(()=>[t(Q,{onSubmit:e.onSubmit,class:"q-gutter-md"},{default:n(()=>[t(r,{filled:"",color:"pink",modelValue:e.username,"onUpdate:modelValue":a[0]||(a[0]=i=>e.username=i),label:"Username","lazy-rules":"",rules:[i=>i&&i.length>0||"Please enter your username"]},null,8,["modelValue","rules"]),t(r,{filled:"",type:e.isPwd?"password":"text",color:"pink",modelValue:e.password,"onUpdate:modelValue":a[2]||(a[2]=i=>e.password=i),label:"Password","lazy-rules":"",rules:[i=>i!==null&&i!==""||"Please type your password"]},{append:n(()=>[t(k,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[1]||(a[1]=i=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["type","modelValue","rules"]),o("div",B,[o("div",z,[t(l,{outline:"",label:"Login",type:"submit",color:"pink",disable:e.is_loading,loading:e.is_loading},null,8,["disable","loading"])]),o("div",L,[t(l,{outline:"",label:"Signup",color:"pink",to:"/signup",disable:e.is_loading},null,8,["disable"])])])]),_:1},8,["onSubmit"]),o("div",U,[o("div",D,[t(c,{to:"/resetpassword"},{default:n(()=>[F]),_:1})])])]),_:1})]),_:1})])])],64)}var Z=_($,[["render",I]]);export{Z as default};