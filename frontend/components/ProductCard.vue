<template>
  <NuxtLink :to="`/products/${product.productId}`">
  <section class="pb-5">
    <img :src="product.imageName" :alt="product.imageAlt" class="thumb" />
    <p class="text-gray-600 text-md font-bold mb-0 mt-1 truncate tracking-wide">{{ product.title }}</p>
    <p class="text-gray-600 text-md font-bold mb-0 mt-1 truncate tracking-wide">{{ product.price }}:-</p>
    <!-- Link to product with id -->

      <!-- <span class="btn-card">View Product</span> -->
  </section>
</NuxtLink>
</template>

<script setup>
// defineProps is a helper function that allows us to define props
const { product } = defineProps(["product"]);

</script>

<style lang="scss" scoped>
.thumb {
  max-height: 300px; // maybe change this later
  max-width: 80%;
  margin-top: 1rem;
  border-radius: 5px;
}
</style>
