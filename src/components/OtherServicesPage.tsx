import type { Language } from '../App';

const translations = {
  zh: {
    heroTitle: '其他服务',
    heroSubtitle: '更多专业服务，敬请期待',
    comingSoon: '即将推出',
    description: '我们正在开发更多服务内容，以更好地帮助留学生实现职业目标。',
  },
  en: {
    heroTitle: 'Other Services',
    heroSubtitle: 'More professional services coming soon',
    comingSoon: 'Coming Soon',
    description: 'We are developing more service offerings to better help international students achieve their career goals.',
  },
};

interface OtherServicesPageProps {
  language: Language;
  onNavigate?: (page: any) => void;
}

export function OtherServicesPage({ language }: OtherServicesPageProps) {
  const t = translations[language];

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

      {/* Coming Soon Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full mb-8">
              <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-4xl text-gray-900 mb-6">{t.comingSoon}</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}