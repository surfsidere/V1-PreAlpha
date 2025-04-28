
'use client'; // Keep client directive for potential future client interactions or hooks

import { Metadata } from 'next'; // Keep for type checking, but generation happens server-side
import { ServiceDetailClient } from '@/components/services/service-detail-client'; // Import the client component

// Placeholder data fetching function - This part *conceptually* runs server-side
// but since the whole file is 'use client', it executes on the client.
// Ideally, data fetching should be server-side for RSC benefits.
// This structure works, but isn't optimal for App Router.
async function getServiceData(slug: string) {
   const services = [
    {
      slug: "strategic-advisory",
      title: "Strategic Real Estate Advisory", // Updated Title
      heroImage: "https://picsum.photos/seed/service1/1200/500",
      description: "Navigate Cabo's complex market with confidence. Our strategic advisory services provide data-driven insights, comprehensive feasibility studies, and bespoke investment strategies tailored to your objectives.",
      level3Tasks: [ // Added L3 tasks
        { title: "In-depth Market Analysis & Research" },
        { title: "Comprehensive Feasibility Studies" },
        { title: "Financial Modeling & Risk Assessment" },
        { title: "Highest & Best Use Analysis" },
        { title: "Tailored Investment Strategy Development" },
        { title: "Partnership & Capital Structure Advisory" },
        { title: "Thorough Due Diligence Support" },
      ],
      // 'process' field removed as L3 tasks cover specifics
      benefits: ["Informed Decision Making", "Risk Mitigation", "Optimized Returns", "Market Advantage", "Strategic Clarity"],
      applications: ["Developers", "Investors", "Family Offices", "Land Owners", "Funds"],
      relevantProjects: [
         { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/400/300", slug: "/portfolio/coastal-community" },
         { id: 3, title: "Luxury Boutique Hotel", image: "https://picsum.photos/seed/project3/400/300", slug: "/portfolio/luxury-boutique-hotel" },
      ],
      ctaLink: "/contact?inquiry=strategic_advisory",
      ctaText: "Discuss Your Strategic Needs",
    },
     {
      slug: "development-management",
      title: "Integrated Management Services", // Updated Title
      heroImage: "https://picsum.photos/seed/service2/1200/500",
      description: "From vision to reality, Surfside provides expert oversight across the entire development lifecycle. We ensure meticulous planning, execution, and delivery, managing complexity and maximizing value.",
      level3Tasks: [ // Added L3 tasks
        { title: "Conceptualization & Master Planning" },
        { title: "Budgeting & Financial Oversight" },
        { title: "Entitlements & Permitting Strategy" },
        { title: "Design Team Selection & Coordination" },
        { title: "Architectural & Engineering Management" },
        { title: "Construction Bidding & Contract Negotiation" },
        { title: "Construction Oversight & Quality Control" },
        { title: "Project Scheduling & Milestone Tracking" },
        { title: "Value Engineering & Cost Management" },
        { title: "Project Closeout & Handover Procedures" },
      ],
      // 'process' field removed
      benefits: ["Streamlined Execution", "Budget & Schedule Control", "Quality Assurance", "Stakeholder Alignment", "Reduced Complexity"],
      applications: ["Hospitality Projects", "Residential Communities", "Complex Custom Homes", "Commercial Developments", "Resort Amenities"],
       relevantProjects: [
         { id: 1, title: "Oceanfront Villa", image: "https://picsum.photos/seed/project1/400/300", slug: "/portfolio/oceanfront-villa" },
         { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/400/300", slug: "/portfolio/coastal-community" },
         { id: 5, title: "Marina Residences", image: "https://picsum.photos/seed/project5/400/300", slug: "/portfolio/marina-residences" },
      ],
      ctaLink: "/contact?inquiry=development_management",
      ctaText: "Manage Your Project", // Shortened CTA
    },
    {
      slug: "marketing-sales",
      title: "Marketing & Sales",
      heroImage: "https://picsum.photos/seed/service3/1200/500",
      description: "Connecting premier Cabo properties with discerning global buyers through targeted, sophisticated marketing strategies and expert sales execution.",
       level3Tasks: [ // Added L3 tasks
        { title: "Property Branding & Market Positioning" },
        { title: "Development of Marketing Collateral (Brochures, Websites)" },
        { title: "High-End Photography & Videography Coordination" },
        { title: "Targeted Digital Marketing Campaigns (SEO, SEM, Social)" },
        { title: "Public Relations & Media Outreach Strategy" },
        { title: "Sales Strategy Development & Pricing Analysis" },
        { title: "Broker Network Management & Engagement" },
        { title: "Lead Generation & Qualification Systems" },
        { title: "Sales Process Management & Closing Coordination" },
        { title: "Event Marketing & Open House Coordination" },
        { title: "Property Staging Consultation" }, // Example L3 task
        { title: "Vacation Rental Market Analysis & Setup" }, // Example L3 task
      ],
      // 'process' field removed
       benefits: ["Accelerated Sales Velocity", "Premium Brand Perception", "Global Reach", "Targeted Buyer Acquisition", "Data-Driven Campaigns"],
      applications: ["Luxury Residential Developments", "Resort Properties", "Exclusive Villas & Estates", "Fractional Ownership Projects"],
       relevantProjects: [
        { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/400/300", slug: "/portfolio/coastal-community" },
        { id: 5, title: "Marina Residences", image: "https://picsum.photos/seed/project5/400/300", slug: "/portfolio/marina-residences" },
      ],
      ctaLink: "/contact?inquiry=marketing_sales",
      ctaText: "Elevate Your Property Marketing",
    },
     // Custom Home Project Management maps to the /build-your-custom-home page, so no detail page needed here.
    // Add other *core* services detail data if applicable
  ];
  const service = services.find(s => s.slug === slug);
  return service || null;
}

// NOTE: Metadata generation (`generateMetadata`) and static path generation (`generateStaticParams`)
// are SERVER-SIDE features. When a file has 'use client', these functions might behave unexpectedly
// or cause errors in some Next.js versions or configurations.
// The IDEAL App Router approach is to keep this page a Server Component, fetch data here,
// and pass it to a *separate* client component (`ServiceDetailClient`) for rendering.
// However, modifying the existing structure as minimally as possible while fixing errors.

// Generate Metadata - This part *should* ideally run server-side.
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const service = await getServiceData(params.slug); // Fetch data server-side
//   if (!service) {
//     return { title: "Service Not Found" };
//   }
//   return {
//     title: `${service.title} - Surfside Services`,
//     description: service.description.substring(0, 160) + '...',
//   };
// }


// The main page component remains marked as 'use client'
// It fetches data (client-side in this setup) and passes it to the Client Component
export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await getServiceData(params.slug);

  if (!service) {
    // Consider adding a more robust not-found handling, e.g., using Next.js notFound()
    return <div className="container mx-auto px-4 py-24 text-center">Service not found.</div>;
  }

  // Render the Client Component and pass the fetched data as props
  return <ServiceDetailClient service={service} />;
}

// Generate static paths - This *should* ideally run server-side.
// export async function generateStaticParams() {
//   const services = [
//     { slug: "strategic-advisory" },
//     { slug: "development-management" },
//     { slug: "marketing-sales" },
//     // Add slugs for all CORE services that have detail pages
//   ];

//   return services.map((service) => ({
//     slug: service.slug,
//   }));
// }

// Because the page is 'use client', generateStaticParams might not work as expected
// or could cause build errors. For now, it's commented out to resolve potential conflicts.
// If static generation is crucial, refactor data fetching to be server-side.
