import { FileText, Building2, IdCard, Shield, TrendingUp, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import type { Language } from '../App';
import type { Page } from '../App';

const translations = {
  zh: {
    heroTitle: '服务与流程',
    heroSubtitle: '让你的职业上岸,从有方向的第一步开始。',
    
    // Section 1: What We Do (从首页移过来)
    section1Title: '我们的服务 | What We Do',
    section1Subtitle: '上岸 LandIn 提供全方位的求职与身份规划服务，涵盖从简历优化到获得工作签证的每一个关键环节。我们深知留学生面临的独特挑战，因此设计了一套系统化的解决方案，陪你在美求职路上走得更稳，更快实现职业目标。',
    services: [
      {
        title: '求职辅导',
        description: '一对一修改简历、模拟面试、HR视角优化，精准展示你的优势。我们的导师来自各大行业，了解雇主真正看重什么，帮你把经历转化为竞争力。',
      },
      {
        title: '企业对接',
        description: '与美国本地雇主合作，提供真实实习与全职岗位，确保职位合规。我们筛选的每一家企业都经过严格审核，保证职位的真实性和合法性。',
      },
      {
        title: '身份规划',
        description: '专业顾问提供 OPT / CPT / H-1B / EB-2 NIW 等身份路径规划。我们与资深移民律师合作，为你量身定制最适合的身份方案，避免常见陷阱。',
      },
      {
        title: '合规雇佣支持',
        description: 'E-Verify 雇主协作、入职指导、税务报到与薪资支持。从 I-9 表格到 SSN 申请，我们提供详细的步骤指导，确保一切合法合规。',
      },
      {
        title: '职场发展辅导',
        description: '帮你建立长期职业路径，从第一份工作到成长晋升，持续陪伴。职业发展不止于找到第一份工作，我们关注你的长期成长与职业规划。',
      },
      {
        title: '服务承诺',
        description: '💡 服务质量基于真实资源与专业指导，绝不承诺无法兑现的结果。透明、诚信、负责，是我们的底线。',
      },
    ],
    
    // Section 2: How We Work
    section2Title: '我们怎么做',
    section2Subtitle: '整个辅导流程由四个阶段组成，每一步都由专业导师团队全程陪伴：',
    process: [
      {
        number: '01',
        title: '诊断',
        subtitle: 'Diagnosis',
        description: '通过初步问卷与顾问面谈，深入了解你的背景、目标岗位、签证情况与时间线。',
        output: '职业评估报告 + 建议路径图'
      },
      {
        number: '02',
        title: '计划',
        subtitle: 'Planning',
        description: '制定个性化求职计划：目标岗位列表、简历优化方向、每周任务节奏。',
        output: '个性化求职方案 + 行动清单'
      },
      {
        number: '03',
        title: '执行',
        subtitle: 'Execution',
        description: '进入密集辅导阶段，包括简历改写、模拟面试、行业导师辅导与内推推荐。',
        output: '简历与面试材料完善 + 已投递岗位追踪表'
      },
      {
        number: '04',
        title: '跟进',
        subtitle: 'Follow-Up',
        description: '顾问每周追踪进度，持续优化投递策略与沟通技巧，直到你成功"上岸"。',
        output: 'Offer 记录表 + 后续身份延伸规划（OPT→H-1B→绿卡等）'
      }
    ],
    outputLabel: '输出：',
    
    // Section 3: What You Get
    section3Title: '我们交付什么',
    deliverables: [
      {
        icon: '📄',
        title: '简历优化文件',
        description: '针对目标岗位量身修改的中英文简历版本'
      },
      {
        icon: '💬',
        title: '面试题库与模拟报告',
        description: '结合目标行业面试题、反馈与建议'
      },
      {
        icon: '📋',
        title: '求职进度跟踪表',
        description: '每周任务计划 + 投递记录追踪表'
      },
      {
        icon: '🧠',
        title: '身份规划方案',
        description: '签证类型建议 + 长期职业路径图'
      },
      {
        icon: '🏆',
        title: 'Offer 档案',
        description: '成功案例归档与后续签证指导'
      }
    ],
  },
  en: {
    heroTitle: 'Services & Process',
    heroSubtitle: 'Your career success starts with a clear first step.',
    
    // Section 1: What We Do (from homepage)
    section1Title: 'Our Services | What We Do',
    section1Subtitle: 'LandIn provides comprehensive job search and visa planning services, covering every key step from resume optimization to work authorization. We understand the unique challenges international students face, so we\'ve designed a systematic solution to help you navigate the US job market more confidently and achieve your career goals faster.',
    services: [
      {
        title: 'Career Coaching',
        description: 'One-on-one resume editing, mock interviews, and HR perspective optimization to showcase your strengths. Our mentors come from various industries and understand what employers truly value, helping you transform experience into competitiveness.',
      },
      {
        title: 'Employer Connection',
        description: 'Partnering with US-based employers to provide real internship and full-time positions, ensuring compliance. Every company we work with is thoroughly vetted to guarantee authenticity and legality.',
      },
      {
        title: 'Visa Planning',
        description: 'Professional advisors provide OPT / CPT / H-1B / EB-2 NIW pathway planning. We work with experienced immigration attorneys to customize the best visa strategy for you, avoiding common pitfalls.',
      },
      {
        title: 'Compliance Support',
        description: 'E-Verify employer collaboration, onboarding guidance, tax registration, and payroll support. From I-9 forms to SSN applications, we provide detailed step-by-step guidance to ensure everything is legal and compliant.',
      },
      {
        title: 'Career Development',
        description: 'Building your long-term career path, from your first job to growth and promotion, with continuous support. Career development doesn\'t stop at landing your first job - we care about your long-term growth and career planning.',
      },
      {
        title: 'Service Commitment',
        description: '💡 Our service quality is based on real resources and professional guidance. We never promise results we can\'t deliver. Transparency, integrity, and responsibility are our bottom line.',
      },
    ],
    
    // Section 2: How We Work
    section2Title: 'How We Work',
    section2Subtitle: 'Our 4-step process ensures clarity, progress, and results.',
    process: [
      {
        number: '01',
        title: 'Diagnosis',
        subtitle: '',
        description: 'We analyze your background, visa status, and goals.',
        output: 'Career assessment report + recommended roadmap'
      },
      {
        number: '02',
        title: 'Planning',
        subtitle: '',
        description: 'We create a personalized roadmap and weekly action plan.',
        output: 'Customized job search plan + action checklist'
      },
      {
        number: '03',
        title: 'Execution',
        subtitle: '',
        description: 'Resume rewriting, mock interviews, and referrals.',
        output: 'Polished materials + application tracking sheet'
      },
      {
        number: '04',
        title: 'Follow-Up',
        subtitle: '',
        description: 'Continuous tracking and optimization until you land your offer.',
        output: 'Offer archive + visa transition planning (OPT→H-1B→Green Card)'
      }
    ],
    outputLabel: 'Output: ',
    
    // Section 3: What You Get
    section3Title: 'What You Get',
    deliverables: [
      {
        icon: '📄',
        title: 'Customized Resume',
        description: 'Bilingual resume tailored to target positions'
      },
      {
        icon: '💬',
        title: 'Interview Guide',
        description: 'Industry-specific interview questions, feedback and suggestions'
      },
      {
        icon: '📋',
        title: 'Tracking Sheet',
        description: 'Weekly task plan + application tracking table'
      },
      {
        icon: '🧠',
        title: 'Visa Planning',
        description: 'Visa type recommendations + long-term career roadmap'
      },
      {
        icon: '🏆',
        title: 'Post-Offer Advisory',
        description: 'Success case archive and subsequent visa guidance'
      }
    ],
  },
};

interface ServicesProcessProps {
  language: Language;
  onNavigate: (page: Page) => void;
}

export function ServicesProcess({ language, onNavigate }: ServicesProcessProps) {
  const t = translations[language];
  const icons = [FileText, Building2, IdCard, Shield, TrendingUp, Lightbulb];

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

      {/* Section 1: What We Do (从首页移过来) */}
      <section id="what-we-do" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">{t.section1Title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.section1Subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => {
              const Icon = icons[index];
              return (
                <Card key={index} className="border-2 hover:border-orange-600 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: How We Work */}
      <section id="how-we-work" className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-4xl mb-4 text-gray-900">{t.section2Title}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t.section2Subtitle}
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {t.process.map((step, index) => {
              const processIcons = ['🩺', '⚙️', '💼', '📈'];
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-8 md:w-48 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-5xl mb-2">{processIcons[index]}</div>
                          <div className="text-4xl opacity-50">{step.number}</div>
                        </div>
                      </div>
                      <div className="p-8 flex-1">
                        <h3 className="text-2xl mb-2 text-gray-900">
                          {step.title}
                          {step.subtitle && <span className="text-gray-500 ml-2 text-lg">({step.subtitle})</span>}
                        </h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                          <p className="text-sm">
                            <span className="text-gray-900">{t.outputLabel}</span>
                            <span className="text-gray-700">{step.output}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: What You Get */}
      <section id="what-you-get" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h2 className="text-4xl mb-4 text-gray-900">{t.section3Title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.deliverables.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow border-2 border-gray-100 hover:border-orange-200">
                <CardContent className="pt-8 pb-8">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
