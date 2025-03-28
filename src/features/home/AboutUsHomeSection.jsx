import { Link } from "react-router"
import Button from "../../ui/button"
import { BsChevronRight } from "react-icons/bs"
import { motion } from "framer-motion"


function AboutUsHomeSection() {
  return (
    <div className="lg:px-48 h-full md:h-full px-6 text-alpha bg-cover bg-center md:py-32 py-12 w-full md:mb-0 lg:mb-0 max-w-screen">
     <div className="flex relative justify-between gap-6 lg:gap-0">
       <div className="flex flex-col items-start mb-16">
         <motion.h1
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: '50%', opacity: 0 },
         }}
      initial={{ y: '50%', opacity: 0 }}
      animate={{ y: '0', opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
      whileInView="visible"
      className="text-2xl md:text-6xl capitalize mb-8 font-quicksand font-medium md:max-w-6xl leading-snug">
        About <span className="text-[]">Us</span>
        {/* Run Alpha is a premier hedge fund firm headquartered in Nigeria, specializing in delivering<span className="text-[#ffca28]"> exceptional returns</span> for our investors through dynamic market <span className="text-[#ffca28]">strategies and data-driven</span> insights. */}
       
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
      className="lg:tracking-wider text-gray-600 font-quicksand lg:text-3xl md:text-2xl text-xl leading-8 lg:leading-9 w-full md:max-w-xl lg:max-w-3xl font-semibold">Our investment policy focuses on delivering sustainable, <span className="text-secondary">risk-adjusted returns</span> through <span className="text-secondary">data-driven strategies</span> and disciplined portfolio management.
      
      </motion.p>

      <p className="mt-12 max-w-3xl text-gray-500 font-quicksand text-lg">
        We are committed to providing our investors with the highest level of service and transparency, and we strive to build long-term relationships based on trust and mutual respect. Our team of experienced professionals is dedicated to delivering exceptional results for our clients, and we are constantly seeking new opportunities to enhance our investment strategies and drive growth.
    </p>
      </div>

       <div className="hidden md:grid grid-cols-5 h-[500px] w-[500px] gap-1 perspective-[1000px]">
        <motion.img
        src="/team/pexels-vanessa-loring-5082960.jpg"
        alt=""
        className="hidden h-full translate-y-4 md:block object-cover object-[4%] rounded-2xl shadow-2xl"
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
        className="hidden h-full translate-y-4 md:block object-cover object-[19%] rounded-2xl shadow-2xl"
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
        className="hidden h-full md:block object-cover object-[62%] rounded-2xl shadow-2xl"
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
        className="hidden h-full lg:block object-cover object-[79%] rounded-2xl translate-y-0 shadow-2xl"
        initial={{ scale: 0.8, y: 0 }}
        animate={{ scale: [0.8, 1.2, 1], y: [0, -20, 0] }}
        transition={{
          scale: { duration: 2, ease: 'easeInOut', loop: Infinity },
          y: { duration: 2, ease: 'easeInOut', loop: Infinity },
          delay: 0.5, // Adding delay for second image
        }}
      />
    </div>

     </div>

      <Link to="/aboutus">
          <Button title="Read More" type="button" size="large" className={`md:text-[1rem] font-lora`} icon={<BsChevronRight />} />
        </Link>
    </div>
  )
}

export default AboutUsHomeSection