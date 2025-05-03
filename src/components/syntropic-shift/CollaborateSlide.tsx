'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const CollaborateSlide = () => {
  return (
    <section
      id="slide-collaborate"
      className="syntropic-slide flex flex-col items-center justify-center text-center p-8 relative bg-background text-foreground"
    >
       {/* Visual: Hopeful horizon image placeholder */}
      <div className="absolute inset-0 z-0">
           <Image
             // src="/placeholder-horizon.jpg" // Placeholder SRC - Provide a real one
             src="https://picsum.photos/seed/horizon1/1920/1080" // Using picsum placeholder
             alt="Expansive Baja horizon representing the future"
             layout="fill"
             objectFit="cover"
             className="opacity-30"
             data-ai-hint="baja horizon sunrise sunset community nature hope"
           />
           {/* Optional gradient overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-3xl">
         {/* JS Hint: Animate text and CTA reveal, maybe subtle pulse on CTA */}
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-3xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair-display)' }}>
          Co-Create the Baja Transformation.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
          If you're ready to build beyond convention and contribute to a regenerative legacy in Los Cabos, let's connect. Partner with Surfside to explore projects grounded in purpose and designed for enduring impact.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" asChild>
             {/* Ensure this link is correct for regenerative project inquiries */}
            <Link href="/contact?inquiry=regenerative_project">
              Discuss Your Regenerative Vision
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborateSlide;
