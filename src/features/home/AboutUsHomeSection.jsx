import { Link, useNavigate } from "react-router"
import Button from "../../ui/button"
import { BsChevronRight } from "react-icons/bs"
import { motion } from "framer-motion"


function AboutUsHomeSection() {
  const navigate = useNavigate();

    const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
    navigate("/aboutus"); // Navigates to the /aboutus route
  };
  return (
    <div className="lg:px-28 xl:px-36 h-full md:h-screen px-6 text-alpha md:py-32 py-12 w-full md:mb-0 lg:mb-0 max-w-screen bg-[url('/team/pexels-vanessa-loring-5082960.jpg')] bg-cover bg-right relative">
    <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-1"/>
     <div className="flex relative justify-between gap-6 lg:gap-8 z-10">
      <div className="flex flex-col items-start mb-16 xl:px-8">
         <motion.h1
          variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: '50%', opacity: 0 },
         }}
          initial={{ y: '50%', opacity: 0 }}
          animate={{ y: '0', opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
          whileInView="visible"
          className="text-4xl md:text-6xl xl:text-7xl capitalize mb-8 font-lora font-medium md:max-w-6xl text-white leading-snug">
          About <span className="text-[]">Us</span>  
        </motion.h1>
        <motion.p
          variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: '-100%', opacity: 0 },
           }}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '0', opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
          whileInView="visible"
          className="lg:tracking-wide text-white font-quicksand xl:text-5xl md:text-3xl text-xl leading-9 lg:leading-13 w-full md:max-w-xl lg:max-w-5xl font-semibold">Our investment policy focuses on delivering sustainable, <span className="text-secondary">risk-adjusted returns</span> through <span className="text-secondary">data-driven strategies</span> and disciplined portfolio management.
      
        </motion.p>

        <p className="mt-12 lg:max-w-lg xl:max-w-4xl max-w-xl text-white font-quicksand text-base lg:text-xl">
            We are committed to providing our investors with the highest level of service and transparency, and we strive to build long-term relationships based on trust and mutual respect. Our team of experienced professionals is dedicated to delivering exceptional results for our clients, and we are constantly seeking new opportunities to enhance our investment strategies and drive growth.
        </p>

        <div className="flex flex-col">
          <Button 
          onClick={handleScrollToTop} title="Read More" type="button" size="large" className={`md:text-[1rem] font-lora mt-16`} icon={<BsChevronRight />  
          } 
          />
        </div>
      </div>

       {/* <div className="hidden md:grid grid-cols-6 h-[500px] w-[500px] gap-1 perspective-[1000px] justify-items-end">
        <motion.img
        src="/team/pexels-vanessa-loring-5082960.jpg"
        alt=""
        className="hidden h-full translate-y-4 lg:block object-cover object-[14%] rounded-2xl shadow-2xl"
        initial={{ scale: 0.8, y: 0 }}
        animate={{ scale: [0.8, 1.2, 1], y: [0, -20, 0] }}
        transition={{
          scale: { duration: 2, ease: 'easeInOut', loop: Infinity },
          y: { duration: 2, ease: 'easeInOut', loop: Infinity },
        }}
      />
      <motion.img
        src="/team/pexels-vanessa-loring-5082960.jpg"
        alt=""
        className="hidden h-full translate-y-4 md:block object-cover object-[26%] rounded-2xl shadow-2xl"
        initial={{ scale: 0.8, y: 0 }}
        animate={{ scale: [0.8, 1.2, 1], y: [0, -20, 0] }}
        transition={{
          scale: { duration: 2, ease: 'easeInOut', loop: Infinity },
          y: { duration: 2, ease: 'easeInOut', loop: Infinity },
        }}
      />
      <motion.img
        src="/team/pexels-vanessa-loring-5082960.jpg"
        alt=""
        className="hidden h-full md:block object-cover object-[40%] rounded-2xl shadow-2xl"
        initial={{ scale: 0.8, y: 0 }}
        animate={{ scale: [0.8, 1.2, 1], y: [0, -20, 0] }}
        transition={{
          scale: { duration: 2, ease: 'easeInOut', loop: Infinity },
          y: { duration: 2, ease: 'easeInOut', loop: Infinity },
        }}
      />
      <motion.img
        src="/team/pexels-vanessa-loring-5082960.jpg"
        alt=""
        className="hidden h-full md:block object-cover object-[54%] rounded-2xl shadow-2xl"
        initial={{ scale: 0.8, y: 0 }}
        animate={{ scale: [0.8, 1.2, 1], y: [0, -20, 0] }}
        transition={{
          scale: { duration: 2, ease: 'easeInOut', loop: Infinity },
          y: { duration: 2, ease: 'easeInOut', loop: Infinity },
        }}
      />
      <motion.img
        src="/team/pexels-vanessa-loring-5082960.jpg"
        alt=""
        className="hidden h-full md:block object-cover object-[67%] rounded-2xl shadow-2xl"
        initial={{ scale: 0.8, y: 0 }}
        animate={{ scale: [0.8, 1.2, 1], y: [0, -20, 0] }}
        transition={{
          scale: { duration: 2, ease: 'easeInOut', loop: Infinity },
          y: { duration: 2, ease: 'easeInOut', loop: Infinity },
        }}
      />
      <motion.img
        src="/team/pexels-vanessa-loring-5082960.jpg"
        alt=""
        className="hidden h-full md:block object-cover object-[79%] rounded-2xl translate-y-0 shadow-2xl"
        initial={{ scale: 0.8, y: 0 }}
        animate={{ scale: [0.8, 1.2, 1], y: [0, -20, 0] }}
        transition={{
          scale: { duration: 2, ease: 'easeInOut', loop: Infinity },
          y: { duration: 2, ease: 'easeInOut', loop: Infinity },
          delay: 0.5, // Adding delay for second image
        }}
      />
      </div> */}
      </div>

    </div>
  )
}

export default AboutUsHomeSection