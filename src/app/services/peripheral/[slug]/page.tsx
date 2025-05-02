

// Remove 'use client' and async - Make it a standard Server Component
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ClipboardCheck, FileText, HandCoins, Wind, Handshake, Building, Sailboat, Landmark, UserCheck, Paintbrush, DraftingCompass } from 'lucide-react'; // Added Sailboat, removed ConciergeBell
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation'; // Import notFound

// Define Level 3 Task structure
interface Level3Task {
  title: string;
}

// Define Core Service Link structure
interface CoreServiceLink {
    title: string;
    href: string;
}

// Update data structure for peripheral services
interface PeripheralServiceData {
  title: string;
  description: string;
  level3Tasks?: Level3Task[];
  relatedCoreServices?: CoreServiceLink[];
  icon?: string; // Keep icon name if needed for future use, but not rendered here
}

// Keep data definition accessible to server-side functions
const peripheralServiceData: { [key: string]: PeripheralServiceData } = {
  'property-management': {
    title: "Comprehensive Property Management",
    description: "Enjoy peace of mind knowing your Cabo property is expertly managed. Our services cover maintenance, vendor coordination, financial reporting, and ensuring your asset is protected and maintained to the highest standards, whether for personal use or rental.",
    level3Tasks: [
        { title: "Routine Maintenance & Inspections" },
        { title: "Vendor Management & Supervision" },
        { title: "Transparent Financial Reporting & Accounting" },
        { title: "Utility Bill Payment (CFE, Water, HOA, Trust Fees)" },
        { title: "Housekeeping & Staffing Coordination" },
        { title: "Security System Monitoring & Liaison" },
        { title: "Hurricane Preparedness Checks & Action Plans" },
        { title: "Home Insurance Policy Coordination" },
        { title: "Rental Income Management (if applicable)" },
    ],
    relatedCoreServices: [
       { title: "Marketing & Sales", href: "/services/marketing-sales" },
       { title: "Development Coordination & Oversight", href: "/build-your-custom-home" }, // Consistent title
    ],
    icon: 'Building',
  },
  'concierge-services': {
    title: "Concierge & Lifestyle Services",
    description: "Enhance your Cabo lifestyle with our bespoke concierge services. From transportation arrangements and restaurant reservations to activity bookings and personal errands, we cater to your needs, ensuring a seamless and enjoyable experience.",
    level3Tasks: [
        { title: "Airport Transfers & Ground Transportation" },
        { title: "Restaurant Reservations & Recommendations" },
        { title: "Activity & Tour Bookings (Fishing, Golf, Spa)" },
        { title: "Private Chef & Catering Coordination" },
        { title: "Vehicle Management & Luxury Rentals" },
        { title: "Pre-Arrival & Ongoing Grocery Stocking" },
        { title: "Personal Errands & Assistance" },
        { title: "Event Planning Support" },
    ],
    relatedCoreServices: [
       { title: "Development Coordination & Oversight", href: "/build-your-custom-home" }, // Consistent title
       { title: "Comprehensive Property Management", href: "/services/peripheral/property-management" },
    ],
    icon: 'Sailboat', // Changed from ConciergeBell
  },
  'fideicomiso-guidance': {
    title: "Legal & Trust Structure Guidance",
    description: "Understanding and establishing a Fideicomiso (bank trust) is essential for foreign nationals owning property in restricted zones of Mexico. We provide clarity and connect you with trusted legal partners to ensure your ownership structure is secure, compliant, and optimized.",
     level3Tasks: [
        { title: "Fideicomiso Setup & Coordination" },
        { title: "Introduction to Qualified Legal Counsel" },
        { title: "Explanation of Ownership Structures" },
        { title: "Review of Trust Documents (with Counsel)" },
        { title: "Coordination of Notary Services" },
        { title: "Guidance on Annual Trust Fees & Compliance" },
    ],
    relatedCoreServices: [
      { title: "Real Estate Advisory", href: "/services/strategic-advisory" }, // Corrected Casing
      { title: "Marketing & Sales", href: "/services/marketing-sales" },
      { title: "Development Coordination & Oversight", href: "/build-your-custom-home" }, // Consistent title
    ],
    icon: 'Landmark',
  },
   'owners-representation': {
    title: "Owner's Representation",
    description: "Acting as your dedicated advocate, we oversee complex projects on your behalf, ensuring your interests are prioritized, communication is clear, and project goals for quality, budget, and schedule are met.",
    level3Tasks: [
        { title: "Project Oversight & Monitoring" },
        { title: "Budget & Schedule Adherence Management" },
        { title: "Contractor & Vendor Liaison" },
        { title: "Quality Control Assurance" },
        { title: "Stakeholder Communication & Reporting" },
        { title: "Change Order Management & Negotiation" },
        { title: "Risk Identification & Mitigation" },
    ],
    relatedCoreServices: [
      { title: "Integrated Management Services", href: "/services/development-management" },
      { title: "Development Coordination & Oversight", href: "/build-your-custom-home" }, // Consistent title
      { title: "Real Estate Advisory", href: "/services/strategic-advisory" }, // Corrected Casing
    ],
    icon: 'UserCheck',
  },
   'interior-design': {
    title: "Interior Design & Furnishing Packages",
    description: "Transform your property into a stunning, functional space. We collaborate with talented designers or manage the process directly to deliver curated interior design concepts, furniture procurement, and complete turnkey installation.",
     level3Tasks: [
        { title: "Interior Design Concept Development" },
        { title: "Space Planning & Furniture Layouts" },
        { title: "Material & Finish Selection" },
        { title: "Furniture, Fixtures & Equipment (FF&E) Sourcing" },
        { title: "Custom Millwork & Cabinetry Design" },
        { title: "Art Curation & Acquisition" },
        { title: "Turnkey Furnishing & Installation Management" },
        { title: "Property Staging for Sale or Rent" },
    ],
    relatedCoreServices: [
      { title: "Development Coordination & Oversight", href: "/build-your-custom-home" }, // Consistent title
      { title: "Marketing & Sales", href: "/services/marketing-sales" },
      { title: "Integrated Management Services", href: "/services/development-management" },
    ],
    icon: 'Paintbrush',
  },
   'design-coordination': {
    title: "Architectural & Design Coordination",
    description: "We act as the crucial bridge between your vision, the architects, engineers, and other consultants, ensuring seamless communication, adherence to design intent, and integration of all technical aspects throughout the project.",
    level3Tasks: [
        { title: "Architect & Consultant Selection Assistance" },
        { title: "Design Brief Development & Review" },
        { title: "Coordination of Design Disciplines (Arch, Struct, MEP)" },
        { title: "Design Drawing Review & Value Engineering Input" },
        { title: "Material & Specification Alignment" },
        { title: "Ensuring Design Compliance with Budget & Schedule" },
        { title: "Facilitation of Design Meetings & Workshops" },
        { title: "Landscape Design Coordination" },
        { title: "Smart Home & Technology Integration Planning" },
    ],
    relatedCoreServices: [
      { title: "Integrated Management Services", href: "/services/development-management" },
      { title: "Development Coordination & Oversight", href: "/build-your-custom-home" }, // Consistent title
       { title: "Owner's Representation", href: "/services/peripheral/owners-representation" },
    ],
    icon: 'DraftingCompass',
  },
  'due-diligence': {
    title: "Due Diligence",
    description: "Thorough investigation to assess viability and risks of potential real estate investments or projects, covering financial, legal, market, and physical aspects.",
    level3Tasks: [
        { title: "Financial Viability Analysis" },
        { title: "Market & Competitor Research" },
        { title: "Legal & Title Review Coordination" },
        { title: "Physical Site Inspection & Assessment" },
        { title: "Environmental Impact Assessment (EIA) Review" },
        { title: "Zoning & Entitlement Verification" },
    ],
    relatedCoreServices: [
      { title: "Real Estate Advisory", href: "/services/strategic-advisory" }, // Corrected Casing
      { title: "Integrated Management Services", href: "/services/development-management" },
    ],
    icon: 'ClipboardCheck',
  },
   'permitting-assistance': {
    title: "Permitting Assistance",
    description: "Streamlining the complex process of securing necessary permits and approvals by leveraging local expertise and relationships with authorities.",
     level3Tasks: [
        { title: "Permit Application Preparation & Submission" },
        { title: "Coordination with Municipal & Federal Agencies" },
        { title: "Regulatory Compliance Monitoring" },
        { title: "Permit Expediting Strategies" },
        { title: "Management of Required Studies & Reports" },
    ],
    relatedCoreServices: [
      { title: "Integrated Management Services", href: "/services/development-management" },
      { title: "Development Coordination & Oversight", href: "/build-your-custom-home" }, // Consistent title
       { title: "Legal & Trust Structure Guidance", href: "/services/peripheral/fideicomiso-guidance" },
    ],
    icon: 'FileText',
  },
   'bill-payment': {
    title: "Bill Payment Services",
    description: "Reliable management of property-related expenses, ensuring timely payment of utilities, HOA fees, property taxes, trust fees, and other obligations.",
     level3Tasks: [
        { title: "Utility Account Management (CFE, Water)" },
        { title: "HOA Fee Payment & Liaison" },
        { title: "Annual Property Tax (Predial) Payment" },
        { title: "Fideicomiso (Trust) Fee Payment" },
        { title: "Vendor Invoice Processing" },
        { title: "Consolidated Expense Reporting" },
    ],
    relatedCoreServices: [
       { title: "Comprehensive Property Management", href: "/services/peripheral/property-management" },
    ],
    icon: 'HandCoins',
   },
   'hurricane-prep': {
    title: "Hurricane Preparedness",
    description: "Protecting your valuable asset during storm season with comprehensive preparation services, including securing property and post-storm inspections.",
     level3Tasks: [
        { title: "Pre-Storm Property Securing (Furniture, Shutters)" },
        { title: "Inventory Documentation (Photo/Video)" },
        { title: "Coordination of Protective Measures (e.g., boarding)" },
        { title: "Post-Storm Inspection & Damage Assessment" },
        { title: "Insurance Claim Assistance Coordination" },
    ],
    relatedCoreServices: [
       { title: "Comprehensive Property Management", href: "/services/peripheral/property-management" },
    ],
    icon: 'Wind',
   },
     // Add other L2/peripheral services data...
};

