import{Q as $,a as D,b as L}from"./QToolbar-5ad6ba3e.js";import{r as v,l as p,m as c,u as m,A as t,q as o,R as x,n as b,F as h,S as B,D as Y,E as C,U as u,z as Q,y as e,ap as S,o as N,a9 as V,s as E}from"./ckeditor-211a22bb.js";import{Q as A}from"./QBtn-d4f24742.js";import{Q as T}from"./vm-e10c9529.js";import{Q as g,a as w,b as y}from"./portal-2d801567.js";import{Q as M,a as P}from"./QSeparator-393d6f24.js";import{a as U}from"./QScrollArea-9537b7a3.js";import{C as k}from"./ClosePopup-cfa18d09.js";import{d as j}from"./dayjs.min-076ef4c6.js";const F={__name:"BaseDrawer",setup(a){const _=v({}),l=v(!1);_.value=[{title:"Home",value:"home",route:"/"},{title:"About Us",value:"about_us",route:"/about-us"}];const s=()=>{l.value=!l.value};return(n,r)=>{const i=p("router-link");return c(),m(h,null,[t($,{class:"justify-end"},{default:o(()=>[t(A,{flat:"",onClick:s,round:"",dense:"",icon:"menu"})]),_:1}),t(D,{modelValue:l.value,"onUpdate:modelValue":r[1]||(r[1]=d=>l.value=d),width:200,breakpoint:768,overlay:"",bordered:"",side:"right",class:u(n.$q.dark.isActive?"bg-grey-9":"bg-grey-3")},{default:o(()=>[t(U,{class:"fit"},{default:o(()=>[t(M,null,{default:o(()=>[x((c(),b(g,{clickable:""},{default:o(()=>[t(w,{clickable:"",onClick:r[0]||(r[0]=d=>s())},{default:o(()=>[t(y,null,{default:o(()=>[t(T,{name:"close",size:"24px"})]),_:1})]),_:1})]),_:1})),[[k]]),(c(!0),m(h,null,B(_.value,(d,f)=>x((c(),b(g,{key:f,clickable:"",class:"font-bold"},{default:o(()=>[t(w,{clickable:""},{default:o(()=>[t(i,{to:d.route,activeClass:"text-red"},{default:o(()=>[t(y,null,{default:o(()=>[Y(C(d.title),1)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)),[[k]])),128))]),_:1})]),_:1})]),_:1},8,["modelValue","class"])],64)}}};const I={components:{BaseDrawer:F},setup(){return{model:v("home"),options:[{label:"Home",value:"home",to:"/",exact:!0,activeClass:"active-link"},{label:"About Us",value:"about_us",to:"/about-us",exact:!1,activeClass:"active-link"}]}}},R={class:"col-4 col-md-2"},z=["src"],H={class:"col-4 nav-bar-dropdown text-center uppercase font-bold"},K=e("div",{style:{"text-wrap":"nowrap"}},"E-(3)1482",-1),J={class:"col-8 text-center nav-bar-content"},O={class:"col-4 text-right nav-bar-dropdown"};function G(a,_,l,s,n,r){const i=p("router-link"),d=p("BaseDrawer");return c(),m("div",null,[t($,{class:"bg-secondary shadow-2",style:{height:"85px"}},{default:o(()=>[e("div",R,[t(i,{to:"/",exact:""},{default:o(()=>[e("img",{src:a.mainLogo,alt:"",width:"85"},null,8,z)]),_:1})]),e("div",H,[e("div",{class:u(a.$q.screen.lt.sm?"text-sm":"text-2xl")}," amber realty ",2),K]),e("div",J,[(c(!0),m(h,null,B(s.options,(f,q)=>(c(),b(i,{key:q,to:f.to,exact:f.exact,"active-class":f.activeClass},{default:o(()=>[t(A,{flat:"",label:f.label},null,8,["label"])]),_:2},1032,["to","exact","active-class"]))),128))]),e("div",O,[t(d)])]),_:1})])}const W=Q(I,[["render",G]]);const X={setup(){const a=v("");return a.value=j().format("YYYY"),{yearNow:a}}},Z={class:"footer-container"},ee={class:"col-12 col-lg-4"},te=["src"],ae={class:"col-12 col-lg-4 q-gutter-y-sm"},le=e("div",{class:"text-2xl font-bold"},"About Us",-1),oe=S('<div class="col-12 col-lg-4 q-gutter-y-sm"><div class="text-2xl font-bold">Contact Info</div><div class="q-gutter-y-sm row"><div class="col-12 text-xl font-bold">Account</div><div class="col-12">Public Bank: 3186084126</div><div class="col-12 text-xl font-bold">Address</div><div class="col-12"> No. 2774-2, Jalan Changkat Permata, Taman Permata 53300 Kuala Lumpur. </div><div class="col-12 text-xl font-bold">Main</div><div class="col-12"><a href="tel:60123729668" class="text-blue-600 font-bold">6012-3729668</a></div><div class="col-12 text-xl font-bold">Admin</div><div class="col-12"><a href="tel:60192140561" class="text-blue-600 font-bold">6019-2140561</a></div><div class="col-12"><a href="tel:60193560561" class="text-blue-600 font-bold">6019-3560561</a></div><div class="col-12"><a href="tel:60123771428" class="text-blue-600 font-bold">6012-3771428</a></div><div class="col-12 text-xl font-bold">Office</div><div class="col-12"><a href="tel:60340222822" class="text-blue-600 font-bold">603-40222822</a></div><div class="col-12 text-xl font-bold">Email</div><div class="col-12"><a href="mailto:amberrealty88@gmail.com" class="text-blue-600 font-bold">amberrealty88@gmail.com</a></div></div></div>',1),se={class:"col-12 col-md-6 text-2xl font-bold"},re=e("div",null,"Follow Us",-1),ce=e("div",null,[e("a",{href:"https://www.facebook.com/amberrealtypropertiesandnews/",target:"_blank"},[e("img",{src:"/images/amber_facebook.png",width:"25"})])],-1),ne=[re,ce];function ie(a,_,l,s,n,r){return c(),m("div",Z,[e("div",{class:u(["row pb-14",a.$q.screen.lt.lg?"text-center gap-4":""])},[e("div",ee,[e("div",{class:u(["text-3xl font-bold pb-2 flex",a.$q.screen.lt.lg?"justify-center":""])},[e("img",{src:a.mainLogo,alt:"",width:"100"},null,8,te)],2),e("div",null,"Copyright © "+C(s.yearNow)+" Amber Realty",1)]),e("div",ae,[le,e("div",{class:u(a.$q.screen.lt.lg?"w-full":"w-[300px]")}," Amber Realty is a licensed real estate agent registered with the Board of Valuers, Appraisers and Estate Agents of Malaysia, and based in Kuala Lumpur the capital city of Malaysian. ",2)]),oe],2),t(P),e("div",{class:u(["row pt-8",a.$q.screen.lt.lg?"justify-center":""])},[e("div",se,[e("div",{class:u(["flex items-center gap-4",a.$q.screen.lt.lg?"justify-center":""])},ne,2)])],2)])}const de=Q(X,[["render",ie]]),ue={__name:"BackToTop",emits:["scrollY"],setup(a,{emit:_}){const l=v(0),s=v(0),n=()=>{l.value||(l.value=setTimeout(()=>{s.value=window.scrollY,clearTimeout(l.value),l.value=0},100),_("scrollY",s.value))},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return N(()=>{window.addEventListener("scroll",n)}),(i,d)=>(c(),m("div",{class:u(s.value>300?"":"hidden"),onClick:r},[t(T,{name:"expand_less",color:"secondary",size:"45px"})],2))}},ve={class:"overflow-hidden"},ye={__name:"BaseLayout",setup(a){const _=V(),l=v(""),s=v(0),n=v("");n.value="bottom-[4.5rem]";const r=i=>{s.value=i,n.value=s.value>300?"bottom-[7.5rem]":"bottom-[4.5rem]"};switch(_.name){case"property.details":l.value="bottom-20";break;default:l.value="bottom-10";break}return(i,d)=>(c(),m("div",ve,[t(L,{view:"lhh LpR lff"},{default:o(()=>[t(W),E(i.$slots,"content",{descriptionButtonPosition:n.value})]),_:3}),t(ue,{class:u(`fixed right-3 bg-primary rounded-full cursor-pointer ${l.value}`),onScrollY:r},null,8,["class"]),t(de)]))}};export{ye as _};