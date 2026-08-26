import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bone, Brain, HeartPulse, CigaretteOff, Apple } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Category = {
  id: string;
  icon: React.ReactNode;
};

const PathologiesTable: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('osteo');

  const categoryConfigs: Category[] = [
    { id: 'osteo', icon: <Bone size={20} /> },
    { id: 'neuro', icon: <Brain size={20} /> },
    { id: 'psycho', icon: <HeartPulse size={20} /> },
    { id: 'metabo', icon: <CigaretteOff size={20} /> },
    { id: 'digesto', icon: <Apple size={20} /> }
  ];

  const whatsappMessage = encodeURIComponent(
    i18n.language === 'fr'
      ? "Bonjour, je souhaite prendre un rendez-vous au cabinet."
      : "مرحباً، أود حجز موعد في العيادة."
  );

  return (
    <section id="pathologies" className="py-24 bg-blanc relative">
      {/* Background elements */}
      <div className="absolute top-0 rtl:left-0 rtl:right-auto right-0 w-[800px] h-[800px] bg-rose/5 rounded-full blur-3xl -translate-y-1/2 rtl:-translate-x-1/3 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-rose-titre font-semibold tracking-wider text-sm uppercase mb-3">
            {t('pathologies.badge')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-bordeaux mb-6">
            {t('pathologies.title')}
          </h3>
          <p className="text-doux text-lg">
            {t('pathologies.desc')}
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12">
          
          {/* Categories Sidebar */}
          <div className="w-full xl:w-1/3 flex flex-col gap-3">
            {categoryConfigs.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 rtl:text-right text-left ${
                  activeTab === category.id
                    ? 'bg-bordeaux text-blanc shadow-lg shadow-primary/30'
                    : 'bg-transparent text-doux hover:bg-sable hover:text-bordeaux'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                  activeTab === category.id ? 'bg-blanc/20 text-blanc' : 'bg-blanc text-bordeaux shadow-sm'
                }`}>
                  {category.icon}
                </div>
                <span className="font-semibold text-lg">{t(`pathologies.cats.${category.id}.label`)}</span>
              </button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="w-full xl:w-2/3">
            <div className="bg-transparent rounded-3xl p-8 md:p-10 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {categoryConfigs.map((category) => {
                    if (category.id !== activeTab) return null;
                    
                    const items = t(`pathologies.cats.${category.id}.items`, { returnObjects: true }) as { name: string; desc: string }[];

                    return (
                      <div key={`content-${category.id}`}>
                        <div className="flex items-center gap-4 mb-8 border-b border-ligne pb-6">
                          <div className="text-rose-titre">
                            {category.icon}
                          </div>
                          <h4 className="text-2xl md:text-3xl font-bold text-bordeaux">
                            {t(`pathologies.cats.${category.id}.label`)}
                          </h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {items.map((item, index) => (
                            <div 
                              key={index}
                              className="bg-blanc p-6 rounded-2xl shadow-sm border border-ligne hover:shadow-md transition-shadow"
                            >
                              <h5 className="font-bold text-bordeaux text-lg mb-2 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                {item.name}
                              </h5>
                              <p className="text-doux text-sm leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-10 p-6 bg-rose/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                          <p className="text-rose-titre-dark font-medium max-w-md">
                            {t('pathologies.cta_text')}
                          </p>
                          <a 
                            href={`https://wa.me/33781861316?text=${whatsappMessage}`}
                            target="_blank" rel="noopener noreferrer"
                            className="whitespace-nowrap px-6 py-3 bg-accent text-blanc rounded-full font-medium hover:bg-accent-hover transition-colors"
                          >
                            {t('pathologies.cta_btn')}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PathologiesTable;
