import{k as le,B as Oe,J as Ee,h as G,r as u,o as F,m as k,u as S,y as i,A as n,q as y,F as j,T as V,n as D,ay as O,Y as Ie,W as T,D as z,E as q,U as M,R as re,az as xe,j as H,x as P,w as A,aA as N,i as Z,s as se,aB as Te,aC as Pe,aD as Ae,aE as Me,z as Re,au as je,G as ze,H as Be}from"./ckeditor-568c0a64.js";import{_ as Ne}from"./BaseLayout-6840162b.js";import{u as Ve}from"./index-70ab4703.js";import{Q as oe}from"./QChip-50267dd3.js";import{Q as E}from"./QBtn-05999df9.js";import{Q as W}from"./QTooltip-05843c46.js";import{c as Fe,u as Qe,b as Ue,e as Ge,Q as ie}from"./vm-f21f9386.js";import{Q}from"./QCardSection-a12a20b2.js";import{Q as J}from"./QCard-e8f25c2d.js";import{Q as Y}from"./QDialog-40930b1c.js";import{C as ne}from"./ClosePopup-55871ade.js";import{Q as U}from"./QImg-21d7b9bb.js";import{S as de,a as pe}from"./app-a706fd20.js";import{Q as K}from"./QAvatar-5ff8dae9.js";import{b as He}from"./QSeparator-5b4b8ad3.js";import{Q as We}from"./QSpace-b0ae8a1e.js";import"./QToolbar-5253e172.js";import"./QMenu-531419ec.js";import"./use-tick-0d48cbe6.js";import"./dayjs.min-67c2dead.js";import"./use-prevent-scroll-0d30f442.js";const ke=Fe({name:"QBar",props:{...Qe,dense:Boolean},setup(o,{slots:e}){const{proxy:{$q:t}}=Ee(),r=Ue(o,t),a=le(()=>`q-bar row no-wrap items-center q-bar--${o.dense===!0?"dense":"standard"}  q-bar--${r.value===!0?"dark":"light"}`);return()=>Oe("div",{class:a.value,role:"toolbar"},Ge(e.default))}}),Ke={class:"wrapper row gap-8 overflow-hidden"},Ze={class:"col-12 m-auto"},Je={class:"ml-auto mr-2"},Ye={class:"ml-auto mr-2"},Xe={class:"col-12 row justify-center border-t pt-6"},et={class:"col-12"},tt={class:"col-12 text-lg font-semibold flex row"},ot={class:"col-6 col-sm-4"},at=G({__name:"SliderComponent",props:["propertyDetails"],setup(o){const e=o,t=u(),r=u(),a=u(0),l=u(1),s={type:"slide",rewind:!0,perPage:1,perMove:1,gap:"1rem",pagination:!1,height:450,cover:!0,breakpoints:{640:{fixedHeight:300}}},m={type:"slide",rewind:!0,gap:"0.5rem",pagination:!1,fixedWidth:110,fixedHeight:80,cover:!0,focus:"center",isNavigation:!0,updateOnMove:!0,arrows:!1},v=(c,b)=>{a.value=b,l.value=1},d=()=>{l.value<2&&(l.value+=.2)},p=()=>{l.value>1&&(l.value-=.2)};return F(()=>{var b,_;const c=(b=r.value)==null?void 0:b.splide;c&&((_=t.value)==null||_.sync(c))}),(c,b)=>{var _,h;return k(),S("div",Ke,[i("div",Ze,[n(O(pe),{options:s,ref_key:"main",ref:t,"onSplide:moved":v},{default:y(()=>[(k(!0),S(j,null,V(e.propertyDetails.sliders,(f,g)=>(k(),D(O(de),{key:g},{default:y(()=>[n(U,{src:f.image.url,fit:"contain",class:"h-full",style:Ie(g===a.value?`transform: scale(${l.value})`:"")},null,8,["src","style"])]),_:2},1024))),128))]),_:1},512),i("div",{class:T(["flex flex-col gap-1",c.$q.screen.lt.md?"hidden":""])},[i("div",Je,[n(E,{rounded:"",color:"transparent",icon:"add","text-color":"black",onClick:d})]),i("div",Ye,[n(E,{rounded:"",color:"transparent",icon:"remove","text-color":"black",onClick:p})])],2)]),i("div",Xe,[i("div",et,[n(O(pe),{options:m,ref_key:"thumbs",ref:r},{default:y(()=>[(k(!0),S(j,null,V(e.propertyDetails.sliders,(f,g)=>(k(),D(O(de),{key:g},{default:y(()=>[n(U,{src:f.image.url,fit:"contain",class:"h-full"},null,8,["src"])]),_:2},1024))),128))]),_:1},512)]),i("div",tt,[i("div",ot,[n(ie,{name:"collections",size:"32px"}),z(" "+q((_=e.propertyDetails.sliders)==null?void 0:_.length)+" ",1),i("span",{class:T(c.$q.screen.lt.sm?"hidden":"")},"Photos",2)]),i("div",{class:T(["col-6 col-sm-4 flex",c.$q.screen.lt.sm?"justify-end":"justify-center"])},q(a.value+1)+" / "+q((h=e.propertyDetails.sliders)==null?void 0:h.length),3)])])])}}}),lt={class:"col-12 row justify-between items-center gap-4"},rt={class:"col-12 row gap-4 items-center text-xl md:text-4xl break-words"},st={key:0,class:"col-12"},it={class:"text-sm"},nt={class:"col-12"},ct={class:"bg-secondary featured-label text-center py-2 px-4 font-bold rounded capitalize w-[100px]"},ut={class:"col-12"},dt={class:"text-xl md:text-4xl font-bold"},pt={class:"col-12"},mt={key:0},me=1200,vt={__name:"InfoComponent",props:["propertyDetails","propertyRoomDetails","whatsAppEnquiries","sliders"],setup(o){const e=o,t=u(!1),r=u(""),a=u(!0);r.value="hidden";const l=()=>{t.value=!0,setTimeout(()=>{r.value=""},me)},s=(m,v="RM")=>{const d=m==null?void 0:m.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return`${v}${d}`};return F(()=>{setTimeout(()=>{r.value=""},me)}),(m,v)=>(k(),S("div",lt,[i("div",rt,q(e.propertyDetails.name),1),e.propertyDetails.details&&e.propertyDetails.details_toggle?(k(),S("div",st,[i("div",it,[(k(!0),S(j,null,V(e.propertyRoomDetails,(d,p)=>(k(),D(oe,{color:"teal","text-color":"white",icon:d.icon,key:p},{default:y(()=>[z(q(e.propertyDetails.details[d.value])+" "+q(d.name),1)]),_:2},1032,["icon"]))),128))])])):M("",!0),i("div",nt,[i("div",ct," For "+q(e.propertyDetails.listing_type),1)]),i("div",ut,[i("span",dt,q(s(e.propertyDetails.price,"RM ")),1)]),i("div",pt,[e.sliders>0?(k(),S("div",mt,[n(E,{label:"View More",icon:"photo_camera",color:"teal",class:T(r.value),onClick:v[0]||(v[0]=d=>l())},null,8,["class"]),n(Y,{modelValue:t.value,"onUpdate:modelValue":v[1]||(v[1]=d=>t.value=d),maximized:a.value},{default:y(()=>[n(J,{class:"py-6 md:px-4 overflow-hidden"},{default:y(()=>[n(ke,{class:"justify-end bg-white"},{default:y(()=>[re((k(),D(E,{flat:"",icon:"close",size:"18px"},{default:y(()=>[n(W,{class:"bg-white text-primary"},{default:y(()=>[z("Close")]),_:1})]),_:1})),[[ne]])]),_:1}),n(Q,{class:"h-full grid mx-auto"},{default:y(()=>[n(at,{propertyDetails:e.propertyDetails},null,8,["propertyDetails"])]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])])):M("",!0)])]))}},ht={class:"col-12 row justify-between"},ft={class:"col-12 rounded row md:py-10"},gt={class:"col-12 row q-gutter-y-md"},yt=i("div",{class:"col-12 text-xl md:text-4xl font-bold border-b border-grey flex items-center pb-4"}," Details ",-1),_t=["innerHTML"],bt={__name:"ShortDescComponent",props:["propertyDetails"],setup(o){const e=o;return(t,r)=>(k(),S("div",ht,[i("div",ft,[i("div",gt,[yt,i("div",{class:"col-12 break-words",innerHTML:e.propertyDetails.short_description},null,8,_t)])])]))}},wt={__name:"BannerComponent",props:["propertyDetails"],setup(o){const e=o,t=u(!1),r=()=>{t.value=!0};return(a,l)=>(k(),S("div",null,[n(U,{src:e.propertyDetails.banner?e.propertyDetails.banner.image.url:"https://cdn.quasar.dev/img/parallax2.jpg",class:"cursor-pointer h-[450px]",fit:a.$q.screen.lt.md?"cover":"contain",onClick:l[0]||(l[0]=s=>r())},null,8,["src","fit"]),n(Y,{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=s=>t.value=s)},{default:y(()=>[n(J,{style:{width:"100%"}},{default:y(()=>[n(Q,null,{default:y(()=>[n(U,{src:e.propertyDetails.banner?e.propertyDetails.banner.image.url:"https://cdn.quasar.dev/img/parallax2.jpg",fit:a.contain},null,8,["src","fit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};const xt={class:"col-12 flex gap-4"},kt=i("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),Ct=i("div",null,[i("div",{class:"font-bold text-xl"},"Admin"),i("div",{class:"text-sm"},"E-(3)1482")],-1),St={class:"col-12"},Lt={class:"col-12 row gap-6"},qt={class:"col-12"},$t=["href"],Dt=i("span",{class:"text-lg ml-2"},"Chat On Whatsapp",-1),Ot={class:"col-12"},Et=["href"],It={class:"text-lg ml-2"},Ce={__name:"ListingAgentComponent",props:["whatsAppEnquiries"],setup(o){const e=o,t=u([]);return t.value=[{name:"Admin",contact:"60192140561",contactLabel:"019-2140561"},{name:"Admin",contact:"60123729668",contactLabel:"012-3729668"},{name:"Admin",contact:"60193560561",contactLabel:"019-3560561"}],(r,a)=>(k(),S("div",null,[i("div",xt,[i("div",null,[n(K,null,{default:y(()=>[kt]),_:1})]),Ct]),i("div",St,[n(He,{color:"grey-4"})]),i("div",Lt,[(k(!0),S(j,null,V(t.value,(l,s)=>(k(),S("div",{class:"col-12 row items-center",key:s},[i("div",qt,[n(oe,{color:"white","text-color":"black",class:"w-full py-4 border shadow-md",size:"22px"},{default:y(()=>[i("a",{href:"https://wa.me/"+l.contact+"?text="+encodeURIComponent(e.whatsAppEnquiries),target:"_blank"},[n(K,{size:"24px"},{default:y(()=>[n(U,{src:"/images/amber_whatsapp.png"})]),_:1}),Dt],8,$t)]),_:2},1024)]),i("div",Ot,[n(oe,{color:"white","text-color":"black",class:"w-full py-4 border shadow-md",size:"22px"},{default:y(()=>[i("a",{href:`tel:${l.contact}`},[n(K,null,{default:y(()=>[n(ie,{name:"phone",size:"24px"})]),_:1}),i("span",It,q(l.contactLabel),1)],8,Et)]),_:2},1024)])]))),128))])]))}};const Tt={class:"row justify-between items-center px-3 py-2 border fixed bottom-0 bg-white w-full"},Pt={class:"col col-auto row gap-2"},At={class:"col"},Mt=i("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),Rt=i("div",{class:"col col-auto row"},[i("div",{class:"col-12 font-bold footer__mobilelabel"},"Admin"),i("div",{class:"col-12"},"E-(3)1482")],-1),jt={class:"col col-auto"},zt={__name:"ListingAgentMobileComponent",props:["whatsAppEnquiries"],setup(o){const e=o,t=u(!1),r=()=>{t.value=!0},a=()=>{window.innerWidth>1024&&(t.value=!1)};return F(()=>{window.addEventListener("resize",a)}),(l,s)=>(k(),S("div",Tt,[i("div",Pt,[i("div",At,[n(K,null,{default:y(()=>[Mt]),_:1})]),Rt]),i("div",jt,[n(E,{color:"primary",icon:"description",label:"Details",onClick:r})]),n(Y,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=m=>t.value=m)},{default:y(()=>[n(J,null,{default:y(()=>[n(Q,{class:"row items-center justify-end"},{default:y(()=>[re(n(E,{icon:"close",flat:"",round:"",dense:""},null,512),[[ne]])]),_:1}),n(Q,{class:"q-pt-none"},{default:y(()=>[n(Ce,{whatsAppEnquiries:e.whatsAppEnquiries,class:"row rounded-lg py-6 gap-4"},null,8,["whatsAppEnquiries"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};(function(){try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".mapdiv[data-v-dbf82c40]{width:100%;height:100%}.custom-control-wrapper[data-v-d099a3a6]{display:none}.mapdiv .custom-control-wrapper[data-v-d099a3a6]{display:inline-block}.info-window-wrapper[data-v-cbe1707b]{display:none}.mapdiv .info-window-wrapper[data-v-cbe1707b]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();var Bt=Object.defineProperty,Nt=(o,e,t)=>e in o?Bt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,ve=(o,e,t)=>(Nt(o,typeof e!="symbol"?e+"":e,t),t);const X=Symbol("map"),ee=Symbol("api"),Se=Symbol("marker"),Vt=Symbol("markerCluster"),ce=Symbol("CustomMarker"),Le=Symbol("mapTilesLoaded"),qe=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];/*! *****************************************************************************
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
***************************************************************************** */function Ft(o,e,t,r){function a(l){return l instanceof t?l:new t(function(s){s(l)})}return new(t||(t=Promise))(function(l,s){function m(p){try{d(r.next(p))}catch(c){s(c)}}function v(p){try{d(r.throw(p))}catch(c){s(c)}}function d(p){p.done?l(p.value):a(p.value).then(m,v)}d((r=r.apply(o,e||[])).next())})}var Qt=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,l;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!o(e[a],t[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(l=Object.keys(e),r=l.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[a]))return!1;for(a=r;a--!==0;){var s=l[a];if(!o(e[s],t[s]))return!1}return!0}return e!==e&&t!==t};const he="__googleMapsScriptId";var B;(function(o){o[o.INITIALIZED=0]="INITIALIZED",o[o.LOADING=1]="LOADING",o[o.SUCCESS=2]="SUCCESS",o[o.FAILURE=3]="FAILURE"})(B||(B={}));class R{constructor({apiKey:e,authReferrerPolicy:t,channel:r,client:a,id:l=he,language:s,libraries:m=[],mapIds:v,nonce:d,region:p,retries:c=3,url:b="https://maps.googleapis.com/maps/api/js",version:_}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=r,this.client=a,this.id=l||he,this.language=s,this.libraries=m,this.mapIds=v,this.nonce=d,this.region=p,this.retries=c,this.url=b,this.version=_,R.instance){if(!Qt(this.options,R.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(R.instance.options)}`);return R.instance}R.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?B.FAILURE:this.done?B.SUCCESS:this.loading?B.LOADING:B.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(r=>{r?t(r.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,t;if(document.getElementById(this.id)){this.callback();return}const r={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(r).forEach(l=>!r[l]&&delete r[l]),!((t=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||t===void 0)&&t.importLibrary||(l=>{let s,m,v,d="The Google Maps JavaScript API",p="google",c="importLibrary",b="__ib__",_=document,h=window;h=h[p]||(h[p]={});const f=h.maps||(h.maps={}),g=new Set,w=new URLSearchParams,C=()=>s||(s=new Promise((x,L)=>Ft(this,void 0,void 0,function*(){var $;yield m=_.createElement("script"),m.id=this.id,w.set("libraries",[...g]+"");for(v in l)w.set(v.replace(/[A-Z]/g,I=>"_"+I[0].toLowerCase()),l[v]);w.set("callback",p+".maps."+b),m.src=this.url+"?"+w,f[b]=x,m.onerror=()=>s=L(Error(d+" could not load.")),m.nonce=this.nonce||(($=_.querySelector("script[nonce]"))===null||$===void 0?void 0:$.nonce)||"",_.head.append(m)})));f[c]?console.warn(d+" only loads once. Ignoring:",l):f[c]=(x,...L)=>g.add(x)&&C().then(()=>f[c](x,...L))})(r);const a=this.libraries.map(l=>this.importLibrary(l));a.length||a.push(this.importLibrary("core")),Promise.all(a).then(()=>this.callback(),l=>{const s=new ErrorEvent("error",{error:l});this.loadErrorCallback(s)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setScript())}}}function Ut(o){return class extends o.OverlayView{constructor(e){super(),ve(this,"element"),ve(this,"opts");const{element:t,...r}=e;this.element=t,this.opts=r,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof o.LatLng?this.opts.position:new o.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;const e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||Number(e.style.opacity)>.01)}onAdd(){if(!this.element)return;const e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}draw(){if(!this.element)return;const e=this.getProjection(),t=e==null?void 0:e.fromLatLngToDivPixel(this.getPosition());if(t){this.element.style.position="absolute";const r=this.element.offsetHeight,a=this.element.offsetWidth;let l,s;switch(this.opts.anchorPoint){case"TOP_CENTER":l=t.x-a/2,s=t.y;break;case"BOTTOM_CENTER":l=t.x-a/2,s=t.y-r;break;case"LEFT_CENTER":l=t.x,s=t.y-r/2;break;case"RIGHT_CENTER":l=t.x-a,s=t.y-r/2;break;case"TOP_LEFT":l=t.x,s=t.y;break;case"TOP_RIGHT":l=t.x-a,s=t.y;break;case"BOTTOM_LEFT":l=t.x,s=t.y-r;break;case"BOTTOM_RIGHT":l=t.x-a,s=t.y-r;break;default:l=t.x-a/2,s=t.y-r/2}this.element.style.left=l+"px",this.element.style.top=s+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}onRemove(){this.element&&this.element.remove()}setOptions(e){const{element:t,...r}=e;this.element=t,this.opts=r,this.draw()}}}let fe;const ge=["bounds_changed","center_changed","click","contextmenu","dblclick","drag","dragend","dragstart","heading_changed","idle","isfractionalzoomenabled_changed","mapcapabilities_changed","maptypeid_changed","mousemove","mouseout","mouseover","projection_changed","renderingtype_changed","rightclick","tilesloaded","tilt_changed","zoom_changed"],Gt=G({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},isFractionalZoomEnabled:{type:Boolean,required:!1,default:void 0},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1},nonce:{type:String,default:""}},emits:ge,setup(o,{emit:e}){const t=u(),r=u(!1),a=u(),l=u(),s=u(!1);H(X,a),H(ee,l),H(Le,s);const m=()=>{const c={...o};Object.keys(c).forEach(h=>{c[h]===void 0&&delete c[h]});const b=h=>{var f;return h?{position:(f=l.value)==null?void 0:f.ControlPosition[h]}:{}},_={scaleControlOptions:o.scaleControlStyle?{style:o.scaleControlStyle}:{},panControlOptions:b(o.panControlPosition),zoomControlOptions:b(o.zoomControlPosition),rotateControlOptions:b(o.rotateControlPosition),streetViewControlOptions:b(o.streetViewControlPosition),fullscreenControlOptions:b(o.fullscreenControlPosition),disableDefaultUI:o.disableDefaultUi};return{...c,..._}},v=A([l,a],([c,b])=>{const _=c,h=b;_&&h&&(_.event.addListenerOnce(h,"tilesloaded",()=>{s.value=!0}),setTimeout(v,0))},{immediate:!0}),d=()=>{try{const{apiKey:c,region:b,version:_,language:h,libraries:f,nonce:g}=o;fe=new R({apiKey:c,region:b,version:_,language:h,libraries:f,nonce:g})}catch(c){console.error(c)}},p=c=>{l.value=N(c.maps),a.value=N(new c.maps.Map(t.value,m()));const b=Ut(l.value);l.value[ce]=b,ge.forEach(h=>{var f;(f=a.value)==null||f.addListener(h,g=>e(h,g))}),r.value=!0;const _=Object.keys(o).filter(h=>!["apiPromise","apiKey","version","libraries","region","language","center","zoom","nonce"].includes(h)).map(h=>xe(o,h));A([()=>o.center,()=>o.zoom,..._],([h,f],[g,w])=>{var C,x,L;const{center:$,zoom:I,...te}=m();(C=a.value)==null||C.setOptions(te),f!==void 0&&f!==w&&((x=a.value)==null||x.setZoom(f));const De=!g||h.lng!==g.lng||h.lat!==g.lat;h&&De&&((L=a.value)==null||L.panTo(h))})};return F(()=>{o.apiPromise&&o.apiPromise instanceof Promise?o.apiPromise.then(p):(d(),fe.load().then(p))}),Z(()=>{var c;s.value=!1,a.value&&((c=l.value)==null||c.event.clearInstanceListeners(a.value))}),{mapRef:t,ready:r,map:a,api:l,mapTilesLoaded:s}}}),ue=(o,e)=>{const t=o.__vccOpts||o;for(const[r,a]of e)t[r]=a;return t},Ht={ref:"mapRef",class:"mapdiv"};function Wt(o,e,t,r,a,l){return k(),S("div",null,[i("div",Ht,null,512),se(o.$slots,"default",Te(Pe({ready:o.ready,map:o.map,api:o.api,mapTilesLoaded:o.mapTilesLoaded})),void 0,!0)])}const Kt=ue(Gt,[["render",Wt],["__scopeId","data-v-dbf82c40"]]);function Zt(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Jt=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,l;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!o(e[a],t[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(l=Object.keys(e),r=l.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[a]))return!1;for(a=r;a--!==0;){var s=l[a];if(!o(e[s],t[s]))return!1}return!0}return e!==e&&t!==t};const $e=Zt(Jt),Yt=o=>o==="Marker",Xt=o=>o===ce,eo=(o,e,t,r)=>{const a=u(),l=P(X,u()),s=P(ee,u()),m=P(Vt,u()),v=le(()=>!!(m.value&&s.value&&(a.value instanceof s.value.Marker||a.value instanceof s.value[ce])));return A([l,t],(d,[p,c])=>{var b,_,h;const f=!$e(t.value,c)||l.value!==p;!l.value||!s.value||!f||(a.value?(a.value.setOptions(t.value),v.value&&((b=m.value)==null||b.removeMarker(a.value),(_=m.value)==null||_.addMarker(a.value))):(Yt(o)?a.value=N(new s.value[o](t.value)):Xt(o)?a.value=N(new s.value[o](t.value)):a.value=N(new s.value[o]({...t.value,map:l.value})),v.value?(h=m.value)==null||h.addMarker(a.value):a.value.setMap(l.value),e.forEach(g=>{var w;(w=a.value)==null||w.addListener(g,C=>r(g,C))})))},{immediate:!0}),Z(()=>{var d,p;a.value&&((d=s.value)==null||d.event.clearInstanceListeners(a.value),v.value?(p=m.value)==null||p.removeMarker(a.value):a.value.setMap(null))}),a},ye=["animation_changed","click","dblclick","rightclick","dragstart","dragend","drag","mouseover","mousedown","mouseout","mouseup","draggable_changed","clickable_changed","contextmenu","cursor_changed","flat_changed","rightclick","zindex_changed","icon_changed","position_changed","shape_changed","title_changed","visible_changed"],_e=G({name:"Marker",props:{options:{type:Object,required:!0}},emits:ye,setup(o,{emit:e,expose:t,slots:r}){const a=xe(o,"options"),l=eo("Marker",ye,a,e);return H(Se,l),t({marker:l}),()=>{var s;return(s=r.default)==null?void 0:s.call(r)}}});qe.concat(["bounds_changed"]);qe.concat(["center_changed","radius_changed"]);const to=G({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(o,{emit:e}){const t=u(null),r=P(X,u()),a=P(ee,u()),l=P(Le,u(!1)),s=A([l,a,t],([d,p,c])=>{p&&d&&c&&(m(o.position),e("content:loaded"),setTimeout(s,0))},{immediate:!0}),m=d=>{if(r.value&&a.value&&t.value){const p=a.value.ControlPosition[d];r.value.controls[p].push(t.value)}},v=d=>{if(r.value&&a.value){let p=null;const c=a.value.ControlPosition[d];r.value.controls[c].forEach((b,_)=>{b===t.value&&(p=_)}),p!==null&&r.value.controls[c].removeAt(p)}};return Z(()=>v(o.position)),A(()=>o.position,(d,p)=>{v(p),m(d)}),A(()=>o.index,d=>{d&&t.value&&(t.value.index=o.index)}),{controlRef:t}}}),oo={ref:"controlRef",class:"custom-control-wrapper"};function ao(o,e,t,r,a,l){return k(),S("div",oo,[se(o.$slots,"default",{},void 0,!0)],512)}const lo=ue(to,[["render",ao],["__scopeId","data-v-d099a3a6"]]),be=["closeclick","content_changed","domready","position_changed","visible","zindex_changed"],ro=G({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})},modelValue:{type:Boolean}},emits:[...be,"update:modelValue"],setup(o,{slots:e,emit:t,expose:r}){const a=u(),l=u(),s=P(X,u()),m=P(ee,u()),v=P(Se,u());let d,p=o.modelValue;const c=le(()=>{var f;return(f=e.default)==null?void 0:f.call(e).some(g=>g.type!==Ae)}),b=f=>{p=f,t("update:modelValue",f)},_=f=>{a.value&&(a.value.open({map:s.value,anchor:v.value,...f}),b(!0))},h=()=>{a.value&&(a.value.close(),b(!1))};return F(()=>{A([s,()=>o.options],([f,g],[w,C])=>{var x;const L=!$e(g,C)||s.value!==w;s.value&&m.value&&L&&(a.value?(a.value.setOptions({...g,content:c.value?l.value:g.content}),v.value||_()):(a.value=N(new m.value.InfoWindow({...g,content:c.value?l.value:g.content})),v.value&&(d=v.value.addListener("click",()=>{_()})),(!v.value||p)&&_(),be.forEach($=>{var I;(I=a.value)==null||I.addListener($,te=>t($,te))}),(x=a.value)==null||x.addListener("closeclick",()=>b(!1))))},{immediate:!0}),A(()=>o.modelValue,f=>{f!==p&&(f?_():h())})}),Z(()=>{var f;d&&d.remove(),a.value&&((f=m.value)==null||f.event.clearInstanceListeners(a.value),h())}),r({infoWindow:a,open:_,close:h}),{infoWindow:a,infoWindowRef:l,hasSlotContent:c,open:_,close:h}}}),so={key:0,class:"info-window-wrapper"};function io(o,e,t,r,a,l){return o.hasSlotContent?(k(),S("div",so,[i("div",Me({ref:"infoWindowRef"},o.$attrs),[se(o.$slots,"default",{},void 0,!0)],16)])):M("",!0)}const we=ue(ro,[["render",io],["__scopeId","data-v-cbe1707b"]]);var ae;(function(o){o.CLUSTERING_BEGIN="clusteringbegin",o.CLUSTERING_END="clusteringend",o.CLUSTER_CLICK="click"})(ae||(ae={}));Object.values(ae);const no=o=>(ze("data-v-10f3efc2"),o=o(),Be(),o),co=no(()=>i("div",{class:"col-12 text-xl md:text-4xl font-bold border-b flex items-center pb-4"}," Our Location ",-1)),uo={class:"w-full flex gap-4 font-bold text-lg"},po=["nearby"],mo={class:"font-bold border-b pb-4"},vo={class:"clear-nearby-button"},ho={__name:"GoogleMapComponent",props:["propertyDetails","nearbyLocationList"],setup(o){const e=o,t=u(null),r=je({latLng:null}),a=u({}),l=u({}),s=u(null),m=u({}),v=u(1),d=u([]);d.value=[{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]}];const p=w=>{const C={lat:w.latLng.lat(),lng:w.latLng.lng()};t.value.map.panTo(C),r.latLng=w.latLng},c=()=>{r.latLng=null},b=async()=>{const w=e.nearbyLocationList;l.value=w.find(C=>C.current===1),a.value=w.filter(C=>C.nearby===1)},_=(w,C)=>{const x="text-red font-bold border-b-2 border-red-500".split(" ");return C&&C.classList.remove(...x),w.target.classList.add(...x),w.target},h=async w=>{const C=e.nearbyLocationList,x=w.target.getAttribute("nearby");v.value=1,s.value=await _(w,s.value),a.value=C.filter(L=>L.nearby===1),x!=="all"&&(a.value=a.value.filter(L=>JSON.parse(L.nearby_types).includes(x)))},f=()=>{m.value=[{label:"all",title:"All"},{label:"restaurant",title:"Restaurant"},{label:"school",title:"Schools"},{label:"gym",title:"Gym"},{label:"hospital",title:"Hospital"},{label:"cafe",title:"Cafe"}]},g=()=>{v.value=v.value?0:1};return b(),f(),(w,C)=>(k(),S(j,null,[co,i("div",uo,[(k(!0),S(j,null,V(m.value,(x,L)=>(k(),S("div",{key:L},[i("button",{onClick:h,nearby:x.label},q(x.title),9,po)]))),128))]),n(O(Kt),{"api-key":w.googleMapKey,style:{width:"100%",height:"500px"},center:{lat:parseFloat(l.value.latitude),lng:parseFloat(l.value.longitude)},zoom:15,ref_key:"mapRef",ref:t,styles:d.value},{default:y(()=>[n(O(_e),{options:{position:{lat:parseFloat(l.value.latitude),lng:parseFloat(l.value.longitude)}},onClick:p},{default:y(()=>[r.latLng&&r.latLng.lat()===parseFloat(l.value.latitude)?(k(),D(O(we),{key:0,onCloseclick:c},{default:y(()=>[i("div",null,q(l.value.formatted_address),1)]),_:1})):M("",!0)]),_:1},8,["options"]),(k(!0),S(j,null,V(a.value,(x,L)=>(k(),S("div",{key:L},[n(O(_e),{options:{position:{lat:parseFloat(x.latitude),lng:parseFloat(x.longitude)},icon:{url:"../../images/"+x.icon_url+".png",scaledSize:{width:25,height:25}},opacity:v.value},onClick:p},{default:y(()=>[r.latLng&&r.latLng.lat()===parseFloat(x.latitude)?(k(),D(O(we),{key:0,onCloseclick:c},{default:y(()=>[i("div",null,[i("p",mo,q(x==null?void 0:x.display_name),1),z(" "+q(x==null?void 0:x.formatted_address),1)])]),_:2},1024)):M("",!0)]),_:2},1032,["options"])]))),128)),n(O(lo),{position:"BOTTOM_CENTER"},{default:y(()=>[i("button",vo,[n(ie,{name:v.value==1?"highlight_off":"check_circle",color:v.value==1?"red":"green",size:"32px",onClick:C[0]||(C[0]=x=>g())},null,8,["name","color"])])]),_:1})]),_:1},8,["api-key","center","styles"])],64))}},fo=Re(ho,[["__scopeId","data-v-10f3efc2"]]),go=["innerHTML"],yo={__name:"DescriptionsButton",props:["propertyDetails"],setup(o){const e=o,t=u(!1),r=u(!0);return(a,l)=>(k(),S("div",null,[n(E,{icon:"description",round:"",color:"primary",size:"18px",onClick:l[0]||(l[0]=s=>t.value=!0)}),n(Y,{modelValue:t.value,"onUpdate:modelValue":l[3]||(l[3]=s=>t.value=s),persistent:"",maximized:r.value,"transition-show":"slide-up","transition-hide":"slide-down"},{default:y(()=>[n(J,null,{default:y(()=>[n(ke,{style:{height:"50px"}},{default:y(()=>[n(We),n(E,{flat:"",icon:"minimize",onClick:l[1]||(l[1]=s=>r.value=!1),disable:!r.value},{default:y(()=>[r.value?(k(),D(W,{key:0,class:"bg-white text-primary"},{default:y(()=>[z("Minimize")]),_:1})):M("",!0)]),_:1},8,["disable"]),n(E,{flat:"",icon:"crop_square",onClick:l[2]||(l[2]=s=>r.value=!0),disable:r.value},{default:y(()=>[r.value?M("",!0):(k(),D(W,{key:0,class:"bg-white text-primary"},{default:y(()=>[z("Maximize")]),_:1}))]),_:1},8,["disable"]),re((k(),D(E,{flat:"",icon:"close"},{default:y(()=>[n(W,{class:"bg-white text-primary"},{default:y(()=>[z("Close")]),_:1})]),_:1})),[[ne]])]),_:1}),n(Q,{class:"prose max-w-none prose-strong:font-black prose-h1:text-7xl prose-h2:text-6xl prose-h3:text-5xl md:py-10"},{default:y(()=>[i("div",{innerHTML:e.propertyDetails.description},null,8,go)]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])]))}},_o={class:"col-12 col-md-8 row justify-between gap-6","data-aos":"fade-right"},No={__name:"DetailsPage",setup(o){const e=Ve(),t=u({}),r=u(0),a=u([]),l=u([]),s=u(""),m=u(""),v=u(""),d=u(""),p=u(!1),c=u([]),b=u("");b.value="bottom-[8%]";const _=async()=>{var w;const g=await e.fetchPropertyDetails();return c.value=await e.fetchNearbyLocation(g.id),t.value=g,r.value=((w=g.sliders)==null?void 0:w.length)||0,s.value="I am interested in "+t.value.name+" priced at RM"+t.value.price+". Can you provide more details?",g};a.value=[{name:"Beds",icon:"bed",value:"bedroom"},{name:"Bath",icon:"bathtub",value:"bathroom"},{name:"Car Park",icon:"directions_car",value:"car_park"},{name:"sqft",icon:"square_foot",value:"square_feet"},{name:"",icon:"apartment",value:"tenure"}],l.value=[{name:"Tenure",label:"",front_label:"",value:"tenure"},{name:"Price",label:"",front_label:"RM",value:"price"}];const h=()=>{const g=document.querySelector(".banner-component"),w=document.querySelector(".footer-container"),C={threshold:.3},x=new IntersectionObserver($=>{$.forEach(I=>{m.value="",v.value="",I.isIntersecting||(m.value="fixed w-[290px] xl:w-[350px] top-[12.5%]",p.value=!0)})},C),L=new IntersectionObserver($=>{$.forEach(I=>{m.value="",v.value="flex items-end",d.value="hidden",I.isIntersecting||(m.value="fixed w-[290px] xl:w-[350px] top-[12.5%]",v.value="",d.value="")})},C);x.observe(g),L.observe(w)},f=()=>p.value?m.value:"";return F(()=>{_(),setTimeout(function(){const g=document.querySelector(".container").offsetHeight,w=700,C=1024;(g>w||window.innerWidth<C)&&h()},1e3),f()}),(g,w)=>(k(),D(Ne,null,{content:y(({descriptionButtonPosition:C})=>[n(wt,{propertyDetails:t.value,style:{"margin-top":"5.5rem"},class:"banner-component"},null,8,["propertyDetails"]),i("div",{class:T(["container mx-auto row justify-between gap-10 pt-6",g.$q.screen.lt.lg?"p-8":"w-4/6"])},[i("div",_o,[n(vt,{propertyDetails:t.value,propertyRoomDetails:a.value,whatsAppEnquiries:s.value,sliders:r.value},null,8,["propertyDetails","propertyRoomDetails","whatsAppEnquiries","sliders"]),n(bt,{propertyDetails:t.value},null,8,["propertyDetails"]),c.value.length>0?(k(),D(fo,{key:0,propertyDetails:t.value,nearbyLocationList:c.value},null,8,["propertyDetails","nearbyLocationList"])):M("",!0)]),i("div",{class:T(["col",g.$q.screen.lt.md?"hidden":v.value])},[n(Ce,{whatsAppEnquiries:s.value,class:T(["row border rounded-lg px-6 py-10 gap-6",p.value?m.value:""])},null,8,["whatsAppEnquiries","class"])],2)],2),i("div",{class:T(g.$q.screen.lt.md?d.value:"hidden")},[n(zt,{whatsAppEnquiries:s.value},null,8,["whatsAppEnquiries"])],2),i("div",{class:T(`p-4 pr-2 fixed ${C} right-0`)},[n(yo,{propertyDetails:t.value},null,8,["propertyDetails"])],2)]),_:1}))}};export{No as default};