import{d as b,u as v,ao as A,a as u}from"./ckeditor-d241b8c8.js";import{S as C}from"./app-06add774.js";const l="/api/property/",T=b("property_admin",{state:()=>({post_table_admin:null,router:v(),route:A()}),actions:{async fetchPropertyList(r,t=null,a=null){const s={headers:{Authorization:`Bearer ${r}`}};try{const n="?page="+t;return(await u.get(l+"list"+n,{params:a,...s})).data.data}catch(n){throw console.error("Error:",n),n}},async findProperty(r,t){const a={headers:{Authorization:`Bearer ${r}`}};try{return(await u.get(l+"show/"+t,{...a})).data.data}catch(s){throw console.error("Error:",s),s}},async createProperty(r,t=null,a=null){var c,p,d,h,f,m,g,y,_;const s={headers:{Authorization:`Bearer ${r}`,"Content-Type":"multipart/form-data"}},n=((c=this.route.query)==null?void 0:c.type)||null,o=((p=this.route.query)==null?void 0:p.id)||null,P=l+"store",D=l+"update/"+o,S=n==="update"?D:P;t={...t,type_id:t.property_types.id,state_id:t.state.id,status:t.status.slug,file:t.images,id:o},t.property_details>0&&(t=this.handlePropertyDetails(t));const{state:q,property_types:x,images:B,...w}=t;try{const i=await u.post(S,w,s);return this.router.push("/property"),C.fire({text:n==="update"?"Property Update Successfully":"Property Create Successfully",icon:"success"}).then(e=>{if(e.isConfirmed)return i.data.data}),i}catch(i){const e=(h=(d=i.response)==null?void 0:d.data)==null?void 0:h.errors;return a.value={...a.value,name:((f=e==null?void 0:e.name)==null?void 0:f[0])??"",description:((m=e==null?void 0:e.description)==null?void 0:m[0])??"",short_description:((g=e==null?void 0:e.short_description)==null?void 0:g[0])??"",state_id:((y=e==null?void 0:e.state_id)==null?void 0:y[0])??"",type_id:((_=e==null?void 0:e.type_id)==null?void 0:_[0])??""},i.response}},handlePropertyDetails(r){const t={furnishing:r.furnishing.slug,listing_type:r.listing_type.slug,tenure:r.tenure.slug,bathroom:parseInt(r.bathroom),bedroom:parseInt(r.bedroom)};return r={...r,...t},r}}}),z=b("property_admin_models",{state:()=>({post_table_admin:null}),actions:{fetchPropertyColumns(){return[{name:"name",align:"left",label:"Name",field:"name",sortable:!0},{name:"short_description",align:"left",label:"Short Description",field:"short_description",sortable:!0},{name:"price",align:"left",label:"Price",field:"price",sortable:!0},{name:"created_by",align:"left",label:"Created By",field:"created_by",sortable:!1},{name:"status",align:"center",label:"Status",field:"status",sortable:!1}]},fetchPropertyData(){return{name:"",description:"",short_description:"",images:[],status:"",price:300,state:"",property_types:""}},fetchPropertyDetailsData(){return{tenure:"",square_feet:"",listing_type:"",furnishing:"",bathroom:1,bedroom:1}},fetchPropertyError(){return{name:null,description:null,short_description:null,images:null,status:null,price:null,tenure:null,square_feet:null,listing_type:null,furnishing:null,bathroom:null,bedroom:null}},fetchTenureData(){return[{label:"Freehold",slug:"freehold"},{label:"Leasehold",slug:"leasehold"}]},fetchFurnishingData(){return[{label:"Unfurnished",slug:"unfurnished"},{label:"Partially Furnished",slug:"partially_furnished"},{label:"Furnished",slug:"furnished"}]},fetchListingTypeData(){return[{label:"Sale",slug:"sale"},{label:"Rent",slug:"rent"}]},fetchStatusData(){return[{label:"Active",slug:"active"},{label:"Inactive",slug:"inactive"}]}}});export{z as a,T as u};
