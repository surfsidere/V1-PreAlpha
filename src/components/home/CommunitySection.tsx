'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Users, ArrowRight } from 'lucide-react'; // Example icons

interface CommunitySectionProps {
  // Add any props your component will need here
}

const CommunitySection: React.FC<CommunitySectionProps> = ({}) => {
  return (
    <section data-ai-hint="community future section" className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/20">
       {/* Apply max-w-screen-lg here */}
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg group">
             <Image
               src="https://picsum.photos/seed/community/800/600"
               alt="People collaborating in a natural setting in Cabo"
               layout="fill"
               objectFit="cover"
               className="transition-transform duration-500 group-hover:scale-105"
               data-ai-hint="community nature collaboration"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent"></div>
           </div>
          <div className="text-center md:text-left">
             {/* Optional: Icon above title */}
             {/* <Leaf className="w-12 h-12 text-primary mx-auto md:mx-0 mb-4" /> */}
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Building a Better Future, Together</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
              We believe in conscious development that respects the unique environment and community of Baja California Sur. Our commitment extends beyond individual projects to fostering sustainable practices and contributing positively to the region's future.
            </p>
             <Button asChild size="lg" variant="outline">
               <Link href="/about#community-vision">
                 Discover Our Vision <ArrowRight className="ml-2 h-4 w-4" />
                 {/* Consider a more specific link target if available */}
               </Link>
             </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
