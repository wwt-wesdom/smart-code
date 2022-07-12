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
  export default {
    name: "setAnchorPoint",
    data() {
      return {
        editItem: this.value,
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
