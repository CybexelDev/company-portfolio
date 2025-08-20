import { motion } from "framer-motion";
import img1 from "../../../assets/images/wedo.gif";
import img3 from "../../../assets/images/design.webp";
import img2 from "../../../assets/images/tech.gif";
import img4 from "../../../assets/images/categer.webp";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";



const WeDoSection = () => {
  return (
    <section className="w-screen flex flex-col mt-10 text-white ">
      {/* Top Heading */}
      <div className="h-[15vh] flex items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#2bc3f5] via-[#91d62c] to-[#fa9d21] text-transparent bg-clip-text"
        >We Expertise In</h2>
      </div>

      {/* Card Section */}
      <div className="flex flex-col justify-center">
        <div
          className="
            mx-[5vw] my-[2.5vh]
            grid gap-2
            grid-cols-1 auto-rows-auto
            md:grid-cols-4 md:grid-rows-4 md:h-[70vh]
          "
        >
          {/* First Section */}
          <div
            className="
              rounded-3xl overflow-hidden flex flex-col
              md:row-span-4 md:col-span-1
            "
          >
            <div className="h-1/2 w-full">
              <img src={img1} alt="Brand Identity" className="w-full object-fill h-full object-center" />
            </div>
            <div className="h-1/2 p-4 flex flex-col justify-center bg-[#2bc3f5]">
              <h3 className="text-2xl font-semibold mb-2"
              style={{
              textShadow: "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
            }}>Our Services</h3>
              <p className="text-xl opacity-80">
                We craft brands that stand out in the digital world.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div
            className="
              bg-[#91d62c] rounded-3xl overflow-hidden flex
              md:row-span-2 md:col-span-2
            "
          >
            <div className="w-1/2 h-full p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2"
              style={{
              textShadow: "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
            }}>Design & UX</h3>
              <p className="text-xl opacity-80">
                From idea to code, we build performant web experiences.
              </p>
            </div>
            <div className="w-1/2 h-full">
              <img src={img2} alt="Web Development" className="object-cover w-full h-full object-center" />
            </div>
          </div>

          {/* Third Section */}
          <div
            className="
              bg-[#fa9d21] rounded-3xl overflow-hidden flex
              md:row-span-2 md:row-start-3 md:col-start-2 md:col-span-2
            "
          >
            <div className="w-1/2 h-full">
              <img src={img3} alt="Digital Marketing" className="w-full h-full object-center object-cover" />
            </div>
            <div className="w-1/2 h-full p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2"    
              style={{
              textShadow: "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
            }}>Technology</h3>
              <p className="text-xl opacity-80">
                Grow with strategies tailored to your audience.
              </p>
            </div>
          </div>

          {/* Fourth Section */}
          <div
            className="
               bg-[#e3132c] rounded-3xl overflow-hidden flex flex-col
              md:row-span-4 md:col-span-1
            "
          >
            <div className="h-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2"
              style={{
              textShadow: "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
            }}>Category</h3>
              <p className="text-xl opacity-80">
                Interfaces that connect, inspire, and convert.
              </p>
            </div>
            <div className="h-1/2">
              <img src={img4} alt="UI/UX Design" className="w-full h-full object-center object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="h-[10vh] flex justify-center items-center">
        <Link to={"/expertise"} className="px-6 py-3 bg-black/80 flex rounded-3xl hover:bg-black hover:scale-105">
        <span className="bg-gradient-to-r from-[#2bc3f5] via-[#91d62c] to-[#fa9d21] text-transparent bg-clip-text font-extrabold">View More</span>
         <motion.span
        className="w-5 h-5 bg-transparent"
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaArrowRight className="w-5 h-5 text-[#fa9d21] pt-1" />
      </motion.span> 
        </Link>
      </div>
    </section>
  );
};

export default WeDoSection;
