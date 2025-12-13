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

// Advanced 3D tilt effect for cards
export const tiltVariants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

// Floating animation for hero elements
export const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Glowing pulse animation
export const glowPulse = {
  initial: { boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)' },
  animate: {
    boxShadow: [
      '0 0 20px rgba(34, 211, 238, 0.1)',
      '0 0 40px rgba(34, 211, 238, 0.3)',
      '0 0 20px rgba(34, 211, 238, 0.1)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Stagger container for list animations
export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  viewport: { once: true, amount: 0.2 },
}

// Slide in from left
export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, amount: 0.2 },
}

// Slide in from right
export const slideInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, amount: 0.2 },
}

// Scale up with rotation
export const scaleRotate = {
  initial: { opacity: 0, scale: 0.8, rotate: -5 },
  whileInView: { opacity: 1, scale: 1, rotate: 0 },
  transition: { duration: 0.7, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
}

// Text reveal animation
export const textReveal = {
  initial: { opacity: 0, y: 40, filter: 'blur(10px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  viewport: { once: true, amount: 0.2 },
}

// Card hover with 3D perspective
export const card3D = {
  initial: { opacity: 0, y: 30, rotateX: 10 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 },
}

// Magnetic button effect
export const magneticHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
}
