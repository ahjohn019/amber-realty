import{aB as l,Z as n,j as s,L as c,a3 as m}from"./ckeditor-2db82a36.js";import{r}from"./vm-8acb4ab5.js";function d(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),l.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function v(){let e=null;const i=c();function t(){e!==null&&(clearTimeout(e),e=null)}return n(t),s(t),{removeTimeout:t,registerTimeout(o,a){t(),r(i)===!1&&(e=setTimeout(o,a))}}}function g(){let e;const i=c();function t(){e=void 0}return n(t),s(t),{removeTick:t,registerTick(o){e=o,m(()=>{e===o&&(r(i)===!1&&e(),e=void 0)})}}}export{g as a,d as c,v as u};
