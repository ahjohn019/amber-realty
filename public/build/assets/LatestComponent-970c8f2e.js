import{Q as ue}from"./BaseLayout-7fd2dba3.js";import{r as C,l as w,w as Q,j as B,aa as D,a5 as N,J as M,T as me,P as he,U as fe,B as pe,o as _e,m as ve,n as u,x as m,F as ge,D as ye,G as a,s as p,A as s,H as r,N as j,X as T,W as xe}from"./ckeditor-6cef9db6.js";import{x as be,u as we,i as Te,y as z,z as Pe,a as Se,A as V,j as ke,g as Ce,k as Oe,B as Ee,C as Le,b as qe,l as Ae,D as W,E as He,e as F,h as Qe,F as Be}from"./QMenu-93765cf2.js";import{c as De,h as Ne,Q as k}from"./focus-manager-07b39634.js";import{a as Me,Q as $}from"./QCard-8c8f8c6a.js";import{u as je}from"./index-db352554.js";const I=De({name:"QTooltip",inheritAttrs:!1,props:{...be,...we,...Te,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:z},self:{type:String,default:"top middle",validator:z},offset:{type:Array,default:()=>[14,14],validator:Pe},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Se],setup(e,{slots:y,emit:h,attrs:n}){let l,f;const _=he(),{proxy:{$q:t}}=_,c=C(null),x=C(!1),R=w(()=>V(e.anchor,t.lang.rtl)),U=w(()=>V(e.self,t.lang.rtl)),G=w(()=>e.persistent!==!0),{registerTick:J,removeTick:X}=ke(),{registerTimeout:b}=Ce(),{transitionProps:K,transitionStyle:Y}=Oe(e),{localScrollTarget:O,changeScrollEvent:Z,unconfigureScrollTarget:ee}=Ee(e,A),{anchorEl:i,canShow:te,anchorEvents:v}=Le({showing:x,configureAnchorEl:re}),{show:oe,hide:P}=qe({showing:x,canShow:te,handleShow:ae,handleHide:ne,hideOnRouteChange:G,processOnMount:!0});Object.assign(v,{delayShow:le,delayHide:ie});const{showPortal:E,hidePortal:L,renderPortal:se}=Ae(_,c,de,"tooltip");if(t.platform.is.mobile===!0){const o={anchorEl:i,innerRef:c,onClickOutside(d){return P(d),d.target.classList.contains("q-dialog__backdrop")&&fe(d),!0}},S=w(()=>e.modelValue===null&&e.persistent!==!0&&x.value===!0);Q(S,d=>{(d===!0?Be:W)(o)}),B(()=>{W(o)})}function ae(o){E(),J(()=>{f=new MutationObserver(()=>g()),f.observe(c.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),g(),A()}),l===void 0&&(l=Q(()=>t.screen.width+"|"+t.screen.height+"|"+e.self+"|"+e.anchor+"|"+t.lang.rtl,g)),b(()=>{E(!0),h("show",o)},e.transitionDuration)}function ne(o){X(),L(),q(),b(()=>{L(!0),h("hide",o)},e.transitionDuration)}function q(){f!==void 0&&(f.disconnect(),f=void 0),l!==void 0&&(l(),l=void 0),ee(),D(v,"tooltipTemp")}function g(){He({targetEl:c.value,offset:e.offset,anchorEl:i.value,anchorOrigin:R.value,selfOrigin:U.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function le(o){if(t.platform.is.mobile===!0){F(),document.body.classList.add("non-selectable");const S=i.value,d=["touchmove","touchcancel","touchend","click"].map(H=>[S,H,"delayHide","passiveCapture"]);N(v,"tooltipTemp",d)}b(()=>{oe(o)},e.delay)}function ie(o){t.platform.is.mobile===!0&&(D(v,"tooltipTemp"),F(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),b(()=>{P(o)},e.hideDelay)}function re(){if(e.noParentEvent===!0||i.value===null)return;const o=t.platform.is.mobile===!0?[[i.value,"touchstart","delayShow","passive"]]:[[i.value,"mouseenter","delayShow","passive"],[i.value,"mouseleave","delayHide","passive"]];N(v,"anchor",o)}function A(){if(i.value!==null||e.scrollTarget!==void 0){O.value=Qe(i.value,e.scrollTarget);const o=e.noParentEvent===!0?g:P;Z(O.value,o)}}function ce(){return x.value===!0?M("div",{...n,ref:c,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",n.class],style:[n.style,Y.value],role:"tooltip"},Ne(y.default)):null}function de(){return M(me,K.value,ce)}return B(q),Object.assign(_.proxy,{updatePosition:g}),se}});const ze={setup(){const e=je(),y={limit:4},h=C([]),n=async()=>{const l=await e.fetchLatestProperty(y);return h.value=l,l};return _e(()=>{n()}),{fetchLatestProperty:n,latestProperty:h}}},Ve={class:"col-12 row"},We={key:0,class:"col-12 row"},Fe={class:"relative"},$e={key:0,class:"absolute top-4 left-5 bg-secondary font-bold px-6 py-2 rounded"},Ie={class:"col-12 text-lg"},Re={class:"col-12 text-xl font-bold latest-property__name"},Ue={class:"col-12 text-subtitle2 latest-property__descriptions !h-[65px]"},Ge={key:0,class:"row"},Je={class:"col-6 col-md-4"},Xe={class:"align-middle text-lg pl-2"},Ke={class:"col-6 col-md-4"},Ye={class:"align-middle text-lg pl-2"},Ze={class:"col-12 col-md-4"},et={class:"align-middle text-lg pl-2"},tt={key:1,class:"col-12"},ot=s("h5",{class:"text-center"},"Latest Property Not Available",-1),st=[ot];function at(e,y,h,n,l,f){const _=ve("router-link");return u(),m("div",Ve,[n.latestProperty.length>0?(u(),m("div",We,[(u(!0),m(ge,null,ye(n.latestProperty,(t,c)=>(u(),m("div",{class:"col-12 col-md-6 col-lg-3 p-2",key:c},[a(_,{to:"property/details/"+t.id},{default:p(()=>[a(Me,{class:"my-card"},{default:p(()=>[s("div",Fe,[a(ue,{src:t.banner_image.url,ratio:16/9},null,8,["src"]),t.details?(u(),m("div",$e," For "+r(t.details.listing_type),1)):j("",!0)]),a($,{class:"row gap-2"},{default:p(()=>[s("div",Ie," RM "+r(t.price),1),s("div",Re,[T(r(t.name)+" ",1),a(I,{"max-width":"350px"},{default:p(()=>[T(r(t.name),1)]),_:2},1024)]),s("div",Ue,[T(r(t.short_description)+" ",1),a(I,{"max-width":"350px"},{default:p(()=>[T(r(t.short_description),1)]),_:2},1024)])]),_:2},1024),a($,{class:xe(["q-pt-none",e.$q.screen.lt.md?"":"h-[75px]"])},{default:p(()=>[t.details?(u(),m("div",Ge,[s("div",Je,[a(k,{name:"arrow_circle_right",size:"22px",class:"align-middle"}),s("span",Xe,r(t.details.bedroom)+" Beds ",1)]),s("div",Ke,[a(k,{name:"arrow_circle_right",size:"22px",class:"align-middle"}),s("span",Ye,r(t.details.bathroom)+" Bath ",1)]),s("div",Ze,[a(k,{name:"arrow_circle_right",size:"22px",class:"align-middle"}),s("span",et,r(t.details.square_feet)+" sqft ",1)])])):j("",!0)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to"])]))),128))])):(u(),m("div",tt,st))])}const ut=pe(ze,[["render",at]]);export{ut as L};
