<template>
 <div class="flex flex-col h-screen">
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">Accio</NuxtLink>
        <!--Hide on md screens + eventlistener on click-->
        <div class="md:hidden">
          <button
            class="flex items-center focus:outline-none"
            @click="isOpen = !isOpen"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="menu w-6 h-6"
              :class="{ open: isOpen }"
            >
              <path
                fill-rule="evenodd"
                d="M3 12h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-5h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-5h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <ul class="hidden md:flex gap-4">
          <li class="mr-4">
            <NuxtLink to="/" class="text-gray-700 hover:text-gray-900"
              >Home</NuxtLink
            >
          </li>
          <li class="mr-4">
            <NuxtLink to="/about" class="text-gray-700 hover:text-gray-900"
              >About</NuxtLink
            >
          </li>
          <li class="mr-4">
            <NuxtLink to="/products" class="text-gray-700 hover:text-gray-900"
              >Products</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <!--hide on md screens-->
      <div
        class="md:hidden bg-white"
        :class="{ block: isOpen, hidden: !isOpen }"
      >
        <ul class="px-4 py-3">
          <li class="mb-2">
            <NuxtLink to="/" class="text-gray-700 hover:text-gray-900"
              >Home</NuxtLink
            >
          </li>
          <li class="mb-2">
            <NuxtLink to="/about" class="text-gray-700 hover:text-gray-900"
              >About</NuxtLink
            >
          </li>
          <li class="mb-0">
            <NuxtLink to="/products" class="text-gray-700 hover:text-gray-900"
              >Products</NuxtLink
            >
          </li>
        </ul>
      </div>
    </header>
    <main class="container mx-auto flex-grow px-4 py-8">
      <!--Output the page content-->
      <slot></slot>
    </main>
    <!--- Footer styling with different section of contents -->
    <div class="footer-container">
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto flex justify-between px-4">
        <div class="flex-1 mr-4">
          <h3 class="text-lg mb-2">Home</h3>
          <NuxtLink to="/" class="block mb-2"
            ><i class="fas fa-home mr-2"></i>Link 1</NuxtLink>
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
</div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
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


/* hamburger nav settings */
.menu {
  transition: transform 0.3s ease-in-out;
}

.menu.open {
  transform: rotate(90deg);
}

@media (min-width: 768px) {
  .menu {
    display: none;
  }
}
</style>
