import{d as V,o as s,e as o,h as a,B as v,F as w,C as $,j as u,D as S,i as p,t as F,z as B,A as b,c as D,E as T,G as j,f as n,H,a as L,r as N,b as U,w as E,I as z,J as M,l as Y,_ as R,K as A,L as W,m as x,n as k,M as K}from"./index.8ce0b9eb.js";import{d as C,u as G,H as J}from"./holiday.c30c2e0d.js";import{_ as P}from"./ModalWrapper.f3c90f13.js";const Q={class:"flex flex-col gap-y-1 font-WorkSans"},X=a("label",{for:"description",class:"text-gray-300 text-base"}," Description ",-1),Z=V({name:"DescriptionArea",props:{modelValue:{type:String,require:!0},errors:{type:Array,default:()=>[]}},setup(t){return(m,i)=>{var e;return s(),o("div",Q,[X,a("textarea",{onInput:i[0]||(i[0]=c=>m.$emit("update:modelValue",c.target.value)),placeholder:"Veuillez saisir votre description...",class:v(["outline-none w-full text-lg border border-gray-200 h-28 px-3 pt-3 my-1 rounded-md placeholder:text-gray",t.errors.length>0?"border-red-900 focus:shadow-red":"border-gray focus:border-gray focus:shadow-gray"])},null,34),(e=t.errors)!=null&&e.length?(s(!0),o(w,{key:0},$(t.errors,c=>(s(),o("div",{key:c.$uid},[u(S,{message:c.$message},null,8,["message"])]))),128)):p("",!0)])}}}),ee={class:"flex flex-col gap-y-1 text-base font-WorkSans"},te={for:"date",class:"text-gray-800"},re=["value","readonly"],O=V({name:"DateInput",props:{labelValues:{type:String,require:!0},readonly:{type:Boolean,default:!1},modelValue:{type:String,require:!1},errors:{type:Array,default:[]}},setup(t){return(m,i)=>(s(),o("div",ee,[a("label",te,F(t.labelValues),1),a("div",null,[a("input",{type:"date",class:v(["outline-none my-1 h-12 px-3 border border-gray-200 bg-gray-100 rounded-md w-full",t.errors.length>0?"border-red-900 focus:shadow-red":"border-gray focus:border-gray focus:shadow-gray"]),placeholder:"Date",value:t.modelValue,onInput:i[0]||(i[0]=e=>m.$emit("update:modelValue",e.target.value)),readonly:t.readonly},null,42,re),(s(!0),o(w,null,$(t.errors,e=>(s(),o("div",{key:e.$uid},[u(S,{message:e.$message},null,8,["message"])]))),128))])]))}}),se={class:"flex flex-col gap-y-1 font-WorkSans text-base"},ae=a("label",{for:"number",class:"text-gray-800"}," Number of days ",-1),le=["value"],oe=V({name:"NumberInput",props:{modelValue:{type:String,require:!0},errors:{type:Array,default:()=>[]}},setup(t){return(m,i)=>(s(),o("div",se,[ae,a("input",{type:"number",class:v(["outline-none my-1 h-12 pl-4 text-black-400 border border-gray-200 bg-gray-100 rounded-md",t.errors.length>0?"border-red-900 focus:shadow-red":"border-gray focus:border-gray focus:shadow-gray"]),placeholder:"Ex.18",min:"1",value:t.modelValue,onInput:i[0]||(i[0]=e=>m.$emit("update:modelValue",e.target.value)),readonly:""},null,42,le),t.errors.length?(s(!0),o(w,{key:0},$(t.errors,e=>(s(),o("div",{key:e.$uid},[u(S,{message:e.$message},null,8,["message"])]))),128)):p("",!0)]))}}),ne={},de={width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ue=a("path",{d:"M11.9492 5.75L7.57422 10.125L3.19922 5.75",stroke:"#A3ABC2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),ie=[ue];function ce(t,m){return s(),o("svg",de,ie)}var me=B(ne,[["render",ce]]);const ge={class:"text-black text-base flex gap-0.5 items-center mb-2"},ye=["data-test"],pe=["data-test"],fe=["data-test","placeholder","value"],he={key:0,"data-test":"options",class:"w-full inset-x-0 z-50 absolute p-4 rounded-md border border-gray-100 shadow-[0px_4px_16px_4px_rgba(0,0,0,0.07)] bg-white mt-2 mb-8 space-y-2"},be=["data-test","tabindex","onClick"],ve={key:0,class:"text-center py-2"},xe={key:1,class:"flex gap-x-2 my-2 items-center"},we=V({name:"SelectOption",props:{options:{type:Array,required:!0},label:{type:String,required:!0},modelValue:{type:Object,required:!0},errors:{type:Object,default:[]},placeholder:{type:String,required:!0}},emits:["update:modelValue"],setup(t,{emit:m}){const i=t,e=b(!1),c=b(""),g=b(""),f=d=>{c.value="",g.value=d.value,m("update:modelValue",d),e.value=!1},h=D(()=>c.value?i.options.filter(d=>d.value.toLowerCase().replace(/\s+/g,"").includes(c.value.toLowerCase().replace(/\s+/g,""))):i.options),q=d=>{c.value=g.value=d.target.value},y=()=>{e.value=!e.value},_=b();return T(_,()=>{e.value=!1}),(d,l)=>(s(),o("section",{class:"relative",ref_key:"dropDown",ref:_},[a("section",ge,[a("label",{class:"text-black text-base","data-test":`label-${t.label}`},F(t.label),9,ye),j(d.$slots,"rightSide")]),a("div",{class:"relative w-full","data-test":`${t.label}-dropdown`},[a("input",{"data-test":`input-${t.label}`,class:v(["placeholder:capitalize placeholder:text-gray-100 outline-none cursor-pointer border bg-white rounded pl-4 py-1.5 w-full h-12 pr-10 placeholder:text-gray-200",{"border-gray shadow-blue focus:border-blue-500 focus:shadow-blue":t.errors.length===0&&e.value,"border-red-900 shadow-red focus:border-red-900 focus:shadow-red":t.errors.length>0&&e.value,"border-red-900":t.errors.length>0}]),type:"text",placeholder:t.placeholder,value:g.value,onInput:q,onKeyup:l[0]||(l[0]=r=>e.value=!0),onFocus:y,autocomplete:"off"},null,42,fe),u(me,{class:v(["w-[20px] h-[20px] absolute right-2 top-3 duration-300",e.value?"rotate-180":"rotate-0"])},null,8,["class"])],8,pe),e.value?(s(),o("section",he,[(s(!0),o(w,null,$(n(h),(r,I)=>(s(),o("div",{"data-test":`option-${r.value}`,tabindex:I,key:I,onClick:Be=>f(r),class:v(["w-full p-2 font-outfit text-black font-medium cursor-pointer",g.value===r.value?"text-blue-100 bg-sky-300 rounded-md shadow":"hover:bg-sky-100 hover:rounded-md hover:shadow"])},F(r.value),11,be))),128)),n(h).length===0?(s(),o("div",ve," Nothing Found ")):p("",!0)])):p("",!0),t.errors.length?(s(),o("div",xe,[(s(!0),o(w,null,$(t.errors,r=>(s(),H(S,{key:r.$uid,"data-test":`${t.label}-error`,message:r.$message},null,8,["data-test","message"]))),128))])):p("",!0)],512))}}),$e={},Ve={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50","xml:space":"preserve"},_e=a("circle",{style:{fill:"#25AE88"},cx:"25",cy:"25",r:"25"},null,-1),ke=a("polyline",{style:{fill:"none",stroke:"#FFFFFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10"},points:`
	38,15 22,33 12,25 `},null,-1),De=[_e,ke];function Se(t,m){return s(),o("svg",Ve,De)}var qe=B($e,[["render",Se]]);const Ce={key:0,class:"bg-gray-100 h-screen md:h-[90vw] md:fixed flex md:bg-gray-100"},Oe={class:"px-4 pt-4 max-w-[900px] md:mx-auto md:bg-white md:rounded-lg md:px-16 relative"},Fe=a("div",{class:"font-WorkSans flex flex-col items-center md:pt-2 md:pb-4"},[a("h1",{class:"text-gray-800 font-semibold text-3xl md:text-5xl"}," Create holiday "),a("span",{class:"text-gray text-base md:text-lg"}," Lorem ipsum dolor sit amet, consectetur . ")],-1),Ie={class:"flex flex-wrap gap-x-10 gap-y-3"},Me={key:0,class:"text-red-900 font-normal font-outfit text-sm"},Ae=a("span",null,"Your Holidays has been successfully created ",-1),Le=V({name:"CreateHolidayForm",props:{show:{type:Boolean,default:!0}},emits:["closeModal"],setup(t,{emit:m}){const i=L(),e=N({starting:"",type:"",ending:"",numberOfDays:"",returnDate:"",description:"",creationDate:""}),c=b(!1),g=D(()=>((C(e.ending).valueOf()-C(e.starting).valueOf())/864e5).toString()),f=D(()=>C(e.ending).add(1,"day").format("YYYY-MM-DD")),h=b(!1),q=D(()=>({starting:{required:x.withMessage("The starting date is required",k)},ending:{required:x.withMessage("The ending date is required",k)},type:{required:x.withMessage("The holiday type is required here",k)},numberOfDays:{requiredIf:x.withMessage("The starting and ending shouldn't be equal",K(e.starting===e.ending))},description:{required:x.withMessage("The holiday description is required here",k)}})),y=U(q,e),_=async()=>{console.log("test",e.starting),await y.value.$validate()&&!c.value&&(await G().createHoliday(new J({type:e.type,startingDate:e.starting,endingDate:e.ending,description:e.description,numberOfDays:Number(g.value),returnDate:f.value,createdAt:new Date().toISOString()})),h.value=!0,setTimeout(()=>{h.value=!1,Object.assign(e,{}),y.value.$reset(),m("closeModal"),i.push("/holiday-list")},2e3))};return E(()=>[e.starting,e.ending],([d,l])=>{c.value=d>l&&l.length>0}),(d,l)=>t.show?(s(),o("div",Ce,[a("form",Oe,[a("span",{class:"flex p-2.5 h-3 w-3 rounded-full border-2 border-gray justify-center items-center font-bold text-gray absolute right-4 cursor-pointer",onClick:l[0]||(l[0]=r=>d.$emit("closeModal"))},"x"),Fe,a("div",Ie,[u(we,{placeholder:"Choose your holiday Type",modelValue:n(e).type,"onUpdate:modelValue":l[1]||(l[1]=r=>n(e).type=r),label:"Type",options:n(z),errors:n(y).type.$errors,class:"w-full md:w-8/12"},null,8,["modelValue","options","errors"]),u(O,{class:"w-5/12 grow md:w-3/12",labelValues:"Starting date",modelValue:n(e).starting,"onUpdate:modelValue":l[2]||(l[2]=r=>n(e).starting=r),errors:n(y).starting.$errors,"data-test":"starting-date"},null,8,["modelValue","errors"]),u(O,{class:"w-5/12 grow md:w-3/12",labelValues:"Ending date",modelValue:n(e).ending,"onUpdate:modelValue":l[3]||(l[3]=r=>n(e).ending=r),errors:n(y).ending.$errors,"data-test":"ending-date"},null,8,["modelValue","errors"]),c.value?(s(),o("span",Me,"The Ending Date most always be greater")):p("",!0),u(oe,{class:"w-5/12 grow md:w-3/12",modelValue:n(g),"onUpdate:modelValue":l[4]||(l[4]=r=>M(g)?g.value=r:null),"data-test":"numDays",errors:n(y).numberOfDays.$errors},null,8,["modelValue","errors"]),u(O,{class:"w-5/12 grow md:w-3/12",labelValues:"Return date",readonly:!0,modelValue:n(f),"onUpdate:modelValue":l[5]||(l[5]=r=>M(f)?f.value=r:null),"data-test":"return-date"},null,8,["modelValue"])]),u(Z,{class:"my-2 md:my-3",modelValue:n(e).description,"onUpdate:modelValue":l[6]||(l[6]=r=>n(e).description=r),errors:n(y).description.$errors},null,8,["modelValue","errors"]),u(R,{onClick:Y(_,["prevent"]),label:"SUBMIT",class:"bg-blue-100 my-6 h-12 mx-auto text-white font-bold rounded-md flex text-lg md:text-xl md:my-14","data-test":"submit-button"},null,8,["onClick"])]),u(W,null,{default:A(()=>[u(P,{show:h.value},{default:A(()=>[Ae,u(qe,{class:"w-8 h-8"})]),_:1},8,["show"])]),_:1})])):p("",!0)}});export{Le as default};
