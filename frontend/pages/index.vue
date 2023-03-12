<template>
  <section class="hero-image-container mb-16">
    <!-- Your hero image goes here -->
    <div class="info-text">
      <h1>LATEST NEWS!</h1>
      <h2>WE GOT THE ENERGY YOU NEED</h2>
    </div>
    <div class="button-container">
      <!--Navigation button-->
      <NuxtLink to="/products/amino">
        <span class="btn-viewp">View Product</span>
      </NuxtLink>
    </div>
  </section>
  <section>
    <h2 class="text-start text-2xl text-gray-700">Trending</h2>

    <!---product cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-gray-200">
      <div v-for="p in products" class="w-full md:w-auto">
        <ProductCard :product="p" v-if="p.isHighlighted" />
      </div>
    </div>
    <div>
      <h2 class="text-2xl mt-10 mb-1">Shop categories</h2>
      <CategoryNav></CategoryNav>
    </div>

    <!---info section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NuxtLink to="/products/protein">
        <div class="hero-image-2 mt-10">
          <div class="hero-text">
            <p class="text-white uppercase font-bold">new isolate</p>
            <h2 class="text-2xl font-bold mb-2 mt-2">
              <span class="btn-viewp">Shop now</span>
            </h2>
          </div>
        </div>
      </NuxtLink>
      <!--- secondary hero-img -->
      <NuxtLink to="/products">
        <div class="hero-image mt-10">
          <div class="hero-text">
            <p class="text-white uppercase font-bold">all the essentials</p>
            <h2 class="text-2xl font-bold mb-2 mt-2">
              <span class="btn-viewp">Explore products</span>
            </h2>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
  <section>
    <h3 class="text-2xl mt-10 mb-1 text-gray-700">Info</h3>
    <p class="text-gray-700 text-lg mb-3">
      This is a fictional webshop created by Dennis Kjellin for a school
      project. The products are not real and the prices are not real. The
      purpose of this webshop is to show the skills I have learned during my
      education. To read more visit the about section of this website.
    </p>
  </section>
</template>

<script setup>
// fetch the products
const { data: products } = await useFetch(
  "https://acciodennis.azurewebsites.net/api/products"
);

// set the title and meta tags
useHead({
  title: "Accio Nutrition workout supplements",
  meta: [
    {
      name: "description",
      content: "Accio webshop home for the highest quality workout supplements",
    },
  ],
});
</script>

<style scoped>
.hero-image-container {
  width: 100%;
  height: 35vh;
  background-image: url("/images/accio.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
}

.info-text {
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.info-text h1 {
  font-size: 2.8rem;
  letter-spacing: 2.5px;
}

.info-text h2 {
  font-size: 1rem;
  font-weight: bold;
}

.button-container {
  position: absolute;
  bottom: 6rem;
  left: 25%;
  transform: translateX(-50%);
}

/* Second hero-img */
.hero-image {
  background-image: url("/images/enviroment_burn_500.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 500px;
  border-radius: 5px;
}

.hero-image-2 {
  background-image: url("/images/iso.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 500px;
  border-radius: 5px;
}

.hero-text {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2rem;
  width: 100%;
}

/* XS-Small screens */
@media (max-width: 500px) {
  .info-text h2 {
    display: none;
  }

  .info-text {
    font-weight: bolder;
    left: 50%;
    top: 0;
  }

  .button-container {
    position: absolute;
    top: 80%;
    margin-left: 6.2rem;
    transform: translate(-50%, -50%);
  }

  .info-text h1 {
    letter-spacing: 1px;
  }
}

/* Smaler screens */
@media (max-width: 820px) {
  .hero-image-container {
    height: 300px;
    background-position: 90% 75%; /* Shift the focal point down slightly */
  }

  .info-text h1 {
    font-size: 1.4rem;
  }
  .info-text h2 {
    font-size: 1rem;
  }

  .btn-viewp {
    font-size: 1rem;
  }

  .button-container {
    bottom: 4rem;
    left: 25%;
  }
}

/* Large screens */
@media (min-width: 1200px) {
  .hero-image-container {
    height: 600px;
    background-position: 50% 50%; /* Center the focal point */
  }
  .button-container {
    position: absolute;
    bottom: 12rem;
    left: 25%;
    transform: translateX(-50%);
  }
}
</style>
