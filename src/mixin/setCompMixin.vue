<script>
export default {
  name: "setCompMixin",
  data() {
    return {
      editItem: this.modelValue,
    }
  },
  created() {
  },
  props: {
    modelValue: {
      require: true,
      type: Object,
      default: function () {
        return {}
      },
    },
  },
}
</script>
