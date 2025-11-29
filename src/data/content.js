export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Education', href: '/education' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
]

export const skillCategories = [
  {
    title: 'Programming Languages',
    description: 'Strong foundation in programming with deep experience in DSA, problem-solving, and competitive programming—especially with C++ and Java.',
    items: ['C / C++', 'Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Backend Frameworks',
    description: 'Experienced in building scalable backend services, REST APIs, authentication, and production-ready microservices.',
    items: ['Spring', 'Spring Boot', 'Node.js', 'Express.js', 'Mongoose'],
  },
  {
    title: 'Frontend Frameworks',
    description: 'Skilled in building responsive, component-driven UIs with modern JavaScript frameworks.',
    items: ['React.js', 'Redux', 'Vue.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Databases',
    description: 'Designing schemas, writing optimized queries, and integrating databases efficiently with backend services.',
    items: ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB'],
  },
  {
    title: 'Developer Tools & Platforms',
    description: 'Comfortable with modern tooling, version control, API testing, and cloud-ready setups.',
    items: ['Git & GitHub', 'VS Code', 'IntelliJ IDEA', 'Eclipse', 'Postman', 'Docker', 'Stripe API', 'Kafka'],
  },
  {
    title: 'Computer Science Core Skills',
    description: 'Strong CS fundamentals, validated through 1700+ solved problems and hands-on projects.',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Operating Systems', 'DBMS', 'Computer Networks', 'System Design (basic to intermediate)'],
  },
]

export const cpHighlights = {
  title: 'Problem Solving & Competitive Programming',
  description:
    'Strong analytical mindset with deep experience in algorithms, optimizations, and coding competitions.',
  bullets: [
    'Expert at Codeforces (Max Rating: 1617)',
    '4★ at CodeChef (Max Rating: 1832)',
    'Knight at LeetCode (Max Rating: 1937)',
    '1700+ problems solved across platforms',
    'Ranked 14th in college on GFG',
  ],
}

export const softSkills = {
  title: 'Soft Skills',
  description: 'Team-focused habits that keep work moving forward.',
  items: [
    'Communication',
    'Team Collaboration',
    'Leadership (Coding Club Technical Head)',
    'Mentoring & Guiding Juniors',
    'Time Management',
    'Ownership & Responsibility',
  ],
}

export const skillLevels = [
  { name: 'C++', level: 'Expert' },
  { name: 'Java', level: 'Expert' },
    { name: 'Spring Boot', level: 'Expert' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' }
]

export const projects = [
  {
    title: 'ShopHub E-commerce',
    description:
      'Full-stack commerce platform with dynamic deals, flash sales, premium subscriptions, gift cards, product comparison, wishlist, real-time notifications, and an admin analytics dashboard with revenue tracking.',
    tech: [
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'Framer Motion',
      'React Router',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'bcrypt',
      'Cloudinary',
      'Razorpay',
      'Nodemailer',
    ],
    website: 'https://shophub-five.vercel.app/',
  },
  {
    title: 'CosmoScope - NASA Space Dashboard',
    description:
      'Interactive dashboard that pulls NASA open data—Astronomy Picture of the Day, Earth satellite imagery, asteroid tracking, and space weather—into a responsive, animated experience.',
    tech: ['React', 'Tailwind CSS', 'NASA APIs', 'Data Visualization'],
    website: 'https://cosmoscopes-ankitraj.netlify.app/',
  },
]

export const experiences = [
  {
    role: 'Software Development Engineer',
    company: 'Blue Yonder India Private Limited',
    duration: 'July 2024 — Present',
    achievements: [
      'Core backend contributor for MDAP, designing and developing major Spring Boot CRUD APIs and Kafka pipelines powering critical data flows.',
      'Collaborate with cross-functional teams to ship reliable, high-performance backend services and support end-to-end feature delivery with React + TypeScript.',
    ],
  },
  {
    role: 'SDE Intern',
    company: 'Blue Yonder India Private Limited',
    duration: 'January 2024 — June 2024',
    achievements: [
      'Implemented Spring Boot services and integrated Kafka for real-time data processing on the MDAP platform.',
      'Improved existing components, debugged issues, and helped deliver reliable features during Agile sprints.',
    ],
  },
]

export const socialLinks = {
  github: 'https://github.com/ankitraj6767',
  linkedin: 'https://www.linkedin.com/in/ankit-raj-427510216/',
  twitter: 'https://x.com/ankitra14349112?s=21',
  instagram: 'https://www.instagram.com/ankitraj6767/',
  facebook: 'https://www.facebook.com/share/1CuiFgFeKA/',
  email: 'mailto:araj803125@gmail.com',
  phone: '+91 6200667346',
}

export const education = [
  {
    school: 'National Institute of Technology, Silchar',
    location: 'Assam, India',
    credential: 'B.Tech, Computer Science and Engineering',
    duration: 'Dec 2020 — Jul 2024',
    detail: 'CGPA: 8.37 / 10',
    summary:
      'Built a strong foundation in core CS—Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks, and OOP—while growing a passion for competitive programming.',
    highlights: [
      'Practiced problem-solving on Codeforces, CodeChef, LeetCode, and GFG; reached Expert on Codeforces.',
      'Solved 1700+ DSA & CP problems, sharpening algorithmic thinking and coding accuracy.',
    ],
  },
  {
    school: 'R.P.S. College, Harnaut Nalanda',
    location: 'Bihar, India',
    credential: 'Class 12',
    duration: 'Apr 2017 — Mar 2019',
    detail: 'Percentage: 81.6%',
    summary:
      'Focused on core science subjects that strengthened logical and analytical skills and sparked interest in engineering and computation.',
    highlights: [],
  },
  {
    school: 'Sita Saran Memorial School, Bhatahar, Nalanda',
    location: 'Bihar, India',
    credential: 'Class 10',
    duration: 'Jul 2007 — Jun 2017',
    detail: 'CGPA: 10 / 10',
    summary:
      'Achieved a perfect CGPA, reflecting consistent discipline, strong academics, and early aptitude for analytical problem-solving.',
    highlights: [],
  },
]

export const resumeLink = '/resume.pdf?v=2'

export const techStackPreview = [
'Java',
'Spring Boot',
'Kafka',
'JavaScript',
'TypeScript',
'React',
'Node.js',
'MongoDB',
'SQL',
'Azure'
]

export const highlightStats = [
  { label: 'Years Coding', value: '3+' },
  { label: 'Projects', value: '20+' },
  { label: 'GitHub Contributions', value: '100+' },
]

export const codingProfiles = {
  leetcode: 'https://leetcode.com/u/smartwinner/',
  codeforces: 'https://codeforces.com/profile/smartwinner',
}
