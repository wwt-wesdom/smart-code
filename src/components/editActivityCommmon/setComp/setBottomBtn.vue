<template>
  <set-btn v-model="editItem" :key="editItem.id"></set-btn>
</template>

<script>
import setCompMixin from '../../../mixin/setCompMixin.vue'

export default {
  name: "setBottomBtn",
  mixins: [setCompMixin],
}
</script>

<style scoped>

</style>
