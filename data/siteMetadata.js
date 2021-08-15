/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: '@hoangdh2001',
  author: 'Do Huy Hoang',
  headerTitle: '@hoangdh2001',
  description: 'iOS Engineer | Swift · SwiftUI · Flutter',
  openToWork: true,
  language: 'en-us',
  theme: 'dark',
  siteUrl: 'https://hoangdh2001.github.io',
  siteRepo: 'https://github.com/hoangdh2001/hoangdh-homepage',
  siteLogo: `/static/images/logo.png`,
  socialBanner: `/static/images/avatar.png`,
  email: 'dohuyhoang.se.dev@gmail.com',
  github: 'https://github.com/hoangdh2001',
  x: 'https://x.com/hoangdh2001',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/dohuyhoang2001/',
  instagram: '',
  locale: 'en-US',
  stickyNav: true,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-JB8VBQEJ6W',
    },
  },
  newsletter: { provider: 'buttondown' },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: 'hoangdh2001/hoangdh-homepage',
      repositoryId: '',
      category: '@hoangdh2001',
      categoryId: '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
