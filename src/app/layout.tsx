import './globals.css';
import Header from '@/components/Header/Header.component';
import { Heebo } from 'next/font/google';

const heebo = Heebo({ subsets: ['latin'] })

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${heebo.className} antialiased m-0 p-0`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
