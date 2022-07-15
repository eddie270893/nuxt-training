<template>
  <div>Protected page</div>
</template>

<script>
export default {
  name: "AboutPage",
  layout: "detail",
  middleware: "authenticated",
};
</script>
