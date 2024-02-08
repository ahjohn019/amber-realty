import{B as Q}from"./BaseLayout-a22ab147.js";import{u as L}from"./index-85fdba36.js";import{B as v,m as y,n as a,x as d,D as r,s as p,H as x,a5 as $,q as b,a6 as w,r as u,o as C,A as o,G as h,a7 as f,F as N}from"./ckeditor-a0aa7a69.js";import{Q as E}from"./QBtn-37afbeba.js";import{Q as q}from"./QCardSection-50d6bba9.js";import{Q as A}from"./QCard-ccef643e.js";import{Q as B}from"./QDialog-af0dd9d6.js";import{Q as S}from"./QChip-193c3deb.js";import{Q as D}from"./QImg-216eda12.js";import{Q as V}from"./QAvatar-3ae0751b.js";import"./QToolbar-0b2b34ae.js";import"./vm-f8b8bcbe.js";import"./QMenu-c7ea5fc0.js";import"./use-timeout-56b577c5.js";import"./QSeparator-bde45721.js";import"./ClosePopup-f1b06935.js";import"./dayjs.min-ba1b0cd6.js";import"./use-prevent-scroll-7265dd5d.js";const R={props:["propertyDetails","sliderOptions"]},T={class:"col-12 row justify-between"},I={key:0,class:"col-12"};function P(n,s,t,e,m,c){const l=y("SplideSlide"),i=y("Splide");return a(),d("div",T,[t.propertyDetails.sliders?(a(),d("div",I,[r(i,{options:t.sliderOptions,"aria-label":"My Favorite Images"},{default:p(()=>[(a(!0),d(x,null,$(t.propertyDetails.sliders,(_,g)=>(a(),b(l,{key:g},{default:p(()=>[r(D,{src:_.image.url,class:"h-full",fit:"contain"},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["options"])])):w("",!0)])}const O=v(R,[["render",P]]),j={components:{SliderComponent:O},props:["propertyDetails","propertyRoomDetails","contactNumber","whatsAppEnquiries"],setup(){const n=u(!1),s=u({}),t=1200,e=u("");e.value="hidden";const m=()=>{n.value=!0,setTimeout(()=>{c(),e.value=""},t)},c=()=>{s.value={type:"loop",perPage:1,gap:"1rem",height:0}};return C(()=>{setTimeout(()=>{c(),e.value=""},t)}),console.log(e.value),{selectSliderModal:m,sliderListOptions:c,sliderModal:n,sliderOptions:s,sliderButton:e}}},H={class:"col-12 row justify-between items-center q-gutter-y-md"},F={class:"col-12 pl-2 row justify-between items-center q-gutter-y-md"},z={class:"col col-auto text-4xl break-words"},U={class:"col col-auto text-right"},W={key:0,class:"col-12"},G={class:"text-sm"},Y={class:"col-12 pl-2"},J={class:"bg-secondary featured-label text-center py-2 px-4 font-bold rounded capitalize w-[100px]"},K={class:"col-12 pl-2"},X={class:"text-xl font-bold"};function Z(n,s,t,e,m,c){const l=y("SliderComponent");return a(),d("div",H,[o("div",F,[o("div",z,h(t.propertyDetails.name),1),o("div",U,[r(E,{label:"View More",icon:"photo_camera",color:"teal",class:f(e.sliderButton),onClick:s[0]||(s[0]=i=>e.selectSliderModal())},null,8,["class"]),r(B,{modelValue:e.sliderModal,"onUpdate:modelValue":s[1]||(s[1]=i=>e.sliderModal=i)},{default:p(()=>[r(A,{style:{width:"700px","max-width":"100vw"}},{default:p(()=>[r(q,null,{default:p(()=>[r(l,{propertyDetails:t.propertyDetails,sliderOptions:e.sliderOptions},null,8,["propertyDetails","sliderOptions"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),t.propertyDetails.details?(a(),d("div",W,[o("div",G,[(a(!0),d(x,null,$(t.propertyRoomDetails,(i,_)=>(a(),b(S,{color:"teal","text-color":"white",icon:i.icon,key:_},{default:p(()=>[N(h(t.propertyDetails.details[i.value])+" "+h(i.name),1)]),_:2},1032,["icon"]))),128))])])):w("",!0),o("div",Y,[o("div",J," For "+h(t.propertyDetails.listing_type),1)]),o("div",K,[o("span",X,"MYR "+h(t.propertyDetails.price),1)])])}const ee=v(j,[["render",Z]]),te={props:["propertyDetails"]},oe={class:"col-12 row q-gutter-y-md justify-between"},ne={class:"col-12 row q-gutter-y-md"},se=o("div",{class:"col-12 text-3xl font-bold border-b border-black pb-4"}," Short Descriptions ",-1),re=["innerHTML"];function ae(n,s,t,e,m,c){return a(),d("div",oe,[o("div",{class:f(["col-12 bg-secondary rounded row q-gutter-y-md",n.$q.screen.lt.md?"p-4":"p-10"])},[o("div",ne,[se,o("div",{class:"col-12 break-words",innerHTML:t.propertyDetails.short_description},null,8,re)])],2)])}const le=v(te,[["render",ae]]),ie={props:["propertyDetails"]},ce=o("div",{class:"col-12 text-3xl font-bold border-b pb-4"},"Descriptions",-1),pe=["innerHTML"];function de(n,s,t,e,m,c){return a(),d("div",{class:f(["col-12 row q-gutter-y-md bg-primary text-white rounded-lg",n.$q.screen.lt.md?"p-4":"p-10"])},[ce,o("div",{class:"col-12",innerHTML:t.propertyDetails.description},null,8,pe)],2)}const me=v(ie,[["render",de]]),ue={props:["propertyDetails"],setup(){const n=u(!1);return{openBanner:n,toggleBanner:()=>{n.value=!0}}}},_e={key:0};function ye(n,s,t,e,m,c){return t.propertyDetails.banner?(a(),d("div",_e,[r(D,{src:t.propertyDetails.banner.image.url,class:"h-[450px] cursor-pointer",fit:"cover",onClick:s[0]||(s[0]=l=>e.toggleBanner())},null,8,["src"]),r(B,{modelValue:e.openBanner,"onUpdate:modelValue":s[1]||(s[1]=l=>e.openBanner=l)},{default:p(()=>[r(A,{style:{width:"700px","max-width":"80vw"}},{default:p(()=>[r(q,null,{default:p(()=>[r(D,{src:t.propertyDetails.banner.image.url,ratio:16/9},null,8,["src"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])):w("",!0)}const fe=v(ue,[["render",ye]]),he={props:["whatsAppEnquiries"],setup(){const n=u([]);return n.value=[{name:"Agent Ng",contact:"60192137731"},{name:"Agent Doo",contact:"60123729668"},{name:"Agent Teng",contact:"60193560561"}],{contactAgent:n}}},ve=o("div",{class:"col-12 text-3xl font-bold border-b-2 pb-4"}," Listing Agent ",-1),ge=o("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),be={class:"col-12 pl-2"},De={class:"col-12"},we=["href"],xe=o("span",{class:"align-middle ml-1 px-2 text-sm font-bold"},"Whatsapp",-1);function $e(n,s,t,e,m,c){return a(),d("div",{class:f(["row q-gutter-y-md border rounded-lg bg-slate-50",n.$q.screen.lt.md?"p-4":"p-10"])},[ve,(a(!0),d(x,null,$(e.contactAgent,(l,i)=>(a(),d("div",{class:"col-12 row items-center border-b-2 pb-6",key:i},[o("div",{class:f(["col",n.$q.screen.lt.sm?"col-4":"col-auto"])},[r(V,{size:"75px"},{default:p(()=>[ge]),_:1})],2),o("div",{class:f(["col row pl-4",n.$q.screen.lt.md?"":"col-auto"])},[o("div",{class:f(["col-12 pl-2 font-bold",n.$q.screen.lt.md?"":"text-xl"])},h(l.name),3),o("div",be,h(l.contact),1),o("div",De,[r(S,{color:"teal","text-color":"white"},{default:p(()=>[o("a",{href:"https://wa.me/"+l.contact+"?text="+encodeURIComponent(t.whatsAppEnquiries),target:"_blank"},[r(D,{src:"/images/amber_whatsapp.png",alt:"",width:"20px"}),xe],8,we)]),_:2},1024)])],2)]))),128))],2)}const Ce=v(he,[["render",$e]]),qe={components:{BaseLayout:Q,InfoComponent:ee,ShortDescriptionsComponent:le,DescriptionsComponent:me,BannerComponent:fe,ListingAgentComponent:Ce},setup(){const n=L(),s=u({}),t=u(0),e=u([]),m=u([]),c=u([]),l=u(""),i=async()=>{var g;const _=await n.fetchPropertyDetails();return s.value=_,t.value=((g=_.sliders)==null?void 0:g.length)||0,l.value="I am interested in "+s.value.name+" priced at RM"+s.value.price+". Can you provide more details?",_};return e.value=[{name:"Agent Ng",contact:"60192137731"},{name:"Agent Doo",contact:"60123729668"},{name:"Agent Teng",contact:"60193560561"}],m.value=[{name:"Beds",icon:"bed",value:"bedroom"},{name:"Bath",icon:"bathtub",value:"bathroom"},{name:"Car Park",icon:"directions_car",value:"car_park"},{name:"sqft",icon:"square_foot",value:"square_feet"},{name:"",icon:"apartment",value:"tenure"}],c.value=[{name:"Tenure",label:"",front_label:"",value:"tenure"},{name:"Price",label:"",front_label:"RM",value:"price"}],C(()=>{i()}),{propertyDetails:s,fetchPropertyDetails:i,contactNumber:e,propertyRoomDetails:m,propertyDetailsSection:c,whatsAppEnquiries:l}}},Ae={class:"col-12 row justify-between gap-6","data-aos":"fade-right"},Be={class:"col-12 row"};function Se(n,s,t,e,m,c){const l=y("BannerComponent"),i=y("InfoComponent"),_=y("ShortDescriptionsComponent"),g=y("DescriptionsComponent"),k=y("ListingAgentComponent"),M=y("BaseLayout");return a(),b(M,null,{content:p(()=>[e.propertyDetails.banner?(a(),b(l,{key:0,propertyDetails:e.propertyDetails,style:{"margin-top":"5.5rem"}},null,8,["propertyDetails"])):w("",!0),o("div",{class:f(["container mx-auto row",n.$q.screen.lt.md?"w-full p-4":"w-3/4"])},[o("div",Ae,[o("div",Be,[r(i,{propertyDetails:e.propertyDetails,propertyRoomDetails:e.propertyRoomDetails,contactNumber:e.contactNumber,whatsAppEnquiries:e.whatsAppEnquiries},null,8,["propertyDetails","propertyRoomDetails","contactNumber","whatsAppEnquiries"])]),r(_,{propertyDetails:e.propertyDetails},null,8,["propertyDetails"]),r(g,{propertyDetails:e.propertyDetails},null,8,["propertyDetails"]),r(k,{whatsAppEnquiries:e.whatsAppEnquiries},null,8,["whatsAppEnquiries"])])],2)]),_:1})}const Ge=v(qe,[["render",Se]]);export{Ge as default};
