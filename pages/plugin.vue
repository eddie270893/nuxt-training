<template>
  <div>
    {{ date | dateFormat("YYYY-MM-ddd") }}
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  data() {
    return {
      date: new Date(),
    };
  },

  methods: {
    formatDate() {
      const formatted = dayjs(this.date).format("DD/MM/YYYY");
      console.log("formatted", formatted);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
