<template>
  <div class="container mx-auto py-6">
    <div class="mx-auto w-full lg:w-3/4 xl:w-1/2">
      <h1 class="text-2xl font-bold mb-6 uppercase">Shopping Cart</h1>
      <!---check if baskit is empty or not -->
      <div v-if="basket.items.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <!--if cart not empty do this-->
      <div v-else>
        <div
          v-for="(item, index) in basket.items"
          :key="item.ProductId"
          class="bg-white shadow-md p-4 mb-4 rounded-lg flex flex-col md:flex-row items-start md:items-center w-full"
        >
          <div class="flex-1">
            <div class="font-bold text-xl mb-2">{{ item.title }}</div>
            <img
              class="w-20 h-20 mb-4 md:mb-0 md:mr-4"
              :src="item.image"
              :alt="item.imageAlt"
            />
            <div class="text-gray-600 mb-2">{{ item.description }}</div>
            <div class="text-gray-700 mb-2">Price: {{ item.price }}:-</div>
            <div class="text-gray-700 mb-2">Quantity: {{ item.quantity }}</div>
            <div class="text-gray-800 mb-2 font-semibold">
              Subtotal: {{ item.price * item.quantity }}
            </div>
            <div class="flex items-center mb-2">
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
          </div>
        </div>
        <div class="mt-6">
          <div
            class="border-t border-gray-200 pt-6 flex items-center justify-between"
          >
            <h2 class="text-xl font-bold">
              Total: <span class="text-green-600">{{ basket.total }}:-</span>
            </h2>
            <!-- call the checkout function to clear localstorage and sen a alert. -->
            <button
              class="btn-viewp-c text-white font-bold py-2 px-6 rounded shadow"
              @click="checkout"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import basketStore from "~/store/basket";

const { basket, checkout, removeFromBasket, increaseQuantity, decreaseQuantity } =
  basketStore;
</script>
