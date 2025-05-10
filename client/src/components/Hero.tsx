import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
        backgroundImage: "url('https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=1770&h=900&dpr=1')" 
      }}
    >
      <div className="absolute inset-0 bg-dark bg-opacity-70"></div>
      <div className="container mx-auto h-full flex items-center relative z-10 px-4">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mobile Dog Grooming Services
          </motion.h1>
          <motion.p 
            className="text-xl text-white opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Premium mobile grooming in Dallas-Fort Worth. We come to you with our fully-equipped mobile salon for a stress-free experience your pet will love.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a 
              href="#services" 
              className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full transition-all text-center shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Services
            </motion.a>
            <motion.a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-full transition-all text-center shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              Book Today
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p className="mb-2 font-semibold">Discover More</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-6 w-6 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
