import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { buildSchemaGraph, canonicalUrl, getSeoForPath, PROFILE_IMAGE } from '../data/seo'

const upsertMeta = (selector, attributes) => {
  let tag = document.head.querySelector(selector)

  if (!tag) {
    tag = document.createElement('meta')
    document.head.appendChild(tag)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value)
  })

  return tag
}

const upsertLink = (selector, attributes) => {
  let tag = document.head.querySelector(selector)

  if (!tag) {
    tag = document.createElement('link')
    document.head.appendChild(tag)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value)
  })

  return tag
}

const upsertJsonLd = (route) => {
  let script = document.head.querySelector('#seo-schema')

  if (!script) {
    script = document.createElement('script')
    script.id = 'seo-schema'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(buildSchemaGraph(route))
}

const SEOHelper = () => {
  const location = useLocation()

  useEffect(() => {
    const route = getSeoForPath(location.pathname)
    const canonical = route.noindex ? canonicalUrl('/') : canonicalUrl(route.path)
    const robotsContent = route.noindex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

    document.title = route.title

    upsertMeta('meta[name="description"]', { name: 'description', content: route.description })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robotsContent })
    upsertMeta('meta[name="googlebot"]', { name: 'googlebot', content: robotsContent })
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical })

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'profile' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: route.title })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: route.description })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: PROFILE_IMAGE })
    upsertMeta('meta[property="og:image:secure_url"]', { property: 'og:image:secure_url', content: PROFILE_IMAGE })
    upsertMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '896' })
    upsertMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '1200' })
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'Ankit Raj, Software Development Engineer' })

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:url"]', { name: 'twitter:url', content: canonical })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: route.title })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: route.description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: PROFILE_IMAGE })
    upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: 'Ankit Raj, Software Development Engineer' })

    upsertJsonLd(route)
  }, [location])

  return null
}

export default SEOHelper
