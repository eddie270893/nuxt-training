<template>
  <div>
    <label>{{ label }}</label>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "id", "value"],
};
</script>

<style lang="scss" scoped>
</style>
