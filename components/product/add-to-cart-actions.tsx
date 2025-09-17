'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCart } from '@/components/cart/cart-context';
import { Product } from '@/types';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

interface AddToCartActionsProps {
  product: Product;
}

export function AddToCartActions({ product }: AddToCartActionsProps) {
  const { addToCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();

  return (
    <div className="flex items-center gap-3">
      <Link href={`/checkout?productId=${product.id}&quantity=1`} className="inline-flex">
        <Button className="bg-primary text-primary-foreground">Buy Now</Button>
      </Link>
      <Button
        variant="outline"
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        onClick={() => {
          addToCart(product, 1);
          toast({ title: 'Added to cart', description: product.name });
          router.push('/cart');
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
}


