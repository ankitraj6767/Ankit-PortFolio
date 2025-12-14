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
    'Expert at Codeforces (Max Rating: 1852)',
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
    title: 'PG International School',
    description:
      'World-class school website with glassmorphism UI, bilingual support (Hindi/English), comprehensive Admin CMS for non-technical staff, online admission system with multi-step forms, and 100% dynamic content management. Features 25+ RESTful API endpoints and Cloudinary integration for optimized media delivery.',
    tech: [
      'Next.js 14',
      'React 18',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS',
      'Framer Motion',
      'JWT',
      'Cloudinary',
      'REST API',
    ],
    website: 'https://pg-international-school-5wp5.vercel.app/',
  },
  {
    title: 'LifeOps - Personal Life Management Platform',
    description:
      'Comprehensive personal productivity platform featuring task management, habit tracking with streaks, goal milestones, daily journaling with autosave, mood analytics, and expense tracking with category-wise breakdowns.',
    tech: [
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'Zustand',
      'NestJS',
      'MongoDB',
      'JWT',
    ],
    website: 'https://life-ops-cyan.vercel.app/',
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
      'Core backend contributor for MDAP (Master Data Aggregation Platform), designing and developing major Spring Boot REST APIs and Kafka pipelines powering critical supply chain data flows.',
      'Built and optimized high-throughput Kafka consumers processing 100K+ messages/day for real-time inventory and demand synchronization across global retail clients.',
      'Developed microservices using Spring Boot with PostgreSQL, implementing complex business logic for master data validation, transformation, and aggregation.',
      "Collaborated with cross-functional teams (Product, QA, DevOps) to ship reliable, high-performance backend services supporting Blue Yonder's Luminate Platform.",
      'Contributed to frontend development using React + TypeScript, building intuitive dashboards for data visualization and configuration management.',
      'Participated in code reviews, design discussions, and Agile ceremonies, ensuring high code quality and on-time feature delivery.',
      'Wrote comprehensive unit and integration tests using JUnit and Mockito, maintaining 80%+ code coverage across owned services.',
      'Debugged and resolved production issues in a fast-paced environment, reducing incident response time through effective root cause analysis.',
    ],
  },
  {
    role: 'SDE Intern',
    company: 'Blue Yonder India Private Limited',
    duration: 'January 2024 — June 2024',
    achievements: [
      'Implemented Spring Boot RESTful services for the MDAP platform, enabling efficient CRUD operations for master data entities.',
      'Integrated Apache Kafka for real-time event streaming, building producers and consumers for asynchronous data processing pipelines.',
      'Collaborated with senior engineers to design database schemas and optimize SQL queries for better performance on large datasets.',
      'Contributed to React-based UI components, implementing forms, tables, and data visualization features with TypeScript.',
      'Improved existing backend components by refactoring legacy code, fixing bugs, and enhancing error handling mechanisms.',
      'Participated in Agile sprints, daily standups, and sprint retrospectives, gaining hands-on experience in professional software development workflows.',
      'Documented APIs using Swagger/OpenAPI, making it easier for frontend teams and external consumers to integrate with backend services.',
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
      'Practiced problem-solving on Codeforces, CodeChef, LeetCode, and GFG; reached Expert on Codeforces (1852 rating).',
      'Solved 1700+ DSA & CP problems, sharpening algorithmic thinking and coding accuracy.',
      'Technical Head of Coding Club—organized workshops, mentored juniors, and conducted coding contests.',
      'Completed projects in full-stack development using React, Node.js, Spring Boot, and MongoDB.',
      'Participated in hackathons and coding competitions, consistently ranking in top percentiles.',
      'Studied advanced topics: Machine Learning, Compiler Design, and Distributed Systems.',
    ],
    courses: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Computer Networks',
      'Object-Oriented Programming',
      'Theory of Computation',
      'Compiler Design',
      'Machine Learning',
      'Software Engineering',
      'Distributed Systems',
    ],
    activities: [
      'Technical Head - Coding Club',
      'Competitive Programming Team',
      'Hackathon Participant',
      'Peer Mentor for DSA',
    ],
  },
  {
    school: 'R.P.S. College, Harnaut Nalanda',
    location: 'Bihar, India',
    credential: 'Class 12 (Intermediate)',
    duration: 'Apr 2017 — Mar 2019',
    detail: 'Percentage: 81.6%',
    summary:
      'Focused on core science subjects that strengthened logical and analytical skills and sparked interest in engineering and computation.',
    highlights: [
      'Specialized in Physics, Chemistry, and Mathematics (PCM) stream.',
      'Developed strong problem-solving skills through rigorous mathematics practice.',
      'Participated in science exhibitions and quiz competitions.',
      'Prepared for competitive engineering entrance exams (JEE).',
    ],
    courses: [
      'Physics',
      'Chemistry',
      'Mathematics',
      'English',
      'Hindi',
    ],
    activities: [
      'Science Exhibition Participant',
      'Quiz Competition',
    ],
  },
  {
    school: 'Sita Saran Memorial School, Bhatahar, Nalanda',
    location: 'Bihar, India',
    credential: 'Class 10 (Matriculation)',
    duration: 'Jul 2007 — Jun 2017',
    detail: 'CGPA: 10 / 10',
    summary:
      'Achieved a perfect CGPA, reflecting consistent discipline, strong academics, and early aptitude for analytical problem-solving.',
    highlights: [
      'Secured perfect 10/10 CGPA, ranking among top students in the school.',
      'Excelled in Mathematics and Science, developing a strong analytical foundation.',
      'Active participant in school-level competitions and cultural activities.',
      'Recognized for academic excellence with multiple awards and certificates.',
    ],
    courses: [
      'Mathematics',
      'Science',
      'Social Studies',
      'English',
      'Hindi',
      'Sanskrit',
    ],
    activities: [
      'Academic Excellence Award',
      'Science Olympiad',
      'Cultural Programs',
    ],
  },
]

export const resumeLink = '/resume.pdf?v=2'

export const techStackPreview = [
  // Languages
  'Java',
  'C++',
  'Python',
  'JavaScript',
  'TypeScript',
  'SQL',
  // Backend
  'Spring Boot',
  'Node.js',
  'Express.js',
  'NestJS',
  'Kafka',
  'Rest Api',
  // Frontend
  'React',
  'Next.js',
  'Redux',
  'Tailwind CSS',
  'Framer Motion',
  // Databases
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Redis',
  // DevOps & Cloud
  'Docker',
  'Git',
  'Azure',
  'AWS',
  // Tools
  'Postman',
  'JWT',
  'Cloudinary',
]

export const highlightStats = [
  { label: 'Years Coding', value: '5+' },
  { label: 'Projects', value: '20+' },
  { label: 'Contributions', value: '100+' },
]

export const codingProfiles = {
  leetcode: 'https://leetcode.com/u/smartwinner/',
  codeforces: 'https://codeforces.com/profile/smartwinner',
}
