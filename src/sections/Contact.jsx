import React from 'react';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ContactHero from '../sections/subSections/contact/ContactHero';

function Contact() {
  return (
    <div className='bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100'>
    
      <ScrollToTop />
      <ContactHero />
      <Footer />
    </div>
  )
}

export default Contact