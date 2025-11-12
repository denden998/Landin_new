import { FileText, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import type { Language } from '../App';

const translations = {
  zh: {
    title: '使用条款',
    lastUpdated: '最后更新时间：2025年1月',
    introduction: '欢迎访问上岸 LandIn 网站。使用本网站即表示您同意遵守以下使用条款。请仔细阅读这些条款。',
    
    section1Title: '服务说明',
    section1Content: 'LandIn 提供专为美国留学生设计的求职咨询与身份规划服务，包括但不限于：',
    services: [
      '简历优化与修改',
      '面试辅导与模拟',
      '职业规划咨询',
      'OPT/CPT/H-1B 身份规划指导',
      '企业对接服务',
      '职场发展辅导'
    ],
    
    section2Title: '服务范围与限制',
    scope: [
      '我们提供的是咨询服务，而非雇佣保证',
      '我们不能保证任何特定的求职结果',
      '实际求职成功受多种因素影响，包括个人背景、市场状况、时机等',
      '我们不提供移民法律服务，身份规划建议仅为一般性指导'
    ],
    
    section3Title: '用户责任',
    responsibilities: [
      '提供真实、准确、完整的个人信息',
      '及时更新您的联系方式和相关信息',
      '遵守美国相关法律法规，包括移民法和劳动法',
      '不滥用我们的服务或网站',
      '保护好您的账户信息（如适用）'
    ],
    
    section4Title: '知识产权',
    ipContent: '本网站的所有内容，包括但不限于文字、图片、图形、Logo、设计等，均属于 LandIn 或其内容提供者的知识产权。未经书面许可，您不得：',
    ipRestrictions: [
      '复制、修改、分发本网站内容',
      '将本网站内容用于商业目的',
      '移除或修改版权声明',
      '反向工程或试图提取源代码'
    ],
    
    section5Title: '免责声明',
    disclaimers: [
      {
        title: '成功案例',
        content: '网站展示的成功案例均为真实客户经历（已做隐私脱敏处理），但过往成功不代表未来结果保证。'
      },
      {
        title: '信息准确性',
        content: '我们努力确保网站信息的准确性，但不对信息的完整性、及时性或准确性做出保证。'
      },
      {
        title: '第三方链接',
        content: '本网站可能包含第三方网站的链接，我们对这些网站的内容或隐私做法不承担责任。'
      },
      {
        title: '服务可用性',
        content: '我们不保证网站或服务始终可用、不中断或无错误。'
      }
    ],
    
    section6Title: '责任限制',
    liabilityContent: '在法律允许的最大范围内：',
    liabilityItems: [
      'LandIn 对任何间接、偶然、特殊或后果性损害不承担责任',
      '我们的总责任不超过您为服务支付的费用（如适用）',
      '我们不对因使用或无法使用服务而产生的任何损失负责'
    ],
    
    section7Title: '隐私保护',
    privacyContent: '您的隐私对我们很重要。关于我们如何收集、使用和保护您的个人信息，请参阅我们的',
    privacyLink: '隐私政策',
    
    section8Title: '服务变更与终止',
    changes: [
      '我们保留随时修改、暂停或终止服务的权利',
      '我们保留拒绝向任何人提供服务的权利',
      '我们会在条款发生重大变更时通知用户'
    ],
    
    section9Title: '适用法律',
    lawContent: '本使用条款受美国法律管辖。任何争议应首先通过友好协商解决。如协商不成，应提交至加利福尼亚州法院管辖。',
    
    section10Title: '联系我们',
    contactContent: '如果您对本使用条款有任何疑问或建议，请通过以下方式联系我们：',
    email: 'landinllc@gmail.com',
    
    acceptanceTitle: '接受条款',
    acceptanceContent: '使用本网站即表示您已阅读、理解并同意遵守本使用条款。如果您不同意这些条款，请不要使用本网站。',
    
    pdfNote: '如需 PDF 版本的使用条款，请联系我们索取。',
  },
  en: {
    title: 'Terms of Use',
    lastUpdated: 'Last Updated: January 2025',
    introduction: 'Welcome to the LandIn website. By using this website, you agree to comply with the following terms of use. Please read these terms carefully.',
    
    section1Title: 'Service Description',
    section1Content: 'LandIn provides career consulting and visa planning services designed for international students in the US, including but not limited to:',
    services: [
      'Resume optimization and revision',
      'Interview coaching and mock interviews',
      'Career planning consultation',
      'OPT/CPT/H-1B visa planning guidance',
      'Employer connection services',
      'Career development coaching'
    ],
    
    section2Title: 'Service Scope and Limitations',
    scope: [
      'We provide consulting services, not employment guarantees',
      'We cannot guarantee any specific job search outcomes',
      'Actual job search success is influenced by multiple factors, including personal background, market conditions, and timing',
      'We do not provide immigration legal services; visa planning advice is for general guidance only'
    ],
    
    section3Title: 'User Responsibilities',
    responsibilities: [
      'Provide truthful, accurate, and complete personal information',
      'Update your contact information and relevant details promptly',
      'Comply with relevant US laws and regulations, including immigration and labor laws',
      'Do not abuse our services or website',
      'Protect your account information (if applicable)'
    ],
    
    section4Title: 'Intellectual Property',
    ipContent: 'All content on this website, including but not limited to text, images, graphics, logos, and designs, belongs to LandIn or its content providers. Without written permission, you may not:',
    ipRestrictions: [
      'Copy, modify, or distribute website content',
      'Use website content for commercial purposes',
      'Remove or modify copyright notices',
      'Reverse engineer or attempt to extract source code'
    ],
    
    section5Title: 'Disclaimers',
    disclaimers: [
      {
        title: 'Success Stories',
        content: 'Success stories displayed on the website are based on real client experiences (with privacy anonymization), but past success does not guarantee future results.'
      },
      {
        title: 'Information Accuracy',
        content: 'We strive to ensure the accuracy of website information but do not guarantee the completeness, timeliness, or accuracy of the information.'
      },
      {
        title: 'Third-Party Links',
        content: 'This website may contain links to third-party websites. We are not responsible for the content or privacy practices of these sites.'
      },
      {
        title: 'Service Availability',
        content: 'We do not guarantee that the website or services will always be available, uninterrupted, or error-free.'
      }
    ],
    
    section6Title: 'Limitation of Liability',
    liabilityContent: 'To the maximum extent permitted by law:',
    liabilityItems: [
      'LandIn is not liable for any indirect, incidental, special, or consequential damages',
      'Our total liability shall not exceed the fees you paid for the service (if applicable)',
      'We are not responsible for any losses resulting from the use or inability to use the services'
    ],
    
    section7Title: 'Privacy Protection',
    privacyContent: 'Your privacy is important to us. For information on how we collect, use, and protect your personal information, please refer to our',
    privacyLink: 'Privacy Policy',
    
    section8Title: 'Service Changes and Termination',
    changes: [
      'We reserve the right to modify, suspend, or terminate services at any time',
      'We reserve the right to refuse service to anyone',
      'We will notify users when there are significant changes to the terms'
    ],
    
    section9Title: 'Governing Law',
    lawContent: 'These Terms of Use are governed by US law. Any disputes should first be resolved through amicable negotiation. If negotiation fails, disputes shall be submitted to the jurisdiction of California courts.',
    
    section10Title: 'Contact Us',
    contactContent: 'If you have any questions or suggestions about these Terms of Use, please contact us at:',
    email: 'landinllc@gmail.com',
    
    acceptanceTitle: 'Acceptance of Terms',
    acceptanceContent: 'By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.',
    
    pdfNote: 'For a PDF version of these Terms of Use, please contact us.',
  },
};

interface TermsProps {
  language: Language;
  onClose: () => void;
}

export function Terms({ language, onClose }: TermsProps) {
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Header with close button */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl text-orange-600">LandIn</h1>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            {language === 'zh' ? '返回首页' : 'Back to Home'}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <FileText className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl mb-2 text-gray-900">{t.title}</h1>
            <p className="text-gray-500 text-sm">{t.lastUpdated}</p>
          </div>

          {/* Introduction */}
          <div className="mb-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600">
            <p className="text-gray-700">{t.introduction}</p>
          </div>

          {/* Section 1: Service Description */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section1Title}</h2>
            <p className="text-gray-700 mb-3">{t.section1Content}</p>
            <ul className="space-y-2">
              {t.services.map((service, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2: Scope and Limitations */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section2Title}</h2>
            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <ul className="space-y-2">
                {t.scope.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 3: User Responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section3Title}</h2>
            <ul className="space-y-2">
              {t.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4: Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section4Title}</h2>
            <p className="text-gray-700 mb-3">{t.ipContent}</p>
            <ul className="space-y-2">
              {t.ipRestrictions.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5: Disclaimers */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section5Title}</h2>
            <div className="space-y-4">
              {t.disclaimers.map((disclaimer, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="mb-2 text-gray-900">{disclaimer.title}</h3>
                  <p className="text-sm text-gray-700">{disclaimer.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Liability */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section6Title}</h2>
            <p className="text-gray-700 mb-3">{t.liabilityContent}</p>
            <ul className="space-y-2">
              {t.liabilityItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 7: Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section7Title}</h2>
            <p className="text-gray-700">
              {t.privacyContent}{' '}
              <button
                onClick={onClose}
                className="text-orange-600 hover:underline"
              >
                {t.privacyLink}
              </button>
              .
            </p>
          </section>

          {/* Section 8: Changes */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section8Title}</h2>
            <ul className="space-y-2">
              {t.changes.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 9: Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section9Title}</h2>
            <p className="text-gray-700">{t.lawContent}</p>
          </section>

          {/* Section 10: Contact */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section10Title}</h2>
            <p className="text-gray-700 mb-2">{t.contactContent}</p>
            <p>
              <a href="mailto:landinllc@gmail.com" className="text-orange-600 hover:underline">
                {t.email}
              </a>
            </p>
          </section>

          {/* Acceptance */}
          <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600 mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.acceptanceTitle}</h2>
            <p className="text-gray-700">{t.acceptanceContent}</p>
          </div>

          {/* PDF Note */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <p className="text-sm text-gray-600">{t.pdfNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
