(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{3419:function(e,t,s){Promise.resolve().then(s.bind(s,5786))},6648:function(e,t,s){"use strict";s.d(t,{default:function(){return l.a}});var r=s(5601),l=s.n(r)},7138:function(e,t,s){"use strict";s.d(t,{default:function(){return l.a}});var r=s(231),l=s.n(r)},5601:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return o},getImageProps:function(){return i}});let r=s(9920),l=s(497),n=s(8173),a=r._(s(1241));function i(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}}let o=n.Image},5786:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var r=s(7437),l=s(2265),n=s(6648),a=s(7138),i=s(9419);function o(){let[e,t]=(0,l.useState)([]),[s,o]=(0,l.useState)(!0);(0,l.useEffect)(()=>{c()},[]);let c=async()=>{try{let e=localStorage.getItem("gts_token"),s=await fetch("".concat("https://backend.gtsglobaltalentsolutions.com/public/api","/load_reports"),{method:"POST",headers:{Authorization:"Bearer ".concat(e)}});if(s.ok){let e=await s.json();t(e.reports||[])}else console.error("Failed to fetch reports")}catch(e){console.error("Error fetching reports:",e)}finally{o(!1)}},d=e=>{localStorage.setItem("report_id",e),window.location.href="report-list/reports"};return(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:"p-4 md:p-10 text-white",children:(0,r.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto",children:[(0,r.jsx)(n.default,{src:i.default,alt:"GTS Logo",className:"absolute h-40 w-52 left-3 top-[-14px] sm:left-1"}),(0,r.jsx)("div",{className:"absolute left-0 right-0 top-6",children:(0,r.jsx)("h1",{className:"text-center text-[25px] hidden lg:block font-bold text-white",children:"G T S Reports"})}),(0,r.jsx)("span",{className:"bg-opacity-30 rounded-3xl pt-3 pb-3 absolute right-0 md:right-10 lg:right-10 top-8 sm:pt-2 sm:pb-2 sm:right-2 sm:top-9",children:(0,r.jsx)(a.default,{href:"/sign-in",children:(0,r.jsx)("span",{className:"p-3 rounded-3xl ml-1 mt-1 mb-1 mr-2 pr-5 sm:p-2 sm:pl-3 sm:mr-1 text-white",children:"Hi Admin"})})})]})}),(0,r.jsx)("div",{className:"bg-white h-auto mt-20 rounded-3xl bg-opacity-25 mx-[5%]",children:s?(0,r.jsx)("p",{className:"text-center text-gray-500 py-10",children:"Loading reports..."}):e.length>0?(0,r.jsx)("div",{className:"flex flex-col items-center",children:e.map((e,t)=>(0,r.jsxs)("div",{className:"bg-gray-800 mt-5 mb-5 p-5 h-auto w-full max-w-[90%] rounded-3xl flex flex-wrap items-center justify-between gap-4 shadow-lg",children:[(0,r.jsx)("div",{className:"flex-1 text-center hidden sm:block sm:w-[20%]",children:(0,r.jsx)(n.default,{src:i.default,alt:"Logo",className:"w-[60px] sm:w-[80px] mt-[-10px] mb-[-20px]"})}),(0,r.jsx)("div",{className:"flex-1 text-center hidden sm:block sm:w-[20%]",children:(0,r.jsxs)("h1",{className:"text-white text-xs sm:text-base font-bold",children:["ID ",e.report_id]})}),(0,r.jsx)("div",{className:"flex-1 text-center hidden sm:block sm:w-[20%]",children:(0,r.jsx)("h1",{className:"text-white text-xs sm:text-base font-bold",children:e.u_id})}),(0,r.jsx)("div",{className:"flex-1 text-center sm:w-[20%]",children:(0,r.jsx)("h1",{className:"text-white text-xs sm:text-base font-bold",children:new Date(e.created_at).toLocaleDateString()})}),(0,r.jsx)("div",{className:"w-full sm:w-auto flex justify-center sm:justify-end",children:(0,r.jsx)("h1",{className:"bg-green-500 flex items-center justify-center px-4 py-2 text-xs sm:text-base font-bold text-white rounded-3xl cursor-pointer hover:bg-green-600 transition-all",onClick:()=>d(e.report_id),children:"View Report"})})]},t))}):(0,r.jsx)("p",{className:"text-center text-gray-500 py-10",children:"No reports found."})})]})}},9419:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/logo.659d43d1.svg",height:233,width:262,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[30,971,23,744],function(){return e(e.s=3419)}),_N_E=e.O()}]);