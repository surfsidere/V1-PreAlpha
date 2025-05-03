// src/app/insights/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'; // Import Badge
import { ArrowRight, CalendarDays } from 'lucide-react';

// New Categories focused on services
const categories = [
  "All",
  "Market Strategy",
  "Development & Construction",
  "Property Management",
  "Custom Residence Journey",
  "Ownership & Legal",
  "Design & Architecture",
  "Los Cabos Lifestyle",
  "Sustainability & Future Focus"
];

// Placeholder data with service-focused categories and titles
const insights = [
  {
    id: 1,
    title: "Navigating Land Acquisition in Baja Sur: A Strategic Approach",
    excerpt: "Key legal and market considerations for securing prime development land in Los Cabos.",
    image: "https://picsum.photos/seed/insight10/600/400",
    date: "November 15, 2024",
    category: "Market Strategy",
    slug: "/insights/baja-land-acquisition",
    "data-ai-hint": "land map legal documents cabo"
  },
  {
    id: 2,
    title: "Optimizing Construction Timelines in Luxury Projects",
    excerpt: "Best practices for project management and vendor coordination to ensure efficient builds.",
    image: "https://picsum.photos/seed/insight11/600/400",
    date: "November 01, 2024",
    category: "Development & Construction",
    slug: "/insights/luxury-construction-timelines",
    "data-ai-hint": "construction site planning blueprints crane"
  },
  {
    id: 3,
    title: "The Importance of Proactive Property Management in Cabo",
    excerpt: "Protecting your asset and ensuring peace of mind with comprehensive maintenance and oversight.",
    image: "https://picsum.photos/seed/insight12/600/400",
    date: "October 20, 2024",
    category: "Property Management",
    slug: "/insights/proactive-property-management",
    "data-ai-hint": "house maintenance tools checklist"
  },
  {
    id: 4,
    title: "Designing Your Dream: Translating Vision in Custom Residences",
    excerpt: "The collaborative process between client, architect, and coordinator for bespoke home creation.",
    image: "https://picsum.photos/seed/insight13/600/400",
    date: "October 05, 2024",
    category: "Custom Residence Journey",
    slug: "/insights/custom-home-design-collaboration",
    "data-ai-hint": "architecture sketch interior design moodboard"
  },
  {
    id: 5,
    title: "Understanding Fideicomiso: Secure Foreign Ownership in Mexico",
    excerpt: "A clear explanation of the bank trust system essential for non-Mexican property buyers.",
    image: "https://picsum.photos/seed/insight14/600/400",
    date: "September 25, 2024",
    category: "Ownership & Legal",
    slug: "/insights/fideicomiso-explained",
    "data-ai-hint": "mexico flag legal document key"
  },
  {
    id: 6,
    title: "Integrating Biophilic Design in Modern Baja Architecture",
    excerpt: "How connecting indoor and outdoor spaces enhances well-being and luxury.",
    image: "https://picsum.photos/seed/insight15/600/400",
    date: "September 10, 2024",
    category: "Design & Architecture",
    slug: "/insights/biophilic-design-baja",
    "data-ai-hint": "modern architecture nature indoor plants"
  },
   {
    id: 7,
    title: "Sustainable Development Practices for Los Cabos' Future",
    excerpt: "Exploring eco-conscious building materials and water conservation strategies.",
    image: "https://picsum.photos/seed/insight16/600/400",
    date: "August 28, 2024",
    category: "Sustainability & Future Focus",
    slug: "/insights/sustainable-development-cabo",
    "data-ai-hint": "solar panels green building water conservation"
  },
   {
    id: 8,
    title: "Curated Experiences: Beyond the Beach in Los Cabos",
    excerpt: "Exploring the art, culinary, and adventure scenes that define the Baja lifestyle.",
    image: "https://picsum.photos/seed/insight17/600/400",
    date: "August 15, 2024",
    category: "Los Cabos Lifestyle",
    slug: "/insights/cabo-lifestyle-experiences",
    "data-ai-hint": "chef cooking art gallery mountain biking cabo"
  },
];

export default function InsightsPage() {
  // State for filtering would go here in a client component

  return (
    // Main container with max-width
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-screen-xl">
      {/* Elevated Header Section */}
      <div className="text-center mb-16">
        {/* Updated Title */}
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-primary">Perspectives</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Expert insights, market analysis, and commentary on navigating the dynamic landscape of Los Cabos real estate, development, and luxury living.
        </p>
      </div>

      {/* Categories Filter - Styled more elegantly */}
       <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
        {categories.map((category) => (
          // Using Badge component for a cleaner filter look, clickable
          <Badge
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className="cursor-pointer px-3 py-1 text-sm transition-colors hover:bg-accent" // Added hover effect
            // onClick handler would be added here in a client component
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* --- Featured Slots Placeholder --- */}
      {/* Skipping implementation for now as requested, focus on grid */}
      {/* <section className="mb-16 md:mb-24"> */}
      {/*   <h2 className="text-2xl font-serif text-center mb-8">Featured Insights</h2> */}
      {/*   [Featured Articles Component Placeholder - e.g., 2-3 larger cards] */}
      {/* </section> */}

      {/* Dynamic Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights.map((insight) => (
           // Refined Card Styling
           <Card key={insight.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl flex flex-col border bg-card">
            {/* Image Container */}
            <div className="relative h-56 w-full overflow-hidden"> {/* Fixed height for image consistency */}
               <Image
                src={insight.image}
                alt={insight.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
                 data-ai-hint={insight['data-ai-hint']}
              />
               {/* Optional: Subtle gradient overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div> */}
            </div>
             {/* Content Area */}
            <CardContent className="p-6 flex-grow flex flex-col justify-between"> {/* Use justify-between */}
             <div>
               {/* Category Badge */}
               <Badge variant="secondary" className="mb-2 text-xs">{insight.category}</Badge>
               {/* Title */}
              <CardTitle className="text-lg font-serif mb-2 leading-tight font-medium text-foreground"> {/* Slightly smaller title */}
                {/* Link wrapping the title */}
                <Link href={insight.slug} className="hover:text-primary transition-colors">
                    {insight.title}
                </Link>
               </CardTitle>
               {/* Date */}
               <p className="text-xs text-muted-foreground flex items-center mb-3">
                  <CalendarDays className="w-3 h-3 mr-1.5"/> {insight.date}
               </p>
               {/* Excerpt */}
              <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">{insight.excerpt}</CardDescription>
             </div>
              {/* Read More Link - Positioned at the bottom */}
              <Link href={insight.slug} className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group mt-auto self-start">
                Read Full Article <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination Placeholder */}
       <div className="mt-16 text-center">
           <Button variant="outline">Load More Perspectives</Button>
       </div>
    </div>
  );
}

// Regenerate styles if needed based on new class names or structures
// <style jsx global>{` ... `}</style> - Consider removing if global styles handle this
