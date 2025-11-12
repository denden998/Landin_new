import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MonitorPlay, Building2, Target, UserCheck, TrendingUp, FileCheck } from 'lucide-react';
import type { Language } from '../App';

const translations = {
  zh: {
    heroTitle: '实习服务',
    heroSubtitle: '为你的职业生涯打下坚实基础',
    
    overviewTitle: '实习服务介绍',
    overviewSubtitle: 'Program Overview',
    
    directionsTitle: '两大实习方向',
    
    pta: {
      title: 'PTA 远程实习（Remote Internship）',
      description: '以项目为基础的 Part-time Assistant (PTA) 实习，适合在校学生提前了解职场。通过线上专案任务累积工作经验，获得企业导师评价与推荐信。',
      targetAudience: '适合人群：',
      targetText: '本科生／研究生',
      mode: '模式：',
      modeText: '远程线上专案',
      duration: '周期：',
      durationText: '4–8 周',
      benefits: '收益：',
      benefitsText: '实习证明 + 推荐信 + 导师反馈',
    },
    
    formal: {
      title: '正式实习（On-site / Remote Formal Internship）',
      description: '高含金量企业实习，进入行业上游企业真实部门。职场导师提供任务指导与职业培训，帮助学生获取留用机会与正式推荐信。',
      targetAudience: '适合人群：',
      targetText: '具备一定专业背景者',
      mode: '模式：',
      modeText: '现场或混合制',
      duration: '周期：',
      durationText: '8–12 周',
      benefits: '收益：',
      benefitsText: '真实项目经验 + 实习证明 + 留用机会',
    },
    
    processTitle: '服务流程',
    process: [
      {
        title: '确定方向',
        description: '评估背景，匹配最适合的实习类型',
      },
      {
        title: '申请匹配',
        description: '精准匹配企业需求与个人能力',
      },
      {
        title: '面试确认',
        description: '协助准备面试，提高成功率',
      },
      {
        title: '实习开始',
        description: '正式开始实习项目，全程指导',
      },
      {
        title: '实习反馈',
        description: '定期跟进进度，优化表现',
      },
      {
        title: '结案推荐',
        description: '完成实习，获得推荐信与证明',
      },
    ],
  },
  en: {
    heroTitle: 'Internship Services',
    heroSubtitle: 'Building a solid foundation for your career',
    
    overviewTitle: 'Program Overview',
    overviewSubtitle: '',
    
    directionsTitle: 'Two Internship Tracks',
    
    pta: {
      title: 'PTA Remote Internship',
      description: 'Project-based Part-time Assistant (PTA) internship, suitable for students to understand the workplace in advance. Accumulate work experience through online project tasks and receive mentor evaluations and recommendation letters.',
      targetAudience: 'For: ',
      targetText: 'Undergraduate / Graduate Students',
      mode: 'Mode: ',
      modeText: 'Remote Online Projects',
      duration: 'Duration: ',
      durationText: '4–8 weeks',
      benefits: 'Benefits: ',
      benefitsText: 'Internship Certificate + Recommendation Letter + Mentor Feedback',
    },
    
    formal: {
      title: 'On-site / Remote Formal Internship',
      description: 'High-quality corporate internships in real departments of leading companies. Career mentors provide task guidance and professional training, helping students gain retention opportunities and formal recommendation letters.',
      targetAudience: 'For: ',
      targetText: 'Candidates with relevant background',
      mode: 'Mode: ',
      modeText: 'On-site or Hybrid',
      duration: 'Duration: ',
      durationText: '8–12 weeks',
      benefits: 'Benefits: ',
      benefitsText: 'Real Project Experience + Certificate + Retention Opportunity',
    },
    
    processTitle: 'Service Process',
    process: [
      {
        title: 'Direction Setting',
        description: 'Evaluate background and match the most suitable internship type',
      },
      {
        title: 'Application Matching',
        description: 'Precisely match company needs with personal capabilities',
      },
      {
        title: 'Interview Confirmation',
        description: 'Assist in interview preparation to improve success rate',
      },
      {
        title: 'Internship Starts',
        description: 'Officially begin internship project with full guidance',
      },
      {
        title: 'Internship Feedback',
        description: 'Regular progress tracking and performance optimization',
      },
      {
        title: 'Completion & Recommendation',
        description: 'Complete internship and receive recommendation letter and certificate',
      },
    ],
  },
};

interface InternshipPageProps {
  language: Language;
  onNavigate?: (page: any) => void;
}

export function InternshipPage({ language, onNavigate }: InternshipPageProps) {
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

  const processIcons = [Target, UserCheck, FileCheck, Building2, TrendingUp, FileCheck];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl mb-6">{t.heroTitle}</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95">
              {t.heroSubtitle}
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

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-2">{t.overviewTitle}</h2>
            {t.overviewSubtitle && (
              <p className="text-xl text-gray-500">{t.overviewSubtitle}</p>
            )}
          </div>
        </div>
      </section>

      {/* Two Directions */}
      <section ref={sectionRef} className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center text-gray-900 mb-16">{t.directionsTitle}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* PTA Remote */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow border-2 border-orange-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg flex items-center justify-center mb-4">
                    <MonitorPlay className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{t.pta.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{t.pta.description}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <p className="text-sm">
                      <span className="text-gray-900">{t.pta.targetAudience}</span>
                      <span className="text-gray-600">{t.pta.targetText}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-900">{t.pta.mode}</span>
                      <span className="text-gray-600">{t.pta.modeText}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-900">{t.pta.duration}</span>
                      <span className="text-gray-600">{t.pta.durationText}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-900">{t.pta.benefits}</span>
                      <span className="text-orange-600">{t.pta.benefitsText}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Formal Internship */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow border-2 border-orange-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{t.formal.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{t.formal.description}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <p className="text-sm">
                      <span className="text-gray-900">{t.formal.targetAudience}</span>
                      <span className="text-gray-600">{t.formal.targetText}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-900">{t.formal.mode}</span>
                      <span className="text-gray-600">{t.formal.modeText}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-900">{t.formal.duration}</span>
                      <span className="text-gray-600">{t.formal.durationText}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-900">{t.formal.benefits}</span>
                      <span className="text-orange-600">{t.formal.benefitsText}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center text-gray-900 mb-16">{t.processTitle}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.process.map((step, index) => {
              const Icon = processIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white">
                            <Icon className="h-6 w-6" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}