// Fetch data - can be async now
async function getPeripheralServiceData(slug: string): Promise<PeripheralServiceData | null> {
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

// Page Component - Now a standard Server Component
export default async function PeripheralServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await getPeripheralServiceData(params.slug);

  if (!service) {
    notFound(); // Use Next.js notFound for 404
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
        {/* L2 Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 leading-tight">
          {service.title}
        </h1>
      </header>

      {/* Service Description */}
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif mb-4">What We Offer</h2>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </section>

       {/* Level 3 Specific Tasks */}
       {service.level3Tasks && service.level3Tasks.length > 0 && (
        <section className="mb-10 border-t pt-8">
           <h2 className="text-2xl md:text-3xl font-serif mb-6">Specific Services Include:</h2>
           {/* Level 3 Styling: List format */}
           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
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


      {/* Related Core Services (Links back to Level 1) */}
      {service.relatedCoreServices && service.relatedCoreServices.length > 0 && (
        <section className="mb-10 border-t pt-8">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">Part of Our Integrated Approach</h2>
          <p className="text-sm text-muted-foreground mb-4">
            This specialized solution often supports or integrates with our core service pillars:
          </p>
          <div className="flex flex-wrap gap-3">
            {service.relatedCoreServices.map((coreService) => (
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
           {/* Ensure inquiry param matches the slug format */}
           <Link href={`/contact?inquiry=${params.slug.replace(/-/g, '_')}`}>
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
