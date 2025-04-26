
import type { Metadata } from 'next';
import { Inter, Lora, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Surfside Digital Embassy - Integrated Real Estate Expertise in Cabo',
  description: 'Surfside offers integrated expertise for premier real estate development, investment, and custom home creation in Cabo San Lucas.',
  // Add more specific metadata relevant to SEO
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          lora.variable,
          robotoMono.variable
        )}
      >
        <Header />
        {/* Ensure main content area allows header to potentially overlay */}
        <main className="flex-grow pt-16 md:pt-20">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

