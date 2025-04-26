'use client'; // Add this directive

// src/app/insights/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge'; // Assuming Badge component exists

// Placeholder function to get insight data based on slug
async function getInsightData(slug: string) {
  const insights = [
    {
        id: 1,
        title: "Cabo Market Trends Q3 2024",
        excerpt: "An analysis of the latest shifts in the luxury real estate market, including sales volume, pricing trends, and emerging opportunities for investors.",
        image: "https://picsum.photos/seed/insight1/1200/500",
        date: "October 26, 2024",
        author: "John Doe",
        category: "Market Analysis",
        slug: "cabo-market-trends-q3-2024",
        content: `
        <p>The third quarter of 2024 showed continued resilience in the Cabo luxury real estate market, despite broader economic headwinds. Sales volume remained strong, particularly in the ultra-luxury segment (properties above $10M USD).</p>
        <h3 class="text-xl font-serif mt-6 mb-3">Key Observations:</h3>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Inventory levels tightened slightly in prime locations like Palmilla and Pedregal.</li>
            <li>Demand for new construction with modern amenities remains exceptionally high.</li>
            <li>Branded residences associated with luxury hotel flags continue to command premium pricing.</li>
            <li>Increased interest from buyers seeking properties suitable for both personal use and high-yield rental income.</li>
        </ul>
        <figure class="my-6">
            <img src="https://picsum.photos/seed/chart1/800/400" alt="Market trend chart" class="rounded-lg shadow-md mx-auto"/>
            <figcaption class="text-center text-xs text-muted-foreground mt-2">Figure 1: Sales Volume Q1-Q3 2024</figcaption>
        </figure>
        <p>Looking ahead to Q4 and early 2025, we anticipate sustained demand, although price appreciation may moderate slightly compared to previous years. Opportunities exist for developers focusing on unique, high-quality offerings and for investors seeking long-term value in established communities.</p>
        `
    },
     {
        id: 2,
        title: "The Rise of Wellness-Focused Developments in Los Cabos",
        excerpt: "Exploring how health and wellness are shaping the design and amenities of new luxury communities and hospitality projects.",
        image: "https://picsum.photos/seed/insight2/1200/500",
        date: "September 15, 2024",
         author: "Jane Smith",
        category: "Development Trends",
        slug: "wellness-developments",
        content: `<p>Wellness is no longer a trend but a fundamental expectation in luxury living. Developers in Los Cabos are increasingly integrating comprehensive wellness offerings into their projects.</p><p>This includes state-of-the-art fitness centers, yoga pavilions, organic gardens, spa facilities offering holistic treatments, and even dedicated wellness concierges. Architectural design is also evolving to promote well-being through biophilic principles, natural light maximization, and non-toxic materials.</p>`
    },
    // Add other insights...
  ];

  const insight = insights.find(i => i.slug === slug);

  if (!insight) {
    return null;
  }
  return insight;
}

// Generate Metadata - This function remains a Server Component feature
// It is okay to keep this here, Next.js handles this correctly.
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const insight = await getInsightData(params.slug);
  if (!insight) {
    return { title: "Insight Not Found" }
  }
  return {
    title: `${insight.title} - Surfside Insights`,
    description: insight.excerpt,
  }
}


export default async function InsightDetailPage({ params }: { params: { slug: string } }) {
  const insight = await getInsightData(params.slug);

  if (!insight) {
     return <div className="container mx-auto px-4 py-24 text-center">Insight not found.</div>;
  }

  return (
    <div className="bg-background">
      {/* Hero Image (Optional) */}
      <section className="relative h-[35svh] min-h-[250px] md:h-[45svh] md:min-h-[350px] overflow-hidden">
         <div className="absolute inset-0 z-0">
          <Image
            src={insight.image}
            alt={`Hero image for ${insight.title}`}
            layout="fill"
            objectFit="cover"
            quality={80}
            priority
            className="brightness-75"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Main Article Content */}
      <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
         {/* Article Header */}
         <header className="mb-8 md:mb-12 border-b pb-8">
              <Badge variant="secondary" className="mb-3">{insight.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 leading-tight">
                {insight.title}
            </h1>
             <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-1.5"/> {insight.date}
                </span>
                 <span className="flex items-center">
                    <User className="w-4 h-4 mr-1.5"/> By {insight.author}
                </span>
             </div>
         </header>

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />

           {/* Back Button */}
           <div className="mt-12 pt-8 border-t">
                <Button variant="outline" asChild>
                    <Link href="/insights">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
                    </Link>
                </Button>
           </div>
      </article>

      {/* Add Tailwind Typography styles if not already global */}
      <style jsx global>{`
        .prose {
          color: hsl(var(--foreground) / 0.9);
        }
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          color: hsl(var(--foreground));
        }
        .prose strong {
          color: hsl(var(--foreground));
        }
        .prose blockquote {
          border-left-color: hsl(var(--primary));
          color: hsl(var(--foreground) / 0.8);
        }
        .prose code {
            background-color: hsl(var(--muted));
            color: hsl(var(--muted-foreground));
            padding: 0.2em 0.4em;
            border-radius: 0.25rem;
            font-size: 0.9em;
        }
        .dark .prose {
             color: hsl(var(--foreground) / 0.85);
        }
         .dark .prose h1, .dark .prose h2, .dark .prose h3, .dark .prose h4, .dark .prose h5, .dark .prose h6 {
             color: hsl(var(--foreground));
         }
         .dark .prose strong {
             color: hsl(var(--foreground));
         }
         .dark .prose blockquote {
             border-left-color: hsl(var(--primary));
             color: hsl(var(--foreground) / 0.75);
         }
         .dark .prose code {
            background-color: hsl(var(--muted));
            color: hsl(var(--muted-foreground));
         }
         .brightness-75 { filter: brightness(0.75); }
      `}</style>
    </div>
  );
}

// Generate static paths - This function remains a Server Component feature
// It is okay to keep this here, Next.js handles this correctly.
export async function generateStaticParams() {
 const insights = [
    { slug: "cabo-market-trends-q3-2024" },
    { slug: "wellness-developments" },
    // Add slugs for all insights
  ];

  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}


// Temporary Badge component placeholder if not already global
// function Badge({ children, className, variant = 'default' } : { children: React.ReactNode, className?: string, variant?: string}) {
//   const baseStyle = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase tracking-wider";
//   const variantStyle = variant === 'secondary' ? "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80" : "border-transparent bg-primary text-primary-foreground hover:bg-primary/80";
//   return <div className={`${baseStyle} ${variantStyle} ${className}`}>{children}</div>;
// }
