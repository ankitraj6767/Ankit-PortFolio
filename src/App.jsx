import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import SectionHeader from './components/SectionHeader'
import Footer from './components/Footer'
import FloatingWhatsapp from './components/FloatingWhatsapp'
import ScrollToTop from './components/ScrollToTop'
import SEOHelper from './components/SEOHelper'

const THEME_STORAGE_KEY = 'portfolio-theme'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  const initialTheme = savedTheme === 'dark' || savedTheme === 'light'
    ? savedTheme
    : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  document.documentElement.setAttribute('data-theme', initialTheme)
  return initialTheme
}

const createStars = (count = 15) =>
  [...Array(count)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${4 + Math.random() * 4}s`,
    size: `${1 + Math.random() * 2}px`,
  }))

const Page = ({ children }) => (
  <main className="flex flex-col gap-16 sm:gap-20 pt-20 sm:pt-24 pb-32 lg:pb-36">
    {children}
  </main>
)

const NotFound = () => (
  <div className="section-container py-24 text-center">
    <SectionHeader eyebrow="404" title="Page not found" description="The page you&apos;re looking for doesn&apos;t exist yet." />
    <div className="mt-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-ink"
      >
        Go Home
      </Link>
    </div>
  </div>
)

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme)
  const [stars] = useState(() => createStars())

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((previousTheme) => (previousTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <BrowserRouter>
      <div className="relative overflow-x-hidden min-h-screen flex flex-col">
        {/* SEO Helper for dynamic meta tags */}
        <SEOHelper />
        
        {/* Animated Background Elements */}
        <div className="animated-top-border" />
        <div className="orb-2" />
        <div className="orb-3" />
        <div className="spotlight" />
        <div className="noise-overlay" />
        
        {/* Twinkling Stars */}
        <div className="stars-container">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
        </div>
        
        <ScrollToTop />
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Page>
                <Hero />
              </Page>
            }
          />
          <Route
            path="/about"
            element={
              <Page>
                <About />
              </Page>
            }
          />
          <Route
            path="/education"
            element={
              <Page>
                <Education />
              </Page>
            }
          />
          <Route
            path="/skills"
            element={
              <Page>
                <Skills />
              </Page>
            }
          />
          <Route
            path="/projects"
            element={
              <Page>
                <Projects />
              </Page>
            }
          />
          <Route
            path="/experience"
            element={
              <Page>
                <Experience />
              </Page>
            }
          />
          <Route
            path="/contact"
            element={
              <Page>
                <Contact />
              </Page>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </BrowserRouter>
  )
}

export default App
