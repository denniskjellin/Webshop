<template>
  <div class="container mx-auto py-6">
    <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>
    <div v-if="basket.items.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="text-left py-2 px-4 border">Product</th>
            <th class="text-left py-2 px-4 border">Price</th>
            <th class="text-left py-2 px-4 border">Quantity</th>
            <th class="text-left py-2 px-4 border">Subtotal</th>
            <th class="text-left py-2 px-4 border">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in basket.items" :key="item.ProductId">
            <td class="py-2 px-4 border">
              <div class="flex items-center">
                <img class="w-10 h-10 mr-4" :src="item.image" :alt="item.imageAlt">
                <div>
                  <div class="font-bold">{{ item.title }}</div>
                  <div class="text-gray-600">{{ item.description }}</div>
                </div>
              </div>
            </td>
            <td class="py-2 px-4 border">{{ item.price }}</td>
            <td class="py-2 px-4 border">{{ item.quantity }}</td>
            <td class="py-2 px-4 border">{{ item.price * item.quantity }}</td>
            <td class="py-2 px-4 border">
              <button @click="removeFromBasket(index)" class="bg-red-700 hover:bg-red-600 text-white py-1 px-2 rounded">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mt-6">
        <h2 class="text-xl font-bold">Total: {{ basket.total }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import basketStore from '~/store/basket'

const { basket, removeFromBasket } = basketStore
</script>
