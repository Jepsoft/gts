(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[253],{9238:function(e,t,s){Promise.resolve().then(s.bind(s,4192))},4192:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var l=s(7437),a=s(6648),i=s(9419),r=s(7138),c={src:"/_next/static/media/email.58b8d49e.svg",height:24,width:24,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/password.c79ef594.svg",height:24,width:24,blurWidth:0,blurHeight:0},n={src:"/_next/static/media/google.56bb687c.svg",height:23,width:23,blurWidth:0,blurHeight:0},o=s(2265),h=s(9428),x=s(8472),m=s(4156);function u(){let[e,t]=(0,o.useState)(""),[s,u]=(0,o.useState)(""),[f,p]=(0,o.useState)("password"),b=async t=>{t.preventDefault();try{var l;let t=await x.Z.post("".concat("https://backend.gtsglobaltalentsolutions.com/public/api","/login"),{email:e,password:s}),a=t.data.token;localStorage.setItem("gts_token",a),(0,m.yv)(null==t?void 0:null===(l=t.data)||void 0===l?void 0:l.message,{variant:"success"}),window.location.href="./"}catch(e){(0,m.yv)("invalid username or password",{variant:"error"})}};return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"fixed left-0 right-0 top-0 bottom-0 -z-50 ",children:(0,l.jsx)(a.default,{src:h.default,className:" object-cover w-full h-full opacity-15"})}),(0,l.jsxs)("div",{className:" min-h-svh flex flex-col",children:[(0,l.jsx)("nav",{className:"p-4  md:p-10 text-white",children:(0,l.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto",children:[(0,l.jsx)("div",{}),(0,l.jsx)(r.default,{href:"./",children:(0,l.jsx)(a.default,{src:i.Z,alt:"gts logo",className:"absolute h-40 w-52 left-3 top-[-14px] sm:left-1"})}),(0,l.jsx)("div",{className:"flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse",children:(0,l.jsx)("div",{className:"z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600",id:"user-dropdown"})}),(0,l.jsx)("div",{className:" absolute left-0 right-0 top-10 flex justify-center",children:(0,l.jsx)("div",{className:"items-center justify-between hidden w-full md:flex md:w-auto md:order-1",id:"navbar-user",children:(0,l.jsxs)("h1",{className:"font-bold md:text-2xl lg:text-2xl sm:text-xl",children:[(0,l.jsx)("span",{className:"span_g",children:"G"}),"lobal ",(0,l.jsx)("span",{className:"span_t",children:"T"}),"alent ",(0,l.jsx)("span",{className:"span_s",children:"S"}),"olutions"]})})})]})}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{className:"flex-grow flex flex-col justify-center items-center mt-28 lg:mt-0 md:mt-",children:(0,l.jsx)("div",{className:"w-[80%] md:w-[50%] lg:w-[30%] h-[80vh] flex items-center justify-center ",children:(0,l.jsxs)("div",{className:"w-full bg-white bg-opacity-25 p-5 rounded-[35px]",children:[(0,l.jsx)("h1",{className:"text-center text-3xl font-bold text-white mb-10 mt-10",children:"Sign In Now"}),(0,l.jsx)("form",{onSubmit:b,className:"w-full",children:(0,l.jsxs)("div",{className:"ml-3 mr-3",children:[(0,l.jsxs)("div",{className:"relative mb-4",children:[(0,l.jsx)("input",{type:"email",placeholder:"Email",value:e,onChange:e=>t(e.target.value),className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"}),(0,l.jsx)(a.default,{src:c,alt:"Email icon",className:"absolute right-3 top-3 h-6 w-6"})]}),(0,l.jsx)("br",{}),(0,l.jsxs)("div",{className:"relative mb-4",children:[(0,l.jsx)("input",{type:"".concat(f),placeholder:"Password",value:s,onChange:e=>u(e.target.value),className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"}),(0,l.jsx)(a.default,{src:d,alt:"Password icon",className:"absolute right-3 top-3 h-6 w-6"})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between ml-[2%]",children:[(0,l.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,l.jsx)("input",{type:"checkbox",id:"show-password",onClick:()=>{"password"==f?p("text"):p("password")},className:"cursor-pointer"}),(0,l.jsx)("label",{htmlFor:"show-password",className:"cursor-pointer text-white text-sm",children:"Show Password"})]}),(0,l.jsx)("div",{children:(0,l.jsx)(r.default,{href:"/forgot-password",className:"cursor-pointer text-white text-sm",children:"Forgot Password?"})})]}),(0,l.jsx)("h1",{className:"text-center text-white font-bold mt-6",children:"OR"}),(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsxs)("div",{className:"cursor-pointer flex justify-center bg-white bg-opacity-30 rounded-[60px] p-1 mt-4 mb-4",children:[(0,l.jsx)(a.default,{src:n,className:"ml-2 mt-2  h-6",alt:"Google icon"}),(0,l.jsx)("h1",{className:"text-white ml-3 mr-3 mt-2 mb-2",children:"Continue With Google"})]})}),(0,l.jsx)(r.default,{href:"./sign-up",children:(0,l.jsxs)("h1",{className:"cursor-pointer text-center mt-4 mb-2 text-white",children:["Don't Have an Account? ",(0,l.jsx)("span",{className:"font-bold",children:"Sign Up"})]})}),(0,l.jsx)("button",{type:"submit",className:"w-full bg-blue-600 font-bold text-white text-lg py-2 rounded-[60px] cursor-pointer mt-4 mb-3",children:"Sign In"})]})})]})})})]})]})}},9428:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/background.895b43c3.svg",height:434,width:760,blurWidth:0,blurHeight:0}},9419:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.659d43d1.svg",height:233,width:262,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[30,156,734,971,23,744],function(){return e(e.s=9238)}),_N_E=e.O()}]);