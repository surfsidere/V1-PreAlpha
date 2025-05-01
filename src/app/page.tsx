
'use client'; // Required for styled-jsx

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// Import ShieldCheck and SquareAsterisk, keep SwatchBook
import { ArrowRight, BarChart3, Megaphone, Cpu, SwatchBook, ShieldCheck, SquareAsterisk } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Placeholder data - replace with actual data fetching
const featuredProjects = [
  { id: 1, title: "Oceanfront Villa", image: "https://picsum.photos/seed/project1/600/400", type: "Private Estate", slug: "/portfolio/oceanfront-villa", excerpt: "A stunning example of coastal modernism...", "data-ai-hint": "luxury villa ocean" },
  { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/600/400", type: "Development", slug: "/portfolio/coastal-community", excerpt: "Master-planned community with luxury amenities...", "data-ai-hint": "coastal community aerial" },
  { id: 3, title: "Luxury Boutique Hotel", image: "https://picsum.photos/seed/project3/600/400", type: "Luxury Hospitality", slug: "/portfolio/luxury-boutique-hotel", excerpt: "Elevated guest experiences in a prime location...", "data-ai-hint": "luxury hotel poolside" },
];

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
    title: "Development Coordination & Oversight", // Consistent title
    icon: SwatchBook, // Consistent icon
    description: "Personalized guidance for bespoke residences.",
    href: "/build-your-custom-home" // Links to the specific landing page
  },
];


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Component 1: New Asymmetrical Hero Section */}
      <section className="relative hero-grid-section overflow-hidden min-h-[70svh] md:min-h-[80svh] py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 h-full">
          <div className="hero-grid-container h-full">
            {/* Headline Element (Overlapping) */}
            <h1 className="hero-headline">
              Elevating Lifestyle & Legacy
            </h1>

            {/* Body Text Element (Offset) */}
             <div className="hero-body-text">
               <h2 className="subtitle">Curated Baja Living</h2> {/* Subtitle */}
               <p className="body">
                 Discover a seamless, strategic approach to navigating the complexities and capturing the opportunities of the Los Cabos real estate market. We offer end-to-end guidance for discerning investors, developers, and homeowners.
               </p>
             </div>


            {/* Video Element (Replacing Image) */}
            <div className="hero-image-container">
              <video
                src="https://www.surfside.re/wp-content/uploads/2025/05/165021798-golf-course-cabo-mexico.mp4"
                autoPlay
                loop
                muted
                playsInline // Important for mobile playback
                className="w-full h-full object-cover" // Ensure video covers the container
              />
            </div>

            {/* Call to Action Element (Distinct Position) */}
            {/* Apply styles from prompt: Font, Size, Weight, Transform, Spacing, Color, BG, Border, Padding, Radius, Hover */}
            <Link href="/about" legacyBehavior>
              <a className="hero-cta inline-block py-3 px-6 text-sm font-medium uppercase tracking-wider rounded-md transition-colors duration-300 ease-in-out bg-primary text-primary-foreground hover:bg-primary/90">
                Discover Our Approach
              </a>
            </Link>
          </div>
        </div>
      </section>


      {/* Component 2: Audience Segmentation */}
      <section id="audience-portals" className="py-16 md:py-24 bg-secondary/30">
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
               {/* Using SquareAsterisk based on successful fix */}
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">The Surfside Integration</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
             We believe true value creation in Cabo requires more than isolated services. Our integrated, end-to-end model harmonizes strategic foresight with flawless execution, leveraging deep local expertise and a curated network of elite partners. This ensures seamless project delivery, optimizes returns, and mitigates risk, underpinned by a commitment to responsible development and lasting community value.
          </p>
        </div>
      </section>

      {/* Component 4: Featured Solutions / Capabilities */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Core Capabilities</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Delivering comprehensive expertise across the real estate lifecycle.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSolutions.map((solution) => (
            <div key={solution.title} className="text-center p-6 rounded-lg border border-transparent hover:border-border hover:shadow-sm transition-all duration-300 flex flex-col items-center bg-background/50">
              <solution.icon className="mx-auto mb-4 text-primary w-10 h-10" />
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 bg-card">
                <CardHeader className="p-0 relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                     fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project['data-ai-hint']}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
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

      {/* Component 6: Community & Future Teaser */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-lg border border-border bg-gradient-to-br from-background/50 to-background">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Building a Better Future, Together.</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our commitment extends beyond development to fostering sustainable practices and enriching the community fabric of Baja California Sur.
            </p>
            <Button asChild variant="secondary" disabled>
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

       {/* CSS for the new Hero Section */}
      <style jsx>{`

        :root {
            /* Estimated Brand Style Guidelines - VERIFY AND REPLACE */
            --brand-background-primary: #FFFFFF;
            --brand-text-primary: #333333;
            --brand-text-secondary: #666666;
            --brand-accent-primary: #1f2421; /* Updated green */
            --brand-accent-secondary: #F0F8FF; /* Verify if used */
        }

        .hero-grid-section {
          /* Base styles handled by Tailwind */
        }

        .hero-grid-container {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 1fr 0.7fr; /* Asymmetrical grid */
          grid-template-rows: auto auto auto 1fr auto; /* Adjusted rows */
          gap: 1rem 2rem;
          align-items: center;
          height: 100%;
          position: relative;
        }

        .hero-headline {
          grid-column: 1 / 3;
          grid-row: 1 / 3;
          /* --- Estimated Headline Styles --- */
          font-family: var(--font-playfair-display), serif; /* USE VERIFIED SERIF FONT */
          font-weight: 400; /* Regular weight */
          font-size: clamp(2.6rem, 7vw, 5rem); /* Large, responsive */
          line-height: 1.2;
          color: var(--brand-text-primary);
          z-index: 10;
          /* Potential animation: animate headline on scroll */
        }

        .hero-body-text {
            grid-column: 1 / 3;
            grid-row: 3 / 4;
            z-index: 10;
        }

        .hero-body-text .subtitle {
             /* --- Estimated Subtitle Styles --- */
            font-family: var(--font-inter), sans-serif; /* USE VERIFIED SANS-SERIF FONT */
            font-weight: 400; /* Normal weight */
            font-size: clamp(1.1rem, 2.5vw, 1.5rem); /* Smaller than H1 */
            line-height: 1.4;
            letter-spacing: 0.08em; /* Slight spacing */
            text-transform: uppercase; /* Common style - VERIFY */
            color: var(--brand-text-secondary);
            text-align: left;
            margin-bottom: 1rem; /* Space before body */
        }

        .hero-body-text .body {
             /* --- Estimated Body Text Styles --- */
            font-family: var(--font-inter), sans-serif; /* USE VERIFIED SANS-SERIF FONT */
            font-weight: 400; /* Normal weight */
            font-size: clamp(1rem, 1.8vw, 1.1rem); /* Standard body size */
            line-height: 1.7; /* Readable line height */
            color: var(--brand-text-primary);
            max-width: 70ch; /* Constrain for readability */
            text-align: left;
        }


        .hero-image-container {
          grid-column: 3 / 5;
          grid-row: 1 / 5;
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 300px;
          z-index: 5;
          clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%); /* Example non-rectangular clip-path */
          /* Potential animation: Subtle parallax for image/video */
        }
        .hero-image-container video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }


        .hero-cta {
          grid-column: 1 / 2;
          grid-row: 4 / 5;
          align-self: start;
          justify-self: start;
          margin-top: 2rem;
          z-index: 10;
           /* --- Estimated CTA Styles --- */
          /* Tailwind handles basic button structure */
          font-family: var(--font-inter), sans-serif; /* USE VERIFIED SANS-SERIF FONT */
          font-weight: 500; /* Medium weight */
          /* font-size: 0.9rem; */ /* Tailwind text-sm might suffice */
          /* text-transform: uppercase; */ /* Tailwind uppercase */
          /* letter-spacing: 0.07em; */ /* Tailwind tracking-wider */
          /* color: #FFFFFF; */ /* Tailwind text-primary-foreground */
          /* background-color: var(--brand-accent-primary); */ /* Tailwind bg-primary */
          border: none;
          /* padding: 0.9em 2em; */ /* Tailwind py-3 px-6 approx */
          /* border-radius: 4px; */ /* Tailwind rounded-md */
          /* Hover state handled by Tailwind hover:bg-primary/90 */
          /* Consider transition: all 0.3s; */
        }

        /* Basic Responsiveness */
        @media (max-width: 768px) {
          .hero-grid-container {
            grid-template-columns: 1fr; /* Single column */
            grid-template-rows: auto auto auto auto; /* Reset rows */
            gap: 1.5rem 0;
            text-align: left;
          }

          .hero-headline {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }

          .hero-body-text {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
             max-width: none;
          }
           .hero-body-text .subtitle, .hero-body-text .body {
             text-align: left; /* Ensure text aligns left */
           }

          .hero-image-container {
            grid-column: 1 / 2;
            grid-row: 3 / 4;
            clip-path: none; /* Remove clip-path on mobile */
             aspect-ratio: 16 / 10;
             height: auto;
             min-height: 250px;
          }

          .hero-cta {
            grid-column: 1 / 2;
            grid-row: 4 / 5;
            justify-self: start;
            margin-top: 1.5rem;
          }
        }
      `}</style>

     </div>
  );
}
