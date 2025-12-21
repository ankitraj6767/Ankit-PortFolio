import { Link } from 'react-router-dom'
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { highlightStats, socialLinks, techStackPreview } from '../data/content'

const Hero = () => {
  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/Person"
      className="section-container relative flex min-h-screen flex-col justify-center gap-3 pt-8 pb-8"
      aria-label="Ankit Raj - Software Development Engineer Portfolio"
    >
      {/* Hidden SEO Content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Ankit Raj - Software Development Engineer</h2>
        <p>Ankit Raj is a Software Development Engineer at Blue Yonder India Private Limited. He specializes in Java, Spring Boot, React, Node.js, Kafka, MongoDB, and PostgreSQL.</p>
        <meta itemProp="name" content="Ankit Raj" />
        <meta itemProp="jobTitle" content="Software Development Engineer" />
        <meta itemProp="email" content="araj803125@gmail.com" />
        <meta itemProp="telephone" content="+91-6200667346" />
        <meta itemProp="url" content="https://ankit-raj.in/" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="flex w-full max-w-3xl flex-col items-center gap-5 text-center">
          {/* Profile Image */}
          <div className="flex w-full items-center justify-center gap-4">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 shadow-lg shadow-cyan-500/20">
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30" />
              <div className="absolute -inset-2 rounded-full border border-dashed border-cyan-400/20" />
              <img
                src="/profile.png"
                alt="Ankit Raj - Software Development Engineer at Blue Yonder, NIT Silchar CSE Graduate"
                title="Ankit Raj - Full Stack Developer"
                className="h-60 w-60 rounded-full object-cover object-top"
                loading="eager"
                decoding="async"
                itemProp="image"
                width="240"
                height="240"
              />
              <div className="absolute inset-0 rounded-full" style={{ boxShadow: '0 0 40px rgba(34, 211, 238, 0.25)' }} />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100 shadow-sm shadow-cyan-500/10">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Product-minded engineer
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-50" itemProp="name">
              <span itemProp="givenName">Ankit</span> <span itemProp="familyName">Raj</span> —{' '}
              <span className="gradient-text-animated" itemProp="jobTitle">
                Software Engineer
              </span>
            </h1>
            <p className="text-lg text-slate-300 text-center">
              I design and ship resilient products with Spring Boot, React, and cloud tooling. From architecture to UI polish, I care about reliability, performance, and user trust.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
            >
              View Projects
              <FiArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-card/60 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-md shadow-cyan-500/10 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
            >
              Contact Me
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-200">
            {[
              { icon: FiGithub, label: 'GitHub', href: socialLinks.github },
              { icon: FiLinkedin, label: 'LinkedIn', href: socialLinks.linkedin },
              { icon: FiMail, label: 'Email', href: socialLinks.email },
            ].map((social) => (
              <a
                key={social.label}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm transition hover:scale-105 hover:border-cyan-500/50"
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
              >
                <social.icon /> {social.label}
              </a>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid w-full gap-3 sm:grid-cols-3">
            {[
              { title: 'Backend Delivery', detail: 'Spring Boot, Kafka, reliable APIs for analytics' },
              { title: 'Product Craft', detail: 'Clean interfaces with React, Tailwind, and data-rich UIs' },
              { title: 'Collaboration', detail: 'Mentorship, cross-team work, measured rollouts' },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card p-4 text-center sm:text-left"
              >
                <p className="text-sm font-semibold text-slate-100">{item.title}</p>
                <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="relative grid w-full gap-4 self-stretch">
          {/* Current Focus Card */}
          <div className="glass-card p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="text-center sm:text-left w-full sm:w-auto">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Current focus</p>
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
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-300 justify-center sm:justify-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 text-center text-slate-100">
              {highlightStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-cyan-500/30 bg-slate-800/80 px-2 sm:px-3 py-2"
                >
                  <div className="text-base sm:text-lg font-bold text-cyan-300">{stat.value}</div>
                  <div className="text-[9px] sm:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.2em] text-slate-200 whitespace-nowrap">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Signature Strengths Card */}
          <div className="glass-card p-5">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 text-center sm:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Signature strengths</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-50">What I bring</h3>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-semibold text-cyan-100">
                Ship & Scale
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {[
                'System design with pragmatic trade-offs and strong testing/observability.',
                'Developer experience mindset—docs, tooling, and guardrails that speed teams up.',
                'UI polish with clear information hierarchy and accessibility considerations.',
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-2 text-center sm:text-left justify-center sm:justify-start">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="glass-card mx-auto flex w-full max-w-6xl flex-col gap-3 p-4 sm:p-6 shadow shadow-cyan-500/5 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Tech I work with</div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {techStackPreview.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm text-slate-200 shadow-sm shadow-cyan-500/5 cursor-default hover:scale-105 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
