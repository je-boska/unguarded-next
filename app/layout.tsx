import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import UnguardedMarquee from '@/components/Marquee';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Unguarded',
  description: 'Berlin record label and art platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Header />
      <body className={inter.className}>{children}</body>
      <UnguardedMarquee />
    </html>
  );
}
