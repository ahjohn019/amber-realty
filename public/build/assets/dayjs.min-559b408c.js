import{J as d,P as Se,l as C,r as ie,w as te,a3 as Fe,aj as Ee,o as He,ai as gt,ah as bt,j as Ne,ak as Le,al as Me,am as je,an as ht,a5 as Qe,ao as mt,ap as ue,c as St,g as yt}from"./ckeditor-a9205207.js";import{c as ye,h as De,k as wt,Q as Ue,a as ze,b as Ie,f as _t,v as $t,e as he}from"./QBtn-e159bb09.js";import{a as Ct,Q as Pt}from"./QList-dc4639b1.js";import{u as qt,a as kt,c as Ye,Q as Mt}from"./QSelect-3d267ff4.js";import{g as Dt}from"./QMenu-f94fd9f9.js";import{Q as Tt}from"./QLinearProgress-e5c46ce9.js";import{Q as ke}from"./QCheckbox-f354e6c3.js";const pt=ye({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:r,emit:i}){const b=Se(),{proxy:{$q:s}}=b,_=c=>{i("click",c)};return()=>{if(e.props===void 0)return d("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:_},De(r.default));let c,f;const g=b.vnode.key;if(g){if(c=e.props.colsMap[g],c===void 0)return}else c=e.props.col;if(c.sortable===!0){const n=c.align==="right"?"unshift":"push";f=wt(r.default,[]),f[n](d(Ue,{class:c.__iconClass,name:s.iconSet.table.arrowUp}))}else f=De(r.default);const y={class:c.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:c.headerStyle,onClick:n=>{c.sortable===!0&&e.props.sort(c),_(n)}};return d("th",y,f)}}}),xt=["horizontal","vertical","cell","none"],Ot=ye({name:"QMarkupTable",props:{...ze,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>xt.includes(e)}},setup(e,{slots:r}){const i=Se(),b=Ie(e,i.proxy.$q),s=C(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(b.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>d("div",{class:s.value},[d("table",{class:"q-table"},De(r.default))])}});function We(e,r){return d("div",e,[d("table",{class:"q-table"},r)])}const Rt={list:Ct,table:Ot},Bt=["list","table","__qtable"],Ft=ye({name:"QVirtualScroll",props:{...qt,type:{type:String,default:"list",validator:e=>Bt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:r,attrs:i}){let b;const s=ie(null),_=C(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:c,localResetVirtualScroll:f,padVirtualScroll:g,onVirtualScrollEvt:y}=kt({virtualScrollLength:_,getVirtualScrollTarget:R,getVirtualScrollEl:D}),n=C(()=>{if(_.value===0)return[];const U=(N,F)=>({index:c.value.from+F,item:N});return e.itemsFn===void 0?e.items.slice(c.value.from,c.value.to).map(U):e.itemsFn(c.value.from,c.value.to-c.value.from).map(U)}),h=C(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),O=C(()=>e.scrollTarget!==void 0?{}:{tabindex:0});te(_,()=>{f()}),te(()=>e.scrollTarget,()=>{M(),T()});function D(){return s.value.$el||s.value}function R(){return b}function T(){b=Dt(D(),e.scrollTarget),b.addEventListener("scroll",y,Fe.passive)}function M(){b!==void 0&&(b.removeEventListener("scroll",y,Fe.passive),b=void 0)}function Q(){let U=g(e.type==="list"?"div":"tbody",n.value.map(r.default));return r.before!==void 0&&(U=r.before().concat(U)),_t(r.after,U)}return Ee(()=>{f()}),He(()=>{T()}),gt(()=>{T()}),bt(()=>{M()}),Ne(()=>{M()}),()=>{if(r.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?We({ref:s,class:"q-table__middle "+h.value},Q()):d(Rt[e.type],{...i,ref:s,class:[i.class,h.value],...O.value},Q)}}});let ce=0;const Lt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},jt=["update:fullscreen","fullscreen"];function Vt(){const e=Se(),{props:r,emit:i,proxy:b}=e;let s,_,c;const f=ie(!1);$t(e)===!0&&te(()=>b.$route.fullPath,()=>{r.noRouteFullscreenExit!==!0&&n()}),te(()=>r.fullscreen,h=>{f.value!==h&&g()}),te(f,h=>{i("update:fullscreen",h),i("fullscreen",h)});function g(){f.value===!0?n():y()}function y(){f.value!==!0&&(f.value=!0,c=b.$el.parentNode,c.replaceChild(_,b.$el),document.body.appendChild(b.$el),ce++,ce===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:n},Le.add(s))}function n(){f.value===!0&&(s!==void 0&&(Le.remove(s),s=void 0),c.replaceChild(b.$el,_),f.value=!1,ce=Math.max(0,ce-1),ce===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),b.$el.scrollIntoView!==void 0&&setTimeout(()=>{b.$el.scrollIntoView()})))}return Ee(()=>{_=document.createElement("span")}),He(()=>{r.fullscreen===!0&&y()}),Ne(n),Object.assign(b,{toggleFullscreen:g,setFullscreen:y,exitFullscreen:n}),{inFullscreen:f,toggleFullscreen:g}}function At(e,r){return new Date(e)-new Date(r)}const Et={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Ht(e,r,i,b){const s=C(()=>{const{sortBy:f}=r.value;return f&&i.value.find(g=>g.name===f)||null}),_=C(()=>e.sortMethod!==void 0?e.sortMethod:(f,g,y)=>{const n=i.value.find(D=>D.name===g);if(n===void 0||n.field===void 0)return f;const h=y===!0?-1:1,O=typeof n.field=="function"?D=>n.field(D):D=>D[n.field];return f.sort((D,R)=>{let T=O(D),M=O(R);return T==null?-1*h:M==null?1*h:n.sort!==void 0?n.sort(T,M,D,R)*h:Me(T)===!0&&Me(M)===!0?(T-M)*h:je(T)===!0&&je(M)===!0?At(T,M)*h:typeof T=="boolean"&&typeof M=="boolean"?(T-M)*h:([T,M]=[T,M].map(Q=>(Q+"").toLocaleString().toLowerCase()),T<M?-1*h:T===M?0:h)})});function c(f){let g=e.columnSortOrder;if(ht(f)===!0)f.sortOrder&&(g=f.sortOrder),f=f.name;else{const h=i.value.find(O=>O.name===f);h!==void 0&&h.sortOrder&&(g=h.sortOrder)}let{sortBy:y,descending:n}=r.value;y!==f?(y=f,n=g==="da"):e.binaryStateSort===!0?n=!n:n===!0?g==="ad"?y=null:n=!1:g==="ad"?n=!0:y=null,b({sortBy:y,descending:n,page:1})}return{columnToSort:s,computedSortMethod:_,sort:c}}const Nt={filter:[String,Object],filterMethod:Function};function Qt(e,r){const i=C(()=>e.filterMethod!==void 0?e.filterMethod:(b,s,_,c)=>{const f=s?s.toLowerCase():"";return b.filter(g=>_.some(y=>{const n=c(y,g)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(f)!==-1}))});return te(()=>e.filter,()=>{Qe(()=>{r({page:1},!0)})},{deep:!0}),{computedFilterMethod:i}}function Ut(e,r){for(const i in r)if(r[i]!==e[i])return!1;return!0}function Ve(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const zt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function It(e,r){const{props:i,emit:b}=e,s=ie(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:i.rowsPerPageOptions.length!==0?i.rowsPerPageOptions[0]:5},i.pagination)),_=C(()=>{const n=i["onUpdate:pagination"]!==void 0?{...s.value,...i.pagination}:s.value;return Ve(n)}),c=C(()=>_.value.rowsNumber!==void 0);function f(n){g({pagination:n,filter:i.filter})}function g(n={}){Qe(()=>{b("request",{pagination:n.pagination||_.value,filter:n.filter||i.filter,getCellValue:r})})}function y(n,h){const O=Ve({..._.value,...n});if(Ut(_.value,O)===!0){c.value===!0&&h===!0&&f(O);return}if(c.value===!0){f(O);return}i.pagination!==void 0&&i["onUpdate:pagination"]!==void 0?b("update:pagination",O):s.value=O}return{innerPagination:s,computedPagination:_,isServerSide:c,requestServerInteraction:g,setPagination:y}}function Yt(e,r,i,b,s,_){const{props:c,emit:f,proxy:{$q:g}}=e,y=C(()=>b.value===!0?i.value.rowsNumber||0:_.value),n=C(()=>{const{page:F,rowsPerPage:A}=i.value;return(F-1)*A}),h=C(()=>{const{page:F,rowsPerPage:A}=i.value;return F*A}),O=C(()=>i.value.page===1),D=C(()=>i.value.rowsPerPage===0?1:Math.max(1,Math.ceil(y.value/i.value.rowsPerPage))),R=C(()=>h.value===0?!0:i.value.page>=D.value),T=C(()=>(c.rowsPerPageOptions.includes(r.value.rowsPerPage)?c.rowsPerPageOptions:[r.value.rowsPerPage].concat(c.rowsPerPageOptions)).map(A=>({label:A===0?g.lang.table.allRows:""+A,value:A})));te(D,(F,A)=>{if(F===A)return;const Y=i.value.page;F&&!Y?s({page:1}):F<Y&&s({page:F})});function M(){s({page:1})}function Q(){const{page:F}=i.value;F>1&&s({page:F-1})}function U(){const{page:F,rowsPerPage:A}=i.value;h.value>0&&F*A<y.value&&s({page:F+1})}function N(){s({page:D.value})}return c["onUpdate:pagination"]!==void 0&&f("update:pagination",{...i.value}),{firstRowIndex:n,lastRowIndex:h,isFirstPage:O,isLastPage:R,pagesNumber:D,computedRowsPerPageOptions:T,computedRowsNumber:y,firstPage:M,prevPage:Q,nextPage:U,lastPage:N}}const Wt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Jt=["update:selected","selection"];function Zt(e,r,i,b){const s=C(()=>{const R={};return e.selected.map(b.value).forEach(T=>{R[T]=!0}),R}),_=C(()=>e.selection!=="none"),c=C(()=>e.selection==="single"),f=C(()=>e.selection==="multiple"),g=C(()=>i.value.length!==0&&i.value.every(R=>s.value[b.value(R)]===!0)),y=C(()=>g.value!==!0&&i.value.some(R=>s.value[b.value(R)]===!0)),n=C(()=>e.selected.length);function h(R){return s.value[R]===!0}function O(){r("update:selected",[])}function D(R,T,M,Q){r("selection",{rows:T,added:M,keys:R,evt:Q});const U=c.value===!0?M===!0?T:[]:M===!0?e.selected.concat(T):e.selected.filter(N=>R.includes(b.value(N))===!1);r("update:selected",U)}return{hasSelectionMode:_,singleSelection:c,multipleSelection:f,allRowsSelected:g,someRowsSelected:y,rowsSelectedNumber:n,isRowSelected:h,clearSelection:O,updateSelection:D}}function Ae(e){return Array.isArray(e)?e.slice():[]}const Gt={expanded:Array},Kt=["update:expanded"];function Xt(e,r){const i=ie(Ae(e.expanded));te(()=>e.expanded,c=>{i.value=Ae(c)});function b(c){return i.value.includes(c)}function s(c){e.expanded!==void 0?r("update:expanded",c):i.value=c}function _(c,f){const g=i.value.slice(),y=g.indexOf(c);f===!0?y===-1&&(g.push(c),s(g)):y!==-1&&(g.splice(y,1),s(g))}return{isRowExpanded:b,setExpanded:s,updateExpanded:_}}const en={visibleColumns:Array};function tn(e,r,i){const b=C(()=>{if(e.columns!==void 0)return e.columns;const f=e.rows[0];return f!==void 0?Object.keys(f).map(g=>({name:g,label:g.toUpperCase(),field:g,align:Me(f[g])?"right":"left",sortable:!0})):[]}),s=C(()=>{const{sortBy:f,descending:g}=r.value;return(e.visibleColumns!==void 0?b.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):b.value).map(n=>{const h=n.align||"right",O=`text-${h}`;return{...n,align:h,__iconClass:`q-table__sort-icon q-table__sort-icon--${h}`,__thClass:O+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===f?` sorted ${g===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>O+" "+n.classes:D=>O+" "+n.classes(D):()=>O}})}),_=C(()=>{const f={};return s.value.forEach(g=>{f[g.name]=g}),f}),c=C(()=>e.tableColspan!==void 0?e.tableColspan:s.value.length+(i.value===!0?1:0));return{colList:b,computedCols:s,computedColsMap:_,computedColspan:c}}const me="q-table__bottom row items-center",Je={};Ye.forEach(e=>{Je[e]={}});const dn=ye({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Je,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...ze,...Lt,...en,...Nt,...zt,...Gt,...Wt,...Et},emits:["request","virtualScroll",...jt,...Kt,...Jt],setup(e,{slots:r,emit:i}){const b=Se(),{proxy:{$q:s}}=b,_=Ie(e,s),{inFullscreen:c,toggleFullscreen:f}=Vt(),g=C(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),y=ie(null),n=ie(null),h=C(()=>e.grid!==!0&&e.virtualScroll===!0),O=C(()=>" q-table__card"+(_.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),D=C(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":O.value)+(_.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(c.value===!0?" fullscreen scroll":"")),R=C(()=>D.value+(e.loading===!0?" q-table--loading":""));te(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+D.value,()=>{h.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:T,computedPagination:M,isServerSide:Q,requestServerInteraction:U,setPagination:N}=It(b,re),{computedFilterMethod:F}=Qt(e,N),{isRowExpanded:A,setExpanded:Y,updateExpanded:se}=Xt(e,i),ne=C(()=>{let t=e.rows;if(Q.value===!0||t.length===0)return t;const{sortBy:u,descending:w}=M.value;return e.filter&&(t=F.value(t,e.filter,p.value,re)),z.value!==null&&(t=ae.value(e.rows===t?t.slice():t,u,w)),t}),L=C(()=>ne.value.length),q=C(()=>{let t=ne.value;if(Q.value===!0)return t;const{rowsPerPage:u}=M.value;return u!==0&&(K.value===0&&e.rows!==t?t.length>W.value&&(t=t.slice(0,W.value)):t=t.slice(K.value,W.value)),t}),{hasSelectionMode:Z,singleSelection:de,multipleSelection:S,allRowsSelected:o,someRowsSelected:a,rowsSelectedNumber:v,isRowSelected:l,clearSelection:$,updateSelection:m}=Zt(e,i,q,g),{colList:x,computedCols:p,computedColsMap:j,computedColspan:E}=tn(e,M,Z),{columnToSort:z,computedSortMethod:ae,sort:G}=Ht(e,M,x,N),{firstRowIndex:K,lastRowIndex:W,isFirstPage:H,isLastPage:J,pagesNumber:X,computedRowsPerPageOptions:le,computedRowsNumber:fe,firstPage:we,prevPage:_e,nextPage:$e,lastPage:Ce}=Yt(b,T,M,Q,N,L),Ge=C(()=>q.value.length===0),Ke=C(()=>{const t={};return Ye.forEach(u=>{t[u]=e[u]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Xe(){h.value===!0&&n.value.reset()}function et(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?Re:null;if(h.value===!0){const w=r["top-row"],P=r["bottom-row"],k={default:V=>pe(V.item,r.body,V.index)};if(w!==void 0){const V=d("tbody",w({cols:p.value}));k.before=t===null?()=>V:()=>[t()].concat(V)}else t!==null&&(k.before=t);return P!==void 0&&(k.after=()=>d("tbody",P({cols:p.value}))),d(Ft,{ref:n,class:e.tableClass,style:e.tableStyle,...Ke.value,scrollTarget:e.virtualScrollTarget,items:q.value,type:"__qtable",tableColspan:E.value,onVirtualScroll:nt},k)}const u=[at()];return t!==null&&u.unshift(t()),We({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},u)}function tt(t,u){if(n.value!==null){n.value.scrollTo(t,u);return}t=parseInt(t,10);const w=y.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(w!==null){const P=y.value.querySelector(".q-table__middle.scroll"),k=w.offsetTop-e.virtualScrollStickySizeStart,V=k<P.scrollTop?"decrease":"increase";P.scrollTop=k,i("virtualScroll",{index:t,from:0,to:T.value.rowsPerPage-1,direction:V})}}function nt(t){i("virtualScroll",t)}function Te(){return[d(Tt,{class:"q-table__linear-progress",color:e.color,dark:_.value,indeterminate:!0,trackColor:"transparent"})]}function pe(t,u,w){const P=g.value(t),k=l(P);if(u!==void 0)return u(xe({key:P,row:t,pageIndex:w,__trClass:k?"selected":""}));const V=r["body-cell"],B=p.value.map(I=>{const ge=r[`body-cell-${I.name}`],be=ge!==void 0?ge:V;return be!==void 0?be(lt({key:P,row:t,pageIndex:w,col:I})):d("td",{class:I.__tdClass(t),style:I.__tdStyle(t)},re(I,t))});if(Z.value===!0){const I=r["body-selection"],ge=I!==void 0?I(rt({key:P,row:t,pageIndex:w})):[d(ke,{modelValue:k,color:e.color,dark:_.value,dense:e.dense,"onUpdate:modelValue":(be,vt)=>{m([P],[t],be,vt)}})];B.unshift(d("td",{class:"q-table--col-auto-width"},ge))}const ee={key:P,class:{selected:k}};return e.onRowClick!==void 0&&(ee.class["cursor-pointer"]=!0,ee.onClick=I=>{i("RowClick",I,t,w)}),e.onRowDblclick!==void 0&&(ee.class["cursor-pointer"]=!0,ee.onDblclick=I=>{i("RowDblclick",I,t,w)}),e.onRowContextmenu!==void 0&&(ee.class["cursor-pointer"]=!0,ee.onContextmenu=I=>{i("RowContextmenu",I,t,w)}),d("tr",ee,B)}function at(){const t=r.body,u=r["top-row"],w=r["bottom-row"];let P=q.value.map((k,V)=>pe(k,t,V));return u!==void 0&&(P=u({cols:p.value}).concat(P)),w!==void 0&&(P=P.concat(w({cols:p.value}))),d("tbody",P)}function xe(t){return Pe(t),t.cols=t.cols.map(u=>ue({...u},"value",()=>re(u,t.row))),t}function lt(t){return Pe(t),ue(t,"value",()=>re(t.col,t.row)),t}function rt(t){return Pe(t),t}function Pe(t){Object.assign(t,{cols:p.value,colsMap:j.value,sort:G,rowIndex:K.value+t.pageIndex,color:e.color,dark:_.value,dense:e.dense}),Z.value===!0&&ue(t,"selected",()=>l(t.key),(u,w)=>{m([t.key],[t.row],u,w)}),ue(t,"expand",()=>A(t.key),u=>{se(t.key,u)})}function re(t,u){const w=typeof t.field=="function"?t.field(u):u[t.field];return t.format!==void 0?t.format(w,u):w}const oe=C(()=>({pagination:M.value,pagesNumber:X.value,isFirstPage:H.value,isLastPage:J.value,firstPage:we,prevPage:_e,nextPage:$e,lastPage:Ce,inFullscreen:c.value,toggleFullscreen:f}));function ot(){const t=r.top,u=r["top-left"],w=r["top-right"],P=r["top-selection"],k=Z.value===!0&&P!==void 0&&v.value>0,V="q-table__top relative-position row items-center";if(t!==void 0)return d("div",{class:V},[t(oe.value)]);let B;if(k===!0?B=P(oe.value).slice():(B=[],u!==void 0?B.push(d("div",{class:"q-table__control"},[u(oe.value)])):e.title&&B.push(d("div",{class:"q-table__control"},[d("div",{class:["q-table__title",e.titleClass]},e.title)]))),w!==void 0&&(B.push(d("div",{class:"q-table__separator col"})),B.push(d("div",{class:"q-table__control"},[w(oe.value)]))),B.length!==0)return d("div",{class:V},B)}const Oe=C(()=>a.value===!0?null:o.value);function Re(){const t=it();return e.loading===!0&&r.loading===void 0&&t.push(d("tr",{class:"q-table__progress"},[d("th",{class:"relative-position",colspan:E.value},Te())])),d("thead",t)}function it(){const t=r.header,u=r["header-cell"];if(t!==void 0)return t(qe({header:!0})).slice();const w=p.value.map(P=>{const k=r[`header-cell-${P.name}`],V=k!==void 0?k:u,B=qe({col:P});return V!==void 0?V(B):d(pt,{key:P.name,props:B},()=>P.label)});if(de.value===!0&&e.grid!==!0)w.unshift(d("th",{class:"q-table--col-auto-width"}," "));else if(S.value===!0){const P=r["header-selection"],k=P!==void 0?P(qe({})):[d(ke,{color:e.color,modelValue:Oe.value,dark:_.value,dense:e.dense,"onUpdate:modelValue":Be})];w.unshift(d("th",{class:"q-table--col-auto-width"},k))}return[d("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},w)]}function qe(t){return Object.assign(t,{cols:p.value,sort:G,colsMap:j.value,color:e.color,dark:_.value,dense:e.dense}),S.value===!0&&ue(t,"selected",()=>Oe.value,Be),t}function Be(t){a.value===!0&&(t=!1),m(q.value.map(g.value),q.value,t)}const ve=C(()=>{const t=[e.iconFirstPage||s.iconSet.table.firstPage,e.iconPrevPage||s.iconSet.table.prevPage,e.iconNextPage||s.iconSet.table.nextPage,e.iconLastPage||s.iconSet.table.lastPage];return s.lang.rtl===!0?t.reverse():t});function st(){if(e.hideBottom===!0)return;if(Ge.value===!0){if(e.hideNoData===!0)return;const w=e.loading===!0?e.loadingLabel||s.lang.table.loading:e.filter?e.noResultsLabel||s.lang.table.noResults:e.noDataLabel||s.lang.table.noData,P=r["no-data"],k=P!==void 0?[P({message:w,icon:s.iconSet.table.warning,filter:e.filter})]:[d(Ue,{class:"q-table__bottom-nodata-icon",name:s.iconSet.table.warning}),w];return d("div",{class:me+" q-table__bottom--nodata"},k)}const t=r.bottom;if(t!==void 0)return d("div",{class:me},[t(oe.value)]);const u=e.hideSelectedBanner!==!0&&Z.value===!0&&v.value>0?[d("div",{class:"q-table__control"},[d("div",[(e.selectedRowsLabel||s.lang.table.selectedRecords)(v.value)])])]:[];if(e.hidePagination!==!0)return d("div",{class:me+" justify-end"},ct(u));if(u.length!==0)return d("div",{class:me},u)}function ut(t){N({page:1,rowsPerPage:t.value})}function ct(t){let u;const{rowsPerPage:w}=M.value,P=e.paginationLabel||s.lang.table.pagination,k=r.pagination,V=e.rowsPerPageOptions.length>1;if(t.push(d("div",{class:"q-table__separator col"})),V===!0&&t.push(d("div",{class:"q-table__control"},[d("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||s.lang.table.recordsPerPage]),d(Mt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:w,options:le.value,displayValue:w===0?s.lang.table.allRows:w,dark:_.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ut})])),k!==void 0)u=k(oe.value);else if(u=[d("span",w!==0?{class:"q-table__bottom-item"}:{},[w?P(K.value+1,Math.min(W.value,fe.value),fe.value):P(1,L.value,fe.value)])],w!==0&&X.value>1){const B={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(B.size="sm"),X.value>2&&u.push(d(he,{key:"pgFirst",...B,icon:ve.value[0],disable:H.value,onClick:we})),u.push(d(he,{key:"pgPrev",...B,icon:ve.value[1],disable:H.value,onClick:_e}),d(he,{key:"pgNext",...B,icon:ve.value[2],disable:J.value,onClick:$e})),X.value>2&&u.push(d(he,{key:"pgLast",...B,icon:ve.value[3],disable:J.value,onClick:Ce}))}return t.push(d("div",{class:"q-table__control"},u)),t}function dt(){const t=e.gridHeader===!0?[d("table",{class:"q-table"},[Re()])]:e.loading===!0&&r.loading===void 0?Te():void 0;return d("div",{class:"q-table__middle"},t)}function ft(){const t=r.item!==void 0?r.item:u=>{const w=u.cols.map(k=>d("div",{class:"q-table__grid-item-row"},[d("div",{class:"q-table__grid-item-title"},[k.label]),d("div",{class:"q-table__grid-item-value"},[k.value])]));if(Z.value===!0){const k=r["body-selection"],V=k!==void 0?k(u):[d(ke,{modelValue:u.selected,color:e.color,dark:_.value,dense:e.dense,"onUpdate:modelValue":(B,ee)=>{m([u.key],[u.row],B,ee)}})];w.unshift(d("div",{class:"q-table__grid-item-row"},V),d(Pt,{dark:_.value}))}const P={class:["q-table__grid-item-card"+O.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(P.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(P.onClick=k=>{i("RowClick",k,u.row,u.pageIndex)}),e.onRowDblclick!==void 0&&(P.onDblclick=k=>{i("RowDblclick",k,u.row,u.pageIndex)})),d("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(u.selected===!0?" q-table__grid-item--selected":"")},[d("div",P,w)])};return d("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},q.value.map((u,w)=>t(xe({key:g.value(u),row:u,pageIndex:w}))))}return Object.assign(b.proxy,{requestServerInteraction:U,setPagination:N,firstPage:we,prevPage:_e,nextPage:$e,lastPage:Ce,isRowSelected:l,clearSelection:$,isRowExpanded:A,setExpanded:Y,sort:G,resetVirtualScroll:Xe,scrollTo:tt,getCellValue:re}),mt(b.proxy,{filteredSortedRows:()=>ne.value,computedRows:()=>q.value,computedRowsNumber:()=>fe.value}),()=>{const t=[ot()],u={ref:y,class:R.value};return e.grid===!0?t.push(dt()):Object.assign(u,{class:[u.class,e.cardClass],style:e.cardStyle}),t.push(et(),st()),e.loading===!0&&r.loading!==void 0&&t.push(r.loading()),d("div",u,t)}}});var Ze={exports:{}};(function(e,r){(function(i,b){e.exports=b()})(St,function(){var i=1e3,b=6e4,s=36e5,_="millisecond",c="second",f="minute",g="hour",y="day",n="week",h="month",O="quarter",D="year",R="date",T="Invalid Date",M=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(S){var o=["th","st","nd","rd"],a=S%100;return"["+S+(o[(a-20)%10]||o[a]||o[0])+"]"}},N=function(S,o,a){var v=String(S);return!v||v.length>=o?S:""+Array(o+1-v.length).join(a)+S},F={s:N,z:function(S){var o=-S.utcOffset(),a=Math.abs(o),v=Math.floor(a/60),l=a%60;return(o<=0?"+":"-")+N(v,2,"0")+":"+N(l,2,"0")},m:function S(o,a){if(o.date()<a.date())return-S(a,o);var v=12*(a.year()-o.year())+(a.month()-o.month()),l=o.clone().add(v,h),$=a-l<0,m=o.clone().add(v+($?-1:1),h);return+(-(v+(a-l)/($?l-m:m-l))||0)},a:function(S){return S<0?Math.ceil(S)||0:Math.floor(S)},p:function(S){return{M:h,y:D,w:n,d:y,D:R,h:g,m:f,s:c,ms:_,Q:O}[S]||String(S||"").toLowerCase().replace(/s$/,"")},u:function(S){return S===void 0}},A="en",Y={};Y[A]=U;var se=function(S){return S instanceof Z},ne=function S(o,a,v){var l;if(!o)return A;if(typeof o=="string"){var $=o.toLowerCase();Y[$]&&(l=$),a&&(Y[$]=a,l=$);var m=o.split("-");if(!l&&m.length>1)return S(m[0])}else{var x=o.name;Y[x]=o,l=x}return!v&&l&&(A=l),l||!v&&A},L=function(S,o){if(se(S))return S.clone();var a=typeof o=="object"?o:{};return a.date=S,a.args=arguments,new Z(a)},q=F;q.l=ne,q.i=se,q.w=function(S,o){return L(S,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var Z=function(){function S(a){this.$L=ne(a.locale,null,!0),this.parse(a)}var o=S.prototype;return o.parse=function(a){this.$d=function(v){var l=v.date,$=v.utc;if(l===null)return new Date(NaN);if(q.u(l))return new Date;if(l instanceof Date)return new Date(l);if(typeof l=="string"&&!/Z$/i.test(l)){var m=l.match(M);if(m){var x=m[2]-1||0,p=(m[7]||"0").substring(0,3);return $?new Date(Date.UTC(m[1],x,m[3]||1,m[4]||0,m[5]||0,m[6]||0,p)):new Date(m[1],x,m[3]||1,m[4]||0,m[5]||0,m[6]||0,p)}}return new Date(l)}(a),this.$x=a.x||{},this.init()},o.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},o.$utils=function(){return q},o.isValid=function(){return this.$d.toString()!==T},o.isSame=function(a,v){var l=L(a);return this.startOf(v)<=l&&l<=this.endOf(v)},o.isAfter=function(a,v){return L(a)<this.startOf(v)},o.isBefore=function(a,v){return this.endOf(v)<L(a)},o.$g=function(a,v,l){return q.u(a)?this[v]:this.set(l,a)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(a,v){var l=this,$=!!q.u(v)||v,m=q.p(a),x=function(W,H){var J=q.w(l.$u?Date.UTC(l.$y,H,W):new Date(l.$y,H,W),l);return $?J:J.endOf(y)},p=function(W,H){return q.w(l.toDate()[W].apply(l.toDate("s"),($?[0,0,0,0]:[23,59,59,999]).slice(H)),l)},j=this.$W,E=this.$M,z=this.$D,ae="set"+(this.$u?"UTC":"");switch(m){case D:return $?x(1,0):x(31,11);case h:return $?x(1,E):x(0,E+1);case n:var G=this.$locale().weekStart||0,K=(j<G?j+7:j)-G;return x($?z-K:z+(6-K),E);case y:case R:return p(ae+"Hours",0);case g:return p(ae+"Minutes",1);case f:return p(ae+"Seconds",2);case c:return p(ae+"Milliseconds",3);default:return this.clone()}},o.endOf=function(a){return this.startOf(a,!1)},o.$set=function(a,v){var l,$=q.p(a),m="set"+(this.$u?"UTC":""),x=(l={},l[y]=m+"Date",l[R]=m+"Date",l[h]=m+"Month",l[D]=m+"FullYear",l[g]=m+"Hours",l[f]=m+"Minutes",l[c]=m+"Seconds",l[_]=m+"Milliseconds",l)[$],p=$===y?this.$D+(v-this.$W):v;if($===h||$===D){var j=this.clone().set(R,1);j.$d[x](p),j.init(),this.$d=j.set(R,Math.min(this.$D,j.daysInMonth())).$d}else x&&this.$d[x](p);return this.init(),this},o.set=function(a,v){return this.clone().$set(a,v)},o.get=function(a){return this[q.p(a)]()},o.add=function(a,v){var l,$=this;a=Number(a);var m=q.p(v),x=function(E){var z=L($);return q.w(z.date(z.date()+Math.round(E*a)),$)};if(m===h)return this.set(h,this.$M+a);if(m===D)return this.set(D,this.$y+a);if(m===y)return x(1);if(m===n)return x(7);var p=(l={},l[f]=b,l[g]=s,l[c]=i,l)[m]||1,j=this.$d.getTime()+a*p;return q.w(j,this)},o.subtract=function(a,v){return this.add(-1*a,v)},o.format=function(a){var v=this,l=this.$locale();if(!this.isValid())return l.invalidDate||T;var $=a||"YYYY-MM-DDTHH:mm:ssZ",m=q.z(this),x=this.$H,p=this.$m,j=this.$M,E=l.weekdays,z=l.months,ae=l.meridiem,G=function(H,J,X,le){return H&&(H[J]||H(v,$))||X[J].slice(0,le)},K=function(H){return q.s(x%12||12,H,"0")},W=ae||function(H,J,X){var le=H<12?"AM":"PM";return X?le.toLowerCase():le};return $.replace(Q,function(H,J){return J||function(X){switch(X){case"YY":return String(v.$y).slice(-2);case"YYYY":return q.s(v.$y,4,"0");case"M":return j+1;case"MM":return q.s(j+1,2,"0");case"MMM":return G(l.monthsShort,j,z,3);case"MMMM":return G(z,j);case"D":return v.$D;case"DD":return q.s(v.$D,2,"0");case"d":return String(v.$W);case"dd":return G(l.weekdaysMin,v.$W,E,2);case"ddd":return G(l.weekdaysShort,v.$W,E,3);case"dddd":return E[v.$W];case"H":return String(x);case"HH":return q.s(x,2,"0");case"h":return K(1);case"hh":return K(2);case"a":return W(x,p,!0);case"A":return W(x,p,!1);case"m":return String(p);case"mm":return q.s(p,2,"0");case"s":return String(v.$s);case"ss":return q.s(v.$s,2,"0");case"SSS":return q.s(v.$ms,3,"0");case"Z":return m}return null}(H)||m.replace(":","")})},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(a,v,l){var $,m=this,x=q.p(v),p=L(a),j=(p.utcOffset()-this.utcOffset())*b,E=this-p,z=function(){return q.m(m,p)};switch(x){case D:$=z()/12;break;case h:$=z();break;case O:$=z()/3;break;case n:$=(E-j)/6048e5;break;case y:$=(E-j)/864e5;break;case g:$=E/s;break;case f:$=E/b;break;case c:$=E/i;break;default:$=E}return l?$:q.a($)},o.daysInMonth=function(){return this.endOf(h).$D},o.$locale=function(){return Y[this.$L]},o.locale=function(a,v){if(!a)return this.$L;var l=this.clone(),$=ne(a,v,!0);return $&&(l.$L=$),l},o.clone=function(){return q.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},S}(),de=Z.prototype;return L.prototype=de,[["$ms",_],["$s",c],["$m",f],["$H",g],["$W",y],["$M",h],["$y",D],["$D",R]].forEach(function(S){de[S[1]]=function(o){return this.$g(o,S[0],S[1])}}),L.extend=function(S,o){return S.$i||(S(o,Z,L),S.$i=!0),L},L.locale=ne,L.isDayjs=se,L.unix=function(S){return L(1e3*S)},L.en=Y[A],L.Ls=Y,L.p={},L})})(Ze);var nn=Ze.exports;const fn=yt(nn);export{pt as Q,dn as a,fn as d};