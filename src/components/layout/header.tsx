 "use client";

import Link from 'next/link';
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

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent',
        isScrolled ? 'text-foreground' : 'text-white' // Adjust text color based on scroll
      )}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-semibold tracking-tight">
          Surfside<span className={cn(isScrolled ? 'text-primary' : 'text-white/90')}>.re</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isScrolled ? 'text-foreground/80' : 'text-white/90 hover:text-white'
               )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isScrolled ? 'text-foreground' : 'text-white hover:text-white/90 hover:bg-white/10')}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
              <div className="flex flex-col h-full">
                 <div className="p-4 flex justify-between items-center border-b">
                    <Link href="/" className="text-xl font-serif font-semibold tracking-tight" onClick={() => setIsMobileMenuOpen(false)}>
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
