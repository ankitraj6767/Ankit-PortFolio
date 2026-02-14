import { useState } from 'react'

import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { socialLinks } from '../data/content'
import SectionHeader from './SectionHeader'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const payload = new FormData()
    payload.append('name', formState.name)
    payload.append('email', formState.email)
    payload.append('message', formState.message)

    fetch('https://formsubmit.co/ajax/araj803125@gmail.com', {
      method: 'POST',
      body: payload,
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to send')
        setStatus('Message sent! I will get back to you soon.')
        setFormState({ name: '', email: '', message: '' })
      })
      .catch(() => {
        setStatus('Sorry, something went wrong. Please email me directly at araj803125@gmail.com.')
      })
      .finally(() => {
        setTimeout(() => setStatus(''), 5000)
      })
  }

  return (
    <section id="contact" className="section-container scroll-mt-24 space-y-6 pb-16">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build together"
        description="Opportunities, collaborations, or mentorship chats—send a note and I’ll respond quickly."
        align="center"
      />

      <div 
        className="grid gap-6 lg:grid-cols-2"
        
        
        
        
      >
        <form
          className="glass-card p-6 sm:p-7 shadow-lg shadow-cyan-500/5"
          onSubmit={handleSubmit}
          
          
          
          
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label 
              className="flex flex-col gap-2 text-sm text-slate-200"
              
              
              
              
            >
              Name
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                placeholder="Your name"
              />
            </label>
            <label 
              className="flex flex-col gap-2 text-sm text-slate-200"
              
              
              
              
            >
              Email
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label 
            className="mt-4 flex flex-col gap-2 text-sm text-slate-200"
            
            
            
            
          >
            Message
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 resize-none"
              placeholder="What would you like to work on together?"
            />
          </label>
          <div 
            className="mt-5 flex items-center gap-3"
            
            
            
            
          >
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition btn-premium focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-ink"
              
              
            >
              <FiSend className="text-lg" />
              Send Message
            </button>
            {status && (
              <span 
                className="text-sm text-cyan-100"
                
                
              >
                {status}
              </span>
            )}
          </div>
        </form>

        <div 
          className="space-y-4"
          
          
          
          
        >
          <div 
            className="glass-card p-6 shadow-lg shadow-cyan-500/5"
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)'
            }}
          >
            <h3 className="text-lg font-semibold text-slate-50">Prefer direct contact?</h3>
            <p className="mt-2 text-sm text-slate-400 justified-copy">
              Reach out via email or phone, or find me on the links below. I reply quickly to thoughtful messages.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { icon: FiMail, label: 'Email', href: socialLinks.email },
                { icon: FiPhone, label: socialLinks.phone, href: `tel:${socialLinks.phone?.replace(/\D/g, '') || ''}` },
                { icon: FiGithub, label: 'GitHub', href: socialLinks.github, external: true },
                { icon: FiLinkedin, label: 'LinkedIn', href: socialLinks.linkedin, external: true },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition neon-hover"
                  
                  
                  
                  
                  
                  
                >
                  <link.icon />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div 
            className="glass-card p-6 text-sm text-slate-300"
            
            
            
            
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(34, 211, 238, 0.1)'
            }}
          >
            <div className="flex items-center gap-2 text-cyan-100">
              <span 
                className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                
                
              />
              Typically responds within a business day
            </div>
            <p className="mt-3 text-slate-400 justified-copy">
              I appreciate concise context: what you need, timelines, and any links or docs that help me understand your goals.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact
