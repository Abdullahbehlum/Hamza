import{j as e,B as n}from"./index-0-i6RoMl.js";import{c as d,a as l,u,C as g,o as f,i as h,g as b,p as j,r as y}from"./ReactToastify-n3UrKYFE.js";const m=d({name:l().min(2).required("Name is required"),email:l().email().required("Email is required"),Message:l().required("Message is required!")}),N={apiKey:"AIzaSyDeiLWLD982x31T-4kWB4GEtXSZ8IqnLXY",authDomain:"ctacoredigitals.firebaseapp.com",databaseURL:"https://ctacoredigitals-default-rtdb.firebaseio.com",projectId:"ctacoredigitals",storageBucket:"ctacoredigitals.appspot.com",messagingSenderId:"321632751421",appId:"1:321632751421:web:4a743a1600737fca827f54",measurementId:"G-9PYM98JH7M"};function M(){const{register:s,handleSubmit:o,formState:{errors:a,isSubmitting:r}}=u({resolver:f(m),mode:"all"}),x=async(i,p)=>{try{p.preventDefault(),await m.validate(i,{abortEarly:!1});const t=h(N),c=await b(t);await j(y(c,"ContactData"),i),console.log(c),n.success("Message sent successfully!"),reset()}catch(t){n.error(t.message)}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex  justify-between items-center flex-col-reverse md:flex-row sm:flex-row mx-6 my-6 ",children:[e.jsxs("div",{className:"xl:mx-6",children:[e.jsx("h1",{className:"text-[34px] w-full xl:text-left text-center  leading-[38px]     xl:text-balance text-wrap  py-2 xl:py-0 font-bold ",children:"We love to hear from you"}),e.jsx("p",{className:"py-2 xl:text-left text-center  xl:py-3 sm:py-0 md:py-0 text-[16px] xl:text-sm text-balance",children:"Heads up! We require that you sign up for Octa Core Digitals services and packages. We make all your dreams come true in a successful project."}),e.jsx("div",{children:e.jsxs("form",{onSubmit:o(x),children:[e.jsxs("div",{className:"mb-3 ",children:[e.jsx("input",{type:"text",className:" w-full  py-[7px] px-[12px] outline-purple-600 text-black mb-1 ",placeholder:"Name",name:"name",...s("name")}),a.name&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-left",children:a.name.message})})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("input",{type:"email",className:" w-full  py-[7px] px-[12px] outline-purple-600 text-black mb-1 ",placeholder:"email",name:"email",...s("email")}),a.email&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-left",children:a.email.message})})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("textarea",{...s("Message"),name:"Message",cols:"30",placeholder:"Message",rows:"5",className:" w-full  py-[7px] px-[12px] outline-purple-600 text-black mb-1 "}),a.Message&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-left",children:a.Message.message})})]}),e.jsx("div",{children:e.jsx("button",{disabled:r,className:"btn border  capitalize xl:w-auto w-full border-purple-600 hover:bg-purple-600 focus:bg-purple-600 rounded-lg",children:r?"Sending...":"  Send your Message"})})]})})]}),e.jsx("div",{children:e.jsx("img",{src:g,className:"w-[580px]"})})]})})}export{M as default};
