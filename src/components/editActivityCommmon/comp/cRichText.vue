<template>
  <div :style="getRichTextStyle()"
       style="width: 100%; height: 100%;"
       class="background-cover">
    <template v-if="!item.bgImg && item.bgType === 'bgImg'">
      <div class="img-bg-default rich-text-default">
        <span class="iconhuaban3 iconfont fz16 cl-006EFF"></span>
      </div>
    </template>
    <div v-html="item.text"></div>
  </div>

</template>

<script>
  import customCompMixin from '../../../mixin/index';

  export default {
    name: "cRichText",
    mixins: [customCompMixin],
    methods: {
      getRichTextStyle() {
        let textStyle = {};
        if (this.item.bgType === 'bgColor') {
          textStyle.backgroundColor = this.item.bgColor
        } else {
          textStyle.backgroundImage = this.getBgImg(this.item.bgImg);
        }
        return textStyle
      }
    }
  }
</script>

<style scoped>

</style>
