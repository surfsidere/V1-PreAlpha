'use client'; // Add this directive

// src/app/properties/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, CarFront, ArrowRight } from 'lucide-react'; // Example icons

// Placeholder data
const properties = [
  { id: 1, title: "Villa Pacifica", price: "$5,500,000 USD", image: "https://picsum.photos/seed/prop1/600/400", location: "Palmilla", beds: 5, baths: 6, garage: 3, slug: "/properties/villa-pacifica", "data-ai-hint": "luxury villa ocean view pool" },
  { id: 2, title: "Casa Arena", price: "$3,200,000 USD", image: "https://picsum.photos/seed/prop2/600/400", location: "Pedregal", beds: 4, baths: 4.5, garage: 2, slug: "/properties/casa-arena", "data-ai-hint": "modern house hillside ocean view" },
  { id: 3, title: "Hacienda del Mar", price: "$7,800,000 USD", image: "https://picsum.photos/seed/prop3/600/400", location: "Querencia", beds: 6, baths: 7, garage: 4, slug: "/properties/hacienda-del-mar", "data-ai-hint": "luxury hacienda golf course" },
];

export default function PropertiesPage() {
  // Filtering/Sorting state would go here in a client component

  return (
     // Main container with max-width
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-screen-xl">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-6">Properties for Sale</h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Discover curated listings of exceptional properties available in Cabo San Lucas' most desirable locations.
      </p>

      {/* Filters Placeholder */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
         <Button variant="outline">Location</Button>
         <Button variant="outline">Price Range</Button>
         <Button variant="outline">Bedrooms</Button>
         <Button variant="outline">Property Type</Button>
      </div>

      {/* Property Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl flex flex-col">
            <CardHeader className="p-0 relative h-64">
              <Image
                src={property.image}
                alt={property.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
                 data-ai-hint={property['data-ai-hint']}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
               <div className="absolute bottom-4 left-4 text-white text-shadow">
                 <p className="text-2xl font-semibold">{property.price}</p>
                 <p className="text-sm flex items-center"><MapPin className="w-3 h-3 mr-1" /> {property.location}</p>
               </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <CardTitle className="text-xl font-serif mb-3">{property.title}</CardTitle>
              <div className="flex space-x-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center"><Bed className="w-4 h-4 mr-1" /> {property.beds} Beds</span>
                <span className="flex items-center"><Bath className="w-4 h-4 mr-1" /> {property.baths} Baths</span>
                 <span className="flex items-center"><CarFront className="w-4 h-4 mr-1" /> {property.garage} Garage</span>
              </div>
              <Button variant="outline" asChild size="sm" className="mt-auto self-start">
                <Link href={property.slug}>
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

       {/* Pagination Placeholder */}
       <div className="mt-16 text-center">
           <Button variant="outline">Load More Properties</Button>
       </div>
        <style jsx>{`
            .text-shadow { text-shadow: 0 1px 3px rgba(0,0,0,0.6); }
         `}</style>
    </div>
  );
}
