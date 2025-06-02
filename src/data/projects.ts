
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  fullDescription?: string;
  technologies?: string[];
  category: string;
  link: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neo-Brutalist Portfolio",
    description: "A cutting-edge portfolio website with neo-brutalism design principles and interactive elements.",
    fullDescription: "This portfolio website showcases the unique aesthetic of neo-brutalism combined with modern web technologies. The design features bold geometric shapes, high contrast colors, and raw visual elements that create a distinctive digital experience. Interactive elements and smooth animations enhance user engagement while maintaining the brutalist design language.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "web",
    link: "#",
    featured: true
  },
  {
    id: 2,
    title: "Code Explorer App",
    description: "Interactive code visualization tool that helps developers understand complex codebases.",
    fullDescription: "The Code Explorer App transforms complex codebases into intuitive visual representations, making it easier for developers to understand and navigate large projects. The app analyzes code structures and dependencies, presenting them in an interactive map that users can explore and manipulate. Features include syntax highlighting, real-time collaboration, and intelligent search functionality.",
    technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "app",
    link: "#",
    featured: true
  },
  {
    id: 3,
    title: "Digital Art Collection",
    description: "A gallery of digital art pieces created with modern design techniques.",
    fullDescription: "This digital art collection showcases a series of experimental works that blend traditional art principles with digital manipulation techniques. The collection explores themes of technology, nature, and human connection through abstract and representational pieces. Each artwork is created using a combination of digital painting, procedural generation, and algorithmic effects.",
    technologies: ["Procreate", "Adobe Creative Suite", "Blender", "WebGL"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "design",
    link: "#",
    featured: true
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard with complex data visualizations and real-time updates.",
    fullDescription: "This data visualization dashboard presents complex information in an accessible and engaging format. Users can interact with multiple data sets through customizable charts, graphs, and maps that update in real-time. The interface includes filtering options, comparison tools, and exportable reports, making it valuable for business intelligence and data analysis workflows.",
    technologies: ["React", "D3.js", "Redux", "Firebase", "Recharts"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    category: "web",
    link: "#",
    featured: true
  },
  {
    id: 5,
    title: "E-Commerce UI Kit",
    description: "Comprehensive UI kit for modern e-commerce platforms with neo-brutalist elements.",
    fullDescription: "This e-commerce UI kit provides a complete set of interface components designed with neo-brutalist aesthetics. The kit includes product cards, navigation elements, checkout flows, and user profile screens, all crafted to create a bold and memorable shopping experience. Each component is fully customizable and built with accessibility and performance in mind.",
    technologies: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "design",
    link: "#"
  },
  {
    id: 6,
    title: "Financial Analytics Tool",
    description: "Real-time financial data analytics platform with advanced visualization capabilities.",
    fullDescription: "The Financial Analytics Tool provides investors and analysts with powerful insights into market trends and financial performance. The platform processes real-time data from multiple sources, presenting it through interactive charts and customizable dashboards. Advanced features include predictive modeling, risk assessment tools, and automated report generation.",
    technologies: ["Python", "React", "TensorFlow", "AWS", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "app",
    link: "#"
  },
  {
    id: 7,
    title: "Music Streaming Interface",
    description: "Bold and playful music streaming interface with neo-brutalist design elements.",
    fullDescription: "This music streaming interface reimagines the digital music experience through neo-brutalist design principles. The interface features unconventional layouts, exaggerated proportions, and high-contrast color schemes that create a distinctive visual identity. The player includes playlist management, discovery features, and social sharing options, all wrapped in an engaging brutalist aesthetic.",
    technologies: ["React Native", "Electron", "Web Audio API", "Firebase"],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    category: "web",
    link: "#"
  },
  {
    id: 8,
    title: "Health & Fitness App",
    description: "Mobile fitness tracking application with unique visual language and user experience.",
    fullDescription: "The Health & Fitness App helps users track their wellness journey through a uniquely designed experience that stands out from typical fitness applications. The app monitors activity, nutrition, and sleep patterns, presenting data through bold visualizations and unconventional UI elements. Features include workout planning, progress tracking, and social challenges, all designed with an emphasis on motivation and engagement.",
    technologies: ["React Native", "Firebase", "HealthKit", "Google Fit API"],
    image: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955",
    category: "app",
    link: "#"
  }
];
