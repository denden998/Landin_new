import { Card, CardContent } from './ui/card';
import { Award, FileCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import offerImage1 from 'figma:asset/39b003833b6facbd888a324c5c88f4bdc3a6d90b.png';
import offerImage2 from 'figma:asset/d09de04ae6c58a4acb4ff0af955890692c4d9f8a.png';
import offerImage3 from 'figma:asset/1185c3c1e23ad4c29dc039ed01317de1d0cc2c0a.png';
import offerImage4 from 'figma:asset/ebf80d902b5fba3ddcc6f71b603af1ed1ff0e8dd.png';
import offerImage5 from 'figma:asset/a4fe72a69ce184acbcf23b49a7196981e0db4b8a.png';
import offerImage6 from 'figma:asset/996ca3062279cf41e4c5cf590759515f1aaddb6b.png';
import type { Language } from '../App';
import { motion } from 'framer-motion';
import waveBackground from 'figma:asset/379a9735aded060adfabe4a3d72c30de90503975.png';

const translations = {
  zh: {
    title: '成功案例',
    subtitle: '真实的Offer，真实的成功故事',
    realOffer: '真实Offer',
    stories: [
      {
        position: 'Human Resources Assistant',
        company: 'Rock Land Depot LLC',
        location: 'Los Angeles, California',
        testimonial: '在LandIn的帮助下，我成功获得了Rock Land Depot LLC的全职HR职位。他们的简历优化和面试辅导让我充满信心，最终顺利拿到了这份洛杉矶的offer！',
        badge: '全职职位',
      },
      {
        position: 'Account Executive',
        company: 'AdinTouch by Appcreek Inc.',
        location: 'Laguna Hills, CA',
        testimonial: 'LandIn的职业规划服务非常专业，帮我成功转型进入广告科技行业。他们对CPT实习转正职的指导特别有帮助，让我顺利拿到了Account Executive的职位！',
        badge: 'CPT转正职',
      },
      {
        position: 'Data Science & Digital Health Intern',
        company: 'Johnson & Johnson',
        location: 'Titusville, NJ',
        testimonial: '能够进入Johnson & Johnson这样的世界500强企业实习是我的梦想。LandIn不仅帮我优化了简历，还提供了针对性的技术面试辅导，最终成功拿到了数据科学实习offer！',
        badge: '世界500强',
      },
      {
        position: 'Securities Position',
        company: 'J.P. Morgan Securities',
        location: 'Asia Pacific',
        testimonial: '收到J.P. Morgan的offer是我职业生涯的重要里程碑。LandIn帮我深入了解金融行业的要求，提供了专业的面试准备，让我成功进入顶级投行！',
        badge: '顶级投行',
      },
      {
        position: 'Data Scientist II',
        company: 'TD Bank',
        location: 'North America',
        testimonial: 'TD Bank是北美最大的银行之一，能加入他们的数据科学团队我感到非常荣幸。LandIn的技术面试辅导和职业规划服务帮我实现了这个目标！',
        badge: '北美银行',
      },
      {
        position: 'Process Engineering Technician',
        company: 'Medennium, Inc.',
        location: 'Research Development',
        testimonial: '在Medennium开始我的研发职业生涯让我非常兴奋。LandIn不仅帮我准备面试，还提供了详细的入职指导和薪资谈判建议！',
        badge: '研发岗位',
      },
    ],
  },
  en: {
    title: 'Success Stories',
    subtitle: 'Real Offers, Real Success Stories',
    realOffer: 'Real Offer',
    stories: [
      {
        position: 'Human Resources Assistant',
        company: 'Rock Land Depot LLC',
        location: 'Los Angeles, California',
        testimonial: 'With LandIn\'s help, I successfully secured a full-time HR position at Rock Land Depot LLC. Their resume optimization and interview coaching gave me confidence, and I finally got this LA offer!',
        badge: 'Full-Time Position',
      },
      {
        position: 'Account Executive',
        company: 'AdinTouch by Appcreek Inc.',
        location: 'Laguna Hills, CA',
        testimonial: 'LandIn\'s career planning service is very professional. They helped me successfully transition into the ad-tech industry. Their guidance on CPT-to-full-time conversion was especially helpful in securing the Account Executive position!',
        badge: 'CPT to Full-Time',
      },
      {
        position: 'Data Science & Digital Health Intern',
        company: 'Johnson & Johnson',
        location: 'Titusville, NJ',
        testimonial: 'Interning at a Fortune 500 company like Johnson & Johnson was my dream. LandIn not only optimized my resume but also provided targeted technical interview coaching, ultimately helping me secure this data science internship offer!',
        badge: 'Fortune 500',
      },
      {
        position: 'Securities Position',
        company: 'J.P. Morgan Securities',
        location: 'Asia Pacific',
        testimonial: 'Receiving an offer from J.P. Morgan is a major milestone in my career. LandIn helped me deeply understand the finance industry requirements and provided professional interview preparation, leading me to succeed at a top investment bank!',
        badge: 'Top Investment Bank',
      },
      {
        position: 'Data Scientist II',
        company: 'TD Bank',
        location: 'North America',
        testimonial: 'TD Bank is one of the largest banks in North America, and I\'m honored to join their data science team. LandIn\'s technical interview coaching and career planning services helped me achieve this goal!',
        badge: 'North American Bank',
      },
      {
        position: 'Process Engineering Technician',
        company: 'Medennium, Inc.',
        location: 'Research Development',
        testimonial: 'I\'m excited to start my R&D career at Medennium. LandIn not only helped me prepare for interviews but also provided detailed onboarding guidance and salary negotiation advice!',
        badge: 'R&D Position',
      },
    ],
  },
};

interface SuccessStoriesProps {
  language: Language;
}

export function SuccessStories({ language }: SuccessStoriesProps) {
  const t = translations[language];
  const images = [offerImage1, offerImage2, offerImage3, offerImage4, offerImage5, offerImage6];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="success-stories" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl mb-4 text-gray-900">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all hover:scale-110 border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-orange-600" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide flex gap-8 pb-4 px-12 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {t.stories.map((story, index) => (
              <div key={index} className="flex-shrink-0 w-[350px] snap-center">
                <Card className="bg-white hover:shadow-xl transition-shadow border border-gray-200 h-full">
                  <CardContent className="pt-6">
                    <div className="mb-6 relative group">
                      <div className="absolute inset-0 bg-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 shadow-lg">
                          <FileCheck className="h-8 w-8 text-orange-600" />
                        </div>
                      </div>
                      <img
                        src={images[index]}
                        alt={`${story.company} Offer Letter`}
                        className="w-full h-64 object-cover object-top rounded-lg border-2 border-gray-200"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="h-5 w-5 text-orange-600" />
                      <span className="text-sm text-orange-600">{t.realOffer}</span>
                    </div>
                    <p className="text-gray-600 mb-6 italic text-sm">"{story.testimonial}"</p>
                    <div className="border-t border-gray-100 pt-4">
                      <div className="text-gray-600 text-sm mb-1">{story.position}</div>
                      <div className="text-orange-600 mb-1">{story.company}</div>
                      <div className="text-gray-500 text-sm mb-3">{story.location}</div>
                      <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                        {story.badge}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all hover:scale-110 border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-orange-600" />
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}