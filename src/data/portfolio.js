export const portfolio = {
  name: 'Amar Kumar',
  initials: 'AK',
  eyebrow: 'Software engineering · Data science · Machine learning',
  headline: 'I build reliable software and turn complex data into useful systems.',
  introduction:
    'I am an IIT Madras Data Science student working across backend engineering, full-stack applications, machine learning, and practical analytics.',
  summary:
    'My work sits where software and data meet: secure APIs, role-based web applications, asynchronous workflows, reproducible ML pipelines, and decision-ready analysis. I enjoy taking ambiguous problems from first principles to clear, maintainable solutions.',
  availability: 'Open to internships and graduate opportunities',
  location: 'Gaya, Bihar, India',
  email: 'amarkumar05092003@gmail.com',
  photo: './amar-kumar.jpeg',
  links: {
    github: 'https://github.com/amarkumar00',
    linkedin: 'https://www.linkedin.com/in/amar-kumar-101412288/',
    kaggle: 'https://www.kaggle.com/amar23f2000465',
  },
  nav: [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Work', id: 'work' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ],
  interests: [
    'Software engineering',
    'Backend systems',
    'Machine learning',
    'Data science',
    'Automation',
  ],
  skills: [
    {
      category: 'Programming',
      items: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Shell scripting'],
    },
    {
      category: 'Backend',
      items: ['Flask', 'REST APIs', 'JWT authentication', 'Celery', 'Redis', 'SQLAlchemy', 'RBAC'],
    },
    {
      category: 'Frontend',
      items: ['Vue.js 3', 'Bootstrap 5', 'Axios', 'Jinja2'],
    },
    {
      category: 'Databases',
      items: ['SQLite', 'PostgreSQL', 'Schema design', 'Normalization', 'Query optimization'],
    },
    {
      category: 'Data science & ML',
      items: ['Pandas', 'NumPy', 'Scikit-learn', 'LightGBM', 'XGBoost', 'Feature engineering', 'Cross-validation', 'EDA'],
    },
    {
      category: 'Tools & platforms',
      items: ['Git', 'GitHub', 'Postman', 'Power BI', 'Tableau', 'Excel', 'Google Sheets'],
    },
  ],
  projects: [
    {
      index: '01',
      title: 'RecoverAI',
      type: 'AI-assisted fintech control plane',
      context: 'Razorpay AI Buildathon · 2026',
      problem:
        'Payment failures have different causes, but a generic retry can create duplicate collection risk, waste customer contact, or recover less value.',
      solution:
        'Built a bounded recovery system where AI ranks a fixed set of safe actions and deterministic financial policy decides what may execute.',
      features: [
        'Webhook verification, event deduplication, and current-state reconciliation',
        'Policy firewall for amount, currency, timing, confidence, and contact limits',
        'Idempotent execution with privacy-minimized and tamper-evident audit trails',
      ],
      technologies: ['TypeScript', 'React', 'Node.js', 'SQLite', 'Railway'],
      metrics: ['6 bounded actions', '100-case held-out evaluation'],
      link: 'https://github.com/amarkumar00/recoverai',
    },
    {
      index: '02',
      title: 'AeroGuard QC',
      type: 'Explainable data-quality system',
      context: 'Smart India Hackathon problem SIH26073 · 2026',
      problem:
        'Automatic Weather Station readings can contain gaps, spikes, frozen sensors, slow drift, and cross-parameter inconsistencies that require explainable review.',
      solution:
        'Created a working quality-control prototype that classifies each observation as PASS, SUSPECT, or FAIL and preserves the evidence behind every decision.',
      features: [
        'CSV ingestion with schema validation and alias recognition',
        'Transparent temporal, physical-range, and cross-parameter checks',
        'Replayable fault scenarios with human review kept in control',
      ],
      technologies: ['TypeScript', 'Next.js', 'React', 'Vercel'],
      metrics: ['3 output states', '7 quality-signal categories'],
      link: 'https://aeroguard-qc-sih26073.vercel.app/',
    },
    {
      index: '03',
      title: 'Gharpayy CRM Workflow Improvements',
      type: 'Existing-product engineering case study',
      context: 'Technical hiring assignment · 2026',
      problem:
        'Operators needed faster follow-up scheduling, clearer call handoffs, and an immediate recovery path when daily customer-movement targets fell behind.',
      solution:
        'Improved three existing CRM workflows without replacing the surrounding design system or creating duplicate customer records.',
      features: [
        'Call completion guard for captured details, message, follow-up, owner, and deadline',
        'One-tap 30-minute, 2-hour, and 6 PM follow-up presets',
        'Recovery sprint with next-priority navigation and a copy-ready help request',
      ],
      technologies: ['TypeScript', 'React', 'TanStack Router', 'Cloudflare Workers'],
      metrics: ['3 improved workflows', '1 public deployment'],
      link: 'https://github.com/amarkumar00/a3x-gg',
    },
    {
      index: '04',
      title: 'Parking Management System',
      type: 'Role-based web application',
      context: 'IIT Madras · Modern Application Development I · 2025',
      problem:
        'A parking operator needs to manage lots and capacity while drivers need a simple way to reserve, release, and review the cost of a parking spot.',
      solution:
        'Built a Flask application with separate administrator and driver workflows backed by relational reservation and parking-lot models.',
      features: [
        'Authenticated role-based dashboards for operators and drivers',
        'Parking-lot capacity, reservation, release, history, and cost workflows',
        'Relational models for users, lots, spots, and reservations',
      ],
      technologies: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Bootstrap'],
      metrics: ['2 user roles', '4 related domain models'],
      link: 'https://github.com/amarkumar00/parking-management-system',
    },
    {
      index: '05',
      title: 'Placement Portal',
      type: 'Asynchronous multi-role web application',
      context: 'IIT Madras · Modern Application Development II · 2026',
      problem:
        'Students, companies, and placement administrators need one coordinated system for job listings, applications, approvals, and time-sensitive updates.',
      solution:
        'Built a Vue and Flask platform with role-based APIs, Redis-backed caching, and Celery jobs for scheduled and long-running work.',
      features: [
        'JWT-protected workflows for administrator, company, and student roles',
        'Placement listings, application tracking, company approval, and dashboard flows',
        'Redis caching, Celery background jobs, and automated backend/frontend checks',
      ],
      technologies: ['Python', 'Flask', 'Vue.js', 'SQLite', 'Redis', 'Celery'],
      metrics: ['3 user roles', '15 backend tests'],
      link: 'https://github.com/amarkumar00/placement-portal',
    },
    {
      index: '06',
      title: 'Heavy Equipment Price Prediction',
      type: 'Applied machine-learning regression pipeline',
      context: 'IIT Madras · Machine Learning Practice · 2026',
      problem:
        'Auction prices depend on mixed numerical and high-cardinality categorical data, missing values, depreciation, usage, and equipment configuration.',
      solution:
        'Designed a leakage-safe notebook that compares transparent baselines with tuned LightGBM and validates predictions using RMSLE and submission assertions.',
      features: [
        'EDA and log-target modelling aligned to the RMSLE objective',
        'Pipeline-based Ridge and Decision Tree baselines on a shared holdout',
        'Leakage-safe frequency features, native categorical modelling, and six LightGBM tuning runs',
      ],
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'LightGBM', 'Jupyter'],
      metrics: ['0.196195 validation RMSLE', '0.19236 public submission RMSLE'],
      link: 'https://github.com/amarkumar00/heavy-equipment-price-prediction',
    },
  ],
  practicalWork: [
    {
      period: '2025',
      title: 'Full-stack application development',
      organization: 'IIT Madras academic project',
      description:
        'Designed and shipped a multi-role placement platform with a Vue interface, Flask APIs, relational data modeling, authentication, caching, and background jobs.',
    },
    {
      period: '2026',
      title: 'Applied machine learning',
      organization: 'IIT Madras MLP competition',
      description:
        'Built and documented a regression pipeline for mixed-type industrial equipment data, using systematic validation and ensemble modeling; placed 192nd of 516 teams in a completed Kaggle assignment competition.',
    },
    {
      period: '2026',
      title: 'Field analytics capstone',
      organization: 'Dugoo General Store · IIT Madras BDM',
      description:
        'Collected, structured, and analyzed previously untracked sales data, then delivered dashboards and practical recommendations to the store owner.',
    },
  ],
  education: {
    school: 'Indian Institute of Technology Madras',
    degree: 'Bachelor of Science in Data Science and Applications',
    period: '2023 — 2027 (expected)',
    coursework: [
      'Machine Learning Practice',
      'Modern Application Development I & II',
      'Database Management Systems',
      'Business Data Management',
      'Tools in Data Science',
      'Statistics for Data Science',
    ],
  },
  highlights: [
    {
      number: '20+',
      label: 'REST endpoints in a role-based application',
    },
    {
      number: '3',
      label: 'distinct user roles with secure workflows',
    },
    {
      number: '01',
      label: 'first structured data system for a local business',
    },
  ],
  achievements: [
    'IIT Madras BS Data Science program through a competitive national-level entrance process',
    'Placed 192nd of 516 teams in an IIT Madras Kaggle competition and built an RMSLE-evaluated heavy-equipment regression pipeline',
    'Digitized and analyzed an informal village store’s operations for the first time',
    'Independently learned Flask, Vue.js, Celery, Redis, Power BI, Tableau, and applied ML alongside the IIT curriculum',
  ],
}
