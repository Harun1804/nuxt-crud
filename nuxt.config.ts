// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'NUXT3-CRUD',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name:'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Belajar NUXT3 CRUD'
        },
        {
          name: 'format-detection',
          content: 'telephone=no'
        }, 
        {
          hid: 'csrf-token',
          name: 'csrf-token',
          content: '+jx9TQ0Z:;tvuE-Ytp#+j#5R/=x?ejUM+bf@1ZQ*TG7"BQ(=T1"HGrcqg:Esiyy'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
          integrity: 'sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN',
          crossorigin: 'anonymous'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})
