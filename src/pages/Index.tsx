
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <section id="hero" className="relative">
        <Hero scrollToSection={scrollToSection} />
      </section>

      <section id="about" className="relative">
        <About />
      </section>

      <section id="services" className="relative">
        <Services />
      </section>

      <section id="projects" className="relative">
        <Projects />
      </section>

      <section id="contact" className="relative">
        <Contact />
      </section>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => scrollToSection('hero')}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: activeSection !== 'hero' ? 1 : 0 }}
      >
        <ChevronDown className="w-5 h-5 rotate-180" />
      </motion.button>
    </div>
  );
};

export default Index;
