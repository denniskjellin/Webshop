<template>
  <div class="container mx-auto py-6">
    <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>
    <!---check if baskit is empty or not -->
    <div v-if="basket.items.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <div
        v-for="(item, index) in basket.items"
        :key="item.ProductId"
        class="bg-white shadow-md p-4 mb-4 rounded-lg flex items-center"
      >
        <img class="w-20 h-20 mr-4" :src="item.image" :alt="item.imageAlt" />
        <div class="flex-1">
          <div class="font-bold text-xl mb-2">{{ item.title }}</div>
          <div class="text-gray-600 mb-2">{{ item.description }}</div>
          <div class="text-gray-700 mb-2">Price: {{ item.price }}:-</div>
          <div class="text-gray-700 mb-2">Quantity: {{ item.quantity }}</div>
          <div class="text-gray-800 mb-2 font-semibold">
            Subtotal: {{ item.price * item.quantity }}
          </div>
          <div class="flex items-center">
            <button
              @click="decreaseQuantity(index)"
              class="bg-gray-300 hover:bg-gray-400 text-black py-1 px-2 rounded-l"
            >
              -
            </button>
            <div class="border-t border-b border-gray-300 px-2 py-1">
              {{ item.quantity }}
            </div>
            <button
              @click="increaseQuantity(index)"
              class="bg-gray-300 hover:bg-gray-400 text-black py-1 px-2 rounded-r"
            >
              +
            </button>
          </div>
          <button
            @click="removeFromBasket(index)"
            class="bg-red-700 hover:bg-red-600 text-white mt-2 py-1 px-2 rounded"
          >
            Remove
          </button>
        </div>
      </div>
      <div class="mt-6">
        <h2 class="text-xl font-bold">Total: {{ basket.total }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import basketStore from "~/store/basket";

const { basket, removeFromBasket, increaseQuantity, decreaseQuantity } =
  basketStore;
</script>
