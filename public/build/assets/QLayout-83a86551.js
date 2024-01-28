import{w as P,o as x,j as C,a3 as k,ag as E,P as $,r as b,av as D,ae as W,J as g,l as h,ay as T,k as B,a0 as U,az as I}from"./ckeditor-6cef9db6.js";import{c as q,f as J}from"./focus-manager-e961f08d.js";import{h as K,t as G,q as X,w as R}from"./QMenu-8413fe05.js";const{passive:F}=E,Y=["both","horizontal","vertical"],Z=q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Y.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:w}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,r,c;P(()=>e.scrollTarget,()=>{l(),f()});function s(){n!==null&&n();const v=Math.max(0,G(r)),y=X(r),u={top:v-o.position.top,left:y-o.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const z=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";o.position={top:v,left:y},o.directionChanged=o.direction!==z,o.delta=u,o.directionChanged===!0&&(o.direction=z,o.inflectionPoint=o.position),w("scroll",{...o})}function f(){r=K(c,e.scrollTarget),r.addEventListener("scroll",i,F),i(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",i,F),r=void 0)}function i(v){if(v===!0||e.debounce===0||e.debounce==="0")s();else if(n===null){const[y,u]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];n=()=>{u(y),n=null}}}const{proxy:d}=$();return P(()=>d.$q.lang.rtl,s),x(()=>{c=d.$el.parentNode,f()}),C(()=>{n!==null&&n(),l()}),Object.assign(d,{trigger:i,getPosition:()=>o}),k}});function _(){const e=b(!D.value);return e.value===!1&&x(()=>{e.value=!0}),e}const N=typeof ResizeObserver<"u",M=N===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},j=q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:w}){let o=null,n,r={width:-1,height:-1};function c(l){l===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),n){const{offsetWidth:l,offsetHeight:i}=n;(l!==r.width||i!==r.height)&&(r={width:l,height:i},w("resize",r))}}const{proxy:f}=$();if(N===!0){let l;const i=d=>{n=f.$el.parentNode,n?(l=new ResizeObserver(c),l.observe(n),s()):d!==!0&&W(()=>{i(!0)})};return x(()=>{i()}),C(()=>{o!==null&&clearTimeout(o),l!==void 0&&(l.disconnect!==void 0?l.disconnect():n&&l.unobserve(n))}),k}else{let d=function(){o!==null&&(clearTimeout(o),o=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",c,E.passive),i=void 0)},v=function(){d(),n&&n.contentDocument&&(i=n.contentDocument.defaultView,i.addEventListener("resize",c,E.passive),s())};const l=_();let i;return x(()=>{W(()=>{n=f.$el,n&&v()})}),C(d),f.trigger=c,()=>{if(l.value===!0)return g("object",{style:M.style,tabindex:-1,type:"text/html",data:M.url,"aria-hidden":"true",onLoad:v})}}}}),oe=q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:w,emit:o}){const{proxy:{$q:n}}=$(),r=b(null),c=b(n.screen.height),s=b(e.container===!0?0:n.screen.width),f=b({position:0,direction:"down",inflectionPoint:0}),l=b(0),i=b(D.value===!0?0:R()),d=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),v=h(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),y=h(()=>i.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),u=h(()=>i.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function z(t){if(e.container===!0||document.qScrollPrevented!==!0){const a={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};f.value=a,e.onScroll!==void 0&&o("scroll",a)}}function V(t){const{height:a,width:m}=t;let p=!1;c.value!==a&&(p=!0,c.value=a,e.onScrollHeight!==void 0&&o("scrollHeight",a),H()),s.value!==m&&(p=!0,s.value=m),p===!0&&e.onResize!==void 0&&o("resize",t)}function A({height:t}){l.value!==t&&(l.value=t,H())}function H(){if(e.container===!0){const t=c.value>l.value?R():0;i.value!==t&&(i.value=t)}}let S=null;const O={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:r,height:c,containerHeight:l,scrollbarWidth:i,totalWidth:h(()=>s.value+i.value),rows:h(()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}}),header:T({size:0,offset:0,space:!1}),right:T({size:300,offset:0,space:!1}),footer:T({size:0,offset:0,space:!1}),left:T({size:300,offset:0,space:!1}),scroll:f,animate(){S!==null?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{S=null,document.body.classList.remove("q-body--layout-animate")},155)},update(t,a,m){O[t][a]=m}};if(B(U,O),R()>0){let m=function(){t=null,a.classList.remove("hide-scrollbar")},p=function(){if(t===null){if(a.scrollHeight>n.screen.height)return;a.classList.add("hide-scrollbar")}else clearTimeout(t);t=setTimeout(m,300)},L=function(Q){t!==null&&Q==="remove"&&(clearTimeout(t),m()),window[`${Q}EventListener`]("resize",p)},t=null;const a=document.body;P(()=>e.container!==!0?"add":"remove",L),e.container!==!0&&L("add"),I(()=>{L("remove")})}return()=>{const t=J(w.default,[g(Z,{onScroll:z}),g(j,{onResize:V})]),a=g("div",{class:d.value,style:v.value,ref:e.container===!0?void 0:r,tabindex:-1},t);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:r},[g(j,{onResize:A}),g("div",{class:"absolute-full",style:y.value},[g("div",{class:"scroll",style:u.value},[a])])]):a}}});export{j as Q,Z as a,oe as b};
