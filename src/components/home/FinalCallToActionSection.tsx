'use client';


import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface FinalCallToActionSectionProps {
  // Add any props your component will need here
}

const FinalCallToActionSection: React.FC<FinalCallToActionSectionProps> = ({}) => {
  return <section data-ai-hint="final call to action section" className="py-16 md:py-24 bg-primary text-primary-foreground">

    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to start the conversation?</h2>
      <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
        Let's discuss how Surfside's integrated expertise can bring your Cabo vision to life.
      </p>
      <Button size="lg" variant="secondary" asChild>
        <Link href="/contact">
          Get In Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
      </Button>
    </div>
  </section>
}



export default FinalCallToActionSection;
