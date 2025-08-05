import { motion } from "framer-motion";
import { SendHorizonal } from 'lucide-react';
import React, { useState } from 'react';
import ContactModal from './ContactModal'; 
import cont from "../../../assets/images/cont.webp"

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);  
  return (
    <section className="md:h-[90vh] h-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-10   ">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold  leading-tight"
        >
          Got an <span className="text-[#0e70f8]">idea?</span> <br /> Let’s turn that into something great
          
        </motion.h1>
       <motion.button
          href="#"
          whileHover={{
        scale: 1.05,
        x: 5,
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => setModalOpen(true)}
      className="inline-flex items-center gap-2 px-6 py-3 mt-5 md:ms-16 rounded-full  bg-[#2854cb]/80 hover:bg-[#2854cb] text-white text-lg font-medium group relative overflow-hidden"
    >
      Let's Talk
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
        <SendHorizonal className="w-5 h-5" />
      </motion.span>
    </motion.button>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-8 md:mt-0 flex justify-center md:justify-end">
        <img
          src={ cont }
          alt="Rocket Launch"
          className="w-100 h-100 md:w-80 md:h-80 object-contain"
        />
        <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      </div>
    </section>
  );
};

export default Hero;
