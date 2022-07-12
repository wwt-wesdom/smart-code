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
  import uploadImg from "../../uploadImg/uploadImg";
  export default {
    name: "setImg",
    components: {
      uploadImg
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
  }
</script>

<style scoped>

</style>
