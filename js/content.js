window.PORTFOLIO = {
  name: 'Onele Nongindzi',
  shortName: 'ONELE',
  highlight: 'Full-stack',
  role: 'engineer.',
  availability: 'Johannesburg · open to relocate',
  lede:
    'I build web apps end to end, from <strong>React</strong> interfaces to <strong>Node.js</strong> and ' +
    '<strong>Spring Boot</strong> APIs. My focus is internal tools that people use every day, like approval ' +
    'workflows, dashboards and the notifications that keep them moving.',
  meta: ['Java · JavaScript · SQL', 'English · isiXhosa'],

  links: {
    github: 'https://github.com/Onele-Nongindzi',
    linkedin: 'https://www.linkedin.com/in/onele-nongindzi-a27683321',
    email: 'onelenongindzi@gmail.com',
  },

  featured: {
    name: 'DocFlow',
    intro:
      "A full-stack document approval system. It's based on a problem I work on daily: getting company " +
      'documents uploaded, reviewed and published without endless email back-and-forth.',
    headline: 'Upload, review, publish',
    summary:
      'Employees upload files, which appear in the directory straight away as <em>Awaiting approval</em>. ' +
      'Approvers approve them, or reject them with a written reason. The uploader is notified either way, ' +
      'and the status updates by itself.',
    codeUrl: 'https://github.com/Onele-Nongindzi/docflow',
    facts: [
      ['JWT and role-based access', 'Employee, approver and admin roles. Passwords are hashed with bcrypt.'],
      ['Visibility rules', 'Pending and rejected files are visible only to the uploader and the approvers.'],
      ['Separation of duties', "Approvers can't review their own uploads, and decisions can't be overwritten."],
      ['Notifications', 'An in-app bell, with a pluggable email sender for alerts.'],
      ['Safe uploads', 'Type allow-list, 10 MB limit, random names on disk, permission-checked downloads.'],
      ['Tested', 'Integration tests cover authentication, permissions and the full review flow.'],
    ],
    stack: ['React 18', 'Tailwind CSS', 'Node.js', 'Express', 'JWT', 'SQLite', 'Zod', 'node:test'],
  },

  projects: [
    {
      name: 'SA ID Validator',
      lang: 'Java',
      url: 'https://github.com/Onele-Nongindzi/Validate-SA-ID',
      description:
        'Validates 13-digit South African ID numbers: date of birth, gender, citizenship and the Luhn checksum. Built test-first with JUnit 5.',
      tags: ['Java 21', 'JUnit', 'TDD'],
    },
    {
      name: 'Vault Banking',
      lang: 'React',
      url: 'https://github.com/Onele-Nongindzi/vault-banking-system',
      description:
        'Banking dashboard UI with account overview, cards, transactions and a send-money flow. Built from reusable components.',
      tags: ['React', 'Tailwind CSS', 'Vite'],
    },
    {
      name: 'Spring Boot User API',
      lang: 'Java',
      url: 'https://github.com/Onele-Nongindzi/spring-boot-user-demo',
      description:
        'A REST API with a clean controller, service and repository structure. Uses constructor injection and has unit tests.',
      tags: ['Spring Boot', 'REST', 'JUnit'],
    },
    {
      name: 'Personal Finance Tracker',
      lang: 'JS',
      url: 'https://github.com/Onele-Nongindzi/Personal-Finance-Tracker',
      description:
        'Track income and expenses by category with a live summary. Supports keyboard navigation and screen readers.',
      tags: ['JavaScript', 'HTML', 'CSS'],
    },
  ],

  experience: [
    {
      when: '2026 – now',
      title: 'Software Developer',
      org: 'Calgro M3 · Johannesburg',
      points: [
        "Maintain and support the company's internal systems, keeping them reliable for staff across departments.",
        'Fix bugs and improve features across the intranet portal and its Finance, HR and Onboarding applications.',
        'Work on role-based access, notifications and document approval, testing on desktop and mobile and releasing each fix independently.',
      ],
    },
    {
      when: 'Dec 2025 – 2026',
      title: 'Front-End Developer',
      org: 'Gimsoi (Pty) Ltd · Centurion',
      points: [
        'Built a Project Tracker in React with reusable components and modular state.',
        'Built mobile-first Tailwind interfaces that cut page load time by about 20%.',
        'Showed live project KPIs from REST APIs, and reviewed code on GitHub with zero regressions on main.',
      ],
    },
    {
      when: 'Dec 2024 – Nov 2025',
      title: 'Full-Stack Developer Intern',
      org: 'UVU Africa · Johannesburg',
      points: [
        'Delivered 5+ full-stack apps on time during a 12-month residency.',
        'Built Node.js and Spring Boot back ends with JWT authentication and input validation.',
        'Designed MySQL and MongoDB schemas, and often led sub-teams during sprints.',
      ],
    }
  ],

  skills: {
    'Front end': ['Next.js', 'React', 'Redux', 'Context API', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive design'],
    'Back end': ['Node.js', 'Express', 'Java', 'Spring Boot', 'REST APIs', 'JWT auth'],
    'Data and cloud': ['MySQL', 'MongoDB', 'SQLite', 'AWS', 'Azure'],
    'Ways of working': ['Git / GitHub', 'Agile / Scrum', 'CI/CD', 'TDD', 'Code review'],
  },

  qualifications: [
    ['Advanced Diploma in IT', 'Walter Sisulu University · 2022'],
    ['National Diploma in IT', 'Walter Sisulu University · 2021'],
  ],
  certifications: [
    ['Meta Full Stack Developer', 'Coursera · Feb 2025'],
    ['IBM Software Engineering & Agile', 'Coursera · Mar 2025'],
    ['IBM Git and GitHub', 'Coursera · May 2025'],
  ],

  contact: {
    heading: "Let's build something useful.",
    text: "I'm open to full-stack and front-end roles, in Johannesburg or elsewhere.",
  },
};
