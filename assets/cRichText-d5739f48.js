import{_ as n,p as a,a as t,k as c,b as o,g as r,o as s}from"./index-1a5453e3.js";const l={name:"cRichText",mixins:[a],methods:{getRichTextStyle(){let e={};return this.item.bgType==="bgColor"?e.backgroundColor=this.item.bgColor:e.backgroundImage=this.getBgImg(this.item.bgImg),e}}},g={key:0,class:"img-bg-default rich-text-default"},m=o("span",{class:"iconhuaban3 iconfont fz16 cl-006EFF"},null,-1),d=[m],h=["innerHTML"];function _(e,u,b,f,p,i){return s(),t("div",{style:r([i.getRichTextStyle(),{width:"100%",height:"100%"}]),class:"background-cover"},[!e.item.bgImg&&e.item.bgType==="bgImg"?(s(),t("div",g,d)):c("",!0),o("div",{innerHTML:e.item.text},null,8,h)],4)}const y=n(l,[["render",_]]);export{y as default};
