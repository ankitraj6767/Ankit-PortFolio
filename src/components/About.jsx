import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
    <section id="about" className="section-container scroll-mt-24 space-y-10 pb-14 perspective-container">
      <SectionHeader
        eyebrow="About Me"
        title="The engineer behind the code"
        description="I’m Ankit Raj, a software engineer who enjoys turning ideas into reliable, scalable software."
        align="center"
      />

      <motion.div 
        className="space-y-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="glass-card p-6 sm:p-7 shadow-lg shadow-cyan-500/5 transition duration-300 tilt-card"
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.01,
            boxShadow: '0 30px 60px rgba(34, 211, 238, 0.15)',
            borderColor: 'rgba(34, 211, 238, 0.3)'
          }}
        >
          <motion.div 
            className="space-y-4 text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              I’m a software engineer who loves building clean, efficient, and scalable applications. I enjoy working across the stack—from designing APIs and databases to crafting intuitive user interfaces. My focus is on code that not only works but is maintainable, readable, and built to last.
            </p>
            <p>
              I spend most of my time building web apps and backend services, turning complex requirements into clear, modular systems. I care about clean architecture, solid naming, and abstractions that keep codebases healthy over time.
            </p>
          </motion.div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {introBullets.map((item, index) => (
              <motion.div 
                key={item} 
                className="flex items-start gap-3 text-sm text-slate-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <motion.div 
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 neon-hover"
              initial={{ opacity: 0, x: -30, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h4 className="text-sm font-semibold text-slate-100">Technical snapshot</h4>
              <p className="mt-2 text-sm text-slate-300">
                Comfortable hopping between frontend and backend—React, Spring Boot, Node.js, Java, JavaScript, MongoDB, and PostgreSQL. I pick tools to fit the problem, not the hype.
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Currently exploring system design patterns, scalable architectures, and deeper cloud chops.
              </p>
            </motion.div>
            <motion.div 
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 neon-hover"
              initial={{ opacity: 0, x: 30, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h4 className="text-sm font-semibold text-slate-100">How I got here</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {['Started coding out of curiosity about how products work under the hood.', 
                  'Built tools and full-stack apps to sharpen fundamentals and ship useful features.', 
                  'Now focused on impactful products, open-source contributions, and tough engineering problems.'
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <motion.div 
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 neon-hover"
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h4 className="text-sm font-semibold text-slate-100">Engineering philosophy</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {philosophy.map((item, index) => (
                  <motion.li 
                    key={item} 
                    className="flex gap-2"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 neon-hover"
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h4 className="text-sm font-semibold text-slate-100">How I work with teams</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {collaboration.map((item, index) => (
                  <motion.li 
                    key={item} 
                    className="flex gap-2"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <motion.div 
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 neon-hover"
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h4 className="text-sm font-semibold text-slate-100">Human side</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-300">
                {personal.map((item, index) => (
                  <motion.li 
                    key={item} 
                    className="flex gap-2"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.25 }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 neon-hover"
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h4 className="text-sm font-semibold text-slate-100">Quick stats</h4>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 sm:justify-start">
                {highlightStats.map((stat, index) => (
                  <motion.div 
                    key={stat.label} 
                    className="rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-center sm:min-w-[150px] neon-hover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <motion.div 
                      className="text-lg font-semibold text-cyan-200"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="mt-3 text-xs text-slate-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                Always learning; focused on system design, scalability, and solid developer experience.
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-6 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition btn-premium focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-ink"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-cyan-500/40 bg-card/60 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-md shadow-cyan-500/10 transition neon-hover focus:outline-none focus:ring-2 focus:ring-cyan-400/70 focus:ring-offset-2 focus:ring-offset-ink"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="glass-card p-5 sm:p-6 tilt-card"
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)'
          }}
        >
          <h4 className="text-sm font-semibold text-slate-100">Coding profiles</h4>
          <p className="mt-2 text-sm text-slate-400">A glimpse into my problem-solving practice.</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {[
              { name: 'LeetCode', href: codingProfiles.leetcode },
              { name: 'Codeforces', href: codingProfiles.codeforces },
            ].map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 transition neon-hover"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {profile.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="glass-card p-5 sm:p-6 tilt-card"
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)'
          }}
        >
          <h4 className="text-sm font-semibold text-slate-100">Key Achievements</h4>
          <p className="mt-2 text-sm text-slate-400">Milestones that reflect my journey and growth.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 neon-hover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <h5 className="text-sm font-semibold text-cyan-200">{achievement.title}</h5>
                  <p className="text-xs text-slate-400">{achievement.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Expertise Section */}
        <motion.div 
          className="glass-card p-5 sm:p-6 tilt-card"
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)'
          }}
        >
          <h4 className="text-sm font-semibold text-slate-100">Technical Expertise</h4>
          <p className="mt-2 text-sm text-slate-400">Technologies I work with daily and love building with.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techExpertise.map((category, catIndex) => (
              <motion.div
                key={category.category}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + catIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h5 className="text-xs uppercase tracking-wider text-cyan-300 font-semibold">{category.category}</h5>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What I'm Learning Section */}
        <motion.div 
          className="glass-card p-5 sm:p-6 tilt-card"
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)'
          }}
        >
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
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 neon-hover"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <motion.span 
                  className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                <div>
                  <h5 className="text-sm font-semibold text-slate-200">{item.title}</h5>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="glass-card p-5 sm:p-6 tilt-card"
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)'
          }}
        >
          <h4 className="text-sm font-semibold text-slate-100">Mini timeline</h4>
          <ul className="mt-3 space-y-3 text-sm text-slate-300">
            {[
              'Started coding out of curiosity—small scripts, experiments, and learning the web.',
              'Built first full-stack projects and explored backend + frontend ecosystems.',
              'Now at Blue Yonder, growing as a backend engineer while polishing DX and product craft.',
            ].map((item, index) => (
              <motion.li 
                key={index} 
                className="flex gap-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.15 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default About
