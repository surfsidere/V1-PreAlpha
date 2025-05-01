'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  // Define fonts based on layout.tsx (ensure these CSS variables are set)
  const brandSerifFont = 'var(--font-playfair-display), serif';
  const brandSansSerifFont = 'var(--font-montserrat), sans-serif'; // Assuming Montserrat from prompt

  // Define colors based on globals.css (ensure these CSS variables are set)
  const textPrimaryColor = 'hsl(var(--foreground))'; // Default text
  const textSecondaryColor = 'hsl(var(--muted-foreground))'; // Muted/Subtitle text
  const accentColor = 'hsl(var(--primary))'; // Primary accent (Green)
  const buttonTextColor = 'hsl(var(--primary-foreground))'; // Text on primary button
  const buttonBgColor = 'hsl(var(--primary))';
  const buttonHoverBgColor = 'hsl(var(--primary) / 0.9)'; // Slightly darker primary

  // Specific styles matching the new image_199989.jpg reference
  const headlineColor = '#1f2421'; // Dark Olive/Forest Green from prompt
  const accentLineColor = '#A0A08C'; // Lighter accent green (estimate - adjust based on actual green)

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


      <div className="container relative mx-auto px-4 z-20">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="md:col-span-7 lg:col-span-6 py-12 md:py-20">
            {/* Updated Headline */}
            <h1
              style={{
                fontFamily: brandSerifFont,
                color: headlineColor, // Using the specific green
                fontWeight: 400, // Regular weight as requested
                lineHeight: 1.2,
                fontSize: 'clamp(1.8rem, 5vw, 3rem)', // Smaller font size
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
                backgroundColor: accentLineColor, // Lighter accent green
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

           {/* Right Column: Kept empty as per new reference or can be used for subtle elements if needed later */}
           {/* <div className="md:col-span-5 lg:col-span-6"> */}
             {/* Image was here in previous design, now removed based on image_199989.jpg */}
           {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
