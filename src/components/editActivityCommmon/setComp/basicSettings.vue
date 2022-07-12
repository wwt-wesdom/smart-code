<template>
  <div class="fs-12 basic-setting">
    <el-form label-width="120px" :model="item" ref="basicForm">
      <div class="set-comp-title-box" :style="getSpecialStyle()">
        <span class="set-comp-title">大小</span>
        <el-checkbox v-model="item.lockAspectRatio">锁定宽高比</el-checkbox>
      </div>
      <el-form-item label="宽/高">
        <el-input :disabled="widthDisabled" type="number" @input.native="widthChange" v-model.number="item.width"  width="100px">
          <template slot="append">px</template>
        </el-input>
        <el-input :disabled="heightDisabled" class="ml10" type="number" @input.native="heightChange" v-model.number="item.height"
                   width="100px">
          <template slot="append">px</template>
        </el-input>
      </el-form-item>
      <template v-if="showPosition">
        <div class="set-comp-title-box">
          <span class="set-comp-title">位置</span>
        </div>
        <el-form-item label="位置类型">
          <el-radio-group v-model="item.positionType"
                           @change="positionTypeChange">
            <el-radio label="1">绝对位置</el-radio>
            <el-radio label="2" v-if="item.type !== '4'">相对位置</el-radio>
          </el-radio-group>
        </el-form-item>
        <template v-if="item.positionType === '1'">
          <el-form-item label="X/Y">
            <el-input type="number" v-model.number="item.left" width="100px">
              <template slot="append">px</template>
            </el-input>
            <el-input :disabled="yDisabled" class="ml10" type="number" v-model.number="item.top" width="100px">
              <template slot="append">px</template>
            </el-input>
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item label="组件间距">
            <el-input type="number" @input="rTopChange" v-model.number="rTop" width="210px">
              <template slot="append">px</template>
            </el-input>
          </el-form-item>
        </template>
      </template>
      <div class="set-comp-title-box">
        <span class="set-comp-title">布局/层级</span>
      </div>
      <el-form-item label="布局">
        <el-icon-button
                :content="item.content"
                :icon="item.icon"
                v-for="(item, index) in layoutTypeList"
                @click.native="layoutTypeChange(item.type)"
                :class="[index > 0 ? 'ml20' : '']"
                style="height: 36px; line-height: 36px;"
                class="c888">
        </el-icon-button>
      </el-form-item>
      <el-form-item label="层级">
        <el-icon-button
                :content="item.content"
                :icon="item.icon"
                v-for="(item, index) in zIndexTypeList"
                @click.native="zIndexTypeChange(item.type)"
                style="height: 36px; line-height: 36px;"
                :class="[index > 0 ? 'ml20' : '']"
                class="c888">
        </el-icon-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "basicSettings",
    data() {
      return {
        item: this.value,
        rTop: 0,
        layoutTypeListSource: [
          {type: '1', icon: 'icona-huabanbeifen9', content: '左右居中'},
          {type: '2', icon: 'icona-huabanbeifen10', content: '贴左边'},
          {type: '3', icon: 'icona-huabanbeifen8', content: '贴右边'},
          {type: '4', icon: 'iconhuaban1', content: '贴顶'},
        ],
        zIndexTypeList: [
          {type: '1', icon: 'icona-huabanbeifen14', content: '置于顶层'},
          {type: '2', icon: 'icona-huabanbeifen13', content: '置于底层'},
          {type: '3', icon: 'icona-huabanbeifen12', content: '上移一层'},
          {type: '4', icon: 'icona-huabanbeifen11', content: '下移一层'},
        ]
      }
    },
    props: {
      value: {
        require: true,
        type: Object,
        default: function () {
          return {}
        },
      },
    },
    created() {
      // 初始化时确定宽高比
      this.ratio = Number((this.item.width / this.item.height).toFixed(2));
    },
    computed: {
      showPosition() {
        return this.item.type !== '0'
      },

      layoutTypeList() {
        if (this.item.type === '4') {
          return this.layoutTypeListSource.slice(0, 3);
        } else {
          return this.layoutTypeListSource;
        }
      },

      widthDisabled() {
        return this.item.type === '17'
      },

      heightDisabled() {
        return this.item.type === '17'
      },

      yDisabled() {
        return this.item.type === '4'
      }
    },
    methods: {
      zIndexTypeChange(value) {
        this.$emit('zIndexTypeChange', value);
      },

      getSpecialStyle() {
        //type === '15' cTransparentBtn 透明按钮
        if (this.item.type === '15') {
          return {
            border: 'none',
            paddingTop: 0,
          }
        }
      },

      layoutTypeChange(value) {
        this.$emit('layoutTypeChange', value);
      },

      positionTypeChange(value) {
        this.$emit('positionTypeChange', value);
      },

      rTopChange(value) {
        this.item.top = this.item.top + (Number(value) - this.item.rTop);
        this.item.rTop = Number(value);
      },

      widthChange() {
        if (this.item.lockAspectRatio) {
          this.item.height = Number((this.item.width / this.ratio).toFixed(0))
        }
      },

      heightChange() {
        if (this.item.lockAspectRatio) {
          this.item.width = Number((this.item.height * this.ratio).toFixed(0))
        }
      }
    },
    watch: {
      item: {
        deep: true,
        handler(newVal) {
          this.rTop = newVal.rTop;
          this.$emit('input', this.item)
        }
      },
    }
  }
</script>

<style scoped>

</style>
