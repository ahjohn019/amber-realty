import{e as q}from"./QBtn-429a055e.js";import{Q as A,a as L,d as D}from"./dayjs.min-bba1d50b.js";import{d as R,u as $,B as P,r as c,o as k,n as S,x as w,G as p,s as v,A as u,H as y,m as N,F as C}from"./ckeditor-2815513e.js";import{u as M,a as Q}from"./index-eb0afb72.js";import{u as Y}from"./app-4a7cf3d9.js";import"./QList-e580fcd2.js";import"./QSelect-51ffb7e5.js";import"./use-key-composition-b380e759.js";import"./QMenu-47e5d027.js";import"./use-prevent-scroll-8cae60da.js";import"./QLinearProgress-b33a9e73.js";import"./QCheckbox-f8132721.js";import"./use-checkbox-562fcdb2.js";import"./option-sizes-bbc58390.js";const H=R("server_table_admin",{state:()=>({post_table_admin:null,router:$()}),actions:{fetchPaginationData(r,e){const{page:n,rowsPerPage:t,sortBy:l,descending:s}=r;return e={...e,attribute:l,sortable:s?"desc":"asc",page:n,paginate:t},e.paginate<=0&&(e.paginate=r.rowsNumber),e},fetchServerPagination(r,e){return{rowsNumber:r.meta.total,page:e.page,rowsPerPage:e.rowsPerPage,sortBy:e.sortBy,descending:e.descending}},fetchServerPayload(r,e){return{...r,rowsPerPage:e.meta.per_page}},async fetchTableListData(r,e,n,t,l){const o=Y().fetchSessionToken(),{page:g}=r??{page:1,rowsPerPage:15,sortBy:null,descending:null};return e.value=!0,await n[t](o,g,l)}}}),F={components:{},setup(){const r=c(),e=c([]),n=c([]),t=c(!1),l=c({sortBy:"name",descending:!1,page:1,rowsPerPage:15,rowsNumber:null}),s=c([]),o=c({}),g=M(),h=Q(),m=H(),_=a=>m.fetchPaginationData(a,o.value),T=a=>{o.value={...o.value,keyword:a,searchable:[],page:1,attribute:"name",sortable:"asc",paginate:15},b(null,o.value)},b=async(a,d)=>{const i=await m.fetchTableListData(a,t,g,"fetchPropertyList",d),B=i.data.map(f=>({...f,created_by:f.user.name,created_at:D(f.created_at).format("YYYY-MM-DD HH:mm:ss")}));return e.value=B,l.value=m.fetchServerPagination(i,a),d=m.fetchServerPayload(d,i),t.value=!1,i},x=async a=>{const d=_(a.pagination),i=h.fetchPropertyColumns();return n.value=i,b(a.pagination,d)};return k(()=>{r.value.requestServerInteraction()}),{propertyRef:r,loading:t,pagination:l,columns:n,rows:e,onRequest:x,selected:s,fetchPagination:_,handlePostKeywords:T,getSelectedString(){return console.log(s.value),s.value.length===0?"":`${s.value.length} record${s.value.length>1?"s":""} selected of ${e.value.length}`}}}},U={class:"q-py-md"},V=["for"],j={class:"q-mt-md"};function E(r,e,n,t,l,s){return S(),w("div",U,[p(L,{flat:"",ref:"propertyRef",bordered:"",grid:r.$q.screen.lt.sm,rows:t.rows,columns:t.columns,pagination:t.pagination,"onUpdate:pagination":e[0]||(e[0]=o=>t.pagination=o),selected:t.selected,"onUpdate:selected":e[1]||(e[1]=o=>t.selected=o),loading:t.loading,"binary-state-sort":"",onRequest:t.onRequest,"selected-rows-label":t.getSelectedString,selection:"multiple","row-key":"name",class:"property-table"},{"header-cell":v(o=>[p(A,{props:o},{default:v(()=>[u("label",{for:o.col.label,class:"font-bold text-sm"},y(o.col.label),9,V)]),_:2},1032,["props"])]),_:1},8,["grid","rows","columns","pagination","selected","loading","onRequest","selected-rows-label"]),u("div",j,"Selected: "+y(JSON.stringify(t.selected)),1)])}const G=P(F,[["render",E]]),I={components:{TableList:G}},J={class:"row"},K=u("div",{class:"col text-2xl"},"Property List",-1),O={class:"col text-right"};function z(r,e,n,t,l,s){const o=N("TableList");return S(),w(C,null,[u("div",J,[K,u("div",O,[p(q,{"icon-right":"add",label:"Add Property",class:"!font-bold text-white",color:"primary",to:{name:"property.form",query:{type:"create"}}},null,8,["to"])])]),p(o)],64)}const ue=P(I,[["render",z]]);export{ue as default};
