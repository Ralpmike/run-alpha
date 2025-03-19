import { useEffect, useState } from "react";
import { NavLink } from "react-router";// Updated import for react-router-dom
import { navLinksItems } from "../data/data";
import { FaBars, FaArrowUp } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import classNames from "classnames";
import { motion, AnimatePresence, } from "framer-motion";
import Logo from "./Logo";
import Button from "./button";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


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

      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

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
      className={`fixed z-12 left-0 top-0 right-0 w-full h-20 flex justify-between items-center px-4 gap-4 md:gap-12 py-0 lg:px-30 ${scrolled ? "bg-black/60 shadow-md" : "bg-transparent"}`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Logo />
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
            {link.name === "Contact Us" ? (
              <NavLink to="/contact">
                <Button title="CONTACT US" type="button" />
              </NavLink>
            ) : <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                classNames(`font-light hover:text-secondary transition text-[1.14rem] ${scrolled ? isActive ? "text-secondary " : "text-white" : ""}`, {
                  "text-secondary font-normal": isActive,
                  "text-white": !isActive && !scrolled,
                  "text-secondary": scrolled,
                })
              }
            >
              {link.name}
            </NavLink>}
          </motion.div>
        ))}
      </motion.div>

      {/* Get in Touch Button (Desktop) */}


      {/* Mobile Menu Button */}
      <button className={`md:hidden text-gray-600 ${isOpen ? "hidden" : ""}`} onClick={toggleMenu}>
        <FaBars size={28} className="text-secondary" />
      </button>

      {/* Mobile Nav Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-[60%] sm:w-[50%] h-full bg-white shadow-lg md:hidden flex items-start pt-32 flex-col space-y-8 p-6 z-50"
          >
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <RxCross2 size={28} className="text-secondary" />
            </button>

            {/* Mobile Links */}
            {navLinksItems.map((link, index) => (
              <motion.div
                key={link.name}
                variants={linkMobileVariants}
                custom={index}
                initial="hidden"
                animate="visible"
              >
                {link.name === "Contact Us" ? (
                  <NavLink to="/contact">
                    <Button title="Contact Us" type="button" />
                  </NavLink>
                ) : <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    classNames(`font-light hover:text-secondary transition text-[1.14rem]`, {
                      "text-secondary font-normal": isActive,
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

      <div
        className={`fixed bottom-6 right-6 z-50 p-2 rounded-full bg-secondary text-white cursor-pointer transition-opacity duration-300 ${isVisible ? 'opacity-100 animate-pulse' : 'opacity-0'}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={24} />
      </div>
    </motion.nav>
  );
};

export default Navbar;





















// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//       setIsVisible(window.scrollY > 600);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const linkMobileVariants = {
//     hidden: { x: "50vw", opacity: 0 },
//     visible: (index) => ({
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
//     }),
//     exit: { x: "50vw", opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
//   };

//   return (
//     <motion.nav
//       className={`fixed z-12 left-0 top-0 right-0 w-full h-20 flex justify-between items-center px-4 gap-4 md:gap-12 py-0 lg:px-30 ${
//         scrolled ? "bg-black/60 shadow-md" : "bg-transparent"
//       }`}
//     >
//       <Logo />

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex gap-6 lg:gap-8 xl:gap-16 grow justify-end items-center">
//         {navLinksItems.map((link) => (
//           <NavLink
//             key={link.name}
//             to={link.href}
//             className={({ isActive }) =>
//               classNames(
//                 "font-light hover:text-secondary transition text-[1.14rem]",
//                 {
//                   "text-secondary font-normal": isActive,
//                   "text-white": !isActive && !scrolled,
//                   "text-secondary": scrolled,
//                 }
//               )
//             }
//           >
//             {link.name}
//           </NavLink>
//         ))}
//       </div>

//       {/* Mobile Menu Button */}
//       <button className={`md:hidden text-gray-600 ${isOpen ? "hidden" : ""}`} onClick={toggleMenu}>
//         <FaBars size={28} className="text-secondary" />
//       </button>

//       {/* Mobile Nav Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "-100vw" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100vw" }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className="fixed top-0 left-0 w-[60%] sm:w-[50%] h-full bg-white shadow-lg flex flex-col items-left pt-16 gap-5 md:hidden z-40"
//           >
//             <button className="absolute top-4 right-4 text-gray-600" onClick={toggleMenu}>
//               <RxCross2 size={28} className="text-secondary" />
//             </button>

//             {navLinksItems.map((link, index) => (
//               <motion.div
//                 key={link.name}
//                 variants={linkMobileVariants}
//                 custom={index}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//               >
//                 <NavLink
//                   to={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className={({ isActive }) =>
//                     classNames("font-light hover:text-secondary transition text-[1.14rem]", {
//                       "text-secondary font-normal": isActive,
//                     })
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Scroll to Top Button */}
//       <div
//         className={`fixed bottom-6 right-6 z-50 p-2 rounded-full bg-secondary text-white cursor-pointer transition-opacity duration-300 ${
//           isVisible ? "opacity-100 animate-pulse" : "opacity-0"
//         }`}
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//       >
//         <FaArrowUp size={24} />
//       </div>
//     </motion.nav>
//   );
// };

