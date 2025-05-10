import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Scissors, Bath, Heart, Star, Leaf, Droplet } from 'lucide-react';

const services = [
  {
    image: 'https://images.pexels.com/photos/7210280/pexels-photo-7210280.jpeg?auto=compress&cs=tinysrgb&w=800&h=500',
    title: 'Mobile Grooming',
    description: 'Our fully equipped mobile grooming salon comes to your door for a stress-free experience.',
    price: 'Prices vary by breed',
    alt: 'Mobile Dog Grooming Van',
    icon: <Scissors className="h-6 w-6" />
  },
  {
    image: 'https://img-cdn.medkomtek.com/k7F4N2-in4q3hbRob_jSMrB6bT0=/690x387/smart/filters:quality(100):format(webp)/article/qKj_I1WnH0_PjmoyZQRTt/original/1673150337-Agar%20Anabul%20Bersih%20dan%20Sehat,%20Ini%20Cara%20Grooming%20Anjing.jpg',
    title: 'Full Grooming',
    description: 'Complete bath, breed-specific or custom haircut, ear cleaning, nail trimming, and styling.',
    price: 'Starting at $75',
    alt: 'Dog Getting Groomed',
    icon: <Bath className="h-6 w-6" />
  },
  {
    image: 'https://bottletreeanimalhospital.com/wp-content/uploads/2024/05/pet-nail-trimming.jpg',
    title: 'Nail Trimming',
    description: 'Quick and gentle nail trim to keep your dog comfortable and prevent health issues.',
    price: 'Starting at $20',
    alt: 'Dog Paw Getting Nail Trim',
    icon: <Droplet className="h-6 w-6" />
  },
  {
    image: 'https://images.pexels.com/photos/4587984/pexels-photo-4587984.jpeg?auto=compress&cs=tinysrgb&w=800&h=500',
    title: 'Teeth Brushing',
    description: 'Oral care to promote healthier teeth and gums and fresher breath for your pup.',
    price: 'Starting at $15',
    alt: 'Dog Teeth Cleaning',
    icon: <Heart className="h-6 w-6" />
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw0z2UItBGu5YpUHNahHzvocqKrtrXrEgSkg5rQcesFalYJ4AnZehjEHLs3mim6Rfdxc&usqp=CAU',
    title: 'De-shedding Treatment',
    description: 'Special treatment to remove loose undercoat and reduce shedding dramatically.',
    price: 'Starting at $30',
    alt: 'Dog Deshedding Treatment',
    icon: <Leaf className="h-6 w-6" />
  },
  {
    image: 'https://images.pexels.com/photos/5731861/pexels-photo-5731861.jpeg?auto=compress&cs=tinysrgb&w=800&h=500',
    title: 'Premium Pet Spa',
    description: 'Luxury treatment including aromatherapy, massage, premium shampoo, and paw moisturizing.',
    price: 'Starting at $90',
    alt: 'Dog Spa Treatment',
    icon: <Star className="h-6 w-6" />
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
    <section id="services" className="py-20 bg-neutral">
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
            PREMIUM CARE FOR YOUR PET
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Mobile Grooming Services
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We bring professional grooming directly to your doorstep with our state-of-the-art mobile salon, providing a stress-free experience for your pet.
          </motion.p>
        </motion.div>
        
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              variants={item}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 bg-secondary text-white p-2 rounded-full transform -translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-primary font-bold">{service.price}</p>
                  <motion.button 
                    className="text-secondary font-medium text-sm hover:underline"
                    whileHover={{ x: 5 }}
                    onClick={scrollToContact}
                  >
                    Book Now →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all"
            size="lg"
          >
            Schedule Your Mobile Grooming
          </Button>
          <p className="text-gray-500 mt-4 text-sm">We serve the entire Dallas-Fort Worth Metroplex</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
