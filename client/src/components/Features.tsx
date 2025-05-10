import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Medal, PawPrint } from 'lucide-react';

const features = [
  {
    icon: <Heart className="h-10 w-10" />,
    title: 'Personalized Care',
    description: 'Every dog receives individual attention and care tailored to their specific needs and temperament.'
  },
  {
    icon: <Medal className="h-10 w-10" />,
    title: 'Experienced Groomers',
    description: 'Our professional groomers have years of experience handling all dog breeds and temperaments.'
  },
  {
    icon: <PawPrint className="h-10 w-10" />,
    title: 'Quality Products',
    description: 'We use premium, pet-safe products to ensure your dog looks great and feels comfortable.'
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
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Choose <span className="text-secondary">Fancy</span>
            <span className="text-primary">Dog</span>
            <span className="text-accent">TX</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide top-quality grooming services with a focus on your pet's comfort and happiness.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-neutral p-6 rounded-lg text-center hover:shadow-lg transition-all transform hover:-translate-y-1"
              variants={item}
            >
              <div className="text-primary text-4xl mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
