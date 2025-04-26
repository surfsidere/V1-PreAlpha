
'use client'; // Add this directive because styled-jsx is used

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Placeholder data - replace with actual data fetching
const featuredProjects = [
  { id: 1, title: "Oceanfront Villa", image: "https://picsum.photos/seed/project1/600/400", type: "Private Estate", slug: "/portfolio/oceanfront-villa", excerpt: "A stunning example of coastal modernism..." },
  { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/600/400", type: "Development", slug: "/portfolio/coastal-community", excerpt: "Master-planned community with luxury amenities..." },
  { id: 3, title: "Luxury Boutique Hotel", image: "https://picsum.photos/seed/project3/600/400", type: "Luxury Hospitality", slug: "/portfolio/luxury-boutique-hotel", excerpt: "Elevated guest experiences in a prime location..." },
];

const featuredSolutions = [
   {
    title: "Strategic Insight",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
    ),
    description: "Market analysis, feasibility, investment strategy.",
    href: "/services/strategic-advisory"
  },
   {
    title: "Development Execution",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
    ),
    description: "Full lifecycle project oversight and management.",
    href: "/services/development-management"
  },
  {
    title: "Marketing & Brokerage",
     icon: (props: React.SVGProps<SVGSVGElement>) => (
       <svg {...props} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
    ),
    description: "Targeted strategies for premier properties.",
    href: "/services/marketing-sales"
  },
    // Add Investment Structures if it has its own page/section later
    // {
    // title: "Investment Structures",
    // icon: (props: React.SVGProps<SVGSVGElement>) => ( ... ),
    // description: "Tailored investment approaches.",
    // href: "/services/investment-structures"
    // },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Component 1: Hero Section */}
      <section className="relative h-[85svh] min-h-[550px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/cabosunrise/1920/1080" // Replace with high-quality custom image/video
            alt="Atmospheric view of Cabo coastline and architecture integration"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>
        <div className="relative z-10 p-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-4 text-shadow-lg animate-fade-in-up">
            Visionary Real Estate. Integrated Execution. Enduring Value in Cabo San Lucas.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-shadow animate-fade-in-up animation-delay-200">
            Your end-to-end partner for premier residential and hospitality projects.
          </p>
          {/* Optional: Scroll down indicator */}
           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 hidden md:block">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
           </div>
        </div>
      </section>

      {/* Component 2: Audience Segmentation */}
      <section id="audience-portals" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Panel A: Develop & Invest */}
            <div className="group flex flex-col items-center text-center p-8 md:p-12 rounded-lg border border-border hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
               {/* Placeholder Icon */}
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-5 text-primary transition-transform duration-300 group-hover:scale-110"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
               <h2 className="text-2xl md:text-3xl font-serif mb-3">For Developers & Investors</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto flex-grow">
                 Maximize value and navigate market complexities with our strategic advisory, development management, and investment structuring expertise.
              </p>
              <Button variant="outline" asChild className="mt-auto transition-transform duration-300 group-hover:scale-105">
                <Link href="/services">
                  Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
             {/* Panel B: Create Your Custom Home */}
            <div className="group flex flex-col items-center text-center p-8 md:p-12 rounded-lg border border-border hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              {/* Placeholder Icon */}
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-5 text-primary transition-transform duration-300 group-hover:scale-110"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <h2 className="text-2xl md:text-3xl font-serif mb-3">Build Your Bespoke Residence</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto flex-grow">
                Realize your vision with our personalized guidance through site selection, design coordination, and meticulous construction management.
              </p>
              <Button variant="outline" asChild className="mt-auto transition-transform duration-300 group-hover:scale-105">
                <Link href="/build-your-custom-home">
                  Begin Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

       {/* Component 3: Introduction / Our Integrated Approach */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">The Surfside Integration</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
             We believe true value creation in Cabo requires more than isolated services. Our integrated, end-to-end model harmonizes strategic foresight with flawless execution, leveraging deep local expertise and a curated network of elite partners. This ensures seamless project delivery, optimizes returns, and mitigates risk, underpinned by a commitment to responsible development and lasting community value.
          </p>
        </div>
      </section>

      {/* Component 4: Featured Solutions / Capabilities */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Core Capabilities</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Delivering comprehensive expertise across the real estate lifecycle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {featuredSolutions.map((solution) => (
                 <div key={solution.title} className="text-center p-6 rounded-lg border border-transparent hover:border-border hover:shadow-sm transition-all duration-300">
                    <solution.icon className="mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-serif mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                    <Button variant="link" size="sm" asChild className="p-0 h-auto">
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
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <CardHeader className="p-0 relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                   <Badge variant="secondary" className="absolute top-4 left-4 bg-background/80 text-foreground hover:bg-background/90 backdrop-blur-sm">{project.type}</Badge>
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
       <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
           <div className="max-w-2xl mx-auto p-8 rounded-lg border border-border bg-gradient-to-br from-accent/20 to-background">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Building a Better Future, Together.</h2>
                <p className="text-lg text-muted-foreground mb-6">
                    Our commitment extends beyond development to fostering sustainable practices and enriching the community fabric of Baja California Sur.
                </p>
                {/* Replace with actual link when section exists */}
                <Button asChild variant="default">
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
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Styles moved to globals.css or Tailwind config where possible */}
      {/* Keep minimal inline styles for specific animations if necessary */}
       <style jsx>{`
          .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.4); }
          .text-shadow-lg { text-shadow: 0 3px 7px rgba(0,0,0,0.5); }
          .animation-delay-200 { animation-delay: 0.2s; }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0; /* Start hidden */
          }
           @keyframes bounce {
              0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
              50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
          }
          .animate-bounce {
               animation: bounce 1s infinite;
          }
          .brightness-75 { filter: brightness(0.75); }
          .line-clamp-2 {
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
          }
        `}</style>
    </div>
  );
}
