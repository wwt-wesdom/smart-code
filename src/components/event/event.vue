<template>
  <div>
    <div class="pb20">
      <span class="set-comp-title">事件类型</span>
    </div>
    <el-select v-model="eventParams.event" width="210px">
      <el-option v-for="item in eventOptions" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <event-item v-model="eventParams"></event-item>
  </div>

</template>

<script>
  export default {
    name: "event",
    data() {
      return {
        eventParams: this.value,
        eventOptions: [
          {value: '', label: '无'},
          {value: 'link', label: '链接'},
          {value: 'page', label: '营销宣传页'},
          {value: 'textPop', label: '文字弹屏'},
          {value: 'imgPop', label: '图片弹屏'},
          {value: 'service', label: '客服'},
          {value: 'anchorPoint', label: '锚点'},
        ],
        conditionOptions: [{value: '', label: '无'}],
      }
    },
    props: {
      title: {
        require: true,
        type: String,
        default: '普通事件',
      },
      compTitle: {
        require: true,
        type: String,
        default: '',
      },
      value: {
        require: true,
        type: Object,
        default: function () {
          return {}
        },
      },
      activityId: {
        require: true,
        type: String,
        default: '',
      }
    },
    created() {
    },
    methods: {
    },
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
