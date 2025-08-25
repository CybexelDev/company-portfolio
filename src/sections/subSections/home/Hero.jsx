import { motion } from "framer-motion";
import home from "../../../assets/images/home/homeheronobg.png"

const Hero = () => {
  return (
    <section className="md:h-[95vh] h-auto flex flex-col md:flex-row items-center justify-between px-10 md:px-38 py-10 ">
      
      {/* Text Section */}
      <div className=" justify-center items-center md:items-start text-center md:text-left"
        >
        <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-7xl font-bold leading-tight"
>
  <span style={{
    textShadow: "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
  }}>
    Smart Tech
  </span>
  <br />
  <span style={{
    textShadow: "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
  }}>
    Smarter </span> <span className="text-[#691783]">Business.</span>

</motion.h1>

      </div>

      {/* Image Section */}
      <div className="flex-1/2 mt-8 md:mt-10 flex px-2  rounded-xl justify-center md:justify-end">
        <img
          src={ home }
          alt="Coding doll"
          className="w-100 h-90 md:w-100 md:h-100 rounded-2xl"
        /> 
      </div>
    </section>
  );
};

export default Hero;
