import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import 'react-loading-skeleton/dist/skeleton.css';
import './globals.css';

const lato = Lato({
  weight: ['900', '700', '300'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Coco Donuts',
  description: 'Some sweets of Happiness!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-black bg-[url('/images/bg-gradient.png')] bg-no-repeat bg-left-top"
    >
      <body className={`${lato.className}`}>{children}</body>
    </html>
  );
}
