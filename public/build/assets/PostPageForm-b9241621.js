import{Q as A}from"./QInput-92c09ed8.js";import{Q as B}from"./QSelect-bed325f1.js";import{E as r,r as p,l as _,K as V,L as Q,M as C,B as T,m as q,n as R,x as L,A as t,D as m,G as x}from"./ckeditor-2db82a36.js";import{c as U,u as N,a as z,b as E,d as M,Q as j,h as K,e as O}from"./vm-8acb4ab5.js";import{o as G,u as Y}from"./option-sizes-38d363f3.js";import{u as H,a as J}from"./use-key-composition-fefc29af.js";import{Q as W}from"./QBtn-7730d556.js";import{C as X,D as Z,u as $}from"./refList-0a28c396.js";import{u as ee}from"./postTablePage-3eed29d2.js";import{u as oe}from"./app-548820d8.js";import"./QChip-5d519ab4.js";import"./QMenu-5921cef6.js";import"./use-tick-c308625a.js";import"./QDialog-e6831ada.js";import"./use-prevent-scroll-980b8771.js";import"./rtl-36dd996b.js";import"./format-7985d814.js";const te=r("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[r("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),r("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]),w=U({name:"QRadio",props:{...N,...z,...H,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:s,emit:f}){const{proxy:o}=Q(),g=E(e,o.$q),y=M(e,G),d=p(null),{refocusTargetEl:v,refocusTarget:l}=Y(e,d),i=_(()=>V(e.modelValue)===V(e.val)),P=_(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(g.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),k=_(()=>{const a=e.color!==void 0&&(e.keepColor===!0||i.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${i.value===!0?"truthy":"falsy"}${a}`}),n=_(()=>(i.value===!0?e.checkedIcon:e.uncheckedIcon)||null),c=_(()=>e.disable===!0?-1:e.tabindex||0),b=_(()=>{const a={type:"radio"};return e.name!==void 0&&Object.assign(a,{".checked":i.value===!0,"^checked":i.value===!0?"checked":void 0,name:e.name,value:e.val}),a}),h=J(b);function u(a){a!==void 0&&(C(a),l(a)),e.disable!==!0&&i.value!==!0&&f("update:modelValue",e.val,a)}function D(a){(a.keyCode===13||a.keyCode===32)&&C(a)}function I(a){(a.keyCode===13||a.keyCode===32)&&u(a)}return Object.assign(o,{set:u}),()=>{const a=n.value!==null?[r("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[r(j,{class:"q-radio__icon",name:n.value})])]:[te];e.disable!==!0&&h(a,"unshift"," q-radio__native q-ma-none q-pa-none");const F=[r("div",{class:k.value,style:y.value,"aria-hidden":"true"},a)];v.value!==null&&F.push(v.value);const S=e.label!==void 0?K(s.default,[e.label]):O(s.default);return S!==void 0&&F.push(r("div",{class:"q-radio__label q-anchor--skip"},S)),r("div",{ref:d,class:P.value,tabindex:c.value,role:"radio","aria-label":e.label,"aria-checked":i.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:u,onKeydown:D,onKeyup:I},F)}}});const ae={components:{CkeditorPlugin:X,DropFile:Z},setup(){const e=p({title:"",descriptions:"",images:[],status:"1",category_id:{label:"News",value:1}}),s=p(null),f=p([]),o=p({title:null,descriptions:null,images:null,status:null,category_id:null}),g=ee(),d=oe().fetchSessionToken(),v=$(),l=async()=>{const n=await v.fetchCategoryList(d);f.value=n.map(c=>({label:c.name,value:c.id}))},i=n=>{e.value.images=n},P=async()=>{e.value.category_id=e.value.category_id.value;const n=await g.createPost(d,e.value,o);k(n)},k=n=>{var c,b,h;if(n.status===422){const u=n.data.errors;o.value={...o.value,title:((c=u.title)==null?void 0:c[0])??null,descriptions:((b=u.descriptions)==null?void 0:b[0])??null,category_id:((h=u.category_id)==null?void 0:h[0])??null}}};return l(),{postFormPayload:e,updatePostFormData:P,updateParentFiles:i,model:s,options:f,errors:o}}},se={class:"dashboard-container-page m-4 px-4"},le=t("div",{class:"row pb-4"},[t("div",{class:"col text-2xl"},"Post Form")],-1),ne={class:"row bg-white p-5 font-bold gap-y-4"},ie=t("div",{class:"col-12 post-information-title pb-2"}," Post Information ",-1),re={class:"col-12"},de=t("div",{class:"post-information-title"},"Title",-1),ce={class:"col-12"},ue={class:"col-12 text-red-700"},me={class:"col-12"},ve=t("div",{class:"post-information-title"},"Descriptions",-1),_e={class:"col-12"},fe={class:"col-12 text-red-700"},pe={class:"col-12"},ge=t("div",{class:"post-information-title"},"Category",-1),be={class:"col-12"},he={class:"col-12 text-red-700"},ye={class:"col-12"},Pe=t("div",{class:"post-information-title"},"Images",-1),ke={class:"col-12 col-md-6"},Fe=t("div",{class:"post-information-title"},"Status",-1),xe={class:"col-12 text-right"};function Se(e,s,f,o,g,y){const d=q("CkeditorPlugin"),v=q("DropFile");return R(),L("div",se,[le,t("div",ne,[ie,t("div",re,[de,t("div",ce,[m(A,{outlined:"",dense:"",label:"Title",modelValue:o.postFormPayload.title,"onUpdate:modelValue":s[0]||(s[0]=l=>o.postFormPayload.title=l),ref:"nameRef"},null,8,["modelValue"])]),t("div",ue,x(o.errors.title),1)]),t("div",me,[ve,t("div",_e,[m(d,{modelValue:o.postFormPayload.descriptions,"onUpdate:modelValue":s[1]||(s[1]=l=>o.postFormPayload.descriptions=l)},null,8,["modelValue"])]),t("div",fe,x(o.errors.descriptions),1)]),t("div",pe,[ge,t("div",be,[m(B,{outlined:"",dense:"",modelValue:o.postFormPayload.category_id,"onUpdate:modelValue":s[2]||(s[2]=l=>o.postFormPayload.category_id=l),options:o.options,label:"Category"},null,8,["modelValue","options"])]),t("div",he,x(o.errors.category_id),1)]),t("div",ye,[Pe,m(v,{onUpdateFiles:o.updateParentFiles},null,8,["onUpdateFiles"])]),t("div",ke,[Fe,m(w,{modelValue:o.postFormPayload.status,"onUpdate:modelValue":s[3]||(s[3]=l=>o.postFormPayload.status=l),val:"1",label:"Yes"},null,8,["modelValue"]),m(w,{modelValue:o.postFormPayload.status,"onUpdate:modelValue":s[4]||(s[4]=l=>o.postFormPayload.status=l),val:"0",label:"No"},null,8,["modelValue"])]),t("div",xe,[m(W,{label:"Submit",class:"text-white bg-primary update-form-button",onClick:o.updatePostFormData},null,8,["onClick"])])])])}const je=T(ae,[["render",Se]]);export{je as default};
