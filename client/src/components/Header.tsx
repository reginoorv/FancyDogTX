import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setLocation(`/#${sectionId}`, { replace: true });
  };
  
  return (
    <motion.header 
      className={`fixed w-full bg-white z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg' : 'py-4'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-accent">
            <a 
              href="#home" 
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              <span className="text-secondary">Fancy</span>
              <span className="text-primary">Dog</span>
              <span className="text-accent">TX</span>
            </a>
          </h1>
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-6 lg:space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {['home', 'services', 'about', 'gallery', 'contact'].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item}`}
              className="nav-link text-dark hover:text-primary transition-all capitalize text-sm lg:text-base font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.5, duration: 0.3 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.a 
            href="tel:+12145771010" 
            className="bg-secondary text-white px-5 py-2.5 rounded-full hover:bg-accent transition-all flex items-center shadow-md"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            <Phone className="h-4 w-4 mr-2" />
            <span>Call Now</span>
          </motion.a>
        </motion.nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden focus:outline-none z-50"
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden bg-white absolute w-full left-0 top-full shadow-xl z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="container mx-auto py-4 px-4 flex flex-col space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {['home', 'services', 'about', 'gallery', 'contact'].map((item, i) => (
                <motion.a 
                  key={item}
                  href={`#${item}`}
                  className="py-2 text-dark hover:text-primary transition-all capitalize font-medium border-b border-gray-100 pb-3"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a 
                href="tel:+12145771010" 
                className="bg-secondary text-white px-4 py-3 rounded-full hover:bg-accent transition-all inline-flex items-center justify-center text-center shadow-md mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>Call (214) 577-1010</span>
              </motion.a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
