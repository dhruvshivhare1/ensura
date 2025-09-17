'use client';

import { motion } from 'framer-motion';
import OverlapSection from '@/components/ui/overlap-section';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredProducts = [
  {
    id: '1',
    name: 'Lavender Dreams Candle',
    price: 28,
    originalPrice: 35,
    image: 'https://images.pexels.com/photos/4203091/pexels-photo-4203091.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 127,
    category: 'candles',
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Zen Harmony Tee 556677',
    price: 45,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 89,
    category: 'shirts',
    badge: 'New'
  },
  {
    id: '3',
    name: 'Eucalyptus Mint Candle 556677',
    price: 32,
    image: 'https://images.pexels.com/photos/6143181/pexels-photo-6143181.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 156,
    category: 'candles',
    badge: 'Limited Edition'
  },
  {
    id: '4',
    name: 'Mindful Moments Hoodie 556677',
    price: 68,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 93,
    category: 'shirts'
  }
];

export default function FeaturedProducts() {
  return (
    <OverlapSection className="bg-white rounded-t-3xl shadow-xl">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites that embody our commitment to quality and mindfulness
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                    {product.badge}
                  </div>
                )}
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">{`₹${product.price}`}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{`₹${product.originalPrice}`}</span>
                    )}
                  </div>
                </div>

                <Link href={`/products/${product.id}`}>
                  <Button className="w-full bg-primary hover:opacity-90 text-primary-foreground rounded-full py-2 transition-all duration-300 transform group-hover:scale-105">
                    Add to Cart
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/collections">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full transition-all duration-300"
            >
              View All Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </OverlapSection>
  );
}