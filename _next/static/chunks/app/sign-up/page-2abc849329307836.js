(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{9379:function(e,t,s){Promise.resolve().then(s.bind(s,8669))},8669:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var a=s(7437),l=s(6648),i=s(9419),r=s(7138),n=s(9428);s(8074);var c=s(3027),d=s(3561),o=s(2265),m=s(8472),u=s(4156);function x(){let e="https://backend.gtsglobaltalentsolutions.com/public/api",[t,s]=(0,o.useState)(c.Z),[x,h]=(0,o.useState)(""),[f,p]=(0,o.useState)(!1),[b,v]=(0,o.useState)(),[g,w]=(0,o.useState)({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:"",gender:"",nic:""}),j=async()=>{if(g.phone&&"disabled:cursor-not-allowed"!=b){let t=await m.Z.post("".concat(e,"/verify_phone"),{for:"send",phone:g.phone});if(t.data.result){let e=t.data.result;localStorage.setItem("gtsvch",e)}P(),v("disabled:cursor-not-allowed"),setTimeout(()=>{v("")},6e4)}else(0,u.yv)(" Enter Your Phone Number",{variant:"info"})},N=e=>{w({...g,[e.target.name]:e.target.value})},y=async t=>{if(t.preventDefault(),f){if(g.password!==g.confirmPassword){(0,u.yv)("Passwords do not match",{variant:"error"});return}if(g.password.length<8){(0,u.yv)("Password must be 8 characters",{variant:"error"});return}try{if(!0==x){let t=await m.Z.post("".concat(e,"/signup"),{First_Name:g.firstName,Last_Name:g.lastName,email:g.email,phone:g.phone,status:x,password:g.password,password_confirmation:g.confirmPassword,Gender:g.gender,NIC_Number:g.nic});(0,u.yv)("Registration Successfully",{variant:"success"});let s=t.data.token;localStorage.setItem("gts_token",s),setTimeout(()=>{window.location.href="./"},2e3)}else(0,u.yv)("Verify Phone",{variant:"info"})}catch(e){(0,u.yv)("Duplicate Email or Password",{variant:"info"}),(0,u.yv)("Registration Failed",{variant:"error"})}}else(0,u.yv)("Please Accept Terms & Conditions",{variant:"info"})},[k,_]=(0,o.useState)(""),[C,S]=(0,o.useState)("hidden"),P=()=>{S("visible"),"blur"==k?_(""):_("blur")},[V,Z]=(0,o.useState)(""),I=async t=>{t.preventDefault();try{let t=localStorage.getItem("gtsvch"),a=await m.Z.post("".concat(e,"/verify"),{for:"check",code:V,gtscode:t});"Verified"==a.data.status?((0,u.yv)("Verification Success",{variant:"success"}),_(""),S("hidden"),h(!0),s(d.Z),localStorage.removeItem("gtsvch")):(0,u.yv)("Verification Failed",{variant:"error"})}catch(e){console.error("Verification failed:",e)}};return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"fixed left-0 right-0 top-0 bottom-0 -z-50 ",children:(0,a.jsx)(l.default,{src:n.default,className:" object-cover w-full h-full opacity-15"})}),(0,a.jsx)("div",{className:"".concat(C," z-10 flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 h-full mt-auto mb-auto"),children:(0,a.jsx)("div",{tabindex:"-1","aria-hidden":"true",className:" ",children:(0,a.jsx)("div",{class:" relative p-4 w-full max-w-md max-h-full",children:(0,a.jsxs)("div",{class:"relative bg-white bg-opacity-30 bg-blur rounded-lg shadow ",children:[(0,a.jsx)("h3",{class:"text-xl text-white dark:text-white text-center pt-5 ",children:"Verify Your Phone"}),(0,a.jsx)("div",{class:"p-4 md:p-5",children:(0,a.jsxs)("form",{class:"space-y-4",action:"#",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Verification Code"}),(0,a.jsx)("input",{type:"text",name:"code",id:"code",value:V,onChange:e=>Z(e.target.value),className:"border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"Verification Code",required:!0})]}),(0,a.jsx)("button",{type:"submit",class:"w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:I,children:"Verify"}),(0,a.jsxs)("div",{class:"text-sm font-medium text-white text-center",children:["Didn't Get Code? ",(0,a.jsx)("a",{href:"#",onClick:j,className:"".concat(v," text-blue-700 hover:underline dark:text-blue-700"),children:"Resend"})]})]})})]})})})}),(0,a.jsxs)("div",{className:"min-h-svh flex flex-col ".concat(k," mt-20 md:mt-0"),children:[(0,a.jsx)("nav",{className:"p-4  md:p-10 text-white",children:(0,a.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto",children:[(0,a.jsx)("div",{}),(0,a.jsx)(l.default,{src:i.Z,alt:"gts logo",className:"absolute h-40 w-52 left-3 top-[-14px] sm:left-1"}),(0,a.jsx)("div",{className:"flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"}),(0,a.jsx)("div",{className:"items-center justify-between hidden w-full md:flex md:w-auto md:order-1",id:"navbar-user",children:(0,a.jsxs)("h1",{className:"font-bold md:text-2xl lg:text-2xl sm:text-xl",children:[(0,a.jsx)("span",{className:"span_g",children:"G"}),"lobal ",(0,a.jsx)("span",{className:"span_t",children:"T"}),"alent ",(0,a.jsx)("span",{className:"span_s",children:"S"}),"olutions"]})})]})}),(0,a.jsx)("div",{class:"flex-grow flex flex-col justify-center items-center",children:(0,a.jsxs)("div",{className:"w-11/12 max-w-[800px] bg-white bg-opacity-25 p-5 rounded-[60px]",children:[(0,a.jsx)("h1",{className:"text-center text-[30px] font-bold text-white mb-5 mt-5",children:"Sign Up Now"}),(0,a.jsxs)("form",{onSubmit:y,children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center",children:[(0,a.jsx)("div",{className:"flex justify-end w-full",children:(0,a.jsx)("input",{type:"text",placeholder:"First Name",name:"firstName",value:g.firstName,onChange:N,className:"ml-3 mr-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"})}),(0,a.jsx)("div",{className:"flex justify-end w-full",children:(0,a.jsx)("input",{type:"text",placeholder:"Last Name",name:"lastName",value:g.lastName,onChange:N,className:"mr-3 ml-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"})})]}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center",children:[(0,a.jsx)("div",{className:"flex justify-end w-full",children:(0,a.jsx)("input",{type:"email",placeholder:"Email",name:"email",value:g.email,onChange:N,className:"ml-3 mr-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"})}),(0,a.jsxs)("div",{className:"flex justify-end w-full",children:[(0,a.jsx)("input",{type:"number",placeholder:"Phone",name:"phone",value:g.phone,onChange:N,className:"ml-3 mr-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"}),(0,a.jsx)(l.default,{src:t,unoptimized:!0,width:100,height:100,alt:"Verify",onClick:()=>{j()},className:"cursor-pointer absolute h-[47px] mt-4"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center",children:[(0,a.jsx)("div",{className:"flex justify-end w-full",children:(0,a.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:g.password,onChange:N,className:"ml-3 mr-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"})}),(0,a.jsx)("div",{className:"flex justify-end w-full",children:(0,a.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"confirmPassword",value:g.confirmPassword,onChange:N,className:"mr-3 ml-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"})})]}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center",children:[(0,a.jsx)("div",{className:"flex justify-end w-full",children:(0,a.jsxs)("select",{name:"gender",value:g.gender,onChange:N,className:"mr-3 ml-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white text-opacity-40",children:[(0,a.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Gender"}),(0,a.jsx)("option",{className:"text-black",value:"male",children:"Male"}),(0,a.jsx)("option",{className:"text-black",value:"female",children:"Female"}),(0,a.jsx)("option",{className:"text-black",value:"other",children:"Other"}),(0,a.jsx)("option",{className:"text-black",value:"prefer_not_to_say",children:"Prefer not to say"})]})}),(0,a.jsx)("div",{className:"flex justify-end w-full",children:(0,a.jsx)("input",{type:"text",placeholder:"NIC",name:"nic",value:g.nic,onChange:N,className:"mr-3 ml-3 p-3 rounded-[60px] mt-4 mb-4 w-full bg-[#d9d9d920] text-white"})})]}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:" flex justify-center",children:[(0,a.jsx)("input",{type:"checkbox",id:"vehicle1",className:"mr-2",name:"vehicle1",value:"Bike",checked:f,onChange:e=>{p(e.target.checked)}}),(0,a.jsxs)("p",{className:" text-white ",children:["I have read and Accept",(0,a.jsx)(r.default,{href:"/terms_and_conditions",className:" cursor-pointer",children:(0,a.jsx)("span",{className:"text-blue-500 cursor-pointer",children:" Terms & conditions"})})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)("h2",{className:" pt-2 pb-2 pl-10 pr-10 m-3 text-center text-white cursor-pointer bg-blue-700  rounded-[60px]",onClick:y,children:"Sign Up"})})]})]})})]}),(0,a.jsx)(r.default,{href:"https://gtsglobaltalentsolutions.com/",className:"mt-5 flex justify-center",children:(0,a.jsxs)("h1",{className:" text-white text-center mb-5 ",children:["\xa92024 ",(0,a.jsx)("span",{className:"",children:"Global Talent Solutions"}),". All Rights Reserved."]})})]})}},9428:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/background.895b43c3.svg",height:434,width:760,blurWidth:0,blurHeight:0}},3561:function(e,t){"use strict";t.Z={src:"/_next/static/media/green_verify.7c1dd5fe.svg",height:54,width:88,blurWidth:0,blurHeight:0}},9419:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.659d43d1.svg",height:233,width:262,blurWidth:0,blurHeight:0}},3027:function(e,t){"use strict";t.Z={src:"/_next/static/media/red_verify.1575b69f.svg",height:54,width:88,blurWidth:0,blurHeight:0}},8074:function(e,t){"use strict";t.Z={src:"/_next/static/media/search.6d7324a9.svg",height:31,width:31,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[30,156,734,971,23,744],function(){return e(e.s=9379)}),_N_E=e.O()}]);