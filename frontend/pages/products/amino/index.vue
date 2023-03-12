<template>
  <section>
    <!-- Category nav -->
    <CategoryNav />
    <h1 class="text-2xl font-bold uppercase tracking-wider text-gray-700">
      Amino
    </h1>
    <p class="text-gray-700 mb-3">
      Amino acids are the most important supplement for your muscle growth, and
      a really good Amino product contains everything you need to take your
      training to the absolute highest level.
    </p>
    <!---product cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="p in products.filter(
          (product) => product.category.name === 'Amino'
        )"
        class="w-full md:w-auto"
      >
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

useHead({
  title: "Accio | Amino",
  meta: [
    {
      name: "description", content: "Accio - Amino supplements",
    },
  ],
})
</script>

<style scoped></style>
