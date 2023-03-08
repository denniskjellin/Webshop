<template>
   <div class="card text-center">
        <img :src="product.imageName" :alt="product.imageAlt" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <button class="btn-card">View Product</button>
        </NuxtLink>
      </div>
</template>

<script setup>
    const {product } = defineProps(['product'])
</script>

<style lang="scss" scoped>
.thumb {
    max-height: 200px;
    max-width: 70%;
    margin: 0 auto;
}

</style>