import{Q as B}from"./QChip-ea03148d.js";import{Q as w}from"./QImg-128d8901.js";import{Q as S}from"./QCardSection-94fbad2c.js";import{Q as j}from"./QCard-0bdafae9.js";import{B as C}from"./BaseLayout-5b28f4c1.js";import{u as L}from"./index-6ce85f33.js";import{B as P,r as c,o as Q,m as D,n as a,q as m,s as d,A as e,a7 as n,G as l,x as i,a6 as u,H as g,a5 as v,F as A,D as _}from"./ckeditor-90a70818.js";import"./vm-98611852.js";import"./QBtn-7f3b196f.js";import"./QToolbar-3b098ad8.js";import"./QMenu-81750110.js";import"./use-timeout-781162ef.js";import"./QBtnDropdown-54643d9b.js";import"./ClosePopup-7b431b16.js";import"./QSeparator-1cbc451b.js";const M={components:{BaseLayout:C},setup(){const r=c({}),q=L(),p=c({}),t=c(0),b=c([]),x=c([]),y=c([]),f=c(""),h=async()=>{var k;const s=await q.fetchPropertyDetails();return p.value=s,t.value=((k=s.slider_image)==null?void 0:k.length)||0,o(t.value),f.value="I am interested in "+p.value.name+" priced at RM"+p.value.price+". Can you provide more details?",s},o=async s=>{console.log(s),r.value={type:"loop",perPage:s>3?3:s,gap:"1rem",breakpoints:{1024:{perPage:2},768:{perPage:1,height:0}},height:500}};return b.value=[{name:"Agent Ng",contact:"60192137731"},{name:"Agent Doo",contact:"60123729668"},{name:"Agent Teng",contact:"60193560561"}],x.value=[{name:"Beds",icon:"bed",value:"bedroom"},{name:"Bath",icon:"bathroom",value:"bathroom"},{name:"sqft",icon:"dashboard",value:"square_feet"}],y.value=[{name:"Lot Area",label:"sqft",front_label:"",value:"square_feet"},{name:"Bedroom",label:"rooms",front_label:"",value:"bedroom"},{name:"Baths",label:"baths",front_label:"",value:"bathroom"},{name:"Tenure",label:"",front_label:"",value:"tenure"},{name:"Price",label:"",front_label:"RM",value:"price"},{name:"Listing Type",label:"",front_label:"For",value:"listing_type"}],Q(()=>{h(),o()}),{sliderOptions:r,propertyDetails:p,fetchPropertyDetails:h,sliderListOptions:o,contactNumber:b,propertyRoomDetails:x,propertyDetailsSection:y,whatsAppEnquiries:f}}},N={class:"container mx-auto row q-gutter-y-lg",style:{"margin-top":"2.5rem",width:"75%"}},R={class:"col-12 row justify-between items-center pt-8 gap-4 md:gap-0","data-aos":"fade-up"},T={class:"text-xl font-bold"},F={class:"col-12 row items-center gap-4 md:gap-0 justify-end"},I={key:0,class:"bg-secondary featured-label text-center py-2 px-4 font-bold rounded"},O={class:"text-2xl font-bold"},V={key:0,class:"col-12"},E=["href"],H={class:"align-middle ml-2 text-sm"},z={class:"col-12 row justify-between gap-6","data-aos":"fade-right"},G={class:"col-12 row q-gutter-y-lg"},U={key:0,class:"col-12 row"},W={key:0,class:"col-12 col-lg-3 text-center"},J={class:"text-h6"},K={class:"text-subtitle2"},X={class:"col-12 row justify-between"},Y={key:0,class:"col-12"},Z={class:"col-12 row q-gutter-y-md justify-between"},$={class:"col-12"},ee=e("div",{class:"text-3xl font-bold pb-4"}," Short Descriptions ",-1),te=e("div",{class:"col-12 text-3xl font-bold border-b pb-4"}," Overview ",-1),oe=["innerHTML"];function se(r,q,p,t,b,x){const y=D("SplideSlide"),f=D("Splide"),h=D("BaseLayout");return a(),m(h,null,{content:d(()=>[e("div",N,[e("div",R,[e("div",{class:n(["col-12 col-md-7 q-gutter-y-md",r.$q.screen.lt.md?"text-center":""])},[e("div",T,l(t.propertyDetails.name),1)],2),e("div",{class:n(["col-12 col-md-5 row q-gutter-y-md",r.$q.screen.lt.md?"text-right":"text-center"])},[e("div",F,[e("div",{class:n(["col-12 flex items-center pt-4 gap-2",r.$q.screen.lt.md?"justify-center":"justify-end"])},[t.propertyDetails.details?(a(),i("div",I," For "+l(t.propertyDetails.details.listing_type),1)):u("",!0),e("div",{class:n(r.$q.screen.lt.md?"":"ml-4")},[e("span",O,"RM "+l(t.propertyDetails.price),1)],2)],2)]),t.propertyDetails.details?(a(),i("div",V,[e("div",{class:n(["text-sm",r.$q.screen.lt.md?"text-center":"text-right"])},[(a(!0),i(g,null,v(t.propertyRoomDetails,(o,s)=>(a(),m(B,{color:"teal","text-color":"white",icon:o.icon,key:s},{default:d(()=>[A(l(t.propertyDetails.details[o.value])+" "+l(o.name),1)]),_:2},1032,["icon"]))),128))],2)])):u("",!0),e("div",{class:n(["row col-12",r.$q.screen.lt.md?"justify-center":"justify-end"])},[(a(!0),i(g,null,v(t.contactNumber,(o,s)=>(a(),m(B,{color:"primary","text-color":"white",key:s},{default:d(()=>[e("a",{href:"https://wa.me/"+o.contact+"?text="+encodeURIComponent(t.whatsAppEnquiries),target:"_blank"},[_(w,{src:"/images/amber_whatsapp.png",alt:"",width:"20px"}),e("span",H,l(o.name),1)],8,E)]),_:2},1024))),128))],2)],2)]),e("div",z,[e("div",G,[t.propertyDetails.banner_image?(a(),i("div",U,[e("div",{class:n(["col-12",t.propertyDetails.details?"col-lg-9":""])},[_(w,{src:t.propertyDetails.banner_image.url,class:"rounded-lg",ratio:16/9},null,8,["src"])],2),t.propertyDetails.details?(a(),i("div",W,[_(j,{class:"my-card flex flex-col justify-center h-full"},{default:d(()=>[(a(!0),i(g,null,v(t.propertyDetailsSection,(o,s)=>(a(),m(S,{key:s,class:"q-pb-sm"},{default:d(()=>[e("div",J,l(o.name),1),e("div",K,l(o.front_label)+" "+l(o.value=="price"?t.propertyDetails[o.value]:t.propertyDetails.details[o.value])+" "+l(o.label),1)]),_:2},1024))),128))]),_:1})])):u("",!0)])):u("",!0),e("div",X,[t.propertyDetails.slider_image?(a(),i("div",Y,[_(f,{options:t.sliderOptions,"aria-label":"My Favorite Images"},{default:d(()=>[(a(!0),i(g,null,v(t.propertyDetails.slider_image,(o,s)=>(a(),m(y,{key:s},{default:d(()=>[_(w,{src:o.url,class:"h-full",fit:"contain"},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["options"])])):u("",!0)])]),e("div",Z,[e("div",{class:n(["col-12 bg-secondary rounded row p-6 row q-gutter-y-md",r.$q.screen.lt.md?"text-center p-4":"text-left p-10"])},[e("div",$,[ee,e("span",null,l(t.propertyDetails.short_description),1)])],2)])]),e("div",{class:n(["col-12 row q-gutter-y-md bg-primary text-white rounded-lg",r.$q.screen.lt.md?"text-center p-4":"text-left p-10"]),"data-aos":"fade-up"},[te,e("div",{class:"col-12",innerHTML:t.propertyDetails.description},null,8,oe)],2)])]),_:1})}const ve=P(M,[["render",se]]);export{ve as default};
