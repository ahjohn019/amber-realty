import{Q as n}from"./QInput-d9b5a02f.js";import{Q as i}from"./QSelect-3d267ff4.js";import{e as F}from"./QBtn-e159bb09.js";import{C as f,D as P}from"./DropFile-2fb52dcf.js";import{B as V,r as d,m as u,n as h,x as b,A as o,G as t,H as _,W as m}from"./ckeditor-a9205207.js";import"./use-key-composition-64eeafd4.js";import"./QMenu-f94fd9f9.js";import"./use-prevent-scroll-f0307901.js";const g={components:{CkeditorPlugin:f,DropFile:P},setup(){const a=d({name:"",descriptions:"",short_descriptions:"",images:[],status:"1",price:"",tenure:"",square_feet:"",listing_type:""}),s=d(null),p=d([]),e=d({name:null,descriptions:null,short_descriptions:null,images:null,status:null,price:null,tenure:null,square_feet:null,listing_type:null});return{propertyFormPayload:a,updatePostFormData:async()=>{console.log(a)},updateParentFiles:r=>{a.value.images=r},updateDescriptions:r=>{a.value.descriptions=r},model:s,options:p,errors:e}}},D={class:"m-4 px-4"},U=o("div",{class:"row pb-4"},[o("div",{class:"col text-2xl"},"Property Form")],-1),S={class:"row bg-white p-5 font-bold gap-y-4"},q=o("div",{class:"col-12 post-information-name pb-2"},"Create Property",-1),x={class:"col-12"},B=o("div",{class:"post-information-name"},"Name",-1),C={class:"col-12"},k={class:"col-12 text-red-700"},Q={class:"col-12"},w=o("div",{class:"post-information-name"},"Descriptions",-1),N={class:"col-12"},T={class:"col-12 text-red-700"},I={class:"col-12"},z=o("div",{class:"post-information-name"},"Short Descriptions",-1),A={class:"col-12"},E=o("div",{class:"post-information-name"},"Status",-1),G={class:"col-12 col-md-6"},H=o("div",{class:"post-information-name"},"Price",-1),L=o("div",{class:"post-information-name"},"Tenure",-1),R={class:"col-12 col-md-6"},W=o("div",{class:"post-information-name"},"Square Feet",-1),j=o("div",{class:"post-information-name"},"Listing Type",-1),J={class:"col-12 col-md-6"},K=o("div",{class:"post-information-name"},"Furnished Type",-1),M=o("div",{class:"post-information-name"},"Bathroom",-1),O={class:"col-12 col-md-6"},X=o("div",{class:"post-information-name"},"Bedroom",-1),Y={class:"col-12"},Z=o("div",{class:"post-information-name"},"Images",-1),$={class:"col-12 text-right"};function oo(a,s,p,e,y,v){const c=u("CkeditorPlugin"),r=u("DropFile");return h(),b("div",D,[U,o("div",S,[q,o("div",x,[B,o("div",C,[t(n,{dense:"",outlined:"",label:"Name",modelValue:e.propertyFormPayload.name,"onUpdate:modelValue":s[0]||(s[0]=l=>e.propertyFormPayload.name=l),ref:"nameRef"},null,8,["modelValue"])]),o("div",k,_(e.errors.name),1)]),o("div",Q,[w,o("div",N,[t(c,{descriptions:e.propertyFormPayload.descriptions,onUpdateDescriptionsData:e.updateDescriptions},null,8,["descriptions","onUpdateDescriptionsData"])]),o("div",T,_(e.errors.descriptions),1)]),o("div",I,[z,o("div",A,[t(n,{modelValue:e.propertyFormPayload.short_descriptions,"onUpdate:modelValue":s[1]||(s[1]=l=>e.propertyFormPayload.short_descriptions=l),filled:"",outlined:"",placeholder:"Short Descriptions",type:"textarea"},null,8,["modelValue"])])]),o("div",{class:m(["col-12 col-md-6",a.$q.screen.lt.md?"pr-0":"pr-6"])},[E,t(i,{dense:"",modelValue:e.model,"onUpdate:modelValue":s[2]||(s[2]=l=>e.model=l),options:["a","as"],label:"Status"},null,8,["modelValue"])],2),o("div",G,[H,t(n,{dense:"",outlined:"",label:"Price",modelValue:e.propertyFormPayload.price,"onUpdate:modelValue":s[3]||(s[3]=l=>e.propertyFormPayload.price=l),type:"number"},null,8,["modelValue"])]),o("div",{class:m(["col-12 col-md-6",a.$q.screen.lt.md?"pr-0":"pr-6"])},[L,t(i,{dense:"",modelValue:e.propertyFormPayload.tenure,"onUpdate:modelValue":s[4]||(s[4]=l=>e.propertyFormPayload.tenure=l),options:["a","as"],label:"Status"},null,8,["modelValue"])],2),o("div",R,[W,t(n,{dense:"",outlined:"",label:"Square Feet",modelValue:e.propertyFormPayload.square_feet,"onUpdate:modelValue":s[5]||(s[5]=l=>e.propertyFormPayload.square_feet=l)},null,8,["modelValue"])]),o("div",{class:m(["col-12 col-md-6",a.$q.screen.lt.md?"pr-0":"pr-6"])},[j,t(i,{dense:"",modelValue:e.propertyFormPayload.listing_type,"onUpdate:modelValue":s[6]||(s[6]=l=>e.propertyFormPayload.listing_type=l),options:["a","as"],label:"Status"},null,8,["modelValue"])],2),o("div",J,[K,t(i,{dense:"",modelValue:e.propertyFormPayload.furnishing,"onUpdate:modelValue":s[7]||(s[7]=l=>e.propertyFormPayload.furnishing=l),options:["a","as"],label:"Furnished Type"},null,8,["modelValue"])]),o("div",{class:m(["col-12 col-md-6",a.$q.screen.lt.md?"pr-0":"pr-6"])},[M,t(n,{dense:"",outlined:"",label:"Bathroom",modelValue:e.propertyFormPayload.bathroom,"onUpdate:modelValue":s[8]||(s[8]=l=>e.propertyFormPayload.bathroom=l),type:"number"},null,8,["modelValue"])],2),o("div",O,[X,t(n,{dense:"",outlined:"",label:"Bedroom",modelValue:e.propertyFormPayload.bedroom,"onUpdate:modelValue":s[9]||(s[9]=l=>e.propertyFormPayload.bedroom=l),type:"number"},null,8,["modelValue"])]),o("div",Y,[Z,t(r,{onUpdateFiles:e.updateParentFiles},null,8,["onUpdateFiles"])]),o("div",$,[t(F,{label:"Submit",class:"text-white bg-primary update-form-button",onClick:e.updatePostFormData},null,8,["onClick"])])])])}const mo=V(g,[["render",oo]]);export{mo as default};