import { Users, Award, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { AnimatedStat } from './AnimatedStats';
import type { Language } from '../App';
import waveBackground from 'figma:asset/379a9735aded060adfabe4a3d72c30de90503975.png';

const translations = {
  zh: {
    title: '关于 LandIn',
    subtitle: '不只是求职，而是人生的新篇章',
    painPointsTitle: '你是否也在经历这些？',
    painPoints: [
      '投了几百份简历，石沉大海',
      '面试总是卡在身份问题上',
      '被无良中介坑过，不敢再信任',
      '眼看着OPT快到期，却还没找到工作',
      '不知道H-1B抽签失败后该怎么办',
    ],
    intro1: '我们知道，投了几百封简历没有回复的感觉。',
    intro2: '所以我们不只改你的简历——',
    intro3: '我们重写你的故事。',
    trustTitle: '实力证据',
    trustSubtitle: '数据会说话',
    stats: [
      { number: 300, suffix: '+', label: '成功上岸学员' },
      { number: 92, suffix: '%', label: 'H1B续签成功率' },
      { number: 4.9, suffix: '/5', label: '学员满意度' },
      { number: 100, suffix: '+', label: '合作企业' },
    ],
    trustPoints: [
      {
        icon: '🧠',
        title: '资深顾问团队',
        description: '我们不会催促你，只陪伴你找到真正适合的方向。',
      },
      {
        icon: '🏢',
        title: '真实企业资源',
        description: '100+ 真实雇主合作，不是虚假内推，是实打实的机会。',
      },
      {
        icon: '⚙️',
        title: '一对一定制方案',
        description: '每个人的路不一样，我们为你量身定制专属求职策略。',
      },
      {
        icon: '📈',
        title: '全程身份规划',
        description: '从OPT到H1B，律师团队全程护航你的身份之路。',
      },
    ],
    closingLine1: '我们陪留学生找到方向——',
    closingLine2: '从第一份实习，到人生的起点。',
  },
  en: {
    title: 'About LandIn',
    subtitle: 'Not just job hunting—a new chapter of life',
    painPointsTitle: 'Are You Experiencing These Challenges?',
    painPoints: [
      'Sent hundreds of resumes with no response',
      'Always stuck on visa status during interviews',
      'Been scammed by unreliable agencies, afraid to trust again',
      'OPT expiring soon but still haven\'t found a job',
      'Don\'t know what to do after H-1B lottery fails',
    ],
    intro1: 'We know how it feels to send hundreds of applications with no response.',
    intro2: 'So we don\'t just edit your resume—',
    intro3: 'We rewrite your story.',
    trustTitle: 'Proven Results',
    trustSubtitle: 'The numbers speak for themselves',
    stats: [
      { number: 300, suffix: '+', label: 'Success Stories' },
      { number: 92, suffix: '%', label: 'H1B Success Rate' },
      { number: 4.9, suffix: '/5', label: 'Client Satisfaction' },
      { number: 100, suffix: '+', label: 'Partner Companies' },
    ],
    trustPoints: [
      {
        icon: '🧠',
        title: 'Expert Advisory Team',
        description: 'We don\'t rush you—we walk with you to find what truly fits.',
      },
      {
        icon: '🏢',
        title: 'Real Corporate Resources',
        description: '100+ real employer partnerships—not fake referrals, but genuine opportunities.',
      },
      {
        icon: '⚙️',
        title: 'One-on-One Customized Plans',
        description: 'Everyone\'s path is different. We create a personalized strategy just for you.',
      },
      {
        icon: '📈',
        title: 'Complete Visa Planning',
        description: 'From OPT to H1B, our legal team guides you through every step.',
      },
    ],
    closingLine1: 'We help international students find their direction—',
    closingLine2: 'From first internship to life\'s new beginning.',
  },
};

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const t = translations[language];
  const icons = [Users, Award, Heart];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-b from-orange-50/20 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl mb-6 text-gray-900">{t.painPointsTitle}</h3>
          <div className="space-y-3 mb-8">
            {t.painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{point}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md mb-8">
            <p className="text-lg text-gray-700 mb-4">
              <span className="text-orange-600">{language === 'zh' ? '上岸 LandIn' : 'LandIn'}</span> {t.intro1}
            </p>
            <p className="text-lg text-gray-700">
              {t.intro2}
            </p>
            <p className="text-lg text-gray-700">
              {t.intro3}
            </p>
          </div>

          <h3 className="text-2xl mb-2 text-center text-gray-900">{t.trustTitle}</h3>
          <p className="text-xl mb-8 text-center text-orange-600">{t.trustSubtitle}</p>
          
          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-8">
            {t.stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {t.trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 text-center group relative overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-4">
                    {point.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg mb-3 text-gray-900">{point.title}</h4>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Trust Section Closing */}
          <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-md mb-8 text-center">
            <p className="text-xl text-gray-800 mb-3 leading-relaxed">
              {t.closingLine1}
            </p>
            <p className="text-xl text-orange-700 leading-relaxed">
              {t.closingLine2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}