
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IntroductionSectionProps {
  // Add any props your component will need here
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({}) => {
  // Video URL for the background effect
  const videoUrl = "https://www.surfside.re/wp-content/uploads/2025/05/DJI_0180.mp4";

  return (
    <section
      data-ai-hint="about us teaser integrated approach"
      className="relative flex items-center bg-background overflow-hidden min-h-[45svh]" // Using min-h for flexible height
    >
      {/* Video Container (Left Column) */}
      <div className="absolute inset-0 md:relative md:w-[40%] h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          data-ai-hint="synergy expertise collaboration baja landscape"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient Overlay on the left (video side) fading to transparent towards the right */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/50 to-background/90 z-10"></div>
      </div>

      {/* Content Container (Right Column) */}
      {/* Apply max-w-screen-lg here for consistent width relative to viewport */}
      {/* Use padding for spacing within the text column */}
      <div className="relative container mx-auto px-4 max-w-screen-lg z-20 flex justify-end"> {/* Align content to the right */}
         {/* Text content constrained to ~60% width with padding */}
         <div className="md:w-[60%] py-12 md:py-16 pl-4 md:pl-12 lg:pl-16 bg-background/90 md:bg-transparent"> {/* Added background for mobile/small screens */}
            {/* Subtitle */}
            <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider mb-2">
               Our Core Foundation
            </p>
            {/* Main Title */}
            <h2 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
               Insight, Synergy, Local Expertise
            </h2>
            {/* Body Text */}
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base mb-6 max-w-prose">
              <p>
                Success in Cabo's dynamic market is built on more than just services; it's founded on deep local insight and the seamless synergy between strategy, execution, and a meticulously curated network. Our holistic model is designed to navigate complexities and optimize outcomes, ensuring quality and mitigating risk at every turn.
              </p>
              <p>
                But how we achieve this stems from who we are. Our commitment runs deeper than process – it's embedded in our philosophy and the expertise of our team.
              </p>
            </div>
             {/* Primary Call to Action */}
             <Link href="/about" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group mb-3">
               Discover Our Story
               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
             </Link>
             <br /> {/* Add line break for spacing */}
             {/* Secondary Link */}
             <Link href="/services" className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-primary transition-colors group">
               Explore Our Integrated Approach
               <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
             </Link>
         </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
    
