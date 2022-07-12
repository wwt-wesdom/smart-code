<template>
  <div>
    <div class="pb14">
      <span class="set-comp-title">富文本</span>
    </div>
    <el-form label-width="120px">
      <el-form-item label="内容">
        <input type="text" v-model="editItem.text">
      </el-form-item>
      <el-form-item label="背景设置">
        <background-set v-model="editItem"></background-set>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  import config from '../../../config/config'
  import backgroundSet from "../../backgroundSet/backgroundSet";

  const customToolbar = {config};
  export default {
    name: "setRichText",
    components: {
      backgroundSet,
    },
    data() {
      return {
        editItem: this.value,
        customToolbar: customToolbar,
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
  }
</script>

<style scoped>

</style>
