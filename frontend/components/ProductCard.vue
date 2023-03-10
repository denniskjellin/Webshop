<template>
  <section class="card text-center pb-8">
    <img :src="product.imageName" :alt="product.imageAlt" class="thumb" />
    <h2 class="font-bold text-gray-700 mt-4 truncate uppercase tracking-widest">
      {{ product.id }}
    </h2>

    <p class="text-green-700 text-xl font-bold mb-5 mt-1 truncate">{{ product.price }}:-</p>
    <!-- Link to product with id -->
    <NuxtLink :to="`/products/${product.productId}`">
      <span class="btn-card">View Product</span>
    </NuxtLink>
  </section>
</template>

<script setup>
// defineProps is a helper function that allows us to define props
const { product } = defineProps(["product"]);

</script>

<style lang="scss" scoped>
.thumb {
  max-height: 300px; // maybe change this later
  max-width: 70%;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 5px;
}
</style>
