(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90],{374:function(e,t,l){Promise.resolve().then(l.bind(l,5833))},5833:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return u}});var a=l(7437),s=l(9419),d=l(6648),i=l(7138),r=l(8472),n=l(4156),c=l(7346),x=l(5211),o=l(2265);function u(){let[e,t]=(0,o.useState)("hidden");(0,o.useEffect)(()=>{l()},[0]);let l=async()=>{try{let e=localStorage.getItem("gts_token"),l=await fetch("".concat("https://backend.gtsglobaltalentsolutions.com/public/api","/check_permission"),{method:"POST",headers:{Authorization:"Bearer ".concat(e)}});200==l.status?t("visible"):(t("hidden"),(0,n.yv)("You Dont Have Access to Do this",{variant:"error"}),setTimeout(()=>{(0,n.yv)("Redirecting to home...",{variant:"info"}),setTimeout(()=>{window.location.href="../"},2e3)},2e3))}catch(e){t("hidden"),(0,n.yv)("You Dont Have Access to Do this",{variant:"error"}),setTimeout(()=>{(0,n.yv)("Redirecting to home...",{variant:"info"}),setTimeout(()=>{window.location.href="../"},2e3)},2e3)}},[x,u]=(0,o.useState)({labels:["Gap","Solution"],datasets:[{data:[100,0],backgroundColor:["#FF1818","#FFFF15"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),[m,h]=(0,o.useState)({labels:["Gap","Solution"],datasets:[{data:[100,0],backgroundColor:["#FF1818","#FFFF15"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),[p,b]=(0,o.useState)({labels:["Gap","Solution"],datasets:[{data:[100,0],backgroundColor:["#FF1818","#FFFF15"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),[g,f]=(0,o.useState)({labels:["Gap","Solution"],datasets:[{data:[100,0],backgroundColor:["#FF1818","#FFFF15"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),[w,v]=(0,o.useState)(1),[N,j]=(0,o.useState)(""),[y,F]=(0,o.useState)(""),[S,C]=(0,o.useState)(""),[k,A]=(0,o.useState)(""),[B,_]=(0,o.useState)(""),[E,G]=(0,o.useState)(""),[R,T]=(0,o.useState)(""),[D,W]=(0,o.useState)(""),[I,Y]=(0,o.useState)(""),[z,M]=(0,o.useState)(""),[P,H]=(0,o.useState)(""),[O,$]=(0,o.useState)(""),[U,q]=(0,o.useState)(""),[L,Z]=(0,o.useState)(""),[J,K]=(0,o.useState)(""),[Q,V]=(0,o.useState)(""),[X,ee]=(0,o.useState)(""),[et,el]=(0,o.useState)(""),[ea,es]=(0,o.useState)(""),[ed,ei]=(0,o.useState)("Ready"),[er,en]=(0,o.useState)(""),[ec,ex]=(0,o.useState)("bg-blue-700"),[eo,eu]=(0,o.useState)("Ready"),[em,eh]=(0,o.useState)("bg-blue-700"),[ep,eb]=(0,o.useState)("Ready"),[eg,ef]=(0,o.useState)("bg-blue-700"),[ew,ev]=(0,o.useState)("Ready"),[eN,ej]=(0,o.useState)("bg-blue-700"),[ey,eF]=(0,o.useState)("Ready"),[eS,eC]=(0,o.useState)("bg-blue-700"),[ek,eA]=(0,o.useState)("Next"),[eB,e_]=(0,o.useState)({labels:["Solution","Gap"],datasets:[{data:[100,0],backgroundColor:["#FFFF15","#FF1818"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),eE=()=>{let e=12*B*E;A(e);let t=(e-R)/e*100;e_({labels:["Solution","Gap"],datasets:[{data:[R/e*100,t],backgroundColor:["#FFFF15","#FF1818"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),t<=20?(eh("bg-green-700"),eu("Good")):t<52?(eh("bg-yellow-700"),eu("Normal")):t>=50?(eh("bg-red-700"),eu("Risk")):(eh("bg-blue-700"),eu("Ready"))},eG=()=>{if(N<y)u({labels:["Gap","Solution"],datasets:[{data:[100,0],backgroundColor:["#FF1818","#FFFF15"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]});else{let e=N-y;C(e);let t=e/N*100;u({labels:["Solution","Gap"],datasets:[{data:[y/N*100,t],backgroundColor:["#FFFF15","#FF1818"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),t<=20?(ex("bg-green-700"),ei("Good")):t<52?(ex("bg-yellow-700"),ei("Normal")):t>=50?(ex("bg-red-700"),ei("Risk")):(ex("bg-blue-700"),ei("Ready"))}},eR=()=>{let e=U,t=1;for(;0!=e;)e-=1,t*=1.06;let l=O*t;Z(l);let a=(l-J)/l*100;f({labels:["Solution","Gap"],datasets:[{data:[J/l*100,a],backgroundColor:["#FFFF15","#FF1818"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),a<=20?(eC("bg-green-700"),eF("Good")):a<52?(eC("bg-yellow-700"),eF("Normal")):a>=50?(eC("bg-red-700"),eF("Risk")):(eC("bg-blue-700"),eF("Ready"))},eT=()=>{let e=X,t=1;for(;0!=e;)e-=1,t*=1.06;let l=t*Q;el(l),es(120*l);let a=(ea-er)/ea*100;b({labels:["Solution","Gap"],datasets:[{data:[er/ea*100,a],backgroundColor:["#FFFF15","#FF1818"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),a<=20?(ej("bg-green-700"),ev("Good")):a<52?(ej("bg-yellow-700"),ev("Normal")):a>=50?(ej("bg-red-700"),ev("Risk")):(ej("bg-blue-700"),ev("Ready"))},eD=()=>{let e=I,t=1;for(;0!=e;)e-=1,t*=1.06;let l=D*t;M(l);let a=(l-P)/l*100;h({labels:["Solution","Gap"],datasets:[{data:[P/l*100,a],backgroundColor:["#FFFF15","#FF1818"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),a<=20?(ef("bg-green-700"),eb("Good")):a<52?(ef("bg-yellow-700"),eb("Normal")):a>=50?(ef("bg-red-700"),eb("Risk")):(ef("bg-blue-700"),eb("Ready"))};(0,o.useEffect)(()=>{eR()},[O,U,L,J]),(0,o.useEffect)(()=>{eT()},[Q,X,et,ea,er]),(0,o.useEffect)(()=>{eG()},[N,y]),(0,o.useEffect)(()=>{eE()},[B,E,R]),(0,o.useEffect)(()=>{eD()},[I,z,P,D]);let eW={plugins:{legend:{labels:{color:"#FFFFFF"}}}},[eI,eY]=(0,o.useState)("visible"),[ez,eM]=(0,o.useState)("hidden"),[eP,eH]=(0,o.useState)("hidden"),[eO,e$]=(0,o.useState)(""),[eU,eq]=(0,o.useState)(""),[eL,eZ]=(0,o.useState)(""),[eJ,eK]=(0,o.useState)(""),[eQ,eV]=(0,o.useState)(""),[eX,e0]=(0,o.useState)(""),[e1,e2]=(0,o.useState)(""),[e5,e4]=(0,o.useState)(""),[e9,e3]=(0,o.useState)("");(0,o.useEffect)(()=>{let e=new Date(eQ);e3(new Date().getFullYear()-e.getFullYear())},[eQ]);let e6=async()=>{let e=new Date().getTime(),t=localStorage.getItem("gts_token");try{await r.Z.post("".concat("https://backend.gtsglobaltalentsolutions.com/public/api","/analyze_need"),{report_id:"".concat(e),u_id:eJ,dob:eQ,mon_income:eL,occupation:eU,mon_expenses:eO,h_tn:N,h_exs:y,h_gap:S,p_tn:k,p_exs:R,p_gap:k-R,e_tn:z,e_exs:P,e_gap:z-P,r_tn:ea,r_exs:er,r_gap:ea-er,s_tn:L,s_exs:J,s_gap:L-J},{headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}}),(0,n.yv)("Need Analyzed Successfully",{variant:"success"}),setTimeout(()=>{(0,n.yv)("Genataring the Report",{variant:"info"}),setTimeout(()=>{(0,n.yv)("Redirecting to Report...",{variant:"info"}),setTimeout(()=>{window.location.href="https://gtsglobaltalentsolutions.com/admin-panal/need-analyze"},2e3)},2e3)},2e3)}catch(e){(0,n.yv)(e.response.data.message,{variant:"error"})}};return(0,a.jsxs)("div",{className:"".concat(e),children:[(0,a.jsx)("nav",{className:"p-4 md:p-10 text-white",children:(0,a.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto",children:[(0,a.jsx)(d.default,{src:s.default,alt:"gts logo",className:"absolute h-40 w-52 left-3 top-[-14px] sm:left-1"}),(0,a.jsx)("div",{className:" absolute left-0 right-0 top-6 ",children:(0,a.jsx)("h1",{className:"text-center text-[25px] hidden lg:block font-bold text-white",children:"Plan Your Future Today"})}),(0,a.jsx)("span",{className:"bg-opacity-30 rounded-3xl pt-3 pb-3 absolute right-0 md:right-10 lg:right-10 top-8 sm:pt-2 sm:pb-2 sm:right-2 sm:top-9",children:(0,a.jsx)(i.default,{href:"/sign-in",children:(0,a.jsx)("span",{className:"p-3 rounded-3xl ml-1 mt-1 mb-1 mr-2 pr-5 sm:p-2 sm:pl-3 sm:mr-1 text-white",children:"Hi Admin"})})})]})}),(0,a.jsxs)("div",{className:"duration-500 ease-in-out bg-white bg-opacity-20 rounded-[25px] p-5 m-10 ".concat(eI," "),children:[(0,a.jsxs)("div",{className:"rounded-[25px] mx-[5%] mt-20",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md ",children:"Personal Details"}),(0,a.jsxs)("div",{className:" p-4  rounded-[25px] bg-opacity-10",children:[(0,a.jsxs)("div",{className:"mx-3 flex flex-wrap md:flex-nowrap justify-center gap-x-4 gap-y-4",children:[(0,a.jsxs)("div",{className:"relative mb-4 w-full ",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"User Email"}),(0,a.jsx)("input",{type:"email",placeholder:"Enter Email",onChange:e=>eK(e.target.value),className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4 w-full ",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"User Age"}),(0,a.jsx)("input",{type:"number",value:e9,placeholder:"User Age",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]})]}),(0,a.jsxs)("div",{className:"mx-3 flex flex-wrap md:flex-nowrap justify-center gap-x-4 gap-y-4",children:[(0,a.jsxs)("div",{className:"relative mb-4 w-full ",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Birthday"}),(0,a.jsx)("input",{type:"date",placeholder:"Date of Birth",onChange:e=>eV(e.target.value),className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4 w-full ",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Monthly Income"}),(0,a.jsx)("input",{type:"number",onChange:e=>eZ(e.target.value),placeholder:"Monthly Income",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]})]}),(0,a.jsxs)("div",{className:"mx-3 flex flex-wrap md:flex-nowrap justify-center gap-x-4 gap-y-4",children:[(0,a.jsxs)("div",{className:"relative mb-4 w-full ",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Occupation"}),(0,a.jsx)("input",{type:"text",placeholder:"Occupation",onChange:e=>eq(e.target.value),className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4 w-full ",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Monthly Expenses"}),(0,a.jsx)("input",{type:"number",onChange:e=>e$(e.target.value),placeholder:"Monthly Expenses",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]})]})]})]}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10",children:(0,a.jsxs)("div",{className:"flex flex-wrap justify-center gap-6 w-full",children:[(0,a.jsxs)("div",{className:"p-5 rounded-[25px] w-full lg:w-[60%]",children:[(0,a.jsx)("h1",{className:"text-left text-white text-lg sm:text-xl",children:"Health"}),(0,a.jsx)("div",{className:" mt-5 mb-5 rounded-[25px] bg-opacity-25",children:(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Total Need"}),(0,a.jsx)("input",{type:"number",placeholder:"Total Need",value:N,onChange:e=>j(Number(e.target.value)),className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Existing Solution"}),(0,a.jsx)("input",{type:"number",value:y,onChange:e=>F(Number(e.target.value)),placeholder:"Existing Solution",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Total Need"}),(0,a.jsx)("input",{type:"number",placeholder:"Total Need",value:S,className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]})]})})]}),(0,a.jsx)("div",{className:"w-full sm:w-[45%] lg:w-[30%] max-w-[250px] my-auto",children:(0,a.jsxs)("div",{className:"py-6 relative flex items-center justify-center",children:[(0,a.jsx)("div",{className:"bg-[#22DF4B] mt-8 h-[228px] -z-20 w-[228px] absolute rounded-full"}),(0,a.jsx)(c.$I,{data:x,options:eW}),(0,a.jsx)("div",{className:"".concat(ec," h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"),children:(0,a.jsx)("h1",{className:"text-white text-center leading-none mt-[74px] font-bold",children:ed})})]})})]})})]}),(0,a.jsxs)("div",{className:"duration-500 ease-in-out bg-white bg-opacity-20 p-5 m-10 rounded-[35px] ".concat(ez),children:[(0,a.jsx)("div",{className:"flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10",children:(0,a.jsxs)("div",{className:"flex flex-wrap justify-center gap-6 w-full  items-center",children:[(0,a.jsxs)("div",{className:"p-5 rounded-[25px] w-full sm:w-[45%] lg:w-[70%]",children:[(0,a.jsx)("h1",{className:"text-left text-white text-lg sm:text-xl",children:"Protection"}),(0,a.jsxs)("div",{className:"rounded-[25px] bg-opacity-25 flex justify-center mt-5",children:[(0,a.jsxs)("div",{className:"mx-3 w-full",children:[(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Monthly Salary"}),(0,a.jsx)("input",{type:"number",placeholder:"Monthly Salary",onChange:e=>{_(Number(e.target.value)),eE()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Total Need"}),(0,a.jsx)("input",{type:"number",value:k,placeholder:"Total Need",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]})]}),(0,a.jsxs)("div",{className:"mx-3 w-full",children:[(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Interest Rate"}),(0,a.jsx)("input",{type:"number",placeholder:"Interest Rate",onChange:e=>{G(Number(e.target.value)),eE()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Existing Solution"}),(0,a.jsx)("input",{type:"number",onChange:e=>{T(Number(e.target.value)),eE()},placeholder:"Existing Solution",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]})]})]})]}),(0,a.jsx)("div",{className:"w-full sm:w-[45%] lg:w-[30%] max-w-[250px] ",children:(0,a.jsxs)("div",{className:"py-6 relative flex items-center justify-center",children:[(0,a.jsx)("div",{className:"bg-[#22DF4B] mt-8 h-[228px] -z-20 w-[228px] absolute rounded-full"}),(0,a.jsx)(c.$I,{data:eB,options:eW}),(0,a.jsx)("div",{className:"".concat(em," h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"),children:(0,a.jsx)("h1",{className:"text-white text-center leading-none mt-[74px] font-bold",children:eo})})]})})]})}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10",children:(0,a.jsxs)("div",{className:"flex items-center flex-wrap justify-center gap-6 w-full",children:[(0,a.jsxs)("div",{className:"p-5 rounded-[25px] w-full sm:w-[45%] lg:w-[70%]",children:[(0,a.jsx)("h1",{className:"text-left text-white text-lg sm:text-xl",children:"Education"}),(0,a.jsxs)("div",{className:"rounded-[25px] bg-opacity-25 flex justify-center mt-5",children:[(0,a.jsxs)("div",{className:"mx-3 w-full",children:[(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Total Need"}),(0,a.jsx)("input",{type:"number",placeholder:"Total Need",onChange:e=>{W(Number(e.target.value)),eD()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Existing Solution"}),(0,a.jsx)("input",{type:"number",onChange:e=>{H(Number(e.target.value)),eD()},placeholder:"Existing Solution",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]})]}),(0,a.jsxs)("div",{className:"mx-3 w-full",children:[(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Year Group"}),(0,a.jsx)("input",{type:"number",placeholder:"Year Group",onChange:e=>{Y(Number(e.target.value)),eD()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Actual Need"}),(0,a.jsx)("input",{type:"number",value:z,placeholder:"Actual Need",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]})]})]})]}),(0,a.jsx)("div",{className:"w-full sm:w-[45%] lg:w-[30%] max-w-[250px]   ",children:(0,a.jsxs)("div",{className:"py-6 relative flex items-center justify-center",children:[(0,a.jsx)("div",{className:"bg-[#22DF4B] mt-8 h-[228px] -z-20 w-[228px] absolute rounded-full"}),(0,a.jsx)(c.$I,{data:m,options:eW}),(0,a.jsx)("div",{className:" ".concat(eg," h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"),children:(0,a.jsx)("h1",{className:"text-white text-center leading-none mt-[74px] font-bold",children:ep})})]})})]})})]}),(0,a.jsxs)("div",{className:" duration-500 ease-in-out bg-white bg-opacity-20 p-5 m-10 rounded-[35px] ".concat(eP),children:[(0,a.jsx)("div",{className:"flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10",children:(0,a.jsxs)("div",{className:"flex flex-wrap justify-center gap-6 w-full",children:[(0,a.jsxs)("div",{className:"rounded-[25px] p-5  w-full sm:w-[45%] lg:w-[70%]",children:[(0,a.jsx)("h1",{className:"text-left text-white text-lg sm:text-xl pt-5 pl-12",children:"Retirement"}),(0,a.jsxs)("div",{className:" rounded-[25px] bg-opacity-25 flex flex-wrap  p-5 m-5 justify-center",children:[(0,a.jsxs)("div",{className:"mx-3 w-full sm:w-1/3",children:[(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Monthly Salary"}),(0,a.jsx)("input",{type:"number",placeholder:"Monthly Salary",onChange:e=>{V(Number(e.target.value)),eT()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Actual Salary"}),(0,a.jsx)("input",{type:"number",value:et,placeholder:"Actual Salary",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]})]}),(0,a.jsxs)("div",{className:"mx-3 w-full sm:w-1/3",children:[(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Year Gap"}),(0,a.jsx)("input",{type:"number",placeholder:"Year Gap",onChange:e=>{ee(Number(e.target.value)),eT()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Exsiting Solution"}),(0,a.jsx)("input",{type:"number",placeholder:"Exsiting Solution",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white",onChange:e=>{en(e.target.value)}})]})]}),(0,a.jsx)("div",{className:"mx-3 w-full sm:w-1/3 md:w-[70%]",children:(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Total Need"}),(0,a.jsx)("input",{type:"text",placeholder:"Total Need",value:ea,className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]})})]})]}),(0,a.jsx)("div",{className:"w-full sm:w-[45%] lg:w-[30%] max-w-[250px] my-auto",children:(0,a.jsxs)("div",{className:"py-6 relative flex justify-center items-center ",children:[(0,a.jsx)("div",{className:"bg-[#22DF4B] mt-8 h-[228px] -z-20 w-[228px] absolute rounded-full"}),(0,a.jsx)(c.$I,{data:p,options:eW}),(0,a.jsx)("div",{className:"".concat(eN," h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"),children:(0,a.jsx)("h1",{className:"text-white text-center leading-none mt-[74px] font-bold",children:ew})})]})})]})}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10",children:(0,a.jsxs)("div",{className:"flex flex-wrap justify-center gap-6 w-full",children:[(0,a.jsxs)("div",{className:"p-5 rounded-[25px] w-full sm:w-[45%] lg:w-[60%]",children:[(0,a.jsx)("h1",{className:"text-left text-white text-lg sm:text-xl",children:"Savings"}),(0,a.jsxs)("div",{className:" p-5 mt-5 mb-5 rounded-[25px] bg-opacity-25 flex justify-center",children:[(0,a.jsxs)("div",{className:"mx-3 w-full",children:[(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Expected Saving"}),(0,a.jsx)("input",{type:"number",placeholder:"Expected Saving",onChange:e=>{$(Number(e.target.value)),eR()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Actual Savings"}),(0,a.jsx)("input",{type:"number",value:L,placeholder:"Actual Savings",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]})]}),(0,a.jsxs)("div",{className:"mx-3 w-full",children:[(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Year Gap"}),(0,a.jsx)("input",{type:"number",placeholder:"Year Gap",onChange:e=>{q(Number(e.target.value)),eR()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]}),(0,a.jsxs)("div",{className:"relative mb-4",children:[(0,a.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"Existing Savings"}),(0,a.jsx)("input",{type:"number",onChange:e=>{K(Number(e.target.value)),eR()},placeholder:"Existing Savings",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})]})]})]})]}),(0,a.jsx)("div",{className:"w-full sm:w-[45%] lg:w-[30%] max-w-[250px] my-auto",children:(0,a.jsxs)("div",{className:"py-6 relative flex justify-center items-center ",children:[(0,a.jsx)("div",{className:"bg-[#22DF4B] mt-8 h-[228px] -z-20 w-[228px] absolute rounded-full"}),(0,a.jsx)(c.$I,{data:g,options:eW}),(0,a.jsx)("div",{className:"".concat(eS," h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"),children:(0,a.jsx)("h1",{className:"text-white text-center leading-none mt-[74px] font-bold",children:ey})})]})})]})})]}),(0,a.jsxs)("div",{className:"flex justify-between ml-[7%] p-5 mr-[7%]",children:[(0,a.jsx)("h2",{className:"bg-blue-600 text-white font-bold text-center pt-2 pb-2 pl-5 pr-5 rounded-[25px]  cursor-pointer hover:scale-110 duration-300 ",onClick:()=>{if(w>=2){let e=w-1;v(e),eY("hidden"),eM("hidden"),eH("hidden"),1==e?eY("visible"):2==e?eM("visible"):3==e&&eH("visible")}else(0,n.yv)("This is The First Page",{variant:"info"});eA("Next")},children:"Back"}),(0,a.jsx)("h2",{className:"bg-blue-600 text-white font-bold text-center pt-2 pb-2 pl-5 pr-5 rounded-[25px]  cursor-pointer hover:scale-110 duration-300 ",onClick:()=>{if(w<=2&&"Submit"!=ek){let e=w+1;v(e),eY("hidden"),eM("hidden"),eH("hidden"),1==e?eY("visible"):2==e?eM("visible"):3==e&&(eH("visible"),eA("Submit"))}"Submit"==ek&&e6()},children:ek})]})]})}x.kL.register(x.qi,x.u,x.De)},9419:function(e,t,l){"use strict";l.r(t),t.default={src:"/_next/static/media/logo.659d43d1.svg",height:233,width:262,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[674,30,156,734,746,971,23,744],function(){return e(e.s=374)}),_N_E=e.O()}]);