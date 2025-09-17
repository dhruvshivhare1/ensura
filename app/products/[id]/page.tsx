import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { findProductById, listProducts } from '@/lib/products';
import { formatInr } from '@/lib/utils';
import Link from 'next/link';
import { AddToCartActions } from '@/components/product/add-to-cart-actions';

interface ProductPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return listProducts().map(p => ({ id: p.id }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = findProductById(params.id);

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-card">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">{product.name}</h1>
              <div className="text-xl text-primary font-semibold mb-6">{formatInr(product.price)}</div>
              <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

              <AddToCartActions product={product} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


