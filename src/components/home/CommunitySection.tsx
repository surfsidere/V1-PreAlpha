
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
      data-ai-hint="community future video section with cta"
      // Changed to min-h-screen and flex structure
      className="relative flex flex-col justify-between overflow-hidden min-h-screen text-center"
    >
      {/* Background Video - Covers the entire section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        data-ai-hint="community nature cabo landscape aerial"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Overlay for general readability (optional, adjust as needed) */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content Container - Pushes content away from edges */}
      <div className="relative z-20 flex flex-col flex-grow justify-center p-8 text-white max-w-3xl mx-auto pt-20"> {/* Added top padding */}
        {/* Community Content (adjust spacing as needed) */}
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white text-shadow-lg">
          Building a Better Future, Together
        </h2>
        <p className="text-lg text-white/90 mb-8 text-shadow">
          We believe in conscious development that respects the unique environment and community of Baja California Sur. Our commitment extends beyond individual projects to fostering sustainable practices and contributing positively to the region's future.
        </p>
        {/* Changed Button to a Link with hover:underline */}
        <Link
          href="/cultivating-future" // Updated href to point to the new page
          className="inline-flex items-center justify-center text-lg text-white font-medium group hover:underline" // Added hover:underline and group
          >
            <span className="group-hover:underline">Our Long-Term Commitment</span> {/* Ensure text underlines */}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:underline" /> {/* Ensure icon underlines */}
        </Link>
      </div>

      {/* Bottom CTA Area */}
      <div className="relative z-20 h-[35vh] flex flex-col items-center justify-center p-8 text-primary-foreground">
         {/* Dark Gradient Overlay for CTA section */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-primary via-primary/80 to-transparent z-0"></div>
         {/* CTA Content */}
        <div className="relative z-10 max-w-xl mx-auto">
            {/* Changed text-primary-foreground to text-white */}
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">Ready to start the conversation?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
                Let's discuss how Surfside's integrated expertise can bring your Cabo vision to life.
            </p>
            <Button size="lg" variant="secondary" asChild>
                 <Link href="/contact" className="flex items-center"> {/* Added flex and items-center */}
                    Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
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
