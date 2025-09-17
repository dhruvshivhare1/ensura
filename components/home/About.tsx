'use client';

import { motion } from 'framer-motion';
import OverlapSection from '@/components/ui/overlap-section';
import Image from 'next/image';
import { Leaf, Heart, Sparkles } from 'lucide-react';

const values = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: 'Sustainable',
    description: 'Eco-friendly materials and ethical production practices'
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Mindful',
    description: 'Products designed to promote wellness and self-care'
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Artisan',
    description: 'Handcrafted with attention to detail and quality'
  }
];

export default function About() {
  return (
    <OverlapSection className="bg-white rounded-t-3xl shadow-xl">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Ensaura, we believe wellness is not just about what you use, 
              but how it makes you feel. Founded by Kavya Pugh, a psychology 
              graduate with a deep understanding of mental wellness, Ensaura combines 
              mindful design with thoughtful craftsmanship.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Rooted in the philosophy of self-kindness, Ensaura combines 
              information, design, mental health and guided promoting practices 
              to help individuals reconnect with themselves.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 p-3 bg-accent rounded-full text-primary">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About Ensaura"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-50" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-40" />
          </motion.div>
        </div>
      </div>
    </OverlapSection>
  );
}