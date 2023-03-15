<template>
  <!--- Footer styling with different section of contents -->
  <div class="footer-container">
    <footer class="bg-black text-white py-4">
      <div class="container mx-auto flex justify-between px-2">
        <div class="hidden md:block flex-1 mr-4">
          <h3 class="text-lg mb-2">ACCIO</h3>
          <NuxtLink to="/" class="block mb-2"
            ><i class="fas fa-home mr-2"></i>Home</NuxtLink
          >
        </div>
        <div class="flex-1 mr-4">
          <h3 class="text-lg mb-2">About</h3>
          <NuxtLink to="/about" class="block mb-2"
            ><i class="fas fa-info-circle mr-2"></i>About</NuxtLink
          >
        </div>
        <div class="flex-1 mr-4">
          <h3 class="text-lg mb-2">Products</h3>
          <NuxtLink to="/products"  class="block mb-2"
            ><i class="fas fa-shopping-cart mr-2"></i>See all</NuxtLink>
        </div>
        <div class="flex-1">
          <h3 class="text-lg mb-2">Categories</h3>
          <NuxtLink to="/products/amino" class="block mb-2"
            ><i class="fas fa-tags mr-2"></i>Amino</NuxtLink
          >
          <NuxtLink to="/products/preeworkout" class="block mb-2"
            ><i class="fas fa-tags mr-2"></i>Preeworkout</NuxtLink
          >
          <NuxtLink to="/products/protein" class="block mb-2"
            ><i class="fas fa-tags mr-2"></i>Protein</NuxtLink
          >
        </div>
      </div>
      <div class="container mx-auto px-4">
        <p class="text-center mt-4">&copy; 2023 Accio. Fictional webshop.</p>
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
  color: whitesmoke;
}

a {
  color: whitesmoke;
  font-size: .9rem;
}

h3 {
  color: whitesmoke;
}
/* Highlight current page */
.router-link-exact-active {
  color: #12b488;
  font-weight: bolder;
}
</style>
