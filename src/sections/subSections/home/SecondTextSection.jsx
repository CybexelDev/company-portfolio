import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import mobilerotate from "../../../assets/videos/mobilerotating.mp4";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Width animation (80% to 100% to 80%)
  const videoWidth = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["80%", "100%", "100%", "80%"]
  );

  // Border radius animation
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["2rem", "0rem", "0rem", "2rem"]
  );

  return (
    <section className="w-full  md:px-12 px-5" ref={containerRef}>
      {/* Text Section */}
      <div className="md:h-[90vh] h-[70vh] flex items-center justify-center px-4 md:px-32 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-semibold leading-snug"
          >
            You dream it bold, we shape it bright — <br />
            From spark to story, from name to light. <br />
            <span className="text-blue-600">All digital, all you.</span>
          </motion.h1>
        </div>
      </div>

      {/* Video Scroll Section */}
      <div className="h-[180vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center z-20">
          <motion.div
            style={{
              width: videoWidth,
              height: "100vh",
              borderRadius,
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            className="shadow-2xl"
          >
            <video
              src={mobilerotate}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full rounded-3xl object-cover"
            />
          </motion.div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
