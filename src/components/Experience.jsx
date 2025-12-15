import { motion } from 'framer-motion'
import { experiences } from '../data/content'
import SectionHeader from './SectionHeader'

const Experience = () => {
  return (
    <section id="experience" className="section-container scroll-mt-24 space-y-6">
      <SectionHeader
        eyebrow="Experience"
        title="Career Journey"
        description="Highlights from roles where I shipped products, scaled systems, and collaborated with teams."
        align="center"
      />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.company + exp.role} 
            className="glass-card p-5 sm:p-6 transition duration-300 tilt-card relative overflow-hidden"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 25px 50px rgba(34, 211, 238, 0.12)'
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <motion.h3 
                  className="text-lg font-semibold text-slate-50"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {exp.role}
                </motion.h3>
                <motion.p 
                  className="text-sm text-slate-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {exp.company}
                </motion.p>
              </div>
              <motion.span 
                className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 neon-hover"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 + 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {exp.duration}
              </motion.span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {exp.achievements.map((item, achIndex) => (
                <motion.li 
                  key={item}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + 0.3 + achIndex * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span 
                    className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 flex-shrink-0"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
