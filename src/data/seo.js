import { projects, socialLinks } from './content.js'

export const SITE_URL = 'https://ankit-raj.in'
export const LAST_MODIFIED = '2026-05-06'
export const DATE_PUBLISHED = '2024-01-01T00:00:00+05:30'
export const DATE_MODIFIED = '2026-05-06T00:00:00+05:30'
export const PROFILE_IMAGE = `${SITE_URL}/profile.png`

export const siteProfile = {
  name: 'Ankit Raj',
  givenName: 'Ankit',
  familyName: 'Raj',
  username: 'ankitraj6767',
  codingHandle: 'smartwinner',
  jobTitle: 'Software Development Engineer',
  employer: 'Blue Yonder India Private Limited',
  employerUrl: 'https://blueyonder.com/',
  alumni: 'National Institute of Technology, Silchar',
  alumniUrl: 'https://www.nits.ac.in/',
  email: 'araj803125@gmail.com',
  phone: '+91-6200667346',
  location: 'Bengaluru, Karnataka, India',
  description:
    'Official portfolio of Ankit Raj, GitHub @ankitraj6767 and Codeforces smartwinner, a Software Development Engineer at Blue Yonder and NIT Silchar CSE graduate.',
  disambiguation:
    'Ankit Raj the software development engineer, GitHub @ankitraj6767, Codeforces smartwinner, and NIT Silchar CSE graduate.',
}

export const sameAsLinks = [
  socialLinks.github,
  socialLinks.linkedin,
  'https://x.com/ankitra14349112',
  'https://twitter.com/ankitra14349112',
  'https://leetcode.com/u/smartwinner/',
  'https://codeforces.com/profile/smartwinner',
  socialLinks.instagram,
  socialLinks.facebook,
].filter(Boolean)

export const seoRoutes = [
  {
    path: '/',
    label: 'Home',
    title: 'Ankit Raj | Software Development Engineer at Blue Yonder',
    description:
      'Official portfolio of Ankit Raj (@ankitraj6767), Software Development Engineer at Blue Yonder and NIT Silchar CSE graduate. Explore projects, experience, skills, and contact details.',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/about',
    label: 'About',
    title: 'About Ankit Raj | Software Engineer, NIT Silchar CSE Graduate',
    description:
      'About Ankit Raj, a software engineer focused on Java, Spring Boot, React, Kafka, clean architecture, reliable backend systems, and product-minded engineering.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/education',
    label: 'Education',
    title: 'Ankit Raj Education | NIT Silchar Computer Science',
    description:
      'Education profile of Ankit Raj, B.Tech Computer Science and Engineering graduate from National Institute of Technology Silchar with strong CS fundamentals.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/skills',
    label: 'Skills',
    title: 'Ankit Raj Skills | Java, Spring Boot, React, Kafka',
    description:
      'Technical skills of Ankit Raj across Java, Spring Boot, React, Node.js, Kafka, PostgreSQL, MongoDB, Docker, system design, and data structures.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/projects',
    label: 'Projects',
    title: 'Ankit Raj Projects | Full Stack Software Portfolio',
    description:
      'Selected full stack projects by Ankit Raj, including commerce, school CMS, productivity, and NASA data dashboards built with React, Next.js, Node.js, and MongoDB.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/experience',
    label: 'Experience',
    title: 'Ankit Raj Experience | Software Development Engineer at Blue Yonder',
    description:
      'Professional experience of Ankit Raj as a Software Development Engineer at Blue Yonder, building Spring Boot services, Kafka pipelines, and React interfaces.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    label: 'Contact',
    title: 'Contact Ankit Raj | Software Development Engineer',
    description:
      'Contact Ankit Raj for software engineering opportunities, backend development, full stack projects, collaboration, mentoring, and professional inquiries.',
    priority: '0.8',
    changefreq: 'monthly',
  },
]

export const notFoundSeo = {
  path: '/404',
  label: 'Not Found',
  title: 'Page Not Found | Ankit Raj',
  description: 'The requested page was not found on the official portfolio of Ankit Raj.',
  priority: '0.0',
  changefreq: 'yearly',
  noindex: true,
}

const routeMap = new Map(seoRoutes.map((route) => [route.path, route]))

export const normalizePath = (pathname = '/') => {
  if (!pathname || pathname === '/') return '/'
  const cleanPath = pathname.split('?')[0].split('#')[0]
  return cleanPath.length > 1 ? cleanPath.replace(/\/+$/, '') : cleanPath
}

