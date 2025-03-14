import { useEffect, useState } from "react";
import { NavLink } from "react-router";// Updated import for react-router-dom
import { navLinksItems } from "../data/data";
import { FaBars,FaArrowUp  } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import classNames from "classnames";
import { motion, AnimatePresence, delay } from "framer-motion"; // Removed extra comma
import Logo from "./Logo";
import Button from "./button";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [isVisible, setIsVisible] = useState(false);

  // Variants for animation
  const menuVar = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 1, ease: "easeInOut" },
  };

 const linkVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        opacity: { duration: 0.6 },
        x: { type: "spring", stiffness: 100, damping: 25 },
        staggerChildren: index * 0.5,
        delay: index * 0.8,
      },
    }),
  };

  useEffect(() => {
 const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true); 
      } else {
        setScrolled(false);  
      }

      if (window.scrollY > 600) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  },[])

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  // Toggle menu state
  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <motion.nav
      className={`fixed z-50 left-0 top-0 right-0 w-full flex justify-between items-center px-4 gap-4 md:gap-12 py-0 lg:px-30 ${scrolled ? "bg-primary/60 shadow-md" : "bg-transparent"}`}
      // variants={{
      //   hidden: { opacity: 0, y: "-100%" },
      //   visible: menuVar,
      // }}
      // initial="hidden"
      // whileInView="visible"
    >
      {/* Logo */}
      <div className="flex items-center">
        <Logo />
      </div>

      {/* Desktop Navigation */}
          <motion.div
        className="hidden md:flex gap-3 md:gap-6 lg:gap-8 xl:gap-16 grow md:justify-end"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.5 } }, // Stagger children
        }}
      >
        {navLinksItems.map((link, index) => (
          <motion.div
            key={link.name}
            variants={linkVariants}
            custom={index}  // Pass the index to control stagger
          >
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) =>
              classNames("text-white font-light hover:text-secondary transition text-[1.14rem]", {
                "text-secondary font-normal": isActive,
                "text-secondary hover:text-white": scrolled,
              })
            }
          >
            {link.name}
          </NavLink>
          </motion.div>
        ))}
      </motion.div>

      {/* Get in Touch Button (Desktop) */}
      <div className="hidden md:block">
        <NavLink to="/getintouch">
          <Button title="Contact Us" type="button" />
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
            className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg md:hidden flex items-center pt-32 flex-col space-y-8 p-6 z-50"
          >
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <RxCross2 size={28} className="text-secondary" />
            </button>

            {/* Mobile Links */}
            {navLinksItems.map((link,index) => (
               <motion.div
                key={link.name}
                variants={linkVariants}
                custom={index}
                initial="hidden"
                animate="visible"  
              >
              <NavLink
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-teal-500 transition duration-300 text-xl"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
              </motion.div>
            ))}

            {/* Get in Touch Button (Mobile) */}
            <NavLink to="/getintouch">
              <Button title="Contact Us" type="button" />
            </NavLink>
          </motion.div>
        )}

          <div
      className={`fixed bottom-6 right-6 z-50 p-2 rounded-full bg-secondary text-white cursor-pointer transition-opacity duration-300 ${isVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={24} />
    </div>
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
