import{i as z,$,w as Q,o as x,a3 as A,J as X,ad as p,W as m,K as Y,aH as D,k as v,B as S,r as I,aa as N}from"./ckeditor-e046e440.js";import{v as O,c as H,e as j,u as J,b as G,f as Z,o as T}from"./vm-8712a45d.js";import{d as ee,e as te,h as le}from"./use-timeout-56f147b6.js";import{f as oe,h as ie}from"./QBtn-1da1afde.js";function me(e,t,l){let i;function a(){i!==void 0&&($.remove(i),i=void 0)}return z(()=>{e.value===!0&&a()}),{removeFromHistory:a,addToHistory(){i={condition:()=>l.value===!0,handler:t},$.add(i)}}}const be={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},he=["beforeShow","show","beforeHide","hide"];function pe({showing:e,canShow:t,hideOnRouteChange:l,handleShow:i,handleHide:a,processOnMount:d}){const s=X(),{props:r,emit:c,proxy:k}=s;let u;function h(o){e.value===!0?g(o):w(o)}function w(o){if(r.disable===!0||o!==void 0&&o.qAnchorHandled===!0||t!==void 0&&t(o)!==!0)return;const n=r["onUpdate:modelValue"]!==void 0;n===!0&&(c("update:modelValue",!0),u=o,A(()=>{u===o&&(u=void 0)})),(r.modelValue===null||n===!1)&&f(o)}function f(o){e.value!==!0&&(e.value=!0,c("beforeShow",o),i!==void 0?i(o):c("show",o))}function g(o){if(r.disable===!0)return;const n=r["onUpdate:modelValue"]!==void 0;n===!0&&(c("update:modelValue",!1),u=o,A(()=>{u===o&&(u=void 0)})),(r.modelValue===null||n===!1)&&L(o)}function L(o){e.value!==!1&&(e.value=!1,c("beforeHide",o),a!==void 0?a(o):c("hide",o))}function P(o){r.disable===!0&&o===!0?r["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):o===!0!==e.value&&(o===!0?f:L)(u)}Q(()=>r.modelValue,P),l!==void 0&&O(s)===!0&&Q(()=>k.$route.fullPath,()=>{l.value===!0&&e.value===!0&&g()}),d===!0&&x(()=>{P(r.modelValue)});const _={show:w,hide:g,toggle:h};return Object.assign(k,_),_}let q=0,V,C,y,B=!1,W,K,U,b=null;function ne(e){ae(e)&&Y(e)}function ae(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=D(e),l=e.shiftKey&&!e.deltaX,i=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),a=l||i?e.deltaY:e.deltaX;for(let d=0;d<t.length;d++){const s=t[d];if(le(s,i))return i?a<0&&s.scrollTop===0?!0:a>0&&s.scrollTop+s.clientHeight===s.scrollHeight:a<0&&s.scrollLeft===0?!0:a>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function R(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function E(e){B!==!0&&(B=!0,requestAnimationFrame(()=>{B=!1;const{height:t}=e.target,{clientHeight:l,scrollTop:i}=document.scrollingElement;(y===void 0||t!==window.innerHeight)&&(y=l-t,document.scrollingElement.scrollTop=i),i>y&&(document.scrollingElement.scrollTop-=Math.ceil((i-y)/8))}))}function F(e){const t=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:a}=window.getComputedStyle(t);V=ee(window),C=te(window),W=t.style.left,K=t.style.top,U=window.location.href,t.style.left=`-${V}px`,t.style.top=`-${C}px`,a!=="hidden"&&(a==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",E,m.passiveCapture),window.visualViewport.addEventListener("scroll",E,m.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",R,m.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",ne,m.notPassive),e==="remove"&&(p.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",E,m.passiveCapture),window.visualViewport.removeEventListener("scroll",E,m.passiveCapture)):window.removeEventListener("scroll",R,m.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=W,t.style.top=K,window.location.href===U&&window.scrollTo(V,C),y=void 0)}function se(e){let t="add";if(e===!0){if(q++,b!==null){clearTimeout(b),b=null;return}if(q>1)return}else{if(q===0||(q--,q>0))return;if(t="remove",p.is.ios===!0&&p.is.nativeMobile===!0){b!==null&&clearTimeout(b),b=setTimeout(()=>{F(t),b=null},100);return}}F(t)}function we(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,se(t))}}}const ge=H({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=v(()=>parseInt(e.lines,10)),i=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),a=v(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>S("div",{style:a.value,class:i.value},j(t.default))}}),qe=H({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>S("div",{class:l.value},j(t.default))}}),ye=H({name:"QItem",props:{...J,...oe,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:i}}=X(),a=G(e,i),{hasLink:d,linkAttrs:s,linkClass:r,linkTag:c,navigateOnClick:k}=ie(),u=I(null),h=I(null),w=v(()=>e.clickable===!0||d.value===!0||e.tag==="label"),f=v(()=>e.disable!==!0&&w.value===!0),g=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?r.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(f.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),L=v(()=>e.insetLevel===void 0?null:{["padding"+(i.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function P(n){f.value===!0&&(h.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===u.value?h.value.focus():document.activeElement===h.value&&u.value.focus()),k(n))}function _(n){if(f.value===!0&&N(n,13)===!0){Y(n),n.qKeyEvent=!0;const M=new MouseEvent("click",n);M.qKeyEvent=!0,u.value.dispatchEvent(M)}l("keyup",n)}function o(){const n=Z(t.default,[]);return f.value===!0&&n.unshift(S("div",{class:"q-focus-helper",tabindex:-1,ref:h})),n}return()=>{const n={ref:u,class:g.value,style:L.value,role:"listitem",onClick:P,onKeyup:_};return f.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,s.value)):w.value===!0&&(n["aria-disabled"]="true"),S(c.value,n,o())}}}),re=[];function ke(e){return re.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function ue(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return T(e)}else if(e.__qPortal===!0){const l=T(e);return l!==void 0&&l.$options.name==="QPopupProxy"?(e.hide(t),l):e}e=T(e)}while(e!=null)}function Le(e,t,l){for(;l!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(l--,e.$options.name==="QMenu"){e=ue(e,t);continue}e.hide(t)}e=T(e)}}export{ye as Q,qe as a,ge as b,he as c,pe as d,ue as e,me as f,we as g,ke as h,Le as i,re as p,be as u};
