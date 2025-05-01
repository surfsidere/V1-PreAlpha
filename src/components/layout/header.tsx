 "use client";

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Properties', href: '/properties' },
  { label: 'Custom Homes', href: '/build-your-custom-home' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

const logoUrl = "https://www.surfside.re/wp-content/uploads/2022/06/LogoSurfside_white-07.png";
const logoWidth = 150; // Adjust as needed
const logoHeight = 38; // Adjust as needed

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Removed isScrolled state and effect as header is now always blue

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out',
        'bg-primary text-primary-foreground shadow-md' // Always use primary background and foreground
      )}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Replace text logo with Image logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logoUrl}
            alt="Surfside.re Logo"
            width={logoWidth}
            height={logoHeight}
            priority // Load logo quickly
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-white', // Adjusted hover color for blue background
                'text-primary-foreground/90' // Use primary foreground color
               )}
            >
              {item.label}
            </Link>
          ))}
           <Button variant="secondary" size="sm" asChild>
             <Link href="/contact">Contact Us</Link>
           </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              {/* Adjusted button style for blue background */}
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10 hover:text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
              <div className="flex flex-col h-full">
                 <div className="p-4 flex justify-between items-center border-b">
                    {/* Use text logo in mobile menu header for better contrast/simplicity */}
                     <Link href="/" className="text-xl font-serif font-semibold tracking-tight text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                       Surfside<span className='text-primary'>.re</span>
                     </Link>
                   <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                       <X className="h-6 w-6" />
                       <span className="sr-only">Close menu</span>
                     </Button>
                   </SheetClose>
                 </div>
                 <nav className="flex flex-col p-4 space-y-2 flex-grow">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                       <Link
                        href={item.href}
                        className="block py-2 px-3 rounded-md text-lg font-medium text-foreground/90 hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                     </SheetClose>
                  ))}
                </nav>
                <div className="p-4 border-t">
                    <Button className="w-full" asChild onClick={() => setIsMobileMenuOpen(false)}>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                 </div>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
