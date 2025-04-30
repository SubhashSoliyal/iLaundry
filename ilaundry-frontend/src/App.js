import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
