<template>
  <button style="background-color: transparent; width: 100%; height: 100%; border: 2px dashed #ddd;" class="custom-button">
    透明按钮
  </button>
</template>

<script>
  export default {
    name: "cTransparentBtn",
    props: {
      item: {
        require: true,
        type: Object,
         default: function () {
          return {}
        },
      },
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
