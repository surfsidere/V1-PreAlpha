'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  // Define fonts based on layout.tsx (ensure these CSS variables are set)
  const brandSerifFont = 'var(--font-playfair-display), serif';
  const brandSansSerifFont = 'var(--font-inter), sans-serif'; // Using Inter from globals

  // Define colors based on globals.css (ensure these CSS variables are set)
  const textPrimaryColor = 'hsl(var(--foreground))'; // Default text
  const headlineColor = 'hsl(var(--primary))'; // Use primary color from theme
  const accentLineColor = 'hsl(var(--border))'; // Use border color for the line

  // Video URL
  const videoUrl = "https://www.surfside.re/wp-content/uploads/2025/05/165021798-golf-course-cabo-mexico.mp4";

  return (
    <section className="relative flex items-center bg-background overflow-hidden min-h-[70svh] md:min-h-[80svh]">
       {/* Background Video */}
        <video
            autoPlay
            loop
            muted
            playsInline // Important for mobile playback
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30" // Adjusted opacity
            >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
       {/* Optional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>


      {/* Apply max-w-screen-lg here */}
      <div className="container relative mx-auto px-4 z-20 max-w-screen-lg">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Text Content - Adjusted to md:col-span-7 */}
          <div className="md:col-span-7 py-12 md:py-20">
            {/* Updated Headline */}
             <h1
               style={{
                 fontFamily: brandSerifFont,
                 color: headlineColor, // Using the specific green
                 fontWeight: 400, // Regular weight as requested
                 lineHeight: 1.2,
                 fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', // Adjusted smaller font size
                 marginBottom: '0.75rem', // Reduced margin
               }}
             >
                Relax, we've got you covered --<br />
                 We're your trusted Baja experts.
             </h1>

            {/* Decorative Line */}
            <hr
              style={{
                border: 'none',
                height: '1px',
                width: '60px', // Short line
                backgroundColor: accentLineColor, // Use theme border color
                margin: '1.5rem 0', // Space around line
              }}
            />

            {/* Body Text Paragraphs */}
            <p
              style={{
                fontFamily: brandSansSerifFont,
                color: textPrimaryColor,
                fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
                lineHeight: 1.7,
                maxWidth: '65ch',
                marginBottom: '1.5rem', // Space between paragraphs
              }}
            >
             Discover a seamless, strategic approach to navigating the complexities and capturing the opportunities of the Los Cabos real estate market.
            </p>
            <p
             style={{
                fontFamily: brandSansSerifFont,
                color: textPrimaryColor,
                fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
                lineHeight: 1.7,
                maxWidth: '65ch',
                marginBottom: '2.5rem', // More space before button
              }}
             >
                We offer end-to-end guidance for discerning investors, developers, and homeowners.
            </p>


            {/* Call to Action Button */}
            <Button
              asChild
              variant="outline" // Mimic outlined style
              size="lg" // Make button larger
              style={{
                fontFamily: brandSansSerifFont,
                fontWeight: 500,
                fontSize: '0.95rem', // Slightly larger text
                textTransform: 'none', // No uppercase as per reference
                letterSpacing: 'normal',
                 // Use text color from primary palette
                 color: textPrimaryColor,
                 // Use border color similar to accent line or headline
                 borderColor: accentLineColor,
                 backgroundColor: 'transparent', // Explicitly transparent
                 padding: '0.9em 2.2em', // Adjust padding
                 borderRadius: '4px', // Slightly rounded
                 // Hover state
                 // Note: Inline styles can't directly do hover, use CSS classes or Tailwind variants if needed for complex hover
              }}
              className="hover:bg-secondary/50 hover:border-primary" // Tailwind classes for hover
            >
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>

           {/* Right Column: Takes remaining space (5/12) */}
           <div className="hidden md:block md:col-span-5">
             {/* Intentionally empty or can hold a placeholder if needed visually */}
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
