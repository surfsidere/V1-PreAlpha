'use client'; // Add this directive

// src/app/services/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming Card component exists
import { Badge } from '@/components/ui/badge'; // Assuming Badge component exists

// Placeholder function to get service data based on slug
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

   if (!service) {
     return null; // Handle not found
   }
  return service;
}

// Generate Metadata - This function remains a Server Component feature
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = await getServiceData(params.slug);
  if (!service) {
    return { title: "Service Not Found" }
  }
  return {
    title: `${service.title} - Surfside Services`,
    description: service.description.substring(0, 160) + '...', // Shorten description for meta
  }
}


export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await getServiceData(params.slug);

  if (!service) {
     return <div className="container mx-auto px-4 py-24 text-center">Service not found.</div>;
  }

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
                                 // Assuming Badge component exists
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
                                    <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0"/>
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
                                                     <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="group-hover:opacity-90 transition-opacity"/>
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
                                 <Link href="/portfolio">View All Projects <ArrowRight className="ml-1 h-3 w-3"/></Link>
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


// Generate static paths - This function remains a Server Component feature
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

// Temporary Badge component placeholder if not already global
// function Badge({ children, className, variant = 'default' } : { children: React.ReactNode, className?: string, variant?: string}) {
//   const baseStyle = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
//   const variantStyle = variant === 'outline' ? "border-input bg-transparent text-foreground" : "border-transparent bg-primary text-primary-foreground"; // Simplified
//   return <div className={`${baseStyle} ${variantStyle} ${className}`}>{children}</div>;
// }
