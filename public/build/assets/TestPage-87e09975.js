import{n as s,x as n,A as t}from"./ckeditor-2815513e.js";import{u as o}from"./scrollAnimation-8c31024a.js";const i=t("div",{class:"bg-red h-screen to-animate test-first"}," asdasdasdasdasasd ",-1),r=t("div",{class:"bg-green h-screen to-animate test-two"},"asdasdasd",-1),c=[i,r],h={__name:"TestPage",setup(d){const a=o(),e=[{name:"test-first",animation:"animate__fadeInRight"},{name:"test-two",animation:"animate__fadeInLeft"}];return a.scrollAnimation(e),(m,_)=>(s(),n("div",null,c))}};export{h as default};