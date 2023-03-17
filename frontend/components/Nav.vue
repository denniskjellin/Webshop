<template>
  <header class="bg-white shadow-sm">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center">
        <img src="/images/logo.png" alt="Accio logo" class="logo" />
      </NuxtLink>
      <!--Hide on md screens + eventlistener on click-->
      <div>
      <ul>
        <li class="-mr-12 relative md:hidden">
          <NuxtLink
            to="/cart"
            class="text-gray-700 text-lg font-bold tracking-wider hover:text-green-700"
          >
            <i class="fas fa-shopping-cart"></i>
            <span
              class="absolute top-0 right-0 -mt-1 -mr-4 w-4 h-4 bg-red-700 text-white text-xs flex items-center justify-center rounded-full"
            >
              {{ basketItemCount }}
            </span>
            Cart
          </NuxtLink>
        </li>
      </ul>
    </div>
      <div class="md:hidden">
        <span
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
        </span>
      </div>
      <ul class="hidden md:flex gap-4">
        <li class="mr-4">
          <NuxtLink
            to="/"
            class="text-gray-700 text-lg font-bold tracking-wider hover:text-green-700"
            >Home</NuxtLink
          >
        </li>
        <li class="mr-4">
          <NuxtLink
            to="/products"
            class="text-gray-700 text-lg font-bold tracking-wider hover:text-green-700"
            >Products</NuxtLink
          >
        </li>
        <li class="mr-4">
          <NuxtLink
            to="/about"
            class="text-gray-700 text-lg font-bold tracking-wider hover:text-green-700"
            >About</NuxtLink
          >
        </li>
        <li class="relative mb-0">
          <NuxtLink
            to="/cart"
            class="text-gray-700 text-lg font-bold tracking-wider hover:text-green-700"
          >
            <i class="fas fa-shopping-cart"></i>
            <span
              class="absolute top-0 right-0 -mt-1 -mr-3.5 w-4 h-4 bg-red-700 text-white text-xs flex items-center justify-center rounded-full"
            >
              {{ basketItemCount }}
            </span>
            Cart
          </NuxtLink>
        </li>
      </ul>
    </nav>


    
    <!--hide on md screens-->
    <div class="md:hidden bg-white" :class="{ block: isOpen, hidden: !isOpen }">
      <ul class="px-4 py-3">
        <li class="mb-2">
          <NuxtLink
            to="/"
            class="text-gray-700 text-lg font-bold tracking-wider hover:text-green-700"
            >Home</NuxtLink
          >
        </li>
        <li class="mb-2">
          <NuxtLink
            to="/about"
            class="text-gray-700 text-lg font-bold tracking-wider hover:text-green-700"
            >About</NuxtLink
          >
        </li>
        <li class="mb-0">
          <NuxtLink
            to="/products"
            class="text-gray-700 text-lg font-bold tracking-wider hover:text-green-700"
            >Products</NuxtLink
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import basketStore from "~/store/basket";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    basketItemCount() {
      return basketStore.basket.quantity;
    },
  },
};
</script>

<style scoped>
.logo {
  height: 50px;
}
p {
  margin: 1.3rem 0;
}
/* Highlight current page */
.router-link-exact-active {
  color: #1a8669;
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

@media (max-width: 767px) {
  .bg-white {
    position: sticky;
    top: 0;
    z-index: 1;
  }
}

</style>
