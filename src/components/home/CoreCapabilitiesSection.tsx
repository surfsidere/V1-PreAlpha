tsx
'use client';

import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Megaphone, Cpu, SwatchBook } from 'lucide-react';

interface CoreCapabilitiesSectionProps {
    featuredSolutions: any[]; // Adjust the type as needed
}

const CoreCapabilitiesSection: React.FC<CoreCapabilitiesSectionProps> = ({ featuredSolutions }) => {
    return (
        <section data-ai-hint="core capabilities section" className="py-16 md:py-24 bg-secondary/30">

            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Core Capabilities</h2>
                <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Delivering comprehensive expertise across the real estate lifecycle.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredSolutions.map((solution) => (
                        <div key={solution.title} className="text-center p-6 rounded-lg border border-transparent hover:border-border hover:shadow-sm transition-all duration-300 flex flex-col items-center bg-background/50">
                            <solution.icon className="mx-auto mb-4 text-primary w-10 h-10" />
                            <h3 className="text-xl font-serif mb-2 flex-grow">{solution.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                            <Button variant="link" size="sm" asChild className="p-0 h-auto mt-auto">
                                <Link href={solution.href}>Learn More <ArrowRight className="ml-1 h-3 w-3" /></Link>
                            </Button>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button asChild size="lg" variant="outline">
                        <Link href="/services">View All Solutions</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CoreCapabilitiesSection;

// Placeholder data for featuredSolutions (replace with actual data fetching)
export const featuredSolutions = [
    { title: "Real Estate Advisory", icon: BarChart3, description: "Market analysis, feasibility, investment strategy.", href: "/services/strategic-advisory" },
    { title: "Integrated Management Services", icon: Cpu, description: "Full lifecycle project oversight and management.", href: "/services/development-management" },
    { title: "Marketing & Sales", icon: Megaphone, description: "Targeted strategies for premier properties.", href: "/services/marketing-sales" },
    { title: "Development Coordination & Oversight", icon: SwatchBook, description: "Personalized guidance for bespoke residences.", href: "/build-your-custom-home" },
];
