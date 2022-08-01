<template>
  <div>
    <div class="border border-solid">
      <slot name="slot1" v-bind:childProps="name"></slot>
    </div>
    <div class="border border-solid">
      <slot name="slot2"> This is default </slot>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "hello from children",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
