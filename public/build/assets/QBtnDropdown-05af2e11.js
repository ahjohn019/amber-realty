import{l as i,J as r,r as h,w as B,o as P,P as V,ad as x}from"./ckeditor-a9205207.js";import{c as v,h as m,q,d as I,s as M,Q as O,e as d}from"./QBtn-e159bb09.js";import{l as _,v as j}from"./QMenu-f94fd9f9.js";const R=v({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:o}){const t=i(()=>{const a=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${a.length!==0?" "+a:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>r("div",{class:t.value},m(o.default))}}),$=Object.keys(q),L=e=>$.reduce((o,t)=>{const a=e[t];return a!==void 0&&(o[t]=a),o},{}),J=v({name:"QBtnDropdown",props:{...q,..._,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:t}){const{proxy:a}=V(),l=h(e.modelValue),u=h(null),c=I(),f=i(()=>{const n={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":c,"aria-label":e.toggleAriaLabel||a.$q.lang.label[l.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),S=i(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),b=i(()=>M(e)),w=i(()=>L(e));B(()=>e.modelValue,n=>{u.value!==null&&u.value[n?"show":"hide"]()}),B(()=>e.split,s);function C(n){l.value=!0,t("beforeShow",n)}function y(n){t("show",n),t("update:modelValue",!0)}function A(n){l.value=!1,t("beforeHide",n)}function D(n){t("hide",n),t("update:modelValue",!1)}function Q(n){t("click",n)}function k(n){x(n),s(),t("click",n)}function H(n){u.value!==null&&u.value.toggle(n)}function g(n){u.value!==null&&u.value.show(n)}function s(n){u.value!==null&&u.value.hide(n)}return Object.assign(a,{show:g,hide:s,toggle:H}),P(()=>{e.modelValue===!0&&g()}),()=>{const n=[r(O,{class:S.value,name:e.dropdownIcon||a.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(r(j,{ref:u,id:c,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:C,onShow:y,onBeforeHide:A,onHide:D},o.default)),e.split===!1?r(d,{class:"q-btn-dropdown q-btn-dropdown--simple",...w.value,...f.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:Q},{default:()=>m(o.label,[]).concat(n),loading:o.loading}):r(R,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...b.value,glossy:e.glossy,stretch:e.stretch},()=>[r(d,{class:"q-btn-dropdown--current",...w.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:k},{default:o.label,loading:o.loading}),r(d,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...f.value,...b.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}});export{J as Q};
