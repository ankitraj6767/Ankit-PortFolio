import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      className="border-t border-slate-800/70 bg-card/80"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="section-container flex flex-col items-center justify-center gap-2 py-4 text-xs text-slate-200">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-slate-100">© {new Date().getFullYear()} Ankit Raj</span>
        </motion.div>
        <motion.span 
          className="text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Built with ❤️ for the web. Crafted for every screen.
        </motion.span>
      </div>
    </motion.footer>
  )
}

export default Footer
