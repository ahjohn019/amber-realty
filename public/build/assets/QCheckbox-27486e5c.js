import{J as e,l as a}from"./ckeditor-395087e9.js";import{c as l,Q as u}from"./Ripple-c8ae3d8c.js";import{u as r,a as i,b}from"./use-checkbox-41ac9346.js";const h=e("div",{key:"svg",class:"q-checkbox__bg absolute"},[e("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[e("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),e("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),_=l({name:"QCheckbox",props:r,emits:i,setup(c){function s(n,t){const o=a(()=>(n.value===!0?c.checkedIcon:t.value===!0?c.indeterminateIcon:c.uncheckedIcon)||null);return()=>o.value!==null?[e("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[e(u,{class:"q-checkbox__icon",name:o.value})])]:[h]}return b("checkbox",s)}});export{_ as Q};