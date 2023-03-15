import{d as _,o as s,e as o,h as a,B as v,F as $,C as V,j as u,D as S,i as p,t as F,z as A,A as b,c as q,E as j,G as L,f as n,H as N,a as U,r as E,b as z,w as H,I as Y,J as M,l as R,_ as W,K as B,L as J,m as x,n as D,M as K}from"./index.5aa1e923.js";import{d as w}from"./dayjs.min.16be2667.js";import{_ as G,h as T}from"./ModalWrapper.fc14aea5.js";const P={class:"flex flex-col gap-y-1 font-WorkSans"},Q=a("label",{for:"description",class:"text-gray-300 text-base"}," Description ",-1),X=_({name:"DescriptionArea",props:{modelValue:{type:String,require:!0},errors:{type:Array,default:()=>[]}},setup(t){return(m,i)=>{var e;return s(),o("div",P,[Q,a("textarea",{onInput:i[0]||(i[0]=c=>m.$emit("update:modelValue",c.target.value)),placeholder:"Veuillez saisir votre description...",class:v(["outline-none w-full text-lg border border-gray-200 h-28 px-3 pt-3 my-1 rounded-md placeholder:text-gray",t.errors.length>0?"border-red-900 focus:shadow-red":"border-gray focus:border-gray focus:shadow-gray"])},null,34),(e=t.errors)!=null&&e.length?(s(!0),o($,{key:0},V(t.errors,c=>(s(),o("div",{key:c.$uid},[u(S,{message:c.$message},null,8,["message"])]))),128)):p("",!0)])}}}),Z={class:"flex flex-col gap-y-1 text-base font-WorkSans"},ee={for:"date",class:"text-gray-800"},te=["value","readonly"],O=_({name:"DateInput",props:{labelValues:{type:String,require:!0},readonly:{type:Boolean,default:!1},modelValue:{type:String,require:!1},errors:{type:Array,default:[]}},setup(t){return(m,i)=>(s(),o("div",Z,[a("label",ee,F(t.labelValues),1),a("div",null,[a("input",{type:"date",class:v(["outline-none my-1 h-12 px-3 border border-gray-200 bg-gray-100 rounded-md w-full",t.errors.length>0?"border-red-900 focus:shadow-red":"border-gray focus:border-gray focus:shadow-gray"]),placeholder:"Date",value:t.modelValue,onInput:i[0]||(i[0]=e=>m.$emit("update:modelValue",e.target.value)),readonly:t.readonly},null,42,te),(s(!0),o($,null,V(t.errors,e=>(s(),o("div",{key:e.$uid},[u(S,{message:e.$message},null,8,["message"])]))),128))])]))}}),re={class:"flex flex-col gap-y-1 font-WorkSans text-base"},se=a("label",{for:"number",class:"text-gray-800"}," Number of days ",-1),ae=["value"],le=_({name:"NumberInput",props:{modelValue:{type:String,require:!0},errors:{type:Array,default:()=>[]}},setup(t){return(m,i)=>(s(),o("div",re,[se,a("input",{type:"number",class:v(["outline-none my-1 h-12 pl-4 text-black-400 border border-gray-200 bg-gray-100 rounded-md",t.errors.length>0?"border-red-900 focus:shadow-red":"border-gray focus:border-gray focus:shadow-gray"]),placeholder:"Ex.18",min:"1",value:t.modelValue,onInput:i[0]||(i[0]=e=>m.$emit("update:modelValue",e.target.value)),readonly:""},null,42,ae),t.errors.length?(s(!0),o($,{key:0},V(t.errors,e=>(s(),o("div",{key:e.$uid},[u(S,{message:e.$message},null,8,["message"])]))),128)):p("",!0)]))}}),oe={},ne={width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},de=a("path",{d:"M11.9492 5.75L7.57422 10.125L3.19922 5.75",stroke:"#A3ABC2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),ue=[de];function ie(t,m){return s(),o("svg",ne,ue)}var ce=A(oe,[["render",ie]]);const me={class:"text-black text-base flex gap-0.5 items-center mb-2"},ge=["data-test"],ye=["data-test"],pe=["data-test","placeholder","value"],fe={key:0,"data-test":"options",class:"w-full inset-x-0 z-50 absolute p-4 rounded-md border border-gray-100 shadow-[0px_4px_16px_4px_rgba(0,0,0,0.07)] bg-white mt-2 mb-8 space-y-2"},he=["data-test","tabindex","onClick"],be={key:0,class:"text-center py-2"},ve={key:1,class:"flex gap-x-2 my-2 items-center"},xe=_({name:"SelectOption",props:{options:{type:Array,required:!0},label:{type:String,required:!0},modelValue:{type:Object,required:!0},errors:{type:Object,default:[]},placeholder:{type:String,required:!0}},emits:["update:modelValue"],setup(t,{emit:m}){const i=t,e=b(!1),c=b(""),g=b(""),f=d=>{c.value="",g.value=d.value,m("update:modelValue",d),e.value=!1},h=q(()=>c.value?i.options.filter(d=>d.value.toLowerCase().replace(/\s+/g,"").includes(c.value.toLowerCase().replace(/\s+/g,""))):i.options),C=d=>{c.value=g.value=d.target.value},y=()=>{e.value=!e.value},k=b();return j(k,()=>{e.value=!1}),(d,l)=>(s(),o("section",{class:"relative",ref_key:"dropDown",ref:k},[a("section",me,[a("label",{class:"text-black text-base","data-test":`label-${t.label}`},F(t.label),9,ge),L(d.$slots,"rightSide")]),a("div",{class:"relative w-full","data-test":`${t.label}-dropdown`},[a("input",{"data-test":`input-${t.label}`,class:v(["placeholder:capitalize placeholder:text-gray-100 outline-none cursor-pointer border bg-white rounded pl-4 py-1.5 w-full h-12 pr-10 placeholder:text-gray-200",{"border-gray shadow-blue focus:border-blue-500 focus:shadow-blue":t.errors.length===0&&e.value,"border-red-900 shadow-red focus:border-red-900 focus:shadow-red":t.errors.length>0&&e.value,"border-red-900":t.errors.length>0}]),type:"text",placeholder:t.placeholder,value:g.value,onInput:C,onKeyup:l[0]||(l[0]=r=>e.value=!0),onFocus:y,autocomplete:"off"},null,42,pe),u(ce,{class:v(["w-[20px] h-[20px] absolute right-2 top-3 duration-300",e.value?"rotate-180":"rotate-0"])},null,8,["class"])],8,ye),e.value?(s(),o("section",fe,[(s(!0),o($,null,V(n(h),(r,I)=>(s(),o("div",{"data-test":`option-${r.value}`,tabindex:I,key:I,onClick:Be=>f(r),class:v(["w-full p-2 font-outfit text-black font-medium cursor-pointer",g.value===r.value?"text-blue-100 bg-sky-300 rounded-md shadow":"hover:bg-sky-100 hover:rounded-md hover:shadow"])},F(r.value),11,he))),128)),n(h).length===0?(s(),o("div",be," Nothing Found ")):p("",!0)])):p("",!0),t.errors.length?(s(),o("div",ve,[(s(!0),o($,null,V(t.errors,r=>(s(),N(S,{key:r.$uid,"data-test":`${t.label}-error`,message:r.$message},null,8,["data-test","message"]))),128))])):p("",!0)],512))}}),we={},$e={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50","xml:space":"preserve"},Ve=a("circle",{style:{fill:"#25AE88"},cx:"25",cy:"25",r:"25"},null,-1),_e=a("polyline",{style:{fill:"none",stroke:"#FFFFFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10"},points:`
	38,15 22,33 12,25 `},null,-1),ke=[Ve,_e];function De(t,m){return s(),o("svg",$e,ke)}var qe=A(we,[["render",De]]);const Se={key:0,class:"bg-gray-100 h-screen md:h-[90vw] md:fixed flex md:bg-gray-100"},Ce={class:"px-4 pt-4 max-w-[900px] md:mx-auto md:bg-white md:rounded-lg md:px-16 relative"},Oe=a("div",{class:"font-WorkSans flex flex-col items-center md:pt-2 md:pb-4"},[a("h1",{class:"text-gray-800 font-semibold text-3xl md:text-5xl"}," Create holiday "),a("span",{class:"text-gray text-base md:text-lg"}," Lorem ipsum dolor sit amet, consectetur . ")],-1),Fe={class:"flex flex-wrap gap-x-10 gap-y-3"},Ie={key:0,class:"text-red-900 font-normal font-outfit text-sm"},Me=a("span",null,"Your Holidays has been successfully created ",-1),Le=_({name:"CreateHolidayForm",props:{show:{type:Boolean,default:!0}},emits:["closeModal"],setup(t,{emit:m}){const i=U(),e=E({starting:"",type:{},ending:"",numberOfDays:"",returnDate:"",description:"",creationDate:""}),c=b(!1),g=q(()=>((w(e.ending).valueOf()-w(e.starting).valueOf())/864e5).toString()),f=q(()=>w(e.ending).add(1,"day").format("YYYY-MM-DD")),h=b(!1),C=q(()=>({starting:{required:x.withMessage("The starting date is required",D)},ending:{required:x.withMessage("The ending date is required",D)},type:{required:x.withMessage("The holiday type is required here",D)},numberOfDays:{requiredIf:x.withMessage("The starting and ending shouldn't be equal",K(e.starting===e.ending))},description:{required:x.withMessage("The holiday description is required here",D)}})),y=z(C,e),k=async()=>{await y.value.$validate()&&!c.value&&(T.value.push({type:e.type,starting:e.starting,ending:e.ending,description:e.description,numberOfDays:g.value,returnDate:f.value,creationDate:`${w().hour()}h${w().minute()}`}),localStorage.setItem("allHolidays",JSON.stringify(T.value)),h.value=!0,setTimeout(()=>{h.value=!1,Object.assign(e,{type:{},starting:"",ending:"",description:"",numberOfDays:"",returnDate:""}),y.value.$reset(),m("closeModal"),i.push("/holiday-list")},2e3))};return H(()=>[e.starting,e.ending],([d,l])=>{c.value=d>l&&l.length>0}),(d,l)=>t.show?(s(),o("div",Se,[a("form",Ce,[a("span",{class:"flex p-2.5 h-3 w-3 rounded-full border-2 border-gray justify-center items-center font-bold text-gray absolute right-4 cursor-pointer",onClick:l[0]||(l[0]=r=>d.$emit("closeModal"))},"x"),Oe,a("div",Fe,[u(xe,{placeholder:"Choose your holiday Type",modelValue:n(e).type,"onUpdate:modelValue":l[1]||(l[1]=r=>n(e).type=r),label:"Type",options:n(Y),errors:n(y).type.$errors,class:"w-full md:w-8/12"},null,8,["modelValue","options","errors"]),u(O,{class:"w-5/12 grow md:w-3/12",labelValues:"Starting date",modelValue:n(e).starting,"onUpdate:modelValue":l[2]||(l[2]=r=>n(e).starting=r),errors:n(y).starting.$errors,"data-test":"starting-date"},null,8,["modelValue","errors"]),u(O,{class:"w-5/12 grow md:w-3/12",labelValues:"Ending date",modelValue:n(e).ending,"onUpdate:modelValue":l[3]||(l[3]=r=>n(e).ending=r),errors:n(y).ending.$errors,"data-test":"ending-date"},null,8,["modelValue","errors"]),c.value?(s(),o("span",Ie,"The Ending Date most always be greater")):p("",!0),u(le,{class:"w-5/12 grow md:w-3/12",modelValue:n(g),"onUpdate:modelValue":l[4]||(l[4]=r=>M(g)?g.value=r:null),"data-test":"numDays",errors:n(y).numberOfDays.$errors},null,8,["modelValue","errors"]),u(O,{class:"w-5/12 grow md:w-3/12",labelValues:"Return date",readonly:!0,modelValue:n(f),"onUpdate:modelValue":l[5]||(l[5]=r=>M(f)?f.value=r:null),"data-test":"return-date"},null,8,["modelValue"])]),u(X,{class:"my-2 md:my-3",modelValue:n(e).description,"onUpdate:modelValue":l[6]||(l[6]=r=>n(e).description=r),errors:n(y).description.$errors},null,8,["modelValue","errors"]),u(W,{onClick:R(k,["prevent"]),label:"SUBMIT",class:"bg-blue-100 my-6 h-12 mx-auto text-white font-bold rounded-md flex text-lg md:text-xl md:my-14","data-test":"submit-button"},null,8,["onClick"])]),u(J,null,{default:B(()=>[u(G,{show:h.value},{default:B(()=>[Me,u(qe,{class:"w-8 h-8"})]),_:1},8,["show"])]),_:1})])):p("",!0)}});export{Le as default};