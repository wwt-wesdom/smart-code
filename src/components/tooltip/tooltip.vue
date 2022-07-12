<template>
  <el-tooltip placement="right" effect="dark">
    <div slot="content">
      {{content}}
    </div>
    <i class="iconfont iconbiaotoujishuomingwenhao  fs-14 cl-888 cursor-point ml10"></i>
  </el-tooltip>

</template>

<script>
  export default {
    name: "tooltip",
    props: ['content']
  }
</script>

<style scoped>

</style>
