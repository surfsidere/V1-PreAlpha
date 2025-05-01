
'use client';

import React from 'react';
// Removed Image import as it's replaced by video

interface IntroductionSectionProps {
  // Add any props your component will need here
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({}) => {
  // Updated video URL to the MP4 version
  const videoUrl = "https://www.surfside.re/wp-content/uploads/2025/05/sail-boat-corrected-1-3.mp4";

  return (
    <section
      data-ai-hint="introduction integrated approach"
      // Added h-[30svh] and flex for height control and centering attempt
      className="h-[30svh] flex flex-col justify-center bg-background py-8 md:py-12" // Reduced padding
    >
      {/* Apply max-w-screen-lg here */}
      <div className="container mx-auto px-4 max-w-screen-lg">
         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="max-w-xl"> {/* Constrain text width */}
                 <h2 className="text-2xl md:text-3xl font-serif mb-4">The Integrated Approach</h2> {/* Slightly smaller heading */}
                <p className="text-muted-foreground text-sm md:text-base mb-3 leading-relaxed"> {/* Slightly smaller text */}
                  Success in Cabo's dynamic market requires more than just services; it demands synergy. Our end-to-end model seamlessly integrates strategic advisory, development management, and targeted marketing & sales execution.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed"> {/* Slightly smaller text */}
                  We leverage deep local expertise and a curated network of elite partners—architects, legal counsel, financiers, and builders—orchestrating every element to maximize value, ensure quality, and mitigate risk for our clients. This holistic approach underpins our commitment to responsible development and enduring community value.
                </p>
            </div>
            {/* Replace Image with Video */}
            <div className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-lg group"> {/* Reduced video height */}
               <video
                 autoPlay
                 loop
                 muted
                 playsInline // Important for mobile playback
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 data-ai-hint="sailboat ocean movement"
               >
                 {/* Updated source URL and type */}
                 <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
                {/* Optional subtle overlay */}
               <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
