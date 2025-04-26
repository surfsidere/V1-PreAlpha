'use client'; // Add this directive

// src/app/portfolio/[slug]/page.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge'; // Assuming Badge component exists

// Placeholder function to get project data based on slug
// In a real app, this would fetch data from a CMS or database
async function getProjectData(slug: string) {
  // Simulating data fetching
  const projects = [
     { id: 1, title: "Oceanfront Villa", image: "https://picsum.photos/seed/project1/1200/800", type: "Custom Home", slug: "oceanfront-villa", excerpt: "A stunning example of coastal modernism...", description: "Designed to maximize ocean views while maintaining privacy, this villa blends seamlessly with its surroundings. Features include...", details: ["5 Bedrooms", "6.5 Bathrooms", "Infinity Pool", "Smart Home Integration", "Direct Beach Access"], challenge: "Navigating complex coastal building regulations.", solution: "Leveraged deep local expertise and strong relationships with authorities.", result: "Delivered on time and budget, exceeding client expectations for luxury and quality." },
    { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/1200/800", type: "Development", slug: "coastal-community", excerpt: "Master-planned community with luxury amenities...", description: "A comprehensive development featuring villas, condos, a beach club, and spa facilities. Surfside managed the project from land acquisition through sales.", details: ["15 Hectares", "50+ Residences", "Private Beach Club", "Spa & Wellness Center", "Gated Community"], challenge: "Coordinating multiple stakeholders and managing large-scale infrastructure.", solution: "Implemented rigorous project management methodologies and transparent communication.", result: "Successful sell-out of phase one, setting a new benchmark for luxury communities in the area." },
    { id: 3, title: "Luxury Boutique Hotel", image: "https://picsum.photos/seed/project3/1200/800", type: "Hospitality", slug: "luxury-boutique-hotel", excerpt: "Elevated guest experiences in a prime location...", description: "Repositioning and expansion of an existing property into a world-class boutique hotel. Surfside provided strategic advisory and development oversight.", details: ["30 Suites", "Rooftop Bar & Restaurant", "Oceanview Spa", "Curated Guest Experiences", "LEED Certification Target"], challenge: "Balancing design vision with operational efficiency and budget constraints.", solution: "Close collaboration with architects, designers, and operators facilitated by Surfside.", result: "Award-winning design and strong financial performance post-launch." },
    // Add other projects as needed
  ];

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    // Handle not found case, maybe redirect or show a 404 page
    // For now, return null or throw an error
    return null;
  }
  return project;
}

// Generate Metadata for the page - This function remains a Server Component feature
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


export default async function PortfolioProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectData(params.slug);

  if (!project) {
     // Render a not found component or redirect
     return <div className="container mx-auto px-4 py-24 text-center">Project not found.</div>;
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60svh] min-h-[400px] flex items-end text-white overflow-hidden">
         <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={`Hero image for ${project.title}`}
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
         <div className="relative z-10 p-8 md:p-12 container mx-auto">
            <Badge variant="secondary" className="mb-2">{project.type}</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-2 text-shadow-lg">
                {project.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-shadow max-w-3xl">
                {project.excerpt}
            </p>
         </div>
          <style jsx>{`
            .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
            .text-shadow-lg { text-shadow: 0 3px 6px rgba(0,0,0,0.6); }
             .brightness-75 { filter: brightness(0.75); }
         `}</style>
      </section>

      {/* Main Content - Narrative Case Study */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Sidebar / Key Details */}
          <aside className="lg:col-span-1 space-y-8">
             <div>
                <h3 className="text-xl font-serif mb-3 border-b pb-2">Project Details</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.details.map((detail, index) => (
                        <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0"/>
                            {detail}
                        </li>
                    ))}
                </ul>
             </div>
             {/* You could add Services Used, Location Map, etc. here */}
              <div>
                <h3 className="text-xl font-serif mb-3 border-b pb-2">Services Provided</h3>
                 <ul className="space-y-1 text-sm text-muted-foreground">
                     {/* Example - dynamically populate based on project data */}
                     <li>Strategic Advisory</li>
                     <li>Development Management</li>
                     <li>Marketing & Sales Coordination</li>
                 </ul>
              </div>
              <Button variant="outline" asChild>
                <Link href="/portfolio">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
                </Link>
              </Button>
          </aside>

          {/* Right Content Area / Narrative */}
          <main className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl md:text-3xl font-serif mb-4">The Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                 {project.description} {/* Replace with more detailed Vision content */}
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>

             <section>
                <h2 className="text-2xl md:text-3xl font-serif mb-4">Challenge & Approach</h2>
                 <p className="text-muted-foreground leading-relaxed mb-3"><strong>Challenge:</strong> {project.challenge}</p>
                <p className="text-muted-foreground leading-relaxed">
                    <strong>Our Solution:</strong> {project.solution} {/* Expand on the solution/approach */}
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>
            </section>

             {/* Image Gallery Placeholder */}
            <section>
                <h2 className="text-2xl md:text-3xl font-serif mb-4">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-secondary rounded-lg overflow-hidden relative">
                        <Image src="https://picsum.photos/seed/gallery1/400" alt="Gallery image 1" layout="fill" objectFit="cover"/>
                    </div>
                    <div className="aspect-square bg-secondary rounded-lg overflow-hidden relative">
                         <Image src="https://picsum.photos/seed/gallery2/400" alt="Gallery image 2" layout="fill" objectFit="cover"/>
                    </div>
                     <div className="aspect-square bg-secondary rounded-lg overflow-hidden relative">
                         <Image src="https://picsum.photos/seed/gallery3/400" alt="Gallery image 3" layout="fill" objectFit="cover"/>
                    </div>
                     <div className="aspect-square bg-secondary rounded-lg overflow-hidden relative">
                         <Image src="https://picsum.photos/seed/gallery4/400" alt="Gallery image 4" layout="fill" objectFit="cover"/>
                    </div>
                </div>
             </section>

             <section>
                <h2 className="text-2xl md:text-3xl font-serif mb-4">The Result</h2>
                 <p className="text-muted-foreground leading-relaxed">
                    {project.result} {/* Expand on the results and impact */}
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                 </p>
            </section>

             {/* Optional: Testimonial */}
             {/* <section className="border-t pt-8 mt-10">
                 <blockquote className="text-lg italic text-center text-foreground border-l-4 border-primary pl-6">
                    "Working with Surfside was a seamless experience. Their expertise and local knowledge were invaluable."
                    <footer className="mt-4 text-sm not-italic text-muted-foreground">- Satisfied Client</footer>
                </blockquote>
            </section> */}

             <div className="mt-12 text-center">
                <Button asChild size="lg">
                    <Link href={`/contact?project_inquiry=${project.title}`}>Discuss a Similar Project</Link>
                </Button>
             </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all portfolio projects - This function remains a Server Component feature
// This tells Next.js which project pages to pre-render at build time
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
