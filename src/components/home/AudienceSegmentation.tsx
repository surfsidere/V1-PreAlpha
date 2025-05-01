'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, Shield, ArrowRight } from 'lucide-react'; // Replace ShieldUser with Shield

interface AudienceSegmentationProps {
  // Add any props your component will need here
}

const AudienceSegmentation: React.FC<AudienceSegmentationProps> = ({}) => {
  const backgroundImageUrl = "https://www.surfside.re/wp-content/uploads/2022/10/Real_estate_Brokerage.jpg";

  return (
    <section
      data-ai-hint="audience segmentation panels"
      className="py-16 md:py-24 relative" // Removed bg-secondary/30, added relative
    >
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20" // Adjust opacity as needed
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50"></div> {/* Gradient overlay */}
      </div>

      {/* Content Container - Added relative and z-10 */}
      <div className="container mx-auto px-4 max-w-screen-lg relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 justify-center">
          {/* Panel A: Develop & Invest */}
          {/* Added max-w-sm and mx-auto to constrain card width and center it */}
          {/* Added bg-card for better contrast against background */}
          <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl group text-center max-w-sm mx-auto bg-card">
            {/* Ensured items-center for centering */}
            <CardHeader className="p-6 pb-4 flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-primary mb-4 flex-shrink-0"/>
              <CardTitle className="text-2xl font-serif">For Developers & Investors</CardTitle>
            </CardHeader>
            {/* Ensured items-center for centering */}
            <CardContent className="flex-grow p-6 pt-0 flex flex-col items-center">
              {/* Ensured text-center */}
              <p className="text-muted-foreground mb-6 text-center">
                Navigate the complexities of the Cabo market with a partner dedicated to strategic insight, seamless execution, and maximizing your return on investment.
              </p>
              {/* Ensured button centers itself */}
              <Button asChild variant="link" className="p-0 h-auto mt-auto self-center">
                <Link href="/services">Explore Solutions <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>

          {/* Panel B: Create Your Custom Home */}
          {/* Added max-w-sm and mx-auto to constrain card width and center it */}
          {/* Added bg-card for better contrast against background */}
          <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl group text-center max-w-sm mx-auto bg-card">
            {/* Ensured items-center for centering */}
            <CardHeader className="p-6 pb-4 flex flex-col items-center">
              {/* Replace ShieldUser with Shield */}
              <Shield className="w-10 h-10 text-primary mb-4 flex-shrink-0"/>
              <CardTitle className="text-2xl font-serif">Your Vision, Realized</CardTitle>
            </CardHeader>
            {/* Ensured items-center for centering */}
            <CardContent className="flex-grow p-6 pt-0 flex flex-col items-center">
              {/* Ensured text-center */}
              <p className="text-muted-foreground mb-6 text-center">
                Embark on a collaborative journey to create your dream home in paradise. We provide personalized guidance and expert oversight every step of the way.
              </p>
              {/* Ensured button centers itself */}
              <Button asChild variant="link" className="p-0 h-auto mt-auto self-center">
                <Link href="/build-your-custom-home">Begin Your Journey <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AudienceSegmentation;
