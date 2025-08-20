import React from "react";
import { Link } from "react-router-dom";
import { FaInstagramSquare, FaLinkedin, FaFacebookSquare, FaWhatsappSquare, FaUserAlt, FaLaptopCode } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoMdBuild } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { FaLocationPinLock } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-black/80 py-[clamp(2rem,5vw,4rem)] px-[clamp(1rem,5vw,5rem)] ">
      {/* Main Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-12">
        
        {/* Right Section (Company + Locations) */}
        <div className="flex-1   ">
          <h3 className="font-extrabold text-2xl mb-4 tracking-wide"
          style={{
              textShadow:
                "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 4px rgba(0,0,0,0.2)",
            }}>
            Cybexel <span className="text-blue-700">Technologies</span>
          </h3>
          <ul className="space-y-4 px-">
            <li>
              <a href="#"
                 className="flex items-center gap-2  hover:text-blue-700 transition-colors">
                <FaLocationPinLock /> Kochi
              </a>
            </li>
            <li>
              <a href="#"
                 className="flex items-center gap-2  hover:text-blue-700 transition-colors">
                <FaLocationPinLock /> Coimbatore
              </a>
            </li>
            <li>
              <a href="#"
                 className="flex items-center gap-2  hover:text-blue-700 transition-colors">
                <FaLocationPinLock /> Bangalore
              </a>
            </li>
          </ul>
        </div>

        {/* Left Section (Quick Links + Follow Us) */}
        <div className="flex-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
          
          {/* Quick Links */}
          <div className="">
            <h4 className="mb-3 text-lg font-semibold text-blue-700"
            style={{
              textShadow:
                "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 5px rgba(0,0,0,0.2)",
            }}>Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", to: "/", icon: <AiFillHome /> },
                { name: "Work", to: "/work", icon: <IoMdBuild /> },
                { name: "About", to: "/about", icon: <FaUserAlt /> },
                { name: "Expertise", to: "/expertise", icon: <FaLaptopCode /> },
                { name: "Contact", to: "/contact", icon: <MdContactMail /> },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2  hover:text-blue-700 transition-colors"
                  >
                    <span className="">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="">
            <h4 className="mb-3 text-lg font-semibold text-blue-700"
            style={{
              textShadow:
                "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 5px rgba(0,0,0,0.2)",
            }}>Follow Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.instagram.com/cybexel_pvtltd/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-black hover:text-pink-500 transition-colors">
                  <FaInstagramSquare className="text-xl" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://in.linkedin.com/company/cybexel"
                   target="_blank"
                   className="flex items-center gap-2 text-black hover:text-blue-700 transition-colors">
                  <FaLinkedin className="text-xl" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Cybexel.pvt.ltd/about/"
                   target="_blank"
                   className="flex items-center gap-2 text-black hover:text-blue-700 transition-colors">
                  <FaFacebookSquare className="text-xl" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://wa.me/919072919995"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-black hover:text-green-400 transition-colors">
                  <FaWhatsappSquare className="text-xl" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-400 font-bold">C</span>
        <span className="text-green-400 font-bold">yb</span>
        <span className="text-yellow-300 font-bold">e</span>
        <span className="text-yellow-400 font-bold">xe</span>
        <span className="text-red-400 font-bold">l</span>{" "}
        <span className="text-blue-400 font-bold">Technologies</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
