import{am as N,z as P,m as n,u as p,A as e,q as r,y as t,D as y,F as v,O as k,n as C,E as m,r as b,l as g,R as f,an as V,o as B,P as L,L as H,M as O,a6 as U,e as G}from"./ckeditor-e046e440.js";import{Q as S}from"./QBtn-1da1afde.js";import{Q as W}from"./QBtnGroup-936986dc.js";import{Q as h}from"./QCardSection-f92e077f.js";import{Q as Y}from"./QInput-e8c9055f.js";import{Q as I}from"./QCard-666f7f30.js";import{Q as w}from"./vm-8712a45d.js";import{Q,a as T}from"./portal-d5db9dda.js";import{Q as D,a as j}from"./QSeparator-af46fafe.js";import{Q as J}from"./QSpace-c3493005.js";import{Q as K}from"./QCardActions-d2a46800.js";import{Q as z}from"./QDialog-a562aaf2.js";import{u as M}from"./index-64b6079b.js";import{Q as X}from"./QImg-a35f4fb0.js";import{Q as q}from"./QTooltip-a0adf78f.js";import{_ as Z}from"./BaseLayout-9eb8f943.js";import{u as ee}from"./auth-8ecf675a.js";import"./uid-6a237b22.js";import"./focus-manager-cb626d5f.js";import"./use-timeout-56f147b6.js";import"./use-tick-c906425b.js";import"./position-engine-81d96713.js";import"./QHeader-21375be5.js";import"./QScrollArea-b5718d6e.js";import"./ClosePopup-d483b431.js";import"./dayjs.min-b6f4d8a8.js";const te={data(){return{formInput:{search:"",searchType:"buy",propertyTypes:[],selectedState:{}},selectedPropertyTypes:[],propertyTypeFilterOptions:[],propertyTypeFilterDialog:!1,stateFilterOptions:[],stateFilterDialog:!1}},computed:{...N(M),propertyTypeFilterLabel(){return"Property Types ("+this.formInput.propertyTypes.filter(s=>s.id!=null).length+")"}},created(){this.propertyTypeFilterOptions=[],this.formInput.propertyTypes=[],this.formInput.state={id:null,name:"All State"},this.fetchPropertyFilterOptionGroup()},methods:{setSearchType(s){this.formInput.searchType=s},searchProperty(){const{searchType:s,search:l,propertyTypes:d,state:i}=this.formInput,a=d.findIndex(o=>o.id===null)!==-1;let c;a?c=0:c=d.map(o=>o.id).join(","),this.$router.push({name:"property.list",query:{t:s,s:l,pt:c,state:i.id}})},async fetchPropertyFilterOptionGroup(){const s={propertyTypes:1,states:1},l=await this.property_webStore.fetchPropertyFilterOptionGroup(s),d=l.property_types.map(i=>({id:i.id,name:i.name}));this.propertyTypeFilterOptions=[...d],this.formInput.propertyTypes=this.propertyTypeFilterOptions.map(i=>i),this.selectedPropertyTypes=this.propertyTypeFilterOptions.map(i=>i),this.stateFilterOptions=[{id:null,name:"All State"},...l.states]},openFilterDialog(){this.selectedPropertyTypes=this.formInput.propertyTypes.map(s=>s),this.propertyTypeFilterDialog=!0},applyFilters(){this.formInput.propertyTypes=this.selectedPropertyTypes.map(s=>s),this.propertyTypeFilterDialog=!1},selectPropertyType(s){const l=this.selectedPropertyTypes.findIndex(d=>d.id===s.id);l===-1?this.selectedPropertyTypes.push(s):this.selectedPropertyTypes.splice(l,1)},openStateDialog(){this.stateFilterDialog=!0},selectState(s){this.formInput.state=s,this.stateFilterDialog=!1}}},oe={class:"row justify-center"},se={class:"col col-6 col-sm-5 col-md-4 col-lg-3"},re={class:"row"},le={class:"col"},ne={class:"col col-auto"},ae={class:"row justify-center"},ie={class:"col col-auto"},ce={class:"col col-auto pl-2 md:pl-4"},pe=t("div",{class:"text-center text-primary"},"Property Type",-1),de=t("hr",null,null,-1),ue=t("hr",null,null,-1),me=t("div",{class:"text-center text-primary"},"State",-1),_e=t("hr",null,null,-1);function ye(s,l,d,i,a,c){return n(),p(v,null,[e(I,{class:"p-3 md:p-8",square:"",style:{"background-color":"#0e2638"}},{default:r(()=>[e(h,null,{default:r(()=>[t("div",oe,[t("div",se,[e(W,{modelValue:a.formInput.searchType,"onUpdate:modelValue":l[2]||(l[2]=o=>a.formInput.searchType=o),rounded:"",class:"fill-width"},{default:r(()=>[e(S,{rounded:"",color:a.formInput.searchType=="buy"?"primary":"white text-black",label:"Buy",class:"text-capitalize fill-width",onClick:l[0]||(l[0]=o=>c.setSearchType("buy"))},null,8,["color"]),e(S,{rounded:"",color:a.formInput.searchType=="rent"?"primary":"white text-black",label:"Rent",class:"text-capitalize fill-width",onClick:l[1]||(l[1]=o=>c.setSearchType("rent"))},null,8,["color"])]),_:1},8,["modelValue"])])])]),_:1}),e(h,null,{default:r(()=>[t("div",null,[t("div",re,[t("div",le,[e(Y,{modelValue:a.formInput.search,"onUpdate:modelValue":l[3]||(l[3]=o=>a.formInput.search=o),placeholder:"Search Property",outlined:"",class:"bg-white",style:{"border-top-left-radius":"15px","border-bottom-left-radius":"15px"}},null,8,["modelValue"])]),t("div",ne,[e(S,{color:"primary",class:"fill-height text-capitalize",style:{"border-top-right-radius":"15px","border-bottom-right-radius":"15px"},onClick:c.searchProperty},{default:r(()=>[y("Search")]),_:1},8,["onClick"])])])])]),_:1}),e(h,{class:"text-white"},{default:r(()=>{var o;return[t("div",ae,[t("div",ie,[e(S,{flat:"",dense:"",color:"white",label:c.propertyTypeFilterLabel,"icon-right":"expand_more",class:"text-capitalize",onClick:c.openFilterDialog},null,8,["label","onClick"])]),t("div",ce,[e(S,{flat:"",dense:"",color:"white",label:(o=a.formInput.state)==null?void 0:o.name,"icon-right":"expand_more",class:"text-capitalize",onClick:c.openStateDialog},null,8,["label","onClick"])])])]}),_:1})]),_:1}),e(z,{modelValue:a.propertyTypeFilterDialog,"onUpdate:modelValue":l[4]||(l[4]=o=>a.propertyTypeFilterDialog=o)},{default:r(()=>[e(I,null,{default:r(()=>[e(h,null,{default:r(()=>[pe]),_:1}),de,e(h,{style:{"overflow-y":"auto","max-height":"65vh",padding:"0"}},{default:r(()=>[e(D,{style:{"min-width":"280px"}},{default:r(()=>[(n(!0),p(v,null,k(a.propertyTypeFilterOptions,o=>(n(),p(v,{key:o.id},[o.id!=null?(n(),C(Q,{key:0,clickable:"",onClick:u=>c.selectPropertyType(o)},{default:r(()=>[e(T,{avatar:""},{default:r(()=>[e(w,{name:a.selectedPropertyTypes.findIndex(u=>u.id==o.id)!==-1?"check_box":"check_box_outline_blank"},null,8,["name"])]),_:2},1024),e(T,null,{default:r(()=>[y(m(o.name),1)]),_:2},1024)]),_:2},1032,["onClick"])):(n(),C(Q,{key:1,clickable:"",onClick:u=>c.selectPropertyType(o)},{default:r(()=>[e(T,{class:"font-bold"},{default:r(()=>[y(m(o.name),1)]),_:2},1024),e(T,{avatar:""},{default:r(()=>[e(w,{name:a.selectedPropertyTypes.findIndex(u=>u.id==o.id)!==-1?"check_box":"check_box_outline_blank"},null,8,["name"])]),_:2},1024)]),_:2},1032,["onClick"]))],64))),128))]),_:1})]),_:1}),ue,e(K,null,{default:r(()=>[e(J),e(S,{label:"Apply Filters",class:"text-capitalize",color:"primary",onClick:c.applyFilters},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(z,{modelValue:a.stateFilterDialog,"onUpdate:modelValue":l[5]||(l[5]=o=>a.stateFilterDialog=o)},{default:r(()=>[e(I,null,{default:r(()=>[e(h,null,{default:r(()=>[me]),_:1}),_e,e(h,{style:{"overflow-y":"auto","max-height":"65vh",padding:"0"}},{default:r(()=>[e(D,{style:{"min-width":"280px"}},{default:r(()=>[(n(!0),p(v,null,k(a.stateFilterOptions,o=>(n(),C(Q,{key:o.id,clickable:"",onClick:u=>c.selectState(o)},{default:r(()=>[e(T,{avatar:""},{default:r(()=>[e(w,{name:this.formInput.state.id==o.id?"radio_button_checked":"radio_button_unchecked"},null,8,["name"])]),_:2},1024),e(T,{class:"font-bold"},{default:r(()=>[y(m(o.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const he=P(te,[["render",ye]]),fe={components:{SearchCard:he},setup(){return{payload:b({name:"",email:""})}}},xe={class:"header-content uppercase"},ve={class:"col col-auto flex items-center justify-center"},be=["src"],ge=V('<div class="col col-auto row items-center"><div class="col-12"><div class="text-2xl">amber realty</div><div class="pt-2" style="text-wrap:nowrap;"> E-(3)1482 </div></div></div><div class="col col-auto flex flex-col items-center justify-center"><img src="/images/amber_lppeh_logo.png" alt="" width="55"><div class="text-center">E-2346</div></div>',2),we=t("div",{class:"text-lg md:text-5xl font-bold"},[y(" Are You Looking For "),t("div",{class:"header-title pt-2"})],-1),$e=t("div",{class:"text-sm"}," Are you ready to start the search for your dream home? Look no further than Amber Realty Real Estate. ",-1),ke={class:"col-12 col-md-6"};function Se(s,l,d,i,a,c){const o=g("SearchCard");return n(),p("div",{class:f(["banner-background",s.$q.screen.lt.md?"h-full":"h-[700px] flex items-center"])},[t("div",{class:f(["row container mx-auto flex items-center",s.$q.screen.lt.md?"gap-4":"p-4"])},[t("div",{class:f(["col-12 col-md-6 flex flex-col gap-6 justify-center px-4 text-white",s.$q.screen.lt.md?"text-center hidden":""]),"data-aos":"flip-left"},[t("div",xe,[t("div",{class:f(["row uppercase text-sm font-bold gap-6",s.$q.screen.lt.md?"justify-center":""])},[t("div",ve,[t("img",{src:s.mainLogo,alt:"",width:"100"},null,8,be)]),ge],2)]),we,$e],2),t("div",ke,[e(o)])],2)],2)}const Te=P(fe,[["render",Se]]);const Ce={class:"col-12 row"},Pe={key:0,class:"col-12 row !flex-nowrap overflow-scroll md:overflow-auto overflow-y-hidden"},Ie={class:"relative"},Fe={class:"absolute top-4 left-5 bg-secondary font-bold px-6 py-2 rounded capitalize"},Qe={class:"col-12 text-lg flex items-center justify-between"},qe={class:"col-12 text-xl font-bold latest-property__name"},Le={class:"col-12 text-subtitle2 latest-property__descriptions"},Ae={key:0,class:"flex gap-4"},De={class:"align-middle text-lg"},je={class:"align-middle text-lg"},ze={class:"align-middle text-lg"},Ve={key:1,class:"col-12"},Be=t("h5",{class:"text-center text-white font-bold"}," Latest Property Not Available ",-1),Me=[Be],Re={__name:"LatestComponent",setup(s){const l=M(),d={limit:4},i=b([]),a=async()=>{const o=await l.fetchLatestProperty(d);return i.value=o,o},c=(o,u="RM")=>{const $=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return`${u}${$}`};return B(()=>{a()}),(o,u)=>{const $=g("router-link");return n(),p("div",Ce,[i.value.length>0?(n(),p("div",Pe,[(n(!0),p(v,null,k(i.value,(_,F)=>(n(),p("div",{class:"col-10 col-sm-6 col-md-3 p-2",key:F},[e($,{to:"property/details/"+_.id},{default:r(()=>[e(I,{class:"my-card h-[350px] xl:h-[375px]"},{default:r(()=>[t("div",Ie,[e(X,{src:_.banner?_.banner.image.url:"https://cdn.quasar.dev/img/parallax2.jpg",ratio:16/9,fit:"contain"},null,8,["src"]),t("div",Fe," For "+m(_.listing_type),1)]),e(h,{class:"row gap-2"},{default:r(()=>[t("div",Qe,[t("div",null,m(c(_.price,"RM ")),1)]),t("div",qe,[y(m(_.name)+" ",1),e(q,{"max-width":"350px"},{default:r(()=>[y(m(_.name),1)]),_:2},1024)]),t("div",Le,[y(m(_.short_description)+" ",1),e(q,{"max-width":"350px"},{default:r(()=>[y(m(_.short_description),1)]),_:2},1024)])]),_:2},1024),e(h,{class:f(["q-pt-none",o.$q.screen.lt.md?"":"h-[75px]"])},{default:r(()=>[_.details_toggle?(n(),p("div",Ae,[t("div",null,[t("span",De,m(_.details.bedroom),1),e(w,{name:"bed",size:"22px",class:"pl-1"})]),t("div",null,[t("span",je,m(_.details.bathroom),1),e(w,{name:"bathtub",size:"22px",class:"pl-1"})]),t("div",null,[t("span",ze,m(_.details.car_park),1),e(w,{name:"directions_car",size:"22px",class:"pl-1"})])])):L("",!0)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to"])]))),128))])):(n(),p("div",Ve,Me))])}}},Ee={components:{LatestComponent:Re}},Ne={class:"bg-primary"},He={class:"row container mx-auto gap-10 py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px]"},Oe={class:"col col-auto font-bold text-white text-sm",style:{"text-wrap":"nowrap"}};function Ue(s,l,d,i,a,c){const o=g("router-link"),u=g("LatestComponent");return n(),p("div",Ne,[t("div",He,[t("div",{class:f(["col-12 px-2 row items-center gap-2",s.$q.screen.lt.sm?"justify-center":"justify-between"])},[t("div",{class:f(["col col-auto text-xl md:text-4xl font-bold text-white",s.$q.screen.lt.md?"text-center":""])}," Explore Our Latest Properties ",2),t("div",Oe,[e(o,{to:{name:"property.list"}},{default:r(()=>[y("See All Property")]),_:1},8,["to"])])],2),e(u)])])}const Ge=P(Ee,[["render",Ue]]);const We={setup(){const s=b({}),l=0,d=5;return s.value=[{title:"11",content:"Years in the industry",quote:"+"},{title:"100",content:"Customer satisfaction",quote:"%"},{title:"5",content:"Properties sold",quote:"K"},{title:"1",content:"Country served",quote:""}],{payload:s,numberInit:l,numberDuration:d}}},Ye={class:"bg-primary"},Je={class:"container mx-auto row social-proof-container mx-auto flex justify-center items-center text-white gap-y-6"};function Ke(s,l,d,i,a,c){const o=g("number");return n(),p("div",Ye,[t("div",Je,[(n(!0),p(v,null,k(i.payload,(u,$)=>(n(),p("div",{class:"col-6 col-md-3 text-center q-gutter-y-sm",key:$},[t("div",{class:f(["font-bold",s.$q.screen.lt.sm?"text-4xl":"text-7xl"])},[e(o,{class:"bold transition",ref_for:!0,ref:"number2",from:i.numberInit,to:u.title||i.numberInit,duration:i.numberDuration},null,8,["from","to","duration"]),y(m(u.quote),1)],2),t("div",{class:f(s.$q.screen.lt.sm?"text-md":"text-lg")},m(u.content),3)]))),128))])])}const Xe=P(We,[["render",Ke]]);const Ze={},et={class:"bg-secondary"},tt=V('<div class="col-12 col-md-7 text-2xl md:text-4xl font-bold"> Contact Us to Start Your Real Estate Journey ! </div><div class="col-12 col-md-3 text-center text-xl font-bold text-white" style="width:250px;"><a href="https://wa.me/60123729668?text=I&#39;m%20interested%20in%20property%20for%20sale" target="_blank"><div class="bg-primary px-8 py-4 rounded row"><div class="col-2"><img src="/images/amber_whatsapp.png" alt="" width="55"></div><div class="col-10">0123729668</div></div></a></div>',2),ot=[tt];function st(s,l){return n(),p("div",et,[t("div",{class:f(["row justify-around items-center container mx-auto q-gutter-y-lg call-to-action-container",s.$q.screen.lt.md?"text-center":""])},ot,2)])}const rt=P(Ze,[["render",st]]),lt={setup(){const s=b([]);return s.value=[{title:"Innovate for Exceptional Service",description:"Commitment in business through innovation <br> to provide exceptional customer service.",icon:"home"},{title:"Build Strong Connections",description:"Build lifetime relationships <br> with our customers and communities.",icon:"real_estate_agent"},{title:"Maximize Business Success",description:"Optimize relationships,<br>service and profitability.",icon:"key"}],{missionStatement:s}}},nt={class:""},at={class:"row container mx-auto py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px] justify-between gap-6"},it={class:"col-12"},ct={class:"w-[125px] h-[125px] m-auto rounded-full flex justify-center items-center bg-secondary"},pt={class:"col-12 text-xl font-bold h-[50px] text-white"},dt=["innerHTML"];function ut(s,l,d,i,a,c){return n(),p("div",nt,[t("div",at,[t("div",{class:f(["col-12 text-xl md:text-4xl font-bold pb-8",s.$q.screen.lt.md?"text-center":""])}," Mission Statement ",2),(n(!0),p(v,null,k(i.missionStatement,(o,u)=>(n(),p("div",{class:"col-12 col-md-3 text-center py-12 px-8 row gap-8 border rounded-lg bg-primary",key:u,"data-aos":"flip-left","data-aos-duration":"1500"},[t("div",it,[t("div",ct,[e(w,{name:o.icon,size:"64px"},null,8,["name"])])]),t("div",pt,m(o.title),1),t("div",{class:"col-12 h-[50px] text-white",innerHTML:o.description},null,8,dt)]))),128))])])}const mt=P(lt,[["render",ut]]);const _t={class:"container mx-auto py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px]"},yt=["src"],ht={class:"flex justify-between items-center"},ft={class:"text-sm bg-primary text-center px-4 py-2 font-bold rounded text-white w-[90px] capitalize featured-property__title"},xt={key:0,class:"row gap-2"},vt={class:"align-middle text-sm"},bt={class:"text-h6"},gt={class:"text-subtitle2 featured-property__descriptions"},wt={class:"text-h6"},$t={__name:"FeaturedComponent",props:["highlights"],setup(s){const l=s,d=b(""),i=b({}),a=b([]),c=(o,u="RM")=>(d.value=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),`${u}${d.value}`);return i.value={type:"loop",perPage:3,focus:"center",breakpoints:{768:{perPage:1,arrows:!1}},autoplay:!0},a.value=[{icon:"bed",title:"bedroom"},{icon:"bathtub",title:"bathroom"},{icon:"directions_car",title:"car_park"}],(o,u)=>{const $=g("router-link"),_=g("SplideSlide"),F=g("Splide");return n(),p("div",_t,[t("div",{class:f(["col-12 text-xl md:text-4xl font-bold pb-8",o.$q.screen.lt.md?"text-center":""])}," Highlight ",2),t("div",null,[e(F,{options:i.value,"aria-label":"My Favorite Images"},{default:r(()=>[(n(!0),p(v,null,k(l.highlights,(x,R)=>(n(),C(_,{key:R},{default:r(()=>[e(I,{class:"h-[550px] card-container"},{default:r(()=>[e($,{to:{name:"property.details",params:{id:x.id}}},{default:r(()=>[t("img",{src:x.property.banner?x.property.banner.image.url:"https://cdn.quasar.dev/img/mountains.jpg",class:"h-[325px] w-full object-cover"},null,8,yt)]),_:2},1032,["to"]),e(h,null,{default:r(()=>[t("div",ht,[t("div",ft,m(x.property.listing_type),1),x.property.property_detail?(n(),p("div",xt,[(n(!0),p(v,null,k(a.value,(A,E)=>(n(),p("div",{class:"col col-auto text-center",key:E},[e(w,{name:A.icon,size:"24px",class:"pr-1"},null,8,["name"]),t("span",vt,m(x.property.property_detail[A.title]),1)]))),128))])):L("",!0)])]),_:2},1024),e(j,{color:"grey-4"}),e(h,null,{default:r(()=>[t("div",bt,m(x.property.name),1),t("div",gt,[y(m(x.property.short_description)+" ",1),e(q,null,{default:r(()=>[y(m(x.property.short_description),1)]),_:2},1024)])]),_:2},1024),e(j,{color:"grey-4"}),e(h,null,{default:r(()=>[t("div",wt,m(c(x.property.price,"RM ")),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["options"])])])}}},kt="/api/property/",St=H("property_web_store",{state:()=>({post_table_web:null,router:O(),route:U()}),actions:{async fetchHighlights(s){const l={headers:{Authorization:`Bearer ${s}`}};try{return(await G.get(kt+"highlights",{...l})).data.data}catch(d){throw console.error("Error:",d),d}}}}),Xt={__name:"MainPage",setup(s){const l=b([]),i=ee().fetchSessionToken(),a=St(),c=async()=>{const o=await a.fetchHighlights(i);l.value=o};return B(()=>{c()}),(o,u)=>(n(),C(Z,null,{content:r(()=>[e(Te,{"data-aos":"fade-up"}),e(Ge),l.value.length>0?(n(),C($t,{key:0,highlights:l.value},null,8,["highlights"])):L("",!0),e(mt),e(Xe),e(rt)]),_:1}))}};export{Xt as default};