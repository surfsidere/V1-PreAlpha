
// No longer need 'use client' as styled-jsx is removed
// 'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// Import ShieldCheck and SquareAsterisk, keep SwatchBook
import { ArrowRight, BarChart3, Megaphone, Cpu, SwatchBook, ShieldCheck, SquareAsterisk } from 'lucide-react';
import { Badge } from '@/components/ui/badge';


const featuredProjects = [
  { id: 1, title: "Oceanfront Villa", image: "https://picsum.photos/seed/project1/600/400", type: "Private Estate", slug: "/portfolio/oceanfront-villa", excerpt: "A stunning example of coastal modernism...", "data-ai-hint": "luxury villa ocean" },
  { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/600/400", type: "Development", slug: "/portfolio/coastal-community", excerpt: "Master-planned community with luxury amenities...", "data-ai-hint": "coastal community aerial" },
  { id: 3, title: "Luxury Boutique Hotel", image: "https://picsum.photos/seed/project3/600/400", type: "Luxury Hospitality", slug: "/portfolio/luxury-boutique-hotel", excerpt: "Elevated guest experiences in a prime location...", "data-ai-hint": "luxury hotel poolside" },
];

// Updated featuredSolutions to align with Services page core services and icons
const featuredSolutions = [
  {
    title: "Real Estate Advisory",
    icon: BarChart3, // Consistent with Services page
    description: "Market analysis, feasibility, investment strategy.",
    href: "/services/strategic-advisory"
  },
  {
    title: "Integrated Management Services",
    icon: Cpu, // Consistent with Services page
    description: "Full lifecycle project oversight and management.",
    href: "/services/development-management"
  },
  {
    title: "Marketing & Sales",
    icon: Megaphone, // Consistent with Services page
    description: "Targeted strategies for premier properties.",
    href: "/services/marketing-sales"
  },
  {
    title: "Development Coordination & Oversight", // Matches Services page L1
    icon: SwatchBook, // Consistent icon
    description: "Personalized guidance for bespoke residences.",
    href: "/build-your-custom-home" // Links to the specific landing page
  },
];


export default function HomePage() { // Renamed component
  return (
    <div className="flex flex-col min-h-screen">

      {/* Component 1: New Hero Section */}
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            {/* Left Column: Text & CTA */}
            <div className="md:col-span-3 space-y-6 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground">
                The Art of Los Cabos Real Estate: Vision, Strategy, Execution.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Discover a seamless, strategic approach to navigating the complexities and capturing the opportunities of the Los Cabos real estate market. We offer end-to-end guidance for discerning investors, developers, and homeowners.
              </p>
              <Button size="lg" asChild variant="outline">
                <Link href="/about">
                  Discover Our Approach <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
               {/* Optional subtle graphical element */}
               {/* <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary/10 rounded-full -translate-x-1/4 -translate-y-1/2 rotate-[-15deg] opacity-50 hidden md:block"></div> */}
            </div>

            {/* Right Column: Image */}
            <div className="md:col-span-2 relative h-80 md:h-[450px] lg:h-[550px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/seed/hero-cabo-arch/800/1000" // Placeholder image
                alt="Sophisticated architectural detail in Los Cabos"
                fill
                style={{ objectFit: 'cover' }}
                quality={90}
                priority
                data-ai-hint="modern architecture luxury detail"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Component 2: Audience Segmentation */}
      <section id="audience-portals" className="py-16 md:py-24 bg-secondary/30"> {/* Changed background */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Panel A: Develop & Invest */}
            <div className="group flex flex-col items-center text-center p-8 md:p-12 rounded-lg border border-border bg-background hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
               <ShieldCheck className="mb-5 text-primary transition-transform duration-300 group-hover:scale-110 w-12 h-12"/>
               <h2 className="text-2xl md:text-3xl font-serif mb-3">For Developers & Investors</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto flex-grow">
               Maximize value and navigate market complexities with our strategic advisory, development management, and investment structuring expertise.
              </p>
              <Button variant="outline" asChild className="mt-auto transition-transform duration-300 group-hover:scale-105">
                <Link href="/services">
                  Explore Solutions <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            {/* Panel B: Your Vision, Realized */}
            <div className="group flex flex-col items-center text-center p-8 md:p-12 rounded-lg border border-border bg-background hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
               {/* Correct Icon for Bespoke/Vision */}
               <SquareAsterisk className="mb-5 text-primary transition-transform duration-300 group-hover:scale-110 w-12 h-12" />
               <h2 className="text-2xl md:text-3xl font-serif mb-3">Your Vision, Realized</h2>
               <p className="text-muted-foreground mb-6 max-w-md mx-auto flex-grow">
                Realize your vision with our personalized guidance through site selection, design coordination, and meticulous construction management.
               </p>
              <Button variant="outline" asChild className="mt-auto transition-transform duration-300 group-hover:scale-105">
                <Link href="/build-your-custom-home">
                  Begin Your Journey <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Component 3: Introduction / Our Integrated Approach */}
      <section className="py-16 md:py-24 bg-background"> {/* Changed background */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">The Surfside Integration</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
             We believe true value creation in Cabo requires more than isolated services. Our integrated, end-to-end model harmonizes strategic foresight with flawless execution, leveraging deep local expertise and a curated network of elite partners. This ensures seamless project delivery, optimizes returns, and mitigates risk, underpinned by a commitment to responsible development and lasting community value.
          </p>
        </div>
      </section>

      {/* Component 4: Featured Solutions / Capabilities */}
      <section className="py-16 md:py-24 bg-secondary/30"> {/* Changed background */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Core Capabilities</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Delivering comprehensive expertise across the real estate lifecycle.
          </p>
          {/* Updated grid layout to accommodate 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ensure icons used here match the updated featuredSolutions array */}
            {featuredSolutions.map((solution) => (
            <div key={solution.title} className="text-center p-6 rounded-lg border border-transparent hover:border-border hover:shadow-sm transition-all duration-300 flex flex-col items-center bg-background/50"> {/* Added light background */}
              <solution.icon className="mx-auto mb-4 text-primary w-10 h-10" /> {/* Ensure consistent icon size */}
              <h3 className="text-xl font-serif mb-2 flex-grow">{solution.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
              <Button variant="link" size="sm" asChild className="p-0 h-auto mt-auto">
                <Link href={solution.href}>Learn More <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>
          ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/services">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Component 5: Featured Portfolio / Proof Points */}
      <section className="py-16 md:py-24 bg-background"> {/* Changed background */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 bg-card"> {/* Ensured card background */}
                <CardHeader className="p-0 relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                     fill // Use fill instead of layout="fill"
                    style={{ objectFit: 'cover' }} // Use style object for objectFit
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project['data-ai-hint']}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                  {/* Use glass variant for badge */}
                  <Badge variant="glass" className="absolute top-4 left-4">{project.type}</Badge>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                   <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.excerpt}</p>
                   <Button variant="link" asChild className="p-0 h-auto text-sm">
                     <Link href={project.slug}>
                       View Project Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Component 6: Community & Future Teaser - Placeholder for now */}
      <section className="py-16 md:py-24 bg-secondary/30"> {/* Changed background */}
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-lg border border-border bg-gradient-to-br from-background/50 to-background"> {/* Adjusted background */}
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Building a Better Future, Together.</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our commitment extends beyond development to fostering sustainable practices and enriching the community fabric of Baja California Sur.
            </p>
            {/* Replace with actual link when section exists, using secondary variant for "Coming Soon" */}
            <Button asChild variant="secondary" disabled>
              {/* <Link href="/community-future">Discover Our Vision</Link> */}
              <span className="cursor-not-allowed">Coming Soon</span>
            </Button>
          </div>
        </div>
      </section>


      {/* Component 7: Final Call to Action / Contact */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to start the conversation?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let's discuss how Surfside's integrated expertise can bring your Cabo vision to life.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

     {/* Remove styled-jsx block */}
     {/*
     <style jsx>{`
        .line-clamp-2 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
      `}</style>
      */}
     </div>
  );
}
