import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Target, Clock, RefreshCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProcessSection: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <ClipboardList size={28} />,
      title: t('process.s1_title'),
      description: t('process.s1_desc'),
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: <Target size={28} />,
      title: t('process.s2_title'),
      description: t('process.s2_desc'),
      color: "bg-rose/10 text-rose-titre border-rose-titre/20"
    },
    {
      icon: <Clock size={28} />,
      title: t('process.s3_title'),
      description: t('process.s3_desc'),
      color: "bg-bordeaux/10 text-bordeaux border-bordeaux/20"
    },
    {
      icon: <RefreshCcw size={28} />,
      title: t('process.s4_title'),
      description: t('process.s4_desc'),
      color: "bg-accent/10 text-accent border-accent/20"
    }
  ];

  return (
    <section id="process" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-bordeaux font-semibold tracking-wider text-sm uppercase mb-3">
            {t('process.badge')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-bordeaux mb-6">
            {t('process.title')}
          </h3>
          <p className="text-doux text-lg">
            {t('process.desc')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-secondary/30 to-accent/30 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center border-4 mb-6 transition-transform duration-300 group-hover:scale-110 ${step.color} bg-blanc shadow-lg`}>
                  {step.icon}
                </div>
                <div className="bg-blanc p-6 rounded-2xl shadow-sm border border-ligne h-full w-full">
                  <div className="text-sm font-bold text-legende mb-2 font-serif">
                    {t('process.step_prefix')} 0{index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-bordeaux mb-3">
                    {step.title}
                  </h4>
                  <p className="text-doux text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-20 max-w-3xl mx-auto bg-blanc rounded-3xl p-8 shadow-sm border border-ligne text-center">
          <h4 className="text-xl font-bold text-bordeaux mb-4">{t('process.faq_title')}</h4>
          <p className="text-doux mb-6">
            {t('process.faq_desc')}
          </p>
          <div className="flex justify-center gap-2 text-rose-titre">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-rose opacity-50" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
