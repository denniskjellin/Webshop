// Import the 'reactive' function from the Vue library.
import { reactive } from 'vue'

// function to get the initial basket state from localStorage.
const getInitialBasket = () => {
  return {
    // Retrieve 'basketItems' from localStorage, or set to an empty array if not found.
    items: JSON.parse(localStorage.getItem('basketItems') || '[]'),
    // Retrieve 'basketTotal' from localStorage, or set to 0 if not found.
    total: parseFloat(localStorage.getItem('basketTotal')) || 0,
  }
}

// Create a reactive basket object using the initial basket state.
const basket = reactive(getInitialBasket())

// Function to add an item to the basket, update the total, and store the new state in localStorage.
function addToBasket(item) {
  // Add the item to the basket items array.
  basket.items.push(item)
  // Update the basket total.
  basket.total += item.price
  // Store the updated basket items in localStorage.
  localStorage.setItem('basketItems', JSON.stringify(basket.items))
  // Store the updated basket total in localStorage.
  localStorage.setItem('basketTotal', basket.total)
}

// Function to remove an item from the basket by index, update the total, and store the new state in localStorage.
function removeFromBasket(index) {
  // Get the item to be removed by its index.
  const item = basket.items[index]
  // Remove the item from the basket items array.
  basket.items.splice(index, 1)
  // Update the basket total.
  basket.total -= item.price
  // Store the updated basket items in localStorage.
  localStorage.setItem('basketItems', JSON.stringify(basket.items))
  // Store the updated basket total in localStorage.
  localStorage.setItem('basketTotal', basket.total)
}

// Export the reactive basket object and the addToBasket and removeFromBasket functions.
export default {
  basket,
  addToBasket,
  removeFromBasket,
}