export const getSeoForPath = (pathname) => routeMap.get(normalizePath(pathname)) || notFoundSeo

export const canonicalUrl = (pathname = '/') => {
  const path = normalizePath(pathname)
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

export const buildTitle = (route) => route.title

export const buildPersonSchema = () => ({
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: siteProfile.name,
  givenName: siteProfile.givenName,
  familyName: siteProfile.familyName,
  alternateName: [
    'Ankit',
    'Ankit Raj smartwinner',
    siteProfile.username,
    siteProfile.codingHandle,
  ],
  disambiguatingDescription: siteProfile.disambiguation,
  url: `${SITE_URL}/`,
  image: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}/#profile-image`,
    url: PROFILE_IMAGE,
    width: 896,
    height: 1200,
    caption: 'Ankit Raj, Software Development Engineer',
  },
  jobTitle: siteProfile.jobTitle,
  worksFor: {
    '@type': 'Organization',
    name: siteProfile.employer,
    url: siteProfile.employerUrl,
    sameAs: 'https://www.linkedin.com/company/blue-yonder/',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: siteProfile.alumni,
    url: siteProfile.alumniUrl,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  email: siteProfile.email,
  telephone: siteProfile.phone,
  sameAs: sameAsLinks,
  identifier: [
    {
      '@type': 'PropertyValue',
      propertyID: 'GitHub username',
      value: siteProfile.username,
      url: socialLinks.github,
    },
    {
      '@type': 'PropertyValue',
      propertyID: 'Codeforces handle',
      value: siteProfile.codingHandle,
      url: 'https://codeforces.com/profile/smartwinner',
    },
    {
      '@type': 'PropertyValue',
      propertyID: 'LeetCode profile',
      value: siteProfile.codingHandle,
      url: 'https://leetcode.com/u/smartwinner/',
    },
  ],
  knowsAbout: [
    'Java',
    'Spring Boot',
    'React',
    'Node.js',
    'Apache Kafka',
    'PostgreSQL',
    'MongoDB',
    'REST API design',
    'Microservices',
    'Data structures and algorithms',
    'System design',
    'Full stack development',
  ],
  knowsLanguage: ['English', 'Hindi'],
  nationality: {
    '@type': 'Country',
    name: 'India',
  },
})

export const buildWebsiteSchema = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Ankit Raj Portfolio',
  alternateName: [
    'Ankit Raj official portfolio',
    'Ankit Raj software engineer',
    'Ankit Raj developer portfolio',
  ],
  description: siteProfile.description,
  publisher: {
    '@id': `${SITE_URL}/#person`,
  },
  inLanguage: 'en-IN',
})

export const buildWebPageSchema = (route) => ({
  '@type':
    route.path === '/projects'
      ? 'CollectionPage'
      : route.path === '/' || route.path === '/about'
        ? 'ProfilePage'
        : 'WebPage',
  '@id': `${canonicalUrl(route.path)}#webpage`,
  url: canonicalUrl(route.path),
  name: route.title,
  description: route.description,
  isPartOf: {
    '@id': `${SITE_URL}/#website`,
  },
  about: {
    '@id': `${SITE_URL}/#person`,
  },
  mainEntity: {
    '@id': `${SITE_URL}/#person`,
  },
  primaryImageOfPage: {
    '@id': `${SITE_URL}/#profile-image`,
  },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'en-IN',
})

export const buildBreadcrumbSchema = (route) => ({
  '@type': 'BreadcrumbList',
  '@id': `${canonicalUrl(route.path)}#breadcrumb`,
  itemListElement:
    route.path === '/'
      ? [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
        ]
      : [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: route.label,
            item: canonicalUrl(route.path),
          },
        ],
})

export const buildProjectListSchema = () => ({
  '@type': 'ItemList',
  '@id': `${SITE_URL}/projects#projects`,
  name: 'Ankit Raj software projects',
  description: 'Selected full stack software projects by Ankit Raj.',
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'SoftwareApplication',
      name: project.title,
      description: project.description,
      url: project.website,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web',
      author: {
        '@id': `${SITE_URL}/#person`,
      },
    },
  })),
})

export const buildSchemaGraph = (route) => {
  const graph = [
    buildPersonSchema(),
    buildWebsiteSchema(),
    buildWebPageSchema(route),
    buildBreadcrumbSchema(route),
  ]

  if (route.path === '/projects') {
    graph.push(buildProjectListSchema())
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
