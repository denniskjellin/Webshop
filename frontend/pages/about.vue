<template>
    <section>
    <h1 class="text-center text-4xl mb-6">About</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam
        necessitatibus quos voluptatum quas quidem. Quisquam, quae. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam
        necessitatibus quos voluptatum quas quidem. Quisquam, quae.</p>
    
  </section>
</template>

<script setup>

// set the title and meta tags
useHead({
  title: "Accio | About",
  meta: [
    {
      name: "description", content: "Accio - About",
    },
  ],
})

</script>

<style scoped>
    h2 {
        margin-bottom: 1.3rem;
        font-size: 2.2rem;
    }

    p {
        margin: 1.3rem 0;
    }
</style>