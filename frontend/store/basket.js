// Import the 'reactive' function from the Vue library.
import { reactive } from "vue";


// define get initial basket function,
// which returns the initial basket state from localStorage if it exists, or an empty basket if it doesn't.
const getInitialBasket = () => {
  let items = []; // basket items
  let total = 0; // basket total
  let quantity = 0; // basket quantity

  if (typeof window !== "undefined") {
    // check if window is defined
    items = JSON.parse(localStorage.getItem("basketItems") || "[]");
    total = parseFloat(localStorage.getItem("basketTotal")) || 0;
    quantity = parseInt(localStorage.getItem("basketQuantity")) || 0;
  }

  return { items, total, quantity };
};

// define save to local storage function
const saveToLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
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

  // Update the basket quantity to reflect the total number of items in the basket.
  basket.quantity += item.quantity;

  // Update the basket total by adding the product of the item's price and quantity.
  basket.total += item.price * item.quantity;

  // Store the updated basket items, quantity, and total in localStorage.
  saveToLocalStorage("basketItems", JSON.stringify(basket.items));
  saveToLocalStorage("basketTotal", basket.total);
  saveToLocalStorage("basketQuantity", basket.quantity);
}


// Function to increase the quantity of an item in the basket by 1 and save to local storage
function increaseQuantity(index) {
  basket.items[index].quantity++;
  basket.total += basket.items[index].price;
  saveToLocalStorage("basketItems", JSON.stringify(basket.items));
  saveToLocalStorage("basketTotal", basket.total);
  saveToLocalStorage("basketQuantity", basket.quantity);
}

// Function to decrease the quantity of an item in the basket by 1, or remove it if the quantity is 1
function decreaseQuantity(index) {
  if (basket.items[index].quantity > 1) {
    basket.items[index].quantity--;
    basket.total -= basket.items[index].price;
    saveToLocalStorage("basketItems", JSON.stringify(basket.items));
    saveToLocalStorage("basketTotal", basket.total);
    saveToLocalStorage("basketQuantity", basket.quantity);
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
  saveToLocalStorage("basketQuantity", basket.quantity);
}

// Function to clear the basket and local storage after checkout.
function checkout() {
  // Clear the basket items and total.
  basket.items = [];
  basket.total = 0;
  basket.quantity = 0; // <-- reset quantity to 0
  // Clear the basket items and total from local storage.
  localStorage.removeItem("basketItems");
  localStorage.removeItem("basketTotal");
  localStorage.removeItem("basketQuantity");
  // Show an alert to the user that the checkout was successful.
  window.alert("Thank you for your purchase! Your cart has been emptied.");
  // Redirect the user to a different route.
  useRouter().push("/thanks");
}


// Export the reactive basket object and the addToBasket and removeFromBasket functions.
export default {
  basket,
  addToBasket,
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
  checkout,
};
