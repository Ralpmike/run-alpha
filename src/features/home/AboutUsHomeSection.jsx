import { Link } from "react-router"
import Button from "../../ui/button"
import { BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"


function AboutUsHomeSection() {
  return (
    <div className="lg:px-73 h-[800px] px-8 bg-[url('/19449741.jpg')] bg-cover bg-center md:py-32 py-6 w-full mx-auto flex flex-col items-center justify-center md:mb-0 lg:mb-0">
      <motion.h1
      variants={
        {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
          transition: { duration: 1.7, delay: 0.4, ease: "easeInOut" },
        }  
      }
      initial="hidden"
      whileInView="visible"
      className="text-3xl uppercase mb-12 font-quicksand font-bold">Pioneering innovation</motion.h1>
      <motion.p
       variants={{
      visible: { x: 0, opacity: 1 },
      hidden: { x: '-100%', opacity: 0 },
  }}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: '0', opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
      whileInView="visible"
      className="tracking-wider text-gray-600 md:text-xl text-base md:leading-loose text-center">We are a forward-thinking hedge fund that combines traditional investment expertise with cutting-<br className="md:hidden"/>edge quantitative strategies to deliver exceptional returns. Our team brings decades of experience <br className="md:hidden"/>in global markets, leveraging deep financial knowledge alongside AI-driven models to identify high-<br className="md:hidden"/> value opportunities. With a disciplined approach to risk management and a commitment to long- <br className="md:hidden"/>term growth, we help investors navigate complex market conditions with confidence...</motion.p>

      <Link to="/aboutus">
          <Button title="ABOUT US" type="button" className="md:text-[1rem] mt-8 mx-auto" icon={<BsArrowRight />} />
        </Link>
    </div>
  )
}

export default AboutUsHomeSection