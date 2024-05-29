import{r as T,k as c,w as R,i as te,B as d,am as O,J as oe}from"./ckeditor-211a22bb.js";import{u as ie,c as ne,d as ae,f as le,g as se}from"./portal-2d801567.js";import{u as ue}from"./use-timeout-79fca903.js";import{u as re}from"./use-tick-491e46f4.js";import{u as ce,c as de,f as fe,j as me,g as ge,k as p,r as K}from"./position-engine-a7c1bc08.js";import{c as ve,e as he,k as xe}from"./vm-e10c9529.js";import{a as ye}from"./focus-manager-cb626d5f.js";let v=0;const ke={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},L={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},_e=ve({name:"QDialog",inheritAttrs:!1,props:{...ie,...ce,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...ne,"shake","click","escapeKey"],setup(e,{slots:$,emit:s,attrs:E}){const h=oe(),i=T(null),l=T(!1),u=T(!1);let n=null,a=null,f,x;const S=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:_}=se(),{registerTimeout:C}=ue(),{registerTick:j,removeTick:F}=re(),{transitionProps:A,transitionStyle:z}=de(e,()=>L[e.position][0],()=>L[e.position][1]),{showPortal:D,hidePortal:H,portalIsAccessible:I,renderPortal:Q}=fe(h,i,ee,"dialog"),{hide:m}=ae({showing:l,hideOnRouteChange:S,handleShow:N,handleHide:X,processOnMount:!0}),{addToHistory:V,removeFromHistory:W}=le(l,m,S),J=c(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${ke[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),g=c(()=>l.value===!0&&e.seamless!==!0),U=c(()=>e.autoClose===!0?{onClick:Y}:{}),G=c(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${g.value===!0?"modal":"seamless"}`,E.class]);R(()=>e.maximized,t=>{l.value===!0&&q(t)}),R(g,t=>{_(t),t===!0?(me(b),ge(k)):(p(b),K(k))});function N(t){V(),a=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,q(e.maximized),D(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),j(r)):F(),C(()=>{if(h.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:o,bottom:B}=document.activeElement.getBoundingClientRect(),{innerHeight:P}=window,w=window.visualViewport!==void 0?window.visualViewport.height:P;o>0&&B>w/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-w,B>=P?1/0:Math.ceil(document.scrollingElement.scrollTop+B-w/2))),document.activeElement.scrollIntoView()}x=!0,i.value.click(),x=!1}D(!0),u.value=!1,s("show",t)},e.transitionDuration)}function X(t){F(),W(),M(!0),u.value=!0,H(),a!==null&&(((t&&t.type.indexOf("key")===0?a.closest('[tabindex]:not([tabindex^="-"])'):void 0)||a).focus(),a=null),C(()=>{H(!0),u.value=!1,s("hide",t)},e.transitionDuration)}function r(t){ye(()=>{let o=i.value;o===null||o.contains(document.activeElement)===!0||(o=(t!==""?o.querySelector(t):null)||o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))})}function y(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):r(),s("shake");const o=i.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,i.value!==null&&(o.classList.remove("q-animate--scale"),r())},170))}function k(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&y():(s("escapeKey"),m()))}function M(t){n!==null&&(clearTimeout(n),n=null),(t===!0||l.value===!0)&&(q(!1),e.seamless!==!0&&(_(!1),p(b),K(k))),t!==!0&&(a=null)}function q(t){t===!0?f!==!0&&(v<1&&document.body.classList.add("q-body--dialog"),v++,f=!0):f===!0&&(v<2&&document.body.classList.remove("q-body--dialog"),v--,f=!1)}function Y(t){x!==!0&&(m(t),s("click",t))}function Z(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?m(t):e.noShake!==!0&&y()}function b(t){e.allowFocusOutside!==!0&&I.value===!0&&xe(i.value,t.target)!==!0&&r('[tabindex]:not([tabindex="-1"])')}Object.assign(h.proxy,{focus:r,shake:y,__updateRefocusTarget(t){a=t||null}}),te(M);function ee(){return d("div",{role:"dialog","aria-modal":g.value===!0?"true":"false",...E,class:G.value},[d(O,{name:"q-transition--fade",appear:!0},()=>g.value===!0?d("div",{class:"q-dialog__backdrop fixed-full",style:z.value,"aria-hidden":"true",tabindex:-1,onClick:Z}):null),d(O,A.value,()=>l.value===!0?d("div",{ref:i,class:J.value,style:z.value,tabindex:-1,...U.value},he($.default)):null)])}return Q}});export{_e as Q};
