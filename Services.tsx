import { FileText, Building2, IdCard, Shield, TrendingUp, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import type { Language } from '../App';

const translations = {
  zh: {
    title: '我们的服务 | What We Do',
    subtitle: '上岸 LandIn 提供全方位的求职与身份规划服务，涵盖从简历优化到获得工作签证的每一个关键环节。我们深知留学生面临的独特挑战，因此设计了一套系统化的解决方案，陪你在美求职路上走得更稳，更快实现职业目标。',
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
  },
  en: {
    title: 'Our Services | What We Do',
    subtitle: 'LandIn provides comprehensive job search and visa planning services, covering every key step from resume optimization to work authorization. We understand the unique challenges international students face, so we\'ve designed a systematic solution to help you navigate the US job market more confidently and achieve your career goals faster.',
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
  },
};

interface ServicesProps {
  language: Language;
}

export function Services({ language }: ServicesProps) {
  const t = translations[language];
  const icons = [FileText, Building2, IdCard, Shield, TrendingUp, Lightbulb];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
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
  );
}
