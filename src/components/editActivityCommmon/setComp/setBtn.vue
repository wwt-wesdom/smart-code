<template>
  <div>
    <el-form label-width="120px" :model="editItem" ref="setBtn">
      <div class="pb20">
        <span class="set-comp-title">按钮</span>
      </div>
      <el-form-item label="按钮类型">
        <el-radio v-model="editItem.btnType" label="1">常规</el-radio>
        <el-radio v-model="editItem.btnType" label="2">文字</el-radio>
        <el-radio v-model="editItem.btnType" label="3">图片</el-radio>
      </el-form-item>
      <div v-if="editItem.btnType === '1' || editItem.btnType === '2'">
        <el-form-item label="按钮文案">
          <el-input width="210px" v-model="editItem.text"></el-input>
        </el-form-item>
        <el-form-item label="文案样式">
          <color-picker v-model="editItem.color"></color-picker>
          <el-select width="100px" v-model="editItem.fontSize" class="ml10">
            <el-option v-for="item in fontSizeOptions" :label="item" :value="item" :key="item"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div v-if="editItem.btnType === '1'">
        <el-form-item label="按钮颜色">
          <color-picker v-model="editItem.bgColor"></color-picker>
        </el-form-item>
        <el-form-item label="圆角半径">
          <el-input width="210px" v-model="editItem.radius"></el-input>
        </el-form-item>
      </div>
      <div v-if="editItem.btnType === '3'">
        <el-form-item label="">
          <div>
            <upload-img limitSize="100" height="104px" width="104px" v-model="editItem.bgImg"></upload-img>
            <div class="cl-888 fs-12 lh12 mt12">图片大小不超过100kb</div>
          </div>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import setCompMixin from '../../../mixin/setCompMixin.vue'
import config from '../../../config/config'

export default {
  name: "setBtn",
  mixins: [setCompMixin],
  data() {
    return {
      fontSizeOptions: config.fontSizeOptions,
    }
  },
}
</script>

<style scoped>

</style>
