'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCart } from '@/components/cart/cart-context';
import { formatInr } from '@/lib/utils';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const shipping = subtotal > 99900 ? 0 : 9900; // amounts in paise
  const total = subtotal + shipping;
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <h1 className="text-2xl font-display font-semibold text-foreground">Your cart is empty</h1>
                <p className="text-gray-600">Add items from the collections to continue.</p>
                <Link href="/collections/candles" className="inline-flex">
                  <Button className="bg-primary text-primary-foreground">Browse Candles</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 space-y-4">
                <h1 className="text-2xl font-display font-semibold text-foreground">Cart</h1>
                <div className="space-y-4">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center justify-between gap-4 border-b pb-4">
                      <div>
                        <div className="font-medium text-foreground">{product.name}</div>
                        <div className="text-sm text-foreground/70">{formatInr(product.price / 100)}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => updateQuantity(product.id, Math.max(1, quantity - 1))}>-</Button>
                        <span className="w-6 text-center">{quantity}</span>
                        <Button variant="outline" size="sm" onClick={() => updateQuantity(product.id, quantity + 1)}>+</Button>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeFromCart(product.id)}>Remove</Button>
                    </div>
                  ))}
                </div>
                <div className="space-y-1 pt-4 border-t">
                  <div className="flex justify-between text-sm text-foreground/80">
                    <span>Subtotal</span>
                    <span>{formatInr(subtotal / 100)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-foreground/80">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : formatInr(shipping / 100)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold text-foreground">
                    <span>Total</span>
                    <span>{formatInr(total / 100)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <Link href="/checkout" className="inline-flex">
                    <Button className="bg-primary text-primary-foreground">Checkout</Button>
                  </Link>
                  <Button variant="ghost" onClick={clearCart}>Clear</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}


