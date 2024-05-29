import{Q as k}from"./QBtn-1da1afde.js";import{Q as D}from"./vm-8712a45d.js";import{Q as X}from"./QInput-e8c9055f.js";import{Q as Z,a as L,c as ee}from"./QTable-72b69b67.js";import{Q as E}from"./QCheckbox-de9372c5.js";import{L as te,M as oe,z as C,r as u,m,u as v,A as t,q as l,F as N,O as le,n as Q,D as H,E as K,y as p,R,T as ne,o as ae,l as B,P as q,U as re}from"./ckeditor-e046e440.js";import{u as $,a as se}from"./index-3cc3abe9.js";import{u as A}from"./auth-8ecf675a.js";import{Q as ie}from"./QCardSection-f92e077f.js";import{Q as Y,a as de}from"./QSeparator-af46fafe.js";import{Q as P,a as g,b as _}from"./portal-d5db9dda.js";import{Q as ce}from"./QCard-666f7f30.js";import{Q as ue}from"./QBtnDropdown-e0436c95.js";import{d as he}from"./dayjs.min-b6f4d8a8.js";import"./uid-6a237b22.js";import"./focus-manager-cb626d5f.js";import"./QSelect-f0ccfb52.js";import"./QChip-56090b59.js";import"./QMenu-58fc40d2.js";import"./position-engine-81d96713.js";import"./use-timeout-56f147b6.js";import"./use-tick-c906425b.js";import"./QDialog-a562aaf2.js";import"./rtl-36dd996b.js";import"./use-checkbox-53571567.js";import"./option-sizes-0d520f39.js";import"./QBtnGroup-936986dc.js";const me=te("server_table_admin",{state:()=>({post_table_admin:null,router:oe()}),actions:{fetchPaginationData(r,e){const{page:s,rowsPerPage:o,sortBy:i,descending:d}=r;return e={...e,attribute:i,sortable:d?"desc":"asc",page:s,paginate:o},e.paginate<=0&&(e.paginate=r.rowsNumber),e},fetchServerPagination(r,e){return{rowsNumber:r.meta.total,page:e.page,rowsPerPage:e.rowsPerPage,sortBy:e.sortBy,descending:e.descending}},fetchServerPayload(r,e){return{...r,rowsPerPage:e.meta.per_page}},async fetchTableListData(r,e,s,o,i){const a=A().fetchSessionToken(),{page:h}=r??{page:1,rowsPerPage:15,sortBy:null,descending:null};return e.value=!0,await s[o](a,h,i)}}});const ge={props:["props","propertyHighlights"],setup(r,{emit:e}){var S;const s=$(),i=A().fetchSessionToken(),d=((S=r.props.row)==null?void 0:S.id)||null,a=u([]),h=u([]),n=u([]);return n.value=r.propertyHighlights,{handleView:()=>{s.handleViewProperty(d,r.props)},handleEdit:()=>{s.handleEditProperty(d)},handleDelete:async()=>{await s.handleDeleteProperty(d,i)},handleHighlightMobile:f=>{f.highlight=f.checked;const M=s.handleHighlights(f,n.value);h.value=M,e("mobileHighlightsData",h.value)},selected:a,propertyHighlightsMobile:n,propertySubmitHighlights:h,submitHighlight:async()=>{await s.submitHighlight(h.value,i)},getSelectedString(){return console.log(a.value),a.value.length===0?"":`${a.value.length} record${a.value.length>1?"s":""}`}}}},pe=["innerHTML"],fe={key:1},be={class:"q-gutter-md"};function ye(r,e,s,o,i,d){return m(),v("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:ne(s.props.selected?"transform: scale(0.95);":"")},[t(ce,{bordered:"",flat:"",class:R(s.props.selected?r.$q.dark.isActive?"bg-grey-9":"bg-grey-2":"")},{default:l(()=>[t(Y,null,{default:l(()=>[t(ie,null,{default:l(()=>[t(E,{dense:"",modelValue:s.props.selected,"onUpdate:modelValue":e[0]||(e[0]=a=>s.props.selected=a),label:s.props.row.name},null,8,["modelValue","label"])]),_:1}),t(de),(m(!0),v(N,null,le(s.props.cols.filter(a=>!["action","highlight"].includes(a.name)),a=>(m(),Q(P,{key:a.name},{default:l(()=>[t(g,null,{default:l(()=>[t(_,null,{default:l(()=>[H(K(a.label),1)]),_:2},1024),t(_,{caption:""},{default:l(()=>[a.name=="short_description"?(m(),v("div",{key:0,innerHTML:a.value,class:"break-all"},null,8,pe)):(m(),v("div",fe,K(a.value),1))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),t(P,null,{default:l(()=>[t(g,null,{default:l(()=>[t(_,null,{default:l(()=>[H("Highlights")]),_:1}),t(E,{size:"sm",modelValue:s.props.row.checked,"onUpdate:modelValue":e[1]||(e[1]=a=>s.props.row.checked=a),val:"sm",onClick:e[2]||(e[2]=a=>o.handleHighlightMobile(s.props.row))},null,8,["modelValue"])]),_:1})]),_:1}),t(P,null,{default:l(()=>[t(g,null,{default:l(()=>[t(_,null,{default:l(()=>[H("Action")]),_:1}),p("div",be,[t(k,{color:"primary",icon:"visibility",label:"View",size:"sm",onClick:e[3]||(e[3]=a=>o.handleView())}),t(k,{color:"secondary",icon:"edit",label:"Edit",size:"sm",onClick:e[4]||(e[4]=a=>o.handleEdit())}),t(k,{color:"red",icon:"delete",label:"Delete",size:"sm",onClick:e[5]||(e[5]=a=>o.handleDelete())})])]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])],4)}const ve=C(ge,[["render",ye]]),_e={props:{data:Object},setup(r){var n;const e=$(),o=A().fetchSessionToken(),i=((n=r.data.row)==null?void 0:n.id)||null;return{handleEdit:()=>{e.handleEditProperty(i,r)},handleDelete:async()=>{await e.handleDeleteProperty(i,o)},handleView:()=>{e.handleViewProperty(i,r)}}}},we=p("div",{class:"row items-center no-wrap font-bold"},"Edit",-1);function Se(r,e,s,o,i,d){return m(),v("div",null,[t(ue,{color:"transparent",class:"text-black font-bold","dropdown-icon":"expand_more"},{label:l(()=>[we]),default:l(()=>[t(Y,{class:"q-table-edit-dropdown-list"},{default:l(()=>[t(P,{clickable:"",onClick:e[0]||(e[0]=a=>o.handleView())},{default:l(()=>[t(g,null,{default:l(()=>[t(D,{name:"visibility"})]),_:1}),t(g,null,{default:l(()=>[t(_,null,{default:l(()=>[H("View")]),_:1})]),_:1})]),_:1}),t(P,{clickable:"",onClick:e[1]||(e[1]=a=>o.handleEdit())},{default:l(()=>[t(g,null,{default:l(()=>[t(D,{name:"edit"})]),_:1}),t(g,null,{default:l(()=>[t(_,null,{default:l(()=>[H("Edit")]),_:1})]),_:1})]),_:1}),t(P,{clickable:"",onClick:e[2]||(e[2]=a=>o.handleDelete())},{default:l(()=>[t(g,null,{default:l(()=>[t(D,{name:"delete"})]),_:1}),t(g,null,{default:l(()=>[t(_,null,{default:l(()=>[H("Delete")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const ke=C(_e,[["render",Se]]),He={components:{TableStatus:ke,TableMobileResponsive:ve},setup(){const r=u(),e=u([]),s=u([]),o=u(!1),i=u({sortBy:"name",descending:!1,page:1,rowsPerPage:15,rowsNumber:null}),d=u([]),a=u({}),h=u(""),n=$(),w=se(),T=me(),z=A().fetchSessionToken(),V=u([]),S=u([]),f=u(!1),M=c=>{f.value=!0,V.value=c},F=c=>{f.value=!0;const b=n.handleHighlights(c,S.value);V.value=b},O=async()=>{await n.submitHighlight(V.value,z)},I=c=>T.fetchPaginationData(c,a.value),G=c=>{a.value={...a.value,keyword:c,searchable:["name","short_description","price","listing_type"],page:1,attribute:"name",sortable:"asc",paginate:15},U(null,a.value)},U=async(c,b)=>{const y=await T.fetchTableListData(c,o,n,"fetchPropertyList",b);S.value=y.data;const W=y.data.map(x=>({...x,created_by:x.user.name,created_at:he(x.created_at).format("YYYY-MM-DD HH:mm:ss")}));return e.value=W,c!=null&&(i.value=T.fetchServerPagination(y,c)),b=T.fetchServerPayload(b,y),o.value=!1,y},J=async c=>{const b=I(c.pagination),y=w.fetchPropertyColumns();return s.value=y,U(c.pagination,b)};return ae(()=>{r.value.requestServerInteraction()}),{propertyRef:r,loading:o,pagination:i,columns:s,rows:e,onRequest:J,selected:d,fetchPagination:I,handlePostKeywords:G,searchKeyword:h,handleHighlight:F,submitHighlight:O,isHighlighted:f,propertySubmitHighlights:V,propertyHighlights:S,mobileHighlightSelection:M,getSelectedString(){return d.value.length===0?"":`${d.value.length} record${d.value.length>1?"s":""} selected of ${e.value.length}`}}}},Pe={class:"q-py-md"},Te=["for"],Ve=["innerHTML"],De={class:"fixed bottom-20 right-0"};function Qe(r,e,s,o,i,d){const a=B("TableStatus"),h=B("TableMobileResponsive");return m(),v("div",Pe,[t(ee,{flat:"",ref:"propertyRef",bordered:"",grid:r.$q.screen.lt.md,rows:o.rows,columns:o.columns,pagination:o.pagination,"onUpdate:pagination":e[6]||(e[6]=n=>o.pagination=n),selected:o.selected,"onUpdate:selected":e[7]||(e[7]=n=>o.selected=n),loading:o.loading,"binary-state-sort":"",onRequest:o.onRequest,"selected-rows-label":o.getSelectedString,selection:"multiple","row-key":"name",class:"property-table","wrap-cells":""},{"top-right":l(()=>[o.isHighlighted?(m(),Q(k,{key:0,color:"primary",icon:"star",class:R(["mr-4",r.$q.screen.lt.sm?"hidden":""]),onClick:e[0]||(e[0]=n=>o.submitHighlight(r.propertyData))},null,8,["class"])):q("",!0),t(X,{borderless:"",dense:"",debounce:"300",modelValue:o.searchKeyword,"onUpdate:modelValue":e[3]||(e[3]=n=>o.searchKeyword=n),placeholder:"Search",class:"border px-4 rounded-lg",onKeyup:e[4]||(e[4]=re(n=>o.handlePostKeywords(o.searchKeyword),["enter"]))},{append:l(()=>[o.searchKeyword!==""?(m(),Q(D,{key:0,name:"close",onClick:e[1]||(e[1]=n=>o.searchKeyword=""),class:"cursor-pointer"})):q("",!0),t(D,{name:"search",onClick:e[2]||(e[2]=n=>o.handlePostKeywords(o.searchKeyword)),class:"cursor-pointer"})]),_:1},8,["modelValue"])]),"header-cell":l(n=>[t(Z,{props:n,style:{"text-wrap":"nowrap"}},{default:l(()=>[p("label",{for:n.col.label,class:"font-bold text-sm"},K(n.col.label),9,Te)]),_:2},1032,["props"])]),"body-cell-short_description":l(n=>[t(L,{props:n},{default:l(()=>[p("div",{class:"break-all",innerHTML:n.value},null,8,Ve)]),_:2},1032,["props"])]),"body-cell-highlight":l(n=>[t(L,{props:n},{default:l(()=>[t(E,{size:"sm",modelValue:n.row.checked,"onUpdate:modelValue":w=>n.row.checked=w,val:"sm",onClick:w=>o.handleHighlight(n.row)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:2},1032,["props"])]),"body-cell-action":l(n=>[t(L,{props:n},{default:l(()=>[t(a,{data:n},null,8,["data"])]),_:2},1032,["props"])]),item:l(n=>[t(h,{props:n,propertyHighlights:o.propertyHighlights,onMobileHighlightsData:o.mobileHighlightSelection},null,8,["props","propertyHighlights","onMobileHighlightsData"]),p("div",De,[o.isHighlighted?(m(),Q(k,{key:0,round:"",color:"primary",icon:"star",class:R(["mr-4",r.$q.screen.lt.sm?"":"hidden"]),onClick:e[5]||(e[5]=w=>o.submitHighlight(r.propertyData))},null,8,["class"])):q("",!0)])]),_:1},8,["grid","rows","columns","pagination","selected","loading","onRequest","selected-rows-label"])])}const Ce=C(He,[["render",Qe]]),Ae={components:{TableList:Ce}},Me={class:"row q-gutter-y-sm justify-between"},xe=p("div",{class:"col col-auto text-2xl"},"Property List",-1),Le={class:"col col-auto text-right"};function qe(r,e,s,o,i,d){const a=B("TableList");return m(),v(N,null,[p("div",Me,[xe,p("div",Le,[t(k,{"icon-right":"add",label:"Add Property",class:"!font-bold text-white",color:"primary",to:{name:"property.form",query:{type:"create"}}},null,8,["to"])])]),t(a)],64)}const dt=C(Ae,[["render",qe]]);export{dt as default};
