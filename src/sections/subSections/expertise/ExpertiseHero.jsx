import { motion } from "framer-motion";
import { SendHorizonal } from 'lucide-react';
import React, { useState } from 'react';
import webd from "../../../assets/images/exper.webp";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const ExpertiseHero = () => {
  return (
    <section className="md:h-[70vh] h-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-10   ">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center pt-7 items-center md:items-start text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold    leading-tight"
        >
          We Build With <span className="text-[#0e70f8]">Code</span> <br /> 
          But Think In Dreams.
          
        </motion.h1>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-8 md:mt-14 flex justify-center md:justify-end">
       <img
       src={webd}
      className="w-100 h-100 md:w-100 md:h-100 object-contain rounded-full"
        />

      </div>
    </section>
  );
};

export default ExpertiseHero;
