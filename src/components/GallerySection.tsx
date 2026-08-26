import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const GallerySection: React.FC = () => {
  const { t } = useTranslation();
  const photos = [
    "/images/acu_proc_1_1787756373570.png",
    "/images/acu_proc_2_1787756386412.png",
    "/images/acu_proc_3_1787756398180.png",
    "/images/acu_proc_4_1787756409159.png",
    "/images/acu_proc_5_1787756420321.png",
    "/images/acu_proc_6_1787756430164.png",
    "/images/acu_proc_7_1787756441631.png",
    "/images/acu_proc_8_1787756453089.png",
    "/images/acu_proc_9_1787756462670.png",
    "/images/acu_proc_10_1787756473575.png",
    "/images/acu_proc_11_1787756494512.png",
    "/images/acu_proc_12_1787756507503.png",
    "/images/acu_proc_13_1787756520642.png",
    "/images/acu_proc_1_1787756373570.png",
    "/images/acu_proc_2_1787756386412.png",
    "/images/acu_proc_3_1787756398180.png",
    "/images/acu_proc_4_1787756409159.png",
    "/images/acu_proc_5_1787756420321.png",
    "/images/acu_proc_6_1787756430164.png",
    "/images/acu_proc_7_1787756441631.png"
  ];

  return (
    <section id="galerie" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-semibold tracking-wider text-sm uppercase mb-3">
            {t('gallery.badge')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            {t('gallery.title')}
          </h3>
          <p className="text-slate text-lg">
            {t('gallery.desc')}
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img 
                src={src} 
                alt={`Procédure d'acupuncture ${index + 1}`} 
                loading="lazy"
                className="w-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
