<template>
  <div class="left bgfff">
    <div @click="basicCompShow = !basicCompShow" class="comp-title">
      <i class="tzt-icon-arrow-down arrow cl-888" :class="[basicCompShow ? '' : 'active']"></i>
      <span>基础组件</span>
    </div>
    <el-collapse-transition>
      <div v-show="basicCompShow" class="basic-comp">
        <div v-for="item in basicComp"
             class="comp-item"
             draggable="true"
             :key="item.title"
             :data-item="JSON.stringify(item)"
             @dragstart="dragstart">
          <span :class="item.icon" class="iconfont fz26" draggable="false"/>
          <p class="center mt8">{{item.title}}</p>
        </div>
      </div>
    </el-collapse-transition>

  </div>
</template>

<script>
  import config from '../../config/config';

  export default {
    name: "left",
    data() {
      return {
        basicCompShow: true,
        complexCompShow: true,
        basicComp: config.basicComp,
        complexComp: config.complexComp,
      }
    },
    created() {
    },
    mounted() {

    },
    computed: {},
    methods: {
      dragstart(e) {
        const dragType = JSON.parse(e.target.getAttribute('data-item')).type;
        this.$emit('handleDrag', dragType)
      },
    },
  }
</script>

<style scoped>

</style>
