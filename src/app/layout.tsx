import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const viewport: Viewport = {
  themeColor: '#0E241B',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://greentreebd.com'),
  title: {
    default: 'Green Tree | Sustainable Architecture & Net-Zero Engineering',
    template: '%s | Green Tree',
  },
  description:
    'South Asia’s leader in green building consultancy, LEED Platinum advisory, EDGE Zero Carbon, BEER ratings, and microclimate façade simulation.',
  keywords: [
    'Green Tree Bangladesh',
    'Sustainable Architecture Dhaka',
    'LEED Platinum Dhaka',
    'EDGE Zero Carbon',
    'BEER Rating',
    'LCA Building Consultant',
    'Microclimate Façade Engineering',
  ],
  authors: [{ name: 'Green Tree Building Consultants Ltd.' }],
  creator: 'Green Tree Building Consultants Ltd.',
  icons: {
    icon: '/images/logo/green-tree-logo.png',
    shortcut: '/images/logo/green-tree-logo.png',
    apple: '/images/logo/green-tree-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://greentreebd.com',
    title: 'Green Tree | Where Tranquility Meets Net-Zero Engineering',
    description:
      'Over 250+ certified green building projects, 18M+ sq ft decarbonized, and 100% LEED/EDGE audit success in Bangladesh and South Asia.',
    siteName: 'Green Tree',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Tree | Net-Zero Engineering',
    description: 'Pioneering LEED Platinum & EDGE Zero Carbon architectures across Bangladesh.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans antialiased">
      <body className="min-h-screen flex flex-col bg-sand-100 text-forest-900 selection:bg-eco-200 selection:text-forest-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
