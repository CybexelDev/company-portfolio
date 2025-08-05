import { motion } from "framer-motion";
import home from "../../../assets/images/home.webp"

const Hero = () => {
  return (
    <section className="md:h-[95vh] h-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-10 ">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Smart Tech <br />
          Smarter <span className="text-[#0e70f8]">Business.</span>
        </motion.h1>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-8 md:mt-0 flex  rounded-xl justify-center md:justify-end">
        <img
          src={ home }
          alt="Rocket Launch"
          className="w-90 h-90 md:w-100 md:h-100 rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
