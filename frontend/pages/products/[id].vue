<template>
  <Head>
    <Title>{{ product.title }}</Title>
    <Meta name="description" :content="product.description" />
  </Head>

  <section
    class="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-300 pb-5"
  >
    <div>
      <!--img container-->
      <img class="w-full" :src="product.imageName" :alt="product.imageAlt" />
    </div>
    <!--Product info -->
    <div>
      <h1 class="text-2xl font-bold mb-5 uppercase">{{ product.title }}</h1>
      <span class="text-center text-white font-bold avaible">In stock</span>
      <p class="text-gray-700 text-lg mb-5 mt-3">{{ product.description }}</p>
      <p class="text-gray-700 text-lg mb-10">
        The product will be a addition support for your daily source of
        nutrition and will further your recovery and progress from your workout.
        With its unique components we can asure you that you will be delighted
        with the use of this product.
      </p>

      <div class="my-5">
        <p class="text-2xl font-bold mb-8">{{ product.price }} SEK</p>
        <div class="flex items-center mb-8">
          <label class="text-xl mr-2">Select quantity:</label>
          <select class="border rounded-md p-2 w-16" v-model="quantity">
            <option v-for="n in maxQuantity" :value="n">{{ n }}</option>
          </select>
        </div>
        <!-- display the notification of added product -->
        <!-- transition component fade with svg -->
        <transition name="fade">
          <div
            v-show="showNotification"
            class="notification bg-green-500 text-white p-2 rounded-md mb-8"
          >
            <span>Product added to cart</span>
            <div class="ml-2 inline-block animate-spin">
              <svg
                class="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M22 12c0-5.523-4.477-10-10-10"></path>
              </svg>
            </div>
          </div>
        </transition>
      </div>
      <!-- add to basket click -->
      <button
        @click="addToBasket"
        class="text-white w-full md:w-2/4 h-10 font-bold rounded-md"
      >
        <i class="fas fa-shopping-cart mr-2"></i> Add to cart
      </button>
    </div>
    <p class="text-sm text-gray-500">
      This is a supplement and should not be used as an alternative to a varied
      diet. The recommended daily dose should not be exceeded. Keep out of the
      reach of small children. Consider the importance of a varied and balanced
      diet and a healthy lifestyle.
    </p>
  </section>
</template>

<script setup>
import basketStore from "~/store/basket";

// Function to add the selected product with the specified quantity to the basket.
const addToBasket = () => {
  // Create an item object with the required product properties.
  const item = {
    productId: product.value.productId,
    title: product.value.title,
    price: product.value.price,
    image: product.value.imageName,
    imageAlt: product.value.imageAlt,
    // Set the quantity of the item based on the selected value from the dropdown.
    quantity: quantity.value,
  };

  // display notification
  displayNotification();

  // Call the addToBasket function from the basketStore to add the item to the basket.
  basketStore.addToBasket(item);
};

// notification
const showNotification = ref(false);
// duration of notification
const displayNotification = (duration = 1600) => {
  showNotification.value = true;
  setTimeout(() => {
    showNotification.value = false;
  }, duration);
};

// quantity and maxQuantity
const quantity = ref(1);
const maxQuantity = ref(10);

// Set page layout
definePageMeta({
  layout: "products",
});

// Fetch product data
// route id
const { id } = useRoute().params;
// url and tag on id
const uri = `https://acciodennis.azurewebsites.net/api/products/${id}`;
// fetch data
const { data: product } = await useFetch(uri, { key: id });
// error msg if product cant be found
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>

<style lang="scss" scoped>
/* Notification fade in and out */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Optional styles for image aspect ratio */
.w-full {
  aspect-ratio: 4/4;
}
button:hover {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #0e5c35;
  color: #fff;
  transition: background-color 0.5s ease;
}

button {
  background-color: #1a8669;
  border-radius: 25px;
}
.avaible {
  border-radius: 25px;
  padding: 0.3rem 0.5rem;
  background-color: #1a8669;
}
</style>
