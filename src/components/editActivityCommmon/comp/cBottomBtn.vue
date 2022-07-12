<template>
  <button :style="getBottomBtnStyle(item)"
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
    name: "cBottomBtn",
    mixins: [customCompMixin],
    data() {
      return {
      }
    },
    computed: {
      btnText()  {
        return this.item.btnType !== '3' ?  this.item.text : ''
      }
    },
    methods: {
      /**
       * 计算按钮样式
       */
      getBottomBtnStyle(item) {
        let baseStyle = {
          height: item.height + 'px',
          width: item.width + 'px',
          left: item.left + 'px',
        };
        let type1 = {
          fontSize: item.fontSize + 'px',
          color: item.color,
        };
        let type2 = {
          backgroundColor: item.bgColor,
          borderRadius: item.radius + 'px',
        };
        let type3 = {
          backgroundImage: this.getBgImg(item.bgImg),
        };
        if (item.btnType === '1') {
          return {...baseStyle, ...type1, ...type2};
        } else if (item.btnType === '2') {
          return {...baseStyle, ...type1}
        } else if (item.btnType === '3') {
          return {...baseStyle, ...type3}
        }
      },
    },
  }
</script>

<style scoped>

</style>
