'use client'; // Add this directive

// src/app/properties/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Bed, Bath, CarFront, CheckCircle } from 'lucide-react';
// Import Swiper React components (assuming you'd use Swiper for gallery)
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper/modules';

// Placeholder function to get property data based on slug
async function getPropertyData(slug: string) {
  const properties = [
     { id: 1, title: "Villa Pacifica", price: "$5,500,000 USD", images: ["https://picsum.photos/seed/prop1/1200/800", "https://picsum.photos/seed/prop1-2/1200/800", "https://picsum.photos/seed/prop1-3/1200/800", "https://picsum.photos/seed/prop1-4/1200/800"], location: "Palmilla", beds: 5, baths: 6.5, garage: 3, sqft: 6500, lotSqft: 15000, slug: "villa-pacifica", description: "Experience unparalleled luxury and breathtaking ocean views from this exquisite villa in the prestigious Palmilla community. Featuring expansive terraces, an infinity pool, and bespoke finishes throughout.", features: ["Ocean Views", "Infinity Pool", "Gourmet Kitchen", "Home Theater", "Outdoor Kitchen", "24/7 Security", "Golf Course Access"] },
     { id: 2, title: "Casa Arena", price: "$3,200,000 USD", images: ["https://picsum.photos/seed/prop2/1200/800", "https://picsum.photos/seed/prop2-2/1200/800"], location: "Pedregal", beds: 4, baths: 4.5, garage: 2, sqft: 4800, lotSqft: 10000, slug: "casa-arena", description: "Nestled in the exclusive Pedregal hills, Casa Arena offers panoramic views of the Pacific Ocean and Cabo San Lucas marina. This contemporary home boasts clean lines, luxurious amenities, and seamless indoor-outdoor living.", features: ["Pacific Ocean Views", "Private Pool & Jacuzzi", "Modern Architecture", "Chef's Kitchen", "Gated Community Access", "Close to Downtown"] },
     { id: 3, title: "Hacienda del Mar", price: "$7,800,000 USD", images: ["https://picsum.photos/seed/prop3/1200/800", "https://picsum.photos/seed/prop3-2/1200/800", "https://picsum.photos/seed/prop3-3/1200/800"], location: "Querencia", beds: 6, baths: 7, garage: 4, sqft: 8000, lotSqft: 25000, slug: "hacienda-del-mar", description: "An exceptional estate within the private golf community of Querencia. Hacienda del Mar combines traditional Mexican architecture with modern luxury, offering privacy, stunning views, and access to world-class amenities.", features: ["Golf Course Views", "Large Private Estate", "Hacienda Style Architecture", "Multiple Terraces", "Casita/Guest House", "Querencia Club Membership Available"] },
  ];
  const property = properties.find(p => p.slug === slug);
  return property || null;
}

// Generate Metadata - This function remains a Server Component feature
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const property = await getPropertyData(params.slug);
  if (!property) {
    return { title: "Property Not Found" }
  }
  return {
    title: `${property.title} - Property for Sale in ${property.location}, Cabo`,
    description: property.description.substring(0, 160) + '...',
  }
}

export default async function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = await getPropertyData(params.slug);

  if (!property) {
    return <div className="container mx-auto px-4 py-24 text-center">Property not found.</div>;
  }

  return (
    <div className="bg-background">
      {/* Image Gallery / Hero */}
      <section className="bg-secondary/30 py-8 md:py-12">
        <div className="container mx-auto px-4">
           {/* Placeholder Image Gallery - Replace with Swiper or similar */}
           <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image src={property.images[0]} alt={`${property.title} main image`} layout="fill" objectFit="cover" priority/>
                {/* Add gallery controls/thumbnails if using Swiper */}
           </div>
            <div className="grid grid-cols-4 gap-2">
                {property.images.slice(1, 5).map((img, index) => (
                     <div key={index} className="relative aspect-video bg-muted rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                        <Image src={img} alt={`${property.title} gallery image ${index + 1}`} layout="fill" objectFit="cover"/>
                    </div>
                ))}
                 {/* Add a "View All Photos" button if more images exist */}
            </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Content Area */}
          <main className="lg:col-span-2 space-y-8">
            <header>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-2">{property.title}</h1>
              <p className="text-lg text-muted-foreground flex items-center mb-4">
                <MapPin className="w-5 h-5 mr-2 text-primary" /> {property.location}, Cabo San Lucas
              </p>
              <p className="text-3xl font-semibold text-primary">{property.price}</p>
            </header>

             <section className="border-t pt-8">
                 <h2 className="text-2xl font-serif mb-4">Property Description</h2>
                 <p className="text-muted-foreground leading-relaxed">{property.description}</p>
             </section>

            <section className="border-t pt-8">
                <h2 className="text-2xl font-serif mb-6">Key Features</h2>
                 <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                     {property.features.map((feature, index) => (
                         <li key={index} className="flex items-center text-muted-foreground">
                             <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0"/>
                             {feature}
                         </li>
                     ))}
                 </ul>
             </section>

             {/* Optional: Map Section */}
             <section className="border-t pt-8">
                 <h2 className="text-2xl font-serif mb-4">Location</h2>
                 <div className="aspect-video bg-muted rounded-lg border flex items-center justify-center text-muted-foreground">
                     [Map Integration Placeholder - Showing {property.location}]
                     {/* Use @vis.gl/react-google-maps */}
                 </div>
             </section>
          </main>

          {/* Right Sidebar / Quick Info & Contact */}
          <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-24 self-start">
             <div className="border rounded-lg p-6 bg-secondary/30">
                 <h3 className="text-xl font-serif mb-4">Quick Info</h3>
                 <div className="space-y-3 text-sm">
                     <p className="flex justify-between"><span>Bedrooms:</span> <strong className="font-medium flex items-center"><Bed className="w-4 h-4 mr-1.5"/> {property.beds}</strong></p>
                     <p className="flex justify-between"><span>Bathrooms:</span> <strong className="font-medium flex items-center"><Bath className="w-4 h-4 mr-1.5"/> {property.baths}</strong></p>
                     <p className="flex justify-between"><span>Garage:</span> <strong className="font-medium flex items-center"><CarFront className="w-4 h-4 mr-1.5"/> {property.garage}</strong></p>
                     <p className="flex justify-between"><span>Interior SqFt:</span> <strong className="font-medium">{property.sqft.toLocaleString()}</strong></p>
                      <p className="flex justify-between"><span>Lot SqFt:</span> <strong className="font-medium">{property.lotSqft.toLocaleString()}</strong></p>
                 </div>
             </div>

             <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-serif mb-4">Interested in this Property?</h3>
                  <p className="text-sm text-muted-foreground mb-4">Contact us today for more information or to schedule a private showing.</p>
                 <Button size="lg" className="w-full" asChild>
                     <Link href={`/contact?property_inquiry=${property.slug}`}>Request Information</Link>
                 </Button>
             </div>

             <Button variant="outline" asChild className="w-full">
                 <Link href="/properties">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Properties
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
 const properties = [
    { slug: "villa-pacifica" },
    { slug: "casa-arena" },
    { slug: "hacienda-del-mar" },
    // Add slugs for all properties
  ];
  return properties.map((prop) => ({
    slug: prop.slug,
  }));
}
