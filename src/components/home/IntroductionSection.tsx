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
      {/* Container for the 50/50 split */}
      <div className="flex flex-col md:flex-row w-full h-full">

        {/* Left Column - Video Container (50% width on medium screens and up) */}
        <div className="relative w-full md:w-1/2 h-[30vh] md:h-auto overflow-hidden"> {/* Adjusted height for mobile */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center z-0" // z-0 to be behind overlay
            data-ai-hint="synergy expertise collaboration baja landscape"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay on the video side fading to transparent towards the right */}
          {/* Corrected gradient direction to fade from white on left to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent z-10"></div>
        </div>

        {/* Right Column - Text Content Container (50% width on medium screens and up) */}
        {/* Apply max-w-screen-lg to the parent container if needed, or adjust padding here */}
        {/* Reduced padding for better balance */}
        <div className="relative w-full md:w-1/2 py-12 md:py-16 px-6 md:px-12 lg:px-16 flex items-center z-20 bg-background md:bg-transparent">
           <div className="w-full"> {/* Inner div to control text block */}
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
      </div>
    </section>
  );
};

export default IntroductionSection;
