import React from "react";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare, FaHome } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoMdBuild } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-black py-10 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm md:text-base">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-blue-600 text-xl mb-4">
            Cybexel <span className="text-black/95">Technologies</span>
          </h3>
          <p>Your tech partner for digital growth.</p>
        </div>

        {/* Head Office Section */}
        <div>
          <h4 className="mb-3 text-blue-600 text-xl ">Head Office</h4>
          <div>
            <strong>
              <span className="text-blue-600">Cybexel</span>{" "}
              <span className="text-black">Kochi:</span>
            </strong>
            <br />
            <span className="text-sm">
              Alfa Horizon,
              <br/>
               Vallarpadam,
              <br />
              Kochi, Kerala 681021
            </span>
          </div>
        </div>

        {/* Bangalore + Coimbatore */}
        <div className="space-y-5">
          <h4 className="mb-3 text-blue-600 text-xl ">Branches</h4>
          <div>
            <strong>
              <span className="text-blue-600">Cybexel</span>{" "}
              <span className="text-black">Bangalore:</span>
            </strong>
            <br />
            <span className="text-sm">
              12/3b, Bangalore,
              <br />
               Karnataka 682021
            </span>
          </div>
          <div>
            <strong>
              <span className="text-blue-600">Cybexel</span>{" "}
              <span className="text-black">Coimbatore:</span>
            </strong>
            <br />
            <span className="text-sm">
              4th street, Tatabad, 
              <br/>
              Coimbatore, TN 641001
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-blue-600 text-xl ">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to={"/"} className="flex items-center gap-1.5"><span className="text-black/70"><AiFillHome/></span>Home</Link></li>
            <li><Link to={"/work"} className="flex items-center gap-1.5"><span className="text-black/70"><IoMdBuild/></span>Work</Link></li>
            <li><Link to={"/about"} className="flex items-center gap-1.5"><span className="text-black/70"><FaUserAlt/></span>About</Link></li>
            <li><Link to={"/expertise"} className="flex items-center gap-1.5"><span className="text-black/70"><FaLaptopCode/></span>Expertise</Link></li>
            <li><Link to={"/contact"} className="flex items-center gap-1.5 "><span className="text-black/70"><MdContactMail/></span>Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
  <h4 className="mb-3 text-blue-600 text-xl font-extrabold">Follow Us</h4>
  <ul className="space-y-2">
    <li>
      <a href="#" className="hover:underline flex items-center gap-2">
        <FaInstagramSquare className="text-xl text-[#f53474] " />
        Instagram
      </a>
    </li>
    <li>
      <a href="#" className="hover:underline flex items-center gap-2">
        <FaLinkedin className="text-xl text-blue-600" />
        LinkedIn
      </a>
    </li>
    <li>
      <a href="#" className="hover:underline flex items-center gap-2">
        <FaFacebookSquare className="text-xl text-blue-500" />
        Facebook
      </a>
    </li>
    <li>
      <a href="#" className="hover:underline flex items-center gap-2">
        <FaWhatsappSquare className="text-xl text-green-500" />
        WhatsApp
      </a>
    </li>
  </ul>
</div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs mt-8 border-t border-gray-300 pt-4 md:pb-0 pb-8">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-400">C</span>
        <span className="text-green-400">yb</span>
        <span className="text-yellow-300">e</span>
        <span className="text-yellow-400">xe</span>
        <span className="text-red-400">l</span>{" "}
        <span className="text-blue-400">Technologies</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
