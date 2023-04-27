<template>
  <set-btn v-model="editItem" :key="editItem.id"></set-btn>
</template>

<script>
import setCompMixin from '../../../mixin/setCompMixin.vue'
import setBtn from "./setBtn";

export default {
  name: "setBottomBtn",
  mixins: [setCompMixin],
  components: {
    setBtn,
  },
}
</script>

<style scoped>

</style>
