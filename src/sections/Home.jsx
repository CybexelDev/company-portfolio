import React, { useEffect, useState } from 'react';
import Hero from './subSections/home/Hero';
import Footer from '../components/Footer';
import ImageSection from './subSections/home/ImageSection';
import ContactLink from './subSections/home/ContactLink';
import ScrollToTop from '../components/ScrollToTop';
import SecondTextSection from './subSections/home/SecondTextSection';
import WeDoSection from './subSections/home/WeDoSection';
import QuoteSect from './subSections/home/QuoteSect';
import { useScroll } from '../components/ScrollContext';

function Home() {
  const [bgChange, setBgChange] = useState(false);
  const {scrollY} = useScroll();
  // console.log("curent: ",{scrollY})

  useEffect(() => { 
      if (scrollY > 2514 && scrollY < 4160) {
        setBgChange(true);
      } else {
        setBgChange(false);
      } 
  },[scrollY]);

  return (
    <main id="home"
     className=  " bg-gradient-to-tr from-purple-100 via-yellow-50  to-pink-100">
      {/* Hero Section */}
        <ScrollToTop /> 
        <Hero />
        <QuoteSect />
        <ImageSection />
        <SecondTextSection />
        <WeDoSection />
        <Footer />

      
    </main>
  );
}

export default Home;
