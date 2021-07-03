const basePath = '/fgo-scenes/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FGO:村正ぁジェネレータ',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fate/Grand Order 二部六章名場面「そういうところだぞ村正ぁーーーー！」のパロディ画像ジェネレータです。さぁ、皆さんご一緒に！ ＼村正ぁ！／' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'FGO:村正ぁジェネレータ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tenkoh.github.io/fgo-scenes',
      },
      { hid: 'og:title', property: 'og:title', content: 'FGO:村正ぁジェネレータ' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Fate/Grand Order 二部六章名場面「そういうところだぞ村正ぁーーーー！」のパロディ画像ジェネレータです。さぁ、皆さんご一緒に！ ＼村正ぁ！／',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://tenkoh.github.io/fgo-scenes/ogp.png',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { name: 'twitter:site', content: '@FGO-scenes' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: basePath + 'favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/globals.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'nuxt-purgecss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag',
  ],

  'google-gtag': {
    id: 'G-T9EHVMH1TP',
    debug: true,
  },

  purgeCSS: {
    enabled: process.env.NODE_ENV === 'production',
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      './node_modules/vuetify/dist/vuetify.js',
      'assets/**/*.scss',
    ],
    styleExtensions: ['.css'],
    whitelist: ['v-application', 'v-application--wrap', 'layout', 'row', 'col'],
    whitelistPatterns: [
      /^v-((?!application).)*$/,
      /^theme--*/,
      /.*-transition/,
      /^justify-*/,
      /^p*-[0-9]/,
      /^m*-[0-9]/,
      /^text--*/,
      /--text$/,
      /^row-*/,
      /^col-*/,
    ],
    whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*/],
    extractors: [
      {
        extractor: (content) => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js'],
      },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
    treeShake: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: { ignoreOrder: true },
    optimization: {
      splitChunks: {
        maxSize: 128000,
      },
    },
  },

  generate: {
    dir: 'docs'
  },

  router: {
    base: basePath
  },

  server: {
    port: 8000
  }
}
