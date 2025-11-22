import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motion'

const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => {
  const isCenter = align === 'center'
  const MotionDiv = motion.div

  return (
    <MotionDiv
      className={`flex w-full flex-col gap-3 ${isCenter ? 'items-center justify-center text-center' : ''}`}
      {...fadeInUp}
    >
      <div className={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-gradient-to-r from-cyan-300/70 to-blue-400/70" />
        <span className="text-sm uppercase tracking-[0.2em] text-slate-400">{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50">{title}</h2>
      {description && (
        <p className={`text-slate-400 max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </MotionDiv>
  )
}

export default SectionHeader
