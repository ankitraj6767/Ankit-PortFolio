import { motion } from 'framer-motion'
import { textReveal } from '../utils/motion'

const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => {
  const isCenter = align === 'center'

  return (
    <motion.div
      className={`flex w-full flex-col gap-3 ${isCenter ? 'items-center justify-center text-center' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.span 
          className="h-px w-8 bg-gradient-to-r from-cyan-300/70 to-blue-400/70"
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
        />
        <span className="text-sm uppercase tracking-[0.2em] text-slate-400 shimmer">{eyebrow}</span>
      </motion.div>
      <motion.h2 
        className="text-3xl sm:text-4xl font-semibold text-slate-50"
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          className={`text-slate-400 max-w-2xl ${isCenter ? 'mx-auto' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionHeader
