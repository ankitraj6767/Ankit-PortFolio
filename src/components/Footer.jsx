import { FiLinkedin, FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi'
import { socialLinks } from '../data/content'

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800/70 bg-card/80 backdrop-blur">
      <div className="section-container flex flex-col gap-3 py-4 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-1">
          <span>© {new Date().getFullYear()} Ankit Raj. Crafted with React & Tailwind.</span>
          <span className="text-slate-600">Built for the web and tuned for any screen size.</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-base text-slate-200">
          <a
            href={socialLinks.linkedin}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 transition hover:border-cyan-400/40 hover:text-cyan-100"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a
            href={socialLinks.twitter}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 transition hover:border-cyan-400/40 hover:text-cyan-100"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter /> Twitter
          </a>
          <a
            href={socialLinks.instagram}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 transition hover:border-cyan-400/40 hover:text-cyan-100"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram /> Instagram
          </a>
          <a
            href={socialLinks.facebook}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 transition hover:border-cyan-400/40 hover:text-cyan-100"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook /> Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
