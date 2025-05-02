'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection'; // Use the actual Hero component
import AudienceSegmentation from '@/components/home/AudienceSegmentation';
import IntroductionSection from '@/components/home/IntroductionSection';
import CoreCapabilitiesSection from '@/components/home/CoreCapabilitiesSection';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import CommunitySection from '@/components/home/CommunitySection';
// Removed FinalCallToActionSection import
import { featuredProjects, featuredSolutions } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Component 1: Hero Section */}
      <HeroSection />

      {/* Component 2: Introduction / Our Integrated Approach */}
      <IntroductionSection />

      {/* Component 3: Audience Segmentation */}
      <AudienceSegmentation />

      {/* Component 4: Featured Solutions / Capabilities */}
      <CoreCapabilitiesSection
        featuredSolutions={featuredSolutions}
      />

      {/* Component 5: Featured Portfolio / Proof Points */}
      <FeaturedProjectsSection
        featuredProjects={featuredProjects}
      />

      {/* Component 6: Community & Future Teaser + Final CTA Merged */}
      <CommunitySection />

      {/* Component 7: Final Call to Action / Contact - Removed */}
      {/* <FinalCallToActionSection /> */}
    </div>
  );
}
