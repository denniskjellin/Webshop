<template>
  <div class="card text-center pb-8">
    <img :src="product.imageName" :alt="product.imageAlt" class="thumb" />
    <p class="font-bold text-gray-700 mt-4 truncate uppercase tracking-widest">
      {{ product.title }}
    </p>

    <p class="text-green-700 text-xl font-bold mb-5 mt-1 truncate">
      ${{ product.price }}
    </p>
    <NuxtLink :to="`/products/${product.id}`">
      <span class="btn-card">View Product</span>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped>
.thumb {
  max-height: 200px; // maybe change this later
  max-width: 70%;
  margin: 0 auto;
  margin-top: 1rem;
}
</style>
