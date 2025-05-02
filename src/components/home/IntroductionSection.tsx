
'use client';

import React from 'react';
import Link from 'next/link'; // Import Link for the CTA
import { ArrowRight } from 'lucide-react'; // Import ArrowRight for the CTA
import { Button } from '@/components/ui/button'; // Import Button if using button style for CTA

interface IntroductionSectionProps {
  // Add any props your component will need here
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({}) => {
  // Updated video URL to the MP4 version
  const videoUrl = "https://www.surfside.re/wp-content/uploads/2025/05/sail-boat-corrected-1-3.mp4";

  return (
    <section
      data-ai-hint="about us teaser integrated approach"
      // Adjusted height to 45svh and added flex for vertical centering of the container
      className="h-[45svh] flex flex-col justify-center bg-background py-8 md:py-12"
    >
      {/* Apply max-w-screen-lg here for consistent width */}
      <div className="container mx-auto px-4 max-w-screen-lg">
         {/* Main grid layout */}
         <div className="grid md:grid-cols-10 gap-8 md:gap-12 items-center">
            {/* Left Column: Visual Element (approx 4/10) */}
            <div className="md:col-span-4">
                <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg group"> {/* Adjusted height */}
                    {/* Developer Note: This visual should ideally represent synergy/expertise/roots. Keep sailboat video for now or replace. */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline // Important for mobile playback
                        className="absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint="sailboat ocean movement synergy expertise"
                    >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Optional subtle overlay */}
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                </div>
            </div>

            {/* Right Column: Text Content (approx 6/10) - Apply significant left indentation */}
            <div className="md:col-span-6 pl-4 md:pl-12"> {/* Added pl-4 md:pl-12 */}
                {/* Headline */}
                <h2 className="text-2xl md:text-3xl font-serif mb-4 text-foreground"> {/* Use Brand Sans-serif H2/H3 Style */}
                   Our Foundation: Insight, Synergy, Local Expertise.
                </h2>
                {/* Body Text */}
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base mb-6"> {/* Use Brand Sans-serif Body Style */}
                    <p>
                      Success in Cabo's dynamic market is built on more than just services; it's founded on deep local insight and the seamless synergy between strategy, execution, and a meticulously curated network. Our holistic model is designed to navigate complexities and optimize outcomes, ensuring quality and mitigating risk at every turn.
                    </p>
                    <p>
                      But how we achieve this stems from who we are. Our commitment runs deeper than process – it's embedded in our philosophy and the expertise of our team.
                    </p>
                </div>
                {/* Call to Action */}
                {/* Option: Text link with arrow */}
                <Link href="/about" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
                    Discover Our Story
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                {/* Option: Subtle outline button (uncomment and style if preferred) */}
                {/* <Button asChild variant="outline" size="sm">
                    <Link href="/about">
                        Discover Our Story <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button> */}
            </div>
         </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
