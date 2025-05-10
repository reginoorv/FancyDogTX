import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const services = [
  {
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500',
    title: 'Bath & Brush',
    description: 'Complete bath with premium shampoo, blow dry, brush out, ear cleaning, nail trim, and cologne.',
    price: 'Starting at $45',
    alt: 'Dog Bath Service'
  },
  {
    image: 'https://pixabay.com/get/gc948d608ac46b28fb770106b8a411defeed8041d226de9096e565a6125459fde088888350bfc32a22609b321e3c563d15cb471c424147c771c3d69c5ef753dc9_1280.jpg',
    title: 'Full Grooming',
    description: 'Complete bath, breed-specific or custom haircut, ear cleaning, nail trimming, and styling.',
    price: 'Starting at $65',
    alt: 'Full Groom Service'
  },
  {
    image: 'https://pixabay.com/get/g9d911e9b94a45d973719f5ad6c77cb74a3c7fa77cb02d18b8b0bb0d702ccae8462c9f0a8cda24614fa3bfd1ff50011fb30d1158fec11a9f575763124776a0729_1280.jpg',
    title: 'Nail Trimming',
    description: 'Professional nail trim and filing to maintain your dog\'s paw health and comfort.',
    price: 'Starting at $15',
    alt: 'Nail Trim Service'
  },
  {
    image: 'https://pixabay.com/get/g7f7dcf68bf0a3cfeab62ad865e82a867f919e6a93a0905227858ff5e648d560d309b95e83164bc32b79e00bcdb8b75b5093522b8a194286866632926e297a8a2_1280.jpg',
    title: 'Face Trim',
    description: 'Specialized trimming around the face to keep your dog\'s eyes clear and face neat.',
    price: 'Starting at $20',
    alt: 'Face Trim Service'
  },
  {
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500',
    title: 'De-shedding Treatment',
    description: 'Special treatment to remove loose undercoat and reduce shedding by up to 90%.',
    price: 'Starting at $30',
    alt: 'De-shedding Treatment'
  },
  {
    image: 'https://pixabay.com/get/gf7076bf1c4633008640ada487c7cf64112549d2c1fcc8fd3d5ec41a9a1ffadc0e322176e7be5bdca371ef87bd1da8f496f77d88ef128f6f08a7e111b16b6fb8c_1280.jpg',
    title: 'Deluxe Spa Package',
    description: 'Premium shampoo, conditioner, teeth brushing, paw treatment, and aromatherapy.',
    price: 'Starting at $75',
    alt: 'Spa Package'
  }
];

const Services: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 bg-neutral">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From baths to breed-specific haircuts, we offer a complete range of grooming services.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
              variants={item}
            >
              <img 
                src={service.image} 
                alt={service.alt} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <p className="text-primary font-bold">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full"
          >
            Book Your Appointment Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
