import{Q as oe,a as W}from"./QScrollArea-9537b7a3.js";import{Q as G,a as X,b as ne}from"./QToolbar-5ad6ba3e.js";import{x as q,N as m,O as M,P as Y,k as v,B as b,J as O,j as re,r as g,w as Q,i as le,z as T,m as h,u as k,A as n,q as r,R as V,n as y,y as p,F as $,S as R,D as U,E as C,T as se,U as L,o as ie,l as z,W as ce,s as ue}from"./ckeditor-211a22bb.js";import{c as A,e as j,f as de,R as N,Q as Z}from"./vm-e10c9529.js";import{Q as ee}from"./QBtn-d4f24742.js";import{Q as S,a as x,b as te}from"./portal-2d801567.js";import{Q as E,a as J}from"./QSeparator-393d6f24.js";import{Q as fe}from"./QBtnDropdown-387a631a.js";import{C as he}from"./ClosePopup-cfa18d09.js";import{Q as pe}from"./QAvatar-85a80c5f.js";import{u as ae}from"./auth-2c69448c.js";const me=A({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:i}){const{proxy:{$q:l}}=O(),e=q(M,m);if(e===m)return console.error("QPage needs to be a deep child of QLayout"),m;if(q(Y,m)===m)return console.error("QPage needs to be child of QPageContainer"),m;const u=v(()=>{const c=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const d=e.isContainer.value===!0?e.containerHeight.value:l.screen.height;return t.styleFn(c,d)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-c+"px":l.screen.height===0?c!==0?`calc(100vh - ${c}px)`:"100vh":l.screen.height-c+"px"}}),a=v(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>b("main",{class:a.value,style:u.value},j(i.default))}}),_e=A({name:"QPageContainer",setup(t,{slots:i}){const{proxy:{$q:l}}=O(),e=q(M,m);if(e===m)return console.error("QPageContainer needs to be child of QLayout"),m;re(Y,!0);const s=v(()=>{const u={};return e.header.space===!0&&(u.paddingTop=`${e.header.size}px`),e.right.space===!0&&(u[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(u.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(u[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),u});return()=>b("div",{class:"q-page-container",style:s.value},j(i.default))}}),ve=A({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:i}){const l=v(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>b("div",{class:l.value},j(i.default))}}),ge=A({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:i,emit:l}){const{proxy:{$q:e}}=O(),s=q(M,m);if(s===m)return console.error("QHeader needs to be child of QLayout"),m;const u=g(parseInt(t.heightHint,10)),a=g(!0),c=v(()=>t.reveal===!0||s.view.value.indexOf("H")>-1||e.platform.is.ios&&s.isContainer.value===!0),d=v(()=>{if(t.modelValue!==!0)return 0;if(c.value===!0)return a.value===!0?u.value:0;const o=u.value-s.scroll.value.position;return o>0?o:0}),D=v(()=>t.modelValue!==!0||c.value===!0&&a.value!==!0),F=v(()=>t.modelValue===!0&&D.value===!0&&t.reveal===!0),B=v(()=>"q-header q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(D.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),H=v(()=>{const o=s.rows.value.top,w={};return o[0]==="l"&&s.left.space===!0&&(w[e.lang.rtl===!0?"right":"left"]=`${s.left.size}px`),o[2]==="r"&&s.right.space===!0&&(w[e.lang.rtl===!0?"left":"right"]=`${s.right.size}px`),w});function _(o,w){s.update("header",o,w)}function f(o,w){o.value!==w&&(o.value=w)}function K({height:o}){f(u,o),_("size",o)}function P(o){F.value===!0&&f(a,!0),l("focusin",o)}Q(()=>t.modelValue,o=>{_("space",o),f(a,!0),s.animate()}),Q(d,o=>{_("offset",o)}),Q(()=>t.reveal,o=>{o===!1&&f(a,t.modelValue)}),Q(a,o=>{s.animate(),l("reveal",o)}),Q(s.scroll,o=>{t.reveal===!0&&f(a,o.direction==="up"||o.position<=t.revealOffset||o.position-o.inflectionPoint<100)});const I={};return s.instances.header=I,t.modelValue===!0&&_("size",u.value),_("space",t.modelValue),_("offset",d.value),le(()=>{s.instances.header===I&&(s.instances.header=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const o=de(i.default,[]);return t.elevated===!0&&o.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(b(oe,{debounce:0,onResize:K})),b("header",{class:B.value,style:H.value,onFocusin:P},o)}}}),we=[{icon:"description",title:"property",text:"Property",route:"/",separator:!0},{icon:"logout",title:"logout",text:"Logout"}],ye={setup(){const t=g(!1),i=g("dashboard"),l=ae(),e=l.fetchSessionToken(),s=()=>{t.value=!t.value},u=c=>{i.value=c.title,i.value==="logout"&&a()},a=async()=>{try{await l.handleLogout(e)}catch(c){console.log(c)}};return{toggleDrawerMobile:s,handleItemClick:u,handleLogout:a,toggleDrawer:t,menuList:we}}},be=["src"];function ke(t,i,l,e,s,u){return h(),k($,null,[n(G,{class:"justify-end"},{default:r(()=>[n(ee,{flat:"",onClick:e.toggleDrawerMobile,round:"",dense:"",icon:"menu"},null,8,["onClick"])]),_:1}),n(X,{modelValue:e.toggleDrawer,"onUpdate:modelValue":i[0]||(i[0]=a=>e.toggleDrawer=a),width:200,breakpoint:500,overlay:"",bordered:"",side:"right",class:L(t.$q.dark.isActive?"bg-grey-9":"bg-grey-3")},{default:r(()=>[n(W,{class:"fit"},{default:r(()=>[n(E,null,{default:r(()=>[V((h(),y(S,{clickable:"",to:"/"},{default:r(()=>[n(x,{class:"items-center"},{default:r(()=>[n(pe,{size:"100px"},{default:r(()=>[p("img",{src:t.mainLogo},null,8,be)]),_:1})]),_:1})]),_:1})),[[N]]),n(J),(h(!0),k($,null,R(e.menuList,(a,c)=>(h(),k($,{key:c},[V((h(),y(S,{clickable:"",active:a.title==="Outbox",onClick:d=>e.handleItemClick(a),to:a.route},{default:r(()=>[n(x,{avatar:""},{default:r(()=>[n(Z,{name:a.icon},null,8,["name"])]),_:2},1024),n(x,null,{default:r(()=>[U(C(a.text),1)]),_:2},1024)]),_:2},1032,["active","onClick","to"])),[[N]]),a.separator?(h(),y(J,{key:"sep"+c})):se("",!0)],64))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","class"])],64)}const xe=T(ye,[["render",ke]]);const De={components:{DrawerMobile:xe},props:["drawer"],setup(t,{emit:i}){let l=t.drawer,e=!0;const s=()=>{e?(l=!1,e=!1):l=!l,u(l)},u=f=>{i("updateDrawerSelectionData",f)},a=ae(),c=a.fetchSessionToken(),d=g({email:"",name:""}),D=g([{label:"Log Out",value:"logout",handler:"handlerLogout"}]),F=g(""),B=async()=>{try{await a.handleLogout(c)}catch(f){console.log(f)}},H=async()=>{try{const f=await a.fetchProfile(c);d.value.email=f.email,d.value.name=f.name}catch(f){console.error("Error fetching user profile:",f)}},_=f=>{const P={handlerLogout:B}[f];P&&P()};return ie(()=>{H()}),{handleLogout:B,adminProfileData:d,navBarDropDown:D,handleDropdownMenu:_,searchKeywordAdmin:F,drawerSelection:l,drawerToggle:s,handleDrawerSelection:u}}},Qe={class:"row items-center justify-between"},$e=["src"],Ce={class:"col-12 row"},Le={class:"col-12"},Se={class:"row items-center no-wrap"},Be={class:"col text-center"},Pe={class:"font-bold"},qe={class:"lowercase text-gray-500"};function Ve(t,i,l,e,s,u){const a=z("router-link"),c=z("DrawerMobile");return h(),y(ge,{class:"border-b bg-white text-black py-2"},{default:r(()=>[p("div",Qe,[p("div",{class:L(["col col-lg-1 text-sm md:text-2xl lg:text-center",t.$q.screen.lt.md?"hidden":""])},[n(G,null,{default:r(()=>[n(ee,{flat:"",onClick:e.drawerToggle,round:"",dense:"",icon:"menu"},null,8,["onClick"]),n(ve,null,{default:r(()=>[n(a,{to:"/"},{default:r(()=>[p("img",{src:t.mainLogo,alt:"",width:"100"},null,8,$e)]),_:1})]),_:1})]),_:1})],2),p("div",{class:L(["col row text-right",t.$q.screen.lt.md?"hidden":""])},[p("div",Ce,[p("div",Le,[n(fe,{class:"text-black",color:"white","dropdown-icon":"expand_more"},{label:r(()=>[p("div",Se,[p("div",Be,[p("div",Pe,C(e.adminProfileData.name),1),p("div",qe,C(e.adminProfileData.email),1)])])]),default:r(()=>[n(E,null,{default:r(()=>[(h(!0),k($,null,R(e.navBarDropDown,d=>V((h(),y(S,{key:d,clickable:"",onClick:D=>e.handleDropdownMenu(d.handler)},{default:r(()=>[n(x,null,{default:r(()=>[n(te,null,{default:r(()=>[U(C(d.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[he]])),128))]),_:1})]),_:1})])])],2),p("div",{class:L(["col",t.$q.screen.lt.md?"":"hidden"])},[n(c)],2)])]),_:1})}const ze=T(De,[["render",Ve]]);const Te=[{icon:"description",title:"property",text:"Property",route:"/"}],Ae={setup(t){const i=g("dashboard");function l(e){i.value=e.title}return{link:i,sideBarList:Te,handleItemClick:l}}},Fe={style:{"max-width":"250px","max-height":"0"}};function He(t,i,l,e,s,u){return h(),k("div",Fe,[n(E,{padding:"",class:"border-r side-bar-container bg-white fixed"},{default:r(()=>[(h(!0),k($,null,R(e.sideBarList,(a,c)=>V((h(),y(S,{key:c,clickable:"",dense:"",onClick:d=>e.handleItemClick(a),to:a.route,class:"m-4 rounded"},{default:r(()=>[n(S,null,{default:r(()=>[n(x,{avatar:""},{default:r(()=>[n(Z,{name:a.icon},null,8,["name"])]),_:2},1024),n(x,{class:"font-bold"},{default:r(()=>[n(te,{class:"font-bold"},{default:r(()=>[U(C(a.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick","to"])),[[N]])),128))]),_:1})])}const Ne=T(Ae,[["render",He]]);const Me={components:{NavBar:ze,SideBar:Ne},setup(){const t=g(!1),i=g(!1);return{drawer:t,updateDrawerSelection:e=>{i.value=e},updateDrawerSelectionData:i}}};function Oe(t,i,l,e,s,u){const a=z("nav-bar"),c=z("side-bar");return h(),y(ne,{view:"hHh Lpr lff",container:"",style:{height:"100vh"}},{default:r(()=>[n(a,{drawer:e.drawer,onUpdateDrawerSelectionData:e.updateDrawerSelection},null,8,["drawer","onUpdateDrawerSelectionData"]),(h(),y(ce,null,{default:r(()=>[n(_e,{class:"dashboard-container"},{default:r(()=>[n(me,{class:"overflow-hidden"},{default:r(()=>[n(X,{modelValue:e.updateDrawerSelectionData,"onUpdate:modelValue":i[0]||(i[0]=d=>e.updateDrawerSelectionData=d),"show-if-above":"",width:200,bordered:"",class:L(!t.$q.screen.lt.md)},{default:r(()=>[n(W,{class:"fit"},{default:r(()=>[n(c,{class:"admin-sidebar"})]),_:1})]),_:1},8,["modelValue","class"]),ue(t.$slots,"content")]),_:3})]),_:3})]),_:3}))]),_:3})}const Ze=T(Me,[["render",Oe]]);export{Ze as B};