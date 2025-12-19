import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO_CONFIG = {
  '/': {
    title: 'Ankit Raj - Software Development Engineer | Full Stack Developer | Java & React Expert',
    description: 'Ankit Raj is a Software Development Engineer at Blue Yonder, specializing in Java, Spring Boot, React, and Kafka. NIT Silchar CSE graduate with 1700+ DSA problems solved. Codeforces Expert, LeetCode Knight.',
    keywords: 'Ankit Raj, Software Developer, SDE, Full Stack Developer, Java Developer, React Developer, Blue Yonder'
  },
  '/about': {
    title: 'About Ankit Raj - Software Development Engineer | Blue Yonder | NIT Silchar',
    description: 'Learn about Ankit Raj - Software Development Engineer at Blue Yonder. Expert in Java, Spring Boot, React. NIT Silchar CSE graduate. Competitive programmer with 1700+ problems solved.',
    keywords: 'Ankit Raj about, Ankit Raj biography, Ankit Raj developer, software engineer India'
  },
  '/education': {
    title: 'Education - Ankit Raj | NIT Silchar CSE | B.Tech Computer Science',
    description: 'Ankit Raj educational background - B.Tech in Computer Science from NIT Silchar (CGPA: 8.37). Strong foundation in DSA, algorithms, and competitive programming.',
    keywords: 'Ankit Raj education, NIT Silchar, B.Tech CSE, computer science engineering'
  },
  '/skills': {
    title: 'Skills - Ankit Raj | Java, Spring Boot, React, Kafka, Node.js Expert',
    description: 'Technical skills of Ankit Raj - Expert in Java, Spring Boot, React, Node.js, Kafka, MongoDB, PostgreSQL. Full stack developer with strong DSA and system design skills.',
    keywords: 'Ankit Raj skills, Java developer, Spring Boot expert, React developer, full stack skills'
  },
  '/projects': {
    title: 'Projects - Ankit Raj | Full Stack Web Applications & Software Development',
    description: 'Portfolio projects by Ankit Raj including ShopHub E-commerce, PG International School, LifeOps, CosmoScope. Built with React, Node.js, Spring Boot, MongoDB.',
    keywords: 'Ankit Raj projects, web development portfolio, React projects, full stack applications'
  },
  '/experience': {
    title: 'Experience - Ankit Raj | Software Development Engineer at Blue Yonder',
    description: 'Professional experience of Ankit Raj - SDE at Blue Yonder working on MDAP platform with Spring Boot, Kafka, React. Previously SDE Intern at Blue Yonder.',
    keywords: 'Ankit Raj experience, Blue Yonder SDE, software development work experience'
  },
  '/contact': {
    title: 'Contact Ankit Raj - Software Development Engineer | Hire Developer',
    description: 'Get in touch with Ankit Raj for software development opportunities. Email: araj803125@gmail.com, Phone: +91-6200667346. Available for full-time roles and freelance projects.',
    keywords: 'contact Ankit Raj, hire software developer, Ankit Raj email, developer contact India'
  }
}

const SEOHelper = () => {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const config = SEO_CONFIG[path] || SEO_CONFIG['/']

    // Update document title
    document.title = config.title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', config.description)
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', config.keywords)
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', config.title)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', config.description)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://ankit-raj.in${path}`)
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', config.title)
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', config.description)
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', `https://ankit-raj.in${path === '/' ? '' : path}`)
    }

  }, [location])

  return null
}

export default SEOHelper
