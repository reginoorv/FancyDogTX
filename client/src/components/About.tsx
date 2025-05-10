import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
  'Certified Groomers',
  'Pet-Friendly Environment',
  'Premium Products',
  'Stress-Free Experience'
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="About Fancy Dog TX" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              About <span className="text-secondary">Fancy</span>
              <span className="text-primary">Dog</span>
              <span className="text-accent">TX</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Fancy Dog TX has been providing exceptional grooming services to the Haslet community and surrounding areas. Our mission is to make every dog look and feel their best in a stress-free environment.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of certified professional groomers has over 15 years of combined experience working with all breeds and temperaments. We take pride in our attention to detail and the personalized care we provide to each furry client.
            </p>
            <p className="text-gray-600 mb-6">
              At Fancy Dog TX, we use only premium, pet-safe products and keep our facility impeccably clean. We believe in creating positive experiences for both pets and their owners.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Check className="text-secondary mr-2 h-5 w-5" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
