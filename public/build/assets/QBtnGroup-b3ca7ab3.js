import{k as r,B as s}from"./ckeditor-211a22bb.js";import{c as l,e as u}from"./vm-e10c9529.js";const B=l({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(o,{slots:t}){const a=r(()=>{const n=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(e=>o[e]===!0).map(e=>`q-btn-group--${e}`).join(" ");return`q-btn-group row no-wrap${n.length!==0?" "+n:""}`+(o.spread===!0?" q-btn-group--spread":" inline")});return()=>s("div",{class:a.value},u(t.default))}});export{B as Q};
