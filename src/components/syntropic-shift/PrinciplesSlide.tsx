'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Network, Repeat } from 'lucide-react'; // Adjusted icons for potential availability

// Placeholder Icons if needed - Replace with actual Lucide imports or custom SVGs if necessary
const LeafIcon = () => <Leaf className="w-6 h-6" />;
const InterlockingShapesIcon = () => <Zap className="w-6 h-6" />; // Using Zap as a placeholder for Mutual Benefit/Synergy
const NetworkIcon = () => <Network className="w-6 h-6" />;
const SproutIcon = () => <Repeat className="w-6 h-6" />; // Using Repeat as a placeholder for Regenerative Cycle

const PrinciplesSlide = () => {
  const principleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger animation
        duration: 0.5,
      }
    })
  };

  const principles = [
    { Icon: LeafIcon, title: "Harmony with Nature", text: "Integrating ecological systems." },
    { Icon: InterlockingShapesIcon, title: "Mutual Benefit", text: "Creating value for all stakeholders." },
    { Icon: NetworkIcon, title: "Holistic Systems Thinking", text: "Understanding interconnectedness." },
    { Icon: SproutIcon, title: "Regenerative Action", text: "Actively enhancing ecosystems." },
  ];

  return (
    <section
      id="slide-principles"
      className="syntropic-slide flex flex-col items-center justify-center p-8 relative bg-secondary/30 text-foreground" // Slightly different bg
    >
      {/* Visual: Subtle architectural patterns + natural textures placeholder */}
      <div className="absolute inset-0 z-0 opacity-5" data-ai-hint="architectural pattern wood grain water texture blend">
         {/* Placeholder */}
      </div>
      <div className="relative z-10 max-w-4xl w-full">
        {/* JS Hint: Animate headline reveal */}
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.1 }}
           className="text-3xl md:text-5xl font-serif mb-12 text-center" style={{ fontFamily: 'var(--font-playfair-display)' }}>
          Human-Syntropic Design: Core Principles
        </motion.h2>
        {/* JS Hint: Animate principles sequentially */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              custom={index}
              variants={principleVariants}
              initial="hidden"
              animate="visible" // Trigger animation when component mounts (or use whileInView)
              className="flex flex-col items-center"
            >
              <principle.Icon /> {/* Use imported icon component */}
              <h4 className="font-semibold text-lg mt-2 mb-1" style={{ fontFamily: 'var(--font-inter)' }}>{principle.title}</h4>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>{principle.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSlide;
