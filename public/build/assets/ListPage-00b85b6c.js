import{Q as P}from"./QBtn-7730d556.js";import{Q as H,a as q,c as I}from"./QTable-9445b15f.js";import{d as N,u as z,B as k,r as u,n as m,x as b,D as t,s as o,H as C,a5 as Y,q as j,F as w,G as $,A as g,a7 as U,a9 as F,o as G,m as D}from"./ckeditor-2db82a36.js";import{u as x,a as K}from"./index-85fee3bd.js";import{u as A}from"./app-8c0b00d7.js";import{Q as O}from"./QCheckbox-79b17ffd.js";import{Q as J}from"./QCardSection-179f6214.js";import{Q as B,b as W,a as X}from"./QSeparator-1586664c.js";import{Q as S,a as p,b as y}from"./QMenu-5921cef6.js";import{Q as Z}from"./QCard-e317547d.js";import{Q}from"./vm-8acb4ab5.js";import{d as ee}from"./dayjs.min-66d8ef05.js";import"./QSelect-bed325f1.js";import"./use-key-composition-fefc29af.js";import"./QChip-5d519ab4.js";import"./QDialog-e6831ada.js";import"./use-prevent-scroll-980b8771.js";import"./use-tick-c308625a.js";import"./rtl-36dd996b.js";import"./format-7985d814.js";import"./use-checkbox-5f3c2cd8.js";import"./option-sizes-38d363f3.js";const te=N("server_table_admin",{state:()=>({post_table_admin:null,router:z()}),actions:{fetchPaginationData(l,e){const{page:i,rowsPerPage:n,sortBy:d,descending:r}=l;return e={...e,attribute:d,sortable:r?"desc":"asc",page:i,paginate:n},e.paginate<=0&&(e.paginate=l.rowsNumber),e},fetchServerPagination(l,e){return{rowsNumber:l.meta.total,page:e.page,rowsPerPage:e.rowsPerPage,sortBy:e.sortBy,descending:e.descending}},fetchServerPayload(l,e){return{...l,rowsPerPage:e.meta.per_page}},async fetchTableListData(l,e,i,n,d){const a=A().fetchSessionToken(),{page:f}=l??{page:1,rowsPerPage:15,sortBy:null,descending:null};return e.value=!0,await i[n](a,f,d)}}});const oe={props:["props"],setup(l){var _;const e=x(),n=A().fetchSessionToken(),d=((_=l.props.row)==null?void 0:_.id)||null,r=u([]);return{handleView:()=>{e.handleViewProperty(d,l.props)},handleEdit:()=>{e.handleEditProperty(d)},handleDelete:async()=>{await e.handleDeleteProperty(d,n)},selected:r,getSelectedString(){return console.log(r.value),r.value.length===0?"":`${r.value.length} record${r.value.length>1?"s":""}`}}}},ne=["innerHTML"],ae={key:1},le={class:"q-gutter-md"};function se(l,e,i,n,d,r){return m(),b("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:F(i.props.selected?"transform: scale(0.95);":"")},[t(Z,{bordered:"",flat:"",class:U(i.props.selected?l.$q.dark.isActive?"bg-grey-9":"bg-grey-2":"")},{default:o(()=>[t(B,null,{default:o(()=>[t(J,null,{default:o(()=>[t(O,{dense:"",modelValue:i.props.selected,"onUpdate:modelValue":e[0]||(e[0]=a=>i.props.selected=a),label:i.props.row.name},null,8,["modelValue","label"])]),_:1}),t(W),(m(!0),b(C,null,Y(i.props.cols.filter(a=>a.name!=="action"),a=>(m(),j(S,{key:a.name},{default:o(()=>[t(p,null,{default:o(()=>[t(y,null,{default:o(()=>[w($(a.label),1)]),_:2},1024),t(y,{caption:""},{default:o(()=>[a.name=="short_description"?(m(),b("div",{key:0,innerHTML:a.value,class:"break-all"},null,8,ne)):(m(),b("div",ae,$(a.value),1))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),t(S,null,{default:o(()=>[t(p,null,{default:o(()=>[t(y,null,{default:o(()=>[w("Action")]),_:1}),g("div",le,[t(P,{color:"primary",icon:"visibility",label:"View",size:"sm",onClick:e[1]||(e[1]=a=>n.handleView())}),t(P,{color:"secondary",icon:"edit",label:"Edit",size:"sm",onClick:e[2]||(e[2]=a=>n.handleEdit())}),t(P,{color:"red",icon:"delete",label:"Delete",size:"sm",onClick:e[3]||(e[3]=a=>n.handleDelete())})])]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])],4)}const re=k(oe,[["render",se]]),ie={props:{data:Object},setup(l){var s;const e=x(),n=A().fetchSessionToken(),d=((s=l.data.row)==null?void 0:s.id)||null;return{handleEdit:()=>{e.handleEditProperty(d,l)},handleDelete:async()=>{await e.handleDeleteProperty(d,n)},handleView:()=>{e.handleViewProperty(d,l)}}}},de=g("div",{class:"row items-center no-wrap font-bold"},"Edit",-1);function ce(l,e,i,n,d,r){return m(),b("div",null,[t(X,{color:"transparent",class:"text-black font-bold","dropdown-icon":"expand_more"},{label:o(()=>[de]),default:o(()=>[t(B,{class:"q-table-edit-dropdown-list"},{default:o(()=>[t(S,{clickable:"",onClick:e[0]||(e[0]=a=>n.handleView())},{default:o(()=>[t(p,null,{default:o(()=>[t(Q,{name:"visibility"})]),_:1}),t(p,null,{default:o(()=>[t(y,null,{default:o(()=>[w("View")]),_:1})]),_:1})]),_:1}),t(S,{clickable:"",onClick:e[1]||(e[1]=a=>n.handleEdit())},{default:o(()=>[t(p,null,{default:o(()=>[t(Q,{name:"edit"})]),_:1}),t(p,null,{default:o(()=>[t(y,null,{default:o(()=>[w("Edit")]),_:1})]),_:1})]),_:1}),t(S,{clickable:"",onClick:e[2]||(e[2]=a=>n.handleDelete())},{default:o(()=>[t(p,null,{default:o(()=>[t(Q,{name:"delete"})]),_:1}),t(p,null,{default:o(()=>[t(y,null,{default:o(()=>[w("Delete")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const ue=k(ie,[["render",ce]]),pe={components:{TableStatus:ue,TableMobileResponsive:re},setup(){const l=u(),e=u([]),i=u([]),n=u(!1),d=u({sortBy:"name",descending:!1,page:1,rowsPerPage:15,rowsNumber:null}),r=u([]),a=u({}),f=x(),s=K(),_=te(),L=c=>_.fetchPaginationData(c,a.value),E=c=>{a.value={...a.value,keyword:c,searchable:[],page:1,attribute:"name",sortable:"asc",paginate:15},V(null,a.value)},V=async(c,v)=>{const h=await _.fetchTableListData(c,n,f,"fetchPropertyList",v),R=h.data.map(T=>({...T,created_by:T.user.name,created_at:ee(T.created_at).format("YYYY-MM-DD HH:mm:ss")}));return e.value=R,d.value=_.fetchServerPagination(h,c),v=_.fetchServerPayload(v,h),n.value=!1,h},M=async c=>{const v=L(c.pagination),h=s.fetchPropertyColumns();return i.value=h,V(c.pagination,v)};return G(()=>{l.value.requestServerInteraction()}),{propertyRef:l,loading:n,pagination:d,columns:i,rows:e,onRequest:M,selected:r,fetchPagination:L,handlePostKeywords:E,getSelectedString(){return console.log(r.value),r.value.length===0?"":`${r.value.length} record${r.value.length>1?"s":""} selected of ${e.value.length}`}}}},me={class:"q-py-md"},fe=["for"],_e=["innerHTML"];function be(l,e,i,n,d,r){const a=D("TableStatus"),f=D("TableMobileResponsive");return m(),b("div",me,[t(I,{flat:"",ref:"propertyRef",bordered:"",grid:l.$q.screen.lt.md,rows:n.rows,columns:n.columns,pagination:n.pagination,"onUpdate:pagination":e[0]||(e[0]=s=>n.pagination=s),selected:n.selected,"onUpdate:selected":e[1]||(e[1]=s=>n.selected=s),loading:n.loading,"binary-state-sort":"",onRequest:n.onRequest,"selected-rows-label":n.getSelectedString,selection:"multiple","row-key":"name",class:"property-table","wrap-cells":""},{"header-cell":o(s=>[t(H,{props:s,style:{"text-wrap":"nowrap"}},{default:o(()=>[g("label",{for:s.col.label,class:"font-bold text-sm"},$(s.col.label),9,fe)]),_:2},1032,["props"])]),"body-cell-short_description":o(s=>[t(q,{props:s},{default:o(()=>[g("div",{class:"break-all",innerHTML:s.value},null,8,_e)]),_:2},1032,["props"])]),"body-cell-action":o(s=>[t(q,{props:s},{default:o(()=>[t(a,{data:s},null,8,["data"])]),_:2},1032,["props"])]),item:o(s=>[t(f,{props:s},null,8,["props"])]),_:1},8,["grid","rows","columns","pagination","selected","loading","onRequest","selected-rows-label"])])}const ge=k(pe,[["render",be]]),he={components:{TableList:ge}},ye={class:"row q-gutter-y-sm justify-between"},ve=g("div",{class:"col col-auto text-2xl"},"Property List",-1),we={class:"col col-auto text-right"};function Se(l,e,i,n,d,r){const a=D("TableList");return m(),b(C,null,[g("div",ye,[ve,g("div",we,[t(P,{"icon-right":"add",label:"Add Property",class:"!font-bold text-white",color:"primary",to:{name:"property.form",query:{type:"create"}}},null,8,["to"])])]),t(a)],64)}const Ue=k(he,[["render",Se]]);export{Ue as default};
