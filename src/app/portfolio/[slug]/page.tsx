
// src/app/portfolio/[slug]/page.tsx

// Keep server-side functions: getProjectData, generateMetadata, generateStaticParams
// Import the new client component
import { PortfolioDetailClient } from '@/components/portfolio/portfolio-detail-client';
import { notFound } from 'next/navigation';

// Define the structure for project data
interface Project {
    id: number;
    title: string;
    image: string;
    type: string;
    slug: string;
    excerpt: string;
    description: string;
    details: string[];
    challenge: string;
    solution: string;
    result: string;
     // Add gallery images if needed by the client component
     galleryImages?: { seed: string; alt: string }[];
}


// Placeholder function to get project data based on slug - runs server-side
async function getProjectData(slug: string): Promise<Project | null> {
  // Simulating data fetching
  const projects = [
     { id: 1, title: "Oceanfront Villa", image: "https://picsum.photos/seed/project1/1200/800", type: "Custom Home", slug: "oceanfront-villa", excerpt: "A stunning example of coastal modernism...", description: "Designed to maximize ocean views while maintaining privacy, this villa blends seamlessly with its surroundings. Features include...", details: ["5 Bedrooms", "6.5 Bathrooms", "Infinity Pool", "Smart Home Integration", "Direct Beach Access"], challenge: "Navigating complex coastal building regulations.", solution: "Leveraged deep local expertise and strong relationships with authorities.", result: "Delivered on time and budget, exceeding client expectations for luxury and quality.", galleryImages: [{seed: 'gallery1', alt: 'Gallery image 1'}, {seed: 'gallery2', alt: 'Gallery image 2'}, {seed: 'gallery3', alt: 'Gallery image 3'}, {seed: 'gallery4', alt: 'Gallery image 4'}] },
    { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/1200/800", type: "Development", slug: "coastal-community", excerpt: "Master-planned community with luxury amenities...", description: "A comprehensive development featuring villas, condos, a beach club, and spa facilities. Surfside managed the project from land acquisition through sales.", details: ["15 Hectares", "50+ Residences", "Private Beach Club", "Spa & Wellness Center", "Gated Community"], challenge: "Coordinating multiple stakeholders and managing large-scale infrastructure.", solution: "Implemented rigorous project management methodologies and transparent communication.", result: "Successful sell-out of phase one, setting a new benchmark for luxury communities in the area.", galleryImages: [{seed: 'gallery1', alt: 'Gallery image 1'}, {seed: 'gallery2', alt: 'Gallery image 2'}, {seed: 'gallery3', alt: 'Gallery image 3'}, {seed: 'gallery4', alt: 'Gallery image 4'}] },
    { id: 3, title: "Luxury Boutique Hotel", image: "https://picsum.photos/seed/project3/1200/800", type: "Hospitality", slug: "luxury-boutique-hotel", excerpt: "Elevated guest experiences in a prime location...", description: "Repositioning and expansion of an existing property into a world-class boutique hotel. Surfside provided strategic advisory and development oversight.", details: ["30 Suites", "Rooftop Bar & Restaurant", "Oceanview Spa", "Curated Guest Experiences", "LEED Certification Target"], challenge: "Balancing design vision with operational efficiency and budget constraints.", solution: "Close collaboration with architects, designers, and operators facilitated by Surfside.", result: "Award-winning design and strong financial performance post-launch.", galleryImages: [{seed: 'gallery1', alt: 'Gallery image 1'}, {seed: 'gallery2', alt: 'Gallery image 2'}, {seed: 'gallery3', alt: 'Gallery image 3'}, {seed: 'gallery4', alt: 'Gallery image 4'}] },
    // Add other projects as needed
  ];

  const project = projects.find(p => p.slug === slug);

  return project || null;
}

// Generate Metadata for the page - Server Component feature
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProjectData(params.slug);
  if (!project) {
    return { title: "Project Not Found" }
  }
  return {
    title: `${project.title} - Surfside Portfolio`,
    description: project.excerpt,
  }
}

// The main page component remains async Server Component
export default async function PortfolioProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectData(params.slug);

  if (!project) {
     notFound(); // Use Next.js notFound for proper 404 handling
  }

  // Render the Client Component and pass the fetched data as props
  return <PortfolioDetailClient project={project} />;
}

// Generate static paths for all portfolio projects - Server Component feature
export async function generateStaticParams() {
 const projects = [
    { slug: "oceanfront-villa" },
    { slug: "coastal-community" },
    { slug: "luxury-boutique-hotel" },
    // Add slugs for all projects you want to pre-render
  ];

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
