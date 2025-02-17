(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1382:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(9776)}])},4334:function(e,t,n){"use strict";n.d(t,{Z:function(){return Container}});var a=n(5893);function Container(e){let{children:t,className:n=""}=e;return(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ".concat(n),children:t})}n(7294)},3268:function(e,t,n){"use strict";n.d(t,{Z:function(){return Navbar}});var a=n(5893),l=n(7294),r=n(4334);function Navbar(){let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let handleScroll=()=>{t(window.scrollY>20)};return window.addEventListener("scroll",handleScroll),()=>window.removeEventListener("scroll",handleScroll)},[]),(0,a.jsx)("nav",{className:"fixed w-full z-50 transition-all duration-300 ".concat(e?"bg-black/80 backdrop-blur-md":"bg-transparent"),children:(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,a.jsx)("span",{className:"text-2xl font-bold text-white",children:"vdjq"}),(0,a.jsxs)("div",{className:"hidden md:flex space-x-8",children:[(0,a.jsx)(NavLink,{href:"/#about",children:"About"}),(0,a.jsx)(NavLink,{href:"/#skills",children:"Skills"}),(0,a.jsx)(NavLink,{href:"/contact",children:"Contact"})]})]})})})}function NavLink(e){let{href:t,children:n}=e;return(0,a.jsx)("a",{href:t,className:"text-gray-400 hover:text-white transition-colors duration-200",children:n})}},9776:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ContactPage}});var a=n(5893),l=n(7294),r=n(3268),i=n(4334),s=n(1671);let o=l.forwardRef(function({title:e,titleId:t,...n},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"}))});function Contact(){let[e,t]=(0,l.useState)(null),n=[{id:"discord",icon:s.Z,label:"Discord",value:"vdjq"},{id:"phone",icon:o,label:"Phone",value:"572-500-3007"}],handleCopy=(e,n)=>{navigator.clipboard.writeText(e),t(n),setTimeout(()=>t(null),2e3)};return(0,a.jsxs)("div",{className:"relative min-h-screen flex items-center bg-black overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-zinc-900 to-black"}),(0,a.jsxs)("div",{className:"absolute inset-0 overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"}),(0,a.jsx)("div",{className:"absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"})]}),(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)("div",{className:"relative z-10 max-w-2xl mx-auto text-center mb-12",children:[(0,a.jsx)("h1",{className:"text-4xl md:text-5xl font-bold mb-6 text-white text-glow",children:"Let's Connect"}),(0,a.jsx)("p",{className:"text-gray-300 text-lg mb-12",children:"Message me on any of these platforms."})]}),(0,a.jsx)("div",{className:"relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto",children:n.map(t=>(0,a.jsxs)("div",{onClick:()=>handleCopy(t.value,t.id),className:"group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8  cursor-pointer transition-all duration-300 hover:bg-white/10  hover:border-white/20 hover:scale-105 hover:shadow-2xl",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors",children:(0,a.jsx)(t.icon,{className:"w-6 h-6 text-white"})}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold text-white mb-1",children:t.label}),(0,a.jsx)("p",{className:"text-gray-400 font-mono",children:t.value})]})]}),(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-black/80 rounded-2xl\n                              transition-opacity duration-300 ".concat(e===t.id?"opacity-100":"opacity-0"),children:(0,a.jsx)("span",{className:"text-green-400 font-medium",children:"Copied!"})})]},t.id))}),(0,a.jsx)("div",{className:"relative z-10 mt-16 text-center",children:(0,a.jsxs)("p",{className:"text-gray-500 text-sm",children:["Prefer email? Contact me at"," ",(0,a.jsx)("a",{href:"mailto:iamvdjq@outlook.com",className:"text-white hover:text-purple-400 transition-colors",children:"iamvdjq@outlook.com"})]})})]}),(0,a.jsx)("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"})]})}function ContactPage(){return(0,a.jsxs)("main",{className:"bg-black",children:[(0,a.jsx)(r.Z,{}),(0,a.jsx)(Contact,{})]})}},1671:function(e,t,n){"use strict";var a=n(7294);let l=a.forwardRef(function({title:e,titleId:t,...n},l){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"}))});t.Z=l}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1382)}),_N_E=e.O()}]);