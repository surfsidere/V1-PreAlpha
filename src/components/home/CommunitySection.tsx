'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CommunitySectionProps {
  // Add any props your component will need here
}

const CommunitySection: React.FC<CommunitySectionProps> = ({}) => {
  const videoUrl = "https://www.surfside.re/wp-content/uploads/2025/05/DJI_0143.mp4"; // Video URL

  return (
    <section
      data-ai-hint="community future video section"
      // Use min-h, flex, flex-col, and justify-between/justify-center to structure
      className="relative flex flex-col items-center justify-center overflow-hidden min-h-[60svh] md:min-h-[70svh] text-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile playback
        className="absolute inset-0 w-full h-full object-cover object-center z-0" // Covers the section
        data-ai-hint="community nature cabo landscape" // Updated AI hint
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 p-8 text-white max-w-3xl mx-auto">
        {/* Restored Headline */}
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-shadow-lg">
          Building a Better Future, Together
        </h2>
        {/* Restored Paragraph */}
        <p className="text-lg text-white/90 mb-8 text-shadow">
          We believe in conscious development that respects the unique environment and community of Baja California Sur. Our commitment extends beyond individual projects to fostering sustainable practices and contributing positively to the region's future.
        </p>

        {/* Button Container - Centered below text */}
        <div className="mt-8"> {/* Added margin-top */}
          <Button asChild size="lg" variant="secondary">
            {/* Add flex layout directly to the Link component */}
            <Link href="/about#community-vision" className="flex items-center">
              Discover How <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
       <style jsx>{`
            .text-shadow { text-shadow: 0 1px 3px rgba(0,0,0,0.6); }
            .text-shadow-lg { text-shadow: 0 2px 5px rgba(0,0,0,0.7); }
        `}</style>
    </section>
  );
};

export default CommunitySection;
