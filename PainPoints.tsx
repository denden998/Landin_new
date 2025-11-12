import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import type { Language } from '../App';
import waveBackground from 'figma:asset/379a9735aded060adfabe4a3d72c30de90503975.png';

const translations = {
  zh: {
    sectionTitle: '我们懂你的处境',
    subtitle: '因为我们也曾经历过',
    painPoints: [
      {
        number: '①',
        title: '简历石沉大海',
        line1: '一封封投出，却没有回音。',
        line2: '不是你不够优秀，而是你被看见的方式错了。',
        insight: '我们帮你让"被忽视的努力"，成为被录取的理由。',
      },
      {
        number: '②',
        title: '面试总是碰壁',
        line1: '你回答了每一个问题，却没人听懂你的价值。',
        line2: '面试不只是说对答案，而是让公司记住你是谁。',
        insight: '我们教你如何把"我想要这份工作"，变成"他们非你不可"。',
      },
      {
        number: '③',
        title: 'OPT 时间在流逝',
        line1: '日子在倒数，签证像一根紧绷的弦。',
        line2: '焦虑不是因为没机会，而是不知道下一步该往哪走。',
        insight: '我们帮你把"倒计时"，变成你上岸的加速器。',
      },
      {
        number: '④',
        title: '孤独地摸索',
        line1: '没人真正懂留学生求职的孤独。',
        line2: '你不是一个人孤军奋战，我们就在你身边。',
        insight: '从第一封简历，到第一份 offer，我们一起走完全程。',
      },
    ],
  },
  en: {
    sectionTitle: 'We Understand Your Struggles',
    subtitle: 'Because we\'ve been there too',
    painPoints: [
      {
        number: '①',
        title: 'Radio Silence',
        line1: 'Application after application, but no response.',
        line2: 'It\'s not that you\'re not good enough—it\'s how you\'re being seen.',
        insight: 'We help turn "overlooked efforts" into reasons to hire you.',
      },
      {
        number: '②',
        title: 'Final Round Rejections',
        line1: 'You answered every question, but they didn\'t see your value.',
        line2: 'Interviews aren\'t about right answers—they\'re about being memorable.',
        insight: 'We teach you how to turn "I want this job" into "they need you."',
      },
      {
        number: '③',
        title: 'OPT Clock Ticking',
        line1: 'Days are counting down, visa like a tightened string.',
        line2: 'Anxiety isn\'t from lack of opportunity—it\'s not knowing where to go next.',
        insight: 'We turn your "countdown" into an accelerator for landing.',
      },
      {
        number: '④',
        title: 'Navigating Alone',
        line1: 'No one truly understands the loneliness of international student job hunting.',
        line2: 'You\'re not fighting alone, we\'re right here with you.',
        insight: 'From your first resume to your first offer, we walk the entire journey together.',
      },
    ],
  },
};

interface PainPointsProps {
  language: Language;
}

export function PainPoints({ language }: PainPointsProps) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200 transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {t.painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 lg:pr-16' : 'md:pl-12 lg:pl-16'}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 text-white text-xl mb-4">
                      {point.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl text-gray-900 mb-4">
                      {point.title}
                    </h3>

                    {/* Content */}
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {point.line1}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {point.line2}
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mb-4"></div>

                    {/* Insight */}
                    <p className="text-orange-700 leading-relaxed italic">
                      {point.insight}
                    </p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 border-4 border-white shadow-lg z-10">
                  <motion.div
                    animate={isVisible ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.3,
                      ease: "easeInOut"
                    }}
                    className="w-2 h-2 rounded-full bg-white"
                  ></motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}