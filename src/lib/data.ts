import { ArrowRight, BarChart3, Megaphone, Cpu, SwatchBook, ShieldCheck, SquareAsterisk } from 'lucide-react';

export const featuredProjects = [
  { id: 1, title: "Oceanfront Villa", image: "https://picsum.photos/seed/project1/600/400", type: "Private Estate", slug: "/portfolio/oceanfront-villa", excerpt: "A stunning example of coastal modernism...", "data-ai-hint": "luxury villa ocean" },
  { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/600/400", type: "Development", slug: "/portfolio/coastal-community", excerpt: "Master-planned community with luxury amenities...", "data-ai-hint": "coastal community aerial" },
  { id: 3, title: "Luxury Boutique Hotel", image: "https://picsum.photos/seed/project3/600/400", type: "Luxury Hospitality", slug: "/portfolio/luxury-boutique-hotel", excerpt: "Elevated guest experiences in a prime location...", "data-ai-hint": "luxury hotel poolside" },
];

export const featuredSolutions = [
   {
    title: "Real Estate Advisory",
    icon: BarChart3, // Consistent with Services page
    description: "Market analysis, feasibility, investment strategy.",
    href: "/services/strategic-advisory"
  },
  {
    title: "Integrated Management Services",
    icon: Cpu, // Consistent with Services page
    description: "Full lifecycle project oversight and management.",
    href: "/services/development-management"
  },
  {
    title: "Marketing & Sales",
    icon: Megaphone, // Consistent with Services page
    description: "Targeted strategies for premier properties.",
    href: "/services/marketing-sales"
  },
  {
    title: "Development Coordination & Oversight", // Consistent title
    icon: SwatchBook, // Consistent icon
    description: "Personalized guidance for bespoke residences.",
    href: "/build-your-custom-home" // Links to the specific landing page
  },
];