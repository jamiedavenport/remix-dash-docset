import{a as s}from"/build/_shared/chunk-GWT4HVMK.js";import"/build/_shared/chunk-WV7HFGSM.js";import"/build/_shared/chunk-43DMIVRF.js";import{a as g}from"/build/_shared/chunk-AYAFUZYC.js";import{a as w,c as f,d as h,l as u,p as v}from"/build/_shared/chunk-N3KPM2EV.js";import{b as L,c,e as H,f as t,g as d}from"/build/_shared/chunk-YTGA4KPU.js";var y=L((P,x)=>{d();x.exports={}});d();d();var e=c(H());var z=c(w());var F=c(y());var k="/build/_assets/docs-TIR56M2J.css";d();var C=c(w());var b=({nodes:i,className:r})=>t.createElement("nav",{className:s("md-nav",r)},t.createElement(N,{level:1,nodes:i})),N=({nodes:i,level:r=1})=>{let{lang:m,version:a}=(0,C.useParams)(),A=`/docs/${m}/${a}`,E=({isActive:o}={})=>s("md-nav-item py-1 block text-m-p-sm lg:text-sm",`md-nav-item--level-${r}`,{["md-nav-item--active"]:o,"md-nav-heading":r===1});return t.createElement("ul",{className:s("md-nav-list text-[color:var(--hue-0750)] mb-3",{["ml-3 md:ml-4 lg:ml-3 2xl:ml-4"]:r===3,["ml-6 md:ml-8 lg:ml-6 2xl:ml-8"]:r===4}),"data-level":r},i.sort((o,p)=>o.title.localeCompare(p.title)).sort((o,p)=>{var n,l;return((n=o.order)!=null?n:1/0)-((l=p.order)!=null?l:1/0)}).map((o,p)=>{let n=({isActive:l}={})=>s(E({isActive:r!==1&&l}),{["pt-0"]:r===1&&p===0});return t.createElement("li",{key:o.slug,"data-dir":"","data-level":r},o.disabled?t.createElement("span",{className:n()+" opacity-25"},o.title," \u{1F6A7}"):o.hasContent?t.createElement(f,{prefetch:"intent",end:!0,to:`${A}${o.slug}`,className:n},o.title):t.createElement("span",{className:n()},o.title),o.children.length>0&&t.createElement(N,{level:r+1,nodes:o.children}))}))};function D(){return[{rel:"stylesheet",href:k}]}function M(){let i=u(),r=(0,z.useLocation)(),m=e.useRef(null);return e.useEffect(()=>{let a=m.current;a&&a.hasAttribute("open")&&a.removeAttribute("open")},[r]),e.createElement("div",{className:"lg:flex lg:h-full px-6"},i.length>0?e.createElement("div",{className:"lg:hidden"},e.createElement("div",{className:"absolute top-6 right-6"},e.createElement(h,{onContextMenu:a=>{a.preventDefault(),window.location.href="https://drive.google.com/drive/u/0/folders/1pbHnJqg8Y1ATs0Oi8gARH7wccJGv4I2c"},to:"."},e.createElement(g,null))),e.createElement("details",{ref:m},e.createElement("summary",{className:"pb-4 pt-6 cursor-pointer"},"Docs Navigation"),e.createElement("div",null,e.createElement(b,{nodes:i,className:"py-6 text-d-p-sm font-medium"}))),e.createElement("hr",{className:"mb-4"})):null,i.length>0?e.createElement("div",{className:"flex-shrink-0 hidden lg:block"},e.createElement("div",{className:s(["h-full max-h-screen overflow-x-hidden overflow-y-auto","w-64 xl:w-80 2xl:w-96","sticky top-0","py-10 pl-6 pr-3 xl:pr-5 2xl:pr-6"])},e.createElement(h,{onContextMenu:a=>{a.preventDefault(),window.location.href="https://drive.google.com/drive/u/0/folders/1pbHnJqg8Y1ATs0Oi8gARH7wccJGv4I2c"},to:"."},e.createElement(g,null)),e.createElement("div",{className:"h-8"}),e.createElement(b,{nodes:i}))):null,e.createElement("div",{className:"lg:z-[1] flex-grow lg:h-full"},e.createElement("div",{className:"py-6 md:py-8 lg:py-10 lg:pr-6 lg:pl-3 xl:pl-5 2xl:pl-6"},e.createElement(v.Outlet,null))))}function q(){return!1}export{M as default,D as links,q as unstable_shouldReload};