import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, resumeLink } from '../data/content'

const NavLinks = ({ pathname, isMobile = false, onNavigate }) => (
  <div className={`${isMobile ? 'flex flex-col gap-5 py-4' : 'hidden lg:flex items-center gap-3 xl:gap-6'}`}>
    {navLinks.map(({ label, href }, index) => {
      const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
      return (
        <motion.div
          key={href}
          initial={isMobile ? { opacity: 0, x: -20 } : false}
          animate={isMobile ? { opacity: 1, x: 0 } : false}
          transition={{ delay: index * 0.1 }}
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
        </motion.div>
      )
    })}
  </div>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [elevated, setElevated] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setElevated(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        elevated 
          ? 'bg-[#0a0a12]/95 backdrop-blur-2xl border-b border-cyan-500/30 shadow-[0_4px_40px_rgba(56,189,248,0.12)]' 
          : 'bg-[#0a0a12]/80 backdrop-blur-xl border-b border-white/5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <motion.div 
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 via-sky-400/30 to-blue-500/30 ring-1 ring-cyan-400/30"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-base sm:text-lg font-semibold text-cyan-200">AR</span>
          </motion.div>
          <motion.span 
            className="text-base sm:text-lg font-bold tracking-wide text-slate-50 font-orbitron group-hover:text-cyan-100 transition-colors"
            whileHover={{ x: 3 }}
          >
            Ankit Raj
          </motion.span>
        </Link>

        <NavLinks pathname={pathname} />

        <div className="hidden items-center gap-3 lg:flex shrink-0">
          <motion.a
            href={resumeLink}
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold text-cyan-100 shadow shadow-cyan-500/10 transition neon-hover whitespace-nowrap"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="shrink-0" />
            <span className="hidden xl:inline">Download</span> Resume
          </motion.a>
        </div>

        <div className="lg:hidden">
          <motion.button
            aria-label="Toggle navigation"
            className="rounded-lg border border-slate-800 bg-card/80 p-2 text-slate-200 shadow-md shadow-cyan-500/5"
            onClick={() => setIsOpen((open) => !open)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="lg:hidden border-t border-slate-800/60 bg-card px-6 pb-4 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <NavLinks pathname={pathname} isMobile onNavigate={() => setIsOpen(false)} />
            <motion.a
              href={resumeLink}
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow shadow-cyan-500/10 transition neon-hover"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FiDownload />
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
