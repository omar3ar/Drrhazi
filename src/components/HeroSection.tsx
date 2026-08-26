import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const whatsappMessage = encodeURIComponent(
    i18n.language === 'fr'
      ? "Bonjour, je souhaite prendre un rendez-vous au cabinet."
      : "مرحباً، أود حجز موعد في العيادة."
  );

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-primary-dark/60 mix-blend-multiply z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/images/gimini2.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-6 lg:px-8 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
            <Leaf size={16} className="text-secondary" />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title_start')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">{t('hero.title_highlight')}</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/33781861316?text=${whatsappMessage}`}
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-white font-medium text-lg hover:bg-accent-hover transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-accent/30"
            >
              {t('hero.cta_appointment')}
              <ArrowRight size={20} className="rtl:rotate-180" />
            </a>
            <a
              href="#pathologies"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-medium text-lg border border-white/30 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Activity size={20} />
              {t('hero.cta_treatments')}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#about" className="text-white/70 hover:text-white transition-colors flex flex-col items-center">
          <span className="text-xs tracking-widest uppercase mb-2">{t('hero.scroll_down')}</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
