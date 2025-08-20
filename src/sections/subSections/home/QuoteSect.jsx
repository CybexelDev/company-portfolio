import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import nmevideo from "../../../assets/videos/video5.mp4";

const QuoteSect = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animate section height from 35vh → 90vh (for large screens)
  const height = useTransform(scrollYProgress, [0, 1], [35, 90]);
  const animatedHeight = useTransform(height, (h) => `${h}vh`);

  return (
    <div className="md:h-[90vh] h-[50vh] relative text-black">
      <motion.div
        ref={sectionRef}
        style={{ height: animatedHeight }}
        transition={{ duration: 0.3, ease: "circIn" }}
        className="sticky top-20 z-10 rounded-xl overflow-hidden w-[95%] mx-auto flex items-center justify-center"
      >
        {/* Centered Video */}
        <div className="w-full md:w-[85%] h-full flex items-center justify-center">
          <video
            src={nmevideo}
            autoPlay
            loop
            muted
            playsInline
            className="
              w-full h-full rounded-xl shadow-lg
              md:object-fill object-contain
              aspect-[3/2] md:aspect-auto
            "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default QuoteSect;
