export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Paktor',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Site espositivo da empresa de construcao civil da paktor contrucao e engenharia' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/globalCss.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/carrousel3D.js', mode: 'client' },
  ],

  components: true,


  buildModules: [
    '@nuxtjs/google-fonts',
    ['@nuxtjs/google-fonts', { /* module options */ }]
  ],

  googleAnalytics: {
    id: 'G-4KS90JCP4E'
  },

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/google-analytics',
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],

  axios: {},

  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]]
    }

  }
}
