import{_ as m,a as r,d as s,w as c,b as u,r as n,o,F as d,f as _,h as b}from"./index-1a5453e3.js";const f={name:"event",data(){return{eventParams:this.value,eventOptions:[{value:"",label:"无"},{value:"link",label:"链接"},{value:"page",label:"营销宣传页"},{value:"textPop",label:"文字弹屏"},{value:"imgPop",label:"图片弹屏"},{value:"service",label:"客服"},{value:"anchorPoint",label:"锚点"}],conditionOptions:[{value:"",label:"无"}]}},props:{title:{require:!0,type:String,default:"普通事件"},compTitle:{require:!0,type:String,default:""},value:{require:!0,type:Object,default:function(){return{}}},activityId:{require:!0,type:String,default:""}},created(){},methods:{},mounted(){},watch:{eventParams(a,e){this.$emit("input",this.eventParams)},value(a,e){this.eventParams=a}}},P=u("div",{class:"pb20"},[u("span",{class:"set-comp-title"},"事件类型")],-1);function V(a,e,h,g,l,x){const i=n("el-option"),v=n("el-select"),p=n("event-item");return o(),r("div",null,[P,s(v,{modelValue:l.eventParams.event,"onUpdate:modelValue":e[0]||(e[0]=t=>l.eventParams.event=t),width:"210px"},{default:c(()=>[(o(!0),r(d,null,_(l.eventOptions,t=>(o(),b(i,{label:t.label,value:t.value},null,8,["label","value"]))),256))]),_:1},8,["modelValue"]),s(p,{modelValue:l.eventParams,"onUpdate:modelValue":e[1]||(e[1]=t=>l.eventParams=t)},null,8,["modelValue"])])}const y=m(f,[["render",V]]);export{y as default};
