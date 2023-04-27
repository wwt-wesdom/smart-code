<template>
  <div>
    <div class="pb14">
      <span class="set-comp-title">锚点</span>
    </div>
    <el-form label-width="120px">
      <el-form-item label="锚点名称" prop="name">
        <el-input maxlength="20" v-model="editItem.name" width="210px"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import setCompMixin from '../../../mixin/setCompMixin.vue'
export default {
  name: "setAnchorPoint",
  mixins: [setCompMixin],

}
</script>

<style scoped>

</style>
