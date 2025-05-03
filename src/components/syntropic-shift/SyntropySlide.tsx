'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SyntropySlide = () => {
  return (
    <section
      id="slide-syntropy"
      className="syntropic-slide flex flex-col items-center justify-center text-center p-8 relative bg-background text-foreground" // Standard background
    >
      {/* Visual: Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" // Added opacity-40 like other slides
        data-ai-hint="abstract organic animation network synergy"
        src="https://www.surfside.re/wp-content/uploads/2025/05/12922484_3840_2160_60fps-1.mp4" // Added video source
      >
        Your browser does not support the video tag. {/* Fallback */}
      </video>
      {/* Optional overlay if needed for contrast */}
      {/* <div className="absolute inset-0 bg-black/10 z-1"></div> */}

      <div className="relative z-10 max-w-3xl">
        {/* JS Hint: Animate text reveal on slide snap */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-serif mb-6 text-shadow-lg" style={{ fontFamily: 'var(--font-playfair-display)' }}>
          Beyond Paradox: Embracing Syntropy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg leading-relaxed text-shadow" style={{ fontFamily: 'var(--font-inter)' }}>
          Nature operates on syntropy – cooperative systems where elements mutually thrive. Inspired by this biological wisdom, Syntropic Development seeks to create human systems—cities, buildings, businesses—that actively regenerate and enhance their environment, fostering true symbiosis.
        </motion.p>
      </div>
       {/* Add text-shadow style if needed */}
       <style jsx global>{`
         .text-shadow { text-shadow: 0 1px 3px rgba(0,0,0,0.5); }
         .text-shadow-lg { text-shadow: 0 2px 6px rgba(0,0,0,0.7); }
       `}</style>
    </section>
  );
};

export default SyntropySlide;
