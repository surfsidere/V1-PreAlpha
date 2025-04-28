
'use client'; // This component uses client-side features (imported components might)

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Define the type for Level 3 tasks
interface Level3Task {
  title: string;
  // Optional: add icon name or component if needed later
  // icon?: React.ElementType | string;
}

// Define the type for the service data prop, including Level 3 tasks
// Note: Removed 'process' as it's replaced by level3Tasks for these core services
interface Service {
  slug: string;
  title: string;
  heroImage: string;
  description: string;
  benefits: string[];
  applications: string[];
  relevantProjects?: { id: number; title: string; image: string; slug: string }[];
  ctaLink: string;
  ctaText: string;
  level3Tasks?: Level3Task[]; // Level 3 tasks array (optional)
}

interface ServiceDetailClientProps {
  service: Service;
}

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[40svh] min-h-[300px] flex items-end text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={`Hero image for ${service.title}`}
            layout="fill"
            objectFit="cover"
            quality={85}
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 p-8 md:p-12 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-2 text-shadow-lg">
            {service.title}
          </h1>
        </div>
        <style jsx>{`
          .text-shadow-lg { text-shadow: 0 3px 6px rgba(0,0,0,0.6); }
          .brightness-75 { filter: brightness(0.75); }
        `}</style>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Content Area */}
          <main className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl md:text-3xl font-serif mb-4">Service Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </section>

            {/* Render Level 3 Tasks if they exist */}
            {service.level3Tasks && service.level3Tasks.length > 0 && (
              <section>
                <h2 className="text-2xl md:text-3xl font-serif mb-6">Key Activities & Deliverables</h2>
                 {/* Level 3 Styling: List format */}
                 <ul className="space-y-3">
                    {service.level3Tasks.map((task, index) => (
                       <li key={index} className="flex items-center text-muted-foreground">
                         {/* Level 3 Icon: Small CheckCircle */}
                         <CheckCircle className="w-4 h-4 mr-3 text-primary/70 flex-shrink-0"/>
                         {/* Level 3 Text: Smaller, standard weight */}
                         <span className="text-sm">{task.title}</span>
                       </li>
                    ))}
                 </ul>
              </section>
            )}

            {/* Applications Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-serif mb-4">Relevant Applications</h2>
              <div className="flex flex-wrap gap-2">
                {service.applications.map((app, index) => (
                  <Badge key={index} variant="outline">{app}</Badge>
                ))}
              </div>
            </section>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-24 self-start">
            {/* Key Benefits Section */}
            <div>
              <h3 className="text-xl font-serif mb-3 border-b pb-2">Key Benefits</h3>
              <ul className="space-y-2 text-sm">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Relevant Projects Section */}
            {service.relevantProjects && service.relevantProjects.length > 0 && (
              <div>
                <h3 className="text-xl font-serif mb-4 border-b pb-2">Relevant Projects</h3>
                <div className="space-y-4">
                  {service.relevantProjects.map(project => (
                    <Link href={project.slug} key={project.id} className="block group">
                      <Card className="overflow-hidden transition-shadow hover:shadow-md">
                        <div className="flex items-center">
                          <div className="relative w-24 h-20 flex-shrink-0">
                            <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="group-hover:opacity-90 transition-opacity" />
                          </div>
                          <CardContent className="p-3">
                            <p className="text-sm font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">{project.title}</p>
                          </CardContent>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
                <Button variant="link" size="sm" asChild className="mt-4 px-0">
                  <Link href="/portfolio">View All Projects <ArrowRight className="ml-1 h-3 w-3" /></Link>
                </Button>
              </div>
            )}

            {/* CTA Button */}
            <div>
              <Button size="lg" className="w-full" asChild>
                <Link href={service.ctaLink}>{service.ctaText}</Link>
              </Button>
            </div>

            {/* Back Button */}
            <Button variant="outline" asChild className='w-full'>
              <Link href="/services">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services Overview
              </Link>
            </Button>
          </aside>
        </div>
      </div>
    </div>
  );
}
