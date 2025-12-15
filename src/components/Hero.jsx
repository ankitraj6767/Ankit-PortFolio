import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { highlightStats, socialLinks, techStackPreview } from '../data/content'
import { fadeInUp, staggerContainer, slideInRight, textReveal, card3D, magneticHover } from '../utils/motion'

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-container relative flex min-h-screen flex-col justify-center gap-3 pt-8 pb-8 perspective-container"
    >
      {/* Animated Background Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block">
        <motion.div 
          className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl morph-blob"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute -right-10 top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px] morph-blob"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Reduced Floating Particles - hidden on mobile */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{ left: `${20 + i * 25}%`, top: `${25 + (i % 2) * 30}%` }}
            animate={{
              y: [-10, -50, -10],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <motion.div 
          className="flex w-full max-w-3xl flex-col items-center gap-5 text-center lg:items-center"
          {...staggerContainer}
        >
          {/* Animated Profile Image */}
          <motion.div 
            className="flex w-full items-center justify-center gap-4"
            {...fadeInUp}
          >
            <motion.div 
              className="relative flex h-64 w-64 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Static Ring - no animation for better performance */}
              <div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
              />
              <div
                className="absolute -inset-2 rounded-full border border-dashed border-cyan-400/20"
              />
              <img
                src="/profile.png"
                alt="Ankit Raj portrait"
                className="h-60 w-60 rounded-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
              {/* Static Glow Effect */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: '0 0 40px rgba(34, 211, 238, 0.25)',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Animated Badge */}
          <motion.div 
            className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100 shadow-sm shadow-cyan-500/10"
            {...textReveal}
            whileHover={{ scale: 1.05, borderColor: 'rgba(34, 211, 238, 0.5)' }}
          >
            <span
              className="h-2 w-2 rounded-full bg-cyan-400"
            />
            Product-minded engineer
          </motion.div>

          {/* Animated Title */}
          <motion.div className="space-y-3" {...textReveal}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-50">
              Ankit Raj —{' '}
              <span className="gradient-text-animated">
                Software Engineer
              </span>
            </h1>
            <motion.p 
              className="text-lg text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              I design and ship resilient products with Spring Boot, React, and cloud tooling. From architecture to UI polish, I care about reliability, performance, and user trust.
            </motion.p>
          </motion.div>

          {/* Animated Buttons */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div {...magneticHover} whileHover="hover" whileTap="tap">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition btn-premium focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-ink"
              >
                View Projects
                <FiArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
            <motion.div {...magneticHover} whileHover="hover" whileTap="tap">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-card/60 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-md shadow-cyan-500/10 transition neon-hover focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-ink"
              >
                Contact Me
                <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Social Links */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3 text-slate-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: FiGithub, label: 'GitHub', href: socialLinks.github },
              { icon: FiLinkedin, label: 'LinkedIn', href: socialLinks.linkedin },
              { icon: FiMail, label: 'Email', href: socialLinks.email },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm transition neon-hover"
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <social.icon /> {social.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Animated Feature Cards */}
          <motion.div 
            className="grid w-full gap-3 sm:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { title: 'Backend Delivery', detail: 'Spring Boot, Kafka, reliable APIs for analytics' },
              { title: 'Product Craft', detail: 'Clean interfaces with React, Tailwind, and data-rich UIs' },
              { title: 'Collaboration', detail: 'Mentorship, cross-team work, measured rollouts' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-4 transition duration-300 tilt-card"
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 20px 40px rgba(34, 211, 238, 0.15)',
                  borderColor: 'rgba(34, 211, 238, 0.3)'
                }}
              >
                <p className="text-sm font-semibold text-slate-100">{item.title}</p>
                <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Animated Cards */}
        <motion.div 
          className="relative grid w-full gap-4 self-stretch"
          {...slideInRight}
        >
          {/* Current Focus Card */}
          <motion.div 
            className="glass-card p-6 transition duration-300 tilt-card"
            {...card3D}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 25px 50px rgba(34, 211, 238, 0.15)'
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <motion.p 
                  className="text-xs uppercase tracking-[0.2em] text-cyan-200"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Current focus
                </motion.p>
                <p className="mt-1 text-xl font-semibold text-slate-50">Analytics platforms & DX</p>
                <p className="mt-2 text-sm text-slate-400">
                  Building reliable services with observability, great onboarding, and thoughtful developer experience.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {[
                'Spring Boot microservices',
                'Kafka data pipelines',
                'React + Next.js frontends',
                'REST API design',
                'MongoDB & PostgreSQL',
                'Docker containerization',
                'Observability & monitoring',
              ].map((item, index) => (
                <motion.div 
                  key={item} 
                  className="flex items-center gap-2 text-sm text-slate-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span 
                    className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                  />
                  {item}
                </motion.div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 text-center text-slate-100">
              {highlightStats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="rounded-lg border border-cyan-500/30 bg-slate-800/80 px-2 sm:px-3 py-2 neon-hover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-base sm:text-lg font-bold text-cyan-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-[9px] sm:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.2em] text-slate-200 whitespace-nowrap">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Signature Strengths Card */}
          <motion.div 
            className="glass-card p-5 transition duration-300 tilt-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)'
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Signature strengths</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-50">What I bring</h3>
              </div>
              <motion.div 
                className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-semibold text-cyan-100"
                whileHover={{ scale: 1.1, borderColor: 'rgba(34, 211, 238, 0.5)' }}
              >
                Ship & Scale
              </motion.div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {[
                'System design with pragmatic trade-offs and strong testing/observability.',
                'Developer experience mindset—docs, tooling, and guardrails that speed teams up.',
                'UI polish with clear information hierarchy and accessibility considerations.',
              ].map((text, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span 
                    className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                  />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <motion.div 
        className="glass-card mx-auto flex w-full max-w-6xl flex-col gap-3 p-4 sm:p-6 shadow shadow-cyan-500/5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Tech I work with</div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {techStackPreview.map((tech, index) => (
            <motion.span
              key={tech}
              className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm text-slate-200 shadow-sm shadow-cyan-500/5 transition neon-hover cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -3 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
