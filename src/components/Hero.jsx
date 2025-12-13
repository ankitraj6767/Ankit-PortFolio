import { Link } from 'react-router-dom'
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { highlightStats, resumeLink, socialLinks, techStackPreview } from '../data/content'

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-container relative flex min-h-screen flex-col justify-center gap-3 pt-8 pb-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-10 top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="flex max-w-3xl flex-col items-center gap-5 text-center">
          <div className="flex w-full items-center justify-center gap-4">
            <div className="flex h-64 w-64 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 shadow-lg shadow-cyan-500/20">
              <img
                src="/profile.png"
                alt="Ankit Raj portrait"
                className="h-60 w-60 rounded-full object-cover object-top"
              />
            </div>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100 shadow-sm shadow-cyan-500/10">
            Product-minded engineer
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-50">
              Ankit Raj — <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">Software Engineer</span>
            </h1>
            <p className="text-lg text-slate-300">
              I design and ship resilient products with Spring Boot, React, and cloud tooling. From architecture to UI polish, I care about reliability, performance, and user trust.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-ink"
            >
              View Projects
              <FiArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-card/60 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-md shadow-cyan-500/10 transition hover:-translate-y-0.5 hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-ink"
            >
              Contact Me
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-slate-200">
            <a className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm transition hover:border-cyan-400/40 hover:text-cyan-100" href={socialLinks.github} target="_blank" rel="noreferrer">
              <FiGithub /> GitHub
            </a>
            <a className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm transition hover:border-cyan-400/40 hover:text-cyan-100" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm transition hover:border-cyan-400/40 hover:text-cyan-100" href={socialLinks.email}>
              <FiMail /> Email
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { title: 'Backend Delivery', detail: 'Spring Boot, Kafka, reliable APIs for analytics' },
              { title: 'Product Craft', detail: 'Clean interfaces with React, Tailwind, and data-rich UIs' },
              { title: 'Collaboration', detail: 'Mentorship, cross-team work, measured rollouts' },
            ].map((item) => (
              <div key={item.title} className="card-surface p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-glow">
                <p className="text-sm font-semibold text-slate-100">{item.title}</p>
                <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative grid gap-4 self-stretch">
          <div className="card-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-glow">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Current focus</p>
                <p className="mt-1 text-xl font-semibold text-slate-50">Analytics platforms & DX</p>
                <p className="mt-2 text-sm text-slate-400">
                  Building reliable services with observability, great onboarding, and thoughtful developer experience.
                </p>
              </div>
              <div className="rounded-full bg-cyan-500/10 p-3 text-cyan-200">
                <FiArrowUpRight />
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {['Spring Boot services', 'Kafka data pipelines', 'React + Vite frontends', 'Observability by default'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-slate-100">
              {highlightStats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2">
                  <div className="text-lg font-semibold text-cyan-200">{stat.value}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-glow">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Signature strengths</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-50">What I bring</h3>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-semibold text-cyan-100">
                Ship & Scale
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
                <span>System design with pragmatic trade-offs and strong testing/observability.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
                <span>Developer experience mindset—docs, tooling, and guardrails that speed teams up.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
                <span>UI polish with clear information hierarchy and accessibility considerations.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-surface mx-auto flex max-w-5xl flex-col gap-3 p-4 sm:p-5 shadow shadow-cyan-500/5">
        <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Tech I work with</div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {techStackPreview.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm text-slate-200 shadow-sm shadow-cyan-500/5 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-100"
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
