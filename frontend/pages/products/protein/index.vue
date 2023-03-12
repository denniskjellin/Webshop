<template>
  <section>
    <!-- Category nav -->
    <CategoryNav />
    <h1 class="text-2xl font-bold uppercase tracking-wider text-gray-700">
      Protein
    </h1>
    <p class="text-gray-700 mb-3">
  Protein supplements can help you get that little extra from each of your workout. With a good protein supplement, you can get greater recovery and growth effect from your workout.
    </p>
    <!---product cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="p in products.filter(
          (product) => product.category.name === 'Protein'
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
  title: "Accio | Protein",
  meta: [
    {
      name: "description", content: "Accio - Protein supplements",
    },
  ],
})
</script>

<style scoped></style>
