import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "I was so impressed with Fancy Dog TX's mobile grooming service! They came right to my doorstep, and my anxious Goldendoodle Bella had such a positive experience without the stress of traveling to a salon.",
    author: "Maria R.",
    location: "Dallas, TX",
    rating: 5,
    image: "https://images.unsplash.com/photo-1583512603806-077998240c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    text: "The convenience of having the groomer come to us is incredible. My senior Labrador Max gets anxious in traditional grooming environments, but with Fancy Dog TX, he stays calm and comfortable in familiar surroundings.",
    author: "Robert T.",
    location: "Fort Worth, TX",
    rating: 5,
    image: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    text: "I've tried several mobile groomers, but Fancy Dog TX stands out with their attention to detail and genuine care for pets. My Yorkshire Terrier Daisy looks absolutely stunning after every appointment. Their de-shedding treatment is a game-changer!",
    author: "Jennifer K.",
    location: "Arlington, TX",
    rating: 5,
    image: "https://images.unsplash.com/photo-1605496036883-20471d153ee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    text: "The groomers are so professional and knowledgeable. They took the time to understand my pup's specific needs and preferences. The convenience of their mobile service is unmatched, and the results are always fantastic!",
    author: "Carlos M.",
    location: "Irving, TX",
    rating: 5,
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 8000);
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    resetTimeout();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    resetTimeout();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    resetTimeout();
    setCurrentIndex(index);
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
            TESTIMONIALS
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hear from the happy pet parents who trust us with their furry family members
          </motion.p>
        </motion.div>
        
        <div className="relative testimonial-slider max-w-5xl mx-auto">
          <motion.div 
            className="overflow-hidden pb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="md:px-8"
              >
                <div className="bg-neutral p-8 md:p-10 rounded-xl shadow-xl relative">
                  <Quote className="absolute text-secondary/10 w-24 h-24 -top-6 -left-6" />
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                    <div className="md:w-1/4 flex flex-col items-center md:items-start">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={`Photo of ${testimonials[currentIndex].author}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                      <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
                      <div className="text-yellow-400 mt-2 flex">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="fill-current w-4 h-4" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed">
                        "{testimonials[currentIndex].text}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          <motion.button 
            className="absolute top-1/2 -left-3 md:-left-5 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center focus:outline-none z-10"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <ChevronLeft className="text-primary" />
          </motion.button>
          <motion.button 
            className="absolute top-1/2 -right-3 md:-right-5 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center focus:outline-none z-10"
            onClick={handleNext}
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <ChevronRight className="text-primary" />
          </motion.button>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <motion.button 
                key={index} 
                className={`w-3 h-3 rounded-full mx-2 focus:outline-none transition-colors duration-300 ${
                  index === currentIndex ? 'bg-secondary' : 'bg-gray-300'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.5 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1 }}
              ></motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
