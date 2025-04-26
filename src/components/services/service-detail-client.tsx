
'use client'; // This component uses client-side features (imported components might)

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Define the type for the service data prop
interface Service {
  slug: string;
  title: string;
  heroImage: string;
  description: string;
  process: { title: string; detail: string }[];
  benefits: string[];
  applications: string[];
  relevantProjects?: { id: number; title: string; image: string; slug: string }[];
  ctaLink: string;
  ctaText: string;
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

            <section>
              <h2 className="text-2xl md:text-3xl font-serif mb-6">Our Process / Key Activities</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start p-4 border rounded-lg bg-secondary/30">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm mr-4">{index + 1}</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

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
          <aside className="lg:col-span-1 space-y-8">
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

            <div>
              <Button size="lg" className="w-full" asChild>
                <Link href={service.ctaLink}>{service.ctaText}</Link>
              </Button>
            </div>

            <Button variant="outline" asChild>
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
