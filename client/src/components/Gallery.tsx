import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/5255555/pexels-photo-5255555.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
    alt: 'Groomed Bichon Frise',
    category: 'small'
  },
  {
    src: 'https://static.wixstatic.com/media/e8a043_75e58c7a6a8a48b88432be68bb8647d0~mv2.jpg/v1/fill/w_556,h_774,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e8a043_75e58c7a6a8a48b88432be68bb8647d0~mv2.jpg',
    alt: 'Styled Poodle',
    category: 'medium'
  },
  {
    src: 'https://images.pexels.com/photos/2523934/pexels-photo-2523934.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
    alt: 'Golden Retriever After Grooming',
    category: 'large'
  },
  {
    src: 'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
    alt: 'Mobile Grooming Unit',
    category: 'mobile'
  },
  {
    src: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
    alt: 'Styled Shih Tzu',
    category: 'small'
  },
  {
    src: 'https://images.pexels.com/photos/4588435/pexels-photo-4588435.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
    alt: 'Groomed Schnauzer with Bow',
    category: 'medium'
  },
  {
    src: 'https://i0.wp.com/www.rootfamilyreview.com/wp-content/uploads/2017/02/Summer-After-e1490664027233.jpg?fit=600%2C861&ssl=1',
    alt: 'Maltese Summer Cut',
    category: 'small'
  },
  {
    src: 'https://images.pexels.com/photos/3198032/pexels-photo-3198032.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
    alt: 'Dog Getting Bathed',
    category: 'bathing'
  },
  {
    src: 'https://images.pexels.com/photos/6131186/pexels-photo-6131186.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
    alt: 'Brushing Session',
    category: 'grooming'
  },
  {
    src: 'https://images.pexels.com/photos/7210280/pexels-photo-7210280.jpeg?auto=compress&cs=tinysrgb&w=500&h=500',
    alt: 'Mobile Grooming Van',
    category: 'mobile'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5zl4vC0DJXl-4OeKG8fZHX2ZXdO4lGToHg&s',
    alt: 'Poodle Getting Hair Cut',
    category: 'grooming'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWy6CvuWSoV1TCwEobQ9PKBY48bKWTGzV-vrP7EAYAFMZjoA_POzczhGLtplqg4N9yEUc&usqp=CAU',
    alt: 'Dog Getting Dried After Bath',
    category: 'bathing'
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  
  const filteredImages = category 
    ? galleryImages.filter(image => image.category === category) 
    : galleryImages;

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

  const categories = ['all', 'small', 'medium', 'large', 'mobile', 'bathing', 'grooming'];

  return (
    <section id="gallery" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
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
            OUR WORK
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pet Grooming Gallery
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            See the transformations and happy pets we've had the pleasure of grooming with our mobile salon.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                onClick={() => setCategory(cat === 'all' ? null : cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  (cat === 'all' && category === null) || category === cat
                    ? 'bg-secondary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div 
                key={image.src} 
                className="overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                variants={item}
                layout
                onClick={() => setSelectedImage(image.src)}
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                      <span className="text-secondary text-xs uppercase bg-white/80 px-2 py-1 rounded-full mt-2 inline-block">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Image Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <button 
                  className="absolute top-4 right-4 bg-white rounded-full p-2 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <X size={20} />
                </button>
                <img 
                  src={selectedImage} 
                  alt="Enlarged view" 
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
