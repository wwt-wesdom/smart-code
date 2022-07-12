<template>
  <div>
    <el-form label-width="120px" :model="editItem" ref="setPage">
      <div class="pb20">
        <span class="set-comp-title">页面</span>
      </div>
      <el-form-item label="页面标题">
        <el-input @change="checkPageTitle($event)" width="210px" maxlength="8"
                   v-model="editItem.pageTitle" placeholder="请输入至少两个字符"></el-input>
      </el-form-item>
      <el-form-item label="背景设置">
        <background-set v-model="editItem"></background-set>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  import backgroundSet from "../../backgroundSet/backgroundSet";
  export default {
    name: "setPage",
    components: {
      backgroundSet,
    },
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
    methods: {
      /**
       * 表单验证
       * 验证页面标题
       */
      checkPageTitle(value) {
        if (!value) {
          this.$message.error('页面标题不能为空');
          return false;
        } else if (value.length < 2) {
          this.$message.error('页面标题至少两个字符');
          return false;
        } else if (value.length > 10){
          this.$message.error('页面标题最多10个字符');
          return  false;
        } else {
          return true;
        }
      },
    },
  }
</script>

<style scoped>

</style>
