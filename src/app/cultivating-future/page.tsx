
'use client'; // Needed for potential client-side animations and interaction libraries

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
// Import icons if needed for Slide 3 (Principles) - replace placeholders
// import { Leaf, Waves, Users, Recycle, Network, GitBranch } from 'lucide-react';

// Placeholder Icons for Slide 3 - Replace with actual Lucide icons or custom SVGs
const LeafIcon = () => <span className="inline-block w-6 h-6">[Leaf]</span>;
const InterlockingShapesIcon = () => <span className="inline-block w-6 h-6">[Shapes]</span>;
const NetworkIcon = () => <span className="inline-block w-6 h-6">[Network]</span>;
const SproutIcon = () => <span className="inline-block w-6 h-6">[Sprout]</span>;


// --- Component ---
export default function SyntropicShiftPage() {
  // JS Hint: Libraries like GSAP ScrollTrigger or fullPage.js might be needed
  // for complex scroll-driven animations and robust snapping.
  // Basic CSS scroll snap is implemented below.

  return (
    <div className="syntropic-shift-container h-screen overflow-y-scroll scroll-snap-y scroll-snap-mandatory">
      {/* Slide 1: The Paradox */}
      <section
        id="slide-paradox"
        className="syntropic-slide flex flex-col items-center justify-center text-center p-8 relative text-white bg-black" // Example dark bg for contrast
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
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4 text-shadow-lg" style={{ fontFamily: 'var(--font-playfair-display)', color: '#FFFFFF' /* White for contrast */ }}>
            Development & Sustainability: An Irreconcilable Truth?
          </h1>
          <p className="text-lg md:text-xl text-white/80 text-shadow" style={{ fontFamily: 'var(--font-inter)' }}>
            Building the future demands we confront a fundamental challenge.
          </p>
        </div>
      </section>

      {/* Slide 2: Introducing Syntropy */}
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
          <h2 className="text-3xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair-display)' }}>
            Beyond Paradox: Embracing Syntropy
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
            Nature operates on syntropy – cooperative systems where elements mutually thrive. Inspired by this biological wisdom, Syntropic Development seeks to create human systems—cities, buildings, businesses—that actively regenerate and enhance their environment, fostering true symbiosis.
          </p>
        </div>
      </section>

      {/* Slide 3: Human-Syntropic Design Principles */}
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
          <h2 className="text-3xl md:text-5xl font-serif mb-12 text-center" style={{ fontFamily: 'var(--font-playfair-display)' }}>
            Human-Syntropic Design: Core Principles
          </h2>
          {/* JS Hint: Animate principles sequentially */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Principle 1 */}
            <div className="flex flex-col items-center">
              <LeafIcon /> {/* Replace with actual icon */}
              <h4 className="font-semibold text-lg mt-2 mb-1" style={{ fontFamily: 'var(--font-inter)' }}>Harmony with Nature</h4>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>Integrating ecological systems.</p>
            </div>
            {/* Principle 2 */}
            <div className="flex flex-col items-center">
              <InterlockingShapesIcon /> {/* Replace with actual icon */}
              <h4 className="font-semibold text-lg mt-2 mb-1" style={{ fontFamily: 'var(--font-inter)' }}>Mutual Benefit</h4>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>Creating value for all stakeholders.</p>
            </div>
            {/* Principle 3 */}
            <div className="flex flex-col items-center">
              <NetworkIcon /> {/* Replace with actual icon */}
              <h4 className="font-semibold text-lg mt-2 mb-1" style={{ fontFamily: 'var(--font-inter)' }}>Holistic Systems Thinking</h4>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>Understanding interconnectedness.</p>
            </div>
            {/* Principle 4 */}
            <div className="flex flex-col items-center">
              <SproutIcon /> {/* Replace with actual icon */}
              <h4 className="font-semibold text-lg mt-2 mb-1" style={{ fontFamily: 'var(--font-inter)' }}>Regenerative Action</h4>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-inter)' }}>Actively enhancing ecosystems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Surfside's Role */}
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
          <h2 className="text-3xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair-display)' }}>
            Our Commitment: Orchestrating a Regenerative Baja
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
            We believe realizing Baja's syntropic potential requires expert orchestration. Surfside acts as your strategic partner and conductor, leveraging our deep local insight and curated network to guide projects that align with regenerative principles, creating enduring value for both our clients and the community.
          </p>
        </div>
      </section>

      {/* Slide 5: Knowledge Commons Teaser */}
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
          <h2 className="text-3xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair-display)' }}>
            Explore Regenerative Pathways
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
            Dive deeper into the practices shaping a conscious future. Explore articles, guides, and case studies on water stewardship, sustainable materials, community-led planning, and more.
          </p>
          <Button size="lg" asChild>
            <Link href="/insights?category=sustainability"> {/* Point to insights filtered by sustainability */}
              Enter the Knowledge Commons
            </Link>
          </Button>
        </div>
      </section>

      {/* Slide 6: The OceanVX Syntropic Incubator */}
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
          <h2 className="text-3xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair-display)' }}>
            Incubating Baja's Syntropic Future
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
            True transformation requires dedicated platforms. OceanVX serves as an open-source incubator and collaborative ecosystem, fostering the development of syntropic business models and community initiatives specifically designed for the challenges and opportunities of Baja California Sur.
          </p>
          <Button size="lg" asChild>
            <Link href="https://www.oceanvx.com/" target="_blank" rel="noopener noreferrer">
              Explore the OceanVX Platform
            </Link>
          </Button>
        </div>
      </section>

      {/* Slide 7: Call to Collaboration */}
      <section
        id="slide-collaborate"
        className="syntropic-slide flex flex-col items-center justify-center text-center p-8 relative bg-background text-foreground"
      >
         {/* Visual: Hopeful horizon image placeholder */}
        <div className="absolute inset-0 z-0">
             <img
               // src="/placeholder-horizon.jpg" // Placeholder SRC
               alt="Expansive Baja horizon representing the future"
               className="w-full h-full object-cover opacity-30"
               data-ai-hint="baja horizon sunrise sunset community nature hope"
             />
             {/* Optional gradient overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-3xl">
           {/* JS Hint: Animate text and CTA reveal, maybe subtle pulse on CTA */}
          <h2 className="text-3xl md:text-5xl font-serif mb-6" style={{ fontFamily: 'var(--font-playfair-display)' }}>
            Co-Create the Baja Transformation.
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
            If you're ready to build beyond convention and contribute to a regenerative legacy in Los Cabos, let's connect. Partner with Surfside to explore projects grounded in purpose and designed for enduring impact.
          </p>
          <Button size="lg" asChild>
             {/* Ensure this link is correct for regenerative project inquiries */}
            <Link href="/contact?inquiry=regenerative_project">
              Discuss Your Regenerative Vision
            </Link>
          </Button>
        </div>
      </section>

       {/* Basic CSS for scroll snapping and slide structure */}
       <style jsx global>{`
         .syntropic-shift-container {
           height: 100vh; /* Changed from svh for broader compatibility */
           overflow-y: scroll;
           scroll-snap-type: y mandatory;
           /* Consider adding smooth scroll behavior */
           scroll-behavior: smooth;
           -webkit-overflow-scrolling: touch; /* Momentum scrolling on iOS */
         }
         .syntropic-slide {
           min-height: 100vh; /* Ensure each slide takes full viewport height */
           scroll-snap-align: start;
           position: relative; /* Needed for absolute positioned backgrounds */
           overflow: hidden; /* Prevent content overflow issues */
           /* Flex properties added directly to the section tag */
           display: flex;
           flex-direction: column; /* Stack content vertically */
           align-items: center; /* Center horizontally */
           justify-content: center; /* Center vertically */
         }
          /* Ensure video covers area and is behind content */
         .syntropic-slide video {
           position: absolute;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
           object-fit: cover;
           z-index: 0;
         }
         /* Ensure text content is above video/background */
         .syntropic-slide > .relative.z-10 {
             position: relative;
             z-index: 10;
         }
          /* Example text shadow for readability on complex backgrounds */
         .text-shadow { text-shadow: 0 1px 3px rgba(0,0,0,0.5); }
         .text-shadow-lg { text-shadow: 0 2px 6px rgba(0,0,0,0.7); }

          /* Basic scrollbar hiding (optional, test usability) */
         /* .syntropic-shift-container::-webkit-scrollbar {
           display: none;
         }
         .syntropic-shift-container {
           -ms-overflow-style: none;
           scrollbar-width: none;
         } */

          /* JS Animation Placeholders (Add actual styles triggered by JS) */
          /* .slide-content.animate-in { opacity: 1; transform: translateY(0); } */
          /* .slide-content { opacity: 0; transform: translateY(20px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; } */
       `}</style>
    </div>
  );
}

// // --- Existing Sections (Now Replaced by Syntropic Slides) ---
// import SyntropicBridgeSection from '@/components/future/SyntropicBridgeSection';
// import CollaborationCallSection from '@/components/future/CollaborationCallSection';

// export default function CultivatingFuturePage() {
//   return (
//     <div>
//       {/* Sections 5 & 6 are now part of the scroll-snap sequence */}
//       {/* <SyntropicBridgeSection /> */}
//       {/* <CollaborationCallSection /> */}
//       <SyntropicShiftPage /> {/* Render the new scroll-snap component */}
//     </div>
//   );
// }
