<template>
  <div>
    <Head>
      <Title>{{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
  </div>
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
      <span class="text-center text-white font-bold avaible"
        >In stock</span
      >
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

        <button @click="addToBasket" class="text-white w-full md:w-2/4 h-10 font-bold rounded-md">
  <i class="fas fa-shopping-cart mr-2"></i> Add to cart
</button>

      </div>
      <p class="text-sm text-gray-500">
        This is a supplement and should not be used as an alternative to a
        varied diet. The recommended daily dose should not be exceeded. Keep out
        of the reach of small children. Consider the importance of a varied and
        balanced diet and a healthy lifestyle.
      </p>
    </div>
  </section>
  
</template>

<script setup>
import basketStore from '~/store/basket'

const addToBasket = () => {
  const item = {
    ProductId: product.value.productId,
    title: product.value.title,
    price: product.value.price,
    quantity,
  }

  basketStore.addToBasket(item)
  console.log(basketStore.basket)
}



definePageMeta({
  layout: "products",
});

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

// maximum quantity allowed for purchase2
const maxQuantity = 50;
// quantity selected by user
let quantity = 1;


</script>

<style lang="scss" scoped>
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
