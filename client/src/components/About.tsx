import React from 'react';
import { motion } from 'framer-motion';
import { Check, BadgeCheck, ShieldCheck, Clock, ThumbsUp, Award } from 'lucide-react';

const benefits = [
  {
    text: 'Certified Professional Groomers',
    icon: <BadgeCheck className="text-secondary h-5 w-5" />
  },
  {
    text: 'Stress-Free Mobile Experience',
    icon: <ShieldCheck className="text-secondary h-5 w-5" />
  },
  {
    text: 'Premium, Pet-Safe Products',
    icon: <Award className="text-secondary h-5 w-5" />
  },
  {
    text: 'Convenient, On-Time Service',
    icon: <Clock className="text-secondary h-5 w-5" />
  },
  {
    text: '100% Satisfaction Guarantee',
    icon: <ThumbsUp className="text-secondary h-5 w-5" />
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -left-4 -top-4 w-24 h-24 bg-secondary/20 rounded-lg z-0"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.div
                className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/20 rounded-lg z-0"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1583512603834-01a3c9660013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                  alt="Fancy Dog TX Mobile Grooming Van" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span 
              className="text-secondary font-medium mb-2 inline-block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              OUR STORY
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              About <span className="text-secondary">Fancy</span>
              <span className="text-primary">Dog</span>
              <span className="text-accent">TX</span>
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-4 text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Fancy Dog TX was founded with a simple mission: to provide exceptional mobile grooming services that prioritize your pet's comfort and well-being. We serve the Dallas-Fort Worth metroplex, bringing our fully-equipped salon directly to your doorstep.
            </motion.p>
            <motion.p 
              className="text-gray-700 mb-4 text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our team of certified professional groomers has over 15 years of combined experience working with all breeds and temperaments. We understand that each pet is unique, which is why we take the time to understand their specific needs and preferences.
            </motion.p>
            <motion.p 
              className="text-gray-700 mb-8 text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              What sets us apart is our commitment to a stress-free experience. Our mobile salon eliminates the anxiety many pets feel in traditional grooming environments, allowing them to be groomed in familiar surroundings with one-on-one attention.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center bg-neutral/60 p-3 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, backgroundColor: "rgba(244, 244, 245, 0.9)" }}
                >
                  {benefit.icon}
                  <span className="ml-2 font-medium text-sm">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
