import{Q as we}from"./QLayout-a37d6ecb.js";import{ar as ke,B as b,n as d,x as p,D as t,s as n,A as o,F as x,H as w,T as L,q as D,G as f,r as C,m as y,W as h,as as le,l as F,w as G,j as W,al as Y,ai as J,E as K,am as $e,L as Se,M as Pe,o as Ce,U as Ie}from"./ckeditor-02e744e5.js";import{Q as S}from"./QBtn-06ca8513.js";import{c as qe,Q as X}from"./QSeparator-1c65984d.js";import{Q as g}from"./QCardSection-0ce48cb2.js";import{Q as Le}from"./QInput-0a75a164.js";import{Q as j}from"./QCard-0fcf7a53.js";import{Q as k,c as Qe,e as Fe}from"./vm-8d870a05.js";import{Q as V,a as P,e as De,u as je,f as Ae,v as Z,g as Oe,c as Ee,p as ee,h as Me,i as Ve,j as Be,d as He,k as ze,r as te,s as Ne,l as Re}from"./QMenu-2677335d.js";import{a as Ue,Q as Ge}from"./QCardActions-f5009174.js";import{Q as oe}from"./QDialog-32a3201d.js";import{u as ne}from"./index-1aba2358.js";import{Q as We}from"./QImg-552d92c1.js";import{a as Ye,u as Je,c as se,g as Ke}from"./use-tick-5c90f11d.js";import{B as Xe}from"./BaseLayout-e2d7f7c5.js";import"./QScrollObserver-f92590d0.js";import"./use-prevent-scroll-16ed7031.js";import"./QToolbar-8fd83f36.js";import"./ClosePopup-602f2a34.js";import"./dayjs.min-469a1f45.js";const Ze={data(){return{formInput:{search:"",searchType:"buy",propertyTypes:[],selectedState:{}},selectedPropertyTypes:[],propertyTypeFilterOptions:[],propertyTypeFilterDialog:!1,stateFilterOptions:[],stateFilterDialog:!1}},computed:{...ke(ne),propertyTypeFilterLabel(){return"Property Types ("+this.formInput.propertyTypes.filter(e=>e.id!=null).length+")"}},created(){this.propertyTypeFilterOptions=[],this.formInput.propertyTypes=[],this.formInput.state={id:null,name:"All State"},this.fetchPropertyFilterOptionGroup()},methods:{setSearchType(e){this.formInput.searchType=e},searchProperty(){const{searchType:e,search:r,propertyTypes:u,state:c}=this.formInput,i=u.findIndex(s=>s.id===null)!==-1;let a;i?a=0:a=u.map(s=>s.id).join(","),this.$router.push({name:"property.list",query:{t:e,s:r,pt:a,state:c.id}})},async fetchPropertyFilterOptionGroup(){const e={propertyTypes:1,states:1},r=await this.property_webStore.fetchPropertyFilterOptionGroup(e),u=r.property_types.map(c=>({id:c.id,name:c.name}));this.propertyTypeFilterOptions=[...u],this.formInput.propertyTypes=this.propertyTypeFilterOptions.map(c=>c),this.selectedPropertyTypes=this.propertyTypeFilterOptions.map(c=>c),this.stateFilterOptions=[{id:null,name:"All State"},...r.states]},openFilterDialog(){this.selectedPropertyTypes=this.formInput.propertyTypes.map(e=>e),this.propertyTypeFilterDialog=!0},applyFilters(){this.formInput.propertyTypes=this.selectedPropertyTypes.map(e=>e),this.propertyTypeFilterDialog=!1},selectPropertyType(e){const r=this.selectedPropertyTypes.findIndex(u=>u.id===e.id);r===-1?this.selectedPropertyTypes.push(e):this.selectedPropertyTypes.splice(r,1)},openStateDialog(){this.stateFilterDialog=!0},selectState(e){this.formInput.state=e,this.stateFilterDialog=!1}}},et={class:"row justify-center"},tt={class:"col col-6 col-sm-5 col-md-4 col-lg-3"},ot={class:"row"},st={class:"col"},lt={class:"col col-auto"},nt={class:"row justify-center"},rt={class:"col col-auto"},at={class:"col col-auto pl-2 md:pl-4"},it=o("div",{class:"text-center text-primary"},"Property Type",-1),ct=o("hr",null,null,-1),dt=o("hr",null,null,-1),ut=o("div",{class:"text-center text-primary"},"State",-1),pt=o("hr",null,null,-1);function mt(e,r,u,c,i,a){return d(),p(w,null,[t(j,{class:"p-3 md:p-8",square:"",style:{"background-color":"#0e2638"}},{default:n(()=>[t(g,null,{default:n(()=>[o("div",et,[o("div",tt,[t(qe,{modelValue:i.formInput.searchType,"onUpdate:modelValue":r[2]||(r[2]=s=>i.formInput.searchType=s),rounded:"",class:"fill-width"},{default:n(()=>[t(S,{rounded:"",color:i.formInput.searchType=="buy"?"primary":"white text-black",label:"Buy",class:"text-capitalize fill-width",onClick:r[0]||(r[0]=s=>a.setSearchType("buy"))},null,8,["color"]),t(S,{rounded:"",color:i.formInput.searchType=="rent"?"primary":"white text-black",label:"Rent",class:"text-capitalize fill-width",onClick:r[1]||(r[1]=s=>a.setSearchType("rent"))},null,8,["color"])]),_:1},8,["modelValue"])])])]),_:1}),t(g,null,{default:n(()=>[o("div",null,[o("div",ot,[o("div",st,[t(Le,{modelValue:i.formInput.search,"onUpdate:modelValue":r[3]||(r[3]=s=>i.formInput.search=s),placeholder:"Search Property",outlined:"",class:"bg-white",style:{"border-top-left-radius":"15px","border-bottom-left-radius":"15px"}},null,8,["modelValue"])]),o("div",lt,[t(S,{color:"primary",class:"fill-height text-capitalize",style:{"border-top-right-radius":"15px","border-bottom-right-radius":"15px"},onClick:a.searchProperty},{default:n(()=>[x("Search")]),_:1},8,["onClick"])])])])]),_:1}),t(g,{class:"text-white"},{default:n(()=>{var s;return[o("div",nt,[o("div",rt,[t(S,{flat:"",dense:"",color:"white",label:a.propertyTypeFilterLabel,"icon-right":"expand_more",class:"text-capitalize",onClick:a.openFilterDialog},null,8,["label","onClick"])]),o("div",at,[t(S,{flat:"",dense:"",color:"white",label:(s=i.formInput.state)==null?void 0:s.name,"icon-right":"expand_more",class:"text-capitalize",onClick:a.openStateDialog},null,8,["label","onClick"])])])]}),_:1})]),_:1}),t(oe,{modelValue:i.propertyTypeFilterDialog,"onUpdate:modelValue":r[4]||(r[4]=s=>i.propertyTypeFilterDialog=s)},{default:n(()=>[t(j,null,{default:n(()=>[t(g,null,{default:n(()=>[it]),_:1}),ct,t(g,{style:{"overflow-y":"auto","max-height":"65vh",padding:"0"}},{default:n(()=>[t(X,{style:{"min-width":"280px"}},{default:n(()=>[(d(!0),p(w,null,L(i.propertyTypeFilterOptions,s=>(d(),p(w,{key:s.id},[s.id!=null?(d(),D(V,{key:0,clickable:"",onClick:l=>a.selectPropertyType(s)},{default:n(()=>[t(P,{avatar:""},{default:n(()=>[t(k,{name:i.selectedPropertyTypes.findIndex(l=>l.id==s.id)!==-1?"check_box":"check_box_outline_blank"},null,8,["name"])]),_:2},1024),t(P,null,{default:n(()=>[x(f(s.name),1)]),_:2},1024)]),_:2},1032,["onClick"])):(d(),D(V,{key:1,clickable:"",onClick:l=>a.selectPropertyType(s)},{default:n(()=>[t(P,{class:"font-bold"},{default:n(()=>[x(f(s.name),1)]),_:2},1024),t(P,{avatar:""},{default:n(()=>[t(k,{name:i.selectedPropertyTypes.findIndex(l=>l.id==s.id)!==-1?"check_box":"check_box_outline_blank"},null,8,["name"])]),_:2},1024)]),_:2},1032,["onClick"]))],64))),128))]),_:1})]),_:1}),dt,t(Ue,null,{default:n(()=>[t(Ge),t(S,{label:"Apply Filters",class:"text-capitalize",color:"primary",onClick:a.applyFilters},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(oe,{modelValue:i.stateFilterDialog,"onUpdate:modelValue":r[5]||(r[5]=s=>i.stateFilterDialog=s)},{default:n(()=>[t(j,null,{default:n(()=>[t(g,null,{default:n(()=>[ut]),_:1}),pt,t(g,{style:{"overflow-y":"auto","max-height":"65vh",padding:"0"}},{default:n(()=>[t(X,{style:{"min-width":"280px"}},{default:n(()=>[(d(!0),p(w,null,L(i.stateFilterOptions,s=>(d(),D(V,{key:s.id,clickable:"",onClick:l=>a.selectState(s)},{default:n(()=>[t(P,{avatar:""},{default:n(()=>[t(k,{name:this.formInput.state.id==s.id?"radio_button_checked":"radio_button_unchecked"},null,8,["name"])]),_:2},1024),t(P,{class:"font-bold"},{default:n(()=>[x(f(s.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const ft=b(Ze,[["render",mt]]),ht={components:{SearchCard:ft},setup(){return{payload:C({name:"",email:""})}}},_t={class:"header-content uppercase"},yt={class:"col col-auto flex items-center justify-center"},vt=["src"],gt=le('<div class="col col-auto row items-center"><div class="col-12"><div class="text-2xl">amber realty</div><div class="pt-2" style="text-wrap:nowrap;"> E-(3)1482 </div></div></div><div class="col col-auto flex flex-col items-center justify-center"><img src="/images/amber_lppeh_logo.png" alt="" width="55"><div class="text-center">E-2346</div></div>',2),xt=o("div",{class:"text-lg md:text-5xl font-bold"},[x(" Are You Looking For "),o("div",{class:"header-title pt-2"})],-1),bt=o("div",{class:"text-sm"}," Are you ready to start the search for your dream home? Look no further than Amber Realty Real Estate. ",-1),Tt={class:"col-12 col-md-6"};function wt(e,r,u,c,i,a){const s=y("SearchCard");return d(),p("div",{class:h(["banner-background",e.$q.screen.lt.md?"h-full":"h-[700px] flex items-center"])},[o("div",{class:h(["row container mx-auto flex items-center",e.$q.screen.lt.md?"gap-4":"p-4"])},[o("div",{class:h(["col-12 col-md-6 flex flex-col gap-6 justify-center px-4 text-white",e.$q.screen.lt.md?"text-center hidden":""]),"data-aos":"flip-left"},[o("div",_t,[o("div",{class:h(["row uppercase text-sm font-bold gap-6",e.$q.screen.lt.md?"justify-center":""])},[o("div",yt,[o("img",{src:e.mainLogo,alt:"",width:"100"},null,8,vt)]),gt],2)]),xt,bt],2),o("div",Tt,[t(s)])],2)],2)}const kt=b(ht,[["render",wt]]),$t=Qe({name:"QTooltip",inheritAttrs:!1,props:{...De,...je,...Ae,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Z},self:{type:String,default:"top middle",validator:Z},offset:{type:Array,default:()=>[14,14],validator:Oe},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Ee],setup(e,{slots:r,emit:u,attrs:c}){let i,a;const s=Se(),{proxy:{$q:l}}=s,_=C(null),$=C(!1),A=F(()=>ee(e.anchor,l.lang.rtl)),O=F(()=>ee(e.self,l.lang.rtl)),re=F(()=>e.persistent!==!0),{registerTick:ae,removeTick:ie}=Ye(),{registerTimeout:Q}=Je(),{transitionProps:ce,transitionStyle:de}=Me(e),{localScrollTarget:B,changeScrollEvent:ue,unconfigureScrollTarget:pe}=Ve(e,R),{anchorEl:v,canShow:me,anchorEvents:I}=Be({showing:$,configureAnchorEl:xe}),{show:fe,hide:E}=He({showing:$,canShow:me,handleShow:_e,handleHide:ye,hideOnRouteChange:re,processOnMount:!0});Object.assign(I,{delayShow:ve,delayHide:ge});const{showPortal:H,hidePortal:z,renderPortal:he}=ze(s,_,Te,"tooltip");if(l.platform.is.mobile===!0){const m={anchorEl:v,innerRef:_,onClickOutside(T){return E(T),T.target.classList.contains("q-dialog__backdrop")&&Pe(T),!0}},M=F(()=>e.modelValue===null&&e.persistent!==!0&&$.value===!0);G(M,T=>{(T===!0?Re:te)(m)}),W(()=>{te(m)})}function _e(m){H(),ae(()=>{a=new MutationObserver(()=>q()),a.observe(_.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),q(),R()}),i===void 0&&(i=G(()=>l.screen.width+"|"+l.screen.height+"|"+e.self+"|"+e.anchor+"|"+l.lang.rtl,q)),Q(()=>{H(!0),u("show",m)},e.transitionDuration)}function ye(m){ie(),z(),N(),Q(()=>{z(!0),u("hide",m)},e.transitionDuration)}function N(){a!==void 0&&(a.disconnect(),a=void 0),i!==void 0&&(i(),i=void 0),pe(),Y(I,"tooltipTemp")}function q(){Ne({targetEl:_.value,offset:e.offset,anchorEl:v.value,anchorOrigin:A.value,selfOrigin:O.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ve(m){if(l.platform.is.mobile===!0){se(),document.body.classList.add("non-selectable");const M=v.value,T=["touchmove","touchcancel","touchend","click"].map(U=>[M,U,"delayHide","passiveCapture"]);J(I,"tooltipTemp",T)}Q(()=>{fe(m)},e.delay)}function ge(m){l.platform.is.mobile===!0&&(Y(I,"tooltipTemp"),se(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),Q(()=>{E(m)},e.hideDelay)}function xe(){if(e.noParentEvent===!0||v.value===null)return;const m=l.platform.is.mobile===!0?[[v.value,"touchstart","delayShow","passive"]]:[[v.value,"mouseenter","delayShow","passive"],[v.value,"mouseleave","delayHide","passive"]];J(I,"anchor",m)}function R(){if(v.value!==null||e.scrollTarget!==void 0){B.value=Ke(v.value,e.scrollTarget);const m=e.noParentEvent===!0?q:E;ue(B.value,m)}}function be(){return $.value===!0?K("div",{...c,ref:_,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",c.class],style:[c.style,de.value],role:"tooltip"},Fe(r.default)):null}function Te(){return K($e,ce.value,be)}return W(N),Object.assign(s.proxy,{updatePosition:q}),he}});const St={setup(){const e=ne(),r={limit:4},u=C([]),c=async()=>{const a=await e.fetchLatestProperty(r);return console.log(a),u.value=a,a},i=(a,s="RM")=>{const l=a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return`${s}${l}`};return Ce(()=>{c()}),{fetchLatestProperty:c,numberFormat:i,latestProperty:u}}},Pt={class:"col-12 row"},Ct={key:0,class:"col-12 row"},It={class:"relative"},qt={class:"absolute top-4 left-5 bg-secondary font-bold px-6 py-2 rounded capitalize"},Lt={class:"col-12 text-lg flex items-center justify-between"},Qt={class:"col-12 text-xl font-bold latest-property__name"},Ft=["innerHTML"],Dt={key:0,class:"flex gap-4"},jt={class:"align-middle text-lg"},At={class:"align-middle text-lg"},Ot={class:"align-middle text-lg"},Et={key:1,class:"col-12"},Mt=o("h5",{class:"text-center text-white font-bold"}," Latest Property Not Available ",-1),Vt=[Mt];function Bt(e,r,u,c,i,a){const s=y("router-link");return d(),p("div",Pt,[c.latestProperty.length>0?(d(),p("div",Ct,[(d(!0),p(w,null,L(c.latestProperty,(l,_)=>(d(),p("div",{class:"col-12 col-md-4 col-lg-3 p-2",key:_},[t(s,{to:"property/details/"+l.id},{default:n(()=>[t(j,{class:"my-card"},{default:n(()=>[o("div",It,[t(We,{src:l.banner?l.banner.image.url:"https://cdn.quasar.dev/img/parallax2.jpg",ratio:16/9,fit:"contain"},null,8,["src"]),o("div",qt," For "+f(l.listing_type),1)]),t(g,{class:"row gap-2"},{default:n(()=>[o("div",Lt,[o("div",null,f(c.numberFormat(l.price,"RM ")),1)]),o("div",Qt,[x(f(l.name)+" ",1),t($t,{"max-width":"350px"},{default:n(()=>[x(f(l.name),1)]),_:2},1024)]),o("div",{class:"col-12 text-subtitle2 latest-property__descriptions !h-[65px]",innerHTML:l.short_description},null,8,Ft)]),_:2},1024),t(g,{class:h(["q-pt-none",e.$q.screen.lt.md?"":"h-[75px]"])},{default:n(()=>[l.details_toggle?(d(),p("div",Dt,[o("div",null,[o("span",jt,f(l.details.bedroom),1),t(k,{name:"bed",size:"22px",class:"pl-1"})]),o("div",null,[o("span",At,f(l.details.bathroom),1),t(k,{name:"bathtub",size:"22px",class:"pl-1"})]),o("div",null,[o("span",Ot,f(l.details.car_park),1),t(k,{name:"directions_car",size:"22px",class:"pl-1"})])])):Ie("",!0)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to"])]))),128))])):(d(),p("div",Et,Vt))])}const Ht=b(St,[["render",Bt]]),zt={components:{LatestComponent:Ht}},Nt={class:"bg-primary"},Rt={class:"col col-auto font-bold text-white",style:{"text-wrap":"nowrap"}};function Ut(e,r,u,c,i,a){const s=y("router-link"),l=y("LatestComponent");return d(),p("div",Nt,[o("div",{class:h(["row container mx-auto gap-10",e.$q.screen.lt.sm?"py-12 px-4":"py-24 px-12"])},[o("div",{class:h(["col-12 px-2 row items-center gap-2 md:gap-0",e.$q.screen.lt.sm?"justify-center":"justify-between"])},[o("div",{class:h(["col col-auto text-3xl font-bold text-white",e.$q.screen.lt.md?"text-center":""])}," Explore Our Latest Properties ",2),o("div",Rt,[t(s,{to:{name:"property.list"}},{default:n(()=>[x("See All Property")]),_:1},8,["to"])])],2),t(l)],2)])}const Gt=b(zt,[["render",Ut]]);const Wt={setup(){const e=C({}),r=0,u=5;return e.value=[{title:"11",content:"Years in the industry",quote:"+"},{title:"100",content:"Customer satisfaction",quote:"%"},{title:"5",content:"Properties sold",quote:"K"},{title:"1",content:"Country served",quote:""}],{payload:e,numberInit:r,numberDuration:u}}},Yt={class:"bg-primary"},Jt={class:"container mx-auto row social-proof-container mx-auto flex justify-center items-center text-white gap-y-6"};function Kt(e,r,u,c,i,a){const s=y("number");return d(),p("div",Yt,[o("div",Jt,[(d(!0),p(w,null,L(c.payload,(l,_)=>(d(),p("div",{class:"col-6 col-md-3 text-center q-gutter-y-sm",key:_},[o("div",{class:h(["font-bold",e.$q.screen.lt.sm?"text-4xl":"text-7xl"])},[t(s,{class:"bold transition",ref_for:!0,ref:"number2",from:c.numberInit,to:l.title||c.numberInit,duration:c.numberDuration},null,8,["from","to","duration"]),x(f(l.quote),1)],2),o("div",{class:h(e.$q.screen.lt.sm?"text-md":"text-lg")},f(l.content),3)]))),128))])])}const Xt=b(Wt,[["render",Kt]]);const Zt={},eo={class:"bg-secondary"},to=le('<div class="col-12 col-md-7 text-2xl md:text-4xl font-bold"> Contact Us to Start Your Real Estate Journey ! </div><div class="col-12 col-md-3 text-center text-xl font-bold text-white" style="width:250px;"><a href="https://wa.me/60123729668?text=I&#39;m%20interested%20in%20property%20for%20sale" target="_blank"><div class="bg-primary px-8 py-4 rounded row"><div class="col-2"><img src="/images/amber_whatsapp.png" alt="" width="55"></div><div class="col-10">0123729668</div></div></a></div>',2),oo=[to];function so(e,r){return d(),p("div",eo,[o("div",{class:h(["row justify-around items-center container mx-auto q-gutter-y-lg call-to-action-container",e.$q.screen.lt.md?"text-center":""])},oo,2)])}const lo=b(Zt,[["render",so]]),no={setup(){const e=C([]);return e.value=[{title:"Innovate for Exceptional Service",description:"Commitment in business through innovation <br> to provide exceptional customer service.",icon:"home"},{title:"Build Strong Connections",description:"Build lifetime relationships <br> with our customers and communities.",icon:"real_estate_agent"},{title:"Maximize Business Success",description:"Optimize relationships,<br>service and profitability.",icon:"key"}],{missionStatement:e}}},ro={class:""},ao={class:"col-12"},io={class:"w-[125px] h-[125px] m-auto rounded-full flex justify-center items-center bg-secondary"},co={class:"col-12 text-xl font-bold h-[50px] text-white"},uo=["innerHTML"];function po(e,r,u,c,i,a){return d(),p("div",ro,[o("div",{class:h(["row container mx-auto py-24 justify-between",e.$q.screen.lt.sm?"px-4 q-gutter-y-md":"px-12"])},[o("div",{class:h(["col-12 text-3xl font-bold pb-8",e.$q.screen.lt.md?"text-center":""])}," Mission Statement ",2),(d(!0),p(w,null,L(c.missionStatement,(s,l)=>(d(),p("div",{class:"col-12 col-md-3 text-center py-12 px-8 row gap-8 border rounded-lg bg-primary","data-aos":"flip-left","data-aos-duration":"1500",key:l},[o("div",ao,[o("div",io,[t(k,{name:s.icon,size:"64px"},null,8,["name"])])]),o("div",co,f(s.title),1),o("div",{class:"col-12 h-[50px] text-white",innerHTML:s.description},null,8,uo)]))),128))],2)])}const mo=b(no,[["render",po]]),fo={components:{BaseLayout:Xe,HeaderContainer:kt,PropertiesContainer:Gt,SocialProof:Xt,CallToAction:lo,MissionStatement:mo}};function ho(e,r,u,c,i,a){const s=y("HeaderContainer"),l=y("PropertiesContainer"),_=y("MissionStatement"),$=y("SocialProof"),A=y("CallToAction"),O=y("BaseLayout");return d(),D(O,null,{content:n(()=>[t(we,{class:"mt-20"},{default:n(()=>[t(s,{"data-aos":"fade-up"}),t(l,{"data-aos":"fade-left"}),t(_,{"data-aos":"fade-right"}),t($,{"data-aos":"fade-right"}),t(A,{"data-aos":"fade-left"})]),_:1})]),_:1})}const Ao=b(fo,[["render",ho]]);export{Ao as default};
