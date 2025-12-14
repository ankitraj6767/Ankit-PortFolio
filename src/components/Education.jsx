import { motion } from 'framer-motion'
import { education } from '../data/content'
import SectionHeader from './SectionHeader'

const Education = () => {
  return (
    <section id="education" className="section-container scroll-mt-24 space-y-10 pb-16 perspective-container">
      <SectionHeader
        eyebrow="Education"
        title="Academic Background"
        description="Formal education that grounds my engineering craft."
        align="center"
      />

      <motion.div 
        className="mx-auto grid max-w-5xl gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {education.map((item, index) => (
          <motion.div 
            key={item.school} 
            className="glass-card p-6 sm:p-7 transition duration-300 tilt-card"
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              y: -8,
              boxShadow: '0 30px 60px rgba(34, 211, 238, 0.15)',
              borderColor: 'rgba(34, 211, 238, 0.3)'
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{item.credential}</p>
                <h3 className="mt-1 text-xl font-semibold text-slate-50">{item.school}</h3>
                <p className="text-sm text-slate-400">{item.location}</p>
              </motion.div>
              <motion.div 
                className="text-right"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="inline-block rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 neon-hover"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.duration}
                </motion.span>
                <motion.div 
                  className="mt-2 text-sm font-semibold text-cyan-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {item.detail}
                </motion.div>
              </motion.div>
            </div>

            {item.summary && (
              <motion.p 
                className="mt-4 text-sm text-slate-300 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {item.summary}
              </motion.p>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {item.highlights.map((point, pointIndex) => (
                  <motion.li 
                    key={point}
                    className="flex gap-2"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 + pointIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span 
                      className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 flex-shrink-0"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: pointIndex * 0.2 }}
                    />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            {/* Courses Section */}
            {item.courses && item.courses.length > 0 && (
              <motion.div 
                className="mt-5"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xs uppercase tracking-wider text-cyan-300 font-semibold mb-2">Key Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((course, courseIndex) => (
                    <motion.span
                      key={course}
                      className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.7 + courseIndex * 0.03 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Activities Section */}
            {item.activities && item.activities.length > 0 && (
              <motion.div 
                className="mt-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.7 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xs uppercase tracking-wider text-cyan-300 font-semibold mb-2">Activities & Achievements</h4>
                <div className="flex flex-wrap gap-2">
                  {item.activities.map((activity, actIndex) => (
                    <motion.span
                      key={activity}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.8 + actIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      {activity}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Education
