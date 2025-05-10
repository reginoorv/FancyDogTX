import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYelp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Heart, Scissors, PawPrint, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-accent mb-4">
              <span className="text-secondary">Fancy</span>
              <span>Dog</span>
              <span className="text-accent">TX</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Mobile dog grooming services directly to your doorstep, serving the entire Dallas-Fort Worth metroplex area.
            </p>
            <a 
              href="tel:+12145771010" 
              className="flex items-center text-gray-300 hover:text-secondary transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span>(214) 577-1010</span>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <Scissors className="mr-2 h-4 w-4 text-secondary" />
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {['home', 'services', 'about', 'gallery', 'contact'].map((item, i) => (
                <motion.a 
                  key={item}
                  href={`#${item}`}
                  className="text-gray-400 hover:text-secondary transition-all capitalize pl-2 border-l-2 border-transparent hover:border-secondary hover:pl-3"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  whileHover={{ x: 2 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <PawPrint className="mr-2 h-4 w-4 text-secondary" />
              Our Services
            </h4>
            <div className="flex flex-col space-y-2">
              {['Mobile Grooming', 'Full Grooming', 'Nail Trimming', 'De-shedding', 'Teeth Brushing', 'Premium Spa'].map((service, i) => (
                <motion.a 
                  key={service}
                  href="#services"
                  className="text-gray-400 hover:text-secondary transition-all pl-2 border-l-2 border-transparent hover:border-secondary hover:pl-3"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  whileHover={{ x: 2 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                >
                  {service}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4 flex items-center">
              <Heart className="mr-2 h-4 w-4 text-secondary" />
              Connect With Us
            </h4>
            <p className="text-gray-400 mb-4">
              Follow us on social media for grooming tips, cute photos, and special offers!
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-secondary text-white p-2 rounded-full transition-colors" 
                aria-label="Facebook"
                whileHover={{ y: -3 }}
              >
                <FaFacebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-secondary text-white p-2 rounded-full transition-colors" 
                aria-label="Instagram"
                whileHover={{ y: -3 }}
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-secondary text-white p-2 rounded-full transition-colors" 
                aria-label="TikTok"
                whileHover={{ y: -3 }}
              >
                <FaTiktok className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://yelp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-secondary text-white p-2 rounded-full transition-colors" 
                aria-label="Yelp"
                whileHover={{ y: -3 }}
              >
                <FaYelp className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Fancy Dog TX. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Terms of Service</a>
            <span className="text-gray-700">|</span>
            <a href="#contact" className="text-gray-400 hover:text-secondary transition-colors" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>Contact Us</a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-900 py-3">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          <p>Designed with <span className="text-secondary">♥</span> for dog lovers | Mobile Grooming Services in Dallas-Fort Worth</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
