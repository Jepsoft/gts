(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{3254:function(e,s,t){Promise.resolve().then(t.bind(t,8823))},8823:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return h}});var l=t(7437),i=t(6648),a=t(9419),r=t(7138),n=t(5040),d=t(2265),c=t(8472),o=t(4156);function h(){let e=localStorage.getItem("gts_token"),[s,t]=(0,d.useState)(""),[h,m]=(0,d.useState)(""),[x,u]=(0,d.useState)(""),[f,p]=(0,d.useState)(""),[j,b]=(0,d.useState)(""),[g,N]=(0,d.useState)(""),{user_login_done:v,user_not_login:w}={user_login_done:e?"visible":"hidden",user_not_login:e?"hidden":"visible"};return(0,d.useEffect)(()=>{e?(async()=>{try{let e=localStorage.getItem("gts_token"),s=await c.Z.post("".concat("https://gtsglobaltalentsolutions.com/backend/public/api","/profile"),null,{headers:{Authorization:"Bearer ".concat(e)}});t(s.data.result.First_Name),m(s.data.result.Last_Name),u(s.data.result.Phone),p(s.data.result.NIC),N(s.data.result.Gender),b(s.data.result.Email)}catch(e){console.error("Error fetching profile data:",e),(0,o.yv)("Failed to fetch profile data",{variant:"error"})}})():((0,o.yv)("Please Login",{variant:"error"}),setTimeout(()=>{window.location.href="/sign-in"},2e3))},[e]),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"min-h-[100vh] flex flex-col",children:[(0,l.jsx)("nav",{className:"p-4  md:p-10 text-white",children:(0,l.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-full",children:[(0,l.jsx)("div",{}),(0,l.jsx)(i.default,{src:a.Z,alt:"gts logo",className:"special_logo absolute h-40 w-52 left-3 top-[-14px] sm:left-1"}),(0,l.jsx)("div",{className:"flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse",children:(0,l.jsx)("div",{className:"z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600",id:"user-dropdown"})}),(0,l.jsx)("div",{className:"items-center justify-between hidden w-full md:flex md:w-auto md:order-1",id:"navbar-user",children:(0,l.jsx)("ul",{className:"flex flex-col font-medium p-4 md:p-0 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white",children:(0,l.jsxs)("h1",{className:"font-bold md:text-2xl lg:text-2xl sm:text-xl",children:[(0,l.jsx)("span",{className:"span_g",children:"G"}),"lobal ",(0,l.jsx)("span",{className:"span_t",children:"T"}),"alent ",(0,l.jsx)("span",{className:"span_s",children:"S"}),"olutions"]})})}),(0,l.jsx)("div",{className:"absolute right-10 text-white top-8 text-center special-signup_in_button ".concat(w),children:(0,l.jsxs)("div",{className:" bg-white bg-opacity-30 flex justify-center  rounded-[20px]",children:[(0,l.jsx)(r.default,{href:"/sign-in",children:(0,l.jsx)("div",{className:"pr-2 pl-3 p-2",children:"Signin"})}),(0,l.jsx)(r.default,{href:"/sign-up",children:(0,l.jsx)("div",{className:"pl-3 pr-3 p-2 bg-blue-600 rounded-[20px] ",children:"Signup"})})]})}),(0,l.jsx)("div",{className:"absolute right-10 text-white top-8 text-center special-signup_in_button ".concat(v),children:(0,l.jsx)(r.default,{href:"/profile",children:(0,l.jsx)(i.default,{src:n.Z,className:" bg-white h-[40px] w-[40px] rounded-full p-1.5"})})})]})}),(0,l.jsxs)("div",{className:" text-white bg-white bg-opacity-30 rounded-[35px] ml-[10%] mr-[10%] specical_profile",children:[(0,l.jsxs)("h1",{className:"text-white text-center text-[20px] mt-5 mb-5 font-bold",children:[(0,l.jsx)("span",{className:"font-bold span_g",children:"G"})," ",(0,l.jsx)("span",{className:"font-bold span_t",children:"T"})," ",(0,l.jsx)("span",{className:"font-bold span_s",children:"S"})," User Profile"]}),(0,l.jsxs)("div",{class:" ml-[5%] mr-[5%]",children:[(0,l.jsxs)("div",{className:" flex justify-center mt-8 mb-8",children:[(0,l.jsx)("h2",{children:"User Name "}),(0,l.jsx)("h1",{className:" font-bold ml-2 mr-2",children:"-"}),(0,l.jsxs)("h1",{children:[s," ",h]})]}),(0,l.jsxs)("div",{className:" flex justify-center mt-8 mb-8",children:[(0,l.jsx)("h2",{children:"Email "}),(0,l.jsx)("h1",{className:" font-bold ml-2 mr-2",children:"-"}),(0,l.jsx)("h1",{children:j})]}),(0,l.jsxs)("div",{className:" flex justify-center mt-8 mb-8",children:[(0,l.jsx)("h2",{children:"Mobile Number "}),(0,l.jsx)("h1",{className:" font-bold ml-2 mr-2",children:"-"}),(0,l.jsx)("h1",{children:x})]}),(0,l.jsxs)("div",{className:" flex justify-center mt-8 mb-8",children:[(0,l.jsx)("h2",{children:"Gender "}),(0,l.jsx)("h1",{className:" font-bold ml-2 mr-2",children:"-"}),(0,l.jsx)("h1",{children:g})]}),(0,l.jsxs)("div",{className:" flex justify-center mt-8 mb-8",children:[(0,l.jsx)("h2",{children:"NIC Number "}),(0,l.jsx)("h1",{className:" font-bold ml-2 mr-2",children:"-"}),(0,l.jsx)("h1",{children:g})]})]}),(0,l.jsxs)("div",{className:" flex justify-center ",children:[(0,l.jsx)("h1",{className:" font-bold text-white bg-blue-700 p-2 pl-5 pr-5 rounded-[15px] ml-auto mt-5 mb-5  mr-auto",children:"Edit Profile"}),(0,l.jsx)("h1",{className:" cursor-pointer font-bold text-white bg-blue-700 p-2 pl-5 pr-5 rounded-[15px] ml-auto mt-5 mb-5  mr-auto",onClick:()=>{localStorage.getItem("gts_token")?((0,o.yv)("User Logout...",{variant:"success"}),localStorage.removeItem("gts_token"),window.location.href="/"):((0,o.yv)("Redirecting to Login",{variant:"success"}),setTimeout(()=>{window.location.href="/sign-in"},100))},children:"Logout"})]})]})]})})}},9419:function(e,s){"use strict";s.Z={src:"/_next/static/media/logo.659d43d1.svg",height:233,width:262,blurWidth:0,blurHeight:0}},5040:function(e,s){"use strict";s.Z={src:"/_next/static/media/user.185ad265.svg",height:31,width:31,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[974,156,472,971,23,744],function(){return e(e.s=3254)}),_N_E=e.O()}]);