import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "My Shih Tzu Bella looks amazing after every visit to Fancy Dog TX! The groomers are patient with her and always give her the perfect cut. I wouldn't take her anywhere else!",
    author: "Sarah M.",
    rating: 5
  },
  {
    text: "Our Golden Retriever Max has anxiety around grooming, but the team at Fancy Dog TX is so gentle and patient with him. He's actually excited to go now, which says everything!",
    author: "Robert T.",
    rating: 5
  },
  {
    text: "I've been taking my Yorkie to Fancy Dog TX for over 3 years now. They always remember her preferences and give her the exact style I ask for. Great attention to detail!",
    author: "Jennifer K.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlePrev = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    resetTimeout();
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the happy pet parents who trust us with their furry family members.
          </p>
        </div>
        
        <div className="relative testimonial-slider max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="md:px-12"
              >
                <div className="bg-neutral p-6 md:p-8 rounded-lg shadow-md">
                  <div className="text-secondary text-2xl mb-4 flex justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.09.239-.71.157-1.243.252-1.6.283L4.868 10.9c1.257-.534 2.79-.82 4.6-.86 1.007-.03 1.945.17 2.814.6.87.43 1.543 1.026 2.02 1.79.478.767.716 1.61.716 2.53 0 .908-.17 1.747-.502 2.518-.332.772-.77 1.368-1.317 1.79-.545.42-1.34.629-2.39.629-1.156 0-2.031-.247-2.627-.74-.595-.494-.892-1.18-.892-2.06 0-.477.122-.904.366-1.28.246-.377.62-.686 1.127-.93.76-.38 1.58-.65 2.46-.81.38-.065.65-.116.795-.154zm6.695.194c0-.773-.207-1.458-.62-2.054-.414-.597-.94-.978-1.58-1.144a5.19 5.19 0 00-1.626-.139c-.592.032-1.19.117-1.793.26-.602.143-1.08.26-1.432.354l-.31-2.292c1.09-.363 2.383-.622 3.88-.777.413-.045 1.11-.03 2.095.044.984.073 1.86.566 2.628 1.48.768.913 1.152 1.98 1.152 3.204 0 1.202-.287 2.176-.86 2.922-.574.747-1.277 1.255-2.108 1.524-.83.27-1.83.404-2.998.404-1.506 0-2.675-.328-3.507-.984-.83-.657-1.247-1.595-1.247-2.814 0-.517.143-.984.427-1.402.285-.418.634-.733 1.046-.946.847-.426 1.766-.732 2.754-.918.377-.075.75-.14 1.116-.195z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg">
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="flex items-center">
                    <div className="text-yellow-400 mr-2 flex">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="fill-current" />
                      ))}
                    </div>
                    <p className="font-bold">- {testimonials[currentIndex].author}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center focus:outline-none"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-primary" />
          </button>
          <button 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center focus:outline-none"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-primary" />
          </button>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors duration-300 ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
