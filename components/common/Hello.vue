<template>
  <div class="hello-class">
    {{ message }} {{ name }}
    <button @click="handleClick()">Send</button>
  </div>
</template>

<script>
export default {
  props: ["name", "message", "data"],

  methods: {
    handleClick() {
      this.$emit("updateValue", { value: 1 });
    },
  },
};
</script>

<style scoped>
.hello-class {
  color: blue;
}
</style>
