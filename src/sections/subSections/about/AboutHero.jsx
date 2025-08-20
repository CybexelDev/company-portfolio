import { motion } from "framer-motion";
import work from "../../../assets/images/aboutimg.png";

const AboutHero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-12 gap-1">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-4xl md:text-7xl lg:text-7xl xl:text-7xl font-bold leading-snug md:leading-tight text-center"
        >
          <span
            style={{
              textShadow:
                "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            The future with
          </span>{" "}
          <span className="text-[#13d1df]">Cybexel</span>
          <span
            style={{
              textShadow:
                "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            {" "}
            —where vision meets velocity.
          </span>
        </motion.h1>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center md:justify-end w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] max-w-[900px] h-auto">
        <img
          src={work}
          alt="Rocket Launch"
          className=" object-contain"
        />
      </div>
    </section>
  );
};

export default AboutHero;
