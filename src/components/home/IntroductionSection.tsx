'use client';

import React from 'react';
import Link from 'next/link'; // Import Link for the CTA
import { ArrowRight } from 'lucide-react'; // Import ArrowRight for the CTA
import { Button } from '@/components/ui/button'; // Import Button if using button style for CTA
import { cn } from '@/lib/utils';

interface IntroductionSectionProps {
  // Add any props your component will need here
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({}) => {
  // Updated video URL to the new MP4 video
  const videoUrl = "https://www.surfside.re/wp-content/uploads/2025/04/3835189-hd_1920_1080_25fps.mp4";

  return (
    <section
      data-ai-hint="about us teaser integrated approach"
      // Adjusted height to 45svh and added flex for vertical centering of the container
      className="h-[45svh] flex flex-col justify-center bg-background py-8 md:py-12 overflow-hidden" // Added overflow-hidden
    >
      {/* Apply max-w-screen-lg here for consistent width */}
      <div className="container mx-auto px-4 max-w-screen-lg">
         {/* Main grid layout */}
         <div className="grid md:grid-cols-10 gap-8 md:gap-12 items-center">
            {/* Left Column: Visual Element (approx 4/10) */}
            <div className="md:col-span-4 h-48 md:h-64 relative rounded-lg overflow-hidden shadow-lg group"> {/* Adjusted height & positioning */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline // Important for mobile playback
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" // Ensure object-center or adjust as needed
                    data-ai-hint="sailboat ocean movement synergy expertise"
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Optional subtle overlay */}
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
            </div>

            {/* Right Column: Text Content (approx 6/10) - Apply significant left indentation */}
            <div className="md:col-span-6 pl-4 md:pl-12 bg-background z-10 relative"> {/* Ensure background color and z-index for readability */}
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
