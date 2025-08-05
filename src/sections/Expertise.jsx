import React from 'react';
import Footer from '../components/Footer';

import ScrollToTop from '../components/ScrollToTop';
import sections from '../assets/datas/secData'; // Your renamed file or location
import sectionItems from '../assets/datas/secItemsData';
import ExpertiseHero from './subSections/expertise/ExpertiseHero';

const Expertise = () => {
  return (
    <div className='bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 pt-8'>
      <ScrollToTop />
      <ExpertiseHero />
      <section className="w-full px-4 py-12">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-black/70 mb-10">
      EXPERTISE IN
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-16">
      {sections.map((section, index) => {
        const items = sectionItems.filter(item => item.sectionId === section.id);

        return (
          <div key={index} className="perspective">
            {/* Desktop / Large Screen → Flip Card */}
            <div className="hidden sm:block relative w-full min-h-[320px] transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden rounded-2xl">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Title only visible on desktop */}
                <h3 className="absolute bottom-5 left-5 text-xl font-semibold text-white bg-black/40 py-1 px-2 rounded-xl backdrop-blur-3xl">
                  {section.title}
                </h3>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-400  text-white font-bold rounded-2xl shadow-xl p-6 overflow-y-auto flex flex-col justify-center">
                <h4 className="text-xl font-extrabold mb-4 text-center ">
                 {section.title}
                </h4>
                <ul className="space-y-3">
                  {items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.href || "#"}
                        className="flex items-center gap-2 hover:font-bold hover:text-black hover:underline hover:scale-105 transition"
                      >
                        {item.icon &&
                          React.createElement(item.icon, {
                            className: "w-4 h-4",
                          })}
                        <span>
                          {item.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile / Small Screen → Stacked Card */}
            <div className="block sm:hidden space-y-4">
              {/* Front Side (only image, no text) */}
              <div className="w-full min-h-[220px] rounded-2xl overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Back Side (separate stacked card) */}
              <div className="w-full text-blue-600 font-bold rounded-2xl shadow-xl p-6 flex flex-col justify-center">
                <h4 className="text-lg font-extrabold mb-4 flex items-center gap-2">
                  {section.icon} {section.title}
                </h4>
                <ul className="space-y-3">
                  {items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.href || "#"}
                        className="flex items-center gap-2 hover:font-bold hover:text-black transition"
                      >
                        {item.icon &&
                          React.createElement(item.icon, {
                            className: "w-4 h-4",
                          })}
                        <span>
                          {item.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Expertise;
