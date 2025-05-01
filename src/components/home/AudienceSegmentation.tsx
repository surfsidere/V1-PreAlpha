'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Shield, ArrowRight } from 'lucide-react'; // Replace ShieldUser with Shield

interface AudienceSegmentationProps {
  // Add any props your component will need here
}

const AudienceSegmentation: React.FC<AudienceSegmentationProps> = ({}) => {
  return (
     <section data-ai-hint="audience segmentation panels" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Panel A: Develop & Invest */}
           <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl group text-center md:text-left">
               {/* Changed header layout: Icon top, Title below */}
               <CardHeader className="p-6 pb-4 flex flex-col items-center md:items-start">
                    <ShieldCheck className="w-10 h-10 text-primary mb-4 flex-shrink-0"/>
                    <CardTitle className="text-2xl font-serif">For Developers & Investors</CardTitle>
                    {/* Optional subtitle */}
                    {/* <CardDescription>Maximizing returns, mitigating risk.</CardDescription> */}
               </CardHeader>
               <CardContent className="flex-grow p-6 pt-0 flex flex-col items-center md:items-start">
                  <p className="text-muted-foreground mb-6 text-center md:text-left">
                    Navigate the complexities of the Cabo market with a partner dedicated to strategic insight, seamless execution, and maximizing your return on investment.
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto mt-auto">
                    <Link href="/services">Explore Solutions <ArrowRight className="ml-2 h-4 w-4" /></Link>
                 </Button>
               </CardContent>
                {/* Optional Image - Kept commented out */}
               {/* <div className="h-48 bg-muted relative overflow-hidden">
                  <Image src="https://picsum.photos/seed/invest/600/300" layout="fill" objectFit="cover" alt="Investment graphic" className="group-hover:scale-105 transition-transform"/>
                </div> */}
           </Card>

          {/* Panel B: Create Your Custom Home */}
           <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl group text-center md:text-left">
                {/* Changed header layout: Icon top, Title below */}
               <CardHeader className="p-6 pb-4 flex flex-col items-center md:items-start">
                    {/* Replace ShieldUser with Shield */}
                    <Shield className="w-10 h-10 text-primary mb-4 flex-shrink-0"/>
                    <CardTitle className="text-2xl font-serif">Your Vision, Realized</CardTitle>
                    {/* Optional subtitle */}
                    {/* <CardDescription>Your vision, meticulously realized.</CardDescription> */}
               </CardHeader>
                <CardContent className="flex-grow p-6 pt-0 flex flex-col items-center md:items-start">
                   <p className="text-muted-foreground mb-6 text-center md:text-left">
                     Embark on a collaborative journey to create your dream home in paradise. We provide personalized guidance and expert oversight every step of the way.
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto mt-auto">
                     <Link href="/build-your-custom-home">Begin Your Journey <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
                 {/* Optional Image - Kept commented out */}
                 {/* <div className="h-48 bg-muted relative overflow-hidden">
                  <Image src="https://picsum.photos/seed/custom/600/300" layout="fill" objectFit="cover" alt="Luxury custom home detail" className="group-hover:scale-105 transition-transform"/>
                 </div> */}
           </Card>
        </div>
      </div>
    </section>
  );
};

export default AudienceSegmentation;
