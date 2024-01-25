import{r as P,l as p,J as W,P as A,as as ee,U as qe,w as C,o as ke,ae as V,az as Ie,a7 as ce,a5 as de,j as z,aa as Ke,ag as Y,aA as fe,ay as Ne,an as je,aB as Ue,ac as Ee,a2 as te,a9 as Xe,T as Ye}from"./ckeditor-d241b8c8.js";import{c as I,a as Te,u as Ge,b as Se,x as Je,k as Ze,h as ne,v as et,y as tt,z as me,A as R,B as ve,C as nt,D as Ce,p as ot,q as lt}from"./QBtn-b8d5e40a.js";const Rt=I({name:"QItem",props:{...Te,...Ge,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=A(),l=Se(e,o),{hasLink:s,linkAttrs:i,linkClass:u,linkTag:v,navigateOnClick:d}=Je(),r=P(null),g=P(null),b=p(()=>e.clickable===!0||s.value===!0||e.tag==="label"),a=p(()=>e.disable!==!0&&b.value===!0),f=p(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?u.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),k=p(()=>e.insetLevel===void 0?null:{["padding"+(o.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function q(c){a.value===!0&&(g.value!==null&&(c.qKeyEvent!==!0&&document.activeElement===r.value?g.value.focus():document.activeElement===g.value&&r.value.focus()),d(c))}function E(c){if(a.value===!0&&ee(c,13)===!0){qe(c),c.qKeyEvent=!0;const y=new MouseEvent("click",c);y.qKeyEvent=!0,r.value.dispatchEvent(y)}n("keyup",c)}function h(){const c=Ze(t.default,[]);return a.value===!0&&c.unshift(W("div",{class:"q-focus-helper",tabindex:-1,ref:g})),c}return()=>{const c={ref:r,class:f.value,style:k.value,role:"listitem",onClick:q,onKeyup:E};return a.value===!0?(c.tabindex=e.tabindex||"0",Object.assign(c,i.value)):b.value===!0&&(c["aria-disabled"]="true"),W(v.value,c,h())}}}),Vt=I({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=p(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>W("div",{class:n.value},ne(t.default))}}),Ot=I({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=p(()=>parseInt(e.lines,10)),o=p(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),l=p(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>W("div",{style:l.value,class:o.value},ne(t.default))}}),it={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},at=["beforeShow","show","beforeHide","hide"];function ut({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:l,processOnMount:s}){const i=A(),{props:u,emit:v,proxy:d}=i;let r;function g(h){e.value===!0?f(h):b(h)}function b(h){if(u.disable===!0||h!==void 0&&h.qAnchorHandled===!0||t!==void 0&&t(h)!==!0)return;const c=u["onUpdate:modelValue"]!==void 0;c===!0&&(v("update:modelValue",!0),r=h,V(()=>{r===h&&(r=void 0)})),(u.modelValue===null||c===!1)&&a(h)}function a(h){e.value!==!0&&(e.value=!0,v("beforeShow",h),o!==void 0?o(h):v("show",h))}function f(h){if(u.disable===!0)return;const c=u["onUpdate:modelValue"]!==void 0;c===!0&&(v("update:modelValue",!1),r=h,V(()=>{r===h&&(r=void 0)})),(u.modelValue===null||c===!1)&&k(h)}function k(h){e.value!==!1&&(e.value=!1,v("beforeHide",h),l!==void 0?l(h):v("hide",h))}function q(h){u.disable===!0&&h===!0?u["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!1):h===!0!==e.value&&(h===!0?a:k)(r)}C(()=>u.modelValue,q),n!==void 0&&et(i)===!0&&C(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&f()}),s===!0&&ke(()=>{q(u.modelValue)});const E={show:b,hide:f,toggle:g};return Object.assign(d,E),E}const st=[null,document,document.body,document.scrollingElement,document.documentElement];function rt(e,t){let n=tt(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return st.includes(n)?window:n}function ct(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function dt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function Pe(e,t,n=0){const o=arguments[3]===void 0?performance.now():arguments[3],l=ct(e);if(n<=0){l!==t&&G(e,t);return}requestAnimationFrame(s=>{const i=s-o,u=l+(t-l)/Math.max(i,n)*i;G(e,u),u!==t&&Pe(e,t,n-i,s)})}function He(e,t,n=0){const o=arguments[3]===void 0?performance.now():arguments[3],l=dt(e);if(n<=0){l!==t&&J(e,t);return}requestAnimationFrame(s=>{const i=s-o,u=l+(t-l)/Math.max(i,n)*i;J(e,u),u!==t&&He(e,t,n-i,s)})}function G(e,t){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}e.scrollTop=t}function J(e,t){if(e===window){window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=t}function Qt(e,t,n){if(n){Pe(e,t,n);return}G(e,t)}function It(e,t,n){if(n){He(e,t,n);return}J(e,t)}let D;function ft(){if(D!==void 0)return D;const e=document.createElement("p"),t=document.createElement("div");me(e,{width:"100%",height:"200px"}),me(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=t.clientWidth),t.remove(),D=n-o,D}function Kt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function mt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ie.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const vt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function ht({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:l,emit:s}=A(),i=P(null);let u=null;function v(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};n===void 0&&(Object.assign(d,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){ee(a,13)===!0&&d.toggle(a)},contextClick(a){l.hide(a),ce(a),V(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:ce,mobileTouch(a){if(d.mobileCleanup(a),v(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const f=a.target;de(d,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{u=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),u!==null&&(clearTimeout(u),u=null),e.value===!0&&a!==void 0&&mt()}}),n=function(a=o.contextMenu){if(o.noParentEvent===!0||i.value===null)return;let f;a===!0?l.$q.platform.is.mobile===!0?f=[[i.value,"touchstart","mobileTouch","passive"]]:f=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:f=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],de(d,"anchor",f)});function r(){Ke(d,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function b(){if(o.target===!1||o.target===""||l.$el.parentNode===null)i.value=null;else if(o.target===!0)g(l.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,n()):(i.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return C(()=>o.contextMenu,a=>{i.value!==null&&(r(),n(a))}),C(()=>o.target,()=>{i.value!==null&&r(),b()}),C(()=>o.noParentEvent,a=>{i.value!==null&&(a===!0?r():n())}),ke(()=>{b(),t!==!0&&o.modelValue===!0&&i.value===null&&s("update:modelValue",!1)}),z(()=>{u!==null&&clearTimeout(u),r()}),{anchorEl:i,canShow:v,anchorEvents:d}}function gt(e,t){const n=P(null);let o;function l(u,v){const d=`${v!==void 0?"add":"remove"}EventListener`,r=v!==void 0?v:o;u!==window&&u[d]("scroll",r,Y.passive),window[d]("scroll",r,Y.passive),o=v}function s(){n.value!==null&&(l(n.value),n.value=null)}const i=C(()=>e.noParentEvent,()=>{n.value!==null&&(s(),t())});return z(i),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:l}}let bt=1,wt=document.body;function pt(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${bt++}`:e,fe.globalNodes!==void 0){const o=fe.globalNodes.class;o!==void 0&&(n.className=o)}return wt.appendChild(n),n}function yt(e){e.remove()}const $=[];function Nt(e){return $.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Le(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return R(e)}else if(e.__qPortal===!0){const n=R(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=R(e)}while(e!=null)}function jt(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Le(e,t);continue}e.hide(t)}e=R(e)}}function xt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function qt(e,t,n,o){const l=P(!1),s=P(!1);let i=null;const u={},v=o==="dialog"&&xt(e);function d(g){if(g===!0){ve(u),s.value=!0;return}s.value=!1,l.value===!1&&(v===!1&&i===null&&(i=pt(!1,o)),l.value=!0,$.push(e.proxy),nt(u))}function r(g){if(s.value=!1,g!==!0)return;ve(u),l.value=!1;const b=$.indexOf(e.proxy);b!==-1&&$.splice(b,1),i!==null&&(yt(i),i=null)}return Ne(()=>{r(!0)}),e.proxy.__qPortal=!0,je(e.proxy,"contentEl",()=>t.value),{showPortal:d,hidePortal:r,portalIsActive:l,portalIsAccessible:s,renderPortal:()=>v===!0?n():l.value===!0?[W(Ue,{to:i},n())]:void 0}}const kt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Et(e,t=()=>{},n=()=>{}){return{transitionProps:p(()=>{const o=`q-transition--${e.transitionShow||t()}`,l=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:p(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Tt(){let e;const t=A();function n(){e=void 0}return Ee(n),z(n),{removeTick:n,registerTick(o){e=o,V(()=>{e===o&&(Ce(t)===!1&&e(),e=void 0)})}}}function St(){let e=null;const t=A();function n(){e!==null&&(clearTimeout(e),e=null)}return Ee(n),z(n),{removeTimeout:n,registerTimeout(o,l){n(),Ce(t)===!1&&(e=setTimeout(o,l))}}}const H=[];let _;function Ct(e){_=e.keyCode===27}function Pt(){_===!0&&(_=!1)}function Ht(e){_===!0&&(_=!1,ee(e,27)===!0&&H[H.length-1](e))}function Me(e){window[e]("keydown",Ct),window[e]("blur",Pt),window[e]("keyup",Ht),_=!1}function Lt(e){te.is.desktop===!0&&(H.push(e),H.length===1&&Me("addEventListener"))}function he(e){const t=H.indexOf(e);t>-1&&(H.splice(t,1),H.length===0&&Me("removeEventListener"))}const L=[];function We(e){L[L.length-1](e)}function Mt(e){te.is.desktop===!0&&(L.push(e),L.length===1&&document.body.addEventListener("focusin",We))}function Wt(e){const t=L.indexOf(e);t>-1&&(L.splice(t,1),L.length===0&&document.body.removeEventListener("focusin",We))}const{notPassiveCapture:O}=Y,M=[];function Q(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=$.length-1;for(;n>=0;){const o=$[n].$;if(o.type.name==="QTooltip"){n--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=M.length-1;o>=0;o--){const l=M[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Bt(e){M.push(e),M.length===1&&(document.addEventListener("mousedown",Q,O),document.addEventListener("touchstart",Q,O))}function ge(e){const t=M.findIndex(n=>n===e);t>-1&&(M.splice(t,1),M.length===0&&(document.removeEventListener("mousedown",Q,O),document.removeEventListener("touchstart",Q,O)))}let be,we;function pe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function $t(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Z[`${e}#ltr`]=e,Z[`${e}#rtl`]=e});function ye(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:Z[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function _t(e,t){let{top:n,left:o,right:l,bottom:s,width:i,height:u}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],s+=t[1],l+=t[0],i+=t[0],u+=t[1]),{top:n,bottom:s,height:u,left:o,right:l,width:i,middle:o+(l-o)/2,center:n+(s-n)/2}}function At(e,t,n){let{top:o,left:l}=e.getBoundingClientRect();return o+=t.top,l+=t.left,n!==void 0&&(o+=n[1],l+=n[0]),{top:o,bottom:o+1,height:1,left:l,right:l+1,width:1,middle:l,center:o}}function Ft(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function xe(e,t,n,o){return{top:e[n.vertical]-t[o.vertical],left:e[n.horizontal]-t[o.horizontal]}}function Be(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Be(e,t+1)},10);return}const{targetEl:n,offset:o,anchorEl:l,anchorOrigin:s,selfOrigin:i,absoluteOffset:u,fit:v,cover:d,maxHeight:r,maxWidth:g}=e;if(te.is.ios===!0&&window.visualViewport!==void 0){const B=document.body.style,{offsetLeft:x,offsetTop:T}=window.visualViewport;x!==be&&(B.setProperty("--q-pe-left",x+"px"),be=x),T!==we&&(B.setProperty("--q-pe-top",T+"px"),we=T)}const{scrollLeft:b,scrollTop:a}=n,f=u===void 0?_t(l,d===!0?[0,0]:o):At(l,u,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:r||"100vh",visibility:"visible"});const{offsetWidth:k,offsetHeight:q}=n,{elWidth:E,elHeight:h}=v===!0||d===!0?{elWidth:Math.max(f.width,k),elHeight:d===!0?Math.max(f.height,q):q}:{elWidth:k,elHeight:q};let c={maxWidth:g,maxHeight:r};(v===!0||d===!0)&&(c.minWidth=f.width+"px",d===!0&&(c.minHeight=f.height+"px")),Object.assign(n.style,c);const y=Ft(E,h);let w=xe(f,y,s,i);if(u===void 0||o===void 0)X(w,f,y,s,i);else{const{top:B,left:x}=w;X(w,f,y,s,i);let T=!1;if(w.top!==B){T=!0;const S=2*o[1];f.center=f.top-=S,f.bottom-=S+2}if(w.left!==x){T=!0;const S=2*o[0];f.middle=f.left-=S,f.right-=S+2}T===!0&&(w=xe(f,y,s,i),X(w,f,y,s,i))}c={top:w.top+"px",left:w.left+"px"},w.maxHeight!==void 0&&(c.maxHeight=w.maxHeight+"px",f.height>w.maxHeight&&(c.minHeight=c.maxHeight)),w.maxWidth!==void 0&&(c.maxWidth=w.maxWidth+"px",f.width>w.maxWidth&&(c.minWidth=c.maxWidth)),Object.assign(n.style,c),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==b&&(n.scrollLeft=b)}function X(e,t,n,o,l){const s=n.bottom,i=n.right,u=ft(),v=window.innerHeight-u,d=document.body.clientWidth;if(e.top<0||e.top+s>v)if(l.vertical==="center")e.top=t[o.vertical]>v/2?Math.max(0,v-s):0,e.maxHeight=Math.min(s,v);else if(t[o.vertical]>v/2){const r=Math.min(v,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,r),e.top=Math.max(0,r-s)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,v-e.top);if(e.left<0||e.left+i>d)if(e.maxWidth=Math.min(i,d),l.horizontal==="middle")e.left=t[o.horizontal]>d/2?Math.max(0,d-i):0;else if(t[o.horizontal]>d/2){const r=Math.min(d,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,r),e.left=Math.max(0,r-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,d-e.left)}const Ut=I({name:"QMenu",inheritAttrs:!1,props:{...vt,...it,...Te,...kt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:pe},self:{type:String,validator:pe},offset:{type:Array,validator:$t},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...at,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:o}){let l=null,s,i,u;const v=A(),{proxy:d}=v,{$q:r}=d,g=P(null),b=P(!1),a=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),f=Se(e,r),{registerTick:k,removeTick:q}=Tt(),{registerTimeout:E}=St(),{transitionProps:h,transitionStyle:c}=Et(e),{localScrollTarget:y,changeScrollEvent:w,unconfigureScrollTarget:B}=gt(e,se),{anchorEl:x,canShow:T}=ht({showing:b}),{hide:S}=ut({showing:b,canShow:T,handleShow:ze,handleHide:De,hideOnRouteChange:a,processOnMount:!0}),{showPortal:oe,hidePortal:le,renderPortal:$e}=qt(v,g,Ve,"menu"),K={anchorEl:x,innerRef:g,onClickOutside(m){if(e.persistent!==!0&&b.value===!0)return S(m),(m.type==="touchstart"||m.target.classList.contains("q-dialog__backdrop"))&&qe(m),!0}},ie=p(()=>ye(e.anchor||(e.cover===!0?"center middle":"bottom start"),r.lang.rtl)),_e=p(()=>e.cover===!0?ie.value:ye(e.self||"top start",r.lang.rtl)),Ae=p(()=>(e.square===!0?" q-menu--square":"")+(f.value===!0?" q-menu--dark q-dark":"")),Fe=p(()=>e.autoClose===!0?{onClick:Re}:{}),ae=p(()=>b.value===!0&&e.persistent!==!0);C(ae,m=>{m===!0?(Lt(j),Bt(K)):(he(j),ge(K))});function N(){ot(()=>{let m=g.value;m&&m.contains(document.activeElement)!==!0&&(m=m.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||m.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||m.querySelector("[autofocus], [data-autofocus]")||m,m.focus({preventScroll:!0}))})}function ze(m){if(l=e.noRefocus===!1?document.activeElement:null,Mt(re),oe(),se(),s=void 0,m!==void 0&&(e.touchPosition||e.contextMenu)){const U=Xe(m);if(U.left!==void 0){const{top:Oe,left:Qe}=x.value.getBoundingClientRect();s={left:U.left-Qe,top:U.top-Oe}}}i===void 0&&(i=C(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,F)),e.noFocus!==!0&&document.activeElement.blur(),k(()=>{F(),e.noFocus!==!0&&N()}),E(()=>{r.platform.is.ios===!0&&(u=e.autoClose,g.value.click()),F(),oe(!0),n("show",m)},e.transitionDuration)}function De(m){q(),le(),ue(!0),l!==null&&(m===void 0||m.qClickOutside!==!0)&&(((m&&m.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),E(()=>{le(!0),n("hide",m)},e.transitionDuration)}function ue(m){s=void 0,i!==void 0&&(i(),i=void 0),(m===!0||b.value===!0)&&(Wt(re),B(),ge(K),he(j)),m!==!0&&(l=null)}function se(){(x.value!==null||e.scrollTarget!==void 0)&&(y.value=rt(x.value,e.scrollTarget),w(y.value,F))}function Re(m){u!==!0?(Le(d,m),n("click",m)):u=!1}function re(m){ae.value===!0&&e.noFocus!==!0&&lt(g.value,m.target)!==!0&&N()}function j(m){n("escapeKey"),S(m)}function F(){Be({targetEl:g.value,offset:e.offset,anchorEl:x.value,anchorOrigin:ie.value,selfOrigin:_e.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ve(){return W(Ye,h.value,()=>b.value===!0?W("div",{role:"menu",...o,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+Ae.value,o.class],style:[o.style,c.value],...Fe.value},ne(t.default)):null)}return z(ue),Object.assign(d,{focus:N,updatePosition:F}),$e}});export{Rt as Q,at as a,ut as b,Ot as c,Vt as d,mt as e,Qt as f,St as g,rt as h,kt as i,Tt as j,Et as k,qt as l,Mt as m,Lt as n,he as o,Ut as p,dt as q,Wt as r,It as s,ct as t,it as u,Kt as v,ft as w,Nt as x,jt as y};