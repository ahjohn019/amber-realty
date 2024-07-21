import{a as T}from"./QAvatar-e0d3e302.js";import{Q as U,a as V,b as A,c as Q}from"./QTabPanels-eee6ed4e.js";import{Q as h}from"./QInput-2db4e532.js";import{Q as w}from"./QBtn-c4aed158.js";import{Q as F}from"./QDialog-aaa61d1c.js";import{Q as $}from"./QCard-48064bf2.js";import{r as f,q as g,s as S,t as i,E as o,O as I,B as a,y as C,P as j,H as y,I as q,T as k}from"./ckeditor-75d48d99.js";import{_ as B}from"./BaseLayout-4d508afc.js";import{Q as N}from"./QSpace-f4e3315c.js";import{Q as v}from"./QCardSection-23243dbf.js";import{C as D}from"./ClosePopup-188a1a79.js";import{u as x}from"./app-6fb091e6.js";import{Q as L}from"./QImg-ea549f2b.js";import"./QMenu-babb46b9.js";import"./use-tick-309b3908.js";import"./vm-287ad375.js";import"./QScrollArea-2911723b.js";import"./rtl-36dd996b.js";import"./QSeparator-a24a473f.js";import"./dayjs.min-d0ab8850.js";const M=a("div",{class:"text-h6"},"Change Password",-1),z={__name:"ChangePasswordForm",setup(P){const m=x(),p=m.fetchSessionToken(),n=f({current_password:"",password:"",password_confirmation:""}),t=f({}),_=async()=>{var u,l,r;try{return await m.updatePassword(p,n.value)}catch(e){t.value={...t.value,current_password_invalid:((u=e.response.data)==null?void 0:u.message)??null,current_password:((l=e.response.data.errors)==null?void 0:l.current_password[0])??null,password:((r=e.response.errors)==null?void 0:r.password)??null}}};return(u,l)=>(g(),S($,{style:{width:"700px","max-width":"80vw"}},{default:i(()=>[o(v,{class:"row items-center q-pb-none"},{default:i(()=>[M,o(N),I(o(w,{icon:"close",flat:"",round:"",dense:""},null,512),[[D]])]),_:1}),o(v,null,{default:i(()=>[o(h,{outlined:"",dense:"",label:"Current Password",modelValue:n.value.current_password,"onUpdate:modelValue":l[0]||(l[0]=r=>n.value.current_password=r),type:"password",hint:t.value.current_password??t.value.current_password_invalid},null,8,["modelValue","hint"])]),_:1}),o(v,null,{default:i(()=>[o(h,{outlined:"",dense:"",label:"New Password",modelValue:n.value.password,"onUpdate:modelValue":l[1]||(l[1]=r=>n.value.password=r),type:"password",hint:t.value.current_password},null,8,["modelValue","hint"])]),_:1}),o(v,null,{default:i(()=>[o(h,{outlined:"",dense:"",label:"Confirm Password",modelValue:n.value.password_confirmation,"onUpdate:modelValue":l[2]||(l[2]=r=>n.value.password_confirmation=r),type:"password",hint:t.value.message},null,8,["modelValue","hint"])]),_:1}),o(v,null,{default:i(()=>[o(w,{unelevated:"",color:"primary",label:"Save Password",onClick:_})]),_:1})]),_:1}))}},E={class:"col-12 col-md-3 col-auto"},R={class:"col-12 col-md-8 col-auto row"},H={class:"col"},O={class:"flex justify-between items-center"},W={class:"font-bold text-lg"},G={class:"font-bold text-lg text-primary"},J={__name:"ShortListPost",props:["userProfileProperty"],setup(P){const m=P,p=x(),n=p.fetchSessionToken(),t=f([]);t.value=m.userProfileProperty;const _=(l,r="RM")=>{const e=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(l);return`${r}${e}`},u=async l=>{const r={id:l.id,status:!1};try{const e=await p.toggleShortListPosts(n,r),s=t.value.findIndex(c=>c.id===parseInt(e.post_id));return t.value.splice(s,1),e}catch{}};return(l,r)=>(g(!0),C(q,null,j(t.value,(e,s)=>(g(),C("div",{key:s,class:"row gap-4 py-4 justify-center"},[a("div",E,[o(L,{src:e.banner_url?e.banner_url:"https://cdn.quasar.dev/img/parallax2.jpg"},null,8,["src"])]),a("div",R,[a("div",H,[a("div",O,[a("div",W,y(e.name),1),a("div",null,[o(w,{round:"",color:"primary",icon:"close",size:"10px",onClick:c=>u(e)},null,8,["onClick"])])]),a("div",null,y(e.short_description),1),a("div",G,y(_(e.price,"RM ")),1)])])]))),128))}};const K={class:"container mx-auto md:w-[992px]"},X={class:"relative bg-primary h-[150px] z-10"},Y=a("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),Z={class:"pl-[45px]"},ee={class:"text-2xl text-white"},oe=a("div",{class:"text-white"},"Member",-1),ae={class:"profile__down relative top-[5%]"},te={class:"row gap-y-2"},se={class:"col-12 col-md-6 p-2 flex flex-col gap-2"},le=a("label",{for:"name",class:"uppercase font-semibold"},"Name",-1),re={class:"col-12 col-md-6 p-2 flex flex-col gap-2"},ne=a("label",{for:"email",class:"uppercase font-semibold"},"Email",-1),ie={class:"col-12 p-2 flex justify-center gap-2"},Se={__name:"ProfilePage",setup(P){const m=x(),p=m.fetchSessionToken(),n=f("edit_profile"),t=f({name:"",email:"",saved_property:""}),_=f(!1),u=f({}),l=async()=>{try{const e=await m.fetchProfile(p);return t.value={...t.value,name:(e==null?void 0:e.name)??null,email:(e==null?void 0:e.email)??null,saved_property:(e==null?void 0:e.saved_property)??null},e}catch{}},r=async()=>{var e,s,c,d;try{return await m.updateProfile(p,t.value)}catch(b){u.value={...u.value,name:((s=(e=b.response.data.errors)==null?void 0:e.name)==null?void 0:s[0])??null,email:((d=(c=b.response.data.errors)==null?void 0:c.email)==null?void 0:d[0])??null}}};return l(),(e,s)=>(g(),S(B,null,{content:i(()=>{var c;return[a("div",K,[a("div",{class:k(["profile__header",e.$q.screen.lt.md?"":"mt-6"])},[a("div",X,[a("div",{class:k(["flex items-center",e.$q.screen.lt.md?"justify-center h-full":"absolute top-[27.5%] left-[1.25rem]"])},[o(T,{size:"120px",class:"relative"},{default:i(()=>[Y]),_:1}),a("div",Z,[a("div",ee,y((c=t.value)==null?void 0:c.name),1),oe])],2)]),a("div",ae,[o($,null,{default:i(()=>[o(U,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=d=>n.value=d),dense:"",class:"bg-grey-2 text-black font-bold h-[3.25rem]","active-color":"primary","indicator-color":"purple",align:"justify"},{default:i(()=>[o(V,{name:"edit_profile",label:"Edit Profile"}),o(V,{name:"my_shortlists",label:"My Shortlists"})]),_:1},8,["modelValue"]),o(A,{modelValue:n.value,"onUpdate:modelValue":s[5]||(s[5]=d=>n.value=d),animated:""},{default:i(()=>[o(Q,{name:"edit_profile"},{default:i(()=>[a("div",te,[a("div",se,[le,o(h,{outlined:"",dense:"",modelValue:t.value.name,"onUpdate:modelValue":s[1]||(s[1]=d=>t.value.name=d),hint:u.value.name},null,8,["modelValue","hint"])]),a("div",re,[ne,o(h,{outlined:"",dense:"",type:"email",modelValue:t.value.email,"onUpdate:modelValue":s[2]||(s[2]=d=>t.value.email=d),hint:u.value.email},null,8,["modelValue","hint"])]),a("div",ie,[o(w,{label:"Change Password",color:"primary",onClick:s[3]||(s[3]=d=>_.value=!0)}),o(w,{unelevated:"",color:"primary",label:"Save Profile",onClick:r})])]),o(F,{modelValue:_.value,"onUpdate:modelValue":s[4]||(s[4]=d=>_.value=d)},{default:i(()=>[o(z)]),_:1},8,["modelValue"])]),_:1}),o(Q,{name:"my_shortlists"},{default:i(()=>[o(J,{userProfileProperty:t.value.saved_property},null,8,["userProfileProperty"])]),_:1})]),_:1},8,["modelValue"])]),_:1})])],2)])]}),_:1}))}};export{Se as default};
