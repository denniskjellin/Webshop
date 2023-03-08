<template>
  <section>
    <!-- Category nav -->
    <CategoryNav />
    <h1 class="text-center text-4xl mb-6 uppercase">Amino Acids</h1>
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

    <!---info section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <section class="p-4">
        <h2 class="text-2xl font-bold mb-2 mt-2">Info</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam fuga
          blanditiis sed cumque in exercitationem placeat modi numquam nobis
          vitae ex, quis facilis deleniti minima autem eaque aliquam est beatae?
          Nostrum officiis quo, dicta
        </p>
        <p class="mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam fuga
          blanditiis sed cumque in exercitationem placeat modi numquam nobis
          vitae ex, quis facilis deleniti minima autem eaque aliquam est beatae?
          Nostrum officiis quo, dicta
        </p>
      </section>
    </div>
  </section>
</template>

<script setup>
// fetch the products
const { data: products } = await useFetch(
  "https://acciodennis.azurewebsites.net/api/products"
);
</script>

<style scoped>
h2 {
  margin-bottom: 1.3rem;
  font-size: 2.2rem;
}

p {
  margin: 1.3rem 0;
}
</style>
