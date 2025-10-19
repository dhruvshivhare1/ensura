import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from '@/components/cart/cart-context';

export const metadata: Metadata = {
  title: 'Ensaura - Mindful Wellness Products',
  description: 'Mindful apparel for conscious living',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
