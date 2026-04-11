export const site = {
  name: 'Ajit Zagade',
  title: 'Senior Full Stack Engineer | Engineering Leader',
  location: 'Pune, Maharashtra, India',
  phone: '+91 8007755527',
  /** Opens chat in WhatsApp (wa.me uses digits only, no +). */
  whatsappUrl: 'https://wa.me/918007755527',
  experienceYears: '12+',
  headline:
    'Building Scalable Systems & Leading High-Impact Engineering Teams',
  subtext:
    'Expertise in React, Node.js, Mobile, and System Design — from architecture to production rollouts.',
  email: 'ajitzagade.3@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ajit-zagade-63905777/',
  github: 'https://github.com/ajitzagade',
  ogImage: '/og-image.png',
} as const

/** Numbered sidebar navigation */
export const navLinks = [
  { id: 'about', href: '#about', label: 'About', num: '01' },
  { id: 'skills', href: '#skills', label: 'Skills', num: '02' },
  { id: 'projects', href: '#projects', label: 'Projects', num: '03' },
  { id: 'experience', href: '#experience', label: 'Experience', num: '04' },
  { id: 'leadership', href: '#leadership', label: 'Leadership', num: '05' },
  { id: 'ai', href: '#ai', label: 'AI & Automation', num: '06' },
  { id: 'contact', href: '#contact', label: 'Contact', num: '07' },
] as const

/** Sections observed for scroll-spy (includes hero) */
export const scrollSpySectionIds = [
  'top',
  ...navLinks.map((l) => l.id),
] as const

