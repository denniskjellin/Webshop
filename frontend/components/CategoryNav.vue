<template>
        <nav class="category-nav">
      <div class="md:flex items-center border-x-4 border-green-500 mb-10 bg-gray-100">
        <div class="flex flex-col items-center justify-center">
          <NuxtLink
            to="/products/amino"
            class="text-xl text-gray-700 p-4 hover:text-gray-500"
          >
            <span class="text-2xl mb-2 font-bold">Amino</span><br />
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
            <span class="text-2xl mb-2 font-bold">Preworkout</span><br />
            <span class="text-base"
              >Get ready to crush your workout with our Preworkout
              formulas.</span
            >
          </NuxtLink>
        </div>
        <div class="flex flex-col items-center justify-center">
          <NuxtLink
            to="/products/protein"
            class="text-xl text-gray-700 p-4 hover:text-gray-500"
          >
            <span class="text-2xl mb-2 font-bold">Protein</span><br />
            <span class="text-base"
              >Fuel your muscles with our high-quality Protein powders.</span
            >
          </NuxtLink>
        </div>
      </div>
    </nav>
</template>