'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const KnowledgeCommonsSlide = () => {
  return (
    <section
      id="slide-knowledge"
      className="syntropic-slide flex flex-col items-center justify-center text-center p-8 relative bg-muted/50 text-foreground" // Different subtle bg
    >
      {/* Visual: Elegant digital interface / library aesthetic placeholder */}
      <div className="absolute inset-0 z-0 opacity-5" data-ai-hint="digital interface blurred text document icons">
         {/* Placeholder */}
      </div>
      <div className="relative z-10 max-w-3xl">
        {/* JS Hint: Animate text and CTA reveal */}
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-3xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair-display)' }}>
          Explore Regenerative Pathways
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
          Dive deeper into the practices shaping a conscious future. Explore articles, guides, and case studies on water stewardship, sustainable materials, community-led planning, and more.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" asChild>
            <Link href="/insights?category=sustainability"> {/* Point to insights filtered by sustainability */}
              Enter the Knowledge Commons
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default KnowledgeCommonsSlide;
