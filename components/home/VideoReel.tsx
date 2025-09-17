'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import OverlapSection from '@/components/ui/overlap-section';
import { Play, Pause } from 'lucide-react';

const reels = [
  {
    id: 1,
    title: 'Candle Making Process',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_1mb.mp4',
    thumbnail: 'https://images.pexels.com/photos/4203091/pexels-photo-4203091.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    title: 'Peaceful Moments',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_2mb.mp4',
    thumbnail: 'https://images.pexels.com/photos/6143181/pexels-photo-6143181.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    title: 'Sustainable Fashion',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_1mb.mp4',
    thumbnail: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function VideoReel() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [videoPlayStates, setVideoPlayStates] = useState<boolean[]>(reels.map(() => true));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setVideoPlayStates(prev => {
          const newStates = [...prev];
          newStates[index] = true;
          return newStates;
        });
      } else {
        video.pause();
        setVideoPlayStates(prev => {
          const newStates = [...prev];
          newStates[index] = false;
          return newStates;
        });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          const index = videoRefs.current.findIndex(ref => ref === video);
          if (entry.isIntersecting) {
            video.play();
            if (index !== -1) {
              setVideoPlayStates(prev => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
              });
            }
          } else {
            video.pause();
            if (index !== -1) {
              setVideoPlayStates(prev => {
                const newStates = [...prev];
                newStates[index] = false;
                return newStates;
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <OverlapSection className="bg-gray-50 rounded-t-3xl shadow-xl">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Behind the Scenes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the artistry and mindfulness that goes into every Ensaura product
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll reel */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto">
          <div className="flex gap-4 snap-x snap-mandatory">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.id}
                className="relative min-w-[220px] aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer snap-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={reel.videoUrl} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-1">{reel.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/80">Watch our story</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => togglePlay(index)}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                      >
                        {videoPlayStates[index] ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={reel.videoUrl} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-semibold text-lg mb-1">{reel.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/80">Watch our story</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => togglePlay(index)}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                    >
                      {videoPlayStates[index] ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </OverlapSection>
  );
}