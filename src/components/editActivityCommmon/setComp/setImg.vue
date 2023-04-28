<template>
  <div>
    <div class="pb14">
      <span class="set-comp-title">图片</span>
    </div>
    <el-form label-width="120px" :model="editItem" ref="setImg">
      <el-form-item label="图片">
        <div class="upload-img">
          <upload-img limitSize="100" height="104px" width="104px" v-model="editItem.src"></upload-img>
          <div class="cl-888 fs-12 lh12 mt12">图片大小不超过100kb</div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import setCompMixin from '../../../mixin/setCompMixin.vue'

export default {
  name: "setImg",
  // mixins: [setCompMixin],
  props: {
    modelValue: {
      require: true,
      type: Object,
      default: function () {
        return {}
      },
    },
  },
  data() {
    return {
      editItem: this.modelValue,
    }
  },
  watch: {
    editItem: {
      deep: true,
      handler(newVal) {
        this.$emit('update:modelValue', this.editItem)
      }
    },
  }
}
</script>

<style scoped>

</style>
