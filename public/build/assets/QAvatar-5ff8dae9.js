import{k as o,B as t}from"./ckeditor-568c0a64.js";import{c as i,a as s,d as u,Q as d,m as S}from"./vm-f21f9386.js";const m=i({name:"QAvatar",props:{...s,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:a}){const n=u(e),r=o(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),l=o(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const c=e.icon!==void 0?[t(d,{name:e.icon})]:void 0;return t("div",{class:r.value,style:n.value},[t("div",{class:"q-avatar__content row flex-center overflow-hidden",style:l.value},S(a.default,c))])}}});export{m as Q};