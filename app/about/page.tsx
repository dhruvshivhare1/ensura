'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Leaf, Heart, Sparkles, Award } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/footer';

const values = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: 'Sustainable',
    description: 'We use eco-friendly materials and sustainable production practices in everything we create.'
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Mindful',
    description: 'Every product is designed to promote wellness, self-care, and mindful living.'
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Artisan Quality',
    description: 'Handcrafted with meticulous attention to detail and premium materials.'
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'Ethically Made',
    description: 'Fair trade practices and ethical sourcing guide our entire supply chain.'
  }
];

export default function About() {
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
              Our Story
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Creating moments of peace and mindfulness through thoughtfully crafted products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder’s Note */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-card border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/60 to-transparent" />
            <div className="relative p-8 md:p-12">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent text-primary tracking-wide">Founder’s Note</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                From the Heart Behind Ensauraa
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-gray-700">
                <p>
                  At my core, I have always believed in wellness, in slowing down, and in choosing to prioritize ourselves even when the world tells us otherwise. Like many, I’ve experienced moments of deep self-doubt, struggles with self-esteem, and the weight of questioning my own worth. It was through those very experiences that I discovered the power of self love not as a buzzword, but as a practice that can transform how we see and treat ourselves.
                </p>
                <p>
                  With my background in Psychology, I began to understand that small rituals—affirmations, journaling, mindful spaces, ease our emotions, and nurture our inner strength. Ensauraa grew from that realization and from my heart’s desire to help others access the same tools and knowledge that helped me heal.
                </p>
                <p>
                  The name carries its own story: Ensō, the Zen circle, symbolizes wholeness and the beauty of imperfection; Aura reflects the unique energy we each radiate when aligned with self-love. The Ginkgo leaf, chosen as our emblem, represents resilience and renewal—a reminder that we, too, can grow back stronger, no matter what we’ve endured.
                </p>
                <p>
                  Every product in Ensauraa is more than just an object—it is an invitation. An invitation to pause, to breathe, and to remember that you are worthy, whole, and enough exactly as you are. My hope is that Ensauraa becomes not just a brand you wear or use, but a gentle guide that supports your journey back to yourself.
                </p>
                <p className="italic text-foreground">
                  From my heart to yours, may Ensauraa remind you: you are whole, you are worthy, and you are enough.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-accent" />
                <div>
                  <div className="font-semibold text-foreground">Navya Poply</div>
                  <div className="text-sm text-gray-600">Founder, Ensauraa</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Ensaura
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex p-4 bg-accent rounded-full text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      
      <Footer />
    </div>
  );
}
