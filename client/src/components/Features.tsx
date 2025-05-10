import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Medal, Truck, ShieldCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-10 w-10" />,
    title: 'Mobile Convenience',
    description: 'Our fully-equipped salon comes directly to your home, eliminating travel stress for your pet and saving you time.'
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: 'Stress-Free Environment',
    description: 'Pets are groomed in familiar surroundings with one-on-one attention, reducing anxiety and fear.'
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: 'Personalized Care',
    description: 'Every dog receives individual attention and specific care tailored to their breed, coat type, and temperament.'
  },
  {
    icon: <Medal className="h-10 w-10" />,
    title: 'Certified Professionals',
    description: 'Our experienced groomers have years of expertise with all breeds and specialized training in pet handling.'
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: 'Flexible Scheduling',
    description: 'Book appointments that fit your schedule, with extended hours and weekend availability for your convenience.'
  }
];

const Features: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="text-secondary font-medium mb-2 inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR ADVANTAGES
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Why Choose <span className="text-secondary">Fancy</span>
            <span className="text-primary">Dog</span>
            <span className="text-accent">TX</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Experience the difference with our premium mobile grooming service, 
            bringing professional care directly to your doorstep.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-neutral p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              variants={item}
            >
              <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-lg mb-6">
                <div className="text-primary">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-4 bg-primary/5 p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Ready to experience the Fancy Dog TX difference?
          </motion.h3>
          <motion.p 
            className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Book your mobile grooming appointment today and give your pet the stress-free grooming experience they deserve.
          </motion.p>
          <motion.button 
            onClick={scrollToContact}
            className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Book Your Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
