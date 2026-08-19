import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '1911 Café POS',
  description: '1911 Café point-of-sale system',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
