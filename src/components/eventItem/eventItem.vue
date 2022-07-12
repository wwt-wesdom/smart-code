<template>
  <div class="event-item-content" :style="{padding: eventParams.event ? '12px' : 0}">
    <!--具体事件处理-->
    <!--链接-->
    <template v-if="eventParams.event === 'link'">
      <el-input maxlength="2000" width="225px" placeholder="请输入链接以http或https开头" v-model="eventParams.link"></el-input>
      <span class="c888 fz12 ml10">{{eventParams.link.length || 0}}/2000</span>
    </template>
    <!--营销宣传页-->
    <template v-if="eventParams.event === 'page'">
      <el-select width="296px" placeholder="请选择需要跳转的页面" v-model="eventParams.page">
        <el-option v-for="item in pageOptions.list" :value="item.value" :label="item.label"></el-option>
      </el-select>
    </template>
    <!--文字弹屏-->
    <template v-if="eventParams.event === 'textPop'">
      <el-input width="296px" maxlength="10" placeholder="请输入弹屏标题" v-model="eventParams.textPopTitle"></el-input>
      <vue-editor
              class="mt-10"
              v-model="eventParams.textPopContent"
              :toolBar="customToolbar"
              id="pushcontainer">
      </vue-editor>
    </template>
    <!--图片弹屏-->
    <template v-if="eventParams.event === 'imgPop'">
      <upload-img limitSize="100" height="104px" width="104px" v-model="eventParams.imgUrl"></upload-img>
      <div class="cl-888 fs-12 mt12 lh12">图片大小不超过100kb</div>
      <el-input class="mt20" maxlength="2000" width="225px" placeholder="请输入链接以http或https开头" v-model="eventParams.imgPopLink"></el-input>
      <span class="c888 fz12 ml10">{{eventParams.imgPopLink.length || 0}}/2000</span>
    </template>
    <!--客服-->
    <template v-if="eventParams.event === 'service'">
      <el-input type="number" width="268px" placeholder="请输入号码" v-model="eventParams.serviceNum"></el-input>
      <tooltip class="ml10" effect="dark" content="用户点击后，自动调起配置的电话号码"></tooltip>
    </template>
    <!--锚点-->
    <template v-if="eventParams.event === 'anchorPoint'">
      <el-select width="296px" placeholder="请选择锚点" v-model="eventParams.point">
        <el-option v-for="item in options.list" :value="item.value" :label="item.label"></el-option>
      </el-select>
    </template>
  </div>

</template>

<script>

  import uploadImg from "../uploadImg/uploadImg";
  import tooltip from "../tooltip/tooltip";
  import config from '../../config/config'
  const {customToolbar} = config;
  export default {
    name: "eventItem",
    inject: ['options', 'awardOptions', 'pageOptions'],
    components: {
      uploadImg,
      tooltip,
    },
    data() {
      return {
        eventParams: this.value,
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
      }
    },
    methods: {},
    mounted() {
    },
    watch: {
      eventParams(newVal, oldVal) {
        this.$emit('input', this.eventParams);
      },
      value(n, o) {
        this.eventParams = n;
      }
    }
  }
</script>

<style scoped>

</style>
