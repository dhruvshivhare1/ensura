'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const collections = [
  {
    id: 'shirts',
    name: 'Mindful Apparel',
    description: 'Comfortable, sustainable clothing for conscious living',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/collections/shirts',
    featured: true
  },
  {
    id: 'wellness',
    name: 'Wellness Sets',
    description: 'Curated collections for your perfect self-care ritual',
    image: 'https://images.pexels.com/photos/6143181/pexels-photo-6143181.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/collections/wellness',
    featured: false
  }
];

export default function Collections() {
  // create a scroll-linked transform so the section slides up over the hero
  const { scrollYProgress } = useScroll();
  // map scroll progress to translateY: when starting to scroll, move up to create overlap
  const y = useTransform(scrollYProgress, [0, 0.2, 0.6], ['20vh', '6vh', '0vh']);

  return (
    <motion.section style={{ y }} className="relative bg-gradient-to-b from-accent to-background rounded-t-3xl shadow-xl z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            New Arrivals
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest additions to our collections — crafted with care and intention.
          </p>
        </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">{collection.name}</h3>
                  <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 line-clamp-2">{collection.description}</p>
                  
                  <Link href={collection.href}>
                    <Button 
                      className="bg-white text-primary hover:bg-accent hover:text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform group-hover:scale-105"
                    >
                      Explore Collection
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}