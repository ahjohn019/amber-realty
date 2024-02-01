import{l as u,J as c,B as $,r as f,m as S,n as h,q as L,s as b,A as t,G as d,W as r,H as _,x as y,D as Q,F as E}from"./ckeditor-395087e9.js";import{c as C,Q as R,d as T,n as U,h as j}from"./Ripple-c8ae3d8c.js";import{u as V,d as M,a as O,b as P}from"./focus-manager-79df5594.js";import{Q as x}from"./QImg-e572c7b9.js";import{B as z}from"./BaseLayout-9735b602.js";import"./QToolbar-7983e78d.js";import"./QMenu-630aeaa5.js";import"./use-timeout-7eeb77f4.js";import"./QBtnDropdown-5c5a3be5.js";import"./ClosePopup-ca864c97.js";import"./QSeparator-3f6abff9.js";const w=C({name:"QBreadcrumbsEl",props:{...V,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:a}){const{linkTag:m,linkAttrs:o,linkClass:p,navigateOnClick:g}=M(),i=u(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+p.value:"q-breadcrumbs__el--disable"),...o.value,onClick:g})),l=u(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const s=[];return e.icon!==void 0&&s.push(c(R,{class:l.value,name:e.icon})),e.label!==void 0&&s.push(e.label),c(m.value,{...i.value},T(a.default,s))}}}),H=["",!0],I=C({name:"QBreadcrumbs",props:{...O,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:a}){const m=P(e),o=u(()=>`flex items-center ${m.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),p=u(()=>e.separatorColor?` text-${e.separatorColor}`:""),g=u(()=>` text-${e.activeColor}`);return()=>{const i=U(j(a.default));if(i.length===0)return;let l=1;const s=[],q=i.filter(n=>n.type!==void 0&&n.type.name==="QBreadcrumbsEl").length,B=a.separator!==void 0?a.separator:()=>e.separator;return i.forEach(n=>{if(n.type!==void 0&&n.type.name==="QBreadcrumbsEl"){const v=l<q,k=n.props!==null&&H.includes(n.props.disable),A=(v===!0?"":" q-breadcrumbs--last")+(k!==!0&&v===!0?g.value:"");l++,s.push(c("div",{class:`flex items-center${A}`},[n])),v===!0&&s.push(c("div",{class:"q-breadcrumbs__separator"+p.value},B()))}else s.push(n)}),c("div",{class:"q-breadcrumbs"},[c("div",{class:o.value},s)])}}}),N={components:{BaseLayout:z},setup(){const e=f({}),a=f([]);return a.value=[{content:"Serving with integrity"},{content:"Conducting ourselves and our business in an honest, ethical, and trustworthy manner"},{content:"Providing financial stewardship"},{content:"Growing through innovation and creativity"}],e.value={title:"Your Trusted Partner in Real Estate",content:`
                <div class='flex flex-col gap-4 text-lg'>
                    <div>
                        Amber Realty is a licensed real estate agent registered with
                        the Board of Valuers, Appraisers and Estate Agents of
                        Malaysia, and based in Kuala Lumpur the capital city of
                        Malaysian. 
                    </div>
                    <div>
                        Amber Realty has always been committed to
                        providing the highest standards in the practice of Real
                        Estate and unwavering dedication to the satisfaction of
                        customers. Amber Realty place equal significance on
                        personalized service and continuing innovation in building
                        lifetime relationships with our customers and communities.
                    </div>
                    <div>
                        Our Team of highly motivated and experienced negotiators is 
                        dedicated and committed to providing assistance to all real estate 
                        investment needs and complete transactions in the most efficient manner. 
                    </div>
                    <div>
                        Among the properties we handle are Residential, Commercial and Industrial, 
                        including Land for various types of use. 
                        We also undertake all categories of Projects Sales, on behalf of Developers. 
                    </div>
                    <div>
                        With many years of experience in this field Amber Realty is 
                        in a position to share feedbacks on requirements by the end-users.  
                        This allows us, when called upon by developers, to advise them with the planning of the layout, 
                        floor plans and the selling price, in accordance with the specific locations of the development.
                    </div>
                </div>`},{aboutUsContentOne:e,aboutUsContentTwo:a}}},W={class:"bg-primary","data-aos":"fade-up",style:{"margin-top":"3.5rem"}},D={class:"container mx-auto text-white h-[45vh] flex justify-center items-center"},F={class:"text-center flex flex-col gap-2"},G=t("div",{class:"text-5xl"},"About Us",-1),J={class:"row container mx-auto py-24 px-12 justify-between gap-20"},K={class:"col-12 col-lg-6 text-4xl font-bold leading-tight q-gutter-y-md"},Y={"data-aos":"flip-up","data-aos-duration":"1200"},X=["innerHTML"],Z={class:"col-12 col-lg-6 row gap-4","data-aos":"fade-up"},ee=t("div",{class:"text-4xl font-bold"},"Core Values",-1),te=t("div",{class:"text-lg"},"We Believe In",-1),se=[ee,te],ae={class:"col-12 col-lg-6"},ne={"data-aos":"flip-up","data-aos-duration":"1200"};function oe(e,a,m,o,p,g){const i=S("BaseLayout");return h(),L(i,null,{content:b(()=>[t("div",W,[t("div",D,[t("div",F,[G,t("div",null,[d(I,{"active-color":"secondary",class:"flex justify-center"},{default:b(()=>[d(w,{label:"Home",icon:"home",to:"/"}),d(w,{label:"About Us"})]),_:1})])])])]),t("div",J,[t("div",{class:r(["col-12 row",e.$q.screen.lt.lg?"gap-4":""])},[t("div",K,[t("div",{class:r(e.$q.screen.lt.lg?"text-center":"")},_(o.aboutUsContentOne.title),3),t("div",Y,[d(x,{src:"images/about_us_one.jpg",fit:"contain",class:"rounded-lg"})])]),t("div",{class:r(["col-12 col-lg-6",e.$q.screen.lt.md?"":"px-8"]),innerHTML:o.aboutUsContentOne.content},null,10,X)],2),t("div",{class:r(["col-12 row",e.$q.screen.lt.lg?"gap-4":""])},[t("div",Z,[t("div",{class:r(["col-12 flex flex-col gap-2",e.$q.screen.lt.lg?"text-center":""])},se,2),(h(!0),y(E,null,Q(o.aboutUsContentTwo,(l,s)=>(h(),y("div",{class:"col-12 col-lg-10 row",key:s},[t("div",{class:r(["col-12 border text-lg py-4 px-6 bg-secondary rounded-lg font-bold capitalize flex items-center",e.$q.screen.lt.lg?"justify-center text-center":""]),style:{}},_(l.content),3)]))),128))]),t("div",ae,[t("div",ne,[d(x,{src:"images/about_us_two.jpg",fit:"contain",class:"rounded-lg"})])])],2)])]),_:1})}const fe=$(N,[["render",oe]]);export{fe as default};