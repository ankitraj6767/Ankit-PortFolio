import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDownload, FiMoon, FiSun } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, resumeLink } from '../data/content'

const NavLinks = ({ pathname, isMobile = false, onNavigate }) => (
  <div className={`${isMobile ? 'flex flex-col gap-5 py-4' : 'hidden lg:flex items-center gap-3 xl:gap-6'}`}>
    {navLinks.map(({ label, href }) => {
      const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
      return (
        <div
          key={href}
          initial={isMobile ? { opacity: 0, x: -20 } : false}
          animate={isMobile ? { opacity: 1, x: 0 } : false}
          
        >
          <Link
            to={href}
            onClick={onNavigate}
            className={`text-xs xl:text-sm font-medium uppercase tracking-wide transition-colors animated-underline whitespace-nowrap ${
              isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-cyan-200'
            }`}
          >
            {label}
          </Link>
        </div>
      )
    })}
  </div>
)

const ThemeToggle = ({ theme, onToggleTheme, fullWidth = false }) => (
  <button
    type="button"
    onClick={onToggleTheme}
    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    className={`inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs xl:text-sm font-semibold text-slate-200 shadow-sm shadow-cyan-500/10 transition hover:border-cyan-500/40 hover:text-cyan-200 ${
      fullWidth ? 'w-full' : 'w-32 xl:w-36 shrink-0'
    }`}
  >
    {theme === 'dark' ? <FiSun className="h-4 w-4 shrink-0" /> : <FiMoon className="h-4 w-4 shrink-0" />}
    <span className="min-w-[74px] text-center">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
  </button>
)

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [elevated, setElevated] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setElevated(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navShellClass = elevated
    ? theme === 'dark'
      ? 'bg-slate-950 border-b border-white/20 shadow-[0_14px_40px_rgba(2,6,23,0.75)]'
      : 'bg-card/95 backdrop-blur-2xl border-b border-cyan-500/30 shadow-[0_14px_40px_rgba(15,23,42,0.2)]'
    : theme === 'dark'
      ? 'bg-slate-950 border-b border-white/15'
      : 'bg-card/80 backdrop-blur-xl border-b border-slate-800/60'

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navShellClass}`}
      
      
      
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div 
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 via-sky-400/30 to-blue-500/30 ring-1 ring-cyan-400/30"
            
            
          >
            <span className="text-base sm:text-lg font-semibold text-cyan-200">AR</span>
          </div>
          <span 
            className="text-base sm:text-lg font-bold tracking-wide text-slate-50 font-orbitron group-hover:text-cyan-100 transition-colors"
            
          >
            Ankit Raj
          </span>
        </Link>

        <NavLinks pathname={pathname} />

        <div className="hidden items-center gap-3 lg:flex shrink-0">
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
          <a
            href={resumeLink}
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-cyan-100 shadow shadow-cyan-500/10 transition neon-hover whitespace-nowrap"
            target="_blank"
            rel="noreferrer"
            
            
          >
            <FiDownload className="shrink-0" />
            <span className="hidden xl:inline">Download</span> Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`rounded-lg border p-2 text-slate-200 shadow-md shadow-cyan-500/5 ${
              theme === 'dark' ? 'border-white/30 bg-slate-900' : 'border-slate-800 bg-card/80'
            }`}
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            aria-label="Toggle navigation"
            className={`rounded-lg border p-2 text-slate-200 shadow-md shadow-cyan-500/5 ${
              theme === 'dark' ? 'border-white/30 bg-slate-900' : 'border-slate-800 bg-card/80'
            }`}
            onClick={() => setIsOpen((open) => !open)}
            
            
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <div
                  key="close"
                  
                  
                  exit={{ rotate: 90, opacity: 0 }}
                  
                >
                  <FiX size={20} />
                </div>
              ) : (
                <div
                  key="menu"
                  
                  
                  exit={{ rotate: -90, opacity: 0 }}
                  
                >
                  <FiMenu size={20} />
                </div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div 
            className={`lg:hidden border-t px-6 pb-4 overflow-hidden ${
              theme === 'dark' ? 'border-white/15 bg-slate-950' : 'border-slate-800/60 bg-card'
            }`}
            
            
            exit={{ height: 0, opacity: 0 }}
            
          >
            <NavLinks pathname={pathname} isMobile onNavigate={() => setIsOpen(false)} />
            <a
              href={resumeLink}
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow shadow-cyan-500/10 transition neon-hover"
              target="_blank"
              rel="noreferrer"
              
              
              
            >
              <FiDownload />
              Download Resume
            </a>
          </div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
