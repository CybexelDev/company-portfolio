import { motion } from "framer-motion";
import work from "../../../assets/images/work/workhero.png"

const Hero = () => {
  return (
    <section className="md:h-[90vh] h-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-10 ">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
          
        >
          <span style={{
              textShadow: "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
            }}>Step Into  </span>
         <span className="text-[#4520e9]">Digital</span><span style={{
              textShadow: "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
            }}>World  We’ve Crafted.</span> 
          
        </motion.h1>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-8 md:mt-0 flex  justify-center md:justify-end">
        <img
          src={ work }
          alt="Rocket Launch"
          className="   "
        />
      </div>
    </section>
  );
};

export default Hero;
