'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Megaphone, Cpu, SwatchBook } from 'lucide-react'; // Import used icons

interface Solution {
  title: string;
  icon: React.ElementType; // Use React.ElementType for component type
  description: string;
  href: string;
}

interface CoreCapabilitiesSectionProps {
  featuredSolutions: Solution[];
}

const CoreCapabilitiesSection: React.FC<CoreCapabilitiesSectionProps> = ({ featuredSolutions }) => {
  return (
    <section data-ai-hint="featured solutions section" className="py-16 md:py-24">
      {/* Apply max-w-screen-lg here */}
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Core Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our integrated expertise covers every stage of your real estate journey in Cabo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredSolutions.map((solution) => {
             // Rename icon to IconComponent for clarity
            const IconComponent = solution.icon;
            return (
              <div key={solution.title} className="text-center p-6 rounded-lg border border-transparent hover:border-border hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-start group">
                <IconComponent className="mx-auto mb-4 text-primary w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-serif mb-2 flex-grow">{solution.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                <Button variant="link" size="sm" asChild className="p-0 h-auto mt-auto self-center">
                  <Link href={solution.href}>Learn More <ArrowRight className="ml-1 h-3 w-3" /></Link>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilitiesSection;
