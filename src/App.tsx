import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { CoreValues } from './components/CoreValues';
import { PastEvents } from './components/PastEvents';
import { SuccessStories } from './components/SuccessStories';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Privacy } from './components/Privacy';
import { Terms } from './components/Terms';
import { InternshipPage } from './components/InternshipPage';
import { JobSearchPage } from './components/JobSearchPage';
import { OtherServicesPage } from './components/OtherServicesPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { FloatingWeChatButton } from './components/FloatingWeChatButton';
import wechatQrCode from 'figma:asset/5aae2b82c61472519123c7c31a6763a3641b9aff.png';

export type Language = 'zh' | 'en';
export type Page = 'home' | 'privacy' | 'terms' | 'internship' | 'job-search' | 'other-services' | 'case-studies';

export default function App() {
  const [language, setLanguage] = useState<Language>('zh');
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  if (currentPage === 'privacy') {
    return (
      <>
        <Privacy language={language} onClose={() => setCurrentPage('home')} />
        <FloatingWeChatButton language={language} />
      </>
    );
  }

  if (currentPage === 'terms') {
    return (
      <>
        <Terms language={language} onClose={() => setCurrentPage('home')} />
        <FloatingWeChatButton language={language} />
      </>
    );
  }

  if (currentPage === 'internship') {
    return (
      <div className="min-h-screen bg-white">
        <Header 
          language={language} 
          setLanguage={setLanguage}
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />
        <div className="pt-20">
          <InternshipPage language={language} onNavigate={handleNavigate} />
        </div>
        <Footer language={language} onNavigate={handleNavigate} />
        <FloatingWeChatButton language={language} qrCodeUrl={wechatQrCode} />
      </div>
    );
  }

  if (currentPage === 'job-search') {
    return (
      <div className="min-h-screen bg-white">
        <Header 
          language={language} 
          setLanguage={setLanguage}
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />
        <div className="pt-20">
          <JobSearchPage language={language} onNavigate={handleNavigate} />
        </div>
        <Footer language={language} onNavigate={handleNavigate} />
        <FloatingWeChatButton language={language} qrCodeUrl={wechatQrCode} />
      </div>
    );
  }

  if (currentPage === 'other-services') {
    return (
      <div className="min-h-screen bg-white">
        <Header 
          language={language} 
          setLanguage={setLanguage}
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />
        <div className="pt-20">
          <OtherServicesPage language={language} onNavigate={handleNavigate} />
        </div>
        <Footer language={language} onNavigate={handleNavigate} />
        <FloatingWeChatButton language={language} qrCodeUrl={wechatQrCode} />
      </div>
    );
  }

  if (currentPage === 'case-studies') {
    return (
      <div className="min-h-screen bg-white">
        <Header 
          language={language} 
          setLanguage={setLanguage}
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />
        <div className="pt-20">
          <CaseStudiesPage language={language} onNavigate={handleNavigate} />
        </div>
        <Footer language={language} onNavigate={handleNavigate} />
        <FloatingWeChatButton language={language} qrCodeUrl={wechatQrCode} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/20 via-amber-50/10 to-orange-50/20">
      <Header 
        language={language} 
        setLanguage={setLanguage}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      <Hero language={language} />
      <PainPoints language={language} />
      <CoreValues language={language} />
      <SuccessStories language={language} />
      <About language={language} />
      <Testimonials language={language} />
      <PastEvents language={language} />
      <Contact language={language} onNavigate={handleNavigate} />
      <Footer language={language} onNavigate={handleNavigate} />
      <FloatingWeChatButton language={language} qrCodeUrl={wechatQrCode} />
    </div>
  );
}