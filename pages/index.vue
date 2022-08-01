<template>
  <SlotComponent>
    <template #slot1="{ childProps }">
      <h1 class="text-xl">
        {{ childProps }}
      </h1>
    </template>

    <template #[slotname]>
      <h1 class="text-xl">Slot2</h1>
    </template>

    <div>No slot name</div>
  </SlotComponent>
</template>

<script>
export default {
  data() {
    return {
      name: "Hello from Parent",
      slotname: "slot2",
    };
  },
  mounted() {
    this.getItem();
  },

  methods: {
    async getItem() {
      const response = await this.$axios.$get("protected");
      console.log("response", response);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
