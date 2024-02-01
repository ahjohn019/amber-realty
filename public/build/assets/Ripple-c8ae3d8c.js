import{l as m,aF as j,i as U,J as l,R as V,P as Q,aG as T,at as L,a5 as H,aa as K,a8 as G,a9 as J}from"./ckeditor-395087e9.js";const S={xs:18,sm:24,md:32,lg:38,xl:46},X={size:String};function Y(e,t=S){return m(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const N=e=>j(U(e)),Z=e=>j(e);function W(e,t){return e!==void 0&&e()||t}function pe(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function b(e,t){return e!==void 0?t.concat(e()):t}function me(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function ye(e,t,n,i,o,a){t.key=i+o;const s=l(e,t,n);return o===!0?V(s,a()):s}const R="0 0 24 24",q=e=>e,k=e=>`ionicons ${e}`,O={"mdi-":e=>`mdi ${e}`,"icon-":q,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":k,"ion-ios":k,"ion-logo":k,"iconfont ":q,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},A={o_:"-outlined",r_:"-round",s_:"-sharp"},D={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},ee=new RegExp("^("+Object.keys(O).join("|")+")"),te=new RegExp("^("+Object.keys(A).join("|")+")"),z=new RegExp("^("+Object.keys(D).join("|")+")"),ne=/^[Mm]\s?[-+]?\.?\d/,re=/^img:/,ie=/^svguse:/,se=/^ion-/,oe=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,ve=N({name:"QIcon",props:{...X,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Q(),i=Y(e),o=m(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),a=m(()=>{let s,r=e.name;if(r==="none"||!r)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(r);if(u!==void 0)if(u.icon!==void 0){if(r=u.icon,r==="none"||!r)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(ne.test(r)===!0){const[u,f=R]=r.split("|");return{svg:!0,viewBox:f,nodes:u.split("&&").map(y=>{const[d,g,h]=y.split("@@");return l("path",{style:g,d,transform:h})})}}if(re.test(r)===!0)return{img:!0,src:r.substring(4)};if(ie.test(r)===!0){const[u,f=R]=r.split("|");return{svguse:!0,src:u.substring(7),viewBox:f}}let p=" ";const v=r.match(ee);if(v!==null)s=O[v[1]](r);else if(oe.test(r)===!0)s=r;else if(se.test(r)===!0)s=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(z.test(r)===!0){s="notranslate material-symbols";const u=r.match(z);u!==null&&(r=r.substring(6),s+=D[u[1]]),p=r}else{s="notranslate material-icons";const u=r.match(te);u!==null&&(r=r.substring(2),s+=A[u[1]]),p=r}return{cls:s,content:p}});return()=>{const s={class:o.value,style:i.value,"aria-hidden":"true",role:"presentation"};return a.value.none===!0?l(e.tag,s,W(t.default)):a.value.img===!0?l("span",s,b(t.default,[l("img",{src:a.value.src})])):a.value.svg===!0?l("span",s,b(t.default,[l("svg",{viewBox:a.value.viewBox||"0 0 24 24"},a.value.nodes)])):a.value.svguse===!0?l("span",s,b(t.default,[l("svg",{viewBox:a.value.viewBox},[l("use",{"xlink:href":a.value.src})])])):(a.value.cls!==void 0&&(s.class+=" "+a.value.cls),l(e.tag,s,b(t.default,[a.value.content])))}}}),ge={dark:{type:Boolean,default:null}};function he(e,t){return m(()=>e.dark===null?t.dark.isActive:e.dark)}function be(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function F(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{F(e,n)}):e.add(t)}function xe(e){const t=new Set;return e.forEach(n=>{F(t,n)}),Array.from(t)}function $e(e){return e.appContext.config.globalProperties.$router!==void 0}function ke(e){return e.isUnmounted===!0||e.isDeactivated===!0}let w,x=0;const c=new Array(256);for(let e=0;e<256;e++)c[e]=(e+256).toString(16).substring(1);const ae=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let i=t;i>0;i--)n.push(Math.floor(Math.random()*256));return n}})(),B=4096;function we(){(w===void 0||x+16>B)&&(x=0,w=ae(B));const e=Array.prototype.slice.call(w,x,x+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,c[e[0]]+c[e[1]]+c[e[2]]+c[e[3]]+"-"+c[e[4]]+c[e[5]]+"-"+c[e[6]]+c[e[7]]+"-"+c[e[8]]+c[e[9]]+"-"+c[e[10]]+c[e[11]]+c[e[12]]+c[e[13]]+c[e[14]]+c[e[15]]}function ue(e,t){const n=e.style;for(const i in t)n[i]=t[i]}function Se(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=T(e);if(t)return t.$el||t}function _e(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}const ce={size:{type:[Number,String],default:"1em"},color:String};function le(e){return{cSize:m(()=>e.size in S?`${S[e.size]}px`:e.size),classes:m(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const Ee=N({name:"QSpinner",props:{...ce,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=le(e);return()=>l("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[l("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function fe(e,t=250){let n=!1,i;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),i=e.apply(this,arguments)),i}}function C(e,t,n,i){n.modifiers.stop===!0&&G(e);const o=n.modifiers.color;let a=n.modifiers.center;a=a===!0||i===!0;const s=document.createElement("span"),r=document.createElement("span"),p=J(e),{left:v,top:u,width:f,height:y}=t.getBoundingClientRect(),d=Math.sqrt(f*f+y*y),g=d/2,h=`${(f-d)/2}px`,P=a?h:`${p.left-v-g}px`,_=`${(y-d)/2}px`,I=a?_:`${p.top-u-g}px`;r.className="q-ripple__inner",ue(r,{height:`${d}px`,width:`${d}px`,transform:`translate3d(${P},${I},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${o?" text-"+o:""}`,s.setAttribute("dir","ltr"),s.appendChild(r),t.appendChild(s);const E=()=>{s.remove(),clearTimeout($)};n.abort.push(E);let $=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${h},${_},0) scale3d(1,1,1)`,r.style.opacity=.2,$=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,$=setTimeout(()=>{s.remove(),n.abort.splice(n.abort.indexOf(E),1)},275)},250)},50)}function M(e,{modifiers:t,value:n,arg:i}){const o=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:o.early===!0,stop:o.stop===!0,center:o.center===!0,color:o.color||i,keyCodes:[].concat(o.keyCodes||13)}}const Re=Z({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const i={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(o){i.enabled===!0&&o.qSkipRipple!==!0&&o.type===(i.modifiers.early===!0?"pointerdown":"click")&&C(o,e,i,o.qKeyEvent===!0)},keystart:fe(o=>{i.enabled===!0&&o.qSkipRipple!==!0&&L(o,i.modifiers.keyCodes)===!0&&o.type===`key${i.modifiers.early===!0?"down":"up"}`&&C(o,e,i,!0)},300)};M(i,t),e.__qripple=i,H(i,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&M(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),K(t,"main"),delete e._qripple)}});export{ve as Q,Re as R,he as a,we as b,N as c,b as d,X as e,Y as f,pe as g,W as h,me as i,Z as j,ye as k,_e as l,Ee as m,xe as n,Se as o,ue as p,be as q,ke as r,ge as u,$e as v};