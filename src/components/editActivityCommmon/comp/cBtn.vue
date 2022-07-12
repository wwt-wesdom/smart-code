<template>
  <button :style="getBtnStyle(item)"
          class="background-cover custom-button">
    <template v-if="!item.bgImg && item.btnType === '3'">
      <div class="img-bg-default">
        <span class="iconhuaban3 iconfont fz16 cl-006EFF"></span>
      </div>
    </template>
    <template v-else>
      {{btnText}}
    </template>
  </button>
</template>

<script>
  import customCompMixin from '../../../mixin/index';
  export default {
    name: "cBtn",
    mixins: [customCompMixin],
    computed: {
      btnText()  {
        return this.item.btnType !== '3' ?  this.item.text : ''
      }
    }
  }
</script>

<style scoped>

</style>
