<template>
  <section>
    <!-- Category nav -->
    <CategoryNav />
    <h1 class="text-start text-gray-700 text-2xl mb-6">Products</h1>

    <!---product cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="p in products" class="w-full md:w-auto">
        <ProductCard :product="p" />
      </div>
    </div>
  </section>
</template>

<script setup>
// fetch the products
const { data: products } = await useFetch(
  "https://acciodennis.azurewebsites.net/api/products"
);

</script>

<style scoped></style>
