// src/app/services/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Import necessary icons - ensure all are valid
import {
  ArrowRight, BarChart3, Home, Megaphone, Package, // Existing core icons
  FileText, Building, HandCoins, Paintbrush, // Make sure Paintbrush is correct casing
  ClipboardCheck, KeyRound, ConciergeBell, Landmark, Wind // New peripheral icons
} from 'lucide-react';
import { Separator } from '@/components/ui/separator'; // Import Separator
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Use Card for consistency
import { cn } from '@/lib/utils'; // Import cn for conditional classes

// Core services remain the same
const coreServices = [
  {
    title: "Strategic Advisory",
    description: "Navigate the market with confidence through data-driven insights, feasibility studies, and bespoke investment strategies.",
    icon: BarChart3, // Use direct component reference
    href: "/services/strategic-advisory"
  },
  {
    title: "Development Management",
    description: "Expert oversight of the entire development lifecycle, from conceptualization and entitlements to construction and delivery.",
     icon: Package, // Use direct component reference
    href: "/services/development-management"
  },
  {
    title: "Marketing & Sales",
    description: "Targeted strategies and execution to connect premier properties with discerning buyers globally.",
    icon: Megaphone, // Use direct component reference
    href: "/services/marketing-sales"
  },
    {
    title: "Custom Home Creation",
    description: "Personalized guidance and meticulous project management for crafting your exceptional residence in Cabo.",
     icon: Home, // Use direct component reference
    href: "/build-your-custom-home" // Links to the specific landing page
  },
];

// New Peripheral Services array
const peripheralServices = [
  {
    title: "Due Diligence",
    icon: ClipboardCheck,
    href: "/services/peripheral/due-diligence", // Example link structure
    // tagline: "Thorough project vetting." // Optional tagline
  },
  {
    title: "Permitting Assistance",
    icon: FileText,
    href: "/services/peripheral/permitting-assistance",
    // tagline: "Navigating local regulations."
  },
   {
    title: "Fideicomiso Guidance",
    icon: Landmark,
    href: "/services/peripheral/fideicomiso-guidance",
    // tagline: "Secure foreign ownership."
  },
   {
    title: "Property Management",
    icon: Building,
    href: "/services/peripheral/property-management",
    // tagline: "Hassle-free ownership."
  },
  {
    title: "Property Staging",
    icon: Paintbrush, // Corrected casing
    href: "/services/peripheral/property-staging",
    // tagline: "Maximize buyer appeal."
  },

  {
    title: "Vacation Rental Setup",
    icon: KeyRound,
    href: "/services/peripheral/vacation-rental-setup",
    // tagline: "Optimize rental income."
  },
  {
    title: "Bill Payment",
    icon: HandCoins,
    href: "/services/peripheral/bill-payment",
    // tagline: "Simplify property expenses."
  },
  {
    title: "Concierge Services",
    icon: ConciergeBell,
    href: "/services/peripheral/concierge-services",
    // tagline: "Bespoke lifestyle support."
  },
  {
    title: "Hurricane Prep",
    icon: Wind,
    href: "/services/peripheral/hurricane-prep",
    // tagline: "Protect your investment."
  }
];


export default function ServicesOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Section 1: Core Integrated Services */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Integrated Services</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Leveraging deep expertise across the real estate spectrum to deliver comprehensive solutions and exceptional value in Los Cabos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {coreServices.map((service) => (
          <Card key={service.title} className="flex flex-col items-center text-center p-8 border rounded-lg transition-shadow duration-300 hover:shadow-lg h-full">
             <CardHeader className="items-center pb-4">
                 <service.icon className="w-12 h-12 mb-1 text-primary" />
                 <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
             </CardHeader>
             <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
             </CardContent>
             <Button variant="outline" size="sm" asChild className="mt-auto">
                <Link href={service.href}>
                 Explore Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </Card>
        ))}
      </div>

      <Separator className="my-16" />

      {/* Section 2: Peripheral / Specialized Services */}
       <div className="text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-serif mb-4">Specialized Solutions</h2>
         <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
           Handling the essential details to ensure a seamless experience from start to finish.
         </p>
       </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
         {peripheralServices.map((service) => (
           <Link href={service.href} key={service.title} className="block group">
             <Card className={cn(
                "text-center p-4 border rounded-lg transition-all duration-300 h-full",
                "hover:shadow-md hover:border-primary/50 hover:-translate-y-1" // Subtle hover effect
             )}>
                <CardContent className="p-2 flex flex-col items-center justify-center">
                     <service.icon className="w-8 h-8 mb-3 text-primary/80 group-hover:text-primary transition-colors" />
                     <p className="text-sm font-medium text-foreground leading-tight">{service.title}</p>
                     {/* Optional Tagline Display
                     {service.tagline && (
                         <p className="text-xs text-muted-foreground mt-1">{service.tagline}</p>
                     )}
                     */}
                </CardContent>
             </Card>
           </Link>
         ))}
       </div>

    </div>
  );
}
