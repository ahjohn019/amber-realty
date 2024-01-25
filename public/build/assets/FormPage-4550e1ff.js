import{l as L,J as x,d as _e,u as ye,a as $,B as se,r as p,n as f,x as D,G as n,s as S,R as fe,F as ee,D as ge,A as t,H as y,N as k,ao as ve,m as E,W as h,q as he}from"./ckeditor-d241b8c8.js";import{c as j,Q as De,n as be,o as Ve,h as Se,e as C}from"./QBtn-b8d5e40a.js";import{u as Ce,a as xe,b as Pe}from"./use-checkbox-bafa1f8e.js";import{Q as b}from"./QInput-93c466a6.js";import{b as we,Q as V}from"./QSelect-aa54ccee.js";import{C as Ie,D as ke,u as Te}from"./refList-9bc8f5ab.js";import{a as Ue,u as Fe}from"./index-27c0d3c1.js";import{S as te,u as le}from"./app-5770f7e5.js";import{Q as qe,a as oe}from"./QCard-1a912536.js";import{C as Ae}from"./ClosePopup-5b59ce1a.js";import"./option-sizes-82021515.js";import"./use-key-composition-9d01cf96.js";import"./QMenu-b9569a53.js";import"./use-prevent-scroll-8ddeb2f2.js";const Me=j({name:"QToggle",props:{...Ce,icon:String,iconColor:String},emits:xe,setup(a){function o(r,e){const i=L(()=>(r.value===!0?a.checkedIcon:e.value===!0?a.indeterminateIcon:a.uncheckedIcon)||a.icon),d=L(()=>r.value===!0?a.iconColor:null);return()=>[x("div",{class:"q-toggle__track"}),x("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},i.value!==void 0?[x(De,{name:i.value,color:d.value})]:void 0)]}return Pe("toggle",o)}}),Qe=x("div",{class:"q-space"}),Be=j({name:"QSpace",setup(){return()=>Qe}}),Ee=j({name:"QCardActions",props:{...be,vertical:Boolean},setup(a,{slots:o}){const r=Ve(a),e=L(()=>`q-card__actions ${r.value} q-card__actions--${a.vertical===!0?"vert column":"horiz row"}`);return()=>x("div",{class:e.value},Se(o.default))}}),ae="/api/server-files/",Le=_e("server_image_admin",{state:()=>({post_image_admin:null,router:ye()}),actions:{async updateFiles(a,o){const r={headers:{Authorization:`Bearer ${o}`,"Content-Type":"multipart/form-data"}};try{const e=await $.post(ae+"update",a,r);return this.router.push("/property"),te.fire({text:"Image Update Successfully",icon:"success"}).then(i=>{if(i.isConfirmed)return e.data.data}),e.data.data}catch(e){throw console.error("Error:",e),e}},async deleteFiles(a,o){const r={headers:{Authorization:`Bearer ${o}`,"Content-Type":"multipart/form-data"}};try{const e=await $.post(ae+"delete",a,r);return this.router.push("/property"),te.fire({text:"Image Deleted Successfully",icon:"success"}).then(i=>{if(i.isConfirmed)return e.data.data}),e.data.data}catch(e){throw console.error("Error:",e),e}},handleMultipleImageChange(a,o){const r=o.target.id,e=o.target.files[0],i=a.value.find(d=>d.id===r)||{id:r};return i.file=e,a.value.includes(i)||a.value.push(i),a}}});const je={props:["property"],setup(a){var g;const o=le(),r=Le(),e=o.fetchSessionToken(),i=p(!0),d=[{label:"Banner Image",value:"banner-image"},{label:"Slider Image",value:"slider-image"}],s=((g=a.property)==null?void 0:g.file)||[],u=p([]);return console.log(a.property),{existImageModal:i,files:s,updateData:async()=>await r.updateFiles(u.value,e),onChange:v=>r.handleMultipleImageChange(u,v),handleDeleteFile:async v=>await r.deleteFiles(v,e),modulePathOptions:d}}},Re=t("div",{class:"text-h6"},"Edit",-1),ze={key:0,class:"col row"},Ne={class:"col"},Oe=["src"],Ge={class:"break-words"},He={class:"col"},Je=["id"];function We(a,o,r,e,i,d){return f(),D(ee,null,[n(C,{label:"Edit",color:"primary",onClick:o[0]||(o[0]=s=>e.existImageModal=!0),class:"edit-image-form__button"}),n(we,{modelValue:e.existImageModal,"onUpdate:modelValue":o[2]||(o[2]=s=>e.existImageModal=s)},{default:S(()=>[n(qe,null,{default:S(()=>[n(oe,{class:"row items-center q-pb-none"},{default:S(()=>[Re,n(Be),fe(n(C,{icon:"close",flat:"",round:"",dense:""},null,512),[[Ae]])]),_:1}),n(oe,{class:"q-pt-none"},{default:S(()=>[(f(!0),D(ee,null,ge(e.files,(s,u)=>(f(),D("div",{class:"row items-center",key:u},[s.module_path!="banner-image"?(f(),D("div",ze,[t("div",Ne,[t("img",{src:s.url,alt:""},null,8,Oe),t("div",Ge,y(s.name),1),t("div",null,y(Math.round(s.size/1e3)+"kb"),1),t("div",null,[n(C,{size:"14px",round:"",color:"red",icon:"delete",onClick:_=>e.handleDeleteFile(s)},null,8,["onClick"])])]),t("div",He,[t("input",{type:"file",multiple:"",name:"file",id:s.id,class:"hidden-input",onChange:o[1]||(o[1]=(..._)=>e.onChange&&e.onChange(..._)),ref_for:!0,ref:"currentFile",accept:".pdf,.jpg,.jpeg,.png"},null,40,Je)])])):k("",!0)]))),128))]),_:1}),n(Ee,{align:"right"},{default:S(()=>[n(C,{label:"Update",class:"text-white bg-primary update-form__button",onClick:e.updateData},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const Ke=se(je,[["render",We]]);const Xe={components:{CkeditorPlugin:Ie,DropFile:ke,ExistImageModal:Ke},async setup(){var J,W;const a=ve(),o=((J=a.query)==null?void 0:J.type)||null,r=((W=a.query)==null?void 0:W.id)||null,e=Ue(),i=Te(),d=Fe(),s=p(e.fetchPropertyData()),u=p(e.fetchPropertyDetailsData()),_=p(e.fetchPropertyError()),l=p([]),T=p(0),g=p(!1),v=p([]),U=p([]),ne=p(null),F=p(""),R=p(""),re=p(!1);s.value.status="Active";const P=le().fetchSessionToken(),z=e.fetchTenureData(),N=e.fetchFurnishingData(),O=e.fetchListingTypeData(),ie=e.fetchStatusData(),G=async()=>{const c=await i.fetchStateList(P);v.value=c},q=async()=>{const c=await i.fetchPropertyTypes(P);return U.value=c,c},de=()=>(T.value=g.value?1:0,T.value),ce=c=>{s.value.images=c},pe=c=>{F.value=URL.createObjectURL(c.target.files[0]),R.value=c.target.files[0]},ue=c=>{s.value.description=c},H=async()=>{const c=await q(),A=await d.findProperty(P,r),M=A.file.filter(B=>B.module_path==="banner-image");M.length>0&&(F.value=M[0].url);const{name:K,description:X,short_description:Y,state:Q,price:Z,file:w,type:I,details:m}=A;s.value={...s.value,name:K,description:X,short_description:Y,state:Q,price:Z,file:w,property_types:d.filteredPropertyDetails({type:c,details:I,category:"propertyType"})},m&&(g.value=!0,u.value={...u.value,tenure:d.filteredPropertyDetails({type:z,details:m.tenure}),square_feet:m.square_feet,listing_type:d.filteredPropertyDetails({type:O,details:m.listing_type}),furnishing:d.filteredPropertyDetails({type:N,details:m.furnishing}),bedroom:m.bedroom,bathroom:m.bathroom})},me=async()=>{var w,I;s.value={...s.value,property_details:g.value?1:0,status:{slug:((w=s.value.status)==null?void 0:w.slug)||"active",label:((I=s.value.status)==null?void 0:I.label)||"Active"},banner_url:R.value};const{tenure:c,bathroom:A,bedroom:M,square_feet:K,listing_type:X,furnishing:Y,...Q}=s.value;return s.value=Q,s.value.property_details>0&&(s.value={...s.value,...Object.fromEntries(Object.entries(u.value).map(([m,B])=>[m,B??null]))}),await d.createProperty(P,s.value,_)};return o==="update"&&await H(),await G(),await q(),{findProperty:H,propertyData:s,propertyDetailsData:u,submitData:me,updateParentFiles:ce,updateDescriptions:ue,propertyDetailsToggle:g,handlePropertyDetails:de,options:l,errors:_,tenure:z,furnishing:N,listingType:O,status:ie,state:v,property_types:U,stateList:G,propertyTypesList:q,mainImage:ne,bannerUrl:F,updateMainImage:pe,routeType:o,existImageModal:re}}},Ye={class:"row"},Ze={class:"col-12 row pb-4"},$e=t("div",{class:"col text-2xl"},"Property Form",-1),et={class:"col text-right"},tt=t("span",{class:"font-bold"},"Details",-1),ot={class:"col-12 row bg-white p-5 font-bold gap-y-4"},at={class:"col-12 post-information-name pb-2"},st={class:"col-12"},lt=t("div",{class:"post-information-name"},"Name",-1),nt={class:"col-12"},rt={class:"col-12 text-red-700 pt-2"},it={class:"col-12"},dt=t("div",{class:"post-information-name"},"Descriptions",-1),ct={class:"col-12"},pt={class:"col-12 text-red-700 pt-2"},ut={class:"col-12"},mt=t("div",{class:"post-information-name"},"Short Descriptions",-1),_t={class:"col-12"},yt={class:"col-12 text-red-700 pt-2"},ft=t("div",{class:"post-information-name"},"Status",-1),gt={class:"col-12 col-md-6"},vt=t("div",{class:"post-information-name"},"Types",-1),ht={class:"col-12 text-red-700 pt-2"},Dt=t("div",{class:"post-information-name"},"State",-1),bt={class:"col-12 text-red-700 pt-2"},Vt={class:"col-12 col-md-6"},St=t("div",{class:"post-information-name"},"Price",-1),Ct=t("div",{class:"post-information-name"},"Tenure",-1),xt={class:"col-12 col-md-6"},Pt=t("div",{class:"post-information-name"},"Square Feet",-1),wt=t("div",{class:"post-information-name"},"Listing Type",-1),It={class:"col-12 col-md-6"},kt=t("div",{class:"post-information-name"},"Furnished Type",-1),Tt=t("div",{class:"post-information-name"},"Bathroom",-1),Ut={class:"col-12 col-md-6"},Ft=t("div",{class:"post-information-name"},"Bedroom",-1),qt={class:"col-12"},At=t("div",{class:"post-information-name"},"Main Images",-1),Mt=["src"],Qt={class:"col-12"},Bt={class:"flex justify-between py-2"},Et=t("div",{class:"post-information__name"},"Slider Images",-1),Lt={key:0,class:"slider-exist__images"},jt={class:"col-12 text-right"};function Rt(a,o,r,e,i,d){const s=E("CkeditorPlugin"),u=E("ExistImageModal"),_=E("DropFile");return f(),D("div",Ye,[t("div",Ze,[$e,t("div",et,[tt,n(Me,{modelValue:e.propertyDetailsToggle,"onUpdate:modelValue":o[0]||(o[0]=l=>e.propertyDetailsToggle=l),color:"green",onClick:e.handlePropertyDetails},null,8,["modelValue","onClick"])])]),t("div",ot,[t("div",at,y(e.routeType=="update"?"Update":"Create")+" Property ",1),t("div",st,[lt,t("div",nt,[n(b,{dense:"",outlined:"",label:"Name",modelValue:e.propertyData.name,"onUpdate:modelValue":o[1]||(o[1]=l=>e.propertyData.name=l),ref:"nameRef"},null,8,["modelValue"])]),t("div",rt,y(e.errors.name),1)]),t("div",it,[dt,t("div",ct,[n(s,{description:e.propertyData.description,onUpdateDescriptionsData:e.updateDescriptions},null,8,["description","onUpdateDescriptionsData"])]),t("div",pt,y(e.errors.description),1)]),t("div",ut,[mt,t("div",_t,[n(b,{modelValue:e.propertyData.short_description,"onUpdate:modelValue":o[2]||(o[2]=l=>e.propertyData.short_description=l),filled:"",outlined:"",placeholder:"Short Descriptions",type:"textarea"},null,8,["modelValue"])]),t("div",yt,y(e.errors.short_description),1)]),t("div",{class:h(["col-12 col-md-6",a.$q.screen.lt.md?"pr-0":"pr-6"])},[ft,n(V,{dense:"",modelValue:e.propertyData.status,"onUpdate:modelValue":o[3]||(o[3]=l=>e.propertyData.status=l),options:e.status,"option-value":"slug","option-label":"label",label:"Status"},null,8,["modelValue","options"])],2),t("div",gt,[vt,n(V,{dense:"",modelValue:e.propertyData.property_types,"onUpdate:modelValue":o[4]||(o[4]=l=>e.propertyData.property_types=l),options:e.property_types,"option-value":"id","option-label":"label",label:"Please Select"},null,8,["modelValue","options"]),t("div",ht,y(e.errors.type_id),1)]),t("div",{class:h(["col-12 col-md-6",a.$q.screen.lt.md?"pr-0":"pr-6"])},[Dt,n(V,{dense:"",modelValue:e.propertyData.state,"onUpdate:modelValue":o[5]||(o[5]=l=>e.propertyData.state=l),options:e.state,"option-value":"id","option-label":"label",label:"Please Select"},null,8,["modelValue","options"]),t("div",bt,y(e.errors.state_id),1)],2),t("div",Vt,[St,n(b,{dense:"",outlined:"",label:"Price",modelValue:e.propertyData.price,"onUpdate:modelValue":o[6]||(o[6]=l=>e.propertyData.price=l),type:"number"},null,8,["modelValue"])]),t("div",{class:h(["col-12 row gap-y-4",e.propertyDetailsToggle?"":"hidden"])},[t("div",{class:h(["col-12 col-md-6",a.$q.screen.lt.md?"pr-0":"pr-6"])},[Ct,n(V,{dense:"",modelValue:e.propertyDetailsData.tenure,"onUpdate:modelValue":o[7]||(o[7]=l=>e.propertyDetailsData.tenure=l),options:e.tenure,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])],2),t("div",xt,[Pt,n(b,{dense:"",outlined:"",label:"Square Feet",modelValue:e.propertyDetailsData.square_feet,"onUpdate:modelValue":o[8]||(o[8]=l=>e.propertyDetailsData.square_feet=l),type:"number"},null,8,["modelValue"])]),t("div",{class:h(["col-12 col-md-6",a.$q.screen.lt.md?"pr-0":"pr-6"])},[wt,n(V,{dense:"",modelValue:e.propertyDetailsData.listing_type,"onUpdate:modelValue":o[9]||(o[9]=l=>e.propertyDetailsData.listing_type=l),options:e.listingType,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])],2),t("div",It,[kt,n(V,{dense:"",modelValue:e.propertyDetailsData.furnishing,"onUpdate:modelValue":o[10]||(o[10]=l=>e.propertyDetailsData.furnishing=l),options:e.furnishing,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])]),t("div",{class:h(["col-12 col-md-6",a.$q.screen.lt.md?"pr-0":"pr-6"])},[Tt,n(b,{dense:"",outlined:"",label:"Bathroom",modelValue:e.propertyDetailsData.bathroom,"onUpdate:modelValue":o[11]||(o[11]=l=>e.propertyDetailsData.bathroom=l),type:"number"},null,8,["modelValue"])],2),t("div",Ut,[Ft,n(b,{dense:"",outlined:"",label:"Bedroom",modelValue:e.propertyDetailsData.bedroom,"onUpdate:modelValue":o[12]||(o[12]=l=>e.propertyDetailsData.bedroom=l),type:"number"},null,8,["modelValue"])])],2),t("div",qt,[At,t("input",{type:"file",onInput:o[13]||(o[13]=(...l)=>e.updateMainImage&&e.updateMainImage(...l)),accept:".png, .jpg"},null,32),e.bannerUrl!=""?(f(),D("img",{key:0,src:e.bannerUrl,alt:"",class:h(["object-contain h-[300px] mx-auto",a.$q.screen.lt.md?"w-full":"w-1/2"])},null,10,Mt)):k("",!0)]),t("div",Qt,[t("div",Bt,[Et,e.routeType==="update"?(f(),D("div",Lt,[e.propertyData.file.length>0?(f(),he(u,{key:0,property:e.propertyData},null,8,["property"])):k("",!0)])):k("",!0)]),n(_,{onUpdateFiles:e.updateParentFiles},null,8,["onUpdateFiles"])]),t("div",jt,[n(C,{label:e.routeType=="update"?"Update":"Submit",class:"text-white bg-primary update-form__button",onClick:e.submitData},null,8,["label","onClick"])])])])}const ao=se(Xe,[["render",Rt]]);export{ao as default};