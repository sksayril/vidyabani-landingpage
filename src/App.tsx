import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Features from './components/Features';
import About from './components/About';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Courses />
      <Features />
      <About />
      <Partners />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
