import { FiLinkedin, FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi'
import { socialLinks } from '../data/content'

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800/70 bg-card/80 backdrop-blur">
      <div className="section-container flex items-center justify-between py-2 text-xs text-slate-500">
        <div className="flex-1" />
        <div className="flex flex-col items-center gap-0.5 text-center leading-tight">
          <span>© {new Date().getFullYear()} Ankit Raj</span>
          <span className="text-slate-600">Built for the web and tuned for any screen size.</span>
        </div>
        <div className="flex flex-1 justify-end flex-wrap items-center gap-2 text-xs text-slate-200">
          <a
            href={socialLinks.linkedin}
            className="inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 p-2 transition hover:border-cyan-400/40 hover:text-cyan-100"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={14} />
          </a>
          <a
            href={socialLinks.twitter}
            className="inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 p-2 transition hover:border-cyan-400/40 hover:text-cyan-100"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FiTwitter size={14} />
          </a>
          <a
            href={socialLinks.instagram}
            className="inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 p-2 transition hover:border-cyan-400/40 hover:text-cyan-100"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram size={14} />
          </a>
          <a
            href={socialLinks.facebook}
            className="inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 p-2 transition hover:border-cyan-400/40 hover:text-cyan-100"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FiFacebook size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
