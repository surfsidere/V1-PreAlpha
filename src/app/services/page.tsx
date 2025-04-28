// src/app/services/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Import necessary icons - ensure all are valid Lucide icons
import {
  ArrowRight, BarChart3, Home, Megaphone, Package, // Core icons (some reused/repurposed)
  Building, ConciergeBell, Landmark, UserCheck, Paintbrush, DraftingCompass // Level 2 Icons
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Level 1: Core Integrated Services
const coreServices = [
  {
    title: "real estate advisory",
    description: "Navigate the market with confidence through data-driven insights, feasibility studies, and bespoke investment strategies.",
    icon: BarChart3,
    href: "/services/strategic-advisory" // Assuming slug matches for detail page
  },
  {
    title: "Integrated Management Services", // Renamed from Development Management
    description: "Expert oversight of the entire project lifecycle, from conceptualization and entitlements to construction and delivery.",
    icon: Package, // Keeping Package icon for management
    href: "/services/development-management" // Keep slug for consistency? Or rename? Let's keep for now.
  },
  {
    title: "Marketing & Sales",
    description: "Targeted strategies and execution to connect premier properties with discerning buyers globally.",
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
    icon: Paintbrush,
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
      {/* Section 1: Core Integrated Services (Level 1) */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Core Integrated Services</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Providing end-to-end solutions for Cabo's premier real estate ventures and bespoke residences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {coreServices.map((service) => (
          <Card key={service.title} className="flex flex-col items-center text-center p-8 border rounded-lg transition-shadow duration-300 hover:shadow-lg h-full transform hover:-translate-y-1">
             <CardHeader className="items-center pb-4">
                 {/* Level 1 Icon: Large */}
                 <service.icon className="w-12 h-12 mb-4 text-primary" />
                 {/* Level 1 Title: Prominent */}
                 <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
             </CardHeader>
             <CardContent className="flex-grow">
                {/* Level 1 Description */}
                <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
             </CardContent>
             {/* Level 1 CTA */}
             <Button variant="outline" size="sm" asChild className="mt-auto">
                <Link href={service.href}>
                 Explore Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </Card>
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
