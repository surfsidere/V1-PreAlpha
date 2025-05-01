'use client';

import React from 'react';
import Image from 'next/image';

interface IntroductionSectionProps {
  // Add any props your component will need here
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({}) => {
  return (
    <section data-ai-hint="introduction integrated approach" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <h2 className="text-3xl md:text-4xl font-serif mb-6">The Integrated Approach</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Success in Cabo's dynamic market requires more than just services; it demands synergy. Our end-to-end model seamlessly integrates strategic advisory, development management, and targeted marketing & sales execution.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We leverage deep local expertise and a curated network of elite partners—architects, legal counsel, financiers, and builders—orchestrating every element to maximize value, ensure quality, and mitigate risk for our clients. This holistic approach underpins our commitment to responsible development and enduring community value.
                </p>
                 {/* Optional CTA if needed */}
                 {/* <Button asChild className="mt-6">
                   <Link href="/about">Learn More About Our Philosophy</Link>
                 </Button> */}
            </div>
            {/* Consider an abstract/architectural image or texture */}
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg group">
               <Image
                 src="https://picsum.photos/seed/approach/800/600"
                 alt="Abstract architectural detail or texture representing integration"
                 layout="fill"
                 objectFit="cover"
                 className="transition-transform duration-500 group-hover:scale-105"
                 data-ai-hint="abstract architecture texture"
               />
                {/* Optional subtle overlay */}
                {/* <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div> */}
            </div>
         </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
