import{_ as b,a as h,b as d,d as l,w as a,e as r,v as g,r as i,o as I,l as u}from"./index-1a5453e3.js";const _={name:"backgroundSet",data(){return{editItem:this.value}},props:{value:{type:Object,require:!0,default:{}}},computed:{},methods:{singleUploadChange(n){this.$set(this.editItem,"bgColor","")},colorPickerChange(n){this.$set(this.editItem,"bgImg","")}},mounted(){}},C={style:{height:"30px"}},V={class:"upload-img"},v=d("div",{class:"cl-888 fs-12 lh12 mt12"},"图片大小不超过100kb",-1);function f(n,o,k,x,e,m){const s=i("el-radio"),p=i("color-picker"),c=i("upload-img");return I(),h("div",null,[d("div",null,[l(s,{modelValue:e.editItem.bgType,"onUpdate:modelValue":o[0]||(o[0]=t=>e.editItem.bgType=t),label:"bgColor"},{default:a(()=>[u("颜色背景")]),_:1},8,["modelValue"]),l(s,{modelValue:e.editItem.bgType,"onUpdate:modelValue":o[1]||(o[1]=t=>e.editItem.bgType=t),label:"bgImg"},{default:a(()=>[u("图片背景")]),_:1},8,["modelValue"])]),r(d("div",C,[l(p,{modelValue:e.editItem.bgColor,"onUpdate:modelValue":o[2]||(o[2]=t=>e.editItem.bgColor=t),onChange:m.colorPickerChange},null,8,["modelValue","onChange"])],512),[[g,e.editItem.bgType==="bgColor"]]),r(d("div",V,[l(c,{limitSize:"100",height:"104px",width:"104px",modelValue:e.editItem.bgImg,"onUpdate:modelValue":o[3]||(o[3]=t=>e.editItem.bgImg=t),onChange:m.singleUploadChange},null,8,["modelValue","onChange"]),v],512),[[g,e.editItem.bgType==="bgImg"]])])}const T=b(_,[["render",f]]);export{T as default};