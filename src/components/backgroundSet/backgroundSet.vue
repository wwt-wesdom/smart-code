<template>
  <div>
    <div>
      <el-radio v-model="editItem.bgType" label="bgColor">颜色背景</el-radio>
      <el-radio v-model="editItem.bgType" label="bgImg">图片背景</el-radio>
    </div>
    <div v-show="editItem.bgType === 'bgColor'" style="height: 30px;">
      <color-picker v-model="editItem.bgColor" @change="colorPickerChange"></color-picker>
    </div>
    <div v-show="editItem.bgType === 'bgImg'" class="upload-img">
      <upload-img limitSize="100" height="104px" width="104px" v-model="editItem.bgImg" @change="singleUploadChange"></upload-img>
      <div class="cl-888 fs-12 lh12 mt12">图片大小不超过100kb</div>
    </div>
  </div>

</template>

<script>
  import uploadImg from '../uploadImg/uploadImg.vue'
  import colorPicker from '../colorPicker.vue'
  export default {
    name: "backgroundSet",
    data() {
      return {
        editItem: this.value
      }
    },
    components: {
      uploadImg,
      colorPicker,
    },
    props: {
      value: {
        type: Object,
        require: true,
        default: {}
      }
    },
    computed: {

    },
    methods: {
      /**
       * 普通图片上传回调
       */
      singleUploadChange(val) {
        this.$set(this.editItem, 'bgColor', '');
      },

      /**
       * 颜色选取组件回调
       */
      colorPickerChange(val) {
        this.$set(this.editItem, 'bgImg', '')
      },
    },
    mounted() {
    },
  }
</script>

<style scoped>

</style>
