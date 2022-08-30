<template>
  <div>
    <TableList :data="products" :columns="productColumns">
      <template #title="{ value }">
        <NuxtLink :to="`/product/detail/${value.productId}`">{{
          value.title
        }}</NuxtLink>
      </template>
      <template #action="{ value }">
        <button @click="handleDelete(value.productId)">Delete</button>
        <button>Edit</button>
      </template>
    </TableList>
  </div>
</template>

<script>
import { productColumns } from "../../helpers/table-lists/product-columns";
export default {
  data() {
    return {
      products: [],
      productColumns,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const response = await this.$axios.$get("/product");
      console.log(response);
      this.products = response.data;
    },
    handleDelete(id) {
      console.log("delete", id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
