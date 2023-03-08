<template>
  <div class="hero-image-container mb-8">
    <!-- Your hero image goes here -->
    <div class="info-text">
      <h1>LATEST NEWS!</h1>
      <h2>WE GOT THE ENERGY YOU NEED</h2>
    </div>
    <div class="button-container">
      <!--Navigation button-->
      <NuxtLink to="/products">
        <button class="btn-viewp">View Product</button>
      </NuxtLink>
    </div>
  </div>
  <section>
    <h2 class="text-center text-4xl mb-6 uppercase">trending</h2>

    <!---product cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="p in products" :key="p.id" class="w-full md:w-auto">
        <ProductCard :product="p" v-if="p.isHighlighted" />
      </div>
    </div>

    <!---info section -->
    <div class="p-4 mt-10">
      <h2 class="text-2xl font-bold mb-2 mt-2">Info</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam fuga
        blanditiis sed cumque in exercitationem placeat modi numquam nobis vitae
        ex, quis facilis deleniti minima autem eaque aliquam est beatae? Nostrum
        officiis quo, dicta
      </p>
    </div>
  </section>
</template>

<script setup>
// fetch the products
const { data: products } = await useFetch(
  "https://acciodennis.azurewebsites.net/api/products"
);
</script>

<style scoped>
.hero-image-container {
  width: 100%;
  height: 35vh;
  background-image: url("~/images/accio.jpg");
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

.btn-viewp {
  background-color: #333333;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 25px;
  font-weight: bold;
  transition: background-color 0.5s ease;
}

.btn-viewp:hover {
  background-color: #0e5c35;
  color: #fff;
  transition: background-color 0.5s ease;
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

  .btn-viewp {
    border: solid rgb(180, 180, 180) 2px;
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
