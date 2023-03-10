<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <img class="w-full" :src="product.imageName" :alt="product.imageAlt"  />
      </div>
      <div>
        <h1 class="text-3xl font-bold mb-4">{{ product.title }}</h1>
        <p class="text-gray-600 text-lg mb-4">{{ product.description }}</p>
        <p class="text-2xl font-bold mb-4">{{ product.price }} kr</p>
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to cart</button>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'products'
  })
    // route id
    const { id } = useRoute().params
    // url and tag on id
    const uri = `https://acciodennis.azurewebsites.net/api/products/${id}`
    // fetch data
    const { data: product } = await useFetch(uri, { key: id })
  </script>
  
  <style lang="scss" scoped>
    /* Optional styles for image aspect ratio */
    .w-full {
      aspect-ratio: 4/4;
    }
  </style>
  