import{am as R,z as P,m as n,u as p,A as e,q as r,y as t,D as y,F as v,O as $,n as C,E as m,r as k,l as b,R as x,an as j,o as z,P as q,L as E,M as N,a6 as H,e as O}from"./ckeditor-e046e440.js";import{Q as S}from"./QBtn-1da1afde.js";import{Q as U}from"./QBtnGroup-936986dc.js";import{Q as f}from"./QCardSection-f92e077f.js";import{Q as G}from"./QInput-e8c9055f.js";import{Q as I}from"./QCard-666f7f30.js";import{Q as g}from"./vm-8712a45d.js";import{Q as F,a as T}from"./portal-d5db9dda.js";import{Q as L,a as W}from"./QSeparator-af46fafe.js";import{Q as Y}from"./QSpace-c3493005.js";import{Q as J}from"./QCardActions-d2a46800.js";import{Q as A}from"./QDialog-a562aaf2.js";import{u as V}from"./index-64b6079b.js";import{Q as K}from"./QImg-a35f4fb0.js";import{Q}from"./QTooltip-a0adf78f.js";import{_ as X}from"./BaseLayout-9eb8f943.js";import{u as Z}from"./auth-8ecf675a.js";import"./uid-6a237b22.js";import"./focus-manager-cb626d5f.js";import"./use-timeout-56f147b6.js";import"./use-tick-c906425b.js";import"./position-engine-81d96713.js";import"./QHeader-21375be5.js";import"./QScrollArea-b5718d6e.js";import"./ClosePopup-d483b431.js";import"./dayjs.min-b6f4d8a8.js";const ee={data(){return{formInput:{search:"",searchType:"buy",propertyTypes:[],selectedState:{}},selectedPropertyTypes:[],propertyTypeFilterOptions:[],propertyTypeFilterDialog:!1,stateFilterOptions:[],stateFilterDialog:!1}},computed:{...R(V),propertyTypeFilterLabel(){return"Property Types ("+this.formInput.propertyTypes.filter(s=>s.id!=null).length+")"}},created(){this.propertyTypeFilterOptions=[],this.formInput.propertyTypes=[],this.formInput.state={id:null,name:"All State"},this.fetchPropertyFilterOptionGroup()},methods:{setSearchType(s){this.formInput.searchType=s},searchProperty(){const{searchType:s,search:l,propertyTypes:d,state:a}=this.formInput,i=d.findIndex(o=>o.id===null)!==-1;let c;i?c=0:c=d.map(o=>o.id).join(","),this.$router.push({name:"property.list",query:{t:s,s:l,pt:c,state:a.id}})},async fetchPropertyFilterOptionGroup(){const s={propertyTypes:1,states:1},l=await this.property_webStore.fetchPropertyFilterOptionGroup(s),d=l.property_types.map(a=>({id:a.id,name:a.name}));this.propertyTypeFilterOptions=[...d],this.formInput.propertyTypes=this.propertyTypeFilterOptions.map(a=>a),this.selectedPropertyTypes=this.propertyTypeFilterOptions.map(a=>a),this.stateFilterOptions=[{id:null,name:"All State"},...l.states]},openFilterDialog(){this.selectedPropertyTypes=this.formInput.propertyTypes.map(s=>s),this.propertyTypeFilterDialog=!0},applyFilters(){this.formInput.propertyTypes=this.selectedPropertyTypes.map(s=>s),this.propertyTypeFilterDialog=!1},selectPropertyType(s){const l=this.selectedPropertyTypes.findIndex(d=>d.id===s.id);l===-1?this.selectedPropertyTypes.push(s):this.selectedPropertyTypes.splice(l,1)},openStateDialog(){this.stateFilterDialog=!0},selectState(s){this.formInput.state=s,this.stateFilterDialog=!1}}},te={class:"row justify-center"},oe={class:"col col-6 col-sm-5 col-md-4 col-lg-3"},se={class:"row"},re={class:"col"},le={class:"col col-auto"},ne={class:"row justify-center"},ae={class:"col col-auto"},ie={class:"col col-auto pl-2 md:pl-4"},ce=t("div",{class:"text-center text-primary"},"Property Type",-1),pe=t("hr",null,null,-1),de=t("hr",null,null,-1),ue=t("div",{class:"text-center text-primary"},"State",-1),me=t("hr",null,null,-1);function _e(s,l,d,a,i,c){return n(),p(v,null,[e(I,{class:"p-3 md:p-8",square:"",style:{"background-color":"#0e2638"}},{default:r(()=>[e(f,null,{default:r(()=>[t("div",te,[t("div",oe,[e(U,{modelValue:i.formInput.searchType,"onUpdate:modelValue":l[2]||(l[2]=o=>i.formInput.searchType=o),rounded:"",class:"fill-width"},{default:r(()=>[e(S,{rounded:"",color:i.formInput.searchType=="buy"?"primary":"white text-black",label:"Buy",class:"text-capitalize fill-width",onClick:l[0]||(l[0]=o=>c.setSearchType("buy"))},null,8,["color"]),e(S,{rounded:"",color:i.formInput.searchType=="rent"?"primary":"white text-black",label:"Rent",class:"text-capitalize fill-width",onClick:l[1]||(l[1]=o=>c.setSearchType("rent"))},null,8,["color"])]),_:1},8,["modelValue"])])])]),_:1}),e(f,null,{default:r(()=>[t("div",null,[t("div",se,[t("div",re,[e(G,{modelValue:i.formInput.search,"onUpdate:modelValue":l[3]||(l[3]=o=>i.formInput.search=o),placeholder:"Search Property",outlined:"",class:"bg-white",style:{"border-top-left-radius":"15px","border-bottom-left-radius":"15px"}},null,8,["modelValue"])]),t("div",le,[e(S,{color:"primary",class:"fill-height text-capitalize",style:{"border-top-right-radius":"15px","border-bottom-right-radius":"15px"},onClick:c.searchProperty},{default:r(()=>[y("Search")]),_:1},8,["onClick"])])])])]),_:1}),e(f,{class:"text-white"},{default:r(()=>{var o;return[t("div",ne,[t("div",ae,[e(S,{flat:"",dense:"",color:"white",label:c.propertyTypeFilterLabel,"icon-right":"expand_more",class:"text-capitalize",onClick:c.openFilterDialog},null,8,["label","onClick"])]),t("div",ie,[e(S,{flat:"",dense:"",color:"white",label:(o=i.formInput.state)==null?void 0:o.name,"icon-right":"expand_more",class:"text-capitalize",onClick:c.openStateDialog},null,8,["label","onClick"])])])]}),_:1})]),_:1}),e(A,{modelValue:i.propertyTypeFilterDialog,"onUpdate:modelValue":l[4]||(l[4]=o=>i.propertyTypeFilterDialog=o)},{default:r(()=>[e(I,null,{default:r(()=>[e(f,null,{default:r(()=>[ce]),_:1}),pe,e(f,{style:{"overflow-y":"auto","max-height":"65vh",padding:"0"}},{default:r(()=>[e(L,{style:{"min-width":"280px"}},{default:r(()=>[(n(!0),p(v,null,$(i.propertyTypeFilterOptions,o=>(n(),p(v,{key:o.id},[o.id!=null?(n(),C(F,{key:0,clickable:"",onClick:u=>c.selectPropertyType(o)},{default:r(()=>[e(T,{avatar:""},{default:r(()=>[e(g,{name:i.selectedPropertyTypes.findIndex(u=>u.id==o.id)!==-1?"check_box":"check_box_outline_blank"},null,8,["name"])]),_:2},1024),e(T,null,{default:r(()=>[y(m(o.name),1)]),_:2},1024)]),_:2},1032,["onClick"])):(n(),C(F,{key:1,clickable:"",onClick:u=>c.selectPropertyType(o)},{default:r(()=>[e(T,{class:"font-bold"},{default:r(()=>[y(m(o.name),1)]),_:2},1024),e(T,{avatar:""},{default:r(()=>[e(g,{name:i.selectedPropertyTypes.findIndex(u=>u.id==o.id)!==-1?"check_box":"check_box_outline_blank"},null,8,["name"])]),_:2},1024)]),_:2},1032,["onClick"]))],64))),128))]),_:1})]),_:1}),de,e(J,null,{default:r(()=>[e(Y),e(S,{label:"Apply Filters",class:"text-capitalize",color:"primary",onClick:c.applyFilters},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(A,{modelValue:i.stateFilterDialog,"onUpdate:modelValue":l[5]||(l[5]=o=>i.stateFilterDialog=o)},{default:r(()=>[e(I,null,{default:r(()=>[e(f,null,{default:r(()=>[ue]),_:1}),me,e(f,{style:{"overflow-y":"auto","max-height":"65vh",padding:"0"}},{default:r(()=>[e(L,{style:{"min-width":"280px"}},{default:r(()=>[(n(!0),p(v,null,$(i.stateFilterOptions,o=>(n(),C(F,{key:o.id,clickable:"",onClick:u=>c.selectState(o)},{default:r(()=>[e(T,{avatar:""},{default:r(()=>[e(g,{name:this.formInput.state.id==o.id?"radio_button_checked":"radio_button_unchecked"},null,8,["name"])]),_:2},1024),e(T,{class:"font-bold"},{default:r(()=>[y(m(o.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const ye=P(ee,[["render",_e]]),he={components:{SearchCard:ye},setup(){return{payload:k({name:"",email:""})}}},fe={class:"header-content uppercase"},xe={class:"col col-auto flex items-center justify-center"},ve=["src"],be=j('<div class="col col-auto row items-center"><div class="col-12"><div class="text-2xl">amber realty</div><div class="pt-2" style="text-wrap:nowrap;"> E-(3)1482 </div></div></div><div class="col col-auto flex flex-col items-center justify-center"><img src="/images/amber_lppeh_logo.png" alt="" width="55"><div class="text-center">E-2346</div></div>',2),ge=t("div",{class:"text-lg md:text-5xl font-bold"},[y(" Are You Looking For "),t("div",{class:"header-title pt-2"})],-1),we=t("div",{class:"text-sm"}," Are you ready to start the search for your dream home? Look no further than Amber Realty Real Estate. ",-1),$e={class:"col-12 col-md-6"};function ke(s,l,d,a,i,c){const o=b("SearchCard");return n(),p("div",{class:x(["banner-background",s.$q.screen.lt.md?"h-full":"h-[700px] flex items-center"])},[t("div",{class:x(["row container mx-auto flex items-center",s.$q.screen.lt.md?"gap-4":"p-4"])},[t("div",{class:x(["col-12 col-md-6 flex flex-col gap-6 justify-center px-4 text-white",s.$q.screen.lt.md?"text-center hidden":""]),"data-aos":"flip-left"},[t("div",fe,[t("div",{class:x(["row uppercase text-sm font-bold gap-6",s.$q.screen.lt.md?"justify-center":""])},[t("div",xe,[t("img",{src:s.mainLogo,alt:"",width:"100"},null,8,ve)]),be],2)]),ge,we],2),t("div",$e,[e(o)])],2)],2)}const Se=P(he,[["render",ke]]);const Te={class:"col-12 row"},Ce={key:0,class:"col-12 row !flex-nowrap overflow-scroll md:overflow-auto overflow-y-hidden"},Pe={class:"relative"},Ie={class:"absolute top-4 left-5 bg-secondary font-bold px-6 py-2 rounded capitalize"},Fe={class:"col-12 text-lg flex items-center justify-between"},Qe={class:"col-12 text-xl font-bold latest-property__name"},qe={class:"col-12 text-subtitle2 latest-property__descriptions"},De={key:0,class:"flex gap-4"},Le={class:"align-middle text-lg"},Ae={class:"align-middle text-lg"},je={class:"align-middle text-lg"},ze={key:1,class:"col-12"},Ve=t("h5",{class:"text-center text-white font-bold"}," Latest Property Not Available ",-1),Me=[Ve],Be={__name:"LatestComponent",setup(s){const l=V(),d={limit:4},a=k([]),i=async()=>{const o=await l.fetchLatestProperty(d);return a.value=o,o},c=(o,u="RM")=>{const w=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return`${u}${w}`};return z(()=>{i()}),(o,u)=>{const w=b("router-link");return n(),p("div",Te,[a.value.length>0?(n(),p("div",Ce,[(n(!0),p(v,null,$(a.value,(_,h)=>(n(),p("div",{class:"col-10 col-sm-6 col-md-3 p-2",key:h},[e(w,{to:"property/details/"+_.id},{default:r(()=>[e(I,{class:"my-card h-[350px] xl:h-[375px]"},{default:r(()=>[t("div",Pe,[e(K,{src:_.banner?_.banner.image.url:"https://cdn.quasar.dev/img/parallax2.jpg",ratio:16/9,fit:"contain"},null,8,["src"]),t("div",Ie," For "+m(_.listing_type),1)]),e(f,{class:"row gap-2"},{default:r(()=>[t("div",Fe,[t("div",null,m(c(_.price,"RM ")),1)]),t("div",Qe,[y(m(_.name)+" ",1),e(Q,{"max-width":"350px"},{default:r(()=>[y(m(_.name),1)]),_:2},1024)]),t("div",qe,[y(m(_.short_description)+" ",1),e(Q,{"max-width":"350px"},{default:r(()=>[y(m(_.short_description),1)]),_:2},1024)])]),_:2},1024),e(f,{class:x(["q-pt-none",o.$q.screen.lt.md?"":"h-[75px]"])},{default:r(()=>[_.details_toggle?(n(),p("div",De,[t("div",null,[t("span",Le,m(_.details.bedroom),1),e(g,{name:"bed",size:"22px",class:"pl-1"})]),t("div",null,[t("span",Ae,m(_.details.bathroom),1),e(g,{name:"bathtub",size:"22px",class:"pl-1"})]),t("div",null,[t("span",je,m(_.details.car_park),1),e(g,{name:"directions_car",size:"22px",class:"pl-1"})])])):q("",!0)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to"])]))),128))])):(n(),p("div",ze,Me))])}}},Re={components:{LatestComponent:Be}},Ee={class:"bg-primary"},Ne={class:"row container mx-auto gap-10 py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px]"},He={class:"col col-auto font-bold text-white text-sm",style:{"text-wrap":"nowrap"}};function Oe(s,l,d,a,i,c){const o=b("router-link"),u=b("LatestComponent");return n(),p("div",Ee,[t("div",Ne,[t("div",{class:x(["col-12 px-2 row items-center gap-2",s.$q.screen.lt.sm?"justify-center":"justify-between"])},[t("div",{class:x(["col col-auto text-xl md:text-4xl font-bold text-white",s.$q.screen.lt.md?"text-center":""])}," Explore Our Latest Properties ",2),t("div",He,[e(o,{to:{name:"property.list"}},{default:r(()=>[y("See All Property")]),_:1},8,["to"])])],2),e(u)])])}const Ue=P(Re,[["render",Oe]]);const Ge={setup(){const s=k({}),l=0,d=5;return s.value=[{title:"11",content:"Years in the industry",quote:"+"},{title:"100",content:"Customer satisfaction",quote:"%"},{title:"5",content:"Properties sold",quote:"K"},{title:"1",content:"Country served",quote:""}],{payload:s,numberInit:l,numberDuration:d}}},We={class:"bg-primary"},Ye={class:"container mx-auto row social-proof-container mx-auto flex justify-center items-center text-white gap-y-6"};function Je(s,l,d,a,i,c){const o=b("number");return n(),p("div",We,[t("div",Ye,[(n(!0),p(v,null,$(a.payload,(u,w)=>(n(),p("div",{class:"col-6 col-md-3 text-center q-gutter-y-sm",key:w},[t("div",{class:x(["font-bold",s.$q.screen.lt.sm?"text-4xl":"text-7xl"])},[e(o,{class:"bold transition",ref_for:!0,ref:"number2",from:a.numberInit,to:u.title||a.numberInit,duration:a.numberDuration},null,8,["from","to","duration"]),y(m(u.quote),1)],2),t("div",{class:x(s.$q.screen.lt.sm?"text-md":"text-lg")},m(u.content),3)]))),128))])])}const Ke=P(Ge,[["render",Je]]);const Xe={},Ze={class:"bg-secondary"},et=j('<div class="col-12 col-md-7 text-2xl md:text-4xl font-bold"> Contact Us to Start Your Real Estate Journey ! </div><div class="col-12 col-md-3 text-center text-xl font-bold text-white" style="width:250px;"><a href="https://wa.me/60123729668?text=I&#39;m%20interested%20in%20property%20for%20sale" target="_blank"><div class="bg-primary px-8 py-4 rounded row"><div class="col-2"><img src="/images/amber_whatsapp.png" alt="" width="55"></div><div class="col-10">0123729668</div></div></a></div>',2),tt=[et];function ot(s,l){return n(),p("div",Ze,[t("div",{class:x(["row justify-around items-center container mx-auto q-gutter-y-lg call-to-action-container",s.$q.screen.lt.md?"text-center":""])},tt,2)])}const st=P(Xe,[["render",ot]]),rt={setup(){const s=k([]);return s.value=[{title:"Innovate for Exceptional Service",description:"Commitment in business through innovation <br> to provide exceptional customer service.",icon:"home"},{title:"Build Strong Connections",description:"Build lifetime relationships <br> with our customers and communities.",icon:"real_estate_agent"},{title:"Maximize Business Success",description:"Optimize relationships,<br>service and profitability.",icon:"key"}],{missionStatement:s}}},lt={class:""},nt={class:"row container mx-auto py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px] justify-between gap-6"},at={class:"col-12"},it={class:"w-[125px] h-[125px] m-auto rounded-full flex justify-center items-center bg-secondary"},ct={class:"col-12 text-xl font-bold h-[50px] text-white"},pt=["innerHTML"];function dt(s,l,d,a,i,c){return n(),p("div",lt,[t("div",nt,[t("div",{class:x(["col-12 text-xl md:text-4xl font-bold pb-8",s.$q.screen.lt.md?"text-center":""])}," Mission Statement ",2),(n(!0),p(v,null,$(a.missionStatement,(o,u)=>(n(),p("div",{class:"col-12 col-md-3 text-center py-12 px-8 row gap-8 border rounded-lg bg-primary",key:u,"data-aos":"flip-left","data-aos-duration":"1500"},[t("div",at,[t("div",it,[e(g,{name:o.icon,size:"64px"},null,8,["name"])])]),t("div",ct,m(o.title),1),t("div",{class:"col-12 h-[50px] text-white",innerHTML:o.description},null,8,pt)]))),128))])])}const ut=P(rt,[["render",dt]]);const mt={class:"container mx-auto py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px]"},_t=["src"],yt={class:"flex justify-between items-center"},ht={class:"text-sm bg-primary text-center px-4 py-2 font-bold rounded text-white w-[90px] capitalize featured-property__title"},ft={key:0,class:"row gap-2"},xt={class:"align-middle text-sm"},vt={class:"text-h6 featured-property__title"},bt={class:"text-subtitle2 featured-property__descriptions"},gt={class:"text-subtitle2"},wt={__name:"FeaturedComponent",props:["highlights"],setup(s){const l=s,d=k({}),a=k([]),i=(c,o="RM")=>{const u=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(c);return`${o}${u}`};return d.value={type:"loop",perPage:3,focus:"center",breakpoints:{768:{perPage:2,arrows:!1,focus:!1},425:{perPage:1}},autoplay:!0,interval:4500,height:550},a.value=[{icon:"bed",title:"bedroom"},{icon:"bathtub",title:"bathroom"},{icon:"directions_car",title:"car_park"}],(c,o)=>{const u=b("router-link"),w=b("SplideSlide"),_=b("Splide");return n(),p("div",mt,[t("div",{class:x(["col-12 text-xl md:text-4xl font-bold pb-8",c.$q.screen.lt.md?"text-center":""])}," Highlight ",2),t("div",null,[e(_,{options:d.value,"aria-label":"My Favorite Images"},{default:r(()=>[(n(!0),p(v,null,$(l.highlights,(h,M)=>(n(),C(w,{key:M},{default:r(()=>[e(I,{class:"card-container"},{default:r(()=>[e(u,{to:{name:"property.details",params:{id:h.id}}},{default:r(()=>[t("img",{src:h.property.banner?h.property.banner.image.url:"https://cdn.quasar.dev/img/mountains.jpg",class:"h-[325px] w-full object-cover"},null,8,_t)]),_:2},1032,["to"]),e(f,null,{default:r(()=>[t("div",yt,[t("div",ht,m(h.property.listing_type),1),h.property.property_detail?(n(),p("div",ft,[(n(!0),p(v,null,$(a.value,(D,B)=>(n(),p("div",{class:"col col-auto text-center",key:B},[e(g,{name:D.icon,size:"24px",class:"pr-1"},null,8,["name"]),t("span",xt,m(h.property.property_detail[D.title]),1)]))),128))])):q("",!0)])]),_:2},1024),e(W,{color:"grey-4"}),e(f,null,{default:r(()=>[t("div",vt,m(h.property.name),1),t("div",bt,[y(m(h.property.short_description)+" ",1),e(Q,null,{default:r(()=>[y(m(h.property.short_description),1)]),_:2},1024)])]),_:2},1024),e(f,null,{default:r(()=>[t("div",gt,m(i(h.property.price,"RM ")),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["options"])])])}}},$t="/api/property/",kt=E("property_web_store",{state:()=>({post_table_web:null,router:N(),route:H()}),actions:{async fetchHighlights(s){const l={headers:{Authorization:`Bearer ${s}`}};try{return(await O.get($t+"highlights",{...l})).data.data}catch(d){throw console.error("Error:",d),d}}}}),Kt={__name:"MainPage",setup(s){const l=k([]),a=Z().fetchSessionToken(),i=kt(),c=async()=>{const o=await i.fetchHighlights(a);l.value=o};return z(()=>{c()}),(o,u)=>(n(),C(X,null,{content:r(()=>[e(Se,{"data-aos":"fade-up"}),e(Ue),l.value.length>0?(n(),C(wt,{key:0,highlights:l.value},null,8,["highlights"])):q("",!0),e(ut),e(Ke),e(st)]),_:1}))}};export{Kt as default};
