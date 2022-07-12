<template>
</template>
<script>
  export default {
    name: "index",
    data() {
      return {
      }
    },
    props: {
      item: {
        require: true,
        type: Object,
        default: function () {
          return {}
        },
      },
    },
    methods: {
      /**
       * 动态设置背景图片
       */
      getBgImg(img) {
        if (img) {
          return 'url('+img+')'
        } else {
          return '';
        }
      },

      /**
       * 动态设置边框颜色
       */
      border(color) {
        return '1px dashed' + color
      },

      /**
       * 计算按钮样式
       */
      getBtnStyle(item) {
        let baseStyle = {
          height: '100%',
          width: '100%',
        };
        if (item.inner) {
          baseStyle = {
            height: item.height + 'px',
            width: item.width + 'px',
          }
        }
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
