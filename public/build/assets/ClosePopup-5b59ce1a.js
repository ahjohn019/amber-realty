import{l as s}from"./QBtn-b8d5e40a.js";import{x as d,y as i}from"./QMenu-b9569a53.js";import{as as c}from"./ckeditor-d241b8c8.js";function n(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const f=s({name:"close-popup",beforeMount(e,{value:t}){const o={depth:n(t),handler(r){o.depth!==0&&setTimeout(()=>{const p=d(e);p!==void 0&&i(p,r,o.depth)})},handlerKey(r){c(r,13)===!0&&o.handler(r)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=n(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{f as C};
