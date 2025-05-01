tsx
'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

interface CommunitySectionProps {}

const CommunitySection: React.FC<CommunitySectionProps> = ({}) => {
  return (
    <section
      data-ai-hint="community section"
      className="py-16 md:py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto p-8 rounded-lg border border-border bg-gradient-to-br from-background/50 to-background">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Building a Better Future, Together.
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our commitment extends beyond development to fostering sustainable
            practices and enriching the community fabric of Baja California Sur.
          </p>
          <Button asChild variant="secondary" disabled>
            <span className="cursor-not-allowed">Coming Soon</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection