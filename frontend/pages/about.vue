<template>
  <section class="flex flex-col justify-center items-center">
    <h1 class="text-center text-gray-700  text-4xl mb-6">About</h1>
    <p class="text-center text-gray-700 ">
      Det här är en webbsida skapad av Dennis Kjellin för kursen 'Webbutveckling med .NET'. Back-end är skriven i C# med hjälp av .NET Core och Entity Framework. Front-end är skriven i Nuxt/Vue.js med Tailwind för CSS styling.
    </p>
    <p class="text-center mt-3 text-gray-700 ">Front-end delen av webbsidan är publicerad på Netlify och applikationen konsumerar MVC API:et som är publicerat via Azure. </p>
    <p class="text-center mt-3 text-gray-700 ">ACCIO är en fiktiv webbshop där ingenting faktiskt går att handla, produkterna är däremot äkta och bilderna och produkterna har jag fått lov att låna av <strong>Atronstore.com</strong>, priser och produktbeskrivningar är fiktiva. </p>
    <h2 class="text-2xl text-center mt-10 text-gray-700 ">Vill du se mer av mina arbeten?</h2>
    <img src="/images/jag.jpg" alt="Dennis Kjellin" class="rounded-full h-40 w-40 object-cover mt-5">
    <p class="text-center mt-3 text-gray-700 ">Så kan du kolla in min GitHub <a target="_/blanc" class="text-blue-700" href="https://github.com/denniskjellin">Dennis Kjellin's GitHub</a></p>
    <p class="text-center mt-3 text-gray-700 ">Länk till repot för just detta projekt: <a target="_/blanc" class="text-blue-700" href="https://github.com/denniskjellin">https://github.com/denniskjellin/Webshop</a></p>

  </section>
</template>

<script setup>
  // set the title and meta tags
  useHead({
    title: "Accio | About",
    meta: [
      {
        name: "description",
        content: "Accio - About",
      },
    ],
  });
</script>


