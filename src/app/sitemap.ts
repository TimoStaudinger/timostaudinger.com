import type {MetadataRoute} from 'next'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://timostaudinger.com',
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: 'https://timostaudinger.com/about',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://timostaudinger.com/uses',
    changeFrequency: 'monthly',
    priority: 0.5,
  },
]

export default sitemap
