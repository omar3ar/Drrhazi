import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.disciplines'), href: '#disciplines' },
    { name: t('nav.pathologies'), href: '#pathologies' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.gallery'), href: '#galerie' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'ar' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const whatsappMessage = encodeURIComponent(
    i18n.language === 'fr'
      ? "Bonjour, je souhaite prendre un rendez-vous au cabinet."
      : "مرحباً، أود حجز موعد في العيادة."
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <img src="/images/logo.png" alt="Dr RHAZI YASSINE Logo" className="h-12 w-auto object-contain" />
            <div>
              <h1 className={`font-heading font-bold text-lg leading-tight ${isScrolled ? 'text-primary-dark' : 'text-white'}`}>
                {t('nav.doctor_name')}
              </h1>
              <p className={`text-xs tracking-wider ${isScrolled ? 'text-primary' : 'text-gray-200'}`}>
                {t('nav.doctor_title')}
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium hover:text-accent transition-colors ${
                      isScrolled ? 'text-slate' : 'text-gray-100'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 font-medium transition-colors ${
                isScrolled ? 'text-slate hover:text-accent' : 'text-gray-100 hover:text-white'
              }`}
            >
              <Globe size={18} />
              {i18n.language === 'fr' ? 'AR' : 'FR'}
            </button>

            <a
              href={`https://wa.me/33781861316?text=${whatsappMessage}`}
              target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 ${
                isScrolled
                  ? 'bg-accent text-white hover:bg-accent-hover'
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              <Calendar size={18} />
              {t('nav.appointment')}
            </a>
          </nav>

          {/* Mobile Menu Toggle & Lang Switcher */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`font-medium ${
                isScrolled ? 'text-anthracite' : 'text-white'
              }`}
            >
              {i18n.language === 'fr' ? 'AR' : 'FR'}
            </button>
            <button
              className="text-anthracite"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={28} className={isScrolled ? 'text-primary-dark' : 'text-white'} />
              ) : (
                <Menu size={28} className={isScrolled ? 'text-primary-dark' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
        >
          <ul className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-anthracite hover:text-secondary"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href={`https://wa.me/33781861316?text=${whatsappMessage}`}
                target="_blank" rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-accent text-white px-5 py-3 rounded-xl font-medium"
              >
                <Calendar size={20} />
                {t('nav.book_appointment')}
              </a>
              <a
                href="tel:+33781861316"
                className="flex items-center justify-center gap-2 bg-transparent text-primary-dark px-5 py-3 rounded-xl font-medium border border-gray-200"
              >
                <Phone size={20} />
                {t('nav.call_office')}
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
