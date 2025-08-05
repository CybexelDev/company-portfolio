import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const AboutThirdText = () => {
  return (
    <section  className="w-full md:px-12 px-5">
      {/* Text Section */}
      <div className="md:h-[80vh] h-[50vh] flex items-center justify-center px-4 md:px-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-semibold leading-snug"
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
