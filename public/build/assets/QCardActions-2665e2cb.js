import{B as s,k as r}from"./ckeditor-f906adf3.js";import{c as e,e as n}from"./vm-9a171682.js";import{u as i,c as l}from"./QBtn-265fd93a.js";const p=s("div",{class:"q-space"}),v=e({name:"QSpace",setup(){return()=>p}}),Q=e({name:"QCardActions",props:{...i,vertical:Boolean},setup(a,{slots:o}){const t=l(a),c=r(()=>`q-card__actions ${t.value} q-card__actions--${a.vertical===!0?"vert column":"horiz row"}`);return()=>s("div",{class:c.value},n(o.default))}});export{v as Q,Q as a};