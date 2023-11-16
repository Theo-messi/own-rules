import type { HeadConfig } from 'vitepress'

const isDevelopment = process.env.NODE_ENV === 'development'

export const head: HeadConfig[] = [
  // LOGO
  ['link', { rel: 'icon', href: 'https://theovan.wiki/favicon.ico' }]
]