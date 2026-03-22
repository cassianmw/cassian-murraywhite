import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { siteContent } from '@/lib/site-content';

export const metadata: Metadata = {
  title: `${siteContent.brand} | Portfolio`,
  description: 'Photography, video, and storytelling portfolio for Cassian Murray-White.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
