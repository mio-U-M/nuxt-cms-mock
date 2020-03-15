import { META, BASE_DIR } from './config'

require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: META,

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** routing
   */
  router: {
    base: BASE_DIR
  },
  /*
   ** file generate
   */
  generate: {
    dir: `./public${BASE_DIR}`,
    fallback: true
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  eslint: {
    fix: true
  },
  /*
   ** vue setting for release web site
   */
  // vue: {
  //   config: {
  //    productionTip: false,
  //    devtools: false,
  //    debug: false,
  //    silent: true
  //   }
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    filenames: {
      app: () => '[name].js',
      chunk: () => '[name].js',
      css: () => '[name].js',
      img: () => '[path][name].[ext]',
      font: () => '[path][name].[ext]',
      video: () => '[path][name].[ext]'
    },
    extend(config, ctx) {}
  }
}
