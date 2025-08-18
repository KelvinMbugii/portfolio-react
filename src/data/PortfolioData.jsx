import { Github, ExternalLink, Hail, Linkedin, Twitter, Code, Database, Globe, SmartPhone, Server, Palette } from 'lucide-react';


export const personalInfo = {
  name: "Alex Johnson",
  title: "Full Stack Developer",
  tagline: "Crafting digital experiences with clean code and creative design",
  bio: "Passionate full-stack developer with 5+ years of experience creating scalable web applications. I specialize in React, Node.js, and modern web technologies. I love turning complex problems into simple, beautiful solutions that provide exceptional user experiences.",
  location: "San Francisco, CA",
  email: "alex.johnson@email.com",
  phone: "+1 (555) 123-4567",
  resumeUrl: "#",
  profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/alexjohnson",
    icon: Github
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/alexjohnson",
    icon: Linkedin
  },
  {
    name: "Twitter",
    url: "https://twitter.com/alexjohnson",
    icon: Twitter
  },
  {
    name: "Email",
    url: "mailto:alex.johnson@email.com",
    icon: Mail
  }
];
export const skills = [
  {
    category: "Frontend",
    icon: Code,
    technologies: [
      { name: "React", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 80 }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    technologies: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 70 }
    ]
  },
  {
    category: "Database",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 70 },
      { name: "Supabase", level: 75 }
    ]
  },
  {
    category: "Tools & Other",
    icon: Globe,
    technologies: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payments, and admin dashboard.",
    longDescription: "This comprehensive e-commerce solution includes user authentication, product catalog management, shopping cart functionality, secure payment processing with Stripe, order tracking, and an advanced admin panel for inventory and user management.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/alexjohnson/ecommerce",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project analytics.",
    longDescription: "Built with React and Firebase, this app allows teams to manage projects efficiently with features like real-time collaboration, task assignments, deadline tracking, progress visualization, and detailed analytics dashboard.",
    technologies: ["React", "Firebase", "Material-UI", "Chart.js"],
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "https://taskflow-demo.com",
    githubUrl: "https://github.com/alexjohnson/taskflow",
    featured: true
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description: "An interactive weather analytics dashboard with real-time data visualization, historical trends, and location-based forecasts.",
    longDescription: "This data visualization project combines multiple weather APIs to provide comprehensive weather analytics with interactive charts, historical data analysis, location-based forecasting, and customizable dashboard widgets.",
    technologies: ["React", "D3.js", "Weather API", "Node.js", "Express"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "https://weather-analytics.com",
    githubUrl: "https://github.com/alexjohnson/weather-dashboard",
    featured: false
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "A comprehensive social media management tool with analytics, scheduling, and multi-platform integration.",
    longDescription: "This dashboard integrates with major social media platforms to provide unified analytics, content scheduling, engagement tracking, and performance insights across multiple channels.",
    technologies: ["Next.js", "TypeScript", "Prisma", "NextAuth", "Chart.js"],
    image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "https://social-insights.com",
    githubUrl: "https://github.com/alexjohnson/social-dashboard",
    featured: true
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "An educational platform with course creation, progress tracking, and interactive learning modules.",
    longDescription: "A complete LMS solution featuring course creation tools, video streaming, progress tracking, quizzes, certificates, and student-teacher communication portal.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "https://eduplatform-demo.com",
    githubUrl: "https://github.com/alexjohnson/edu-platform",
    featured: false
  },
  {
    id: 6,
    title: "Crypto Portfolio Tracker",
    description: "A cryptocurrency portfolio management application with real-time price tracking and performance analytics.",
    longDescription: "This application helps users track their cryptocurrency investments with real-time price updates, portfolio performance metrics, transaction history, and market analysis tools.",
    technologies: ["React", "CoinGecko API", "Redux", "Chart.js", "LocalStorage"],
    image: "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "https://crypto-tracker-demo.com",
    githubUrl: "https://github.com/alexjohnson/crypto-tracker",
    featured: false
  }
];

export const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description: "Lead development of scalable web applications serving 100k+ users. Mentor junior developers and architect solutions using React, Node.js, and cloud technologies."
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver exceptional user experiences."
  },
  {
    title: "Frontend Developer",
    company: "WebAgency",
    period: "2018 - 2019",
    description: "Created responsive websites and web applications for various clients. Specialized in React development and modern CSS frameworks."
  }
];

export const testimonials = [
  {
    name: "Sarah Chen",
    title: "Product Manager at TechCorp",
    content: "Alex is an exceptional developer who consistently delivers high-quality solutions. His attention to detail and problem-solving skills are outstanding.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    name: "Mike Rodriguez",
    title: "CTO at StartupXYZ",
    content: "Working with Alex was a pleasure. He took our vision and turned it into a beautiful, functional product that exceeded our expectations.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
  }
];