import{a3 as Ht,r as _,l as w,w as ie,ae as oe,ab as Lt,ah as Rt,ac as Pt,ad as Dt,j as je,J as C,P as Ne,T as rt,ar as $t,y as Kt,a7 as De,as as Ae,at as jt,a8 as Ve,aq as Nt,U as Ce}from"./ckeditor-395087e9.js";import{c as Qe,d as gt,h as ht,g as yt,u as Qt,e as Ut,f as st,i as Wt}from"./option-sizes-2eb5697c.js";import{c as Ue,h as Xt,l as Yt,Q as Jt,d as Gt}from"./Ripple-c8ae3d8c.js";import{Q as Zt}from"./QChip-398b7338.js";import{u as el,f as tl,a as ll,h as ul,i as nl,b as ol,j as il,k as al,r as ct,l as dt,m as rl,d as sl,c as cl,Q as dl}from"./QMenu-630aeaa5.js";import{u as fl,a as vl,n as ft}from"./use-prevent-scroll-487996cc.js";import{u as ml,a as Sl}from"./use-timeout-7eeb77f4.js";import{c as gl}from"./focus-manager-79df5594.js";import{r as Ke}from"./rtl-36dd996b.js";const W=1e3,hl=["start","center","end","start-force","center-force","end-force"],wt=Array.prototype.filter,yl=window.getComputedStyle(document.body).overflowAnchor===void 0?Ht:function(e,f){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const a=e.children||[];wt.call(a,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const x=a[f];x&&x.dataset&&(x.dataset.qVsAnchor="")}))};function xe(e,f){return e+f}function $e(e,f,a,x,M,i,z,y){const g=e===window?document.scrollingElement||document.documentElement:e,A=M===!0?"offsetWidth":"offsetHeight",d={scrollStart:0,scrollViewSize:-z-y,scrollMaxSize:0,offsetStart:-z,offsetEnd:-y};if(M===!0?(e===window?(d.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,d.scrollViewSize+=document.documentElement.clientWidth):(d.scrollStart=g.scrollLeft,d.scrollViewSize+=g.clientWidth),d.scrollMaxSize=g.scrollWidth,i===!0&&(d.scrollStart=(Ke===!0?d.scrollMaxSize-d.scrollViewSize:0)-d.scrollStart)):(e===window?(d.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,d.scrollViewSize+=document.documentElement.clientHeight):(d.scrollStart=g.scrollTop,d.scrollViewSize+=g.clientHeight),d.scrollMaxSize=g.scrollHeight),a!==null)for(let V=a.previousElementSibling;V!==null;V=V.previousElementSibling)V.classList.contains("q-virtual-scroll--skip")===!1&&(d.offsetStart+=V[A]);if(x!==null)for(let V=x.nextElementSibling;V!==null;V=V.nextElementSibling)V.classList.contains("q-virtual-scroll--skip")===!1&&(d.offsetEnd+=V[A]);if(f!==e){const V=g.getBoundingClientRect(),F=f.getBoundingClientRect();M===!0?(d.offsetStart+=F.left-V.left,d.offsetEnd-=F.width):(d.offsetStart+=F.top-V.top,d.offsetEnd-=F.height),e!==window&&(d.offsetStart+=d.scrollStart),d.offsetEnd+=d.scrollMaxSize-d.offsetStart}return d}function vt(e,f,a,x){f==="end"&&(f=(e===window?document.body:e)[a===!0?"scrollWidth":"scrollHeight"]),e===window?a===!0?(x===!0&&(f=(Ke===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-f),window.scrollTo(f,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,f):a===!0?(x===!0&&(f=(Ke===!0?e.scrollWidth-e.offsetWidth:0)-f),e.scrollLeft=f):e.scrollTop=f}function ze(e,f,a,x){if(a>=x)return 0;const M=f.length,i=Math.floor(a/W),z=Math.floor((x-1)/W)+1;let y=e.slice(i,z).reduce(xe,0);return a%W!==0&&(y-=f.slice(i*W,a).reduce(xe,0)),x%W!==0&&x!==M&&(y-=f.slice(x,z*W).reduce(xe,0)),y}const bt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Ol=Object.keys(bt),wl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...bt};function bl({virtualScrollLength:e,getVirtualScrollTarget:f,getVirtualScrollEl:a,virtualScrollItemSizeComputed:x}){const M=Ne(),{props:i,emit:z,proxy:y}=M,{$q:g}=y;let A,d,V,F=[],b;const L=_(0),O=_(0),N=_({}),X=_(null),H=_(null),Q=_(null),E=_({from:0,to:0}),I=w(()=>i.tableColspan!==void 0?i.tableColspan:100);x===void 0&&(x=w(()=>i.virtualScrollItemSize));const U=w(()=>x.value+";"+i.virtualScrollHorizontal),Y=w(()=>U.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);ie(Y,()=>{D()}),ie(U,le);function le(){Z(d,!0)}function ae(u){Z(u===void 0?d:u)}function G(u,s){const v=f();if(v==null||v.nodeType===8)return;const p=$e(v,a(),X.value,H.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);V!==p.scrollViewSize&&D(p.scrollViewSize),ue(v,p,Math.min(e.value-1,Math.max(0,parseInt(u,10)||0)),0,hl.indexOf(s)>-1?s:d>-1&&u>d?"end":"start")}function R(){const u=f();if(u==null||u.nodeType===8)return;const s=$e(u,a(),X.value,H.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),v=e.value-1,p=s.scrollMaxSize-s.offsetStart-s.offsetEnd-O.value;if(A===s.scrollStart)return;if(s.scrollMaxSize<=0){ue(u,s,0,0);return}V!==s.scrollViewSize&&D(s.scrollViewSize),re(E.value.from);const c=Math.floor(s.scrollMaxSize-Math.max(s.scrollViewSize,s.offsetEnd)-Math.min(b[v],s.scrollViewSize/2));if(c>0&&Math.ceil(s.scrollStart)>=c){ue(u,s,v,s.scrollMaxSize-s.offsetEnd-F.reduce(xe,0));return}let r=0,S=s.scrollStart-s.offsetStart,T=S;if(S<=p&&S+s.scrollViewSize>=L.value)S-=L.value,r=E.value.from,T=S;else for(let h=0;S>=F[h]&&r<v;h++)S-=F[h],r+=W;for(;S>0&&r<v;)S-=b[r],S>-s.scrollViewSize?(r++,T=S):T=b[r]+S;ue(u,s,r,T)}function ue(u,s,v,p,c){const r=typeof c=="string"&&c.indexOf("-force")>-1,S=r===!0?c.replace("-force",""):c,T=S!==void 0?S:"start";let h=Math.max(0,v-N.value[T]),$=h+N.value.total;$>e.value&&($=e.value,h=Math.max(0,$-N.value.total)),A=s.scrollStart;const ve=h!==E.value.from||$!==E.value.to;if(ve===!1&&S===void 0){ee(v);return}const{activeElement:ke}=document,J=Q.value;ve===!0&&J!==null&&J!==ke&&J.contains(ke)===!0&&(J.addEventListener("focusout",se),setTimeout(()=>{J!==null&&J.removeEventListener("focusout",se)})),yl(J,v-h);const Fe=S!==void 0?b.slice(h,v).reduce(xe,0):0;if(ve===!0){const ce=$>=E.value.from&&h<=E.value.to?E.value.to:$;E.value={from:h,to:ce},L.value=ze(F,b,0,h),O.value=ze(F,b,$,e.value),requestAnimationFrame(()=>{E.value.to!==$&&A===s.scrollStart&&(E.value={from:E.value.from,to:$},O.value=ze(F,b,$,e.value))})}requestAnimationFrame(()=>{if(A!==s.scrollStart)return;ve===!0&&re(h);const ce=b.slice(h,v).reduce(xe,0),me=ce+s.offsetStart+L.value,Me=me+b[v];let pe=me+p;if(S!==void 0){const Oe=ce-Fe,K=s.scrollStart+Oe;pe=r!==!0&&K<me&&Me<K+s.scrollViewSize?K:S==="end"?Me-s.scrollViewSize:me-(S==="start"?0:Math.round((s.scrollViewSize-b[v])/2))}A=pe,vt(u,pe,i.virtualScrollHorizontal,g.lang.rtl),ee(v)})}function re(u){const s=Q.value;if(s){const v=wt.call(s.children,h=>h.classList&&h.classList.contains("q-virtual-scroll--skip")===!1),p=v.length,c=i.virtualScrollHorizontal===!0?h=>h.getBoundingClientRect().width:h=>h.offsetHeight;let r=u,S,T;for(let h=0;h<p;){for(S=c(v[h]),h++;h<p&&v[h].classList.contains("q-virtual-scroll--with-prev")===!0;)S+=c(v[h]),h++;T=S-b[r],T!==0&&(b[r]+=T,F[Math.floor(r/W)]+=T),r++}}}function se(){Q.value!==null&&Q.value!==void 0&&Q.value.focus()}function Z(u,s){const v=1*x.value;(s===!0||Array.isArray(b)===!1)&&(b=[]);const p=b.length;b.length=e.value;for(let r=e.value-1;r>=p;r--)b[r]=v;const c=Math.floor((e.value-1)/W);F=[];for(let r=0;r<=c;r++){let S=0;const T=Math.min((r+1)*W,e.value);for(let h=r*W;h<T;h++)S+=b[h];F.push(S)}d=-1,A=void 0,L.value=ze(F,b,0,E.value.from),O.value=ze(F,b,E.value.to,e.value),u>=0?(re(E.value.from),oe(()=>{G(u)})):te()}function D(u){if(u===void 0&&typeof window<"u"){const S=f();S!=null&&S.nodeType!==8&&(u=$e(S,a(),X.value,H.value,i.virtualScrollHorizontal,g.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}V=u;const s=parseFloat(i.virtualScrollSliceRatioBefore)||0,v=parseFloat(i.virtualScrollSliceRatioAfter)||0,p=1+s+v,c=u===void 0||u<=0?1:Math.ceil(u/x.value),r=Math.max(1,c,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/p));N.value={total:Math.ceil(r*p),start:Math.ceil(r*s),center:Math.ceil(r*(.5+s)),end:Math.ceil(r*(1+s)),view:c}}function ne(u,s){const v=i.virtualScrollHorizontal===!0?"width":"height",p={["--q-virtual-scroll-item-"+v]:x.value+"px"};return[u==="tbody"?C(u,{class:"q-virtual-scroll__padding",key:"before",ref:X},[C("tr",[C("td",{style:{[v]:`${L.value}px`,...p},colspan:I.value})])]):C(u,{class:"q-virtual-scroll__padding",key:"before",ref:X,style:{[v]:`${L.value}px`,...p}}),C(u,{class:"q-virtual-scroll__content",key:"content",ref:Q,tabindex:-1},s.flat()),u==="tbody"?C(u,{class:"q-virtual-scroll__padding",key:"after",ref:H},[C("tr",[C("td",{style:{[v]:`${O.value}px`,...p},colspan:I.value})])]):C(u,{class:"q-virtual-scroll__padding",key:"after",ref:H,style:{[v]:`${O.value}px`,...p}})]}function ee(u){d!==u&&(i.onVirtualScroll!==void 0&&z("virtualScroll",{index:u,from:E.value.from,to:E.value.to-1,direction:u<d?"decrease":"increase",ref:y}),d=u)}D();const te=Lt(R,g.platform.is.ios===!0?120:35);Rt(()=>{D()});let n=!1;return Pt(()=>{n=!0}),Dt(()=>{if(n!==!0)return;const u=f();A!==void 0&&u!==void 0&&u!==null&&u.nodeType!==8?vt(u,A,i.virtualScrollHorizontal,g.lang.rtl):G(d)}),je(()=>{te.cancel()}),Object.assign(y,{scrollTo:G,reset:le,refresh:ae}),{virtualScrollSliceRange:E,virtualScrollSliceSizeComputed:N,setVirtualScrollSize:D,onVirtualScrollEvt:te,localResetVirtualScroll:Z,padVirtualScroll:ne,scrollTo:G,reset:le,refresh:ae}}const Vl=Ue({name:"QField",inheritAttrs:!1,props:Qe,emits:gt,setup(){return ht(yt())}});let _e=0;const Cl={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},mt={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},xl=Ue({name:"QDialog",inheritAttrs:!1,props:{...el,...tl,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...ll,"shake","click","escapeKey"],setup(e,{slots:f,emit:a,attrs:x}){const M=Ne(),i=_(null),z=_(!1),y=_(!1);let g=null,A=null,d,V;const F=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:b}=vl(),{registerTimeout:L}=ml(),{registerTick:O,removeTick:N}=Sl(),{transitionProps:X,transitionStyle:H}=ul(e,()=>mt[e.position][0],()=>mt[e.position][1]),{showPortal:Q,hidePortal:E,portalIsAccessible:I,renderPortal:U}=nl(M,i,p,"dialog"),{hide:Y}=ol({showing:z,hideOnRouteChange:F,handleShow:se,handleHide:Z,processOnMount:!0}),{addToHistory:le,removeFromHistory:ae}=fl(z,Y,F),G=w(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Cl[e.position]}`+(y.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),R=w(()=>z.value===!0&&e.seamless!==!0),ue=w(()=>e.autoClose===!0?{onClick:u}:{}),re=w(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${R.value===!0?"modal":"seamless"}`,x.class]);ie(()=>e.maximized,c=>{z.value===!0&&n(c)}),ie(R,c=>{b(c),c===!0?(il(v),al(ee)):(ct(v),dt(ee))});function se(c){le(),A=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,n(e.maximized),Q(),y.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),O(D)):N(),L(()=>{if(M.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:r,bottom:S}=document.activeElement.getBoundingClientRect(),{innerHeight:T}=window,h=window.visualViewport!==void 0?window.visualViewport.height:T;r>0&&S>h/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-h,S>=T?1/0:Math.ceil(document.scrollingElement.scrollTop+S-h/2))),document.activeElement.scrollIntoView()}V=!0,i.value.click(),V=!1}Q(!0),y.value=!1,a("show",c)},e.transitionDuration)}function Z(c){N(),ae(),te(!0),y.value=!0,E(),A!==null&&(((c&&c.type.indexOf("key")===0?A.closest('[tabindex]:not([tabindex^="-"])'):void 0)||A).focus(),A=null),L(()=>{E(!0),y.value=!1,a("hide",c)},e.transitionDuration)}function D(c){gl(()=>{let r=i.value;r===null||r.contains(document.activeElement)===!0||(r=(c!==""?r.querySelector(c):null)||r.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||r.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||r.querySelector("[autofocus], [data-autofocus]")||r,r.focus({preventScroll:!0}))})}function ne(c){c&&typeof c.focus=="function"?c.focus({preventScroll:!0}):D(),a("shake");const r=i.value;r!==null&&(r.classList.remove("q-animate--scale"),r.classList.add("q-animate--scale"),g!==null&&clearTimeout(g),g=setTimeout(()=>{g=null,i.value!==null&&(r.classList.remove("q-animate--scale"),D())},170))}function ee(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&ne():(a("escapeKey"),Y()))}function te(c){g!==null&&(clearTimeout(g),g=null),(c===!0||z.value===!0)&&(n(!1),e.seamless!==!0&&(b(!1),ct(v),dt(ee))),c!==!0&&(A=null)}function n(c){c===!0?d!==!0&&(_e<1&&document.body.classList.add("q-body--dialog"),_e++,d=!0):d===!0&&(_e<2&&document.body.classList.remove("q-body--dialog"),_e--,d=!1)}function u(c){V!==!0&&(Y(c),a("click",c))}function s(c){e.persistent!==!0&&e.noBackdropDismiss!==!0?Y(c):e.noShake!==!0&&ne()}function v(c){e.allowFocusOutside!==!0&&I.value===!0&&Yt(i.value,c.target)!==!0&&D('[tabindex]:not([tabindex="-1"])')}Object.assign(M.proxy,{focus:D,shake:ne,__updateRefocusTarget(c){A=c||null}}),je(te);function p(){return C("div",{role:"dialog","aria-modal":R.value===!0?"true":"false",...x,class:re.value},[C(rt,{name:"q-transition--fade",appear:!0},()=>R.value===!0?C("div",{class:"q-dialog__backdrop fixed-full",style:H.value,"aria-hidden":"true",tabindex:-1,onClick:s}):null),C(rt,X.value,()=>z.value===!0?C("div",{ref:i,class:G.value,style:H.value,tabindex:-1,...ue.value},Xt(f.default)):null)])}return U}}),St=e=>["add","add-unique","toggle"].includes(e),kl=".*+?^${}()|[]\\",pl=Object.keys(Qe),Tl=Ue({name:"QSelect",inheritAttrs:!1,props:{...wl,...Qt,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:St},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...gt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:f,emit:a}){const{proxy:x}=Ne(),{$q:M}=x,i=_(!1),z=_(!1),y=_(-1),g=_(""),A=_(!1),d=_(!1);let V=null,F,b,L,O=null,N,X,H,Q;const E=_(null),I=_(null),U=_(null),Y=_(null),le=_(null),ae=Ut(e),G=Wt(ut),R=w(()=>Array.isArray(e.options)?e.options.length:0),ue=w(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:re,virtualScrollSliceSizeComputed:se,localResetVirtualScroll:Z,padVirtualScroll:D,onVirtualScrollEvt:ne,scrollTo:ee,setVirtualScrollSize:te}=bl({virtualScrollLength:R,getVirtualScrollTarget:kt,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:ue}),n=yt(),u=w(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,o=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const l=e.mapOptions===!0&&F!==void 0?F:[],m=o.map(q=>xt(q,l));return e.modelValue===null&&t===!0?m.filter(q=>q!==null):m}return o}),s=w(()=>{const t={};return pl.forEach(o=>{const l=e[o];l!==void 0&&(t[o]=l)}),t}),v=w(()=>e.optionsDark===null?n.isDark.value:e.optionsDark),p=w(()=>st(u.value)),c=w(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||u.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),r=w(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),S=w(()=>R.value===0),T=w(()=>u.value.map(t=>j.value(t)).join(", ")),h=w(()=>e.displayValue!==void 0?e.displayValue:T.value),$=w(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ve=w(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||u.value.some($.value))),ke=w(()=>n.focused.value===!0?e.tabindex:-1),J=w(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${n.targetUid.value}_lb`};return y.value>=0&&(t["aria-activedescendant"]=`${n.targetUid.value}_${y.value}`),t}),Fe=w(()=>({id:`${n.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ce=w(()=>u.value.map((t,o)=>({index:o,opt:t,html:$.value(t),selected:!0,removeAtIndex:Ct,toggleOption:de,tabindex:ke.value}))),me=w(()=>{if(R.value===0)return[];const{from:t,to:o}=re.value;return e.options.slice(t,o).map((l,m)=>{const q=Se.value(l)===!0,k=t+m,B={clickable:!0,active:!1,activeClass:Oe.value,manualFocus:!0,focused:!1,disable:q,tabindex:-1,dense:e.optionsDense,dark:v.value,role:"option",id:`${n.targetUid.value}_${k}`,onClick:()=>{de(l)}};return q!==!0&&(Le(l)===!0&&(B.active=!0),y.value===k&&(B.focused=!0),B["aria-selected"]=B.active===!0?"true":"false",M.platform.is.desktop===!0&&(B.onMousemove=()=>{i.value===!0&&ge(k)})),{index:k,opt:l,html:$.value(l),label:j.value(l),selected:B.active,focused:B.focused,toggleOption:de,setOptionIndex:ge,itemProps:B}})}),Me=w(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),pe=w(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Oe=w(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),K=w(()=>He(e.optionValue,"value")),j=w(()=>He(e.optionLabel,"label")),Se=w(()=>He(e.optionDisable,"disable")),Ee=w(()=>u.value.map(t=>K.value(t))),Vt=w(()=>{const t={onInput:ut,onChange:G,onKeydown:et,onKeyup:Ge,onKeypress:Ze,onFocus:Ye,onClick(o){b===!0&&Ve(o)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=G,t});ie(u,t=>{F=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&n.innerLoading.value!==!0&&(z.value!==!0&&i.value!==!0||p.value!==!0)&&(L!==!0&&be(),(z.value===!0||i.value===!0)&&he(""))},{immediate:!0}),ie(()=>e.fillInput,be),ie(i,Re),ie(R,Tt);function We(t){return e.emitValue===!0?K.value(t):t}function Te(t){if(t>-1&&t<u.value.length)if(e.multiple===!0){const o=e.modelValue.slice();a("remove",{index:t,value:o.splice(t,1)[0]}),a("update:modelValue",o)}else a("update:modelValue",null)}function Ct(t){Te(t),n.focus()}function Xe(t,o){const l=We(t);if(e.multiple!==!0){e.fillInput===!0&&qe(j.value(t),!0,!0),a("update:modelValue",l);return}if(u.value.length===0){a("add",{index:0,value:l}),a("update:modelValue",e.multiple===!0?[l]:l);return}if(o===!0&&Le(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const m=e.modelValue.slice();a("add",{index:m.length,value:l}),m.push(l),a("update:modelValue",m)}function de(t,o){if(n.editable.value!==!0||t===void 0||Se.value(t)===!0)return;const l=K.value(t);if(e.multiple!==!0){o!==!0&&(qe(e.fillInput===!0?j.value(t):"",!0,!0),fe()),I.value!==null&&I.value.focus(),(u.value.length===0||Ae(K.value(u.value[0]),l)!==!0)&&a("update:modelValue",e.emitValue===!0?l:t);return}if((b!==!0||A.value===!0)&&n.focus(),Ye(),u.value.length===0){const k=e.emitValue===!0?l:t;a("add",{index:0,value:k}),a("update:modelValue",e.multiple===!0?[k]:k);return}const m=e.modelValue.slice(),q=Ee.value.findIndex(k=>Ae(k,l));if(q>-1)a("remove",{index:q,value:m.splice(q,1)[0]});else{if(e.maxValues!==void 0&&m.length>=e.maxValues)return;const k=e.emitValue===!0?l:t;a("add",{index:m.length,value:k}),m.push(k)}a("update:modelValue",m)}function ge(t){if(M.platform.is.desktop!==!0)return;const o=t>-1&&t<R.value?t:-1;y.value!==o&&(y.value=o)}function Ie(t=1,o){if(i.value===!0){let l=y.value;do l=ft(l+t,-1,R.value-1);while(l!==-1&&l!==y.value&&Se.value(e.options[l])===!0);y.value!==l&&(ge(l),ee(l),o!==!0&&e.useInput===!0&&e.fillInput===!0&&Be(l>=0?j.value(e.options[l]):N))}}function xt(t,o){const l=m=>Ae(K.value(m),t);return e.options.find(l)||o.find(l)||t}function He(t,o){const l=t!==void 0?t:o;return typeof l=="function"?l:m=>m!==null&&typeof m=="object"&&l in m?m[l]:m}function Le(t){const o=K.value(t);return Ee.value.find(l=>Ae(l,o))!==void 0}function Ye(t){e.useInput===!0&&I.value!==null&&(t===void 0||I.value===t.target&&t.target.value===T.value)&&I.value.select()}function Je(t){jt(t,27)===!0&&i.value===!0&&(Ve(t),fe(),be()),a("keyup",t)}function Ge(t){const{value:o}=t.target;if(t.keyCode!==void 0){Je(t);return}if(t.target.value="",V!==null&&(clearTimeout(V),V=null),be(),typeof o=="string"&&o.length!==0){const l=o.toLocaleLowerCase(),m=k=>{const B=e.options.find(P=>k.value(P).toLocaleLowerCase()===l);return B===void 0?!1:(u.value.indexOf(B)===-1?de(B):fe(),!0)},q=k=>{m(K)!==!0&&(m(j)===!0||k===!0||he(o,!0,()=>q(!0)))};q()}else n.clearValue(t)}function Ze(t){a("keypress",t)}function et(t){if(a("keydown",t),Nt(t)===!0)return;const o=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),l=t.shiftKey!==!0&&e.multiple!==!0&&(y.value>-1||o===!0);if(t.keyCode===27){De(t);return}if(t.keyCode===9&&l===!1){ye();return}if(t.target===void 0||t.target.id!==n.targetUid.value||n.editable.value!==!0)return;if(t.keyCode===40&&n.innerLoading.value!==!0&&i.value===!1){Ce(t),we();return}if(t.keyCode===8&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Te(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&a("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(Ce(t),y.value=-1,Ie(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&se.value!==void 0&&(Ce(t),y.value=Math.max(-1,Math.min(R.value,y.value+(t.keyCode===33?-1:1)*se.value.view)),Ie(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(Ce(t),Ie(t.keyCode===38?-1:1,e.multiple));const m=R.value;if((H===void 0||Q<Date.now())&&(H=""),m>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||H.length!==0)){i.value!==!0&&we(t);const q=t.key.toLocaleLowerCase(),k=H.length===1&&H[0]===q;Q=Date.now()+1500,k===!1&&(Ce(t),H+=q);const B=new RegExp("^"+H.split("").map(Pe=>kl.indexOf(Pe)>-1?"\\"+Pe:Pe).join(".*"),"i");let P=y.value;if(k===!0||P<0||B.test(j.value(e.options[P]))!==!0)do P=ft(P+1,-1,m-1);while(P!==y.value&&(Se.value(e.options[P])===!0||B.test(j.value(e.options[P]))!==!0));y.value!==P&&oe(()=>{ge(P),ee(P),P>=0&&e.useInput===!0&&e.fillInput===!0&&Be(j.value(e.options[P]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||H!=="")&&(t.keyCode!==9||l===!1))){if(t.keyCode!==9&&Ce(t),y.value>-1&&y.value<m){de(e.options[y.value]);return}if(o===!0){const q=(k,B)=>{if(B){if(St(B)!==!0)return}else B=e.newValueMode;if(qe("",e.multiple!==!0,!0),k==null)return;(B==="toggle"?de:Xe)(k,B==="add-unique"),e.multiple!==!0&&(I.value!==null&&I.value.focus(),fe())};if(e.onNewValue!==void 0?a("newValue",g.value,q):q(g.value),e.multiple!==!0)return}i.value===!0?ye():n.innerLoading.value!==!0&&we()}}function tt(){return b===!0?le.value:U.value!==null&&U.value.contentEl!==null?U.value.contentEl:void 0}function kt(){return tt()}function pt(){return e.hideSelected===!0?[]:f["selected-item"]!==void 0?ce.value.map(t=>f["selected-item"](t)).slice():f.selected!==void 0?[].concat(f.selected()):e.useChips===!0?ce.value.map((t,o)=>C(Zt,{key:"option-"+o,removable:n.editable.value===!0&&Se.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ke.value,onRemove(){t.removeAtIndex(o)}},()=>C("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:j.value(t.opt)}))):[C("span",{[ve.value===!0?"innerHTML":"textContent"]:h.value})]}function lt(){if(S.value===!0)return f["no-option"]!==void 0?f["no-option"]({inputValue:g.value}):void 0;const t=f.option!==void 0?f.option:l=>C(dl,{key:l.index,...l.itemProps},()=>C(sl,()=>C(cl,()=>C("span",{[l.html===!0?"innerHTML":"textContent"]:l.label}))));let o=D("div",me.value.map(t));return f["before-options"]!==void 0&&(o=f["before-options"]().concat(o)),Gt(f["after-options"],o)}function qt(t,o){const l=o===!0?{...J.value,...n.splitAttrs.attributes.value}:void 0,m={ref:o===!0?I:void 0,key:"i_t",class:c.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...l,id:o===!0?n.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Vt.value};return t!==!0&&b===!0&&(Array.isArray(m.class)===!0?m.class=[...m.class,"no-pointer-events"]:m.class+=" no-pointer-events"),C("input",m)}function ut(t){V!==null&&(clearTimeout(V),V=null),!(t&&t.target&&t.target.qComposing===!0)&&(Be(t.target.value||""),L=!0,N=g.value,n.focused.value!==!0&&(b!==!0||A.value===!0)&&n.focus(),e.onFilter!==void 0&&(V=setTimeout(()=>{V=null,he(g.value)},e.inputDebounce)))}function Be(t){g.value!==t&&(g.value=t,a("inputValue",t))}function qe(t,o,l){L=l!==!0,e.useInput===!0&&(Be(t),(o===!0||l!==!0)&&(N=t),o!==!0&&he(t))}function he(t,o,l){if(e.onFilter===void 0||o!==!0&&n.focused.value!==!0)return;n.innerLoading.value===!0?a("filterAbort"):(n.innerLoading.value=!0,d.value=!0),t!==""&&e.multiple!==!0&&u.value.length!==0&&L!==!0&&t===j.value(u.value[0])&&(t="");const m=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);O!==null&&clearTimeout(O),O=m,a("filter",t,(q,k)=>{(o===!0||n.focused.value===!0)&&O===m&&(clearTimeout(O),typeof q=="function"&&q(),d.value=!1,oe(()=>{n.innerLoading.value=!1,n.editable.value===!0&&(o===!0?i.value===!0&&fe():i.value===!0?Re(!0):i.value=!0),typeof k=="function"&&oe(()=>{k(x)}),typeof l=="function"&&oe(()=>{l(x)})}))},()=>{n.focused.value===!0&&O===m&&(clearTimeout(O),n.innerLoading.value=!1,d.value=!1),i.value===!0&&(i.value=!1)})}function At(){return C(rl,{ref:U,class:r.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&S.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:v.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:pe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Fe.value,onScrollPassive:ne,onBeforeShow:ot,onBeforeHide:zt,onShow:Ft},lt)}function zt(t){it(t),ye()}function Ft(){te()}function Mt(t){Ve(t),I.value!==null&&I.value.focus(),A.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Et(t){Ve(t),oe(()=>{A.value=!1})}function It(){const t=[C(Vl,{class:`col-auto ${n.fieldClass.value}`,...s.value,for:n.targetUid.value,dark:v.value,square:!0,loading:d.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...n.splitAttrs.listeners.value,onFocus:Mt,onBlur:Et},{...f,rawControl:()=>n.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(C("div",{ref:le,class:r.value+" scroll",style:e.popupContentStyle,...Fe.value,onClick:De,onScrollPassive:ne},lt())),C(xl,{ref:Y,modelValue:z.value,position:e.useInput===!0?"top":void 0,transitionShow:X,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:ot,onBeforeHide:Bt,onHide:_t,onShow:Ot},()=>C("div",{class:"q-select__dialog"+(v.value===!0?" q-select__dialog--dark q-dark":"")+(A.value===!0?" q-select__dialog--focused":"")},t))}function Bt(t){it(t),Y.value!==null&&Y.value.__updateRefocusTarget(n.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),n.focused.value=!1}function _t(t){fe(),n.focused.value===!1&&a("blur",t),be()}function Ot(){const t=document.activeElement;(t===null||t.id!==n.targetUid.value)&&I.value!==null&&I.value!==t&&I.value.focus(),te()}function ye(){z.value!==!0&&(y.value=-1,i.value===!0&&(i.value=!1),n.focused.value===!1&&(O!==null&&(clearTimeout(O),O=null),n.innerLoading.value===!0&&(a("filterAbort"),n.innerLoading.value=!1,d.value=!1)))}function we(t){n.editable.value===!0&&(b===!0?(n.onControlFocusin(t),z.value=!0,oe(()=>{n.focus()})):n.focus(),e.onFilter!==void 0?he(g.value):(S.value!==!0||f["no-option"]!==void 0)&&(i.value=!0))}function fe(){z.value=!1,ye()}function be(){e.useInput===!0&&qe(e.multiple!==!0&&e.fillInput===!0&&u.value.length!==0&&j.value(u.value[0])||"",!0,!0)}function Re(t){let o=-1;if(t===!0){if(u.value.length!==0){const l=K.value(u.value[0]);o=e.options.findIndex(m=>Ae(K.value(m),l))}Z(o)}ge(o)}function Tt(t,o){i.value===!0&&n.innerLoading.value===!1&&(Z(-1,!0),oe(()=>{i.value===!0&&n.innerLoading.value===!1&&(t>o?Z():Re(!0))}))}function nt(){z.value===!1&&U.value!==null&&U.value.updatePosition()}function ot(t){t!==void 0&&Ve(t),a("popupShow",t),n.hasPopupOpen=!0,n.onControlFocusin(t)}function it(t){t!==void 0&&Ve(t),a("popupHide",t),n.hasPopupOpen=!1,n.onControlFocusout(t)}function at(){b=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?f["no-option"]!==void 0||e.onFilter!==void 0||S.value===!1:!0),X=M.platform.is.ios===!0&&b===!0&&e.useInput===!0?"fade":e.transitionShow}return $t(at),Kt(nt),at(),je(()=>{V!==null&&clearTimeout(V)}),Object.assign(x,{showPopup:we,hidePopup:fe,removeAtIndex:Te,add:Xe,toggleOption:de,getOptionIndex:()=>y.value,setOptionIndex:ge,moveOptionSelection:Ie,filter:he,updateMenuPosition:nt,updateInputValue:qe,isOptionSelected:Le,getEmittingOptionValue:We,isOptionDisabled:(...t)=>Se.value.apply(null,t)===!0,getOptionValue:(...t)=>K.value.apply(null,t),getOptionLabel:(...t)=>j.value.apply(null,t)}),Object.assign(n,{innerValue:u,fieldClass:w(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:E,targetRef:I,hasValue:p,showPopup:we,floatingLabel:w(()=>e.hideSelected!==!0&&p.value===!0||typeof g.value=="number"||g.value.length!==0||st(e.displayValue)),getControlChild:()=>{if(n.editable.value!==!1&&(z.value===!0||S.value!==!0||f["no-option"]!==void 0))return b===!0?It():At();n.hasPopupOpen===!0&&(n.hasPopupOpen=!1)},controlEvents:{onFocusin(t){n.onControlFocusin(t)},onFocusout(t){n.onControlFocusout(t,()=>{be(),ye()})},onClick(t){if(De(t),b!==!0&&i.value===!0){ye(),I.value!==null&&I.value.focus();return}we(t)}},getControl:t=>{const o=pt(),l=t===!0||z.value!==!0||b!==!0;if(e.useInput===!0)o.push(qt(t,l));else if(n.editable.value===!0){const q=l===!0?J.value:void 0;o.push(C("input",{ref:l===!0?I:void 0,key:"d_t",class:"q-select__focus-target",id:l===!0?n.targetUid.value:void 0,value:h.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...q,onKeydown:et,onKeyup:Je,onKeypress:Ze})),l===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&o.push(C("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ge}))}if(ae.value!==void 0&&e.disable!==!0&&Ee.value.length!==0){const q=Ee.value.map(k=>C("option",{value:k,selected:!0}));o.push(C("select",{class:"hidden",name:ae.value,multiple:e.multiple},q))}const m=e.useInput===!0||l!==!0?void 0:n.splitAttrs.attributes.value;return C("div",{class:"q-field__native row items-center",...m,...n.splitAttrs.listeners.value},o)},getInnerAppend:()=>e.loading!==!0&&d.value!==!0&&e.hideDropdownIcon!==!0?[C(Jt,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:Me.value})]:null}),ht(n)}});export{Tl as Q,bl as a,xl as b,Ol as c,wl as u};