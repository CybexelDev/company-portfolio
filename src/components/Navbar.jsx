import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Expertise", path: "/expertise" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const textShadowStyle = {
    textShadow: "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
  };

  return (
    <nav
      className="
        fixed z-50 bottom-4 md:top-6
        left-1/2 -translate-x-1/2
        w-[90%] md:w-auto
        pointer-events-none
      "
    >
      <div
        className="
          flex justify-between items-center
          gap-1 md:gap-3 px-2 md:px-4 py-1 md:py-2
          rounded-full backdrop-blur-md bg-white/30 shadow-xl
          pointer-events-auto overflow-hidden
        "
      >
        {navItems.map(({ name, path }) => {
          const isActive = location.pathname === path;
          const isHovered = hoveredItem === name;

          return (
            <Link key={name} to={path} className="flex-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onMouseEnter={() => setHoveredItem(name)}
                onMouseLeave={() => setHoveredItem(null)}
                style={isActive || isHovered ? textShadowStyle : {}}
                className={`
                  text-center font-semibold transition-colors duration-300 
                  px-2 py-1 md:px-4 md:py-2 rounded-full 
                  text-[10px] md:text-base
                  ${isActive
                    ? "bg-blue-900 text-white"
                    : "text-black/85 hover:bg-green-300/70"}
                `}
              >
                {name}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
