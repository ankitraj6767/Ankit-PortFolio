import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  LAST_MODIFIED,
  PROFILE_IMAGE,
  SITE_URL,
  buildSchemaGraph,
  canonicalUrl,
  notFoundSeo,
  seoRoutes,
} from '../src/data/seo.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')
const indexPath = path.join(distDir, 'index.html')

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const jsonForHtml = (value) => JSON.stringify(value, null, 2).replace(/</g, '\\u003c')

const insertBeforeHeadClose = (html, tag) => html.replace(/\s*<\/head>/i, `\n    ${tag}\n  </head>`)

const replaceOrInsert = (html, pattern, tag) =>
  pattern.test(html) ? html.replace(pattern, tag) : insertBeforeHeadClose(html, tag)

const setTitle = (html, title) =>
  replaceOrInsert(html, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)

const setMetaName = (html, name, content) =>
  replaceOrInsert(
    html,
    new RegExp(`<meta\\s+[^>]*name=["']${name}["'][^>]*>`, 'i'),
    `<meta name="${name}" content="${escapeHtml(content)}" />`,
  )

const setMetaProperty = (html, property, content) =>
  replaceOrInsert(
    html,
    new RegExp(`<meta\\s+[^>]*property=["']${property}["'][^>]*>`, 'i'),
    `<meta property="${property}" content="${escapeHtml(content)}" />`,
  )

const setCanonical = (html, href) =>
  replaceOrInsert(
    html,
    /<link\s+[^>]*rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${escapeHtml(href)}" />`,
  )

const setJsonLd = (html, graph) =>
  replaceOrInsert(
    html,
    /<script\s+id=["']seo-schema["'][^>]*>[\s\S]*?<\/script>/i,
    `<script id="seo-schema" type="application/ld+json">\n${jsonForHtml(graph)}\n    </script>`,
  )

const applyRouteSeo = (html, route) => {
  const canonical = route.noindex ? canonicalUrl('/') : canonicalUrl(route.path)
  const robots = route.noindex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  let output = setTitle(html, route.title)
  output = setMetaName(output, 'description', route.description)
  output = setMetaName(output, 'robots', robots)
  output = setMetaName(output, 'googlebot', robots)
  output = setCanonical(output, canonical)

  output = setMetaProperty(output, 'og:type', 'profile')
  output = setMetaProperty(output, 'og:url', canonical)
  output = setMetaProperty(output, 'og:title', route.title)
  output = setMetaProperty(output, 'og:description', route.description)
  output = setMetaProperty(output, 'og:image', PROFILE_IMAGE)
  output = setMetaProperty(output, 'og:image:secure_url', PROFILE_IMAGE)
  output = setMetaProperty(output, 'og:image:width', '896')
  output = setMetaProperty(output, 'og:image:height', '1200')
  output = setMetaProperty(output, 'og:image:alt', 'Ankit Raj, Software Development Engineer')

  output = setMetaName(output, 'twitter:url', canonical)
  output = setMetaName(output, 'twitter:title', route.title)
  output = setMetaName(output, 'twitter:description', route.description)
  output = setMetaName(output, 'twitter:image', PROFILE_IMAGE)
  output = setMetaName(output, 'twitter:image:alt', 'Ankit Raj, Software Development Engineer')
  output = setJsonLd(output, buildSchemaGraph(route))

  return output
}

const buildSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${seoRoutes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(canonicalUrl(route.path))}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>${
      route.path === '/'
        ? `
    <image:image>
      <image:loc>${escapeXml(PROFILE_IMAGE)}</image:loc>
      <image:title>Ankit Raj - Software Development Engineer</image:title>
      <image:caption>Official portfolio image of Ankit Raj, Software Development Engineer</image:caption>
    </image:image>`
        : ''
    }
  </url>`,
  )
  .join('\n')}
</urlset>
`

const buildRobots = () => `# robots.txt for Ankit Raj Portfolio
# https://ankit-raj.in/

User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

const writeRouteFile = async (route, baseHtml) => {
  const html = applyRouteSeo(baseHtml, route)
  const outputPath =
    route.path === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.path.replace(/^\//, ''), 'index.html')

  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, html)
}

const main = async () => {
  const baseHtml = await readFile(indexPath, 'utf8')

  await Promise.all(seoRoutes.map((route) => writeRouteFile(route, baseHtml)))
  await writeFile(path.join(distDir, '404.html'), applyRouteSeo(baseHtml, notFoundSeo))
  await writeFile(path.join(distDir, 'sitemap.xml'), buildSitemap())
  await writeFile(path.join(distDir, 'robots.txt'), buildRobots())
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
