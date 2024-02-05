import{Q as y}from"./QBtn-27d9e4ae.js";import{Q as $}from"./QToolbar-f8e49a99.js";import{B as m,u as B,r as v,n as c,x as u,D as e,s as l,H as x,a5 as g,a3 as k,q as h,F as b,G as T,m as d,A as o,aq as C,o as Q,a7 as A,ao as D,t as L}from"./ckeditor-191cb1c0.js";import{Q as N,a as F,b as I}from"./QMenu-5b31634f.js";import{Q as q,a as M,b as S}from"./QSeparator-bf0aaa27.js";import{C as V}from"./ClosePopup-d0503915.js";import{Q as R}from"./vm-60024d53.js";const U={setup(){const t=B(),a=v({});return a.value=[{title:"Home",value:"home",route:"/"},{title:"About Us",value:"about_us",route:"/about-us"}],{onItemClick(s){t.push(s)},baseDrawerMenu:a}}},z={class:"q-pa-md"};function E(t,a,s,n,p,f){return c(),u("div",z,[e(M,{color:"primary","dropdown-icon":"menu",unelevated:""},{default:l(()=>[e(q,null,{default:l(()=>[(c(!0),u(x,null,g(n.baseDrawerMenu,(r,_)=>k((c(),h(N,{key:_,clickable:""},{default:l(()=>[e(F,{clickable:"",onClick:i=>n.onItemClick(r.route)},{default:l(()=>[e(I,null,{default:l(()=>[b(T(r.title),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)),[[V]])),128))]),_:1})]),_:1})])}const H=m(U,[["render",E]]);const K={components:{BaseDrawer:H},setup(){return{model:v("home"),options:[{label:"Home",value:"home",to:"/",exact:!0,activeClass:"active-link"},{label:"About Us",value:"about_us",to:"/about-us",exact:!1,activeClass:"active-link"}]}}},P={class:"fixed z-10 w-full"},Y={class:"col-6 col-md-2"},j=["src"],G={class:"col text-right nav-bar-dropdown"},J={class:"col-8 text-center nav-bar-content"};function O(t,a,s,n,p,f){const r=d("router-link"),_=d("BaseDrawer");return c(),u("div",P,[e($,{class:"bg-secondary shadow-2",style:{height:"85px"}},{default:l(()=>[o("div",Y,[e(r,{to:"/",exact:""},{default:l(()=>[o("img",{src:t.mainLogo,alt:"",width:"85"},null,8,j)]),_:1})]),o("div",G,[e(_)]),o("div",J,[(c(!0),u(x,null,g(n.options,(i,w)=>(c(),h(r,{key:w,to:i.to,exact:i.exact,"active-class":i.activeClass},{default:l(()=>[e(y,{flat:"",label:i.label},null,8,["label"])]),_:2},1032,["to","exact","active-class"]))),128))])]),_:1})])}const W=m(K,[["render",O]]);const X={},Z={class:"footer-container"},ee=C('<div class="row pb-14 footer-container-main gap-4 md:gap-0"><div class="col-12 col-md-4"><div class="text-3xl font-bold pb-2">Amber Realty</div><div>Copyright © 2023 Amber Realty</div></div><div class="col-12 col-md-4 q-gutter-y-sm"><div class="text-2xl font-bold">About Us</div><div class="footer-about-us"> Amber Realty is a licensed real estate agent registered with the Board of Valuers, Appraisers and Estate Agents of Malaysia, and based in Kuala Lumpur the capital city of Malaysian. </div></div><div class="col-12 col-md-4 q-gutter-y-sm"><div class="text-2xl font-bold">Contact Info</div><div class="q-gutter-y-sm"><div> 64, Jalan Kuantan, Titiwangsa 53200 Kuala Lumpur, Malaysia </div><div>012-3729668</div><div>03-40222822</div><div>amberrealty88@gmail.com</div></div></div></div>',1),te={class:"row pt-8"},oe=o("div",{class:"col-12 col-md-6 text-2xl font-bold"},[o("div",{class:"flex items-center gap-4 footer-follow-us"},[o("div",null,"Follow Us"),o("div",null,[o("img",{src:"/images/amber_facebook.png",width:"25"})])])],-1),ae={class:"col-12 col-md-6 flex items-center footer-follow-us justify-end gap-2"};function se(t,a){const s=d("router-link");return c(),u("div",Z,[ee,e(S),o("div",te,[oe,o("div",ae,[o("div",null,[e(s,{to:"#",class:"font-bold"},{default:l(()=>[b("Terms & Conditions")]),_:1})]),o("div",null,[e(s,{to:"#",class:"font-bold"},{default:l(()=>[b("Privacy Policy")]),_:1})])])])])}const ne=m(X,[["render",se]]),le={setup(){const t=v(0),a=v(0),s=()=>{t.value||(t.value=setTimeout(()=>{a.value=window.scrollY,clearTimeout(t.value),t.value=0},100))},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return Q(()=>{window.addEventListener("scroll",s)}),{scrollTimer:t,scrollY:a,handleScroll:s,toTop:n}}};function re(t,a,s,n,p,f){return c(),h(D,{name:"fade"},{default:l(()=>[o("div",{id:"pagetop",class:A(["fixed right-5 bottom-10 bg-primary rounded-full",n.scrollY>300?"":"hidden"]),onClick:a[0]||(a[0]=(...r)=>n.toTop&&n.toTop(...r))},[e(R,{name:"expand_less",color:"secondary",size:"64px"})],2)]),_:1})}const ce=m(le,[["render",re]]),ie={components:{NavBar:W,BaseFooter:ne,BackToTop:ce}},de={class:"overflow-hidden"};function ue(t,a,s,n,p,f){const r=d("NavBar"),_=d("BackToTop"),i=d("BaseFooter");return c(),u("div",de,[e(r),L(t.$slots,"content"),e(_),e(i)])}const xe=m(ie,[["render",ue]]);export{xe as B};
