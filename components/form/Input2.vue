<template>
  <div>
    <label>{{ label }}</label>
    <input type="text" v-model="valueItem" />
  </div>
</template>

<script>
export default {
  props: ["label", "value"],
  data() {
    return {
      valueItem: "",
    };
  },

  watch: {
    valueItem() {
      console.log(this.valueItem);
      this.$emit("input", this.valueItem);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
