<template>
  <div>
    <FormInput2 v-model="name" label="Name" />
    <!-- <input v-model="name" type="text" />
    <input
      v-bind:value="name"
      v-on:input="$emit('input', $event.target.value)"
    /> -->
    Parent: {{ name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Default value",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
