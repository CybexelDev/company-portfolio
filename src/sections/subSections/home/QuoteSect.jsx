import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import nmevideo from "../../../assets/videos/video5.mp4";
import { useScroll as ScrollHeight } from "../../../components/ScrollContext";

const QuoteSect = () => {
  const {scrollY} = ScrollHeight
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animate section height from 20vh to 75vh
  const height = useTransform(scrollYProgress, [0, 1], [20, 90]);
  const animatedHeight = useTransform(height, (h) => `${h}vh`);

  // Auto-slider for mobile
  const [slideIndex, setSlideIndex] = useState(0);
  const cardCount = 3;
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setSlideIndex((prev) => (prev + 1) % cardCount);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (cardContainerRef.current && window.innerWidth < 768) {
      const container = cardContainerRef.current;
      const cardWidth = container.scrollWidth / cardCount;
      container.scrollTo({
        left: slideIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [slideIndex]);

  return (
    <div className="h-[100vh]  relative text-black/50">
      <motion.div
        ref={sectionRef}
        style={{ height: animatedHeight }}
        transition={{ duration: 0.3, ease: "circIn" }}
        className="sticky top-25 z-10  rounded-xl overflow-hidden w-[95%] mx-auto"
      >
        <div className="flex flex-col md:flex-row pt- items-center justify-between h-full gap-6 px">
          {/* Left: Video */}
          <div className="w-full md:w-3/5 pt- h-full order-1">
            <div className="h-full rounded-xl overflow-hidden ">
              <video
                src={nmevideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div
            className="w-full md:w-2/5 order-2 text-center md:text-left space-y-3 mb-3"
            ref={cardContainerRef}
          >
            <h3 className="text-3xl md:text-4xl font-bold leading-snug">
              Powering Innovation<br />with Code & Creativity
            </h3>
            <p className=" text-md md:text-xl">
              From custom websites to smart marketing, we build scalable digital
              solutions that grow with your business.
            </p>
          </div>
        </div>
        
      </motion.div>
      
    </div>
  );
};

export default QuoteSect;
