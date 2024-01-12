import{Q as b,e as C}from"./QBtn-e159bb09.js";import{Q as x}from"./QInput-d9b5a02f.js";import{B as _,r as y,n as i,x as d,A as t,G as e,W as w,m as r,s as f,X as v,F as P,D as q,H as h,q as B}from"./ckeditor-a9205207.js";import{L}from"./ListComponent-8a348463.js";import{B as k}from"./BaseLayout-40f3df24.js";import"./use-key-composition-64eeafd4.js";import"./QToolbar-ebf8a899.js";import"./QMenu-f94fd9f9.js";import"./QList-dc4639b1.js";import"./QBtnDropdown-05af2e11.js";const A={setup(){return{payload:y({name:"",email:""})}}},V={class:"row container mx-auto p-6 md:p-12 gap-4 md:gap-0 justify-between"},I={class:"col-12 col-md-8 col-lg-6 flex flex-col gap-6 justify-center header-content-container px-4","data-aos":"flip-left"},E={class:"header-content"},S=t("span",{class:"align-middle"}," Amber Realty Real Estate ",-1),R=t("div",{class:"text-3xl md:text-6xl font-bold header-title"},null,-1),j=t("div",{class:"text-lg"}," Are you ready to start the search for your dream home? Look no further than Amber Realty Real Estate. ",-1),H={class:"col-12 col-md-4 flex flex-col gap-6 bg-white rounded py-6 px-3 md:p-10 justify-center","data-aos":"flip-right"},Q=t("div",{class:"flex flex-col gap-2"},[t("span",{class:"text-lg md:text-2xl font-bold header-content-container"},"Real Estate Inquiry Form"),t("div",{class:"text-sm text-gray-500"}," Please provide the following information to help us better understand your real estate needs. ")],-1),T={class:"flex flex-col gap-4"},Y=t("span",{class:"font-bold inquiry-info"},"Your Information",-1);function D(s,n,l,o,p,m){return i(),d("div",{class:w(["bg-secondary",s.$q.screen.lt.md?"h-full":"h-[650px] flex items-center"])},[t("div",V,[t("div",I,[t("div",E,[e(b,{name:"home",size:"22px",class:"align-middle"}),S]),R,j]),t("div",H,[Q,t("div",T,[Y,t("div",null,[e(x,{filled:"",modelValue:o.payload.name,"onUpdate:modelValue":n[0]||(n[0]=a=>o.payload.name=a),placeholder:"Your Name"},null,8,["modelValue"])]),t("div",null,[e(x,{filled:"",modelValue:o.payload.email,"onUpdate:modelValue":n[1]||(n[1]=a=>o.payload.email=a),placeholder:"Your Email"},null,8,["modelValue"])])]),t("div",null,[e(C,{color:"primary",label:"Get Inquiry",size:"16px",style:{width:"100%"}})])])])],2)}const N=_(A,[["render",D]]);const z={components:{ListComponent:L}},F={class:"row container mx-auto py-12 px-8 gap-10"},U={class:"col-12 px-2 row items-center gap-2 md:gap-0"},G=t("div",{class:"col-12 col-md-6 text-3xl font-bold properties-content"}," Explore Our Latest Properties ",-1),J={class:"col-12 col-md-6 text-right font-bold properties-content"};function K(s,n,l,o,p,m){const a=r("router-link"),c=r("ListComponent");return i(),d("div",F,[t("div",U,[G,t("div",J,[e(a,{to:"#"},{default:f(()=>[v("See All Property")]),_:1})])]),e(c)])}const M=_(z,[["render",K]]);const O={setup(){const s=y({}),n=0,l=5;return s.value=[{title:"20",content:"Years in the industry",quote:"+"},{title:"90",content:"Customer satisfaction",quote:"%"},{title:"10",content:"Properties sold",quote:"K"},{title:"50",content:"Country served",quote:"+"}],{payload:s,numberInit:n,numberDuration:l}}},W={class:"bg-primary"},X={class:"row social-proof-container mx-auto flex justify-center items-center text-white gap-6 md:gap-0"},Z={class:"text-6xl font-bold"},tt={class:"text-lg"};function et(s,n,l,o,p,m){const a=r("number");return i(),d("div",W,[t("div",X,[(i(!0),d(P,null,q(o.payload,(c,u)=>(i(),d("div",{class:"col-6 col-md-3 text-center q-gutter-y-sm",key:u},[t("div",Z,[e(a,{class:"bold transition",ref_for:!0,ref:"number2",from:o.numberInit,to:c.title||o.numberInit,duration:o.numberDuration},null,8,["from","to","duration"]),v(h(c.quote),1)]),t("div",tt,h(c.content),1)]))),128))])])}const ot=_(O,[["render",et]]);const nt={},st={class:"bg-secondary"},at={class:"row justify-around items-center container mx-auto call-to-action-container q-gutter-y-lg"},rt=t("div",{class:"col-12 col-md-7 text-2xl md:text-4xl font-bold"}," Contact Us to Start Your Real Estate Journey ! ",-1),lt={class:"col-12 col-md-3 text-center text-xl font-bold text-white",style:{width:"250px"}},ct=t("div",{class:"bg-primary px-8 py-4 rounded row"},[t("div",{class:"col-2"},[t("img",{src:"/images/amber_whatsapp.png",alt:"",width:"55"})]),t("div",{class:"col-10"},"0123729668")],-1);function it(s,n){const l=r("router-link");return i(),d("div",st,[t("div",at,[rt,t("div",lt,[e(l,{to:"#"},{default:f(()=>[ct]),_:1})])])])}const dt=_(nt,[["render",it]]),_t={components:{BaseLayout:k,HeaderContainer:N,PropertiesContainer:M,SocialProof:ot,CallToAction:dt}};function pt(s,n,l,o,p,m){const a=r("HeaderContainer"),c=r("PropertiesContainer"),u=r("SocialProof"),g=r("CallToAction"),$=r("BaseLayout");return i(),B($,null,{content:f(()=>[e(a,{"data-aos":"fade-up"}),e(c,{"data-aos":"fade-left"}),e(u,{"data-aos":"fade-right"}),e(g,{"data-aos":"fade-left"})]),_:1})}const Ct=_(_t,[["render",pt]]);export{Ct as default};
