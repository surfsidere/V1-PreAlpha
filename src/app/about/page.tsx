// src/app/about/page.tsx
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


// Placeholder data
const leadershipTeam = [
  { name: "John Doe", title: "Founder & CEO", image: "https://picsum.photos/seed/leader1/200", initials: "JD", bio: "Deep expertise in Cabo development..." },
  { name: "Jane Smith", title: "Head of Development", image: "https://picsum.photos/seed/leader2/200", initials: "JS", bio: "Proven track record in managing complex projects..." },
  { name: "Robert Johnson", title: "Director of Sales & Marketing", image: "https://picsum.photos/seed/leader3/200", initials: "RJ", bio: "Strategic insights into the luxury market..." },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section - Full Width */}
      <section className="relative py-24 md:py-32 text-center text-foreground overflow-hidden min-h-[400px] flex items-center justify-center">
         {/* Background Video */}
         <video
            autoPlay
            loop
            muted
            playsInline // Important for mobile playback
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" // Adjust opacity as needed
            >
            <source src="https://www.surfside.re/wp-content/uploads/2025/05/12963162_3840_2160_24fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10"></div>

         {/* Container inside hero for text constraint */}
         <div className="container mx-auto px-4 max-w-screen-xl relative z-20">
           {/* Updated Headline */}
           <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Roots, Clear Vision: Guiding Your Baja Legacy
           </h1>
           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for navigating and succeeding in Cabo's dynamic luxury real estate market through integrated expertise and deep local connections.
           </p>
         </div>
      </section>

      {/* Our Philosophy/Approach - Constrained Width */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-screen-xl">
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Philosophy: Integrated Excellence</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We believe success in Cabo's unique market demands more than just isolated services. It requires a holistic, integrated approach that aligns strategy, development, marketing, and local expertise.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our model is built on collaboration, rigorous analysis, meticulous execution, and leveraging our unparalleled network of trusted partners. We act as conductors, orchestrating every element to deliver exceptional results and mitigate risk for our clients, whether they are institutional investors or individuals creating their dream home.
                </p>
              </div>
               <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                 <Image
                   src="https://www.surfside.re/wp-content/uploads/2022/12/San-Jose-Long-Exposure-1.jpg"
                   alt="San Jose long exposure nighttime city lights"
                   layout="fill"
                   objectFit="cover"
                   className="transition-transform duration-500 hover:scale-105"
                   data-ai-hint="cityscape night long exposure"
                 />
               </div>
           </div>
        </div>
      </section>

       {/* Meet the Leadership - Constrained Width */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Meet the Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <Card key={member.name} className="text-center transition-all duration-300 hover:shadow-xl">
                <CardHeader className="items-center pb-4">
                  <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl font-serif">{member.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{member.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Our Integrated Model - Constrained Width */}
       <section className="py-16 md:py-24">
         <div className="container mx-auto px-4 max-w-screen-xl">
           <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-serif mb-4">The Power of Integration</h2>
               <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                 Our seamless integration of core services ensures efficiency, foresight, and optimized outcomes at every stage.
               </p>
           </div>
            {/* Placeholder for a visual representation or key points */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-serif mb-2">Strategic Foresight</h3>
                    <p className="text-sm text-muted-foreground">Informed decisions based on deep market intelligence.</p>
                </div>
                <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-serif mb-2">Flawless Execution</h3>
                    <p className="text-sm text-muted-foreground">Meticulous management from concept to completion.</p>
                </div>
                <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-serif mb-2">Optimized Value</h3>
                    <p className="text-sm text-muted-foreground">Maximizing returns and ensuring quality through synergy.</p>
                </div>
            </div>
         </div>
       </section>


       {/* Partner Ecosystem - Constrained Width */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Curated Partner Ecosystem</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access to Cabo's elite network of architects, builders, legal experts, and financiers, orchestrated for your success.
            </p>
          </div>

          {/* Interactive Network Visualization Placeholder */}
          <div className="bg-background p-8 rounded-lg text-center min-h-[350px] flex items-center justify-center border border-dashed">
            <p className="text-muted-foreground">[Interactive Partner Network Visualization - Coming Soon]</p>
            {/* Placeholder for the network graph component */}
          </div>

           <p className="text-center text-muted-foreground mt-8 text-sm">
             This curated network provides unparalleled access, ensures quality, enhances efficiency, and mitigates risk throughout your project lifecycle.
           </p>
        </div>
      </section>
    </div>
  );
}
