(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(7268)}])},4334:function(e,t,r){"use strict";r.d(t,{Z:function(){return Container}});var s=r(5893);function Container(e){let{children:t,className:r=""}=e;return(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ".concat(r),children:t})}r(7294)},3268:function(e,t,r){"use strict";r.d(t,{Z:function(){return Navbar}});var s=r(5893),l=r(7294),n=r(4334),a=r(1664),i=r.n(a),o=r(1415),c=r(3407);function Navbar(){let[e,t]=(0,l.useState)(!1),[r,a]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let handleScroll=()=>{t(window.scrollY>20)};return window.addEventListener("scroll",handleScroll),()=>window.removeEventListener("scroll",handleScroll)},[]),(0,s.jsx)("nav",{className:"fixed w-full z-50 transition-all duration-300 ".concat(e||r?"bg-black/80 backdrop-blur-md":"bg-transparent"),children:(0,s.jsxs)(n.Z,{children:[(0,s.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,s.jsx)(i(),{href:"/",className:"text-2xl font-bold text-white",children:"vdjq"}),(0,s.jsxs)("div",{className:"hidden md:flex space-x-8",children:[(0,s.jsx)(NavLink,{href:"/about",children:"About"}),(0,s.jsx)(NavLink,{href:"/skills",children:"Skills"}),(0,s.jsx)(NavLink,{href:"/contact",children:"Contact"})]}),(0,s.jsx)("button",{className:"md:hidden text-white p-2",onClick:()=>a(!r),children:r?(0,s.jsx)(o.Z,{className:"h-6 w-6"}):(0,s.jsx)(c.Z,{className:"h-6 w-6"})})]}),r&&(0,s.jsxs)("div",{className:"md:hidden px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md",children:[(0,s.jsx)(MobileNavLink,{href:"/about",onClick:()=>a(!1),children:"About"}),(0,s.jsx)(MobileNavLink,{href:"/skills",onClick:()=>a(!1),children:"Skills"}),(0,s.jsx)(MobileNavLink,{href:"/contact",onClick:()=>a(!1),children:"Contact"})]})]})})}function NavLink(e){let{href:t,children:r}=e;return(0,s.jsx)(i(),{href:t,className:"text-gray-400 hover:text-white transition-colors duration-200",children:r})}function MobileNavLink(e){let{href:t,children:r,onClick:l}=e;return(0,s.jsx)(i(),{href:t,className:"block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200",onClick:l,children:r})}},7268:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ProjectsPage}});var s=r(5893),l=r(7294),n=r(3268),a=r(4334);let i=l.forwardRef(function({title:e,titleId:t,...r},s){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":t},r),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"}))});var o=r(1671);let c=[{title:"Krypton",description:"A website built for selling Fortnite accounts, over 1,000 active users.",image:"https://cdn.discordapp.com/banners/1289622222989824053/a_ddda7f376a300324bd09d6424c77878e.gif?size=240",tags:["SQL","(BASIC) HTML CSS","Discord Integration"],liveUrl:"https://krypt0n.net",discordUrl:"https://discord.gg/dmas"}];function Projects(){return(0,s.jsxs)("div",{className:"relative min-h-screen pt-16 sm:pt-20 pb-12 sm:pb-16 bg-black overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-zinc-900 to-black"}),(0,s.jsxs)("div",{className:"absolute inset-0 overflow-hidden",children:[(0,s.jsx)("div",{className:"absolute top-1/4 -right-1/4 w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"}),(0,s.jsx)("div",{className:"absolute -bottom-1/4 -left-1/4 w-72 h-72 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"})]}),(0,s.jsxs)(a.Z,{children:[(0,s.jsxs)("div",{className:"relative z-10 max-w-xl mx-auto text-center mb-10 sm:mb-12",children:[(0,s.jsx)("h1",{className:"text-3xl sm:text-4xl font-bold mb-4 text-white text-glow",children:"Featured Project"}),(0,s.jsx)("p",{className:"text-gray-300 text-base sm:text-lg",children:"Check out my latest work"})]}),(0,s.jsx)("div",{className:"relative z-10 max-w-3xl mx-auto px-4 sm:px-6",children:c.map(e=>(0,s.jsxs)("div",{className:"group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl",children:[(0,s.jsx)("div",{className:"aspect-video w-full overflow-hidden",children:(0,s.jsx)("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"})}),(0,s.jsxs)("div",{className:"p-5 sm:p-6",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,s.jsx)("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:e.title}),(0,s.jsx)("span",{className:"px-3 py-0.5 bg-green-500/20 text-green-400 rounded-full text-sm",children:"1,000+ Users"})]}),(0,s.jsx)("p",{className:"text-gray-300 text-base sm:text-lg mb-4",children:e.description}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2 mb-5",children:e.tags.map(e=>(0,s.jsx)("span",{className:"px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full",children:e},e))}),(0,s.jsxs)("div",{className:"flex gap-3 flex-col sm:flex-row",children:[(0,s.jsxs)("a",{href:e.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-lg  hover:bg-gray-100 transition-all duration-300 font-medium",children:[(0,s.jsx)(i,{className:"w-4 h-4"}),"Visit Website"]}),(0,s.jsxs)("a",{href:e.discordUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white  hover:bg-white/20 transition-colors font-medium",children:[(0,s.jsx)(o.Z,{className:"w-4 h-4"}),"Join Discord"]})]})]})]},e.title))})]}),(0,s.jsx)("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px]"})]})}function ProjectsPage(){return(0,s.jsxs)("main",{className:"bg-black min-h-screen",children:[(0,s.jsx)(n.Z,{}),(0,s.jsx)(Projects,{})]})}},1671:function(e,t,r){"use strict";var s=r(7294);let l=s.forwardRef(function({title:e,titleId:t,...r},l){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":t},r),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"}))});t.Z=l}},function(e){e.O(0,[979,774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);