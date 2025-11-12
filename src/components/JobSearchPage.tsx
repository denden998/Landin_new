import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Rocket, DollarSign, Shield, Sparkles } from 'lucide-react';
import type { Language } from '../App';

const translations = {
  zh: {
    heroTitle: '求职加速方案',
    heroSubtitle: 'Career Accelerator',
    heroDescription: '我们的旗舰求职服务，专为国际学生和应届毕业生设计。通过系统化的六步流程，帮助您在90天内成功获得理想的工作机会。',
    
    processTitle: '服务流程',
    
    steps: [
      {
        title: '一对一职业定位分析',
        description: '通过深度访谈了解您的背景、技能、兴趣和目标，明确最适合的目标产业与岗位类型。包括行业趋势分析和职业路径规划。',
      },
      {
        title: '简历 + Cover Letter + LinkedIn 优化',
        description: '按北美行业标准撰写和优化所有求职材料，确保 ATS 系统兼容性。包括关键词优化、成就量化和视觉排版。',
      },
      {
        title: '每日简历投递与进度追踪',
        description: '每日精准投递10-20家目标公司，使用智能追踪系统记录所有申请状态，并根据反馈率和回复情况及时调整策略。',
      },
      {
        title: '2次模拟面试（免费包含）',
        description: '包括 HR 行为面试和技术/专业面试各一次，提供录影回放、详细评估报告和针对性改进建议，确保真实面试时的最佳表现。',
      },
      {
        title: 'Offer 比较与薪资谈判支持',
        description: '帮助您全面评估多个 Offer 的薪资、福利、发展机会等因素，提供市场数据参考和专业谈判策略，确保获得最佳条件。',
      },
      {
        title: '入职导向辅导（15天）',
        description: '从入职第一天开始提供15天过渡支持，包括企业文化适应、职场沟通技巧、团队融入策略和初期职业发展规划指导。',
      },
    ],
    
    guarantee: {
      title: '90天成功保障',
      description: '如果在规定时间内未获得 Offer，您可以选择全额退款或免费延长15天服务。这体现了我们对服务质量的信心和对客户成功的承诺。',
    },
    
    premiumTitle: 'Premium Plus 高级方案',
    premiumSubtitle: '专为追求最高效率和个性化服务的求职者设计。此方案结合了求职加速方案的所有服务，并额外提供：',
    
    premiumFeatures: [
      {
        title: '专属高级职业顾问',
        description: '由资深顾问一对一全程指导，提供更深度的行业洞察和个性化策略。',
      },
      {
        title: '无限次模拟面试',
        description: '在您准备好之前，不限制模拟面试的次数，确保每次面试都万无一失。',
      },
      {
        title: '定制化职场技能提升课程',
        description: '根据您的目标岗位，提供定制化的专业技能培训或软件使用指导。',
      },
      {
        title: '入职后持续支持（180天）',
        description: '从入职第一天起提供180天的职业发展支持，助您顺利度过试用期并快速融入新环境。',
      },
      {
        title: '优先资源匹配',
        description: '在同等条件下，优先匹配合作企业的内推机会和独家招聘资源。',
      },
    ],
    
    premiumClosing: 'Premium Plus 方案是您通往梦想职业的加速器，为您提供无与伦比的支持和资源。',
    
    premiumGuarantee: {
      title: '180天成功保障',
      description: '如果在规定时间内未获得 Offer，您可以选择全额退款或免费延长15天服务。',
    },
  },
  en: {
    heroTitle: 'Career Accelerator',
    heroSubtitle: '',
    heroDescription: 'Our flagship job search service, designed specifically for international students and recent graduates. Through a systematic six-step process, we help you secure your ideal job within 90 days.',
    
    processTitle: 'Service Process',
    
    steps: [
      {
        title: 'One-on-One Career Positioning Analysis',
        description: 'Through in-depth interviews, understand your background, skills, interests, and goals to identify the most suitable target industries and job types. Includes industry trend analysis and career path planning.',
      },
      {
        title: 'Resume + Cover Letter + LinkedIn Optimization',
        description: 'Write and optimize all job search materials according to North American industry standards, ensuring ATS system compatibility. Includes keyword optimization, achievement quantification, and visual formatting.',
      },
      {
        title: 'Daily Resume Submission & Progress Tracking',
        description: 'Precisely submit to 10-20 target companies daily, using an intelligent tracking system to record all application statuses and adjust strategies based on feedback and response rates.',
      },
      {
        title: '2 Mock Interviews (Included Free)',
        description: 'Includes one HR behavioral interview and one technical/professional interview, with video playback, detailed evaluation reports, and targeted improvement suggestions to ensure best performance in real interviews.',
      },
      {
        title: 'Offer Comparison & Salary Negotiation Support',
        description: 'Help you comprehensively evaluate multiple offers\' salary, benefits, and development opportunities, providing market data references and professional negotiation strategies to ensure the best terms.',
      },
      {
        title: 'Onboarding Orientation Coaching (15 Days)',
        description: 'Provide 15 days of transition support from day one, including corporate culture adaptation, workplace communication skills, team integration strategies, and early career development planning guidance.',
      },
    ],
    
    guarantee: {
      title: '90-Day Success Guarantee',
      description: 'If you don\'t receive an offer within the specified time, you can choose a full refund or 15 days of free extended service. This reflects our confidence in service quality and commitment to client success.',
    },
    
    premiumTitle: 'Premium Plus Plan',
    premiumSubtitle: 'Designed for job seekers pursuing maximum efficiency and personalized service. This plan combines all Career Accelerator services with additional benefits:',
    
    premiumFeatures: [
      {
        title: 'Dedicated Senior Career Advisor',
        description: 'One-on-one guidance from senior advisors throughout, providing deeper industry insights and personalized strategies.',
      },
      {
        title: 'Unlimited Mock Interviews',
        description: 'No limit on mock interviews until you\'re ready, ensuring every interview is foolproof.',
      },
      {
        title: 'Customized Professional Skills Training',
        description: 'Based on your target position, we provide customized professional skills training or software guidance.',
      },
      {
        title: 'Post-Onboarding Support (180 Days)',
        description: 'From day one, receive 180 days of career development support to smoothly navigate probation and quickly integrate into your new environment.',
      },
      {
        title: 'Priority Resource Matching',
        description: 'Under equal conditions, priority matching for partner company referral opportunities and exclusive recruitment resources.',
      },
    ],
    
    premiumClosing: 'The Premium Plus plan is your accelerator to your dream career, providing unparalleled support and resources.',
    
    premiumGuarantee: {
      title: '180-Day Success Guarantee',
      description: 'If you don\'t receive an offer within the specified time, you can choose a full refund or 15 days of free extended service.',
    },
  },
};

interface JobSearchPageProps {
  language: Language;
  onNavigate?: (page: any) => void;
}

export function JobSearchPage({ language }: JobSearchPageProps) {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl mb-6">{t.heroTitle}</h1>
            {t.heroSubtitle && (
              <p className="text-2xl mb-6 opacity-95">{t.heroSubtitle}</p>
            )}
            <p className="text-xl opacity-90 leading-relaxed">
              {t.heroDescription}
            </p>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Pricing Structure */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center text-gray-900 mb-16">{t.processTitle}</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {t.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-2 border-orange-200 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center flex-shrink-0 text-white">
                        <span className="text-xl">Step {index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12"
            >
              <Card className="border-2 border-green-200 bg-green-50/30 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-gray-900 mb-3">{t.guarantee.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{t.guarantee.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Plus Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full mb-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">{t.premiumTitle}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.premiumSubtitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 mb-12">
            {t.premiumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow border border-orange-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center flex-shrink-0 text-white text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-xl text-orange-700 italic max-w-3xl mx-auto">
              {t.premiumClosing}
            </p>
          </div>

          {/* Premium Guarantee */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-green-200 bg-green-50/30 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-gray-900 mb-3">{t.premiumGuarantee.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.premiumGuarantee.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}