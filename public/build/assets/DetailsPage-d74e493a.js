import{k as re,B as Oe,J as Ee,h as H,r as u,o as Q,m as x,u as S,y as i,A as n,q as g,F as B,T as F,n as q,ay as D,Y as Ie,W as T,D as A,E as $,U as R,R as se,az as xe,j as W,x as P,w as M,aA as V,i as J,s as ie,aB as Te,aC as Pe,aD as Ae,aE as Me,z as Re,au as je,G as ze,H as Be}from"./ckeditor-568c0a64.js";import{_ as Ne}from"./BaseLayout-d35d10d9.js";import{u as Ve}from"./index-85aa0263.js";import{c as Fe,u as Qe,b as Ue,e as Ge,Q as Y}from"./vm-f21f9386.js";import{Q as ae}from"./QChip-50267dd3.js";import{Q as O}from"./QBtn-05999df9.js";import{Q as K}from"./QTooltip-05843c46.js";import{Q as U}from"./QCardSection-a12a20b2.js";import{Q as X}from"./QCard-e8f25c2d.js";import{Q as ee}from"./QDialog-40930b1c.js";import{C as ne}from"./ClosePopup-55871ade.js";import{Q as G}from"./QImg-21d7b9bb.js";import{S as de,a as pe}from"./app-4e6c0f50.js";import{Q as Z}from"./QAvatar-5ff8dae9.js";import{b as He}from"./QSeparator-5b4b8ad3.js";import{Q as We}from"./QSpace-b0ae8a1e.js";import"./QToolbar-5253e172.js";import"./QMenu-531419ec.js";import"./use-tick-0d48cbe6.js";import"./dayjs.min-67c2dead.js";import"./use-prevent-scroll-0d30f442.js";const ke=Fe({name:"QBar",props:{...Qe,dense:Boolean},setup(o,{slots:e}){const{proxy:{$q:t}}=Ee(),r=Ue(o,t),a=re(()=>`q-bar row no-wrap items-center q-bar--${o.dense===!0?"dense":"standard"}  q-bar--${r.value===!0?"dark":"light"}`);return()=>Oe("div",{class:a.value,role:"toolbar"},Ge(e.default))}}),Ke={class:"wrapper row gap-8 overflow-hidden"},Ze={class:"col-12 m-auto"},Je={class:"ml-auto mr-2"},Ye={class:"ml-auto mr-2"},Xe={class:"col-12 row justify-center border-t pt-6"},et={class:"col-12"},tt={class:"col-12 text-lg font-semibold flex row"},ot={class:"col-6 col-sm-4"},at=H({__name:"SliderComponent",props:["propertyDetails"],setup(o){const e=o,t=u(),r=u(),a=u(0),l=u(1),s={type:"slide",rewind:!0,perPage:1,perMove:1,gap:"1rem",pagination:!1,height:450,cover:!0,breakpoints:{640:{fixedHeight:300}}},m={type:"slide",rewind:!0,gap:"0.5rem",pagination:!1,fixedWidth:110,fixedHeight:80,cover:!0,focus:"center",isNavigation:!0,updateOnMove:!0,arrows:!1},v=(c,b)=>{a.value=b,l.value=1},d=()=>{l.value<2&&(l.value+=.2)},p=()=>{l.value>1&&(l.value-=.2)};return Q(()=>{var b,w;const c=(b=r.value)==null?void 0:b.splide;c&&((w=t.value)==null||w.sync(c))}),(c,b)=>{var w,h;return x(),S("div",Ke,[i("div",Ze,[n(D(pe),{options:s,ref_key:"main",ref:t,"onSplide:moved":v},{default:g(()=>[(x(!0),S(B,null,F(e.propertyDetails.sliders,(f,k)=>(x(),q(D(de),{key:k},{default:g(()=>[n(G,{src:f.image.url,fit:"contain",class:"h-full",style:Ie(k===a.value?`transform: scale(${l.value})`:"")},null,8,["src","style"])]),_:2},1024))),128))]),_:1},512),i("div",{class:T(["flex flex-col gap-1",c.$q.screen.lt.md?"hidden":""])},[i("div",Je,[n(O,{rounded:"",color:"transparent",icon:"add","text-color":"black",onClick:d})]),i("div",Ye,[n(O,{rounded:"",color:"transparent",icon:"remove","text-color":"black",onClick:p})])],2)]),i("div",Xe,[i("div",et,[n(D(pe),{options:m,ref_key:"thumbs",ref:r},{default:g(()=>[(x(!0),S(B,null,F(e.propertyDetails.sliders,(f,k)=>(x(),q(D(de),{key:k},{default:g(()=>[n(G,{src:f.image.url,fit:"contain",class:"h-full"},null,8,["src"])]),_:2},1024))),128))]),_:1},512)]),i("div",tt,[i("div",ot,[n(Y,{name:"collections",size:"32px"}),A(" "+$((w=e.propertyDetails.sliders)==null?void 0:w.length)+" ",1),i("span",{class:T(c.$q.screen.lt.sm?"hidden":"")},"Photos",2)]),i("div",{class:T(["col-6 col-sm-4 flex",c.$q.screen.lt.sm?"justify-end":"justify-center"])},$(a.value+1)+" / "+$((h=e.propertyDetails.sliders)==null?void 0:h.length),3)])])])}}}),lt={class:"col-12 row justify-between items-center gap-4"},rt={class:"col-6 row gap-4 items-center text-xl md:text-4xl break-words"},st={class:"col-4 row gap-1 items-center text-sm justify-end"},it={key:0,class:"col-12"},nt={class:"text-sm"},ct={class:"col-12"},ut={class:"bg-secondary featured-label text-center py-2 px-4 font-bold rounded capitalize w-[100px]"},dt={class:"col-12"},pt={class:"text-xl md:text-4xl font-bold"},mt={class:"col-12"},vt={key:0},me=1200,ht={__name:"InfoComponent",props:["propertyDetails","propertyRoomDetails","whatsAppEnquiries","sliders","detailViews"],setup(o){const e=o,t=u(!1),r=u(""),a=u(!0);r.value="hidden";const l=()=>{t.value=!0,setTimeout(()=>{r.value=""},me)},s=(m,v="RM")=>{const d=m==null?void 0:m.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return`${v}${d}`};return Q(()=>{setTimeout(()=>{r.value=""},me)}),(m,v)=>(x(),S("div",lt,[i("div",rt,$(e.propertyDetails.name),1),i("div",st,[n(Y,{name:"visibility"}),A(" "+$(e.detailViews.current_total),1)]),e.propertyDetails.details&&e.propertyDetails.details_toggle?(x(),S("div",it,[i("div",nt,[(x(!0),S(B,null,F(e.propertyRoomDetails,(d,p)=>(x(),q(ae,{color:"teal","text-color":"white",icon:d.icon,key:p},{default:g(()=>[A($(e.propertyDetails.details[d.value])+" "+$(d.name),1)]),_:2},1032,["icon"]))),128))])])):R("",!0),i("div",ct,[i("div",ut," For "+$(e.propertyDetails.listing_type),1)]),i("div",dt,[i("span",pt,$(s(e.propertyDetails.price,"RM ")),1)]),i("div",mt,[e.sliders>0?(x(),S("div",vt,[n(O,{label:"View More",icon:"photo_camera",color:"teal",class:T(r.value),onClick:v[0]||(v[0]=d=>l())},null,8,["class"]),n(ee,{modelValue:t.value,"onUpdate:modelValue":v[1]||(v[1]=d=>t.value=d),maximized:a.value},{default:g(()=>[n(X,{class:"py-6 md:px-4 overflow-hidden"},{default:g(()=>[n(ke,{class:"justify-end bg-white"},{default:g(()=>[se((x(),q(O,{flat:"",icon:"close",size:"18px"},{default:g(()=>[n(K,{class:"bg-white text-primary"},{default:g(()=>[A("Close")]),_:1})]),_:1})),[[ne]])]),_:1}),n(U,{class:"h-full grid mx-auto"},{default:g(()=>[n(at,{propertyDetails:e.propertyDetails},null,8,["propertyDetails"])]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])])):R("",!0)])]))}},ft={class:"col-12 row justify-between"},gt={class:"col-12 rounded row md:py-10"},yt={class:"col-12 row q-gutter-y-md"},_t=i("div",{class:"col-12 text-xl md:text-4xl font-bold border-b border-grey flex items-center pb-4"}," Details ",-1),bt=["innerHTML"],wt={__name:"ShortDescComponent",props:["propertyDetails"],setup(o){const e=o;return(t,r)=>(x(),S("div",ft,[i("div",gt,[i("div",yt,[_t,i("div",{class:"col-12 break-words",innerHTML:e.propertyDetails.short_description},null,8,bt)])])]))}},xt={__name:"BannerComponent",props:["propertyDetails"],setup(o){const e=o,t=u(!1),r=()=>{t.value=!0};return(a,l)=>(x(),S("div",null,[n(G,{src:e.propertyDetails.banner?e.propertyDetails.banner.image.url:"https://cdn.quasar.dev/img/parallax2.jpg",class:"cursor-pointer h-[450px]",fit:a.$q.screen.lt.md?"cover":"contain",onClick:l[0]||(l[0]=s=>r())},null,8,["src","fit"]),n(ee,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=s=>t.value=s)},{default:g(()=>[n(X,{style:{width:"100%"}},{default:g(()=>[n(U,null,{default:g(()=>[n(G,{src:e.propertyDetails.banner?e.propertyDetails.banner.image.url:"https://cdn.quasar.dev/img/parallax2.jpg",fit:a.contain},null,8,["src","fit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};const kt={class:"col-12 flex gap-4"},Ct=i("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),St=i("div",null,[i("div",{class:"font-bold text-xl"},"Admin"),i("div",{class:"text-sm"},"E-(3)1482")],-1),Lt={class:"col-12"},$t={class:"col-12 row gap-6"},qt={class:"col-12"},Dt=["href"],Ot=i("span",{class:"text-lg ml-2"},"Chat On Whatsapp",-1),Et={class:"col-12"},It=["href"],Tt={class:"text-lg ml-2"},Ce={__name:"ListingAgentComponent",props:["whatsAppEnquiries"],setup(o){const e=o,t=u([]);return t.value=[{name:"Admin",contact:"60192140561",contactLabel:"019-2140561"},{name:"Admin",contact:"60123729668",contactLabel:"012-3729668"},{name:"Admin",contact:"60193560561",contactLabel:"019-3560561"}],(r,a)=>(x(),S("div",null,[i("div",kt,[i("div",null,[n(Z,null,{default:g(()=>[Ct]),_:1})]),St]),i("div",Lt,[n(He,{color:"grey-4"})]),i("div",$t,[(x(!0),S(B,null,F(t.value,(l,s)=>(x(),S("div",{class:"col-12 row items-center",key:s},[i("div",qt,[n(ae,{color:"white","text-color":"black",class:"w-full py-4 border shadow-md",size:"22px"},{default:g(()=>[i("a",{href:"https://wa.me/"+l.contact+"?text="+encodeURIComponent(e.whatsAppEnquiries),target:"_blank"},[n(Z,{size:"24px"},{default:g(()=>[n(G,{src:"/images/amber_whatsapp.png"})]),_:1}),Ot],8,Dt)]),_:2},1024)]),i("div",Et,[n(ae,{color:"white","text-color":"black",class:"w-full py-4 border shadow-md",size:"22px"},{default:g(()=>[i("a",{href:`tel:${l.contact}`},[n(Z,null,{default:g(()=>[n(Y,{name:"phone",size:"24px"})]),_:1}),i("span",Tt,$(l.contactLabel),1)],8,It)]),_:2},1024)])]))),128))])]))}};const Pt={class:"row justify-between items-center px-3 py-2 border fixed bottom-0 bg-white w-full"},At={class:"col col-auto row gap-2"},Mt={class:"col"},Rt=i("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),jt=i("div",{class:"col col-auto row"},[i("div",{class:"col-12 font-bold footer__mobilelabel"},"Admin"),i("div",{class:"col-12"},"E-(3)1482")],-1),zt={class:"col col-auto"},Bt={__name:"ListingAgentMobileComponent",props:["whatsAppEnquiries"],setup(o){const e=o,t=u(!1),r=()=>{t.value=!0},a=()=>{window.innerWidth>1024&&(t.value=!1)};return Q(()=>{window.addEventListener("resize",a)}),(l,s)=>(x(),S("div",Pt,[i("div",At,[i("div",Mt,[n(Z,null,{default:g(()=>[Rt]),_:1})]),jt]),i("div",zt,[n(O,{color:"primary",icon:"description",label:"Details",onClick:r})]),n(ee,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=m=>t.value=m)},{default:g(()=>[n(X,null,{default:g(()=>[n(U,{class:"row items-center justify-end"},{default:g(()=>[se(n(O,{icon:"close",flat:"",round:"",dense:""},null,512),[[ne]])]),_:1}),n(U,{class:"q-pt-none"},{default:g(()=>[n(Ce,{whatsAppEnquiries:e.whatsAppEnquiries,class:"row rounded-lg py-6 gap-4"},null,8,["whatsAppEnquiries"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};(function(){try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".mapdiv[data-v-dbf82c40]{width:100%;height:100%}.custom-control-wrapper[data-v-d099a3a6]{display:none}.mapdiv .custom-control-wrapper[data-v-d099a3a6]{display:inline-block}.info-window-wrapper[data-v-cbe1707b]{display:none}.mapdiv .info-window-wrapper[data-v-cbe1707b]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();var Nt=Object.defineProperty,Vt=(o,e,t)=>e in o?Nt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,ve=(o,e,t)=>(Vt(o,typeof e!="symbol"?e+"":e,t),t);const te=Symbol("map"),oe=Symbol("api"),Se=Symbol("marker"),Ft=Symbol("markerCluster"),ce=Symbol("CustomMarker"),Le=Symbol("mapTilesLoaded"),$e=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Qt(o,e,t,r){function a(l){return l instanceof t?l:new t(function(s){s(l)})}return new(t||(t=Promise))(function(l,s){function m(p){try{d(r.next(p))}catch(c){s(c)}}function v(p){try{d(r.throw(p))}catch(c){s(c)}}function d(p){p.done?l(p.value):a(p.value).then(m,v)}d((r=r.apply(o,e||[])).next())})}var Ut=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,l;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!o(e[a],t[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(l=Object.keys(e),r=l.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[a]))return!1;for(a=r;a--!==0;){var s=l[a];if(!o(e[s],t[s]))return!1}return!0}return e!==e&&t!==t};const he="__googleMapsScriptId";var N;(function(o){o[o.INITIALIZED=0]="INITIALIZED",o[o.LOADING=1]="LOADING",o[o.SUCCESS=2]="SUCCESS",o[o.FAILURE=3]="FAILURE"})(N||(N={}));class z{constructor({apiKey:e,authReferrerPolicy:t,channel:r,client:a,id:l=he,language:s,libraries:m=[],mapIds:v,nonce:d,region:p,retries:c=3,url:b="https://maps.googleapis.com/maps/api/js",version:w}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=r,this.client=a,this.id=l||he,this.language=s,this.libraries=m,this.mapIds=v,this.nonce=d,this.region=p,this.retries=c,this.url=b,this.version=w,z.instance){if(!Ut(this.options,z.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(z.instance.options)}`);return z.instance}z.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?N.FAILURE:this.done?N.SUCCESS:this.loading?N.LOADING:N.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(r=>{r?t(r.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,t;if(document.getElementById(this.id)){this.callback();return}const r={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(r).forEach(l=>!r[l]&&delete r[l]),!((t=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||t===void 0)&&t.importLibrary||(l=>{let s,m,v,d="The Google Maps JavaScript API",p="google",c="importLibrary",b="__ib__",w=document,h=window;h=h[p]||(h[p]={});const f=h.maps||(h.maps={}),k=new Set,y=new URLSearchParams,C=()=>s||(s=new Promise((_,L)=>Qt(this,void 0,void 0,function*(){var E;yield m=w.createElement("script"),m.id=this.id,y.set("libraries",[...k]+"");for(v in l)y.set(v.replace(/[A-Z]/g,I=>"_"+I[0].toLowerCase()),l[v]);y.set("callback",p+".maps."+b),m.src=this.url+"?"+y,f[b]=_,m.onerror=()=>s=L(Error(d+" could not load.")),m.nonce=this.nonce||((E=w.querySelector("script[nonce]"))===null||E===void 0?void 0:E.nonce)||"",w.head.append(m)})));f[c]?console.warn(d+" only loads once. Ignoring:",l):f[c]=(_,...L)=>k.add(_)&&C().then(()=>f[c](_,...L))})(r);const a=this.libraries.map(l=>this.importLibrary(l));a.length||a.push(this.importLibrary("core")),Promise.all(a).then(()=>this.callback(),l=>{const s=new ErrorEvent("error",{error:l});this.loadErrorCallback(s)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setScript())}}}function Gt(o){return class extends o.OverlayView{constructor(e){super(),ve(this,"element"),ve(this,"opts");const{element:t,...r}=e;this.element=t,this.opts=r,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof o.LatLng?this.opts.position:new o.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;const e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||Number(e.style.opacity)>.01)}onAdd(){if(!this.element)return;const e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}draw(){if(!this.element)return;const e=this.getProjection(),t=e==null?void 0:e.fromLatLngToDivPixel(this.getPosition());if(t){this.element.style.position="absolute";const r=this.element.offsetHeight,a=this.element.offsetWidth;let l,s;switch(this.opts.anchorPoint){case"TOP_CENTER":l=t.x-a/2,s=t.y;break;case"BOTTOM_CENTER":l=t.x-a/2,s=t.y-r;break;case"LEFT_CENTER":l=t.x,s=t.y-r/2;break;case"RIGHT_CENTER":l=t.x-a,s=t.y-r/2;break;case"TOP_LEFT":l=t.x,s=t.y;break;case"TOP_RIGHT":l=t.x-a,s=t.y;break;case"BOTTOM_LEFT":l=t.x,s=t.y-r;break;case"BOTTOM_RIGHT":l=t.x-a,s=t.y-r;break;default:l=t.x-a/2,s=t.y-r/2}this.element.style.left=l+"px",this.element.style.top=s+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}onRemove(){this.element&&this.element.remove()}setOptions(e){const{element:t,...r}=e;this.element=t,this.opts=r,this.draw()}}}let fe;const ge=["bounds_changed","center_changed","click","contextmenu","dblclick","drag","dragend","dragstart","heading_changed","idle","isfractionalzoomenabled_changed","mapcapabilities_changed","maptypeid_changed","mousemove","mouseout","mouseover","projection_changed","renderingtype_changed","rightclick","tilesloaded","tilt_changed","zoom_changed"],Ht=H({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},isFractionalZoomEnabled:{type:Boolean,required:!1,default:void 0},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1},nonce:{type:String,default:""}},emits:ge,setup(o,{emit:e}){const t=u(),r=u(!1),a=u(),l=u(),s=u(!1);W(te,a),W(oe,l),W(Le,s);const m=()=>{const c={...o};Object.keys(c).forEach(h=>{c[h]===void 0&&delete c[h]});const b=h=>{var f;return h?{position:(f=l.value)==null?void 0:f.ControlPosition[h]}:{}},w={scaleControlOptions:o.scaleControlStyle?{style:o.scaleControlStyle}:{},panControlOptions:b(o.panControlPosition),zoomControlOptions:b(o.zoomControlPosition),rotateControlOptions:b(o.rotateControlPosition),streetViewControlOptions:b(o.streetViewControlPosition),fullscreenControlOptions:b(o.fullscreenControlPosition),disableDefaultUI:o.disableDefaultUi};return{...c,...w}},v=M([l,a],([c,b])=>{const w=c,h=b;w&&h&&(w.event.addListenerOnce(h,"tilesloaded",()=>{s.value=!0}),setTimeout(v,0))},{immediate:!0}),d=()=>{try{const{apiKey:c,region:b,version:w,language:h,libraries:f,nonce:k}=o;fe=new z({apiKey:c,region:b,version:w,language:h,libraries:f,nonce:k})}catch(c){console.error(c)}},p=c=>{l.value=V(c.maps),a.value=V(new c.maps.Map(t.value,m()));const b=Gt(l.value);l.value[ce]=b,ge.forEach(h=>{var f;(f=a.value)==null||f.addListener(h,k=>e(h,k))}),r.value=!0;const w=Object.keys(o).filter(h=>!["apiPromise","apiKey","version","libraries","region","language","center","zoom","nonce"].includes(h)).map(h=>xe(o,h));M([()=>o.center,()=>o.zoom,...w],([h,f],[k,y])=>{var C,_,L;const{center:E,zoom:I,...j}=m();(C=a.value)==null||C.setOptions(j),f!==void 0&&f!==y&&((_=a.value)==null||_.setZoom(f));const De=!k||h.lng!==k.lng||h.lat!==k.lat;h&&De&&((L=a.value)==null||L.panTo(h))})};return Q(()=>{o.apiPromise&&o.apiPromise instanceof Promise?o.apiPromise.then(p):(d(),fe.load().then(p))}),J(()=>{var c;s.value=!1,a.value&&((c=l.value)==null||c.event.clearInstanceListeners(a.value))}),{mapRef:t,ready:r,map:a,api:l,mapTilesLoaded:s}}}),ue=(o,e)=>{const t=o.__vccOpts||o;for(const[r,a]of e)t[r]=a;return t},Wt={ref:"mapRef",class:"mapdiv"};function Kt(o,e,t,r,a,l){return x(),S("div",null,[i("div",Wt,null,512),ie(o.$slots,"default",Te(Pe({ready:o.ready,map:o.map,api:o.api,mapTilesLoaded:o.mapTilesLoaded})),void 0,!0)])}const Zt=ue(Ht,[["render",Kt],["__scopeId","data-v-dbf82c40"]]);function Jt(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Yt=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,l;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!o(e[a],t[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(l=Object.keys(e),r=l.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[a]))return!1;for(a=r;a--!==0;){var s=l[a];if(!o(e[s],t[s]))return!1}return!0}return e!==e&&t!==t};const qe=Jt(Yt),Xt=o=>o==="Marker",eo=o=>o===ce,to=(o,e,t,r)=>{const a=u(),l=P(te,u()),s=P(oe,u()),m=P(Ft,u()),v=re(()=>!!(m.value&&s.value&&(a.value instanceof s.value.Marker||a.value instanceof s.value[ce])));return M([l,t],(d,[p,c])=>{var b,w,h;const f=!qe(t.value,c)||l.value!==p;!l.value||!s.value||!f||(a.value?(a.value.setOptions(t.value),v.value&&((b=m.value)==null||b.removeMarker(a.value),(w=m.value)==null||w.addMarker(a.value))):(Xt(o)?a.value=V(new s.value[o](t.value)):eo(o)?a.value=V(new s.value[o](t.value)):a.value=V(new s.value[o]({...t.value,map:l.value})),v.value?(h=m.value)==null||h.addMarker(a.value):a.value.setMap(l.value),e.forEach(k=>{var y;(y=a.value)==null||y.addListener(k,C=>r(k,C))})))},{immediate:!0}),J(()=>{var d,p;a.value&&((d=s.value)==null||d.event.clearInstanceListeners(a.value),v.value?(p=m.value)==null||p.removeMarker(a.value):a.value.setMap(null))}),a},ye=["animation_changed","click","dblclick","rightclick","dragstart","dragend","drag","mouseover","mousedown","mouseout","mouseup","draggable_changed","clickable_changed","contextmenu","cursor_changed","flat_changed","rightclick","zindex_changed","icon_changed","position_changed","shape_changed","title_changed","visible_changed"],_e=H({name:"Marker",props:{options:{type:Object,required:!0}},emits:ye,setup(o,{emit:e,expose:t,slots:r}){const a=xe(o,"options"),l=to("Marker",ye,a,e);return W(Se,l),t({marker:l}),()=>{var s;return(s=r.default)==null?void 0:s.call(r)}}});$e.concat(["bounds_changed"]);$e.concat(["center_changed","radius_changed"]);const oo=H({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(o,{emit:e}){const t=u(null),r=P(te,u()),a=P(oe,u()),l=P(Le,u(!1)),s=M([l,a,t],([d,p,c])=>{p&&d&&c&&(m(o.position),e("content:loaded"),setTimeout(s,0))},{immediate:!0}),m=d=>{if(r.value&&a.value&&t.value){const p=a.value.ControlPosition[d];r.value.controls[p].push(t.value)}},v=d=>{if(r.value&&a.value){let p=null;const c=a.value.ControlPosition[d];r.value.controls[c].forEach((b,w)=>{b===t.value&&(p=w)}),p!==null&&r.value.controls[c].removeAt(p)}};return J(()=>v(o.position)),M(()=>o.position,(d,p)=>{v(p),m(d)}),M(()=>o.index,d=>{d&&t.value&&(t.value.index=o.index)}),{controlRef:t}}}),ao={ref:"controlRef",class:"custom-control-wrapper"};function lo(o,e,t,r,a,l){return x(),S("div",ao,[ie(o.$slots,"default",{},void 0,!0)],512)}const ro=ue(oo,[["render",lo],["__scopeId","data-v-d099a3a6"]]),be=["closeclick","content_changed","domready","position_changed","visible","zindex_changed"],so=H({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})},modelValue:{type:Boolean}},emits:[...be,"update:modelValue"],setup(o,{slots:e,emit:t,expose:r}){const a=u(),l=u(),s=P(te,u()),m=P(oe,u()),v=P(Se,u());let d,p=o.modelValue;const c=re(()=>{var f;return(f=e.default)==null?void 0:f.call(e).some(k=>k.type!==Ae)}),b=f=>{p=f,t("update:modelValue",f)},w=f=>{a.value&&(a.value.open({map:s.value,anchor:v.value,...f}),b(!0))},h=()=>{a.value&&(a.value.close(),b(!1))};return Q(()=>{M([s,()=>o.options],([f,k],[y,C])=>{var _;const L=!qe(k,C)||s.value!==y;s.value&&m.value&&L&&(a.value?(a.value.setOptions({...k,content:c.value?l.value:k.content}),v.value||w()):(a.value=V(new m.value.InfoWindow({...k,content:c.value?l.value:k.content})),v.value&&(d=v.value.addListener("click",()=>{w()})),(!v.value||p)&&w(),be.forEach(E=>{var I;(I=a.value)==null||I.addListener(E,j=>t(E,j))}),(_=a.value)==null||_.addListener("closeclick",()=>b(!1))))},{immediate:!0}),M(()=>o.modelValue,f=>{f!==p&&(f?w():h())})}),J(()=>{var f;d&&d.remove(),a.value&&((f=m.value)==null||f.event.clearInstanceListeners(a.value),h())}),r({infoWindow:a,open:w,close:h}),{infoWindow:a,infoWindowRef:l,hasSlotContent:c,open:w,close:h}}}),io={key:0,class:"info-window-wrapper"};function no(o,e,t,r,a,l){return o.hasSlotContent?(x(),S("div",io,[i("div",Me({ref:"infoWindowRef"},o.$attrs),[ie(o.$slots,"default",{},void 0,!0)],16)])):R("",!0)}const we=ue(so,[["render",no],["__scopeId","data-v-cbe1707b"]]);var le;(function(o){o.CLUSTERING_BEGIN="clusteringbegin",o.CLUSTERING_END="clusteringend",o.CLUSTER_CLICK="click"})(le||(le={}));Object.values(le);const co=o=>(ze("data-v-10f3efc2"),o=o(),Be(),o),uo=co(()=>i("div",{class:"col-12 text-xl md:text-4xl font-bold border-b flex items-center pb-4"}," Our Location ",-1)),po={class:"w-full flex gap-4 font-bold text-lg"},mo=["nearby"],vo={class:"font-bold border-b pb-4"},ho={class:"clear-nearby-button"},fo={__name:"GoogleMapComponent",props:["propertyDetails","nearbyLocationList"],setup(o){const e=o,t=u(null),r=je({latLng:null}),a=u({}),l=u({}),s=u(null),m=u({}),v=u(1),d=u([]);d.value=[{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]}];const p=y=>{const C={lat:y.latLng.lat(),lng:y.latLng.lng()};t.value.map.panTo(C),r.latLng=y.latLng},c=()=>{r.latLng=null},b=async()=>{const y=e.nearbyLocationList;l.value=y.find(C=>C.current===1),a.value=y.filter(C=>C.nearby===1)},w=(y,C)=>{const _="text-red font-bold border-b-2 border-red-500".split(" ");return C&&C.classList.remove(..._),y.target.classList.add(..._),y.target},h=async y=>{const C=e.nearbyLocationList,_=y.target.getAttribute("nearby");v.value=1,s.value=await w(y,s.value),a.value=C.filter(L=>L.nearby===1),_!=="all"&&(a.value=a.value.filter(L=>JSON.parse(L.nearby_types).includes(_)))},f=()=>{m.value=[{label:"all",title:"All"},{label:"restaurant",title:"Restaurant"},{label:"school",title:"Schools"},{label:"gym",title:"Gym"},{label:"hospital",title:"Hospital"},{label:"cafe",title:"Cafe"}]},k=()=>{v.value=v.value?0:1};return b(),f(),(y,C)=>(x(),S(B,null,[uo,i("div",po,[(x(!0),S(B,null,F(m.value,(_,L)=>(x(),S("div",{key:L},[i("button",{onClick:h,nearby:_.label},$(_.title),9,mo)]))),128))]),n(D(Zt),{"api-key":y.googleMapKey,style:{width:"100%",height:"500px"},center:{lat:parseFloat(l.value.latitude),lng:parseFloat(l.value.longitude)},zoom:15,ref_key:"mapRef",ref:t,styles:d.value},{default:g(()=>[n(D(_e),{options:{position:{lat:parseFloat(l.value.latitude),lng:parseFloat(l.value.longitude)}},onClick:p},{default:g(()=>[r.latLng&&r.latLng.lat()===parseFloat(l.value.latitude)?(x(),q(D(we),{key:0,onCloseclick:c},{default:g(()=>[i("div",null,$(l.value.formatted_address),1)]),_:1})):R("",!0)]),_:1},8,["options"]),(x(!0),S(B,null,F(a.value,(_,L)=>(x(),S("div",{key:L},[n(D(_e),{options:{position:{lat:parseFloat(_.latitude),lng:parseFloat(_.longitude)},icon:{url:"../../images/"+_.icon_url+".png",scaledSize:{width:25,height:25}},opacity:v.value},onClick:p},{default:g(()=>[r.latLng&&r.latLng.lat()===parseFloat(_.latitude)?(x(),q(D(we),{key:0,onCloseclick:c},{default:g(()=>[i("div",null,[i("p",vo,$(_==null?void 0:_.display_name),1),A(" "+$(_==null?void 0:_.formatted_address),1)])]),_:2},1024)):R("",!0)]),_:2},1032,["options"])]))),128)),n(D(ro),{position:"BOTTOM_CENTER"},{default:g(()=>[i("button",ho,[n(Y,{name:v.value==1?"highlight_off":"check_circle",color:v.value==1?"red":"green",size:"32px",onClick:C[0]||(C[0]=_=>k())},null,8,["name","color"])])]),_:1})]),_:1},8,["api-key","center","styles"])],64))}},go=Re(fo,[["__scopeId","data-v-10f3efc2"]]),yo=["innerHTML"],_o={__name:"DescriptionsButton",props:["propertyDetails"],setup(o){const e=o,t=u(!1),r=u(!0);return(a,l)=>(x(),S("div",null,[n(O,{icon:"description",round:"",color:"primary",size:"18px",onClick:l[0]||(l[0]=s=>t.value=!0)}),n(ee,{modelValue:t.value,"onUpdate:modelValue":l[3]||(l[3]=s=>t.value=s),persistent:"",maximized:r.value,"transition-show":"slide-up","transition-hide":"slide-down"},{default:g(()=>[n(X,null,{default:g(()=>[n(ke,{style:{height:"50px"}},{default:g(()=>[n(We),n(O,{flat:"",icon:"minimize",onClick:l[1]||(l[1]=s=>r.value=!1),disable:!r.value},{default:g(()=>[r.value?(x(),q(K,{key:0,class:"bg-white text-primary"},{default:g(()=>[A("Minimize")]),_:1})):R("",!0)]),_:1},8,["disable"]),n(O,{flat:"",icon:"crop_square",onClick:l[2]||(l[2]=s=>r.value=!0),disable:r.value},{default:g(()=>[r.value?R("",!0):(x(),q(K,{key:0,class:"bg-white text-primary"},{default:g(()=>[A("Maximize")]),_:1}))]),_:1},8,["disable"]),se((x(),q(O,{flat:"",icon:"close"},{default:g(()=>[n(K,{class:"bg-white text-primary"},{default:g(()=>[A("Close")]),_:1})]),_:1})),[[ne]])]),_:1}),n(U,{class:"prose max-w-none prose-strong:font-black prose-h1:text-7xl prose-h2:text-6xl prose-h3:text-5xl md:py-10"},{default:g(()=>[i("div",{innerHTML:e.propertyDetails.description},null,8,yo)]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])]))}},bo={class:"col-12 col-md-8 row justify-between gap-6","data-aos":"fade-right"},Vo={__name:"DetailsPage",setup(o){const e=Ve(),t=u({}),r=u(0),a=u([]),l=u([]),s=u(""),m=u(""),v=u(""),d=u(""),p=u(!1),c=u([]),b=u([]),w=u("");w.value="bottom-[8%]";const h=async()=>{var C;const y=await e.fetchPropertyDetails();return c.value=await e.fetchNearbyLocation(y.id),b.value=await e.fetchDetailViews(y.id),t.value=y,r.value=((C=y.sliders)==null?void 0:C.length)||0,s.value="I am interested in "+t.value.name+" priced at RM"+t.value.price+". Can you provide more details?",y};a.value=[{name:"Beds",icon:"bed",value:"bedroom"},{name:"Bath",icon:"bathtub",value:"bathroom"},{name:"Car Park",icon:"directions_car",value:"car_park"},{name:"sqft",icon:"square_foot",value:"square_feet"},{name:"",icon:"apartment",value:"tenure"}],l.value=[{name:"Tenure",label:"",front_label:"",value:"tenure"},{name:"Price",label:"",front_label:"RM",value:"price"}];const f=()=>{const y=document.querySelector(".banner-component"),C=document.querySelector(".footer-container"),_={threshold:.3},L=new IntersectionObserver(I=>{I.forEach(j=>{m.value="",v.value="",j.isIntersecting||(m.value="fixed w-[290px] xl:w-[350px] top-[12.5%]",p.value=!0)})},_),E=new IntersectionObserver(I=>{I.forEach(j=>{m.value="",v.value="flex items-end",d.value="hidden",j.isIntersecting||(m.value="fixed w-[290px] xl:w-[350px] top-[12.5%]",v.value="",d.value="")})},_);L.observe(y),E.observe(C)},k=()=>p.value?m.value:"";return Q(()=>{h(),setTimeout(function(){const y=document.querySelector(".container").offsetHeight,C=700,_=1024;(y>C||window.innerWidth<_)&&f()},1e3),k()}),(y,C)=>(x(),q(Ne,null,{content:g(({descriptionButtonPosition:_})=>[n(xt,{propertyDetails:t.value,style:{"margin-top":"5.5rem"},class:"banner-component"},null,8,["propertyDetails"]),i("div",{class:T(["container mx-auto row justify-between gap-10 pt-6",y.$q.screen.lt.lg?"p-8":"w-4/6"])},[i("div",bo,[n(ht,{propertyDetails:t.value,propertyRoomDetails:a.value,whatsAppEnquiries:s.value,sliders:r.value,detailViews:b.value},null,8,["propertyDetails","propertyRoomDetails","whatsAppEnquiries","sliders","detailViews"]),n(wt,{propertyDetails:t.value},null,8,["propertyDetails"]),c.value.length>0?(x(),q(go,{key:0,propertyDetails:t.value,nearbyLocationList:c.value},null,8,["propertyDetails","nearbyLocationList"])):R("",!0)]),i("div",{class:T(["col",y.$q.screen.lt.md?"hidden":v.value])},[n(Ce,{whatsAppEnquiries:s.value,class:T(["row border rounded-lg px-6 py-10 gap-6",p.value?m.value:""])},null,8,["whatsAppEnquiries","class"])],2)],2),i("div",{class:T(y.$q.screen.lt.md?d.value:"hidden")},[n(Bt,{whatsAppEnquiries:s.value},null,8,["whatsAppEnquiries"])],2),i("div",{class:T(`p-4 pr-2 fixed ${_} right-0`)},[n(_o,{propertyDetails:t.value},null,8,["propertyDetails"])],2)]),_:1}))}};export{Vo as default};
