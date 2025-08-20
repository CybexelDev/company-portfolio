import React from 'react'
import Footer from '../components/Footer';
import Hero from './subSections/work/Hero';
import ScrollToTop from '../components/ScrollToTop';
import CardGridWithModal from './subSections/work/CardGridWithModal';

function Work() {
  return (
    <div className='bg-gradient-to-t from-green-100 via-blue-200 to-blue-100 '>
      <ScrollToTop />
      <Hero />
      <CardGridWithModal />
      <Footer />

    </div>
  )
}

export default Work