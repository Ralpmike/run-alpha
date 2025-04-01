import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router"; // Updated import
import { navLinksItems } from "../data/data";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import Button from "./button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current route

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]); // Runs when route changes

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav className={`fixed z-49 w-full left-0 top-0 right-0 h-20 flex justify-between items-center px-8 gap-4 md:gap-12 py-0 lg:px-28 xl:px-36 ${scrolled ? "bg-white shadow-md py-14" : "bg-transparent"}`}>
      <div className="flex items-center">
        <NavLink to="/">
          <img 
            src="/logos/run-logo.svg" 
            className={`${!scrolled && 'mt-3'} w-20 md:w-25`} 
            alt="Logo" 
            style={{
              filter: scrolled ? 'invert(74%) sepia(59%) saturate(497%) hue-rotate(176deg) brightness(92%) contrast(100%)' : ''
            }}
          />
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <motion.div className="hidden md:flex gap-3 md:gap-6 lg:gap-8 xl:gap-16 grow md:justify-end items-center">
        {navLinksItems.map((link, index) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) => 
              classNames(`text-[1.14rem] font-quicksand transition ${scrolled ? isActive ? "text-secondary font-bold" : "text-alpha" : "text-white"}`)
            }
          >
            {link.name}
          </NavLink>
        ))}
      </motion.div>

      {/* Mobile Menu Button */}
      <button className={`md:hidden text-gray-600 ${isOpen ? "hidden" : ""}`} onClick={toggleMenu}>
        <FaBars size={30} className={`${scrolled ? 'text-alpha' : 'text-white'}`} />
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-[80%] sm:w-[70%] h-full bg-[url('/v1016-a-08.jpg')] bg-cover bg-right-top shadow-lg md:hidden flex items-start pt-32 flex-col space-y-8 p-6 z-50"
          >
            <button className="absolute top-4 right-4 text-gray-600" onClick={() => setIsOpen(false)}>
              <RxCross2 size={30} className="text-white" />
            </button>

            {navLinksItems.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[1.14rem] font-light text-alpha transition"
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
