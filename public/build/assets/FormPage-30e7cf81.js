import{l as te,E as A,d as ve,u as ge,ai as re,a as oe,B as ne,r as p,n as S,x as k,D as a,s as u,a3 as he,H as ae,a5 as De,A as t,F as M,G as f,m as B,a7 as h,a6 as be}from"./ckeditor-191cb1c0.js";import{c as Ve,Q as xe}from"./vm-60024d53.js";import{u as Ce,a as Se,b as ke}from"./use-checkbox-6f533f7f.js";import{Q as g}from"./QInput-68d28044.js";import{b as Pe,Q as D}from"./QSelect-4adb5622.js";import{Q as C}from"./QBtn-27d9e4ae.js";import{C as we,D as Fe,u as Ie}from"./refList-6f4a253a.js";import{a as Te,u as Ue}from"./index-db0c9bdb.js";import{S as E,u as ie}from"./app-843622e7.js";import{Q as Qe,a as qe}from"./QCardActions-991d0d93.js";import{Q as b}from"./QCardSection-df4a2ab2.js";import{Q as Ae}from"./QImg-397067c4.js";import{Q as L}from"./QChip-88f85c89.js";import{Q as se}from"./QCard-e1b57a6a.js";import{C as Me}from"./ClosePopup-d0503915.js";import"./option-sizes-15a69557.js";import"./use-key-composition-15e8504f.js";import"./QMenu-5b31634f.js";import"./use-timeout-a2cf252c.js";import"./use-prevent-scroll-0e71d64a.js";import"./rtl-36dd996b.js";const Be=Ve({name:"QToggle",props:{...Ce,icon:String,iconColor:String},emits:Se,setup(r){function o(i,e){const n=te(()=>(i.value===!0?r.checkedIcon:e.value===!0?r.indeterminateIcon:r.uncheckedIcon)||r.icon),d=te(()=>i.value===!0?r.iconColor:null);return()=>[A("div",{class:"q-toggle__track"}),A("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},n.value!==void 0?[A(xe,{name:n.value,color:d.value})]:void 0)]}return ke("toggle",o)}}),le="/api/server-files/",Ee=ve("server_image_admin",{state:()=>({post_image_admin:null,router:ge(),route:re()}),actions:{async updateFiles(r,o){const i={headers:{Authorization:`Bearer ${o}`,"Content-Type":"multipart/form-data"}};try{const e=await oe.post(le+"update",r,i);return E.fire({text:"Image Update Successfully",icon:"success"}).then(n=>{n.isConfirmed&&this.router.go(0)}),e.data}catch(e){return E.fire({title:e.response.data.data,text:e.response.data.message,icon:"error"}),e.response}},async deleteFiles(r,o){const i={headers:{Authorization:`Bearer ${o}`,"Content-Type":"multipart/form-data"}};try{const e=await oe.post(le+"delete",r,i);return E.fire({text:"Image Deleted Successfully",icon:"success"}).then(n=>{n.isConfirmed&&this.router.go(0)}),e.data}catch(e){throw console.error("Error:",e),e}},handleMultipleImageChange(r,o){const i=o.target.id,e=o.target.files[0],n=r.value.find(d=>d.id===i)||{id:i};return n.file=e,r.value.includes(n)||r.value.push(n),r}}});const Le={props:["property"],setup(r){var x;const o=ie(),i=Ee(),e=o.fetchSessionToken(),n=p(!1),d=p([]),s=[{label:"Banner Image",value:"banner-image"},{label:"Slider Image",value:"slider-image"}],m=((x=r.property)==null?void 0:x.file)||[],v=[r.property.banner,...r.property.sliders].filter(_=>_!==null);return{existImageModal:n,files:m,updateFileData:async()=>{const _=await i.updateFiles(d.value,e);return n.value=!1,_},onFileChange:_=>i.handleMultipleImageChange(d,_),handleDeleteFile:async _=>{const T=await i.deleteFiles(_,e);return n.value=!1,T},modulePathOptions:s,finalFiles:v}}},je=t("div",{class:"text-h5"},"Edit",-1),Re={class:"col row"},Ne={class:"col"},ze={class:"text-subtitle1 break-words"},Oe={class:"text-subtitle2"},Ge={class:"text-subtitle2"},He=["id"];function Je(r,o,i,e,n,d){return S(),k(ae,null,[a(C,{label:"Edit",color:"primary",onClick:o[0]||(o[0]=s=>e.existImageModal=!0),class:"edit-image-form__button"}),a(Pe,{modelValue:e.existImageModal,"onUpdate:modelValue":o[2]||(o[2]=s=>e.existImageModal=s)},{default:u(()=>[a(se,null,{default:u(()=>[a(b,{class:"row items-center"},{default:u(()=>[je,a(Qe),he(a(C,{icon:"close",flat:"",round:"",dense:""},null,512),[[Me]])]),_:1}),a(b,{class:"q-pt-none q-gutter-y-lg row"},{default:u(()=>[(S(!0),k(ae,null,De(e.finalFiles,(s,m)=>(S(),k("div",{class:"col-12 row items-center",key:m},[t("div",Re,[t("div",Ne,[a(se,{class:"my-card"},{default:u(()=>[a(Ae,{src:s.image.url,ratio:16/9,fit:"contain"},null,8,["src"]),a(b,null,{default:u(()=>[t("div",ze,[a(L,{color:"primary","text-color":"white"},{default:u(()=>[M(f(s.image.name),1)]),_:2},1024)]),t("div",Oe,[a(L,{color:"teal","text-color":"white",icon:"bookmark"},{default:u(()=>[M(f(Math.round(s.image.size/1e3)+"kb"),1)]),_:2},1024)]),t("div",Ge,[a(L,{color:"teal","text-color":"white",icon:"bookmark"},{default:u(()=>[M(f(s.image.module_path),1)]),_:2},1024)])]),_:2},1024),a(b,{class:"justify-center flex"},{default:u(()=>[a(b,{class:"col-8"},{default:u(()=>[t("input",{type:"file",multiple:"",name:"file",id:s.id,class:"hidden-input",onChange:o[1]||(o[1]=(...v)=>e.onFileChange&&e.onFileChange(...v)),ref_for:!0,ref:"currentFile",accept:".pdf,.jpg,.jpeg,.png"},null,40,He)]),_:2},1024)]),_:2},1024),a(b,{class:"justify-center flex"},{default:u(()=>[a(C,{size:"14px",round:"",color:"red",icon:"delete",onClick:v=>e.handleDeleteFile(s)},null,8,["onClick"])]),_:2},1024)]),_:2},1024)])])]))),128))]),_:1}),a(qe,{align:"right"},{default:u(()=>[a(C,{label:"Update",class:"text-white bg-primary update-form__button",onClick:e.updateFileData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const Ke=ne(Le,[["render",Je]]);const We={components:{CkeditorPlugin:we,DropFile:Fe,ExistImageModal:Ke},async setup(){var J,K;const r=re(),o=((J=r.query)==null?void 0:J.type)||null,i=((K=r.query)==null?void 0:K.id)||null,e=Te(),n=Ie(),d=Ue(),s=p(e.fetchPropertyData()),m=p(e.fetchPropertyDetailsData()),v=p(e.fetchPropertyError()),l=p([]),I=p(0),V=p(!1),x=p([]),_=p([]),T=p(null),j=p(""),R=p(""),de=p(!1);s.value.status="Active";const P=ie().fetchSessionToken(),N=e.fetchTenureData(),z=e.fetchFurnishingData(),O=e.fetchListingTypeData(),ce=e.fetchStatusData(),G=async()=>{const c=await n.fetchStateList(P);x.value=c},U=async()=>{const c=await n.fetchPropertyTypes(P);return _.value=c,c},pe=()=>(I.value=V.value?1:0,I.value),ue=c=>{s.value={...s.value,images:c.files,module_path:c.module_path}},me=c=>{j.value=URL.createObjectURL(c.target.files[0]),R.value=c.target.files[0]},_e=c=>{s.value.description=c},H=async()=>{const c=await U(),Q=await d.findProperty(P,i);console.log(Q);const{name:W,description:X,short_description:Y,state:Z,price:$,file:q,banner:ee,sliders:w,type:F,details:y}=Q;s.value={...s.value,name:W,description:X,short_description:Y,state:Z,price:$,file:q,banner:ee,sliders:w,property_types:d.filteredPropertyDetails({type:c,details:F,category:"propertyType"})},y&&(V.value=!0,m.value={...m.value,tenure:d.filteredPropertyDetails({type:N,details:y.tenure}),square_feet:y.square_feet,listing_type:d.filteredPropertyDetails({type:O,details:y.listing_type}),furnishing:d.filteredPropertyDetails({type:z,details:y.furnishing}),bedroom:y.bedroom,bathroom:y.bathroom,car_park:y.car_park})},ye=async()=>{var w,F;s.value={...s.value,property_details:V.value?1:0,status:{slug:((w=s.value.status)==null?void 0:w.slug)||"active",label:((F=s.value.status)==null?void 0:F.label)||"Active"},banner_url:R.value};const{tenure:c,bathroom:Q,bedroom:W,car_park:X,square_feet:Y,listing_type:Z,furnishing:$,...q}=s.value;return s.value=q,s.value.property_details>0&&(s.value={...s.value,...Object.fromEntries(Object.entries(m.value).map(([y,fe])=>[y,fe??null]))}),await d.createProperty(P,s.value,v)};return o==="update"&&await H(),await G(),await U(),{findProperty:H,propertyData:s,propertyDetailsData:m,submitData:ye,updateParentFiles:ue,updateDescriptions:_e,propertyDetailsToggle:V,handlePropertyDetails:pe,options:l,errors:v,tenure:N,furnishing:z,listingType:O,status:ce,state:x,property_types:_,stateList:G,propertyTypesList:U,mainImage:T,bannerUrl:j,updateMainImage:me,routeType:o,existImageModal:de}}},Xe={class:"row"},Ye={class:"col-12 row pb-4"},Ze=t("div",{class:"col text-2xl"},"Property Form",-1),$e={class:"col text-right"},et=t("span",{class:"font-bold"},"Details",-1),tt={class:"col-12 row bg-white p-5 font-bold gap-y-4"},ot={class:"col-12 post-information-name pb-2"},at={class:"col-12"},st=t("div",{class:"post-information-name"},"Name",-1),lt={class:"col-12"},rt={class:"col-12 text-red-700 pt-2"},nt={class:"col-12"},it=t("div",{class:"post-information-name"},"Descriptions",-1),dt={class:"col-12"},ct={class:"col-12 text-red-700 pt-2"},pt={class:"col-12"},ut=t("div",{class:"post-information-name"},"Short Descriptions",-1),mt={class:"col-12"},_t={class:"col-12 text-red-700 pt-2"},yt=t("div",{class:"post-information-name"},"Status",-1),ft={class:"col-12 col-md-6"},vt=t("div",{class:"post-information-name"},"Types",-1),gt={class:"col-12 text-red-700 pt-2"},ht=t("div",{class:"post-information-name"},"State",-1),Dt={class:"col-12 text-red-700 pt-2"},bt={class:"col-12 col-md-6"},Vt=t("div",{class:"post-information-name"},"Price",-1),xt=t("div",{class:"post-information-name"},"Tenure",-1),Ct={class:"col-12 col-md-6"},St=t("div",{class:"post-information-name"},"Square Feet",-1),kt=t("div",{class:"post-information-name"},"Listing Type",-1),Pt={class:"col-12 col-md-6"},wt=t("div",{class:"post-information-name"},"Furnished Type",-1),Ft=t("div",{class:"post-information-name"},"Bathroom",-1),It={class:"col-12 col-md-6"},Tt=t("div",{class:"post-information-name"},"Bedroom",-1),Ut={class:"col-12"},Qt=t("div",{class:"post-information-name"},"Car Park",-1),qt={class:"col-12"},At={class:"flex justify-between py-2"},Mt=t("div",{class:"post-information__name"},"Images",-1),Bt={key:0},Et={class:"col-12 text-red-700 pt-2"},Lt={class:"col-12 text-right"};function jt(r,o,i,e,n,d){const s=B("CkeditorPlugin"),m=B("ExistImageModal"),v=B("DropFile");return S(),k("div",Xe,[t("div",Ye,[Ze,t("div",$e,[et,a(Be,{modelValue:e.propertyDetailsToggle,"onUpdate:modelValue":o[0]||(o[0]=l=>e.propertyDetailsToggle=l),color:"green",onClick:e.handlePropertyDetails},null,8,["modelValue","onClick"])])]),t("div",tt,[t("div",ot,f(e.routeType=="update"?"Update":"Create")+" Property ",1),t("div",at,[st,t("div",lt,[a(g,{dense:"",outlined:"",label:"Name",modelValue:e.propertyData.name,"onUpdate:modelValue":o[1]||(o[1]=l=>e.propertyData.name=l),ref:"nameRef"},null,8,["modelValue"])]),t("div",rt,f(e.errors.name),1)]),t("div",nt,[it,t("div",dt,[a(s,{description:e.propertyData.description,onUpdateDescriptionsData:e.updateDescriptions},null,8,["description","onUpdateDescriptionsData"])]),t("div",ct,f(e.errors.description),1)]),t("div",pt,[ut,t("div",mt,[a(g,{modelValue:e.propertyData.short_description,"onUpdate:modelValue":o[2]||(o[2]=l=>e.propertyData.short_description=l),filled:"",outlined:"",placeholder:"Short Descriptions",type:"textarea"},null,8,["modelValue"])]),t("div",_t,f(e.errors.short_description),1)]),t("div",{class:h(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[yt,a(D,{dense:"",modelValue:e.propertyData.status,"onUpdate:modelValue":o[3]||(o[3]=l=>e.propertyData.status=l),options:e.status,"option-value":"slug","option-label":"label",label:"Status"},null,8,["modelValue","options"])],2),t("div",ft,[vt,a(D,{dense:"",modelValue:e.propertyData.property_types,"onUpdate:modelValue":o[4]||(o[4]=l=>e.propertyData.property_types=l),options:e.property_types,"option-value":"id","option-label":"label",label:"Please Select"},null,8,["modelValue","options"]),t("div",gt,f(e.errors.type_id),1)]),t("div",{class:h(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[ht,a(D,{dense:"",modelValue:e.propertyData.state,"onUpdate:modelValue":o[5]||(o[5]=l=>e.propertyData.state=l),options:e.state,"option-value":"id","option-label":"label",label:"Please Select"},null,8,["modelValue","options"]),t("div",Dt,f(e.errors.state_id),1)],2),t("div",bt,[Vt,a(g,{dense:"",outlined:"",label:"Price",modelValue:e.propertyData.price,"onUpdate:modelValue":o[6]||(o[6]=l=>e.propertyData.price=l),type:"number"},null,8,["modelValue"])]),t("div",{class:h(["col-12 row gap-y-4",e.propertyDetailsToggle?"":"hidden"])},[t("div",{class:h(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[xt,a(D,{dense:"",modelValue:e.propertyDetailsData.tenure,"onUpdate:modelValue":o[7]||(o[7]=l=>e.propertyDetailsData.tenure=l),options:e.tenure,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])],2),t("div",Ct,[St,a(g,{dense:"",outlined:"",label:"Square Feet",modelValue:e.propertyDetailsData.square_feet,"onUpdate:modelValue":o[8]||(o[8]=l=>e.propertyDetailsData.square_feet=l),type:"number"},null,8,["modelValue"])]),t("div",{class:h(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[kt,a(D,{dense:"",modelValue:e.propertyDetailsData.listing_type,"onUpdate:modelValue":o[9]||(o[9]=l=>e.propertyDetailsData.listing_type=l),options:e.listingType,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])],2),t("div",Pt,[wt,a(D,{dense:"",modelValue:e.propertyDetailsData.furnishing,"onUpdate:modelValue":o[10]||(o[10]=l=>e.propertyDetailsData.furnishing=l),options:e.furnishing,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])]),t("div",{class:h(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[Ft,a(g,{dense:"",outlined:"",label:"Bathroom",modelValue:e.propertyDetailsData.bathroom,"onUpdate:modelValue":o[11]||(o[11]=l=>e.propertyDetailsData.bathroom=l),type:"number"},null,8,["modelValue"])],2),t("div",It,[Tt,a(g,{dense:"",outlined:"",label:"Bedroom",modelValue:e.propertyDetailsData.bedroom,"onUpdate:modelValue":o[12]||(o[12]=l=>e.propertyDetailsData.bedroom=l),type:"number"},null,8,["modelValue"])]),t("div",Ut,[Qt,a(g,{dense:"",outlined:"",label:"Carpark",modelValue:e.propertyDetailsData.car_park,"onUpdate:modelValue":o[13]||(o[13]=l=>e.propertyDetailsData.car_park=l),type:"number"},null,8,["modelValue"])])],2),t("div",qt,[t("div",At,[Mt,e.routeType==="update"?(S(),k("div",Bt,[a(m,{property:e.propertyData},null,8,["property"])])):be("",!0)]),a(v,{onUpdateFiles:e.updateParentFiles,propertyData:e.propertyData},null,8,["onUpdateFiles","propertyData"]),t("div",Et,f(e.errors.module_path),1)]),t("div",Lt,[a(C,{label:e.routeType=="update"?"Update":"Submit",class:"text-white bg-primary update-form__button",onClick:e.submitData},null,8,["label","onClick"])])])])}const co=ne(We,[["render",jt]]);export{co as default};
