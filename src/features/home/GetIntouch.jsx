import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router"

const GetIntouch = () => {
  
  return (
   <motion.div
      className="py-12 md:py-24 px-8 flex flex-col justify-center items-center text-alpha"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <Link to={'/contact'}>
      <motion.h2
        className="font-bold text-3xl flex justify-center items-center gap-4 md:gap-16 font-dm-serif mb-8 w-full group duration-300 ease-in-out"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
          Get In Touch <BsArrowRight className="group-hover:translate-x-8 duration-300 ease-in-out" size={44} />
        </motion.h2>
      </Link>

        <p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-quicksand text-center max-w-2xl text-base md:text-xl mb-8">
          Find out more about investment opportunities and how we can help you achieve your financial goals.
        </p>
        </motion.div>
  )
}
export default GetIntouch