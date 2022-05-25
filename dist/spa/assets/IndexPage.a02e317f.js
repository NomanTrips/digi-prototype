import{Q as k,C as O}from"./ClosePopup.6b71c0e2.js";import{c as j,a as _,h as n,ax as D,ay as R,az as U,ad as L,ac as W,r as G,ae as w,aA as q,am as d,ah as a,ag as o,aB as $,aC as x,aD as F,aE as J,a2 as g,an as h,ar as T,aF as V,S as y,aG as B,aH as X,aI as K,aJ as Y,aj as H,af as Z,ao as ee}from"./index.b82fa4ae.js";import{a as M}from"./index.becf6c0c.js";import{_ as b}from"./lodash.e6c87188.js";var C=j({name:"QChatMessage",props:{sent:Boolean,label:String,bgColor:String,textColor:String,name:String,avatar:String,text:Array,stamp:String,size:String,labelHtml:Boolean,nameHtml:Boolean,textHtml:Boolean,stampHtml:Boolean},setup(e,{slots:t}){const s=_(()=>e.sent===!0?"sent":"received"),l=_(()=>`q-message-text-content q-message-text-content--${s.value}`+(e.textColor!==void 0?` text-${e.textColor}`:"")),m=_(()=>`q-message-text q-message-text--${s.value}`+(e.bgColor!==void 0?` text-${e.bgColor}`:"")),z=_(()=>"q-message-container row items-end no-wrap"+(e.sent===!0?" reverse":"")),i=_(()=>e.size!==void 0?`col-${e.size}`:""),v=_(()=>({msg:e.textHtml===!0?"innerHTML":"textContent",stamp:e.stampHtml===!0?"innerHTML":"textContent",name:e.nameHtml===!0?"innerHTML":"textContent",label:e.labelHtml===!0?"innerHTML":"textContent"}));function P(u){return t.stamp!==void 0?[u,n("div",{class:"q-message-stamp"},t.stamp())]:e.stamp?[u,n("div",{class:"q-message-stamp",[v.value.stamp]:e.stamp})]:[u]}function A(u,c){const f=c===!0?u.length>1?p=>p:p=>n("div",[p]):p=>n("div",{[v.value.msg]:p});return u.map((p,E)=>n("div",{key:E,class:m.value},[n("div",{class:l.value},P(f(p)))]))}return()=>{const u=[];t.avatar!==void 0?u.push(t.avatar()):e.avatar!==void 0&&u.push(n("img",{class:`q-message-avatar q-message-avatar--${s.value}`,src:e.avatar,"aria-hidden":"true"}));const c=[];t.name!==void 0?c.push(n("div",{class:`q-message-name q-message-name--${s.value}`},t.name())):e.name!==void 0&&c.push(n("div",{class:`q-message-name q-message-name--${s.value}`,[v.value.name]:e.name})),t.default!==void 0?c.push(A(D(t.default()),!0)):e.text!==void 0&&c.push(A(e.text)),u.push(n("div",{class:i.value},c));const f=[];return t.label!==void 0?f.push(n("div",{class:"q-message-label"},t.label())):e.label!==void 0&&f.push(n("div",{class:"q-message-label",[v.value.label]:e.label})),f.push(n("div",{class:z.value},u)),n("div",{class:`q-message q-message-${s.value}`},f)}}});const te=[n("circle",{cx:"15",cy:"15",r:"15"},[n("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]),n("circle",{cx:"60",cy:"15",r:"9","fill-opacity":".3"},[n("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),n("animate",{attributeName:"fill-opacity",from:".5",to:".5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]),n("circle",{cx:"105",cy:"15",r:"15"},[n("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})])];var ae=j({name:"QSpinnerDots",props:R,setup(e){const{cSize:t,classes:s}=U(e);return()=>n("svg",{class:s.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg"},te)}});const ne=[{messageId:1,sender:"Human",message_text:"Hello, who are you?"},{messageId:2,sender:"AI",message_text:"I am an AI created by OpenAI. How can I help you today?"}];var se={messages:ne},I,oe=new Uint8Array(16);function ie(){if(!I&&(I=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!I))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return I(oe)}var re=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function le(e){return typeof e=="string"&&re.test(e)}var r=[];for(var S=0;S<256;++S)r.push((S+256).toString(16).substr(1));function ue(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase();if(!le(s))throw TypeError("Stringified UUID is invalid");return s}function Q(e,t,s){e=e||{};var l=e.random||(e.rng||ie)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,t){s=s||0;for(var m=0;m<16;++m)t[s+m]=l[m];return t}return ue(l)}const me=W({name:"IndexPage",Components:{},data:function(){return{convo_template:`The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r
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
`,generic_conversation_template:`The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\r
\r
Human: Hello, who are you?\r
AI: I am an AI created by OpenAI. How can I help you today?\r
Human: `,convo_json:{messages:[]},user_input:"",msg_sequence:2,toggle_spinner:!1,user_id:0,is_signed_in:!0,bot_avatar:"default",is_loading:!1,message_prefix:"",prompt_type:"generic_conversation"}},computed:{getBotAvatarPath(){var e=this;return e.is_loading?"/icons/white_square.png":e.bot_avatar==="green_spark"?"/icons/green_spark.png":e.bot_avatar==="penguin"?"/icons/penguin.png":e.bot_avatar==="owley"?"/icons/owley.png":e.bot_avatar==="diaspora"?"/icons/diaspora.png":"/icons/default.png"}},created:function(){var e=this;localStorage.user_id&&(this.user_id=localStorage.user_id,this.is_signed_in=!0,e.getSettings()),e.loadTemplate("Conversation")},mounted(){},watch:{name(e){console.log("watcher firing"),localStorage.user_id=e}},methods:{radio:function(){var e=this;this.$q.dialog({title:"Choose a prompt template:",options:{type:"radio",model:"opt1",items:[{label:"Generic conversation",value:"generic_conversation",color:"pink"},{label:"Summarization - into one sentance",value:"summarization",color:"pink"},{label:"Summarization",value:"summarization_long",color:"pink"}]},cancel:!0,persistent:!0}).onOk(t=>{e.loadTemplate(t)}).onCancel(()=>{console.log(">>>> Cancel")}).onDismiss(()=>{})},loadTemplate:function(e){var t=this;e==="generic_conversation"?(t.prompt_type="generic_conversation",t.convo_template=t.generic_conversation_template):e==="summarization"?(t.prompt_type="summarization",t.convo_template=t.summarization_template,t.message_prefix=`Can you summarize this into one sentance for me?\r
`):e==="summarization_long"&&(t.prompt_type="summarization",t.convo_template=t.summarization_long_template,t.message_prefix=`Can you summarize the following text?\r
`),t.convo_json=se},add_quotes_for_summarization:function(e){return b.startsWith(e,'"')&&b.endsWith(e,'"')||b.startsWith(e,"'")&&b.endsWith(e,"'")?e:`"${e}"`},send_message:function(){var e=this;e.prompt_type=="summarization"&&(e.user_input=e.add_quotes_for_summarization(e.user_input));var t={messageId:Q(),sender:"Human",message_text:e.message_prefix+e.user_input};t.messageId=t.messageId+1,e.convo_json.messages.push(t),e.toggle_spinner=!0,e.convo_template=String(e.convo_template)+String(e.user_input)+`\r
AI:`,e.user_input="";const s={"Content-Type":"application/json"};M.post("https://digissist-server.azurewebsites.net/completions",{engine:"text-davinci-002",prompt:e.convo_template,max_tokens:150,temperature:.9,top_p:1,n:1,frequency_penalty:0,presence_penalty:.6,stream:!1,logprobs:null},{headers:s}).then(function(l){var m={messageId:Q(),sender:"AI",message_text:String(l.data.choices[0].text)};e.toggle_spinner=!1,e.convo_json.messages.push(m),e.convo_template=String(e.convo_template)+String(m.message_text)+`\r
Human: `,console.log(":::Messages Obj:::"),console.log(e.convo_json),console.log(":::Messages str:::"),console.log(e.convo_template)}).catch(function(l){console.log(l),e.toggle_spinner=!1}).then(function(){e.prompt_type="generic_conversation",e.message_prefix=""})},getSettings:function(){var e=this;e.is_loading=!0,e.is_signed_in&&M.get(`https://digissist-server.azurewebsites.net/users/${localStorage.user_id}/settings`).then(function(t){e.bot_avatar=t.data.bot_avatar}).catch(function(t){console.log(t)}).then(function(){e.is_loading=!1})}},setup(){return{card:G(!1)}}}),N=e=>(K("data-v-f5c18836"),e=e(),Y(),e),de={class:"q-pa-md row justify-center"},ce={style:{width:"100%","max-width":"500px"}},pe=["src"],ge={src:"https://cdn.quasar.dev/img/boy-avatar.png"},ve={class:"q-pa-xs"},fe={style:{"max-width":"500px"}},_e=N(()=>d("img",{src:"https://cdn.quasar.dev/img/boy-avatar.png"},null,-1)),he=H("Edit prompt"),ye=H("Prompt Templates"),xe=H("Settings"),be=N(()=>d("div",{class:"text-h6"},"Edit conversation text:",-1));function Ie(e,t,s,l,m,z){return w(),q("div",de,[d("div",ce,[a($,{class:"my-card"},{default:o(()=>[a(x,null,{default:o(()=>[(w(!0),q(F,null,J(e.convo_json.messages,i=>(w(),Z(C,{key:i.messageId,name:i.sender,text:[i.message_text],sent:i.sender!="AI","bg-color":i.sender=="AI"?"pink":"light-grey","text-color":i.sender=="AI"?"white":"black"},{avatar:o(v=>[g(a(k,{size:"58px",props:v,class:"q-mx-xs"},{default:o(()=>[g(d("img",{src:e.getBotAvatarPath},null,8,pe),[[h,i.sender=="AI"]]),g(d("img",ge,null,512),[[h,i.sender!="AI"]])]),_:2},1032,["props"]),[[h,!e.is_loading]]),g(d("div",ve,[a(ee,{color:"pink",size:"2em"})],512),[[h,e.is_loading]])]),_:2},1032,["name","text","sent","bg-color","text-color"]))),128)),g(a(C,{name:"AI",avatar:e.getBotAvatarPath,"bg-color":"pink","text-color":"white"},{default:o(()=>[a(ae,{size:"2rem"})]),_:1},8,["avatar"]),[[h,e.toggle_spinner]])]),_:1}),a(T),a(x,null,{default:o(()=>[d("div",fe,[g(a(C,{style:{"font-style":"italic"},size:"10",name:"Human",text:["Can you summarize this into one sentance for me?"],"text-color":"grey-7",sent:""},{avatar:o(()=>[a(k,{size:"58px",class:"q-mx-xs"},{default:o(()=>[_e]),_:1})]),_:1},512),[[h,e.prompt_type=="summarization"]]),a(V,{modelValue:e.user_input,"onUpdate:modelValue":t[0]||(t[0]=i=>e.user_input=i),outlined:"",color:"pink",autogrow:"",disable:e.toggle_spinner,placeholder:e.prompt_type=="summarization"?"[Insert Text Here]":"","placeholder-color":"orange"},{after:o(()=>[a(y,{round:"",dense:"",flat:"",icon:"send",onClick:e.send_message},null,8,["onClick"])]),_:1},8,["modelValue","disable","placeholder"])])]),_:1}),a(B,{align:"around"},{default:o(()=>[a(y,{outline:"",color:"pink",icon:"edit_note",onClick:t[1]||(t[1]=i=>e.card=!0)},{default:o(()=>[he]),_:1}),a(y,{outline:"",color:"pink",icon:"collections_bookmark",onClick:e.radio},{default:o(()=>[ye]),_:1},8,["onClick"]),a(y,{outline:"",color:"pink",icon:"settings"},{default:o(()=>[xe]),_:1}),a(X,{modelValue:e.card,"onUpdate:modelValue":t[3]||(t[3]=i=>e.card=i)},{default:o(()=>[a($,{class:"my-card"},{default:o(()=>[a(x,null,{default:o(()=>[be]),_:1}),a(x,null,{default:o(()=>[d("div",null,[a(V,{modelValue:e.convo_template,"onUpdate:modelValue":t[2]||(t[2]=i=>e.convo_template=i),outlined:"",color:"pink",type:"textarea",autogrow:"",style:{width:"500px"}},null,8,["modelValue"])])]),_:1}),a(T),a(B,{align:"right"},{default:o(()=>[g(a(y,{outline:"",color:"pink",label:"Okay"},null,512),[[O]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})])])}var ze=L(me,[["render",Ie],["__scopeId","data-v-f5c18836"]]);export{ze as default};
