import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Fancy Dog TX - Professional Dog Grooming Services in Texas</title>
        <meta name="description" content="Fancy Dog TX provides professional dog grooming services in Haslet, TX. Specializing in breed-specific haircuts, bathing, nail trimming, and more." />
        <meta name="keywords" content="dog grooming, Haslet TX, pet salon, dog haircuts, pet grooming" />
        <meta property="og:title" content="Fancy Dog TX - Professional Dog Grooming Services" />
        <meta property="og:description" content="Top-quality dog grooming services with personalized care in Haslet, TX." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fancydogtx.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
