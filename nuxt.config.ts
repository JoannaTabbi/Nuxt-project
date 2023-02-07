// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: 'Nuxt project',
      meta: [
        { name: 'description', content: 'Nuxt basic pratical exercice' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
});
