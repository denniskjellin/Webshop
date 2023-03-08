<template>
  <section>
    <h2 class="text-center text-4xl mb-6 uppercase">trending</h2>
    <!-- Category Menu -->
    <div class="md:flex items-center">
      <NuxtLink to="/" class=" text-gray-700 p-4 hover:font-bold hover:underline hover:text-green-700"
            >Home</NuxtLink
          >
          <NuxtLink to="/" class=" text-gray-700 p-4 hover:font-bold hover:underline hover:text-green-700"
            >Home</NuxtLink
          >
          <NuxtLink to="/" class=" text-gray-700 p-4 hover:font-bold hover:underline hover:text-green-700"
            >Home</NuxtLink
          >
          <NuxtLink to="/" class=" text-gray-700 p-4 hover:font-bold hover:underline hover:text-green-700"
            >Home</NuxtLink
          >
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
// import layout
definePageMeta({
  layout: "default",
});
</script>

<style scoped></style>
