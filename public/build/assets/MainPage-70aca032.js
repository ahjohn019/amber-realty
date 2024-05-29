import{am as V,z as w,m as a,u as m,A as t,q as l,y as e,D as y,F as v,O as T,n as S,E as u,r as C,l as b,R as f,an as A,o as D,P as Q,L as B,M,a6 as R,e as E}from"./ckeditor-e046e440.js";import{Q as $}from"./QBtn-1da1afde.js";import{Q as N}from"./QBtnGroup-936986dc.js";import{Q as x}from"./QCardSection-f92e077f.js";import{Q as H}from"./QInput-e8c9055f.js";import{Q as P}from"./QCard-666f7f30.js";import{Q as h}from"./vm-8712a45d.js";import{Q as q,a as k}from"./portal-d5db9dda.js";import{Q as j,a as O}from"./QSeparator-af46fafe.js";import{Q as U}from"./QSpace-c3493005.js";import{Q as G}from"./QCardActions-d2a46800.js";import{Q as z}from"./QDialog-a562aaf2.js";import{u as L}from"./index-64b6079b.js";import{Q as W}from"./QImg-a35f4fb0.js";import{Q as F}from"./QTooltip-a0adf78f.js";import{_ as Y}from"./BaseLayout-9eb8f943.js";import{u as J}from"./auth-8ecf675a.js";import"./uid-6a237b22.js";import"./focus-manager-cb626d5f.js";import"./use-timeout-56f147b6.js";import"./use-tick-c906425b.js";import"./position-engine-81d96713.js";import"./QHeader-21375be5.js";import"./QScrollArea-b5718d6e.js";import"./ClosePopup-d483b431.js";import"./dayjs.min-b6f4d8a8.js";const K={data(){return{formInput:{search:"",searchType:"buy",propertyTypes:[],selectedState:{}},selectedPropertyTypes:[],propertyTypeFilterOptions:[],propertyTypeFilterDialog:!1,stateFilterOptions:[],stateFilterDialog:!1}},computed:{...V(L),propertyTypeFilterLabel(){return"Property Types ("+this.formInput.propertyTypes.filter(s=>s.id!=null).length+")"}},created(){this.propertyTypeFilterOptions=[],this.formInput.propertyTypes=[],this.formInput.state={id:null,name:"All State"},this.fetchPropertyFilterOptionGroup()},methods:{setSearchType(s){this.formInput.searchType=s},searchProperty(){const{searchType:s,search:r,propertyTypes:d,state:n}=this.formInput,i=d.findIndex(o=>o.id===null)!==-1;let p;i?p=0:p=d.map(o=>o.id).join(","),this.$router.push({name:"property.list",query:{t:s,s:r,pt:p,state:n.id}})},async fetchPropertyFilterOptionGroup(){const s={propertyTypes:1,states:1},r=await this.property_webStore.fetchPropertyFilterOptionGroup(s),d=r.property_types.map(n=>({id:n.id,name:n.name}));this.propertyTypeFilterOptions=[...d],this.formInput.propertyTypes=this.propertyTypeFilterOptions.map(n=>n),this.selectedPropertyTypes=this.propertyTypeFilterOptions.map(n=>n),this.stateFilterOptions=[{id:null,name:"All State"},...r.states]},openFilterDialog(){this.selectedPropertyTypes=this.formInput.propertyTypes.map(s=>s),this.propertyTypeFilterDialog=!0},applyFilters(){this.formInput.propertyTypes=this.selectedPropertyTypes.map(s=>s),this.propertyTypeFilterDialog=!1},selectPropertyType(s){const r=this.selectedPropertyTypes.findIndex(d=>d.id===s.id);r===-1?this.selectedPropertyTypes.push(s):this.selectedPropertyTypes.splice(r,1)},openStateDialog(){this.stateFilterDialog=!0},selectState(s){this.formInput.state=s,this.stateFilterDialog=!1}}},X={class:"row justify-center"},Z={class:"col col-6 col-sm-5 col-md-4 col-lg-3"},ee={class:"row"},te={class:"col"},oe={class:"col col-auto"},se={class:"row justify-center"},re={class:"col col-auto"},le={class:"col col-auto pl-2 md:pl-4"},ne=e("div",{class:"text-center text-primary"},"Property Type",-1),ae=e("hr",null,null,-1),ie=e("hr",null,null,-1),ce=e("div",{class:"text-center text-primary"},"State",-1),de=e("hr",null,null,-1);function pe(s,r,d,n,i,p){return a(),m(v,null,[t(P,{class:"p-3 md:p-8",square:"",style:{"background-color":"#0e2638"}},{default:l(()=>[t(x,null,{default:l(()=>[e("div",X,[e("div",Z,[t(N,{modelValue:i.formInput.searchType,"onUpdate:modelValue":r[2]||(r[2]=o=>i.formInput.searchType=o),rounded:"",class:"fill-width"},{default:l(()=>[t($,{rounded:"",color:i.formInput.searchType=="buy"?"primary":"white text-black",label:"Buy",class:"text-capitalize fill-width",onClick:r[0]||(r[0]=o=>p.setSearchType("buy"))},null,8,["color"]),t($,{rounded:"",color:i.formInput.searchType=="rent"?"primary":"white text-black",label:"Rent",class:"text-capitalize fill-width",onClick:r[1]||(r[1]=o=>p.setSearchType("rent"))},null,8,["color"])]),_:1},8,["modelValue"])])])]),_:1}),t(x,null,{default:l(()=>[e("div",null,[e("div",ee,[e("div",te,[t(H,{modelValue:i.formInput.search,"onUpdate:modelValue":r[3]||(r[3]=o=>i.formInput.search=o),placeholder:"Search Property",outlined:"",class:"bg-white",style:{"border-top-left-radius":"15px","border-bottom-left-radius":"15px"}},null,8,["modelValue"])]),e("div",oe,[t($,{color:"primary",class:"fill-height text-capitalize",style:{"border-top-right-radius":"15px","border-bottom-right-radius":"15px"},onClick:p.searchProperty},{default:l(()=>[y("Search")]),_:1},8,["onClick"])])])])]),_:1}),t(x,{class:"text-white"},{default:l(()=>{var o;return[e("div",se,[e("div",re,[t($,{flat:"",dense:"",color:"white",label:p.propertyTypeFilterLabel,"icon-right":"expand_more",class:"text-capitalize",onClick:p.openFilterDialog},null,8,["label","onClick"])]),e("div",le,[t($,{flat:"",dense:"",color:"white",label:(o=i.formInput.state)==null?void 0:o.name,"icon-right":"expand_more",class:"text-capitalize",onClick:p.openStateDialog},null,8,["label","onClick"])])])]}),_:1})]),_:1}),t(z,{modelValue:i.propertyTypeFilterDialog,"onUpdate:modelValue":r[4]||(r[4]=o=>i.propertyTypeFilterDialog=o)},{default:l(()=>[t(P,null,{default:l(()=>[t(x,null,{default:l(()=>[ne]),_:1}),ae,t(x,{style:{"overflow-y":"auto","max-height":"65vh",padding:"0"}},{default:l(()=>[t(j,{style:{"min-width":"280px"}},{default:l(()=>[(a(!0),m(v,null,T(i.propertyTypeFilterOptions,o=>(a(),m(v,{key:o.id},[o.id!=null?(a(),S(q,{key:0,clickable:"",onClick:_=>p.selectPropertyType(o)},{default:l(()=>[t(k,{avatar:""},{default:l(()=>[t(h,{name:i.selectedPropertyTypes.findIndex(_=>_.id==o.id)!==-1?"check_box":"check_box_outline_blank"},null,8,["name"])]),_:2},1024),t(k,null,{default:l(()=>[y(u(o.name),1)]),_:2},1024)]),_:2},1032,["onClick"])):(a(),S(q,{key:1,clickable:"",onClick:_=>p.selectPropertyType(o)},{default:l(()=>[t(k,{class:"font-bold"},{default:l(()=>[y(u(o.name),1)]),_:2},1024),t(k,{avatar:""},{default:l(()=>[t(h,{name:i.selectedPropertyTypes.findIndex(_=>_.id==o.id)!==-1?"check_box":"check_box_outline_blank"},null,8,["name"])]),_:2},1024)]),_:2},1032,["onClick"]))],64))),128))]),_:1})]),_:1}),ie,t(G,null,{default:l(()=>[t(U),t($,{label:"Apply Filters",class:"text-capitalize",color:"primary",onClick:p.applyFilters},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(z,{modelValue:i.stateFilterDialog,"onUpdate:modelValue":r[5]||(r[5]=o=>i.stateFilterDialog=o)},{default:l(()=>[t(P,null,{default:l(()=>[t(x,null,{default:l(()=>[ce]),_:1}),de,t(x,{style:{"overflow-y":"auto","max-height":"65vh",padding:"0"}},{default:l(()=>[t(j,{style:{"min-width":"280px"}},{default:l(()=>[(a(!0),m(v,null,T(i.stateFilterOptions,o=>(a(),S(q,{key:o.id,clickable:"",onClick:_=>p.selectState(o)},{default:l(()=>[t(k,{avatar:""},{default:l(()=>[t(h,{name:this.formInput.state.id==o.id?"radio_button_checked":"radio_button_unchecked"},null,8,["name"])]),_:2},1024),t(k,{class:"font-bold"},{default:l(()=>[y(u(o.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const ue=w(K,[["render",pe]]),me={components:{SearchCard:ue},setup(){return{payload:C({name:"",email:""})}}},_e={class:"header-content uppercase"},ye={class:"col col-auto flex items-center justify-center"},fe=["src"],he=A('<div class="col col-auto row items-center"><div class="col-12"><div class="text-2xl">amber realty</div><div class="pt-2" style="text-wrap:nowrap;"> E-(3)1482 </div></div></div><div class="col col-auto flex flex-col items-center justify-center"><img src="/images/amber_lppeh_logo.png" alt="" width="55"><div class="text-center">E-2346</div></div>',2),xe=e("div",{class:"text-lg md:text-5xl font-bold"},[y(" Are You Looking For "),e("div",{class:"header-title pt-2"})],-1),ve=e("div",{class:"text-sm"}," Are you ready to start the search for your dream home? Look no further than Amber Realty Real Estate. ",-1),be={class:"col-12 col-md-6"};function ge(s,r,d,n,i,p){const o=b("SearchCard");return a(),m("div",{class:f(["banner-background",s.$q.screen.lt.md?"h-full":"h-[700px] flex items-center"])},[e("div",{class:f(["row container mx-auto flex items-center",s.$q.screen.lt.md?"gap-4":"p-4"])},[e("div",{class:f(["col-12 col-md-6 flex flex-col gap-6 justify-center px-4 text-white",s.$q.screen.lt.md?"text-center hidden":""]),"data-aos":"flip-left"},[e("div",_e,[e("div",{class:f(["row uppercase text-sm font-bold gap-6",s.$q.screen.lt.md?"justify-center":""])},[e("div",ye,[e("img",{src:s.mainLogo,alt:"",width:"100"},null,8,fe)]),he],2)]),xe,ve],2),e("div",be,[t(o)])],2)],2)}const we=w(me,[["render",ge]]);const $e={class:"col-12 row"},ke={key:0,class:"col-12 row !flex-nowrap overflow-scroll md:overflow-auto overflow-y-hidden"},Se={class:"relative"},Te={class:"absolute top-4 left-5 bg-secondary font-bold px-6 py-2 rounded capitalize"},Ce={class:"col-12 text-lg flex items-center justify-between"},Pe={class:"col-12 text-xl font-bold latest-property__name"},Ie={class:"col-12 text-subtitle2 latest-property__descriptions"},qe={key:0,class:"flex gap-4"},Fe={class:"align-middle text-lg"},Qe={class:"align-middle text-lg"},je={class:"align-middle text-lg"},ze={key:1,class:"col-12"},Ae=e("h5",{class:"text-center text-white font-bold"}," Latest Property Not Available ",-1),De=[Ae],Le={__name:"LatestComponent",setup(s){const r=L(),d={limit:4},n=C([]),i=async()=>{const o=await r.fetchLatestProperty(d);return n.value=o,o},p=(o,_="RM")=>{const g=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return`${_}${g}`};return D(()=>{i()}),(o,_)=>{const g=b("router-link");return a(),m("div",$e,[n.value.length>0?(a(),m("div",ke,[(a(!0),m(v,null,T(n.value,(c,I)=>(a(),m("div",{class:"col-10 col-sm-6 col-md-3 p-2",key:I},[t(g,{to:"property/details/"+c.id},{default:l(()=>[t(P,{class:"my-card h-[350px] xl:h-[375px]"},{default:l(()=>[e("div",Se,[t(W,{src:c.banner?c.banner.image.url:"https://cdn.quasar.dev/img/parallax2.jpg",ratio:16/9,fit:"contain"},null,8,["src"]),e("div",Te," For "+u(c.listing_type),1)]),t(x,{class:"row gap-2"},{default:l(()=>[e("div",Ce,[e("div",null,u(p(c.price,"RM ")),1)]),e("div",Pe,[y(u(c.name)+" ",1),t(F,{"max-width":"350px"},{default:l(()=>[y(u(c.name),1)]),_:2},1024)]),e("div",Ie,[y(u(c.short_description)+" ",1),t(F,{"max-width":"350px"},{default:l(()=>[y(u(c.short_description),1)]),_:2},1024)])]),_:2},1024),t(x,{class:f(["q-pt-none",o.$q.screen.lt.md?"":"h-[75px]"])},{default:l(()=>[c.details_toggle?(a(),m("div",qe,[e("div",null,[e("span",Fe,u(c.details.bedroom),1),t(h,{name:"bed",size:"22px",class:"pl-1"})]),e("div",null,[e("span",Qe,u(c.details.bathroom),1),t(h,{name:"bathtub",size:"22px",class:"pl-1"})]),e("div",null,[e("span",je,u(c.details.car_park),1),t(h,{name:"directions_car",size:"22px",class:"pl-1"})])])):Q("",!0)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to"])]))),128))])):(a(),m("div",ze,De))])}}},Ve={components:{LatestComponent:Le}},Be={class:"bg-primary"},Me={class:"row container mx-auto gap-10 py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px]"},Re={class:"col col-auto font-bold text-white text-sm",style:{"text-wrap":"nowrap"}};function Ee(s,r,d,n,i,p){const o=b("router-link"),_=b("LatestComponent");return a(),m("div",Be,[e("div",Me,[e("div",{class:f(["col-12 px-2 row items-center gap-2",s.$q.screen.lt.sm?"justify-center":"justify-between"])},[e("div",{class:f(["col col-auto text-xl md:text-4xl font-bold text-white",s.$q.screen.lt.md?"text-center":""])}," Explore Our Latest Properties ",2),e("div",Re,[t(o,{to:{name:"property.list"}},{default:l(()=>[y("See All Property")]),_:1},8,["to"])])],2),t(_)])])}const Ne=w(Ve,[["render",Ee]]);const He={setup(){const s=C({}),r=0,d=5;return s.value=[{title:"11",content:"Years in the industry",quote:"+"},{title:"100",content:"Customer satisfaction",quote:"%"},{title:"5",content:"Properties sold",quote:"K"},{title:"1",content:"Country served",quote:""}],{payload:s,numberInit:r,numberDuration:d}}},Oe={class:"bg-primary"},Ue={class:"container mx-auto row social-proof-container mx-auto flex justify-center items-center text-white gap-y-6"};function Ge(s,r,d,n,i,p){const o=b("number");return a(),m("div",Oe,[e("div",Ue,[(a(!0),m(v,null,T(n.payload,(_,g)=>(a(),m("div",{class:"col-6 col-md-3 text-center q-gutter-y-sm",key:g},[e("div",{class:f(["font-bold",s.$q.screen.lt.sm?"text-4xl":"text-7xl"])},[t(o,{class:"bold transition",ref_for:!0,ref:"number2",from:n.numberInit,to:_.title||n.numberInit,duration:n.numberDuration},null,8,["from","to","duration"]),y(u(_.quote),1)],2),e("div",{class:f(s.$q.screen.lt.sm?"text-md":"text-lg")},u(_.content),3)]))),128))])])}const We=w(He,[["render",Ge]]);const Ye={},Je={class:"bg-secondary"},Ke=A('<div class="col-12 col-md-7 text-2xl md:text-4xl font-bold"> Contact Us to Start Your Real Estate Journey ! </div><div class="col-12 col-md-3 text-center text-xl font-bold text-white" style="width:250px;"><a href="https://wa.me/60123729668?text=I&#39;m%20interested%20in%20property%20for%20sale" target="_blank"><div class="bg-primary px-8 py-4 rounded row"><div class="col-2"><img src="/images/amber_whatsapp.png" alt="" width="55"></div><div class="col-10">0123729668</div></div></a></div>',2),Xe=[Ke];function Ze(s,r){return a(),m("div",Je,[e("div",{class:f(["row justify-around items-center container mx-auto q-gutter-y-lg call-to-action-container",s.$q.screen.lt.md?"text-center":""])},Xe,2)])}const et=w(Ye,[["render",Ze]]),tt={setup(){const s=C([]);return s.value=[{title:"Innovate for Exceptional Service",description:"Commitment in business through innovation <br> to provide exceptional customer service.",icon:"home"},{title:"Build Strong Connections",description:"Build lifetime relationships <br> with our customers and communities.",icon:"real_estate_agent"},{title:"Maximize Business Success",description:"Optimize relationships,<br>service and profitability.",icon:"key"}],{missionStatement:s}}},ot={class:""},st={class:"row container mx-auto py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px] justify-between gap-6"},rt={class:"col-12"},lt={class:"w-[125px] h-[125px] m-auto rounded-full flex justify-center items-center bg-secondary"},nt={class:"col-12 text-xl font-bold h-[50px] text-white"},at=["innerHTML"];function it(s,r,d,n,i,p){return a(),m("div",ot,[e("div",st,[e("div",{class:f(["col-12 text-xl md:text-4xl font-bold pb-8",s.$q.screen.lt.md?"text-center":""])}," Mission Statement ",2),(a(!0),m(v,null,T(n.missionStatement,(o,_)=>(a(),m("div",{class:"col-12 col-md-3 text-center py-12 px-8 row gap-8 border rounded-lg bg-primary",key:_,"data-aos":"flip-left","data-aos-duration":"1500"},[e("div",rt,[e("div",lt,[t(h,{name:o.icon,size:"64px"},null,8,["name"])])]),e("div",nt,u(o.title),1),e("div",{class:"col-12 h-[50px] text-white",innerHTML:o.description},null,8,at)]))),128))])])}const ct=w(tt,[["render",it]]);const dt={props:["highlights"],setup(){return{numberFormat:(r,d="RM")=>{const n=r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return`${d}${n}`}}}},pt={class:"container mx-auto py-12 px-2 w-full md:w-[650px] lg:w-[990px] xl:w-[1200px]"},ut={class:"row"},mt={class:"col-12 p-2 md:p-0"},_t={class:"col-12 row"},yt={class:"col-12 col-md-6 col-lg-7 grid place-items-center"},ft=["src"],ht={class:"col-12 col-md-6 col-lg-5 featured-container flex flex-col gap-4 md:gap-10 py-8 md:px-10 md:py-6 justify-center lg:border rounded-lg"},xt={class:"text-xl md:text-4xl font-bold"},vt={class:"text-sm featured-property__descriptions"},bt={class:"row items-center"},gt={class:"col col-auto text-center"},wt={class:"col col-auto text-center"},$t={class:"col col-auto text-center"};function kt(s,r,d,n,i,p){const o=b("router-link"),_=b("SplideSlide"),g=b("Splide");return a(),m("div",pt,[e("div",ut,[e("div",{class:f(["col-12 text-xl md:text-4xl font-bold pb-8",s.$q.screen.lt.md?"text-center":""])}," Highlight ",2),e("div",mt,[t(g,{options:{rewind:!0,type:"fade"},"aria-label":"My Favorite Images"},{default:l(()=>[(a(!0),m(v,null,T(d.highlights,(c,I)=>(a(),S(_,{key:I},{default:l(()=>[e("div",_t,[e("div",yt,[t(o,{to:{name:"property.details",params:{id:c.id}}},{default:l(()=>[e("img",{src:c.property.banner?c.property.banner.image.url:"https://cdn.quasar.dev/img/mountains.jpg",class:"object-cover rounded-lg h-[325px] lg:h-[600px]"},null,8,ft)]),_:2},1032,["to"])]),e("div",ht,[e("div",{class:f(["pb-3 featured-content flex flex-col gap-6 md:gap-10",s.$q.screen.lt.md?"text-center":""])},[e("div",xt,u(c.property.name),1),e("div",vt,[y(u(c.property.short_description)+" ",1),t(F,null,{default:l(()=>[y(u(c.property.short_description),1)]),_:2},1024)]),t(O,{color:"grey-4"}),e("div",{class:f(["text-sm bg-primary text-center px-4 py-2 font-bold rounded text-white w-[120px] capitalize",s.$q.screen.lt.md?"m-auto":""])}," For "+u(c.property.listing_type),3)],2),e("div",bt,[e("div",{class:f(["col-12 col-md-5 text-xl md:text-4xl font-bold properties-content",s.$q.screen.lt.md?"text-center":"text-left"]),style:{"text-wrap":"nowrap"}},u(n.numberFormat(c.property.price,"RM ")),3)]),c.property.property_detail?(a(),m("div",{key:0,class:f(["row gap-4",s.$q.screen.lt.md?"justify-center":"justify-left"])},[e("div",gt,[e("div",null,[t(h,{name:"bed",size:"32px"})]),y(" "+u(c.property.property_detail.bedroom)+" Bedrooms ",1)]),e("div",wt,[e("div",null,[t(h,{name:"bathroom",size:"32px"})]),y(" "+u(c.property.property_detail.bathroom)+" Bathrooms ",1)]),e("div",$t,[e("div",null,[t(h,{name:"dashboard",size:"32px"})]),y(" "+u(c.property.property_detail.square_feet)+" sqft ",1)])],2)):Q("",!0)])])]),_:2},1024))),128))]),_:1})])])])}const St=w(dt,[["render",kt]]),Tt="/api/property/",Ct=B("property_web_store",{state:()=>({post_table_web:null,router:M(),route:R()}),actions:{async fetchHighlights(s){const r={headers:{Authorization:`Bearer ${s}`}};try{return(await E.get(Tt+"highlights",{...r})).data.data}catch(d){throw console.error("Error:",d),d}}}}),eo={__name:"MainPage",setup(s){const r=C([]),n=J().fetchSessionToken(),i=Ct(),p=async()=>{const o=await i.fetchHighlights(n);r.value=o};return D(()=>{p()}),(o,_)=>(a(),S(Y,null,{content:l(()=>[t(we,{"data-aos":"fade-up"}),t(Ne),r.value.length>0?(a(),S(St,{key:0,highlights:r.value},null,8,["highlights"])):Q("",!0),t(ct),t(We),t(et)]),_:1}))}};export{eo as default};
