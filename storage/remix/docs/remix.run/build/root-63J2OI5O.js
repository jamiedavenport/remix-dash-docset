import{a as I,b as c,e as w,g as b,h as f,j as g,k as v,l as u,n as y,p as k}from"/build/_shared/chunk-N3KPM2EV.js";import{c as l,e as x,f as p,g as n}from"/build/_shared/chunk-YTGA4KPU.js";n();n();var t=l(x());var z="/build/_assets/tailwind-XN5LJQWA.css";var S="/build/_assets/bailwind-QVFUVIGW.css";n();n();var r=l(x()),_=l(I());var h="positions",m={};if(typeof window!="undefined"){let e=sessionStorage.getItem(h);e&&(m=JSON.parse(e))}function R(){return C(),r.useEffect(()=>{window.history.scrollRestoration="manual"},[]),g(r.useCallback(()=>{window.history.scrollRestoration="auto"},[])),r.createElement("script",{dangerouslySetInnerHTML:{__html:`
          if (!window.history.state || !window.history.state.key) {
            window.history.replaceState({ key: Math.random().toString(32).slice(2) }, null);
          }
          let STORAGE_KEY = "positions";
          try {
            let positions = JSON.parse(sessionStorage.getItem(${JSON.stringify(h)}) ?? '{}')
            let storedY = positions[window.history.state.key];
            if (typeof storedY === 'number') {
              window.scrollTo(0, storedY)
            }
          } catch(error) {
            console.error(error)
            sessionStorage.removeItem(STORAGE_KEY)
          }
        `}})}var j=!1;function C(){let e=(0,_.useLocation)(),o=y(),i=r.useRef(!1);r.useEffect(()=>{o.submission&&(i.current=!0)},[o]),r.useEffect(()=>{o.location&&(m[e.key]=window.scrollY)},[o,e]),g(r.useCallback(()=>{sessionStorage.setItem(h,JSON.stringify(m))},[])),typeof window!="undefined"&&r.useLayoutEffect(()=>{if(!j){j=!0;return}let a=m[e.key];if(a){window.scrollTo(0,a);return}if(e.hash){let d=document.querySelector(e.hash);if(d){d.scrollIntoView();return}}if(i.current===!0){i.current=!1;return}window.scrollTo(0,0)},[e]),r.useEffect(()=>{o.submission&&(i.current=!0)},[o])}function N({forceDark:e,darkBg:o="bg-gray-900",className:i,children:a}){return p.createElement("body",{"x-comp":"Body",className:"min-h-screen flex flex-col w-full overflow-x-hidden"+(e?` ${o} text-gray-200 `:" bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 ")+i},a,p.createElement(R,null),p.createElement(f,null),!1)}var D=()=>!1;function T(){return[{rel:"preload",as:"font",href:"/font/founders-grotesk-bold.woff2",crossOrigin:"anonymous"},{rel:"stylesheet",href:z},{rel:"stylesheet",href:S}]}var s=({children:e,title:o,forceDark:i,darkBg:a,noIndex:d})=>t.createElement("html",{lang:"en"},t.createElement("head",null,o&&t.createElement("title",null,o),t.createElement("meta",{charSet:"utf-8"}),d&&t.createElement("meta",{name:"robots",content:"noindex"}),t.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),t.createElement("link",{rel:"icon",href:"/favicon-light.1.png",type:"image/png",media:"(prefers-color-scheme: light)"}),t.createElement("link",{rel:"icon",href:"/favicon-dark.1.png",type:"image/png",media:"(prefers-color-scheme: dark)"}),t.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),t.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),t.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Source+Code+Pro:wght@400;600&display=auto",rel:"stylesheet"}),t.createElement(b,null),t.createElement(w,null)),t.createElement(N,{forceDark:i,darkBg:a},e));function E(){let o=v().some(a=>{var d;return(d=a.handle)==null?void 0:d.forceDark}),{noIndex:i}=u();return t.createElement(s,{noIndex:i,forceDark:o},t.createElement(k.Outlet,null))}function L({error:e}){return t.createElement(s,{noIndex:!0,title:"Error",forceDark:!0,darkBg:"bg-red-brand"},t.createElement("div",{className:"flex flex-col justify-center flex-1 text-white"},t.createElement("div",{className:"leading-none text-center"},t.createElement("h1",{className:"text-[25vw]"},"Error"),t.createElement("div",{className:"text-d-h3"},e.message),t.createElement("div",{className:"h-[10vh]"}))))}function F(){let e=c();return t.createElement(s,{noIndex:!0,title:e.statusText,forceDark:!0,darkBg:"bg-blue-brand"},t.createElement("div",{className:"flex flex-col justify-center flex-1 text-white"},t.createElement("div",{className:"leading-none text-center"},t.createElement("h1",{className:"font-mono text-[25vw]"},e.status),t.createElement("a",{className:"inline-block text-[8vw] underline",href:`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${e.status}`},e.statusText),t.createElement("div",{className:"h-[10vh]"}))))}export{F as CatchBoundary,L as ErrorBoundary,E as default,T as links,D as unstable_shouldReload};
