import{Q as U,a as j,C as H}from"./ClosePopup.c5f683a0.js";import{c as G,a as b,h as i,aC as J,aD as X,aE as Y,_ as Z,X as ee,r as $,Y as I,aF as q,a5 as l,a0 as a,$ as n,ad as x,ae as c,aG as N,aH as E,K as d,a6 as w,aa as C,aI as O,d as _,a2 as h,a3 as T,af as S,ac as V,aJ as te,aK as ae,Z as R,a7 as ne,a9 as se,a8 as oe}from"./index.6ded7676.js";import{Q as ie,a as re}from"./QSelect.34e39863.js";import{d as le,Q as D,a as ue,b as me}from"./position-engine.00d8b466.js";import{a as L}from"./index.becf6c0c.js";import{_ as z}from"./lodash.e6c87188.js";import"./QMenu.647d095c.js";var Q=G({name:"QChatMessage",props:{sent:Boolean,label:String,bgColor:String,textColor:String,name:String,avatar:String,text:Array,stamp:String,size:String,labelHtml:Boolean,nameHtml:Boolean,textHtml:Boolean,stampHtml:Boolean},setup(e,{slots:t}){const o=b(()=>e.sent===!0?"sent":"received"),u=b(()=>`q-message-text-content q-message-text-content--${o.value}`+(e.textColor!==void 0?` text-${e.textColor}`:"")),g=b(()=>`q-message-text q-message-text--${o.value}`+(e.bgColor!==void 0?` text-${e.bgColor}`:"")),M=b(()=>"q-message-container row items-end no-wrap"+(e.sent===!0?" reverse":"")),s=b(()=>e.size!==void 0?`col-${e.size}`:""),p=b(()=>({msg:e.textHtml===!0?"innerHTML":"textContent",stamp:e.stampHtml===!0?"innerHTML":"textContent",name:e.nameHtml===!0?"innerHTML":"textContent",label:e.labelHtml===!0?"innerHTML":"textContent"}));function F(m){return t.stamp!==void 0?[m,i("div",{class:"q-message-stamp"},t.stamp())]:e.stamp?[m,i("div",{class:"q-message-stamp",[p.value.stamp]:e.stamp})]:[m]}function P(m,v){const y=v===!0?m.length>1?f=>f:f=>i("div",[f]):f=>i("div",{[p.value.msg]:f});return m.map((f,K)=>i("div",{key:K,class:g.value},[i("div",{class:u.value},F(y(f)))]))}return()=>{const m=[];t.avatar!==void 0?m.push(t.avatar()):e.avatar!==void 0&&m.push(i("img",{class:`q-message-avatar q-message-avatar--${o.value}`,src:e.avatar,"aria-hidden":"true"}));const v=[];t.name!==void 0?v.push(i("div",{class:`q-message-name q-message-name--${o.value}`},t.name())):e.name!==void 0&&v.push(i("div",{class:`q-message-name q-message-name--${o.value}`,[p.value.name]:e.name})),t.default!==void 0?v.push(P(J(t.default()),!0)):e.text!==void 0&&v.push(P(e.text)),m.push(i("div",{class:s.value},v));const y=[];return t.label!==void 0?y.push(i("div",{class:"q-message-label"},t.label())):e.label!==void 0&&y.push(i("div",{class:"q-message-label",[p.value.label]:e.label})),y.push(i("div",{class:M.value},m)),i("div",{class:`q-message q-message-${o.value}`},y)}}});const de=[i("circle",{cx:"15",cy:"15",r:"15"},[i("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"60",cy:"15",r:"9","fill-opacity":".3"},[i("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]),i("circle",{cx:"105",cy:"15",r:"15"},[i("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),i("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})])];var pe=G({name:"QSpinnerDots",props:X,setup(e){const{cSize:t,classes:o}=Y(e);return()=>i("svg",{class:o.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"},de)}});const ce=[{messageId:1,sender:"Human",message_text:"Hello, who are you?"},{messageId:2,sender:"AI",message_text:"I am an AI created by OpenAI. How can I help you today?"}];var ge={messages:ce},k,ve=new Uint8Array(16);function fe(){if(!k&&(k=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!k))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return k(ve)}var _e=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function he(e){return typeof e=="string"&&_e.test(e)}var r=[];for(var B=0;B<256;++B)r.push((B+256).toString(16).substr(1));function ye(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase();if(!he(o))throw TypeError("Stringified UUID is invalid");return o}function W(e,t,o){e=e||{};var u=e.random||(e.rng||fe)();if(u[6]=u[6]&15|64,u[8]=u[8]&63|128,t){o=o||0;for(var g=0;g<16;++g)t[o+g]=u[g];return t}return ye(u)}const be=ee({name:"IndexPage",Components:{},data:function(){return{convo_template:`The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r
\r
Human: Hello, who are you?\r
AI: I am an AI created by OpenAI. How can I help you today?\r
Human: `,summarization_template:`The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r
\r
Human: Hello, who are you?\r
AI: I am an AI created by OpenAI. How can I help you today?\r
Human: Can you summarize this into one sentance for me?\r
`,summarization_long_template:`The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r
\r
Human: Hello, who are you?\r
AI: I am an AI created by OpenAI. How can I help you today?\r
Human: Can you summarize the following text?\r
`,summarization_dev_template:`The following is a conversation with an AI assistant. The conversation is about software development.\r
\r
Human: Hello, who are you?\r
AI: I am an AI created by OpenAI. How can I help you today?\r
Human: Can you summarize the following text?\r
`,generic_conversation_template:`The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r
\r
Human: Hello, who are you?\r
AI: I am an AI created by OpenAI. How can I help you today?\r
Human: `,convo_json:{messages:[]},user_input:"",msg_sequence:2,toggle_spinner:!1,user_id:24,is_signed_in:!0,avatar:"human_1",bot_avatar:"owley",is_loading:!1,message_prefix:"",prompt_type:"generic_conversation",ai_model_engines:["text-davinci-002","text-curie-001","text-babbage-001","text-ada-001"],ai_model_engine:"text-davinci-002",showTokenWarning:!1,templates:[{label:"Generic conversation (default)",value:"generic_conversation",color:"pink"},{label:"Summarization - into one sentance",value:"summarization",color:"pink"},{label:"Summarization",value:"summarization_long",color:"pink"},{label:"Summarization - software development",value:"summarization_dev",color:"pink"}],selected_template:"generic_conversation",premium_tf:!1,error_message:"",is_error:!1}},computed:{screenSize(){return this.$q.screen.width},getTokenCount(){var e=this;return Math.round((e.convo_template.length+e.user_input.length)/4)},getBotAvatarPath(){var e=this;return e.is_loading?"/icons/white_square.png":e.bot_avatar==="green_spark"?"/icons/green_spark.png":e.bot_avatar==="penguin"?"/icons/penguin.png":e.bot_avatar==="default"?"/icons/default.png":e.bot_avatar==="diaspora"?"/icons/diaspora.png":"/icons/owley.png"},getHumanAvatarPath(){var e=this;return e.is_loading?"/icons/white_square.png":e.avatar==="human_2"?"/icons/human_2.png":e.avatar==="human_3"?"/icons/human_3.png":e.avatar==="human_4"?"/icons/human_4.png":e.avatar==="human_5"?"/icons/human_5.png":"/icons/human_1.png"}},created:function(){var e=this;localStorage.user_id&&(this.user_id=localStorage.user_id,this.is_signed_in=!0,e.getSettings()),e.loadTemplate("Conversation"),document.addEventListener("keydown",t);function t(o){o.code==="Enter"&&e.user_input!=""&&(e.$refs.userinput.blur(),e.send_message())}localStorage.premium_tf==="true"&&(e.premium_tf=!0),e.premium_tf||(e.ai_model_engines=z.slice(e.ai_model_engines,1,e.ai_model_engines.length),e.ai_model_engine="text-curie-001")},mounted(){},watch:{getTokenCount(e){var t=this;e>1024&&(t.is_error=!0,t.error_message="Token limit reached. Refresh the page to start a new conversation.")},selected_template(e){var t=this;t.loadTemplate(e),t.show_templates=!1},name(e){console.log("watcher firing"),localStorage.user_id=e}},methods:{loadTemplate:function(e){var t=this;e==="generic_conversation"?(t.prompt_type="generic_conversation",t.convo_template=t.generic_conversation_template):e==="summarization"?(t.prompt_type="summarization",t.convo_template=t.summarization_template,t.message_prefix=`Can you summarize this into one sentance for me?\r
`):e==="summarization_long"?(t.prompt_type="summarization",t.convo_template=t.summarization_long_template,t.message_prefix=`Can you summarize the following text?\r
`):e==="summarization_dev"&&(t.prompt_type="summarization",t.convo_template=t.summarization_dev_template,t.message_prefix=`Can you summarize the following text?\r
`),t.convo_json=ge},add_quotes_for_summarization:function(e){return z.startsWith(e,'"')&&z.endsWith(e,'"')||z.startsWith(e,"'")&&z.endsWith(e,"'")?e:`"${e}"`},logInput:function(){var e=this;console.log(e.user_input)},send_message:function(){var e=this;e.prompt_type=="summarization"&&(e.user_input=e.add_quotes_for_summarization(e.user_input));var t={messageId:W(),sender:"Human",message_text:e.message_prefix+e.user_input};t.messageId=t.messageId+1,e.convo_json.messages.push(t),e.toggle_spinner=!0,e.convo_template=String(e.convo_template)+String(e.user_input)+`\r
AI:`,e.user_input="",L.post("https://digissist-server.azurewebsites.net/completions",{engine:e.ai_model_engine,prompt:e.convo_template,max_tokens:150,temperature:.9,top_p:1,n:1,frequency_penalty:0,presence_penalty:.6,stream:!1,logprobs:null,user:String(e.user_id)},{headers:{Authorization:"Bearer "+localStorage.token,"Content-Type":"application/json"}}).then(function(o){var u={messageId:W(),sender:"AI",message_text:String(o.data.choices[0].text)};e.toggle_spinner=!1,e.convo_json.messages.push(u),e.convo_template=String(e.convo_template)+String(u.message_text)+`\r
Human: `,console.log(":::Messages Obj:::"),console.log(e.convo_json),console.log(":::Messages str:::"),console.log(e.convo_template)}).catch(function(o){console.log(o),o.response.status===429?(e.error_message=o.response.data,e.is_error=!0):o.response.status===500&&o.response.data==="Unsafe content"&&(e.error_message="Unsafe content was detected by the content filter. This could include profanity or hateful language. Please refresh the page to try again.",e.is_error=!0)}).then(function(){e.toggle_spinner=!1,e.prompt_type="generic_conversation",e.message_prefix=""})},getSettings:function(){var e=this;e.is_loading=!0,e.is_signed_in&&L.get(`https://digissist-server.azurewebsites.net/users/${localStorage.user_id}/settings`,{headers:{Authorization:"Bearer "+localStorage.token}}).then(function(t){e.bot_avatar=t.data.bot_avatar,e.avatar=t.data.avatar}).catch(function(t){console.log(t),t.response.status==403&&(localStorage.removeItem("user_id"),localStorage.removeItem("token"),e.is_signed_in=!1,e.$router.push("/login"))}).then(function(){e.is_loading=!1})}},setup(){return{card:$(!1),show_settings:$(!1),show_templates:$(!1)}}}),A=e=>(te("data-v-3d891e5b"),e=e(),ae(),e),we={class:"q-pa-xs row justify-center"},Ie={style:{width:"100%","max-width":"500px"}},ze=["src"],xe=["src"],Ce={class:"q-pa-xs"},Se={style:{"max-width":"500px"}},ke=["src"],Ae={class:"row justify-center"},He=h("Edit prompt"),$e=h("Templates"),qe=h("Token limit"),Te=A(()=>l("div",{class:"text-h6"},"Edit prompt text:",-1)),Ve=A(()=>l("div",{class:"text-h6"},"AI Settings:",-1)),Qe=h(" Davinci is the most powerful. Ada is the fastest. "),Be=A(()=>l("div",{style:{color:"goldenrod"}}," Sign up for Premium to talk to Davinci! ",-1)),Me=A(()=>l("div",{class:"text-h6"},"Choose a prompt template:",-1));function Pe(e,t,o,u,g,M){return I(),q("div",we,[l("div",Ie,[a(x,{class:"my-card",style:{"margin-bottom":"15px"}},{default:n(()=>[a(c,{style:{padding:"10px"}},{default:n(()=>[(I(!0),q(N,null,E(e.convo_json.messages,s=>(I(),R(Q,{key:s.messageId,name:s.sender,text:[s.message_text],sent:s.sender!="AI","bg-color":s.sender=="AI"?"pink":"light-grey","text-color":s.sender=="AI"?"white":"black"},{avatar:n(p=>[d(a(U,{size:e.screenSize>600?"58px":"48px",props:p,class:"q-mx-xs"},{default:n(()=>[d(l("img",{src:e.getBotAvatarPath},null,8,ze),[[w,s.sender=="AI"]]),d(l("img",{src:e.getHumanAvatarPath},null,8,xe),[[w,s.sender!="AI"]])]),_:2},1032,["size","props"]),[[w,!e.is_loading]]),d(l("div",Ce,[a(ne,{color:"pink",size:"2em"})],512),[[w,e.is_loading]])]),_:2},1032,["name","text","sent","bg-color","text-color"]))),128)),d(a(Q,{name:"AI",avatar:e.getBotAvatarPath,"bg-color":"pink","text-color":"white"},{default:n(()=>[a(pe,{size:"2rem"})]),_:1},8,["avatar"]),[[w,e.toggle_spinner]])]),_:1}),a(C),a(c,{style:{padding:"8px"}},{default:n(()=>[l("div",Se,[d(a(Q,{style:{"font-style":"italic"},size:"10",name:"Human",text:[e.message_prefix],"text-color":"grey-7",sent:""},{avatar:n(()=>[a(U,{size:e.screenSize>600?"58px":"38px",class:"q-mx-xs"},{default:n(()=>[l("img",{src:e.getHumanAvatarPath},null,8,ke)]),_:1},8,["size"])]),_:1},8,["text"]),[[w,e.prompt_type=="summarization"]]),a(O,{modelValue:e.user_input,"onUpdate:modelValue":t[0]||(t[0]=s=>e.user_input=s),outlined:"",color:"pink",autogrow:"",disable:e.toggle_spinner||e.is_error,placeholder:e.prompt_type=="summarization"?"[Insert Text Here]":"","placeholder-color":"orange",ref:"userinput",error:e.is_error,"hide-bottom-space":""},{append:n(()=>[a(_,{size:e.screenSize>600?"md":"sm",round:"",dense:"",flat:"",icon:"send",onClick:e.send_message},null,8,["size","onClick"])]),error:n(()=>[h(T(e.error_message),1)]),_:1},8,["modelValue","disable","placeholder","error"])])]),_:1}),a(S,{align:"around"},{default:n(()=>[l("div",Ae,[a(_,{size:e.screenSize>600?"md":"sm",outline:"",color:"pink",icon:"edit_note",onClick:t[1]||(t[1]=s=>e.card=!0),class:"q-mx-xs q-mb-md"},{default:n(()=>[He]),_:1},8,["size"]),a(_,{size:e.screenSize>600?"md":"sm",outline:"",color:"pink",icon:"collections_bookmark",onClick:t[2]||(t[2]=s=>e.show_templates=!0),class:"q-mx-xs q-mb-md"},{default:n(()=>[$e]),_:1},8,["size"]),a(_,{size:e.screenSize>600?"md":"sm",outline:"",color:"pink",icon:"settings",onClick:t[3]||(t[3]=s=>e.show_settings=!0),class:"q-mx-xs q-mb-md"},null,8,["size"]),a(ie,{dense:"",class:"q-mx-xs q-mb-md",color:e.getTokenCount>1024?"pink":"light-grey","text-color":e.getTokenCount>1024?"white":"grey-6",size:e.screenSize>600?"md":"sm"},{default:n(()=>[h(T(e.getTokenCount)+"/1024 ",1),a(j,null,{default:n(()=>[qe]),_:1})]),_:1},8,["color","text-color","size"])]),a(V,{modelValue:e.card,"onUpdate:modelValue":t[6]||(t[6]=s=>e.card=s)},{default:n(()=>[a(x,{class:"my-card",style:{width:"400px"}},{default:n(()=>[a(c,null,{default:n(()=>[Te]),_:1}),a(c,null,{default:n(()=>[l("div",null,[a(O,{modelValue:e.convo_template,"onUpdate:modelValue":t[4]||(t[4]=s=>e.convo_template=s),outlined:"",color:"pink",type:"textarea",autogrow:"",onFocus:t[5]||(t[5]=s=>e.user_input="")},null,8,["modelValue"])])]),_:1}),a(C),a(S,{align:"right"},{default:n(()=>[d(a(_,{outline:"",color:"pink",label:"Okay"},null,512),[[H]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(V,{modelValue:e.show_settings,"onUpdate:modelValue":t[8]||(t[8]=s=>e.show_settings=s)},{default:n(()=>[a(x,{class:"my-card",style:{width:"400px"}},{default:n(()=>[a(c,null,{default:n(()=>[Ve]),_:1}),a(c,null,{default:n(()=>[l("div",null,[a(re,{outlined:"",modelValue:e.ai_model_engine,"onUpdate:modelValue":t[7]||(t[7]=s=>e.ai_model_engine=s),options:e.ai_model_engines,label:"GPT-3 model engine",color:"pink","bottom-slots":"","hide-hint":e.premium_tf},{hint:n(()=>[Be]),default:n(()=>[a(j,{anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:n(()=>[Qe]),_:1})]),_:1},8,["modelValue","options","hide-hint"])])]),_:1}),a(C),a(S,{align:"right"},{default:n(()=>[d(a(_,{outline:"",color:"pink",label:"Okay"},null,512),[[H]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(V,{modelValue:e.show_templates,"onUpdate:modelValue":t[10]||(t[10]=s=>e.show_templates=s)},{default:n(()=>[a(x,{class:"my-card",style:{width:"400px"}},{default:n(()=>[a(c,null,{default:n(()=>[Me]),_:1}),a(c,null,{default:n(()=>[l("div",null,[a(le,{bordered:"",separator:""},{default:n(()=>[(I(!0),q(N,null,E(e.templates,s=>d((I(),R(me,{tag:"label",key:s.value},{default:n(()=>[a(D,{avatar:""},{default:n(()=>[a(oe,{modelValue:e.selected_template,"onUpdate:modelValue":t[9]||(t[9]=p=>e.selected_template=p),val:s.value,color:"pink"},null,8,["modelValue","val"])]),_:2},1024),a(D,null,{default:n(()=>[a(ue,null,{default:n(()=>[h(T(s.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[se]])),128))]),_:1})])]),_:1}),a(C),a(S,{align:"right"},{default:n(()=>[d(a(_,{outline:"",color:"pink",label:"Okay"},null,512),[[H]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})])])}var Le=Z(be,[["render",Pe],["__scopeId","data-v-3d891e5b"]]);export{Le as default};
