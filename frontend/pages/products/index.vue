<template>
  <section>
    <h1 class="text-center text-4xl mb-6">Product Index</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-gray-200 p-4">
        <h2 class="text-2xl font-bold mb-2">Box 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          eros eget dui ultricies mattis. Donec euismod sem at dui ullamcorper
          interdum.
        </p>
      </div>
      <div class="bg-gray-200 p-4">
        <h2 class="text-2xl font-bold mb-2">Box 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          eros eget dui ultricies mattis. Donec euismod sem at dui ullamcorper
          interdum.
        </p>
      </div>
      <div class="bg-gray-200 p-4">
        <h2 class="text-2xl font-bold mb-2">Box 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          eros eget dui ultricies mattis. Donec euismod sem at dui ullamcorper
          interdum.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// import layout
definePageMeta({
    layout: 'products'
})
</script>

<style scoped>

</style>