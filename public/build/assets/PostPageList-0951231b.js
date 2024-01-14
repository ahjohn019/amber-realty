import{c as N,h as F,f as U,Q as x,e as j}from"./QBtn-e159bb09.js";import{Q as J,a as O,d as W}from"./dayjs.min-559b408c.js";import{l as Q,J as $,P as G,B as C,r as g,n as A,x as T,A as s,G as e,s as t,X as i,o as X,m as D,H as h,F as Z,Y as ee,Z as te}from"./ckeditor-a9205207.js";import{Q as le}from"./QLinearProgress-e5c46ce9.js";import{Q as u,d,c as _}from"./QMenu-f94fd9f9.js";import{a as S}from"./QList-dc4639b1.js";import{Q as k}from"./QBtnDropdown-05af2e11.js";import{u as oe}from"./postTablePage-eff4ff02.js";import{u as ae}from"./app-8b37a9b4.js";import{Q as se}from"./QInput-d9b5a02f.js";import"./QSelect-3d267ff4.js";import"./use-key-composition-64eeafd4.js";import"./use-prevent-scroll-f0307901.js";import"./QCheckbox-f354e6c3.js";import"./option-sizes-47b65799.js";const P=N({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(l,{slots:n}){const c=G(),a=Q(()=>"q-td"+(l.autoWidth===!0?" q-table--col-auto-width":"")+(l.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(l.props===void 0)return $("td",{class:a.value},F(n.default));const f=c.vnode.key,p=(l.props.colsMap!==void 0?l.props.colsMap[f]:null)||l.props.col;if(p===void 0)return;const{row:r}=l.props;return $("td",{class:a.value+p.__tdClass(r),style:p.__tdStyle(r)},F(n.default))}}}),ne=["top","middle","bottom"],K=N({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:l=>ne.includes(l)}},setup(l,{slots:n}){const c=Q(()=>l.align!==void 0?{verticalAlign:l.align}:null),a=Q(()=>{const f=l.outline===!0&&l.color||l.textColor;return`q-badge flex inline items-center no-wrap q-badge--${l.multiLine===!0?"multi":"single"}-line`+(l.outline===!0?" q-badge--outline":l.color!==void 0?` bg-${l.color}`:"")+(f!==void 0?` text-${f}`:"")+(l.floating===!0?" q-badge--floating":"")+(l.rounded===!0?" q-badge--rounded":"")+(l.transparent===!0?" q-badge--transparent":"")});return()=>$("div",{class:a.value,style:c.value,role:"status","aria-label":l.label},U(n.default,l.label!==void 0?[l.label]:[]))}});const de={setup(l,{emit:n}){const c=g("");return{handlePostSearch:()=>{n("postKeywords",c.value)},postKeywords:c}}},re={class:"row p-2 bg-white mt-5"},ce={class:"col col-md-6 col-lg-9 filter-posts-search-bar"},ie={class:"col col-md-2 col-lg-1 text-center"},ue={class:"col col-md-2 col-lg-1 text-center"},_e={class:"col col-md-2 col-lg-1 text-center"};function fe(l,n,c,a,f,p){return A(),T("div",re,[s("div",ce,[e(se,{outlined:"",dense:"",label:"Search",modelValue:a.postKeywords,"onUpdate:modelValue":n[0]||(n[0]=r=>a.postKeywords=r)},{append:t(()=>[e(x,{name:"search",onClick:a.handlePostSearch},null,8,["onClick"])]),_:1},8,["modelValue"])]),s("div",ie,[e(k,{label:"Filters",class:"filter-posts-bar","dropdown-icon":"expand_more"},{default:t(()=>[e(S,null,{default:t(()=>[e(u,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[i("Photos")]),_:1})]),_:1})]),_:1}),e(u,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[i("Videos")]),_:1})]),_:1})]),_:1}),e(u,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[i("Articles")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),s("div",ue,[e(k,{class:"filter-posts-bar","dropdown-icon":"expand_more",label:"Category"},{default:t(()=>[e(S,null,{default:t(()=>[e(u,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[i("Photos")]),_:1})]),_:1})]),_:1}),e(u,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[i("Videos")]),_:1})]),_:1})]),_:1}),e(u,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[i("Articles")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),s("div",_e,[e(k,{class:"filter-posts-bar","dropdown-icon":"expand_more",label:"Latest"},{default:t(()=>[e(S,null,{default:t(()=>[e(u,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[i("Photos")]),_:1})]),_:1})]),_:1}),e(u,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[i("Videos")]),_:1})]),_:1})]),_:1}),e(u,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[i("Articles")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}const pe=C(de,[["render",fe]]);const me={components:{FilterBar:pe},setup(){const l=g(),n=g([]),c=g([]),a=g(""),f=g(!1),p=g({sortBy:"title",descending:!1,page:1,rowsPerPage:15,rowsNumber:null}),r=g([]),o=g({}),B=oe(),R=ae().fetchSessionToken(),L=m=>{const{page:b,rowsPerPage:v,sortBy:w,descending:q}=m;return o.value={...o.value,attribute:w,sortable:q?"desc":"asc",page:b,paginate:v},o.value.paginate<=0&&(o.value.paginate=m.rowsNumber),o.value},H=m=>{o.value={...o.value,keyword:m,searchable:["title","content"],page:1,attribute:"title",sortable:"asc",paginate:15},I(null,o.value)},I=async(m,b)=>{const{page:v,rowsPerPage:w,sortBy:q,descending:z}=m??{page:1,rowsPerPage:15,sortBy:null,descending:null};f.value=!0;const y=await B.fetchPostList(R,v,b),E=y.data.map(V=>({...V,created_at:W(V.created_at).format("YYYY-MM-DD HH:mm:ss")}));return n.value=E,p.value={...p.value,rowsNumber:y.meta.total,page:v,rowsPerPage:w,sortBy:q,descending:z},b.rowsPerPage=y.meta.per_page,f.value=!1,y},Y=async m=>{const b=L(m.pagination),v=B.fetchPostColumns();return c.value=v,I(m.pagination,b)};return X(()=>{l.value.requestServerInteraction()}),{tableRef:l,filter:a,loading:f,pagination:p,columns:c,rows:n,onRequest:Y,selected:r,fetchPagination:L,handlePostKeywords:H,getSelectedString(){return console.log(r.value),r.value.length===0?"":`${r.value.length} record${r.value.length>1?"s":""} selected of ${n.value.length}`}}}},M=l=>(ee("data-v-9ff1d401"),l=l(),te(),l),ge={class:"pt-5"},be=["for"],ve={class:"font-bold table-likes-columns"},he={class:"q-table-label"},we={class:"flex gap-2"},ye=M(()=>s("div",null,[s("span",{class:"q-table-label"},"Score ")],-1)),Pe={class:"flex"},xe=M(()=>s("div",{class:"row items-center no-wrap font-bold"}," Edit ",-1)),Se={class:"q-mt-md"};function ke(l,n,c,a,f,p){const r=D("FilterBar");return A(),T(Z,null,[e(r,{onPostKeywords:a.handlePostKeywords},null,8,["onPostKeywords"]),s("div",ge,[e(O,{flat:"",ref:"tableRef",bordered:"",grid:l.$q.screen.lt.sm,rows:a.rows,columns:a.columns,pagination:a.pagination,"onUpdate:pagination":n[0]||(n[0]=o=>a.pagination=o),selected:a.selected,"onUpdate:selected":n[1]||(n[1]=o=>a.selected=o),loading:a.loading,"binary-state-sort":"",onRequest:a.onRequest,"selected-rows-label":a.getSelectedString,selection:"multiple",class:"posts-table"},{"header-cell":t(o=>[e(J,{props:o},{default:t(()=>[s("label",{for:o.col.label,class:"font-bold text-sm"},h(o.col.label),9,be)]),_:2},1032,["props"])]),"body-cell":t(o=>[e(P,{props:o,class:"font-bold"},{default:t(()=>[s("div",null,h(o.value),1)]),_:2},1032,["props"])]),"body-cell-title":t(o=>[e(P,{props:o},{default:t(()=>[s("div",ve,h(o.value),1),s("div",he," Likes : "+h(o.row.likes),1)]),_:2},1032,["props"])]),"body-cell-popularity":t(o=>[e(P,{props:o},{default:t(()=>[s("div",we,[ye,s("div",null,[e(K,{color:"positive",style:{"font-weight":"bold"},class:"capitalize p-2 rounded",label:o.row.popularity_percentage+"%"},null,8,["label"])]),s("div",null,[e(K,{color:"positive",style:{"font-weight":"bold"},class:"capitalize p-2 rounded",label:o.row.popularity_grade},null,8,["label"])])]),s("div",null,[e(le,{rounded:"",size:"15px",value:parseFloat(o.value),class:"q-mt-sm rounded q-table-custom-progress-bar"},null,8,["value"])])]),_:2},1032,["props"])]),"body-cell-status":t(o=>[e(P,{props:o},{default:t(()=>[s("div",Pe,[s("div",null,[e(k,{color:"transparent",class:"text-black font-bold","dropdown-icon":"expand_more"},{label:t(()=>[xe]),default:t(()=>[e(S,{class:"q-table-edit-dropdown-list"},{default:t(()=>[e(u,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(x,{name:"visibility"})]),_:1}),e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[i("View")]),_:1})]),_:1})]),_:1}),e(u,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(x,{name:"edit"})]),_:1}),e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[i("Edit")]),_:1})]),_:1})]),_:1}),e(u,{clickable:"",onClick:B=>l.handlePostDelete(o.row.id)},{default:t(()=>[e(d,null,{default:t(()=>[e(x,{name:"delete"})]),_:1}),e(d,null,{default:t(()=>[e(_,null,{default:t(()=>[i("Delete")]),_:1})]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)])])]),_:2},1032,["props"])]),_:1},8,["grid","rows","columns","pagination","selected","loading","onRequest","selected-rows-label"]),s("div",Se,"Selected: "+h(JSON.stringify(a.selected)),1)])],64)}const Be=C(me,[["render",ke],["__scopeId","data-v-9ff1d401"]]);const qe={components:{TablePage:Be}},Qe={class:"dashboard-container-page m-4 px-4"},$e={class:"row"},Ce=s("div",{class:"col text-2xl"},"Post List",-1),Ae={class:"col text-right"};function Te(l,n,c,a,f,p){const r=D("TablePage");return A(),T("div",Qe,[s("div",$e,[Ce,s("div",Ae,[e(j,{"icon-right":"add",label:"Add Posts",class:"add-posts text-white",color:"primary",to:{name:"posts.form",query:{type:"create"}}},null,8,["to"])])]),e(r)])}const Oe=C(qe,[["render",Te]]);export{Oe as default};