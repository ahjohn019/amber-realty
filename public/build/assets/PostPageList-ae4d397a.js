import{Q as z}from"./focus-manager-79df5594.js";import{Q as E,a as P,b as H}from"./QTable-0af2b1eb.js";import{l as V,J as U,B as q,r as p,n as $,x as A,A as o,G as e,s as t,X as r,o as J,m as F,H as h,F as j,Y as G,Z as O}from"./ckeditor-395087e9.js";import{c as X,d as Z,Q as x}from"./Ripple-c8ae3d8c.js";import{Q as W}from"./QLinearProgress-3da15546.js";import{Q as c,d,c as i}from"./QMenu-630aeaa5.js";import{Q as S,a as k}from"./QBtnDropdown-5c5a3be5.js";import{u as ee}from"./postTablePage-c0529d26.js";import{u as te}from"./app-cd973502.js";import{Q as le}from"./QInput-876a25c0.js";import{d as ae}from"./dayjs.min-d8d1731f.js";import"./QSeparator-3f6abff9.js";import"./QSelect-22bda3a6.js";import"./option-sizes-2eb5697c.js";import"./QChip-398b7338.js";import"./use-prevent-scroll-487996cc.js";import"./use-timeout-7eeb77f4.js";import"./rtl-36dd996b.js";import"./QCheckbox-27486e5c.js";import"./use-checkbox-41ac9346.js";const oe=["top","middle","bottom"],I=X({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:l=>oe.includes(l)}},setup(l,{slots:n}){const _=V(()=>l.align!==void 0?{verticalAlign:l.align}:null),s=V(()=>{const f=l.outline===!0&&l.color||l.textColor;return`q-badge flex inline items-center no-wrap q-badge--${l.multiLine===!0?"multi":"single"}-line`+(l.outline===!0?" q-badge--outline":l.color!==void 0?` bg-${l.color}`:"")+(f!==void 0?` text-${f}`:"")+(l.floating===!0?" q-badge--floating":"")+(l.rounded===!0?" q-badge--rounded":"")+(l.transparent===!0?" q-badge--transparent":"")});return()=>U("div",{class:s.value,style:_.value,role:"status","aria-label":l.label},Z(n.default,l.label!==void 0?[l.label]:[]))}});const se={setup(l,{emit:n}){const _=p("");return{handlePostSearch:()=>{n("postKeywords",_.value)},postKeywords:_}}},ne={class:"row p-2 bg-white mt-5"},de={class:"col col-md-6 col-lg-9 filter-posts-search-bar"},re={class:"col col-md-2 col-lg-1 text-center"},ce={class:"col col-md-2 col-lg-1 text-center"},ie={class:"col col-md-2 col-lg-1 text-center"};function ue(l,n,_,s,f,g){return $(),A("div",ne,[o("div",de,[e(le,{outlined:"",dense:"",label:"Search",modelValue:s.postKeywords,"onUpdate:modelValue":n[0]||(n[0]=u=>s.postKeywords=u)},{append:t(()=>[e(x,{name:"search",onClick:s.handlePostSearch},null,8,["onClick"])]),_:1},8,["modelValue"])]),o("div",re,[e(k,{label:"Filters",class:"filter-posts-bar","dropdown-icon":"expand_more"},{default:t(()=>[e(S,null,{default:t(()=>[e(c,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(i,null,{default:t(()=>[r("Photos")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(i,null,{default:t(()=>[r("Videos")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(i,null,{default:t(()=>[r("Articles")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),o("div",ce,[e(k,{class:"filter-posts-bar","dropdown-icon":"expand_more",label:"Category"},{default:t(()=>[e(S,null,{default:t(()=>[e(c,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(i,null,{default:t(()=>[r("Photos")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(i,null,{default:t(()=>[r("Videos")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(i,null,{default:t(()=>[r("Articles")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),o("div",ie,[e(k,{class:"filter-posts-bar","dropdown-icon":"expand_more",label:"Latest"},{default:t(()=>[e(S,null,{default:t(()=>[e(c,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(i,null,{default:t(()=>[r("Photos")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(i,null,{default:t(()=>[r("Videos")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(i,null,{default:t(()=>[r("Articles")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}const _e=q(se,[["render",ue]]);const fe={components:{FilterBar:_e},setup(){const l=p(),n=p([]),_=p([]),s=p(""),f=p(!1),g=p({sortBy:"title",descending:!1,page:1,rowsPerPage:15,rowsNumber:null}),u=p([]),a=p({}),B=ee(),N=te().fetchSessionToken(),C=m=>{const{page:b,rowsPerPage:v,sortBy:w,descending:Q}=m;return a.value={...a.value,attribute:w,sortable:Q?"desc":"asc",page:b,paginate:v},a.value.paginate<=0&&(a.value.paginate=m.rowsNumber),a.value},D=m=>{a.value={...a.value,keyword:m,searchable:["title","content"],page:1,attribute:"title",sortable:"asc",paginate:15},L(null,a.value)},L=async(m,b)=>{const{page:v,rowsPerPage:w,sortBy:Q,descending:Y}=m??{page:1,rowsPerPage:15,sortBy:null,descending:null};f.value=!0;const y=await B.fetchPostList(N,v,b),M=y.data.map(T=>({...T,created_at:ae(T.created_at).format("YYYY-MM-DD HH:mm:ss")}));return n.value=M,g.value={...g.value,rowsNumber:y.meta.total,page:v,rowsPerPage:w,sortBy:Q,descending:Y},b.rowsPerPage=y.meta.per_page,f.value=!1,y},R=async m=>{const b=C(m.pagination),v=B.fetchPostColumns();return _.value=v,L(m.pagination,b)};return J(()=>{l.value.requestServerInteraction()}),{tableRef:l,filter:s,loading:f,pagination:g,columns:_,rows:n,onRequest:R,selected:u,fetchPagination:C,handlePostKeywords:D,getSelectedString(){return console.log(u.value),u.value.length===0?"":`${u.value.length} record${u.value.length>1?"s":""} selected of ${n.value.length}`}}}},K=l=>(G("data-v-a8230244"),l=l(),O(),l),me={class:"pt-5"},pe=["for"],ge={class:"font-bold table-likes-columns"},be={class:"q-table-label"},ve={class:"flex gap-2"},he=K(()=>o("div",null,[o("span",{class:"q-table-label"},"Score ")],-1)),we={class:"flex"},ye=K(()=>o("div",{class:"row items-center no-wrap font-bold"}," Edit ",-1)),Pe={class:"q-mt-md"};function xe(l,n,_,s,f,g){const u=F("FilterBar");return $(),A(j,null,[e(u,{onPostKeywords:s.handlePostKeywords},null,8,["onPostKeywords"]),o("div",me,[e(H,{flat:"",ref:"tableRef",bordered:"",grid:l.$q.screen.lt.sm,rows:s.rows,columns:s.columns,pagination:s.pagination,"onUpdate:pagination":n[0]||(n[0]=a=>s.pagination=a),selected:s.selected,"onUpdate:selected":n[1]||(n[1]=a=>s.selected=a),loading:s.loading,"binary-state-sort":"",onRequest:s.onRequest,"selected-rows-label":s.getSelectedString,selection:"multiple",class:"posts-table"},{"header-cell":t(a=>[e(E,{props:a},{default:t(()=>[o("label",{for:a.col.label,class:"font-bold text-sm"},h(a.col.label),9,pe)]),_:2},1032,["props"])]),"body-cell":t(a=>[e(P,{props:a,class:"font-bold"},{default:t(()=>[o("div",null,h(a.value),1)]),_:2},1032,["props"])]),"body-cell-title":t(a=>[e(P,{props:a},{default:t(()=>[o("div",ge,h(a.value),1),o("div",be," Likes : "+h(a.row.likes),1)]),_:2},1032,["props"])]),"body-cell-popularity":t(a=>[e(P,{props:a},{default:t(()=>[o("div",ve,[he,o("div",null,[e(I,{color:"positive",style:{"font-weight":"bold"},class:"capitalize p-2 rounded",label:a.row.popularity_percentage+"%"},null,8,["label"])]),o("div",null,[e(I,{color:"positive",style:{"font-weight":"bold"},class:"capitalize p-2 rounded",label:a.row.popularity_grade},null,8,["label"])])]),o("div",null,[e(W,{rounded:"",size:"15px",value:parseFloat(a.value),class:"q-mt-sm rounded q-table-custom-progress-bar"},null,8,["value"])])]),_:2},1032,["props"])]),"body-cell-status":t(a=>[e(P,{props:a},{default:t(()=>[o("div",we,[o("div",null,[e(k,{color:"transparent",class:"text-black font-bold","dropdown-icon":"expand_more"},{label:t(()=>[ye]),default:t(()=>[e(S,{class:"q-table-edit-dropdown-list"},{default:t(()=>[e(c,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(x,{name:"visibility"})]),_:1}),e(d,null,{default:t(()=>[e(i,null,{default:t(()=>[r("View")]),_:1})]),_:1})]),_:1}),e(c,{clickable:""},{default:t(()=>[e(d,null,{default:t(()=>[e(x,{name:"edit"})]),_:1}),e(d,null,{default:t(()=>[e(i,null,{default:t(()=>[r("Edit")]),_:1})]),_:1})]),_:1}),e(c,{clickable:"",onClick:B=>l.handlePostDelete(a.row.id)},{default:t(()=>[e(d,null,{default:t(()=>[e(x,{name:"delete"})]),_:1}),e(d,null,{default:t(()=>[e(i,null,{default:t(()=>[r("Delete")]),_:1})]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)])])]),_:2},1032,["props"])]),_:1},8,["grid","rows","columns","pagination","selected","loading","onRequest","selected-rows-label"]),o("div",Pe,"Selected: "+h(JSON.stringify(s.selected)),1)])],64)}const Se=q(fe,[["render",xe],["__scopeId","data-v-a8230244"]]);const ke={components:{TablePage:Se}},Be={class:"dashboard-container-page m-4 px-4"},Qe={class:"row"},qe=o("div",{class:"col text-2xl"},"Post List",-1),$e={class:"col text-right"};function Ae(l,n,_,s,f,g){const u=F("TablePage");return $(),A("div",Be,[o("div",Qe,[qe,o("div",$e,[e(z,{"icon-right":"add",label:"Add Posts",class:"add-posts text-white",color:"primary",to:{name:"posts.form",query:{type:"create"}}},null,8,["to"])])]),e(u)])}const Ze=q(ke,[["render",Ae]]);export{Ze as default};
