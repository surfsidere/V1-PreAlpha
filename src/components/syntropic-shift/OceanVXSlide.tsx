'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const OceanVXSlide = () => {
  return (
    <section
      id="slide-oceanvx"
      className="syntropic-slide flex flex-col items-center justify-center text-center p-8 relative bg-secondary/30 text-foreground" // Another bg variant
    >
       {/* Visual: Dynamic data/network animation placeholder */}
      <div className="absolute inset-0 z-0 opacity-10" data-ai-hint="node graph generative pattern tech nature blend">
         {/* Placeholder for Animation */}
      </div>
      <div className="relative z-10 max-w-3xl">
        {/* JS Hint: Animate text and CTA reveal */}
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-3xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair-display)' }}>
          Incubating Baja's Syntropic Future
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
          True transformation requires dedicated platforms. OceanVX serves as an open-source incubator and collaborative ecosystem, fostering the development of syntropic business models and community initiatives specifically designed for the challenges and opportunities of Baja California Sur.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" asChild>
            <Link href="https://www.oceanvx.com/" target="_blank" rel="noopener noreferrer">
              Explore the OceanVX Platform
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OceanVXSlide;
