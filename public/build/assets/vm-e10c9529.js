import{k as p,ay as z,h as P,B as l,R as A,J as F,aw as Q,ac as T,ai as I,al as U,aq as V,ak as L}from"./ckeditor-211a22bb.js";const x={xs:18,sm:24,md:32,lg:38,xl:46},H={size:String};function K(e,t=x){return p(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const B=e=>z(P(e)),J=e=>z(e);function X(e,t){return e!==void 0&&e()||t}function ue(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function h(e,t){return e!==void 0?t.concat(e()):t}function le(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function ce(e,t,n,s,o,a){t.key=s+o;const i=l(e,t,n);return o===!0?A(i,a()):i}const w="0 0 24 24",_=e=>e,k=e=>`ionicons ${e}`,C={"mdi-":e=>`mdi ${e}`,"icon-":_,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":k,"ion-ios":k,"ion-logo":k,"iconfont ":_,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},j={o_:"-outlined",r_:"-round",s_:"-sharp"},M={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Y=new RegExp("^("+Object.keys(C).join("|")+")"),G=new RegExp("^("+Object.keys(j).join("|")+")"),q=new RegExp("^("+Object.keys(M).join("|")+")"),W=/^[Mm]\s?[-+]?\.?\d/,Z=/^img:/,ee=/^svguse:/,te=/^ion-/,ne=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,fe=B({name:"QIcon",props:{...H,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=F(),s=K(e),o=p(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),a=p(()=>{let i,r=e.name;if(r==="none"||!r)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(r);if(u!==void 0)if(u.icon!==void 0){if(r=u.icon,r==="none"||!r)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(W.test(r)===!0){const[u,c=w]=r.split("|");return{svg:!0,viewBox:c,nodes:u.split("&&").map(m=>{const[f,y,g]=m.split("@@");return l("path",{style:y,d:f,transform:g})})}}if(Z.test(r)===!0)return{img:!0,src:r.substring(4)};if(ee.test(r)===!0){const[u,c=w]=r.split("|");return{svguse:!0,src:u.substring(7),viewBox:c}}let d=" ";const v=r.match(Y);if(v!==null)i=C[v[1]](r);else if(ne.test(r)===!0)i=r;else if(te.test(r)===!0)i=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(q.test(r)===!0){i="notranslate material-symbols";const u=r.match(q);u!==null&&(r=r.substring(6),i+=M[u[1]]),d=r}else{i="notranslate material-icons";const u=r.match(G);u!==null&&(r=r.substring(2),i+=j[u[1]]),d=r}return{cls:i,content:d}});return()=>{const i={class:o.value,style:s.value,"aria-hidden":"true",role:"presentation"};return a.value.none===!0?l(e.tag,i,X(t.default)):a.value.img===!0?l("span",i,h(t.default,[l("img",{src:a.value.src})])):a.value.svg===!0?l("span",i,h(t.default,[l("svg",{viewBox:a.value.viewBox||"0 0 24 24"},a.value.nodes)])):a.value.svguse===!0?l("span",i,h(t.default,[l("svg",{viewBox:a.value.viewBox},[l("use",{"xlink:href":a.value.src})])])):(a.value.cls!==void 0&&(i.class+=" "+a.value.cls),l(e.tag,i,h(t.default,[a.value.content])))}}}),re={size:{type:[Number,String],default:"1em"},color:String};function ie(e){return{cSize:p(()=>e.size in x?`${x[e.size]}px`:e.size),classes:p(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const de=B({name:"QSpinner",props:{...re,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=ie(e);return()=>l("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[l("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}}),pe={dark:{type:Boolean,default:null}};function me(e,t){return p(()=>e.dark===null?t.dark.isActive:e.dark)}function se(e,t){const n=e.style;for(const s in t)n[s]=t[s]}function ve(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=Q(e);if(t)return t.$el||t}function ye(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}function oe(e,t=250){let n=!1,s;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),s=e.apply(this,arguments)),s}}function E(e,t,n,s){n.modifiers.stop===!0&&V(e);const o=n.modifiers.color;let a=n.modifiers.center;a=a===!0||s===!0;const i=document.createElement("span"),r=document.createElement("span"),d=L(e),{left:v,top:u,width:c,height:m}=t.getBoundingClientRect(),f=Math.sqrt(c*c+m*m),y=f/2,g=`${(c-f)/2}px`,O=a?g:`${d.left-v-y}px`,$=`${(m-f)/2}px`,D=a?$:`${d.top-u-y}px`;r.className="q-ripple__inner",se(r,{height:`${f}px`,width:`${f}px`,transform:`translate3d(${O},${D},0) scale3d(.2,.2,1)`,opacity:0}),i.className=`q-ripple${o?" text-"+o:""}`,i.setAttribute("dir","ltr"),i.appendChild(r),t.appendChild(i);const S=()=>{i.remove(),clearTimeout(b)};n.abort.push(S);let b=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${g},${$},0) scale3d(1,1,1)`,r.style.opacity=.2,b=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,b=setTimeout(()=>{i.remove(),n.abort.splice(n.abort.indexOf(S),1)},275)},250)},50)}function R(e,{modifiers:t,value:n,arg:s}){const o=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:o.early===!0,stop:o.stop===!0,center:o.center===!0,color:o.color||s,keyCodes:[].concat(o.keyCodes||13)}}const ge=J({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const s={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(o){s.enabled===!0&&o.qSkipRipple!==!0&&o.type===(s.modifiers.early===!0?"pointerdown":"click")&&E(o,e,s,o.qKeyEvent===!0)},keystart:oe(o=>{s.enabled===!0&&o.qSkipRipple!==!0&&T(o,s.modifiers.keyCodes)===!0&&o.type===`key${s.modifiers.early===!0?"down":"up"}`&&E(o,e,s,!0)},300)};R(s,t),e.__qripple=s,I(s,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&R(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),U(t,"main"),delete e._qripple)}});function he(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function N(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{N(e,n)}):e.add(t)}function be(e){const t=new Set;return e.forEach(n=>{N(t,n)}),Array.from(t)}function ke(e){return e.appContext.config.globalProperties.$router!==void 0}function xe(e){return e.isUnmounted===!0||e.isDeactivated===!0}export{fe as Q,ge as R,H as a,me as b,B as c,K as d,X as e,ue as f,J as g,h,be as i,ce as j,ye as k,de as l,le as m,xe as n,he as o,ve as p,se as q,pe as u,ke as v};