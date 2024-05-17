import{k as Y,B as $e,J as De,h as H,r as m,o as N,m as k,u as C,y as n,A as d,q as w,F as P,T as R,n as E,ay as D,Y as Oe,W as O,D as G,E as L,U as T,R as fe,az as ge,j as U,x as j,w as V,aA as M,i as X,s as ye,aB as Ee,aC as Ie,aD as Pe,aE as Ae,au as je}from"./ckeditor-568c0a64.js";import{B as Me}from"./BaseLayout-ef0c9c06.js";import{u as _e}from"./index-70ab4703.js";import{Q as Z}from"./QChip-50267dd3.js";import{Q as B}from"./QBtn-05999df9.js";import{Q as Re}from"./QTooltip-05843c46.js";import{c as Te,u as Be,b as Ne,e as ze,Q as be}from"./vm-f21f9386.js";import{Q as W}from"./QCardSection-a12a20b2.js";import{Q as ee}from"./QCard-e8f25c2d.js";import{Q as te}from"./QDialog-40930b1c.js";import{C as we}from"./ClosePopup-55871ade.js";import{Q as F}from"./QImg-21d7b9bb.js";import{S as se,a as le}from"./app-c1fc67e5.js";import{Q}from"./QAvatar-5ff8dae9.js";import{b as Ve}from"./QSeparator-5b4b8ad3.js";import"./QToolbar-5253e172.js";import"./QMenu-531419ec.js";import"./use-tick-0d48cbe6.js";import"./dayjs.min-67c2dead.js";import"./use-prevent-scroll-0d30f442.js";const Fe=Te({name:"QBar",props:{...Be,dense:Boolean},setup(a,{slots:e}){const{proxy:{$q:t}}=De(),s=Ne(a,t),o=Y(()=>`q-bar row no-wrap items-center q-bar--${a.dense===!0?"dense":"standard"}  q-bar--${s.value===!0?"dark":"light"}`);return()=>$e("div",{class:o.value,role:"toolbar"},ze(e.default))}}),Ue={class:"wrapper row gap-8 overflow-hidden"},Qe={class:"col-12 m-auto"},Ge={class:"ml-auto mr-2"},We={class:"ml-auto mr-2"},He={class:"col-12 row justify-center border-t pt-6"},Ke={class:"col-12"},Ze={class:"col-12 text-lg font-semibold flex row"},Je={class:"col-6 col-sm-4"},Ye=H({__name:"SliderComponent",props:["propertyDetails"],setup(a){const e=a,t=m(),s=m(),o=m(0),r=m(1),l={type:"slide",rewind:!0,perPage:1,perMove:1,gap:"1rem",pagination:!1,height:450,cover:!0,breakpoints:{640:{fixedHeight:300}}},h={type:"slide",rewind:!0,gap:"0.5rem",pagination:!1,fixedWidth:110,fixedHeight:80,cover:!0,focus:"center",isNavigation:!0,updateOnMove:!0,arrows:!1},v=(u,_)=>{o.value=_,r.value=1},f=()=>{r.value<2&&(r.value+=.2)},g=()=>{r.value>1&&(r.value-=.2)};return N(()=>{var _,y;const u=(_=s.value)==null?void 0:_.splide;u&&((y=t.value)==null||y.sync(u))}),(u,_)=>{var y,p;return k(),C("div",Ue,[n("div",Qe,[d(D(le),{options:l,ref_key:"main",ref:t,"onSplide:moved":v},{default:w(()=>[(k(!0),C(P,null,R(e.propertyDetails.sliders,(i,c)=>(k(),E(D(se),{key:c},{default:w(()=>[d(F,{src:i.image.url,fit:"contain",class:"h-full",style:Oe(c===o.value?`transform: scale(${r.value})`:"")},null,8,["src","style"])]),_:2},1024))),128))]),_:1},512),n("div",{class:O(["flex flex-col gap-1",u.$q.screen.lt.md?"hidden":""])},[n("div",Ge,[d(B,{rounded:"",color:"transparent",icon:"add","text-color":"black",onClick:f})]),n("div",We,[d(B,{rounded:"",color:"transparent",icon:"remove","text-color":"black",onClick:g})])],2)]),n("div",He,[n("div",Ke,[d(D(le),{options:h,ref_key:"thumbs",ref:s},{default:w(()=>[(k(!0),C(P,null,R(e.propertyDetails.sliders,(i,c)=>(k(),E(D(se),{key:c},{default:w(()=>[d(F,{src:i.image.url,fit:"contain",class:"h-full"},null,8,["src"])]),_:2},1024))),128))]),_:1},512)]),n("div",Ze,[n("div",Je,[d(be,{name:"collections",size:"32px"}),G(" "+L((y=e.propertyDetails.sliders)==null?void 0:y.length)+" ",1),n("span",{class:O(u.$q.screen.lt.sm?"hidden":"")},"Photos",2)]),n("div",{class:O(["col-6 col-sm-4 flex",u.$q.screen.lt.sm?"justify-end":"justify-center"])},L(o.value+1)+" / "+L((p=e.propertyDetails.sliders)==null?void 0:p.length),3)])])])}}}),Xe={class:"col-12 row justify-between items-center gap-4"},et={class:"col-12 row gap-4 items-center text-xl md:text-4xl break-words"},tt={key:0,class:"col-12"},ot={class:"text-sm"},at={class:"col-12"},rt={class:"bg-secondary featured-label text-center py-2 px-4 font-bold rounded capitalize w-[100px]"},st={class:"col-12"},lt={class:"text-xl md:text-4xl font-bold"},nt={class:"col-12"},it={key:0},ne=1200,ct={__name:"InfoComponent",props:["propertyDetails","propertyRoomDetails","whatsAppEnquiries","sliders"],setup(a){const e=a,t=m(!1),s=m(""),o=m(!0);s.value="hidden";const r=()=>{t.value=!0,setTimeout(()=>{s.value=""},ne)},l=(h,v="RM")=>{const f=h==null?void 0:h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return`${v}${f}`};return N(()=>{setTimeout(()=>{s.value=""},ne)}),(h,v)=>(k(),C("div",Xe,[n("div",et,L(e.propertyDetails.name),1),e.propertyDetails.details&&e.propertyDetails.details_toggle?(k(),C("div",tt,[n("div",ot,[(k(!0),C(P,null,R(e.propertyRoomDetails,(f,g)=>(k(),E(Z,{color:"teal","text-color":"white",icon:f.icon,key:g},{default:w(()=>[G(L(e.propertyDetails.details[f.value])+" "+L(f.name),1)]),_:2},1032,["icon"]))),128))])])):T("",!0),n("div",at,[n("div",rt," For "+L(e.propertyDetails.listing_type),1)]),n("div",st,[n("span",lt,L(l(e.propertyDetails.price,"RM ")),1)]),n("div",nt,[e.sliders>0?(k(),C("div",it,[d(B,{label:"View More",icon:"photo_camera",color:"teal",class:O(s.value),onClick:v[0]||(v[0]=f=>r())},null,8,["class"]),d(te,{modelValue:t.value,"onUpdate:modelValue":v[1]||(v[1]=f=>t.value=f),maximized:o.value},{default:w(()=>[d(ee,{class:"py-6 md:px-4 overflow-hidden"},{default:w(()=>[d(Fe,{class:"justify-end bg-white"},{default:w(()=>[fe((k(),E(B,{flat:"",icon:"close",size:"18px"},{default:w(()=>[d(Re,{class:"bg-white text-primary"},{default:w(()=>[G("Close")]),_:1})]),_:1})),[[we]])]),_:1}),d(W,{class:"h-full grid mx-auto"},{default:w(()=>[d(Ye,{propertyDetails:e.propertyDetails},null,8,["propertyDetails"])]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])])):T("",!0)])]))}},ut={class:"col-12 row justify-between"},dt={class:"col-12 rounded row md:py-10"},pt={class:"col-12 row q-gutter-y-md"},ht=n("div",{class:"col-12 text-xl md:text-4xl font-bold border-b border-grey flex items-center pb-4"}," Short Descriptions ",-1),mt=["innerHTML"],vt={__name:"ShortDescComponent",props:["propertyDetails"],setup(a){const e=a;return(t,s)=>(k(),C("div",ut,[n("div",dt,[n("div",pt,[ht,n("div",{class:"col-12 break-words",innerHTML:e.propertyDetails.short_description},null,8,mt)])])]))}},ft={class:"col-12 row prose max-w-none prose-strong:font-black prose-h1:text-7xl prose-h2:text-6xl prose-h3:text-5xl md:py-10"},gt=n("div",{class:"col-12 text-xl md:text-4xl font-bold border-b flex items-center pb-4"}," Descriptions ",-1),yt=["innerHTML"],_t={__name:"DescriptionsComponent",props:["propertyDetails"],setup(a){const e=a;return(t,s)=>(k(),C("div",ft,[gt,n("div",{class:"col-12",innerHTML:e.propertyDetails.description},null,8,yt)]))}},bt={__name:"BannerComponent",props:["propertyDetails"],setup(a){const e=a,t=m(!1),s=()=>{t.value=!0};return(o,r)=>(k(),C("div",null,[d(F,{src:e.propertyDetails.banner?e.propertyDetails.banner.image.url:"https://cdn.quasar.dev/img/parallax2.jpg",class:"cursor-pointer h-[450px]",fit:o.$q.screen.lt.md?"cover":"contain",onClick:r[0]||(r[0]=l=>s())},null,8,["src","fit"]),d(te,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=l=>t.value=l)},{default:w(()=>[d(ee,{style:{width:"100%"}},{default:w(()=>[d(W,null,{default:w(()=>[d(F,{src:e.propertyDetails.banner?e.propertyDetails.banner.image.url:"https://cdn.quasar.dev/img/parallax2.jpg",fit:o.contain},null,8,["src","fit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};const wt={class:"col-12 flex gap-4"},xt=n("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),kt=n("div",null,[n("div",{class:"font-bold text-xl"},"Admin"),n("div",{class:"text-sm"},"E-(3)1482")],-1),Ct={class:"col-12"},St={class:"col-12 row gap-6"},Lt={class:"col-12"},qt=["href"],$t=n("span",{class:"text-lg ml-2"},"Chat On Whatsapp",-1),Dt={class:"col-12"},Ot=["href"],Et={class:"text-lg ml-2"},xe={__name:"ListingAgentComponent",props:["whatsAppEnquiries"],setup(a){const e=a,t=m([]);return t.value=[{name:"Admin",contact:"60192140561",contactLabel:"019-2140561"},{name:"Admin",contact:"60123729668",contactLabel:"012-3729668"},{name:"Admin",contact:"60193560561",contactLabel:"019-3560561"}],(s,o)=>(k(),C("div",null,[n("div",wt,[n("div",null,[d(Q,null,{default:w(()=>[xt]),_:1})]),kt]),n("div",Ct,[d(Ve,{color:"grey-4"})]),n("div",St,[(k(!0),C(P,null,R(t.value,(r,l)=>(k(),C("div",{class:"col-12 row items-center",key:l},[n("div",Lt,[d(Z,{color:"white","text-color":"black",class:"w-full py-4 border shadow-md",size:"22px"},{default:w(()=>[n("a",{href:"https://wa.me/"+r.contact+"?text="+encodeURIComponent(e.whatsAppEnquiries),target:"_blank"},[d(Q,{size:"24px"},{default:w(()=>[d(F,{src:"/images/amber_whatsapp.png"})]),_:1}),$t],8,qt)]),_:2},1024)]),n("div",Dt,[d(Z,{color:"white","text-color":"black",class:"w-full py-4 border shadow-md",size:"22px"},{default:w(()=>[n("a",{href:`tel:${r.contact}`},[d(Q,null,{default:w(()=>[d(be,{name:"phone",size:"24px"})]),_:1}),n("span",Et,L(r.contactLabel),1)],8,Ot)]),_:2},1024)])]))),128))])]))}};const It={class:"row justify-between items-center px-3 py-2 border fixed bottom-0 bg-white w-full"},Pt={class:"col col-auto row gap-2"},At={class:"col"},jt=n("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),Mt=n("div",{class:"col col-auto row"},[n("div",{class:"col-12 font-bold footer__mobilelabel"},"Admin"),n("div",{class:"col-12"},"E-(3)1482")],-1),Rt={class:"col col-auto"},Tt={__name:"ListingAgentMobileComponent",props:["whatsAppEnquiries"],setup(a){const e=a,t=m(!1),s=()=>{t.value=!0},o=()=>{window.innerWidth>1024&&(t.value=!1)};return N(()=>{window.addEventListener("resize",o)}),(r,l)=>(k(),C("div",It,[n("div",Pt,[n("div",At,[d(Q,null,{default:w(()=>[jt]),_:1})]),Mt]),n("div",Rt,[d(B,{color:"primary",icon:"description",label:"Details",onClick:s})]),d(te,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=h=>t.value=h)},{default:w(()=>[d(ee,null,{default:w(()=>[d(W,{class:"row items-center justify-end"},{default:w(()=>[fe(d(B,{icon:"close",flat:"",round:"",dense:""},null,512),[[we]])]),_:1}),d(W,{class:"q-pt-none"},{default:w(()=>[d(xe,{whatsAppEnquiries:e.whatsAppEnquiries,class:"row rounded-lg py-6 gap-4"},null,8,["whatsAppEnquiries"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};(function(){try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".mapdiv[data-v-dbf82c40]{width:100%;height:100%}.custom-control-wrapper[data-v-d099a3a6]{display:none}.mapdiv .custom-control-wrapper[data-v-d099a3a6]{display:inline-block}.info-window-wrapper[data-v-cbe1707b]{display:none}.mapdiv .info-window-wrapper[data-v-cbe1707b]{display:inline-block}.custom-marker-wrapper[data-v-2d2d343a]{display:none}.mapdiv .custom-marker-wrapper[data-v-2d2d343a]{display:inline-block}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();var Bt=Object.defineProperty,Nt=(a,e,t)=>e in a?Bt(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,ie=(a,e,t)=>(Nt(a,typeof e!="symbol"?e+"":e,t),t);const oe=Symbol("map"),ae=Symbol("api"),ke=Symbol("marker"),zt=Symbol("markerCluster"),re=Symbol("CustomMarker"),Vt=Symbol("mapTilesLoaded"),Ce=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];/*! *****************************************************************************
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
***************************************************************************** */function Ft(a,e,t,s){function o(r){return r instanceof t?r:new t(function(l){l(r)})}return new(t||(t=Promise))(function(r,l){function h(g){try{f(s.next(g))}catch(u){l(u)}}function v(g){try{f(s.throw(g))}catch(u){l(u)}}function f(g){g.done?r(g.value):o(g.value).then(h,v)}f((s=s.apply(a,e||[])).next())})}var Ut=function a(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var s,o,r;if(Array.isArray(e)){if(s=e.length,s!=t.length)return!1;for(o=s;o--!==0;)if(!a(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(r=Object.keys(e),s=r.length,s!==Object.keys(t).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,r[o]))return!1;for(o=s;o--!==0;){var l=r[o];if(!a(e[l],t[l]))return!1}return!0}return e!==e&&t!==t};const ce="__googleMapsScriptId";var A;(function(a){a[a.INITIALIZED=0]="INITIALIZED",a[a.LOADING=1]="LOADING",a[a.SUCCESS=2]="SUCCESS",a[a.FAILURE=3]="FAILURE"})(A||(A={}));class I{constructor({apiKey:e,authReferrerPolicy:t,channel:s,client:o,id:r=ce,language:l,libraries:h=[],mapIds:v,nonce:f,region:g,retries:u=3,url:_="https://maps.googleapis.com/maps/api/js",version:y}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=s,this.client=o,this.id=r||ce,this.language=l,this.libraries=h,this.mapIds=v,this.nonce=f,this.region=g,this.retries=u,this.url=_,this.version=y,I.instance){if(!Ut(this.options,I.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(I.instance.options)}`);return I.instance}I.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?A.FAILURE:this.done?A.SUCCESS:this.loading?A.LOADING:A.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(s=>{s?t(s.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,t;if(document.getElementById(this.id)){this.callback();return}const s={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(s).forEach(r=>!s[r]&&delete s[r]),!((t=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||t===void 0)&&t.importLibrary||(r=>{let l,h,v,f="The Google Maps JavaScript API",g="google",u="importLibrary",_="__ib__",y=document,p=window;p=p[g]||(p[g]={});const i=p.maps||(p.maps={}),c=new Set,x=new URLSearchParams,b=()=>l||(l=new Promise((S,q)=>Ft(this,void 0,void 0,function*(){var $;yield h=y.createElement("script"),h.id=this.id,x.set("libraries",[...c]+"");for(v in r)x.set(v.replace(/[A-Z]/g,z=>"_"+z[0].toLowerCase()),r[v]);x.set("callback",g+".maps."+_),h.src=this.url+"?"+x,i[_]=S,h.onerror=()=>l=q(Error(f+" could not load.")),h.nonce=this.nonce||(($=y.querySelector("script[nonce]"))===null||$===void 0?void 0:$.nonce)||"",y.head.append(h)})));i[u]?console.warn(f+" only loads once. Ignoring:",r):i[u]=(S,...q)=>c.add(S)&&b().then(()=>i[u](S,...q))})(s);const o=this.libraries.map(r=>this.importLibrary(r));o.length||o.push(this.importLibrary("core")),Promise.all(o).then(()=>this.callback(),r=>{const l=new ErrorEvent("error",{error:r});this.loadErrorCallback(l)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setScript())}}}function Qt(a){return class extends a.OverlayView{constructor(e){super(),ie(this,"element"),ie(this,"opts");const{element:t,...s}=e;this.element=t,this.opts=s,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof a.LatLng?this.opts.position:new a.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;const e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||Number(e.style.opacity)>.01)}onAdd(){if(!this.element)return;const e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}draw(){if(!this.element)return;const e=this.getProjection(),t=e==null?void 0:e.fromLatLngToDivPixel(this.getPosition());if(t){this.element.style.position="absolute";const s=this.element.offsetHeight,o=this.element.offsetWidth;let r,l;switch(this.opts.anchorPoint){case"TOP_CENTER":r=t.x-o/2,l=t.y;break;case"BOTTOM_CENTER":r=t.x-o/2,l=t.y-s;break;case"LEFT_CENTER":r=t.x,l=t.y-s/2;break;case"RIGHT_CENTER":r=t.x-o,l=t.y-s/2;break;case"TOP_LEFT":r=t.x,l=t.y;break;case"TOP_RIGHT":r=t.x-o,l=t.y;break;case"BOTTOM_LEFT":r=t.x,l=t.y-s;break;case"BOTTOM_RIGHT":r=t.x-o,l=t.y-s;break;default:r=t.x-o/2,l=t.y-s/2}this.element.style.left=r+"px",this.element.style.top=l+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}onRemove(){this.element&&this.element.remove()}setOptions(e){const{element:t,...s}=e;this.element=t,this.opts=s,this.draw()}}}let ue;const de=["bounds_changed","center_changed","click","contextmenu","dblclick","drag","dragend","dragstart","heading_changed","idle","isfractionalzoomenabled_changed","mapcapabilities_changed","maptypeid_changed","mousemove","mouseout","mouseover","projection_changed","renderingtype_changed","rightclick","tilesloaded","tilt_changed","zoom_changed"],Gt=H({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},isFractionalZoomEnabled:{type:Boolean,required:!1,default:void 0},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1},nonce:{type:String,default:""}},emits:de,setup(a,{emit:e}){const t=m(),s=m(!1),o=m(),r=m(),l=m(!1);U(oe,o),U(ae,r),U(Vt,l);const h=()=>{const u={...a};Object.keys(u).forEach(p=>{u[p]===void 0&&delete u[p]});const _=p=>{var i;return p?{position:(i=r.value)==null?void 0:i.ControlPosition[p]}:{}},y={scaleControlOptions:a.scaleControlStyle?{style:a.scaleControlStyle}:{},panControlOptions:_(a.panControlPosition),zoomControlOptions:_(a.zoomControlPosition),rotateControlOptions:_(a.rotateControlPosition),streetViewControlOptions:_(a.streetViewControlPosition),fullscreenControlOptions:_(a.fullscreenControlPosition),disableDefaultUI:a.disableDefaultUi};return{...u,...y}},v=V([r,o],([u,_])=>{const y=u,p=_;y&&p&&(y.event.addListenerOnce(p,"tilesloaded",()=>{l.value=!0}),setTimeout(v,0))},{immediate:!0}),f=()=>{try{const{apiKey:u,region:_,version:y,language:p,libraries:i,nonce:c}=a;ue=new I({apiKey:u,region:_,version:y,language:p,libraries:i,nonce:c})}catch(u){console.error(u)}},g=u=>{r.value=M(u.maps),o.value=M(new u.maps.Map(t.value,h()));const _=Qt(r.value);r.value[re]=_,de.forEach(p=>{var i;(i=o.value)==null||i.addListener(p,c=>e(p,c))}),s.value=!0;const y=Object.keys(a).filter(p=>!["apiPromise","apiKey","version","libraries","region","language","center","zoom","nonce"].includes(p)).map(p=>ge(a,p));V([()=>a.center,()=>a.zoom,...y],([p,i],[c,x])=>{var b,S,q;const{center:$,zoom:z,...K}=h();(b=o.value)==null||b.setOptions(K),i!==void 0&&i!==x&&((S=o.value)==null||S.setZoom(i));const qe=!c||p.lng!==c.lng||p.lat!==c.lat;p&&qe&&((q=o.value)==null||q.panTo(p))})};return N(()=>{a.apiPromise&&a.apiPromise instanceof Promise?a.apiPromise.then(g):(f(),ue.load().then(g))}),X(()=>{var u;l.value=!1,o.value&&((u=r.value)==null||u.event.clearInstanceListeners(o.value))}),{mapRef:t,ready:s,map:o,api:r,mapTilesLoaded:l}}}),Se=(a,e)=>{const t=a.__vccOpts||a;for(const[s,o]of e)t[s]=o;return t},Wt={ref:"mapRef",class:"mapdiv"};function Ht(a,e,t,s,o,r){return k(),C("div",null,[n("div",Wt,null,512),ye(a.$slots,"default",Ee(Ie({ready:a.ready,map:a.map,api:a.api,mapTilesLoaded:a.mapTilesLoaded})),void 0,!0)])}const Kt=Se(Gt,[["render",Ht],["__scopeId","data-v-dbf82c40"]]);function Zt(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Jt=function a(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var s,o,r;if(Array.isArray(e)){if(s=e.length,s!=t.length)return!1;for(o=s;o--!==0;)if(!a(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(r=Object.keys(e),s=r.length,s!==Object.keys(t).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,r[o]))return!1;for(o=s;o--!==0;){var l=r[o];if(!a(e[l],t[l]))return!1}return!0}return e!==e&&t!==t};const Le=Zt(Jt),Yt=a=>a==="Marker",Xt=a=>a===re,eo=(a,e,t,s)=>{const o=m(),r=j(oe,m()),l=j(ae,m()),h=j(zt,m()),v=Y(()=>!!(h.value&&l.value&&(o.value instanceof l.value.Marker||o.value instanceof l.value[re])));return V([r,t],(f,[g,u])=>{var _,y,p;const i=!Le(t.value,u)||r.value!==g;!r.value||!l.value||!i||(o.value?(o.value.setOptions(t.value),v.value&&((_=h.value)==null||_.removeMarker(o.value),(y=h.value)==null||y.addMarker(o.value))):(Yt(a)?o.value=M(new l.value[a](t.value)):Xt(a)?o.value=M(new l.value[a](t.value)):o.value=M(new l.value[a]({...t.value,map:r.value})),v.value?(p=h.value)==null||p.addMarker(o.value):o.value.setMap(r.value),e.forEach(c=>{var x;(x=o.value)==null||x.addListener(c,b=>s(c,b))})))},{immediate:!0}),X(()=>{var f,g;o.value&&((f=l.value)==null||f.event.clearInstanceListeners(o.value),v.value?(g=h.value)==null||g.removeMarker(o.value):o.value.setMap(null))}),o},pe=["animation_changed","click","dblclick","rightclick","dragstart","dragend","drag","mouseover","mousedown","mouseout","mouseup","draggable_changed","clickable_changed","contextmenu","cursor_changed","flat_changed","rightclick","zindex_changed","icon_changed","position_changed","shape_changed","title_changed","visible_changed"],he=H({name:"Marker",props:{options:{type:Object,required:!0}},emits:pe,setup(a,{emit:e,expose:t,slots:s}){const o=ge(a,"options"),r=eo("Marker",pe,o,e);return U(ke,r),t({marker:r}),()=>{var l;return(l=s.default)==null?void 0:l.call(s)}}});Ce.concat(["bounds_changed"]);Ce.concat(["center_changed","radius_changed"]);const me=["closeclick","content_changed","domready","position_changed","visible","zindex_changed"],to=H({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})},modelValue:{type:Boolean}},emits:[...me,"update:modelValue"],setup(a,{slots:e,emit:t,expose:s}){const o=m(),r=m(),l=j(oe,m()),h=j(ae,m()),v=j(ke,m());let f,g=a.modelValue;const u=Y(()=>{var i;return(i=e.default)==null?void 0:i.call(e).some(c=>c.type!==Pe)}),_=i=>{g=i,t("update:modelValue",i)},y=i=>{o.value&&(o.value.open({map:l.value,anchor:v.value,...i}),_(!0))},p=()=>{o.value&&(o.value.close(),_(!1))};return N(()=>{V([l,()=>a.options],([i,c],[x,b])=>{var S;const q=!Le(c,b)||l.value!==x;l.value&&h.value&&q&&(o.value?(o.value.setOptions({...c,content:u.value?r.value:c.content}),v.value||y()):(o.value=M(new h.value.InfoWindow({...c,content:u.value?r.value:c.content})),v.value&&(f=v.value.addListener("click",()=>{y()})),(!v.value||g)&&y(),me.forEach($=>{var z;(z=o.value)==null||z.addListener($,K=>t($,K))}),(S=o.value)==null||S.addListener("closeclick",()=>_(!1))))},{immediate:!0}),V(()=>a.modelValue,i=>{i!==g&&(i?y():p())})}),X(()=>{var i;f&&f.remove(),o.value&&((i=h.value)==null||i.event.clearInstanceListeners(o.value),p())}),s({infoWindow:o,open:y,close:p}),{infoWindow:o,infoWindowRef:r,hasSlotContent:u,open:y,close:p}}}),oo={key:0,class:"info-window-wrapper"};function ao(a,e,t,s,o,r){return a.hasSlotContent?(k(),C("div",oo,[n("div",Ae({ref:"infoWindowRef"},a.$attrs),[ye(a.$slots,"default",{},void 0,!0)],16)])):T("",!0)}const ve=Se(to,[["render",ao],["__scopeId","data-v-cbe1707b"]]);var J;(function(a){a.CLUSTERING_BEGIN="clusteringbegin",a.CLUSTERING_END="clusteringend",a.CLUSTER_CLICK="click"})(J||(J={}));Object.values(J);const ro=n("div",{class:"col-12 text-xl md:text-4xl font-bold border-b flex items-center pb-4"}," Our Location ",-1),so={class:"w-full flex gap-4 font-bold text-lg"},lo=["nearby"],no={class:"font-bold border-b pb-4"},io={__name:"GoogleMapComponent",setup(a){const e=m(null),t=je({latLng:null}),s=m(""),o=m({}),r=m({}),l=m(null),h=m({}),v=_e(),f=c=>{const x={lat:c.latLng.lat(),lng:c.latLng.lng()};e.value.map.panTo(x),t.latLng=c.latLng},g=()=>{t.latLng=null},u=async()=>{const c=await v.fetchPropertyDetails(),x=await v.fetchNearbyLocation(c.id);return s.value=x,x},_=async()=>{const c=await u();r.value=c.find(x=>x.current===1),o.value=c.filter(x=>x.nearby===1)},y=(c,x)=>{const b="text-red font-bold border-b-2 border-red-500".split(" ");return x&&x.classList.remove(...b),c.target.classList.add(...b),c.target},p=async c=>{const x=await u(),b=c.target.getAttribute("nearby");l.value=await y(c,l.value),o.value=x.filter(S=>S.nearby===1),b!=="all"&&(o.value=o.value.filter(S=>JSON.parse(S.nearby_types).includes(b)))},i=()=>{h.value=[{label:"all",title:"All"},{label:"restaurant",title:"Restaurant"},{label:"school",title:"Schools"},{label:"gym",title:"Gym"},{label:"hospital",title:"Hospital"}]};return _(),i(),(c,x)=>(k(),C(P,null,[ro,n("div",so,[(k(!0),C(P,null,R(h.value,(b,S)=>(k(),C("div",{key:S},[n("button",{onClick:p,nearby:b.label},L(b.title),9,lo)]))),128))]),d(D(Kt),{"api-key":c.googleMapKey,style:{width:"100%",height:"500px"},center:{lat:parseFloat(r.value.latitude),lng:parseFloat(r.value.longitude)},zoom:15,ref_key:"mapRef",ref:e},{default:w(()=>[d(D(he),{options:{position:{lat:parseFloat(r.value.latitude),lng:parseFloat(r.value.longitude)}},onClick:f},{default:w(()=>[t.latLng&&t.latLng.lat()===parseFloat(r.value.latitude)?(k(),E(D(ve),{key:0,onCloseclick:g},{default:w(()=>[n("div",null,L(r.value.formatted_address),1)]),_:1})):T("",!0)]),_:1},8,["options"]),(k(!0),C(P,null,R(o.value,(b,S)=>(k(),C("div",{key:S},[d(D(he),{options:{position:{lat:parseFloat(b.latitude),lng:parseFloat(b.longitude)},icon:{url:"../../images/"+b.icon_url+".png",scaledSize:{width:25,height:25}}},onClick:f},{default:w(()=>[t.latLng&&t.latLng.lat()===parseFloat(b.latitude)?(k(),E(D(ve),{key:0,onCloseclick:g},{default:w(()=>[n("div",null,[n("p",no,L(b==null?void 0:b.display_name),1),G(" "+L(b==null?void 0:b.formatted_address),1)])]),_:2},1024)):T("",!0)]),_:2},1032,["options"])]))),128))]),_:1},8,["api-key","center"])],64))}},co={class:"col-12 col-md-8 row justify-between gap-6","data-aos":"fade-right"},Eo={__name:"DetailsPage",setup(a){const e=_e(),t=m({}),s=m(0),o=m([]),r=m([]),l=m(""),h=m(""),v=m(""),f=m(""),g=m(!1),u=m([]),_=async()=>{var c;const i=await e.fetchPropertyDetails();return u.value=await e.fetchNearbyLocation(i.id),t.value=i,s.value=((c=i.sliders)==null?void 0:c.length)||0,l.value="I am interested in "+t.value.name+" priced at RM"+t.value.price+". Can you provide more details?",i};o.value=[{name:"Beds",icon:"bed",value:"bedroom"},{name:"Bath",icon:"bathtub",value:"bathroom"},{name:"Car Park",icon:"directions_car",value:"car_park"},{name:"sqft",icon:"square_foot",value:"square_feet"},{name:"",icon:"apartment",value:"tenure"}],r.value=[{name:"Tenure",label:"",front_label:"",value:"tenure"},{name:"Price",label:"",front_label:"RM",value:"price"}];const y=()=>{const i=document.querySelector(".banner-component"),c=document.querySelector(".footer-container"),x={threshold:.3},b=new IntersectionObserver(q=>{q.forEach($=>{h.value="",v.value="",$.isIntersecting||(h.value="fixed w-[290px] xl:w-[350px] top-[12.5%]",g.value=!0)})},x),S=new IntersectionObserver(q=>{q.forEach($=>{h.value="",v.value="flex items-end",f.value="hidden",$.isIntersecting||(h.value="fixed w-[290px] xl:w-[350px] top-[12.5%]",v.value="",f.value="")})},x);b.observe(i),S.observe(c)},p=()=>g.value?h.value:"";return N(()=>{_(),y(),p()}),(i,c)=>(k(),E(Me,null,{content:w(()=>[d(bt,{propertyDetails:t.value,style:{"margin-top":"5.5rem"},class:"banner-component"},null,8,["propertyDetails"]),n("div",{class:O(["container mx-auto row justify-between gap-10 pt-6",i.$q.screen.lt.lg?"p-8":"w-4/6"])},[n("div",co,[d(ct,{propertyDetails:t.value,propertyRoomDetails:o.value,whatsAppEnquiries:l.value,sliders:s.value},null,8,["propertyDetails","propertyRoomDetails","whatsAppEnquiries","sliders"]),d(vt,{propertyDetails:t.value},null,8,["propertyDetails"]),d(_t,{propertyDetails:t.value},null,8,["propertyDetails"]),u.value.length>0?(k(),E(io,{key:0})):T("",!0)]),n("div",{class:O(["col",i.$q.screen.lt.md?"hidden":v.value])},[d(xe,{whatsAppEnquiries:l.value,class:O(["row border rounded-lg px-6 py-10 gap-6",g.value?h.value:""])},null,8,["whatsAppEnquiries","class"])],2)],2),n("div",{class:O(i.$q.screen.lt.md?f.value:"hidden")},[d(Tt,{whatsAppEnquiries:l.value},null,8,["whatsAppEnquiries"])],2)]),_:1}))}};export{Eo as default};
