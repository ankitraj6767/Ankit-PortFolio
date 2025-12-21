import { Link } from 'react-router-dom'
import { codingProfiles, highlightStats } from '../data/content'
import SectionHeader from './SectionHeader'

const About = () => {
  const introBullets = [
    'Building web applications, APIs, and systems that solve real problems.',
    'Breaking down complex requirements into simple, modular components.',
    'Caring about clean architecture, good naming, and thoughtful abstractions.',
    'Instrumenting services with testing and observability from the start.',
    'Writing performant code that scales with growing user demands.',
    'Continuously learning new technologies and best practices.',
  ]

  const philosophy = [
    'Clean code over quick hacks—readability and maintainability first.',
    'Simplicity beats unnecessary complexity; choose tools for the problem, not the hype.',
    'Testing and reliability matter—ship with confidence, measure, and iterate.',
    'Write for future collaborators: clear naming, small focused functions, good docs.',
    'Embrace code reviews as learning opportunities, not criticism.',
    'Performance optimization should be data-driven, not premature.',
  ]

  const collaboration = [
    'Comfortable with Git, code reviews, and clear async communication.',
    'Enjoy pairing, discussing trade-offs, and mentoring/learning from teammates.',
    'Break work into small, shippable steps to maintain momentum.',
    'Document decisions and share knowledge proactively.',
    'Adapt communication style based on audience—technical or non-technical.',
  ]

  const personal = [
    'Reading and exploring tech that improves how I think and build.',
    'Practicing problem-solving on platforms like LeetCode and Codeforces.',
    'Refactoring and polishing side projects for fun and learning.',
    'Contributing to open-source projects when possible.',
    'Staying curious about emerging technologies and industry trends.',
  ]

  const achievements = [
    { icon: '🏆', title: 'Expert on Codeforces', desc: 'Max Rating: 1852' },
    { icon: '⭐', title: '4★ on CodeChef', desc: 'Max Rating: 1832' },
    { icon: '🗡️', title: 'Knight on LeetCode', desc: 'Max Rating: 1937' },
    { icon: '💻', title: '1700+ Problems Solved', desc: 'Across multiple platforms' },
    { icon: '🎓', title: 'NIT Silchar Graduate', desc: 'B.Tech CSE, CGPA: 8.37' },
    { icon: '👨‍💻', title: 'SDE at Blue Yonder', desc: 'Building enterprise solutions' },
  ]

  const techExpertise = [
    { category: 'Backend', skills: ['Spring Boot', 'Node.js', 'Express.js', 'NestJS', 'Kafka', 'REST APIs'] },
    { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'] },
    { category: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] },
    { category: 'DevOps', skills: ['Docker', 'Git', 'Azure', 'AWS', 'CI/CD'] },
  ]

  return (
    <section id="about" className="section-container scroll-mt-24 space-y-10 pb-14">
      <SectionHeader
        eyebrow="About Me"
        title="The engineer behind the code"
        description="I'm Ankit Raj, a software engineer who enjoys turning ideas into reliable, scalable software."
        align="center"
      />

      <div className="space-y-5">
        <div className="glass-card p-6 sm:p-7 shadow-lg shadow-cyan-500/5">
          <div className="space-y-4 text-slate-300 leading-relaxed text-center sm:text-left">
            <p>
              I'm a software engineer who loves building clean, efficient, and scalable applications. I enjoy working across the stack—from designing APIs and databases to crafting intuitive user interfaces. My focus is on code that not only works but is maintainable, readable, and built to last.
            </p>
            <p>
              I spend most of my time building web apps and backend services, turning complex requirements into clear, modular systems. I care about clean architecture, solid naming, and abstractions that keep codebases healthy over time.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {introBullets.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-200 text-center sm:text-left justify-center sm:justify-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center sm:text-left">
              <h4 className="text-sm font-semibold text-slate-100">Technical snapshot</h4>
              <p className="mt-2 text-sm text-slate-300">
                Comfortable hopping between frontend and backend—React, Spring Boot, Node.js, Java, JavaScript, MongoDB, and PostgreSQL. I pick tools to fit the problem, not the hype.
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Currently exploring system design patterns, scalable architectures, and deeper cloud chops.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center sm:text-left">
              <h4 className="text-sm font-semibold text-slate-100">How I got here</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                <li>• Started coding out of curiosity about how products work under the hood.</li>
                <li>• Built tools and full-stack apps to sharpen fundamentals and ship useful features.</li>
                <li>• Now focused on impactful products, open-source contributions, and tough engineering problems.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center sm:text-left">
              <h4 className="text-sm font-semibold text-slate-100">Engineering philosophy</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {philosophy.map((item) => (
                  <li key={item} className="flex gap-2 justify-center sm:justify-start">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center sm:text-left">
              <h4 className="text-sm font-semibold text-slate-100">How I work with teams</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {collaboration.map((item) => (
                  <li key={item} className="flex gap-2 justify-center sm:justify-start">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center sm:text-left">
              <h4 className="text-sm font-semibold text-slate-100">Human side</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {personal.map((item) => (
                  <li key={item} className="flex gap-2 justify-center sm:justify-start">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center sm:text-left">
              <h4 className="text-sm font-semibold text-slate-100">Quick stats</h4>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                {highlightStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-center">
                    <div className="text-lg font-semibold text-cyan-200">{stat.value}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-xs text-slate-500 text-center">
                Always learning; focused on system design, scalability, and solid developer experience.
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-cyan-500/40 bg-card/60 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-md shadow-cyan-500/10 transition hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="glass-card p-5 sm:p-6 text-center sm:text-left">
          <h4 className="text-sm font-semibold text-slate-100">Coding profiles</h4>
          <p className="mt-2 text-sm text-slate-400">A glimpse into my problem-solving practice.</p>
          <div className="mt-3 flex flex-wrap gap-3 justify-center sm:justify-start">
            {[
              { name: 'LeetCode', href: codingProfiles.leetcode },
              { name: 'Codeforces', href: codingProfiles.codeforces },
            ].map((profile) => (
              <a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition hover:scale-105 hover:border-cyan-500/50"
              >
                {profile.name}
              </a>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="glass-card p-5 sm:p-6 text-center sm:text-left">
          <h4 className="text-sm font-semibold text-slate-100">Key Achievements</h4>
          <p className="mt-2 text-sm text-slate-400">Milestones that reflect my journey and growth.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 justify-center sm:justify-start"
              >
                <span className="text-2xl">{achievement.icon}</span>
                <div className="text-center sm:text-left">
                  <h5 className="text-sm font-semibold text-cyan-200">{achievement.title}</h5>
                  <p className="text-xs text-slate-400">{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Expertise Section */}
        <div className="glass-card p-5 sm:p-6 text-center sm:text-left">
          <h4 className="text-sm font-semibold text-slate-100">Technical Expertise</h4>
          <p className="mt-2 text-sm text-slate-400">Technologies I work with daily and love building with.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techExpertise.map((category) => (
              <div key={category.category} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <h5 className="text-xs uppercase tracking-wider text-cyan-300 font-semibold">{category.category}</h5>
                <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Learning Section */}
        <div className="glass-card p-5 sm:p-6 text-center sm:text-left">
          <h4 className="text-sm font-semibold text-slate-100">Currently Learning & Exploring</h4>
          <p className="mt-2 text-sm text-slate-400">Staying curious and expanding my skill set.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'System Design', desc: 'Scalable architecture patterns, distributed systems' },
              { title: 'Cloud Architecture', desc: 'AWS, Azure services, infrastructure as code' },
              { title: 'Performance Optimization', desc: 'Profiling, caching strategies, database tuning' },
              { title: 'DevOps Practices', desc: 'CI/CD pipelines, Kubernetes, observability' },
              { title: 'AI/ML Integration', desc: 'LLM APIs, embeddings, AI-powered features' },
              { title: 'Open Source', desc: 'Contributing to community projects' },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 justify-center sm:justify-start"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <h5 className="text-sm font-semibold text-slate-200">{item.title}</h5>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-5 sm:p-6 text-center sm:text-left">
          <h4 className="text-sm font-semibold text-slate-100">Mini timeline</h4>
          <ul className="mt-3 space-y-3 text-sm text-slate-300">
            {[
              'Started coding out of curiosity—small scripts, experiments, and learning the web.',
              'Built first full-stack projects and explored backend + frontend ecosystems.',
              'Now at Blue Yonder, growing as a backend engineer while polishing DX and product craft.',
            ].map((item, index) => (
              <li key={index} className="flex gap-3 justify-center sm:justify-start">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
