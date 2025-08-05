import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Expertise", path: "/expertise" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

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
          return (
            <Link key={name} to={path} className="flex-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
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
