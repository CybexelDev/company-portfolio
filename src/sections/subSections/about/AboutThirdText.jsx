import React from "react";
import { motion } from "framer-motion";

const AboutThirdText = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Text Section */}
      <div className="h-[80vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            style={{
              textShadow:
                "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-bold leading-snug md:leading-tight text-center
                       bg-gradient-to-r from-sky-900 to-emerald-900 text-transparent bg-clip-text
                       px-2 sm:px-4"
          >
            Behind every solution we deliver is a team driven by passion,
            guided by purpose, and united by a shared vision — your success.
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default AboutThirdText;
