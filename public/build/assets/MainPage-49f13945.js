import{a as xt}from"./QLayout-f97e7ef6.js";import{B as y,r as $,n as l,x as c,A as e,a7 as S,ar as et,l as P,w as U,j as F,$ as W,U as G,E as Y,ap as bt,L as $t,M as wt,o as Ct,m as h,H as Q,a5 as A,D as s,s as m,G as _,a6 as k,F as b,q as ot}from"./ckeditor-90a70818.js";import{Q as St}from"./QImg-128d8901.js";import{h as Tt,u as Pt,i as kt,v as J,j as qt,d as Lt,p as K,k as Et,l as It,m as jt,e as Ot,n as Bt,r as X,o as Mt,g as Qt,q as At}from"./QMenu-81750110.js";import{a as Ht,u as Vt,c as Z}from"./use-timeout-781162ef.js";import{c as zt,e as Dt,Q as q}from"./vm-98611852.js";import{Q as L}from"./QCardSection-94fbad2c.js";import{Q as st}from"./QCard-0bdafae9.js";import{u as Nt}from"./index-6ce85f33.js";import{B as Rt}from"./BaseLayout-5b28f4c1.js";import{Q as M}from"./QBtn-7f3b196f.js";import{b as Ut}from"./QBtnDropdown-54643d9b.js";import{Q as Ft}from"./QInput-277c2892.js";import"./QResizeObserver-e68064cd.js";import"./QToolbar-3b098ad8.js";import"./ClosePopup-7b431b16.js";import"./QSeparator-1cbc451b.js";import"./use-key-composition-619d00bf.js";const Wt={setup(){return{payload:$({name:"",email:""})}}},Gt={class:"row container mx-auto p-4 md:p-12"},Yt={class:"col-12 col-md-9 col-lg-7 flex flex-col gap-6 justify-center header-content-container px-4 text-white","data-aos":"flip-left"},Jt={class:"header-content uppercase"},Kt={class:"col-12 col-md-2 flex items-center justify-center"},Xt=["src"],Zt=et('<div class="col-12 col-md-8 row items-center"><div class="col-12 col-md-6"><div class="text-2xl">amber realty</div><div class="row justify-between items-center"><div class="col-12 col-md-4">E-31482</div><div class="col-12 col-md-4 flex flex-col justify-center items-center"><img src="/images/amber_lppeh_logo.png" alt="" width="25"><div class="text-center">E-2346</div></div></div></div></div>',1),te=e("div",{class:"md:text-7xl font-bold header-title"},null,-1),ee=e("div",{class:"text-sm"}," Are you ready to start the search for your dream home? Look no further than Amber Realty Real Estate. ",-1);function oe(t,n,u,i,a,d){return l(),c("div",{class:S(["banner-background",t.$q.screen.lt.md?"h-full":"h-[700px] flex items-center"])},[e("div",Gt,[e("div",Yt,[e("div",Jt,[e("div",{class:S(["row uppercase text-sm font-bold gap-2",t.$q.screen.lt.md?"justify-center":""])},[e("div",Kt,[e("img",{src:t.mainLogo,alt:"",width:"100"},null,8,Xt)]),Zt],2)]),te,ee])])],2)}const se=y(Wt,[["render",oe]]),tt=zt({name:"QTooltip",inheritAttrs:!1,props:{...Tt,...Pt,...kt,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:J},self:{type:String,default:"top middle",validator:J},offset:{type:Array,default:()=>[14,14],validator:qt},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Lt],setup(t,{slots:n,emit:u,attrs:i}){let a,d;const r=$t(),{proxy:{$q:o}}=r,f=$(null),g=$(!1),E=P(()=>K(t.anchor,o.lang.rtl)),I=P(()=>K(t.self,o.lang.rtl)),j=P(()=>t.persistent!==!0),{registerTick:nt,removeTick:at}=Ht(),{registerTimeout:T}=Vt(),{transitionProps:rt,transitionStyle:it}=Et(t),{localScrollTarget:H,changeScrollEvent:lt,unconfigureScrollTarget:ct}=It(t,N),{anchorEl:v,canShow:dt,anchorEvents:w}=jt({showing:g,configureAnchorEl:vt}),{show:ut,hide:O}=Ot({showing:g,canShow:dt,handleShow:mt,handleHide:_t,hideOnRouteChange:j,processOnMount:!0});Object.assign(w,{delayShow:ft,delayHide:ht});const{showPortal:V,hidePortal:z,renderPortal:pt}=Bt(r,f,gt,"tooltip");if(o.platform.is.mobile===!0){const p={anchorEl:v,innerRef:f,onClickOutside(x){return O(x),x.target.classList.contains("q-dialog__backdrop")&&wt(x),!0}},B=P(()=>t.modelValue===null&&t.persistent!==!0&&g.value===!0);U(B,x=>{(x===!0?At:X)(p)}),F(()=>{X(p)})}function mt(p){V(),nt(()=>{d=new MutationObserver(()=>C()),d.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),C(),N()}),a===void 0&&(a=U(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,C)),T(()=>{V(!0),u("show",p)},t.transitionDuration)}function _t(p){at(),z(),D(),T(()=>{z(!0),u("hide",p)},t.transitionDuration)}function D(){d!==void 0&&(d.disconnect(),d=void 0),a!==void 0&&(a(),a=void 0),ct(),W(w,"tooltipTemp")}function C(){Mt({targetEl:f.value,offset:t.offset,anchorEl:v.value,anchorOrigin:E.value,selfOrigin:I.value,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ft(p){if(o.platform.is.mobile===!0){Z(),document.body.classList.add("non-selectable");const B=v.value,x=["touchmove","touchcancel","touchend","click"].map(R=>[B,R,"delayHide","passiveCapture"]);G(w,"tooltipTemp",x)}T(()=>{ut(p)},t.delay)}function ht(p){o.platform.is.mobile===!0&&(W(w,"tooltipTemp"),Z(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),T(()=>{O(p)},t.hideDelay)}function vt(){if(t.noParentEvent===!0||v.value===null)return;const p=o.platform.is.mobile===!0?[[v.value,"touchstart","delayShow","passive"]]:[[v.value,"mouseenter","delayShow","passive"],[v.value,"mouseleave","delayHide","passive"]];G(w,"anchor",p)}function N(){if(v.value!==null||t.scrollTarget!==void 0){H.value=Qt(v.value,t.scrollTarget);const p=t.noParentEvent===!0?C:O;lt(H.value,p)}}function yt(){return g.value===!0?Y("div",{...i,ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",i.class],style:[i.style,it.value],role:"tooltip"},Dt(n.default)):null}function gt(){return Y(bt,rt.value,yt)}return F(D),Object.assign(r.proxy,{updatePosition:C}),pt}});const ne={setup(){const t=Nt(),n={limit:4},u=$([]),i=async()=>{const a=await t.fetchLatestProperty(n);return u.value=a,a};return Ct(()=>{i()}),{fetchLatestProperty:i,latestProperty:u}}},ae={class:"col-12 row"},re={key:0,class:"col-12 row"},ie={key:0,class:"relative"},le={key:0,class:"absolute top-4 left-5 bg-secondary font-bold px-6 py-2 rounded"},ce={class:"col-12 text-lg flex items-center justify-between"},de={class:"col-12 text-xl font-bold latest-property__name"},ue={class:"col-12 text-subtitle2 latest-property__descriptions !h-[65px]"},pe={key:0,class:"flex gap-4"},me={class:"align-middle text-lg"},_e={class:"align-middle text-lg"},fe={class:"align-middle text-lg"},he={key:1,class:"col-12"},ve=e("h5",{class:"text-center"},"Latest Property Not Available",-1),ye=[ve];function ge(t,n,u,i,a,d){const r=h("router-link");return l(),c("div",ae,[i.latestProperty.length>0?(l(),c("div",re,[(l(!0),c(Q,null,A(i.latestProperty,(o,f)=>(l(),c("div",{class:"col-12 col-md-6 col-lg-3 p-2",key:f},[s(r,{to:"property/details/"+o.id,onClick:n[0]||(n[0]=g=>t.onItemClick())},{default:m(()=>[s(st,{class:"my-card"},{default:m(()=>[o.banner_image?(l(),c("div",ie,[s(St,{src:o.banner_image.url,ratio:16/9},null,8,["src"]),o.details?(l(),c("div",le," For "+_(o.details.listing_type),1)):k("",!0)])):k("",!0),s(L,{class:"row gap-2"},{default:m(()=>[e("div",ce,[o.details?(l(),c("div",{key:0,class:S(["bg-secondary font-bold px-2 py-2 rounded",o.banner_image?"hidden":""])}," For "+_(o.details.listing_type),3)):k("",!0),e("div",null,"RM "+_(o.price),1)]),e("div",de,[b(_(o.name)+" ",1),s(tt,{"max-width":"350px"},{default:m(()=>[b(_(o.name),1)]),_:2},1024)]),e("div",ue,[b(_(o.short_description)+" ",1),s(tt,{"max-width":"350px"},{default:m(()=>[b(_(o.short_description),1)]),_:2},1024)])]),_:2},1024),s(L,{class:S(["q-pt-none",t.$q.screen.lt.md?"":"h-[75px]"])},{default:m(()=>[o.details?(l(),c("div",pe,[e("div",null,[e("span",me,_(o.details.bedroom),1),s(q,{name:"bed",size:"22px",class:"pl-1"})]),e("div",null,[e("span",_e,_(o.details.bathroom),1),s(q,{name:"bathtub",size:"22px",class:"pl-1"})]),e("div",null,[e("span",fe,_(o.details.square_feet)+" sqft ",1),s(q,{name:"dashboard",size:"22px",class:"pl-1"})])])):k("",!0)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to"])]))),128))])):(l(),c("div",he,ye))])}const xe=y(ne,[["render",ge]]);const be={components:{LatestComponent:xe}},$e={class:"bg-primary"},we={class:"row container mx-auto py-24 px-12 gap-10"},Ce={class:"col-12 px-2 row items-center gap-2 md:gap-0"},Se=e("div",{class:"col-12 col-md-6 text-3xl font-bold properties-content text-white"}," Explore Our Latest Properties ",-1),Te={class:"col-12 col-md-6 text-right font-bold properties-content text-white"};function Pe(t,n,u,i,a,d){const r=h("router-link"),o=h("LatestComponent");return l(),c("div",$e,[e("div",we,[e("div",Ce,[Se,e("div",Te,[s(r,{to:"#"},{default:m(()=>[b("See All Property")]),_:1})])]),s(o)])])}const ke=y(be,[["render",Pe]]);const qe={setup(){const t=$({}),n=0,u=5;return t.value=[{title:"20",content:"Years in the industry",quote:"+"},{title:"90",content:"Customer satisfaction",quote:"%"},{title:"10",content:"Properties sold",quote:"K"},{title:"50",content:"Country served",quote:"+"}],{payload:t,numberInit:n,numberDuration:u}}},Le={class:"bg-primary"},Ee={class:"row social-proof-container mx-auto flex justify-center items-center text-white gap-6 md:gap-0"},Ie={class:"text-6xl font-bold"},je={class:"text-lg"};function Oe(t,n,u,i,a,d){const r=h("number");return l(),c("div",Le,[e("div",Ee,[(l(!0),c(Q,null,A(i.payload,(o,f)=>(l(),c("div",{class:"col-6 col-md-3 text-center q-gutter-y-sm",key:f},[e("div",Ie,[s(r,{class:"bold transition",ref_for:!0,ref:"number2",from:i.numberInit,to:o.title||i.numberInit,duration:i.numberDuration},null,8,["from","to","duration"]),b(_(o.quote),1)]),e("div",je,_(o.content),1)]))),128))])])}const Be=y(qe,[["render",Oe]]);const Me={},Qe={class:"bg-secondary"},Ae=et('<div class="row justify-around items-center container mx-auto call-to-action-container q-gutter-y-lg"><div class="col-12 col-md-7 text-2xl md:text-4xl font-bold"> Contact Us to Start Your Real Estate Journey ! </div><div class="col-12 col-md-3 text-center text-xl font-bold text-white" style="width:250px;"><a href="https://wa.me/60123729668?text=I&#39;m%20interested%20in%20property%20for%20sale" target="_blank"><div class="bg-primary px-8 py-4 rounded row"><div class="col-2"><img src="/images/amber_whatsapp.png" alt="" width="55"></div><div class="col-10">0123729668</div></div></a></div></div>',1),He=[Ae];function Ve(t,n){return l(),c("div",Qe,He)}const ze=y(Me,[["render",Ve]]),De={setup(){const t=$([]);return t.value=[{title:"Innovate for Exceptional Service",description:"Commitment in business through innovation <br> to provide exceptional customer service.",icon:"home"},{title:"Build Strong Connections",description:"Build lifetime relationships <br> with our customers and communities.",icon:"real_estate_agent"},{title:"Maximize Business Success",description:"Optimize relationships,<br>service and profitability.",icon:"key"}],{missionStatement:t}}},Ne={class:""},Re={class:"row container mx-auto py-24 px-12 justify-between gap-2"},Ue={class:"col-12"},Fe={class:"w-[125px] h-[125px] m-auto rounded-full flex justify-center items-center bg-secondary"},We={class:"col-12 text-xl font-bold h-[50px] text-white"},Ge=["innerHTML"];function Ye(t,n,u,i,a,d){return l(),c("div",Ne,[e("div",Re,[e("div",{class:S(["col-12 text-3xl font-bold pb-8",t.$q.screen.lt.md?"text-center":""])}," Mission Statement ",2),(l(!0),c(Q,null,A(i.missionStatement,(r,o)=>(l(),c("div",{class:"col-12 col-md-3 text-center py-12 px-8 row gap-8 border rounded-lg bg-primary","data-aos":"flip-left","data-aos-duration":"1500",key:o},[e("div",Ue,[e("div",Fe,[s(q,{name:r.icon,size:"64px"},null,8,["name"])])]),e("div",We,_(r.title),1),e("div",{class:"col-12 h-[50px] text-white",innerHTML:r.description},null,8,Ge)]))),128))])])}const Je=y(De,[["render",Ye]]),Ke={data(){return{formInput:{search:"",searchType:"buy"}}},methods:{setSearchType(t){this.formInput.searchType=t},searchProperty(){const{searchType:t,search:n}=this.formInput;this.$router.push({name:"property.list",query:{t,s:n}})}}},Xe={class:"row justify-center"},Ze={class:"col col-11 col-sm-10 col-md-8 col-lg-6"},to={class:"row"},eo={class:"col"},oo={class:"col col-auto"};function so(t,n,u,i,a,d){return l(),ot(st,{class:"p-3 md:p-6",style:{"background-color":"#0e2638e6","border-radius":"15px"}},{default:m(()=>[s(L,null,{default:m(()=>[e("div",Xe,[e("div",Ze,[s(Ut,{modelValue:a.formInput.searchType,"onUpdate:modelValue":n[2]||(n[2]=r=>a.formInput.searchType=r),rounded:"",class:"fill-width"},{default:m(()=>[s(M,{rounded:"",color:a.formInput.searchType=="buy"?"primary":"white text-black",label:"Buy",class:"text-capitalize fill-width",onClick:n[0]||(n[0]=r=>d.setSearchType("buy"))},null,8,["color"]),s(M,{rounded:"",color:a.formInput.searchType=="rent"?"primary":"white text-black",label:"Rent",class:"text-capitalize fill-width",onClick:n[1]||(n[1]=r=>d.setSearchType("rent"))},null,8,["color"])]),_:1},8,["modelValue"])])])]),_:1}),s(L,null,{default:m(()=>[e("div",null,[e("div",to,[e("div",eo,[s(Ft,{modelValue:a.formInput.search,"onUpdate:modelValue":n[3]||(n[3]=r=>a.formInput.search=r),placeholder:"Search Property",outlined:"",class:"bg-white",style:{"border-top-left-radius":"15px","border-bottom-left-radius":"15px"}},null,8,["modelValue"])]),e("div",oo,[s(M,{color:"primary",class:"fill-height text-capitalize",style:{"border-top-right-radius":"15px","border-bottom-right-radius":"15px"},onClick:d.searchProperty},{default:m(()=>[b("Search")]),_:1},8,["onClick"])])])])]),_:1})]),_:1})}const no=y(Ke,[["render",so]]),ao={components:{BaseLayout:Rt,HeaderContainer:se,PropertiesContainer:ke,SocialProof:Be,CallToAction:ze,SearchCard:no,MissionStatement:Je}},ro={class:"row justify-center"},io={class:"col col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 p-4 md:p-10 md:pb-4"};function lo(t,n,u,i,a,d){const r=h("HeaderContainer"),o=h("SearchCard"),f=h("PropertiesContainer"),g=h("MissionStatement"),E=h("SocialProof"),I=h("CallToAction"),j=h("BaseLayout");return l(),ot(j,null,{content:m(()=>[s(xt,{class:"mt-20"},{default:m(()=>[s(r,{"data-aos":"fade-up"}),e("div",ro,[e("div",io,[s(o)])]),s(f,{"data-aos":"fade-left"}),s(g,{"data-aos":"fade-right"}),s(E,{"data-aos":"fade-right"}),s(I,{"data-aos":"fade-left"})]),_:1})]),_:1})}const ko=y(ao,[["render",lo]]);export{ko as default};
