import{am as M,z as w,m as i,u as m,A as t,q as r,y as e,D as y,F as g,O as C,n as S,E as u,r as P,l as h,R as f,an as j,o as z,P as Q,L as R,M as E,a6 as H,e as N}from"./ckeditor-e046e440.js";import{Q as $}from"./QBtn-1da1afde.js";import{Q as O}from"./QBtnGroup-936986dc.js";import{Q as b}from"./QCardSection-f92e077f.js";import{Q as U}from"./QInput-e8c9055f.js";import{Q as F}from"./QCard-666f7f30.js";import{Q as x}from"./vm-8712a45d.js";import{Q as I,a as k}from"./portal-d5db9dda.js";import{Q as L,a as G}from"./QSeparator-af46fafe.js";import{Q as W}from"./QSpace-c3493005.js";import{Q as Y}from"./QCardActions-d2a46800.js";import{Q as A}from"./QDialog-a562aaf2.js";import{u as D}from"./index-64b6079b.js";import{Q as J}from"./QImg-a35f4fb0.js";import{Q as q}from"./QTooltip-a0adf78f.js";import{_ as K}from"./BaseLayout-c7ec62d0.js";import{u as X}from"./auth-8ecf675a.js";import"./uid-6a237b22.js";import"./focus-manager-cb626d5f.js";import"./use-timeout-56f147b6.js";import"./use-tick-c906425b.js";import"./position-engine-81d96713.js";import"./QHeader-21375be5.js";import"./QScrollArea-b5718d6e.js";import"./ClosePopup-d483b431.js";import"./dayjs.min-b6f4d8a8.js";const Z={data(){return{formInput:{search:"",searchType:"buy",propertyTypes:[],selectedState:{}},selectedPropertyTypes:[],propertyTypeFilterOptions:[],propertyTypeFilterDialog:!1,stateFilterOptions:[],stateFilterDialog:!1}},computed:{...M(D),propertyTypeFilterLabel(){return"Property Types ("+this.formInput.propertyTypes.filter(o=>o.id!=null).length+")"}},created(){this.propertyTypeFilterOptions=[],this.formInput.propertyTypes=[],this.formInput.state={id:null,name:"All State"},this.fetchPropertyFilterOptionGroup()},methods:{setSearchType(o){this.formInput.searchType=o},searchProperty(){const{searchType:o,search:l,propertyTypes:d,state:n}=this.formInput,c=d.findIndex(s=>s.id===null)!==-1;let p;c?p=0:p=d.map(s=>s.id).join(","),this.$router.push({name:"property.list",query:{t:o,s:l,pt:p,state:n.id}})},async fetchPropertyFilterOptionGroup(){const o={propertyTypes:1,states:1},l=await this.property_webStore.fetchPropertyFilterOptionGroup(o),d=l.property_types.map(n=>({id:n.id,name:n.name}));this.propertyTypeFilterOptions=[...d],this.formInput.propertyTypes=this.propertyTypeFilterOptions.map(n=>n),this.selectedPropertyTypes=this.propertyTypeFilterOptions.map(n=>n),this.stateFilterOptions=[{id:null,name:"All State"},...l.states]},openFilterDialog(){this.selectedPropertyTypes=this.formInput.propertyTypes.map(o=>o),this.propertyTypeFilterDialog=!0},applyFilters(){this.formInput.propertyTypes=this.selectedPropertyTypes.map(o=>o),this.propertyTypeFilterDialog=!1},selectPropertyType(o){const l=this.selectedPropertyTypes.findIndex(d=>d.id===o.id);l===-1?this.selectedPropertyTypes.push(o):this.selectedPropertyTypes.splice(l,1)},openStateDialog(){this.stateFilterDialog=!0},selectState(o){this.formInput.state=o,this.stateFilterDialog=!1}}},ee={class:"row justify-center"},te={class:"col col-6 col-sm-5 col-md-4 col-lg-3"},oe={class:"row"},se={class:"col"},re={class:"col col-auto"},le={class:"row justify-center"},ne={class:"col col-auto"},ae={class:"col col-auto pl-2 md:pl-4"},ie=e("div",{class:"text-center text-primary"},"Property Type",-1),ce=e("hr",null,null,-1),de=e("hr",null,null,-1),pe=e("div",{class:"text-center text-primary"},"State",-1),ue=e("hr",null,null,-1);function me(o,l,d,n,c,p){return i(),m(g,null,[t(F,{class:"p-3 md:p-8",square:"",style:{"background-color":"#0e2638"}},{default:r(()=>[t(b,null,{default:r(()=>[e("div",ee,[e("div",te,[t(O,{modelValue:c.formInput.searchType,"onUpdate:modelValue":l[2]||(l[2]=s=>c.formInput.searchType=s),rounded:"",class:"fill-width"},{default:r(()=>[t($,{rounded:"",color:c.formInput.searchType=="buy"?"primary":"white text-black",label:"Buy",class:"text-capitalize fill-width",onClick:l[0]||(l[0]=s=>p.setSearchType("buy"))},null,8,["color"]),t($,{rounded:"",color:c.formInput.searchType=="rent"?"primary":"white text-black",label:"Rent",class:"text-capitalize fill-width",onClick:l[1]||(l[1]=s=>p.setSearchType("rent"))},null,8,["color"])]),_:1},8,["modelValue"])])])]),_:1}),t(b,null,{default:r(()=>[e("div",null,[e("div",oe,[e("div",se,[t(U,{modelValue:c.formInput.search,"onUpdate:modelValue":l[3]||(l[3]=s=>c.formInput.search=s),placeholder:"Search Property",outlined:"",class:"bg-white",style:{"border-top-left-radius":"15px","border-bottom-left-radius":"15px"}},null,8,["modelValue"])]),e("div",re,[t($,{color:"primary",class:"fill-height text-capitalize",style:{"border-top-right-radius":"15px","border-bottom-right-radius":"15px"},onClick:p.searchProperty},{default:r(()=>[y("Search")]),_:1},8,["onClick"])])])])]),_:1}),t(b,{class:"text-white"},{default:r(()=>{var s;return[e("div",le,[e("div",ne,[t($,{flat:"",dense:"",color:"white",label:p.propertyTypeFilterLabel,"icon-right":"expand_more",class:"text-capitalize",onClick:p.openFilterDialog},null,8,["label","onClick"])]),e("div",ae,[t($,{flat:"",dense:"",color:"white",label:(s=c.formInput.state)==null?void 0:s.name,"icon-right":"expand_more",class:"text-capitalize",onClick:p.openStateDialog},null,8,["label","onClick"])])])]}),_:1})]),_:1}),t(A,{modelValue:c.propertyTypeFilterDialog,"onUpdate:modelValue":l[4]||(l[4]=s=>c.propertyTypeFilterDialog=s)},{default:r(()=>[t(F,null,{default:r(()=>[t(b,null,{default:r(()=>[ie]),_:1}),ce,t(b,{style:{"overflow-y":"auto","max-height":"65vh",padding:"0"}},{default:r(()=>[t(L,{style:{"min-width":"280px"}},{default:r(()=>[(i(!0),m(g,null,C(c.propertyTypeFilterOptions,s=>(i(),m(g,{key:s.id},[s.id!=null?(i(),S(I,{key:0,clickable:"",onClick:_=>p.selectPropertyType(s)},{default:r(()=>[t(k,{avatar:""},{default:r(()=>[t(x,{name:c.selectedPropertyTypes.findIndex(_=>_.id==s.id)!==-1?"check_box":"check_box_outline_blank"},null,8,["name"])]),_:2},1024),t(k,null,{default:r(()=>[y(u(s.name),1)]),_:2},1024)]),_:2},1032,["onClick"])):(i(),S(I,{key:1,clickable:"",onClick:_=>p.selectPropertyType(s)},{default:r(()=>[t(k,{class:"font-bold"},{default:r(()=>[y(u(s.name),1)]),_:2},1024),t(k,{avatar:""},{default:r(()=>[t(x,{name:c.selectedPropertyTypes.findIndex(_=>_.id==s.id)!==-1?"check_box":"check_box_outline_blank"},null,8,["name"])]),_:2},1024)]),_:2},1032,["onClick"]))],64))),128))]),_:1})]),_:1}),de,t(Y,null,{default:r(()=>[t(W),t($,{label:"Apply Filters",class:"text-capitalize",color:"primary",onClick:p.applyFilters},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(A,{modelValue:c.stateFilterDialog,"onUpdate:modelValue":l[5]||(l[5]=s=>c.stateFilterDialog=s)},{default:r(()=>[t(F,null,{default:r(()=>[t(b,null,{default:r(()=>[pe]),_:1}),ue,t(b,{style:{"overflow-y":"auto","max-height":"65vh",padding:"0"}},{default:r(()=>[t(L,{style:{"min-width":"280px"}},{default:r(()=>[(i(!0),m(g,null,C(c.stateFilterOptions,s=>(i(),S(I,{key:s.id,clickable:"",onClick:_=>p.selectState(s)},{default:r(()=>[t(k,{avatar:""},{default:r(()=>[t(x,{name:this.formInput.state.id==s.id?"radio_button_checked":"radio_button_unchecked"},null,8,["name"])]),_:2},1024),t(k,{class:"font-bold"},{default:r(()=>[y(u(s.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const _e=w(Z,[["render",me]]),ye={components:{SearchCard:_e},setup(){return{payload:P({name:"",email:""})}}},fe={class:"header-content uppercase"},he={class:"col col-auto flex items-center justify-center"},xe=["src"],ve=j('<div class="col col-auto row items-center"><div class="col-12"><div class="text-2xl">amber realty</div><div class="pt-2" style="text-wrap:nowrap;"> E-(3)1482 </div></div></div><div class="col col-auto flex flex-col items-center justify-center"><img src="/images/amber_lppeh_logo.png" alt="" width="55"><div class="text-center">E-2346</div></div>',2),be=e("div",{class:"text-lg md:text-5xl font-bold"},[y(" Are You Looking For "),e("div",{class:"header-title pt-2"})],-1),ge=e("div",{class:"text-sm"}," Are you ready to start the search for your dream home? Look no further than Amber Realty Real Estate. ",-1),we={class:"col-12 col-md-6"};function $e(o,l,d,n,c,p){const s=h("SearchCard");return i(),m("div",{class:f(["banner-background",o.$q.screen.lt.md?"h-full":"h-[700px] flex items-center"])},[e("div",{class:f(["row container mx-auto flex items-center",o.$q.screen.lt.md?"gap-4":"p-4"])},[e("div",{class:f(["col-12 col-md-6 flex flex-col gap-6 justify-center px-4 text-white",o.$q.screen.lt.md?"text-center hidden":""]),"data-aos":"flip-left"},[e("div",fe,[e("div",{class:f(["row uppercase text-sm font-bold gap-6",o.$q.screen.lt.md?"justify-center":""])},[e("div",he,[e("img",{src:o.mainLogo,alt:"",width:"100"},null,8,xe)]),ve],2)]),be,ge],2),e("div",we,[t(s)])],2)],2)}const ke=w(ye,[["render",$e]]);const Se={class:"col-12 row"},Ce={key:0,class:"col-12 row !flex-nowrap overflow-scroll md:overflow-auto overflow-y-hidden"},Te={class:"relative"},Pe={class:"absolute top-4 left-5 bg-secondary font-bold px-6 py-2 rounded capitalize"},Fe={class:"col-12 text-lg flex items-center justify-between"},Ie={class:"col-12 text-xl font-bold latest-property__name"},qe={class:"col-12 text-subtitle2 latest-property__descriptions"},Qe={key:0,class:"flex gap-4"},Le={class:"align-middle text-lg"},Ae={class:"align-middle text-lg"},je={class:"align-middle text-lg"},ze={key:1,class:"col-12"},De=e("h5",{class:"text-center text-white font-bold"}," Latest Property Not Available ",-1),Be=[De],Ve={__name:"LatestComponent",setup(o){const l=D(),d={limit:4},n=P([]),c=async()=>{const s=await l.fetchLatestProperty(d);return n.value=s,s},p=(s,_="RM")=>{const v=s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return`${_}${v}`};return z(()=>{c()}),(s,_)=>{const v=h("router-link");return i(),m("div",Se,[n.value.length>0?(i(),m("div",Ce,[(i(!0),m(g,null,C(n.value,(a,T)=>(i(),m("div",{class:"col-10 col-sm-6 col-md-3 p-2",key:T},[t(v,{to:"property/details/"+a.id},{default:r(()=>[t(F,{class:"my-card h-[350px] xl:h-[375px]"},{default:r(()=>[e("div",Te,[t(J,{src:a.banner?a.banner.image.url:"https://cdn.quasar.dev/img/parallax2.jpg",ratio:16/9,fit:"contain"},null,8,["src"]),e("div",Pe," For "+u(a.listing_type),1)]),t(b,{class:"row gap-2"},{default:r(()=>[e("div",Fe,[e("div",null,u(p(a.price,"RM ")),1)]),e("div",Ie,[y(u(a.name)+" ",1),t(q,{"max-width":"350px"},{default:r(()=>[y(u(a.name),1)]),_:2},1024)]),e("div",qe,[y(u(a.short_description)+" ",1),t(q,{"max-width":"350px"},{default:r(()=>[y(u(a.short_description),1)]),_:2},1024)])]),_:2},1024),t(b,{class:f(["q-pt-none",s.$q.screen.lt.md?"":"h-[75px]"])},{default:r(()=>[a.details_toggle?(i(),m("div",Qe,[e("div",null,[e("span",Le,u(a.details.bedroom),1),t(x,{name:"bed",size:"22px",class:"pl-1"})]),e("div",null,[e("span",Ae,u(a.details.bathroom),1),t(x,{name:"bathtub",size:"22px",class:"pl-1"})]),e("div",null,[e("span",je,u(a.details.car_park),1),t(x,{name:"directions_car",size:"22px",class:"pl-1"})])])):Q("",!0)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to"])]))),128))])):(i(),m("div",ze,Be))])}}},Me={components:{LatestComponent:Ve}},Re={class:"bg-primary"},Ee={class:"row container mx-auto gap-10 py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px]"},He={class:"col col-auto font-bold text-white text-sm",style:{"text-wrap":"nowrap"}};function Ne(o,l,d,n,c,p){const s=h("router-link"),_=h("LatestComponent");return i(),m("div",Re,[e("div",Ee,[e("div",{class:f(["col-12 px-2 row items-center gap-2",o.$q.screen.lt.sm?"justify-center":"justify-between"])},[e("div",{class:f(["col col-auto text-xl md:text-4xl font-bold text-white",o.$q.screen.lt.md?"text-center":""])}," Explore Our Latest Properties ",2),e("div",He,[t(s,{to:{name:"property.list"}},{default:r(()=>[y("See All Property")]),_:1},8,["to"])])],2),t(_)])])}const Oe=w(Me,[["render",Ne]]);const Ue={setup(){const o=P({}),l=0,d=5;return o.value=[{title:"11",content:"Years in the industry",quote:"+"},{title:"100",content:"Customer satisfaction",quote:"%"},{title:"5",content:"Properties sold",quote:"K"},{title:"1",content:"Country served",quote:""}],{payload:o,numberInit:l,numberDuration:d}}},Ge={class:"bg-primary"},We={class:"container mx-auto row social-proof-container mx-auto flex justify-center items-center text-white gap-y-6"};function Ye(o,l,d,n,c,p){const s=h("number");return i(),m("div",Ge,[e("div",We,[(i(!0),m(g,null,C(n.payload,(_,v)=>(i(),m("div",{class:"col-6 col-md-3 text-center q-gutter-y-sm",key:v},[e("div",{class:f(["font-bold",o.$q.screen.lt.sm?"text-4xl":"text-7xl"])},[t(s,{class:"bold transition",ref_for:!0,ref:"number2",from:n.numberInit,to:_.title||n.numberInit,duration:n.numberDuration},null,8,["from","to","duration"]),y(u(_.quote),1)],2),e("div",{class:f(o.$q.screen.lt.sm?"text-md":"text-lg")},u(_.content),3)]))),128))])])}const Je=w(Ue,[["render",Ye]]);const Ke={},Xe={class:"bg-secondary"},Ze=j('<div class="col-12 col-md-7 text-2xl md:text-4xl font-bold"> Contact Us to Start Your Real Estate Journey ! </div><div class="col-12 col-md-3 text-center text-xl font-bold text-white" style="width:250px;"><a href="https://wa.me/60123729668?text=I&#39;m%20interested%20in%20property%20for%20sale" target="_blank"><div class="bg-primary px-8 py-4 rounded row"><div class="col-2"><img src="/images/amber_whatsapp.png" alt="" width="55"></div><div class="col-10">0123729668</div></div></a></div>',2),et=[Ze];function tt(o,l){return i(),m("div",Xe,[e("div",{class:f(["row justify-around items-center container mx-auto q-gutter-y-lg call-to-action-container",o.$q.screen.lt.md?"text-center":""])},et,2)])}const ot=w(Ke,[["render",tt]]),st={setup(){const o=P([]);return o.value=[{title:"Innovate for Exceptional Service",description:"Commitment in business through innovation <br> to provide exceptional customer service.",icon:"home"},{title:"Build Strong Connections",description:"Build lifetime relationships <br> with our customers and communities.",icon:"real_estate_agent"},{title:"Maximize Business Success",description:"Optimize relationships,<br>service and profitability.",icon:"key"}],{missionStatement:o}}},rt={class:""},lt={class:"row container mx-auto py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px] justify-between gap-6"},nt={class:"col-12"},at={class:"w-[125px] h-[125px] m-auto rounded-full flex justify-center items-center bg-secondary"},it={class:"col-12 text-xl font-bold h-[50px] text-white"},ct=["innerHTML"];function dt(o,l,d,n,c,p){return i(),m("div",rt,[e("div",lt,[e("div",{class:f(["col-12 text-xl md:text-4xl font-bold pb-8",o.$q.screen.lt.md?"text-center":""])}," Mission Statement ",2),(i(!0),m(g,null,C(n.missionStatement,(s,_)=>(i(),m("div",{class:"col-12 col-md-3 text-center py-12 px-8 row gap-8 border rounded-lg bg-primary",key:_,"data-aos":"flip-left","data-aos-duration":"1500"},[e("div",nt,[e("div",at,[t(x,{name:s.icon,size:"64px"},null,8,["name"])])]),e("div",it,u(s.title),1),e("div",{class:"col-12 h-[50px] text-white",innerHTML:s.description},null,8,ct)]))),128))])])}const pt=w(st,[["render",dt]]);const ut={props:["highlights"],setup(){return{numberFormat:(l,d="RM")=>{const n=l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return`${d}${n}`}}}},mt={class:"container mx-auto py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px]"},_t={class:"row"},yt={class:"col-12 p-2 md:p-0"},ft={class:"col-12 row"},ht={class:"col-12 col-md-6 col-lg-7 grid place-items-center"},xt=["src"],vt={class:"col-12 col-md-6 col-lg-5 featured-container flex flex-col gap-4 md:gap-10 py-8 md:px-10 md:py-6 justify-center lg:border rounded-lg"},bt={class:"text-xl md:text-4xl font-bold"},gt={class:"text-sm featured-property__descriptions"},wt={class:"row items-center"},$t={class:"col col-auto text-center"},kt={class:"col col-auto text-center"},St={class:"col col-auto text-center"};function Ct(o,l,d,n,c,p){const s=h("router-link"),_=h("SplideSlide"),v=h("Splide");return i(),m("div",mt,[e("div",_t,[e("div",{class:f(["col-12 text-xl md:text-4xl font-bold pb-8",o.$q.screen.lt.md?"text-center":""])}," Highlight ",2),e("div",yt,[t(v,{options:{rewind:!0,type:"fade"},"aria-label":"My Favorite Images"},{default:r(()=>[(i(!0),m(g,null,C(d.highlights,(a,T)=>(i(),S(_,{key:T},{default:r(()=>[e("div",ft,[e("div",ht,[t(s,{to:{name:"property.details",params:{id:a.id}}},{default:r(()=>[e("img",{src:a.property.banner?a.property.banner.image.url:"https://cdn.quasar.dev/img/mountains.jpg",class:"object-cover rounded-lg h-[325px] lg:h-[600px]"},null,8,xt)]),_:2},1032,["to"])]),e("div",vt,[e("div",{class:f(["pb-3 featured-content flex flex-col gap-6 md:gap-10",o.$q.screen.lt.md?"text-center":""])},[e("div",bt,u(a.property.name),1),e("div",gt,[y(u(a.property.short_description)+" ",1),t(q,null,{default:r(()=>[y(u(a.property.short_description),1)]),_:2},1024)]),t(G,{color:"grey-4"}),e("div",{class:f(["text-sm bg-primary text-center px-4 py-2 font-bold rounded text-white w-[120px] capitalize",o.$q.screen.lt.md?"m-auto":""])}," For "+u(a.property.listing_type),3)],2),e("div",wt,[e("div",{class:f(["col-12 col-md-5 text-xl md:text-4xl font-bold properties-content",o.$q.screen.lt.md?"text-center":"text-left"]),style:{"text-wrap":"nowrap"}},u(n.numberFormat(a.property.price,"RM ")),3)]),a.property.property_detail?(i(),m("div",{key:0,class:f(["row gap-4",o.$q.screen.lt.md?"justify-center":"justify-left"])},[e("div",$t,[e("div",null,[t(x,{name:"bed",size:"32px"})]),y(" "+u(a.property.property_detail.bedroom)+" Bedrooms ",1)]),e("div",kt,[e("div",null,[t(x,{name:"bathroom",size:"32px"})]),y(" "+u(a.property.property_detail.bathroom)+" Bathrooms ",1)]),e("div",St,[e("div",null,[t(x,{name:"dashboard",size:"32px"})]),y(" "+u(a.property.property_detail.square_feet)+" sqft ",1)])],2)):Q("",!0)])])]),_:2},1024))),128))]),_:1})])])])}const Tt=w(ut,[["render",Ct]]),Pt="/api/property/",Ft=R("property_web_store",{state:()=>({post_table_web:null,router:E(),route:H()}),actions:{async fetchHighlights(o){const l={headers:{Authorization:`Bearer ${o}`}};try{return(await N.get(Pt+"highlights",{...l})).data.data}catch(d){throw console.error("Error:",d),d}}}}),It={components:{BaseLayout:K,HeaderContainer:ke,FeaturedComponent:Tt,PropertiesContainer:Oe,SocialProof:Je,CallToAction:ot,MissionStatement:pt},setup(){const o=P([]),d=X().fetchSessionToken(),n=Ft(),c=async()=>{const p=await n.fetchHighlights(d);o.value=p};return z(()=>{c()}),{highlights:o}}};function qt(o,l,d,n,c,p){const s=h("HeaderContainer"),_=h("PropertiesContainer"),v=h("FeaturedComponent"),a=h("MissionStatement"),T=h("SocialProof"),B=h("CallToAction"),V=h("BaseLayout");return i(),S(V,null,{content:r(()=>[t(s,{"data-aos":"fade-up"}),t(_),n.highlights.length>0?(i(),S(v,{key:0,highlights:n.highlights},null,8,["highlights"])):Q("",!0),t(a),t(T),t(B)]),_:1})}const ro=w(It,[["render",qt]]);export{ro as default};
