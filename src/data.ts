import { Service, Project, TeamMember, Testimonial } from './types';

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Bespoke, blazing fast websites ranging from lightning-fast landing page designs to complex full-stack web platforms and custom portals.',
    icon: 'Globe',
    category: 'core'
  },
  {
    id: 'app-dev',
    title: 'Mobile App',
    description: 'High-performance native and cross-platform mobile apps built with React Native and modern frameworks to drive user engagement.',
    icon: 'Smartphone',
    category: 'core'
  },
  {
    id: 'ui-design',
    title: 'UI Design',
    description: 'User-centric wireframes, immersive interfaces, and interactive prototypes designed with pristine grids, typography, and visual hierarchies.',
    icon: 'Layers',
    category: 'core'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Stunning brand identities, digital assets, business collateral, and tailored visual materials that leave an unforgettable brand impression.',
    icon: 'Palette',
    category: 'core'
  },
  {
    id: 'ai-video',
    title: 'AI Brand Video Promotion',
    description: 'Aesthetic, AI-powered promotional videos, animated explainers, and high-conversion visual shorts tailored for next-generation branding.',
    icon: 'Cpu',
    category: 'core'
  },
  {
    id: 'student-portfolio',
    title: 'Student Portfolio Development',
    description: 'Standout, modern Web portfolios crafted specifically for students and young graduates to highlight their projects, resumes, and creative essence.',
    icon: 'GraduationCap',
    category: 'core'
  },
  // Extra services created by AI (User asked "severices nee neeya add panu" - add services on your own)
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Conversion-optimized checkout experiences, inventory management, and digital storefront integrations built to scale sales online.',
    icon: 'ShoppingBag',
    category: 'extended'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & Database Setup',
    description: 'Secure, scalable cloud database systems (Firestore, SQL), backend API proxies, and optimized deployment configurations using Docker & Google Cloud.',
    icon: 'Cloud',
    category: 'extended'
  },
  {
    id: 'seo-marketing',
    title: 'SEO & Growth Analytics',
    description: 'Data-driven search engine optimization, real-time analytics monitoring, and focused growth tactics to propel organic traffic.',
    icon: 'TrendingUp',
    category: 'extended'
  }
];

export const projects: Project[] = [
  {
    id: 'mahesh-bakery',
    title: 'Mahesh Bakery & Sweets',
    description: 'Modern neighborhood bakery portal with beautiful menu highlights and micro-purchasing online order integration.',
    longDescription: 'A custom, interactive restaurant showcase website. Integrates a highly visual product menu with filterable categories, interactive shopping carts, and a streamlined order notification system to bridge local customers with bakery staff in real time.',
    image: 'linear-gradient(135deg, #0F5D6B 0%, #123B4A 100%)',
    category: 'Business Website Design',
    features: ['High-contrast interactive catalog', 'Instant cart selection', 'WhatsApp notification integrations', 'Fully responsive layout'],
    client: 'Mahesh Bakery Team'
  },
  {
    id: 'student-portfolio',
    title: 'Student Portfolio Platform',
    description: 'Interactive creative identity showcase highlighting achievements, projects, and custom interactive resumes.',
    longDescription: 'Designed for ambitious graduates to command attention in job markets. Includes fully custom interactive resume views, project gallery carousels with code repository integrations, live client references, and a streamlined professional inquiry module.',
    image: 'linear-gradient(135deg, #123B4A 0%, #F39C3D 100%)',
    category: 'Personal Branding',
    features: ['Custom modular layout elements', 'Project showcase filter', 'Direct resume download integration', 'Responsive view metrics'],
    client: 'Academic Professionals & Students'
  },
  {
    id: 'ai-brand-promotion',
    title: 'AI Brand Promotion Hub',
    description: 'AI-infused graphic elements, voiceover promotional assets, and dynamic cross-platform viral marketing campaigns.',
    longDescription: 'Empowering early-stage startups with affordable production-grade video material. Built on automated scripts, using generative imagery and highly directed video transitions to create premium social media visual assets.',
    image: 'linear-gradient(135deg, #F39C3D 0%, #0F5D6B 100%)',
    category: 'AI Brand Marketing',
    features: ['Generative visual promos', 'Tailored voice-over integrations', 'Social media target scaling', 'High click-through-rate templates'],
    client: 'EcoTech & FitLife Brand Groups'
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Syed Ameer R',
    role: 'Co-Founder & Lead Developer',
    bio: 'Pioneering specialized UI/UX designs and crafting highly responsive, performant full-stack modules. Synergizing technical efficiency with elegant visual balance.',
    initials: 'SA',
    linkedin: 'linkedin.com/in/syed-ameer-r',
    github: 'github.com/ameersyed1226'
  },
  {
    name: 'Vijay R',
    role: 'Chief Technology Officer (CTO)',
    bio: 'Architecting robust technology roadmaps, spearheading scalable cloud infrastructure, and leading advanced technical solutions to drive business innovation.',
    initials: 'VR',
    linkedin: 'linkedin.com/in/vijay-r'
  },
  {
    name: 'Syed Shahul Hameed R',
    role: 'CEO & Business Strategist',
    bio: 'Directing creative business tactics, operations management, and structuring strategic client relationships. Dedicated to keeping digital solutions highly accessible yet state-of-the-art.',
    initials: 'SS',
    linkedin: 'linkedin.com/in/syed-shahul'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Professional service and great communication throughout the project. Kipto Innovation managed to guide our brand vision into reality seamlessly with their custom designs.',
    author: 'Durairaj M.',
    role: 'Retail Operations Manager'
  },
  {
    id: '2',
    quote: 'Our website looks modern and performs perfectly. Since launching, our student signups and community queries have grown by over 40%. Fantastic work by Syed and the team!',
    author: 'Akil Ahmed',
    role: 'Project Coordinator'
  },
  {
    id: '3',
    quote: 'Kipto Innovation helped us establish our online presence quickly with beautiful infographics and digital materials. Highly recommend their student portfolio work too.',
    author: 'Meenakshi Sundaram',
    role: 'Startup Founder'
  }
];
