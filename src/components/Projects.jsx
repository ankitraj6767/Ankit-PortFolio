import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/content'
import SectionHeader from './SectionHeader'
import { card3D } from '../utils/motion'

const Projects = () => {
  return (
    <section id="projects" className="section-container scroll-mt-24 space-y-6">
      <SectionHeader
        eyebrow="Projects"
        title="Selected Work"
        description="A few projects that highlight how I think about UI polish, backend reliability, and developer experience."
        align="center"
      />

      <motion.div 
        className="grid gap-5 md:grid-cols-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass-card h-full p-6 transition duration-300 tilt-card group"
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 25px 50px rgba(34, 211, 238, 0.15)',
              borderColor: 'rgba(34, 211, 238, 0.3)'
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <motion.h3 
                  className="text-xl font-semibold text-slate-50 group-hover:text-cyan-100 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="mt-2 text-sm text-slate-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>
              </div>
              {project.website || project.github ? (
                <motion.a
                  href={project.website || project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-semibold text-slate-200 transition neon-hover"
                  aria-label={`View ${project.title} ${project.website ? 'live site' : 'on GitHub'}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {project.website ? <FiArrowUpRight /> : <FiGithub />}
                  {project.website ? 'Live' : 'Code'}
                </motion.a>
              ) : (
                <div className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
                  Repo on request
                </div>
              )}
            </div>
            <motion.div 
              className="mt-4 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
            >
              {project.tech.map((item, techIndex) => (
                <motion.span
                  key={item}
                  className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-100 ring-1 ring-cyan-500/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 + techIndex * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
