'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IntroductionSectionProps {
  // Add any props your component will need here
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({}) => {
  // Video URL
  const videoUrl = "https://www.surfside.re/wp-content/uploads/2025/04/3835189-hd_1920_1080_25fps.mp4";

  return (
    <section
      data-ai-hint="about us teaser integrated approach"
      // Adjusted height to 45svh, added relative positioning for background elements
      className="h-[45svh] relative flex flex-col justify-center bg-background py-8 md:py-12 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile playback
        className="absolute inset-0 w-full h-full object-cover object-center z-0" // z-index 0: bottom layer
        data-ai-hint="sailboat ocean movement synergy expertise"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60 z-10"></div> {/* z-index 1: above video */}

      {/* Content Container - positioned above overlay */}
      {/* Apply max-w-screen-lg here for consistent width */}
      <div className="container relative mx-auto px-4 max-w-screen-lg z-20"> {/* z-index 2: top layer */}
         {/* Main grid layout - Keep structure but remove visual left column */}
         <div className="grid md:grid-cols-10 gap-8 md:gap-12 items-center">
            {/* Left Column: Empty Placeholder - Takes space but no content */}
             <div className="hidden md:block md:col-span-4"></div>

            {/* Right Column: Text Content (approx 6/10) - Apply significant left indentation */}
            {/* Removed bg-background as overlay handles readability */}
            <div className="md:col-span-6 pl-4 md:pl-12">
                {/* Headline */}
                {/* Apply the defined Brand Sans-serif H2/H3 Style */}
                <h2 className="text-2xl md:text-3xl font-serif mb-4 text-foreground">
                   Our Core Foundation: <br/> Insight, Synergy, Local Expertise
                </h2>
                {/* Body Text */}
                {/* Use Brand Sans-serif Body Style */}
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
                    <p>
                      Success in Cabo's dynamic market is built on more than just services; it's founded on deep local insight and the seamless synergy between strategy, execution, and a meticulously curated network. Our holistic model is designed to navigate complexities and optimize outcomes, ensuring quality and mitigating risk at every turn.
                    </p>
                    <p>
                      But how we achieve this stems from who we are. Our commitment runs deeper than process – it's embedded in our philosophy and the expertise of our team.
                    </p>
                </div>
                {/* Primary Call to Action */}
                <Link href="/about" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group mb-3"> {/* Added margin-bottom */}
                    Discover Our Story
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                {/* New Secondary Link */}
                <br /> {/* Add line break for spacing */}
                 <Link href="/services" className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-primary transition-colors group"> {/* Tertiary link style */}
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
    