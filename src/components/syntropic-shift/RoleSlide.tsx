'use client';

import React from 'react';
import { motion } from 'framer-motion';

const RoleSlide = () => {
  return (
    <section
      id="slide-role"
      className="syntropic-slide flex items-center justify-center p-8 relative bg-background text-foreground"
    >
       {/* Visual: Sophisticated, calm background placeholder */}
      <div className="absolute inset-0 z-0 opacity-10" data-ai-hint="subtle texture olive green wash planning coordination image">
         {/* Placeholder */}
      </div>
      <div className="relative z-10 max-w-3xl text-center">
        {/* JS Hint: Animate text reveal */}
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-3xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair-display)' }}>
          Our Commitment: Orchestrating a Regenerative Baja
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
          We believe realizing Baja's syntropic potential requires expert orchestration. Surfside acts as your strategic partner and conductor, leveraging our deep local insight and curated network to guide projects that align with regenerative principles, creating enduring value for both our clients and the community.
        </motion.p>
      </div>
    </section>
  );
};

export default RoleSlide;
