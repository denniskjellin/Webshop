<template>
  <!--- Footer styling with different section of contents -->
  <div class="footer-container">
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto flex justify-between px-4">
        <div class="flex-1 mr-4">
          <h3 class="text-lg mb-2">Home</h3>
          <NuxtLink to="/" class="block mb-2"
            ><i class="fas fa-home mr-2"></i>Link 1</NuxtLink
          >
        </div>
        <div class="flex-1 mr-4">
          <h3 class="text-lg mb-2">About</h3>
          <a href="#" class="block mb-2"
            ><i class="fas fa-info-circle mr-2"></i>Link 1</a
          >
        </div>
        <div class="flex-1 mr-4">
          <h3 class="text-lg mb-2">Products</h3>
          <a href="#" class="block mb-2"
            ><i class="fas fa-shopping-cart mr-2"></i>Link 1</a
          >
        </div>
        <div class="flex-1">
          <h3 class="text-lg mb-2">Categories</h3>
          <a href="#" class="block mb-2"
            ><i class="fas fa-tags mr-2"></i>Link 1</a
          >
        </div>
      </div>
      <div class="container mx-auto px-4">
        <p class="text-center mt-4">&copy; 2023 Accio. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
/* Placeholder */
</script>

<style scoped>
p {
  margin: 1.3rem 0;
}
/* Highlight current page */
.router-link-exact-active {
  color: #12b488;
  font-weight: bolder;
}
</style>
