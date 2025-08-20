import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import mobilerotate from "../../../assets/videos/mobilerotating.mp4";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // 👇 This offset makes progress start as soon as container touches viewport
    // and end when container leaves completely
    offset: ["start start", "end end"],
  });

  /**
   * VIDEO WIDTH ANIMATION
   * - 0    → container bottom just touches viewport bottom → shrinked (60%)
   * - 0.25 → expanding as it comes in → 100%
   * - 0.75 → still in center → 100%
   * - 1    → leaving top → shrinked again (60%)
   */
  const videoWidth = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75, 1],
    ["85%", "100%", "100%", "85%"]
  );

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75, 1],
    ["2rem", "1rem", "1rem", "2rem"]
  );

  return (
    <section className="w-full md:px-12 px-5" ref={containerRef}>
      {/* Text Section */}
      <div className="md:h-[90vh] h-[50vh] flex items-center justify-center px-4 md:px-32 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-semibold leading-snug"
          >
            <span
              style={{
                textShadow:
                  "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              You dream it bold, we shape it bright — <br />
              From spark to story, from name to light. <br />
            </span>
            <span className="text-blue-600">All digital, all you.</span>
          </motion.h1>
        </div>
      </div>

      {/* Video Scroll Section */}
      <div className="relative h-[120vh] md:h-[180vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center z-20">
          <motion.div
            style={{
              width: videoWidth,
              borderRadius,
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            className="shadow-2xl w-full h-auto md:h-screen aspect-[9/16] md:aspect-auto"

          >
            <video
              src={mobilerotate}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
