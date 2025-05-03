'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SyntropySlide = () => {
  return (
    <section
      id="slide-syntropy"
      className="syntropic-slide flex flex-col items-center justify-center text-center p-8 relative bg-background text-foreground" // Standard background
    >
      {/* Visual: Abstract, organic animation background placeholder */}
      <div className="absolute inset-0 z-0 opacity-10" data-ai-hint="abstract organic animation network synergy">
        {/* Placeholder for Animation Canvas/Element */}
        {/* JS Hint: Implement generative background animation here */}
      </div>
      <div className="relative z-10 max-w-3xl">
        {/* JS Hint: Animate text reveal on slide snap */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair-display)' }}>
          Beyond Paradox: Embracing Syntropy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
          Nature operates on syntropy – cooperative systems where elements mutually thrive. Inspired by this biological wisdom, Syntropic Development seeks to create human systems—cities, buildings, businesses—that actively regenerate and enhance their environment, fostering true symbiosis.
        </motion.p>
      </div>
    </section>
  );
};

export default SyntropySlide;
