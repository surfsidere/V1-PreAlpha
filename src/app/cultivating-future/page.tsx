'use client'; // Needed for potential client-side animations and interaction libraries

import React from 'react';
import {
  ParadoxSlide,
  SyntropySlide,
  PrinciplesSlide,
  RoleSlide,
  KnowledgeCommonsSlide,
  OceanVXSlide,
  CollaborateSlide
} from '@/components/syntropic-shift'; // Import new slide components
import { cn } from '@/lib/utils';


// --- Component ---
export default function SyntropicShiftPage() {
  // JS Hint: Libraries like GSAP ScrollTrigger or fullPage.js might be needed
  // for complex scroll-driven animations and robust snapping.
  // Basic CSS scroll snap is implemented below.

  return (
    <div className="syntropic-shift-container h-screen overflow-y-scroll scroll-snap-y scroll-snap-mandatory">
      <ParadoxSlide />
      <SyntropySlide />
      <PrinciplesSlide />
      <RoleSlide />
      <KnowledgeCommonsSlide />
      <OceanVXSlide />
      <CollaborateSlide />

       {/* Basic CSS for scroll snapping and slide structure */}
       {/* Keep global styles here as they apply to the container and all slides */}
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
           /* Flex properties moved to individual slide components */
           display: flex; /* Keep flex for basic centering */
           align-items: center;
           justify-content: center;
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

         /* JS Animation Placeholders (Add actual styles triggered by JS) */
          /* .slide-content.animate-in { opacity: 1; transform: translateY(0); } */
          /* .slide-content { opacity: 0; transform: translateY(20px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; } */
       `}</style>
    </div>
  );
}
