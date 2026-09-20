export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  group: 'product' | 'branding' | 'graphic';
  year: string;
  role: string;
  disciplines: string[];
  link: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'xposure',
    title: 'Xposure',
    description: 'A dark, editorial multi-page website that lets imagery lead — desktop and mobile.',
    image: '/project-assets/xposure/frames-grid.jpg',
    category: 'Website · UI/UX',
    group: 'product',
    year: '2024',
    role: 'UI/UX Designer',
    disciplines: ['UX Design', 'UI Design', 'Responsive'],
    link: 'https://www.figma.com/design/pZPAgzLpD6H5e5tuy6OpV4/Xposure-web-page?node-id=0-1',
    featured: true,
  },
  {
    id: 'apertre-2',
    title: 'Apertre 2.0',
    description: "Resourcio Community's flagship event, redesigned as a space-age brand with a full design system.",
    image: '/project-assets/apertre2/mascots.jpg',
    category: 'Event Website',
    group: 'product',
    year: '2024',
    role: 'Product Designer',
    disciplines: ['UX Design', 'Design System', 'Illustration'],
    link: 'https://www.figma.com/design/xFRRkOO25RpSK8CGsZrwpX/Apertre-2.0-Website?node-id=722-1417',
    featured: true,
  },
  {
    id: 'apertre-event-materials',
    title: 'Apertre Event Materials',
    description: 'The collateral kit that carried the Apertre brand from screen to the event floor.',
    image: '/project-assets/apertre-events/doc-pages.jpg',
    category: 'Event Branding',
    group: 'branding',
    year: '2025',
    role: 'Brand Designer',
    disciplines: ['Brand Design', 'Print', 'Communication'],
    link: 'https://www.figma.com/design/JaeR9Ln20jrOFWT8GQEG57/Apertre-Event-Materials-page?node-id=0-1',
    featured: true,
  },
  {
    id: 'chaikkhana-cafe',
    title: 'Chaikkhana Café',
    description: 'A Bengali wordmark where the first character is a steaming cup of chai.',
    image: '/project-assets/cafe/logo-main.jpg',
    category: 'Brand Identity',
    group: 'branding',
    year: '2026',
    role: 'Brand Designer',
    disciplines: ['Logo Design', 'Typography'],
    link: 'https://www.figma.com/design/GC0jt9fuSHiks9gqWs3ifb/Cafe-Logo-design?node-id=0-1',
    featured: true,
  },
  {
    id: 'resourcio',
    title: 'Resourcio',
    description: 'A soft-3D landing page that pitches the Resourcio community in one scroll.',
    image: '/project-assets/resourcio/page-full.jpg',
    category: 'Startup Website',
    group: 'product',
    year: '2026',
    role: 'UI/UX Designer',
    disciplines: ['UX Design', 'UI Design'],
    link: 'https://www.figma.com/design/8HkhHrYCQMk30BDwukYBGh/StartUp_Resourcio_webdesign?node-id=0-1',
    featured: false,
  },
  {
    id: 'tshirt',
    title: 'T-Shirt Graphics',
    description: 'Two apparel artworks — a duotone portrait and a painted emblem — on black and white tees.',
    image: '/project-assets/tshirt/tee-black-portrait.jpg',
    category: 'Apparel Design',
    group: 'graphic',
    year: '2024',
    role: 'Graphic Designer',
    disciplines: ['Graphic Design', 'Print'],
    link: 'https://www.figma.com/design/x3hSLdCe5REEkWwG1NXg0x/t-shirt?node-id=0-1',
    featured: false,
  },
  {
    id: 'book-publisher',
    title: 'Book Publisher',
    description: 'A publishing house site organised like a bookshop — window, shelves and spotlights.',
    image: '/project-assets/bookpub/home.jpg',
    category: 'Website · UI/UX',
    group: 'product',
    year: '2026',
    role: 'UI/UX Designer',
    disciplines: ['UX Design', 'IA', 'Responsive'],
    link: 'https://www.figma.com/design/SY7f5ySqqvOU2FyU2Qnas7/Book-Publisher-Website?node-id=0-1',
    featured: true,
  },
];
