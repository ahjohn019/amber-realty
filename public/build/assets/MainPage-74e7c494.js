import{a as ke}from"./QLayout-61c54ef7.js";import{aq as $e,B as b,n as d,x as p,D as t,s as l,A as o,F as x,H as w,a5 as L,q as F,G as f,r as C,m as y,a7 as h,ar as le,l as D,w as G,j as W,$ as Y,U as J,E as K,ao as Pe,L as Se,M as Ce,o as Ie,a6 as X}from"./ckeditor-a0aa7a69.js";import{Q as P}from"./QBtn-37afbeba.js";import{c as qe,Q as Z}from"./QSeparator-bde45721.js";import{Q as g}from"./QCardSection-50d6bba9.js";import{Q as Le}from"./QInput-c54598d5.js";import{Q as j}from"./QCard-ccef643e.js";import{Q as k,c as Qe,e as De}from"./vm-f8b8bcbe.js";import{Q as M,a as S,f as Fe,u as je,h as Ae,v as ee,i as Oe,d as Ee,p as te,j as Ve,k as Me,l as Be,e as He,m as ze,r as oe,n as Ne,g as Re,o as Ue}from"./QMenu-c7ea5fc0.js";import{a as Ge,Q as We}from"./QCardActions-02e22a6f.js";import{Q as se}from"./QDialog-af0dd9d6.js";import{u as re}from"./index-85fdba36.js";import{Q as Ye}from"./QImg-216eda12.js";import{a as Je,u as Ke,c as ne}from"./use-timeout-56b577c5.js";import{B as Xe}from"./BaseLayout-9772c297.js";import"./QResizeObserver-c362dc24.js";import"./use-key-composition-7e47981d.js";import"./use-prevent-scroll-7265dd5d.js";import"./QToolbar-0b2b34ae.js";import"./ClosePopup-f1b06935.js";import"./dayjs.min-ba1b0cd6.js";const Ze={data(){return{formInput:{search:"",searchType:"buy",propertyTypes:[],selectedState:{}},selectedPropertyTypes:[],propertyTypeFilterOptions:[],propertyTypeFilterDialog:!1,stateFilterOptions:[],stateFilterDialog:!1}},computed:{...$e(re),propertyTypeFilterLabel(){return"Property Types ("+this.formInput.propertyTypes.filter(e=>e.id!=null).length+")"}},created(){this.propertyTypeFilterOptions=[],this.formInput.propertyTypes=[],this.formInput.state={id:null,name:"All State"},this.fetchPropertyFilterOptionGroup()},methods:{setSearchType(e){this.formInput.searchType=e},searchProperty(){const{searchType:e,search:r,propertyTypes:u,state:i}=this.formInput,a=u.findIndex(s=>s.id===null)!==-1;let c;a?c=0:c=u.map(s=>s.id).join(","),this.$router.push({name:"property.list",query:{t:e,s:r,pt:c,state:i.id}})},async fetchPropertyFilterOptionGroup(){const e={propertyTypes:1,states:1},r=await this.property_webStore.fetchPropertyFilterOptionGroup(e),u=r.property_types.map(i=>({id:i.id,name:i.name}));this.propertyTypeFilterOptions=[...u],this.formInput.propertyTypes=this.propertyTypeFilterOptions.map(i=>i),this.selectedPropertyTypes=this.propertyTypeFilterOptions.map(i=>i),this.stateFilterOptions=[{id:null,name:"All State"},...r.states]},openFilterDialog(){this.selectedPropertyTypes=this.formInput.propertyTypes.map(e=>e),this.propertyTypeFilterDialog=!0},applyFilters(){this.formInput.propertyTypes=this.selectedPropertyTypes.map(e=>e),this.propertyTypeFilterDialog=!1},selectPropertyType(e){const r=this.selectedPropertyTypes.findIndex(u=>u.id===e.id);r===-1?this.selectedPropertyTypes.push(e):this.selectedPropertyTypes.splice(r,1)},openStateDialog(){this.stateFilterDialog=!0},selectState(e){this.formInput.state=e,this.stateFilterDialog=!1}}},et={class:"row justify-center"},tt={class:"col col-6 col-sm-5 col-md-4 col-lg-3"},ot={class:"row"},st={class:"col"},nt={class:"col col-auto"},lt={class:"row justify-center"},rt={class:"col col-auto"},at={class:"col col-auto pl-2 md:pl-4"},it=o("div",{class:"text-center text-primary"},"Property Type",-1),ct=o("hr",null,null,-1),dt=o("hr",null,null,-1),ut=o("div",{class:"text-center text-primary"},"State",-1),pt=o("hr",null,null,-1);function mt(e,r,u,i,a,c){return d(),p(w,null,[t(j,{class:"p-3 md:p-8",square:"",style:{"background-color":"#0e2638"}},{default:l(()=>[t(g,null,{default:l(()=>[o("div",et,[o("div",tt,[t(qe,{modelValue:a.formInput.searchType,"onUpdate:modelValue":r[2]||(r[2]=s=>a.formInput.searchType=s),rounded:"",class:"fill-width"},{default:l(()=>[t(P,{rounded:"",color:a.formInput.searchType=="buy"?"primary":"white text-black",label:"Buy",class:"text-capitalize fill-width",onClick:r[0]||(r[0]=s=>c.setSearchType("buy"))},null,8,["color"]),t(P,{rounded:"",color:a.formInput.searchType=="rent"?"primary":"white text-black",label:"Rent",class:"text-capitalize fill-width",onClick:r[1]||(r[1]=s=>c.setSearchType("rent"))},null,8,["color"])]),_:1},8,["modelValue"])])])]),_:1}),t(g,null,{default:l(()=>[o("div",null,[o("div",ot,[o("div",st,[t(Le,{modelValue:a.formInput.search,"onUpdate:modelValue":r[3]||(r[3]=s=>a.formInput.search=s),placeholder:"Search Property",outlined:"",class:"bg-white",style:{"border-top-left-radius":"15px","border-bottom-left-radius":"15px"}},null,8,["modelValue"])]),o("div",nt,[t(P,{color:"primary",class:"fill-height text-capitalize",style:{"border-top-right-radius":"15px","border-bottom-right-radius":"15px"},onClick:c.searchProperty},{default:l(()=>[x("Search")]),_:1},8,["onClick"])])])])]),_:1}),t(g,{class:"text-white"},{default:l(()=>{var s;return[o("div",lt,[o("div",rt,[t(P,{flat:"",dense:"",color:"white",label:c.propertyTypeFilterLabel,"icon-right":"expand_more",class:"text-capitalize",onClick:c.openFilterDialog},null,8,["label","onClick"])]),o("div",at,[t(P,{flat:"",dense:"",color:"white",label:(s=a.formInput.state)==null?void 0:s.name,"icon-right":"expand_more",class:"text-capitalize",onClick:c.openStateDialog},null,8,["label","onClick"])])])]}),_:1})]),_:1}),t(se,{modelValue:a.propertyTypeFilterDialog,"onUpdate:modelValue":r[4]||(r[4]=s=>a.propertyTypeFilterDialog=s)},{default:l(()=>[t(j,null,{default:l(()=>[t(g,null,{default:l(()=>[it]),_:1}),ct,t(g,{style:{"overflow-y":"auto","max-height":"65vh",padding:"0"}},{default:l(()=>[t(Z,{style:{"min-width":"280px"}},{default:l(()=>[(d(!0),p(w,null,L(a.propertyTypeFilterOptions,s=>(d(),p(w,{key:s.id},[s.id!=null?(d(),F(M,{key:0,clickable:"",onClick:n=>c.selectPropertyType(s)},{default:l(()=>[t(S,{avatar:""},{default:l(()=>[t(k,{name:a.selectedPropertyTypes.findIndex(n=>n.id==s.id)!==-1?"check_box":"check_box_outline_blank"},null,8,["name"])]),_:2},1024),t(S,null,{default:l(()=>[x(f(s.name),1)]),_:2},1024)]),_:2},1032,["onClick"])):(d(),F(M,{key:1,clickable:"",onClick:n=>c.selectPropertyType(s)},{default:l(()=>[t(S,{class:"font-bold"},{default:l(()=>[x(f(s.name),1)]),_:2},1024),t(S,{avatar:""},{default:l(()=>[t(k,{name:a.selectedPropertyTypes.findIndex(n=>n.id==s.id)!==-1?"check_box":"check_box_outline_blank"},null,8,["name"])]),_:2},1024)]),_:2},1032,["onClick"]))],64))),128))]),_:1})]),_:1}),dt,t(Ge,null,{default:l(()=>[t(We),t(P,{label:"Apply Filters",class:"text-capitalize",color:"primary",onClick:c.applyFilters},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(se,{modelValue:a.stateFilterDialog,"onUpdate:modelValue":r[5]||(r[5]=s=>a.stateFilterDialog=s)},{default:l(()=>[t(j,null,{default:l(()=>[t(g,null,{default:l(()=>[ut]),_:1}),pt,t(g,{style:{"overflow-y":"auto","max-height":"65vh",padding:"0"}},{default:l(()=>[t(Z,{style:{"min-width":"280px"}},{default:l(()=>[(d(!0),p(w,null,L(a.stateFilterOptions,s=>(d(),F(M,{key:s.id,clickable:"",onClick:n=>c.selectState(s)},{default:l(()=>[t(S,{avatar:""},{default:l(()=>[t(k,{name:this.formInput.state.id==s.id?"radio_button_checked":"radio_button_unchecked"},null,8,["name"])]),_:2},1024),t(S,{class:"font-bold"},{default:l(()=>[x(f(s.name),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const ft=b(Ze,[["render",mt]]),ht={components:{SearchCard:ft},setup(){return{payload:C({name:"",email:""})}}},_t={class:"header-content uppercase"},yt={class:"col-12 col-md-2 flex items-center justify-center"},vt=["src"],gt=le('<div class="col-12 col-md-8 row items-center"><div class="col-12 col-md-6"><div>amber realty</div><div class="row justify-between items-center"><div class="col-12 col-md-4" style="text-wrap:nowrap;"> E-(3)1482 </div><div class="col-12 col-md-4 flex flex-col justify-center items-center"><img src="/images/amber_lppeh_logo.png" alt="" width="25"><div class="text-center">E-2346</div></div></div></div></div>',1),xt=o("div",{class:"text-lg md:text-5xl font-bold"},[x(" Are You Looking For "),o("div",{class:"header-title pt-2"})],-1),bt=o("div",{class:"text-sm"}," Are you ready to start the search for your dream home? Look no further than Amber Realty Real Estate. ",-1),Tt={class:"col-12 col-md-6"};function wt(e,r,u,i,a,c){const s=y("SearchCard");return d(),p("div",{class:h(["banner-background",e.$q.screen.lt.md?"h-full":"h-[700px] flex items-center"])},[o("div",{class:h(["row container mx-auto flex items-center",e.$q.screen.lt.md?"gap-4":"p-4"])},[o("div",{class:h(["col-12 col-md-6 flex flex-col gap-6 justify-center px-4 text-white",e.$q.screen.lt.md?"text-center":""]),"data-aos":"flip-left"},[o("div",_t,[o("div",{class:h(["row uppercase text-sm font-bold gap-2",e.$q.screen.lt.md?"justify-center":""])},[o("div",yt,[o("img",{src:e.mainLogo,alt:"",width:"100"},null,8,vt)]),gt],2)]),xt,bt],2),o("div",Tt,[t(s)])],2)],2)}const kt=b(ht,[["render",wt]]),$t=Qe({name:"QTooltip",inheritAttrs:!1,props:{...Fe,...je,...Ae,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ee},self:{type:String,default:"top middle",validator:ee},offset:{type:Array,default:()=>[14,14],validator:Oe},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Ee],setup(e,{slots:r,emit:u,attrs:i}){let a,c;const s=Se(),{proxy:{$q:n}}=s,_=C(null),$=C(!1),A=D(()=>te(e.anchor,n.lang.rtl)),O=D(()=>te(e.self,n.lang.rtl)),ae=D(()=>e.persistent!==!0),{registerTick:ie,removeTick:ce}=Je(),{registerTimeout:Q}=Ke(),{transitionProps:de,transitionStyle:ue}=Ve(e),{localScrollTarget:B,changeScrollEvent:pe,unconfigureScrollTarget:me}=Me(e,R),{anchorEl:v,canShow:fe,anchorEvents:I}=Be({showing:$,configureAnchorEl:be}),{show:he,hide:E}=He({showing:$,canShow:fe,handleShow:ye,handleHide:ve,hideOnRouteChange:ae,processOnMount:!0});Object.assign(I,{delayShow:ge,delayHide:xe});const{showPortal:H,hidePortal:z,renderPortal:_e}=ze(s,_,we,"tooltip");if(n.platform.is.mobile===!0){const m={anchorEl:v,innerRef:_,onClickOutside(T){return E(T),T.target.classList.contains("q-dialog__backdrop")&&Ce(T),!0}},V=D(()=>e.modelValue===null&&e.persistent!==!0&&$.value===!0);G(V,T=>{(T===!0?Ue:oe)(m)}),W(()=>{oe(m)})}function ye(m){H(),ie(()=>{c=new MutationObserver(()=>q()),c.observe(_.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),q(),R()}),a===void 0&&(a=G(()=>n.screen.width+"|"+n.screen.height+"|"+e.self+"|"+e.anchor+"|"+n.lang.rtl,q)),Q(()=>{H(!0),u("show",m)},e.transitionDuration)}function ve(m){ce(),z(),N(),Q(()=>{z(!0),u("hide",m)},e.transitionDuration)}function N(){c!==void 0&&(c.disconnect(),c=void 0),a!==void 0&&(a(),a=void 0),me(),Y(I,"tooltipTemp")}function q(){Ne({targetEl:_.value,offset:e.offset,anchorEl:v.value,anchorOrigin:A.value,selfOrigin:O.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ge(m){if(n.platform.is.mobile===!0){ne(),document.body.classList.add("non-selectable");const V=v.value,T=["touchmove","touchcancel","touchend","click"].map(U=>[V,U,"delayHide","passiveCapture"]);J(I,"tooltipTemp",T)}Q(()=>{he(m)},e.delay)}function xe(m){n.platform.is.mobile===!0&&(Y(I,"tooltipTemp"),ne(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),Q(()=>{E(m)},e.hideDelay)}function be(){if(e.noParentEvent===!0||v.value===null)return;const m=n.platform.is.mobile===!0?[[v.value,"touchstart","delayShow","passive"]]:[[v.value,"mouseenter","delayShow","passive"],[v.value,"mouseleave","delayHide","passive"]];J(I,"anchor",m)}function R(){if(v.value!==null||e.scrollTarget!==void 0){B.value=Re(v.value,e.scrollTarget);const m=e.noParentEvent===!0?q:E;pe(B.value,m)}}function Te(){return $.value===!0?K("div",{...i,ref:_,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",i.class],style:[i.style,ue.value],role:"tooltip"},De(r.default)):null}function we(){return K(Pe,de.value,Te)}return W(N),Object.assign(s.proxy,{updatePosition:q}),_e}});const Pt={setup(){const e=re(),r={limit:4},u=C([]),i=async()=>{const a=await e.fetchLatestProperty(r);return console.log(a),u.value=a,a};return Ie(()=>{i()}),{fetchLatestProperty:i,latestProperty:u}}},St={class:"col-12 row"},Ct={key:0,class:"col-12 row"},It={key:0,class:"relative"},qt={class:"absolute top-4 left-5 bg-secondary font-bold px-6 py-2 rounded capitalize"},Lt={class:"col-12 text-lg flex items-center justify-between"},Qt={class:"col-12 text-xl font-bold latest-property__name"},Dt=["innerHTML"],Ft={key:0,class:"flex gap-4"},jt={class:"align-middle text-lg"},At={class:"align-middle text-lg"},Ot={class:"align-middle text-lg"},Et={key:1,class:"col-12"},Vt=o("h5",{class:"text-center"},"Latest Property Not Available",-1),Mt=[Vt];function Bt(e,r,u,i,a,c){const s=y("router-link");return d(),p("div",St,[i.latestProperty.length>0?(d(),p("div",Ct,[(d(!0),p(w,null,L(i.latestProperty,(n,_)=>(d(),p("div",{class:"col-12 col-md-4 col-lg-3 p-2",key:_},[t(s,{to:"property/details/"+n.id},{default:l(()=>[t(j,{class:"my-card"},{default:l(()=>[n.banner?(d(),p("div",It,[t(Ye,{src:n.banner.image.url,ratio:16/9,fit:"contain"},null,8,["src"]),o("div",qt," For "+f(n.listing_type),1)])):X("",!0),t(g,{class:"row gap-2"},{default:l(()=>[o("div",Lt,[o("div",{class:h(["bg-secondary font-bold px-2 py-2 rounded capitalize",n.banner?"hidden":""])}," For "+f(n.listing_type),3),o("div",null,"RM "+f(n.price),1)]),o("div",Qt,[x(f(n.name)+" ",1),t($t,{"max-width":"350px"},{default:l(()=>[x(f(n.name),1)]),_:2},1024)]),o("div",{class:"col-12 text-subtitle2 latest-property__descriptions !h-[65px]",innerHTML:n.short_description},null,8,Dt)]),_:2},1024),t(g,{class:h(["q-pt-none",e.$q.screen.lt.md?"":"h-[75px]"])},{default:l(()=>[n.details?(d(),p("div",Ft,[o("div",null,[o("span",jt,f(n.details.bedroom),1),t(k,{name:"bed",size:"22px",class:"pl-1"})]),o("div",null,[o("span",At,f(n.details.bathroom),1),t(k,{name:"bathtub",size:"22px",class:"pl-1"})]),o("div",null,[o("span",Ot,f(n.details.car_park),1),t(k,{name:"directions_car",size:"22px",class:"pl-1"})])])):X("",!0)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to"])]))),128))])):(d(),p("div",Et,Mt))])}const Ht=b(Pt,[["render",Bt]]),zt={components:{LatestComponent:Ht}},Nt={class:"bg-primary"},Rt={class:"col col-auto font-bold text-white"};function Ut(e,r,u,i,a,c){const s=y("router-link"),n=y("LatestComponent");return d(),p("div",Nt,[o("div",{class:h(["row container mx-auto gap-10",e.$q.screen.lt.sm?"py-12 px-4":"py-24 px-12"])},[o("div",{class:h(["col-12 px-2 row items-center gap-2 md:gap-0",e.$q.screen.lt.sm?"justify-center":"justify-between"])},[o("div",{class:h(["col col-auto text-3xl font-bold text-white",e.$q.screen.lt.md?"text-center":""])}," Explore Our Latest Properties ",2),o("div",Rt,[t(s,{to:{name:"property.list"}},{default:l(()=>[x("See All Property")]),_:1},8,["to"])])],2),t(n)],2)])}const Gt=b(zt,[["render",Ut]]);const Wt={setup(){const e=C({}),r=0,u=5;return e.value=[{title:"11",content:"Years in the industry",quote:"+"},{title:"100",content:"Customer satisfaction",quote:"%"},{title:"5",content:"Properties sold",quote:"K"},{title:"1",content:"Country served",quote:""}],{payload:e,numberInit:r,numberDuration:u}}},Yt={class:"bg-primary"},Jt={class:"container mx-auto row social-proof-container mx-auto flex justify-center items-center text-white gap-y-6"};function Kt(e,r,u,i,a,c){const s=y("number");return d(),p("div",Yt,[o("div",Jt,[(d(!0),p(w,null,L(i.payload,(n,_)=>(d(),p("div",{class:"col-6 col-md-3 text-center q-gutter-y-sm",key:_},[o("div",{class:h(["font-bold",e.$q.screen.lt.sm?"text-4xl":"text-7xl"])},[t(s,{class:"bold transition",ref_for:!0,ref:"number2",from:i.numberInit,to:n.title||i.numberInit,duration:i.numberDuration},null,8,["from","to","duration"]),x(f(n.quote),1)],2),o("div",{class:h(e.$q.screen.lt.sm?"text-md":"text-lg")},f(n.content),3)]))),128))])])}const Xt=b(Wt,[["render",Kt]]);const Zt={},eo={class:"bg-secondary"},to=le('<div class="col-12 col-md-7 text-2xl md:text-4xl font-bold"> Contact Us to Start Your Real Estate Journey ! </div><div class="col-12 col-md-3 text-center text-xl font-bold text-white" style="width:250px;"><a href="https://wa.me/60123729668?text=I&#39;m%20interested%20in%20property%20for%20sale" target="_blank"><div class="bg-primary px-8 py-4 rounded row"><div class="col-2"><img src="/images/amber_whatsapp.png" alt="" width="55"></div><div class="col-10">0123729668</div></div></a></div>',2),oo=[to];function so(e,r){return d(),p("div",eo,[o("div",{class:h(["row justify-around items-center container mx-auto q-gutter-y-lg call-to-action-container",e.$q.screen.lt.md?"text-center":""])},oo,2)])}const no=b(Zt,[["render",so]]),lo={setup(){const e=C([]);return e.value=[{title:"Innovate for Exceptional Service",description:"Commitment in business through innovation <br> to provide exceptional customer service.",icon:"home"},{title:"Build Strong Connections",description:"Build lifetime relationships <br> with our customers and communities.",icon:"real_estate_agent"},{title:"Maximize Business Success",description:"Optimize relationships,<br>service and profitability.",icon:"key"}],{missionStatement:e}}},ro={class:""},ao={class:"col-12"},io={class:"w-[125px] h-[125px] m-auto rounded-full flex justify-center items-center bg-secondary"},co={class:"col-12 text-xl font-bold h-[50px] text-white"},uo=["innerHTML"];function po(e,r,u,i,a,c){return d(),p("div",ro,[o("div",{class:h(["row container mx-auto py-24 justify-between",e.$q.screen.lt.sm?"px-4 q-gutter-y-md":"px-12"])},[o("div",{class:h(["col-12 text-3xl font-bold pb-8",e.$q.screen.lt.md?"text-center":""])}," Mission Statement ",2),(d(!0),p(w,null,L(i.missionStatement,(s,n)=>(d(),p("div",{class:"col-12 col-md-3 text-center py-12 px-8 row gap-8 border rounded-lg bg-primary","data-aos":"flip-left","data-aos-duration":"1500",key:n},[o("div",ao,[o("div",io,[t(k,{name:s.icon,size:"64px"},null,8,["name"])])]),o("div",co,f(s.title),1),o("div",{class:"col-12 h-[50px] text-white",innerHTML:s.description},null,8,uo)]))),128))],2)])}const mo=b(lo,[["render",po]]),fo={components:{BaseLayout:Xe,HeaderContainer:kt,PropertiesContainer:Gt,SocialProof:Xt,CallToAction:no,MissionStatement:mo}};function ho(e,r,u,i,a,c){const s=y("HeaderContainer"),n=y("PropertiesContainer"),_=y("MissionStatement"),$=y("SocialProof"),A=y("CallToAction"),O=y("BaseLayout");return d(),F(O,null,{content:l(()=>[t(ke,{class:"mt-20"},{default:l(()=>[t(s,{"data-aos":"fade-up"}),t(n,{"data-aos":"fade-left"}),t(_,{"data-aos":"fade-right"}),t($,{"data-aos":"fade-right"}),t(A,{"data-aos":"fade-left"})]),_:1})]),_:1})}const Oo=b(fo,[["render",ho]]);export{Oo as default};