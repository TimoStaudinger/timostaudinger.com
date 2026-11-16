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
  {
    url: 'https://timostaudinger.com/say',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
]

export default sitemap
