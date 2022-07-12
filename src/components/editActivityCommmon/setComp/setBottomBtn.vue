<template>
  <set-btn v-model="editItem" :key="editItem.id"></set-btn>
</template>

<script>
  import setBtn from "./setBtn";
  export default {
    name: "setBottomBtn",
    components: {
      setBtn,
    },
    data() {
      return {
        editItem: this.value,
      }
    },
    props: {
      value: {
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
