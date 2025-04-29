
// src/app/services/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Import necessary icons - ensure all are valid Lucide icons
import {
  ArrowRight, BarChart3, Home, Megaphone, Package, // Core icons
  Building, ConciergeBell, Landmark, UserCheck, Paintbrush, DraftingCompass // Level 2 Icons
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Level 1: Core Integrated Services
const coreServices = [
  {
    title: "Real Estate Advisory", // Corrected Casing
    description: "Market analysis, feasibility, investment strategy.",
    icon: BarChart3,
    href: "/services/strategic-advisory" // Assuming slug matches for detail page
  },
  {
    title: "Integrated Management Services", // Renamed from Development Management
    description: "Full lifecycle project oversight and management.",
    icon: Package, // Keeping Package icon for management
    href: "/services/development-management" // Keep slug for consistency? Or rename? Let's keep for now.
  },
  {
    title: "Marketing & Sales",
    description: "Targeted strategies for premier properties.",
    icon: Megaphone,
    href: "/services/marketing-sales"
  },
    {
    title: "Estate Development Coordination", // Updated title
    description: "Personalized guidance and meticulous project management for crafting your exceptional residence in Cabo.",
    icon: Home,
    href: "/build-your-custom-home" // Links to the specific landing page
  },
];

// Level 2: Key Support Areas
const keySupportAreas = [
   {
    title: "Comprehensive Property Management",
    icon: Building,
    href: "/services/peripheral/property-management", // Using peripheral structure for detail pages
    tagline: "Asset protection & peace of mind." // Optional short tagline
  },
   {
    title: "Concierge & Lifestyle Services",
    icon: ConciergeBell,
    href: "/services/peripheral/concierge-services",
    tagline: "Bespoke support for your Cabo life."
  },
   {
    title: "Legal & Trust Structure Guidance", // Fideicomiso
    icon: Landmark, // Using Landmark for structures/trusts
    href: "/services/peripheral/fideicomiso-guidance",
    tagline: "Secure ownership & compliance."
  },
   {
    title: "Owner's Representation",
    icon: UserCheck, // Represents client advocacy
    href: "/services/peripheral/owners-representation", // Need to create this page/data
    tagline: "Your interests, expertly managed."
  },
  {
    title: "Interior Design & Furnishing",
    icon: Paintbrush, // Corrected import name
    href: "/services/peripheral/interior-design", // Need to create this page/data
    tagline: "Curated spaces, turnkey solutions."
  },
  {
    title: "Architectural & Design Coordination",
    icon: DraftingCompass,
    href: "/services/peripheral/design-coordination", // Need to create this page/data
    tagline: "Bridging vision and execution."
  },
];


export default function ServicesOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Section 1: Core Integrated Services (Level 1) - Matching Homepage Style */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Core Integrated Services</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Providing end-to-end solutions for Cabo's premier real estate ventures and bespoke residences.
        </p>
      </div>

       {/* Updated grid layout to match homepage capabilities section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {coreServices.map((service) => (
          // Use simple div structure, remove Card components
          <div key={service.title} className="text-center p-6 rounded-lg border border-transparent hover:border-border hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-start">
            <service.icon className="mx-auto mb-4 text-primary w-10 h-10" /> {/* Ensure consistent icon size */}
            <h3 className="text-xl font-serif mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
            <Button variant="link" size="sm" asChild className="p-0 h-auto mt-auto self-center">
                <Link href={service.href}>Learn More <ArrowRight className="ml-1 h-3 w-3" /></Link>
            </Button>
          </div>
        ))}
      </div>


      <Separator className="my-16 md:my-24" />

      {/* Section 2: Key Support Areas (Level 2) */}
       <div className="text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-serif mb-4">Key Support Services</h2>
         <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
           Complementary expertise ensuring every detail is managed seamlessly.
         </p>
       </div>

       {/* Level 2 Grid: Using Card component but with adjusted styling for subordination */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {keySupportAreas.map((service) => (
           <Link href={service.href} key={service.title} className="block group h-full">
             <Card className={cn(
                "text-center p-6 border rounded-lg transition-all duration-300 h-full flex flex-col items-center justify-center", // Ensure content centers vertically
                "hover:shadow-md hover:border-primary/50 hover:-translate-y-1 bg-secondary/30" // Subtle hover and background
             )}>
                <CardContent className="p-0 flex flex-col items-center justify-center">
                     {/* Level 2 Icon: Medium */}
                     <service.icon className="w-10 h-10 mb-4 text-primary/80 group-hover:text-primary transition-colors" />
                     {/* Level 2 Title: Less prominent than L1 */}
                     <p className="text-lg font-serif font-medium text-foreground leading-tight mb-1">{service.title}</p>
                     {/* Level 2 Tagline: Optional, small */}
                     {service.tagline && (
                         <p className="text-xs text-muted-foreground">{service.tagline}</p>
                     )}
                </CardContent>
             </Card>
           </Link>
         ))}
       </div>

        {/* Optional: Add a CTA to contact about any service */}
         <div className="text-center mt-16">
             <Button asChild size="lg">
                <Link href="/contact">Inquire About Our Services</Link>
             </Button>
         </div>

    </div>
  );
}
