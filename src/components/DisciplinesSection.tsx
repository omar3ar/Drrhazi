import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Ear } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const DisciplinesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="disciplines" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-semibold tracking-wider text-sm uppercase mb-3">
            {t('disciplines.badge')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            {t('disciplines.title')}
          </h3>
          <p className="text-slate text-lg">
            {t('disciplines.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

          {/* Acupuncture Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] group hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] transition-shadow duration-300"
          >
            <div className="h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop"
                alt="Acupuncture Traditionnelle"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 rtl:right-6 rtl:left-auto left-6 z-20 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <Activity size={28} className="text-primary" />
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <h4 className="text-2xl font-bold text-primary-dark mb-4">{t('disciplines.acu_title')}</h4>
              <p className="text-slate mb-6 line-clamp-4">
                {t('disciplines.acu_desc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate">
                  <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  {t('disciplines.acu_li1')}
                </li>
                <li className="flex items-center gap-3 text-sm text-slate">
                  <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  {t('disciplines.acu_li2')}
                </li>
                <li className="flex items-center gap-3 text-sm text-slate">
                  <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                  {t('disciplines.acu_li3')}
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Auriculothérapie Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] group hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] transition-shadow duration-300"
          >
            <div className="h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src="/images/acu_proc_8_1787756453089.png"
                alt="Auriculothérapie"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 rtl:right-6 rtl:left-auto left-6 z-20 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <Ear size={28} className="text-secondary" />
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <h4 className="text-2xl font-bold text-primary-dark mb-4">{t('disciplines.auri_title')}</h4>
              <p className="text-slate mb-6 line-clamp-4">
                {t('disciplines.auri_desc')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate">
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  {t('disciplines.auri_li1')}
                </li>
                <li className="flex items-center gap-3 text-sm text-slate">
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  {t('disciplines.auri_li2')}
                </li>
                <li className="flex items-center gap-3 text-sm text-slate">
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  {t('disciplines.auri_li3')}
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
