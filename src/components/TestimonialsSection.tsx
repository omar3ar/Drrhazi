import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TestimonialsSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const testimonials = [
    {
      name: t('testimonials.t1_name'),
      treatment: t('testimonials.t1_treatment'),
      text: t('testimonials.t1_text'),
      rating: 5
    },
    {
      name: t('testimonials.t2_name'),
      treatment: t('testimonials.t2_treatment'),
      text: t('testimonials.t2_text'),
      rating: 5
    },
    {
      name: t('testimonials.t3_name'),
      treatment: t('testimonials.t3_treatment'),
      text: t('testimonials.t3_text'),
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const isRtl = i18n.language === 'ar';

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-full h-[400px] bg-primary/5 -translate-y-1/2 -skew-y-3 z-0" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/3">
            <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-3">
              {t('testimonials.badge')}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              {t('testimonials.title')}
            </h3>
            <p className="text-slate mb-8">
              {t('testimonials.desc')}
            </p>
            
            <div className="flex gap-4">
              <button 
                onClick={isRtl ? next : prev}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-slate hover:bg-primary hover:text-white hover:border-primary transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={24} className="rtl:rotate-180" />
              </button>
              <button 
                onClick={isRtl ? prev : next}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-slate hover:bg-primary hover:text-white hover:border-primary transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={24} className="rtl:rotate-180" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="relative">
              <Quote size={120} className="absolute -top-10 rtl:right-auto rtl:-right-10 left-auto -left-10 text-gray-100 z-0 rtl:scale-x-[-1]" />
              
              <div className="relative z-10 bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex gap-1 mb-6 text-accent">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-anthracite font-medium leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-primary-dark text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary-dark">
                      {testimonials[currentIndex].treatment}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
