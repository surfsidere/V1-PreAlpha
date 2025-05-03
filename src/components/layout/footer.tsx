import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { Mail, MapPin, Twitter, Linkedin, Instagram, Phone } from 'lucide-react'; // Assuming usage of Lucide icons

export function Footer() {
  const currentYear = new Date().getFullYear();
  const logoUrl = "https://www.surfside.re/wp-content/uploads/2022/08/dark-2-logo.png"; // Define logo URL
  const logoWidth = 150; // Define logo width
  const logoHeight = 38; // Define logo height

  return (
    <footer className="bg-muted/50 text-muted-foreground border-t">
      {/* Main container with max-width */}
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand/About - Applied text-center to center the inline-block link */}
          <div className="md:col-span-1 text-center"> {/* Removed md:text-left */}
            {/* Replace text link with image logo link */}
            <Link href="/" className="inline-block mb-4"> {/* Increased bottom margin */}
               <Image
                src={logoUrl}
                alt="Surfside.re Logo"
                width={logoWidth}
                height={logoHeight}
              />
            </Link>
            {/* Kept text-left on the paragraph */}
            <p className="text-sm leading-relaxed text-left">
              Integrated expertise for Cabo's premier real estate development, investment, and custom home creation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/properties" className="hover:text-primary transition-colors">Properties</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
             <h4 className="font-semibold text-foreground mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
               <li><Link href="/build-your-custom-home" className="hover:text-primary transition-colors">Custom Homes</Link></li>
               <li><Link href="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
               <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
               {/* Added link to Cultivating Future page */}
               <li><Link href="/cultivating-future" className="hover:text-primary transition-colors">Cultivating the Future</Link></li>
              {/* Add Privacy Policy / Terms if applicable */}
              {/* <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li> */}
            </ul>
          </div>

          {/* Contact Info & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Get In Touch</h4>
            <address className="not-italic space-y-2 text-sm mb-4">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0"/>
                <span>123 Luxury Ave,<br />Cabo San Lucas, BCS, Mexico</span>
              </p>
              <p className="flex items-center">
                 <Mail className="w-4 h-4 mr-2 text-primary flex-shrink-0"/>
                 <a href="mailto:info@surfside.re" className="hover:text-primary transition-colors">info@surfside.re</a>
              </p>
              {/* Add Phone Link */}
              {/* <p className="flex items-center"><Phone className="w-4 h-4 mr-2 text-primary flex-shrink-0"/> <a href="tel:+521234567890" className="hover:text-primary transition-colors">+52 (123) 456-7890</a></p> */}
            </address>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 text-center text-xs">
          <p>&copy; {currentYear} Surfside.re. All Rights Reserved.</p>
          {/* Optional: Add site credit */}
          {/* <p>Website by [Your Agency Name]</p> */}
        </div>
      </div>
    </footer>
  );
}
