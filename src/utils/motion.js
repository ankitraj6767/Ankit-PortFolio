export const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
}

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.55, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
}

export const staggerChildren = {
  initial: 'initial',
  whileInView: 'whileInView',
  viewport: { once: true, amount: 0.2 },
}

export const childFade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}
