import Header from '@/components/layout/Header';
import VideoHero from '@/components/home/VideoHero';
import Collections from '@/components/home/Collections';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import VideoReel from '@/components/home/VideoReel';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <VideoHero />
      <Collections />
      <FeaturedProducts />
      <VideoReel />
      <Testimonials />
      <Footer />
    </main>
  );
}