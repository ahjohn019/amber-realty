import{Q as w}from"./QBtn-265fd93a.js";import{Q as S}from"./vm-9a171682.js";import{Q as W}from"./QInput-79b59fd5.js";import{Q as Z,a as C,c as G}from"./QTable-302298d9.js";import{Q as I}from"./QCheckbox-6da6ba5f.js";import{L as J,M as X,z as Q,r as u,m as h,u as b,A as t,q as n,F as z,T as ee,n as H,D as k,E as L,y as _,W as te,Y as oe,o as ne,l as $,U as R,Z as le}from"./ckeditor-f906adf3.js";import{u as q,a as ae}from"./index-ea46f81c.js";import{u as V}from"./auth-8ea048e2.js";import{Q as re}from"./QCardSection-8deeede3.js";import{Q as N,b as se,a as ie}from"./QSeparator-4cec5070.js";import{Q as P,a as g,b as v}from"./QMenu-04e4f18c.js";import{Q as de}from"./QCard-f936047c.js";import{d as ce}from"./dayjs.min-a9745ad6.js";import"./QSelect-fcc3eed1.js";import"./QChip-6657b2d8.js";import"./QDialog-2de290bf.js";import"./use-prevent-scroll-23dfb168.js";import"./use-tick-035461a6.js";import"./rtl-36dd996b.js";import"./format-7985d814.js";import"./use-checkbox-e1f4caae.js";import"./option-sizes-d9e7955c.js";const ue=J("server_table_admin",{state:()=>({post_table_admin:null,router:X()}),actions:{fetchPaginationData(r,e){const{page:s,rowsPerPage:o,sortBy:i,descending:d}=r;return e={...e,attribute:i,sortable:d?"desc":"asc",page:s,paginate:o},e.paginate<=0&&(e.paginate=r.rowsNumber),e},fetchServerPagination(r,e){return{rowsNumber:r.meta.total,page:e.page,rowsPerPage:e.rowsPerPage,sortBy:e.sortBy,descending:e.descending}},fetchServerPayload(r,e){return{...r,rowsPerPage:e.meta.per_page}},async fetchTableListData(r,e,s,o,i){const a=V().fetchSessionToken(),{page:f}=r??{page:1,rowsPerPage:15,sortBy:null,descending:null};return e.value=!0,await s[o](a,f,i)}}});const me={props:["props"],setup(r){var y;const e=q(),o=V().fetchSessionToken(),i=((y=r.props.row)==null?void 0:y.id)||null,d=u([]);return{handleView:()=>{e.handleViewProperty(i,r.props)},handleEdit:()=>{e.handleEditProperty(i)},handleDelete:async()=>{await e.handleDeleteProperty(i,o)},selected:d,getSelectedString(){return console.log(d.value),d.value.length===0?"":`${d.value.length} record${d.value.length>1?"s":""}`}}}},pe=["innerHTML"],he={key:1},ge={class:"q-gutter-md"};function fe(r,e,s,o,i,d){return h(),b("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:oe(s.props.selected?"transform: scale(0.95);":"")},[t(de,{bordered:"",flat:"",class:te(s.props.selected?r.$q.dark.isActive?"bg-grey-9":"bg-grey-2":"")},{default:n(()=>[t(N,null,{default:n(()=>[t(re,null,{default:n(()=>[t(I,{dense:"",modelValue:s.props.selected,"onUpdate:modelValue":e[0]||(e[0]=a=>s.props.selected=a),label:s.props.row.name},null,8,["modelValue","label"])]),_:1}),t(se),(h(!0),b(z,null,ee(s.props.cols.filter(a=>a.name!=="action"),a=>(h(),H(P,{key:a.name},{default:n(()=>[t(g,null,{default:n(()=>[t(v,null,{default:n(()=>[k(L(a.label),1)]),_:2},1024),t(v,{caption:""},{default:n(()=>[a.name=="short_description"?(h(),b("div",{key:0,innerHTML:a.value,class:"break-all"},null,8,pe)):(h(),b("div",he,L(a.value),1))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),t(P,null,{default:n(()=>[t(g,null,{default:n(()=>[t(v,null,{default:n(()=>[k("Action")]),_:1}),_("div",ge,[t(w,{color:"primary",icon:"visibility",label:"View",size:"sm",onClick:e[1]||(e[1]=a=>o.handleView())}),t(w,{color:"secondary",icon:"edit",label:"Edit",size:"sm",onClick:e[2]||(e[2]=a=>o.handleEdit())}),t(w,{color:"red",icon:"delete",label:"Delete",size:"sm",onClick:e[3]||(e[3]=a=>o.handleDelete())})])]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])],4)}const ye=Q(me,[["render",fe]]),be={props:{data:Object},setup(r){var l;const e=q(),o=V().fetchSessionToken(),i=((l=r.data.row)==null?void 0:l.id)||null;return{handleEdit:()=>{e.handleEditProperty(i,r)},handleDelete:async()=>{await e.handleDeleteProperty(i,o)},handleView:()=>{e.handleViewProperty(i,r)}}}},_e=_("div",{class:"row items-center no-wrap font-bold"},"Edit",-1);function ve(r,e,s,o,i,d){return h(),b("div",null,[t(ie,{color:"transparent",class:"text-black font-bold","dropdown-icon":"expand_more"},{label:n(()=>[_e]),default:n(()=>[t(N,{class:"q-table-edit-dropdown-list"},{default:n(()=>[t(P,{clickable:"",onClick:e[0]||(e[0]=a=>o.handleView())},{default:n(()=>[t(g,null,{default:n(()=>[t(S,{name:"visibility"})]),_:1}),t(g,null,{default:n(()=>[t(v,null,{default:n(()=>[k("View")]),_:1})]),_:1})]),_:1}),t(P,{clickable:"",onClick:e[1]||(e[1]=a=>o.handleEdit())},{default:n(()=>[t(g,null,{default:n(()=>[t(S,{name:"edit"})]),_:1}),t(g,null,{default:n(()=>[t(v,null,{default:n(()=>[k("Edit")]),_:1})]),_:1})]),_:1}),t(P,{clickable:"",onClick:e[2]||(e[2]=a=>o.handleDelete())},{default:n(()=>[t(g,null,{default:n(()=>[t(S,{name:"delete"})]),_:1}),t(g,null,{default:n(()=>[t(v,null,{default:n(()=>[k("Delete")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const we=Q(be,[["render",ve]]),Se={components:{TableStatus:we,TableMobileResponsive:ye},setup(){const r=u(),e=u([]),s=u([]),o=u(!1),i=u({sortBy:"name",descending:!1,page:1,rowsPerPage:15,rowsNumber:null}),d=u([]),a=u({}),f=u(""),l=q(),y=ae(),T=ue(),U=V().fetchSessionToken(),D=u([]),E=u([]),M=u(!1),Y=c=>{c.highlight=c.checked,M.value=!0;const m=E.value,p=m.findIndex(x=>c.id===x.id);p!==-1?m[p].highlight=c.highlight:m.push({...c,highlight:c.checked}),D.value=m},j=async()=>{await l.submitHighlight(D.value,U)},K=c=>T.fetchPaginationData(c,a.value),F=c=>{a.value={...a.value,keyword:c,searchable:["name","short_description","price","listing_type"],page:1,attribute:"name",sortable:"asc",paginate:15},B(null,a.value)},B=async(c,m)=>{const p=await T.fetchTableListData(c,o,l,"fetchPropertyList",m);E.value=p.data;const x=p.data.map(A=>({...A,created_by:A.user.name,created_at:ce(A.created_at).format("YYYY-MM-DD HH:mm:ss")}));return e.value=x,c!=null&&(i.value=T.fetchServerPagination(p,c)),m=T.fetchServerPayload(m,p),o.value=!1,p},O=async c=>{const m=K(c.pagination),p=y.fetchPropertyColumns();return s.value=p,B(c.pagination,m)};return ne(()=>{r.value.requestServerInteraction()}),{propertyRef:r,loading:o,pagination:i,columns:s,rows:e,onRequest:O,selected:d,fetchPagination:K,handlePostKeywords:F,searchKeyword:f,handleHighlight:Y,submitHighlight:j,isHighlighted:M,propertySubmitHighlights:D,getSelectedString(){return d.value.length===0?"":`${d.value.length} record${d.value.length>1?"s":""} selected of ${e.value.length}`}}}},ke={class:"q-py-md"},Pe=["for"],Te=["innerHTML"];function Qe(r,e,s,o,i,d){const a=$("TableStatus"),f=$("TableMobileResponsive");return h(),b("div",ke,[t(G,{flat:"",ref:"propertyRef",bordered:"",grid:r.$q.screen.lt.md,rows:o.rows,columns:o.columns,pagination:o.pagination,"onUpdate:pagination":e[5]||(e[5]=l=>o.pagination=l),selected:o.selected,"onUpdate:selected":e[6]||(e[6]=l=>o.selected=l),loading:o.loading,"binary-state-sort":"",onRequest:o.onRequest,"selected-rows-label":o.getSelectedString,selection:"multiple","row-key":"name",class:"property-table","wrap-cells":""},{"top-right":n(()=>[o.isHighlighted?(h(),H(w,{key:0,color:"primary",icon:"star",class:"mr-4",onClick:e[0]||(e[0]=l=>o.submitHighlight(r.propertyData))})):R("",!0),t(W,{borderless:"",dense:"",debounce:"300",modelValue:o.searchKeyword,"onUpdate:modelValue":e[3]||(e[3]=l=>o.searchKeyword=l),placeholder:"Search",class:"border px-4 rounded-lg",onKeyup:e[4]||(e[4]=le(l=>o.handlePostKeywords(o.searchKeyword),["enter"]))},{append:n(()=>[o.searchKeyword!==""?(h(),H(S,{key:0,name:"close",onClick:e[1]||(e[1]=l=>o.searchKeyword=""),class:"cursor-pointer"})):R("",!0),t(S,{name:"search",onClick:e[2]||(e[2]=l=>o.handlePostKeywords(o.searchKeyword)),class:"cursor-pointer"})]),_:1},8,["modelValue"])]),"header-cell":n(l=>[t(Z,{props:l,style:{"text-wrap":"nowrap"}},{default:n(()=>[_("label",{for:l.col.label,class:"font-bold text-sm"},L(l.col.label),9,Pe)]),_:2},1032,["props"])]),"body-cell-short_description":n(l=>[t(C,{props:l},{default:n(()=>[_("div",{class:"break-all",innerHTML:l.value},null,8,Te)]),_:2},1032,["props"])]),"body-cell-highlight":n(l=>[t(C,{props:l},{default:n(()=>[t(I,{size:"sm",modelValue:l.row.checked,"onUpdate:modelValue":y=>l.row.checked=y,val:"sm",onClick:y=>o.handleHighlight(l.row)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:2},1032,["props"])]),"body-cell-action":n(l=>[t(C,{props:l},{default:n(()=>[t(a,{data:l},null,8,["data"])]),_:2},1032,["props"])]),item:n(l=>[t(f,{props:l},null,8,["props"])]),_:1},8,["grid","rows","columns","pagination","selected","loading","onRequest","selected-rows-label"])])}const Ve=Q(Se,[["render",Qe]]),De={components:{TableList:Ve}},xe={class:"row q-gutter-y-sm justify-between"},Ae=_("div",{class:"col col-auto text-2xl"},"Property List",-1),Ce={class:"col col-auto text-right"};function He(r,e,s,o,i,d){const a=$("TableList");return h(),b(z,null,[_("div",xe,[Ae,_("div",Ce,[t(w,{"icon-right":"add",label:"Add Property",class:"!font-bold text-white",color:"primary",to:{name:"property.form",query:{type:"create"}}},null,8,["to"])])]),t(a)],64)}const ot=Q(De,[["render",He]]);export{ot as default};
