import{l as te,E as N,d as De,u as be,ai as ce,a as oe,B as pe,r as u,n as C,x as I,D as a,s as _,a3 as ae,H as le,a5 as Ve,A as t,F as se,G as h,aj as xe,m as z,a7 as x,q as Se,a6 as re}from"./ckeditor-90a70818.js";import{c as Ce,Q as Pe}from"./vm-98611852.js";import{u as ke,a as Ie,b as we}from"./use-checkbox-65d1f3bd.js";import{Q as D}from"./QInput-277c2892.js";import{Q as S}from"./QSelect-7b3862c7.js";import{Q as k}from"./QBtn-7f3b196f.js";import{C as Fe,D as Te,u as Ue}from"./refList-95dc42e1.js";import{a as Qe,u as qe}from"./index-930f77e9.js";import{S as O,u as ue}from"./app-eec4033c.js";import{Q as Me,a as Ae}from"./QCardActions-1c960f1d.js";import{Q as v}from"./QCardSection-94fbad2c.js";import{Q as Be}from"./QImg-128d8901.js";import{Q as ne}from"./QChip-ea03148d.js";import{Q as Ee}from"./QSeparator-1cbc451b.js";import{Q as ie}from"./QCard-0bdafae9.js";import{Q as Le}from"./QDialog-ebc4f304.js";import{C as je}from"./ClosePopup-7b431b16.js";import"./option-sizes-5a060be6.js";import"./use-key-composition-619d00bf.js";import"./QMenu-81750110.js";import"./use-timeout-781162ef.js";import"./rtl-36dd996b.js";import"./use-prevent-scroll-4d3e0b4c.js";const Re=Ce({name:"QToggle",props:{...ke,icon:String,iconColor:String},emits:Ie,setup(r){function o(i,e){const n=te(()=>(i.value===!0?r.checkedIcon:e.value===!0?r.indeterminateIcon:r.uncheckedIcon)||r.icon),m=te(()=>i.value===!0?r.iconColor:null);return()=>[N("div",{class:"q-toggle__track"}),N("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},n.value!==void 0?[N(Pe,{name:n.value,color:m.value})]:void 0)]}return we("toggle",o)}}),de="/api/server-files/",Ne=De("server_image_admin",{state:()=>({post_image_admin:null,router:be(),route:ce()}),actions:{async updateFiles(r,o){const i={headers:{Authorization:`Bearer ${o}`,"Content-Type":"multipart/form-data"}};try{const e=await oe.post(de+"update",r,i);return O.fire({text:"Image Update Successfully",icon:"success"}).then(n=>{n.isConfirmed&&this.router.go(0)}),e.data}catch(e){return O.fire({title:e.response.data.data,text:e.response.data.message,icon:"error"}),e.response}},async deleteFiles(r,o){const i={headers:{Authorization:`Bearer ${o}`,"Content-Type":"multipart/form-data"}};try{const e=await oe.post(de+"delete",r,i);return O.fire({text:"Image Deleted Successfully",icon:"success"}).then(n=>{n.isConfirmed&&this.router.go(0)}),e.data}catch(e){throw console.error("Error:",e),e}},handleMultipleImageChange(r,o){const i=o.target.id,e=o.target.files[0],n=r.value.find(m=>m.id===i)||{id:i};return n.file=e,r.value.includes(n)||r.value.push(n),r}}});const ze={props:["property"],setup(r){var U;const o=ue(),i=Ne(),e=o.fetchSessionToken(),n=u(!1),m=[{label:"Banner Image",value:"banner-image"},{label:"Slider Image",value:"slider-image"}],l=((U=r.property)==null?void 0:U.file)||[],f=u([]),c=u([]),s=async()=>{c.value=l.map(d=>({module_path:d.module_path,file_id:d.id}))},w=d=>{const g=d.target.getAttribute("data-file-index");c.value[g].module_path=d.target.value},b=async d=>{const g=await i.deleteFiles(d,e);return n.value=!1,g},F=d=>i.handleMultipleImageChange(f,d),T=async()=>{const d={file:f.value,module_path:c.value},g=d.module_path.map(A=>{var P;const V=(P=d.file)==null?void 0:P.find(Q=>parseInt(Q.id)===A.file_id);return{...A,...V}}),M=await i.updateFiles(g,e);return n.value=!1,M};return s(),{existImageModal:n,files:l,updateFileData:T,onFileChange:F,handleDeleteFile:b,modulePathOptions:m,changeModulePath:w,fetchAllModulePath:s}}},Oe=t("div",{class:"text-h5"},"Edit",-1),Ge={class:"col row"},He={class:"col"},Je={class:"text-subtitle1 break-words"},Ke={class:"text-subtitle2"},We=["onUpdate:modelValue","data-file-index"],Xe=t("option",{value:"banner-image"}," Banner Image ",-1),Ye=t("option",{value:"slider-image"}," Slider Image ",-1),Ze=[Xe,Ye],$e=["id"];function et(r,o,i,e,n,m){return C(),I(le,null,[a(k,{label:"Edit",color:"primary",onClick:o[0]||(o[0]=l=>e.existImageModal=!0),class:"edit-image-form__button"}),a(Le,{modelValue:e.existImageModal,"onUpdate:modelValue":o[3]||(o[3]=l=>e.existImageModal=l)},{default:_(()=>[a(ie,null,{default:_(()=>[a(v,{class:"row items-center"},{default:_(()=>[Oe,a(Me),ae(a(k,{icon:"close",flat:"",round:"",dense:""},null,512),[[je]])]),_:1}),a(v,{class:"q-pt-none q-gutter-y-lg"},{default:_(()=>[(C(!0),I(le,null,Ve(e.files,(l,f)=>(C(),I("div",{class:"row items-center",key:f},[t("div",Ge,[t("div",He,[a(ie,{class:"my-card"},{default:_(()=>[a(Be,{src:l.url,ratio:16/9,fit:"cover"},null,8,["src"]),a(v,null,{default:_(()=>[t("div",Je,[a(ne,{color:"primary","text-color":"white"},{default:_(()=>[se(h(l.name),1)]),_:2},1024)]),t("div",Ke,[a(ne,{color:"teal","text-color":"white",icon:"bookmark"},{default:_(()=>[se(h(Math.round(l.size/1e3)+"kb"),1)]),_:2},1024)])]),_:2},1024),a(v,{class:"row place-items-center justify-center"},{default:_(()=>[a(v,{class:"col-4 text-center"},{default:_(()=>[a(k,{size:"14px",round:"",color:"red",icon:"delete",onClick:c=>e.handleDeleteFile(l)},null,8,["onClick"])]),_:2},1024),a(Ee,{vertical:""}),a(v,{class:"col-4"},{default:_(()=>[ae(t("select",{"onUpdate:modelValue":c=>l.module_path=c,"data-file-index":f,onChange:o[1]||(o[1]=(...c)=>e.changeModulePath&&e.changeModulePath(...c))},Ze,40,We),[[xe,l.module_path]])]),_:2},1024)]),_:2},1024),a(v,{class:"q-pt-none row justify-center"},{default:_(()=>[a(v,{class:"col-7"},{default:_(()=>[t("input",{type:"file",multiple:"",name:"file",id:l.id,class:"hidden-input",onChange:o[2]||(o[2]=(...c)=>e.onFileChange&&e.onFileChange(...c)),ref_for:!0,ref:"currentFile",accept:".pdf,.jpg,.jpeg,.png"},null,40,$e)]),_:2},1024)]),_:2},1024)]),_:2},1024)])])]))),128))]),_:1}),a(Ae,{align:"right"},{default:_(()=>[a(k,{label:"Update",class:"text-white bg-primary update-form__button",onClick:e.updateFileData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const tt=pe(ze,[["render",et]]);const ot={components:{CkeditorPlugin:Fe,DropFile:Te,ExistImageModal:tt},async setup(){var K,W;const r=ce(),o=((K=r.query)==null?void 0:K.type)||null,i=((W=r.query)==null?void 0:W.id)||null,e=Qe(),n=Ue(),m=qe(),l=u(e.fetchPropertyData()),f=u(e.fetchPropertyDetailsData()),c=u(e.fetchPropertyError()),s=u([]),w=u(0),b=u(!1),F=u([]),T=u([]),U=u(null),d=u(""),g=u(""),M=u(!1);l.value.status="Active";const V=ue().fetchSessionToken(),P=e.fetchTenureData(),Q=e.fetchFurnishingData(),G=e.fetchListingTypeData(),me=e.fetchStatusData(),H=async()=>{const p=await n.fetchStateList(V);F.value=p},B=async()=>{const p=await n.fetchPropertyTypes(V);return T.value=p,p},_e=()=>(w.value=b.value?1:0,w.value),fe=p=>{l.value={...l.value,images:p.files,module_path:p.module_path}},ye=p=>{d.value=URL.createObjectURL(p.target.files[0]),g.value=p.target.files[0]},he=p=>{l.value.description=p},J=async()=>{const p=await B(),E=await m.findProperty(V,i),L=E.file.filter(R=>R.module_path==="banner-image");L.length>0&&(d.value=L[0].url);const{name:X,description:Y,short_description:Z,state:$,price:j,file:ee,type:q,details:y}=E;l.value={...l.value,name:X,description:Y,short_description:Z,state:$,price:j,file:ee,property_types:m.filteredPropertyDetails({type:p,details:q,category:"propertyType"})},y&&(b.value=!0,f.value={...f.value,tenure:m.filteredPropertyDetails({type:P,details:y.tenure}),square_feet:y.square_feet,listing_type:m.filteredPropertyDetails({type:G,details:y.listing_type}),furnishing:m.filteredPropertyDetails({type:Q,details:y.furnishing}),bedroom:y.bedroom,bathroom:y.bathroom,car_park:y.car_park})},ge=async()=>{var q,y;l.value={...l.value,property_details:b.value?1:0,status:{slug:((q=l.value.status)==null?void 0:q.slug)||"active",label:((y=l.value.status)==null?void 0:y.label)||"Active"},banner_url:g.value};const{tenure:p,bathroom:E,bedroom:L,car_park:X,square_feet:Y,listing_type:Z,furnishing:$,...j}=l.value;return l.value=j,l.value.property_details>0&&(l.value={...l.value,...Object.fromEntries(Object.entries(f.value).map(([R,ve])=>[R,ve??null]))}),await m.createProperty(V,l.value,c)};return o==="update"&&await J(),await H(),await B(),{findProperty:J,propertyData:l,propertyDetailsData:f,submitData:ge,updateParentFiles:fe,updateDescriptions:he,propertyDetailsToggle:b,handlePropertyDetails:_e,options:s,errors:c,tenure:P,furnishing:Q,listingType:G,status:me,state:F,property_types:T,stateList:H,propertyTypesList:B,mainImage:U,bannerUrl:d,updateMainImage:ye,routeType:o,existImageModal:M}}},at={class:"row"},lt={class:"col-12 row pb-4"},st=t("div",{class:"col text-2xl"},"Property Form",-1),rt={class:"col text-right"},nt=t("span",{class:"font-bold"},"Details",-1),it={class:"col-12 row bg-white p-5 font-bold gap-y-4"},dt={class:"col-12 post-information-name pb-2"},ct={class:"col-12"},pt=t("div",{class:"post-information-name"},"Name",-1),ut={class:"col-12"},mt={class:"col-12 text-red-700 pt-2"},_t={class:"col-12"},ft=t("div",{class:"post-information-name"},"Descriptions",-1),yt={class:"col-12"},ht={class:"col-12 text-red-700 pt-2"},gt={class:"col-12"},vt=t("div",{class:"post-information-name"},"Short Descriptions",-1),Dt={class:"col-12"},bt={class:"col-12 text-red-700 pt-2"},Vt=t("div",{class:"post-information-name"},"Status",-1),xt={class:"col-12 col-md-6"},St=t("div",{class:"post-information-name"},"Types",-1),Ct={class:"col-12 text-red-700 pt-2"},Pt=t("div",{class:"post-information-name"},"State",-1),kt={class:"col-12 text-red-700 pt-2"},It={class:"col-12 col-md-6"},wt=t("div",{class:"post-information-name"},"Price",-1),Ft=t("div",{class:"post-information-name"},"Tenure",-1),Tt={class:"col-12 col-md-6"},Ut=t("div",{class:"post-information-name"},"Square Feet",-1),Qt=t("div",{class:"post-information-name"},"Listing Type",-1),qt={class:"col-12 col-md-6"},Mt=t("div",{class:"post-information-name"},"Furnished Type",-1),At=t("div",{class:"post-information-name"},"Bathroom",-1),Bt={class:"col-12 col-md-6"},Et=t("div",{class:"post-information-name"},"Bedroom",-1),Lt={class:"col-12"},jt=t("div",{class:"post-information-name"},"Car Park",-1),Rt={class:"col-12"},Nt={class:"flex justify-between py-2"},zt=t("div",{class:"post-information__name"},"Images",-1),Ot={key:0},Gt={class:"col-12 text-red-700 pt-2"},Ht={class:"col-12 text-right"};function Jt(r,o,i,e,n,m){const l=z("CkeditorPlugin"),f=z("ExistImageModal"),c=z("DropFile");return C(),I("div",at,[t("div",lt,[st,t("div",rt,[nt,a(Re,{modelValue:e.propertyDetailsToggle,"onUpdate:modelValue":o[0]||(o[0]=s=>e.propertyDetailsToggle=s),color:"green",onClick:e.handlePropertyDetails},null,8,["modelValue","onClick"])])]),t("div",it,[t("div",dt,h(e.routeType=="update"?"Update":"Create")+" Property ",1),t("div",ct,[pt,t("div",ut,[a(D,{dense:"",outlined:"",label:"Name",modelValue:e.propertyData.name,"onUpdate:modelValue":o[1]||(o[1]=s=>e.propertyData.name=s),ref:"nameRef"},null,8,["modelValue"])]),t("div",mt,h(e.errors.name),1)]),t("div",_t,[ft,t("div",yt,[a(l,{description:e.propertyData.description,onUpdateDescriptionsData:e.updateDescriptions},null,8,["description","onUpdateDescriptionsData"])]),t("div",ht,h(e.errors.description),1)]),t("div",gt,[vt,t("div",Dt,[a(D,{modelValue:e.propertyData.short_description,"onUpdate:modelValue":o[2]||(o[2]=s=>e.propertyData.short_description=s),filled:"",outlined:"",placeholder:"Short Descriptions",type:"textarea"},null,8,["modelValue"])]),t("div",bt,h(e.errors.short_description),1)]),t("div",{class:x(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[Vt,a(S,{dense:"",modelValue:e.propertyData.status,"onUpdate:modelValue":o[3]||(o[3]=s=>e.propertyData.status=s),options:e.status,"option-value":"slug","option-label":"label",label:"Status"},null,8,["modelValue","options"])],2),t("div",xt,[St,a(S,{dense:"",modelValue:e.propertyData.property_types,"onUpdate:modelValue":o[4]||(o[4]=s=>e.propertyData.property_types=s),options:e.property_types,"option-value":"id","option-label":"label",label:"Please Select"},null,8,["modelValue","options"]),t("div",Ct,h(e.errors.type_id),1)]),t("div",{class:x(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[Pt,a(S,{dense:"",modelValue:e.propertyData.state,"onUpdate:modelValue":o[5]||(o[5]=s=>e.propertyData.state=s),options:e.state,"option-value":"id","option-label":"label",label:"Please Select"},null,8,["modelValue","options"]),t("div",kt,h(e.errors.state_id),1)],2),t("div",It,[wt,a(D,{dense:"",outlined:"",label:"Price",modelValue:e.propertyData.price,"onUpdate:modelValue":o[6]||(o[6]=s=>e.propertyData.price=s),type:"number"},null,8,["modelValue"])]),t("div",{class:x(["col-12 row gap-y-4",e.propertyDetailsToggle?"":"hidden"])},[t("div",{class:x(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[Ft,a(S,{dense:"",modelValue:e.propertyDetailsData.tenure,"onUpdate:modelValue":o[7]||(o[7]=s=>e.propertyDetailsData.tenure=s),options:e.tenure,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])],2),t("div",Tt,[Ut,a(D,{dense:"",outlined:"",label:"Square Feet",modelValue:e.propertyDetailsData.square_feet,"onUpdate:modelValue":o[8]||(o[8]=s=>e.propertyDetailsData.square_feet=s),type:"number"},null,8,["modelValue"])]),t("div",{class:x(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[Qt,a(S,{dense:"",modelValue:e.propertyDetailsData.listing_type,"onUpdate:modelValue":o[9]||(o[9]=s=>e.propertyDetailsData.listing_type=s),options:e.listingType,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])],2),t("div",qt,[Mt,a(S,{dense:"",modelValue:e.propertyDetailsData.furnishing,"onUpdate:modelValue":o[10]||(o[10]=s=>e.propertyDetailsData.furnishing=s),options:e.furnishing,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])]),t("div",{class:x(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[At,a(D,{dense:"",outlined:"",label:"Bathroom",modelValue:e.propertyDetailsData.bathroom,"onUpdate:modelValue":o[11]||(o[11]=s=>e.propertyDetailsData.bathroom=s),type:"number"},null,8,["modelValue"])],2),t("div",Bt,[Et,a(D,{dense:"",outlined:"",label:"Bedroom",modelValue:e.propertyDetailsData.bedroom,"onUpdate:modelValue":o[12]||(o[12]=s=>e.propertyDetailsData.bedroom=s),type:"number"},null,8,["modelValue"])]),t("div",Lt,[jt,a(D,{dense:"",outlined:"",label:"Carpark",modelValue:e.propertyDetailsData.car_park,"onUpdate:modelValue":o[13]||(o[13]=s=>e.propertyDetailsData.car_park=s),type:"number"},null,8,["modelValue"])])],2),t("div",Rt,[t("div",Nt,[zt,e.routeType==="update"?(C(),I("div",Ot,[e.propertyData.file.length>0?(C(),Se(f,{key:0,property:e.propertyData},null,8,["property"])):re("",!0)])):re("",!0)]),a(c,{onUpdateFiles:e.updateParentFiles,propertyData:e.propertyData},null,8,["onUpdateFiles","propertyData"]),t("div",Gt,h(e.errors.module_path),1)]),t("div",Ht,[a(k,{label:e.routeType=="update"?"Update":"Submit",class:"text-white bg-primary update-form__button",onClick:e.submitData},null,8,["label","onClick"])])])])}const go=pe(ot,[["render",Jt]]);export{go as default};
