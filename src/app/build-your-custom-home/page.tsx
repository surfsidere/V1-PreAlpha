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

// Remove old processSteps data as it's now inside FlowingJourney
// const processSteps = [ ... ];

export default function BuildCustomHomePage() {
  return (
    <div className="bg-background">
      {/* Replace static hero with VisionCanvas */}
      <VisionCanvas />

      {/* Sections below the hero remain */}
      {/* The Bespoke Process - Constrained Width */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-12 md:mb-16">
             <h2 className="text-3xl md:text-4xl font-serif mb-4">Your Vision, Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We guide you through every step of the custom home building process, ensuring a seamless, collaborative, and exceptional experience.
            </p>
           </div>

            {/* Replace the static grid with the FlowingJourney component */}
            <FlowingJourney />

           {/* Remove the old static grid */}
           {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {processSteps.map((step, index) => ( ... ))}
                <Card className="flex flex-col items-center text-center p-6 border-l-4 border-primary bg-primary/5 transition-shadow hover:shadow-md md:col-span-2 lg:col-span-1">
                   <CheckCircle className="w-12 h-12 mb-4 text-primary" />
                    <CardTitle className="text-xl font-serif mb-2">Unparalleled Quality</CardTitle>
                    <CardContent className="p-0">
                        <p className="text-sm text-muted-foreground">Leveraging our elite partner network for the finest craftsmanship and materials.</p>
                    </CardContent>
                </Card>
           </div> */}
        </div>
      </section>


      {/* Why Choose Surfside - Constrained Width */}
       {/* This section might need re-evaluation or combination with FlowingJourney's last step ("Unparalleled Quality") */}
       <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-screen-xl">
           <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-80 md:h-[450px] rounded-lg overflow-hidden shadow-lg order-last md:order-first">
                 <Image
                   src="https://picsum.photos/seed/whychoose/800/600"
                   alt="Architect discussing plans with a client"
                   layout="fill"
                   objectFit="cover"
                   className="transition-transform duration-500 hover:scale-105"
                   data-ai-hint="architect client meeting plans"
                 />
               </div>
               <div className="order-first md:order-last">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Your Trusted Guide</h2>
                 {/* Replaced list with paragraph summarizing the points */}
                 <p className="text-muted-foreground mb-6 leading-relaxed">
                    We provide a personalized approach, deeply understanding your needs and aspirations. Our expert project management ensures meticulous oversight for quality, budget, and timeline adherence. Benefit from access to Cabo's elite network of architects, designers, and builders, all while maintaining transparent communication throughout the journey.
                 </p>
                 <Button asChild className="mt-8">
                    <Link href="/contact?inquiry=custom_home_consultation">Schedule a Private Consultation</Link>
                </Button>
              </div>

           </div>
        </div>
      </section>


       {/* Showcase Gallery - Constrained Width */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-screen-xl">
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
                  {/* <p className="text-sm text-muted-foreground mb-4">Brief description or key feature...</p> */}
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
