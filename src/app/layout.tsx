'use client';

import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/Header/Header.component';

const heebo = localFont({
  src: [
    {
      path: '../../public/fonts/Heebo.ttf',
      weight: '400',
    },
  ],
  variable: '--lora-font',
});

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${heebo.className} font-sans m-0 p-0`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
