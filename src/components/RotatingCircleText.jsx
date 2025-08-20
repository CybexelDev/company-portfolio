import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const RotatingCircleText = ({ text }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 20,
      },
    });
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-0"
      animate={controls}
    >
      <svg
        viewBox="0 0 300 300"
        className="w-[220px] h-[220px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="circlePath"
            d="M150,150 m-110,0 a110,110 0 1,1 220,0 a110,110 0 1,1 -220,0"
          />
        </defs>
        <text
          fill="#7a1fa2"
          fontSize="16"
          fontWeight="bold"
          letterSpacing="3px"
        >
          <textPath href="#circlePath" startOffset="0">
            {`${text.toUpperCase()} • `.repeat(10)}
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
};

export default RotatingCircleText;
