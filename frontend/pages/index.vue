<template>
  <NuxtLink to="/products/amino">
    <section class="hero-image-container mb-16 bg-black">
      <!-- Your hero image goes here -->
      <div class="info-text">
        <h2 class="text-4xl  text-white uppercase font-bold tracking-wider ">latest news</h2>
        <h2 class="text-1xl  text-white font-bold uppercase tracking-wider ">
          we got the amino you need
        </h2>
      </div>
      <div class="button-container">
        <!--Navigation button-->
        <span class="btn-viewp">Shop now</span>
      </div>
    </section>
  </NuxtLink>
  <section>
    <h1
      class="text-start text-2xl text-gray-700 uppercase font-bold tracking-wide"
    >
      Trending
    </h1>

    <!---product cards, filter and show highlighted products in alpabetical order -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 border-b border-gray-200">
      <div
        v-for="p in products
          .filter((product) => product.isHighlighted)
          .sort((a, b) => a.title.localeCompare(b.title))"
      >
        <ProductCard :product="p" />
      </div>
    </div>

    <div>
      <h2
        class="text-2xl mt-10 mb-1 text-gray-700 font-bold uppercase tracking-wide"
      >
        Shop categories
      </h2>
      <CategoryNav></CategoryNav>
    </div>

    <!---info section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NuxtLink to="/products/protein">
        <div class="hero-image-2 mt-10 bg-black">
          <div class="hero-text">
            <p class="text-white uppercase font-bold tracking-wide">
              new isolate
            </p>
            <h2 class="text-2xl font-bold mb-2 mt-2">
              <span class="btn-viewp">Shop now</span>
            </h2>
          </div>
        </div>
      </NuxtLink>
      <!--- secondary hero-img -->
      <NuxtLink to="/products">
        <div class="hero-image mt-10 bg-black">
          <div class="hero-text">
            <p class="text-white uppercase font-bold tracking-wide">
              all the essentials
            </p>
            <h2 class="text-2xl font-bold mb-2 mt-2">
              <span class="btn-viewp">Explore products</span>
            </h2>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
  <section>
    <h3
      class="text-2xl mt-10 mb-1 text-gray-700 font-bold uppercase tracking-wide"
    >
      Info
    </h3>
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
  background-image: url("/images/heroimg.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}

.info-text {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: 2px 2px #000000;
}
.button-container {
  position: absolute;
  bottom: 6rem;
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

.hero-text p{
  text-shadow: 2px 2px #000000;
}

.btn-view {
  background-color: #131313;
  color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 25px;
  font-weight: bold;
  transition: background-color 0.5s ease;
}

.btn-view:hover {
  background-color: #383838;
  color: #fff;
  transition: background-color 0.5s ease;
}

/* XS-Small screens */
@media (max-width: 500px) {
  .button-container {
    position: absolute;
    top: 80%;
    margin-left: 30%;
    transform: translate(-50%, -50%);
  }

 

  .info-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: 2px 2px #000000;
}
.info-text h2 {
font-size: 1.2rem;
}

}

/* Smaler screens */
@media (max-width: 820px) {
  .hero-image-container {
    height: 300px;
    background-position: 50% 50%; /* Shift the focal point down slightly */
  }

  .btn-view {
    background-color: #131313;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 25px;
    font-weight: bold;
  }

  .btn-viewp {
    font-size: 1rem;
  }

  .button-container {
    bottom: 4rem;
    left: 20%;
  }
}


/* Large screens */
@media (min-width: 821px) {
  .hero-image-container {
    height: 600px;
    background-position: 50% 50%; /* Center the focal point */
  }
  .button-container {
    position: absolute;
    bottom: 13rem;
    left: 20%;
    transform: translateX(-50%);
  }
}
</style>
