import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-accent mb-2">
              <span className="text-secondary">Fancy</span>
              <span>Dog</span>
              <span className="text-accent">TX</span>
            </h3>
            <p className="text-gray-400">
              Professional Dog Grooming Services
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
            {['home', 'services', 'about', 'gallery', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-white transition-all capitalize"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white text-xl" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl" aria-label="Yelp">
              <FaYelp />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Fancy Dog TX. All rights reserved.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-white">Privacy Policy</a> | 
            <a href="#" className="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
