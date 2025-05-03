'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ParadoxSlide = () => {
  return (
    <section
      id="slide-paradox"
      className="syntropic-slide flex flex-col items-center justify-center text-center p-8 relative text-white bg-black" // Dark bg for contrast
    >
      {/* Visual: Full viewport video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        data-ai-hint="juxtaposition nature development paradox"
        // src="/placeholder-paradox-video.mp4" // Placeholder SRC
      >
        {/* <source src="/placeholder-paradox-video.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag. {/* Fallback */}
      </video>
      <div className="relative z-10 max-w-3xl">
        {/* JS Hint: Animate text reveal on slide snap */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif font-medium mb-4 text-shadow-lg" style={{ fontFamily: 'var(--font-playfair-display)', color: '#FFFFFF' /* White for contrast */ }}>
          Development & Sustainability: An Irreconcilable Truth?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 text-shadow" style={{ fontFamily: 'var(--font-inter)' }}>
          Building the future demands we confront a fundamental challenge.
        </motion.p>
      </div>
    </section>
  );
};

export default ParadoxSlide;
