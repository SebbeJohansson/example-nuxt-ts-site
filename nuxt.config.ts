import i18nConfig from './config/i18n'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'example-nuxt-ts-site',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/styles/index',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
  ],

  // i18n Localization settings.
  i18n: {
    vueI18nLoader: true,
    locales: ['en', 'sv'],
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  // recommended
    },
    vueI18n: i18nConfig,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-css-variables': {
          variables: {
            '--color-white': '#ffffff',
            '--color-black': '#000000',
            '--color-wild-sand': '#f7f6f6',
            '--color-ebb-gray': '#f0eeed',
            '--color-cloud-gray': '#cbc6c4',
            '--color-hurricane-gray': '#837975',
            '--color-gray': '#333',
            '--color-cod-gray': '#181516',
            '--color-aqua': '#e5f4f4',
            '--color-jade-green': '#00c566',
            '--color-teal': '#009392',
            '--color-orange': '#fc803a',
            '--color-torch-red': '#fa023e',
          },
          preserveAtRulesOrder: true,
          preserve: true,
        },
        'postcss-custom-media': {
          importFrom: [
            {
              customMedia: {
                '--phone': '(max-width: 767px)',
                '--phoneAndTablet': '(max-width: 1023px)',
                '--tablet': '(min-width: 768px) and (max-width: 1023px)',
                '--tabletAndDesktop': '(min-width: 768px)',
                '--desktop': '(min-width: 1024px)',
              },
            },
          ],
        },
        'postcss-preset-env': { },
        cssnano: { },
        'autoprefixer': {
          overrideBrowserslist: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
        },
      },
      preset: {
      },
    }
  }
}
