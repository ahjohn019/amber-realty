import{Q as y}from"./QBtn-d4f72e44.js";import{Q as $}from"./QToolbar-91797e31.js";import{B as m,u as B,r as _,n as c,x as i,D as t,s as l,H as x,a5 as h,a3 as k,q as b,F as T,G as C,m as u,A as v,aq as w,o as Q,a7 as A,ao as D,t as N}from"./ckeditor-b3f36c6d.js";import{Q as L,a as F,b as I}from"./QMenu-e31f52bc.js";import{Q as q,a as M,b as S}from"./QSeparator-3a7708ab.js";import{C as V}from"./ClosePopup-8871498c.js";import{Q as E}from"./vm-66c05f2a.js";const R={setup(){const e=B(),o=_({});return o.value=[{title:"Home",value:"home",route:"/"},{title:"About Us",value:"about_us",route:"/about-us"}],{onItemClick(n){e.push(n)},baseDrawerMenu:o}}},U={class:"q-pa-md"};function z(e,o,n,a,p,f){return c(),i("div",U,[t(M,{color:"primary","dropdown-icon":"menu",unelevated:""},{default:l(()=>[t(q,null,{default:l(()=>[(c(!0),i(x,null,h(a.baseDrawerMenu,(s,d)=>k((c(),b(L,{key:d,clickable:""},{default:l(()=>[t(F,{clickable:"",onClick:r=>a.onItemClick(s.route)},{default:l(()=>[t(I,null,{default:l(()=>[T(C(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)),[[V]])),128))]),_:1})]),_:1})])}const H=m(R,[["render",z]]);const P={components:{BaseDrawer:H},setup(){return{model:_("home"),options:[{label:"Home",value:"home",to:"/",exact:!0,activeClass:"active-link"},{label:"About Us",value:"about_us",to:"/about-us",exact:!1,activeClass:"active-link"}]}}},Y={class:"fixed z-10 w-full"},K={class:"col-6 col-md-2"},G=["src"],J={class:"col text-right nav-bar-dropdown"},O={class:"col-8 text-center nav-bar-content"};function j(e,o,n,a,p,f){const s=u("router-link"),d=u("BaseDrawer");return c(),i("div",Y,[t($,{class:"bg-secondary shadow-2",style:{height:"85px"}},{default:l(()=>[v("div",K,[t(s,{to:"/",exact:""},{default:l(()=>[v("img",{src:e.mainLogo,alt:"",width:"85"},null,8,G)]),_:1})]),v("div",J,[t(d)]),v("div",O,[(c(!0),i(x,null,h(a.options,(r,g)=>(c(),b(s,{key:g,to:r.to,exact:r.exact,"active-class":r.activeClass},{default:l(()=>[t(y,{flat:"",label:r.label},null,8,["label"])]),_:2},1032,["to","exact","active-class"]))),128))])]),_:1})])}const W=m(P,[["render",j]]);const X={},Z={class:"footer-container"},ee=w('<div class="row pb-14 footer-container-main gap-4 md:gap-0"><div class="col-12 col-md-4"><div class="text-3xl font-bold pb-2">Amber Realty</div><div>Copyright © 2023 Amber Realty</div></div><div class="col-12 col-md-4 q-gutter-y-sm"><div class="text-2xl font-bold">About Us</div><div class="footer-about-us"> Amber Realty is a licensed real estate agent registered with the Board of Valuers, Appraisers and Estate Agents of Malaysia, and based in Kuala Lumpur the capital city of Malaysian. </div></div><div class="col-12 col-md-4 q-gutter-y-sm"><div class="text-2xl font-bold">Contact Info</div><div class="q-gutter-y-sm row"><div class="col-12 text-xl font-bold">Address</div><div class="col-12"> No. 2774-2, Jalan Changkat Permata, Taman Permata 53300 Kuala Lumpur. </div><div class="col-12 text-xl font-bold">Main</div><div class="col-12">6012-3729668</div><div class="col-12 text-xl font-bold">Admin</div><div class="col-12">6019-2140561</div><div class="col-12">6019-3560561</div><div class="col-12">6012-3771428</div><div class="col-12 text-xl font-bold">Office</div><div class="col-12">603-40222822</div><div class="col-12 text-xl font-bold">Email</div><div class="col-12"><a href="mailto:amberrealty88@gmail.com" class="text-blue-600 font-bold">amberrealty88@gmail.com</a></div></div></div></div>',1),te=w('<div class="row pt-8"><div class="col-12 col-md-6 text-2xl font-bold"><div class="flex items-center gap-4 footer-follow-us"><div>Follow Us</div><div><a href="https://www.facebook.com/amberrealtypropertiesandnews/" target="_blank"><img src="/images/amber_facebook.png" width="25"></a></div></div></div></div>',1);function oe(e,o){return c(),i("div",Z,[ee,t(S),te])}const ae=m(X,[["render",oe]]),se={setup(){const e=_(0),o=_(0),n=()=>{e.value||(e.value=setTimeout(()=>{o.value=window.scrollY,clearTimeout(e.value),e.value=0},100))},a=()=>{window.scrollTo({top:0,behavior:"smooth"})};return Q(()=>{window.addEventListener("scroll",n)}),{scrollTimer:e,scrollY:o,handleScroll:n,toTop:a}}};function le(e,o,n,a,p,f){return c(),b(D,{name:"fade"},{default:l(()=>[v("div",{id:"pagetop",class:A(["fixed right-5 bottom-10 bg-primary rounded-full",a.scrollY>300?"":"hidden"]),onClick:o[0]||(o[0]=(...s)=>a.toTop&&a.toTop(...s))},[t(E,{name:"expand_less",color:"secondary",size:"64px"})],2)]),_:1})}const ce=m(se,[["render",le]]),ne={components:{NavBar:W,BaseFooter:ae,BackToTop:ce}},re={class:"overflow-hidden"};function ie(e,o,n,a,p,f){const s=u("NavBar"),d=u("BackToTop"),r=u("BaseFooter");return c(),i("div",re,[t(s),N(e.$slots,"content"),t(d),t(r)])}const be=m(ne,[["render",ie]]);export{be as B};
