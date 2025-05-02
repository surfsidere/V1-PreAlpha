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
         <div className="container mx-auto px-4 max-w-screen-lg relative z-20"> {/* Adjusted max-width */}
           {/* Updated Headline */}
           <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Deep Roots, Clear Vision: <br/> Guiding Your Baja Legacy
           </h1>
           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for navigating and succeeding in Cabo's dynamic luxury real estate market through integrated expertise and deep local connections.
           </p>
         </div>
      </section>

      {/* Unified Value Proposition Section */}
       <section className="py-16 md:py-24">
         <div className="container mx-auto px-4 max-w-screen-lg">
           {/* Asymmetrical Grid: Visual Left (40%), Text Right (60%) */}
           <div className="grid md:grid-cols-10 gap-8 md:gap-12 items-center">

             {/* Visual Element Column (Left - 4/10) */}
             <div className="md:col-span-4">
               <div className="relative h-80 md:h-[450px] bg-muted rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                  {/* Replaced Image with Video */}
                  <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      data-ai-hint="sailing ocean calm movement"
                  >
                      <source src="https://www.surfside.re/wp-content/uploads/2025/05/sail-boat-corrected-1-3.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                  {/* Optional: Add a subtle overlay if needed over the video */}
                  {/* <span className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></span> */}
               </div>
             </div>

             {/* Text Content Column (Right - 6/10) */}
             {/* Added pl-4 md:pl-12 for the significant left indentation */}
             <div className="md:col-span-6 pl-4 md:pl-12">
                 {/* Main Headline (H2 Style) */}
                 <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground"> {/* Use Brand Sans-serif H2 Style - Assuming font-serif maps correctly */}
                     Mastering the Cabo Landscape: Your Vision, Expertly Realized.
                 </h2>
                 {/* Main Body Text */}
                 <p className="text-muted-foreground leading-relaxed mb-4"> {/* Brand Sans-serif Body Style */}
                     Navigating the dynamic Los Cabos real estate market demands more than access; it requires a trusted partner with deep local roots and unwavering strategic clarity. We guide discerning clients through every complexity, ensuring your objectives are met with integrated expertise and insightful counsel.
                 </p>
                 {/* Optional Subtle Separator */}
                  <hr className="w-12 border-t border-border my-6" /> {/* Adjusted margin */}
                 {/* Ecosystem Sub-Section Text (Option B - Integrated Flow) */}
                 <p className="text-muted-foreground leading-relaxed"> {/* Brand Sans-serif Body Style, could use text-secondary if defined differently */}
                    Integral to this is our curated ecosystem of Baja Sur's finest architects, builders, artisans, and legal experts. We don't just connect you; we meticulously orchestrate this elite collective, ensuring collaborative synergy and access to unparalleled craftsmanship dedicated to realizing your vision and creating enduring value.
                 </p>
              </div>

           </div>
         </div>
       </section>


      {/* Our Integrated Advantage Section (Kept as is) */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-screen-lg"> {/* Adjusted max-width */}
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
        <div className="container mx-auto px-4 max-w-screen-lg"> {/* Adjusted max-width */}
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


       {/* Our Curated Ecosystem Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-screen-lg"> {/* Adjusted max-width */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Curated Ecosystem</h2>
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
