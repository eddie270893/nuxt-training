<template>
  <div class="">
    <div class="hello-class">{{ message | capitalize }}</div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      message: "huy",
      data: {},
    };
  },

  methods: {
    handleUpdate(value) {
      console.log("value here", value);
    },
  },
};
</script>
