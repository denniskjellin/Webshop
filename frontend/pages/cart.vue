<template>
    <div>
      <h1>Shopping Cart</h1>
      <div v-if="basket.items.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in basket.items" :key="item.ProductId">
              <td>{{ item.title }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.price * item.quantity }}</td>
              <td>
                <button @click="removeFromBasket(index)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <h2>Total: {{ basket.total }}</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import basketStore from '~/store/basket'
  
  const { basket, removeFromBasket } = basketStore
  </script>
  