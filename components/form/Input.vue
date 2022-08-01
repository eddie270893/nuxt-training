<template>
  <div>
    <label>{{ label }}</label>
    <input
      type="text"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "value"],
};
</script>

<style lang="scss" scoped>
</style>
