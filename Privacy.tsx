import { FileText, Mail, Shield, Database, Trash2 } from 'lucide-react';
import type { Language } from '../App';
import type { Page } from '../App';

const translations = {
  zh: {
    title: '隐私政策',
    lastUpdated: '最后更新时间：2025年1月',
    introduction: '欢迎使用上岸 LandIn（以下简称"我们"）的服务。我们非常重视您的隐私保护。本隐私政策说明了我们如何收集、使用、存储和保护您的个人信息。',
    
    section1Title: '我们收集的信息',
    section1Content: '当您通过我们的网站联系表单与我们联系时，我们会收集以下信息：',
    dataPoints: [
      '您的姓名',
      '您的电子邮箱地址',
      '您的留言内容',
      '提交时间和日期'
    ],
    
    section2Title: '信息使用目的',
    section2Content: '我们收集的信息仅用于以下目的：',
    purposes: [
      '回复您的咨询和问题',
      '提供您所需的求职咨询服务',
      '改善我们的服务质量',
      '与您进行业务沟通'
    ],
    commitment: '我们承诺：我们不会将您的个人信息出售、出租或分享给任何第三方用于营销目的。',
    
    section3Title: '第三方服务',
    section3Content: '为了提供服务，我们使用以下第三方服务：',
    thirdParty: {
      name: 'EmailJS',
      purpose: '用于处理和发送联系表单提交的邮件',
      note: 'EmailJS 遵守其自身的隐私政策。提交表单即表示您同意 EmailJS 按照其隐私政策处理您的信息。'
    },
    
    section4Title: '数据安全',
    section4Items: [
      '我们采用合理的技术和组织措施来保护您的个人信息',
      '通过加密传输确保数据在传输过程中的安全',
      '限制对个人信息的访问权限',
      '定期审查和更新我们的安全措施'
    ],
    
    section5Title: '数据保留与删除',
    section5Content: '我们保留您的个人信息的时间：',
    retention: [
      '咨询信息：在咨询目的达成后保留最多12个月',
      '如果您成为我们的客户，相关信息将按照服务协议约定保留'
    ],
    deleteTitle: '如何删除您的数据：',
    deleteContent: '如果您希望删除您的个人信息，请发送邮件至：',
    deleteEmail: 'landinllc@gmail.com',
    deleteNote: '我们将在收到请求后的30天内处理您的删除请求。',
    
    section6Title: '您的权利',
    rights: [
      '访问权：您有权要求查看我们持有的关于您的个人信息',
      '更正权：您有权要求更正不准确的个人信息',
      '删除权：您有权要求删除您的个人信息',
      '反对权：您有权反对我们处理您的个人信息'
    ],
    
    section7Title: '适用法规',
    regulations: [
      'CCPA（加州消费者隐私法案）',
      'GDPR（通用数据保护条例）基础要求',
      '美国联邦和州级数据保护法规'
    ],
    
    disclaimerTitle: '免责声明',
    disclaimer: '本网站展示的成功案例均为真实客户经历，但个人身份信息已做脱敏处理。过往成功案例不代表未来结果的保证。求职成功受多种因素影响，包括但不限于个人背景、市场环境、时机等。我们提供专业的咨询服务，但不能保证特定的结果。',
    
    contactTitle: '联系我们',
    contactContent: '如果您对本隐私政策有任何疑问，请通过以下方式联系我们：',
    
    pdfNote: '如需 PDF 版本的隐私政策，请联系我们索取。',
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: January 2025',
    introduction: 'Welcome to LandIn (referred to as "we" or "us"). We take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect your personal information.',
    
    section1Title: 'Information We Collect',
    section1Content: 'When you contact us through our website contact form, we collect the following information:',
    dataPoints: [
      'Your name',
      'Your email address',
      'Your message content',
      'Submission date and time'
    ],
    
    section2Title: 'How We Use Your Information',
    section2Content: 'We collect information solely for the following purposes:',
    purposes: [
      'To respond to your inquiries and questions',
      'To provide career consulting services you requested',
      'To improve our service quality',
      'To communicate with you regarding our services'
    ],
    commitment: 'We commit: We will not sell, rent, or share your personal information with any third parties for marketing purposes.',
    
    section3Title: 'Third-Party Services',
    section3Content: 'To provide our services, we use the following third-party service:',
    thirdParty: {
      name: 'EmailJS',
      purpose: 'Used to process and send emails from contact form submissions',
      note: 'EmailJS follows its own privacy policy. By submitting the form, you agree to EmailJS processing your information in accordance with its privacy policy.'
    },
    
    section4Title: 'Data Security',
    section4Items: [
      'We implement reasonable technical and organizational measures to protect your personal information',
      'Data is encrypted during transmission to ensure security',
      'Access to personal information is restricted',
      'We regularly review and update our security measures'
    ],
    
    section5Title: 'Data Retention and Deletion',
    section5Content: 'We retain your personal information for:',
    retention: [
      'Inquiry information: Up to 12 months after the inquiry purpose is fulfilled',
      'If you become our client, information will be retained as specified in the service agreement'
    ],
    deleteTitle: 'How to Delete Your Data:',
    deleteContent: 'If you wish to delete your personal information, please email:',
    deleteEmail: 'landinllc@gmail.com',
    deleteNote: 'We will process your deletion request within 30 days of receipt.',
    
    section6Title: 'Your Rights',
    rights: [
      'Right to Access: You have the right to request access to your personal information we hold',
      'Right to Rectification: You have the right to request correction of inaccurate personal information',
      'Right to Erasure: You have the right to request deletion of your personal information',
      'Right to Object: You have the right to object to our processing of your personal information'
    ],
    
    section7Title: 'Applicable Regulations',
    regulations: [
      'CCPA (California Consumer Privacy Act)',
      'GDPR (General Data Protection Regulation) basic requirements',
      'US Federal and State data protection regulations'
    ],
    
    disclaimerTitle: 'Disclaimer',
    disclaimer: 'The success stories displayed on this website are based on real client experiences, but personal identifying information has been anonymized. Past success stories do not guarantee future results. Job search success is influenced by multiple factors, including but not limited to personal background, market conditions, and timing. We provide professional consulting services but cannot guarantee specific outcomes.',
    
    contactTitle: 'Contact Us',
    contactContent: 'If you have any questions about this Privacy Policy, please contact us at:',
    
    pdfNote: 'For a PDF version of this Privacy Policy, please contact us.',
  },
};

