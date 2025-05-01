// src/app/portfolio/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Placeholder Data - Replace with actual data fetching and filtering logic
const projects = [
  { id: 1, title: "Oceanfront Villa", image: "https://picsum.photos/seed/project1/600/400", type: "Custom Home", slug: "/portfolio/oceanfront-villa", excerpt: "A stunning example of coastal modernism...", "data-ai-hint": "luxury villa ocean" },
  { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/600/400", type: "Development", slug: "/portfolio/coastal-community", excerpt: "Master-planned community with luxury amenities...", "data-ai-hint": "coastal community aerial" },
  { id: 3, title: "Luxury Boutique Hotel", image: "https://picsum.photos/seed/project3/600/400", type: "Hospitality", slug: "/portfolio/luxury-boutique-hotel", excerpt: "Elevated guest experiences in a prime location...", "data-ai-hint": "luxury hotel poolside" },
  { id: 4, title: "Desert Retreat", image: "https://picsum.photos/seed/project4/600/400", type: "Custom Home", slug: "/portfolio/desert-retreat", excerpt: "Seamless integration of architecture and landscape...", "data-ai-hint": "modern house desert landscape" },
  { id: 5, title: "Marina Residences", image: "https://picsum.photos/seed/project5/600/400", type: "Development", slug: "/portfolio/marina-residences", excerpt: "Exclusive waterfront living opportunities...", "data-ai-hint": "condos marina yachts" },
];

const projectTypes = ["All", "Custom Home", "Development", "Hospitality"];

export default function PortfolioPage() {
  // State for filtering would go here in a client component

  return (
     // Main container with max-width
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-screen-xl">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-6">Our Portfolio</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Explore a selection of projects showcasing our integrated expertise and commitment to excellence in Cabo San Lucas.
      </p>

      {/* Filtering (Basic Placeholder) - Needs Client Component for interaction */}
      <div className="flex justify-center space-x-4 mb-12">
        {projectTypes.map((type) => (
          <Button key={type} variant={type === "All" ? "default" : "outline"}>
            {type}
          </Button>
        ))}
      </div>

      {/* Interactive Showcase Placeholder - This area will be replaced by the interactive map/coastline component */}
      <div className="bg-secondary/30 p-8 rounded-lg text-center mb-16 min-h-[300px] flex items-center justify-center border border-dashed">
        <p className="text-muted-foreground">[Interactive Portfolio Showcase - Coming Soon]</p>
        {/* Placeholder for the abstract coastline visualization */}
      </div>


      {/* Project Grid (Fallback or initial view) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
           <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl flex flex-col">
            <CardHeader className="p-0 relative h-60">
               <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
                 data-ai-hint={project['data-ai-hint']}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
              {/* Could add badge here */}
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <CardTitle className="text-xl font-serif mb-2">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{project.excerpt}</p>
              </div>
              <Button variant="link" asChild className="p-0 h-auto self-start mt-auto">
                <Link href={project.slug}>
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
