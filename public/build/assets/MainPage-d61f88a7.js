import{Q as l}from"./vm-e10c9529.js";import{Q as i}from"./QInput-6b59f9e3.js";import{Q as f}from"./QBtn-d4f24742.js";import{Q as v}from"./QCheckbox-e1ead077.js";import{z as c,m,u as _,y as e,r as d,l as g,A as n,q as r}from"./ckeditor-211a22bb.js";import{u as w}from"./auth-2c69448c.js";import"./uid-6a237b22.js";import"./focus-manager-cb626d5f.js";import"./use-checkbox-c35ae96d.js";import"./option-sizes-758e9471.js";const h={},b={class:"ocean"},x=e("div",{class:"wave"},null,-1),V=e("div",{class:"wave"},null,-1),y=e("div",{class:"wave"},null,-1),k=[x,V,y];function Q(a,o){return m(),_("div",b,k)}const C=c(h,[["render",Q]]);const A={components:{WaveComponent:C},setup(){const a=w(),o=d({email:"",password:"",device_name:"web"});return{submitAdminLogin:async()=>{await a.handleLogin(o.value)},forget_password:d(""),formData:o}}},L={class:"grid place-items-center h-screen login-main-page"},D={class:"row mx-auto admin-login-page px-6 gap-8"},B={class:"col-12"},P=["src"],$={class:"col-12"},M={class:"col-12"},U={class:"col-12"},I={class:"col-12 flex items-center justify-between"},N={class:"admin-login-checkbox"},S=e("div",null,[e("a",{href:"#",target:"_blank"},"Forgot Password?")],-1);function j(a,o,p,s,q,z){const u=g("wave-component");return m(),_("div",L,[e("div",D,[e("div",B,[e("img",{src:a.mainLogo,alt:"",width:"100",class:"mx-auto"},null,8,P)]),e("div",$,[n(i,{outlined:"",dense:"",modelValue:s.formData.email,"onUpdate:modelValue":o[0]||(o[0]=t=>s.formData.email=t),label:"Login",type:"email",filled:""},{prepend:r(()=>[n(l,{name:"person"})]),_:1},8,["modelValue"])]),e("div",M,[n(i,{outlined:"",dense:"",modelValue:s.formData.password,"onUpdate:modelValue":o[1]||(o[1]=t=>s.formData.password=t),label:"Password",type:"password",filled:""},{prepend:r(()=>[n(l,{name:"lock"})]),_:1},8,["modelValue"])]),e("div",U,[n(f,{label:"login",class:"text-white bg-primary !w-full",rounded:"",onClick:s.submitAdminLogin},null,8,["onClick"])]),e("div",I,[e("div",N,[n(v,{modelValue:s.forget_password,"onUpdate:modelValue":o[2]||(o[2]=t=>s.forget_password=t),label:"Remember Me"},null,8,["modelValue"])]),S])]),n(u)])}const X=c(A,[["render",j]]);export{X as default};
