import './globals.css';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const jost = Jost({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AcquaLingo',
  description: 'Water education in a fun and accessible way.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/whale.svg" sizes="any" />
      <body className={jost.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
