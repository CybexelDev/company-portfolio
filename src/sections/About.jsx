import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AboutHero from './subSections/about/AboutHero';
import CustomersBoxList from './subSections/about/CustomersBoxList';
import AboutSecondText from './subSections/about/AboutSecondText';
import AboutThirdText from './subSections/about/AboutThirdText';
import TeamSection from './subSections/about/TeamSection';

function About() {
  

  return (
    // <main className="bg-gradient-to-l from-[#c5d8fc] via-[#e2d3fd] to-[#fce9ef] transition-colors duration-500">
    <main className="bg-gradient-to-br from-blue-200 to-sky-200">
      <div
        className=""
      >
        <ScrollToTop />
        <AboutHero />
        <AboutSecondText />
        <CustomersBoxList />
        <AboutThirdText />
        <TeamSection />
        <Footer />
      </div>
    </main>
  );
}

export default About;
