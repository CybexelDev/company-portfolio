import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ExpertiseHero from "./subSections/expertise/ExpertiseHero";
import { fetchExpertise, fetchExpertiseDetail } from "../api/api";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MdOutlineAdsClick } from "react-icons/md";

// Static card background images
import wedo from "../assets/images/wedo.gif";
import tech from "../assets/images/design.webp";
import design from "../assets/images/tech.gif";
import categor from "../assets/images/categer.webp";

// Section labels matching Django model choices
const SECTION_LABELS = {
  whatwedo: "What We Do",
  design: "Design",
  technologies: "Technologies",
  category: "Category",
};

const SECTION_IMAGES = {
  whatwedo: wedo,
  design: design,
  technologies: tech,
  category: categor,
};
const SECTION_BG = {
  whatwedo: "#2bc3f5",
  design: "#91d62c",
  technologies: "#fa9d21",
  category: "#e3132c",
};

const Expertise = () => {
  const [expertiseItems, setExpertiseItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    fetchExpertise()
      .then((res) => setExpertiseItems(res.data))
      .catch((err) => console.error("Failed to load expertise:", err));
  }, []);

  const openItem = (id) => {
    fetchExpertiseDetail(id)
      .then((res) => setActiveItem(res.data))
      .catch((err) => console.error("Failed to load detail:", err));
  };

  const groupedSections = Object.keys(SECTION_LABELS).map((sectionKey) => ({
    key: sectionKey,
    title: SECTION_LABELS[sectionKey],
    items: expertiseItems.filter((item) => item.section === sectionKey).slice(0, 5),
    image: SECTION_IMAGES[sectionKey] || "",
  }));

  return (
    <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 pt-8">
      <ScrollToTop />
      <ExpertiseHero />

      <section className="w-full px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          
            EXPERTISE IN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-16">
            {groupedSections.map((section) => (
              <div key={section.key} className="perspective">
                {/* Desktop / Large Screen → Flip Card */}
                <div className="hidden sm:block relative w-full min-h-[320px] transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                  {/* Front Side */}
                  <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden">
  {section.image && (
    <img
      src={section.image}
      alt={section.title}
      className="w-full h-full object-cover rounded-2xl"
    />
  )}

  {/* Glass overlay */}
  <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop- opacity-100  transition duration-300">
    <span className="flex text-blue-700 text-lg font-semibold px-4 py-2 bg-white/90 rounded-xl shadow-lg">
      <span>More details</span>
      <motion.span
                                    className="w-5 h-5 flex py-"
                                    animate={{
                                      x: [0, 5, 0],
                                    }}
                                    transition={{
                                      duration: 1.2,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    <MdOutlineAdsClick className="w-8 h-8" />
                                  </motion.span>
    </span>
    
  </div>

  {/* Title at bottom */}
  <h3 className="absolute bottom-5 left-5 text-xl font-semibold text-white bg-black/40 py-1 px-2 rounded-xl">
    {section.title}
  </h3>
</div>


                  {/* Back Side */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180  text-white rounded-2xl p-6 overflow-y-auto flex flex-col justify-center"
                  style={{ backgroundColor: SECTION_BG[section.key] }}>
                    <h4 className="text-xl font-extrabold mb-4 text-center">{section.title}</h4>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => openItem(item.id)}
                            className="flex items-center gap-2 hover:font-bold hover:text-black hover:underline hover:scale-105 transition"
                          >
                            <span>{item.name}</span>
                            {/* Icon animation */}
                                  <motion.span
                                    className="w-5 h-5"
                                    animate={{
                                      x: [0, 5, 0],
                                    }}
                                    transition={{
                                      duration: 1.2,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    <MdOutlineAdsClick className="w-5 h-5" />
                                  </motion.span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mobile / Small Screen → Stacked Card */}
                <div className="block sm:hidden space-y-4">
                  {/* Image Card */}
                  <div className="w-full min-h-[220px] rounded-2xl overflow-hidden">
                    {section.image && (
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    )}
                  </div>

                  {/* Back Card */}
                  <div className="w-full  rounded-2xl shadow-xl p-6 flex flex-col text-white  justify-center"
                  style={{ backgroundColor: SECTION_BG[section.key] }}>
                    <h4 className="text-lg font-extrabold mb-4">{section.title}</h4>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => openItem(item.id)}
                            className="flex items-center gap-2  hover:font-bold hover:text-black transition"
                          >
                            <span >{item.name} </span>
                              <motion.span
        className="w-5 h-5"
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MdOutlineAdsClick className="w-5 h-5" />
      </motion.span>
            
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal with shutter effect */}
   <AnimatePresence>
  {activeItem && (
    <motion.div
      className="fixed inset-0 bg-gradient-to-r from-[#b5f7fd] via-black/10 to-[#c6f4d8] backdrop-blur-3xl flex items-center justify-center z-50 px-4"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className=" w-full h-full overflow-y-auto text-white relative">

        {/* Section 1: Sticky Top Buttons */}
        <div className="sticky top-0 left-0 right-0 flex justify-between items-center z-10 py-3 px-4 ">
          {/* Name Button */}
          <div className="bg-black px-4 py-2 rounded-full">
            <span className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent font-bold">
              {activeItem.name}
            </span>
          </div>
          {/* Close Button */}
          <button
            onClick={() => setActiveItem(null)}
            className="bg-black px-4 py-2 rounded-full hover:bg-white/50 hover:text-black  font-bold"
          >
            Close
          </button>
        </div>

        {/* Section 2: Large Image with Title + Description */}
        <section className="py-10 flex flex-col items-center text-center">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-6">{activeItem.title}</h1>
          {/* Image */}
          <img
            src={activeItem.image_l}
            alt={activeItem.title}
            className="rounded-2xl object-cover"
            style={{ width: "80vw", height: "90vh" }}
          />
          {/* Description */}
          <p className="mt-6 text-justify text-xl max-w-5xl"> {activeItem.description}</p>
        </section>

        {/* Section 3: Two Content Blocks (Image + Title + Description) */}
        <section className="py-10 max-w-6xl flex mx-auto px-10">
        {/* Wrapper for both blocks */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* Block 1 - Image 60% | Text 40% */}
          <div className="flex flex-col md:flex-row lg:w-1/2 h-full">
            {/* Image - 60% */}
            <div className="md:w-2/4 w-full">
              <img
                src={activeItem.image_p1}
                alt={activeItem.sub_title1}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            {/* Text - 40% */}
            <div className="md:w-2/4 w-full text-xl flex flex-col justify-center p-4">
              <h2 className="text-2xl font-semibold ">{activeItem.sub_title1}</h2>
              <p className="mt-2">{activeItem.sub_description1}</p>
            </div>
          </div>

          {/* Block 2 - Match height of Block 1 */}
          <div className="flex flex-col lg:w-1/2 ">
            {/* Image - takes top half */}
            <div className="flex-1">
              <img
                src={activeItem.image_p2}
                alt={activeItem.sub_title2}
                className="rounded-xl w-full  aspect-[7/4] object-cover"
              />
            </div>
            {/* Text - takes bottom half */}
            <div className="p-4 flex flex-col text-xl justify-center flex-1 ">
              <h2 className="text-2xl font-semibold ">{activeItem.sub_title2}</h2>
              <p className="mt-2">{activeItem.sub_description2}</p>
            </div>
          </div>

        </div>
      </section>


        {/* Section 4: CTA Button */}
        <section className="py-12 text-center">
          <Link to={"/contact"} className="px-6 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-white/70 hover:text-blue-500">
            Work With Us
          </Link>
        </section>
      </div>
    </motion.div>
  )}
</AnimatePresence>


    </div>
  );
};

export default Expertise;
