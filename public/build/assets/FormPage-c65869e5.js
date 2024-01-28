import{l as G,J as I,d as ve,u as he,ao as ie,a as oe,B as de,r as u,n as S,x as w,G as n,s as C,R as ae,F as se,D as ge,A as t,H as v,ap as De,m as N,W as D,q as be,N as le}from"./ckeditor-6cef9db6.js";import{c as H,Q as Ve,n as Se,o as xe,h as Ce,e as P}from"./focus-manager-e961f08d.js";import{u as Pe,a as Ie,b as we}from"./use-checkbox-557c6555.js";import{Q as b}from"./QInput-0e7d4783.js";import{b as Fe,Q as V}from"./QSelect-a5ee1266.js";import{C as ke,D as Te,u as Ue}from"./refList-61b7e3a0.js";import{a as qe,u as Ae}from"./index-45bcaad6.js";import{S as O,u as ce}from"./app-11778892.js";import{a as Me,Q as ne}from"./QCard-f17d455d.js";import{C as Qe}from"./ClosePopup-ab62de03.js";import"./option-sizes-10c17a4a.js";import"./QMenu-8413fe05.js";import"./use-prevent-scroll-ac140086.js";const Be=H({name:"QToggle",props:{...Pe,icon:String,iconColor:String},emits:Ie,setup(l){function o(r,e){const i=G(()=>(r.value===!0?l.checkedIcon:e.value===!0?l.indeterminateIcon:l.uncheckedIcon)||l.icon),m=G(()=>r.value===!0?l.iconColor:null);return()=>[I("div",{class:"q-toggle__track"}),I("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},i.value!==void 0?[I(Ve,{name:i.value,color:m.value})]:void 0)]}return we("toggle",o)}}),Ee=I("div",{class:"q-space"}),Le=H({name:"QSpace",setup(){return()=>Ee}}),Re=H({name:"QCardActions",props:{...Se,vertical:Boolean},setup(l,{slots:o}){const r=xe(l),e=G(()=>`q-card__actions ${r.value} q-card__actions--${l.vertical===!0?"vert column":"horiz row"}`);return()=>I("div",{class:e.value},Ce(o.default))}}),re="/api/server-files/",je=ve("server_image_admin",{state:()=>({post_image_admin:null,router:he(),route:ie()}),actions:{async updateFiles(l,o){const r={headers:{Authorization:`Bearer ${o}`,"Content-Type":"multipart/form-data"}};try{const e=await oe.post(re+"update",l,r);return O.fire({text:"Image Update Successfully",icon:"success"}).then(i=>{i.isConfirmed&&this.router.go(0)}),e.data}catch(e){return O.fire({title:e.response.data.data,text:e.response.data.message,icon:"error"}),e.response}},async deleteFiles(l,o){const r={headers:{Authorization:`Bearer ${o}`,"Content-Type":"multipart/form-data"}};try{const e=await oe.post(re+"delete",l,r);return O.fire({text:"Image Deleted Successfully",icon:"success"}).then(i=>{i.isConfirmed&&this.router.go(0)}),e.data}catch(e){throw console.error("Error:",e),e}},handleMultipleImageChange(l,o){const r=o.target.id,e=o.target.files[0],i=l.value.find(m=>m.id===r)||{id:r};return i.file=e,l.value.includes(i)||l.value.push(i),l}}});const ze={props:["property"],setup(l){var U;const o=ce(),r=je(),e=o.fetchSessionToken(),i=u(!0),m=[{label:"Banner Image",value:"banner-image"},{label:"Slider Image",value:"slider-image"}],a=((U=l.property)==null?void 0:U.file)||[],_=u([]),c=u([]),s=async()=>{c.value=a.map(d=>({module_path:d.module_path,file_id:d.id}))},F=d=>{const f=d.target.getAttribute("data-file-index");c.value[f].module_path=d.target.value},h=async d=>{const f=await r.deleteFiles(d,e);return i.value=!1,f},k=d=>r.handleMultipleImageChange(_,d),T=async()=>{const d={file:_.value,module_path:c.value},f=d.module_path.map(B=>{var x;const g=(x=d.file)==null?void 0:x.find(q=>parseInt(q.id)===B.file_id);return{...B,...g}}),Q=await r.updateFiles(f,e);return i.value=!1,Q};return s(),{existImageModal:i,files:a,updateFileData:T,onFileChange:k,handleDeleteFile:h,modulePathOptions:m,changeModulePath:F,fetchAllModulePath:s}}},Ne=t("div",{class:"text-h6"},"Edit",-1),Oe={class:"col row"},Ge={class:"col"},He=["src"],Je={class:"break-words"},We=["onUpdate:modelValue","data-file-index"],Ke=t("option",{value:"banner-image"}," Banner Image ",-1),Xe=t("option",{value:"slider-image"}," Slider Image ",-1),Ye=[Ke,Xe],Ze={class:"col"},$e=["id"];function et(l,o,r,e,i,m){return S(),w(se,null,[n(P,{label:"Edit",color:"primary",onClick:o[0]||(o[0]=a=>e.existImageModal=!0),class:"edit-image-form__button"}),n(Fe,{modelValue:e.existImageModal,"onUpdate:modelValue":o[3]||(o[3]=a=>e.existImageModal=a)},{default:C(()=>[n(Me,null,{default:C(()=>[n(ne,{class:"row items-center q-pb-none"},{default:C(()=>[Ne,n(Le),ae(n(P,{icon:"close",flat:"",round:"",dense:""},null,512),[[Qe]])]),_:1}),n(ne,{class:"q-pt-none"},{default:C(()=>[(S(!0),w(se,null,ge(e.files,(a,_)=>(S(),w("div",{class:"row items-center",key:_},[t("div",Oe,[t("div",Ge,[t("img",{src:a.url,alt:""},null,8,He),t("div",Je,v(a.name),1),t("div",null,v(Math.round(a.size/1e3)+"kb"),1),t("div",null,[n(P,{size:"14px",round:"",color:"red",icon:"delete",onClick:c=>e.handleDeleteFile(a)},null,8,["onClick"])]),t("div",null,[ae(t("select",{"onUpdate:modelValue":c=>a.module_path=c,"data-file-index":_,onChange:o[1]||(o[1]=(...c)=>e.changeModulePath&&e.changeModulePath(...c))},Ye,40,We),[[De,a.module_path]])])]),t("div",Ze,[t("input",{type:"file",multiple:"",name:"file",id:a.id,class:"hidden-input",onChange:o[2]||(o[2]=(...c)=>e.onFileChange&&e.onFileChange(...c)),ref_for:!0,ref:"currentFile",accept:".pdf,.jpg,.jpeg,.png"},null,40,$e)])])]))),128))]),_:1}),n(Re,{align:"right"},{default:C(()=>[n(P,{label:"Update",class:"text-white bg-primary update-form__button",onClick:e.updateFileData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const tt=de(ze,[["render",et]]);const ot={components:{CkeditorPlugin:ke,DropFile:Te,ExistImageModal:tt},async setup(){var X,Y;const l=ie(),o=((X=l.query)==null?void 0:X.type)||null,r=((Y=l.query)==null?void 0:Y.id)||null,e=qe(),i=Ue(),m=Ae(),a=u(e.fetchPropertyData()),_=u(e.fetchPropertyDetailsData()),c=u(e.fetchPropertyError()),s=u([]),F=u(0),h=u(!1),k=u([]),T=u([]),U=u(null),d=u(""),f=u(""),Q=u(!1);a.value.status="Active";const g=ce().fetchSessionToken(),x=e.fetchTenureData(),q=e.fetchFurnishingData(),J=e.fetchListingTypeData(),pe=e.fetchStatusData(),W=async()=>{const p=await i.fetchStateList(g);k.value=p},E=async()=>{const p=await i.fetchPropertyTypes(g);return T.value=p,p},ue=()=>(F.value=h.value?1:0,F.value),me=p=>{a.value={...a.value,images:p.files,module_path:p.module_path}},_e=p=>{d.value=URL.createObjectURL(p.target.files[0]),f.value=p.target.files[0]},ye=p=>{a.value.description=p},K=async()=>{const p=await E(),L=await m.findProperty(g,r),R=L.file.filter(z=>z.module_path==="banner-image");R.length>0&&(d.value=R[0].url);const{name:Z,description:$,short_description:ee,state:j,price:te,file:A,type:M,details:y}=L;a.value={...a.value,name:Z,description:$,short_description:ee,state:j,price:te,file:A,property_types:m.filteredPropertyDetails({type:p,details:M,category:"propertyType"})},y&&(h.value=!0,_.value={..._.value,tenure:m.filteredPropertyDetails({type:x,details:y.tenure}),square_feet:y.square_feet,listing_type:m.filteredPropertyDetails({type:J,details:y.listing_type}),furnishing:m.filteredPropertyDetails({type:q,details:y.furnishing}),bedroom:y.bedroom,bathroom:y.bathroom})},fe=async()=>{var A,M;a.value={...a.value,property_details:h.value?1:0,status:{slug:((A=a.value.status)==null?void 0:A.slug)||"active",label:((M=a.value.status)==null?void 0:M.label)||"Active"},banner_url:f.value};const{tenure:p,bathroom:L,bedroom:R,square_feet:Z,listing_type:$,furnishing:ee,...j}=a.value;return a.value=j,a.value.property_details>0&&(a.value={...a.value,...Object.fromEntries(Object.entries(_.value).map(([y,z])=>[y,z??null]))}),await m.createProperty(g,a.value,c)};return o==="update"&&await K(),await W(),await E(),{findProperty:K,propertyData:a,propertyDetailsData:_,submitData:fe,updateParentFiles:me,updateDescriptions:ye,propertyDetailsToggle:h,handlePropertyDetails:ue,options:s,errors:c,tenure:x,furnishing:q,listingType:J,status:pe,state:k,property_types:T,stateList:W,propertyTypesList:E,mainImage:U,bannerUrl:d,updateMainImage:_e,routeType:o,existImageModal:Q}}},at={class:"row"},st={class:"col-12 row pb-4"},lt=t("div",{class:"col text-2xl"},"Property Form",-1),nt={class:"col text-right"},rt=t("span",{class:"font-bold"},"Details",-1),it={class:"col-12 row bg-white p-5 font-bold gap-y-4"},dt={class:"col-12 post-information-name pb-2"},ct={class:"col-12"},pt=t("div",{class:"post-information-name"},"Name",-1),ut={class:"col-12"},mt={class:"col-12 text-red-700 pt-2"},_t={class:"col-12"},yt=t("div",{class:"post-information-name"},"Descriptions",-1),ft={class:"col-12"},vt={class:"col-12 text-red-700 pt-2"},ht={class:"col-12"},gt=t("div",{class:"post-information-name"},"Short Descriptions",-1),Dt={class:"col-12"},bt={class:"col-12 text-red-700 pt-2"},Vt=t("div",{class:"post-information-name"},"Status",-1),St={class:"col-12 col-md-6"},xt=t("div",{class:"post-information-name"},"Types",-1),Ct={class:"col-12 text-red-700 pt-2"},Pt=t("div",{class:"post-information-name"},"State",-1),It={class:"col-12 text-red-700 pt-2"},wt={class:"col-12 col-md-6"},Ft=t("div",{class:"post-information-name"},"Price",-1),kt=t("div",{class:"post-information-name"},"Tenure",-1),Tt={class:"col-12 col-md-6"},Ut=t("div",{class:"post-information-name"},"Square Feet",-1),qt=t("div",{class:"post-information-name"},"Listing Type",-1),At={class:"col-12 col-md-6"},Mt=t("div",{class:"post-information-name"},"Furnished Type",-1),Qt=t("div",{class:"post-information-name"},"Bathroom",-1),Bt={class:"col-12 col-md-6"},Et=t("div",{class:"post-information-name"},"Bedroom",-1),Lt={class:"col-12"},Rt={class:"flex justify-between py-2"},jt=t("div",{class:"post-information__name"},"Images",-1),zt={key:0},Nt={class:"col-12 text-right"};function Ot(l,o,r,e,i,m){const a=N("CkeditorPlugin"),_=N("ExistImageModal"),c=N("DropFile");return S(),w("div",at,[t("div",st,[lt,t("div",nt,[rt,n(Be,{modelValue:e.propertyDetailsToggle,"onUpdate:modelValue":o[0]||(o[0]=s=>e.propertyDetailsToggle=s),color:"green",onClick:e.handlePropertyDetails},null,8,["modelValue","onClick"])])]),t("div",it,[t("div",dt,v(e.routeType=="update"?"Update":"Create")+" Property ",1),t("div",ct,[pt,t("div",ut,[n(b,{dense:"",outlined:"",label:"Name",modelValue:e.propertyData.name,"onUpdate:modelValue":o[1]||(o[1]=s=>e.propertyData.name=s),ref:"nameRef"},null,8,["modelValue"])]),t("div",mt,v(e.errors.name),1)]),t("div",_t,[yt,t("div",ft,[n(a,{description:e.propertyData.description,onUpdateDescriptionsData:e.updateDescriptions},null,8,["description","onUpdateDescriptionsData"])]),t("div",vt,v(e.errors.description),1)]),t("div",ht,[gt,t("div",Dt,[n(b,{modelValue:e.propertyData.short_description,"onUpdate:modelValue":o[2]||(o[2]=s=>e.propertyData.short_description=s),filled:"",outlined:"",placeholder:"Short Descriptions",type:"textarea"},null,8,["modelValue"])]),t("div",bt,v(e.errors.short_description),1)]),t("div",{class:D(["col-12 col-md-6",l.$q.screen.lt.md?"pr-0":"pr-6"])},[Vt,n(V,{dense:"",modelValue:e.propertyData.status,"onUpdate:modelValue":o[3]||(o[3]=s=>e.propertyData.status=s),options:e.status,"option-value":"slug","option-label":"label",label:"Status"},null,8,["modelValue","options"])],2),t("div",St,[xt,n(V,{dense:"",modelValue:e.propertyData.property_types,"onUpdate:modelValue":o[4]||(o[4]=s=>e.propertyData.property_types=s),options:e.property_types,"option-value":"id","option-label":"label",label:"Please Select"},null,8,["modelValue","options"]),t("div",Ct,v(e.errors.type_id),1)]),t("div",{class:D(["col-12 col-md-6",l.$q.screen.lt.md?"pr-0":"pr-6"])},[Pt,n(V,{dense:"",modelValue:e.propertyData.state,"onUpdate:modelValue":o[5]||(o[5]=s=>e.propertyData.state=s),options:e.state,"option-value":"id","option-label":"label",label:"Please Select"},null,8,["modelValue","options"]),t("div",It,v(e.errors.state_id),1)],2),t("div",wt,[Ft,n(b,{dense:"",outlined:"",label:"Price",modelValue:e.propertyData.price,"onUpdate:modelValue":o[6]||(o[6]=s=>e.propertyData.price=s),type:"number"},null,8,["modelValue"])]),t("div",{class:D(["col-12 row gap-y-4",e.propertyDetailsToggle?"":"hidden"])},[t("div",{class:D(["col-12 col-md-6",l.$q.screen.lt.md?"pr-0":"pr-6"])},[kt,n(V,{dense:"",modelValue:e.propertyDetailsData.tenure,"onUpdate:modelValue":o[7]||(o[7]=s=>e.propertyDetailsData.tenure=s),options:e.tenure,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])],2),t("div",Tt,[Ut,n(b,{dense:"",outlined:"",label:"Square Feet",modelValue:e.propertyDetailsData.square_feet,"onUpdate:modelValue":o[8]||(o[8]=s=>e.propertyDetailsData.square_feet=s),type:"number"},null,8,["modelValue"])]),t("div",{class:D(["col-12 col-md-6",l.$q.screen.lt.md?"pr-0":"pr-6"])},[qt,n(V,{dense:"",modelValue:e.propertyDetailsData.listing_type,"onUpdate:modelValue":o[9]||(o[9]=s=>e.propertyDetailsData.listing_type=s),options:e.listingType,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])],2),t("div",At,[Mt,n(V,{dense:"",modelValue:e.propertyDetailsData.furnishing,"onUpdate:modelValue":o[10]||(o[10]=s=>e.propertyDetailsData.furnishing=s),options:e.furnishing,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])]),t("div",{class:D(["col-12 col-md-6",l.$q.screen.lt.md?"pr-0":"pr-6"])},[Qt,n(b,{dense:"",outlined:"",label:"Bathroom",modelValue:e.propertyDetailsData.bathroom,"onUpdate:modelValue":o[11]||(o[11]=s=>e.propertyDetailsData.bathroom=s),type:"number"},null,8,["modelValue"])],2),t("div",Bt,[Et,n(b,{dense:"",outlined:"",label:"Bedroom",modelValue:e.propertyDetailsData.bedroom,"onUpdate:modelValue":o[12]||(o[12]=s=>e.propertyDetailsData.bedroom=s),type:"number"},null,8,["modelValue"])])],2),t("div",Lt,[t("div",Rt,[jt,e.routeType==="update"?(S(),w("div",zt,[e.propertyData.file.length>0?(S(),be(_,{key:0,property:e.propertyData},null,8,["property"])):le("",!0)])):le("",!0)]),n(c,{onUpdateFiles:e.updateParentFiles,propertyData:e.propertyData},null,8,["onUpdateFiles","propertyData"])]),t("div",Nt,[n(P,{label:e.routeType=="update"?"Update":"Submit",class:"text-white bg-primary update-form__button",onClick:e.submitData},null,8,["label","onClick"])])])])}const so=de(ot,[["render",Ot]]);export{so as default};
