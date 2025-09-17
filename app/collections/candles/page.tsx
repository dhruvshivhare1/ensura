'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const candles = [
  {
    id: '1',
    name: 'Lavender Dreams',
    price: 28,
    originalPrice: 35,
    image: 'https://images.pexels.com/photos/4203091/pexels-photo-4203091.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 127,
    scent: 'Lavender',
    burnTime: '45 hours'
  },
  {
    id: '2',
    name: 'Eucalyptus Mint',
    price: 32,
    image: 'https://images.pexels.com/photos/6143181/pexels-photo-6143181.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 89,
    scent: 'Eucalyptus',
    burnTime: '50 hours'
  },
  {
    id: '3',
    name: 'Vanilla Serenity',
    price: 30,
    image: 'https://images.pexels.com/photos/4203145/pexels-photo-4203145.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 156,
    scent: 'Vanilla',
    burnTime: '48 hours'
  },
  {
    id: '4',
    name: 'Citrus Zen',
    price: 26,
    image: 'https://images.pexels.com/photos/4203090/pexels-photo-4203090.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 93,
    scent: 'Citrus',
    burnTime: '42 hours'
  },
  {
    id: '5',
    name: 'Rose Garden',
    price: 34,
    image: 'https://images.pexels.com/photos/4203093/pexels-photo-4203093.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 112,
    scent: 'Rose',
    burnTime: '52 hours'
  },
  {
    id: '6',
    name: 'Ocean Breeze',
    price: 29,
    image: 'https://images.pexels.com/photos/4203146/pexels-photo-4203146.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 78,
    scent: 'Ocean',
    burnTime: '46 hours'
  }
];

export default function CandlesCollection() {
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Artisan Candles
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Hand-poured with love, crafted with natural soy wax and premium essential oils
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-4 sm:gap-8 ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {candles.map((candle, index) => (
              <motion.div
                key={candle.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Link href={`/products/${candle.id}`}>
                  <Image
                    src={candle.image}
                    alt={candle.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  </Link>
                  {candle.originalPrice && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      Sale
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(candle.rating) ? 'fill-current' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({candle.reviews})</span>
                  </div>

                  <Link href={`/products/${candle.id}`} className="block">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {candle.name}
                    </h3>
                  </Link>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{`₹${candle.price}`}</span>
                      {candle.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{`₹${candle.originalPrice}`}</span>
                      )}
                    </div>
                    <span className="text-sm text-gray-600">{candle.burnTime}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary font-medium">
                      {candle.scent} Scent
                    </span>
                  </div>

                  <Link href={`/products/${candle.id}`} className="block">
                    <Button className="w-full bg-primary hover:opacity-90 text-primary-foreground rounded-full py-2 transition-all duration-300 transform group-hover:scale-105">
                      Add to Cart
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}