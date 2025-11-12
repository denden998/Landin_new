import type { Language } from '../App';
import type { Page } from '../App';

const translations = {
  zh: {
    brand: '上岸 LandIn',
    brandDesc: '专为美国留学生服务的求职与身份规划专家',
    quickLinks: '快速链接',
    home: '首页',
    successStories: '成功案例',
    about: '关于我们',
    contact: '联系方式',
    services: '服务内容',
    service1: '求职辅导',
    service2: '企业对接',
    service3: '身份规划 (OPT/CPT/H-1B)',
    service4: '合规雇佣支持',
    service5: '职场发展辅导',
    contactUs: '联系我们',
    phone: '电话: (949) 522-0917',
    email: '邮箱: landinllc@gmail.com',
    legal: '法律信息',
    privacy: '隐私政策',
    terms: '使用条款',
    copyright: '© 2025 上岸 LandIn. 保留所有权利.',
  },
  en: {
    brand: 'LandIn',
    brandDesc: 'Career and visa planning expert for international students in the US',
    quickLinks: 'Quick Links',
    home: 'Home',
    successStories: 'Success Stories',
    about: 'About Us',
    contact: 'Contact',
    services: 'Services',
    service1: 'Career Coaching',
    service2: 'Employer Connection',
    service3: 'Visa Planning (OPT/CPT/H-1B)',
    service4: 'Compliance Support',
    service5: 'Career Development',
    contactUs: 'Contact Us',
    phone: 'Phone: (949) 522-0917',
    email: 'Email: landinllc@gmail.com',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    copyright: '© 2025 LandIn. All rights reserved.',
  },
};

interface FooterProps {
  language: Language;
  onNavigate: (page: Page) => void;
}

export function Footer({ language, onNavigate }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">{t.brand}</h3>
            <p className="text-gray-400 text-sm">
              {t.brandDesc}
            </p>
          </div>
          <div>
            <h4 className="mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-white transition-colors">
                  {t.successStories}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">{t.services}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{t.service1}</li>
              <li>{t.service2}</li>
              <li>{t.service3}</li>
              <li>{t.service4}</li>
              <li>{t.service5}</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">{t.contactUs}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{t.phone}</li>
              <li>{t.email}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">{t.copyright}</p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <button
                onClick={() => onNavigate('privacy')}
                className="hover:text-white transition-colors"
              >
                {t.privacy}
              </button>
              <button
                onClick={() => onNavigate('terms')}
                className="hover:text-white transition-colors"
              >
                {t.terms}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}