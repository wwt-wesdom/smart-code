<template>
  <div class="pos-relative shape-box" :style="getBoxStyle">
    <template v-if="compStyle.moving">
      <div class="auxiliary-line auxiliary-line-left" :style="getStyle('left')">
        <div class="auxiliary-num auxiliary-num-left" v-show="getStyle('left').num > 0">
          {{getStyle('left').num}}
        </div>
      </div>
      <template v-if="compStyle.type !== '4'">
        <div class="auxiliary-line auxiliary-line-top" :style="getStyle('top')">
          <div class="auxiliary-num auxiliary-num-top" v-show="getStyle('top').num > 0">
            {{getStyle('top').num}}
          </div>
        </div>
      </template>
      <div class="auxiliary-line auxiliary-line-right" :style="getStyle('right')">
        <div class="auxiliary-num auxiliary-num-right" v-show="getStyle('right').num > 0">
          {{getStyle('right').num}}
        </div>
      </div>
      <div class="auxiliary-line auxiliary-line-bottom" :style="getStyle('bottom')">
        <div class="auxiliary-num auxiliary-num-bottom" v-show="getStyle('bottom').num > 0">
          {{Number(getStyle('bottom').num) || ''}}
        </div>
      </div>
    </template>
    <section v-if="compStyle.selected">
      <div class="select-box top-left"></div>
      <div class="select-box top-center"></div>
      <div class="select-box top-right"></div>
      <div class="select-box left-center"></div>
      <div class="select-box right-center"></div>
      <div class="select-box bottom-left"></div>
      <div class="select-box bottom-center"></div>
      <div class="select-box bottom-right"></div>
    </section>
    <div v-if="compStyle.type !== '4'" class="boundary-line boundary-line-top" :style="getAdsorptionLineStyleTop"></div>
    <div class="boundary-line boundary-line-left" :style="getAdsorptionLineStyleLeft"></div>
    <div class="boundary-line boundary-line-right" :style="getAdsorptionLineStyleRight"></div>
    <div class="boundary-line boundary-line-bottom"  :style="getAdsorptionLineStyleBottom"></div>
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    },
    props: {
      compStyle: {
        type: Object,
         default: function () {
          return {}
        },
      }
    },
    created() {
    },
    mounted() {

    },
    computed: {
      getBoxStyle() {
        let obj = {
          width: this.compStyle.width + 'px',
          height: this.compStyle.height + 'px',
          left: this.compStyle.left + 'px',
          zIndex: this.compStyle.zIndex,
          border: this.compStyle.selected ? '1px solid #006eff' : 'none'
        };
        if (this.compStyle.type !== '4') {
          obj.top = this.compStyle.top + 'px'
        }
        return obj
      },
      getAdsorptionLineStyleLeft() {
        if (Number(this.compStyle.rLeft) === 0 && this.compStyle.moving) {
          return {
            height: this.getNum(this.compStyle.height) + 50 + 'px',
            width: '1px',
            'border-left': '1px dashed red',
            display: 'block',
          }
        }
      },
      getAdsorptionLineStyleRight() {
        if (Number(this.compStyle.rRight) === 0 && this.compStyle.moving) {
          return {
            height: this.getNum(this.compStyle.height) + 50 + 'px',
            width: '1px',
            'border-left': '1px dashed red',
            display: 'block',
          }
        }
      },
      getAdsorptionLineStyleTop() {
        if (Number(this.compStyle.rTop) === 0 && this.compStyle.moving) {
          return {
            width: this.getNum(this.compStyle.width) + 50 + 'px',
            height: '1px',
            'border-top': '1px dashed red',
            display: 'block',
          }
        }
      },
      getAdsorptionLineStyleBottom() {
        if (Number(this.compStyle.rBottom) === 0 && this.compStyle.moving) {
          return {
            width: this.getNum(this.compStyle.width) + 50 + 'px',
            height: '1px',
            'border-top': '1px dashed red',
            display: 'block',
          }
        }
      }
    },
    methods: {
      getNum(str) {
        return str || 0
      },

      getStyle(type) {
        let result;
        switch (type) {
          case 'left':
            result = {
              width: this.compStyle.rLeft + 'px',
              left: -this.compStyle.rLeft + 'px',
              top: (this.getNum(this.compStyle.height) / 2).toFixed(0) + 'px',
              num: Number(this.compStyle.rLeft).toFixed(0),
            };
            break;
          case 'top':
            result = {
              height: this.compStyle.rTop + 'px',
              left: (this.getNum(this.compStyle.width) / 2).toFixed(0) + 'px',
              top: -this.compStyle.rTop + 'px',
              num: Number(this.compStyle.rTop).toFixed(0),
            };
            break;
          case 'right':
            let rRight = this.compStyle.rRight;
            result = {
              width: rRight + 'px',
              right: -rRight + 'px',
              top: (this.getNum(this.compStyle.height) / 2).toFixed(0) + 'px',
              num: Number(rRight).toFixed(0),
            };
            break;
          case 'bottom':
            let bottom = this.compStyle.rBottom;
            if (bottom === -1) {
              result = {height: 0, num: 0}
            } else {
              result = {
                height: bottom + 'px',
                left: (this.getNum(this.compStyle.width) / 2).toFixed(0) + 'px',
                bottom: -bottom + 'px',
                num: Number(bottom).toFixed(0),
              };
            }
            break;
        }
        return result
      },

      getSelectStyle(type) {
        let result;
        switch (type) {
          case 'left':
          case 'right':
            result = {
              height: this.compStyle.height + 'px',
            };
            break;
          case 'top':
          case 'bottom':
            result = {
              width: this.compStyle.width + 'px',
            };
            break;
        }
        return result;
      }
    },
  }
</script>

<style scoped>

</style>
