import{T as ve,Q as Se}from"./QScrollArea-208ac011.js";import{x as j,N as k,O as te,r as p,k as v,w as y,P as xe,o as Be,i as qe,R as E,B as q,J as ae,S as Qe,j as Ze,z as oe,m as C,u as F,A as c,q as d,n as V,y as D,F as R,T as me,D as ge,E as I,U as et,W as U,l as ee,X as tt,s as at}from"./ckeditor-568c0a64.js";import{u as ot,a as nt}from"./use-prevent-scroll-0d30f442.js";import{u as lt,c as rt,d as it,Q as K,a as H,b as Le}from"./QMenu-531419ec.js";import{u as st}from"./use-tick-0d48cbe6.js";import{c as X,u as ut,b as ct,f as Ce,e as ne,g as dt,R as he,Q as Te}from"./vm-f21f9386.js";import{b as Z}from"./format-7985d814.js";import{Q as ft}from"./QLayout-497c8120.js";import{Q as Pe}from"./QBtn-05999df9.js";import{Q as ze}from"./QToolbar-5253e172.js";import{Q as ye,b as $e,a as vt}from"./QSeparator-5b4b8ad3.js";import{Q as ht}from"./QScrollObserver-a57ca078.js";import{C as mt}from"./ClosePopup-55871ade.js";import{Q as gt}from"./QAvatar-5ff8dae9.js";import{u as Ve}from"./auth-70e1d751.js";const De=150,Me=X({name:"QDrawer",inheritAttrs:!1,props:{...lt,...ut,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...rt,"onLayout","miniState"],setup(e,{slots:h,emit:r,attrs:a}){const n=ae(),{proxy:{$q:f}}=n,l=ct(e,f),{preventBodyScroll:m}=nt(),{registerTimeout:b,removeTimeout:M}=st(),o=j(te,k);if(o===k)return console.error("QDrawer needs to be child of QLayout"),k;let L,S=null,w;const s=p(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),T=v(()=>e.mini===!0&&s.value!==!0),_=v(()=>T.value===!0?e.miniWidth:e.width),g=p(e.showIfAbove===!0&&s.value===!1?!0:e.modelValue===!0),i=v(()=>e.persistent!==!0&&(s.value===!0||Fe.value===!0));function B(t,u){if(Oe(),t!==!1&&o.animate(),$(0),s.value===!0){const x=o.instances[G.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),P(1),o.isContainer.value!==!0&&m(!0)}else P(0),t!==!1&&ce(!1);b(()=>{t!==!1&&ce(!0),u!==!0&&r("show",t)},De)}function be(t,u){Ae(),t!==!1&&o.animate(),P(0),$(O.value*_.value),de(),u!==!0?b(()=>{r("hide",t)},De):M()}const{show:le,hide:W}=it({showing:g,hideOnRouteChange:i,handleShow:B,handleHide:be}),{addToHistory:Oe,removeFromHistory:Ae}=ot(g,W,i),J={belowBreakpoint:s,hide:W},Q=v(()=>e.side==="right"),O=v(()=>(f.lang.rtl===!0?-1:1)*(Q.value===!0?1:-1)),we=p(0),A=p(!1),re=p(!1),_e=p(_.value*O.value),G=v(()=>Q.value===!0?"left":"right"),ie=v(()=>g.value===!0&&s.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),se=v(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf(Q.value?"R":"L")>-1||f.platform.is.ios===!0&&o.isContainer.value===!0),N=v(()=>e.overlay===!1&&g.value===!0&&s.value===!1),Fe=v(()=>e.overlay===!0&&g.value===!0&&s.value===!1),He=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&A.value===!1?" hidden":"")),We=v(()=>({backgroundColor:`rgba(0,0,0,${we.value*.4})`})),pe=v(()=>Q.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Ne=v(()=>Q.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),Re=v(()=>{const t={};return o.header.space===!0&&pe.value===!1&&(se.value===!0?t.top=`${o.header.offset}px`:o.header.space===!0&&(t.top=`${o.header.size}px`)),o.footer.space===!0&&Ne.value===!1&&(se.value===!0?t.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(t.bottom=`${o.footer.size}px`)),t}),Ie=v(()=>{const t={width:`${_.value}px`,transform:`translateX(${_e.value}px)`};return s.value===!0?t:Object.assign(t,Re.value)}),Ue=v(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),je=v(()=>`q-drawer q-drawer--${e.side}`+(re.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(l.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(s.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(se.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(pe.value===!0?" q-drawer--top-padding":""))),Ee=v(()=>{const t=f.lang.rtl===!0?e.side:G.value;return[[ve,Ge,void 0,{[t]:!0,mouse:!0}]]}),Ke=v(()=>{const t=f.lang.rtl===!0?G.value:e.side;return[[ve,ke,void 0,{[t]:!0,mouse:!0}]]}),Xe=v(()=>{const t=f.lang.rtl===!0?G.value:e.side;return[[ve,ke,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ue(){Ye(s,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}y(s,t=>{t===!0?(L=g.value,g.value===!0&&W(!1)):e.overlay===!1&&e.behavior!=="mobile"&&L!==!1&&(g.value===!0?($(0),P(0),de()):le(!1))}),y(()=>e.side,(t,u)=>{o.instances[u]===J&&(o.instances[u]=void 0,o[u].space=!1,o[u].offset=0),o.instances[t]=J,o[t].size=_.value,o[t].space=N.value,o[t].offset=ie.value}),y(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&ue()}),y(()=>e.behavior+e.breakpoint,ue),y(o.isContainer,t=>{g.value===!0&&m(t!==!0),t===!0&&ue()}),y(o.scrollbarWidth,()=>{$(g.value===!0?0:void 0)}),y(ie,t=>{z("offset",t)}),y(N,t=>{r("onLayout",t),z("space",t)}),y(Q,()=>{$()}),y(_,t=>{$(),fe(e.miniToOverlay,t)}),y(()=>e.miniToOverlay,t=>{fe(t,_.value)}),y(()=>f.lang.rtl,()=>{$()}),y(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Je(),o.animate())}),y(T,t=>{r("miniState",t)});function $(t){t===void 0?xe(()=>{t=g.value===!0?0:_.value,$(O.value*t)}):(o.isContainer.value===!0&&Q.value===!0&&(s.value===!0||Math.abs(t)===_.value)&&(t+=O.value*o.scrollbarWidth.value),_e.value=t)}function P(t){we.value=t}function ce(t){const u=t===!0?"remove":o.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function Je(){S!==null&&clearTimeout(S),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),re.value=!0,S=setTimeout(()=>{S=null,re.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ge(t){if(g.value!==!1)return;const u=_.value,x=Z(t.distance.x,0,u);if(t.isFinal===!0){x>=Math.min(75,u)===!0?le():(o.animate(),P(0),$(O.value*u)),A.value=!1;return}$((f.lang.rtl===!0?Q.value!==!0:Q.value)?Math.max(u-x,0):Math.min(0,x-u)),P(Z(x/u,0,1)),t.isFirst===!0&&(A.value=!0)}function ke(t){if(g.value!==!0)return;const u=_.value,x=t.direction===e.side,Y=(f.lang.rtl===!0?x!==!0:x)?Z(t.distance.x,0,u):0;if(t.isFinal===!0){Math.abs(Y)<Math.min(75,u)===!0?(o.animate(),P(1),$(0)):W(),A.value=!1;return}$(O.value*Y),P(Z(1-Y/u,0,1)),t.isFirst===!0&&(A.value=!0)}function de(){m(!1),ce(!0)}function z(t,u){o.update(e.side,t,u)}function Ye(t,u){t.value!==u&&(t.value=u)}function fe(t,u){z("size",t===!0?e.miniWidth:u)}return o.instances[e.side]=J,fe(e.miniToOverlay,_.value),z("space",N.value),z("offset",ie.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),Be(()=>{r("onLayout",N.value),r("miniState",T.value),L=e.showIfAbove===!0;const t=()=>{(g.value===!0?B:be)(!1,!0)};if(o.totalWidth.value!==0){xe(t);return}w=y(o.totalWidth,()=>{w(),w=void 0,g.value===!1&&e.showIfAbove===!0&&s.value===!1?le(!1):t()})}),qe(()=>{w!==void 0&&w(),S!==null&&(clearTimeout(S),S=null),g.value===!0&&de(),o.instances[e.side]===J&&(o.instances[e.side]=void 0,z("size",0),z("offset",0),z("space",!1))}),()=>{const t=[];s.value===!0&&(e.noSwipeOpen===!1&&t.push(E(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ee.value)),t.push(Ce("div",{ref:"backdrop",class:He.value,style:We.value,"aria-hidden":"true",onClick:W},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>Xe.value)));const u=T.value===!0&&h.mini!==void 0,x=[q("div",{...a,key:""+u,class:[Ue.value,a.class]},u===!0?h.mini():ne(h.default))];return e.elevated===!0&&g.value===!0&&x.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(Ce("aside",{ref:"content",class:je.value,style:Ie.value},x,"contentclose",e.noSwipeClose!==!0&&s.value===!0,()=>Ke.value)),q("div",{class:"q-drawer-container"},t)}}}),yt=X({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:h}){const{proxy:{$q:r}}=ae(),a=j(te,k);if(a===k)return console.error("QPage needs to be a deep child of QLayout"),k;if(j(Qe,k)===k)return console.error("QPage needs to be child of QPageContainer"),k;const f=v(()=>{const m=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const b=a.isContainer.value===!0?a.containerHeight.value:r.screen.height;return e.styleFn(m,b)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-m+"px":r.screen.height===0?m!==0?`calc(100vh - ${m}px)`:"100vh":r.screen.height-m+"px"}}),l=v(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>q("main",{class:l.value,style:f.value},ne(h.default))}}),bt=X({name:"QPageContainer",setup(e,{slots:h}){const{proxy:{$q:r}}=ae(),a=j(te,k);if(a===k)return console.error("QPageContainer needs to be child of QLayout"),k;Ze(Qe,!0);const n=v(()=>{const f={};return a.header.space===!0&&(f.paddingTop=`${a.header.size}px`),a.right.space===!0&&(f[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(f.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(f[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),f});return()=>q("div",{class:"q-page-container",style:n.value},ne(h.default))}}),wt=X({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:h}){const r=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:r.value},ne(h.default))}}),_t=X({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:h,emit:r}){const{proxy:{$q:a}}=ae(),n=j(te,k);if(n===k)return console.error("QHeader needs to be child of QLayout"),k;const f=p(parseInt(e.heightHint,10)),l=p(!0),m=v(()=>e.reveal===!0||n.view.value.indexOf("H")>-1||a.platform.is.ios&&n.isContainer.value===!0),b=v(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return l.value===!0?f.value:0;const i=f.value-n.scroll.value.position;return i>0?i:0}),M=v(()=>e.modelValue!==!0||m.value===!0&&l.value!==!0),o=v(()=>e.modelValue===!0&&M.value===!0&&e.reveal===!0),L=v(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(M.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=v(()=>{const i=n.rows.value.top,B={};return i[0]==="l"&&n.left.space===!0&&(B[a.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),i[2]==="r"&&n.right.space===!0&&(B[a.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),B});function w(i,B){n.update("header",i,B)}function s(i,B){i.value!==B&&(i.value=B)}function T({height:i}){s(f,i),w("size",i)}function _(i){o.value===!0&&s(l,!0),r("focusin",i)}y(()=>e.modelValue,i=>{w("space",i),s(l,!0),n.animate()}),y(b,i=>{w("offset",i)}),y(()=>e.reveal,i=>{i===!1&&s(l,e.modelValue)}),y(l,i=>{n.animate(),r("reveal",i)}),y(n.scroll,i=>{e.reveal===!0&&s(l,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const g={};return n.instances.header=g,e.modelValue===!0&&w("size",f.value),w("space",e.modelValue),w("offset",b.value),qe(()=>{n.instances.header===g&&(n.instances.header=void 0,w("size",0),w("offset",0),w("space",!1))}),()=>{const i=dt(h.default,[]);return e.elevated===!0&&i.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(q(ht,{debounce:0,onResize:T})),q("header",{class:L.value,style:S.value,onFocusin:_},i)}}}),pt=[{icon:"description",title:"property",text:"Property",route:"/",separator:!0},{icon:"logout",title:"logout",text:"Logout"}],kt={setup(){const e=p(!1),h=p("dashboard"),r=Ve(),a=r.fetchSessionToken(),n=()=>{e.value=!e.value},f=m=>{h.value=m.title,h.value==="logout"&&l()},l=async()=>{try{await r.handleLogout(a)}catch(m){console.log(m)}};return{toggleDrawerMobile:n,handleItemClick:f,handleLogout:l,toggleDrawer:e,menuList:pt}}},xt=["src"];function Ct(e,h,r,a,n,f){return C(),F(R,null,[c(ze,{class:"justify-end"},{default:d(()=>[c(Pe,{flat:"",onClick:a.toggleDrawerMobile,round:"",dense:"",icon:"menu"},null,8,["onClick"])]),_:1}),c(Me,{modelValue:a.toggleDrawer,"onUpdate:modelValue":h[0]||(h[0]=l=>a.toggleDrawer=l),width:200,breakpoint:500,overlay:"",bordered:"",side:"right",class:U(e.$q.dark.isActive?"bg-grey-9":"bg-grey-3")},{default:d(()=>[c(Se,{class:"fit"},{default:d(()=>[c(ye,null,{default:d(()=>[E((C(),V(K,{clickable:"",to:"/"},{default:d(()=>[c(H,{class:"items-center"},{default:d(()=>[c(gt,{size:"100px"},{default:d(()=>[D("img",{src:e.mainLogo},null,8,xt)]),_:1})]),_:1})]),_:1})),[[he]]),c($e),(C(!0),F(R,null,me(a.menuList,(l,m)=>(C(),F(R,{key:m},[E((C(),V(K,{clickable:"",active:l.title==="Outbox",onClick:b=>a.handleItemClick(l),to:l.route},{default:d(()=>[c(H,{avatar:""},{default:d(()=>[c(Te,{name:l.icon},null,8,["name"])]),_:2},1024),c(H,null,{default:d(()=>[ge(I(l.text),1)]),_:2},1024)]),_:2},1032,["active","onClick","to"])),[[he]]),l.separator?(C(),V($e,{key:"sep"+m})):et("",!0)],64))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","class"])],64)}const $t=oe(kt,[["render",Ct]]);const Dt={components:{DrawerMobile:$t},props:["drawer"],setup(e,{emit:h}){let r=e.drawer,a=!0;const n=()=>{a?(r=!1,a=!1):r=!r,f(r)},f=s=>{h("updateDrawerSelectionData",s)},l=Ve(),m=l.fetchSessionToken(),b=p({email:"",name:""}),M=p([{label:"Log Out",value:"logout",handler:"handlerLogout"}]),o=p(""),L=async()=>{try{await l.handleLogout(m)}catch(s){console.log(s)}},S=async()=>{try{const s=await l.fetchProfile(m);b.value.email=s.email,b.value.name=s.name}catch(s){console.error("Error fetching user profile:",s)}},w=s=>{const _={handlerLogout:L}[s];_&&_()};return Be(()=>{S()}),{handleLogout:L,adminProfileData:b,navBarDropDown:M,handleDropdownMenu:w,searchKeywordAdmin:o,drawerSelection:r,drawerToggle:n,handleDrawerSelection:f}}},St={class:"row items-center justify-between"},Bt=["src"],qt={class:"col-12 row"},Qt={class:"col-12"},Lt={class:"row items-center no-wrap"},Tt={class:"col text-center"},Pt={class:"font-bold"},zt={class:"lowercase text-gray-500"};function Vt(e,h,r,a,n,f){const l=ee("router-link"),m=ee("DrawerMobile");return C(),V(_t,{class:"border-b bg-white text-black py-2"},{default:d(()=>[D("div",St,[D("div",{class:U(["col col-lg-1 text-sm md:text-2xl lg:text-center",e.$q.screen.lt.md?"hidden":""])},[c(ze,null,{default:d(()=>[c(Pe,{flat:"",onClick:a.drawerToggle,round:"",dense:"",icon:"menu"},null,8,["onClick"]),c(wt,null,{default:d(()=>[c(l,{to:"/"},{default:d(()=>[D("img",{src:e.mainLogo,alt:"",width:"100"},null,8,Bt)]),_:1})]),_:1})]),_:1})],2),D("div",{class:U(["col row text-right",e.$q.screen.lt.md?"hidden":""])},[D("div",qt,[D("div",Qt,[c(vt,{class:"text-black",color:"white","dropdown-icon":"expand_more"},{label:d(()=>[D("div",Lt,[D("div",Tt,[D("div",Pt,I(a.adminProfileData.name),1),D("div",zt,I(a.adminProfileData.email),1)])])]),default:d(()=>[c(ye,null,{default:d(()=>[(C(!0),F(R,null,me(a.navBarDropDown,b=>E((C(),V(K,{key:b,clickable:"",onClick:M=>a.handleDropdownMenu(b.handler)},{default:d(()=>[c(H,null,{default:d(()=>[c(Le,null,{default:d(()=>[ge(I(b.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[mt]])),128))]),_:1})]),_:1})])])],2),D("div",{class:U(["col",e.$q.screen.lt.md?"":"hidden"])},[c(m)],2)])]),_:1})}const Mt=oe(Dt,[["render",Vt]]);const Ot=[{icon:"description",title:"property",text:"Property",route:"/"}],At={setup(e){const h=p("dashboard");function r(a){h.value=a.title}return{link:h,sideBarList:Ot,handleItemClick:r}}},Ft={style:{"max-width":"250px","max-height":"0"}};function Ht(e,h,r,a,n,f){return C(),F("div",Ft,[c(ye,{padding:"",class:"border-r side-bar-container bg-white fixed"},{default:d(()=>[(C(!0),F(R,null,me(a.sideBarList,(l,m)=>E((C(),V(K,{key:m,clickable:"",dense:"",onClick:b=>a.handleItemClick(l),to:l.route,class:"m-4 rounded"},{default:d(()=>[c(K,null,{default:d(()=>[c(H,{avatar:""},{default:d(()=>[c(Te,{name:l.icon},null,8,["name"])]),_:2},1024),c(H,{class:"font-bold"},{default:d(()=>[c(Le,{class:"font-bold"},{default:d(()=>[ge(I(l.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","to"])),[[he]])),128))]),_:1})])}const Wt=oe(At,[["render",Ht]]);const Nt={components:{NavBar:Mt,SideBar:Wt},setup(){const e=p(!1),h=p(!1);return{drawer:e,updateDrawerSelection:a=>{h.value=a},updateDrawerSelectionData:h}}};function Rt(e,h,r,a,n,f){const l=ee("nav-bar"),m=ee("side-bar");return C(),V(ft,{view:"hHh Lpr lff",container:"",style:{height:"100vh"}},{default:d(()=>[c(l,{drawer:a.drawer,onUpdateDrawerSelectionData:a.updateDrawerSelection},null,8,["drawer","onUpdateDrawerSelectionData"]),(C(),V(tt,null,{default:d(()=>[c(bt,{class:"dashboard-container"},{default:d(()=>[c(yt,{class:"overflow-hidden"},{default:d(()=>[c(Me,{modelValue:a.updateDrawerSelectionData,"onUpdate:modelValue":h[0]||(h[0]=b=>a.updateDrawerSelectionData=b),"show-if-above":"",width:200,bordered:"",class:U(!e.$q.screen.lt.md)},{default:d(()=>[c(Se,{class:"fit"},{default:d(()=>[c(m,{class:"admin-sidebar"})]),_:1})]),_:1},8,["modelValue","class"]),at(e.$slots,"content")]),_:3})]),_:3})]),_:3}))]),_:3})}const ra=oe(Nt,[["render",Rt]]);export{ra as B};
