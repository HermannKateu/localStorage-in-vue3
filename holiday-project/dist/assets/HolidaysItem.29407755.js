import{x as g,o as x,e as m,f as t,d as y,S as w,u as b,r as _,O as c,Q as M,I as H,g as i,L as k,D as e,h as a,k as D}from"./index.add4fb94.js";import{d as l}from"./dayjs.min.16be2667.js";import{_ as V}from"./ModalWrapper.8991f8ff.js";const $={},C={viewBox:"0 0 14 18",xmlns:"http://www.w3.org/2000/svg"},S=t("path",{d:"M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"},null,-1),N=[S];function B(u,d){return x(),m("svg",C,N)}var I=g($,[["render",B]]);const j={},O={viewBox:"0 0 21 23",xmlns:"http://www.w3.org/2000/svg"},L=t("path",{d:`M18.4053 2.69385H17.4053V0.693848H15.4053V2.69385H5.40527V0.693848H3.40527V2.69385H2.40527C1.30527 2.69385 0.405273 3.59385 0.405273 4.69385V20.6938C0.405273 21.7938 1.30527 22.6938 2.40527 22.6938H18.4053C19.5053 22.6938 20.4053 21.7938 20.4053
     20.6938V4.69385C20.4053 3.59385 19.5053 2.69385 18.4053 2.69385ZM18.4053 20.6938H2.40527V7.69385H18.4053V20.6938Z`},null,-1),Y=[L];function Z(u,d){return x(),m("svg",O,Y)}var v=g(j,[["render",Z]]);const E={class:"md:h-[90vw] md:fixed"},R=D(" Are you sure you want to delete this Holiday ? "),J={class:"flex gap-x-4 my-2"},T={class:"px-4 py-16 font-WorkSans md:px-28 md:py-32"},A={class:"flex justify-between"},Q=t("h1",{class:"text-gray-800 text-3xl font-semibold md:text-5xl"},"Details",-1),W={class:"text-gray-800 text-lg font-bold text-center my-6 md:text-2xl md:text-justify"},q={class:"flex flex-col gap-y-6 grow md:flex-row md:flex-wrap md:gap-y-20"},z={class:"font-medium md:w-6/12"},F=t("span",{class:"text-gray md:text-lg"},"Type",-1),G={class:"text-black text-base md:text-xl"},K={class:"font-medium grow flex flex-col gap-y-2 md:w-6/12"},P=t("span",{class:"text-gray md:text-lg"},"Starts",-1),U={class:"flex justify-between md:w-6/12"},X={class:"text-black text-base md:text-xl"},tt={class:"font-medium grow flex flex-col md:w-6/12"},st=t("span",{class:"text-gray md:text-lg"},"Ends",-1),et={class:"flex justify-between md:w-6/12"},ot={class:"text-black text-base md:text-xl"},at={class:"md:w-6/12 grow"},lt=t("span",{class:"text-gray md:text-lg"},"Description",-1),dt={class:"text-black text-base md:text-xl"},nt={class:"md:w-6/12"},ct=t("span",{class:"text-gray md:text-lg"},"Return",-1),it={class:"text-black text-base md:text-xl"},rt={class:"md:w-6/12"},_t=t("span",{class:"text-gray md:text-lg"},"Number Of Days",-1),xt={class:"text-black text-base md:text-xl"},ht=y({name:"HolidaysItem",setup(u){const d=w(),p=b(),n=_(!1),r=_(!1),s=_({});return window.addEventListener("load",()=>{c.value=JSON.parse(localStorage.getItem("allHolidays"))}),M(()=>{s.value=c.value[Number(d.params.id)]}),H(()=>r.value,async f=>{f&&(c.value.splice(Number(d.params.id),1),localStorage.setItem("allHolidays",JSON.stringify(c.value)),n.value=!1,await p.push("/holiday-list")),r.value=!1}),(f,o)=>(x(),m("section",E,[i(V,{show:n.value},{default:k(()=>[R,t("div",J,[t("button",{class:"bg-sky-200 font-semibold py-1.5 px-6 rounded",onClick:o[0]||(o[0]=h=>r.value=!0)},"Delete"),t("button",{class:"bg-sky-200 font-semibold py-1.5 px-6 rounded",onClick:o[1]||(o[1]=h=>n.value=!1)},"Cancel")])]),_:1},8,["show"]),t("div",T,[t("div",A,[Q,i(I,{class:"h-6 w-7 cursor-pointer",fill:"gray",onClick:o[2]||(o[2]=h=>n.value=!0)})]),t("h2",W,e(`${a(l)(s.value.starting).format("MMMM, D")} - ${a(l)(s.value.ending).format("MMMM, D")}`),1),t("div",q,[t("div",z,[F,t("h3",G,e(s.value.type.key),1)]),t("div",K,[P,t("div",U,[t("h3",X,e(a(l)(s.value.starting).format("MMMM, D")),1),i(v,{class:"h-6 w-7",fill:"gray"})])]),t("div",tt,[st,t("div",et,[t("h3",ot,e(a(l)(s.value.ending).format("MMMM, D")),1),i(v,{class:"h-6 w-7",fill:"gray"})])]),t("div",at,[lt,t("h3",dt,e(s.value.description),1)]),t("div",nt,[ct,t("h3",it,e(a(l)(s.value.returnDate).format("dddd, D MMMM YYYY")),1)]),t("div",rt,[_t,t("h3",xt,e(s.value.numberOfDays),1)])])])]))}});export{ht as default};