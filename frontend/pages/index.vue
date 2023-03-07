<template>
    <section class="hero-image-container">
    <!-- Your hero image goes here -->
  </section>
  <section>
    <h1 class="text-center text-4xl mb-6">Home Page</h1>
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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam fuga blanditiis sed cumque in exercitationem placeat modi numquam nobis vitae ex, quis facilis deleniti minima autem eaque aliquam est beatae? Nostrum officiis quo, dicta 
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero-image-container {
  width: 100%;
  height: 35vh;
  background-image: url('~/images/accio.jpg');
  background-size: cover;
  background-position: center;
}

/* Small screens */
@media (max-width: 768px) {
  .hero-image-container {
    height: 300px;
    background-position: 90% 75%; /* Shift the focal point down slightly */
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
