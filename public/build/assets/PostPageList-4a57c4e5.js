import{c as z,f as E,Q as x,e as H}from"./focus-manager-07b39634.js";import{Q as U,a as P,b as J,d as j}from"./dayjs.min-8927f092.js";import{l as V,J as G,B as q,r as p,n as $,x as A,A as o,G as e,s as l,X as r,o as O,m as F,H as h,F as X,Y as Z,Z as W}from"./ckeditor-6cef9db6.js";import{Q as ee}from"./QLinearProgress-75df73e6.js";import{Q as c,d,c as i}from"./QMenu-93765cf2.js";import{Q as S,a as k}from"./QBtnDropdown-fe00dda8.js";import{u as le}from"./postTablePage-80969a67.js";import{u as te}from"./app-e090d726.js";import{Q as ae}from"./QInput-ecc5a956.js";import"./QSeparator-22cad650.js";import"./QSelect-9cc6402e.js";import"./option-sizes-8193bdc4.js";import"./use-prevent-scroll-774b52f2.js";import"./QCheckbox-9542249d.js";import"./use-checkbox-846dd339.js";const oe=["top","middle","bottom"],I=z({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:t=>oe.includes(t)}},setup(t,{slots:n}){const _=V(()=>t.align!==void 0?{verticalAlign:t.align}:null),s=V(()=>{const f=t.outline===!0&&t.color||t.textColor;return`q-badge flex inline items-center no-wrap q-badge--${t.multiLine===!0?"multi":"single"}-line`+(t.outline===!0?" q-badge--outline":t.color!==void 0?` bg-${t.color}`:"")+(f!==void 0?` text-${f}`:"")+(t.floating===!0?" q-badge--floating":"")+(t.rounded===!0?" q-badge--rounded":"")+(t.transparent===!0?" q-badge--transparent":"")});return()=>G("div",{class:s.value,style:_.value,role:"status","aria-label":t.label},E(n.default,t.label!==void 0?[t.label]:[]))}});const se={setup(t,{emit:n}){const _=p("");return{handlePostSearch:()=>{n("postKeywords",_.value)},postKeywords:_}}},ne={class:"row p-2 bg-white mt-5"},de={class:"col col-md-6 col-lg-9 filter-posts-search-bar"},re={class:"col col-md-2 col-lg-1 text-center"},ce={class:"col col-md-2 col-lg-1 text-center"},ie={class:"col col-md-2 col-lg-1 text-center"};function ue(t,n,_,s,f,g){return $(),A("div",ne,[o("div",de,[e(ae,{outlined:"",dense:"",label:"Search",modelValue:s.postKeywords,"onUpdate:modelValue":n[0]||(n[0]=u=>s.postKeywords=u)},{append:l(()=>[e(x,{name:"search",onClick:s.handlePostSearch},null,8,["onClick"])]),_:1},8,["modelValue"])]),o("div",re,[e(k,{label:"Filters",class:"filter-posts-bar","dropdown-icon":"expand_more"},{default:l(()=>[e(S,null,{default:l(()=>[e(c,{clickable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[r("Photos")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[r("Videos")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[r("Articles")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),o("div",ce,[e(k,{class:"filter-posts-bar","dropdown-icon":"expand_more",label:"Category"},{default:l(()=>[e(S,null,{default:l(()=>[e(c,{clickable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[r("Photos")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[r("Videos")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[r("Articles")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),o("div",ie,[e(k,{class:"filter-posts-bar","dropdown-icon":"expand_more",label:"Latest"},{default:l(()=>[e(S,null,{default:l(()=>[e(c,{clickable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[r("Photos")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[r("Videos")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[r("Articles")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}const _e=q(se,[["render",ue]]);const fe={components:{FilterBar:_e},setup(){const t=p(),n=p([]),_=p([]),s=p(""),f=p(!1),g=p({sortBy:"title",descending:!1,page:1,rowsPerPage:15,rowsNumber:null}),u=p([]),a=p({}),B=le(),N=te().fetchSessionToken(),C=m=>{const{page:b,rowsPerPage:v,sortBy:w,descending:Q}=m;return a.value={...a.value,attribute:w,sortable:Q?"desc":"asc",page:b,paginate:v},a.value.paginate<=0&&(a.value.paginate=m.rowsNumber),a.value},D=m=>{a.value={...a.value,keyword:m,searchable:["title","content"],page:1,attribute:"title",sortable:"asc",paginate:15},L(null,a.value)},L=async(m,b)=>{const{page:v,rowsPerPage:w,sortBy:Q,descending:Y}=m??{page:1,rowsPerPage:15,sortBy:null,descending:null};f.value=!0;const y=await B.fetchPostList(N,v,b),M=y.data.map(T=>({...T,created_at:j(T.created_at).format("YYYY-MM-DD HH:mm:ss")}));return n.value=M,g.value={...g.value,rowsNumber:y.meta.total,page:v,rowsPerPage:w,sortBy:Q,descending:Y},b.rowsPerPage=y.meta.per_page,f.value=!1,y},R=async m=>{const b=C(m.pagination),v=B.fetchPostColumns();return _.value=v,L(m.pagination,b)};return O(()=>{t.value.requestServerInteraction()}),{tableRef:t,filter:s,loading:f,pagination:g,columns:_,rows:n,onRequest:R,selected:u,fetchPagination:C,handlePostKeywords:D,getSelectedString(){return console.log(u.value),u.value.length===0?"":`${u.value.length} record${u.value.length>1?"s":""} selected of ${n.value.length}`}}}},K=t=>(Z("data-v-a8230244"),t=t(),W(),t),me={class:"pt-5"},pe=["for"],ge={class:"font-bold table-likes-columns"},be={class:"q-table-label"},ve={class:"flex gap-2"},he=K(()=>o("div",null,[o("span",{class:"q-table-label"},"Score ")],-1)),we={class:"flex"},ye=K(()=>o("div",{class:"row items-center no-wrap font-bold"}," Edit ",-1)),Pe={class:"q-mt-md"};function xe(t,n,_,s,f,g){const u=F("FilterBar");return $(),A(X,null,[e(u,{onPostKeywords:s.handlePostKeywords},null,8,["onPostKeywords"]),o("div",me,[e(J,{flat:"",ref:"tableRef",bordered:"",grid:t.$q.screen.lt.sm,rows:s.rows,columns:s.columns,pagination:s.pagination,"onUpdate:pagination":n[0]||(n[0]=a=>s.pagination=a),selected:s.selected,"onUpdate:selected":n[1]||(n[1]=a=>s.selected=a),loading:s.loading,"binary-state-sort":"",onRequest:s.onRequest,"selected-rows-label":s.getSelectedString,selection:"multiple",class:"posts-table"},{"header-cell":l(a=>[e(U,{props:a},{default:l(()=>[o("label",{for:a.col.label,class:"font-bold text-sm"},h(a.col.label),9,pe)]),_:2},1032,["props"])]),"body-cell":l(a=>[e(P,{props:a,class:"font-bold"},{default:l(()=>[o("div",null,h(a.value),1)]),_:2},1032,["props"])]),"body-cell-title":l(a=>[e(P,{props:a},{default:l(()=>[o("div",ge,h(a.value),1),o("div",be," Likes : "+h(a.row.likes),1)]),_:2},1032,["props"])]),"body-cell-popularity":l(a=>[e(P,{props:a},{default:l(()=>[o("div",ve,[he,o("div",null,[e(I,{color:"positive",style:{"font-weight":"bold"},class:"capitalize p-2 rounded",label:a.row.popularity_percentage+"%"},null,8,["label"])]),o("div",null,[e(I,{color:"positive",style:{"font-weight":"bold"},class:"capitalize p-2 rounded",label:a.row.popularity_grade},null,8,["label"])])]),o("div",null,[e(ee,{rounded:"",size:"15px",value:parseFloat(a.value),class:"q-mt-sm rounded q-table-custom-progress-bar"},null,8,["value"])])]),_:2},1032,["props"])]),"body-cell-status":l(a=>[e(P,{props:a},{default:l(()=>[o("div",we,[o("div",null,[e(k,{color:"transparent",class:"text-black font-bold","dropdown-icon":"expand_more"},{label:l(()=>[ye]),default:l(()=>[e(S,{class:"q-table-edit-dropdown-list"},{default:l(()=>[e(c,{clickable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(x,{name:"visibility"})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[r("View")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:l(()=>[e(d,null,{default:l(()=>[e(x,{name:"edit"})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[r("Edit")]),_:1})]),_:1})]),_:1}),e(c,{clickable:"",onClick:B=>t.handlePostDelete(a.row.id)},{default:l(()=>[e(d,null,{default:l(()=>[e(x,{name:"delete"})]),_:1}),e(d,null,{default:l(()=>[e(i,null,{default:l(()=>[r("Delete")]),_:1})]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)])])]),_:2},1032,["props"])]),_:1},8,["grid","rows","columns","pagination","selected","loading","onRequest","selected-rows-label"]),o("div",Pe,"Selected: "+h(JSON.stringify(s.selected)),1)])],64)}const Se=q(fe,[["render",xe],["__scopeId","data-v-a8230244"]]);const ke={components:{TablePage:Se}},Be={class:"dashboard-container-page m-4 px-4"},Qe={class:"row"},qe=o("div",{class:"col text-2xl"},"Post List",-1),$e={class:"col text-right"};function Ae(t,n,_,s,f,g){const u=F("TablePage");return $(),A("div",Be,[o("div",Qe,[qe,o("div",$e,[e(H,{"icon-right":"add",label:"Add Posts",class:"add-posts text-white",color:"primary",to:{name:"posts.form",query:{type:"create"}}},null,8,["to"])])]),e(u)])}const Je=q(ke,[["render",Ae]]);export{Je as default};
