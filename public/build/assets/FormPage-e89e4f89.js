import{k as X,B as L,L as ce,M as pe,a9 as te,e as Y,z as oe,r as p,m as x,u as V,A as s,q as h,R as ue,F as j,T as Z,y as t,D as R,E as y,U as ae,l as z,W as b}from"./ckeditor-1f01ba18.js";import{c as me,Q as _e}from"./vm-b527d13a.js";import{u as fe,a as he,b as ye}from"./use-checkbox-a609e905.js";import{Q as C}from"./QInput-1c6fe204.js";import{Q as S}from"./QSelect-4c6fe849.js";import{Q as P}from"./QBtn-09f09286.js";import{C as ge,D as ve,u as De}from"./refList-b2c315d4.js";import{a as be,u as xe}from"./index-324af84b.js";import{S as N,u as se}from"./auth-87fe8d82.js";import{Q as Ve,a as Ce}from"./QCardActions-2c0de876.js";import{Q as I}from"./QCardSection-e1ef0963.js";import{Q as Se}from"./QImg-a5069984.js";import{Q as O}from"./QChip-752c3723.js";import{Q as $}from"./QCard-d2a7cc43.js";import{Q as Ie}from"./QDialog-118807cb.js";import{C as ke}from"./ClosePopup-c68a95fc.js";import"./option-sizes-86973804.js";import"./QMenu-5535f0f5.js";import"./use-tick-516cb021.js";import"./rtl-36dd996b.js";import"./format-7985d814.js";import"./use-prevent-scroll-735f2f8f.js";const Fe=me({name:"QToggle",props:{...fe,icon:String,iconColor:String},emits:he,setup(n){function o(d,e){const i=X(()=>(d.value===!0?n.checkedIcon:e.value===!0?n.indeterminateIcon:n.uncheckedIcon)||n.icon),u=X(()=>d.value===!0?n.iconColor:null);return()=>[L("div",{class:"q-toggle__track"}),L("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},i.value!==void 0?[L(_e,{name:i.value,color:u.value})]:void 0)]}return ye("toggle",o)}}),ee="/api/server-files/",Pe=ce("server_image_admin",{state:()=>({post_image_admin:null,router:pe(),route:te()}),actions:{async updateFiles(n,o=null,d){const e={headers:{Authorization:`Bearer ${d}`,"Content-Type":"multipart/form-data"}};try{const i={files:n,sequenceFiles:o};console.log(i);const u=await Y.post(ee+"update",i,e);return N.fire({text:"Image Update Successfully",icon:"success"}).then(a=>{a.isConfirmed&&this.router.go(0)}),u.data}catch(i){return N.fire({title:i.response.data.data,text:i.response.data.message,icon:"error"}),i.response}},async deleteFiles(n,o){const d={headers:{Authorization:`Bearer ${o}`,"Content-Type":"multipart/form-data"}};try{const e=await Y.post(ee+"delete",n,d);return N.fire({text:"Image Deleted Successfully",icon:"success"}).then(i=>{i.isConfirmed&&this.router.go(0)}),e.data}catch(e){throw console.error("Error:",e),e}},findIncomingFiles(n,o){return n.value.find(d=>d.id===o)||null},handleMultipleImageChange(n,o){const d=o.target,e=parseInt(d.id),i=d.files[0],u=d.getAttribute("index"),a=d.getAttribute("module_path");return this.findIncomingFiles(n,e)?n.value[u].file=i:n.value.push({id:e,file:i,module_path:a}),n}}});const we={props:["property"],setup(n){const o=se(),d=Pe(),e=o.fetchSessionToken(),i=p(!1),u=p([]),a=p([]),m=p(null),c=p([]);return a.value=[n.property.banner,...n.property.sliders].filter(_=>_!==null),c.value=a.value.filter(_=>_.image.module_path!=="banner-image"),{existImageModal:i,updateFileData:async()=>{const _=c.value.map(g=>({id:g.id,seq_value:g.seq_value,entity_id:g.entity_id,module_path:g.image.module_path})),D=await d.updateFiles(u.value,_,e);return i.value=!1,D},handleFileChange:_=>d.handleMultipleImageChange(u,_),handleDeleteFile:async _=>{const D=await d.deleteFiles(_,e);return i.value=!1,D},finalFiles:a,handleExistImageSequence:async(_,D)=>{const g=c.value.findIndex(F=>F.seq_value===D),w=c.value.findIndex(F=>F.seq_value===parseInt(_.target.value));c.value[g].seq_value=parseInt(_.target.value),c.value[w].seq_value=D},optionsRef:m,filterBannerImage:c}}},qe=t("div",{class:"text-h5"},"Edit",-1),Te={class:"col row"},Ue={class:"col"},Qe={class:"text-subtitle1 break-words"},Ae={class:"text-subtitle2"},Me={class:"text-subtitle2"},Ee={key:0},Be=["index","module_path","onChange"],Le=["value","selected"],je=["id","module_path","index"];function Re(n,o,d,e,i,u){return x(),V(j,null,[s(P,{label:"Edit",color:"primary",onClick:o[0]||(o[0]=a=>e.existImageModal=!0),class:"edit-image-form__button"}),s(Ie,{modelValue:e.existImageModal,"onUpdate:modelValue":o[2]||(o[2]=a=>e.existImageModal=a)},{default:h(()=>[s($,null,{default:h(()=>[s(I,{class:"row items-center"},{default:h(()=>[qe,s(Ve),ue(s(P,{icon:"close",flat:"",round:"",dense:""},null,512),[[ke]])]),_:1}),s(I,{class:"q-pt-none q-gutter-y-lg row"},{default:h(()=>[(x(!0),V(j,null,Z(e.finalFiles,(a,m)=>(x(),V("div",{class:"col-12 row items-center",key:m},[t("div",Te,[t("div",Ue,[s($,{class:"my-card"},{default:h(()=>[s(Se,{src:a.image.url,ratio:16/9,fit:"contain"},null,8,["src"]),s(I,null,{default:h(()=>[t("div",Qe,[s(O,{color:"primary","text-color":"white"},{default:h(()=>[R(y(a.image.name),1)]),_:2},1024)]),t("div",Ae,[s(O,{color:"teal","text-color":"white",icon:"bookmark"},{default:h(()=>[R(y(Math.round(a.image.size/1e3)+"kb"),1)]),_:2},1024)]),t("div",Me,[s(O,{color:"teal","text-color":"white",icon:"bookmark"},{default:h(()=>[R(y(a.image.module_path),1)]),_:2},1024)]),a.image.module_path!="banner-image"?(x(),V("div",Ee,[t("select",{index:m,module_path:a.image.module_path,onChange:c=>e.handleExistImageSequence(c,a.seq_value)},[(x(!0),V(j,null,Z(e.filterBannerImage.length,(c,l)=>(x(),V("option",{value:c,key:l,selected:a.seq_value===c},y(c),9,Le))),128))],40,Be)])):ae("",!0)]),_:2},1024),s(I,{class:"justify-center flex"},{default:h(()=>[s(I,{class:"col-8"},{default:h(()=>[t("input",{type:"file",multiple:"",name:"file",id:a.id,module_path:a.image.module_path,index:m,class:"hidden-input",onChange:o[1]||(o[1]=(...c)=>e.handleFileChange&&e.handleFileChange(...c)),ref_for:!0,ref:"currentFile",accept:".pdf,.jpg,.jpeg,.png"},null,40,je)]),_:2},1024)]),_:2},1024),s(I,{class:"justify-center flex"},{default:h(()=>[s(P,{size:"14px",round:"",color:"red",icon:"delete",onClick:c=>e.handleDeleteFile(a)},null,8,["onClick"])]),_:2},1024)]),_:2},1024)])])]))),128))]),_:1}),s(Ce,{align:"right"},{default:h(()=>[s(P,{label:"Update",class:"text-white bg-primary update-form__button",onClick:e.updateFileData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const ze=oe(we,[["render",Re]]);const Ne={components:{CkeditorPlugin:ge,DropFile:ve,ExistImageModal:ze},async setup(){var H,J;const n=te(),o=((H=n.query)==null?void 0:H.type)||null,d=((J=n.query)==null?void 0:J.id)||null,e=be(),i=De(),u=xe(),a=p(e.fetchPropertyData()),m=p(e.fetchPropertyDetailsData()),c=p(e.fetchPropertyError()),l=p([]),T=p(0),k=p(!1),U=p([]),_=p([]),D=p(null),g=p(""),w=p(""),F=p(!1),q=se().fetchSessionToken(),Q=e.fetchTenureData(),A=e.fetchFurnishingData(),M=e.fetchListingTypeData(),K=e.fetchStatusData();a.value.listing_type=M.find(r=>r.slug==="sale"),a.value.status=K.find(r=>r.slug==="active"),m.value.tenure=Q.find(r=>r.slug==="freehold"),m.value.furnishing=A.find(r=>r.slug==="unfurnished");const W=async()=>{const r=await i.fetchStateList(q);U.value=r},E=async()=>{const r=await i.fetchPropertyTypes(q);return _.value=r,r},le=()=>(T.value=k.value?1:0,T.value),ne=r=>{a.value={...a.value,images:r.files,module_path:r.module_path,sequences:r.sequences}},re=r=>{g.value=URL.createObjectURL(r.target.files[0]),w.value=r.target.files[0]},ie=r=>{a.value.description=r},G=async()=>{const r=await E(),f=await u.findProperty(q,d),{details:v}=f;a.value={...a.value,name:f.name,description:f.description,short_description:f.short_description,state:f.state,price:f.price,file:f.file,banner:f.banner,sliders:f.sliders,listing_type:f.listing_type,details:f.details_toggle,property_types:u.handleFilteredPropertyDetails(r,f.type,"propertyType")},a.value.short_description=a.value.short_description.replace(/<[^>]+>/g,""),a.value.listing_type=M.find(B=>B.slug===a.value.listing_type),k.value=a.value.details,v&&(m.value={...m.value,tenure:u.handleFilteredPropertyDetails(Q,v.tenure),square_feet:v.square_feet,furnishing:u.handleFilteredPropertyDetails(A,v.furnishing),bedroom:v.bedroom,bathroom:v.bathroom,car_park:v.car_park})},de=async()=>{if(a.value={...a.value,property_details:k.value?1:0,banner_url:w.value},a.value.property_details>0)a.value={...a.value,...m.value};else{const f=Object.keys(m.value),v=Object.fromEntries(Object.entries(a.value).filter(([B])=>!f.includes(B)));a.value=v}return await u.createProperty(q,a.value,c)};return o==="update"&&await G(),await W(),await E(),{findProperty:G,propertyData:a,propertyDetailsData:m,submitData:de,updateParentFiles:ne,updateDescriptions:ie,propertyDetailsToggle:k,handlePropertyDetails:le,options:l,errors:c,tenure:Q,furnishing:A,listingType:M,status:K,state:U,property_types:_,stateList:W,propertyTypesList:E,mainImage:D,bannerUrl:g,updateMainImage:re,routeType:o,existImageModal:F}}},Oe={class:"row"},Ke={class:"col-12 row pb-4"},We=t("div",{class:"col text-2xl"},"Property Form",-1),Ge={class:"col text-right"},He=t("span",{class:"font-bold"},"Details",-1),Je={class:"col-12 row bg-white p-5 font-bold gap-y-4"},Xe={class:"col-12 post-information-name pb-2"},Ye={class:"col-12"},Ze=t("div",{class:"post-information-name"},"Name",-1),$e={class:"col-12"},et={class:"col-12 text-red-700 pt-2"},tt={class:"col-12"},ot=t("div",{class:"post-information-name"},"Descriptions",-1),at={class:"col-12 prose max-w-none prose-strong:font-black prose-h1:text-7xl prose-h2:text-6xl prose-h3:text-5xl"},st={class:"col-12 text-red-700 pt-2"},lt={class:"col-12"},nt=t("div",{class:"post-information-name"},"Short Descriptions",-1),rt={class:"col-12"},it={class:"col-12 text-red-700 pt-2"},dt=t("div",{class:"post-information-name"},"Status",-1),ct={class:"col-12 col-md-6"},pt=t("div",{class:"post-information-name"},"Types",-1),ut={class:"col-12 text-red-700 pt-2"},mt=t("div",{class:"post-information-name"},"State",-1),_t={class:"col-12 text-red-700 pt-2"},ft={class:"col-12 col-md-6"},ht=t("div",{class:"post-information-name"},"Price",-1),yt=t("div",{class:"post-information-name"},"Listing Type",-1),gt=t("div",{class:"post-information-name"},"Tenure",-1),vt={class:"col-12 col-md-6"},Dt=t("div",{class:"post-information-name"},"Square Feet",-1),bt=t("div",{class:"post-information-name"},"Furnished Type",-1),xt=t("div",{class:"post-information-name"},"Bathroom",-1),Vt=t("div",{class:"post-information-name"},"Bedroom",-1),Ct={class:"col-12 col-md-6"},St=t("div",{class:"post-information-name"},"Car Park",-1),It={class:"col-12"},kt={class:"flex justify-between py-2"},Ft=t("div",{class:"post-information__name"},"Images",-1),Pt={key:0},wt={class:"col-12 text-red-700 pt-2"},qt={class:"col-12 text-right"};function Tt(n,o,d,e,i,u){const a=z("CkeditorPlugin"),m=z("ExistImageModal"),c=z("DropFile");return x(),V("div",Oe,[t("div",Ke,[We,t("div",Ge,[He,s(Fe,{modelValue:e.propertyDetailsToggle,"onUpdate:modelValue":o[0]||(o[0]=l=>e.propertyDetailsToggle=l),color:"green",onClick:e.handlePropertyDetails},null,8,["modelValue","onClick"])])]),t("div",Je,[t("div",Xe,y(e.routeType=="update"?"Update":"Create")+" Property ",1),t("div",Ye,[Ze,t("div",$e,[s(C,{dense:"",outlined:"",label:"Name",modelValue:e.propertyData.name,"onUpdate:modelValue":o[1]||(o[1]=l=>e.propertyData.name=l),ref:"nameRef"},null,8,["modelValue"])]),t("div",et,y(e.errors.name),1)]),t("div",tt,[ot,t("div",at,[s(a,{description:e.propertyData.description,onUpdateDescriptionsData:e.updateDescriptions},null,8,["description","onUpdateDescriptionsData"])]),t("div",st,y(e.errors.description),1)]),t("div",lt,[nt,t("div",rt,[s(C,{modelValue:e.propertyData.short_description,"onUpdate:modelValue":o[2]||(o[2]=l=>e.propertyData.short_description=l),filled:"",outlined:"",placeholder:"Short Descriptions",type:"textarea"},null,8,["modelValue"])]),t("div",it,y(e.errors.short_description),1)]),t("div",{class:b(["col-12 col-md-6",n.$q.screen.lt.md?"pr-0":"pr-6"])},[dt,s(S,{dense:"",modelValue:e.propertyData.status,"onUpdate:modelValue":o[3]||(o[3]=l=>e.propertyData.status=l),options:e.status,"option-value":"slug","option-label":"label",label:"Status"},null,8,["modelValue","options"])],2),t("div",ct,[pt,s(S,{dense:"",modelValue:e.propertyData.property_types,"onUpdate:modelValue":o[4]||(o[4]=l=>e.propertyData.property_types=l),options:e.property_types,"option-value":"id","option-label":"label",label:"Please Select"},null,8,["modelValue","options"]),t("div",ut,y(e.errors.type_id),1)]),t("div",{class:b(["col-12 col-md-6",n.$q.screen.lt.md?"pr-0":"pr-6"])},[mt,s(S,{dense:"",modelValue:e.propertyData.state,"onUpdate:modelValue":o[5]||(o[5]=l=>e.propertyData.state=l),options:e.state,"option-value":"id","option-label":"label",label:"Please Select"},null,8,["modelValue","options"]),t("div",_t,y(e.errors.state_id),1)],2),t("div",ft,[ht,s(C,{dense:"",outlined:"",label:"Price",modelValue:e.propertyData.price,"onUpdate:modelValue":o[6]||(o[6]=l=>e.propertyData.price=l),type:"number"},null,8,["modelValue"])]),t("div",{class:b(["col-12 col-md-6",n.$q.screen.lt.md?"pr-0":"pr-6"])},[yt,s(S,{dense:"",modelValue:e.propertyData.listing_type,"onUpdate:modelValue":o[7]||(o[7]=l=>e.propertyData.listing_type=l),options:e.listingType,label:"Please Select","emit-value":"","map-options":""},null,8,["modelValue","options"])],2),t("div",{class:b(["col-12 row gap-y-4",e.propertyDetailsToggle?"":"hidden"])},[t("div",{class:b(["col-12 col-md-6",n.$q.screen.lt.md?"pr-0":"pr-6"])},[gt,s(S,{dense:"",modelValue:e.propertyDetailsData.tenure,"onUpdate:modelValue":o[8]||(o[8]=l=>e.propertyDetailsData.tenure=l),options:e.tenure,label:"Please Select","emit-value":"","map-options":""},null,8,["modelValue","options"])],2),t("div",vt,[Dt,s(C,{dense:"",outlined:"",label:"Square Feet",modelValue:e.propertyDetailsData.square_feet,"onUpdate:modelValue":o[9]||(o[9]=l=>e.propertyDetailsData.square_feet=l),type:"number"},null,8,["modelValue"])]),t("div",{class:b(["col-12 col-md-6",n.$q.screen.lt.md?"pr-0":"pr-6"])},[bt,s(S,{dense:"",modelValue:e.propertyDetailsData.furnishing,"onUpdate:modelValue":o[10]||(o[10]=l=>e.propertyDetailsData.furnishing=l),options:e.furnishing,label:"Please Select","emit-value":"","map-options":""},null,8,["modelValue","options"])],2),t("div",{class:b(["col-12 col-md-6",n.$q.screen.lt.md?"pr-0":"pr-6"])},[xt,s(C,{dense:"",outlined:"",label:"Bathroom",modelValue:e.propertyDetailsData.bathroom,"onUpdate:modelValue":o[11]||(o[11]=l=>e.propertyDetailsData.bathroom=l),type:"number"},null,8,["modelValue"])],2),t("div",{class:b(["col-12 col-md-6",n.$q.screen.lt.md?"pr-0":"pr-6"])},[Vt,s(C,{dense:"",outlined:"",label:"Bedroom",modelValue:e.propertyDetailsData.bedroom,"onUpdate:modelValue":o[12]||(o[12]=l=>e.propertyDetailsData.bedroom=l),type:"number"},null,8,["modelValue"])],2),t("div",Ct,[St,s(C,{dense:"",outlined:"",label:"Carpark",modelValue:e.propertyDetailsData.car_park,"onUpdate:modelValue":o[13]||(o[13]=l=>e.propertyDetailsData.car_park=l),type:"number"},null,8,["modelValue"])])],2),t("div",It,[t("div",kt,[Ft,e.routeType==="update"?(x(),V("div",Pt,[s(m,{property:e.propertyData},null,8,["property"])])):ae("",!0)]),s(c,{onUpdateFiles:e.updateParentFiles,property:e.propertyData},null,8,["onUpdateFiles","property"]),t("div",wt,y(e.errors.module_path),1)]),t("div",qt,[s(P,{label:e.routeType=="update"?"Update":"Submit",class:"text-white bg-primary update-form__button",onClick:e.submitData},null,8,["label","onClick"])])])])}const oo=oe(Ne,[["render",Tt]]);export{oo as default};