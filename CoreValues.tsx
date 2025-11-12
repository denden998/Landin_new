import { useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { motion, useInView } from 'motion/react';
import type { Language } from '../App';
import waveBackground from 'figma:asset/379a9735aded060adfabe4a3d72c30de90503975.png';

const translations = {
  zh: {
    // 开场钩子（选择第一个）
    hook1: '别的机构卖承诺，',
    hook2: '我们交付改变。',
    
    // 核心差异点（挑选4个最有力的）
    differences: [
      {
        icon: '💬',
        title: '真诚，不画大饼',
        description: '我们不会说"包你上岸"，我们只说"陪你到上岸"。每一个建议，都基于你真实的条件与时间线。',
      },
      {
        icon: '👩‍🎓',
        title: '懂留学生的现实',
        description: '团队成员都是从留学走来的，我们懂 CPT、OPT、H-1B 的焦虑，也懂在异国找工作的孤独。',
      },
      {
        icon: '🌱',
        title: '职业规划师式辅导',
        description: '不止帮你"找到工作"，更帮你"找到方向"。我们更关心你 5 年后的样子，而不只是这一份Offer。',
      },
      {
        icon: '🤝',
        title: '企业与律师双重资源',
        description: '不只是简历辅导。我们有雇主合作渠道与签证律师团队，帮你在职业与身份之间找到平衡。',
      },
    ],
    
    // 底部统计
    stats: {
      prefix: '📈 ',
      text: '300+ 留学生在 3 个月内拿到面试机会。我们不追求数量，而是一个个真实的改变。',
    },
  },
  en: {
    // Opening hook
    hook1: 'Others sell promises,',
    hook2: 'we deliver transformation.',
    
    // Core differences
    differences: [
      {
        icon: '💬',
        title: 'Honest, no false promises',
        description: 'We don\'t promise "guaranteed placement," we promise "we\'ll walk with you." Every recommendation is based on your real situation and timeline.',
      },
      {
        icon: '👩‍🎓',
        title: 'We understand international students',
        description: 'Our team members are international students too. We understand CPT, OPT, H-1B anxieties, and the loneliness of job hunting abroad.',
      },
      {
        icon: '🌱',
        title: 'Career planning, not just job placement',
        description: 'We don\'t just help you "get a job," we help you "find your direction." We care about who you\'ll become in 5 years, not just this one offer.',
      },
      {
        icon: '🤝',
        title: 'Dual resources: employers & attorneys',
        description: 'More than resume coaching. We have employer partnerships and immigration attorney teams to help you balance career and visa status.',
      },
    ],
    
    // Bottom stats
    stats: {
      prefix: '📈 ',
      text: '300+ international students got interview opportunities within 3 months. We don\'t chase numbers—we create real transformations.',
    },
  },
};

interface CoreValuesProps {
  language: Language;
}

export function CoreValues({ language }: CoreValuesProps) {
  const t = translations[language];
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-orange-50/20 to-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* Opening Hook - 打破印象 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl mb-4 leading-tight">
                <span className="text-gray-800">{t.hook1}</span>
                <br />
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 inline-block relative">
                  {t.hook2}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </strong>
              </h2>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Differences Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {t.differences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            >
              <Card className="group bg-white border border-gray-100 hover:border-orange-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
                <CardContent className="p-8 relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-5 inline-block"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl mb-4 text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
                
                {/* Bottom accent line */}
                <motion.div 
                  className="h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats - Visible Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white border border-orange-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <motion.div
                className="inline-block text-5xl mb-4"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {t.stats.prefix}
              </motion.div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                {t.stats.text}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}