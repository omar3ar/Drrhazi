import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const intro = t('contact.whatsapp_intro');
    const nameStr = formData.name ? `\nNom / الاسم: ${formData.name}` : '';
    const phoneStr = formData.phone ? `\nTéléphone / الهاتف: ${formData.phone}` : '';
    const subjectStr = formData.subject ? `\nMotif / السبب: ${t(`contact.form_sub_${formData.subject}`)}` : '';
    const messageStr = formData.message ? `\nMessage / الرسالة: ${formData.message}` : '';
    
    const fullMessage = `${intro}${nameStr}${phoneStr}${subjectStr}${messageStr}`;
    
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/33781861316?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-bordeaux font-semibold tracking-wider text-sm uppercase mb-3">
            {t('contact.badge')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-bordeaux mb-6">
            {t('contact.title')}
          </h3>
          <p className="text-doux text-lg">
            {t('contact.desc')}
          </p>
        </div>

        {/* 4 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Appel Direct */}
          <div className="bg-blanc rounded-3xl p-8 border border-ligne shadow-xl shadow-gray-200/50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-rose/10 text-rose-titre flex items-center justify-center mb-6">
              <Phone size={32} />
            </div>
            <h4 className="text-xl font-bold text-bordeaux mb-2">{t('contact.ch1_title')}</h4>
            <p className="text-doux mb-6 flex-grow" dir="ltr">{t('contact.ch1_desc')}</p>
            <a href="tel:+33781861316" className="w-full py-3 px-4 rounded-xl bg-papier text-bordeaux font-medium hover:bg-bordeaux-fonce hover:text-blanc transition-colors">
              {t('contact.ch1_btn')}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-blanc rounded-3xl p-8 border border-ligne shadow-xl shadow-gray-200/50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center mb-6">
              <MessageCircle size={32} />
            </div>
            <h4 className="text-xl font-bold text-bordeaux mb-2">{t('contact.ch2_title')}</h4>
            <p className="text-doux mb-6 flex-grow">{t('contact.ch2_desc')}</p>
            <a href="https://wa.me/33781861316" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 rounded-xl bg-green-500 text-blanc font-medium hover:bg-green-600 transition-colors">
              {t('contact.ch2_btn')}
            </a>
          </div>

          {/* Email */}
          <div className="bg-blanc rounded-3xl p-8 border border-ligne shadow-xl shadow-gray-200/50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
              <Mail size={32} />
            </div>
            <h4 className="text-xl font-bold text-bordeaux mb-2">{t('contact.ch3_title')}</h4>
            <p className="text-doux mb-6 flex-grow">{t('contact.ch3_desc')}</p>
            <a href="mailto:info@cliniqueachark.ma" className="w-full py-3 px-4 rounded-xl bg-papier text-bordeaux font-medium hover:bg-bordeaux-fonce hover:text-blanc transition-colors">
              {t('contact.ch3_btn')}
            </a>
          </div>

          {/* Adresse */}
          <div className="bg-blanc rounded-3xl p-8 border border-ligne shadow-xl shadow-gray-200/50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
              <MapPin size={32} />
            </div>
            <h4 className="text-xl font-bold text-bordeaux mb-2">{t('contact.ch4_title')}</h4>
            <p className="text-doux mb-6 flex-grow" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>{t('contact.ch4_desc')}</p>
            <a href="https://maps.google.com/?q=6+Rue+Saad+Zaghloul,+Oujda+60000" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-4 rounded-xl bg-papier text-bordeaux font-medium hover:bg-bordeaux-fonce hover:text-blanc transition-colors">
              {t('contact.ch4_btn')}
            </a>
          </div>

        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto bg-blanc rounded-3xl shadow-xl overflow-hidden border border-ligne">
          <div className="p-10 md:p-12">
            <h4 className="text-2xl font-bold text-bordeaux mb-8 text-center">{t('contact.form_title')}</h4>
            
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-doux mb-2">{t('contact.form_name')}</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-ligne focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow"
                    placeholder={t('contact.form_name_ph')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-doux mb-2">{t('contact.form_phone')}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    dir="ltr"
                    style={{textAlign: i18n.language === 'ar' ? 'right' : 'left'}}
                    className="w-full px-4 py-3 rounded-xl border border-ligne focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow"
                    placeholder={t('contact.form_phone_ph')}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-doux mb-2">{t('contact.form_subject')}</label>
                <select 
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-xl border border-ligne focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow bg-blanc"
                >
                  <option value="">{t('contact.form_subject_ph')}</option>
                  <option value="douleur">{t('contact.form_sub_douleur')}</option>
                  <option value="stress">{t('contact.form_sub_stress')}</option>
                  <option value="addiction">{t('contact.form_sub_addiction')}</option>
                  <option value="autre">{t('contact.form_sub_autre')}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-doux mb-2">{t('contact.form_message')}</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-ligne focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-shadow resize-none"
                  placeholder={t('contact.form_message_ph')}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-bordeaux hover:bg-bordeaux-fonce text-blanc font-medium py-4 px-8 rounded-xl transition-colors shadow-lg shadow-primary/20"
              >
                <Send size={20} className="rtl:rotate-180" />
                {t('contact.form_submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
