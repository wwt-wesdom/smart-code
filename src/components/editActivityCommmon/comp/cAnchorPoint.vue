<template>
  <div :id="item.id" class="pd-10 textCenter">{{item.name}}</div>
</template>

<script>
  import customCompMixin from '../../../mixin/index';
  export default {
    name: "cAnchorPoint",
    mixins: [customCompMixin],
  }
</script>

<style scoped>

</style>
