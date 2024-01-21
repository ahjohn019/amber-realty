import{l as E,J as C,B as ae,ao as le,r as i,m as O,n as z,x as G,A as t,G as n,H as _,W as c,N as ne}from"./ckeditor-d241b8c8.js";import{c as re,Q as ie,e as de}from"./QBtn-9e135d5e.js";import{u as pe,a as ce,b as me}from"./use-checkbox-725f48ad.js";import{Q as v}from"./QInput-ce384207.js";import{Q as f}from"./QSelect-f5f788a2.js";import{C as ue,D as ye,u as _e}from"./refList-4a23017b.js";import{a as ve,u as fe}from"./index-e44889a0.js";import{u as ge}from"./app-06add774.js";import"./option-sizes-82021515.js";import"./use-key-composition-1646edd4.js";import"./QMenu-02259ec8.js";import"./use-prevent-scroll-779cc389.js";const De=re({name:"QToggle",props:{...pe,icon:String,iconColor:String},emits:ce,setup(r){function o(g,e){const m=E(()=>(g.value===!0?r.checkedIcon:e.value===!0?r.indeterminateIcon:r.uncheckedIcon)||r.icon),u=E(()=>g.value===!0?r.iconColor:null);return()=>[C("div",{class:"q-toggle__track"}),C("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},m.value!==void 0?[C(ie,{name:m.value,color:u.value})]:void 0)]}return me("toggle",o)}});const he={components:{CkeditorPlugin:ue,DropFile:ye},async setup(){var L,B;const r=le(),o=((L=r.query)==null?void 0:L.type)||null,g=((B=r.query)==null?void 0:B.id)||null,e=ve(),m=_e(),u=fe(),a=i(e.fetchPropertyData()),y=i(e.fetchPropertyDetailsData()),s=i(e.fetchPropertyError()),H=i([]),V=i(0),P=i(!1),w=i([]),x=i([]),J=i(null),S=i(""),W=i([]);a.value.status="Active";const h=ge().fetchSessionToken(),k=e.fetchTenureData(),q=e.fetchFurnishingData(),I=e.fetchListingTypeData(),K=e.fetchStatusData(),F=async()=>{const l=await m.fetchStateList(h);w.value=l},U=async()=>{const l=await m.fetchPropertyTypes(h);return x.value=l,l},X=()=>(V.value=P.value?1:0,V.value),Y=l=>{a.value.images=l},Z=l=>{S.value=URL.createObjectURL(l.target.files[0])},$=l=>{a.value.description=l},b=l=>{let p=l.type.filter(D=>l.category==="propertyType"?D.label.toLowerCase()===l.details.toLowerCase():D.slug===l.details.toLowerCase());return p.length>0&&(p={...p}[0]),p},ee=async()=>{console.log(u)},A=async()=>{const l=await U(),p=await u.findProperty(h,g),{name:D,description:Q,short_description:M,type:N,state:T,price:R,details:d}=p;a.value={...a.value,name:D,description:Q,short_description:M,property_types:b({type:l,details:N,category:"propertyType"}),state:T,price:R},d&&(P.value=!0,y.value={...y.value,tenure:b({type:k,details:d.tenure}),square_feet:d.square_feet,listing_type:b({type:I,details:d.listing_type}),furnishing:b({type:q,details:d.furnishing}),bedroom:d.bedroom,bathroom:d.bathroom})},te=async()=>{var d,j;a.value={...a.value,property_details:V.value,status:{slug:((d=a.value.status)==null?void 0:d.slug)||"active",label:((j=a.value.status)==null?void 0:j.label)||"Active"},banner_url:S.value};const{tenure:l,bathroom:p,bedroom:D,square_feet:Q,listing_type:M,furnishing:N,...T}=a.value;return a.value=T,a.value.property_details>0&&(a.value={...a.value,...Object.fromEntries(Object.entries(y.value).map(([oe,se])=>[oe,se??null]))}),await u.createProperty(h,a.value,s)};return o==="update"&&await A(),await F(),await U(),{findProperty:A,propertyData:a,propertyDetailsData:y,submitData:te,updateParentFiles:Y,updateDescriptions:$,propertyDetailsToggle:P,handlePropertyDetails:X,options:H,errors:s,tenure:k,furnishing:q,listingType:I,status:K,state:w,property_types:x,stateList:F,propertyTypesList:U,mainImage:J,bannerUrl:S,updateMainImage:Z,routeType:o,existImage:W,fetchExistImage:ee}}},be={class:"row"},Ve={class:"col-12 row pb-4"},Pe=t("div",{class:"col text-2xl"},"Property Form",-1),Se={class:"col text-right"},Ue=t("span",{class:"font-bold"},"Details",-1),Te={class:"col-12 row bg-white p-5 font-bold gap-y-4"},Ce={class:"col-12 post-information-name pb-2"},we={class:"col-12"},xe=t("div",{class:"post-information-name"},"Name",-1),ke={class:"col-12"},qe={class:"col-12 text-red-700 pt-2"},Ie={class:"col-12"},Fe=t("div",{class:"post-information-name"},"Descriptions",-1),Ae={class:"col-12"},Le={class:"col-12 text-red-700 pt-2"},Be={class:"col-12"},Qe=t("div",{class:"post-information-name"},"Short Descriptions",-1),Me={class:"col-12"},Ne={class:"col-12 text-red-700 pt-2"},Re=t("div",{class:"post-information-name"},"Status",-1),je={class:"col-12 col-md-6"},Ee=t("div",{class:"post-information-name"},"Types",-1),Oe={class:"col-12 text-red-700 pt-2"},ze=t("div",{class:"post-information-name"},"State",-1),Ge={class:"col-12 text-red-700 pt-2"},He={class:"col-12 col-md-6"},Je=t("div",{class:"post-information-name"},"Price",-1),We=t("div",{class:"post-information-name"},"Tenure",-1),Ke={class:"col-12 col-md-6"},Xe=t("div",{class:"post-information-name"},"Square Feet",-1),Ye=t("div",{class:"post-information-name"},"Listing Type",-1),Ze={class:"col-12 col-md-6"},$e=t("div",{class:"post-information-name"},"Furnished Type",-1),et=t("div",{class:"post-information-name"},"Bathroom",-1),tt={class:"col-12 col-md-6"},ot=t("div",{class:"post-information-name"},"Bedroom",-1),st={class:"col-12"},at=t("div",{class:"post-information-name"},"Main Images",-1),lt=["src"],nt={class:"col-12"},rt=t("div",{class:"post-information-name"},"Slider Images",-1),it={class:"col-12 text-right"};function dt(r,o,g,e,m,u){const a=O("CkeditorPlugin"),y=O("DropFile");return z(),G("div",be,[t("div",Ve,[Pe,t("div",Se,[Ue,n(De,{modelValue:e.propertyDetailsToggle,"onUpdate:modelValue":o[0]||(o[0]=s=>e.propertyDetailsToggle=s),color:"green",onClick:e.handlePropertyDetails},null,8,["modelValue","onClick"])])]),t("div",Te,[t("div",Ce,_(e.routeType=="update"?"Update":"Create")+" Property ",1),t("div",we,[xe,t("div",ke,[n(v,{dense:"",outlined:"",label:"Name",modelValue:e.propertyData.name,"onUpdate:modelValue":o[1]||(o[1]=s=>e.propertyData.name=s),ref:"nameRef"},null,8,["modelValue"])]),t("div",qe,_(e.errors.name),1)]),t("div",Ie,[Fe,t("div",Ae,[n(a,{description:e.propertyData.description,onUpdateDescriptionsData:e.updateDescriptions},null,8,["description","onUpdateDescriptionsData"])]),t("div",Le,_(e.errors.description),1)]),t("div",Be,[Qe,t("div",Me,[n(v,{modelValue:e.propertyData.short_description,"onUpdate:modelValue":o[2]||(o[2]=s=>e.propertyData.short_description=s),filled:"",outlined:"",placeholder:"Short Descriptions",type:"textarea"},null,8,["modelValue"])]),t("div",Ne,_(e.errors.short_description),1)]),t("div",{class:c(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[Re,n(f,{dense:"",modelValue:e.propertyData.status,"onUpdate:modelValue":o[3]||(o[3]=s=>e.propertyData.status=s),options:e.status,"option-value":"slug","option-label":"label",label:"Status"},null,8,["modelValue","options"])],2),t("div",je,[Ee,n(f,{dense:"",modelValue:e.propertyData.property_types,"onUpdate:modelValue":o[4]||(o[4]=s=>e.propertyData.property_types=s),options:e.property_types,"option-value":"id","option-label":"label",label:"Please Select"},null,8,["modelValue","options"]),t("div",Oe,_(e.errors.type_id),1)]),t("div",{class:c(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[ze,n(f,{dense:"",modelValue:e.propertyData.state,"onUpdate:modelValue":o[5]||(o[5]=s=>e.propertyData.state=s),options:e.state,"option-value":"id","option-label":"label",label:"Please Select"},null,8,["modelValue","options"]),t("div",Ge,_(e.errors.state_id),1)],2),t("div",He,[Je,n(v,{dense:"",outlined:"",label:"Price",modelValue:e.propertyData.price,"onUpdate:modelValue":o[6]||(o[6]=s=>e.propertyData.price=s),type:"number"},null,8,["modelValue"])]),t("div",{class:c(["col-12 row gap-y-4",e.propertyDetailsToggle?"":"hidden"])},[t("div",{class:c(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[We,n(f,{dense:"",modelValue:e.propertyDetailsData.tenure,"onUpdate:modelValue":o[7]||(o[7]=s=>e.propertyDetailsData.tenure=s),options:e.tenure,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])],2),t("div",Ke,[Xe,n(v,{dense:"",outlined:"",label:"Square Feet",modelValue:e.propertyDetailsData.square_feet,"onUpdate:modelValue":o[8]||(o[8]=s=>e.propertyDetailsData.square_feet=s),type:"number"},null,8,["modelValue"])]),t("div",{class:c(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[Ye,n(f,{dense:"",modelValue:e.propertyDetailsData.listing_type,"onUpdate:modelValue":o[9]||(o[9]=s=>e.propertyDetailsData.listing_type=s),options:e.listingType,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])],2),t("div",Ze,[$e,n(f,{dense:"",modelValue:e.propertyDetailsData.furnishing,"onUpdate:modelValue":o[10]||(o[10]=s=>e.propertyDetailsData.furnishing=s),options:e.furnishing,"option-value":"slug","option-label":"label",label:"Please Select"},null,8,["modelValue","options"])]),t("div",{class:c(["col-12 col-md-6",r.$q.screen.lt.md?"pr-0":"pr-6"])},[et,n(v,{dense:"",outlined:"",label:"Bathroom",modelValue:e.propertyDetailsData.bathroom,"onUpdate:modelValue":o[11]||(o[11]=s=>e.propertyDetailsData.bathroom=s),type:"number"},null,8,["modelValue"])],2),t("div",tt,[ot,n(v,{dense:"",outlined:"",label:"Bedroom",modelValue:e.propertyDetailsData.bedroom,"onUpdate:modelValue":o[12]||(o[12]=s=>e.propertyDetailsData.bedroom=s),type:"number"},null,8,["modelValue"])])],2),t("div",st,[at,t("input",{type:"file",onInput:o[13]||(o[13]=(...s)=>e.updateMainImage&&e.updateMainImage(...s)),accept:".png, .jpg"},null,32),e.bannerUrl!=""?(z(),G("img",{key:0,src:e.bannerUrl,alt:"",class:c(["object-contain h-[300px] mx-auto",r.$q.screen.lt.md?"w-full":"w-1/2"])},null,10,lt)):ne("",!0)]),t("div",nt,[rt,n(y,{onUpdateFiles:e.updateParentFiles},null,8,["onUpdateFiles"])]),t("div",it,[n(de,{label:e.routeType=="update"?"Update":"Submit",class:"text-white bg-primary update-form-button",onClick:e.submitData},null,8,["label","onClick"])])])])}const Pt=ae(he,[["render",dt]]);export{Pt as default};
