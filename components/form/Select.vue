<template>
  <div>
    <select v-model="selected">
      <option value="1">1</option>
      <option value="2">1</option>
      <option value="3">1</option>
      <option value="4">1</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
