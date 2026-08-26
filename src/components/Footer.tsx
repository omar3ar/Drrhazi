import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <img src="/images/logo.png" alt="Dr RHAZI YASSINE Logo" className="h-12 w-auto object-contain brightness-0 invert" />
              <div>
                <h1 className="font-heading font-bold text-lg leading-tight text-white">
                  {t('nav.doctor_name')}
                </h1>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.nav_title')}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.nav_home')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.nav_about')}</a></li>
              <li><a href="#disciplines" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.nav_disciplines')}</a></li>
              <li><a href="#pathologies" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.nav_pathologies')}</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-secondary transition-colors">{t('footer.nav_process')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.disc_title')}</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {t('footer.disc_1')}
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {t('footer.disc_2')}
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {t('footer.disc_3')}
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {t('footer.disc_4')}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.legal_title')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.legal_1')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.legal_2')}</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate text-sm text-center md:text-left" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-colors"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
