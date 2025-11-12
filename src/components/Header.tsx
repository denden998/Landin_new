import { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { Button } from './ui/button';
import type { Language } from '../App';
import type { Page } from '../App';

const translations = {
  zh: {
    brand: '上岸 LandIn',
    home: '首页',
    services: '服务类型',
    cases: '案例分享',
    consultation: '免费咨询',
    servicesSubmenu: {
      internship: '实习',
      jobSearch: '求职',
      other: '其他',
    },
  },
  en: {
    brand: 'LandIn',
    home: 'Home',
    services: 'Services',
    cases: 'Cases',
    consultation: 'Free Consultation',
    servicesSubmenu: {
      internship: 'Internship',
      jobSearch: 'Job Search',
      other: 'Other',
    },
  },
};

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ language, setLanguage, currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showMobileServicesMenu, setShowMobileServicesMenu] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToServiceSection = (sectionId: string) => {
    if (currentPage !== 'services-process') {
      onNavigate('services-process');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowServicesMenu(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl md:text-3xl text-gray-900 hover:text-orange-600 transition-colors"
            style={{ fontWeight: 500 }}
          >
            {t.brand}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-12">
            <button
              onClick={() => scrollToSection('home')}
              className="text-base lg:text-lg text-gray-700 hover:text-orange-600 transition-colors"
              style={{ fontWeight: 400 }}
            >
              {t.home}
            </button>
            
            {/* Services with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <button
                className="text-base lg:text-lg text-gray-700 hover:text-orange-600 transition-colors py-2"
                style={{ fontWeight: 400 }}
              >
                {t.services}
              </button>
              
              {/* Dropdown Menu */}
              {showServicesMenu && (
                <div className="absolute top-full left-0 pt-1 w-48">
                  <div className="bg-white/95 backdrop-blur-xl rounded-lg shadow-lg border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => {
                        onNavigate('internship');
                        setShowServicesMenu(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      style={{ fontWeight: 400 }}
                    >
                      {t.servicesSubmenu.internship}
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('job-search');
                        setShowServicesMenu(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors border-t border-gray-100"
                      style={{ fontWeight: 400 }}
                    >
                      {t.servicesSubmenu.jobSearch}
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={() => onNavigate('case-studies')}
              className="text-base lg:text-lg text-gray-700 hover:text-orange-600 transition-colors"
              style={{ fontWeight: 400 }}
            >
              {t.cases}
            </button>
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-orange-600 transition-colors flex items-center gap-1.5"
            >
              <Languages size={20} />
              <span className="text-base" style={{ fontWeight: 400 }}>{language === 'zh' ? 'EN' : '中'}</span>
            </button>
            <Button 
              onClick={() => window.open('https://forms.gle/2d4FAVapRZSa81gU7', '_blank')}
              className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-5 rounded-full shadow-lg"
              style={{ fontWeight: 500 }}
            >
              {t.consultation}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              <Languages size={20} />
            </button>
            <button
              className="text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200/50">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                {t.home}
              </button>
              
              {/* Mobile Services Menu */}
              <div>
                <button
                  onClick={() => setShowMobileServicesMenu(!showMobileServicesMenu)}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-left w-full flex items-center justify-between"
                >
                  <span>{t.services}</span>
                  <span className="text-sm">{showMobileServicesMenu ? '▲' : '▼'}</span>
                </button>
                
                {/* Mobile Submenu */}
                {showMobileServicesMenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    <button
                      onClick={() => {
                        onNavigate('internship');
                        setIsMobileMenuOpen(false);
                        setShowMobileServicesMenu(false);
                      }}
                      className="block w-full text-left text-gray-600 hover:text-orange-600 transition-colors py-2"
                    >
                      {t.servicesSubmenu.internship}
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('job-search');
                        setIsMobileMenuOpen(false);
                        setShowMobileServicesMenu(false);
                      }}
                      className="block w-full text-left text-gray-600 hover:text-orange-600 transition-colors py-2"
                    >
                      {t.servicesSubmenu.jobSearch}
                    </button>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => {
                  onNavigate('case-studies');
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-orange-600 transition-colors text-left"
              >
                {t.cases}
              </button>
              <Button 
                onClick={() => window.open('https://forms.gle/2d4FAVapRZSa81gU7', '_blank')} 
                className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 rounded-full"
              >
                {t.consultation}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}