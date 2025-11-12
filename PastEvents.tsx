import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Language } from '../App';
import event1 from 'figma:asset/b46318a10ce89d7130bf180a6e01cf3047360065.png';
import event2 from 'figma:asset/e3a51220c39f7c118dc2eba33052273cccfecb63.png';
import event3 from 'figma:asset/4481feeb38030cbb767918348a630626c2b74199.png';

const translations = {
  zh: {
    title: '我们的活动足迹',
    subtitle: '连接中美，助力留学生职业发展',
    events: [
      {
        title: '2025中美可持续发展研讨会',
        description: '与行业领袖共同探讨国际学生职业规划',
        image: event1
      },
      {
        title: '政府合作交流活动',
        description: '建立官方合作关系，为学生提供更多机会',
        image: event2
      },
      {
        title: '中国游戏开发与创业者峰会',
        description: '跨行业职业发展论坛，拓展求职视野',
        image: event3
      }
    ]
  },
  en: {
    title: 'Our Events & Activities',
    subtitle: 'Connecting China and USA, empowering international students',
    events: [
      {
        title: '2025 Sino-American Symposium on Sustainable Development',
        description: 'Career planning discussions with industry leaders',
        image: event1
      },
      {
        title: 'Government Partnership Exchange',
        description: 'Building official partnerships for more opportunities',
        image: event2
      },
      {
        title: 'China Game Development & Entrepreneurship Summit',
        description: 'Cross-industry career forum expanding horizons',
        image: event3
      }
    ]
  },
};

interface PastEventsProps {
  language: Language;
}

export function PastEvents({ language }: PastEventsProps) {
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % t.events.length);
    }, 5000); // 每5秒切换一次

    return () => clearInterval(timer);
  }, [t.events.length]);

  const currentEvent = t.events[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-amber-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4" style={{ fontWeight: 600 }}>
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600" style={{ fontWeight: 300 }}>
            {t.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
            {/* Image Carousel */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <img
                    src={currentEvent.image}
                    alt={currentEvent.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-2xl md:text-3xl lg:text-4xl text-white mb-3"
                      style={{ fontWeight: 600 }}
                    >
                      {currentEvent.title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="text-lg md:text-xl text-white/90"
                      style={{ fontWeight: 300 }}
                    >
                      {currentEvent.description}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
              {t.events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-12 h-2 bg-white'
                      : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {t.events.map((event, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-4 ring-orange-500 shadow-xl scale-105'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <div className="aspect-video">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-orange-500/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
