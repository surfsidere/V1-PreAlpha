
'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Grid2x2Check, // Correct icon
  DraftingCompass,
  FileText,
  HardHat,
  KeyRound,
  ShieldCheck, // Changed from Star
} from 'lucide-react'; // Import suggested icons

const processSteps = [
  {
    id: 1,
    title: 'Vision & Site Selection',
    description:
      'Understanding your unique aspirations and identifying the ideal Baja Sur canvas for your future residence.',
    Icon: Grid2x2Check, // Correct icon used here
  },
  {
    id: 2,
    title: 'Design Collaboration',
    description:
      'Partnering with elite architects and designers to translate your vision into architectural reality, ensuring harmony and function.',
    Icon: DraftingCompass,
  },
  {
    id: 3,
    title: 'Permitting & Entitlements',
    description:
      'Expertly navigating the local regulatory landscape to secure necessary approvals seamlessly and efficiently.',
    Icon: FileText,
  },
  {
    id: 4,
    title: 'Meticulous Construction',
    description:
      'Overseeing every detail with trusted builders, ensuring adherence to design, budget, timeline, and uncompromising quality.',
    Icon: HardHat,
  },
  {
    id: 5,
    title: 'Finishing & Handover',
    description:
      'Ensuring every final detail meets exacting standards before welcoming you to your completed bespoke home.',
    Icon: KeyRound,
  },
  {
    id: 6,
    title: 'Unparalleled Quality',
    description:
      'Leveraging our curated network and rigorous oversight to deliver exceptional craftsmanship and enduring materials.',
    Icon: ShieldCheck, // Changed from Star to ShieldCheck
  },
];

const FlowingJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'], // Adjust offset as needed
  });

  // Simple log to check scroll progress value - remove in production
//   useMotionValueEvent(scrollYProgress, 'change', (latest) => {
//     console.log('Scroll Progress:', latest);
//   });

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-screen-lg relative">
        {/* The Path Line */}
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted-foreground/30 origin-top hidden md:block" // Hide on mobile
          style={{
            scaleY: scrollYProgress,
            translateX: '-50%', // Center the line
          }}
        />

        {/* Steps */}
        <div className="relative z-10 space-y-24 md:space-y-32">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }} // Trigger when 40% is visible
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 * index }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              {/* Node and Icon (Positioned relative to path on desktop) */}
              <div
                className={cn(
                  'flex items-center justify-center w-full md:w-1/2',
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2' // Alternate sides
                )}
              >
                <div className="relative flex flex-col items-center">
                  {/* Icon Wrapper */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                    className="text-primary mb-4 md:mb-0 relative z-10" // Added relative z-10 to ensure icon is above the path line if overlap occurs
                    aria-hidden="true"
                  >
                    {/* Apply size directly to the icon */}
                    <step.Icon className="w-10 h-10 md:w-12 md:h-12" />
                  </motion.div>
                </div>
              </div>

              {/* Text Content */}
              <div
                className={cn(
                  'w-full md:w-1/2 text-center md:text-left',
                  index % 2 === 0 ? 'md:order-2' : 'md:order-1' // Alternate sides
                )}
              >
                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                  className="text-2xl font-serif font-medium mb-2 text-foreground" // Use Brand Sans Serif H3 style
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.4 + 0.1 * index }}
                  className="text-muted-foreground leading-relaxed text-sm md:text-base" // Use Brand Sans Serif Body style
                >
                  {step.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Add JS logic for path animation if SVG approach is strictly needed,
          otherwise, the motion.div scaleY provides a simple visual connection.
          Intersection Observer logic is handled by framer-motion's whileInView.
          Ensure framer-motion is installed: npm install framer-motion */}
    </section>
  );
};

export default FlowingJourney;
