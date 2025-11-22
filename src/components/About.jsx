import { Link } from 'react-router-dom'
import { codingProfiles, highlightStats } from '../data/content'
import SectionHeader from './SectionHeader'

const About = () => {
  const introBullets = [
    'Building web applications, APIs, and systems that solve real problems.',
    'Breaking down complex requirements into simple, modular components.',
    'Caring about clean architecture, good naming, and thoughtful abstractions.',
    'Instrumenting services with testing and observability from the start.',
  ]

  const philosophy = [
    'Clean code over quick hacks—readability and maintainability first.',
    'Simplicity beats unnecessary complexity; choose tools for the problem, not the hype.',
    'Testing and reliability matter—ship with confidence, measure, and iterate.',
    'Write for future collaborators: clear naming, small focused functions, good docs.',
  ]

  const collaboration = [
    'Comfortable with Git, code reviews, and clear async communication.',
    'Enjoy pairing, discussing trade-offs, and mentoring/learning from teammates.',
    'Break work into small, shippable steps to maintain momentum.',
  ]

  const personal = [
    'Reading and exploring tech that improves how I think and build.',
    'Practicing problem-solving on platforms like LeetCode and Codeforces.',
    'Refactoring and polishing side projects for fun and learning.',
  ]

  return (
    <section id="about" className="section-container scroll-mt-24 space-y-10 pb-14">
      <SectionHeader
        eyebrow="About Me"
        title="The engineer behind the code"
        description="I’m Ankit Raj, a software engineer who enjoys turning ideas into reliable, scalable software."
        align="center"
      />

      <div className="space-y-5">
        <div className="card-surface p-6 sm:p-7 shadow-lg shadow-cyan-500/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-glow">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I’m a software engineer who loves building clean, efficient, and scalable applications. I enjoy working across the stack—from designing APIs and databases to crafting intuitive user interfaces. My focus is on code that not only works but is maintainable, readable, and built to last.
            </p>
            <p>
              I spend most of my time building web apps and backend services, turning complex requirements into clear, modular systems. I care about clean architecture, solid naming, and abstractions that keep codebases healthy over time.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {introBullets.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-200">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h4 className="text-sm font-semibold text-slate-100">Technical snapshot</h4>
              <p className="mt-2 text-sm text-slate-300">
                Comfortable hopping between frontend and backend—React, Spring Boot, Node.js, Java, JavaScript, MongoDB, and PostgreSQL. I pick tools to fit the problem, not the hype.
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Currently exploring system design patterns, scalable architectures, and deeper cloud chops.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h4 className="text-sm font-semibold text-slate-100">How I got here</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                <li>• Started coding out of curiosity about how products work under the hood.</li>
                <li>• Built tools and full-stack apps to sharpen fundamentals and ship useful features.</li>
                <li>• Now focused on impactful products, open-source contributions, and tough engineering problems.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h4 className="text-sm font-semibold text-slate-100">Engineering philosophy</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {philosophy.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h4 className="text-sm font-semibold text-slate-100">How I work with teams</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {collaboration.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h4 className="text-sm font-semibold text-slate-100">Human side</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {personal.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h4 className="text-sm font-semibold text-slate-100">Quick stats</h4>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 sm:justify-start">
                {highlightStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-center sm:min-w-[150px]">
                    <div className="text-lg font-semibold text-cyan-200">{stat.value}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-xs text-slate-500">
                Always learning; focused on system design, scalability, and solid developer experience.
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-ink"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-cyan-500/40 bg-card/60 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-md shadow-cyan-500/10 transition hover:-translate-y-0.5 hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-ink"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="card-surface p-5 sm:p-6">
          <h4 className="text-sm font-semibold text-slate-100">Coding profiles</h4>
          <p className="mt-2 text-sm text-slate-400">A glimpse into my problem-solving practice.</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={codingProfiles.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-100"
            >
              LeetCode
            </a>
            <a
              href={codingProfiles.codeforces}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-100"
            >
              Codeforces
            </a>
          </div>
        </div>

        <div className="card-surface p-5 sm:p-6">
          <h4 className="text-sm font-semibold text-slate-100">Mini timeline</h4>
          <ul className="mt-3 space-y-3 text-sm text-slate-300">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
              <span>Started coding out of curiosity—small scripts, experiments, and learning the web.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
              <span>Built first full-stack projects and explored backend + frontend ecosystems.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
              <span>Now at Blue Yonder, growing as a backend engineer while polishing DX and product craft.</span>
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default About
