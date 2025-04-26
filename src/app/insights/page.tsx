// src/app/insights/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays } from 'lucide-react';

// Placeholder data
const insights = [
  {
    id: 1,
    title: "Cabo Market Trends Q3 2024",
    excerpt: "An analysis of the latest shifts in the luxury real estate market, including sales volume, pricing trends, and emerging opportunities for investors.",
    image: "https://picsum.photos/seed/insight1/600/300",
    date: "October 26, 2024",
    category: "Market Analysis",
    slug: "/insights/cabo-market-trends-q3-2024"
  },
  {
    id: 2,
    title: "The Rise of Wellness-Focused Developments in Los Cabos",
    excerpt: "Exploring how health and wellness are shaping the design and amenities of new luxury communities and hospitality projects.",
    image: "https://picsum.photos/seed/insight2/600/300",
    date: "September 15, 2024",
    category: "Development Trends",
    slug: "/insights/wellness-developments"
  },
  {
    id: 3,
    title: "Navigating the Entitlement Process in Baja California Sur",
    excerpt: "Key considerations and strategies for successfully securing permits and approvals for real estate projects in the region.",
    image: "https://picsum.photos/seed/insight3/600/300",
    date: "August 01, 2024",
    category: "Development Management",
    slug: "/insights/entitlement-process-bcs"
  },
    {
    id: 4,
    title: "Integrating Sustainable Design in Luxury Cabo Homes",
    excerpt: "How eco-conscious practices and materials are being incorporated into high-end residential design without compromising luxury.",
    image: "https://picsum.photos/seed/insight4/600/300",
    date: "July 22, 2024",
    category: "Design Insights",
    slug: "/insights/sustainable-luxury-design"
  },
];

const categories = ["All", "Market Analysis", "Development Trends", "Development Management", "Design Insights"];

export default function InsightsPage() {
  // State for filtering would go here in a client component

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-6">Insights & Analysis</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Stay informed with our expert commentary on the dynamic Cabo real estate market, development trends, and design innovation.
      </p>

      {/* Categories Filter (Basic Placeholder) */}
       <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
            {category}
          </Button>
        ))}
      </div>

      {/* Insights Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights.map((insight) => (
           <Card key={insight.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl flex flex-col">
            <CardHeader className="p-0 relative h-52">
               <Image
                src={insight.image}
                alt={insight.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
             <div>
               <p className="text-xs text-primary font-medium mb-1 uppercase tracking-wider">{insight.category}</p>
              <CardTitle className="text-xl font-serif mb-2 leading-tight">{insight.title}</CardTitle>
               <p className="text-sm text-muted-foreground flex items-center mb-3">
                  <CalendarDays className="w-3.5 h-3.5 mr-1.5"/> {insight.date}
               </p>
              <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">{insight.excerpt}</CardDescription>
             </div>
              <Button variant="link" asChild className="p-0 h-auto self-start mt-auto">
                <Link href={insight.slug}>
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Placeholder */}
       <div className="mt-16 text-center">
           <Button variant="outline">Load More Insights</Button>
       </div>
    </div>
  );
}
