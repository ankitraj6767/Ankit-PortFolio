import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, resumeLink } from '../data/content'

const NavLinks = ({ pathname, isMobile = false, onNavigate }) => (
  <div className={`${isMobile ? 'flex flex-col gap-4 py-4' : 'hidden md:flex items-center gap-3 lg:gap-5'}`}>
    {navLinks.map(({ label, href }) => {
      const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
      return (
        <Link
          key={href}
          to={href}
          onClick={onNavigate}
          className={`text-sm font-medium transition-colors ${
            isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-cyan-200'
          }`}
        >
          {label}
        </Link>
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
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        elevated ? 'backdrop-blur bg-card/70 border-b border-slate-800/70 shadow-lg shadow-cyan-500/5' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 via-sky-400/30 to-blue-500/30 ring-1 ring-cyan-400/30">
            <span className="text-lg font-semibold text-cyan-200">AR</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-slate-400">Portfolio</span>
            <span className="text-base font-semibold text-slate-50">Ankit Raj</span>
          </div>
        </Link>

        <NavLinks pathname={pathname} />

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={resumeLink}
            className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow shadow-cyan-500/10 transition hover:-translate-y-0.5 hover:border-cyan-300/60"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="md:hidden">
          <button
            aria-label="Toggle navigation"
            className="rounded-lg border border-slate-800 bg-card/80 p-2 text-slate-200 shadow-md shadow-cyan-500/5"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-800/60 bg-card/90 px-6 pb-4 backdrop-blur">
          <NavLinks pathname={pathname} isMobile onNavigate={() => setIsOpen(false)} />
          <a
            href={resumeLink}
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow shadow-cyan-500/10 transition hover:-translate-y-0.5 hover:border-cyan-300/60"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
