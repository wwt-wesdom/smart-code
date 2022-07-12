<template>
  <div class="pos-relative bgfff common-color-picker" style="height: 36px; width: 100px; display: inline-block" :key="uploadId">
    <el-color-picker
            v-model="color"
            :predefine="predefineColors"
            style="opacity: 0; position:absolute; z-index: 10; height: 36px; width: 100%"
            @change="change">
    </el-color-picker>
    <div class="c-flex color-picker flex-space-between align-items-center">
      <span class="c333 fz14">{{color}}</span>
      <span class="color-picker-select" :style="{backgroundColor: color}"></span>
    </div>
  </div>
</template>

<script>
  import config from '../config/config'
  export default {
    name: "colorPicker",
    data() {
      return {
        uploadId: config.getUuid(),
        color: this.value,
        predefineColors: [
          '#AAAAAA',
          '#777777',
          '#333333',
          '#FF5C5C',
          '#FFBC4A',
          '#FEF952',
          '#99E265',
          '#38B72A',
          '#44D9E5',
          '#2FB2FF',
          '#5371FF',
          '#B85FE7',
          '#FF64B0',
          '#FFFFFF',
          '#F8F8F8',
        ]
      }
    },
    props: {
      value: {
        require: false,
        type: String,
        default: '',
      }
    },
    methods: {
      change() {
        let color = this.color ?  this.color : '';
        this.$emit('change', color);
        this.$emit('input', color);
      }
    },
    mounted() {
    },
    watch: {
      value(newVal, oldVal) {
        this.color = newVal;
      }
    }
  }
</script>

<style scoped>

</style>
