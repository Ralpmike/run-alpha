import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinksItems } from "../data/data";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import classNames from "classnames";
import { motion, AnimatePresence, } from "framer-motion";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

  const linkMobileVariants = {
    hidden: { x: "50vw", opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
    }),
    exit: { x: "50vw", opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  // Toggle menu state
  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <motion.nav
      className={`fixed z-49 w-full left-0 hover:cursor-none top-0 right-0 h-20 flex justify-between ease-in-out duration-500 items-center px-8 gap-4 md:gap-12 py-0 lg:px-28 xl:px-36 ${scrolled ? "bg-white shadow-md ease-in-out duration-500 py-14" : "bg-transparent"}`}
    >
      {/* Logo */}
      <div className="flex items-center">
       <NavLink to={'/'}>
        <img
            src="/logos/run-logo.svg"
            className={`${!scrolled && 'mt-3'} text-black w-20 md:w-25`}
            alt=""
            style={{
                filter: `${scrolled ? 'invert(74%) sepia(59%) saturate(497%) hue-rotate(176deg) brightness(92%) contrast(100%)' : ''}`
            }}
          />
       </NavLink>


      </div>

      {/* Desktop Navigation */}
      <motion.div
        className="hidden md:flex gap-3 md:gap-6 lg:gap-8 xl:gap-16 grow md:justify-end items-center "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.5 } }, // Stagger children
        }}
      >
        {navLinksItems.map((link, index) => (
          <motion.div
            key={link.id}
            variants={linkVariants}
            custom={index}  // Pass the index to control stagger
          >
             <NavLink
              key={link.name}
              to={link.href}
              style={{ position: 'relative', top: 0 }} // Added positioning to ensure it stays at the top
              className={({ isActive }) =>
                classNames(`font-quicksand hover:cursor-none hover:text-secondary transition text-[1.14rem] ${scrolled ? isActive ? "text-secondary font-bold" : "text-alpha" : ""}`, {
                  "text-secondary text-base font-bold": isActive,
                  "text-white": !isActive && !scrolled,
                  "text-alpha": scrolled,
                })
              }
            >
              {link.name}
            </NavLink>
          </motion.div>
        ))}
      </motion.div>

      {/* Get in Touch Button (Desktop) */}


      {/* Mobile Menu Button */}
      <button className={` md:hidden text-gray-600 ${isOpen ? "hidden" : ""}`} onClick={toggleMenu}>
        <FaBars size={30} className={`${scrolled ? 'text-alpha' : 'text-white'}`} />
      </button>

      {/* Mobile Nav Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-[80%] sm:w-[70%] h-full bg-[url('/v1016-a-08.jpg')] bg-cover bg-right-top shadow-lg md:hidden flex items-start pt-32 flex-col space-y-8 p-6 z-49"
          >
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <RxCross2 size={30} className={`${scrolled ? 'text-white' : 'text-alpha'}`} />
            </button>


            {/* Mobile Links */}
            {navLinksItems.map((link, index) => (
              <motion.div
                key={link.name}
                variants={linkMobileVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                className="flex justify-center w-full"
              >

                {<NavLink
                  // key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ position: 'relative', top: 0 }} // Added positioning to ensure it stays at the top
                  className={({ isActive }) =>
                    classNames(`font-light text-alpha transition text-[1.14rem]`, {
                      "text-secondary font-lora hover:cursor-none": isActive,
                    })
                  }
                >
                  {link.name}
                </NavLink>}

              </motion.div>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
