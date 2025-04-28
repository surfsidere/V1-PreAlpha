
'use client'; // This component uses client-side features like styled-jsx

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Define the structure for project data passed as props
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
    galleryImages?: { seed: string; alt: string }[];
}

interface PortfolioDetailClientProps {
  project: Project;
}

export function PortfolioDetailClient({ project }: PortfolioDetailClientProps) {
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
          <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-24 self-start">
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
            {project.galleryImages && project.galleryImages.length > 0 && (
              <section>
                  <h2 className="text-2xl md:text-3xl font-serif mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                      {project.galleryImages.map((img, index) => (
                          <div key={index} className="aspect-square bg-secondary rounded-lg overflow-hidden relative">
                              <Image src={`https://picsum.photos/seed/${img.seed}/400`} alt={img.alt} layout="fill" objectFit="cover"/>
                          </div>
                      ))}
                  </div>
              </section>
            )}

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
                    {/* Update query param key if needed */}
                    <Link href={`/contact?inquiry=project_${project.slug}`}>Discuss a Similar Project</Link>
                </Button>
             </div>
          </main>
        </div>
      </div>
    </div>
  );
}
