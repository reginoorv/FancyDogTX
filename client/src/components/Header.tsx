import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
    <header className={`fixed w-full bg-white shadow-md z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
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
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'services', 'about', 'gallery', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              className="nav-link text-dark hover:text-primary transition-all capitalize"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
            >
              {item}
            </a>
          ))}
          <a 
            href="tel:+19725551234" 
            className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-accent transition-all"
          >
            <i className="fas fa-phone-alt mr-2"></i>Call Now
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <nav className={`md:hidden bg-white border-t border-gray-200 absolute w-full left-0 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto py-2 flex flex-col space-y-3">
          {['home', 'services', 'about', 'gallery', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              className="py-2 text-dark hover:text-primary transition-all capitalize"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
            >
              {item}
            </a>
          ))}
          <a 
            href="tel:+19725551234" 
            className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-accent transition-all inline-block text-center"
          >
            <i className="fas fa-phone-alt mr-2"></i>Call Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
