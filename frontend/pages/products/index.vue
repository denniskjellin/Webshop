<template>
  <section>
    <!-- Category Menu -->
    <div class="md:flex items-center border-x-4 border-green-500 mb-10">
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/" class="text-xl text-gray-700 p-4  hover:text-gray-500">
          <span class="text-2xl mb-2 font-bold">Amino</span><br>
          <span class="text-base">Boost your workout with our high quality Amino supplements.</span>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/" class="text-xl text-gray-700 p-4  hover:text-gray-500">
          <span class="text-2xl mb-2 font-bold">Preworkout</span><br>
          <span class="text-base">Get ready to crush your workout with our Preworkout formulas.</span>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/" class="text-xl text-gray-700 p-4  hover:text-gray-500">
          <span class="text-2xl mb-2 font-bold">Protein</span><br>
          <span class="text-base">Fuel your muscles with our high-quality Protein powders.</span>
        </NuxtLink>
      </div>
    </div>
    <h1 class="text-center text-4xl mb-6 uppercase">Products</h1>

     <!---product cards -->
     <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="p in products" class="w-full md:w-auto">
        <ProductCard :product="p" v-if="p.isHighlighted" />
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

// import layout
definePageMeta({
  layout: "default",
});
</script>

<style scoped></style>
