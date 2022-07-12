<template>
  <div style="width: 100%; height: 100%; background-color:#F5F5F5;" class="flex-center-center">
    <template  v-if="item.src">
      <img style="vertical-align: top; width: 100%; height: 100%"
           :src="item.src"
           alt="">
    </template>
    <template v-else>
      <span class="iconhuaban3 iconfont fz16 cl-006EFF"></span>
    </template>
  </div>
</template>

<script>
  export default {
    name: "cImg",
    props: {
      item: {
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
