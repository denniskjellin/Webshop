<template>
  <section>
    <!-- Category nav -->
    <CategoryNav />
    <h1 class="text-start text-gray-700 text-2xl mb-6 uppercase font-bold">Products</h1>

    <!---product cards, write out products in alpabetical order -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="p in products
          .sort((a, b) => a.title.localeCompare(b.title))" class="w-full md:w-auto">
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

// set the title and meta tags
useHead({
  title: "Accio | Products",
  meta: [
    {
      name: "description", content: "Accio - Products",
    },
  ],
})

</script>

<style scoped></style>
