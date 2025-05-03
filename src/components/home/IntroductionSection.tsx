
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
      data-ai-hint="about us teaser integrated approach video background"
      className="relative flex items-center bg-background overflow-hidden min-h-[45svh]" // Adjusted height from 55vh to 45vh
    >
      {/* Video Background - Spans the entire section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0" // z-0 to be behind overlay
        data-ai-hint="synergy expertise collaboration baja landscape aerial"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay - Fading from the right */}
      <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/60 to-background/10 z-10"></div>

      {/* Text Content Container */}
      {/* Adjusted container classes: w-full, relative, z-20, mx-auto, px-4, py-*, max-w-screen-lg */}
      <div className="relative z-20 container mx-auto px-4 py-16 md:py-24 lg:py-32 w-full max-w-screen-lg">
        {/* Inner div limits content width to ~65-70% and ensures RIGHT alignment */}
        {/* Use ml-auto to push the content to the right */}
        <div className="w-full md:w-[65%] lg:w-[60%] text-right ml-auto">
          {/* Subtitle */}
          <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Our Core Foundation
          </p>
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground leading-tight">
            Insight, Synergy, Local Expertise
          </h2>
          {/* Body Text */}
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base mb-6 max-w-prose ml-auto"> {/* Added ml-auto to max-w-prose */}
            <p>
              Success in Cabo's dynamic market is built on more than just services; it's founded on deep local insight and the seamless synergy between strategy, execution, and a meticulously curated network. Our holistic model is designed to navigate complexities and optimize outcomes, ensuring quality and mitigating risk at every turn.
            </p>
            <p>
              But how we achieve this stems from who we are. Our commitment runs deeper than process – it's embedded in our philosophy and the expertise of our team.
            </p>
          </div>
          {/* Primary Call to Action - adjusted alignment */}
          <div className="flex flex-col items-end space-y-3"> {/* Changed items-start to items-end */}
            <Link href="/about" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
              Discover Our Story
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            {/* Secondary Link Removed */}
            {/* <Link href="/services" className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-primary transition-colors group">
              Explore Our Integrated Approach
              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
