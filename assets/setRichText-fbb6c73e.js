import{_ as i}from"./setCompMixin-18fc3101.js";import{_ as c,a as p,d as o,w as a,c as u,b as n,r as l,o as _,e as f,q as b}from"./index-1a5453e3.js";const x={config:u},V={name:"setRichText",mixins:[i],data(){return{customToolbar:x}}},v=n("div",{class:"pb14"},[n("span",{class:"set-comp-title"},"富文本")],-1);function T(e,t,$,k,w,I){const m=l("el-form-item"),r=l("background-set"),d=l("el-form");return _(),p("div",null,[v,o(d,{"label-width":"120px"},{default:a(()=>[o(m,{label:"内容"},{default:a(()=>[f(n("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>e.editItem.text=s)},null,512),[[b,e.editItem.text]])]),_:1}),o(m,{label:"背景设置"},{default:a(()=>[o(r,{modelValue:e.editItem,"onUpdate:modelValue":t[1]||(t[1]=s=>e.editItem=s)},null,8,["modelValue"])]),_:1})]),_:1})])}const B=c(V,[["render",T]]);export{B as default};