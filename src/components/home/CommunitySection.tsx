'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CommunitySectionProps {
  // Add any props your component will need here
}

const CommunitySection: React.FC<CommunitySectionProps> = ({}) => {
  const videoUrl = "https://www.surfside.re/wp-content/uploads/2025/05/aves_del_estero-1080p.mp4";

  return (
    <section
      data-ai-hint="community future video section"
      className="relative flex items-end justify-center overflow-hidden min-h-[60svh] md:min-h-[70svh]" // Adjusted min-height and added flex alignment
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile playback
        className="absolute inset-0 w-full h-full object-cover object-center z-0" // Covers the section
        data-ai-hint="birds nature estuary cabo"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Button Container - positioned at the bottom */}
      <div className="relative z-10 pb-12 md:pb-16 text-center"> {/* Added padding-bottom */}
        {/* Ensure the Link component itself handles the layout when Button uses asChild */}
        <Button asChild size="lg" variant="secondary">
           {/* Add flex layout directly to the Link component */}
          <Link href="/about#community-vision" className="flex items-center">
              Discover How <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CommunitySection;
