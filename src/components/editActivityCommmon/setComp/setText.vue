<template>
  <div>
    <div class="pb14">
      <span class="set-comp-title">文本</span>
    </div>
    <el-form label-width="120px">
      <el-form-item label="内容">
        <el-input v-model="editItem.text" width="210px"></el-input>
      </el-form-item>
      <el-form-item label="文本样式">
        <color-picker v-model="editItem.color"></color-picker>
        <el-select width="100px" v-model="editItem.fontSize" class="ml10">
          <el-option v-for="item in fontSizeOptions" :label="item" :value="item" :key="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="背景设置">
        <background-set v-model="editItem"></background-set>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import setCompMixin from '../../../mixin/setCompMixin.vue'
import config from '../../../config/config'

export default {
  name: "setText",
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
