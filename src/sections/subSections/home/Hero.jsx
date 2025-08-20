import { motion } from "framer-motion";
import home from "../../../assets/images/3Isp.gif"
import HomeHeroImage from "../../../utils/HomeHeroImage";

const Hero = () => {
  return (
    <section className="md:h-[95vh] h-auto flex flex-col md:flex-row items-center justify-between px-10 md:px-28 py-10 ">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
          
        >
          <span style={{
              textShadow: "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
            }}>Smart Tech <br />
          Smarter</span> <span className="text-[#8936fa]">Business.</span>
        </motion.h1>
      </div>

      {/* Image Section */}
      <div className="flex-1/2 mt-8 md:mt-10 flex px-2  rounded-xl justify-center md:justify-end">
        {/* <img
          src={ home }
          alt="Coding doll"
          className="w-90 h-90 md:w-100 md:h-100 rounded-2xl"
        /> */}
        <HomeHeroImage />
      </div>
    </section>
  );
};

export default Hero;
