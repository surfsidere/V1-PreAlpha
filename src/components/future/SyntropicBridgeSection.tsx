'use client'; // Add 'use client' if scroll-triggered animations are implemented client-side

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Assuming framer-motion for animations

const SyntropicBridgeSection: React.FC = () => {
  // Placeholder for background - Could be video, canvas animation, or static image
  // For demonstration, using a simple gradient placeholder
  const backgroundStyle = {
    // Example gradient, replace with actual implementation
    background: 'linear-gradient(to bottom, hsl(var(--secondary)/0.5), hsl(var(--muted)/0.5))',
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
        staggerChildren: 0.2
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

  return (
    <motion.section
      className="relative flex items-center justify-center min-h-[50vh] overflow-hidden"
      // Add scroll-triggered animation (requires JS setup with Intersection Observer or framer-motion's viewport)
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% is visible
      variants={sectionVariants}
    >
      {/* Dynamic Background Placeholder */}
      {/* Developer Note: Replace this div with actual background implementation (video, animation, image).
          Ensure it's performant and responsive. */}
      <div
        className="absolute inset-0 z-0"
        style={backgroundStyle}
        data-ai-hint="abstract network animation syntropic data flow"
        // TODO: Implement background animation logic here
      >
        {/* Placeholder for animated background */}
      </div>

      {/* Slight overlay for text readability if needed */}
      {/* <div className="absolute inset-0 bg-background/10 z-10"></div> */}

      {/* Content Container */}
      <motion.div
        className="relative z-20 container mx-auto px-4 py-16 text-center max-w-3xl" // Adjusted max-width
      >
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl font-serif mb-4 text-foreground" // Using Brand H2/H3 style
          variants={itemVariants}
        >
          Incubating Baja's Regenerative Future: The OceanVX Platform.
        </motion.h2>

        {/* Body Text */}
        <motion.p
          className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8" // Using Brand Body style
          variants={itemVariants}
        >
          Moving beyond 'less harm' requires new models inspired by nature's own synergy. Syntropic development aims to create self-sustaining systems that enhance ecological health, social cohesion, and economic vitality. OceanVX is an open-source platform and incubator dedicated to cultivating these regenerative business and community models here in Baja California Sur.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Button size="lg" asChild>
            {/* Target link updated */}
            <Link href="https://www.oceanvx.com/" target="_blank" rel="noopener noreferrer">
              Explore the OceanVX Platform
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SyntropicBridgeSection;
