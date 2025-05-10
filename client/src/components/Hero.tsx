import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-20 md:pt-0 h-screen bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://pixabay.com/get/gcc70390d237718f8ac905d427546877b0f50faa357d16b5d20320f5dd665afadc93f898d56b04270d3c58cb55811ac7a80573b06893d65b7efc13f8470859ef2_1280.jpg')" 
      }}
    >
      <div className="absolute inset-0 bg-dark bg-opacity-60"></div>
      <div className="container mx-auto h-full flex items-center relative z-10">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
            Professional Dog Grooming Services
          </h1>
          <p className="text-xl text-white mb-8">
            Providing exceptional dog grooming services in Haslet, TX with personalized care for your furry friend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#services" 
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-full transition-all text-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.a>
            <motion.a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-full transition-all text-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="mb-2 font-semibold">Scroll Down</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
