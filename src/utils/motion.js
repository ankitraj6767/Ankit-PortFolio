// All animations disabled for simple, instant loading
export const fadeInUp = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0 },
  viewport: { once: true },
}

export const fadeInScale = {
  initial: { opacity: 1, scale: 1 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0 },
  viewport: { once: true },
}

export const staggerChildren = {
  initial: 'initial',
  whileInView: 'whileInView',
  viewport: { once: true },
}

export const childFade = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0 },
}

// Disabled 3D tilt effect
export const tiltVariants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0 },
  },
  hover: {
    scale: 1,
    transition: { duration: 0 },
  },
}

// Disabled floating animation
export const floatingAnimation = {
  initial: { y: 0 },
  animate: { y: 0 },
}

// Disabled glowing pulse
export const glowPulse = {
  initial: { boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)' },
  animate: { boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)' },
}

// Disabled stagger container
export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true },
}

// Disabled slide in from left
export const slideInLeft = {
  initial: { opacity: 1, x: 0 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0 },
  viewport: { once: true },
}

// Disabled slide in from right
export const slideInRight = {
  initial: { opacity: 1, x: 0 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0 },
  viewport: { once: true },
}

// Disabled scale up with rotation
export const scaleRotate = {
  initial: { opacity: 1, scale: 1, rotate: 0 },
  whileInView: { opacity: 1, scale: 1, rotate: 0 },
  transition: { duration: 0 },
  viewport: { once: true },
}

// Disabled text reveal animation
export const textReveal = {
  initial: { opacity: 1, y: 0, filter: 'blur(0px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0 },
  viewport: { once: true },
}

// Disabled card hover with 3D perspective
export const card3D = {
  initial: { opacity: 1, y: 0, rotateX: 0 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  transition: { duration: 0 },
  viewport: { once: true },
}

// Disabled magnetic button effect
export const magneticHover = {
  rest: { scale: 1 },
  hover: { scale: 1 },
  tap: { scale: 1 },
}
