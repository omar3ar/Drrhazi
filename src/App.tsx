import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DisciplinesSection from './components/DisciplinesSection';
import PathologiesTable from './components/PathologiesTable';
import ProcessSection from './components/ProcessSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-papier flex flex-col font-sans overflow-x-hidden w-full relative">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <DisciplinesSection />
        <PathologiesTable />
        <ProcessSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