interface PrivacyProps {
  language: Language;
  onClose: () => void;
}

export function Privacy({ language, onClose }: PrivacyProps) {
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
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl mb-2 text-gray-900">{t.title}</h1>
            <p className="text-gray-500 text-sm">{t.lastUpdated}</p>
          </div>

          {/* Introduction */}
          <div className="mb-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600">
            <p className="text-gray-700">{t.introduction}</p>
          </div>

          {/* Section 1: Data Collection */}
          <section className="mb-8">
            <div className="flex items-start gap-3 mb-4">
              <Database className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl mb-3 text-gray-900">{t.section1Title}</h2>
                <p className="text-gray-700 mb-3">{t.section1Content}</p>
                <ul className="space-y-2">
                  {t.dataPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Usage */}
          <section className="mb-8">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl mb-3 text-gray-900">{t.section2Title}</h2>
                <p className="text-gray-700 mb-3">{t.section2Content}</p>
                <ul className="space-y-2 mb-4">
                  {t.purposes.map((purpose, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>{purpose}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <p className="text-gray-700">{t.commitment}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Third Party */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section3Title}</h2>
            <p className="text-gray-700 mb-3">{t.section3Content}</p>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="mb-2">
                <strong className="text-gray-900">{t.thirdParty.name}</strong>
              </p>
              <p className="text-gray-700 mb-2">{t.thirdParty.purpose}</p>
              <p className="text-sm text-gray-600 italic">{t.thirdParty.note}</p>
            </div>
          </section>

          {/* Section 4: Security */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section4Title}</h2>
            <ul className="space-y-2">
              {t.section4Items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5: Retention & Deletion */}
          <section className="mb-8">
            <div className="flex items-start gap-3 mb-4">
              <Trash2 className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl mb-3 text-gray-900">{t.section5Title}</h2>
                <p className="text-gray-700 mb-3">{t.section5Content}</p>
                <ul className="space-y-2 mb-4">
                  {t.retention.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="mb-2 text-gray-900">{t.deleteTitle}</p>
                  <p className="text-gray-700 mb-2">{t.deleteContent}</p>
                  <p className="mb-2">
                    <a href="mailto:landinllc@gmail.com" className="text-orange-600 hover:underline">
                      {t.deleteEmail}
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 italic">{t.deleteNote}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Rights */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section6Title}</h2>
            <ul className="space-y-2">
              {t.rights.map((right, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 7: Regulations */}
          <section className="mb-8">
            <h2 className="text-2xl mb-3 text-gray-900">{t.section7Title}</h2>
            <ul className="space-y-2">
              {t.regulations.map((reg, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>{reg}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Disclaimer */}
          <section className="mb-8">
            <div className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <h2 className="text-2xl mb-3 text-gray-900">{t.disclaimerTitle}</h2>
              <p className="text-gray-700">{t.disclaimer}</p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <div className="flex items-start gap-3">
              <Mail className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl mb-3 text-gray-900">{t.contactTitle}</h2>
                <p className="text-gray-700 mb-2">{t.contactContent}</p>
                <p>
                  <a href="mailto:landinllc@gmail.com" className="text-orange-600 hover:underline">
                    landinllc@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* PDF Note */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <p className="text-sm text-gray-600">{t.pdfNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}