'use client';

import HeroSection from '@/components/home/HeroSection'; // Corrected import name
import AudienceSegmentation from '@/components/home/AudienceSegmentation'; // Corrected import name
import IntroductionSection from '@/components/home/IntroductionSection'; // Corrected import name
import CoreCapabilitiesSection from '@/components/home/CoreCapabilitiesSection'; // Corrected import name
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection'; // Corrected import name
import CommunitySection from '@/components/home/CommunitySection'; // Corrected import name
import FinalCallToActionSection from '@/components/home/FinalCallToActionSection'; // Corrected import name
import { featuredProjects, featuredSolutions } from '@/lib/data';

// Renaming the component to avoid naming conflict
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

      {/* Component 6: Community & Future Teaser */}
      <CommunitySection />

      {/* Component 7: Final Call to Action / Contact */}
      <FinalCallToActionSection />
    </div>
  );
}
