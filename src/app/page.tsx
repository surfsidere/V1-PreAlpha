'use client'; // Add this directive

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

// Placeholder data - replace with actual data fetching
const featuredProjects = [
  { id: 1, title: "Oceanfront Villa", image: "https://picsum.photos/seed/project1/600/400", type: "Custom Home", slug: "/portfolio/oceanfront-villa" },
  { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/600/400", type: "Development", slug: "/portfolio/coastal-community" },
  { id: 3, title: "Luxury Boutique Hotel", image: "https://picsum.photos/seed/project3/600/400", type: "Hospitality", slug: "/portfolio/luxury-boutique-hotel" },
];

const latestInsight = {
  title: "Cabo Market Trends Q3 2024",
  excerpt: "An analysis of the latest shifts in the luxury real estate market...",
  slug: "/insights/cabo-market-trends-q3-2024",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80svh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Replace with actual video or high-res image */}
          <Image
            src="https://picsum.photos/seed/cabobeach/1920/1080"
            alt="Atmospheric view of Cabo coastline and architecture"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="brightness-75"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
        </div>
        <div className="relative z-10 p-8 max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-4 text-shadow-lg animate-fade-in-up">
            Integrated Expertise for Cabo's Premier Real Estate
          </h1>
          <p className="text-lg md:text-xl mb-8 text-shadow animate-fade-in-up animation-delay-200">
            Unlocking potential through strategic advisory, development management, and bespoke property solutions in Los Cabos.
          </p>
          <Button size="lg" asChild className="animate-fade-in-up animation-delay-400">
            <Link href="#audience-portals">
              Discover Your Path <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Audience Segmentation Portals */}
      <section id="audience-portals" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex flex-col items-center text-center p-8 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
              <h2 className="text-2xl md:text-3xl font-serif mb-3">Develop & Invest</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Strategic partnership for developers and investors seeking to maximize value and navigate the complexities of the Cabo market.
              </p>
              <Button variant="outline" asChild>
                <Link href="/services/development-management">
                  Explore Development Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-primary"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <h2 className="text-2xl md:text-3xl font-serif mb-3">Create Your Custom Home</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Realize your vision with bespoke guidance through site selection, design, and construction of your exceptional Cabo residence.
              </p>
              <Button variant="outline" asChild>
                <Link href="/build-your-custom-home">
                  Begin Your Vision <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview (Simplified) */}
       <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Integrated Services</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive suite of services designed to deliver exceptional outcomes across the real estate lifecycle.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
             {/* Placeholder Icons - Replace with bespoke icons */}
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 text-primary"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
              <h3 className="text-xl font-serif mb-2">Strategic Advisory</h3>
              <p className="text-muted-foreground text-sm">Market analysis, feasibility studies, and investment strategy.</p>
               <Button variant="link" size="sm" asChild className="mt-2">
                  <Link href="/services/strategic-advisory">Learn More <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>
             <div className="text-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 text-primary"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              <h3 className="text-xl font-serif mb-2">Development Management</h3>
               <p className="text-muted-foreground text-sm">Overseeing projects from concept through completion.</p>
               <Button variant="link" size="sm" asChild className="mt-2">
                 <Link href="/services/development-management">Learn More <ArrowRight className="ml-1 h-3 w-3" /></Link>
               </Button>
             </div>
             <div className="text-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 text-primary"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
              <h3 className="text-xl font-serif mb-2">Marketing & Sales</h3>
               <p className="text-muted-foreground text-sm">Targeted strategies for premier properties.</p>
                <Button variant="link" size="sm" asChild className="mt-2">
                  <Link href="/services/marketing-sales">Learn More <ArrowRight className="ml-1 h-3 w-3" /></Link>
               </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl">
                <CardHeader className="p-0 relative h-60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                   <Badge variant="secondary" className="absolute top-4 left-4">{project.type}</Badge>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-serif mb-2">{project.title}</CardTitle>
                   {/* <CardDescription className="text-muted-foreground mb-4 h-12 overflow-hidden">{project.description}...</CardDescription> */}
                  <Button variant="link" asChild className="p-0 h-auto">
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
                <Link href="/portfolio">Explore All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insights Link */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-3">Market Insights</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Stay informed with our latest analysis and commentary on the Cabo real estate landscape. Featuring: <span className="font-medium text-foreground">{latestInsight.title}</span>
          </p>
          <Button asChild>
            <Link href={latestInsight.slug}>
              Read Latest Insight <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Add animation classes if tailwindcss-animate is used */}
      <style jsx>{`
        .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
        .text-shadow-lg { text-shadow: 0 3px 6px rgba(0,0,0,0.6); }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
        .brightness-75 { filter: brightness(0.75); }
      `}</style>
    </div>
  );
}

// Temporary Badge component placeholder
function Badge({ children, className, variant = 'default' } : { children: React.ReactNode, className?: string, variant?: string}) {
  const baseStyle = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const variantStyle = variant === 'secondary' ? "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80" : "border-transparent bg-primary text-primary-foreground hover:bg-primary/80";
  return <div className={`${baseStyle} ${variantStyle} ${className}`}>{children}</div>;
}
