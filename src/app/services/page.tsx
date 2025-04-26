// src/app/services/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const coreServices = [
  {
    title: "Strategic Advisory",
    description: "Navigate the market with confidence through data-driven insights, feasibility studies, and bespoke investment strategies.",
    icon: (props: React.SVGProps<SVGSVGElement>) => ( // Bespoke Icon Placeholder 1
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
    ),
    href: "/services/strategic-advisory"
  },
  {
    title: "Development Management",
    description: "Expert oversight of the entire development lifecycle, from conceptualization and entitlements to construction and delivery.",
     icon: (props: React.SVGProps<SVGSVGElement>) => ( // Bespoke Icon Placeholder 2
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
    ),
    href: "/services/development-management"
  },
  {
    title: "Marketing & Sales",
    description: "Targeted strategies and execution to connect premier properties with discerning buyers globally.",
    icon: (props: React.SVGProps<SVGSVGElement>) => ( // Bespoke Icon Placeholder 3
       <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
    ),
    href: "/services/marketing-sales"
  },
    {
    title: "Custom Home Creation",
    description: "Personalized guidance and meticulous project management for crafting your exceptional residence in Cabo.",
     icon: (props: React.SVGProps<SVGSVGElement>) => ( // Bespoke Icon Placeholder 4
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    href: "/build-your-custom-home" // Links to the specific landing page
  },
];

export default function ServicesOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Integrated Services</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Leveraging deep expertise across the real estate spectrum to deliver comprehensive solutions and exceptional value in Los Cabos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coreServices.map((service) => (
          <div key={service.title} className="flex flex-col items-center text-center p-8 border rounded-lg transition-shadow duration-300 hover:shadow-lg">
            <service.icon className="w-12 h-12 mb-5 text-primary" />
            <h2 className="text-2xl font-serif mb-3">{service.title}</h2>
            <p className="text-muted-foreground text-sm mb-6 flex-grow">{service.description}</p>
            <Button variant="outline" size="sm" asChild className="mt-auto">
              <Link href={service.href}>
                Explore Service <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
