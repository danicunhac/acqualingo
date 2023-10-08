import './globals.css';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AcquaLingo',
  description: 'Educação hídrica de forma divertida e acessível.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}