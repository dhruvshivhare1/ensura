'use client';

import { useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { findProductById } from '@/lib/products';
import { formatInr } from '@/lib/utils';

export default function CheckoutPage() {
  const params = useSearchParams();
  const router = useRouter();
  const productId = params.get('productId') ?? '';
  const initialQty = Number(params.get('quantity') ?? '1');
  const [quantity, setQuantity] = useState<number>(initialQty > 0 ? initialQty : 1);

  const product = useMemo(() => (productId ? findProductById(productId) : undefined), [productId]);
  const subtotal = product ? product.price * quantity : 0;
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    // In real app, create order and redirect to payment (e.g., Stripe/Razorpay)
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-display font-semibold text-foreground">Shipping Address (India)</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" />
                  <Input placeholder="Phone Number" />
                </div>
                <Input placeholder="Address Line" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Input placeholder="City" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      {['Delhi','Maharashtra','Karnataka','Tamil Nadu','Uttar Pradesh','West Bengal','Gujarat','Rajasthan','Telangana','Kerala']
                        .map(s => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <Input placeholder="PIN Code" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-display font-semibold text-foreground">Payment</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Cardholder Name" />
                  <Input placeholder="Card Number" />
                  <Input placeholder="Expiry (MM/YY)" />
                  <Input placeholder="CVV" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-display font-semibold text-foreground">Order Summary</h2>
                {product ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-foreground/80">{product.name}</div>
                      <div className="text-sm font-medium">{formatInr(product.price)}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-foreground/80">Quantity</div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
                        <span className="w-6 text-center">{quantity}</span>
                        <Button variant="outline" size="sm" onClick={() => setQuantity(q => q + 1)}>+</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="text-sm text-foreground/80">Subtotal</div>
                      <div className="text-sm font-medium">{formatInr(subtotal)}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-foreground/80">Shipping</div>
                      <div className="text-sm font-medium">{shipping === 0 ? 'Free' : formatInr(shipping)}</div>
                    </div>
                    <div className="flex items-center justify-between text-foreground font-semibold text-lg pt-2 border-t">
                      <div>Total</div>
                      <div>{formatInr(total)}</div>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground" onClick={handlePlaceOrder}>Place Order</Button>
                  </div>
                ) : (
                  <div className="text-sm text-foreground/80">No product selected.</div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


