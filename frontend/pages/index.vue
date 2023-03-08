<template>
  <div class="hero-image-container mb-8">
    <!-- Your hero image goes here -->
    <div class="info-text">
      <h1>LATEST NEW!</h1>
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
    <h2 class="text-center text-4xl mb-6">Home Page (spotlight)</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-gray-200 p-4">
        <h2 class="text-2xl font-bold mb-2">Product 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          eros eget dui ultricies mattis. Donec euismod sem at dui ullamcorper
          interdum.
        </p>
      </div>
      <div class="bg-gray-200 p-2">
        <h2 class="text-2xl font-bold mb-2 mt-2">Product 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          eros eget dui ultricies mattis. Donec euismod sem at dui ullamcorper
          interdum.
        </p>
      </div>
      <div class="bg-gray-200 p-2">
        <h2 class="text-2xl font-bold mb-2 mt-2">Product 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          eros eget dui ultricies mattis. Donec euismod sem at dui ullamcorper
          interdum.
        </p>
      </div>
    </div>
    <div class="bg-gray-200 p-4 mt-10">
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

<script setup></script>

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
  color: #000000;
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
}

.btn-viewp:hover {
  background-color: #5f5f5f;
  color: #fff;
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
