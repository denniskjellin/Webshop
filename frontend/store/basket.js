// Import the 'reactive' function from the Vue library.
import { reactive } from "vue";

// define save to local storage function
const saveToLocalStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value);
  }
};

// function to get the initial basket state from localStorage.
const getInitialBasket = () => {
  return {
    // Retrieve 'basketItems' from localStorage, or set to an empty array if not found.
    items: JSON.parse(localStorage.getItem("basketItems") || "[]"),
    // Retrieve 'basketTotal' from localStorage, or set to 0 if not found.
    total: parseFloat(localStorage.getItem("basketTotal")) || 0,
  };
};

// Create a reactive basket object using the initial basket state.
const basket = reactive(getInitialBasket());

// Function to add an item to the basket, update the total, and store the new state in localStorage.
function addToBasket(item) {
  // Find the index of the existing item in the basket with the same productId.
  const existingItemIndex = basket.items.findIndex(
    (i) => i.productId === item.productId
  );

  // Check if the item already exists in the basket.
  if (existingItemIndex !== -1) {
    // If the item exists, update its quantity by adding the new quantity.
    basket.items[existingItemIndex].quantity += item.quantity;
  } else {
    // If the item doesn't exist, add the new item to the basket.
    basket.items.push(item);
  }

  // Update the basket total by adding the product of the item's price and quantity.
  basket.total += item.price * item.quantity;
  // Store the updated basket items in localStorage.
  saveToLocalStorage("basketItems", JSON.stringify(basket.items));
  // Store the updated basket total in localStorage.
  saveToLocalStorage("basketTotal", basket.total);
}

// Function to increase the quantity of an item in the basket by 1 and save to local storage
function increaseQuantity(index) {
  basket.items[index].quantity++;
  basket.total += basket.items[index].price;
  saveToLocalStorage("basketItems", JSON.stringify(basket.items));
  saveToLocalStorage("basketTotal", basket.total);
}

// Function to decrease the quantity of an item in the basket by 1, or remove it if the quantity is 1
function decreaseQuantity(index) {
  if (basket.items[index].quantity > 1) {
    basket.items[index].quantity--;
    basket.total -= basket.items[index].price;
    saveToLocalStorage("basketItems", JSON.stringify(basket.items));
    saveToLocalStorage("basketTotal", basket.total);
  } else {
    removeFromBasket(index);
  }
}

// Function to remove an item from the basket by index, update the total, and store the new state in localStorage.
function removeFromBasket(index) {
  // Get the item to be removed by its index.
  const item = basket.items[index];
  // Remove the item from the array by 1 item at the specified index.
  basket.items.splice(index, 1);
  // Update the basket total price.
  basket.total -= item.price;
  // Store the updated basket
  saveToLocalStorage("basketItems", JSON.stringify(basket.items));
  // Store the updated basket total amount in localStorage.
  saveToLocalStorage("basketTotal", basket.total);
}

// Export the reactive basket object and the addToBasket and removeFromBasket functions.
export default {
  basket,
  addToBasket,
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
};
