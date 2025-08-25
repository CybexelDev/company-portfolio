import React from 'react';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ContactHero from '../sections/subSections/contact/ContactHero';
// import FindUsOffline from './subSections/contact/FindUsOffline';

function Contact() {
  return (
    <div className='bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200'>
    
      <ScrollToTop />
      <ContactHero />
      {/* <FindUsOffline /> */}
      <Footer />
    </div>
  )
}

export default Contact