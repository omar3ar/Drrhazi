import React from 'react';
import { motion } from 'framer-motion';
import { Award, HeartPulse, Stethoscope } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Stethoscope className="text-secondary" size={32} />,
      title: t('about.features.f1_title'),
      description: t('about.features.f1_desc')
    },
    {
      icon: <HeartPulse className="text-secondary" size={32} />,
      title: t('about.features.f2_title'),
      description: t('about.features.f2_desc')
    },
    {
      icon: <Award className="text-secondary" size={32} />,
      title: t('about.features.f3_title'),
      description: t('about.features.f3_desc')
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image & Decoration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative rtl:order-2"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-secondary/10 rounded-3xl transform -rotate-6 scale-105 transition-transform duration-500 hover:rotate-0" />
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
                alt="Dr RHAZI YASSINE" 
                className="rounded-3xl object-cover w-full h-full shadow-2xl relative z-10"
              />
              {/* Badge */}
              <div className="absolute -bottom-6 rtl:left-6 rtl:right-auto -right-6 glass-card p-4 flex items-center gap-4 z-20 hidden md:flex">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <span className="font-bold font-heading">10+</span>
                </div>
                <div>
                  <p className="font-bold text-anthracite text-sm">{t('about.exp_years')}</p>
                  <p className="text-xs text-slate">{t('about.exp_text')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 rtl:order-1"
          >
            <h2 className="text-primary-dark font-semibold tracking-wider text-sm uppercase mb-3">
              {t('about.badge')}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              {t('about.name')}
            </h3>
            
            <div className="space-y-4 text-slate mb-10 text-lg">
              <p>
                <Trans i18nKey="about.p1" components={{ strong: <strong /> }} />
              </p>
              <p>
                {t('about.p2')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-anthracite">{feature.title}</h4>
                  <p className="text-sm text-slate">{feature.description}</p>
                </div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
