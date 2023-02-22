import{x as f,o as i,e as r,f as t,d as p,S as y,u as v,r as m,Q as w,g as c,D as e,h as o}from"./index.0135b1de.js";import{d as a}from"./dayjs.min.16be2667.js";const M={},H={viewBox:"0 0 14 18",xmlns:"http://www.w3.org/2000/svg"},b=t("path",{d:"M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"},null,-1),V=[b];function $(_,n){return i(),r("svg",H,V)}var D=f(M,[["render",$]]);const k={},C={viewBox:"0 0 21 23",xmlns:"http://www.w3.org/2000/svg"},S=t("path",{d:`M18.4053 2.69385H17.4053V0.693848H15.4053V2.69385H5.40527V0.693848H3.40527V2.69385H2.40527C1.30527 2.69385 0.405273 3.59385 0.405273 4.69385V20.6938C0.405273 21.7938 1.30527 22.6938 2.40527 22.6938H18.4053C19.5053 22.6938 20.4053 21.7938 20.4053
     20.6938V4.69385C20.4053 3.59385 19.5053 2.69385 18.4053 2.69385ZM18.4053 20.6938H2.40527V7.69385H18.4053V20.6938Z`},null,-1),B=[S];function N(_,n){return i(),r("svg",C,B)}var h=f(k,[["render",N]]);const j={class:"px-4 py-16 font-WorkSans md:px-28 md:py-32"},I={class:"flex justify-between"},Y=t("h1",{class:"text-gray-800 text-3xl font-semibold md:text-5xl"},"Details",-1),Z={class:"text-gray-800 text-lg font-bold text-center my-6 md:text-2xl md:text-justify"},R={class:"flex flex-col gap-y-6 grow md:flex-row md:flex-wrap md:gap-y-20"},E={class:"font-medium md:w-6/12"},J=t("span",{class:"text-gray md:text-lg"},"Type",-1),L={class:"text-black text-base md:text-xl"},O={class:"font-medium grow flex flex-col gap-y-2 md:w-6/12"},Q=t("span",{class:"text-gray md:text-lg"},"Starts",-1),T={class:"flex justify-between md:w-6/12"},W={class:"text-black text-base md:text-xl"},q={class:"font-medium grow flex flex-col md:w-6/12"},z=t("span",{class:"text-gray md:text-lg"},"Ends",-1),A={class:"flex justify-between md:w-6/12"},F={class:"text-black text-base md:text-xl"},G={class:"md:w-6/12 grow"},K=t("span",{class:"text-gray md:text-lg"},"Description",-1),P={class:"text-black text-base md:text-xl"},U={class:"md:w-6/12"},X=t("span",{class:"text-gray md:text-lg"},"Return",-1),tt={class:"text-black text-base md:text-xl"},at=p({name:"HolidaysItem",setup(_){const n=y(),u=v(),s=m({}),l=m([]);w(()=>{l.value=JSON.parse(localStorage.getItem("allHolidays")),s.value=l.value[Number(n.params.id)]});const g=async d=>{l.value.splice(Number(d),1),localStorage.setItem("allHolidays",JSON.stringify(l.value)),await u.push("/holiday-list")};return(d,x)=>(i(),r("div",j,[t("div",I,[Y,c(D,{class:"h-6 w-7 cursor-pointer",fill:"gray",onClick:x[0]||(x[0]=st=>g(d.$route.params.id))})]),t("h2",Z,e(`${o(a)(s.value.starting).format("MMMM, D")} - ${o(a)(s.value.ending).format("MMMM, D")}`),1),t("div",R,[t("div",E,[J,t("h3",L,e(s.value.type.key),1)]),t("div",O,[Q,t("div",T,[t("h3",W,e(o(a)(s.value.starting).format("MMMM, D")),1),c(h,{class:"h-6 w-7",fill:"gray"})])]),t("div",q,[z,t("div",A,[t("h3",F,e(o(a)(s.value.ending).format("MMMM, D")),1),c(h,{class:"h-6 w-7",fill:"gray"})])]),t("div",G,[K,t("h3",P,e(s.value.description),1)]),t("div",U,[X,t("h3",tt,e(o(a)(s.value.returnDate).format("dddd, D MMMM YYYY")),1)])])]))}});export{at as default};