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
              Deep Roots, Clear Vision: <br/> Guiding Your Baja Legacy
           </h1>
           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for navigating and succeeding in Cabo's dynamic luxury real estate market through integrated expertise and deep local connections.
           </p>
         </div>
      </section>

      {/* Placeholder for "Our Philosophy" section - Content moved below */}
      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-screen-xl">
             {/* Philosophy Text (example) */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Curated Ecosystem</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   Our curated ecosystem of Baja Sur's finest architects, builders, and artisans is integral to our process. We don't just connect you; we orchestrate this elite network, ensuring collaborative synergy and access to unparalleled craftsmanship dedicated to realizing your vision and creating enduring value.
                 </p>
              </div>
          </div>
      </section>

      {/* Our Integrated Advantage Section (Replaced "Our Integrated Model" or "Our Philosophy") */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Integrated Advantage</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our holistic model intertwines core disciplines, ensuring efficiency, foresight, and optimized outcomes throughout your real estate journey.
            </p>
          </div>
          {/* Refined 3-Column Grid */}
          <div className="grid md:grid-cols-3 gap-8 text-left"> {/* Changed to text-left for descriptions */}
              {/* Point 1: Strategic Foresight */}
              <div className="p-6 border rounded-lg bg-background/50 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-serif mb-2 text-primary">Strategic Foresight</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We go beyond surface data, leveraging deep market intelligence and predictive analysis to inform every decision, identify hidden opportunities, and position your investment for optimal long-term performance.
                  </p>
              </div>
              {/* Point 2: Flawless Execution */}
              <div className="p-6 border rounded-lg bg-background/50 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-serif mb-2 text-primary">Flawless Execution</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    From initial concept through complex entitlements to final completion, our meticulous project management ensures every detail is orchestrated precisely, mitigating risks and delivering unparalleled quality on time and on budget.
                  </p>
              </div>
              {/* Point 3: Optimized Value */}
              <div className="p-6 border rounded-lg bg-background/50 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-serif mb-2 text-primary">Optimized Value</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    True value extends beyond the transaction. Through strategic synergy, curated partnerships, and a focus on enduring quality, we strive to maximize your returns while enhancing the intrinsic lifestyle value of your property.
                  </p>
              </div>
          </div>
        </div>
      </section>


       {/* Meet the Leadership - Constrained Width */}
      <section className="py-16 md:py-24"> {/* Removed bg-secondary/30 */}
        <div className="container mx-auto px-4 max-w-screen-xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Meet the Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member) => (
              <Card key={member.name} className="text-center transition-all duration-300 hover:shadow-xl border"> {/* Added border */}
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
