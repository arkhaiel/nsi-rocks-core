export default defineNuxtConfig({
  compatibilityDate: '2025-10-02',
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/content',
    'nitro-cloudflare-dev',
  ],
  devtools: { enabled: true },
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
          integrity: 'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['@cloudflare/workers-types/2023-07-01'],
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
});
