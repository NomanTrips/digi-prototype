import{_ as f,X as b,Y as w,aV as y,a5 as r,K as d,a6 as u,a0 as o,$ as s,ac as V,aW as g,d as n,ad as m,ae as k,aY as i,Q as p,b0 as P,a2 as c}from"./index.be88c086.js";import{Q as v,a as h}from"./QForm.bf64b049.js";import{a as S}from"./index.becf6c0c.js";import"./lodash.e6c87188.js";const U=b({name:"SignupPage",data:function(){return{username:"",password:"",retyped_password:"",firstname:"",lastname:"",middle_initial:"",dob:"",email:"",google_tf:!1,username_pw_tf:!1,accept:!0,is_failure:!1,isPwd:!0}},created:function(){},methods:{onSubmit:function(){var e=this;e.is_failure=!1,e.dob="19880719",console.log(e.dob);const a={"Content-Type":"application/json"};S.post("https://digissist-server.azurewebsites.net/users/create",{first_name:e.firstname,middle_initial:e.middle_initial,last_name:e.lastname,date_of_birth:e.dob,username:e.username,password:e.password,email:e.email},{headers:a}).then(function(t){console.log(t),t.status===200?(localStorage.user_id=t.data.user_id,localStorage.token=t.data.token,localStorage.username=t.data.username,e.$router.push("/")):e.is_failure=!0}).catch(function(t){console.log(t),e.is_failure=!0})}}}),Q={class:"q-pa-md q-gutter-sm"},C=c(" User account creation failed. Please try again. "),$={class:"q-pa-md row justify-center"},z={style:{width:"100%","max-width":"500px"}},B=r("div",{class:"text-h6"},"Sign up with:",-1);function q(e,a,t,F,D,I){return w(),y(g,null,[r("div",Q,[d(o(v,{"inline-actions":"",rounded:"",class:"bg-orange text-white"},{action:s(()=>[o(n,{flat:"",label:"Dismiss"})]),default:s(()=>[C]),_:1},512),[[u,e.is_failure]])]),r("div",$,[r("div",z,[o(V,{class:"my-card"},{default:s(()=>[o(m,null,{default:s(()=>[B]),_:1}),o(k,{vertical:""},{default:s(()=>[o(n,{outline:"",label:"Google",type:"submit",color:"pink"}),o(n,{outline:"",label:"Facebook",type:"submit",color:"pink"}),o(n,{outline:"",label:"Github",type:"submit",color:"pink"}),o(n,{outline:"",label:"Username & Password",type:"submit",color:"pink",onClick:a[0]||(a[0]=l=>e.username_pw_tf=!e.username_pw_tf)})]),_:1}),d(o(m,null,{default:s(()=>[o(h,{onSubmit:e.onSubmit,class:"q-gutter-md"},{default:s(()=>[o(i,{filled:"",color:"pink",modelValue:e.username,"onUpdate:modelValue":a[1]||(a[1]=l=>e.username=l),label:"Username*","label-color":"pink","lazy-rules":"",rules:[l=>l&&l.length>0||"Please enter your username"]},null,8,["modelValue","rules"]),o(i,{filled:"",type:e.isPwd?"password":"text",color:"pink",modelValue:e.password,"onUpdate:modelValue":a[3]||(a[3]=l=>e.password=l),label:"Password*","label-color":"pink","lazy-rules":"",rules:[l=>l!==null&&l!==""||"Please type your password",l=>l.length>=8||"Password must be at least 8 characters long.",l=>l.match(/\W|_/g)!=null||"Password must contain at least one special character.",l=>l.match(/\d+/g)!=null||"Password must contain at least one number.",l=>l.match(/[a-zA-Z]/)!=null||"Password must contain at least letter."]},{append:s(()=>[o(p,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[2]||(a[2]=l=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["type","modelValue","rules"]),o(i,{filled:"",type:e.isPwd?"password":"text",color:"pink",modelValue:e.retyped_password,"onUpdate:modelValue":a[5]||(a[5]=l=>e.retyped_password=l),label:"Re-type password:*","label-color":"pink","lazy-rules":"",rules:[l=>l!==null&&l!==""||"Please re-type your password",l=>l===e.password||"Password does not match."]},{append:s(()=>[o(p,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[4]||(a[4]=l=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["type","modelValue","rules"]),o(i,{color:"pink",modelValue:e.email,"onUpdate:modelValue":a[6]||(a[6]=l=>e.email=l),filled:"",type:"email",label:"Email*","label-color":"pink"},null,8,["modelValue"]),o(i,{filled:"",color:"pink",modelValue:e.firstname,"onUpdate:modelValue":a[7]||(a[7]=l=>e.firstname=l),label:"Firstname*","label-color":"pink"},null,8,["modelValue"]),d(o(i,{filled:"",color:"pink",modelValue:e.middle_initial,"onUpdate:modelValue":a[8]||(a[8]=l=>e.middle_initial=l),label:"Middle initial",hint:"Optional"},null,8,["modelValue"]),[[u,!1]]),o(i,{filled:"",color:"pink",modelValue:e.lastname,"onUpdate:modelValue":a[9]||(a[9]=l=>e.lastname=l),label:"Lastname*","label-color":"pink"},null,8,["modelValue"]),d(o(i,{color:"pink",modelValue:e.dob,"onUpdate:modelValue":a[10]||(a[10]=l=>e.dob=l),filled:"",type:"date",hint:"Date of birth - Optional"},null,8,["modelValue"]),[[u,!1]]),o(P,{color:"pink",modelValue:e.accept,"onUpdate:modelValue":a[11]||(a[11]=l=>e.accept=l),label:"I agree to the ai pledge"},null,8,["modelValue"]),r("div",null,[o(n,{outline:"",label:"Create",type:"submit",color:"pink"})])]),_:1},8,["onSubmit"])]),_:1},512),[[u,e.username_pw_tf]])]),_:1})])])],64)}var A=f(U,[["render",q]]);export{A as default};