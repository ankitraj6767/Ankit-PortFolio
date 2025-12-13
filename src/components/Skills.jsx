import { motion } from 'framer-motion'
import { cpHighlights, skillCategories, skillLevels, softSkills } from '../data/content'
import SectionHeader from './SectionHeader'

const Skills = () => {
  return (
    <section id="skills" className="section-container scroll-mt-24 space-y-10">
      <SectionHeader
        eyebrow="Skills"
        title="Technical toolbox"
        description="A balanced mix of backend strength, frontend craft, competitive programming, and the habits that keep teams moving."
        align="center"
      />

      <motion.div 
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {skillCategories.map((group, index) => (
          <motion.div
            key={group.title}
            className="glass-card flex h-full flex-col p-5 sm:p-6 transition duration-300 tilt-card"
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)',
              borderColor: 'rgba(34, 211, 238, 0.3)'
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-50">{group.title}</h3>
              <motion.span 
                className="text-xs uppercase tracking-[0.2em] text-slate-500"
                whileHover={{ color: '#22d3ee' }}
              >
                Core
              </motion.span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{group.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm text-slate-200 shadow-sm shadow-cyan-500/5 transition neon-hover cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="grid gap-4 md:grid-cols-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="glass-card flex h-full flex-col p-5 sm:p-6 transition duration-300 tilt-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)'
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-50">{cpHighlights.title}</h3>
            <motion.span 
              className="text-xs uppercase tracking-[0.2em] text-slate-500"
              animate={{ color: ['#64748b', '#22d3ee', '#64748b'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              CP
            </motion.span>
          </div>
          <p className="mt-2 text-sm text-slate-400">{cpHighlights.description}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {cpHighlights.bullets.map((bullet, index) => (
              <motion.li 
                key={bullet} 
                className="flex gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="glass-card flex h-full flex-col p-5 sm:p-6 transition duration-300 tilt-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)'
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-50">{softSkills.title}</h3>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Team</span>
          </div>
          <p className="mt-2 text-sm text-slate-400">{softSkills.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {softSkills.items.map((skill, index) => (
              <motion.span
                key={skill}
                className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-sm text-slate-200 shadow-sm shadow-cyan-500/5 transition neon-hover cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="glass-card p-5 sm:p-6 transition duration-300 tilt-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.01,
          boxShadow: '0 25px 50px rgba(34, 211, 238, 0.1)'
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-50">Skill levels</h3>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Snapshot</span>
        </div>
        <p className="mt-2 text-sm text-slate-400">A quick, honest view of my strongest areas right now.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillLevels.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 shadow-sm shadow-cyan-500/5 neon-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <div className="text-sm font-semibold text-slate-50">{skill.name}</div>
              <motion.div 
                className="text-xs uppercase tracking-[0.2em] text-cyan-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
              >
                {skill.level}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
