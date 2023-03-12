<template>
  <nav class="category-nav">
    <section>
      <h2 class="hidden">Hidden validation header</h2>
      <label
        for="default-toggle"
        class="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          class="sr-only peer"
        />
        <!-- eventListener for "toggleForm" (re used from old project)-->
        <span
          @click="toggleNav()"
          id="toggle-btn"
          class="md:hidden w-11 h-6 mb-4 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
        ></span>
        <span
          class="md:hidden ml-3 mb-4 text-md font-bold text-gray-700 peer-checked:text-gray-500"
        >{{ showNav ? 'Hide Categories' : 'Show Categories' }}</span> <!-- if else check-->
      </label>
    
    <div v-show="showNav" class="md:flex items-center border-x-4 border-green-500 mb-10 bg-gray-100">
      <div class="flex flex-col items-center justify-center">
        <NuxtLink
          to="/products/amino"
          class="text-xl text-gray-700 p-4 hover:text-gray-500"
        >
          <span class="text-1xl mb-2 font-bold">Amino</span><br />
          <span class="text-base"
            >Boost your workout with our high quality Amino supplements.</span
          >
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink
          to="/products/preeworkout"
          class="text-xl text-gray-700 p-4 hover:text-gray-500"
        >
          <span class="text-1xl mb-2 font-bold">Preworkout</span><br />
          <span class="text-base"
            >Get ready to crush your workout with our Preworkout formulas.</span
          >
        </NuxtLink>
      </div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink
          to="/products/protein"
          class="text-xl text-gray-700 p-4 hover:text-gray-500"
        >
          <span class="text-1xl mb-2 font-bold">Protein</span><br />
          <span class="text-base"
            >Fuel your muscles with our high-quality Protein powders.</span
          >
        </NuxtLink>
      </div>
    </div>
  </section>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: true,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>
