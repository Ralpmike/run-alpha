import { useState } from "react";
import { NavLink } from "react-router";// Updated import for react-router-dom
import { navLinksItems } from "../data/data";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion"; // Removed extra comma
import Logo from "./Logo";
import Button from "./button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Variants for animation
  const menuVar = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 1, ease: "easeInOut" },
  };



  // Toggle menu state
  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <motion.nav
      className="fixed left-0 top-0 right-0 shadow-sm w-full flex justify-between items-center px-4 gap-4 md:gap-12 py-0 lg:px-30 bg-white/90"
      variants={{
        hidden: { opacity: 0, y: "-100%" },
        visible: menuVar,
      }}
      initial="hidden"
      whileInView="visible"
    >
      {/* Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <motion.div
        className="hidden md:flex gap-3 md:gap-6 grow md:justify-end"
      >
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
      </motion.div>

      {/* Get in Touch Button (Desktop) */}
      <div className="hidden md:block">
        <NavLink to="/getintouch">
          <Button title="Get in Touch" type="button" />
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600"
        onClick={toggleMenu}
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
              <Button title="Get in Touch" type="button" />
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
