<template>
  <div class="hero-image-container mb-8">
    <!-- Your hero image goes here -->
    <div class="info-text">
      <h1>ACCIO</h1>
      <p>RESTOCKED - AMINO BLAST</p>
    </div>
    <div class="button-container">
      <!--Navigation button-->
      <NuxtLink to="/products">
        <button>View Product</button>
      </NuxtLink>
    </div>
  </div>
  <section>
    <h2 class="text-center text-4xl mb-6">Home Page</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-gray-200 p-4">
        <h2 class="text-2xl font-bold mb-2">Box 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          eros eget dui ultricies mattis. Donec euismod sem at dui ullamcorper
          interdum.
        </p>
      </div>
      <div class="bg-gray-200 p-2">
        <h2 class="text-2xl font-bold mb-2 mt-2">Box 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          eros eget dui ultricies mattis. Donec euismod sem at dui ullamcorper
          interdum.
        </p>
      </div>
      <div class="bg-gray-200 p-2">
        <h2 class="text-2xl font-bold mb-2 mt-2">Box 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
          eros eget dui ultricies mattis. Donec euismod sem at dui ullamcorper
          interdum.
        </p>
      </div>
    </div>
    <div class="bg-gray-200 p-4 mt-10">
      <h2 class="text-2xl font-bold mb-2 mt-2">Test</h2>
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
  font-size: 6rem;
}

.info-text p {
  font-size: 1.5rem;
  font-weight: bold;
}

.button-container {
  position: absolute;
  bottom: 2rem;
  left: 25%;
  transform: translateX(-50%);
}

button {
  background-color: #333;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
}

button:hover {
  background-color: #5f5f5f;
  color: #fff;
}

/* XS-Small screens */
@media (max-width: 500px) {
  .info-text p {
    display: none;
  }

  .info-text {
    top: 0%;
    left: 50%;
  }
  /* Hide in mobile, became to messy with it*/
  .button-container {
    display: none;
  }
}

/* Small screens */
@media (max-width: 820px) {
  .hero-image-container {
    height: 300px;
    background-position: 90% 75%; /* Shift the focal point down slightly */
  }

  .info-text h1 {
    font-size: 3.8rem;
  }
  .info-text p {
    font-size: 1rem;
  }

  button {
    font-size: 1rem;
  }
  
}

/* Large screens */
@media (min-width: 1200px) {
  .hero-image-container {
    height: 600px;
    background-position: 50% 50%; /* Center the focal point */
  }


}
</style>
