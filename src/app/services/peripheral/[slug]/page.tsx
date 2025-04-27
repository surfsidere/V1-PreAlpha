// src/app/services/peripheral/[slug]/page.tsx
// Removed 'use client' directive

import { Metadata } from 'next'; // Still useful for structure
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Placeholder data for peripheral services
// In a real app, fetch this from a CMS or database
const peripheralServiceData: { [key: string]: any } = {
  'due-diligence': {
    title: "Due Diligence",
    description: "We conduct thorough investigations to assess the viability and risks associated with potential real estate investments or development projects. Our process includes financial analysis, market research, legal review, and physical inspections to provide you with a comprehensive understanding before you commit.",
    relatedCoreServices: [
      { title: "Strategic Advisory", href: "/services/strategic-advisory" },
      { title: "Development Management", href: "/services/development-management" },
    ],
    icon: 'ClipboardCheck', // Placeholder icon name, actual icon rendered on overview page
  },
  'permitting-assistance': {
    title: "Permitting Assistance",
    description: "Navigating the complex web of local regulations and securing the necessary permits can be challenging. We streamline this process, leveraging our local expertise and relationships to manage applications, coordinate with authorities, and ensure your project stays on track.",
    relatedCoreServices: [
      { title: "Development Management", href: "/services/development-management" },
      { title: "Custom Home Creation", href: "/build-your-custom-home" },
    ],
    icon: 'FileText',
  },
   'fideicomiso-guidance': {
    title: "Fideicomiso Guidance",
    description: "Understanding and establishing a Fideicomiso (bank trust) is essential for foreign nationals owning property in restricted zones of Mexico. We guide you through the process, connecting you with trusted legal partners to ensure your ownership structure is secure and compliant.",
    relatedCoreServices: [
      { title: "Strategic Advisory", href: "/services/strategic-advisory" },
      { title: "Marketing & Sales", href: "/services/marketing-sales" },
      { title: "Custom Home Creation", href: "/build-your-custom-home" },
    ],
    icon: 'Landmark',
  },
  'property-management': {
    title: "Property Management",
    description: "Enjoy peace of mind knowing your Cabo property is expertly managed. Our services include routine maintenance, vendor coordination, financial reporting, and ensuring your asset is protected and maintained to the highest standards, whether for personal use or rental.",
    relatedCoreServices: [
       { title: "Marketing & Sales", href: "/services/marketing-sales" }, // As it often relates to rental income properties
    ],
    icon: 'Building',
  },
   'property-staging': {
    title: "Property Staging",
    description: "Present your property in its best light to attract buyers or renters. We coordinate professional staging services, from furniture selection to final touches, enhancing appeal and potentially increasing sale price or rental rates.",
    relatedCoreServices: [
       { title: "Marketing & Sales", href: "/services/marketing-sales" },
    ],
    icon: 'Paintbrush',
  },
  'vacation-rental-setup': {
    title: "Vacation Rental Setup",
    description: "Maximize the potential of your investment property. We assist with everything needed to launch a successful vacation rental, including furnishing guidance, photography, listing creation on relevant platforms, and establishing operational procedures.",
     relatedCoreServices: [
       { title: "Marketing & Sales", href: "/services/marketing-sales" },
       { title: "Property Management", href: "/services/peripheral/property-management" }, // Link to another peripheral service
    ],
    icon: 'KeyRound',
  },
  'bill-payment': {
    title: "Bill Payment",
    description: "Simplify the complexities of owning property abroad. We offer reliable bill payment services, ensuring utilities, HOA fees, property taxes, and other obligations are handled efficiently and on time.",
     relatedCoreServices: [
       { title: "Property Management", href: "/services/peripheral/property-management" },
    ],
    icon: 'HandCoins',
  },
  'concierge-services': {
    title: "Concierge Services",
    description: "Enhance your Cabo lifestyle with our bespoke concierge services. From transportation arrangements and restaurant reservations to activity bookings and personal errands, we cater to your needs, ensuring a seamless and enjoyable experience.",
    relatedCoreServices: [
       { title: "Custom Home Creation", href: "/build-your-custom-home" }, // Often desired by custom home clients
       { title: "Property Management", href: "/services/peripheral/property-management" },
    ],
    icon: 'ConciergeBell',
  },
   'hurricane-prep': {
    title: "Hurricane Preparedness",
    description: "Protect your valuable asset during storm season. We offer comprehensive hurricane preparedness services, including securing outdoor furniture, installing shutters, and performing post-storm inspections, providing peace of mind when you're away.",
    relatedCoreServices: [
       { title: "Property Management", href: "/services/peripheral/property-management" },
    ],
    icon: 'Wind',
  },
  // Add data for other peripheral services...
};

// Fetch data on the server
async function getPeripheralServiceData(slug: string) {
  // Simulate fetching data; replace with actual data fetching logic if needed
  return peripheralServiceData[slug] || null;
}

// Generate Metadata - Server Component feature
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await getPeripheralServiceData(params.slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} - Surfside Specialized Solutions`,
    description: `${service.description.substring(0, 160)}...`,
  };
}

// Page Component - Server Component
export default async function PeripheralServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await getPeripheralServiceData(params.slug);

  if (!service) {
    return <div className="container mx-auto px-4 py-24 text-center">Service not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="outline" size="sm" asChild>
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services Overview
          </Link>
        </Button>
      </div>

      {/* Service Header */}
      <header className="mb-8 md:mb-12 border-b pb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 leading-tight">
          {service.title}
        </h1>
        {/* Optional: Add icon here if desired */}
      </header>

      {/* Service Description */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif mb-4">What We Do</h2>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </section>

      {/* Related Core Services */}
      {service.relatedCoreServices && service.relatedCoreServices.length > 0 && (
        <section className="mb-10 border-t pt-8">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">Related Core Services</h2>
          <p className="text-sm text-muted-foreground mb-4">
            This specialized solution often complements our broader integrated service offerings:
          </p>
          <div className="flex flex-wrap gap-3">
            {service.relatedCoreServices.map((coreService: { title: string; href: string }) => (
              <Button key={coreService.href} variant="secondary" size="sm" asChild>
                <Link href={coreService.href}>
                  {coreService.title}
                </Link>
              </Button>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="text-center border-t pt-10">
         <h3 className="text-xl font-serif mb-4">Need assistance with {service.title}?</h3>
        <Button size="lg" asChild>
          <Link href={`/contact?inquiry=${params.slug.replace(/-/g, '_')}`}> {/* Updated inquiry param format */}
            Contact Us Today
          </Link>
        </Button>
      </section>
    </div>
  );
}

// Generate static paths for peripheral services - Server Component feature
export async function generateStaticParams() {
   const slugs = Object.keys(peripheralServiceData);
   return slugs.map((slug) => ({ slug }));
}
