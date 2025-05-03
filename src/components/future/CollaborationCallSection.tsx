'use client'; // Add 'use client' if scroll-triggered animations are implemented client-side

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image'; // Import Image for potential static background
import { motion } from 'framer-motion'; // Assuming framer-motion for animations

const CollaborationCallSection: React.FC = () => {
  // Placeholder for background - Could be static image, video, or abstract animation
  // Using a placeholder color for demonstration
  const backgroundStyle = {
    // Example placeholder, replace with actual implementation
    backgroundColor: 'hsl(var(--background))', // Use standard background for contrast
  };

  // Animation Variants (Example using framer-motion)
   const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        // Stagger children animations
        staggerChildren: 0.2,
        delayChildren: 0.1 // Slight delay after section reveal
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const ctaVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
           // Add subtle pulse/shimmer effect after initial animation if desired via `animate` prop later
        }
      }
    };


  return (
    <motion.section
      className="relative flex items-center justify-center min-h-[50vh] overflow-hidden"
      // Add scroll-triggered animation
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% is visible
      variants={sectionVariants}
    >
      {/* Background Placeholder */}
      {/* Developer Note: Replace this div with actual background implementation (image, video, animation).
          Ensure it complements Section 5 and aligns with brand style. */}
      <div
        className="absolute inset-0 z-0"
        style={backgroundStyle}
        data-ai-hint="baja community action thriving nature horizon"
      >
         {/* Example using Image component if static background is chosen */}
         {/*
         <Image
            src="/placeholder-community-future.jpg" // Replace with actual image path
            alt="Community collaboration in Baja"
            layout="fill"
            objectFit="cover"
            quality={85}
            className="opacity-30" // Adjust opacity as needed
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50"></div>
         */}
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-16 text-center max-w-3xl" // Adjusted max-width
      >
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif mb-4 text-foreground" // Using Brand H2/H3 style
          variants={itemVariants}
        >
          Become Part of the Baja Transformation.
        </motion.h2>

        {/* Body Text */}
        <motion.p
          className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8" // Using Brand Body style
          variants={itemVariants}
        >
          The future of Los Cabos is not just built, it's co-created. If you share a vision for development that respects heritage, empowers communities, and pioneers regenerative practices, let's explore the possibilities together. Surfside offers the strategic guidance and expert orchestration to bring conscious projects to life.
        </motion.p>

        {/* CTA Button */}
         {/* Apply separate animation variant for potential subtle effects later */}
        <motion.div variants={ctaVariants}>
          <Button size="lg" asChild>
             {/* Target link updated as per prompt - note this is unusual */}
            <Link href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/web-form.html" target="_blank" rel="noopener noreferrer">
              Discuss Your Regenerative Project
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CollaborationCallSection;
