import React from "react";
import { motion } from "framer-motion";

const AboutSecondText = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 ">
      {/* Text Section */}
      <div className="min-h-[70vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-bold leading-snug md:leading-tight text-center"
            style={{
              fontSize: "", // scales with screen size
              lineHeight: "1.4",
              textShadow:
                "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            These aren’t just clients — they are co-creators of every bold idea,
            every meaningful moment we’ve brought to life.
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default AboutSecondText;
