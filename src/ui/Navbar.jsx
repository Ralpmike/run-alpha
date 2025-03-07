import { useState } from "react";
import { NavLink } from "react-router"; // ✅ Fixed import
import { navLinksItems } from "../data/data";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Added animations
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed shadow-sm w-full flex justify-between items-center px-4 gap-4 md:gap-12 py-6 lg:px-30 bg-white/80">
      {/* Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-3 md:gap-6  grow md:justify-end">
        {navLinksItems.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) =>
              classNames("text-navcolor hover:text-secondary transition text-[1.25rem]", {
                "text-secondary font-normal": isActive,
              })
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Get in Touch Button (Desktop) */}
      <div className="hidden md:block">
        <NavLink to="/getintouch">
          <button className="bg-secondary text-white md:px-4 md:py-3 rounded-md hover:bg-secondary/90 cursor-pointer transition text-[20px]">
            Get in Touch
          </button>
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <RxCross2 size={28} className="text-secondary" /> : <FaBars size={28} className="text-secondary" />}
      </button>

      {/* Mobile Nav Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg md:hidden flex flex-col space-y-4 p-6 z-50"
          >
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <RxCross2 size={28} className="text-secondary" />
            </button>

            {/* Mobile Links */}
            {navLinksItems.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-teal-500 transition text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Get in Touch Button (Mobile) */}
            <NavLink to="/getintouch">
              <button className="bg-teal-500 text-white px-4 py-3 rounded-md hover:bg-teal-600 transition w-full">
                Get in Touch
              </button>
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
