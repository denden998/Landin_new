import { Button } from './ui/button';
import type { Language } from '../App';
import heroBackground from 'figma:asset/9c6c1e6ad027b190e3dd25e71700cb32c60b7661.png';

const translations = {
  zh: {
    title1: '让留学的终点，',
    title2: '成为人生的起点',
    subtitle: '专注留学生就业与身份规划',
    cta: '立即获得免费咨询',
  },
  en: {
    title1: 'Turn your graduation into',
    title2: 'a new beginning',
    subtitle: 'Focused on international student employment and visa planning',
    cta: 'Get Free Consultation',
  },
};

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const t = translations[language];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Main Hero Section with Background */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Beach sunset"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>

        {/* Content Container */}
        <div className="relative z-20 h-full flex flex-col justify-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              {/* Main Title */}
              <h1 className="mb-8 leading-tight" style={{ fontWeight: 400 }}>
                <div className="text-5xl md:text-6xl lg:text-8xl text-white mb-3">
                  {t.title1}
                </div>
                <div className="relative inline-block">
                  <div className="text-5xl md:text-6xl lg:text-8xl text-white" style={{ fontWeight: 700 }}>
                    {t.title2}
                  </div>
                  {/* Thick Underline */}
                  <div className="absolute -bottom-3 left-0 w-full h-2 md:h-3 bg-white rounded-full"></div>
                </div>
              </h1>
              
              {/* Subtitle */}
              <p className="text-2xl md:text-3xl text-white/90 mb-12" style={{ fontWeight: 300 }}>
                {t.subtitle}
              </p>
              
              {/* CTA Button */}
              <Button 
                size="lg" 
                onClick={scrollToContact} 
                className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white shadow-2xl px-12 py-7 rounded-full text-xl hover:scale-105 transition-transform duration-300"
                style={{ fontWeight: 500 }}
              >
                {t.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}