import{E as s,l as r}from"./ckeditor-90a70818.js";import{c as e,e as n}from"./vm-98611852.js";import{b as l,c as i}from"./QBtn-7f3b196f.js";const p=s("div",{class:"q-space"}),v=e({name:"QSpace",setup(){return()=>p}}),Q=e({name:"QCardActions",props:{...l,vertical:Boolean},setup(a,{slots:o}){const t=i(a),c=r(()=>`q-card__actions ${t.value} q-card__actions--${a.vertical===!0?"vert column":"horiz row"}`);return()=>s("div",{class:c.value},n(o.default))}});export{v as Q,Q as a};