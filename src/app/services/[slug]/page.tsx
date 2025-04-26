
// src/app/services/[slug]/page.tsx
import { Metadata } from 'next';
import { ServiceDetailClient } from '@/components/services/service-detail-client'; // Import the client component

// Placeholder data fetching function - remains server-side
async function getServiceData(slug: string) {
   const services = [
    {
      slug: "strategic-advisory",
      title: "Strategic Advisory",
      heroImage: "https://picsum.photos/seed/service1/1200/500",
      description: "Navigate Cabo's complex market with confidence. Our strategic advisory services provide data-driven insights, comprehensive feasibility studies, and bespoke investment strategies tailored to your objectives.",
      process: [
        { title: "Market Analysis & Research", detail: "Deep dives into market trends, competitor analysis, and identifying untapped opportunities." },
        { title: "Feasibility Studies", detail: "Rigorous assessment of project viability, including financial modeling and risk analysis." },
        { title: "Highest & Best Use Analysis", detail: "Determining the optimal strategy for land or asset maximization." },
        { title: "Investment Strategy & Structuring", detail: "Crafting tailored investment approaches and partnership structures." },
        { title: "Due Diligence Support", detail: "Comprehensive support during the acquisition and investment process." },
      ],
      benefits: ["Informed Decision Making", "Risk Mitigation", "Optimized Returns", "Market Advantage"],
      applications: ["Developers", "Investors", "Family Offices", "Land Owners"],
      relevantProjects: [
         { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/400/300", slug: "/portfolio/coastal-community" },
         { id: 3, title: "Luxury Boutique Hotel", image: "https://picsum.photos/seed/project3/400/300", slug: "/portfolio/luxury-boutique-hotel" },
      ],
      ctaLink: "/contact?inquiry=strategic_advisory",
      ctaText: "Discuss Your Strategic Needs",
    },
     {
      slug: "development-management",
      title: "Development Management",
      heroImage: "https://picsum.photos/seed/service2/1200/500",
      description: "From vision to reality, Surfside provides expert oversight across the entire development lifecycle. We ensure meticulous planning, execution, and delivery, managing complexity and maximizing value.",
      process: [
        { title: "Pre-Development & Planning", detail: "Conceptualization, master planning, and initial budgeting." },
        { title: "Entitlements & Permitting", detail: "Navigating local regulations and securing necessary approvals." },
        { title: "Design Team Coordination", detail: "Managing architects, engineers, and consultants." },
        { title: "Construction Management", detail: "Overseeing construction, quality control, and budget adherence." },
        { title: "Project Closeout & Handover", detail: "Ensuring a smooth transition to operations or sales." },
      ],
      benefits: ["Streamlined Execution", "Budget & Schedule Control", "Quality Assurance", "Stakeholder Alignment", "Reduced Complexity"],
      applications: ["Hospitality Projects", "Residential Communities", "Complex Custom Homes", "Commercial Developments"],
       relevantProjects: [
         { id: 1, title: "Oceanfront Villa", image: "https://picsum.photos/seed/project1/400/300", slug: "/portfolio/oceanfront-villa" },
         { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/400/300", slug: "/portfolio/coastal-community" },
         { id: 5, title: "Marina Residences", image: "https://picsum.photos/seed/project5/400/300", slug: "/portfolio/marina-residences" },
      ],
      ctaLink: "/contact?inquiry=development_management",
      ctaText: "Manage Your Development Project",
    },
    {
      slug: "marketing-sales",
      title: "Marketing & Sales",
      heroImage: "https://picsum.photos/seed/service3/1200/500",
      description: "Connecting premier Cabo properties with discerning global buyers through targeted, sophisticated marketing strategies and expert sales execution.",
      process: [
        { title: "Market Positioning & Branding", detail: "Crafting compelling narratives and brand identities for properties." },
        { title: "Digital Marketing Strategy", detail: "Targeted online campaigns, SEO, and social media engagement." },
        { title: "Sales Collateral & Tools", detail: "Developing high-quality brochures, websites, and virtual tours." },
        { title: "Broker Network Management", detail: "Leveraging local and international broker relationships." },
        { title: "Sales Process Management", detail: "Overseeing lead generation, negotiation, and closing." },
      ],
       benefits: ["Accelerated Sales Velocity", "Premium Brand Perception", "Global Reach", "Targeted Buyer Acquisition", "Data-Driven Campaigns"],
      applications: ["Luxury Residential Developments", "Resort Properties", "Exclusive Villas & Estates"],
       relevantProjects: [
        { id: 2, title: "Coastal Community", image: "https://picsum.photos/seed/project2/400/300", slug: "/portfolio/coastal-community" },
        { id: 5, title: "Marina Residences", image: "https://picsum.photos/seed/project5/400/300", slug: "/portfolio/marina-residences" },
      ],
      ctaLink: "/contact?inquiry=marketing_sales",
      ctaText: "Elevate Your Property Marketing",
    },
    // Add other services as needed
  ];
  const service = services.find(s => s.slug === slug);
  return service || null;
}

// Generate Metadata - Remains server-side
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = await getServiceData(params.slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} - Surfside Services`,
    description: service.description.substring(0, 160) + '...', // Shorten description for meta
  };
}

// The main page component is a Server Component
// It fetches data and passes it to the Client Component
export default async function ServiceDetailPageServer({ params }: { params: { slug: string } }) {
  const service = await getServiceData(params.slug);

  if (!service) {
    return <div className="container mx-auto px-4 py-24 text-center">Service not found.</div>;
  }

  // Render the Client Component and pass the fetched data as props
  return <ServiceDetailClient service={service} />;
}

// Generate static paths - Remains server-side
export async function generateStaticParams() {
  const services = [
    { slug: "strategic-advisory" },
    { slug: "development-management" },
    { slug: "marketing-sales" },
    // Add slugs for all services
  ];

  return services.map((service) => ({
    slug: service.slug,
  }));
}
