(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90],{374:function(e,t,a){Promise.resolve().then(a.bind(a,5833))},5833:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var l=a(7437),s=a(9419),d=a(6648),r=a(7138),i=a(8472),n=a(4156),o=a(7346),c=a(5211),u=a(2265);function x(){let[e,t]=(0,u.useState)("hidden");(0,u.useEffect)(()=>{a()},[0]);let a=async()=>{try{let e=localStorage.getItem("gts_token"),a=await fetch("".concat("https://backend.gtsglobaltalentsolutions.com/public/api","/check_permission"),{method:"POST",headers:{Authorization:"Bearer ".concat(e)}});200==a.status?t("visible"):(t("hidden"),(0,n.yv)("You Dont Have Access to Do this",{variant:"error"}),setTimeout(()=>{(0,n.yv)("Redirecting to home...",{variant:"info"}),setTimeout(()=>{window.location.href="../"},2e3)},2e3))}catch(e){t("hidden"),(0,n.yv)("You Dont Have Access to Do this",{variant:"error"}),setTimeout(()=>{(0,n.yv)("Redirecting to home...",{variant:"info"}),setTimeout(()=>{window.location.href="../"},2e3)},2e3)}},[c,x]=(0,u.useState)({labels:["Gap","Solution"],datasets:[{data:[100,0],backgroundColor:["#FF1818","#FFFF15"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),[m,p]=(0,u.useState)({labels:["Gap","Solution"],datasets:[{data:[100,0],backgroundColor:["#FF1818","#FFFF15"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),[h,b]=(0,u.useState)({labels:["Gap","Solution"],datasets:[{data:[100,0],backgroundColor:["#FF1818","#FFFF15"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),[g,v]=(0,u.useState)({labels:["Gap","Solution"],datasets:[{data:[100,0],backgroundColor:["#FF1818","#FFFF15"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),[f,w]=(0,u.useState)(1),[N,j]=(0,u.useState)(""),[y,F]=(0,u.useState)(""),[S,C]=(0,u.useState)(""),[k,A]=(0,u.useState)(""),[_,B]=(0,u.useState)(""),[R,E]=(0,u.useState)(""),[G,T]=(0,u.useState)(""),[W,I]=(0,u.useState)(""),[D,P]=(0,u.useState)(""),[Y,H]=(0,u.useState)(""),[$,z]=(0,u.useState)(""),[M,O]=(0,u.useState)(""),[q,L]=(0,u.useState)(""),[U,Z]=(0,u.useState)(""),[J,K]=(0,u.useState)(""),[Q,V]=(0,u.useState)(""),[X,ee]=(0,u.useState)(""),[et,ea]=(0,u.useState)(""),[el,es]=(0,u.useState)(""),[ed,er]=(0,u.useState)("Ready"),[ei,en]=(0,u.useState)(""),[eo,ec]=(0,u.useState)("bg-blue-700"),[eu,ex]=(0,u.useState)("Ready"),[em,ep]=(0,u.useState)("bg-blue-700"),[eh,eb]=(0,u.useState)("Ready"),[eg,ev]=(0,u.useState)("bg-blue-700"),[ef,ew]=(0,u.useState)("Ready"),[eN,ej]=(0,u.useState)("bg-blue-700"),[ey,eF]=(0,u.useState)("Ready"),[eS,eC]=(0,u.useState)("bg-blue-700"),[ek,eA]=(0,u.useState)("Next"),[e_,eB]=(0,u.useState)({labels:["Solution","Gap"],datasets:[{data:[100,0],backgroundColor:["#FFFF15","#FF1818"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),eR=()=>{let e=12*_*R;A(e);let t=(e-G)/e*100;eB({labels:["Solution","Gap"],datasets:[{data:[G/e*100,t],backgroundColor:["#FFFF15","#FF1818"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),t<=20?(ep("bg-green-700"),ex("Good")):t<52?(ep("bg-yellow-700"),ex("Normal")):t>=50?(ep("bg-red-700"),ex("Risk")):(ep("bg-blue-700"),ex("Ready"))},eE=()=>{if(N<y)x({labels:["Gap","Solution"],datasets:[{data:[100,0],backgroundColor:["#FF1818","#FFFF15"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]});else{let e=N-y;C(e);let t=e/N*100;x({labels:["Solution","Gap"],datasets:[{data:[y/N*100,t],backgroundColor:["#FFFF15","#FF1818"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),t<=20?(ec("bg-green-700"),er("Good")):t<52?(ec("bg-yellow-700"),er("Normal")):t>=50?(ec("bg-red-700"),er("Risk")):(ec("bg-blue-700"),er("Ready"))}},eG=()=>{let e=q,t=1;for(;0!=e;)e-=1,t*=1.06;let a=M*t;Z(a);let l=(a-J)/a*100;v({labels:["Solution","Gap"],datasets:[{data:[J/a*100,l],backgroundColor:["#FFFF15","#FF1818"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),l<=20?(eC("bg-green-700"),eF("Good")):l<52?(eC("bg-yellow-700"),eF("Normal")):l>=50?(eC("bg-red-700"),eF("Risk")):(eC("bg-blue-700"),eF("Ready"))},eT=()=>{let e=X,t=1;for(;0!=e;)e-=1,t*=1.06;let a=t*Q;ea(a),es(120*a);let l=(el-ei)/el*100;b({labels:["Solution","Gap"],datasets:[{data:[ei/el*100,l],backgroundColor:["#FFFF15","#FF1818"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),l<=20?(ej("bg-green-700"),ew("Good")):l<52?(ej("bg-yellow-700"),ew("Normal")):l>=50?(ej("bg-red-700"),ew("Risk")):(ej("bg-blue-700"),ew("Ready"))},eW=()=>{let e=D,t=1;for(;0!=e;)e-=1,t*=1.06;let a=W*t;H(a);let l=(a-$)/a*100;p({labels:["Solution","Gap"],datasets:[{data:[$/a*100,l],backgroundColor:["#FFFF15","#FF1818"],hoverBackgroundColor:["#45B649","#FFAA42"],borderWidth:1}]}),l<=20?(ev("bg-green-700"),eb("Good")):l<52?(ev("bg-yellow-700"),eb("Normal")):l>=50?(ev("bg-red-700"),eb("Risk")):(ev("bg-blue-700"),eb("Ready"))};(0,u.useEffect)(()=>{eG()},[M,q,U,J]),(0,u.useEffect)(()=>{eT()},[Q,X,et,el,ei]),(0,u.useEffect)(()=>{eE()},[N,y]),(0,u.useEffect)(()=>{eR()},[_,R,G]),(0,u.useEffect)(()=>{eW()},[D,Y,$,W]);let eI={plugins:{legend:{labels:{color:"#FFFFFF"}}}},[eD,eP]=(0,u.useState)("visible"),[eY,eH]=(0,u.useState)("hidden"),[e$,ez]=(0,u.useState)("hidden"),[eM,eO]=(0,u.useState)(""),[eq,eL]=(0,u.useState)(""),[eU,eZ]=(0,u.useState)(""),[eJ,eK]=(0,u.useState)(""),[eQ,eV]=(0,u.useState)(""),[eX,e0]=(0,u.useState)(""),[e1,e5]=(0,u.useState)(""),[e4,e2]=(0,u.useState)(""),e9=async()=>{let e=new Date().getTime(),t=localStorage.getItem("gts_token");try{await i.Z.post("".concat("https://backend.gtsglobaltalentsolutions.com/public/api","/analyze_need"),{report_id:"".concat(e),u_id:eJ,dob:eQ,mon_income:eU,occupation:eq,mon_expenses:eM,h_tn:N,h_exs:y,h_gap:S,p_tn:k,p_exs:G,p_gap:k-G,e_tn:Y,e_exs:$,e_gap:Y-$,r_tn:el,r_exs:ei,r_gap:el-ei,s_tn:U,s_exs:J,s_gap:U-J},{headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}}),(0,n.yv)("Need Analyzed Successfully",{variant:"success"}),setTimeout(()=>{(0,n.yv)("Genataring the Report",{variant:"info"}),setTimeout(()=>{(0,n.yv)("Redirecting to Report...",{variant:"info"}),setTimeout(()=>{window.location.href="/report"},2e3)},2e3)},2e3)}catch(e){(0,n.yv)(e.response.data.message,{variant:"error"})}};return(0,l.jsxs)("div",{className:"".concat(e),children:[(0,l.jsx)("nav",{className:"p-4 md:p-10 text-white",children:(0,l.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto",children:[(0,l.jsx)(d.default,{src:s.default,alt:"gts logo",className:"absolute h-40 w-52 left-3 top-[-14px] sm:left-1"}),(0,l.jsx)("div",{className:" absolute left-0 right-0 top-6 ",children:(0,l.jsx)("h1",{className:"text-center text-[25px] hidden lg:block font-bold text-white",children:"Plan Your Future Today"})}),(0,l.jsx)("span",{className:"bg-opacity-30 rounded-3xl pt-3 pb-3 absolute right-0 md:right-10 lg:right-10 top-8 sm:pt-2 sm:pb-2 sm:right-2 sm:top-9",children:(0,l.jsx)(r.default,{href:"/sign-in",children:(0,l.jsx)("span",{className:"p-3 rounded-3xl ml-1 mt-1 mb-1 mr-2 pr-5 sm:p-2 sm:pl-3 sm:mr-1 text-white",children:"Hi Admin"})})})]})}),(0,l.jsxs)("div",{className:"duration-500 ease-in-out ".concat(eD," "),children:[(0,l.jsxs)("div",{className:"rounded-[25px] mx-[5%] mt-20",children:[(0,l.jsx)("h1",{className:"text-left text-white text-md mb-1",children:"User Email"}),(0,l.jsx)("div",{className:"relative mb-4 w-full ",children:(0,l.jsx)("input",{type:"email",placeholder:"Enter Email",onChange:e=>eK(e.target.value),className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("h1",{className:"text-left text-white text-md ",children:"Personal Details"}),(0,l.jsxs)("div",{className:"bg-white p-4 sm:p-6 lg:p-10 rounded-[25px] bg-opacity-10",children:[(0,l.jsxs)("div",{className:"mx-3 flex flex-wrap md:flex-nowrap justify-center gap-x-4 gap-y-4",children:[(0,l.jsx)("div",{className:"relative mb-4 w-full ",children:(0,l.jsx)("input",{type:"date",placeholder:"Date of Birth",onChange:e=>eV(e.target.value),className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("div",{className:"relative mb-4 w-full ",children:(0,l.jsx)("input",{type:"number",onChange:e=>eZ(e.target.value),placeholder:"Monthly Income",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})})]}),(0,l.jsxs)("div",{className:"mx-3 flex flex-wrap md:flex-nowrap justify-center gap-x-4 gap-y-4",children:[(0,l.jsx)("div",{className:"relative mb-4 w-full ",children:(0,l.jsx)("input",{type:"text",placeholder:"Occupation",onChange:e=>eL(e.target.value),className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("div",{className:"relative mb-4 w-full ",children:(0,l.jsx)("input",{type:"number",onChange:e=>eO(e.target.value),placeholder:"Monthly Expenses",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})})]})]})]}),(0,l.jsx)("div",{className:"flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10",children:(0,l.jsxs)("div",{className:"flex flex-wrap justify-center gap-6 w-full",children:[(0,l.jsxs)("div",{className:"p-5 rounded-[25px] w-full sm:w-[45%] lg:w-[60%]",children:[(0,l.jsx)("h1",{className:"text-left text-white text-lg sm:text-xl",children:"Health"}),(0,l.jsx)("div",{className:"bg-white p-6 sm:p-8 rounded-[25px] bg-opacity-25",children:(0,l.jsxs)("div",{className:"mx-3",children:[(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",placeholder:"Total Need",value:N,onChange:e=>j(Number(e.target.value)),className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",value:y,onChange:e=>F(Number(e.target.value)),placeholder:"Existing Solution",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",placeholder:"Total Need",value:S,className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})})]})})]}),(0,l.jsx)("div",{className:"w-full sm:w-[45%] lg:w-[30%] max-w-[250px] ",children:(0,l.jsxs)("div",{className:"py-6 relative",children:[(0,l.jsx)(o.$I,{data:c,options:eI}),(0,l.jsx)("div",{className:"".concat(eo," h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"),children:(0,l.jsx)("h1",{className:"text-white text-center leading-none mt-[74px] font-bold",children:ed})})]})})]})})]}),(0,l.jsxs)("div",{className:"duration-500 ease-in-out ".concat(eY),children:[(0,l.jsx)("div",{className:"flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10",children:(0,l.jsxs)("div",{className:"flex flex-wrap justify-center gap-6 w-full",children:[(0,l.jsxs)("div",{className:"p-5 rounded-[25px] w-full sm:w-[45%] lg:w-[60%]",children:[(0,l.jsx)("h1",{className:"text-left text-white text-lg sm:text-xl",children:"Protection"}),(0,l.jsxs)("div",{className:"bg-white p-6 sm:p-8 rounded-[25px] bg-opacity-25 flex justify-center",children:[(0,l.jsxs)("div",{className:"mx-3 w-full",children:[(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",placeholder:"Monthly Salary",onChange:e=>{B(Number(e.target.value)),eR()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",value:k,placeholder:"Total Need",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})})]}),(0,l.jsxs)("div",{className:"mx-3 w-full",children:[(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",placeholder:"Interest Rate",onChange:e=>{E(Number(e.target.value)),eR()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",onChange:e=>{T(Number(e.target.value)),eR()},placeholder:"Existing Solution",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})})]})]})]}),(0,l.jsx)("div",{className:"w-full sm:w-[45%] lg:w-[30%] max-w-[250px] ",children:(0,l.jsxs)("div",{className:"py-6 relative",children:[(0,l.jsx)(o.$I,{data:e_,options:eI}),(0,l.jsx)("div",{className:"".concat(em," h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"),children:(0,l.jsx)("h1",{className:"text-white text-center leading-none mt-[74px] font-bold",children:eu})})]})})]})}),(0,l.jsx)("div",{className:"flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10",children:(0,l.jsxs)("div",{className:"flex flex-wrap justify-center gap-6 w-full",children:[(0,l.jsxs)("div",{className:"p-5 rounded-[25px] w-full sm:w-[45%] lg:w-[60%]",children:[(0,l.jsx)("h1",{className:"text-left text-white text-lg sm:text-xl",children:"Education"}),(0,l.jsxs)("div",{className:"bg-white p-6 sm:p-8 rounded-[25px] bg-opacity-25 flex justify-center",children:[(0,l.jsxs)("div",{className:"mx-3 w-full",children:[(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",placeholder:"Total Need",onChange:e=>{I(Number(e.target.value)),eW()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",onChange:e=>{z(Number(e.target.value)),eW()},placeholder:"Existing Solution",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})})]}),(0,l.jsxs)("div",{className:"mx-3 w-full",children:[(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",placeholder:"Year Group",onChange:e=>{P(Number(e.target.value)),eW()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",value:Y,placeholder:"Actual Need",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})})]})]})]}),(0,l.jsx)("div",{className:"w-full sm:w-[45%] lg:w-[30%] max-w-[250px] ",children:(0,l.jsxs)("div",{className:"py-6 relative",children:[(0,l.jsx)(o.$I,{data:m,options:eI}),(0,l.jsx)("div",{className:" ".concat(eg," h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"),children:(0,l.jsx)("h1",{className:"text-white text-center leading-none mt-[74px] font-bold",children:eh})})]})})]})})]}),(0,l.jsxs)("div",{className:" duration-500 ease-in-out ".concat(e$),children:[(0,l.jsx)("div",{className:"flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10",children:(0,l.jsxs)("div",{className:"flex flex-wrap justify-center gap-6 w-full",children:[(0,l.jsxs)("div",{className:"p-5 rounded-[25px] w-full sm:w-[45%] lg:w-[60%]",children:[(0,l.jsx)("h1",{className:"text-left text-white text-lg sm:text-xl",children:"Retirement"}),(0,l.jsxs)("div",{className:"bg-white p-6 sm:p-8 rounded-[25px] bg-opacity-25 flex flex-wrap justify-center",children:[(0,l.jsxs)("div",{className:"mx-3 w-full sm:w-1/3",children:[(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",placeholder:"Monthly Salary",onChange:e=>{V(Number(e.target.value)),eT()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",value:et,placeholder:"Actual Salary",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})})]}),(0,l.jsxs)("div",{className:"mx-3 w-full sm:w-1/3",children:[(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",placeholder:"Year Gap",onChange:e=>{ee(Number(e.target.value)),eT()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",placeholder:"Exsiting Solution",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white",onChange:e=>{en(e.target.value)}})})]}),(0,l.jsx)("div",{className:"mx-3 w-full sm:w-1/3 md:w-[70%]",children:(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"text",placeholder:"Total Need",value:el,className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})})})]})]}),(0,l.jsx)("div",{className:"w-full sm:w-[45%] lg:w-[30%] max-w-[250px] ",children:(0,l.jsxs)("div",{className:"py-6 relative",children:[(0,l.jsx)(o.$I,{data:h,options:eI}),(0,l.jsx)("div",{className:"".concat(eN," h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"),children:(0,l.jsx)("h1",{className:"text-white text-center leading-none mt-[74px] font-bold",children:ef})})]})})]})}),(0,l.jsx)("div",{className:"flex flex-wrap justify-center bg-white mt-14 mx-[5%] rounded-[35px] bg-opacity-10",children:(0,l.jsxs)("div",{className:"flex flex-wrap justify-center gap-6 w-full",children:[(0,l.jsxs)("div",{className:"p-5 rounded-[25px] w-full sm:w-[45%] lg:w-[60%]",children:[(0,l.jsx)("h1",{className:"text-left text-white text-lg sm:text-xl",children:"Savings"}),(0,l.jsxs)("div",{className:"bg-white p-6 sm:p-8 rounded-[25px] bg-opacity-25 flex justify-center",children:[(0,l.jsxs)("div",{className:"mx-3 w-full",children:[(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",placeholder:"Expected Saving",onChange:e=>{O(Number(e.target.value)),eG()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",value:U,placeholder:"Actual Savings",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})})]}),(0,l.jsxs)("div",{className:"mx-3 w-full",children:[(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",placeholder:"Year Gap",onChange:e=>{L(Number(e.target.value)),eG()},className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})}),(0,l.jsx)("div",{className:"relative mb-4",children:(0,l.jsx)("input",{type:"number",onChange:e=>{K(Number(e.target.value)),eG()},placeholder:"Existing Savings",className:"p-3 rounded-[60px] w-full bg-[#d9d9d920] text-white"})})]})]})]}),(0,l.jsx)("div",{className:"w-full sm:w-[45%] lg:w-[30%] max-w-[250px] ",children:(0,l.jsxs)("div",{className:"py-6 relative",children:[(0,l.jsx)(o.$I,{data:g,options:eI}),(0,l.jsx)("div",{className:"".concat(eS," h-40 w-40 rounded-full absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"),children:(0,l.jsx)("h1",{className:"text-white text-center leading-none mt-[74px] font-bold",children:ey})})]})})]})})]}),(0,l.jsxs)("div",{className:"flex justify-between ml-[7%] p-5 mr-[7%]",children:[(0,l.jsx)("h2",{className:"bg-blue-600 text-white font-bold text-center pt-2 pb-2 pl-5 pr-5 rounded-[25px]  cursor-pointer hover:scale-110 duration-300 ",onClick:()=>{if(f>=2){let e=f-1;w(e),eP("hidden"),eH("hidden"),ez("hidden"),1==e?eP("visible"):2==e?eH("visible"):3==e&&ez("visible")}else(0,n.yv)("This is The First Page",{variant:"info"});eA("Next")},children:"Back"}),(0,l.jsx)("h2",{className:"bg-blue-600 text-white font-bold text-center pt-2 pb-2 pl-5 pr-5 rounded-[25px]  cursor-pointer hover:scale-110 duration-300 ",onClick:()=>{if(f<=2&&"Submit"!=ek){let e=f+1;w(e),eP("hidden"),eH("hidden"),ez("hidden"),1==e?eP("visible"):2==e?eH("visible"):3==e&&(ez("visible"),eA("Submit"))}"Submit"==ek&&e9()},children:ek})]})]})}c.kL.register(c.qi,c.u,c.De)},9419:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/logo.659d43d1.svg",height:233,width:262,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[674,30,156,734,746,971,23,744],function(){return e(e.s=374)}),_N_E=e.O()}]);