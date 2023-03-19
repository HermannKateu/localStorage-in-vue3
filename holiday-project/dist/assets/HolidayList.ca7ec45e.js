import{d as r,u as b}from"./holiday.c30c2e0d.js";import{d as m,o as a,e as n,h as t,t as o,f as s,H as u,a as w,A as k,u as v,S as $,V as M,j as x,K as D,_ as C,F as j,C as B}from"./index.8ce0b9eb.js";import{N as H}from"./NoHoliday.39d937eb.js";const S={class:"bg-gray-400 p-5 border border-gray-200 rounded-lg font-WorkSans w-full flex flex-col gap-y-4 shadow-[#D1E4FA] shadow-lg"},L={class:"flex flex-row justify-between text-gray text-sm font-medium"},N={"data-test":"starting-date"},A={"data-test":"time"},F={class:"text-blue-100 font-bold text-xl","data-test":"date"},V={class:"text-gray-700 text-sm leading-tight flex w-full break-all","data-test":"description"},W={class:"text-blue-100 text-sm font-semibold bg-gray-600 rounded-xl py-1 w-20",type:"submit","data-test":"type"},E=m({name:"HolidaysCard",props:{holiday:{type:Object,required:!0}},setup(e){return(d,l)=>(a(),n("div",S,[t("div",L,[t("span",N,o(s(r)(e.holiday.creationDate).format("MMMM, D")),1),t("span",A,o(s(r)(e.holiday.creationDate).format("LT")),1)]),t("div",F,o(`${s(r)(e.holiday.startingDate).format("MMMM, D")} - ${s(r)(e.holiday.endingDate).format("MMMM, D")}`),1),t("span",V,o(e.holiday.description),1),t("button",W,o(e.holiday.type),1)]))}}),T=m({name:"BlankWrapper",setup(e){return(d,l)=>(a(),u(H,{class:"w-full h-[300px]"}))}}),q={class:"bg-white px-4 bg-clip-border flex flex-col font-WorkSans py-20 gap-y-12 py-20 md:max-w-[768px] bg-cover md:bg-white object-center md:mx-auto lg:max-w-[1649px]"},I={class:"flex justify-between relative"},K={class:"text-gray-800 font-semibold text-3xl"},O=t("span",{class:"text-gray-50 font-medium text-5xl block md:hidden absolute right-0 -top-2","data-test":"holiday-form"},"+",-1),R={key:1,class:"flex gap-y-5 flex-col md:flex-row md:flex-wrap md:gap-x-5 w-full"},Q=m({name:"HolidayList",setup(e){const d=w(),l=k([]),{t:h}=v({useScope:"global",inheritLocale:!0});$(async()=>{l.value=await b().getAllHolidays()});const p=async i=>{await d.push(`/holidays/${i}`)};return(i,y)=>{var f;const _=M("router-link");return a(),n("div",q,[t("div",I,[t("h1",K,o(s(h)("welcome.label_list")),1),x(_,{to:"/create-holiday"},{default:D(()=>[O]),_:1}),x(C,{onClick:y[0]||(y[0]=c=>i.$router.push("/create-holiday")),label:s(h)("welcome.label_create"),class:"bg-blue-100 hidden h-14 text-lg w-60 text-white rounded-md py-4 md:block","data-test":"holiday-form"},null,8,["label"])]),((f=l.value)==null?void 0:f.length)===0?(a(),u(T,{key:0})):(a(),n("div",R,[(a(!0),n(j,null,B(l.value,(c,g)=>(a(),u(E,{class:"max-w-[385px] grow cursor-pointer hover:shadow-sm hover:transition hover:duration-300","data-test":"holiday-card",key:g,holiday:c,onClick:z=>p(c.id)},null,8,["holiday","onClick"]))),128))]))])}}});export{Q as default};
