// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Tailwind  CSS
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Accio",
      meta: [{ name: "description", content: "Accio webshop" }],
      link: [
        {
          rel: "font",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],

      htmlAttrs: {
        lang: "en",
      },
    },
  },
  css: [
    "@fortawesome/fontawesome-free/css/all.css",
    "@fortawesome/fontawesome-free/css/fontawesome.css",
  ],
});