export const skillCategories = [
  {
    title: 'Frontend',
    items: ['React.js', 'Angular', 'TypeScript'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Android (Kotlin/Java)', 'Android TV'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'WebSockets', 'Microservices'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    title: 'DevOps',
    items: ['AWS', 'Docker', 'Jenkins', 'Azure DevOps'],
  },
  {
    title: 'Testing',
    items: ['Jest', 'Mocha', 'AndroidJUnit'],
  },
] as const

export const projects = [
  {
    title: 'Enterprise Video Conferencing (JioMeet)',
    description:
      'Real-time conferencing supporting 100+ participants with enterprise-grade reliability.',
    highlights: [
      'Screen sharing, collaborative whiteboard, breakout rooms',
      'Scalable session & media architecture; production rollouts',
    ],
    stack: ['WebRTC', 'Node.js', 'React', 'System Design'],
    impact:
      'Owned core platform delivery; scaled features used by millions of users.',
    imageSrc: '/projects/jiomeet.png',
    links: {
      github: '',
      live: 'https://jiomeetpro.jio.com/',
      liveExtra: [
        { label: 'JioMeet Enterprise', href: 'https://enterprise.jiomeet.com/' },
      ],
    },
  },
  {
    title: 'Fintech Wallet Platform',
    description:
      'End-to-end wallet experience for payments, recharge, and bookings on React Native and native Android (Kotlin).',
    highlights: [
      'Integrated Razorpay, PayPal, Braintree',
      'Resilient transaction workflows, reconciliation, and mobile clients (Kotlin/Android)',
    ],
    stack: ['Node.js', 'React Native', 'Android (Kotlin)', 'PostgreSQL', 'Payments APIs'],
    impact:
      'High-volume transaction paths with measurable uptime and throughput improvements.',
    imageSrc: '/projects/project-placeholder.png',
    links: { github: 'https://github.com/ajitzagade', live: '' },
  },
  {
    title: 'Healthcare IoT Platform',
    description:
      'BLE-connected medical devices with live monitoring dashboards; native Android (Kotlin) alongside React Native.',
    highlights: [
      'ECG, BP, Glucose integrations',
      'Real-time health data visualization and device-side Android/Kotlin work',
    ],
    stack: ['BLE', 'React Native', 'Android (Kotlin)', 'Node.js', 'MongoDB'],
    impact:
      'Reduced time-to-insight for clinicians with reliable device telemetry.',
    imageSrc: '/projects/healthcare-yolohealth.png',
    links: {
      github: '',
      live: 'https://yolohealth.in/',
    },
  },
  {
    title: 'E-commerce Mobile App',
    description:
      'Customer-facing commerce with real-time messaging and workflow tooling.',
    highlights: [
      'Real-time client communication',
      'Portfolio & workflow system for operations',
    ],
    stack: ['React Native', 'WebSockets', 'Node.js'],
    impact:
      'Improved operational throughput and customer response times.',
    imageSrc: '/projects/project-placeholder.png',
    links: {
      github: '',
      live:
        'https://play.google.com/store/apps/details?id=com.canvera.photographer&hl=en_IN',
    },
  },
] as const

export const experience = [
  {
    company: 'Reliance Jio Infocomm Ltd.',
    role: 'Lead Engineer / Engineering Team Lead',
    period: 'Feb 2019 — Present',
    location: 'Pune, Maharashtra, India',
    bullets: [
      'Led a team of 14 engineers across frontend, mobile, and platform.',
      'Owned architecture, delivery, and production stability for JioMeet.',
      'Drove roadmap alignment, technical standards, and cross-functional execution.',
    ],
    featured: true,
  },
  {
    company: 'HealthATM India Pvt. Ltd.',
    role: 'Senior Full Stack Developer',
    period: 'Mar 2017 — Feb 2019',
    location: 'Pune, Maharashtra, India',
    bullets: [
      'Delivered fintech and healthcare consumer apps at scale.',
      'Hands-on with device integrations and secure data pipelines.',
    ],
    featured: false,
  },
  {
    company: 'Crystal Hitech IT Solutions Pvt. Ltd.',
    role: 'Sr. Android Developer',
    period: 'Sept 2015 — Feb 2017',
    location: 'Pune, Maharashtra, India',
    bullets: [
      'Built and shipped Android features with a focus on performance and reliability.',
      'Collaborated across product and backend teams to deliver end-to-end experiences.',
    ],
    featured: false,
  },
  {
    company: 'Mindscrub Technologies',
    role: 'Software Developer',
    period: 'July 2014 — August 2015',
    location: 'Pune, Maharashtra, India',
    bullets: [
      'Delivered product features across the stack with strong attention to quality.',
      'Contributed to iterative releases and pragmatic engineering practices.',
    ],
    featured: false,
  },
] as const

export const leadershipPoints = [
  {
    title: 'Mentorship',
    description:
      'Coached engineers on craft, ownership, and career growth — from IC tracks to tech leads.',
  },
  {
    title: 'Hiring & scaling',
    description:
      'Built interview loops, bar-raising criteria, and onboarding that shortens time-to-impact.',
  },
  {
    title: 'Code quality',
    description:
      'Championed reviews, testing discipline, and architecture guidelines that scale with the team.',
  },
  {
    title: 'Architecture ownership',
    description:
      'End-to-end accountability for reliability, scalability, and pragmatic trade-offs.',
  },
  {
    title: 'Cross-functional collaboration',
    description:
      'Partnered with product, design, and infra to ship on time without burning the org.',
  },
] as const

export const aiHighlights = [
  {
    title: 'AI-powered test generation',
    description:
      'Accelerating coverage by generating meaningful cases from specs and usage patterns.',
  },
  {
    title: 'Self-healing UI automation',
    description:
      'Reducing flaky suites with smarter selectors and recovery strategies.',
  },
  {
    title: 'AI agents for performance auditing',
    description:
      'Automated insights on bottlenecks, bundle health, and runtime regressions.',
  },
  {
    title: 'CI/CD automation',
    description:
      'Pipelines that gate quality, security, and release readiness with clear signals.',
  },
  {
    title: 'Developer tooling',
    description:
      'Deep interest in AI-assisted engineering — where automation amplifies judgment, not replaces it.',
  },
] as const
