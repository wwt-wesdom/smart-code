<template>
  <div style="display: inline-block; background: #F5F5F5;border: 1px solid #ddd;">
    <div class="flex-center-center pos-relative upload-img-label" :style="{height: height, width: width}">
      <input style="display: none;"
             type="file"
             @input="uploadImgTest"
             :id="'uploadImg_'+uploadId"
             name="image"
             ref="uploadImg"
             accept="image/*">
      <label :for="'uploadImg_'+uploadId">
        <img v-if="imgSrc" class="block" :style="getImgStyle" :src="imgSrc" alt="">
        <div v-else >
          <slot>
            <div class="center">
              <i class="tzt-icon-plus c999 fs-30"></i>
              <div class="c999">上传图片</div>uploadImg
            </div>
          </slot>
        </div>
      </label>
      <div class="upload-img-mask-father" v-if="showMask">
        <div class="upload-img-mask">
          <label class="pd5 cursor-point" :for="'uploadImg_'+uploadId">修改</label>
          <span class="pd5 cursor-point" @click="restore">还原</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import config from '../../config/config'
  export default {
    name: "uploadImg",
    data() {
      return {
        uploadId: config.getUuid(),
        imgSrc: this.value,
        copyImgSrc: this.value, // 用于还原
        imgWidth: 0,
        imgHeight: 0
      }
    },
    props: {
      width: {
        require: true,
        type: String,
        default: '104px'
      },
      height: {
        require: true,
        type: String,
        default: '104px'
      },
      value: {
        require: false,
        type: String,
        default: '',
      },
      type: {
        require: false,
        type: String,
        default: 'single',
      },
      fill: {
        require: false,
        type: String,
        default: 'cover'
      },
      showMask: {
        require: false,
        type: Boolean,
        default: false
      },
    },
    computed: {
      getImgStyle() {
        let style = {};
        if (!this.imgWidth) {
          if (this.fill === 'cover') {
            style = {
              width: this.width,
              height: this.height,
            }
          } else if (this.fill === 'fillWidth') {
            style = {
              width: this.width,
              height: 'auto'
            }
          } else {
            style = {
              height: this.height,
              width: 'auto'
            }
          }
        } else {
          if (this.imgWidth >= this.imgHeight) {
            style = {
              width: this.width,
              height: 'auto'
            }
          } else {
            style = {
              width: 'auto',
              height: this.height
            }
          }
        }
        return style;
      },
    },
    methods: {
      getRealWidthHeight() {
        if (!this.value) return;
        // 图片地址
        let img_url = this.value;
        // 创建对象
        let img = new Image();
        // 改变图片的src
        img.src = img_url;
        // 加载完成执行
        img.onload = () => {
          // 打印
          this.imgWidth = img.width;
          this.imgHeight = img.height;
        }
      },
      uploadImgTest(e) {
        const that = this;
        const imgFile = {};
        const file = e.target.files[0];
        if (!file) return;
        imgFile.type = file.type || "image/jpeg";
        imgFile.size = file.size;
        imgFile.name = file.name;
        imgFile.lastModifiedDate = file.lastModifiedDate;
        const size = (file.size / 1024).toFixed(2); // 单位 KB
        /* if (size > 100) {
           this.$message('上传失败，图片大小不能超过100kb');
           return;
         }*/
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =  (e) => {
          const result = e.target.result;
          const image = new Image();
          let width = 0;
          let height = 0;
          image.onload = function () {
            width = image.width; // 获取图片宽度
            height = image.height; // 获取图片高度
            that.imgWidth = width;
            that.imgHeight = height;
            if (that.type === 'single') {
              that.imgSrc = result;
              that.$emit('change', result);
              that.$emit('input', result);
            } else {
              let obj = {
                result,
                width: width,
                height: height
              };
              that.$emit('change', obj);
            }
            that.$refs.uploadImg.value = ''; // 将input输入值清空，上传同一张图片时会再次触发input事件
          };
          // console.log(result);
          image.src = result; // 绘制图片
        };
      },
      /**
       * 还原
       */
      restore() {
        this.imgSrc = this.copyImgSrc;
        this.imgWidth = 0;
        this.imgHeight = 0;
        this.$emit('change',  this.imgSrc);
        this.$emit('input',  this.imgSrc);
      }
    },
    mounted() {
      this.getRealWidthHeight();
    },
    watch: {
      value(newVal, oldVal) {
        this.imgSrc = newVal;
      }
    }
  }
</script>

<style scoped>

</style>
