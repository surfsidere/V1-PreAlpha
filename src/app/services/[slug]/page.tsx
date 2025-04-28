


// Remove 'use client' directive - This is now a Server Component
// import { Metadata } from 'next'; // Keep for type checking
import { ServiceDetailClient } from '@/components/services/service-detail-client'; // Import the client component
import { notFound } from 'next/navigation'; // Import notFound for better 404 handling

// Define Level 3 Task structure
interface Level3Task {
  title: string;
}

// Define the type for the service data prop
interface Service {
  slug: string;
  title: string;
  heroImage: string;
  description: string;
  level3Tasks?: Level3Task[]; // Added Level 3 tasks array (optional)
  benefits: string[];
  applications: string[];
  relevantProjects?: { id: number; title: string; image: string; slug: string }[];
  ctaLink: string;
  ctaText: string;
}


// Placeholder data fetching function - runs server-side
async function getServiceData(slug: string): Promise<Service | null> {
   const services = [
    {
      slug: "strategic-advisory",
      title: "Real Estate Advisory", // Corrected casing
      heroImage: "https://picsum.photos/seed/service1/1200/500",
      description: "Navigate Cabo's complex market with confidence. Our strategic advisory services provide data-driven insights, comprehensive feasibility studies, and bespoke investment strategies tailored to your objectives.",
      level3Tasks: [
        { title: "In-depth Market Analysis & Research" },
        { title: "Comprehensive Feasibility Studies" },
        { title: "Financial Modeling & Risk Assessment" },
        { title: "Highest & Best Use Analysis" },
        { title: "Tailored Investment Strategy Development" },
        { title: "Partnership & Capital Structure Advisory" },
        { title: "Due Diligence Reports & Analysis" }, // Added
        { title: "Land Planning" }, // Added
        { title: "Development Advisory" }, // Added
        { title: "Thorough Due Diligence Support" }, // Existing moved down
      ],
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
      slug: "development-management", // Slug kept for consistency
      title: "Integrated Management Services", // Updated Title
      heroImage: "https://picsum.photos/seed/service2/1200/500",
      description: "From vision to reality, Surfside provides expert oversight across the entire development lifecycle. We ensure meticulous planning, execution, and delivery, managing complexity and maximizing value.",
      level3Tasks: [
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
      benefits: ["Streamlined Execution", "Budget & Schedule Control", "Quality Assurance", "Stakeholder Alignment", "Reduced Complexity"],
      applications: ["Hospitality Projects", "Residential Communities", "Complex Custom Homes", "Commercial Developments", "Resort Amenities"],
       relevantProjects: [
         { id: 1, title: "Oceanfront Villa", image: "https://picsum.photos/seed/project1/400/300", slug: "/portfolio/oceanfront-villa" },
         { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/400/300", slug: "/portfolio/coastal-community" },
         { id: 5, title: "Marina Residences", image: "https://picsum.photos/seed/project5/400/300", slug: "/portfolio/marina-residences" },
      ],
      ctaLink: "/contact?inquiry=development_management",
      ctaText: "Manage Your Project",
    },
    {
      slug: "marketing-sales",
      title: "Marketing & Sales",
      heroImage: "https://picsum.photos/seed/service3/1200/500",
      description: "Connecting premier Cabo properties with discerning global buyers through targeted, sophisticated marketing strategies and expert sales execution.",
       level3Tasks: [
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
        { title: "Property Staging Consultation" },
        { title: "Vacation Rental Market Analysis & Setup" },
      ],
       benefits: ["Accelerated Sales Velocity", "Premium Brand Perception", "Global Reach", "Targeted Buyer Acquisition", "Data-Driven Campaigns"],
      applications: ["Luxury Residential Developments", "Resort Properties", "Exclusive Villas & Estates", "Fractional Ownership Projects"],
       relevantProjects: [
        { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/400/300", slug: "/portfolio/coastal-community" },
        { id: 5, title: "Marina Residences", image: "https://picsum.photos/seed/project5/400/300", slug: "/portfolio/marina-residences" },
      ],
      ctaLink: "/contact?inquiry=marketing_sales",
      ctaText: "Elevate Your Property Marketing",
    },
     // Custom Home Project Management maps to the /build-your-custom-home page, no detail page here.
  ];
  const service = services.find(s => s.slug === slug);
  return service || null;
}

// Generate Metadata - Now runs correctly on the server
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = await getServiceData(params.slug); // Fetch data server-side
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} - Surfside Services`,
    description: service.description.substring(0, 160) + '...',
  };
}


// The main page component remains async, but is now a Server Component
export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await getServiceData(params.slug);

  if (!service) {
     notFound(); // Use Next.js notFound for proper 404 handling
  }

  // Render the Client Component and pass the fetched data as props
  return <ServiceDetailClient service={service} />;
}

// Generate static paths - Now runs correctly on the server
export async function generateStaticParams() {
  const services = [
    { slug: "strategic-advisory" },
    { slug: "development-management" }, // Renamed title, slug might stay or change
    { slug: "marketing-sales" },
    // NOTE: Custom Home Creation links to a dedicated page, so no detail page/slug needed here.
  ];

  return services.map((service) => ({
    slug: service.slug,
  }));
}


