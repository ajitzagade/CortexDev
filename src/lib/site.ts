export const site = {
  name: 'Ajit Zagade',
  title: 'Senior Full Stack Engineer | Engineering Leader',
  location: 'Pune, India',
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
  },
  {
    title: 'Fintech Wallet Platform',
    description:
      'End-to-end wallet experience for payments, recharge, and bookings.',
    highlights: [
      'Integrated Razorpay, PayPal, Braintree',
      'Resilient transaction workflows & reconciliation',
    ],
    stack: ['Node.js', 'React Native', 'PostgreSQL', 'Payments APIs'],
    impact:
      'High-volume transaction paths with measurable uptime and throughput improvements.',
  },
  {
    title: 'Healthcare IoT Platform',
    description:
      'BLE-connected medical devices with live monitoring dashboards.',
    highlights: [
      'ECG, BP, Glucose integrations',
      'Real-time health data visualization',
    ],
    stack: ['BLE', 'React Native', 'Node.js', 'MongoDB'],
    impact:
      'Reduced time-to-insight for clinicians with reliable device telemetry.',
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
  },
] as const

export const experience = [
  {
    company: 'Reliance Jio',
    role: 'Engineering Leadership & Architecture',
    period: '2019 — Present',
    location: 'India',
    bullets: [
      'Led a team of 14 engineers across frontend, mobile, and platform.',
      'Owned architecture, delivery, and production stability for JioMeet.',
      'Drove roadmap alignment, technical standards, and cross-functional execution.',
    ],
    featured: true,
  },
  {
    company: 'HealthATM',
    role: 'Full Stack / Mobile Lead',
    period: 'Earlier tenure',
    location: 'India',
    bullets: [
      'Delivered fintech and healthcare consumer apps at scale.',
      'Hands-on with device integrations and secure data pipelines.',
    ],
    featured: false,
  },
  {
    company: 'Earlier companies',
    role: 'Software Engineer → Senior Engineer',
    period: 'Prior to above',
    location: 'India',
    bullets: [
      'Progression across product engineering, mobile, and backend services.',
      'Consistent focus on quality, performance, and pragmatic delivery.',
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
