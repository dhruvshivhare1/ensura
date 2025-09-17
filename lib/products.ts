import { Product } from '@/types';

const products: Product[] = [
  {
    id: '1',
    name: 'Lavender Dreams Candle',
    description: 'Hand-poured soy candle with calming lavender essential oil. 45-hour burn time.',
    price: 2800,
    category: 'candles',
    images: [
      'https://images.pexels.com/photos/4203091/pexels-photo-4203091.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    stock: 25,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    name: 'Mindful Moments Hoodie',
    description: 'Cozy hoodie crafted from sustainable fabrics for everyday mindfulness.',
    price: 6800,
    category: 'shirts',
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    stock: 20,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Zen Harmony Tee',
    description: 'Organic cotton tee designed for mindful comfort and everyday wear.',
    price: 4500,
    category: 'shirts',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    stock: 40,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'Eucalyptus Mint Candle',
    description: 'Refreshing eucalyptus and mint blend for a crisp, invigorating ambience.',
    price: 3200,
    category: 'candles',
    images: [
      'https://images.pexels.com/photos/6143181/pexels-photo-6143181.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    stock: 18,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function listProducts(): Product[] {
  return products;
}

export function findProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function listProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category);
}


