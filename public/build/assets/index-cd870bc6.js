import{d as g,u as y,a as f}from"./ckeditor-2815513e.js";import{S as P}from"./app-79b0d454.js";const m="/api/property/",v=g("property_admin",{state:()=>({post_table_admin:null,router:y()}),actions:{async fetchPropertyList(r,t=null,n=null){const l={headers:{Authorization:`Bearer ${r}`}};try{const s="?page="+t;return(await f.get(m+"list"+s,{params:n,...l})).data.data}catch(s){throw console.error("Error:",s),s}},async createProperty(r,t=null,n=null){var a,u,o,c,p,d,h;const l={headers:{Authorization:`Bearer ${r}`}};t={...t,type_id:t.property_types.id,state_id:t.state.id,status:t.status.slug},t.property_details>0&&(t=this.handlePropertyDetails(t));const{state:s,property_types:_,...b}=t;try{const i=await f.post(m+"store",b,l);return this.router.push("/property"),P.fire({text:"Property Created Successfully",icon:"success"}).then(e=>{if(e.isConfirmed)return i.data.data}),i}catch(i){const e=(u=(a=i.response)==null?void 0:a.data)==null?void 0:u.errors;return n.value={...n.value,name:((o=e==null?void 0:e.name)==null?void 0:o[0])??"",description:((c=e==null?void 0:e.description)==null?void 0:c[0])??"",short_description:((p=e==null?void 0:e.short_description)==null?void 0:p[0])??"",state_id:((d=e==null?void 0:e.state_id)==null?void 0:d[0])??"",type_id:((h=e==null?void 0:e.type_id)==null?void 0:h[0])??""},i.response}},handlePropertyDetails(r){const t={furnishing:r.furnishing.slug,listing_type:r.listing_type.slug,tenure:r.tenure.slug,bathroom:parseInt(r.bathroom),bedroom:parseInt(r.bedroom)};return r={...r,...t},r}}}),A=g("property_admin_models",{state:()=>({post_table_admin:null}),actions:{fetchPropertyColumns(){return[{name:"name",align:"left",label:"Name",field:"name",sortable:!0},{name:"description",align:"left",label:"Description",field:"description",sortable:!0},{name:"short_description",align:"left",label:"Short Description",field:"short_description",sortable:!0},{name:"price",align:"left",label:"Price",field:"price",sortable:!0},{name:"created_by",align:"left",label:"Created By",field:"created_by",sortable:!1}]},fetchPropertyData(){return{name:"",description:"",short_description:"",images:[],status:"",price:300,state:"",property_types:""}},fetchPropertyDetailsData(){return{tenure:"",square_feet:"",listing_type:"",furnishing:"",bathroom:1,bedroom:1}},fetchPropertyError(){return{name:null,description:null,short_description:null,images:null,status:null,price:null,tenure:null,square_feet:null,listing_type:null,furnishing:null,bathroom:null,bedroom:null}},fetchTenureData(){return[{label:"Freehold",slug:"freehold"},{label:"Leasehold",slug:"leasehold"}]},fetchFurnishingData(){return[{label:"Unfurnished",slug:"unfurnished"},{label:"Partially Furnished",slug:"partially_furnished"},{label:"Furnished",slug:"furnished"}]},fetchListingTypeData(){return[{label:"Sale",slug:"sale"},{label:"Rent",slug:"rent"}]},fetchStatusData(){return[{label:"Active",slug:"active"},{label:"Inactive",slug:"inactive"}]}}});export{A as a,v as u};
