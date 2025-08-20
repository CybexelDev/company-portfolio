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
          
          <span style={{
              textShadow: "0px 2px 4px rgba(0,0,0,0.3), 4px 4px 4px rgba(0,0,0,0.2)",
            }}>We Build <br/> With </span>
          <span className="text-blue-600">Code </span>
          <span style={{
              textShadow: "0px 2px 4px rgba(0,0,0,0.3), 4px 4px 4px rgba(0,0,0,0.2)",
            }}>But <br />Think In Dreams.</span>
          
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
