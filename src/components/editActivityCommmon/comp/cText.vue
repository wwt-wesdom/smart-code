<template>
  <div :style="getTextStyle()"
       style="width: 100%; height: 100%;"
       class="background-cover">
    <template v-if="!item.bgImg && item.bgType === 'bgImg'">
      <div class="img-bg-default rich-text-default">
        <span class="iconhuaban3 iconfont fz16 cl-006EFF"></span>
      </div>
    </template>
    <template>
      {{item.text}}
    </template>
  </div>

</template>

<script>
  import customCompMixin from '../../../mixin/index'
  export default {
    name: "cText",
    mixins: [customCompMixin],
    methods: {
      getTextStyle() {
        let textStyle = {
          fontSize: this.item.fontSize + 'px',
          color: this.item.color,
        };
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
