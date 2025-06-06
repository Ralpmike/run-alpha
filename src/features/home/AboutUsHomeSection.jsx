import { useNavigate } from "react-router"
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
    <div className="lg:px-28 md:px-16 xl:px-36 h-auto md:h-auto px-12 text-alpha md:py-32 py-12 w-full md:mb-0 lg:mb-0 max-w-screen bg-[url('/team/pexels-vanessa-loring-5082960.jpg')] bg-cover bg-center relative">
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
          className="text-4xl md:text-6xl xl:text-7xl capitalize mb-16 font-lora font-medium md:max-w-6xl text-white leading-snug">
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
          className="lg:tracking-wide text-white font-quicksand xl:text-5xl md:text-3xl text-xl leading-7 md:leading-9 lg:leading-11
          xl:leading-13 w-full md:max-w-xl lg:max-w-5xl font-semibold">Our investment policy focuses on delivering sustainable, <span className="text-secondary">risk-adjusted returns</span> through <span className="text-secondary">data-driven strategies</span> and disciplined portfolio management.
        </motion.p>

          <p className="mt-12 lg:max-w-2xl xl:max-w-4xl md:max-w-xl max-w-xl text-white font-quicksand text-base lg:text-xl">
            We are committed to providing our investors with the highest level of service and transparency, and we strive to build long-term relationships based on trust and mutual respect. Our team of experienced professionals is dedicated to delivering exceptional results for our clients, and we are constantly seeking new opportunities to enhance our investment strategies and drive growth.
          </p>

          <div className="flex flex-col py-12">
            <Button
              onClick={handleScrollToTop} title="Read More" type="button" size="large" className={`md:text-[1rem] font-lora`} icon={<BsChevronRight />
              }
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutUsHomeSection