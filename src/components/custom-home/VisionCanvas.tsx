
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import Image from 'next/image'; // For representative images
import { motion, AnimatePresence } from 'framer-motion'; // For animations

// --- Component Types ---
// Order of steps: initial -> style -> finish -> scale -> leadCapture
type Step = 'initial' | 'style' | 'finish' | 'scale' | 'leadCapture';
type Style = 'baja_contemporary' | 'hacienda_revival' | 'coastal_pavilion' | 'organic_desert' | null;
type FinishLevel = 'refined' | 'ultra' | 'estate' | null;

const styleOptions = [
    { id: 'baja_contemporary', name: 'Baja Contemporary', patternClass: 'pattern-contemporary', image: 'https://picsum.photos/seed/style1/800/600', "data-ai-hint": "modern architecture clean lines baja" },
    { id: 'hacienda_revival', name: 'Hacienda Revival', patternClass: 'pattern-hacienda', image: 'https://picsum.photos/seed/style2/800/600', "data-ai-hint": "hacienda style courtyard arches mexico" },
    { id: 'coastal_pavilion', name: 'Coastal Pavilion', patternClass: 'pattern-pavilion', image: 'https://picsum.photos/seed/style3/800/600', "data-ai-hint": "beach house open air pavilion ocean" },
    { id: 'organic_desert', name: 'Organic Desert', patternClass: 'pattern-organic', image: 'https://picsum.photos/seed/style4/800/600', "data-ai-hint": "desert architecture natural materials stone wood" },
] as const; // Use const assertion

const finishOptions = [
    { id: 'refined', name: 'Refined Luxury', description: 'High-quality materials and finishes, thoughtful design.' },
    { id: 'ultra', name: 'Ultra-Luxe', description: 'Premium international brands, bespoke details, exceptional craftsmanship.' },
    { id: 'estate', name: 'Estate Curated', description: 'The finest materials, unique architectural features, fully custom approach.' },
] as const; // Use const assertion

// --- Helper Functions ---
// Placeholder for estimate calculation - replace with actual logic
const calculateEstimate = (style: Style, scale: number, finish: FinishLevel): string => {
  // Only calculate if all inputs are present
  if (!style || scale === 0 || !finish) return '$?.?M - $?.?M USD*';

  // Basic placeholder logic - NEEDS REPLACEMENT
  let base = 1;
  if (style === 'hacienda_revival') base = 1.2;
  else if (style === 'coastal_pavilion') base = 1.5;
  else if (style === 'organic_desert') base = 1.3;

  let scaleFactor = scale / 5000; // Example scaling

  let finishMultiplier = 1;
  if (finish === 'ultra') finishMultiplier = 1.5;
  else if (finish === 'estate') finishMultiplier = 2.2;

  const lowEstimate = (base * scaleFactor * finishMultiplier * 2).toFixed(1); // Example calc
  const highEstimate = (base * scaleFactor * finishMultiplier * 3.5).toFixed(1); // Example calc

  return `$${lowEstimate}M - $${highEstimate}M USD*`;
};

// --- Main Component ---
const VisionCanvas: React.FC = () => {
  const [step, setStep] = useState<Step>('initial');
  const [selectedStyle, setSelectedStyle] = useState<Style>(null);
  const [residenceScale, setResidenceScale] = useState<number[]>([5000]); // Default value in array for Shadcn Slider
  const [selectedFinish, setSelectedFinish] = useState<FinishLevel>(null);
  const [email, setEmail] = useState('');
  const [backgroundPattern, setBackgroundPattern] = useState('pattern-initial');
  const [currentImage, setCurrentImage] = useState<string | null>(null); // State for representative image

  const handleStart = () => setStep('style');

  const handleStyleSelect = (styleId: Style) => {
    const styleData = styleOptions.find(s => s.id === styleId);
    if (styleData) {
      setSelectedStyle(styleId);
      setBackgroundPattern(styleData.patternClass);
      setCurrentImage(styleData.image); // Set the representative image
      setStep('finish'); // Go to Finish selection next
    }
  };

  const handleFinishSelect = (finishId: FinishLevel) => {
    setSelectedFinish(finishId);
    setStep('scale'); // Go to Scale selection next
  };

  const handleScaleConfirm = () => {
    setStep('leadCapture'); // Go to Lead Capture next
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual email submission logic (e.g., send to API)
    console.log('Submitting:', { style: selectedStyle, scale: residenceScale[0], finish: selectedFinish, email });
    alert('Vision Summary Request Sent (Simulated)!');
    // Optional: Reset state or show thank you message
  };

  const estimate = calculateEstimate(selectedStyle, residenceScale[0], selectedFinish);
  // Determine if all inputs needed for estimate are available
  const showEstimate = step === 'scale' || step === 'leadCapture';

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
  };

  // Preload images
  useEffect(() => {
    styleOptions.forEach(style => {
      const img = new window.Image();
      img.src = style.image;
    });
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ease-in-out ${backgroundPattern}`}>
      {/* Dynamic Background Image */}
      <AnimatePresence>
        {currentImage && (step === 'finish' || step === 'scale' || step === 'leadCapture') && ( // Show image from finish step onwards
          <motion.div
            key={currentImage} // Key ensures animation runs on change
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }} // Adjust opacity as needed
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }} // Slow crossfade
          >
            <Image
              src={currentImage}
              alt={selectedStyle ? styleOptions.find(s => s.id === selectedStyle)?.name ?? 'Architectural Style' : 'Architectural Style'}
              layout="fill"
              objectFit="cover"
              quality={80}
              priority={step === 'finish'} // Prioritize image when it first appears
            />
            <div className="absolute inset-0 bg-background/60"></div> {/* Optional overlay */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Pattern Overlay - Separate div for pattern */}
      <div className={`absolute inset-0 z-10 transition-all duration-1000 ease-in-out ${backgroundPattern}`}></div>

      {/* Main Content Area */}
      <div className="relative z-20 text-center p-8 w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait"> {/* Use mode="wait" for smoother transitions */}

          {/* Step: Initial */}
          {step === 'initial' && (
            <motion.div
              key="initial"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center"
            >
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-serif font-medium mb-4 text-primary">Craft Your Baja Vision</motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-xl mb-8 text-muted-foreground">Begin shaping your custom residence.</motion.p>
              <motion.div variants={itemVariants}>
                <Button size="lg" onClick={handleStart}>Start</Button>
              </motion.div>
            </motion.div>
          )}

          {/* Step: Style Selection */}
          {step === 'style' && (
            <motion.div
              key="style"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-serif mb-8 text-primary">Select Architectural Style</motion.h2>
              <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {styleOptions.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => handleStyleSelect(style.id)}
                    className={cn(
                      "p-4 md:p-6 border rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      style.patternClass // Apply pattern class to button bg (or inner div)
                      // Adjust background/text for pattern visibility if needed
                    )}
                  >
                    <h3 className="text-md md:text-lg font-medium font-sans text-foreground">{style.name}</h3>
                    {/* Add abstract graphic/texture div inside if needed */}
                  </button>
                ))}
              </motion.div>
               {/* Add Back button if needed */}
               {/* <motion.div variants={itemVariants} className="mt-8">
                 <Button variant="outline" onClick={() => setStep('initial')}>Back</Button>
               </motion.div> */}
            </motion.div>
          )}

          {/* Step: Finish Level Selection */}
          {step === 'finish' && (
            <motion.div
              key="finish"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-lg mx-auto" // Center the finish options
            >
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-serif mb-6 text-primary">Select Desired Finish Level</motion.h2>
              <motion.div variants={itemVariants} className="mb-8">
                {/* Using RadioGroup for selection */}
                <RadioGroup
                  onValueChange={(value) => handleFinishSelect(value as FinishLevel)}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  value={selectedFinish ?? undefined} // Ensure value is controlled
                >
                  {finishOptions.map((finish) => (
                    <div key={finish.id}>
                      <RadioGroupItem value={finish.id} id={finish.id} className="peer sr-only" />
                      <Label
                        htmlFor={finish.id}
                        className={cn(
                          "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground min-h-[100px]", // Added min-h
                          "peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                        )}
                      >
                        <span className="font-medium font-sans mb-1">{finish.name}</span>
                        {/* Tooltip could be added here */}
                        <span className="text-xs text-muted-foreground text-center">{finish.description}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </motion.div>
              <motion.div variants={itemVariants} className="flex justify-center items-center space-x-4">
                 <Button variant="outline" onClick={() => {
                      setStep('style');
                      // Optionally reset finish level or keep it
                      // setSelectedFinish(null);
                      // Resetting image might be jarring, consider keeping it
                    }}>Back</Button>
                 {/* Next button is implicit by selecting an option, triggering handleFinishSelect */}
              </motion.div>
            </motion.div>
          )}

          {/* Step: Scale Selection */}
          {step === 'scale' && (
            <motion.div
              key="scale"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-xl mx-auto" // Center the slider content
            >
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-serif mb-6 text-primary">Define Approximate Scale</motion.h2>
              <motion.div variants={itemVariants} className="space-y-4 mb-8">
                <Label htmlFor="scale-slider" className="text-muted-foreground">
                  Square Footage: {residenceScale[0].toLocaleString()} sq ft
                </Label>
                <Slider
                  id="scale-slider"
                  min={2000}
                  max={15000}
                  step={100}
                  value={residenceScale}
                  onValueChange={setResidenceScale}
                  className="w-full"
                />
                {/* Placeholder for abstract graphic */}
                {/* <div className="h-32 bg-secondary/30 rounded mt-4 flex items-center justify-center text-muted-foreground">
                        [Abstract Graphic Evolving...]
                    </div> */}
              </motion.div>
              <motion.div variants={itemVariants} className="flex justify-center items-center space-x-4">
                <Button variant="outline" onClick={() => {
                    setStep('finish');
                    // Keep scale value or reset if desired
                    // setResidenceScale([5000]);
                }}>Back</Button>
                <Button onClick={handleScaleConfirm}>Next: Get Summary</Button>
              </motion.div>

              {/* Estimate Display */}
              {showEstimate && (
                <motion.p
                  key={`estimate-${estimate}`} // Animate on change
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-muted-foreground mt-8"
                >
                  Estimated Investment Range: {estimate}
                  <br />
                  <span className="text-xs">*Preliminary estimate for illustrative purposes only. Subject to detailed specification and market conditions.</span>
                </motion.p>
              )}
            </motion.div>
          )}

          {/* Step: Lead Capture */}
          {step === 'leadCapture' && selectedStyle && selectedFinish && (
            <motion.div
              key="leadCapture"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-md mx-auto" // Center the form
            >
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-serif mb-4 text-primary">Your Vision Summary</motion.h2>
              <motion.p variants={itemVariants} className="text-muted-foreground mb-6">
                Your initial vision is compelling. To explore the detailed considerations and possibilities for a <span className="font-medium text-foreground">{styleOptions.find(s => s.id === selectedStyle)?.name}</span> residence
                at the <span className="font-medium text-foreground">{finishOptions.find(f => f.id === selectedFinish)?.name}</span> level and ~<span className="font-medium text-foreground">{residenceScale[0].toLocaleString()} sq ft</span> scale,
                receive your personalized Vision Summary via email.
              </motion.p>
              <motion.form variants={itemVariants} onSubmit={handleEmailSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Button variant="outline" onClick={() => setStep('scale')}>Back</Button>
                  <Button type="submit">Send My Vision Summary</Button>
                </div>
              </motion.form>
              {/* Final Estimate Display */}
              {showEstimate && (
                 <motion.p
                    key={`estimate-${estimate}-final`} // Ensure unique key
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }} // Slight delay after form appears
                    className="text-sm text-muted-foreground mt-8"
                  >
                    Estimated Investment Range: {estimate}
                    <br />
                    <span className="text-xs">*Preliminary estimate for illustrative purposes only. Subject to detailed specification and market conditions.</span>
                  </motion.p>
               )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Add hidden pattern divs for preloading/reference */}
      <div className="patterns hidden">
        <div className="pattern-initial"></div>
        <div className="pattern-contemporary"></div>
        <div className="pattern-hacienda"></div>
        <div className="pattern-pavilion"></div>
        <div className="pattern-organic"></div>
        <div className="pattern-neutral"></div>
      </div>

      {/* Basic CSS for patterns (replace with actual SVG/CSS patterns) */}
      <style jsx global>{`
        .pattern-initial { background: linear-gradient(45deg, hsl(var(--background)) 0%, hsl(var(--secondary)/0.3) 100%); /* Soft gradient */}
        .pattern-neutral { background-image: radial-gradient(hsl(var(--border)/0.3) 1px, transparent 1px); background-size: 10px 10px; /* Subtle dots */}
        .pattern-contemporary { background-image: linear-gradient(hsl(var(--border)/0.2) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)/0.2) 1px, transparent 1px); background-size: 20px 20px; /* Clean grid */}
        .pattern-hacienda { background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${'hsl(var(--border))'.substring(5, 11)}' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E"); /* Tile-like */}
        .pattern-pavilion { background: linear-gradient(135deg, hsl(var(--accent)/0.1) 25%, transparent 25%), linear-gradient(225deg, hsl(var(--accent)/0.1) 25%, transparent 25%); background-size: 30px 30px; /* Wave/diagonal */}
        .pattern-organic { background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${'hsl(var(--border))'.substring(5, 11)}' fill-opacity='0.07'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");} /* Contour-like */}

         /* Ensure background covers area */
        .pattern-initial, .pattern-neutral, .pattern-contemporary, .pattern-hacienda, .pattern-pavilion, .pattern-organic {
             background-color: hsl(var(--background));
             background-repeat: repeat;
             position: absolute;
             inset: 0;
             z-index: 10; /* Pattern overlay */
        }

         /* Ensure content is above pattern */
         .relative.z-20 {
            position: relative;
            z-index: 20;
         }
         /* Ensure representative image is behind pattern */
        .absolute.inset-0.z-0 {
            z-index: 0;
         }

      `}</style>

    </section>
  );
};

export default VisionCanvas;

