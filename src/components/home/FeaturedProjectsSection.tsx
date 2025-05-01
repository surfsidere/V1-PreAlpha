'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2 } from 'lucide-react'; // Example icon
import { Badge } from '@/components/ui/badge'; // Import Badge if needed

interface Project {
  id: number;
  title: string;
  image: string;
  type: string;
  slug: string;
  excerpt: string;
  'data-ai-hint'?: string; // Optional AI hint
}

interface FeaturedProjectsSectionProps {
  featuredProjects: Project[];
}

const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({ featuredProjects }) => {
  return (
    <section data-ai-hint="featured projects section" className="py-16 md:py-24 bg-secondary/30">
      {/* Apply max-w-screen-lg here */}
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our commitment to quality, innovation, and value creation in Los Cabos.
          </p>
        </div>

        {/* Consider using a carousel or slider component here for better UX if many projects */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
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
                 <Badge variant="secondary" className="absolute top-3 right-3 backdrop-blur-sm bg-background/70">{project.type}</Badge>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <CardTitle className="text-xl font-serif mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.excerpt}</CardDescription>
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

         <div className="text-center mt-16">
             <Button asChild size="lg">
                <Link href="/portfolio">Explore Our Full Portfolio</Link>
             </Button>
         </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
