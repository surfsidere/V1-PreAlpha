'use client'; // Keep 'use client' as the page now uses interactive components below the VisionCanvas

// src/app/build-your-custom-home/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import VisionCanvas from '@/components/custom-home/VisionCanvas'; // Import the new interactive hero
import FlowingJourney from '@/components/custom-home/FlowingJourney'; // Import the new FlowingJourney component


// Placeholder data - keep for sections below the hero
const customHomes = [
  { id: 1, title: "Cliffside Estate", image: "https://picsum.photos/seed/custom1/600/400", slug: "/portfolio/cliffside-estate", "data-ai-hint": "luxury villa cliff ocean" },
  { id: 2, title: "Modern Beachfront", image: "https://picsum.photos/seed/custom2/600/400", slug: "/portfolio/modern-beachfront", "data-ai-hint": "modern house beach sunset" },
  { id: 3, title: "Golf Course Villa", image: "https://picsum.photos/seed/custom3/600/400", slug: "/portfolio/golf-course-villa", "data-ai-hint": "house villa golf course" },
];

export default function BuildCustomHomePage() {
  return (
    <div className="bg-background">
      {/* Interactive Vision Canvas Hero */}
      <VisionCanvas />

      {/* The Bespoke Process - Flowing Journey */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-12 md:mb-16">
             <h2 className="text-3xl md:text-4xl font-serif mb-4">Your Vision, Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We guide you through every step of the custom home building process, ensuring a seamless, collaborative, and exceptional experience.
            </p>
           </div>
            <FlowingJourney />
        </div>
      </section>


      {/* Orchestrating Excellence Section (Replaced "Why Choose Surfside / Your Trusted Guide") */}
       <section className="py-16 md:py-24 bg-secondary/30">
         {/* Apply max-w-screen-lg for consistent width */}
         <div className="container mx-auto px-4 max-w-screen-lg">
           {/* Asymmetrical Grid: Visual Left (40%), Text Right (60%) */}
           <div className="grid md:grid-cols-10 gap-8 md:gap-12 items-center">

             {/* Visual Element Column (Left - 4/10) */}
             <div className="md:col-span-4">
               <div className="relative h-80 md:h-[450px] bg-muted rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                 {/* Placeholder for Visual */}
                 <span className="text-muted-foreground text-sm">
                    [Visual Placeholder: Animation, Image, or Video Loop]
                 </span>
                  {/* Example using a static image placeholder: */}
                 {/* <Image
                    src="https://picsum.photos/seed/orchestrate/800/600"
                    alt="High-quality materials or plans"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                    data-ai-hint="architecture plans materials stone wood"
                  /> */}
               </div>
             </div>

             {/* Text Content Column (Right - 6/10) */}
             {/* Added pl-4 md:pl-12 for the significant left indentation */}
             <div className="md:col-span-6 pl-4 md:pl-12">
                 {/* Headline styled using Brand Sans-serif H2/H3 */}
                 <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">
                     Orchestrating Excellence, From Blueprint to Baja Lifestyle.
                 </h2>
                 {/* Body text styled using Brand Sans-serif Body */}
                 <div className="space-y-4 text-muted-foreground leading-relaxed">
                     <p>
                         Bringing a custom residence to life in Los Cabos is an intricate symphony. We serve as your dedicated conductor, meticulously aligning visionary design with strategic planning and flawless execution. Our personalized approach begins with deeply understanding your aspirations, ensuring every subsequent step resonates with your unique definition of home.
                     </p>
                     <p>
                         Leveraging decades of local insight and rigorous oversight, we manage every facet of the project lifecycle – from navigating entitlements to demanding the highest standards during construction. We mitigate risks through proactive communication and transparent management, ensuring your journey is as seamless as the final result.
                     </p>
                     <p>
                         Our curated ecosystem of Baja Sur's finest architects, builders, and artisans is integral to our process. We don't just connect you; we orchestrate this elite network, ensuring collaborative synergy and access to unparalleled craftsmanship dedicated to realizing your vision and creating enduring value.
                     </p>
                 </div>
                 {/* CTA remains from previous version */}
                  <Button asChild className="mt-8">
                     <Link href="/contact?inquiry=custom_home_consultation">Schedule a Private Consultation</Link>
                 </Button>
              </div>

           </div>
         </div>
       </section>


       {/* Showcase Gallery - Constrained Width */}
      <section className="py-16 md:py-24">
        {/* Apply max-w-screen-lg for consistent width */}
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Inspiring Custom Homes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {customHomes.map((home) => (
              <Card key={home.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl">
                <CardHeader className="p-0 relative h-72">
                  <Image
                    src={home.image}
                    alt={home.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                     data-ai-hint={home['data-ai-hint']}
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-serif mb-2">{home.title}</CardTitle>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={home.slug}>
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/portfolio?filter=custom-home">Explore More Custom Homes</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
