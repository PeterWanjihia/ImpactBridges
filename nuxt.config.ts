export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Impact Bridge',
      meta: [
        {
          name: 'description',
          content:
            'We bring offline digital learning hubs, teacher training and resources to schools without reliable internet—so every child can learn, no matter where they are.',
        },
        {
          property: 'og:site_name',
          content: 'Impact Bridge',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/brand/logo-mark.png',
        },
      ],
    },
  },
})
