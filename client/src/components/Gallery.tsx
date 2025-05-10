import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1593620659530-7f98c53de278?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500',
    alt: 'Groomed Bichon Frise'
  },
  {
    src: 'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500',
    alt: 'Styled Poodle'
  },
  {
    src: 'https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500',
    alt: 'Clean Golden Retriever'
  },
  {
    src: 'https://pixabay.com/get/ge2b263210440bb5c405c6f945c261e5351bb84f21818e4b718939439db94be71804738726d42911ba5b09b3a280624bbbfa59b46abd9bf7cf931755afed7f6c1_1280.jpg',
    alt: 'Groomed Yorkshire Terrier'
  },
  {
    src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500',
    alt: 'Styled Shih Tzu'
  },
  {
    src: 'https://images.unsplash.com/photo-1537204696486-967f1b7198c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500',
    alt: 'Groomed Schnauzer'
  },
  {
    src: 'https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500',
    alt: 'Maltese Summer Cut'
  },
  {
    src: 'https://images.unsplash.com/photo-1605897472359-85e4b94d685d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500',
    alt: 'Clean Labrador'
  }
];

const Gallery: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="gallery" className="py-16 bg-neutral">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See our work and the happy pups we've had the pleasure of grooming.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
              variants={item}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transform hover:scale-105 transition-all"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
